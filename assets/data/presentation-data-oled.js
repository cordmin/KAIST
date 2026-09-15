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
    // OLED 2차시: 전자의 점프와 에너지 준위
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 꼬마 전자의 트램펄린 점프: 들뜬 상태와 에너지 전환',
      badge: 'OLED 2차시 · 전자의 에너지 준위',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                꼬마 전자의 트램펄린 점프:<br><span style="color:#7c3aed;">들뜬 상태와 에너지 전환</span>
              </h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '',
          title: '전자는 왜 정해진 높이로만 점프할까?',
          content: `
            <div class="pres-stack" style="gap:1.2rem;">
              <div class="pres-inquiry-box" style="padding:2.2rem 1.6rem;">
                <div class="inquiry-q" style="font-size:1.35rem; line-height:1.7;">
                  "전자는 계단과 계단 사이 허공에 서 있을 수 있을까?<br>
                  <span style="color:#7c3aed;">왜 정확히 정해진 높이로만 점프할까?</span>"
                </div>
              </div>
              <div class="pres-grid-2">
                <div class="pres-card">
                  <div class="pres-card-title"><i data-lucide="activity"></i> 트램펄린 놀이터의 전자</div>
                  <p style="font-size:1.1rem; line-height:1.75; color:#334155; margin:0;">
                    바닥(1층)에서 쉬던 전자가 <strong>강한 자외선 에너지</strong>를 받으면 옥상(3층)으로 껑충 뛰어오릅니다!
                  </p>
                </div>
                <div class="pres-card pres-highlight" style="background:#f5f3ff; border-color:#ddd6fe;">
                  <div class="pres-card-title" style="color:#6d28d9;"><i data-lucide="sparkles"></i> 미시세계의 규칙: 양자화</div>
                  <p style="font-size:1.1rem; line-height:1.75; color:#4c1d95; margin:0;">
                    전자는 1.5층이나 2.3층 같은 어중간한 높이에는 결코 머물 수 없습니다. 이것이 바로 <strong>에너지의 양자화(불연속 계단)</strong>입니다.
                  </p>
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
                <span>원자 속 전자의 에너지 준위(불연속 계단)를 모형으로 설명하고,</span>
                <span>흡수 ➔ 진동 열 방출 ➔ 형광 3단계를 조작하여 스토크스 이동을 탐구할 수 있다.</span>
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
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">스마트 태블릿</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">HTML5 가상실험실(Lab 1) 구동</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">🃏</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">에너지 준위 모형 카드</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">S₀ 바닥 상태 & S₁ 들뜬 상태</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">📏</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">컬러 스펙트럼 자</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">파장과 에너지 수치 비교</p>
                </div>
                <div class="pres-card" style="text-align:center; padding:1.4rem 1rem;">
                  <div style="font-size:2.2rem; margin-bottom:0.6rem;">📝</div>
                  <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.4rem;">탐구 활동지 2번</strong>
                  <p style="font-size:0.95rem; color:#64748b; margin:0; word-break:keep-all;">시뮬레이션 관찰표 기록</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 실험실 안전 수칙
        {
          tag: '',
          title: '실험실 안전 및 실습 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="smartphone"></i></div>
                <div class="pres-safety-title">1. 스마트기기 안전 관리</div>
                <div class="pres-safety-desc">
                  태블릿 거치대를 안정적으로 설치하고, 물기 있는 손으로 만지지 않습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="sliders"></i></div>
                <div class="pres-safety-title">2. 단계별 시뮬레이션 준수</div>
                <div class="pres-safety-desc">
                  버튼을 무작위로 누르지 않고, <strong>자외선 흡수 ➔ 진동 ➔ 형광 방출</strong> 과정을 순서대로 관찰합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">3. 모둠원 역할 분담</div>
                <div class="pres-safety-desc">
                  시뮬레이터 조작 담당과 관찰 기록 담당을 번갈아 가며 모든 학생이 체험합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 가상실험실 전자의 3단계 여정
        {
          tag: '',
          title: '가상실험실(Lab 1): 전자의 3단계 여정',
          content: `
            <div class="pres-stack">
              <div class="pres-steps-row">
                <div class="pres-step-box">
                  <div class="step-num">Step 1</div>
                  <div class="step-title">자외선 흡수 & 도약</div>
                  <p>가상실험실에서 <strong>[자외선 흡수 & 점프]</strong>를 클릭하여 1층 전자가 3층(S₁) 옥상으로 수직 도약하는 모습을 확인합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 2</div>
                  <div class="step-title">진동 열 방출 (이완)</div>
                  <p>3층에서 전자가 바들바들 떨며(분자 진동) 미세한 <strong>열에너지</strong>를 방출하고 2층 출발선으로 내려앉는 과정을 관찰합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 3</div>
                  <div class="step-title">형광 가시광선 방출</div>
                  <p>2층에서 1층(S₀)으로 착지하며 사방으로 <strong>선명한 파란 형광빛(450nm)</strong>을 1억 분의 1초 만에 방출하는 모습을 기록합니다.</p>
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
                    <th style="width:20%;">단계</th>
                    <th style="width:26%;">전자의 위치 이동</th>
                    <th style="width:22%;">에너지 출입 형태</th>
                    <th style="width:32%;">물리적 의미 및 정답</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1단계: 흡수</strong></td>
                    <td>1층(S₀) ➔ 3층(S₁) 옥상</td>
                    <td>자외선 흡수</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#6d28d9; font-size:1.02rem;">들뜬 상태 도달 (에너지 축적)</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>2단계: 진동 이완</strong></td>
                    <td>3층 높은 곳 ➔ 2층 출발선</td>
                    <td>미세 열에너지 방출</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#ea580c; font-size:1.02rem;">분자 진동으로 열 방출 (에너지 손실)</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>3단계: 형광 방출</strong></td>
                    <td>2층 출발선 ➔ 1층(S₀) 바닥</td>
                    <td>가시광선(형광) 방출</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">파란 형광빛(450nm) 나노초 단위 방출</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 스토크스 이동 (Stokes Shift)
        {
          tag: '',
          title: '스토크스 이동 (Stokes Shift)의 원리',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:1rem 1.4rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', sans-serif;">
                  <defs>
                    <marker id="arrowUp2" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 1 10 L 5 1 L 9 10 z" fill="#7c3aed" />
                    </marker>
                    <marker id="arrowDown2" viewBox="0 0 10 10" refX="5" refY="8" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 1 0 L 5 9 L 9 0 z" fill="#2563eb" />
                    </marker>
                  </defs>

                  <!-- 1층 S0 바닥 상태 레벨 -->
                  <line x1="80" y1="165" x2="480" y2="165" stroke="#0f172a" stroke-width="3" />
                  <rect x="80" y="172" width="120" height="26" rx="6" fill="#f1f5f9" />
                  <text x="140" y="190" font-size="13" font-weight="800" fill="#334155" text-anchor="middle">1층: 바닥 상태 (S₀)</text>

                  <!-- 3층 S1 들뜬 상태 -->
                  <line x1="80" y1="45" x2="480" y2="45" stroke="#7c3aed" stroke-width="2.5" />
                  <line x1="80" y1="58" x2="480" y2="58" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3" />
                  <line x1="80" y1="71" x2="480" y2="71" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="4,3" />
                  <!-- 2층 S1 최저 준위 -->
                  <line x1="80" y1="84" x2="480" y2="84" stroke="#6d28d9" stroke-width="2.5" />
                  <rect x="80" y="15" width="130" height="26" rx="6" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1" />
                  <text x="145" y="33" font-size="13" font-weight="800" fill="#6d28d9" text-anchor="middle">2~3층: 들뜬 상태 (S₁)</text>

                  <!-- 과정 1: 자외선 흡수 화살표 -->
                  <line x1="220" y1="165" x2="220" y2="50" stroke="#7c3aed" stroke-width="3.5" marker-end="url(#arrowUp2)" />
                  <rect x="155" y="95" width="130" height="24" rx="5" fill="#f5f3ff" stroke="#c4b5fd" stroke-width="1" />
                  <text x="220" y="112" font-size="12" font-weight="800" fill="#6d28d9" text-anchor="middle">① 자외선 흡수 (365nm)</text>

                  <!-- 과정 2: 진동 열 방출 화살표 -->
                  <path d="M 230 45 Q 245 55 230 65 T 230 84" fill="none" stroke="#ea580c" stroke-width="3" />
                  <text x="310" y="66" font-size="12" font-weight="800" fill="#ea580c" text-anchor="start">② 진동 열 방출 (손실)</text>

                  <!-- 과정 3: 형광 가시광선 방출 화살표 -->
                  <line x1="420" y1="84" x2="420" y2="160" stroke="#2563eb" stroke-width="3.5" marker-end="url(#arrowDown2)" />
                  <rect x="355" y="115" width="130" height="24" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
                  <text x="420" y="132" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">③ 형광 방출 (450nm)</text>

                  <!-- 우측: 스토크스 이동 요약 박스 -->
                  <g transform="translate(530, 20)">
                    <rect x="0" y="0" width="300" height="175" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
                    <text x="150" y="32" font-size="15" font-weight="800" fill="#0f172a" text-anchor="middle">스토크스 이동 (Stokes Shift)</text>
                    <line x1="20" y1="46" x2="280" y2="46" stroke="#e2e8f0" stroke-width="1" />
                    
                    <text x="30" y="76" font-size="13" font-weight="700" fill="#6d28d9">• 흡수한 빛: 파장 365nm (자외선)</text>
                    <text x="30" y="102" font-size="13" font-weight="700" fill="#1d4ed8">• 방출된 빛: 파장 450nm (가시광선)</text>
                    
                    <rect x="20" y="122" width="260" height="38" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
                    <text x="150" y="146" font-size="12.5" font-weight="800" fill="#065f46" text-anchor="middle">파장이 길어짐 = 빛 에너지가 줄어듦!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">스토크스 이동이란?</strong> 물질이 흡수한 빛의 파장보다 방출하는 형광빛의 파장이 더 길어지는 현상 (에너지 감소)
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 에너지 보존 법칙
        {
          tag: '',
          title: '에너지 보존 법칙',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 흡수한 자외선 에너지 ] = [ 방출된 형광빛 에너지 ] + [ 잃어버린 열에너지 ]
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • 미시세계의 원자와 전자도 <strong>대자연의 에너지 보존 법칙</strong>을 한 치의 오차 없이 엄격하게 준수합니다.
                </p>
                <p class="pres-law-desc-p">
                  • 2단계에서 분자가 진동하며 흘린 열에너지(20~30%)만큼, 3단계에서 방출되는 빛의 에너지가 감소하여 파장이 긴 가시광선으로 바뀝니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 2차시 배움 확인
        {
          tag: '',
          title: '2차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🪜</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">에너지 양자화</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  전자는 불연속적인 특정 에너지 계단(궤도)에만 존재하며, 중간 층간에는 머물 수 없습니다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🔄</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">전자의 3단계 여정</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  <strong>자외선 흡수(도약) ➔ 진동 열 방출(손실) ➔ 형광 방출(착지)</strong>의 3단계를 거칩니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">📉</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">스토크스 이동</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  흘린 열에너지 때문에 방출되는 형광의 에너지가 줄어들어 파장이 더 길어집니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는?
        {
          tag: '',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:920px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:1.15rem; font-weight:800; color:#2563eb; margin-bottom:0.8rem;">
                  [3차시] 팽이 스핀과 스마트폰 OLED의 75% 배터리 도둑
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.35rem; font-weight:800; color:#0f172a; display:block;">
                    "스마트폰 화면을 켜두면 왜 점점 뜨거워지고 배터리가 닳을까요?"
                  </span>
                  <span style="font-size:1.35rem; font-weight:800; color:#dc2626; display:block; margin-top:0.6rem;">
                    전자가 팽이처럼 회전하는 '스핀' 속에 숨겨진 75% 에너지 도둑의 비밀을 파헤칩니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 3차시: 스핀과 OLED 75% 배터리 도둑
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑',
      badge: 'OLED 3차시 · 스핀 통계 & 난제',
      slides: [
        // Slide 1: 단독 질문형 표지
        {
          tag: '3차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:2.8rem 2rem; max-width:880px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.7;">
                  <span style="font-size:1.3rem; font-weight:700; color:#475569; display:block; margin-bottom:0.5rem;">[3차시] 팽이 스핀과 스마트폰 OLED</span>
                  <span style="font-size:1.65rem; font-weight:800; color:#0f172a; display:block; white-space:nowrap; letter-spacing:-0.5px;">스마트폰 속 75% 배터리 도둑: 단일항과 삼중항</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '3차시 도입 · 핵심 질문',
          title: '동기 유발: 스마트폰을 켜두면 왜 점점 뜨거워질까?',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="smartphone"></i> 일상 속 스마트폰 발열 현상</div>
                <ul class="pres-list">
                  <li>스마트폰으로 유튜브를 보거나 게임을 하면 화면 뒤쪽이 점점 따뜻해집니다.</li>
                  <li>배터리가 닳는 속도도 빨라져 하루에도 몇 번씩 충전기를 찾아야 합니다.</li>
                  <li>화면을 켜기 위해 넣은 <strong>전기 에너지</strong>는 왜 빛 대신 열로 변하는 걸까요?</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "스마트폰 화면에 전기를 주입하면, 왜 25%만 빛이 되고 무려 75%는 쓸모없는 열로 버려질까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="rotate-cw"></i> <strong>전자의 자전 팽이: 스핀(Spin) 양자 통계의 비밀!</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '3차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-stack">
              <div class="pres-card" style="padding:2.2rem 2.5rem; max-width:820px; margin:0 auto; box-sizing:border-box;">
                <div class="pres-card-title" style="font-size:1.25rem; margin-bottom:1.4rem;"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list" style="font-size:1.12rem; line-height:2.0;">
                  <li>스마트폰 화면 속 <strong>RGB 서브픽셀</strong>을 간이 루페로 관찰하여 색 합성 원리를 탐구한다.</li>
                  <li>전자의 스핀 방향에 따라 생성되는 <strong>단일항(25%)과 삼중항(75%)</strong>의 확률을 분석한다.</li>
                  <li>스마트폰 OLED 디스플레이의 <strong>발열 및 배터리 소모 원인</strong>을 과학적으로 설명한다.</li>
                </ul>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 실습 준비물 카드
        {
          tag: '3차시 준비 · 실험 교구',
          title: '3차시 탐구 준비물',
          content: `
            <div class="pres-stack">
              <div class="pres-tools-4col">
                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_smartphone.jpg')}" alt="스마트폰 OLED 디스플레이" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">스마트폰 디스플레이</strong>
                  <p class="tool-card-desc">RGB 서브픽셀 다이아몬드 배열 관찰 화면</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_loupe.jpg')}" alt="마이크로 루페 60배" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">마이크로 루페 (60배)</strong>
                  <p class="tool-card-desc">화면 픽셀을 초근접 확대하는 광학 렌즈</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_spintop.jpg')}" alt="양자 스핀 회전 팽이" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">양자 스핀 팽이 교구</strong>
                  <p class="tool-card-desc">전자의 업(↑) / 다운(↓) 스핀 조합 모형</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('oled_tool_worksheet.jpg')}" alt="스핀 통계 탐구 활동지" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">스핀 탐구 활동지</strong>
                  <p class="tool-card-desc">확률 계산 및 75% 발열 분석 활동지</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 관찰 및 안전 수칙
        {
          tag: '3차시 준비 · 관찰 수칙',
          title: '정밀 광학 관찰 및 기기 보호 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield"></i></div>
                <div class="pres-safety-title">1. 화면 스크래치 방지</div>
                <div class="pres-safety-desc">
                  루페 렌즈의 금속 부위가 스마트폰 액정에 직접 닿지 않도록 클립 보호 패드를 확인합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="eye"></i></div>
                <div class="pres-safety-title">2. 초점 맞추기 주의</div>
                <div class="pres-safety-desc">
                  너무 가까이 보아 눈이 피로해지지 않도록 스마트폰 카메라 화면으로 미러링하여 함께 관찰합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="battery-warning"></i></div>
                <div class="pres-safety-title">3. 고온 발열 주의</div>
                <div class="pres-safety-desc">
                  화면 밝기를 최대치로 장시간 켜두면 기기가 뜨거워지므로 관찰 후 화면을 잠시 꺼둡니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 가상실험실(Lab 2) & 스핀 탐구 3단계
        {
          tag: '3차시 전개 · 탐구 절차',
          title: '탐구 절차: 서브픽셀 관찰 & 팽이 스핀 확률 실험',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">RGB 서브픽셀 관찰</div>
                <p>스마트폰에 흰색 이미지를 띄운 뒤 마이크로 루페로 R, G, B 다이아몬드 배열 화소를 사진으로 촬영합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">스핀 팽이 조합 매칭</div>
                <p>두 개의 스핀 팽이를 돌려 서로 반대로 도는 경우(↑↓)와 같은 방향으로 도는 경우(↑↑)의 수를 카운트합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">발광 효율 1:3 계산</div>
                <p>가상실험실(Lab 2)에서 전자와 정공이 만날 때 단일항과 삼중항이 생성되는 비율을 시뮬레이션합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 시뮬레이션 관찰 결과표
        {
          tag: '3차시 전개 · 결과 분석',
          title: '스핀 통계 및 발광 확률 결과표',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:22%;">상태 이름</th>
                    <th style="width:24%;">스핀 회전 방향</th>
                    <th style="width:20%;">생성 확률</th>
                    <th style="width:34%;">빛 방출 여부 & 결과</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>단일항 (Singlet, S₁)</strong></td>
                    <td>서로 반대 방향 (↑↓)</td>
                    <td><strong style="color:#2563eb; font-size:1.1rem;">25%</strong> (1/4)</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">비상문 열림 ➔ 1억 분의 1초 만에 빛 방출 성공!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>삼중항 (Triplet, T₁)</strong></td>
                    <td>서로 같은 방향 (↑↑)</td>
                    <td><strong style="color:#dc2626; font-size:1.1rem;">75%</strong> (3/4)</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#dc2626; font-size:1.02rem;">비상문 잠김 ➔ 빛을 못 내고 100% '열'로 소멸!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG 단일항 vs 삼중항 전자 스핀 벡터 다이어그램
        {
          tag: '3차시 전개 · 과학 다이어그램',
          title: '전자의 팽이 스핀과 1:3 양자 확률 통계',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:0.8rem 1.2rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', sans-serif;">
                  <!-- 단일항 카드 (25%) -->
                  <g transform="translate(30, 15)">
                    <rect x="0" y="0" width="370" height="185" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2" />
                    <rect x="15" y="12" width="130" height="26" rx="6" fill="#2563eb" />
                    <text x="80" y="30" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">단일항 (Singlet, S₁)</text>
                    <text x="355" y="32" font-size="18" font-weight="900" fill="#2563eb" text-anchor="end">25% (1/4)</text>

                    <!-- 스핀 모형 (마주보고 회전: ↑↓) -->
                    <circle cx="85" cy="95" r="32" fill="#ffffff" stroke="#3b82f6" stroke-width="2" />
                    <text x="85" y="103" font-size="26" font-weight="900" fill="#2563eb" text-anchor="middle">↑</text>
                    <text x="130" y="101" font-size="16" font-weight="800" fill="#64748b" text-anchor="middle">+</text>
                    <circle cx="175" cy="95" r="32" fill="#ffffff" stroke="#3b82f6" stroke-width="2" />
                    <text x="175" y="103" font-size="26" font-weight="900" fill="#2563eb" text-anchor="middle">↓</text>

                    <!-- 상태 설명 -->
                    <text x="230" y="80" font-size="13.5" font-weight="800" fill="#1e40af">• 서로 반대 회전 (합 = 0)</text>
                    <text x="230" y="104" font-size="13.5" font-weight="800" fill="#1e40af">• 탈출 비상문 활짝 열림</text>
                    <rect x="230" y="118" width="125" height="28" rx="6" fill="#dbeafe" />
                    <text x="292" y="137" font-size="12.5" font-weight="800" fill="#1d4ed8" text-anchor="middle">✨ 100% 형광 방출</text>
                    <text x="185" y="172" font-size="12" font-weight="700" fill="#475569" text-anchor="middle">1억 분의 1초(나노초) 만에 번쩍 발광!</text>
                  </g>

                  <!-- 삼중항 카드 (75%) -->
                  <g transform="translate(460, 15)">
                    <rect x="0" y="0" width="370" height="185" rx="12" fill="#fff1f2" stroke="#fecdd3" stroke-width="2" />
                    <rect x="15" y="12" width="130" height="26" rx="6" fill="#e11d48" />
                    <text x="80" y="30" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">삼중항 (Triplet, T₁)</text>
                    <text x="355" y="32" font-size="18" font-weight="900" fill="#e11d48" text-anchor="end">75% (3/4)</text>

                    <!-- 스핀 모형 (나란히 회전: ↑↑) -->
                    <circle cx="85" cy="95" r="32" fill="#ffffff" stroke="#f43f5e" stroke-width="2" />
                    <text x="85" y="103" font-size="26" font-weight="900" fill="#e11d48" text-anchor="middle">↑</text>
                    <text x="130" y="101" font-size="16" font-weight="800" fill="#64748b" text-anchor="middle">+</text>
                    <circle cx="175" cy="95" r="32" fill="#ffffff" stroke="#f43f5e" stroke-width="2" />
                    <text x="175" y="103" font-size="26" font-weight="900" fill="#e11d48" text-anchor="middle">↑</text>

                    <!-- 상태 설명 -->
                    <text x="230" y="80" font-size="13.5" font-weight="800" fill="#9f1239">• 같은 방향 회전 (합 = 1)</text>
                    <text x="230" y="104" font-size="13.5" font-weight="800" fill="#9f1239">• 탈출 비상문 굳게 잠김</text>
                    <rect x="230" y="118" width="125" height="28" rx="6" fill="#ffe4e6" />
                    <text x="292" y="137" font-size="12.5" font-weight="800" fill="#be123c" text-anchor="middle">🔥 100% 열로 낭비</text>
                    <text x="185" y="172" font-size="12" font-weight="700" fill="#475569" text-anchor="middle">빛을 내지 못하고 스마트폰을 뜨겁게 달굼!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">스핀 통계 1:3이란?</strong> 전기를 넣으면 양자 스핀 조합 확률에 의해 단일항(25%)과 삼중항(75%)이 생성되는 양자역학적 물리 법칙
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 75% 배터리 도둑의 진실
        {
          tag: '3차시 전개 · 핵심 원리',
          title: '스마트폰 화면 속 75% 배터리 도둑',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 주입된 배터리 전기 ] = [ 25% 유용한 형광빛 ] + [ 75% 버려지는 열에너지 ]
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • <strong>양자역학적 선택 규칙:</strong> 삼중항 전자는 바닥 상태와 스핀 방향이 달라 빛을 내며 내려오는 비상문이 굳게 닫힙니다.
                </p>
                <p class="pres-law-desc-p">
                  • <strong>치명적 75% 열 손실:</strong> 갇힌 삼중항 전자는 빛을 뿜지 못하고 분자를 부르르 떨게 만들어 화면 발열과 번인(Burn-in)을 유발합니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 3차시 핵심 배움 확인
        {
          tag: '3차시 정리 · 배움 확인',
          title: '3차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🔍</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">RGB 서브픽셀</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  스마트폰 화면은 빨강(R), 초록(G), 파랑(B) 미세 화소의 빛 합성으로 모든 색을 표현합니다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🔄</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">스핀 확률 1:3</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  전기를 넣으면 <strong>단일항(25%)</strong>만 빛을 내고, <strong>삼중항(75%)</strong>은 빛을 못 냅니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">⚠️</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">75% 발열 난제</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  삼중항에 갇힌 75%의 전자가 열을 뿜어 배터리를 소모시키고 스마트폰을 뜨겁게 달굽니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는?
        {
          tag: '3차시 정리 · 차시 예고',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:920px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:1.15rem; font-weight:800; color:#2563eb; margin-bottom:0.8rem;">
                  [4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.35rem; font-weight:800; color:#0f172a; display:block;">
                    "갇혀서 열만 내는 75%의 전자를 구출할 기적의 방법은 없을까?"
                  </span>
                  <span style="font-size:1.35rem; font-weight:800; color:#2563eb; display:block; margin-top:0.6rem;">
                    대한민국 KAIST CPRL 연구팀의 세계적 원천 기술, '핫 엑시톤 구름다리'가 공개됩니다!
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
                  <span style="font-size:1.65rem; font-weight:800; color:#0f172a; display:block; white-space:nowrap; letter-spacing:-0.5px;">KAIST 핫 엑시톤 기술과 미래 청색 분자 디자이너</span>
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
                  "KAIST 연구팀은 어떻게 갇혀 있던 75%의 삼중항 전자를 빛으로 구출하여 효율 100%를 달성했을까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="rocket"></i> <strong>핫 엑시톤(Hot Exciton) 옥상 초고속 구름다리의 비밀!</strong>
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
                  <li>KAIST CPRL 연구진의 <strong>핫 엑시톤(Hot Exciton) 원천 기술</strong> 원리를 설명할 수 있다.</li>
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
                  <p class="tool-card-desc">핫 엑시톤 구름다리를 설계하는 디지털 앱</p>
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
          title: '탐구 활동: KAIST 핫 엑시톤 구름다리 연결 미션',
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
                <div class="step-title">핫 엑시톤 구름다리 조작</div>
                <p>가상실험실(Lab 3)에서 옥상 삼중항(T₂)과 단일항(S₁) 사이에 <strong>초고속 역간교차(RISC) 구름다리</strong>를 연결합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">발광 효율 100% 달성</div>
                <p>갇혀 있던 75%의 전자가 구름다리를 건너 단일항으로 변신한 뒤 100% 찬란한 빛으로 뿜어져 나오는 효율을 확인합니다.</p>
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
                    <td>단일항 전자만 발광</td>
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
                    <td><strong>4세대 (KAIST 핫 엑시톤)</strong></td>
                    <td>고에너지 옥상 구름다리 (RISC)</td>
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

        // Slide 8: 인라인 SVG KAIST 핫 엑시톤 메커니즘 벡터 다이어그램
        {
          tag: '4차시 전개 · 과학 다이어그램',
          title: 'KAIST CPRL 핫 엑시톤(Hot Exciton) 옥상 구름다리 메커니즘',
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

                  <!-- 1층 S0 바닥 상태 레벨 -->
                  <line x1="60" y1="175" x2="520" y2="175" stroke="#0f172a" stroke-width="3" />
                  <text x="70" y="195" font-size="13" font-weight="800" fill="#475569">바닥 상태 (S₀)</text>

                  <!-- 삼중항 사다리 (좌측: T1 바닥 vs T2 옥상) -->
                  <!-- 옥상 T2 -->
                  <line x1="80" y1="50" x2="220" y2="50" stroke="#dc2626" stroke-width="3" />
                  <rect x="75" y="24" width="115" height="22" rx="5" fill="#fef2f2" stroke="#fecaca" stroke-width="1" />
                  <text x="132" y="40" font-size="12" font-weight="800" fill="#dc2626" text-anchor="middle">옥상 삼중항 (T₂)</text>

                  <!-- 1층 T1 (갇힌 곳) -->
                  <line x1="80" y1="120" x2="220" y2="120" stroke="#991b1b" stroke-width="2.5" stroke-dasharray="4,3" />
                  <text x="150" y="138" font-size="11.5" font-weight="700" fill="#991b1b" text-anchor="middle">갇힌 삼중항 (T₁) ➔ 열 손실</text>

                  <!-- 단일항 레벨 (우측: S1) -->
                  <line x1="360" y1="65" x2="500" y2="65" stroke="#2563eb" stroke-width="3" />
                  <rect x="375" y="38" width="110" height="22" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1" />
                  <text x="430" y="54" font-size="12" font-weight="800" fill="#1d4ed8" text-anchor="middle">단일항 (S₁)</text>

                  <!-- KAIST 핫 엑시톤 초고속 구름다리 화살표 (T2 -> S1) -->
                  <path d="M 220 50 Q 290 35 355 60" fill="none" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowR4)" />
                  <rect x="235" y="12" width="120" height="24" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.2" />
                  <text x="295" y="28" font-size="11.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">⚡ 초고속 RISC 구름다리</text>

                  <!-- T1으로 떨어지기 전 옥상에서 구출 화살표 -->
                  <text x="145" y="85" font-size="11" font-weight="800" fill="#dc2626" text-anchor="middle">떨어지기 전에 옥상 탈출!</text>

                  <!-- 100% 청색 형광 방출 화살표 (S1 -> S0) -->
                  <line x1="430" y1="65" x2="430" y2="170" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowDown4)" />
                  <rect x="445" y="105" width="125" height="26" rx="6" fill="#2563eb" />
                  <text x="507" y="122" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">✨ 100% 청색 형광 방출</text>

                  <!-- 우측: 핵심 원리 요약 박스 -->
                  <g transform="translate(560, 20)">
                    <rect x="0" y="0" width="280" height="175" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
                    <text x="140" y="30" font-size="14.5" font-weight="800" fill="#0f172a" text-anchor="middle">KAIST 핫 엑시톤 원리</text>
                    <line x1="15" y1="44" x2="265" y2="44" stroke="#e2e8f0" stroke-width="1" />
                    
                    <text x="20" y="72" font-size="12.5" font-weight="700" fill="#991b1b">• 갇힌 75% 삼중항이 바닥으로</text>
                    <text x="32" y="92" font-size="12" font-weight="700" fill="#991b1b">내려가기 전 옥상(T₂)에서 포착</text>
                    <text x="20" y="118" font-size="12.5" font-weight="700" fill="#1d4ed8">• 단일항(S₁)으로 번개처럼 우회</text>
                    
                    <rect x="15" y="132" width="250" height="34" rx="7" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
                    <text x="140" y="154" font-size="12" font-weight="800" fill="#065f46" text-anchor="middle">75% 열 손실 ➔ 100% 빛으로 완벽 구출!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">핫 엑시톤(Hot Exciton)이란?</strong> 에너지가 높은 옥상 삼중항(T₂) 상태에서 단일항(S₁)으로 초고속 역간교차(RISC)하여 100% 빛으로 전환하는 KAIST 원천 기술
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
                <div class="pres-card-title"><i data-lucide="shield-check"></i> 전략 1: 단단한 벤젠 결합 설계</div>
                <p>원자 사이를 강력한 다환 방향족 결합(벤젠 고리)으로 꽁꽁 묶어 결합이 진동으로 흔들리며 깨지는 것을 원천 차단합니다.</p>
                <div class="pres-badge-box" style="margin-top:1rem; background:#f0fdf4; border-color:#bbf7d0; color:#15803d;">
                  <i data-lucide="check"></i> <strong>분자 깨짐 방지 ➔ 화면 번인(Burn-in) 종식!</strong>
                </div>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="git-merge"></i> 전략 2: 핫 엑시톤 우회로 연결</div>
                <p>KAIST CPRL 핫 엑시톤 구름다리 구조를 분자에 프로그래밍하여, 갇혀서 열만 내던 75%의 삼중항을 100% 청색 형광으로 탈출시킵니다.</p>
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
                <div style="font-size:2rem; margin-bottom:0.6rem;">🌉</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">핫 엑시톤 원천 기술</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  옥상 삼중항(T₂)에서 단일항(S₁)으로 번개처럼 건너가는 역간교차 초고속 구름다리
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
                  어둠 속 형광 탐정단(1차시)부터, 전자의 트램펄린 점프(2차시), 75% 배터리 도둑(3차시), 
                  그리고 KAIST 핫 엑시톤 100% 구출 작전(4차시)까지 대한민국의 첨단 과학을 완벽히 정복했습니다.
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
