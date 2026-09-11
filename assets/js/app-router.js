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
let currentView = 'lesson-plan'; // 'lesson-plan' | 'worksheet' | 'teacher-guide' | 'lab' | 'textbook' | 'slides' | 'curriculum' | 'cprl-research' | 'cprl-academic'

const viewTitles = {
  'oled-guide': 'OLED란?',
  'lesson-plan': '수업 지도안',
  'worksheet': '학생 활동지',
  'teacher-guide': '교사 도움자료',
  'lab': '가상 실험실',
  'textbook': '학생용 읽기자료',
  'slides': '발표 슬라이드',
  'curriculum': '2022 성취기준 연계표',
  'cprl-intro': 'KAIST 화학과 CPRL 소개',
  'cprl-research': 'CPRL 주요 연구 내용',
  'quantum-guide': '양자 컴퓨터란?',
  'academic': '교사용 학술 배경 자료'
};

function setAppState(pkg, view) {
  currentPkg = pkg;
  let isCurriculum = (view === 'curriculum');
  let normalizedView = (view === 'overview' || isCurriculum) ? 'lesson-plan' : view;
  if (normalizedView === 'cprl-academic') normalizedView = 'academic';
  currentView = normalizedView;
  window.location.hash = normalizedView.startsWith('cprl') ? normalizedView : `${pkg}/${currentView}`;
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
    if (btnQuick) btnQuick.innerText = '02. 양자컴퓨터로 전환';
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
    if (btnQuick) btnQuick.innerText = '01. OLED로 전환';
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
      topbarTitle.innerText = '02. 양자컴퓨터: ' + (viewTitles[currentView] || '양자 컴퓨터란?');
    } else if (currentView === 'oled-guide') {
      topbarTitle.innerText = '01. OLED: ' + (viewTitles[currentView] || 'OLED란?');
    } else {
      const pkgPrefix = currentPkg === 'oled' ? '01. OLED: ' : '02. 양자컴퓨터: ';
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

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
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
    if (parts.length === 2) {
      setAppState(parts[0], parts[1] === 'overview' ? 'lesson-plan' : parts[1]);
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
