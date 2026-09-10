/**
 * KAIST Middle School Science Education Platform - Notion Style Minimal Sidebar
 */

function renderSidebar(pkg, currentKey) {
  const isOled = pkg === 'oled';
  const validKey = currentKey === 'overview' ? (isOled ? 'lesson-plan' : 'quantum-guide') : currentKey;

  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  const oledPages = [
    { key: 'oled-guide', name: 'OLED란?' },
    { key: 'lesson-plan', name: '수업 지도안' },
    { key: 'lab', name: '가상 실험실' }
  ];

  const quantumPages = [
    { key: 'quantum-guide', name: '양자 컴퓨터란?' },
    { key: 'lesson-plan', name: '수업 지도안' },
    { key: 'lab', name: '가상 실험실' }
  ];

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

    <div class="pkg-cards-container">
      <!-- 01. OLED 카드 -->
      <div class="sidebar-pkg-card oled-card ${isOled ? 'active-pkg' : ''}" id="pkg-card-oled">
        <div class="pkg-card-header oled" id="pkg-btn-oled">
          <span class="pkg-card-badge oled">01</span>
          <span class="pkg-card-title">OLED</span>
        </div>
        <div class="pkg-card-menu">
          ${oledPages.map(p => {
            const isActive = isOled && (p.key === currentKey || (currentKey === 'overview' && p.key === 'lesson-plan'));
            return `
              <a href="../index.html#oled/${p.key}" class="nav-item ${isActive ? 'active' : ''}">
                <span class="nav-text">${p.name}</span>
              </a>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 02. 양자컴퓨터 카드 (OLED 아래로 분리) -->
      <div class="sidebar-pkg-card quantum-card ${!isOled ? 'active-pkg' : ''}" id="pkg-card-quantum">
        <div class="pkg-card-header quantum" id="pkg-btn-quantum">
          <span class="pkg-card-badge quantum">02</span>
          <span class="pkg-card-title">양자컴퓨터</span>
        </div>
        <div class="pkg-card-menu">
          ${quantumPages.map(p => {
            const isActive = !isOled && (p.key === currentKey || (currentKey === 'overview' && p.key === 'quantum-guide'));
            return `
              <a href="../index.html#quantum/${p.key}" class="nav-item ${isActive ? 'quantum-active active' : ''}">
                <span class="nav-text">${p.name}</span>
              </a>
            `;
          }).join('')}
        </div>
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

