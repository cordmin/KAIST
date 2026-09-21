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

        // Slide 12: 다음 시간에는? (차시 예고)
        {
          tag: '',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack pres-inquiry-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:960px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.5;">
                  <span class="pres-preview-question">
                    "전자가 자외선 빛 에너지를 받으면 어떤 일이 일어날까?"
                  </span>
                  <span class="pres-preview-subtext">
                    눈에 보이지 않는 원자 속 전자의 에너지 이동을 가상실험실로 직접 관찰합니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
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
                    <th style="width:14%; text-align:center;">단계</th>
                    <th style="width:24%; text-align:center;">에너지 출입 형태</th>
                    <th style="width:38%; text-align:center;">전자의 에너지 전달 과정</th>
                    <th style="width:24%; text-align:center;">관찰 결과 및 정답</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center;"><strong>1단계</strong></td>
                    <td style="text-align:center;">자외선 빛 에너지</td>
                    <td style="text-align:center; white-space:nowrap;">전자가 자외선 빛 에너지를 흡수함</td>
                    <td style="text-align:center;">
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
                    <td style="text-align:center;">열(열에너지)</td>
                    <td style="text-align:center; white-space:nowrap;">흡수한 에너지의 일부를 열로 방출함</td>
                    <td style="text-align:center;">
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
                    <td style="text-align:center;">형광빛(가시광선)</td>
                    <td style="text-align:center; white-space:nowrap;">남은 에너지를 형광빛으로 방출함</td>
                    <td style="text-align:center;">
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
        },

        // Slide 11: 다음 시간에는? (차시 예고)
        {
          tag: '',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack pres-inquiry-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:960px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.5;">
                  <span class="pres-preview-question">
                    "스마트폰은 얼마나 배터리를 낭비하고 있을까?"
                  </span>
                  <span class="pres-preview-subtext">
                    영상이나 게임을 할 때 뜨거워지는 스마트폰의 에너지 전환의 비밀이 공개됩니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 3차시: 스마트폰의 에너지 낭비 (1:3 에너지 전환)
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 스마트폰의 에너지 낭비',
      badge: 'OLED 3차시 · 1:3 낭비 법칙 & 발열 문제',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                스마트폰의 에너지 낭비
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

                <div class="pres-card" style="padding:0.85rem; text-align:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:220px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #e2e8f0;">
                    <img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="발열과 함께 빠르게 소모되는 배터리" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.02rem; display:block; word-break:keep-all;">발열과 함께 순식간에 닳아버리는 배터리</strong>
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
                  <div class="pres-card" style="padding:1.2rem 1.4rem;">
                    <div style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.45rem;">
                      빨강 · 초록 · 파랑 화소의 빛 합성
                    </div>
                    <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                      눈에는 하얗게 보이지만, 루페로 초근접 확대하면 <strong>빨강(R), 초록(G), 파랑(B)</strong> 화소가 빛을 합성하여 흰색을 만듭니다.
                    </p>
                  </div>
                  <div class="pres-card" style="padding:1.2rem 1.4rem;">
                    <div style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.45rem;">
                      스스로 빛을 내는 분자 (OLED)
                    </div>
                    <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                      화면의 작은 화소 하나하나는 배터리 전기를 받아 <strong>스스로 빛을 내는 분자</strong>들로 이루어져 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: 전기 에너지 전환 결과 (과학 시각화 모형)
        {
          tag: '',
          title: '배터리에서 공급된 전기 에너지의 전환 결과',
          content: `
            <div class="pres-stack" style="gap:1rem;">
              <div class="pres-card" style="padding:0.6rem; text-align:center; background:#080d1a; border:1px solid #1e293b; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.12);">
                <div style="width:100%; aspect-ratio:16/9; max-height:clamp(250px, 42vh, 480px); border-radius:10px; overflow:hidden; margin:0 auto; background:#080d1a; display:flex; align-items:center; justify-content:center;">
                  <img src="${getToolAsset('oled_energy_conversion.jpg')}" alt="전기 주입 시 빛과 열의 1:3 에너지 전환" style="width:100%; height:100%; object-fit:contain; display:block;">
                </div>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">1:3 에너지 전환:</strong> 스마트폰 화면에 전기를 공급하면 분자 4개 중 <strong>1개(25%)만 유용한 빛</strong>을 내고, 나머지 <strong>3개(75%)는 열로 빠져나가</strong> 화면을 뜨겁게 달굽니다.
                </p>
              </div>
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
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔋</div>
                <strong style="font-size:1.25rem; color:#dc2626; display:block; margin-bottom:0.6rem;">배터리 조기 방전</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  전기의 75%가 열로 버려지기 때문에 배터리가 순식간에 닳아 사용 시간이 줄어듭니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">⚠️</div>
                <strong style="font-size:1.25rem; color:#dc2626; display:block; margin-bottom:0.6rem;">화면 잔상 (번인)</strong>
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
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">🔄</div>
                <strong style="font-size:1.25rem; color:#0f172a; display:block; margin-bottom:0.6rem;">1:3 에너지 전환</strong>
                <p style="font-size:0.98rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  배터리 전기를 공급하면 <strong>빛을 내는 분자 25%</strong>, <strong>열을 내는 분자 75%</strong>가 발생합니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.6rem 1.2rem;">
                <div style="font-size:2.4rem; margin-bottom:0.75rem;">⚡</div>
                <strong style="font-size:1.25rem; color:#0f172a; display:block; margin-bottom:0.6rem;">75% 에너지 낭비</strong>
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
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:960px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.5;">
                  <span class="pres-preview-question">
                    "열로 식어버리는 75%의 에너지를 빛으로 구출할 방법은 없을까?"
                  </span>
                  <span class="pres-preview-subtext">
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
    // OLED 4차시: KAIST 초고속 에너지 전환 & 미래 분자 디자이너
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] KAIST의 분자 연구',
      badge: 'OLED 4차시 · 초고속 에너지 전환 & 미래 기술',
      slides: [
        // Slide 1: 표지
        {
          tag: '',
          title: '이번 시간에는?',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.1rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                버려지는 열을 빛으로 바꾸는 KAIST 첨단 기술
              </h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 (번인 현상 & 청색 소자 한계)
        {
          tag: '',
          title: '왜 항상 파란색(Blue) 화소가 먼저 고장 날까?',
          content: `
            <div class="pres-stack" style="gap:0.9rem;">
              <div class="pres-grid-2" style="gap:1rem;">
                <div class="pres-card" style="padding:0.85rem; text-align:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:210px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #e2e8f0;">
                    <img src="${getToolAsset('reader_oled_1_heat.jpg')}" alt="스마트폰 화면의 번인 잔상" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.02rem; display:block; word-break:keep-all;">누런 얼룩 잔상이 남는 스마트폰 번인 현상</strong>
                </div>

                <div class="pres-card" style="padding:0.85rem; text-align:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px;">
                  <div style="width:100%; aspect-ratio:4/3; max-height:210px; border-radius:8px; overflow:hidden; margin-bottom:0.6rem; background:#0f172a; border:1px solid #e2e8f0;">
                    <img src="${getToolAsset('reader_oled_2_vibration.jpg')}" alt="강한 에너지로 결합이 깨지는 청색 분자" style="width:100%; height:100%; object-fit:cover; display:block;">
                  </div>
                  <strong style="color:#0f172a; font-size:1.02rem; display:block; word-break:keep-all;">강한 빛을 내느라 심하게 떨어 깨지는 청색 분자</strong>
                </div>
              </div>

              <div class="pres-inquiry-box" style="padding:0.85rem 1.4rem;">
                <div class="inquiry-q" style="font-size:1.12rem; line-height:1.55;">
                  "가스레인지 파란 불꽃처럼 강한 빛을 내느라 분자가 심하게 떨며 열받고 스트레스로 깨집니다.<br>
                  <span style="color:#2563eb;">분자를 덜 떨게 해서 덜 열받고 덜 스트레스 받게 살려낼 방법은 없을까?</span>"
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
                <span>버려지는 열을 빛으로 바꾸는 KAIST 첨단 기술을 탐구하고,</span>
                <span>미래 디스플레이 기술이 가져올 우리 삶의 변화를 설명할 수 있다.</span>
              </p>
            </div>
          `
        },

        // Slide 4: 탐구 준비물 (실사 1컷 + 4개 교구명 카드)
        {
          tag: '',
          title: '탐구 준비물',
          content: `
            <div class="pres-stack pres-tools-stack">
              <div class="pres-tools-img-box">
                <img src="${getToolAsset('oled_tools_4.jpg')}" alt="4차시 탐구 준비물 실사 사진" class="pres-tools-img">
              </div>
              <div class="pres-tools-grid">
                <div class="pres-tool-name-card">
                  <strong>초소형 발광 소자 & 회로 키트</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>구리 테이프 & 3V 코인 전지</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>분자 시뮬레이터 태블릿</strong>
                </div>
                <div class="pres-tool-name-card">
                  <strong>탐구 활동지</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 회로 제작 및 실습 안전 수칙 (3열 카드)
        {
          tag: '',
          title: '회로 제작 및 실습 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="battery-charging"></i></div>
                <div class="pres-safety-title">1. 배터리 단락 및 과열 주의</div>
                <div class="pres-safety-desc">
                  코인 전지의 (+)극과 (-)극을 구리 테이프로 직접 맞닿게 연결하지 않도록 <strong>전지 극성을 반드시 확인</strong>합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="scissors"></i></div>
                <div class="pres-safety-title">2. 구리 테이프 취급 안전</div>
                <div class="pres-safety-desc">
                  구리 테이프 절단면이 날카로울 수 있으므로 <strong>손이 베이지 않도록 가위를 조심히 다룹니다</strong>.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="check-circle-2"></i></div>
                <div class="pres-safety-title">3. 과학적 타당성 고려</div>
                <div class="pres-safety-desc">
                  열로 손실되기 전에 빛으로 전환하는 <strong>KAIST 원천 기술 원리를 반영</strong>하여 기획서를 작성합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 회로 점등 & 청색 OLED 해결 과제 (3단계 가로 플로우)
        {
          tag: '',
          title: '회로 점등 & 청색 OLED의 해결 과제',
          content: `
            <div class="pres-stack">
              <div class="pres-steps-row">
                <div class="pres-step-box">
                  <div class="step-num">Step 1</div>
                  <div class="step-title">구리 테이프 회로 점등</div>
                  <p>코인 전지와 구리 테이프로 회로를 연결하여 <strong>전기 에너지가 빛으로 바뀌는 현상</strong>을 직접 확인합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 2</div>
                  <div class="step-title">청색 OLED의 해결 과제</div>
                  <p>파란빛을 내느라 <strong>분자가 심하게 떨며 열 스트레스</strong>를 받아 결합이 쉽게 깨지는 한계를 파악합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 3</div>
                  <div class="step-title">75% 열-빛 초고속 구출</div>
                  <p>분자를 <strong>덜 떨게 하고 열로 빠져나가기 전에 100% 빛으로 초고속 탈출</strong>시키는 원리를 탐구합니다.</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: OLED 기술 세대별 발광 효율 비교 (인터랙티브 결과표)
        {
          tag: '',
          title: 'OLED 기술 세대별 발광 효율 비교',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:22%; text-align:center;">기술 세대</th>
                    <th style="width:26%; text-align:center;">주요 발광 원리</th>
                    <th style="width:18%; text-align:center;">내부 발광 효율</th>
                    <th style="width:34%; text-align:center;">특징 및 해결 과제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center;"><strong>1세대 (형광)</strong></td>
                    <td style="text-align:center;">빛을 내는 분자(25%)만 발광</td>
                    <td style="text-align:center;"><strong style="color:#64748b; font-size:1.15rem;">최대 25%</strong></td>
                    <td style="text-align:center; color:#dc2626;">75% 열 손실로 화면 과열 및 배터리 낭비</td>
                  </tr>
                  <tr>
                    <td style="text-align:center;"><strong>2세대 (인광)</strong></td>
                    <td style="text-align:center;">희귀 중금속(이리듐) 첨가</td>
                    <td style="text-align:center;"><strong style="color:#d97706; font-size:1.15rem;">최대 100%</strong></td>
                    <td style="text-align:center; color:#d97706;">비싼 희귀 금속 필요, 청색 인광 수명 극히 짧음</td>
                  </tr>
                  <tr>
                    <td style="text-align:center;"><strong>4세대 (KAIST)</strong></td>
                    <td style="text-align:center;">열 손실 전 초고속 빛 전환</td>
                    <td style="text-align:center;"><strong style="color:#2563eb; font-size:1.25rem;">최대 100%</strong></td>
                    <td style="text-align:center;">
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">희귀 금속 없이 순수 유기 분자로 100% 청색 발광 & 긴 수명 달성!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: KAIST 초고속 에너지 전환 메커니즘 (과학 시각화 모형)
        {
          tag: '',
          title: 'KAIST 초고속 에너지 전환 메커니즘',
          content: `
            <div class="pres-stack" style="gap:1rem;">
              <div class="pres-card" style="padding:0.6rem; text-align:center; background:#080d1a; border:1px solid #1e293b; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.12);">
                <div style="width:100%; aspect-ratio:16/9; max-height:clamp(250px, 42vh, 480px); border-radius:10px; overflow:hidden; margin:0 auto; background:#080d1a; display:flex; align-items:center; justify-content:center;">
                  <img src="${getToolAsset('oled_fast_energy_transfer.jpg')}" alt="KAIST 초고속 에너지 전환 75%에서 100% 구출" style="width:100%; height:100%; object-fit:contain; display:block;">
                </div>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">초고속 에너지 전환 기술:</strong> 분자의 헛떨림(열)을 억제하고, 75%의 에너지가 열로 빠져나가기 전에 분자 진동수를 조절하여 <strong>열 스트레스 없이 100% 시원한 빛</strong>으로 방출하는 KAIST 원천 기술
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 이해도 점검 O / X 퀴즈 (활동지 2번 연계)
        {
          tag: '',
          title: '이해도 점검 O / X 퀴즈',
          content: `
            <div class="pres-stack" style="gap:0.85rem;">
              <div class="pres-card" style="padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem;">
                <div style="font-size:0.96rem; color:#0f172a; line-height:1.5;">
                  <strong>(1)</strong> 청색(Blue) 빛은 빨강·초록빛보다 에너지가 높아 분자 결합이 깨지기 쉽고 수명이 가장 짧다.
                </div>
                <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')" style="flex-shrink:0;">
                  <button type="button" class="pres-reveal-btn">정답 확인</button>
                  <div class="pres-reveal-content">
                    <strong style="color:#2563eb; font-size:1.15rem;">[ O ] 정답</strong>
                  </div>
                </div>
              </div>

              <div class="pres-card" style="padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem;">
                <div style="font-size:0.96rem; color:#0f172a; line-height:1.5;">
                  <strong>(2)</strong> KAIST 기술은 75%의 에너지가 열로 완전히 식어버린 후에 외부에서 열을 다시 모으는 방식이다.
                </div>
                <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')" style="flex-shrink:0;">
                  <button type="button" class="pres-reveal-btn">정답 확인</button>
                  <div class="pres-reveal-content">
                    <strong style="color:#dc2626; font-size:1.15rem;">[ X ] 오답</strong>
                    <span style="font-size:0.82rem; color:#64748b; margin-left:0.4rem;">(식기 전 초고속 전환)</span>
                  </div>
                </div>
              </div>

              <div class="pres-card" style="padding:0.85rem 1.25rem; display:flex; justify-content:space-between; align-items:center; gap:1rem;">
                <div style="font-size:0.96rem; color:#0f172a; line-height:1.5;">
                  <strong>(3)</strong> 열로 낭비되던 75%를 빛으로 구출하면 이론적으로 스마트폰 발광 효율을 최대 100%까지 끌어올릴 수 있다.
                </div>
                <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')" style="flex-shrink:0;">
                  <button type="button" class="pres-reveal-btn">정답 확인</button>
                  <div class="pres-reveal-content">
                    <strong style="color:#2563eb; font-size:1.15rem;">[ O ] 정답</strong>
                  </div>
                </div>
              </div>
            </div>
          `
        },

        // Slide 10: 4차시 핵심 배움 정리
        {
          tag: '',
          title: '4차시 핵심 배움 정리',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center; padding:1.4rem 1.1rem;">
                <div style="font-size:2.2rem; margin-bottom:0.6rem;">💎</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">청색 OLED 해결 과제</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  강한 빛을 내느라 분자가 심하게 떨리고 열 스트레스를 받아 번인이 발생합니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.4rem 1.1rem;">
                <div style="font-size:2.2rem; margin-bottom:0.6rem;">⚡</div>
                <strong style="font-size:1.2rem; color:#2563eb; display:block; margin-bottom:0.5rem;">초고속 에너지 전환</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  분자를 덜 떨게 하고 열로 빠져나가기 전에 빛으로 되돌려 100% 발광을 달성합니다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center; padding:1.4rem 1.1rem;">
                <div style="font-size:2.2rem; margin-bottom:0.6rem;">🧪</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">첨단 화학 연구원 진로</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  컴퓨터 시뮬레이션으로 미래 첨단 디스플레이를 연구하는 화학 연구원의 길을 엽니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 수료 축하 (신규 넙죽이 & 거위 축하 일러스트)
        {
          tag: '',
          title: '수료를 축하합니다!',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; width:100%;">
              <div class="pres-celebrate-box">
                <div class="pres-celebrate-img-wrap">
                  <img src="${getToolAsset('kaist_mascot_celebrate.jpg')}" alt="신나게 축하하는 KAIST 넙죽이와 거위">
                </div>
                <h3 class="pres-celebrate-title">
                  OLED 탐구 여정을 멋지게 완주했습니다!
                </h3>
              </div>
            </div>
          `
        }
      ]
    }
  };
