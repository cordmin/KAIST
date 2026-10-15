/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * SPA Router & State Controller (app-router.js)
 */

// Chrome Tab Switcher (연구 영역 탭)
function switchResearchTab(e, index) {
  const btn = e ? e.currentTarget : null;
  const container = btn ? btn.closest('.chrome-window') : document.querySelector('.chrome-window');
  if (!container) return;
  const tabs = container.querySelectorAll('.chrome-tab-btn');
  const panels = container.querySelectorAll('.chrome-tab-panel');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
}

// Lesson Plan Chrome Tab Switcher (지도안 개요, 1차시, 2차시, 3차시, 4차시)
function switchLessonPlanTab(e, index, targetWindowId) {
  let container = null;
  if (targetWindowId) {
    container = document.getElementById(targetWindowId);
  } else if (e && e.currentTarget) {
    container = e.currentTarget.closest('.chrome-window');
  }
  if (!container) return;
  const tabs = container.querySelectorAll(':scope > .chrome-tab-bar > .chrome-tab-btn');
  const panels = container.querySelectorAll(':scope > .chrome-tab-panel');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
  const rect = container.getBoundingClientRect();
  if (rect.top < 0) {
    window.scrollTo({ top: window.pageYOffset + rect.top - 80, behavior: 'smooth' });
  }
  if (typeof index === 'number') {
    currentLessonTabIndex[currentPkg] = index;
  }
  syncRebuildSidebar();
  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

// OLED 소개 가이드 전용 크롬탭 전환기 (1~5탭)
function switchOledGuideTab(e, index) {
  const container = document.getElementById('oled-guide-chrome-window');
  if (!container) return;
  const tabs = container.querySelectorAll(':scope > .chrome-tab-bar > .chrome-tab-btn');
  const panels = container.querySelectorAll(':scope > .chrome-tab-panel');
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  panels.forEach((panel, i) => {
    panel.classList.toggle('active', i === index);
  });
  const rect = container.getBoundingClientRect();
  if (rect.top < 0) {
    window.scrollTo({ top: window.pageYOffset + rect.top - 80, behavior: 'smooth' });
  }
  if (window.lucide) {
    try { lucide.createIcons(); } catch(err) {}
  }
}

// OLED 학생 퀴즈 정답 확인 인터랙션
function checkOledQuiz(quizId, btnEl, isCorrect, explanation) {
  const item = document.getElementById(quizId);
  if (!item) return;
  const buttons = item.querySelectorAll('.og-quiz-btn');
  buttons.forEach(b => {
    b.classList.remove('selected-correct', 'selected-wrong');
  });
  if (isCorrect) {
    btnEl.classList.add('selected-correct');
  } else {
    btnEl.classList.add('selected-wrong');
  }
  const feedbackEl = item.querySelector('.og-quiz-feedback');
  if (feedbackEl) {
    feedbackEl.innerHTML = `<strong>${isCorrect ? '[정답]' : '[다시 생각하기]'}</strong> ${explanation}`;
    feedbackEl.classList.add('show');
  }
}

// Media Subtab Switcher (Photos & Videos)
function switchMediaTab(e, index) {
  const btn = e ? e.currentTarget : null;
  const container = btn ? btn.closest('.media-tab-container') : document.querySelector('.media-tab-container');
  if (!container) return;
  const btns = container.querySelectorAll('.media-subtab-btn');
  const panels = container.querySelectorAll('.media-subtab-panel');
  btns.forEach((b, i) => {
    const isActive = (i === index);
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    b.style.background = isActive ? '#ffffff' : 'transparent';
    b.style.borderColor = isActive ? '#cbd5e1' : 'transparent';
    b.style.color = isActive ? '#0f172a' : '#64748b';
    b.style.fontWeight = isActive ? '700' : '600';
  });
  panels.forEach((p, i) => {
    const isActive = (i === index);
    p.style.display = isActive ? 'block' : 'none';
    const video = p.querySelector('video');
    if (video) {
      if (isActive) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  });
}

// App State
let currentPkg = 'oled'; // 'oled' | 'quantum'
let currentView = 'lesson-plan'; // 'lesson-plan' | 'worksheet' | 'teacher-guide' | 'lab' | 'slides' | 'curriculum' | 'cprl-research'
let currentLessonTabIndex = { oled: 0, quantum: 0 };

const viewTitles = {
  'oled-guide': '[0차시] 수업 전 읽기 자료',
  'lesson-plan': '수업 지도안',
  'worksheet': '학생 활동지',
  'teacher-guide': '교사 도움자료',
  'lab': '가상 실험실',
  'slides': '발표 슬라이드',
  'curriculum': '2022 성취기준 연계표',
  'cprl-intro': 'KAIST 화학과 CPRL 소개',
  'cprl-research': 'CPRL 주요 연구 내용',
  'quantum-guide': '[0차시] 수업 전 읽기 자료'
};

function switchPackageLessonPlanTab(pkg, tabIndex) {
  currentPkg = pkg;
  if (typeof tabIndex === 'number') {
    currentLessonTabIndex[pkg] = tabIndex;
  }
  setAppState(pkg, 'lesson-plan');
  const winId = (pkg === 'oled') ? 'oled-lesson-plan-chrome-window' : 'quantum-lesson-plan-chrome-window';
  switchLessonPlanTab(null, tabIndex, winId);
  syncRebuildSidebar();
}

function syncRebuildSidebar() {
  const oledBox = document.getElementById('rb-pkg-box-oled');
  const quantBox = document.getElementById('rb-pkg-box-quantum');
  if (oledBox && quantBox) {
    if (currentPkg === 'oled') {
      oledBox.classList.add('active-pkg');
      quantBox.classList.remove('active-pkg');
    } else {
      quantBox.classList.add('active-pkg');
      oledBox.classList.remove('active-pkg');
    }
  }

  document.querySelectorAll('.rebuild-nav-item, .rebuild-tree-item').forEach(el => {
    el.classList.remove('active', 'quantum');
  });

  if (currentView === 'cprl-intro') {
    const el = document.getElementById('rb-nav-cprl-intro');
    if (el) el.classList.add('active');
  } else if (currentView === 'cprl-research') {
    const el = document.getElementById('rb-nav-cprl-research');
    if (el) el.classList.add('active');
  } else if (currentView === 'oled-guide') {
    const el = document.getElementById('rb-tree-oled-guide');
    if (el) el.classList.add('active');
  } else if (currentView === 'quantum-guide') {
    const el = document.getElementById('rb-tree-quantum-guide');
    if (el) el.classList.add('active', 'quantum');
  } else if (currentView === 'lesson-plan') {
    const tabIdx = currentLessonTabIndex[currentPkg] || 0;
    const treeId = `rb-tree-${currentPkg}-tab-${tabIdx}`;
    const el = document.getElementById(treeId);
    if (el) {
      el.classList.add('active');
      if (currentPkg === 'quantum') el.classList.add('quantum');
    }
  } else if (currentView === 'lab') {
    const el = document.getElementById('rb-nav-lab');
    if (el) el.classList.add('active');
  } else if (currentView === 'slides') {
    const el = document.getElementById('rb-nav-slides');
    if (el) el.classList.add('active');
  }

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function setAppState(pkg, view) {
  currentPkg = pkg;
  let isCurriculum = (view === 'curriculum');
  let normalizedView = (view === 'overview' || isCurriculum) ? 'lesson-plan' : view;
  if (normalizedView === 'cprl-academic' || normalizedView === 'academic') normalizedView = 'lesson-plan';
  currentView = normalizedView;
  window.location.hash = normalizedView.startsWith('cprl') 
    ? normalizedView 
    : (normalizedView === 'lesson-plan' 
       ? `${pkg}/${normalizedView}/${currentLessonTabIndex[pkg] || 0}` 
       : `${pkg}/${normalizedView}`);
  if (window.innerWidth <= 768) {
    document.body.classList.remove('sidebar-open');
  }
  renderView();
  if (isCurriculum) {
    const winId = (pkg === 'oled') ? 'oled-lesson-plan-chrome-window' : 'quantum-lesson-plan-chrome-window';
    switchLessonPlanTab(null, 0, winId);
  }
}

function switchPackage(pkg) {
  let targetView = currentView;
  if (pkg === 'oled' && currentView === 'quantum-guide') {
    targetView = 'oled-guide';
  } else if (pkg === 'quantum' && currentView === 'oled-guide') {
    targetView = 'quantum-guide';
  }
  setAppState(pkg, targetView.startsWith('cprl') || targetView === 'overview' ? 'lesson-plan' : targetView);
}

function switchView(view) {
  setAppState(currentPkg, view);
}

function switchPackageView(pkg, view) {
  setAppState(pkg, view);
}

function togglePackageQuick() {
  switchPackage(currentPkg === 'oled' ? 'quantum' : 'oled');
}

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    document.body.classList.toggle('sidebar-open');
  } else {
    document.body.classList.toggle('sidebar-collapsed');
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.body.classList.remove('sidebar-open');
  }
});

function renderView() {
  initLessonPlanContainers();
  // 1. Update Package Switcher Cards & Headers
  const cardOled = document.getElementById('pkg-card-oled');
  const cardQuantum = document.getElementById('pkg-card-quantum');
  const btnOled = document.getElementById('pkg-btn-oled');
  const btnQuantum = document.getElementById('pkg-btn-quantum');
  const btnQuick = document.getElementById('btn-quick-switch');

  if (currentPkg === 'oled') {
    if (cardOled) cardOled.classList.add('active-pkg');
    if (cardQuantum) cardQuantum.classList.remove('active-pkg');
    if (btnOled) {
      btnOled.classList.add('active');
      btnOled.setAttribute('aria-selected', 'true');
    }
    if (btnQuantum) {
      btnQuantum.classList.remove('active');
      btnQuantum.setAttribute('aria-selected', 'false');
    }
    if (btnQuick) btnQuick.innerText = '02. 양자컴퓨터의 활용으로 전환';
  } else {
    if (cardQuantum) cardQuantum.classList.add('active-pkg');
    if (cardOled) cardOled.classList.remove('active-pkg');
    if (btnQuantum) {
      btnQuantum.classList.add('active');
      btnQuantum.setAttribute('aria-selected', 'true');
    }
    if (btnOled) {
      btnOled.classList.remove('active');
      btnOled.setAttribute('aria-selected', 'false');
    }
    if (btnQuick) btnQuick.innerText = '01. 빛의 합성과 OLED로 전환';
  }

  // Show/Hide Quantum Guide Nav Button if present
  const qGuideBtn = document.getElementById('nav-item-quantum-guide');
  if (qGuideBtn) {
    qGuideBtn.style.display = (currentPkg === 'quantum') ? 'flex' : 'none';
  }

  // 2. Update Sidebar Active Links
  document.querySelectorAll('.sidebar .nav-item').forEach(el => el.classList.remove('active', 'quantum-active'));
  const activeNavId = currentView.startsWith('cprl')
    ? `nav-item-${currentView}`
    : `nav-item-${currentPkg}-${currentView}`;
  const activeNavEl = document.getElementById(activeNavId) || document.getElementById(`nav-item-${currentView}`);
  if (activeNavEl) {
    activeNavEl.classList.add('active');
    if (currentPkg === 'quantum' && !currentView.startsWith('cprl')) {
      activeNavEl.classList.add('quantum-active');
    }
  }

  // 3. Update Topbar Title (if present)
  const topbarTitle = document.getElementById('topbar-title');
  if (topbarTitle) {
    if (currentView.startsWith('cprl')) {
      topbarTitle.innerText = viewTitles[currentView] || 'KAIST 화학과 CPRL 소개';
    } else if (currentView === 'quantum-guide') {
      topbarTitle.innerText = '02. 양자컴퓨터의 활용: ' + (viewTitles[currentView] || '[0차시] 수업 전 읽기 자료');
    } else if (currentView === 'oled-guide') {
      topbarTitle.innerText = '01. 빛의 합성과 OLED: ' + (viewTitles[currentView] || '[0차시] 수업 전 읽기 자료');
    } else {
      const pkgPrefix = currentPkg === 'oled' ? '01. 빛의 합성과 OLED: ' : '02. 양자컴퓨터의 활용: ';
      topbarTitle.innerText = `${pkgPrefix}${viewTitles[currentView]}`;
    }
  }

  // 4. Toggle Content View Display
  document.querySelectorAll('.content-view').forEach(el => el.classList.remove('active'));

  let targetViewId = '';
  if (currentView.startsWith('cprl')) {
    targetViewId = `view-${currentView}`;
  } else if (currentView === 'quantum-guide') {
    targetViewId = 'view-quantum-guide';
  } else if (currentView === 'oled-guide') {
    targetViewId = 'view-oled-guide';
  } else {
    targetViewId = `view-${currentPkg}-${currentView}`;
  }

  const targetEl = document.getElementById(targetViewId);
  if (targetEl) {
    targetEl.classList.add('active');
  }

  // Trigger redraw of canvas labs if active
  if (currentView === 'lab') {
    window.dispatchEvent(new Event('resize'));
  }

  syncRebuildSidebar();

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }

  if (window.renderMathInElement && targetEl) {
    try {
      renderMathInElement(targetEl, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        throwOnError: false
      });
    } catch(err) {}
  }
}

// CPRL Professor CV Centered Modal Controls
function openCvModal() {
  const modal = document.getElementById('cprl-cv-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCvModal(e) {
  if (!e || e.target === e.currentTarget || (e.target && e.target.closest && e.target.closest('.cprl-modal-close'))) {
    const modal = document.getElementById('cprl-cv-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === '[' || e.key === ']') {
    toggleSidebar();
  } else if (e.key === 'Escape') {
    closeCvModal();
  }
});

// Hash Parser on Load / Popstate
function parseHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const parts = hash.split('/');
    if (parts.length >= 2) {
      const pkg = parts[0];
      const view = (parts[1] === 'overview' ? 'lesson-plan' : parts[1]);
      if (view === 'lesson-plan' && parts.length === 3) {
        const tabIdx = parseInt(parts[2], 10);
        if (!isNaN(tabIdx)) {
          switchPackageLessonPlanTab(pkg, tabIdx);
          return;
        }
      }
      setAppState(pkg, view);
      return;
    } else if (parts[0].startsWith('cprl')) {
      setAppState('oled', parts[0]);
      return;
    }
  }
  setAppState('oled', 'lesson-plan');
}
window.addEventListener('popstate', parseHash);

// Initialize view on load
window.addEventListener('DOMContentLoaded', () => {
  // Quantum Guide FAQ Accordion Delegation
  document.addEventListener('click', (e) => {
    const qHeader = e.target.closest('.qa-question');
    if (qHeader) {
      const item = qHeader.parentElement;
      const ans = item.querySelector('.qa-answer');
      const arrow = qHeader.querySelector('span');
      if (ans.style.display === 'none' || !ans.style.display) {
        ans.style.display = 'block';
        if (arrow) arrow.textContent = '▲';
      } else {
        ans.style.display = 'none';
        if (arrow) arrow.textContent = '▼';
      }
    }
  });

  parseHash();
  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
});

// OLED·양자 화면이 똑같이 쓰는 가상실험실·슬라이드 모음은 한 벌만 두고 복사해 씀
document.querySelectorAll('[data-same-as]').forEach(view => {
  const src = document.getElementById(view.dataset.sameAs);
  if (src) view.innerHTML = src.innerHTML;
});

// Initialize Dynamic Lesson Plan Window Containers
function initLessonPlanContainers() {
  const oledCont = document.getElementById('oled-lesson-plan-container');
  if (oledCont && window.oledLessonPlanHtml && !oledCont.hasChildNodes()) {
    oledCont.innerHTML = window.oledLessonPlanHtml;
  }
  const quantumCont = document.getElementById('quantum-lesson-plan-container');
  if (quantumCont && window.quantumLessonPlanHtml && !quantumCont.hasChildNodes()) {
    quantumCont.innerHTML = window.quantumLessonPlanHtml;
  }
  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}
document.addEventListener('DOMContentLoaded', initLessonPlanContainers);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initLessonPlanContainers();
}

// Global Image Lightbox Modal Handlers
function openImageLightbox(src, alt, caption) {
  const modal = document.getElementById('image-lightbox-modal');
  const img = document.getElementById('image-lightbox-img');
  const cap = document.getElementById('image-lightbox-caption');
  if (!modal || !img) return;

  img.src = src;
  img.alt = alt || '';
  if (cap) cap.innerText = caption || alt || '';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeImageLightbox(e) {
  if (e && e.target && e.target.closest && e.target.closest('.img-lightbox-card') && !e.target.classList.contains('img-lightbox-close')) {
    return;
  }
  const modal = document.getElementById('image-lightbox-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  const img = document.getElementById('image-lightbox-img');
  if (img) img.src = '';
}

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeImageLightbox();
  }
});

// 아직 만들지 않은 가상실험실: 카드의 사진·차시·제목을 그대로 보여 주는 '개발 중' 안내 창
function openComingSoonModal(card) {
  let modal = document.getElementById('coming-soon-modal');
  if (!modal) {
    document.body.insertAdjacentHTML('beforeend', `
      <div id="coming-soon-modal" class="coming-soon-modal" role="dialog" aria-modal="true" aria-labelledby="coming-soon-title">
        <div class="coming-soon-panel">
          <div class="coming-soon-visual"><img alt=""></div>
          <div class="coming-soon-body">
            <span class="coming-soon-badge"></span>
            <h3 id="coming-soon-title"></h3>
            <p class="coming-soon-msg">개발 중입니다</p>
            <p class="coming-soon-sub">수업에서 바로 쓸 수 있는 가상실험실로 준비하고 있어요. 완성되면 이 자리에서 바로 열립니다.</p>
            <button type="button" class="coming-soon-close">확인</button>
          </div>
        </div>
      </div>`);
    modal = document.getElementById('coming-soon-modal');
    const close = () => modal.classList.remove('open');
    modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.coming-soon-close')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
  }
  const img = card.querySelector('.hub-card-thumb img');
  modal.querySelector('.coming-soon-visual img').src = img ? img.getAttribute('src') : '';
  modal.querySelector('.coming-soon-badge').textContent = (card.querySelector('.hub-card-badge') || {}).textContent || '';
  modal.querySelector('#coming-soon-title').textContent = (card.querySelector('.hub-card-title') || {}).textContent || '가상실험실';
  modal.classList.add('open');
  modal.querySelector('.coming-soon-close').focus();
}

// 휴대폰: 화면을 아래로 내리면 메뉴(≡) 단추를 숨기고, 위로 올리면 다시 보여 줌
(function () {
  const lastY = new WeakMap();
  document.addEventListener('scroll', e => {
    const btn = document.querySelector('.rebuild-mobile-toggle');
    if (!btn) return;
    const el = e.target === document ? document.scrollingElement : e.target;
    const y = el.scrollTop, prev = lastY.get(el) || 0;
    lastY.set(el, y);
    if (Math.abs(y - prev) < 6) return;
    btn.classList.toggle('is-hidden', y > prev && y > 60);
  }, true);
})();
