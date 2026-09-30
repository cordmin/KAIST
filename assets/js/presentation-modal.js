/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * Presentation Modal Engine (presentation-modal.js)
 * 슬라이드 모달 UI 컨트롤러, 네비게이션, 전체화면 및 사용자 인터랙션 엔진
 */

function getToolAsset(filename) {
  const isSub = (typeof window !== 'undefined' && window.location && window.location.pathname) 
    ? (window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/'))
    : false;
  return (isSub ? '../' : '') + 'image/tools/' + filename;
}

if (typeof window.presentationModalData === 'undefined') {
  window.presentationModalData = {};
}

let currentPresModule = 'oled';
let currentPresLesson = 1;
let currentPresSlideIndex = 0;

function ensurePresentationModalExists() {
  if (document.getElementById('presentation-modal')) return;

  const modalHtml = `
    <div id="presentation-modal" class="presentation-modal" onclick="handlePresentationBackdropClick(event)">
      <div class="presentation-modal-window" id="presentation-modal-window">
        
        <!-- Modal Header -->
        <div class="presentation-modal-header">
          <div class="pres-header-left">
            <h3 id="pres-modal-title" class="pres-modal-title">발표 슬라이드</h3>
          </div>

          <div class="pres-header-actions">
            <button type="button" id="btn-pres-fullscreen" class="topbar-btn pres-btn-fullscreen" onclick="togglePresentationFullscreen()" title="전체화면 (빔프로젝터/전자칠판 발표 모드)">
              <i data-lucide="maximize-2"></i> <span>전체화면</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closePresentationModal()" title="닫기 (ESC)">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <!-- Slide Content Screen -->
        <div class="presentation-modal-body" id="presentation-modal-body">
          <div class="presentation-slide-screen" id="presentation-slide-screen">
            <!-- Rendered slide content goes here -->
          </div>
        </div>

        <!-- Modal Footer Navigation -->
        <div class="presentation-modal-footer">
          <span id="pres-slide-counter" class="pres-slide-counter">1 / 9</span>
          <div class="pres-nav-btns">
            <button type="button" id="pres-btn-prev" class="topbar-btn" onclick="changePresentationSlide(-1)">
              <i data-lucide="arrow-left"></i> <span>이전</span>
            </button>
            <button type="button" id="pres-btn-next" class="topbar-btn primary" onclick="changePresentationSlide(1)">
              <span>다음</span> <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('presentation-modal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      changePresentationSlide(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      changePresentationSlide(-1);
    } else if (e.key === 'Escape') {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        closePresentationModal();
      }
    }
  });

  // Listen to fullscreen changes to update button icon and label
  document.addEventListener('fullscreenchange', updateFullscreenButtonState);
  document.addEventListener('webkitfullscreenchange', updateFullscreenButtonState);
  document.addEventListener('mozfullscreenchange', updateFullscreenButtonState);
  document.addEventListener('MSFullscreenChange', updateFullscreenButtonState);
}

function openPresentationModal(moduleType, lessonNum) {
  ensurePresentationModalExists();

  currentPresModule = moduleType;
  currentPresLesson = lessonNum;
  currentPresSlideIndex = 0;

  const deck = presentationModalData[moduleType] && presentationModalData[moduleType][lessonNum];
  if (!deck) return;

  document.getElementById('pres-modal-title').innerText = deck.lessonTitle;
  const badgeEl = document.getElementById('pres-badge-text');
  if (badgeEl) badgeEl.innerText = deck.badge;

  renderCurrentPresentationSlide();

  const modalEl = document.getElementById('presentation-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateFullscreenButtonState();

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function renderCurrentPresentationSlide() {
  const deck = presentationModalData[currentPresModule] && presentationModalData[currentPresModule][currentPresLesson];
  if (!deck) return;

  const slide = deck.slides[currentPresSlideIndex];
  if (!slide) return;

  const screen = document.getElementById('presentation-slide-screen');
  if (!screen) return;

  const badgeClass = currentPresModule === 'quantum' ? 'quantum-accent' : '';

  const tagHtml = slide.tag ? `<span class="pres-slide-tag">${slide.tag}</span>` : '';
  const titleHtml = slide.title ? `<h2 class="pres-slide-heading">${slide.title}</h2>` : '';

  screen.innerHTML = `
    <div class="pres-slide-card ${badgeClass}">
      ${(tagHtml || titleHtml) ? `
        <div class="pres-slide-header">
          ${tagHtml}
          ${titleHtml}
        </div>
      ` : ''}
      <div class="pres-slide-body">
        ${slide.content}
      </div>
    </div>
  `;

  // Update counter
  const total = deck.slides.length;
  document.getElementById('pres-slide-counter').innerText = `${currentPresSlideIndex + 1} / ${total}`;

  // Update button states
  const btnPrev = document.getElementById('pres-btn-prev');
  const btnNext = document.getElementById('pres-btn-next');

  if (btnPrev) {
    btnPrev.disabled = (currentPresSlideIndex === 0);
    btnPrev.style.opacity = (currentPresSlideIndex === 0) ? '0.4' : '1';
  }
  if (btnNext) {
    btnNext.disabled = (currentPresSlideIndex === total - 1);
    btnNext.style.opacity = (currentPresSlideIndex === total - 1) ? '0.4' : '1';
  }

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function changePresentationSlide(dir) {
  const deck = presentationModalData[currentPresModule] && presentationModalData[currentPresModule][currentPresLesson];
  if (!deck) return;
  const total = deck.slides.length;

  const target = currentPresSlideIndex + dir;
  if (target >= 0 && target < total) {
    currentPresSlideIndex = target;
    renderCurrentPresentationSlide();
  }
}

function closePresentationModal() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  const modalEl = document.getElementById('presentation-modal');
  const modalWindow = document.getElementById('presentation-modal-window');
  if (modalEl) {
    modalEl.classList.remove('open', 'fullscreen-active');
  }
  if (modalWindow) {
    modalWindow.classList.remove('is-fullscreen');
  }
  document.body.classList.remove('presentation-fullscreen-mode');
  document.body.style.overflow = '';
}

function handlePresentationBackdropClick(event) {
  if (event.target && event.target.id === 'presentation-modal') {
    closePresentationModal();
  }
}

function togglePresentationFullscreen() {
  const modalWindow = document.getElementById('presentation-modal-window');
  if (!modalWindow) return;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (modalWindow.requestFullscreen) {
      modalWindow.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else if (modalWindow.webkitRequestFullscreen) {
      modalWindow.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function updateFullscreenButtonState() {
  const btn = document.getElementById('btn-pres-fullscreen');
  const modal = document.getElementById('presentation-modal');
  const modalWindow = document.getElementById('presentation-modal-window');
  const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);

  if (modal) {
    modal.classList.toggle('fullscreen-active', isFull);
  }
  if (modalWindow) {
    modalWindow.classList.toggle('is-fullscreen', isFull);
  }
  document.body.classList.toggle('presentation-fullscreen-mode', isFull);

  if (btn) {
    if (isFull) {
      btn.innerHTML = '<i data-lucide="minimize-2"></i> <span>전체화면 종료</span>';
      btn.title = '전체화면 종료 (ESC)';
    } else {
      btn.innerHTML = '<i data-lucide="maximize-2"></i> <span>전체화면</span>';
      btn.title = '전체화면 (빔프로젝터/전자칠판 발표 모드)';
    }
    if (window.lucide) {
      try { lucide.createIcons(); } catch(e) {}
    }
  }
}

function toggleAllPresResults(btn) {
  const wrap = btn.closest('.pres-table-wrap');
  if (!wrap) return;
  const cells = wrap.querySelectorAll('.pres-reveal-cell');
  const allRevealed = Array.from(cells).every(c => c.classList.contains('revealed'));
  cells.forEach(c => {
    if (allRevealed) {
      c.classList.remove('revealed');
    } else {
      c.classList.add('revealed');
    }
  });
  btn.innerText = allRevealed ? '전체 결과 보기' : '전체 결과 가리기';
}

let virtualLabReturnFocus;

function openVirtualLabModal(lessonNum = 2) {
  let modal = document.getElementById('virtual-lab-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="virtual-lab-modal" class="virtual-lab-modal" role="dialog" aria-modal="true" aria-label="가상실험실">
        <div id="virtual-lab-window" class="virtual-lab-window">
          <div class="virtual-lab-top-actions">
            <button type="button" id="virtual-lab-fullscreen" class="virtual-lab-action-btn" onclick="toggleVirtualLabFullscreen()">전체 화면</button>
            <button type="button" id="virtual-lab-close" class="virtual-lab-action-btn" onclick="closeVirtualLabModal()">닫기</button>
          </div>
          <iframe class="virtual-lab-frame" title="가상실험실" allow="fullscreen"></iframe>
        </div>
      </div>`);
    modal = document.getElementById('virtual-lab-modal');
    modal.addEventListener('click', event => { if (event.target === modal) closeVirtualLabModal(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && modal.classList.contains('open') && !document.fullscreenElement) closeVirtualLabModal();
    });
    document.addEventListener('fullscreenchange', updateVirtualLabFullscreen);
  }
  virtualLabReturnFocus = document.activeElement;
  const labPage = lessonNum === 4 ? 'molecule-rescue.html' : 'fluorescence-3d.html';
  const iframe = modal.querySelector('iframe');
  iframe.title = lessonNum === 4 ? '4차시 분자 가상실험실' : '형광빛의 원리 가상실험실';
  iframe.src = location.pathname.includes('/oled/') ? labPage : `oled/${labPage}`;
  if (document.fullscreenElement) document.exitFullscreen().catch(error => console.warn('전체 화면 종료 실패:', error));
  modal.classList.add('open');
  document.body.classList.add('virtual-lab-open');
}

function closeVirtualLabModal() {
  const modal = document.getElementById('virtual-lab-modal');
  if (!modal) return;
  const panel = document.getElementById('virtual-lab-window');
  if (document.fullscreenElement === panel) document.exitFullscreen().catch(error => console.warn('전체 화면 종료 실패:', error));
  panel.classList.remove('is-fullscreen');
  modal.classList.remove('open');
  modal.querySelector('iframe').removeAttribute('src');
  document.body.classList.remove('virtual-lab-open');
  if (virtualLabReturnFocus) virtualLabReturnFocus.focus();
}

function toggleVirtualLabFullscreen() {
  const panel = document.getElementById('virtual-lab-window');
  if (document.fullscreenElement === panel) {
    document.exitFullscreen().catch(error => console.warn('전체 화면 종료 실패:', error));
  } else if (panel.classList.contains('is-fullscreen')) {
    panel.classList.remove('is-fullscreen');
    updateVirtualLabFullscreen();
  } else if (panel.requestFullscreen) {
    panel.requestFullscreen().catch(error => {
      console.warn('전체 화면 전환 실패, 화면 크기로 확장합니다:', error);
      panel.classList.add('is-fullscreen');
      updateVirtualLabFullscreen();
    });
  } else {
    panel.classList.add('is-fullscreen');
    updateVirtualLabFullscreen();
  }
}

function updateVirtualLabFullscreen() {
  const panel = document.getElementById('virtual-lab-window');
  if (!panel) return;
  const full = document.fullscreenElement === panel || panel.classList.contains('is-fullscreen');
  const btn = document.getElementById('virtual-lab-fullscreen');
  if (btn) btn.textContent = full ? '창 크기로' : '전체 화면';
  try {
    const iframe = panel.querySelector('iframe');
    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      const iframeBtn = iframe.contentDocument.getElementById('lab-fullscreen');
      if (iframeBtn) iframeBtn.textContent = full ? '창 크기로' : '전체 화면';
    }
  } catch (e) {}
}
