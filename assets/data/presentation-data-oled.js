/**
 * KAIST CPRL - OLED 모듈 슬라이드 데이터 (1~4차시)
 * assets/data/presentation-data-oled.js
 */
if (typeof getToolAsset === 'undefined') {
  function getToolAsset(filename) {
    const isSub = (typeof window !== 'undefined' && window.location && window.location.pathname) 
      ? (window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/'))
      : false;
    return (isSub ? '../' : '') + 'image/tools/' + filename;
  }
}

if (typeof window.presentationModalData === 'undefined') {
  window.presentationModalData = {};
}

window.presentationModalData.oled = {
    // -----------------------------------------------------------------------
    // OLED 1차시: 자외선과 형광
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 어둠 속을 밝히는 형광빛의 원리',
      badge: 'OLED 1차시 · 자외선과 형광',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                어둠 속을 밝히는 형광빛의 원리
              </h1>
            </div>
          `
        },

        // Slide 2: UV-A(블랙라이트)를 쬐었더니? (동기 유발)
        {
          tag: '',
          title: 'UV-A(블랙라이트)를 쬐었더니?',
          content: `
            <div class="pres-stack">
              <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1.2rem;">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; text-align:center;">
                  <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-bottom:0.75rem; background:#0f172a;">
                    <img src="${getToolAsset('uv_demo_shoes.jpg')}" alt="흰 운동화 끈 & 옷" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block;">흰 운동화 끈 & 옷</strong>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; text-align:center;">
                  <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-bottom:0.75rem; background:#0f172a;">
                    <img src="${getToolAsset('uv_demo_notes.jpg')}" alt="형광펜 메모 & 종이" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block;">형광펜 메모 & 종이</strong>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; text-align:center;">
                  <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-bottom:0.75rem; background:#0f172a;">
                    <img src="${getToolAsset('uv_demo_gloves.jpg')}" alt="흰색 면장갑" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block;">흰색 면장갑</strong>
                </div>
              </div>

              <div class="pres-inquiry-box">
                <div class="inquiry-q">
                  "블랙라이트는 어두운 보랏빛인데, 왜 물체들은 눈부신 형광빛을 뿜어낼까?"
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습목표 (단독 슬라이드)
        {
          tag: '',
          title: '학습목표',
          content: `
            <div class="pres-objective-box">
              <p class="objective-main">
                <span>자외선과 가시광선의 파장 및 에너지 차이를 비교하고,</span>
                <span>일상 속 형광 물질을 관찰하여 빛 방출 현상을 탐구할 수 있다.</span>
              </p>
            </div>
          `
        },

        // Slide 4: 실험 준비물
        {
          tag: '',
          title: '실험 준비물',
          content: `
            <div class="pres-stack pres-tools-stack">
              <div class="pres-tools-img-box">
                <img src="${getToolAsset('oled_tools_1.jpg')}" alt="실험 준비물 실사 사진" class="pres-tools-img">
              </div>
              <div class="pres-tools-grid">
                <div class="pres-tool-name-card">
                  <strong>보안경 & UV-A 램프</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>토닉워터, 비타민음료, 올리브유</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>형광펜 & 천원권</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>암실 상자 & 검은 종이</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 실험실 안전 수칙
        {
          tag: '',
          title: '실험실 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card">
                <div class="pres-safety-title">1. 보안경 상시 착용</div>
                <div class="pres-safety-desc">
                  자외선(UV-A) 램프를 얼굴이나 눈에 직접 비추지 마세요. <strong>실험 종료 시까지 보안경을 상시 착용</strong>합니다.
                </div>
                <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-top:auto; border:1px solid #e2e8f0; background:#f1f5f9;">
                  <img src="${getToolAsset('safety_goggles.jpg')}" alt="실험실 보안경" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-title">2. 시약 음용 절대 금지</div>
                <div class="pres-safety-desc">
                  토닉워터, 비타민 음료, 올리브유는 <strong>실험용 관찰 시약</strong>입니다. 어떠한 경우에도 맛보거나 마시지 않습니다.
                </div>
                <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-top:auto; border:1px solid #e2e8f0; background:#f1f5f9;">
                  <img src="${getToolAsset('safety_no_drink.jpg')}" alt="실험용 관찰 시약 비커" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-title">3. 암실 상자 & 폐액 분리</div>
                <div class="pres-safety-desc">
                  암실 상자 덮개를 밀착하고 <strong>45도 각도로 조사</strong>하며, 실험 후 시약은 <strong>지정 폐액통에 분리 수거</strong>합니다.
                </div>
                <div style="width:100%; aspect-ratio:4/3; border-radius:8px; overflow:hidden; margin-top:auto; border:1px solid #e2e8f0; background:#f1f5f9;">
                  <img src="${getToolAsset('safety_darkbox_waste.jpg')}" alt="암실 상자 및 폐액 수거" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 형광 물질 관찰 순서
        {
          tag: '',
          title: '형광 물질 관찰 순서',
          content: `
            <div class="pres-stack">
              <div class="pres-steps-row">
                <div class="pres-step-box">
                  <div class="step-num">Step 1</div>
                  <div class="step-title">시약 및 재료 준비</div>
                  <p>3개 비커에 토닉워터, 비타민 음료, 올리브유를 <strong>각 30mL씩 담아 암실 상자에 배치</strong>하고 지폐와 메모지를 준비합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 2</div>
                  <div class="step-title">형광등 아래 기본 색상 기록</div>
                  <p>일반 실내 조명 아래에서 4가지 관찰 대상의 <strong>본래 기본 색상을 관찰표에 객관적으로 기록</strong>합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 3</div>
                  <div class="step-title">UV-A 램프 조사 & 형광빛 기록</div>
                  <p>보안경을 쓰고 암실 상자 안으로 UV-A 램프를 비추며 <strong>새롭게 뿜어져 나오는 형광 발광 색상을 기록</strong>합니다.</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: 형광 물질 관찰 결과
        {
          tag: '',
          title: '형광 물질 관찰 결과',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:20%;">실험 물질</th>
                    <th style="width:24%;">포함된 핵심 분자</th>
                    <th style="width:24%;">형광등 아래 기본 색상</th>
                    <th style="width:32%;">자외선 조사 시 관찰 결과</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>토닉워터</strong></td>
                    <td>퀴닌 분자 (Quinine)</td>
                    <td>무색투명</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">파란색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>비타민 음료</strong></td>
                    <td>리보플라빈 (비타민 B2)</td>
                    <td>맑은 노란색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#16a34a; font-size:1.02rem;">연두색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>올리브유</strong></td>
                    <td>엽록소 분자 (Chlorophyll)</td>
                    <td>연초록색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#dc2626; font-size:1.02rem;">붉은색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>지폐 & 형광펜</strong></td>
                    <td>형광 염료 (위조방지)</td>
                    <td>일반 종이색 / 기본 잉크색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#d97706; font-size:1.02rem;">숨겨진 형광 보안 섬유 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 빛의 파장과 에너지
        {
          tag: '',
          title: '빛의 파장과 에너지',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:1rem 1.4rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;">
                  <defs>
                    <linearGradient id="visRainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#4c1d95" />
                      <stop offset="14%" stop-color="#2563eb" />
                      <stop offset="30%" stop-color="#06b6d4" />
                      <stop offset="48%" stop-color="#10b981" />
                      <stop offset="65%" stop-color="#eab308" />
                      <stop offset="82%" stop-color="#f97316" />
                      <stop offset="100%" stop-color="#dc2626" />
                    </linearGradient>
                    <linearGradient id="irGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#991b1b" />
                      <stop offset="100%" stop-color="#580e0e" />
                    </linearGradient>
                    <marker id="arrowL" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 10 1 L 1 5 L 10 9 z" fill="#4f46e5" />
                    </marker>
                    <marker id="arrowR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#dc2626" />
                    </marker>
                  </defs>

                  <!-- 1. 상단 대분류 헤더 -->
                  <rect x="40" y="8" width="262" height="28" rx="7" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1.2" />
                  <text x="171" y="27" font-size="14" font-weight="800" fill="#6d28d9" text-anchor="middle">자외선 (UV)</text>

                  <rect x="310" y="8" width="310" height="28" rx="7" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2" />
                  <text x="465" y="27" font-size="14" font-weight="800" fill="#15803d" text-anchor="middle">가시광선 (Visible Light)</text>

                  <rect x="628" y="8" width="192" height="28" rx="7" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.2" />
                  <text x="724" y="27" font-size="14" font-weight="800" fill="#b91c1c" text-anchor="middle">적외선 (IR)</text>

                  <!-- 2. 메인 스펙트럼 바 -->
                  <g transform="translate(0, 44)">
                    <!-- UVC -->
                    <path d="M 48 0 L 130 0 L 130 64 L 48 64 A 8 8 0 0 1 40 56 L 40 8 A 8 8 0 0 1 48 0 Z" fill="#2e1065" />
                    <text x="85" y="37" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">UVC</text>

                    <!-- UVB -->
                    <rect x="131" y="0" width="80" height="64" fill="#581c87" />
                    <text x="171" y="37" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">UVB</text>

                    <!-- UV-A -->
                    <rect x="212" y="0" width="96" height="64" fill="#7e22ce" />
                    <text x="260" y="37" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">UV-A</text>

                    <!-- 가시광선 무지개 -->
                    <rect x="310" y="0" width="310" height="64" fill="url(#visRainbow)" />
                    <text x="465" y="37" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle" style="text-shadow:0 1px 4px rgba(0,0,0,0.8);">무지개색 (보라 ~ 빨강)</text>

                    <!-- 적외선 -->
                    <path d="M 622 0 L 812 0 A 8 8 0 0 1 820 8 L 820 56 A 8 8 0 0 1 812 64 L 622 64 Z" fill="url(#irGrad)" />
                    <text x="721" y="37" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">적외선</text>
                  </g>

                  <!-- 3. 파장 눈금선 및 수치 -->
                  <g transform="translate(0, 108)">
                    <line x1="40" y1="0" x2="40" y2="10" stroke="#94a3b8" stroke-width="1.8" />
                    <text x="40" y="25" font-size="13" font-weight="800" fill="#475569" text-anchor="middle">100</text>

                    <line x1="130" y1="0" x2="130" y2="10" stroke="#94a3b8" stroke-width="1.8" />
                    <text x="130" y="25" font-size="13" font-weight="800" fill="#475569" text-anchor="middle">280</text>

                    <line x1="211" y1="0" x2="211" y2="10" stroke="#94a3b8" stroke-width="1.8" />
                    <text x="211" y="25" font-size="13" font-weight="800" fill="#475569" text-anchor="middle">315</text>

                    <line x1="309" y1="0" x2="309" y2="10" stroke="#94a3b8" stroke-width="1.8" />
                    <text x="309" y="25" font-size="14" font-weight="800" fill="#2563eb" text-anchor="middle">400</text>

                    <line x1="621" y1="0" x2="621" y2="10" stroke="#94a3b8" stroke-width="1.8" />
                    <text x="621" y="25" font-size="14" font-weight="800" fill="#dc2626" text-anchor="middle">700</text>

                    <text x="820" y="25" font-size="13" font-weight="800" fill="#334155" text-anchor="end">파장 (nm)</text>
                  </g>

                  <!-- 4. 하단 물리적 특성 인디케이터 -->
                  <g transform="translate(0, 153)">
                    <rect x="40" y="0" width="780" height="42" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
                    <path d="M 330 21 L 55 21" stroke="#4f46e5" stroke-width="2.5" marker-end="url(#arrowL)" />
                    <text x="195" y="16" font-size="12.5" font-weight="800" fill="#4f46e5" text-anchor="middle">에너지 큼 (진동수 높음)</text>
                    <text x="195" y="32" font-size="11.5" font-weight="700" fill="#6366f1" text-anchor="middle">◀ 파장 짧음</text>

                    <line x1="430" y1="6" x2="430" y2="36" stroke="#cbd5e1" stroke-width="1.5" />

                    <path d="M 530 21 L 805 21" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowR)" />
                    <text x="665" y="16" font-size="12.5" font-weight="800" fill="#dc2626" text-anchor="middle">에너지 작음 (진동수 낮음)</text>
                    <text x="665" y="32" font-size="11.5" font-weight="700" fill="#ef4444" text-anchor="middle">파장 김 ▶</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">형광이란?</strong> 물질 속 분자가 큰 에너지(자외선)를 흡수한 뒤, 에너지가 더 작은 가시광선으로 바꾸어 방출하는 현상
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 생각해보기
        {
          tag: '',
          title: '사라진 에너지는 어디로?',
          content: `
            <div class="pres-stack pres-inquiry-stack">
              <div class="pres-inquiry-box">
                <div class="inquiry-q">
                  <span class="inquiry-line">"흡수한 자외선 에너지가 100이라면, 방출된 형광빛의 에너지는 70~80입니다.</span>
                  <span class="inquiry-line inquiry-accent">그렇다면 나머지 20~30의 에너지는 어디로 갔을까요?"</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 10: 에너지 보존 법칙
        {
          tag: '',
          title: '에너지 보존 법칙',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 흡수한 자외선 에너지 ] = [ 방출된 형광빛 에너지 ] + [ 열에너지 ]
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • 에너지는 사라진 것이 아니라 <strong>다른 형태의 에너지로 전환</strong>된 것입니다.
                </p>
                <p class="pres-law-desc-p">
                  • 분자가 자외선을 흡수한 후 미세하게 진동하면서 일부 에너지를 <strong>'열(열에너지)'</strong> 형태로 방출합니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 일상 속 형광 기술 활용
        {
          tag: '',
          title: '일상 속 형광 기술 활용',
          content: `
            <div class="pres-stack">
              <div class="pres-apps-grid">
                <div class="pres-app-card">
                  <div class="pres-app-img-wrap">
                    <img src="${getToolAsset('fluo_app_money.jpg')}" alt="위조지폐 및 신분증 감별">
                  </div>
                  <strong class="pres-app-title">위조지폐 및 신분증 감별</strong>
                  <p class="pres-app-desc">
                    지폐나 여권에 자외선(UV)을 비추면 숨겨진 <strong>형광 보안 섬유와 워터마크가 발광</strong>하여 위조 여부를 즉시 판별합니다.
                  </p>
                </div>
                <div class="pres-app-card">
                  <div class="pres-app-img-wrap">
                    <img src="${getToolAsset('fluo_app_pen.jpg')}" alt="형광펜 및 형광 염료">
                  </div>
                  <strong class="pres-app-title">형광펜 및 형광 염료</strong>
                  <p class="pres-app-desc">
                    눈에 보이지 않는 자외선을 흡수한 뒤, 사람의 눈에 매우 잘 띄는 <strong>선명하고 밝은 가시광선으로 바꾸어 방출</strong>합니다.
                  </p>
                </div>
                <div class="pres-app-card">
                  <div class="pres-app-img-wrap">
                    <img src="${getToolAsset('fluo_app_vest.jpg')}" alt="야간 안전 조끼 및 장비">
                  </div>
                  <strong class="pres-app-title">야간 안전 조끼 및 장비</strong>
                  <p class="pres-app-desc">
                    어두운 환경에서 미세한 빛을 받아 <strong>강하게 형광빛을 방출하여 보행자와 작업자의 안전을 확보</strong>합니다.
                  </p>
                </div>
              </div>
            </div>
          `
        },
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 2차시: 전자의 에너지 전달
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 전자의 에너지 전달',
      badge: 'OLED 2차시 · 전자의 에너지 전달',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                원자 속 전자의 에너지 전달
              </h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '',
          title: '원자 속 전자가 에너지를 받으면?',
          content: `
            <div class="pres-stack" style="gap:0.85rem;">
              <div class="pres-inquiry-box" style="padding:0.85rem 1.25rem;">
                <div class="inquiry-q" style="font-size:1.15rem; line-height:1.5;">
                  "탁구채로 공을 때리면 에너지를 받아 날아가듯,<br>
                  <span style="color:#7c3aed;">원자 속 전자가 자외선 빛 에너지를 받으면 어떤 일이 일어날까?</span>"
                </div>
              </div>
              <div class="pres-grid-2" style="gap:0.85rem;">
                <div class="pres-card" style="padding:0.75rem; text-align:center; display:flex; flex-direction:column; justify-content:space-between; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:220px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #e2e8f0;">
                    <img src="${getToolAsset('table_tennis_hit.jpg')}" alt="탁구채에 맞아 에너지를 받는 탁구공" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <div>
                    <strong style="color:#0f172a; font-size:1rem; display:block; word-break:keep-all;">탁구채의 강한 운동 에너지를 받아 튕겨 날아가는 탁구공</strong>
                  </div>
                </div>
                <div class="pres-card pres-highlight" style="padding:0.75rem; text-align:center; display:flex; flex-direction:column; justify-content:space-between; background:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:220px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #ddd6fe;">
                    <img src="${getToolAsset('electron_uv_absorb.jpg')}" alt="자외선 빛 에너지를 흡수하는 원자 속 전자" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <div>
                    <strong style="color:#6d28d9; font-size:1rem; display:block; word-break:keep-all;">자외선 빛 에너지를 받은 전자는?</strong>
                  </div>
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습목표
        {
          tag: '',
          title: '학습목표',
          content: `
            <div class="pres-objective-box">
              <p class="objective-main">
                <span>전자의 에너지 전달 과정을</span>
                <span>에너지 보존 법칙으로 설명할 수 있다.</span>
              </p>
            </div>
          `
        },

        // Slide 4: 실습 준비물
        {
          tag: '',
          title: '실습 준비물',
          content: `
            <div class="pres-stack pres-tools-stack">
              <div class="pres-tools-grid" style="grid-template-columns: repeat(4, 1fr); gap:1rem;">
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">💻</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">스마트 태블릿/노트북</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">가상실험실 접속</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">🧪</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">가상실험실</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">전자의 에너지 전달 탐구</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">📏</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">컬러 스펙트럼 자</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">파장과 빛 에너지 비교</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">📝</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">탐구 활동지</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">전자의 에너지 전달 기록</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 실험실 안전 및 실습 수칙
        {
          tag: '',
          title: '실험실 안전 및 실습 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="smartphone"></i></div>
                <div class="pres-safety-title">1. 스마트기기 안전 관리</div>
                <div class="pres-safety-desc">
                  태블릿을 책상 위에 안정적으로 거치하고, 조작 시 충격이나 낙하에 주의합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="sliders"></i></div>
                <div class="pres-safety-title">2. 단계별 시뮬레이션 준수</div>
                <div class="pres-safety-desc">
                  <strong>자외선 흡수 ➔ 열 방출 ➔ 형광빛 방출</strong> 과정을 순서대로 차근차근 관찰합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">3. 모둠원 협력 탐구</div>
                <div class="pres-safety-desc">
                  시뮬레이터 조작 담당과 관찰 기록 담당을 번갈아 가며 모든 모둠원이 참여합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 가상실험실 전자의 3단계 여정
        {
          tag: '',
          title: '가상실험실: 전자의 에너지 전달 3단계',
          content: `
            <div class="pres-stack">
              <div class="pres-steps-row">
                <div class="pres-step-box">
                  <div class="step-num" style="background:#7c3aed !important; color:#ffffff !important; font-weight:800; border-radius:4px; padding:0.2rem 0.6rem; display:inline-block; font-size:0.88rem; margin-bottom:0.6rem;">1단계</div>
                  <p>가상실험실에서 전자가 <strong>자외선 빛 에너지</strong>를 흡수하는 모습을 관찰합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num" style="background:#ea580c !important; color:#ffffff !important; font-weight:800; border-radius:4px; padding:0.2rem 0.6rem; display:inline-block; font-size:0.88rem; margin-bottom:0.6rem;">2단계</div>
                  <p>전자가 에너지를 전달하는 과정에서 일부 에너지가 <strong>열(열에너지)</strong> 형태로 방출되는 모습을 확인합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num" style="background:#2563eb !important; color:#ffffff !important; font-weight:800; border-radius:4px; padding:0.2rem 0.6rem; display:inline-block; font-size:0.88rem; margin-bottom:0.6rem;">3단계</div>
                  <p>남은 에너지가 눈에 보이는 선명한 <strong>파란 형광빛(가시광선)</strong>으로 방출되는 모습을 기록합니다.</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: 시뮬레이션 관찰 결과표
        {
          tag: '',
          title: '시뮬레이션 관찰 결과표',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:20%; text-align:center;">단계</th>
                    <th style="width:26%;">에너지 출입 형태</th>
                    <th style="width:26%;">전자의 에너지 전달 과정</th>
                    <th style="width:28%;">관찰 결과 및 정답</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center;"><strong>1단계</strong></td>
                    <td>자외선 빛 에너지</td>
                    <td>전자가 자외선 빛 에너지를 흡수함</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#6d28d9; font-size:1.02rem;">자외선</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align:center;"><strong>2단계</strong></td>
                    <td>열(열에너지)</td>
                    <td>흡수한 에너지의 일부를 열로 방출함</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#ea580c; font-size:1.02rem;">열</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align:center;"><strong>3단계</strong></td>
                    <td>형광빛(가시광선)</td>
                    <td>남은 에너지를 형광빛으로 방출함</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">형광빛</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 빛의 파장과 에너지의 관계
        {
          tag: '',
          title: '빛의 파장과 에너지의 관계',
          content: `
            <div class="pres-stack" style="gap:1rem;">
              <div class="pres-card" style="padding:0.6rem; text-align:center; background:#080d1a; border:1px solid #1e293b; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.12);">
                <div style="width:100%; aspect-ratio:16/9; max-height:clamp(250px, 42vh, 480px); border-radius:10px; overflow:hidden; margin:0 auto; background:#080d1a; display:flex; align-items:center; justify-content:center;">
                  <img src="${getToolAsset('light_energy_wave.jpg')}" alt="빛의 파장과 에너지 전달 모형" style="width:100%; height:100%; object-fit:contain; display:block;">
                </div>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">에너지와 파장의 관계:</strong> 흡수한 자외선(365nm) 에너지 중 일부를 열로 방출했기 때문에, 남은 에너지가 형광빛(450nm)으로 나올 때는 에너지가 작아져 파장이 더 긴 가시광선(파란빛)이 됩니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 생각해보기 (질문)
        {
          tag: '',
          title: '사라진 에너지는 어디로?',
          content: `
            <div class="pres-stack pres-inquiry-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:2.8rem 2rem; max-width:880px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="font-size:1.35rem; line-height:1.8;">
                  <span class="inquiry-line">전자가 흡수한 자외선 에너지가 100인데, 방출된 형광빛 에너지는 75에 불과합니다.</span>
                  <span class="inquiry-line inquiry-accent" style="color:#7c3aed; display:block; margin-top:0.6rem;">그렇다면 나머지 에너지는 어디로 갔을까요?</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 10: 에너지 보존 법칙 (결과 및 공식)
        {
          tag: '',
          title: '에너지 보존 법칙',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-grid">
                  <div class="pres-eq-term">흡수한 자외선 에너지</div>
                  <div class="pres-eq-sign">=</div>
                  <div class="pres-eq-term">방출된 형광빛 에너지</div>
                  <div class="pres-eq-sign">+</div>
                  <div class="pres-eq-term">방출된 열에너지</div>

                  <div class="pres-eq-num">(100)</div>
                  <div class="pres-eq-num-sign">=</div>
                  <div class="pres-eq-num">(75)</div>
                  <div class="pres-eq-num-sign">+</div>
                  <div class="pres-eq-num">(25)</div>
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • 에너지는 사라진 것이 아니라 <strong>'열' 형태로 방출</strong>된 것입니다.
                </p>
                <p class="pres-law-desc-p">
                  • 에너지는 사라지지 않고 형태만 바뀌며, <strong>전체 에너지의 총합은 항상 일정하게 보존</strong>됩니다.
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 3차시: 스마트폰의 배터리 낭비 (1:3 에너지 전환)
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 스마트폰의 배터리 낭비',
      badge: 'OLED 3차시 · 1:3 낭비 법칙 & 배터리 난제',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                스마트폰의 배터리 낭비
              </h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 (실사 사진 2컷 + 질문 상자)
        {
          tag: '',
          title: '스마트폰을 쓰면 왜 뜨거워질까?',
          content: `
            <div class="pres-stack" style="gap:0.9rem;">
              <div class="pres-grid-2" style="gap:1rem;">
                <div class="pres-card" style="padding:0.85rem; text-align:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:220px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #e2e8f0;">
                    <img src="${getToolAsset('smartphone_heat_demo.jpg')}" alt="장시간 사용 시 뜨거워지는 스마트폰" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.02rem; display:block; word-break:keep-all;">영상이나 게임을 오래 하면 뜨거워지는 스마트폰</strong>
                </div>

                <div class="pres-card pres-highlight" style="padding:0.85rem; text-align:center; background:#fff1f2; border:1px solid #fecdd3; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:220px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #fecdd3;">
                    <img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="발열과 함께 빠르게 소모되는 배터리" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#be123c; font-size:1.02rem; display:block; word-break:keep-all;">발열과 함께 순식간에 닳아버리는 배터리</strong>
                </div>
              </div>

              <div class="pres-inquiry-box" style="padding:0.9rem 1.4rem;">
                <div class="inquiry-q" style="font-size:1.15rem; line-height:1.5;">
                  "화면을 켜기 위해 배터리 전기를 100 넣었는데,<br>
                  <span style="color:#e11d48;">왜 화면은 점점 뜨거워지고 배터리는 순식간에 사라질까?</span>"
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습목표 (단독 박스 2줄)
        {
          tag: '',
          title: '학습목표',
          content: `
            <div class="pres-objective-box">
              <p class="objective-main">
                <span>스마트폰 화면 속 화소를 관찰하고,</span>
                <span>전기 공급 시 75%의 전기가 열로 낭비되는 원인을 설명할 수 있다.</span>
              </p>
            </div>
          `
        },

        // Slide 4: 탐구 준비물 (실사 사진 1컷 + 4개 교구명 카드)
        {
          tag: '',
          title: '탐구 준비물',
          content: `
            <div class="pres-stack pres-tools-stack">
              <div class="pres-tools-img-box">
                <img src="${getToolAsset('oled_tools_3.jpg')}" alt="3차시 탐구 준비물 실사 사진" class="pres-tools-img">
              </div>
              <div class="pres-tools-grid">
                <div class="pres-tool-name-card">
                  <strong>마이크로 루페 (60배)</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>스마트폰 디스플레이</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>가상실험실</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>탐구 활동지</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 관찰 및 기기 보호 수칙 (3열 카드)
        {
          tag: '',
          title: '관찰 및 기기 보호 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield"></i></div>
                <div class="pres-safety-title">1. 화면 스크래치 방지</div>
                <div class="pres-safety-desc">
                  루페 렌즈의 금속 부위가 액정에 직접 닿지 않도록 <strong>클립 보호 패드를 반드시 확인</strong>합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="smartphone"></i></div>
                <div class="pres-safety-title">2. 카메라 화면으로 관찰</div>
                <div class="pres-safety-desc">
                  눈의 피로를 줄이기 위해 루페를 스마트폰 카메라 렌즈에 맞추고 <strong>화면을 보며 함께 관찰</strong>합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="battery-warning"></i></div>
                <div class="pres-safety-title">3. 화면 발열 및 전원 관리</div>
                <div class="pres-safety-desc">
                  화면을 장시간 최대 밝기로 켜두면 과열되므로 <strong>관찰 후 스마트폰 화면을 잠시 꺼둡니다</strong>.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 스마트폰 화면 초근접 관찰 (루페 60배 매크로 실사 사진 + 빛의 합성 원리)
        {
          tag: '',
          title: '스마트폰 화면 초근접 관찰',
          content: `
            <div class="pres-stack" style="gap:1rem;">
              <div class="pres-grid-2" style="align-items:center; gap:1.4rem;">
                <div style="background:#0f172a; border:2px solid #334155; border-radius:14px; overflow:hidden; aspect-ratio:4/3; box-shadow:0 8px 24px rgba(0,0,0,0.25);">
                  <img src="${getToolAsset('oled_subpixel_macro.jpg')}" alt="루페 60배로 본 스마트폰 화면 화소" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
                <div style="display:flex; flex-direction:column; gap:1rem;">
                  <div class="pres-card" style="padding:1.2rem 1.4rem; background:#ffffff; border-left:4px solid #2563eb;">
                    <div style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.45rem;">
                      빨강 · 초록 · 파랑 화소의 빛 합성
                    </div>
                    <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                      눈에는 하얗게 보이지만, 루페로 초근접 확대하면 <strong>빨강(R), 초록(G), 파랑(B)</strong> 화소가 빛을 합성하여 흰색을 만듭니다.
                    </p>
                  </div>
                  <div class="pres-card pres-highlight" style="padding:1.2rem 1.4rem; background:#eff6ff; border-left:4px solid #3b82f6;">
                    <div style="font-size:1.15rem; font-weight:800; color:#1d4ed8; margin-bottom:0.45rem;">
                      스스로 빛을 내는 분자 (OLED)
                    </div>
                    <p style="font-size:0.98rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                      화면의 작은 화소 하나하나는 배터리 전기를 받아 <strong>스스로 빛을 내는 분자</strong>들로 이루어져 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: 전기 에너지 전환 결과 (인터랙티브 결과표)
        {
          tag: '',
          title: '배터리에서 공급된 전기 에너지의 전환 결과',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:26%; text-align:center;">구분</th>
                    <th style="width:24%;">에너지 방출 형태</th>
                    <th style="width:20%;">생성 비율</th>
                    <th style="width:30%;">결과 및 특성</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center;"><strong>빛을 내는 분자</strong></td>
                    <td>유용한 화면 빛</td>
                    <td><strong style="color:#2563eb; font-size:1.2rem;">25%</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.05rem;">화면으로 빛을 방출</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align:center;"><strong>열을 내는 분자</strong></td>
                    <td>쓸모없는 발열</td>
                    <td><strong style="color:#dc2626; font-size:1.2rem;">75%</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#dc2626; font-size:1.05rem;">뜨거운 발열로 낭비</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 에너지 보존 법칙 (수업지도안 공식 완벽 일치)
        {
          tag: '',
          title: '에너지 보존 법칙',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-grid">
                  <div class="pres-eq-term">공급된 배터리 전기</div>
                  <div class="pres-eq-sign">=</div>
                  <div class="pres-eq-term">유용한 화면 빛</div>
                  <div class="pres-eq-sign">+</div>
                  <div class="pres-eq-term">버려지는 열에너지</div>

                  <div class="pres-eq-num">(100)</div>
                  <div class="pres-eq-num-sign">=</div>
                  <div class="pres-eq-num">(25)</div>
                  <div class="pres-eq-num-sign">+</div>
                  <div class="pres-eq-num">(75)</div>
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • 전기를 넣었을 때 <strong>분자의 75%는 빛을 내지 못하고</strong> 심하게 진동하며 열을 방출합니다.
                </p>
                <p class="pres-law-desc-p">
                  • 에너지는 사라진 것이 아니라 열로 바뀐 것이며, <strong>전체 에너지의 총합은 항상 보존</strong>됩니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 75% 열 손실이 스마트폰에 주는 영향 (지도안 모둠 토의 3대 피해)
        {
          tag: '',
          title: '75% 열 손실이 스마트폰에 주는 영향',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔥</div>
                <strong style="font-size:1.25rem; color:#dc2626; display:block; margin-bottom:0.6rem;">기기 과열 (발열)</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  버려진 75%의 열이 스마트폰 내부 온도를 높여 기기를 뜨겁게 달굽니다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center; padding:1.6rem 1.2rem; background:#fff1f2; border:1px solid #fecdd3;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔋</div>
                <strong style="font-size:1.25rem; color:#b91c1c; display:block; margin-bottom:0.6rem;">배터리 조기 방전</strong>
                <p style="font-size:0.98rem; color:#9f1239; margin:0; line-height:1.6; word-break:keep-all;">
                  전기의 75%가 열로 버려지기 때문에 배터리가 순식간에 닳아 사용 시간이 줄어듭니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">⚠️</div>
                <strong style="font-size:1.25rem; color:#d97706; display:block; margin-bottom:0.6rem;">화면 잔상 (번인)</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  지속적인 열에 노출된 분자가 손상되어 화면에 영구적인 얼룩 잔상이 남습니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 3차시 핵심 배움 정리
        {
          tag: '',
          title: '3차시 핵심 배움 정리',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔍</div>
                <strong style="font-size:1.25rem; color:#0f172a; display:block; margin-bottom:0.6rem;">화소와 빛의 합성</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  스마트폰 화면은 빨강, 초록, 파랑 스스로 빛을 내는 화소의 빛 합성으로 색을 만듭니다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center; padding:1.6rem 1.2rem; background:#eff6ff; border:1px solid #bfdbfe;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔄</div>
                <strong style="font-size:1.25rem; color:#1d4ed8; display:block; margin-bottom:0.6rem;">1:3 에너지 전환</strong>
                <p style="font-size:0.98rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  배터리 전기를 공급하면 <strong>빛을 내는 분자 25%</strong>, <strong>열을 내는 분자 75%</strong>가 발생합니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">⚡</div>
                <strong style="font-size:1.25rem; color:#0f172a; display:block; margin-bottom:0.6rem;">75% 배터리 난제</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  빛을 내지 못한 75%가 열로 낭비되어 화면 발열과 배터리 조기 소모를 일으킵니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는? (차시 예고)
        {
          tag: '',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack pres-inquiry-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:3rem 2rem; max-width:900px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:1.15rem; font-weight:800; color:#2563eb; margin-bottom:0.8rem;">
                  [4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너
                </div>
                <div class="inquiry-q" style="font-size:1.35rem; line-height:1.8;">
                  <span style="color:#0f172a; display:block;">
                    "열로 식어버리는 75%의 에너지를 빛으로 구출할 방법은 없을까?"
                  </span>
                  <span style="color:#2563eb; display:block; margin-top:0.6rem; font-size:1.2rem;">
                    열로 식기 전에 빛으로 되돌리는 대한민국 KAIST의 초고속 에너지 전환 기술이 공개됩니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 4차시: KAIST 핫 엑시톤 100% 구출작전
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
      badge: 'OLED 4차시 · KAIST 연구 성과',
      slides: [
        // Slide 1: 단독 질문형 표지
        {
          tag: '4차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:2.8rem 2rem; max-width:880px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.7;">
                  <span style="font-size:1.3rem; font-weight:700; color:#475569; display:block; margin-bottom:0.5rem;">[4차시] KAIST의 75% 구출 작전</span>
                  <span style="font-size:1.65rem; font-weight:800; color:#0f172a; display:block; white-space:nowrap; letter-spacing:-0.5px;">KAIST 초고속 에너지 전환 기술과 미래 청색 분자 디자이너</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '4차시 도입 · 핵심 질문',
          title: '동기 유발: 왜 항상 파란색(Blue) OLED가 먼저 고장 날까?',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="tv"></i> 청색 OLED의 수명 한계</div>
                <ul class="pres-list">
                  <li>빨간색과 초록색 화소는 수명이 <strong>10만 시간 이상</strong>으로 매우 튼튼합니다.</li>
                  <li>하지만 파란색 화소는 에너지가 너무 높아 <strong>분자가 쉽게 깨지고 수명이 짧습니다</strong>.</li>
                  <li>파란색 소자가 먼저 타서 죽으면 화면에 누런 잔상인 <strong>번인(Burn-in)</strong>이 발생합니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "KAIST 연구팀은 어떻게 열로 버려지던 75%의 에너지를 빛으로 구출하여 효율 100%를 달성했을까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="zap"></i> <strong>열로 식기 전에 빛으로 되돌리는 초고속 에너지 전환 기술!</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '4차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-stack">
              <div class="pres-card" style="padding:2.2rem 2.5rem; max-width:820px; margin:0 auto; box-sizing:border-box;">
                <div class="pres-card-title" style="font-size:1.25rem; margin-bottom:1.4rem;"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list" style="font-size:1.12rem; line-height:2.0;">
                  <li>KAIST CPRL 연구진의 <strong>초고속 에너지 전환 원천 기술</strong> 원리를 설명할 수 있다.</li>
                  <li>차세대 디스플레이의 최대 난제인 <strong>청색(Blue) OLED 수명 및 효율</strong> 문제 해결 방안을 탐구한다.</li>
                  <li>첨단 디스플레이를 개발하는 <strong>미래 분자 디자이너 프로젝트 기획서</strong>를 작성하고 발표한다.</li>
                </ul>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 실습 준비물 카드
        {
          tag: '4차시 준비 · 실험 교구',
          title: '4차시 탐구 준비물',
          content: `
            <div class="pres-stack">
              <div class="pres-tools-4col">
                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_circuit.jpg')}" alt="발광 소자 회로 키트" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">초소형 발광 소자 키트</strong>
                  <p class="tool-card-desc">전기를 빛으로 바꾸는 반도체 부품</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_tape.jpg')}" alt="구리 테이프 & 코인 전지" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">구리 테이프 & 전지</strong>
                  <p class="tool-card-desc">회로를 직접 구성하는 전도성 실험 키트</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_tablet.jpg')}" alt="KAIST 분자 설계 태블릿" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">분자 시뮬레이터 앱</strong>
                  <p class="tool-card-desc">초고속 에너지 전환 경로를 설계하는 디지털 앱</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_proposal.jpg')}" alt="분자 디자이너 기획서" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">분자 디자이너 기획서</strong>
                  <p class="tool-card-desc">나만의 청색 분자 설계안 작성 활동지</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 안전 및 프로젝트 수칙
        {
          tag: '4차시 준비 · 안전 수칙',
          title: '회로 제작 및 화학 시뮬레이션 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="battery-charging"></i></div>
                <div class="pres-safety-title">1. 배터리 단락 주의</div>
                <div class="pres-safety-desc">
                  코인 전지의 (+)극과 (-)극을 구리 테이프로 직접 연결하여 과열되지 않도록 극성을 확인합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="scissors"></i></div>
                <div class="pres-safety-title">2. 구리 테이프 취급 주의</div>
                <div class="pres-safety-desc">
                  구리 포일 단면이 날카로울 수 있으므로 손가락이 베이지 않도록 가위를 조심히 다룹니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="save"></i></div>
                <div class="pres-safety-title">3. 분자 설계안 저장</div>
                <div class="pres-safety-desc">
                  가상실험실에서 설계한 분자의 에너지 준위 그래프를 캡처하여 활동지에 깔끔하게 기록합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 프로젝트 3단계
        {
          tag: '4차시 전개 · 탐구 절차',
          title: '탐구 활동: KAIST 초고속 에너지 전환 미션',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">청색 난제 분석</div>
                <p>구리 테이프 회로로 발광을 확인하고, 높은 에너지로 인해 파란색 소자가 쉽게 파괴되는 원인을 분석합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">초고속 에너지 전환 경로 연결</div>
                <p>가상실험실(Lab 3)에서 열로 식어버리기 전에 빛을 낼 수 있는 상태로 방향을 전환하는 <strong>초고속 에너지 전환 경로</strong>를 연결합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">발광 효율 100% 달성</div>
                <p>버려지던 75%의 에너지가 초고속으로 전환되어 100% 찬란한 빛으로 뿜어져 나오는 효율을 확인합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 1~4세대 OLED 진화 비교표
        {
          tag: '4차시 전개 · 결과 분석',
          title: 'OLED 세대별 발광 효율 및 특성 비교표',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:24%;">OLED 기술 세대</th>
                    <th style="width:24%;">주요 발광 원리</th>
                    <th style="width:20%;">내부 발광 효율</th>
                    <th style="width:32%;">특징 및 장단점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1세대 (형광)</strong></td>
                    <td>빛을 내는 분자만 발광</td>
                    <td>최대 <strong>25%</strong></td>
                    <td>75% 열 손실로 화면 과열 및 배터리 소모 심함</td>
                  </tr>
                  <tr>
                    <td><strong>2세대 (인광)</strong></td>
                    <td>희귀 중금속(이리듐) 첨가</td>
                    <td>최대 100%</td>
                    <td>희귀 금속으로 매우 비쌈, <strong>청색 인광은 수명 극히 짧음</strong></td>
                  </tr>
                  <tr>
                    <td><strong>4세대 (KAIST 초고속 에너지 전환)</strong></td>
                    <td>열로 식기 전 초고속 빛 전환 (핫 엑시톤 기술)</td>
                    <td><strong style="color:#2563eb; font-size:1.1rem;">100%</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">비싼 중금속 없이 순수 유기 분자로 100% 청색 발광 & 긴 수명 달성!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG KAIST 초고속 에너지 전환 메커니즘 다이어그램
        {
          tag: '4차시 전개 · 과학 다이어그램',
          title: 'KAIST CPRL 초고속 에너지 전환 메커니즘 (핫 엑시톤 기술)',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:0.8rem 1.2rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', sans-serif;">
                  <defs>
                    <marker id="arrowR4" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#2563eb" />
                    </marker>
                    <marker id="arrowDown4" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 1 0 L 5 9 L 9 0 z" fill="#2563eb" />
                    </marker>
                  </defs>

                  <!-- 1층 바닥 상태 레벨 -->
                  <line x1="60" y1="175" x2="520" y2="175" stroke="#0f172a" stroke-width="3" />
                  <text x="70" y="195" font-size="13" font-weight="800" fill="#475569">바닥 상태 (안정된 상태)</text>

                  <!-- 에너지 상태 사다리 (좌측: 높은 상태 vs 열 식는 경로) -->
                  <!-- 높은 상태 -->
                  <line x1="80" y1="50" x2="220" y2="50" stroke="#dc2626" stroke-width="3" />
                  <rect x="75" y="24" width="130" height="22" rx="5" fill="#fef2f2" stroke="#fecaca" stroke-width="1" />
                  <text x="140" y="40" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">에너지가 높은 상태</text>

                  <!-- 열로 식어버리는 경로 (갇힌 곳) -->
                  <line x1="80" y1="120" x2="220" y2="120" stroke="#991b1b" stroke-width="2.5" stroke-dasharray="4,3" />
                  <text x="150" y="138" font-size="11.5" font-weight="700" fill="#991b1b" text-anchor="middle">열로 식어버리는 경로 (75% 손실)</text>

                  <!-- 빛을 내는 상태 레벨 (우측) -->
                  <line x1="360" y1="65" x2="500" y2="65" stroke="#2563eb" stroke-width="3" />
                  <rect x="375" y="38" width="110" height="22" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
                  <text x="430" y="54" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">빛을 내는 상태</text>

                  <!-- KAIST 초고속 에너지 전환 경로 화살표 -->
                  <path d="M 220 50 Q 290 35 355 60" fill="none" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowR4)" />
                  <rect x="225" y="12" width="150" height="24" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.2" />
                  <text x="300" y="28" font-size="11.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">⚡ 초고속 에너지 전환 경로</text>

                  <!-- 식어버리기 전 전환 화살표 설명 -->
                  <text x="145" y="85" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">식어버리기 전에 빛으로 전환!</text>

                  <!-- 100% 청색 형광 방출 화살표 -->
                  <line x1="430" y1="65" x2="430" y2="170" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowDown4)" />
                  <rect x="445" y="105" width="125" height="26" rx="6" fill="#2563eb" />
                  <text x="507" y="122" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">✨ 100% 청색 빛 방출</text>

                  <!-- 우측: 핵심 원리 요약 박스 -->
                  <g transform="translate(560, 20)">
                    <rect x="0" y="0" width="280" height="175" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
                    <text x="140" y="30" font-size="14.5" font-weight="800" fill="#0f172a" text-anchor="middle">KAIST 초고속 전환 원리</text>
                    <line x1="15" y1="44" x2="265" y2="44" stroke="#e2e8f0" stroke-width="1" />
                    
                    <text x="20" y="72" font-size="12.5" font-weight="700" fill="#991b1b">• 75%의 에너지가 열로 완전히</text>
                    <text x="32" y="92" font-size="12" font-weight="700" fill="#991b1b">식기 전 높은 에너지에서 포착</text>
                    <text x="20" y="118" font-size="12.5" font-weight="700" fill="#1d4ed8">• 빛을 내는 상태로 초고속 전환</text>
                    
                    <rect x="15" y="132" width="250" height="34" rx="7" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
                    <text x="140" y="154" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">75% 열 손실 ➔ 100% 빛으로 완벽 구출!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">초고속 에너지 전환(핫 엑시톤)이란?</strong> 75%의 에너지가 열로 식어버리기 전, 에너지가 높은 상태에서 빛을 낼 수 있는 상태로 초고속 전환시켜 100% 빛을 내게 하는 KAIST 원천 기술
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 미래 청색 OLED 분자 디자이너 핵심 전략
        {
          tag: '4차시 전개 · 핵심 원리',
          title: '미래 청색 OLED 분자 디자이너 핵심 전략',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="shield-check"></i> 전략 1: 단단한 분자 결합 설계</div>
                <p>원자 사이를 강력한 결합 구조로 꽁꽁 묶어 결합이 진동으로 흔들리며 깨지는 것을 원천 차단합니다.</p>
                <div class="pres-badge-box" style="margin-top:1rem; background:#f0fdf4; border-color:#bbf7d0; color:#15803d;">
                  <i data-lucide="check"></i> <strong>분자 깨짐 방지 ➔ 화면 번인(Burn-in) 종식!</strong>
                </div>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="zap"></i> 전략 2: 초고속 에너지 전환 경로 연결</div>
                <p>KAIST CPRL의 초고속 에너지 전환 경로를 분자에 적용하여, 갇혀서 열만 내던 75%의 에너지를 100% 청색 빛으로 구출합니다.</p>
                <div class="pres-badge-box" style="margin-top:1rem;">
                  <i data-lucide="sparkles"></i> <strong>배터리 2배 지속 & 이론 효율 100% 달성!</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 10: 4차시 핵심 배움 확인
        {
          tag: '4차시 정리 · 배움 확인',
          title: '4차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">💎</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">청색 OLED 난제</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  높은 빛 에너지로 인해 분자가 쉽게 분해되고 화면 번인이 발생하는 치명적 약점
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">⚡</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">초고속 에너지 전환</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  열로 식어버리기 전에 빛을 내는 상태로 순식간에 방향을 바꾸는 초고속 에너지 전환 원천 기술
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🧪</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">분자 디자이너 진로</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  컴퓨터 시뮬레이션으로 차세대 롤러블 디스플레이 분자를 설계하는 계산화학자의 꿈
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: OLED 패키지 완주 및 미래 진로
        {
          tag: '4차시 정리 · 모듈 완주',
          title: '[OLED 모듈 완주] 스마트폰 속 75% 배터리 도둑을 잡아라!',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-card" style="padding:2.6rem 2.2rem; max-width:860px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:2.8rem; margin-bottom:0.8rem;">🏆</div>
                <h3 style="font-size:1.6rem; color:#1d4ed8; margin-bottom:0.8rem; font-weight:800;">4차시 첨단 탐구 여정을 훌륭히 마쳤습니다!</h3>
                <p style="font-size:1.05rem; line-height:1.8; color:#475569; max-width:680px; margin:0 auto 1.4rem auto; word-break:keep-all;">
                  어둠 속을 밝히는 형광빛의 원리(1차시)부터, 전자의 에너지 전달(2차시), 75% 배터리 도둑(3차시), 
                  그리고 KAIST 초고속 에너지 전환 100% 구출 작전(4차시)까지 대한민국의 첨단 과학을 완벽히 정복했습니다.
                </p>
                <div style="display:inline-flex; gap:0.8rem; flex-wrap:wrap; justify-content:center;">
                  <span style="background:#eff6ff; color:#1d4ed8; font-size:0.95rem; font-weight:700; padding:0.5rem 1.1rem; border-radius:9999px; border:1px solid #bfdbfe;">계산화학자 진로</span>
                  <span style="background:#f5f3ff; color:#6d28d9; font-size:0.95rem; font-weight:700; padding:0.5rem 1.1rem; border-radius:9999px; border:1px solid #ddd6fe;">신소재 나노공학</span>
                  <span style="background:#ecfdf5; color:#065f46; font-size:0.95rem; font-weight:700; padding:0.5rem 1.1rem; border-radius:9999px; border:1px solid #a7f3d0;">KAIST CPRL 탐구 완주</span>
                </div>
              </div>
            </div>
          `
        }
      ]
    }
  };
