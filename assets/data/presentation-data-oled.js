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

// 1차시 8번 슬라이드: 왼쪽은 촘촘하고 오른쪽으로 갈수록 느슨해지는 빛의 물결
function oledChirpWavePath() {
  let d = '', phase = 0;
  for (let x = 0; x <= 1696; x += 2) {
    phase += 4 * Math.PI / (26 + 220 * Math.pow(x / 1696, 1.6));
    d += (x ? 'L' : 'M') + x + ' ' + (84 + 46 * Math.sin(phase)).toFixed(1);
  }
  return d;
}

window.presentationModalData.oled = {
    // -----------------------------------------------------------------------
    // OLED 1차시: 자외선과 형광
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 어둠 속을 밝히는 형광빛의 원리',
      badge: 'OLED 1차시 · 자외선과 형광',
      design: 'stage', // 1920×1080 지면형 (assets/css/presentation-stage.css)
      slides: [
        // Slide 1: 표지
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${getToolAsset('uv_demo_gloves.jpg')}" alt="자외선 아래에서 빛나는 흰 면장갑"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">OLED 1차시 · 자외선과 형광</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1>어둠 속을 밝히는<br>형광빛의 원리</h1>
            </div>
          `
        },

        // Slide 2: UV-A(블랙라이트)를 쬐었더니? (동기 유발)
        {
          title: 'UV-A(블랙라이트)를 쬐었더니?',
          content: `
            <h2>UV-A(블랙라이트)를 쬐었더니?</h2>
            <div class="ps-body">
              <div class="ps-trio">
                <figure><img src="${getToolAsset('uv_demo_shoes.jpg')}" alt="흰 운동화 끈과 옷"><figcaption>흰 운동화 끈 & 옷</figcaption></figure>
                <figure><img src="${getToolAsset('uv_demo_notes.jpg')}" alt="형광펜 메모와 종이"><figcaption>형광펜 메모 & 종이</figcaption></figure>
                <figure><img src="${getToolAsset('uv_demo_gloves.jpg')}" alt="흰색 면장갑"><figcaption>흰색 면장갑</figcaption></figure>
              </div>
              <p class="ps-question">“블랙라이트는 어두운 <span class="uv">보랏빛</span>인데, 왜 물체들은 눈부신 <span class="glow">형광빛</span>을 뿜어낼까?”</p>
            </div>
          `
        },

        // Slide 3: 학습목표
        {
          title: '학습목표',
          content: `
            <h2>학습목표</h2>
            <p class="ps-goal"><u>자외선과 가시광선</u>의 파장 및 에너지 차이를 비교하고, 일상 속 <u>형광 물질</u>을 관찰하여 빛 방출 현상을 탐구할 수 있다.</p>
          `
        },

        // Slide 4: 실험 준비물
        {
          title: '실험 준비물',
          content: `
            <h2>실험 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_goggles_lamp.jpg')}" alt="보안경 & UV-A 램프" style="object-position:right center"></div><h3><span class="n">1</span>보안경 & UV-A 램프</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_reagents.jpg')}" alt="토닉워터, 비타민음료, 올리브유"></div><h3><span class="n">2</span>토닉워터, 비타민음료, 올리브유</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_pen_bill.jpg')}" alt="형광펜 & 천원권"></div><h3><span class="n">3</span>형광펜 & 천원권</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('safety_darkbox_waste.jpg')}" alt="암실 상자 & 검은 종이"></div><h3><span class="n">4</span>암실 상자 & 검은 종이</h3></figure>
              </div>
            </div>
          `
        },

        // Slide 5: 탐구활동 시 주의 사항
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph"><img src="${getToolAsset('safety_goggles.jpg')}" alt="실험실 보안경"></div>
                <h3><span class="n">1</span>보안경 상시 착용</h3>
                <p>자외선(UV-A) 램프를 얼굴이나 눈에 직접 비추지 마세요. <strong>실험 종료 시까지 보안경을 상시 착용</strong>합니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('safety_no_drink.jpg')}" alt="실험용 관찰 시약 비커"></div>
                <h3><span class="n">2</span>시약 음용 절대 금지</h3>
                <p>토닉워터, 비타민 음료, 올리브유는 <strong>실험용 관찰 시약</strong>입니다. 어떠한 경우에도 맛보거나 마시지 않습니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('safety_darkbox_waste.jpg')}" alt="암실 상자 및 폐액 수거"></div>
                <h3><span class="n">3</span>암실 상자 & 폐액 분리</h3>
                <p>암실 상자 덮개를 밀착하고 <strong>45도 각도로 조사</strong>하며, 실험 후 시약은 <strong>지정 폐액통에 분리 수거</strong>합니다.</p></figure>
            </div>
          `
        },

        // Slide 6: 형광 물질 관찰 순서
        {
          title: '형광 물질 관찰 순서',
          content: `
            <h2>형광 물질 관찰 순서</h2>
            <div class="ps-body">
              <div class="ps-rail"><span>1단계</span><span>2단계</span><span>3단계</span></div>
              <div class="ps-cols3 ps-steps">
                <figure><div class="ps-ph"><img src="${getToolAsset('safety_darkbox_waste.jpg')}" alt="암실 상자와 시약"></div>
                  <h3>시약 및 재료 준비</h3>
                  <p>3개 비커에 토닉워터, 비타민 음료, 올리브유를 <strong>각 30mL씩 담아 암실 상자에 배치</strong>하고 지폐와 메모지를 준비합니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('oled_tools_1.jpg')}" alt="실내 조명 아래의 시약" style="object-position:72% 60%"></div>
                  <h3>형광등 아래 기본 색상 기록</h3>
                  <p>일반 실내 조명 아래에서 4가지 관찰 대상의 <strong>본래 기본 색상을 관찰표에 객관적으로 기록</strong>합니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('uv_demo_notes.jpg')}" alt="자외선 아래에서 빛나는 형광펜 메모"></div>
                  <h3>UV-A 램프 조사 & 형광빛 기록</h3>
                  <p>보안경을 쓰고 암실 상자 안으로 UV-A 램프를 비추며 <strong>새롭게 뿜어져 나오는 형광 발광 색상을 기록</strong>합니다.</p></figure>
              </div>
            </div>
          `
        },

        // Slide 7: 형광 물질 관찰 결과
        {
          title: '형광 물질 관찰 결과',
          content: `
            <h2>형광 물질 관찰 결과</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:18%">실험 물질</th><th style="width:20%">포함된 핵심 분자</th><th style="width:32%">형광등 아래 기본 색상</th><th>자외선 조사 시 관찰 결과</th></tr></thead>
                <tbody>
                  <tr><td>토닉워터</td><td>퀴닌 분자</td><td><span class="ps-sw" style="border:2px solid rgba(244,241,234,.6)"></span>무색투명</td>
                    <td><div class="ps-reveal" style="--c:#5aa9ff" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>파란색 형광 발광</span></div></td></tr>
                  <tr><td>비타민 음료</td><td>리보플라빈<small>비타민 B2</small></td><td><span class="ps-sw" style="background:#f2d64b"></span>맑은 노란색</td>
                    <td><div class="ps-reveal" style="--c:#b8ef3c" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>연두색 형광 발광</span></div></td></tr>
                  <tr><td>올리브유</td><td>엽록소 분자</td><td><span class="ps-sw" style="background:#b7c26a"></span>연초록색</td>
                    <td><div class="ps-reveal" style="--c:#ff5a4a" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>붉은색 형광 발광</span></div></td></tr>
                  <tr><td>지폐 & 형광펜</td><td>형광 염료<small>위조방지</small></td><td><span class="ps-sw" style="background:#d9cfb6"></span>일반 종이색 / 기본 잉크색</td>
                    <td><div class="ps-reveal" style="--c:#ffb347" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>숨겨진 형광 보안 섬유 발광</span></div></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 빛의 파장과 에너지
        {
          title: '빛의 파장과 에너지',
          content: `
            <h2>빛의 파장과 에너지</h2>
            <div class="ps-body ps-spectrum">
              <svg viewBox="0 0 1696 560">
                <defs>
                  <linearGradient id="psVis" x1="0" x2="1"><stop offset="0" stop-color="#4c1d95"/><stop offset=".14" stop-color="#2563eb"/><stop offset=".3" stop-color="#06b6d4"/><stop offset=".48" stop-color="#10b981"/><stop offset=".65" stop-color="#eab308"/><stop offset=".82" stop-color="#f97316"/><stop offset="1" stop-color="#dc2626"/></linearGradient>
                  <linearGradient id="psIr" x1="0" x2="1"><stop offset="0" stop-color="#991b1b"/><stop offset="1" stop-color="#2a0707"/></linearGradient>
                  <linearGradient id="psWave" x1="0" x2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset=".33" stop-color="#7e5cff"/><stop offset=".42" stop-color="#3b82f6"/><stop offset=".6" stop-color="#22c55e"/><stop offset=".72" stop-color="#eab308"/><stop offset=".8" stop-color="#ef4444"/><stop offset="1" stop-color="#7f1d1d"/></linearGradient>
                </defs>
                <path fill="none" stroke="url(#psWave)" stroke-width="5" stroke-linecap="round" d="${oledChirpWavePath()}"/>
                <g font-size="34" font-weight="800" fill="#f4f1ea">
                  <text x="294" y="196" text-anchor="middle" fill="#b794ff">자외선</text>
                  <text x="1011" y="196" text-anchor="middle">가시광선</text>
                  <text x="1471" y="196" text-anchor="middle" fill="#ff8a7a">적외선</text>
                </g>
                <g stroke="rgba(244,241,234,.35)" stroke-width="2" fill="none">
                  <path d="M2 226 V214 H585 V226"/><path d="M587 226 V214 H1435 V226"/><path d="M1439 226 V214 H1694 V226"/>
                </g>
                <g transform="translate(0,240)">
                  <rect x="0" width="196" height="130" fill="#2e1065"/>
                  <rect x="198" width="174" height="130" fill="#581c87"/>
                  <rect x="374" width="209" height="130" fill="#7e22ce"/>
                  <rect x="587" width="848" height="130" fill="url(#psVis)"/>
                  <rect x="1439" width="257" height="130" fill="url(#psIr)"/>
                  <g font-size="30" font-weight="800" fill="#fff" text-anchor="middle">
                    <text x="98" y="76">UVC</text><text x="285" y="76">UVB</text><text x="478" y="76">UV-A</text>
                    <text x="1011" y="76" style="paint-order:stroke" stroke="rgba(0,0,0,.35)" stroke-width="6">무지개색 (보라 ~ 빨강)</text>
                    <text x="1567" y="76">적외선</text>
                  </g>
                </g>
                <g transform="translate(0,384)" font-size="28" font-weight="700" fill="#9d988d" text-anchor="middle">
                  <g stroke="rgba(244,241,234,.45)" stroke-width="2"><line x1="1" x2="1" y2="14"/><line x1="197" x2="197" y2="14"/><line x1="373" x2="373" y2="14"/><line x1="585" x2="585" y2="14"/><line x1="1437" x2="1437" y2="14"/></g>
                  <text x="1" y="50" text-anchor="start">100</text><text x="197" y="50">280</text><text x="373" y="50">315</text>
                  <text x="585" y="50" fill="#7aa9ff">400</text><text x="1437" y="50" fill="#ff7a6a">700</text>
                  <text x="1696" y="50" text-anchor="end" fill="#f4f1ea">파장 (nm)</text>
                </g>
                <g transform="translate(0,490)" font-size="30" font-weight="800">
                  <path d="M830 0 H30" stroke="#b794ff" stroke-width="3"/><path d="M14 0 L40 -11 V11 Z" fill="#b794ff"/>
                  <text x="0" y="52" fill="#b794ff">에너지 큼 · 파장 짧음</text>
                  <path d="M866 0 H1666" stroke="#ff7a6a" stroke-width="3"/><path d="M1682 0 L1656 -11 V11 Z" fill="#ff7a6a"/>
                  <text x="1696" y="52" fill="#ff7a6a" text-anchor="end">에너지 작음 · 파장 김</text>
                </g>
              </svg>
              <p class="ps-def"><b>형광이란?</b>물질 속 분자가 큰 에너지(자외선)를 흡수한 뒤, 에너지가 더 작은 가시광선으로 바꾸어 방출하는 현상</p>
            </div>
          `
        },

        // Slide 9: 생각해보기
        {
          title: '사라진 에너지는 어디로?',
          content: `
            <h2>사라진 에너지는 어디로?</h2>
            <div class="ps-body">
              <p class="ps-q2">“흡수한 자외선 에너지가 100이라면, 방출된 형광빛의 에너지는 70~80입니다.<br>그렇다면 <em>나머지 20~30의 에너지</em>는 어디로 갔을까요?”</p>
              <div>
                <div class="ps-meter-top"><span>흡수한 자외선 에너지</span><span>100</span></div>
                <div class="ps-cells">${Array.from({ length: 100 }, (_, k) => '<i class="' + (k < 70 ? '' : k < 80 ? 'fade' : 'miss') + '"></i>').join('')}</div>
                <div class="ps-meter-scale"><span>방출된 형광빛 70~80</span><span>20~30 ?</span></div>
              </div>
            </div>
          `
        },

        // Slide 10: 에너지 보존 법칙
        {
          title: '에너지 보존 법칙',
          content: `
            <h2>에너지 보존 법칙</h2>
            <div class="ps-body">
              <div class="ps-eq">
                <div class="ps-eq-row"><div class="ps-eq-bar" style="flex:1; background:#9b6bff">흡수한 자외선 에너지</div></div>
                <div class="ps-eq-op">=</div>
                <div class="ps-eq-row">
                  <div class="ps-eq-bar" style="flex:75; background:#5aa9ff">방출된 형광빛 에너지</div>
                  <div class="ps-eq-plus">+</div>
                  <div class="ps-eq-bar" style="flex:25; background:#ff6a52">열에너지</div>
                </div>
              </div>
              <div class="ps-two">
                <p>에너지는 사라진 것이 아니라 <strong>다른 형태의 에너지로 전환</strong>된 것입니다.</p>
                <p>분자가 자외선을 흡수한 후 미세하게 진동하면서 일부 에너지를 <strong>‘열(열에너지)’</strong> 형태로 방출합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 11: 일상 속 형광 기술 활용
        {
          title: '일상 속 형광 기술 활용',
          content: `
            <h2>일상 속 형광 기술 활용</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph"><img src="${getToolAsset('fluo_app_money.jpg')}" alt="위조지폐 및 신분증 감별"></div>
                <h3>위조지폐 및 신분증 감별</h3>
                <p>지폐나 여권에 자외선(UV)을 비추면 숨겨진 <strong>형광 보안 섬유와 워터마크가 발광</strong>하여 위조 여부를 즉시 판별합니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('fluo_app_pen.jpg')}" alt="형광펜 및 형광 염료"></div>
                <h3>형광펜 및 형광 염료</h3>
                <p>눈에 보이지 않는 자외선을 흡수한 뒤, 사람의 눈에 매우 잘 띄는 <strong>선명하고 밝은 가시광선으로 바꾸어 방출</strong>합니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('fluo_app_vest.jpg')}" alt="야간 안전 조끼 및 장비"></div>
                <h3>야간 안전 조끼 및 장비</h3>
                <p>어두운 환경에서 미세한 빛을 받아 <strong>강하게 형광빛을 방출하여 보행자와 작업자의 안전을 확보</strong>합니다.</p></figure>
            </div>
          `
        },

        // Slide 12: 다음 시간에는? (차시 예고)
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${getToolAsset('electron_uv_absorb.jpg')}" alt="자외선을 받은 원자 속 전자"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“전자가 자외선 빛 에너지를 받으면 어떤 일이 일어날까?”</p>
              <p>눈에 보이지 않는 원자 속 전자의 에너지 이동을 가상실험실로 직접 관찰합니다!</p>
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
      design: 'stage',
      slides: [
        // Slide 1: 표지
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg" style="left:46%"><img src="${getToolAsset('light_energy_wave.jpg')}" alt="자외선을 흡수하고 파란 형광빛을 내보내는 모형" style="object-fit:contain; object-position:right center"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">OLED 2차시 · 전자의 에너지 전달</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1>원자 속 전자의<br>에너지 전달</h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          title: '원자 속 전자가 에너지를 받으면?',
          content: `
            <h2>원자 속 전자가 에너지를 받으면?</h2>
            <div class="ps-body">
              <div class="ps-trio duo">
                <figure><img src="${getToolAsset('table_tennis_hit.jpg')}" alt="탁구채에 맞아 에너지를 받는 탁구공"><figcaption>탁구채의 강한 운동 에너지를 받아 튕겨 날아가는 탁구공</figcaption></figure>
                <figure><img src="${getToolAsset('electron_uv_absorb.jpg')}" alt="자외선 빛 에너지를 흡수하는 원자 속 전자"><figcaption>자외선 빛 에너지를 받은 전자는?</figcaption></figure>
              </div>
              <p class="ps-question">“탁구채로 공을 때리면 에너지를 받아 날아가듯, <span class="uv">원자 속 전자가 자외선 빛 에너지를 받으면 어떤 일이 일어날까?</span>”</p>
            </div>
          `
        },

        // Slide 3: 학습목표
        {
          title: '학습목표',
          content: `
            <h2>학습목표</h2>
            <p class="ps-goal"><u>전자의 에너지 전달 과정</u>을 <u>에너지 보존 법칙</u>으로 설명할 수 있다.</p>
          `
        },

        // Slide 4: 실습 준비물
        {
          title: '실습 준비물',
          content: `
            <h2>실습 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_tablet.jpg')}" alt="스마트 태블릿/노트북"></div><h3><span class="n">1</span>스마트 태블릿/노트북</h3><p>가상실험실 접속</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab2_screen.jpg')}" alt="가상실험실"></div><h3><span class="n">2</span>가상실험실</h3><p>전자의 에너지 전달 탐구</p></figure>
                <figure><div class="ps-ph"><svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block;background:#1a1a1a"><defs><linearGradient id="psRuler" x1="0" x2="1"><stop offset="0" stop-color="#7c3aed"/><stop offset=".18" stop-color="#2563eb"/><stop offset=".36" stop-color="#06b6d4"/><stop offset=".52" stop-color="#22c55e"/><stop offset=".68" stop-color="#eab308"/><stop offset=".84" stop-color="#f97316"/><stop offset="1" stop-color="#dc2626"/></linearGradient></defs><g transform="rotate(-8 200 150)"><rect x="40" y="95" width="320" height="110" rx="8" fill="#f4f1ea"/><rect x="58" y="112" width="284" height="40" fill="url(#psRuler)"/><g stroke="#333" stroke-width="1.5">${Array.from({length:31},(_,k)=>'<line x1="'+(58+k*284/30).toFixed(1)+'" x2="'+(58+k*284/30).toFixed(1)+'" y1="152" y2="'+(k%5?160:168)+'"/>').join('')}</g><g font-size="13" font-weight="700" fill="#333" text-anchor="middle">${[400,450,500,550,600,650,700].map((v,k)=>'<text x="'+(58+k*284/6).toFixed(1)+'" y="186">'+v+'</text>').join('')}</g></g></svg></div><h3><span class="n">3</span>컬러 스펙트럼 자</h3><p>파장과 빛 에너지 비교</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_logbook.jpg')}" alt="탐구 활동지"></div><h3><span class="n">4</span>탐구 활동지</h3><p>전자의 에너지 전달 기록</p></figure>
              </div>
            </div>
          `
        },

        // Slide 5: 탐구활동 시 주의 사항
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div>
                <h3>스마트기기 안전 관리</h3>
                <p>태블릿을 책상 위에 안정적으로 거치하고, 조작 시 충격이나 낙하에 주의합니다.</p></figure>
              <figure><div class="ps-bignum">2</div>
                <h3>단계별 시뮬레이션 준수</h3>
                <p><span class="ps-flow" style="color:#b794ff">자외선 흡수</span> → <span class="ps-flow" style="color:#ff8a6a">열 방출</span> → <span class="ps-flow" style="color:#5aa9ff">형광빛 방출</span> 과정을 순서대로 차근차근 관찰합니다.</p></figure>
              <figure><div class="ps-bignum">3</div>
                <h3>모둠원 협력 탐구</h3>
                <p>시뮬레이터 조작 담당과 관찰 기록 담당을 번갈아 가며 모든 모둠원이 참여합니다.</p></figure>
            </div>
          `
        },

        // Slide 6: 가상실험실 전자의 3단계 여정
        {
          title: '가상실험실: 전자의 에너지 전달 3단계',
          content: `
            <h2>가상실험실: 전자의 에너지 전달 3단계</h2>
            <div class="ps-body">
              <div class="ps-rail"><span style="--rc:#b794ff">1단계</span><span style="--rc:#ff8a6a">2단계</span><span style="--rc:#5aa9ff">3단계</span></div>
              <div class="ps-cols3 ps-steps">
                <figure><div class="ps-ph"><img src="${getToolAsset('lab2_step1.jpg')}" alt="자외선을 흡수해 보라색으로 퍼진 전자 분포"></div>
                  <p>가상실험실에서 전자가 <strong>자외선 빛 에너지</strong>를 흡수하는 모습을 관찰합니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab2_step2.jpg')}" alt="분자가 떨며 붉은 열을 내는 모습"></div>
                  <p>전자가 에너지를 전달하는 과정에서 일부 에너지가 <strong>열(열에너지)</strong> 형태로 방출되는 모습을 확인합니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab2_step3.jpg')}" alt="파란 형광빛이 퍼져 나오는 모습"></div>
                  <p>남은 에너지가 눈에 보이는 선명한 <strong>파란 형광빛(가시광선)</strong>으로 방출되는 모습을 기록합니다.</p></figure>
              </div>
            </div>
          `
        },

        // Slide 7: 시뮬레이션 관찰 결과표
        {
          title: '시뮬레이션 관찰 결과표',
          content: `
            <h2>시뮬레이션 관찰 결과표</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:14%">단계</th><th style="width:24%">에너지 출입 형태</th><th style="width:38%">전자의 에너지 전달 과정</th><th>관찰 결과 및 정답</th></tr></thead>
                <tbody>
                  <tr><td>1단계</td><td>자외선 빛 에너지</td><td>전자가 자외선 빛 에너지를 흡수함</td>
                    <td><div class="ps-reveal" style="--c:#b794ff" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>자외선</span></div></td></tr>
                  <tr><td>2단계</td><td>열(열에너지)</td><td>흡수한 에너지의 일부를 열로 방출함</td>
                    <td><div class="ps-reveal" style="--c:#ff7a52" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>열</span></div></td></tr>
                  <tr><td>3단계</td><td>형광빛(가시광선)</td><td>남은 에너지를 형광빛으로 방출함</td>
                    <td><div class="ps-reveal" style="--c:#5aa9ff" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>형광빛</span></div></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 빛의 파장과 에너지의 관계
        {
          title: '빛의 파장과 에너지의 관계',
          content: `
            <h2>빛의 파장과 에너지의 관계</h2>
            <div class="ps-body">
              <div class="ps-wide"><img src="${getToolAsset('light_energy_wave.jpg')}" alt="빛의 파장과 에너지 전달 모형"></div>
              <p class="ps-def"><b>에너지와 파장의 관계</b>흡수한 자외선(365nm) 에너지 중 일부를 열로 방출했기 때문에, 남은 에너지가 형광빛(450nm)으로 나올 때는 에너지가 작아져 파장이 더 긴 가시광선(파란빛)이 됩니다.</p>
            </div>
          `
        },

        // Slide 9: 생각해보기 (질문)
        {
          title: '사라진 에너지는 어디로?',
          content: `
            <h2>사라진 에너지는 어디로?</h2>
            <div class="ps-body">
              <p class="ps-q2">전자가 흡수한 자외선 에너지가 100인데, 방출된 형광빛 에너지는 75에 불과합니다.<br>그렇다면 <em>나머지 에너지</em>는 어디로 갔을까요?</p>
              <div>
                <div class="ps-meter-top"><span>전자가 흡수한 자외선 에너지</span><span>100</span></div>
                <div class="ps-cells">${Array.from({ length: 100 }, (_, k) => '<i class="' + (k < 75 ? '' : 'miss') + '"></i>').join('')}</div>
                <div class="ps-meter-scale"><span>방출된 형광빛 75</span><span>?</span></div>
              </div>
            </div>
          `
        },

        // Slide 10: 에너지 보존 법칙 (결과 및 공식)
        {
          title: '에너지 보존 법칙',
          content: `
            <h2>에너지 보존 법칙</h2>
            <div class="ps-body">
              <div class="ps-eq">
                <div class="ps-eq-row"><div class="ps-eq-bar" style="flex:1; background:#9b6bff">흡수한 자외선 에너지<span class="v">100</span></div></div>
                <div class="ps-eq-op">=</div>
                <div class="ps-eq-row">
                  <div class="ps-eq-bar" style="flex:75; background:#5aa9ff">방출된 형광빛 에너지<span class="v">75</span></div>
                  <div class="ps-eq-plus">+</div>
                  <div class="ps-eq-bar" style="flex:25; background:#ff6a52; padding:0 32px; font-size:38px; white-space:nowrap">방출된 열에너지<span class="v">25</span></div>
                </div>
              </div>
              <div class="ps-two">
                <p>에너지는 사라진 것이 아니라 <strong>'열' 형태로 방출</strong>된 것입니다.</p>
                <p>에너지는 사라지지 않고 형태만 바뀌며, <strong>전체 에너지의 총합은 항상 일정하게 보존</strong>됩니다.</p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는? (차시 예고)
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="발열과 함께 닳아 버리는 스마트폰 배터리"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“스마트폰은 얼마나 배터리를 낭비하고 있을까?”</p>
              <p>영상이나 게임을 할 때 뜨거워지는 스마트폰의 에너지 전환의 비밀이 공개됩니다!</p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 3차시: 스마트폰의 에너지 낭비 (전자의 에너지 방출)
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 스마트폰의 에너지 낭비',
      badge: 'OLED 3차시 · 전자의 에너지 방출 & 발열 문제',
      design: 'stage',
      slides: [
        // Slide 1: 표지
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${getToolAsset('oled_subpixel_macro.jpg')}" alt="확대한 스마트폰 화면의 빨강·초록·파랑 화소"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">OLED 3차시 · 전자의 에너지 방출 & 발열 문제</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1>스마트폰의<br>에너지 낭비</h1>
            </div>
          `
        },

        // Slide 2: 동기 유발
        {
          title: '스마트폰을 쓰면 왜 뜨거워질까?',
          content: `
            <h2>스마트폰을 쓰면 왜 뜨거워질까?</h2>
            <div class="ps-body">
              <div class="ps-trio duo">
                <figure><img src="${getToolAsset('smartphone_heat_demo.jpg')}" alt="장시간 사용 시 뜨거워지는 스마트폰"><figcaption>영상이나 게임을 오래 하면 뜨거워지는 스마트폰</figcaption></figure>
                <figure><img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="발열과 함께 빠르게 소모되는 배터리"><figcaption>발열과 함께 순식간에 닳아버리는 배터리</figcaption></figure>
              </div>
              <p class="ps-question">“화면을 켜기 위해 배터리 전기를 100 넣었는데, <span style="color:#ff6a52">왜 화면은 점점 뜨거워지고 배터리는 순식간에 사라질까?</span>”</p>
            </div>
          `
        },

        // Slide 3: 학습목표
        {
          title: '학습목표',
          content: `
            <h2>학습목표</h2>
            <p class="ps-goal">스마트폰 화면 속 <u>화소</u>를 관찰하고, 전기 공급 시 <u>75%의 전기가 열로 낭비</u>되는 원인을 설명할 수 있다.</p>
          `
        },

        // Slide 4: 탐구 준비물
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_loupe.jpg')}" alt="마이크로 루페 (60배)"></div><h3><span class="n">1</span>마이크로 루페 (60배)</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_phone.jpg')}" alt="스마트폰 디스플레이"></div><h3><span class="n">2</span>스마트폰 디스플레이</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab2_screen.jpg')}" alt="가상실험실"></div><h3><span class="n">3</span>가상실험실</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_logbook.jpg')}" alt="탐구 활동지"></div><h3><span class="n">4</span>탐구 활동지</h3></figure>
              </div>
            </div>
          `
        },

        // Slide 5: 탐구활동 시 주의 사항
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph"><img src="${getToolAsset('oled_tools_3.jpg')}" alt="스마트폰 카메라에 끼운 루페 클립" style="object-position:30% 50%"></div>
                <h3><span class="n">1</span>화면 스크래치 방지</h3>
                <p>루페 렌즈의 금속 부위가 액정에 직접 닿지 않도록 <strong>클립 보호 패드를 반드시 확인</strong>합니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('oled_kids_macro_explorer.jpg')}" alt="루페로 스마트폰 화면을 관찰하는 학생"></div>
                <h3><span class="n">2</span>카메라 화면으로 관찰</h3>
                <p>눈의 피로를 줄이기 위해 루페를 스마트폰 카메라 렌즈에 맞추고 <strong>화면을 보며 함께 관찰</strong>합니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="뜨거워져 배터리가 닳는 스마트폰"></div>
                <h3><span class="n">3</span>화면 발열 및 전원 관리</h3>
                <p>화면을 장시간 최대 밝기로 켜두면 과열되므로 <strong>관찰 후 스마트폰 화면을 잠시 꺼둡니다</strong>.</p></figure>
            </div>
          `
        },

        // Slide 6: 스마트폰 화면 초근접 관찰
        {
          title: '스마트폰 화면 초근접 관찰',
          content: `
            <h2>스마트폰 화면 초근접 관찰</h2>
            <div class="ps-body ps-split">
              <figure><img class="contain" src="${getToolAsset('oled_subpixel_macro.jpg')}" alt="루페 60배로 본 스마트폰 화면 화소"></figure>
              <div class="txt">
                <div><h3>빨강 · 초록 · 파랑 화소의 빛 합성</h3>
                  <p>눈에는 하얗게 보이지만, 루페로 초근접 확대하면 <strong>빨강(R), 초록(G), 파랑(B)</strong> 화소가 빛을 합성하여 흰색을 만듭니다.</p></div>
                <div><h3>스스로 빛을 내는 분자 (OLED)</h3>
                  <p>화면의 작은 화소 하나하나는 배터리 전기를 받아 <strong>스스로 빛을 내는 분자</strong>들로 이루어져 있습니다.</p></div>
              </div>
            </div>
          `
        },

        // Slide 7: 전기 에너지 전환 결과
        {
          title: '배터리에서 공급된 전기 에너지의 전환 결과',
          content: `
            <h2>배터리에서 공급된 전기 에너지의 전환 결과</h2>
            <div class="ps-body">
              <div class="ps-wide"><img src="${getToolAsset('oled_energy_conversion.jpg')}" alt="전기 공급 시 빛 방출과 열 손실"></div>
              <p class="ps-def">스마트폰 화면에 전기를 공급하면, 분자 내 전자의 활동으로 <strong style="color:#5aa9ff">25%의 에너지만 빛으로 방출</strong>되고 나머지 <strong style="color:#ff6a52">75%의 에너지는 열로 손실</strong>되어 화면을 뜨겁게 달굽니다.</p>
            </div>
          `
        },

        // Slide 8: 에너지 보존 법칙
        {
          title: '에너지 보존 법칙',
          content: `
            <h2>에너지 보존 법칙</h2>
            <div class="ps-body">
              <div class="ps-eq">
                <div class="ps-eq-row"><div class="ps-eq-bar" style="flex:1; background:#e2bd72">공급된 배터리 전기<span class="v">100</span></div></div>
                <div class="ps-eq-op">=</div>
                <div class="ps-eq-row">
                  <div class="ps-eq-bar" style="flex:25; background:#5aa9ff; padding:0 32px">유용한 화면 빛<span class="v">25</span></div>
                  <div class="ps-eq-plus">+</div>
                  <div class="ps-eq-bar" style="flex:75; background:#ff6a52">버려지는 열에너지<span class="v">75</span></div>
                </div>
              </div>
              <div class="ps-two">
                <p>전기를 공급했을 때 <strong>공급된 에너지의 75%는 빛을 내지 못하고</strong> 분자의 진동으로 바뀌어 열을 방출합니다.</p>
                <p>에너지는 사라진 것이 아니라 열로 바뀐 것이며, <strong>전체 에너지의 총합은 항상 보존</strong>됩니다.</p>
              </div>
            </div>
          `
        },

        // Slide 9: 75% 열 손실이 스마트폰에 주는 영향
        {
          title: '75% 열 손실이 스마트폰에 주는 영향',
          content: `
            <h2>75% 열 손실이 스마트폰에 주는 영향</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph"><img src="${getToolAsset('reader_oled_1_heat.jpg')}" alt="뜨겁게 달아오른 스마트폰"></div>
                <h3 style="color:#ff8a6a">기기 과열 (발열)</h3>
                <p>버려진 75%의 열이 스마트폰 내부 온도를 높여 기기를 뜨겁게 달굽니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('smartphone_battery_drain.jpg')}" alt="빠르게 닳는 배터리"></div>
                <h3 style="color:#ff8a6a">배터리 조기 방전</h3>
                <p>전기의 75%가 열로 버려지기 때문에 배터리가 순식간에 닳아 사용 시간이 줄어듭니다.</p></figure>
              <figure><div class="ps-ph"><img src="${getToolAsset('oled_burnin_phone.jpg')}" alt="화면에 남은 잔상"></div>
                <h3 style="color:#ff8a6a">화면 잔상 (번인)</h3>
                <p>지속적인 열에 노출된 분자가 손상되어 화면에 영구적인 얼룩 잔상이 남습니다.</p></figure>
            </div>
          `
        },

        // Slide 10: 3차시 핵심 배움 정리
        {
          title: '3차시 핵심 배움 정리',
          content: `
            <h2>3차시 핵심 배움 정리</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div>
                <h3>화소와 빛의 합성</h3>
                <p>스마트폰 화면은 빨강, 초록, 파랑 스스로 빛을 내는 화소의 빛 합성으로 색을 만듭니다.</p></figure>
              <figure><div class="ps-bignum">2</div>
                <h3>에너지 방출 비율</h3>
                <p>전기를 공급하면 분자 내 전자 활동에 의해 <strong>25%는 빛으로 방출</strong>되고, <strong>75%는 열로 손실</strong>됩니다.</p></figure>
              <figure><div class="ps-bignum">3</div>
                <h3>75% 에너지 낭비</h3>
                <p>빛을 내지 못한 75%가 열로 낭비되어 화면 발열과 배터리 조기 소모를 일으킵니다.</p></figure>
            </div>
          `
        },

        // Slide 11: 다음 시간에는? (차시 예고)
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${getToolAsset('oled_fast_energy_transfer.jpg')}" alt="열로 식기 전에 빛으로 바뀌는 분자 모형"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“열로 식어버리는 75%의 에너지를 빛으로 구출할 방법은 없을까?”</p>
              <p>열로 식기 전에 빛으로 되돌리는 대한민국 KAIST의 초고속 에너지 전환 기술이 공개됩니다!</p>
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
      design: 'stage',
      slides: [
        // Slide 1: 표지
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${getToolAsset('reader_oled_3_simulation.jpg')}" alt="분자 모형을 연구하는 한국인 연구자들"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">OLED 4차시 · 초고속 에너지 전환 & 미래 기술</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1 style="font-size:104px">버려지는 열을<br>빛으로 바꾸는<br>KAIST 첨단 기술</h1>
            </div>
          `
        },

        // Slide 2: 동기 유발 (번인 현상 & 청색 소자 한계)
        {
          title: '왜 항상 파란색 화소가 먼저 고장 날까?',
          content: `
            <h2>왜 항상 파란색 화소가 먼저 고장 날까?</h2>
            <div class="ps-body ps-split portrait">
              <figure><img src="${getToolAsset('real_burnin_display.jpg')}" alt="실제 스마트폰 화면 번인 현상 사진"></figure>
              <div class="txt">
                <p class="ps-q2">“스마트폰 화면을 오래 쓰면 왜 항상 <em>파란색 화소가 먼저 타서</em> 누런 잔상이 남을까?”</p>
                <p>화면이 쉽게 타지 않고 오래 버티게 하려면 어떤 방법이 필요할까?</p>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          title: '학습 목표',
          content: `
            <h2>학습 목표</h2>
            <p class="ps-goal">버려지는 열을 빛으로 바꾸는 <u>KAIST 첨단 기술</u>을 탐구하고, 미래 디스플레이 기술이 가져올 <u>우리 삶의 변화</u>를 설명할 수 있다.</p>
          `
        },

        // Slide 4: OLED 기술 세대별 발광 효율 비교
        {
          title: 'OLED 기술 세대별 발광 효율 비교',
          content: `
            <h2>OLED 기술 세대별 발광 효율 비교</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:18%">기술 구분</th><th style="width:44%">빛을 내는 방식</th><th>특징</th></tr></thead>
                <tbody>
                  <tr><td>1세대</td>
                    <td><div style="margin-bottom:16px">전기의 25%만 빛으로 전환</div><div class="ps-pct" style="--c:#ff8a6a"><span><i style="width:25%"></i></span><b>25%</b></div></td>
                    <td class="note" style="color:#ff8a6a">75%가 열로 낭비되어 기기 발열 및 배터리 소모</td></tr>
                  <tr><td>2세대</td>
                    <td><div style="margin-bottom:16px">금속(이리듐)을 섞어 100% 빛 전환</div><div class="ps-pct" style="--c:#e2bd72"><span><i style="width:100%"></i></span><b>100%</b></div></td>
                    <td class="note" style="color:#e2bd72">비싼 금속 필요, 파란색 화면 수명이 너무 짧음(번인)</td></tr>
                  <tr><td>차세대<small>KAIST</small></td>
                    <td><div style="margin-bottom:16px">열로 식기 전 100% 빛으로 초고속 전환</div><div class="ps-pct" style="--c:#5aa9ff"><span><i style="width:100%"></i></span><b>100%</b></div></td>
                    <td class="note" style="color:#5aa9ff">비싼 금속 없이 100% 빛 전환과 긴 수명 동시 달성!</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 5: KAIST 초고속 에너지 전환 메커니즘
        {
          title: 'KAIST 초고속 에너지 전환 메커니즘',
          content: `
            <h2>KAIST 초고속 에너지 전환 메커니즘</h2>
            <div class="ps-body">
              <div class="ps-wide"><img src="${getToolAsset('oled_fast_energy_transfer.jpg')}" alt="KAIST 초고속 에너지 전환 75%에서 100% 구출"></div>
              <p class="ps-def"><b>초고속 에너지 전환 기술</b>분자의 불필요한 열 진동을 억제하고, 75%의 에너지가 열로 빠져나가기 전에 분자 진동수를 조절하여 <strong style="color:#5aa9ff">열 스트레스 없이 100% 시원한 빛</strong>으로 방출하는 KAIST 원천 기술</p>
            </div>
          `
        },

        // Slide 6: 탐구 준비물
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_tablet.jpg')}" alt="태블릿 (분자 시뮬레이터)"></div><h3><span class="n">1</span>태블릿 (분자 시뮬레이터)</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_worksheet4.jpg')}" alt="4차시 탐구 활동지"></div><h3><span class="n">2</span>4차시 탐구 활동지</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_storybook.jpg')}" alt="스토리북 읽기 자료"></div><h3><span class="n">3</span>스토리북 읽기 자료</h3></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_pens.jpg')}" alt="필기도구"></div><h3><span class="n">4</span>필기도구</h3></figure>
              </div>
            </div>
          `
        },

        // Slide 7: 분자 시뮬레이터 탐구 절차
        {
          title: '분자 시뮬레이터 탐구',
          content: `
            <h2>분자 시뮬레이터 탐구</h2>
            <div class="ps-body">
              <div class="ps-rail"><span>1</span><span>2</span><span>3</span></div>
              <div class="ps-cols3 ps-steps">
                <figure><div class="ps-ph"><img src="${getToolAsset('lab4_quake.jpg')}" alt="같은 진동판 위 두 건물 모형"></div>
                  <h3>건물 뼈대 흔들림 비교</h3>
                  <p>같은 진동대 위 두 건물의 흔들림을 비교하고, 대각선 연결이 움직임에 미치는 영향을 봅니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab4_inject.jpg')}" alt="분자에 전기를 공급하는 화면" style="object-position:30% 50%"></div>
                  <h3>분자 실험 두 번</h3>
                  <p>기본 상태에 전기 100을 넣고, 움직임을 조절한 뒤 새 전기 100을 다시 넣습니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('oled_tools_4.jpg')}" alt="탐구 활동지" style="object-position:55% 85%"></div>
                  <h3>활동지 기록</h3>
                  <p>두 상태의 발광 효율과 열 손실을 비교하고 분자 수명에 미치는 영향을 설명합니다.</p></figure>
              </div>
              <div class="ps-ask-row">
                <p><b>관찰 질문</b>열로 손실되던 에너지가 빛으로 전환되면 발열과 분자 수명은 어떻게 달라질까요?</p>
                <button type="button" class="ps-cta" onclick="openVirtualLabModal(4)">4차시 분자 시뮬레이션 열기</button>
              </div>
            </div>
          `
        },

        // Slide 8: 시뮬레이터 결과 비교
        {
          title: '시뮬레이터 결과 비교',
          content: `
            <h2>시뮬레이터 결과 비교</h2>
            <div class="ps-body">
              <div class="ps-compare">
                <figure><div class="ps-ph"><img src="${getToolAsset('lab4_basic.jpg')}" alt="기본 분자구조 실험 결과: 빛 25%, 열 75%"></div>
                  <figcaption>기본 상태<span>발광 효율 약 25% · 열 손실 약 75% · 발열과 분자 손상 증가</span></figcaption></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('lab4_kaist.jpg')}" alt="고정된 분자구조 실험 결과: 빛 100%, 열 0%"></div>
                  <figcaption style="color:#5aa9ff">KAIST 기술 적용<span>발광 효율 100% · 열 손실 0% · 발열 감소와 분자 수명 향상</span></figcaption></figure>
              </div>
              <p class="ps-foot">시뮬레이터의 수업용 모형 수치를 활동지에 기록하고, 두 상태의 차이가 생긴 까닭을 설명합니다.</p>
            </div>
          `
        },

        // Slide 9: 미래 사회 변화 탐구
        {
          title: '미래 디스플레이와 생활의 변화',
          content: `
            <h2>미래 디스플레이와 생활의 변화</h2>
            <div class="ps-body">
              <p class="ps-question" style="margin:0 0 40px">KAIST 기술이 적용되면 미래의 스마트폰과 우리 생활은 어떻게 달라질까요?</p>
              <div class="ps-cols3">
                <figure><div class="ps-ph" style="aspect-ratio:16/10"><img src="${getToolAsset('oled_evolution_thinness.jpg')}" alt="얇고 가벼운 화면 패널"></div>
                  <h3>더 가벼운 스마트폰</h3>
                  <p>전력 소모와 발열이 줄어 배터리와 방열 부품의 무게를 줄일 수 있습니다.</p></figure>
                <figure><div class="ps-ph" style="aspect-ratio:16/10"><img src="${getToolAsset('reader_oled_4_pure_blue.jpg')}" alt="선명한 파란빛을 내는 화면 패널"></div>
                  <h3>오래 쓰는 화면</h3>
                  <p>열로 인한 분자 손상이 줄어 화면 잔상과 번인 발생을 늦출 수 있습니다.</p></figure>
                <figure><div class="ps-ph" style="aspect-ratio:16/10"><img src="${getToolAsset('oled_evolution_foldable.jpg')}" alt="휘어지는 얇은 화면"></div>
                  <h3>얇고 유연한 화면</h3>
                  <p>열 관리 부담이 줄어 접거나 말 수 있는 화면을 더 얇게 만들 수 있습니다.</p></figure>
              </div>
              <p class="ps-foot" style="margin-top:auto">활동지에 가장 기대되는 변화 한 가지와 그 까닭을 기록합니다.</p>
            </div>
          `
        },

        // Slide 10: 수료 축하
        {
          title: '수료를 축하합니다!',
          layout: 'light',
          content: `
            <figure><img src="${getToolAsset('kaist_mascot_celebrate.jpg')}" alt="신나게 축하하는 KAIST 넙죽이와 거위"></figure>
            <div class="ps-light-txt">
              <h2>수료를 축하합니다!</h2>
              <p class="ps-q3">OLED 탐구 여정을 멋지게 완주했습니다!</p>
            </div>
          `
        }
      ]
    }
  };
