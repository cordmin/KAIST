/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * [읽기 자료] 동화책 모달 시스템 (reader-modal.js)
 * 불필요한 장식(태그 뱃지, 콜아웃 박스, 이미지 캡션, 카운터, 서브타이틀, 아이콘)을 완전 배제한 미니멀 스토리북 뷰어
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
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      z-index: 99999;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .reader-modal-backdrop.open {
      display: flex;
      opacity: 1;
    }
    .reader-modal-container {
      background: #ffffff;
      border-radius: 16px;
      width: 100%;
      max-width: 1100px;
      height: 88vh;
      max-height: 720px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
      border: 1px solid #cbd5e1;
      overflow: hidden;
      transform: scale(0.98);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reader-modal-backdrop.open .reader-modal-container {
      transform: scale(1);
    }
    .reader-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.9rem 1.6rem;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
    }
    .reader-title-box h3 {
      font-size: 1.1rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      letter-spacing: -0.3px;
    }
    .reader-header-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .reader-modal-body {
      flex: 1;
      overflow-y: auto;
      padding: 2.2rem 2.6rem;
      box-sizing: border-box;
      background: #ffffff;
    }
    .reader-book-grid {
      display: grid;
      grid-template-columns: 1.15fr 1fr;
      gap: 2.6rem;
      height: 100%;
      align-items: center;
    }
    .reader-text-pane {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .reader-chapter-title {
      font-size: 1.7rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 1.25rem 0;
      letter-spacing: -0.5px;
      line-height: 1.35;
      word-break: keep-all;
    }
    .reader-body-text {
      font-size: 1.08rem;
      font-weight: 600;
      color: #0f172a;
      line-height: 2.05;
      letter-spacing: -0.2px;
      margin: 0;
      word-break: keep-all;
    }
    .reader-img-pane {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .reader-img-wrapper {
      width: 100%;
      aspect-ratio: 16/10;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.18);
      border: 1px solid #e2e8f0;
      background: #0f172a;
    }
    .reader-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .reader-modal-footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0.85rem 1.8rem;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
    }
    .reader-nav-btns {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    @media (max-width: 860px) {
      .reader-book-grid {
        grid-template-columns: 1fr;
        gap: 1.8rem;
        height: auto;
      }
      .reader-modal-container {
        height: 95vh;
        max-height: none;
      }
      .reader-modal-body {
        padding: 1.5rem;
      }
    }
  `;
  document.head.appendChild(styleEl);

  const modalHtml = `
    <div id="reader-modal" class="reader-modal-backdrop" onclick="handleReaderBackdropClick(event)">
      <div class="reader-modal-container" id="reader-modal-container" onclick="event.stopPropagation()">
        
        <!-- Header: Minimal Title + Close -->
        <div class="reader-modal-header">
          <div class="reader-title-box">
            <h3 id="reader-header-title">스마트폰 배터리를 삼키는 75%의 비밀</h3>
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

        <!-- Footer: Clean Prev / Next Buttons Only -->
        <div class="reader-modal-footer">
          <div class="reader-nav-btns">
            <button type="button" id="reader-btn-prev" class="topbar-btn" onclick="changeReaderChapter(-1)">
              <i data-lucide="arrow-left"></i> <span>이전</span>
            </button>
            <button type="button" id="reader-btn-next" class="topbar-btn primary" onclick="changeReaderChapter(1)">
              <span>다음</span> <i data-lucide="arrow-right"></i>
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

  const headerTitle = document.getElementById('reader-header-title');
  if (headerTitle) headerTitle.innerText = data.title;

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
    const fullText = ch.text || (ch.paragraphs ? ch.paragraphs.join(' ') : '');

    bodyEl.innerHTML = `
      <div class="reader-book-grid">
        <!-- Text Pane: Title + Continuous Bold Text -->
        <div class="reader-text-pane">
          <h2 class="reader-chapter-title">${ch.title}</h2>
          <p class="reader-body-text">${fullText}</p>
        </div>

        <!-- Image Pane: Large Illustration Only (No Image Caption) -->
        <div class="reader-img-pane">
          <div class="reader-img-wrapper">
            <img src="${getToolAsset(ch.image)}" alt="${ch.title}">
          </div>
        </div>
      </div>
    `;
  }

  // Update Buttons
  const btnPrev = document.getElementById('reader-btn-prev');
  const btnNext = document.getElementById('reader-btn-next');
  if (btnPrev) {
    btnPrev.disabled = (currentReaderChapterIndex === 0);
    btnPrev.style.opacity = (currentReaderChapterIndex === 0) ? '0.35' : '1';
  }
  if (btnNext) {
    btnNext.disabled = (currentReaderChapterIndex === total - 1);
    btnNext.style.opacity = (currentReaderChapterIndex === total - 1) ? '0.35' : '1';
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
