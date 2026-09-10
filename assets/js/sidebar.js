/**
 * KAIST Middle School Science Education Platform - Notion Style Minimal Sidebar
 */

function renderSidebar(pkg, currentKey) {
  const isOled = pkg === 'oled';

  const pages = [
    ...(isOled ? [] : [{ key: 'quantum-guide', name: '양자 컴퓨터란?', file: 'quantum_deep_dive_guide.html' }]),
    { key: 'lesson-plan', name: '교사용 지도안', file: 'lesson-plan.html' },
    { key: 'lab', name: '가상실험실', file: 'lab.html' },
    { key: 'textbook', name: '학생용 읽기자료', file: 'textbook.html' },
    { key: 'curriculum', name: '2022 성취기준 연계표', file: 'curriculum.html' }
  ];

  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  const validKey = currentKey === 'overview' ? (isOled ? 'lesson-plan' : 'quantum-guide') : currentKey;

  sidebarEl.innerHTML = `
    <div class="sidebar-project-header">
      <div class="project-badge-row">
        <span class="project-tag">한국과학창의재단 스타브릿지 2.0</span>
      </div>
      <div class="cprl-mascot-card">
        <img src="../image/kaist_mascot.png" alt="KAIST 넙죽이와 오리" class="cprl-mascot-bg">
        <div class="cprl-inner-card">
          <div class="project-research-menu">
            <a href="../index.html#cprl-intro" class="nav-item">
              <span class="nav-text">KAIST 화학과 CPRL 소개</span>
            </a>
            <a href="../index.html#cprl-research" class="nav-item">
              <span class="nav-text">CPRL 주요 연구 내용</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="pkg-tab-container">
      <div class="pkg-switch-group">
        <a href="../index.html#oled/${validKey}" 
           class="pkg-btn oled ${isOled ? 'active' : ''}">
          01. OLED
        </a>
        <a href="../index.html#quantum/${validKey}" 
           class="pkg-btn quantum ${!isOled ? 'active' : ''}">
          02. 양자컴퓨터
        </a>
      </div>
      <div class="pkg-tab-panel" id="pkg-tab-panel">
        ${pages.map(p => {
          const isActive = p.key === currentKey;
          const activeClass = isActive ? (isOled ? 'active' : 'quantum-active active') : '';
          return `
            <a href="../index.html#${isOled ? 'oled' : 'quantum'}/${p.key}" class="nav-item ${activeClass}">
              <span class="nav-text">${p.name}</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>

    <nav class="sidebar-nav" style="padding-top:0.5rem;">
      <div class="nav-category">플랫폼 홈</div>
      <a href="../index.html" class="nav-item">
        <span class="nav-text">올인원 메인 홈</span>
      </a>
    </nav>
  `;

  // 모바일 오버레이 보장
  if (!document.querySelector('.sidebar-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.onclick = toggleSidebar;
    document.body.appendChild(overlay);
  }
}

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    document.body.classList.toggle('sidebar-open');
  } else {
    document.body.classList.toggle('sidebar-collapsed');
  }
}

// 창 크기 변경 시 모바일 열림 상태 정리
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.body.classList.remove('sidebar-open');
  }
});

// Keyboard shortcuts for toggle
document.addEventListener('keydown', (e) => {
  if (e.key === '[' || e.key === ']') {
    toggleSidebar();
  }
});

// Auto-detect embedding in All-in-One master workspace
if (window.self !== window.top) {
  document.body.classList.add('in-iframe');
}

