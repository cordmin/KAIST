/**
 * KAIST Middle School Science Education Platform - Notion Style Minimal Sidebar
 */

function renderSidebar(pkg, currentKey) {
  const isOled = pkg === 'oled';

  const pages = [
    { key: 'lesson-plan', name: '교사용 지도안', file: 'lesson-plan.html' },
    { key: 'worksheet', name: '학생 활동지', file: 'worksheet.html' },
    { key: 'teacher-guide', name: '교사 도움자료 (정답 및 해설)', file: 'teacher-guide.html' },
    { key: 'lab', name: '가상실험실', file: 'lab.html' },
    { key: 'textbook', name: '학생용 읽기자료', file: 'textbook.html' },
    { key: 'slides', name: '발표 슬라이드', file: 'slides.html' },
    { key: 'curriculum', name: '2022 성취기준 연계표', file: 'curriculum.html' }
  ];

  const sidebarEl = document.getElementById('app-sidebar');
  if (!sidebarEl) return;

  const validKey = currentKey === 'overview' ? 'lesson-plan' : currentKey;

  sidebarEl.innerHTML = `
    <div class="sidebar-header">
      <a href="../index.html" class="logo-area">
        <span class="logo-badge">KAIST</span>
        <div>
          <div class="logo-title">첨단과학 탐구실험</div>
          <div class="logo-sub">2022 개정 중학교 과학</div>
        </div>
      </a>
      <button class="sidebar-toggle-btn" onclick="toggleSidebar()" title="사이드바 닫기 (단축키: [)">◀</button>
    </div>

    <div class="pkg-switcher-wrapper">
      <div class="pkg-switcher-title">수업 패키지 선택</div>
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
    </div>

    <nav class="sidebar-nav">
      <div class="nav-category">${isOled ? '수업 모듈: OLED' : '수업 모듈: 양자컴퓨터'}</div>
      ${pages.map(p => {
        const isActive = p.key === currentKey;
        const activeClass = isActive ? (isOled ? 'active' : 'quantum-active active') : '';
        return `
          <a href="../index.html#${isOled ? 'oled' : 'quantum'}/${p.key}" class="nav-item ${activeClass}">
            <span class="nav-text">${p.name}</span>
          </a>
        `;
      }).join('')}
      
      <div class="nav-category" style="margin-top:0.75rem;">KAIST 원천 연구</div>
      <a href="../index.html#cprl-research" class="nav-item">
        <span class="nav-text">CPRL 원천 연구 소개</span>
      </a>
      <a href="../index.html#cprl-academic" class="nav-item">
        <span class="nav-text">교사용 학술 배경 자료</span>
      </a>

      <div class="nav-category" style="margin-top:0.75rem;">플랫폼 홈</div>
      <a href="../index.html" class="nav-item">
        <span class="nav-text">올인원 메인 홈</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <span>KAIST 화학과 CPRL</span>
      <span style="font-size:0.72rem; color:var(--color-stone);">2022 개정 교육과정</span>
    </div>
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
