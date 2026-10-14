/**
 * KAIST CPRL - 양자컴퓨터 모듈 슬라이드 데이터 (1~4차시)
 * assets/data/presentation-data-quantum.js
 * 1920×1080 지면형 덱 (assets/css/presentation-stage.css) · 수업지도안(lesson-plan-data-quantum.js) 흐름과 일치
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

// image/ 바로 아래 사진
function qImg(f) { return getToolAsset('../' + f); }
const qSup = n => `<tspan baseline-shift="super" font-size="62%">${n}</tspan>`;

// ---------------------------------------------------------------------------
// 그림 (SVG)
// ---------------------------------------------------------------------------

// 체스판과 쌀알: 칸마다 2배씩
function qChessboard() {
  let cells = '';
  for (let i = 0; i < 64; i++) {
    const r = Math.floor(i / 8), c = i % 8, x = 20 + c * 100, y = 20 + r * 100;
    cells += `<rect x="${x}" y="${y}" width="96" height="96" fill="${(r + c) % 2 ? '#1d1d1d' : '#2a2a2a'}"/>`;
    if (i < 6) {
      const n = 2 ** i, cols = Math.ceil(Math.sqrt(n)), step = 64 / cols;
      for (let k = 0; k < n; k++) cells += `<ellipse cx="${x + 16 + step / 2 + (k % cols) * step}" cy="${y + 22 + step / 2 + Math.floor(k / cols) * step}" rx="${Math.min(7, step * .32)}" ry="${Math.min(4.2, step * .2)}" fill="#f1e6c8"/>`;
      cells += `<text x="${x + 8}" y="${y + 18}" font-size="15" font-weight="700" fill="#9d988d">${n}</text>`;
    } else {
      cells += `<rect x="${x + 6}" y="${y + 6}" width="84" height="84" rx="4" fill="#f1e6c8" opacity="${(0.12 + 0.88 * (i - 6) / 57).toFixed(2)}"/>`;
    }
  }
  return `<svg viewBox="0 0 840 840" style="width:100%;height:100%;display:block">
    <rect width="840" height="840" fill="#111"/>${cells}
    <rect x="720" y="720" width="96" height="96" fill="none" stroke="#e2bd72" stroke-width="5"/>
    <text x="768" y="778" font-size="26" font-weight="800" fill="#111" text-anchor="middle">2${qSup(63)}</text>
  </svg>`;
}

// 전자가 하나 늘 때마다 경우의 수 2배
function qTree() {
  let g = '', xs = [80, 420, 760, 1100, 1440];
  const yOf = (lv, k) => 70 + (k + .5) * (440 / 2 ** lv);
  for (let lv = 0; lv < 4; lv++)
    for (let k = 0; k < 2 ** lv; k++)
      for (const ch of [0, 1]) {
        const k2 = k * 2 + ch;
        g += `<line x1="${xs[lv]}" y1="${yOf(lv, k)}" x2="${xs[lv + 1]}" y2="${yOf(lv + 1, k2)}" stroke="${ch ? '#ff8a6a' : '#5aa9ff'}" stroke-width="${3 - lv * .5}" opacity=".85"/>`;
      }
  for (let lv = 0; lv <= 4; lv++)
    for (let k = 0; k < 2 ** lv; k++)
      g += `<circle cx="${xs[lv]}" cy="${yOf(lv, k)}" r="${lv ? 13 - lv * 2 : 16}" fill="${lv ? '#f4f1ea' : '#e2bd72'}"/>`;
  const lab = ['', '전자 1개 · 2가지', '전자 2개 · 4가지', '전자 3개 · 8가지', '전자 4개 · 16가지'];
  for (let lv = 1; lv <= 4; lv++) g += `<text x="${xs[lv]}" y="40" font-size="30" font-weight="800" fill="#f4f1ea" text-anchor="middle">${lab[lv]}</text>`;
  return `<svg viewBox="0 0 1560 530" style="width:100%;height:auto;display:block">${g}
    <g font-size="24" font-weight="700"><circle cx="1200" cy="510" r="8" fill="#5aa9ff"/><text x="1216" y="518" fill="#5aa9ff">상태 가</text><circle cx="1340" cy="510" r="8" fill="#ff8a6a"/><text x="1356" y="518" fill="#ff8a6a">상태 나</text></g>
  </svg>`;
}

// 자릿수 사다리: 경우의 수와 비교 대상 (10의 몇 제곱)
function qLadder() {
  const X = e => 40 + e * 29.4;
  let t = '';
  for (let e = 0; e <= 55; e += 5) {
    t += `<line x1="${X(e)}" x2="${X(e)}" y1="${e % 10 ? 292 : 284}" y2="${e % 10 ? 308 : 316}" stroke="rgba(244,241,234,.5)" stroke-width="2"/>`;
    if (e % 10 === 0) t += `<text x="${X(e)}" y="350" font-size="26" font-weight="700" fill="#9d988d" text-anchor="middle">10${qSup(e)}</text>`;
  }
  const up = [[0.6, '수소 분자', '4가지', '#5aa9ff', 70], [3.0, '물 분자', '1,024가지', '#5aa9ff', 190], [30.7, '카페인', `약 5×10${qSup(30)}가지`, '#ffb347', 110], [53, '페니실린', `약 10${qSup(53)}가지`, '#ff6a52', 110]];
  const down = [[18.9, '지구의 모든 모래알', `약 7.5×10${qSup(18)}개`], [50.1, '지구 전체 원자', `약 10${qSup(50)}개`]];
  for (const [e, a, b, c, h] of up)
    t += `<line x1="${X(e)}" x2="${X(e)}" y1="300" y2="${300 - h}" stroke="${c}" stroke-width="3"/><circle cx="${X(e)}" cy="300" r="11" fill="${c}"/>
      <text x="${X(e)}" y="${300 - h - 44}" font-size="32" font-weight="800" fill="${c}" text-anchor="${e > 50 ? 'end' : e < 5 ? 'start' : 'middle'}">${a}</text>
      <text x="${X(e)}" y="${300 - h - 10}" font-size="26" font-weight="600" fill="#f4f1ea" text-anchor="${e > 50 ? 'end' : e < 5 ? 'start' : 'middle'}">${b}</text>`;
  for (const [e, a, b] of down)
    t += `<line x1="${X(e)}" x2="${X(e)}" y1="300" y2="400" stroke="#cfcac0" stroke-width="2" stroke-dasharray="6 6"/><rect x="${X(e) - 9}" y="291" width="18" height="18" fill="#cfcac0" transform="rotate(45 ${X(e)} 300)"/>
      <text x="${X(e)}" y="440" font-size="28" font-weight="700" fill="#cfcac0" text-anchor="middle">${a}</text>
      <text x="${X(e)}" y="476" font-size="25" fill="#9d988d" text-anchor="middle">${b}</text>`;
  return `<svg viewBox="0 0 1696 500" style="width:100%;height:auto;display:block;overflow:visible">
    <defs><linearGradient id="qLad" x1="0" x2="1"><stop offset="0" stop-color="#5aa9ff"/><stop offset=".55" stop-color="#ffb347"/><stop offset="1" stop-color="#ff6a52"/></linearGradient></defs>
    <rect x="40" y="296" width="1617" height="8" rx="4" fill="url(#qLad)"/>${t}
    <text x="1657" y="30" font-size="24" fill="#9d988d" text-anchor="end">눈금 한 칸마다 0이 5개씩 더 붙습니다</text>
  </svg>`;
}

// 누운 동전 / 도는 동전
function qCoin(spin) {
  const face = `<defs><radialGradient id="qCoinG${spin ? 1 : 0}" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#f4f4f2"/><stop offset=".55" stop-color="#b9bcc0"/><stop offset="1" stop-color="#7c8086"/></radialGradient>
    <radialGradient id="qFloor" cx=".5" cy=".3" r=".9"><stop offset="0" stop-color="#2b2f36"/><stop offset="1" stop-color="#0b0c0e"/></radialGradient></defs>
    <rect width="800" height="600" fill="url(#qFloor)"/>`;
  if (!spin) return `<svg viewBox="0 0 800 600" style="width:100%;height:100%;display:block">${face}
    <ellipse cx="400" cy="400" rx="230" ry="80" fill="#000" opacity=".5"/>
    <ellipse cx="400" cy="382" rx="220" ry="78" fill="#6b6f75"/>
    <ellipse cx="400" cy="366" rx="220" ry="78" fill="url(#qCoinG0)"/>
    <ellipse cx="400" cy="366" rx="186" ry="64" fill="none" stroke="#8d9197" stroke-width="4"/>
    <text x="400" y="366" font-size="120" font-weight="800" fill="#5d6167" text-anchor="middle" dominant-baseline="middle" transform="translate(0 366) scale(1 .36) translate(0 -366)">0</text>
  </svg>`;
  return `<svg viewBox="0 0 800 600" style="width:100%;height:100%;display:block">${face}
    <ellipse cx="400" cy="500" rx="150" ry="22" fill="#000" opacity=".55"/>
    <ellipse cx="400" cy="290" rx="190" ry="205" fill="url(#qCoinG1)" opacity=".08"/>
    <ellipse cx="400" cy="290" rx="130" ry="205" fill="url(#qCoinG1)" opacity=".14"/>
    <ellipse cx="400" cy="290" rx="72" ry="205" fill="url(#qCoinG1)" opacity=".3"/>
    <ellipse cx="400" cy="290" rx="24" ry="205" fill="url(#qCoinG1)"/>
    <path d="M190 160 Q400 60 610 160" fill="none" stroke="#b794ff" stroke-width="6" stroke-linecap="round" opacity=".8"/>
    <path d="M592 140 L612 162 L584 172" fill="none" stroke="#b794ff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
    <path d="M610 420 Q400 520 190 420" fill="none" stroke="#b794ff" stroke-width="6" stroke-linecap="round" opacity=".5"/>
    <text x="150" y="300" font-size="88" font-weight="800" fill="#5aa9ff" text-anchor="middle" opacity=".9">0</text>
    <text x="650" y="300" font-size="88" font-weight="800" fill="#ff8a6a" text-anchor="middle" opacity=".9">1</text>
  </svg>`;
}

// 스위치 · 동전 · 지구본 모형
function qQubitPanels() {
  return `<svg viewBox="0 0 1696 560" style="width:100%;height:auto;display:block">
    <defs><radialGradient id="qSph" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#3a3f4a"/><stop offset="1" stop-color="#121418"/></radialGradient>
      <marker id="qArr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#e2bd72"/></marker></defs>
    <g transform="translate(140 60)">
      <text x="140" y="0" font-size="34" font-weight="800" fill="#f4f1ea" text-anchor="middle">비트</text>
      <rect x="40" y="70" width="200" height="96" rx="48" fill="#2a2a2a" stroke="#555" stroke-width="2"/>
      <circle cx="88" cy="118" r="38" fill="#5aa9ff"/><text x="88" y="130" font-size="34" font-weight="800" fill="#0a0a0a" text-anchor="middle">0</text>
      <text x="196" y="130" font-size="34" font-weight="800" fill="#666" text-anchor="middle">1</text>
      <rect x="40" y="220" width="200" height="96" rx="48" fill="#2a2a2a" stroke="#555" stroke-width="2"/>
      <circle cx="192" cy="268" r="38" fill="#ff8a6a"/><text x="192" y="280" font-size="34" font-weight="800" fill="#0a0a0a" text-anchor="middle">1</text>
      <text x="84" y="280" font-size="34" font-weight="800" fill="#666" text-anchor="middle">0</text>
      <text x="140" y="400" font-size="30" font-weight="700" fill="#cfcac0" text-anchor="middle">0 또는 1 중 딱 하나</text>
      <text x="140" y="444" font-size="26" fill="#9d988d" text-anchor="middle">스위치 · 누운 동전</text>
    </g>
    <path d="M520 290 H640" stroke="#555" stroke-width="3" stroke-dasharray="8 8"/>
    <g transform="translate(700 60)">
      <text x="140" y="0" font-size="34" font-weight="800" fill="#f4f1ea" text-anchor="middle">큐비트 (비유)</text>
      <ellipse cx="140" cy="200" rx="110" ry="120" fill="#b9bcc0" opacity=".1"/>
      <ellipse cx="140" cy="200" rx="60" ry="120" fill="#b9bcc0" opacity=".25"/>
      <ellipse cx="140" cy="200" rx="16" ry="120" fill="#d6d8db"/>
      <text x="20" y="214" font-size="44" font-weight="800" fill="#5aa9ff" text-anchor="middle">0</text>
      <text x="260" y="214" font-size="44" font-weight="800" fill="#ff8a6a" text-anchor="middle">1</text>
      <text x="140" y="400" font-size="30" font-weight="700" fill="#cfcac0" text-anchor="middle">0과 1이 섞인 중첩</text>
      <text x="140" y="444" font-size="26" fill="#9d988d" text-anchor="middle">도는 동전에 비유</text>
    </g>
    <path d="M1080 290 H1200" stroke="#555" stroke-width="3" stroke-dasharray="8 8"/>
    <g transform="translate(1260 60)">
      <text x="160" y="0" font-size="34" font-weight="800" fill="#f4f1ea" text-anchor="middle">지구본 모형</text>
      <circle cx="160" cy="210" r="140" fill="url(#qSph)" stroke="#6b6f75" stroke-width="2"/>
      <ellipse cx="160" cy="210" rx="140" ry="40" fill="none" stroke="#e2bd72" stroke-width="2.5" stroke-dasharray="7 7"/>
      <line x1="160" y1="70" x2="160" y2="350" stroke="#6b6f75" stroke-width="2"/>
      <circle cx="160" cy="70" r="12" fill="#5aa9ff"/><circle cx="160" cy="350" r="12" fill="#ff8a6a"/>
      <text x="196" y="62" font-size="28" font-weight="800" fill="#5aa9ff">북극 = 0</text>
      <text x="196" y="372" font-size="28" font-weight="800" fill="#ff8a6a">남극 = 1</text>
      <line x1="160" y1="210" x2="292" y2="232" stroke="#e2bd72" stroke-width="6" marker-end="url(#qArr)"/>
      <text x="160" y="410" font-size="30" font-weight="700" fill="#cfcac0" text-anchor="middle">화살표가 적도를 가리키면</text>
      <text x="160" y="450" font-size="26" fill="#9d988d" text-anchor="middle">0과 1이 반반으로 섞인 중첩</text>
    </g>
  </svg>`;
}

// 미로 1,024갈래: 하나씩 확인 vs 정답 확률 키우기
function qMaze() {
  let grid = '';
  for (let k = 0; k < 1024; k++) {
    const x = 40 + (k % 32) * 17, y = 90 + Math.floor(k / 32) * 13;
    const fill = k === 777 ? '#e2bd72' : k < 520 ? '#6b6f75' : '#2a2a2a';
    grid += `<rect x="${x}" y="${y}" width="14" height="10" fill="${fill}"/>`;
  }
  let flat = '', peak = '';
  for (let k = 0; k < 32; k++) {
    flat += `<rect x="${830 + k * 25}" y="${206}" width="18" height="14" fill="#5aa9ff" opacity=".8"/>`;
    const h = k === 24 ? 200 : 3;
    peak += `<rect x="${830 + k * 25}" y="${520 - h}" width="18" height="${h}" fill="${k === 24 ? '#e2bd72' : '#5aa9ff'}"/>`;
  }
  return `<svg viewBox="0 0 1696 560" style="width:100%;height:auto;display:block">
    <text x="40" y="44" font-size="32" font-weight="800" fill="#f4f1ea">일반 컴퓨터 · 하나씩 확인</text>
    ${grid}
    <text x="40" y="560" font-size="26" fill="#cfcac0">회색은 이미 확인한 길, 금색이 정답 길 · 운이 나쁘면 1,024번</text>
    <text x="830" y="44" font-size="32" font-weight="800" fill="#f4f1ea">양자 컴퓨터 · 정답이 나올 확률 키우기</text>
    <text x="830" y="140" font-size="26" fill="#9d988d">처음: 모든 길이 나올 확률이 똑같음</text>
    <line x1="830" y1="220" x2="1630" y2="220" stroke="#444" stroke-width="2"/>${flat}
    <text x="830" y="290" font-size="26" fill="#9d988d">약 25번 반복한 뒤: 측정하면 정답 길이 나올 확률이 매우 높음</text>
    <line x1="830" y1="520" x2="1630" y2="520" stroke="#444" stroke-width="2"/>${peak}
    <text x="1430" y="560" font-size="26" fill="#e2bd72" text-anchor="middle">정답 길</text>
  </svg>`;
}

// 안개 낀 산골짜기와 공
function qValley() {
  return `<svg viewBox="0 0 800 600" style="width:100%;height:100%;display:block">
    <defs><linearGradient id="qSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2433"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
      <linearGradient id="qFog" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd6e0" stop-opacity="0"/><stop offset=".5" stop-color="#cfd6e0" stop-opacity=".35"/><stop offset="1" stop-color="#cfd6e0" stop-opacity="0"/></linearGradient></defs>
    <rect width="800" height="600" fill="url(#qSky)"/>
    <path d="M0 260 L120 170 L230 240 L330 150 L470 250 L580 160 L700 230 L800 180 V600 H0Z" fill="#202938"/>
    <path d="M0 330 C120 300 200 360 300 420 C360 460 430 470 500 430 C600 370 680 300 800 320 V600 H0Z" fill="#2c384a"/>
    <rect y="230" width="800" height="200" fill="url(#qFog)"/>
    <path d="M0 470 C150 430 260 520 380 548 C460 566 540 540 620 500 C700 460 760 450 800 455 V600 H0Z" fill="#3a4a60"/>
    <path d="M118 455 C200 470 300 530 384 548" fill="none" stroke="#e2bd72" stroke-width="5" stroke-dasharray="12 12"/>
    <circle cx="110" cy="440" r="26" fill="#ff8a6a"/>
    <line x1="384" y1="548" x2="384" y2="490" stroke="#f4f1ea" stroke-width="4"/><path d="M384 490 L428 504 L384 518Z" fill="#e2bd72"/>
    <text x="400" y="590" font-size="30" font-weight="800" fill="#e2bd72" text-anchor="middle">가장 낮은 곳</text>
  </svg>`;
}

// 수소 분자의 에너지 곡선 (가상실험실과 같은 식)
function qH2Curve() {
  const E = r => 0.8 * (Math.exp(-3 * (r - 0.74)) - 2 * Math.exp(-1.5 * (r - 0.74))) - 0.337;
  const X = r => 120 + (r - 0.28) / (2.6 - 0.28) * 1440, Y = e => 70 + (e + 0.2) / (-1.17 + 0.2) * 430;
  let d = '';
  for (let r = 0.28; r <= 2.6; r += 0.01) d += `${d ? 'L' : 'M'}${X(r).toFixed(1)} ${Y(E(r)).toFixed(1)}`;
  const atoms = (cx, cy, gap) => `<circle cx="${cx - gap / 2}" cy="${cy}" r="22" fill="#f4f1ea"/><circle cx="${cx + gap / 2}" cy="${cy}" r="22" fill="#f4f1ea"/>
    <text x="${cx - gap / 2}" y="${cy + 9}" font-size="24" font-weight="800" fill="#111" text-anchor="middle">H</text><text x="${cx + gap / 2}" y="${cy + 9}" font-size="24" font-weight="800" fill="#111" text-anchor="middle">H</text>`;
  return `<svg viewBox="0 0 1696 620" style="width:100%;height:auto;display:block">
    <line x1="120" y1="40" x2="120" y2="520" stroke="#555" stroke-width="2"/><line x1="120" y1="520" x2="1600" y2="520" stroke="#555" stroke-width="2"/>
    <text x="120" y="24" font-size="26" fill="#9d988d">에너지 ↑</text>
    <text x="1600" y="566" font-size="26" fill="#9d988d" text-anchor="end">두 원자 사이 거리 →</text>
    <path d="${d}" fill="none" stroke="#5aa9ff" stroke-width="6"/>
    <circle cx="${X(0.74)}" cy="${Y(E(0.74))}" r="16" fill="#e2bd72"/>
    <line x1="${X(0.74)}" y1="${Y(E(0.74)) + 16}" x2="${X(0.74)}" y2="520" stroke="#e2bd72" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="${X(0.74)}" y="566" font-size="28" font-weight="800" fill="#e2bd72" text-anchor="middle">0.074 nm</text>
    <text x="${X(0.74) + 40}" y="${Y(E(0.74)) + 8}" font-size="30" font-weight="800" fill="#e2bd72">바닥 상태 · 에너지 -1.137</text>
    ${atoms(X(0.36), 110, 40)}
    <text x="${X(0.36) + 60}" y="102" font-size="28" font-weight="700" fill="#ff8a6a">너무 가까우면</text>
    <text x="${X(0.36) + 60}" y="138" font-size="26" fill="#cfcac0">원자핵끼리 밀어냄</text>
    ${atoms(X(2.25), 210, 150)}
    <text x="${X(2.25)}" y="160" font-size="28" font-weight="700" fill="#b794ff" text-anchor="middle">너무 멀면</text>
    <text x="${X(2.25)}" y="268" font-size="26" fill="#cfcac0" text-anchor="middle">끌어당기는 힘이 약해 결합이 끊어짐</text>
  </svg>`;
}

// 2인 3각 계산: 양자 컴퓨터 ↔ 일반 컴퓨터
function qLoop() {
  return `<svg viewBox="0 0 1696 600" style="width:100%;height:auto;display:block">
    <defs><clipPath id="qC1"><circle cx="330" cy="300" r="190"/></clipPath><clipPath id="qC2"><circle cx="1366" cy="300" r="190"/></clipPath>
      <marker id="qA2" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#e2bd72"/></marker></defs>
    <image href="${qImg('quantum_laser_manipulation.jpg')}" x="80" y="110" width="500" height="380" preserveAspectRatio="xMidYMid slice" clip-path="url(#qC1)"/>
    <circle cx="330" cy="300" r="190" fill="none" stroke="#b794ff" stroke-width="5"/>
    <image href="${qImg('classical_silicon_bit_transistor.jpg')}" x="1116" y="110" width="500" height="380" preserveAspectRatio="xMidYMid slice" clip-path="url(#qC2)"/>
    <circle cx="1366" cy="300" r="190" fill="none" stroke="#5aa9ff" stroke-width="5"/>
    <text x="330" y="560" font-size="36" font-weight="800" fill="#b794ff" text-anchor="middle">양자 컴퓨터 · 학생 A</text>
    <text x="1366" y="560" font-size="36" font-weight="800" fill="#5aa9ff" text-anchor="middle">일반 컴퓨터 · 학생 B</text>
    <path d="M540 220 C760 120 940 120 1156 220" fill="none" stroke="#e2bd72" stroke-width="5" marker-end="url(#qA2)"/>
    <text x="848" y="128" font-size="32" font-weight="800" fill="#f4f1ea" text-anchor="middle">① 지금 자리의 에너지를 재서 알려 줌</text>
    <path d="M1156 380 C940 480 760 480 540 380" fill="none" stroke="#e2bd72" stroke-width="5" marker-end="url(#qA2)"/>
    <text x="848" y="500" font-size="32" font-weight="800" fill="#f4f1ea" text-anchor="middle">② 에너지가 더 낮아지는 쪽으로 한 걸음 지시</text>
    <text x="848" y="312" font-size="30" font-weight="700" fill="#e2bd72" text-anchor="middle">③ 더는 낮아지지 않을 때까지 반복</text>
  </svg>`;
}

// 준비물 그림: 바둑알·쌀알 / 동전 / 벨크로 밴드 / 에너지 지형도 매트 / 평가 기준표 / 3대 과제 안내 자료
function qToolArt(kind) {
  const bg = '<rect width="400" height="300" fill="#1a1a1a"/>';
  if (kind === 'stones') {
    let s = '';
    const pts = [[90, 120, 1], [140, 100, 0], [120, 160, 1], [180, 140, 0], [70, 185, 0], [160, 200, 1], [210, 95, 1]];
    for (const [x, y, w] of pts) s += `<ellipse cx="${x}" cy="${y + 6}" rx="26" ry="10" fill="#000" opacity=".5"/><ellipse cx="${x}" cy="${y}" rx="26" ry="18" fill="${w ? '#eceae4' : '#1f2023'}" stroke="${w ? '#bbb' : '#444'}" stroke-width="1.5"/>`;
    for (let k = 0; k < 70; k++) { const x = 250 + (k * 37) % 120, y = 90 + (k * 53) % 150, a = (k * 47) % 180; s += `<ellipse cx="${x}" cy="${y}" rx="7" ry="3.5" fill="#f1e6c8" transform="rotate(${a} ${x} ${y})"/>`; }
    return `<svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block">${bg}${s}</svg>`;
  }
  if (kind === 'coin') return qCoin(false);
  if (kind === 'band') return `<svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block">${bg}
    <path d="M60 150 C60 70 340 70 340 150 C340 230 60 230 60 150Z" fill="none" stroke="#2d6cdf" stroke-width="34"/>
    <path d="M60 150 C60 70 340 70 340 150 C340 230 60 230 60 150Z" fill="none" stroke="#5aa9ff" stroke-width="6" stroke-dasharray="4 10"/>
    <rect x="300" y="118" width="70" height="64" rx="8" fill="#e2bd72"/><rect x="314" y="132" width="42" height="36" rx="4" fill="#1a1a1a"/></svg>`;
  if (kind === 'mat') {
    let c = '';
    for (let k = 1; k <= 7; k++) c += `<ellipse cx="230" cy="170" rx="${k * 26}" ry="${k * 17}" fill="none" stroke="${k < 3 ? '#e2bd72' : '#5aa9ff'}" stroke-width="2.5" opacity="${1 - k * .09}" transform="rotate(-12 230 170)"/>`;
    return `<svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block">${bg}<rect x="20" y="30" width="360" height="240" rx="10" fill="#14202e"/>${c}<circle cx="230" cy="170" r="9" fill="#e2bd72"/><circle cx="70" cy="80" r="11" fill="#ff8a6a"/><path d="M80 90 C120 120 170 140 222 165" fill="none" stroke="#ff8a6a" stroke-width="3" stroke-dasharray="7 7"/></svg>`;
  }
  if (kind === 'rubric') {
    let r = '';
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) r += `<rect x="${60 + j * 72}" y="${70 + i * 46}" width="70" height="44" fill="${i === 0 || j === 0 ? '#e9e5da' : '#fff'}" stroke="#bbb"/>`;
    return `<svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block">${bg}<rect x="40" y="40" width="330" height="240" fill="#f7f5ef" transform="rotate(-3 200 160)"/>
      <g transform="rotate(-3 200 160)">${r}<text x="168" y="100" font-size="20" font-weight="800" fill="#333" text-anchor="middle">A</text><text x="240" y="100" font-size="20" font-weight="800" fill="#333" text-anchor="middle">B</text><text x="312" y="100" font-size="20" font-weight="800" fill="#333" text-anchor="middle">C</text>
      <path d="M150 138 l10 10 l18 -20" fill="none" stroke="#2d6cdf" stroke-width="4"/><path d="M222 184 l10 10 l18 -20" fill="none" stroke="#2d6cdf" stroke-width="4"/></g></svg>`;
  }
  if (kind === 'brief') return `<svg viewBox="0 0 400 300" style="width:100%;height:100%;display:block">${bg}
    <g transform="translate(70 150) scale(.3) translate(-300 -225)">${qChallenge('n2', true)}</g>
    <g transform="translate(200 150) scale(.3) translate(-300 -225)">${qChallenge('li', true)}</g>
    <g transform="translate(330 150) scale(.3) translate(-300 -225)">${qChallenge('drug', true)}</g></svg>`;
  return '';
}

// 3대 과제 그림: 질소 → 비료 / 리튬 이온이 지나가는 고체 / 단백질 홈에 맞는 약
function qChallenge(kind, bare) {
  const wrap = g => bare ? g : `<svg viewBox="0 0 600 450" style="width:100%;height:100%;display:block"><rect width="600" height="450" fill="#121417"/>${g}</svg>`;
  if (kind === 'n2') return wrap(`
    <circle cx="150" cy="200" r="54" fill="#5aa9ff"/><circle cx="270" cy="200" r="54" fill="#5aa9ff"/>
    <g stroke="#f4f1ea" stroke-width="7"><line x1="198" y1="182" x2="222" y2="182"/><line x1="198" y1="200" x2="222" y2="200"/><line x1="198" y1="218" x2="222" y2="218"/></g>
    <text x="150" y="213" font-size="38" font-weight="800" fill="#0a0a0a" text-anchor="middle">N</text><text x="270" y="213" font-size="38" font-weight="800" fill="#0a0a0a" text-anchor="middle">N</text>
    <path d="M340 200 H400" stroke="#e2bd72" stroke-width="6"/><path d="M400 186 L424 200 L400 214Z" fill="#e2bd72"/>
    <circle cx="500" cy="200" r="46" fill="#5aa9ff"/><text x="500" y="213" font-size="34" font-weight="800" fill="#0a0a0a" text-anchor="middle">N</text>
    <g fill="#f4f1ea"><circle cx="452" cy="150" r="24"/><circle cx="548" cy="150" r="24"/><circle cx="500" cy="265" r="24"/></g>
    <g font-size="20" font-weight="800" fill="#111" text-anchor="middle"><text x="452" y="157">H</text><text x="548" y="157">H</text><text x="500" y="272">H</text></g>
    <path d="M60 380 C120 330 140 360 170 320 M170 320 C190 350 230 340 250 380" fill="none" stroke="#7fd36b" stroke-width="7" stroke-linecap="round"/>
    <path d="M160 330 C130 290 100 300 92 320 C120 330 140 330 160 330Z M180 326 C210 290 240 296 250 314 C224 328 200 330 180 326Z" fill="#7fd36b"/>`);
  if (kind === 'li') {
    let g = '';
    for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) if (j !== 2 || i % 2) g += `<circle cx="${90 + i * 84}" cy="${90 + j * 90}" r="30" fill="#3d4a5c"/>`;
    for (const x of [130, 300, 460]) g += `<circle cx="${x}" cy="270" r="20" fill="#e2bd72"/><text x="${x}" y="277" font-size="18" font-weight="800" fill="#111" text-anchor="middle">Li${qSup('+')}</text>`;
    return wrap(g + `<path d="M60 270 H560" stroke="#e2bd72" stroke-width="3" stroke-dasharray="10 10" opacity=".7"/><path d="M548 258 L572 270 L548 282Z" fill="#e2bd72"/>`);
  }
  return wrap(`
    <path d="M70 120 C70 60 200 40 260 90 C290 115 310 115 340 90 C400 40 530 60 530 120 C560 220 520 380 300 400 C80 380 40 220 70 120Z" fill="#7a4f9c"/>
    <path d="M250 90 C270 180 330 180 350 90" fill="#121417"/>
    <g transform="translate(300 60)"><circle cx="0" cy="40" r="26" fill="#e2bd72"/><circle cx="-34" cy="12" r="16" fill="#ff8a6a"/><circle cx="34" cy="12" r="16" fill="#ff8a6a"/>
    <line x1="-22" y1="22" x2="-12" y2="30" stroke="#f4f1ea" stroke-width="5"/><line x1="22" y1="22" x2="12" y2="30" stroke="#f4f1ea" stroke-width="5"/></g>
    <path d="M300 30 V-10" stroke="#e2bd72" stroke-width="0"/>`);
}

window.presentationModalData.quantum = {
    // -----------------------------------------------------------------------
    // 양자 1차시: 슈퍼컴퓨터도 멈춰버린 분자의 세계
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 슈퍼컴퓨터도 멈춰버린 분자의 세계: 원자 레고 퍼즐과 지수 폭발',
      badge: '양자 1차시 · 지수 폭발',
      design: 'stage',
      slides: [
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${qImg('oled_quantum_sim_lab.jpg')}" alt="컴퓨터 화면 속 분자 모형"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">양자 1차시 · 지수 폭발</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1 style="font-size:104px">슈퍼컴퓨터도<br>멈춰 버린<br>분자의 세계</h1>
            </div>
          `
        },
        {
          title: '체스판과 쌀알',
          content: `
            <h2>체스판과 쌀알</h2>
            <div class="ps-body ps-split" style="grid-template-columns:780px 1fr">
              <figure>${qChessboard()}</figure>
              <div class="txt">
                <div><h3>한 칸 갈 때마다 2배</h3>
                  <p>첫 칸에 쌀 1톨, 둘째 칸에 2톨, 셋째 칸에 4톨… 이렇게 2배씩 늘리면 64칸을 모두 합해 <strong>약 1,800경 톨</strong>이 됩니다. 전 세계가 수백 년 동안 거두는 쌀보다 많은 양입니다.</p></div>
                <p class="ps-q2" style="font-size:48px">“1초에 100경 번 계산하는 슈퍼컴퓨터도 왜 커피 속 <em>카페인 분자 하나</em>를 정확히 계산하지 못할까?”</p>
              </div>
            </div>
          `
        },
        {
          title: '학습 목표',
          content: `
            <h2>학습 목표</h2>
            <p class="ps-goal" style="font-size:64px">분자 속 전자가 늘어날수록 계산해야 할 경우의 수가 2의 거듭제곱으로 불어나는 <u>지수 폭발</u>을 계산해 보고, 슈퍼컴퓨터로도 <u>분자를 정확히 계산하기 어려운 까닭</u>을 설명할 수 있다.</p>
          `
        },
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4 three">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_tablet.jpg')}" alt="스마트기기"></div><h3><span class="n">1</span>스마트기기</h3><p>계산기 기능으로 2<sup>N</sup> 계산</p></figure>
                <figure><div class="ps-ph">${qToolArt('stones')}</div><h3><span class="n">2</span>바둑알 또는 쌀알 모형</h3><p>2배씩 늘어나는 양 체감</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_ws1.jpg')}" alt="지수 폭발 체험 활동지" style="object-position:top"></div><h3><span class="n">3</span>지수 폭발 체험 활동지</h3><p>분자별 경우의 수 기록</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>모형 분실 방지</h3>
                <p>바둑알과 쌀알 모형은 바닥에 떨어지지 않도록 트레이 안에서 다룹니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>큰 수 읽기</h3>
                <p>계산기에 <strong>E</strong>가 나오면 지수 표기입니다. 예를 들어 <strong>1E30은 10<sup>30</sup></strong>, 1 뒤에 0이 30개 붙은 수입니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>모둠 협동 계산</h3>
                <p>분자를 나누어 맡아 계산하고, 결과를 무엇과 비교하면 크기가 실감 나는지 의견을 나눕니다.</p></figure>
            </div>
          `
        },
        {
          title: '전자가 하나 늘 때마다 경우의 수는 2배',
          content: `
            <h2>전자가 하나 늘 때마다 경우의 수는 2배</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qTree()}</div>
              <div class="ps-two">
                <p><strong>서로 영향을 주고받는 전자.</strong> 음(-)전하를 띤 전자들은 서로 밀어내고 양(+)전하를 띤 원자핵에는 끌려가므로, 전자 하나씩 따로 계산할 수 없습니다.</p>
                <p><strong>아주 단순하게 생각해도 2<sup>N</sup>.</strong> 전자 하나가 두 가지 상태 중 하나를 가진다고만 해도, 전자가 N개이면 2<sup>N</sup>가지 경우를 함께 따져야 합니다.</p>
              </div>
            </div>
          `
        },
        {
          title: '분자별 전자 수와 경우의 수',
          content: `
            <h2>분자별 전자 수와 경우의 수</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:17%">물질</th><th style="width:17%">화학식</th><th style="width:12%">전자 수</th><th style="width:22%">경우의 수 (2<sup>N</sup>)</th><th>무엇보다 많을까?</th></tr></thead>
                <tbody>
                  <tr><td>수소 분자</td><td>H<sub>2</sub></td><td>2개</td><td>2<sup>2</sup> = 4가지</td><td style="color:#cfcac0">순식간에 계산</td></tr>
                  <tr><td>물 분자</td><td>H<sub>2</sub>O</td><td>10개</td><td>2<sup>10</sup> = 1,024가지</td><td style="color:#cfcac0">순식간에 계산</td></tr>
                  <tr><td>카페인</td><td>C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub></td><td>102개</td><td>약 5×10<sup>30</sup>가지</td>
                    <td><div class="ps-reveal" style="--c:#ffb347" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>지구의 모든 모래알보다 많음</span></div></td></tr>
                  <tr><td>페니실린</td><td>C<sub>16</sub>H<sub>18</sub>N<sub>2</sub>O<sub>4</sub>S</td><td>176개</td><td>약 10<sup>53</sup>가지</td>
                    <td><div class="ps-reveal" style="--c:#ff6a52" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>지구 전체 원자 수보다 많음</span></div></td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: '지수 폭발',
          content: `
            <h2>지수 폭발</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qLadder()}</div>
              <p class="ps-def"><b>지수 폭발이란?</b>하나가 늘 때마다 2배씩 곱해져 수가 걷잡을 수 없이 커지는 현상. 지구의 모든 원자를 컴퓨터 메모리로 써도 페니실린의 경우의 수를 다 적어 둘 수 없습니다.</p>
            </div>
          `
        },
        {
          title: '화학자의 고민과 파인만의 제안',
          content: `
            <h2>화학자의 고민과 파인만의 제안</h2>
            <div class="ps-body ps-split" style="grid-template-columns:1.3fr 1fr">
              <figure style="align-self:center;background:none"><img src="${qImg('quantum_superconducting_vs_iontrap.jpg')}" alt="오늘날 연구되는 두 가지 양자 컴퓨터" style="height:auto"></figure>
              <div class="txt">
                <div><h3>직접 만들어 보는 수밖에</h3>
                  <p>분자를 정확히 계산할 수 없어, 화학자들은 수많은 물질을 직접 만들고 시험하며 실패를 거듭해 왔습니다. 신약 하나를 개발하는 데 보통 <strong>10년 이상, 수조 원</strong>이 듭니다.</p></div>
                <div><h3>리처드 파인만, 1981년</h3>
                  <p>“자연은 양자역학을 따르므로, 자연을 흉내 내려면 <strong>컴퓨터도 양자역학의 원리로 만들어야 한다</strong>.” 이 생각이 양자 컴퓨터 연구의 출발점이 되었습니다. 왼쪽은 오늘날 연구되는 두 가지 양자 컴퓨터입니다.</p></div>
              </div>
            </div>
          `
        },
        {
          title: '1차시 핵심 배움 정리',
          content: `
            <h2>1차시 핵심 배움 정리</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>서로 얽힌 전자</h3>
                <p>분자 속 전자들은 서로 밀어내고 원자핵에 끌려가며 영향을 주고받으므로 하나씩 따로 계산할 수 없습니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>지수 폭발 2<sup>N</sup></h3>
                <p>전자가 하나 늘 때마다 경우의 수가 2배가 되어, 카페인은 모래알 수를, 페니실린은 지구 원자 수를 넘어섭니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>양자 컴퓨터가 필요한 까닭</h3>
                <p>양자역학을 따르는 분자를 계산하려면 양자역학의 원리로 작동하는 새로운 컴퓨터가 필요합니다.</p></figure>
            </div>
          `
        },
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${qImg('quantum_laser_manipulation.jpg')}" alt="레이저로 제어하는 양자 칩"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“컴퓨터의 비트가 0과 1을 동시에 품을 수 있다면 무엇이 달라질까?”</p>
              <p>도는 동전으로 큐비트의 ‘중첩’을 알아봅니다.</p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // 양자 2차시: 0과 1이 동시에 춤추는 마법
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트',
      badge: '양자 2차시 · 비트와 큐비트',
      design: 'stage',
      slides: [
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${qImg('quantum_laser_manipulation.jpg')}" alt="레이저로 제어하는 양자 칩"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">양자 2차시 · 비트와 큐비트</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1 style="font-size:104px">0과 1이<br>동시에 춤추는<br>동전 팽이</h1>
            </div>
          `
        },
        {
          title: '멈춘 동전과 도는 동전',
          content: `
            <h2>멈춘 동전과 도는 동전</h2>
            <div class="ps-body">
              <div class="ps-trio duo">
                <figure>${qCoin(false)}<figcaption>책상에 누운 동전 · 앞면(0) 아니면 뒷면(1) 중 딱 하나</figcaption></figure>
                <figure>${qCoin(true)}<figcaption>팽이처럼 도는 동전 · 앞뒤가 섞여 아직 정해지지 않음</figcaption></figure>
              </div>
              <p class="ps-question">“도는 동전은 지금 앞면일까, 뒷면일까? 손으로 <span class="uv">덮는 순간</span>에는 무슨 일이 일어날까?”</p>
            </div>
          `
        },
        {
          title: '학습 목표',
          content: `
            <h2>학습 목표</h2>
            <p class="ps-goal" style="font-size:64px">누운 동전(비트)과 도는 동전(큐비트)을 비교하여 <u>비트와 큐비트의 차이</u>를 설명하고, <u>양자 컴퓨터가 문제를 푸는 방식</u>을 이해할 수 있다.</p>
          `
        },
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph">${qToolArt('coin')}</div><h3><span class="n">1</span>동전</h3><p>학생 1인당 1개</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_tablet.jpg')}" alt="스마트기기"></div><h3><span class="n">2</span>스마트기기</h3><p>가상실험실 접속</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_lab_qubit.jpg')}" alt="큐비트 시뮬레이터 화면" style="object-fit:contain;background:#0b1220"></div><h3><span class="n">3</span>가상실험실</h3><p>큐비트 시뮬레이터</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_ws2.jpg')}" alt="2차시 활동지" style="object-position:top"></div><h3><span class="n">4</span>활동지</h3><p>비트와 큐비트 비교</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>동전 튕김 주의</h3>
                <p>동전이 바깥으로 튕겨 나가지 않도록 트레이 안쪽에서 부드럽게 돌립니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>손바닥으로 덮기</h3>
                <p>도는 동전을 멈출 때는 손톱에 부딪히지 않도록 손바닥 전체로 가볍게 덮습니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>비유임을 기억하기</h3>
                <p>도는 동전은 큐비트를 이해하기 위한 <strong>비유</strong>입니다. 실제 동전이 양자 상태인 것은 아닙니다.</p></figure>
            </div>
          `
        },
        {
          title: '돌리고, 덮고, 100번 재 보기',
          content: `
            <h2>돌리고, 덮고, 100번 재 보기</h2>
            <div class="ps-body">
              <div class="ps-wide" style="flex:none;height:560px;background:#0b1220"><img src="${getToolAsset('q_lab_qubit.jpg')}" alt="큐비트를 100번 측정한 가상실험실 결과"></div>
              <div class="ps-cols3" style="margin-top:8px">
                <figure><h3>돌고 있을 때 · 중첩</h3>
                  <p>큐비트는 측정하기 전에는 0과 1이 일정한 비율로 섞인 <strong>중첩</strong> 상태입니다.</p></figure>
                <figure><h3>덮는 순간 · 측정</h3>
                  <p>측정하면 0 또는 1 <strong>하나로 정해집니다</strong>. 어느 쪽이 나올지는 섞인 비율(확률)에 따릅니다.</p></figure>
                <figure><h3>100번 재 보면</h3>
                  <p>가상실험실에서 화살표가 적도를 가리키면 0과 1이 거의 반반씩 나옵니다.</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '비트와 큐비트',
          content: `
            <h2>비트와 큐비트</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qQubitPanels()}</div>
              <p class="ps-def"><b>중첩이란?</b>측정하기 전까지 0과 1이 일정한 비율로 함께 섞여 있는 상태. 측정하면 그 비율에 따라 0 또는 1 하나로 정해집니다.</p>
            </div>
          `
        },
        {
          title: '비트 vs 큐비트 비교표',
          content: `
            <h2>비트 vs 큐비트 비교표</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:24%">비교 항목</th><th style="width:34%">비트</th><th>큐비트</th></tr></thead>
                <tbody>
                  <tr><td>동전 비유</td><td>책상에 누운 동전</td><td>팽이처럼 도는 동전</td></tr>
                  <tr><td>정보의 표현</td><td>0 또는 1 중 딱 하나</td>
                    <td><div class="ps-reveal" style="--c:#b794ff" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>0과 1이 섞인 중첩</span></div></td></tr>
                  <tr><td>측정하면</td><td>원래 값 그대로</td>
                    <td><div class="ps-reveal" style="--c:#5aa9ff" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>0 또는 1 하나로 정해짐</span></div></td></tr>
                  <tr><td>10개로 1,024갈래 미로</td><td>하나씩 확인</td>
                    <td><div class="ps-reveal" style="--c:#e2bd72" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>정답 확률을 키워 약 25번 만에</span></div></td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: '미로 찾기로 보는 차이',
          content: `
            <h2>미로 찾기로 보는 차이</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qMaze()}</div>
              <p class="ps-def"><b>오해 주의</b>측정하면 답은 하나만 나오므로 “모든 길을 동시에 가 보고 답을 한 번에 꺼낸다”는 것은 오해입니다. 양자 컴퓨터는 모든 문제가 아니라 분자 계산처럼 잘 맞는 문제에서 특히 강합니다.</p>
            </div>
          `
        },
        {
          title: '2차시 핵심 배움 정리',
          content: `
            <h2>2차시 핵심 배움 정리</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>중첩</h3>
                <p>큐비트는 측정하기 전까지 0과 1이 일정한 비율로 섞여 있습니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>측정</h3>
                <p>측정하면 섞인 비율에 따라 0 또는 1 하나로 정해집니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>양자 컴퓨터가 잘하는 일</h3>
                <p>정답이 나올 확률을 키우는 방식으로, 분자 계산처럼 잘 맞는 문제를 빠르게 풉니다.</p></figure>
            </div>
          `
        },
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${qImg('quantum_trapped_ion_coulomb_crystal_hd.jpg')}" alt="분자를 계산하는 양자 컴퓨터 장치"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“안개 낀 산에서 가장 깊은 골짜기를 어떻게 찾을까?”</p>
              <p>양자 컴퓨터와 일반 컴퓨터가 발을 묶고 함께 걷는 2인 3각 계산법을 알아봅니다.</p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // 양자 3차시: 환상의 2인 3각 달리기
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 환상의 2인 3각 달리기: 두 컴퓨터가 함께 찾는 화학 결합의 바닥 상태',
      badge: '양자 3차시 · 바닥 상태와 2인 3각 계산',
      design: 'stage',
      slides: [
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${qImg('quantum_trapped_ion_coulomb_crystal_hd.jpg')}" alt="분자를 계산하는 양자 컴퓨터 장치"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">양자 3차시 · 바닥 상태와 2인 3각 계산</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1 style="font-size:104px">환상의<br>2인 3각 달리기</h1>
            </div>
          `
        },
        {
          title: '안개 속 골짜기 찾기',
          content: `
            <h2>안개 속 골짜기 찾기</h2>
            <div class="ps-body ps-split">
              <figure>${qValley()}</figure>
              <div class="txt">
                <div><h3>언덕 위의 공</h3>
                  <p>언덕 위에 놓인 공은 스스로 굴러 <strong>가장 낮은 곳</strong>으로 갑니다. 분자도 에너지가 가장 낮은 상태에서 가장 안정합니다.</p></div>
                <p class="ps-q2" style="font-size:48px">“안개로 앞이 안 보이는 산에서 <em>가장 낮은 골짜기</em>를 어떻게 찾을까?”</p>
              </div>
            </div>
          `
        },
        {
          title: '학습 목표',
          content: `
            <h2>학습 목표</h2>
            <p class="ps-goal" style="font-size:64px">분자는 에너지가 가장 낮은 <u>바닥 상태</u>에서 가장 안정함을 이해하고, 양자 컴퓨터와 일반 컴퓨터가 함께 바닥 상태를 찾아가는 <u>2인 3각 계산</u>을 역할극으로 설명할 수 있다.</p>
          `
        },
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph">${qToolArt('band')}</div><h3><span class="n">1</span>2인 3각 벨크로 밴드</h3><p>짝과 발을 묶는 끈</p></figure>
                <figure><div class="ps-ph">${qToolArt('mat')}</div><h3><span class="n">2</span>에너지 지형도 매트</h3><p>골짜기 바닥 찾기 판</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_lab_vqe.jpg')}" alt="2인 3각 계산 시뮬레이터 화면" style="object-fit:contain;background:#0b1220"></div><h3><span class="n">3</span>태블릿 가상실험실</h3><p>바닥 상태 찾기 시뮬레이터</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_ws3.jpg')}" alt="3차시 활동지" style="object-position:top"></div><h3><span class="n">4</span>활동지</h3><p>2인 3각 계산 순서도 기록</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>넘어짐 방지</h3>
                <p>통로의 가방과 의자를 정리하고, 절대 뛰지 않으며 천천히 호흡을 맞춰 걷습니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>구령 맞추기</h3>
                <p>양자 컴퓨터 역할(에너지 재기)과 일반 컴퓨터 역할(다음 걸음 정하기)이 “하나, 둘” 신호를 주고받습니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>값 기록하기</h3>
                <p>반복할 때마다 에너지 값이 어떻게 낮아지는지 활동지에 차례로 적습니다.</p></figure>
            </div>
          `
        },
        {
          title: '바닥 상태',
          content: `
            <h2>바닥 상태</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qH2Curve()}</div>
              <p class="ps-def"><b>바닥 상태란?</b>원자핵끼리 밀어내는 힘과, 전자와 원자핵이 끌어당기는 힘이 균형을 이루어 에너지가 가장 낮은 상태. 수소 분자는 두 원자가 약 0.074 nm 떨어졌을 때 가장 안정합니다.</p>
            </div>
          `
        },
        {
          title: '2인 3각 역할극',
          content: `
            <h2>2인 3각 역할극</h2>
            <div class="ps-body">
              <div style="margin:auto 0">${qLoop()}</div>
              <p class="ps-def"><b>2인 3각 계산이란?</b>계산하기 어려운 분자의 에너지는 양자 컴퓨터가 재고, 다음 걸음은 일반 컴퓨터가 정하며 번갈아 반복해 바닥 상태를 찾는 협동 계산법입니다.</p>
            </div>
          `
        },
        {
          title: '2인 3각 계산 기록표',
          content: `
            <h2>2인 3각 계산 기록표</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:22%">반복</th><th style="width:24%">두 원자 사이 거리</th><th style="width:20%">에너지</th><th>상태</th></tr></thead>
                <tbody>
                  <tr><td>처음</td><td>0.18 nm</td><td>-0.63</td><td style="color:#cfcac0">높은 산 중턱</td></tr>
                  <tr><td>10번째</td><td>약 0.10 nm</td><td>-1.03</td><td style="color:#cfcac0">골짜기로 내려가는 중</td></tr>
                  <tr><td>마지막</td><td>0.074 nm</td>
                    <td><div class="ps-reveal" style="--c:#e2bd72" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>-1.137</span></div></td>
                    <td><div class="ps-reveal" style="--c:#e2bd72" onclick="this.classList.toggle('revealed')"><button type="button">결과 확인</button><span class="res"><i></i>바닥 상태 도착</span></div></td></tr>
                </tbody>
              </table>
              <p class="ps-foot">가상실험실 수소 분자 기준 · 에너지 단위는 생략합니다.</p>
            </div>
          `
        },
        {
          title: '2인 3각 계산의 안전장치',
          content: `
            <h2>2인 3각 계산의 안전장치</h2>
            <div class="ps-body">
              <div class="ps-wide" style="flex:none;height:560px;background:#0b1220"><img src="${getToolAsset('q_lab_vqe.jpg')}" alt="가상실험실에서 바닥 상태에 도착한 화면"></div>
              <div class="ps-cols3" style="margin-top:8px">
                <figure><h3>낮게는 나오지 않는다</h3>
                  <p>이 방법의 계산값은 진짜 바닥 상태보다 낮게 나올 수 없어, <strong>더 낮은 값이 나올수록 정답에 가깝습니다</strong>.</p></figure>
                <figure><h3>작은 웅덩이 조심</h3>
                  <p>중간의 작은 웅덩이에 갇힐 수 있으므로 여러 출발점에서 시도해 봅니다.</p></figure>
                <figure><h3>왜 2인 3각일까?</h3>
                  <p>지금의 양자 컴퓨터는 아직 작고 오류가 많아, 일반 컴퓨터와 일을 나누어 함께 계산합니다.</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '3차시 핵심 배움 정리',
          content: `
            <h2>3차시 핵심 배움 정리</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>바닥 상태</h3>
                <p>분자는 에너지가 가장 낮은 바닥 상태에서 가장 안정하게 결합합니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>2인 3각 계산</h3>
                <p>양자 컴퓨터가 에너지를 재고 일반 컴퓨터가 다음 걸음을 정하며 반복합니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>안전장치</h3>
                <p>계산값은 진짜 바닥보다 낮게 나오지 않으므로, 낮아질수록 정답에 가까워집니다.</p></figure>
            </div>
          `
        },
        {
          title: '다음 시간에는?',
          content: `
            <div class="ps-next-bg"><img src="${qImg('quantum_carbon_capture_mof.jpg')}" alt="이산화 탄소를 붙잡는 분자 구조"></div>
            <div class="ps-next-txt">
              <h2>다음 시간에는?</h2>
              <p class="ps-q3">“비커와 시험관 없이, 컴퓨터로 지구의 문제를 풀 분자를 설계할 수 있을까?”</p>
              <p>비료, 배터리, 신약 중 하나를 골라 미래 분자 설계 스타트업을 기획합니다.</p>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // 양자 4차시: 분자 설계 스타트업 프로젝트
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] 양자 화학 시뮬레이션 기반 분자 설계 프로젝트',
      badge: '양자 4차시 · 분자 설계 프로젝트',
      design: 'stage',
      slides: [
        {
          title: '이번 시간에는?',
          layout: 'cover',
          content: `
            <div class="ps-cover-bg"><img src="${qImg('quantum_carbon_capture_mof.jpg')}" alt="이산화 탄소를 붙잡는 분자 구조"></div>
            <div class="ps-cover-txt">
              <div class="ps-kicker">양자 4차시 · 분자 설계 프로젝트</div>
              <div class="ps-ask">이번 시간에는?</div>
              <h1 style="font-size:104px">지구를 구할<br>분자를<br>설계하라</h1>
            </div>
          `
        },
        {
          title: '컴퓨터 속 가상 실험실',
          content: `
            <h2>컴퓨터 속 가상 실험실</h2>
            <div class="ps-body ps-split">
              <figure><img src="${qImg('oled_quantum_sim_lab.jpg')}" alt="컴퓨터 화면 속 분자 모형"></figure>
              <div class="txt">
                <div><h3>지금의 화학 실험</h3>
                  <p>수많은 물질을 직접 만들고 시험해야 해서 시간과 비용이 많이 들고, 위험한 약품도 다룹니다.</p></div>
                <div><h3>컴퓨터 속 가상 실험</h3>
                  <p>분자를 컴퓨터로 정확히 계산할 수 있다면, 좋은 분자 후보를 <strong>미리 골라낸 뒤</strong> 실제로 만들어 볼 수 있습니다. 양자 컴퓨터는 아직 발전 중인 기술입니다.</p></div>
                <p class="ps-q2" style="font-size:44px">“위험한 약품 없이 컴퓨터 속에서 지구 온난화를 멈출 분자를 찾는다면?”</p>
              </div>
            </div>
          `
        },
        {
          title: '학습 목표',
          content: `
            <h2>학습 목표</h2>
            <p class="ps-goal" style="font-size:64px">양자 컴퓨터를 이용한 분자 계산이 <u>3대 지구 과제</u> 해결에 도움을 줄 수 있음을 알고, 모둠별로 <u>미래 분자 설계 스타트업 기획서</u>를 작성·발표할 수 있다.</p>
          `
        },
        {
          title: '탐구 준비물',
          content: `
            <h2>탐구 준비물</h2>
            <div class="ps-body">
              <div class="ps-tools4">
                <figure><div class="ps-ph"><img src="${getToolAsset('tool_tablet.jpg')}" alt="스마트기기"></div><h3><span class="n">1</span>스마트기기</h3><p>자료 조사</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_ws4.jpg')}" alt="스타트업 기획서 양식" style="object-position:top"></div><h3><span class="n">2</span>스타트업 기획서 양식</h3><p>모둠 기획서 작성</p></figure>
                <figure><div class="ps-ph">${qToolArt('rubric')}</div><h3><span class="n">3</span>발표 평가 기준표</h3><p>모의 투자 심사</p></figure>
                <figure><div class="ps-ph">${qToolArt('brief')}</div><h3><span class="n">4</span>3대 과제 안내 자료</h3><p>비료 · 배터리 · 신약</p></figure>
              </div>
            </div>
          `
        },
        {
          title: '탐구활동 시 주의 사항',
          content: `
            <h2>탐구활동 시 주의 사항</h2>
            <div class="ps-body ps-cols3" style="align-content:center">
              <figure><div class="ps-bignum">1</div><h3>역할 나누기와 경청</h3>
                <p>대표, 양자 화학 연구원, 분자 설계 담당, 환경 가치 평가 담당을 나누어 맡고 서로의 의견을 경청합니다.</p></figure>
              <figure><div class="ps-bignum">2</div><h3>과학 원리와 연결</h3>
                <p>막연한 상상이 아니라 1~3차시에 배운 지수 폭발, 중첩, 바닥 상태와 연결하여 기획합니다.</p></figure>
              <figure><div class="ps-bignum">3</div><h3>환경·사회 가치</h3>
                <p>설계한 분자가 온실가스, 식량, 질병 문제에 어떤 도움을 주는지 분명히 씁니다.</p></figure>
            </div>
          `
        },
        {
          title: '3대 지구 과제',
          content: `
            <h2>3대 지구 과제</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph">${qChallenge('n2')}</div><h3 style="color:#7fd36b">친환경 비료</h3>
                <p>지금은 400~500℃, 200기압 안팎에서 질소를 비료 원료로 바꾸며 세계 에너지의 약 1~2%를 씁니다. 콩과 식물 뿌리의 세균처럼 <strong>상온에서 질소의 세 겹 결합을 끊는 촉매</strong>를 찾습니다.</p></figure>
              <figure><div class="ps-ph">${qChallenge('li')}</div><h3 style="color:#e2bd72">안전한 배터리</h3>
                <p>불이 붙기 쉬운 액체 대신, <strong>리튬 이온이 잘 지나가는 고체</strong>를 찾아 화재 위험을 크게 줄입니다.</p></figure>
              <figure><div class="ps-ph">${qChallenge('drug')}</div><h3 style="color:#c79bff">맞춤형 신약</h3>
                <p>질병을 일으키는 단백질의 <strong>홈에 꼭 맞는 약 분자</strong>를 컴퓨터로 미리 찾아 개발 기간과 비용을 줄입니다.</p></figure>
            </div>
          `
        },
        {
          title: '스타트업 프로젝트 3단계',
          content: `
            <h2>스타트업 프로젝트 3단계</h2>
            <div class="ps-body">
              <div class="ps-rail"><span>1단계</span><span>2단계</span><span>3단계</span></div>
              <div class="ps-cols3 ps-steps" style="align-content:start">
                <figure><div class="ps-ph">${qToolArt('brief')}</div><h3>과제 고르기</h3>
                  <p>비료, 배터리, 신약 중 하나를 골라 지금 기술의 어려운 점을 살펴봅니다.</p></figure>
                <figure><div class="ps-ph"><img src="${getToolAsset('q_ws4.jpg')}" alt="기획서 양식" style="object-position:top"></div><h3>분자 아이디어 설계</h3>
                  <p>회사 이름을 짓고, 분자 아이디어의 과학 원리와 사회·환경적 기대 효과를 기획서에 씁니다.</p></figure>
                <figure><div class="ps-ph">${qToolArt('rubric')}</div><h3>2분 발표와 모의 투자</h3>
                  <p>모둠별로 2분 동안 발표하고, 평가 기준표로 다른 모둠에 모의 투자 점수를 줍니다.</p></figure>
              </div>
              <p class="ps-foot" style="margin-top:auto">4인 1조 · 대표, 양자 화학 연구원, 분자 설계 담당, 환경 가치 평가 담당</p>
            </div>
          `
        },
        {
          title: '기획서 예시',
          content: `
            <h2>기획서 예시</h2>
            <div class="ps-body">
              <table class="ps-table">
                <thead><tr><th style="width:24%">기획서 항목</th><th>예시 · 가상 회사 ‘퀀텀 카탈리스트’</th></tr></thead>
                <tbody>
                  <tr><td>해결할 과제</td>
                    <td><div class="ps-reveal" style="--c:#7fd36b" onclick="this.classList.toggle('revealed')"><button type="button">예시 보기</button><span class="res" style="color:#f4f1ea;font-weight:600"><i></i>친환경 비료 · 고온·고압으로 에너지를 많이 쓰는 지금의 비료 생산 방식 바꾸기</span></div></td></tr>
                  <tr><td>분자 아이디어</td>
                    <td><div class="ps-reveal" style="--c:#5aa9ff" onclick="this.classList.toggle('revealed')"><button type="button">예시 보기</button><span class="res" style="color:#f4f1ea;font-weight:600"><i></i>콩과 식물 뿌리 세균의 비밀을 양자 컴퓨터로 계산해 상온에서 질소를 바꾸는 촉매 설계</span></div></td></tr>
                  <tr><td>기대 효과</td>
                    <td><div class="ps-reveal" style="--c:#e2bd72" onclick="this.classList.toggle('revealed')"><button type="button">예시 보기</button><span class="res" style="color:#f4f1ea;font-weight:600"><i></i>비료 공장의 에너지와 온실가스를 줄이고, 값싼 비료로 식량 문제 해결에 기여</span></div></td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: '모의 투자 심사 기준',
          content: `
            <h2>모의 투자 심사 기준</h2>
            <div class="ps-body">
              <table class="ps-table" style="font-size:32px">
                <thead><tr><th style="width:20%">평가 영역</th><th style="width:27%">A · 탁월</th><th style="width:27%">B · 보통</th><th>C · 노력 필요</th></tr></thead>
                <tbody>
                  <tr><td>과학적 타당성</td><td class="note">분자 결합과 양자 컴퓨터 계산 원리를 논리적으로 연결함</td><td class="note">과제는 이해했으나 분자 설명이 다소 막연함</td><td class="note">과학 원리 없이 아이디어만 나열함</td></tr>
                  <tr><td>환경·사회 가치</td><td class="note">탄소 중립, 환경, 사람들의 삶과의 연결을 설득력 있게 제시함</td><td class="note">사회적 효과를 단편적으로 언급함</td><td class="note">기대 효과 분석이 부족함</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          title: '미래 융합 진로',
          content: `
            <h2>미래 융합 진로</h2>
            <div class="ps-body ps-cols3">
              <figure><div class="ps-ph"><img src="${qImg('quantum_laser_manipulation.jpg')}" alt="양자 칩"></div><h3>양자 소프트웨어 개발자</h3>
                <p>양자 컴퓨터가 풀 문제를 계산 순서로 바꾸어 프로그램을 만듭니다.</p></figure>
              <figure><div class="ps-ph"><img src="${qImg('oled_quantum_sim_lab.jpg')}" alt="분자 계산 화면"></div><h3>계산 화학자</h3>
                <p>컴퓨터로 분자를 계산해 새 물질과 신약 후보를 찾습니다.</p></figure>
              <figure><div class="ps-ph"><img src="${qImg('quantum_carbon_capture_mof.jpg')}" alt="이산화 탄소를 붙잡는 분자 구조"></div><h3>녹색 기술 창업가</h3>
                <p>환경을 살리는 기술로 회사를 세워 세상의 문제를 해결합니다.</p></figure>
            </div>
          `
        },
        {
          title: '완주를 축하합니다!',
          layout: 'light',
          content: `
            <figure><img src="${getToolAsset('kaist_mascot_celebrate.jpg')}" alt="신나게 축하하는 KAIST 넙죽이와 거위"></figure>
            <div class="ps-light-txt">
              <h2>완주를 축하합니다!</h2>
              <p class="ps-q3">지수 폭발에서 큐비트, 2인 3각 계산, 분자 설계 프로젝트까지 모두 마쳤습니다!</p>
            </div>
          `
        }
      ]
    }
  };
