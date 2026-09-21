/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * [읽기 자료] 동화책 모달 시스템 (reader-modal.js)
 * 스토리북 뷰어 엔진, 네비게이션, 인라인 스타일 자동 주입 및 키보드 지원
 */

if (typeof getToolAsset === 'undefined') {
  function getToolAsset(filename) {
    const isSub = (typeof window !== 'undefined' && window.location && window.location.pathname) 
      ? (window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/'))
      : false;
    return (isSub ? '../' : '') + 'image/tools/' + filename;
  }
}

window.readerModalData = window.readerModalData || {};

let currentReaderModule = 'oled';
let currentReaderLesson = 4;
let currentReaderChapterIndex = 0;

function ensureReaderModalExists() {
  if (document.getElementById('reader-modal')) return;

  // 동적 전용 스타일 주입
  const styleEl = document.createElement('style');
  styleEl.id = 'reader-modal-styles';
  styleEl.textContent = `
    .reader-modal-backdrop {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.78);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 99999;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    .reader-modal-backdrop.open {
      display: flex;
      opacity: 1;
    }
    .reader-modal-container {
      background: #ffffff;
      border-radius: 18px;
      width: 100%;
      max-width: 1140px;
      height: 90vh;
      max-height: 740px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.45);
      border: 1px solid #cbd5e1;
      overflow: hidden;
      transform: scale(0.97);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reader-modal-backdrop.open .reader-modal-container {
      transform: scale(1);
    }
    .reader-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 1.6rem;
      background: #f8fafc;
      border-bottom: 1px solid #e2e8f0;
      gap: 1rem;
    }
    .reader-header-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .reader-badge-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: #0284c7;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
    }
    .reader-title-box h3 {
      font-size: 1.05rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      line-height: 1.3;
    }
    .reader-title-box p {
      font-size: 0.8rem;
      color: #64748b;
      margin: 0;
    }
    .reader-header-center {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .reader-dot {
      width: 10px;
      height: 10px;
      border-radius: 9999px;
      background: #cbd5e1;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .reader-dot.active {
      width: 28px;
      background: #0284c7;
    }
    .reader-header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .reader-modal-body {
      flex: 1;
      overflow-y: auto;
      padding: 2rem 2.2rem;
      box-sizing: border-box;
      background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    }
    .reader-book-grid {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 2.2rem;
      height: 100%;
      align-items: center;
    }
    .reader-text-pane {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
    .reader-chapter-tag {
      display: inline-block;
      padding: 0.3rem 0.85rem;
      border-radius: 9999px;
      background: #e0f2fe;
      color: #0369a1;
      font-size: 0.84rem;
      font-weight: 700;
      border: 1px solid #bae6fd;
      margin-bottom: 0.75rem;
      width: fit-content;
    }
    .reader-chapter-title {
      font-size: 1.65rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 0.85rem 0;
      letter-spacing: -0.5px;
      line-height: 1.35;
      word-break: keep-all;
    }
    .reader-lead-text {
      font-size: 1.02rem;
      font-weight: 600;
      color: #0369a1;
      line-height: 1.65;
      margin-bottom: 1rem;
      word-break: keep-all;
    }
    .reader-body-para {
      font-size: 0.96rem;
      color: #334155;
      line-height: 1.75;
      margin: 0 0 0.75rem 0;
      word-break: keep-all;
    }
    .reader-body-para strong {
      color: #0f172a;
      font-weight: 700;
    }
    .reader-callout-box {
      margin-top: 1rem;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-left: 4px solid #16a34a;
      border-radius: 8px;
      padding: 0.75rem 1rem;
    }
    .reader-callout-title {
      font-size: 0.86rem;
      font-weight: 800;
      color: #15803d;
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .reader-callout-text {
      font-size: 0.88rem;
      color: #166534;
      font-weight: 600;
      line-height: 1.5;
      margin: 0;
    }
    .reader-img-pane {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .reader-img-wrapper {
      width: 100%;
      aspect-ratio: 16/10;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 12px 30px -8px rgba(15, 23, 42, 0.25);
      border: 1px solid #cbd5e1;
      background: #0f172a;
      position: relative;
    }
    .reader-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }
    .reader-img-wrapper:hover img {
      transform: scale(1.02);
    }
    .reader-img-caption {
      margin-top: 0.75rem;
      font-size: 0.82rem;
      color: #64748b;
      text-align: center;
      font-weight: 500;
    }
    .reader-modal-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.85rem 1.8rem;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
    }
    .reader-nav-btns {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .reader-page-indicator {
      font-size: 0.9rem;
      font-weight: 700;
      color: #475569;
    }
    @media (max-width: 860px) {
      .reader-book-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        height: auto;
      }
      .reader-modal-container {
        height: 95vh;
        max-height: none;
      }
    }
  `;
  document.head.appendChild(styleEl);

  const modalHtml = `
    <div id="reader-modal" class="reader-modal-backdrop" onclick="handleReaderBackdropClick(event)">
      <div class="reader-modal-container" id="reader-modal-container" onclick="event.stopPropagation()">
        
        <!-- Header -->
        <div class="reader-modal-header">
          <div class="reader-header-left">
            <div class="reader-badge-icon">
              <i data-lucide="book-open"></i>
            </div>
            <div class="reader-title-box">
              <h3 id="reader-header-title">스마트폰 속 75% 배터리 도둑을 잡아라!</h3>
              <p id="reader-header-sub">KAIST 핫 엑시톤 기술과 분자 진동수 재설계 이야기</p>
            </div>
          </div>

          <!-- Chapter Indicator Dots -->
          <div class="reader-header-center" id="reader-dots-container">
            <!-- Rendered by JS -->
          </div>

          <div class="reader-header-actions">
            <button type="button" class="topbar-btn" onclick="toggleReaderFullscreen()" title="전체화면 모드">
              <i data-lucide="maximize-2"></i> <span>전체화면</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closeReaderModal()" title="닫기 (ESC)">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <!-- Body Screen -->
        <div class="reader-modal-body" id="reader-modal-body">
          <!-- Rendered chapter content goes here -->
        </div>

        <!-- Footer -->
        <div class="reader-modal-footer">
          <span id="reader-page-indicator" class="reader-page-indicator">제 1 장 / 총 4 장</span>
          <div class="reader-nav-btns">
            <button type="button" id="reader-btn-prev" class="topbar-btn" onclick="changeReaderChapter(-1)">
              <i data-lucide="arrow-left"></i> <span>이전 장</span>
            </button>
            <button type="button" id="reader-btn-next" class="topbar-btn primary" onclick="changeReaderChapter(1)">
              <span>다음 장</span> <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('reader-modal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      changeReaderChapter(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      changeReaderChapter(-1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeReaderModal();
    }
  });
}

function openReaderModal(moduleType, lessonNum) {
  ensureReaderModalExists();
  currentReaderModule = moduleType || 'oled';
  currentReaderLesson = lessonNum || 4;
  currentReaderChapterIndex = 0;

  const data = window.readerModalData && window.readerModalData[currentReaderModule] && window.readerModalData[currentReaderModule][currentReaderLesson];
  if (!data) {
    console.warn('Reader data not found for', currentReaderModule, currentReaderLesson);
    return;
  }

  // Set titles
  const headerTitle = document.getElementById('reader-header-title');
  const headerSub = document.getElementById('reader-header-sub');
  if (headerTitle) headerTitle.innerText = data.title;
  if (headerSub) headerSub.innerText = data.subtitle;

  // Render Dots
  const dotsCont = document.getElementById('reader-dots-container');
  if (dotsCont) {
    dotsCont.innerHTML = data.chapters.map((_, i) => 
      `<div class="reader-dot ${i === 0 ? 'active' : ''}" onclick="goToReaderChapter(${i})" title="제${i+1}장"></div>`
    ).join('');
  }

  renderCurrentReaderChapter();

  const modal = document.getElementById('reader-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function closeReaderModal() {
  const modal = document.getElementById('reader-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
}

function handleReaderBackdropClick(event) {
  if (event.target && event.target.id === 'reader-modal') {
    closeReaderModal();
  }
}

function renderCurrentReaderChapter() {
  const data = window.readerModalData && window.readerModalData[currentReaderModule] && window.readerModalData[currentReaderModule][currentReaderLesson];
  if (!data || !data.chapters || !data.chapters[currentReaderChapterIndex]) return;

  const ch = data.chapters[currentReaderChapterIndex];
  const total = data.chapters.length;

  const bodyEl = document.getElementById('reader-modal-body');
  if (bodyEl) {
    const parasHtml = ch.paragraphs.map(p => `<p class="reader-body-para">${p}</p>`).join('');
    const calloutHtml = ch.callout ? `
      <div class="reader-callout-box">
        <div class="reader-callout-title">
          <i data-lucide="${ch.callout.icon || 'lightbulb'}"></i>
          <span>${ch.callout.title}</span>
        </div>
        <p class="reader-callout-text">${ch.callout.text}</p>
      </div>
    ` : '';

    bodyEl.innerHTML = `
      <div class="reader-book-grid">
        <!-- Text Pane -->
        <div class="reader-text-pane">
          <span class="reader-chapter-tag">${ch.tag}</span>
          <h2 class="reader-chapter-title">${ch.title}</h2>
          <div class="reader-lead-text">${ch.lead}</div>
          ${parasHtml}
          ${calloutHtml}
        </div>

        <!-- Image Pane -->
        <div class="reader-img-pane">
          <div class="reader-img-wrapper">
            <img src="${getToolAsset(ch.image)}" alt="${ch.title}">
          </div>
          <p class="reader-img-caption"><i data-lucide="image" style="width:14px; height:14px; vertical-align:middle; margin-right:4px;"></i>${ch.imageCaption}</p>
        </div>
      </div>
    `;
  }

  // Update dots
  const dots = document.querySelectorAll('.reader-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentReaderChapterIndex);
  });

  // Update counter
  const counterEl = document.getElementById('reader-page-indicator');
  if (counterEl) {
    counterEl.innerText = `제 ${currentReaderChapterIndex + 1} 장 / 총 ${total} 장`;
  }

  // Update Buttons
  const btnPrev = document.getElementById('reader-btn-prev');
  const btnNext = document.getElementById('reader-btn-next');
  if (btnPrev) {
    btnPrev.disabled = (currentReaderChapterIndex === 0);
    btnPrev.style.opacity = (currentReaderChapterIndex === 0) ? '0.4' : '1';
  }
  if (btnNext) {
    btnNext.disabled = (currentReaderChapterIndex === total - 1);
    btnNext.style.opacity = (currentReaderChapterIndex === total - 1) ? '0.4' : '1';
  }

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function changeReaderChapter(dir) {
  const data = window.readerModalData && window.readerModalData[currentReaderModule] && window.readerModalData[currentReaderModule][currentReaderLesson];
  if (!data) return;

  const target = currentReaderChapterIndex + dir;
  if (target >= 0 && target < data.chapters.length) {
    currentReaderChapterIndex = target;
    renderCurrentReaderChapter();
  }
}

function goToReaderChapter(index) {
  const data = window.readerModalData && window.readerModalData[currentReaderModule] && window.readerModalData[currentReaderModule][currentReaderLesson];
  if (!data) return;

  if (index >= 0 && index < data.chapters.length) {
    currentReaderChapterIndex = index;
    renderCurrentReaderChapter();
  }
}

function toggleReaderFullscreen() {
  const container = document.getElementById('reader-modal-container');
  if (!container) return;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen().catch(() => {});
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
