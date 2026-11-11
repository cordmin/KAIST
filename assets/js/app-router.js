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
// OLED·양자 어느 쪽에도 속하지 않는 화면 (주소가 #home, #cprl-intro 처럼 짧음)
const isGlobalView = v => v === 'home' || v.startsWith('cprl');
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
  'cprl-interview': '화학과 연구원 인터뷰',
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

  if (currentView === 'home') {
    // 홈에서는 사이드바 선택 표시 없음
  } else if (currentView === 'cprl-intro') {
    const el = document.getElementById('rb-nav-cprl-intro');
    if (el) el.classList.add('active');
  } else if (currentView === 'cprl-research') {
    const el = document.getElementById('rb-nav-cprl-research');
    if (el) el.classList.add('active');
  } else if (currentView === 'cprl-interview') {
    const el = document.getElementById('rb-nav-cprl-interview');
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
  window.location.hash = isGlobalView(normalizedView) 
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
  setAppState(pkg, isGlobalView(targetView) || targetView === 'overview' ? 'lesson-plan' : targetView);
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
  if (isGlobalView(currentView)) {
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
    } else if (isGlobalView(parts[0])) {
      setAppState('oled', parts[0]);
      return;
    }
  }
  setAppState('oled', 'home');
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

  // 홈페이지에 처음 들어오면 주소 뒤에 무엇이 붙어 있든 늘 홈 화면부터 보여 줌
  history.replaceState(null, '', location.pathname + location.search);
  setAppState('oled', 'home');
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

// 크게 보기 단추 그림 (지도안·인터뷰 공통)
const ZOOM_ICON = {
  open: '<svg viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
};

// 수업 지도안: 1400px(폭 줄이기 전 크기)로 그린 뒤 칸에 맞게 통째로 축소 (휴대폰 포함), '크게 보기'는 같은 지도안을 큰 창으로 옮김
window.addEventListener('load', () => {
  const DOC_W = 1400, SITE_W = 1280;
  document.querySelectorAll('.chrome-window[id$="-lesson-plan-chrome-window"]').forEach(doc => {
    const box = doc.parentElement;
    box.classList.add('lp-fit');
    const bar = document.createElement('div');
    bar.className = 'lp-bar';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom-btn';
    bar.append(btn);
    box.prepend(bar);
    const modal = document.createElement('div');
    modal.className = 'lp-modal';
    const sheet = document.createElement('div');
    sheet.className = 'lp-sheet';
    modal.append(sheet);
    const isOpen = () => modal.isConnected;

    const fit = () => {
      const room = isOpen() ? Math.min(SITE_W, window.innerWidth - 48) : box.clientWidth;
      if (!room) return; // 숨어 있는 지도안
      const r = Math.min(1, room / DOC_W);
      doc.style.width = DOC_W + 'px';
      doc.style.zoom = r;
      sheet.style.width = DOC_W * r + 'px';
    };
    const open = () => {
      sheet.append(bar, doc); // 옮기기만 하므로 활동지·슬라이드 단추가 그대로 작동
      document.body.append(modal);
      document.body.classList.add('lp-modal-open');
      modal.scrollTop = 0;
      btn.innerHTML = ZOOM_ICON.close + '닫기';
      fit();
    };
    const close = () => {
      box.append(bar, doc);
      modal.remove();
      document.body.classList.remove('lp-modal-open');
      btn.innerHTML = ZOOM_ICON.open + '크게 보기';
      fit();
    };
    btn.innerHTML = ZOOM_ICON.open + '크게 보기';
    btn.onclick = () => (isOpen() ? close() : open());
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && isOpen()) close(); });
    new ResizeObserver(fit).observe(box);
    window.addEventListener('resize', fit);
  });
});

// 화학과 연구원 인터뷰: 줄인 지면 + '‹ 1 / N ›' 넘기기 + 크게 보기. 지면+넘기기 아래 끝 = 사이드바 아래 끝
(function () {
  const view = document.getElementById('view-cprl-interview');
  if (!view) return;
  const pages = [...view.querySelectorAll('.iv-src img')].map(img => ({ src: img.getAttribute('src'), alt: img.alt, title: img.dataset.title || '' }));
  const wrap = view.querySelector('.iv');
  if (!pages.length || !wrap) return;
  let cur = 0;
  const arrow = d => `<svg viewBox="0 0 24 24"><path d="${d}"/></svg>`;

  function fit() {
    const page = wrap.querySelector('.iv-page'), pager = wrap.querySelector('.iv-pager');
    if (!page) return;
    if (window.innerWidth <= 768 || !view.offsetParent) { page.style.height = ''; return; }
    const sb = document.querySelector('.sidebar').getBoundingClientRect().bottom;
    const top = page.getBoundingClientRect().top + window.scrollY;
    page.style.height = Math.max(360, Math.round(sb - top - pager.offsetHeight - 14)) + 'px';
  }
  function render() {
    const p = pages[cur];
    wrap.innerHTML = `<figure class="iv-page"><img src="${p.src}" alt="${p.alt}"><button type="button" class="zoom-btn">${ZOOM_ICON.open}크게 보기</button></figure>
      <div class="iv-pager"><button type="button" data-step="-1" aria-label="이전 인터뷰" ${cur === 0 ? 'disabled' : ''}>${arrow('m15 18-6-6 6-6')}</button><span><b>${cur + 1}</b> / ${pages.length}</span><button type="button" data-step="1" aria-label="다음 인터뷰" ${cur === pages.length - 1 ? 'disabled' : ''}>${arrow('m9 18 6-6-6-6')}</button></div>`;
    fit();
  }
  wrap.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.classList.contains('zoom-btn')) {
      const p = pages[cur];
      openImageLightbox(p.src, p.title || '화학과 연구원 인터뷰', `${p.title} 인터뷰 (${cur + 1} / ${pages.length})`);
      return;
    }
    cur = Math.min(pages.length - 1, Math.max(0, cur + Number(b.dataset.step)));
    render();
  });
  document.addEventListener('keydown', e => {
    if (!view.classList.contains('active') || document.querySelector('.img-lightbox-backdrop.open')) return;
    if (e.key === 'ArrowRight' && cur < pages.length - 1) { cur++; render(); }
    if (e.key === 'ArrowLeft' && cur > 0) { cur--; render(); }
  });
  const later = () => requestAnimationFrame(fit);
  window.addEventListener('resize', later);
  new MutationObserver(later).observe(view, { attributes: true, attributeFilter: ['class'] }); // 화면이 열릴 때
  document.addEventListener('animationend', e => { if (e.target === view) fit(); }); // 떠오르는 움직임 뒤 다시 잼
  render();
})();
