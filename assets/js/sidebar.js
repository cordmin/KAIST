/**
 * KAIST Middle School Science Education Platform - Notion Style Minimal Sidebar
 */

function renderSidebar(pkg, currentKey) {
  const isOled = pkg === 'oled';

  const pages = [
    { key: 'lesson-plan', name: '교사용 지도안', file: 'lesson-plan.html' },
    { key: 'worksheet', name: '학생 활동지', file: 'worksheet.html' },
    { key: 'teacher-guide', name: '교사 도움자료', file: 'teacher-guide.html' },
    { key: 'lab', name: '가상실험실', file: 'lab.html' },
    { key: 'textbook', name: '학생용 읽기자료', file: 'textbook.html' },
    { key: 'slides', name: '발표 슬라이드', file: 'slides.html' },
    { key: 'curriculum', name: '2022 성취기준 연계표', file: 'curriculum.html' }
  ];

  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  const validKey = currentKey === 'overview' ? 'lesson-plan' : currentKey;

  sidebarEl.innerHTML = `
    <div class="sidebar-project-header">
      <div class="project-badge-row">
        <span class="project-tag">한국과학창의재단 스타브릿지 2.0</span>
      </div>
      <div class="cprl-mascot-card">
        <img src="../image/kaist_mascot.png" alt="KAIST 넙죽이와 오리" class="cprl-mascot-bg">
        <div class="cprl-inner-card">
          <div class="project-research-menu">
            <div class="research-menu-label">KAIST 화학과 CPRL 소개</div>
            <a href="../index.html#cprl-research" class="nav-item">
              <span class="nav-text">CPRL 주요 연구 내용</span>
            </a>
            <a href="../index.html#cprl-academic" class="nav-item">
              <span class="nav-text">교사용 학술 배경 자료</span>
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
}

function toggleSidebar() {
  if (window.innerWidth <= 960) {
    document.body.classList.toggle('sidebar-open');
  } else {
    document.body.classList.toggle('sidebar-collapsed');
  }
}

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
