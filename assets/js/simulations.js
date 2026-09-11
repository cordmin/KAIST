/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * Interactive HTML5 Canvas Simulation Engines (simulations.js)
 * 
 * 1. OLED Lab 1: 전자 계단식 전이 & 스토크스 이동 (자외선 흡수 -> 열 방출 -> 형광 방출)
 * 2. OLED Lab 2: OLED 스핀 통계 (단일항 25% vs 삼중항 75%) & KAIST 핫 엑시톤 100% 구출
 * 3. Quantum Lab 1: 회전 동전 모형 기반 블로흐 구(Bloch Sphere) 큐비트 중첩 및 100회 측정
 * 4. Quantum Lab 2: H2 분자 결합 에너지 포텐셜 곡선 & 하이브리드 VQE 바닥 상태 최적화
 */

// =========================================================================
// OLED Lab 1: 전자 에너지 준위 전이 & 스토크스 이동
// =========================================================================
let oc1, octx1;
let oElectronY = 280, oTargetY = 280;
let oElectronState = 'ground';
let oVibrationTimer = 0;
let oPhotonX = -50, oPhotonActive = false;
let oEmittedX = -50, oEmittedActive = false;

function initOledLab1() {
  oc1 = document.getElementById('canvasAioOled1');
  if (!oc1) return;
  octx1 = oc1.getContext('2d');
  drawOledLab1();
}

function drawOledLab1() {
  if (!octx1 || !oc1) return;
  octx1.clearRect(0, 0, oc1.width, oc1.height);

  // Energy Levels
  octx1.strokeStyle = '#e5e7eb'; octx1.lineWidth = 2;
  octx1.beginPath(); octx1.moveTo(100, 90); octx1.lineTo(750, 90); octx1.stroke();
  octx1.fillStyle = '#dc2626'; octx1.font = '600 13px Inter, sans-serif';
  octx1.fillText('3층 들뜬 상태 (Excited State, S1) - 불안정', 110, 80);

  octx1.setLineDash([4, 4]);
  octx1.strokeStyle = '#9ca3af';
  octx1.beginPath(); octx1.moveTo(100, 150); octx1.lineTo(750, 150); octx1.stroke();
  octx1.setLineDash([]);
  octx1.fillStyle = '#d97706';
  octx1.fillText('2층 진동 이완 준위 (열 방출 후)', 110, 140);

  octx1.strokeStyle = '#e5e7eb';
  octx1.beginPath(); octx1.moveTo(100, 290); octx1.lineTo(750, 290); octx1.stroke();
  octx1.fillStyle = '#2563eb';
  octx1.fillText('1층 바닥 상태 (Ground State, S0) - 안정', 110, 315);

  if (oPhotonActive) {
    octx1.fillStyle = '#7c3aed';
    octx1.beginPath(); octx1.arc(oPhotonX, 280, 11, 0, Math.PI * 2); octx1.fill();
    octx1.fillStyle = '#4b5563'; octx1.font = '600 11px Inter, sans-serif';
    octx1.fillText('자외선(UV)', oPhotonX - 22, 260);
    oPhotonX += 12;
    if (oPhotonX >= 450) {
      oPhotonActive = false;
      oElectronState = 'jumping';
      oTargetY = 90;
      const st = document.getElementById('oled-lab1-status');
      if (st) st.innerText = '1단계: 자외선 광자 흡수 후 3층으로 전이';
    }
  }

  if (oEmittedActive) {
    octx1.fillStyle = '#0284c7';
    octx1.beginPath(); octx1.arc(oEmittedX, 220, 12, 0, Math.PI * 2); octx1.fill();
    octx1.fillStyle = '#0369a1'; octx1.font = '600 11px Inter, sans-serif';
    octx1.fillText('파란 형광빛 방출', oEmittedX - 25, 200);
    oEmittedX += 10;
    if (oEmittedX > 1000) oEmittedActive = false;
  }

  if (oElectronState === 'jumping') {
    oElectronY += (oTargetY - oElectronY) * 0.15;
    if (Math.abs(oElectronY - oTargetY) < 2) {
      oElectronY = 90;
      oElectronState = 'vibrating';
      oVibrationTimer = 40;
      const st = document.getElementById('oled-lab1-status');
      if (st) st.innerText = '2단계: 진동 완화 및 열(Heat) 방출';
    }
  } else if (oElectronState === 'vibrating') {
    oVibrationTimer--;
    oElectronY = 90 + (Math.sin(oVibrationTimer * 0.8) * 5);
    octx1.fillStyle = '#ea580c';
    octx1.fillText('열에너지 방출', 480, 85);
    if (oVibrationTimer <= 0) {
      oElectronY = 150;
      oElectronState = 'falling';
      oTargetY = 280;
      oEmittedActive = true;
      oEmittedX = 450;
      const st = document.getElementById('oled-lab1-status');
      if (st) st.innerText = '3단계: 남은 에너지를 파란색 형광빛으로 방출하며 착지';
    }
  } else if (oElectronState === 'falling') {
    oElectronY += (oTargetY - oElectronY) * 0.12;
    if (Math.abs(oElectronY - oTargetY) < 2) {
      oElectronY = 280;
      oElectronState = 'ground';
      const st = document.getElementById('oled-lab1-status');
      if (st) st.innerText = '완료: E(자외선) = E(형광빛) + E(열) 에너지 보존 확인';
    }
  }

  // Draw Electron
  octx1.fillStyle = '#0075de';
  octx1.beginPath(); octx1.arc(450, oElectronY, 14, 0, Math.PI * 2); octx1.fill();
  octx1.fillStyle = '#ffffff'; octx1.font = '600 11px Inter, sans-serif';
  octx1.fillText('e⁻', 444, oElectronY + 4);

  // Energy balance box
  octx1.fillStyle = '#f8fafc'; octx1.fillRect(780, 70, 190, 240);
  octx1.strokeStyle = '#e2e8f0'; octx1.strokeRect(780, 70, 190, 240);
  octx1.fillStyle = '#1e293b'; octx1.font = '600 13px Inter, sans-serif';
  octx1.fillText('에너지 수지 분석', 800, 100);

  octx1.fillStyle = '#8b5cf6'; octx1.fillRect(800, 120, 25, 110);
  octx1.fillStyle = '#475569'; octx1.font = '11px Inter, sans-serif'; octx1.fillText('자외선 100%', 790, 245);

  octx1.fillStyle = '#f97316'; octx1.fillRect(855, 190, 25, 40);
  octx1.fillStyle = '#475569'; octx1.fillText('열 25%', 855, 245);

  octx1.fillStyle = '#0284c7'; octx1.fillRect(910, 140, 25, 90);
  octx1.fillStyle = '#475569'; octx1.fillText('형광 75%', 910, 245);

  requestAnimationFrame(drawOledLab1);
}

function fireOledPhoton() {
  if (oPhotonActive || oElectronState !== 'ground') return;
  oPhotonX = 100;
  oPhotonActive = true;
}

function resetOledLab1() {
  oElectronY = 280; oTargetY = 280;
  oElectronState = 'ground';
  oPhotonActive = false; oEmittedActive = false;
  const st = document.getElementById('oled-lab1-status');
  if (st) st.innerText = '대기 중: 전자가 1층 바닥 상태에 머물러 있습니다.';
}

// =========================================================================
// OLED Lab 2: OLED 스핀 통계 & KAIST 핫 엑시톤 구출
// =========================================================================
let oc2, octx2;
let oExcitons = [];
let oIsKaistRescue = false;

function initOledLab2() {
  oc2 = document.getElementById('canvasAioOled2');
  if (!oc2) return;
  octx2 = oc2.getContext('2d');
  drawOledLab2();
}

function injectOledElectricity() {
  if (!oc2) return;
  oExcitons = [];
  for (let i = 0; i < 100; i++) {
    oExcitons.push({
      x: Math.random() * (oc2.width - 50) + 25,
      y: Math.random() * (oc2.height - 60) + 30,
      type: Math.random() < 0.25 ? 'singlet' : 'triplet',
      rescued: false,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5
    });
  }
  updateOledEff();
}

function toggleAioKaistRescue() {
  oIsKaistRescue = !oIsKaistRescue;
  const btn = document.getElementById('btn-aio-kaist-rescue');
  if (btn) {
    if (oIsKaistRescue) {
      btn.innerText = 'KAIST 핫 엑시톤 구출: ON (가동 중)';
      btn.style.background = '#0075de'; btn.style.color = '#ffffff';
      oExcitons.forEach(e => { if (e.type === 'triplet') e.rescued = true; });
    } else {
      btn.innerText = 'KAIST 핫 엑시톤 구출 스위치: OFF';
      btn.style.background = '#ffffff'; btn.style.color = 'var(--color-charcoal)';
      oExcitons.forEach(e => { if (e.type === 'triplet') e.rescued = false; });
    }
  }
  updateOledEff();
}

function updateOledEff() {
  if (oExcitons.length === 0) return;
  const glowing = oExcitons.filter(e => e.type === 'singlet' || (oIsKaistRescue && e.rescued)).length;
  const eff = Math.round((glowing / oExcitons.length) * 100);
  const effVal = document.getElementById('aio-eff-val');
  const heatVal = document.getElementById('aio-heat-val');
  if (effVal) effVal.innerText = eff + '%';
  if (heatVal) heatVal.innerText = (100 - eff) + '%';
}

function drawOledLab2() {
  if (!octx2 || !oc2) return;
  octx2.clearRect(0, 0, oc2.width, oc2.height);
  if (oExcitons.length === 0) {
    octx2.fillStyle = '#9ca3af'; octx2.font = '500 14px Inter, sans-serif';
    octx2.textAlign = 'center';
    octx2.fillText('[배터리 전류 주입] 버튼을 눌러 100개의 엑시톤을 생성해 보세요.', oc2.width / 2, oc2.height / 2);
    octx2.textAlign = 'left';
  }
  oExcitons.forEach(e => {
    e.x += e.vx; e.y += e.vy;
    if (e.x < 15 || e.x > oc2.width - 15) e.vx *= -1;
    if (e.y < 15 || e.y > oc2.height - 15) e.vy *= -1;

    if (e.type === 'singlet' || (oIsKaistRescue && e.rescued)) {
      octx2.fillStyle = '#0284c7';
      octx2.beginPath(); octx2.arc(e.x, e.y, 6, 0, Math.PI * 2); octx2.fill();
    } else {
      octx2.fillStyle = '#ef4444';
      octx2.beginPath(); octx2.arc(e.x, e.y, 4.5, 0, Math.PI * 2); octx2.fill();
    }
  });
  requestAnimationFrame(drawOledLab2);
}

// =========================================================================
// Quantum Lab 1: 블로흐 구 큐비트 중첩 & 측정
// =========================================================================
let qc1, qctx1;
let qTheta = 90;
let qIsSpinning = false, qSpinAngle = 0;
let qCount0 = 50, qCount1 = 50;

function initQuantumLab1() {
  qc1 = document.getElementById('canvasAioQuantum1');
  if (!qc1) return;
  qctx1 = qc1.getContext('2d');
  drawQuantumLab1();
}

function updateAioQubitAngle() {
  const slider = document.getElementById('aio-theta-slider');
  if (!slider) return;
  qTheta = parseInt(slider.value);
  const p0 = Math.round(Math.pow(Math.cos(qTheta * Math.PI / 360), 2) * 100);
  const valEl = document.getElementById('aio-theta-val');
  if (valEl) valEl.innerText = `${qTheta}° (|0⟩:${p0}%, |1⟩:${100 - p0}%)`;
}

function spinAioCoin() {
  qIsSpinning = true;
  let f = 0;
  const inv = setInterval(() => {
    qSpinAngle += 0.25; f++;
    if (f > 40) { clearInterval(inv); qIsSpinning = false; }
  }, 25);
}

function measureAioQubit100() {
  qCount0 = 0; qCount1 = 0;
  const prob0 = Math.pow(Math.cos(qTheta * Math.PI / 360), 2);
  for (let i = 0; i < 100; i++) {
    if (Math.random() < prob0) qCount0++;
    else qCount1++;
  }
}

function resetAioLab1() {
  const slider = document.getElementById('aio-theta-slider');
  if (slider) slider.value = 90;
  updateAioQubitAngle();
  qCount0 = 50; qCount1 = 50;
}

function drawQuantumLab1() {
  if (!qctx1 || !qc1) return;
  qctx1.clearRect(0, 0, qc1.width, qc1.height);

  const cx = 320, cy = 180;
  qctx1.save();
  qctx1.translate(cx, cy);

  qctx1.strokeStyle = '#d1d5db'; qctx1.lineWidth = 1.5;
  qctx1.beginPath(); qctx1.arc(0, 0, 95, 0, Math.PI * 2); qctx1.stroke();
  qctx1.setLineDash([3, 3]);
  qctx1.beginPath(); qctx1.ellipse(0, 0, 95, 28, 0, 0, Math.PI * 2); qctx1.stroke();
  qctx1.setLineDash([]);

  qctx1.fillStyle = '#2563eb'; qctx1.font = '600 12px Inter, sans-serif';
  qctx1.fillText('|0⟩ 앞면', -50, -108);
  qctx1.fillStyle = '#dc2626';
  qctx1.fillText('|1⟩ 뒷면', -45, 122);

  const scaleX = qIsSpinning ? Math.cos(qSpinAngle) : Math.sin(qTheta * Math.PI / 180);
  qctx1.fillStyle = '#eab308';
  qctx1.beginPath();
  qctx1.ellipse(0, 0, Math.abs(scaleX) * 55 + 5, 55, 0, 0, Math.PI * 2);
  qctx1.fill();

  qctx1.fillStyle = '#713f12'; qctx1.font = '600 14px Inter, sans-serif'; qctx1.textAlign = 'center';
  if (Math.abs(scaleX) > 0.3) qctx1.fillText(qIsSpinning ? '0 & 1' : (scaleX > 0 ? '|0⟩' : '|1⟩'), 0, 5);
  qctx1.textAlign = 'left';

  // Vector
  const rad = (qTheta - 90) * Math.PI / 180;
  qctx1.strokeStyle = '#7c3aed'; qctx1.lineWidth = 2.5;
  qctx1.beginPath(); qctx1.moveTo(0, 0); qctx1.lineTo(Math.sin(rad) * 80, -Math.cos(rad) * 80); qctx1.stroke();

  qctx1.restore();

  // Right bar chart
  const bx = 680, by = 70;
  qctx1.fillStyle = '#f8fafc'; qctx1.fillRect(bx, by, 250, 220);
  qctx1.strokeStyle = '#e2e8f0'; qctx1.strokeRect(bx, by, 250, 220);

  qctx1.fillStyle = '#1e293b'; qctx1.font = '600 13px Inter, sans-serif';
  qctx1.fillText('양자 측정 결과 (총 100회)', bx + 35, by + 30);

  qctx1.fillStyle = '#2563eb';
  qctx1.fillRect(bx + 40, by + 180 - (qCount0 * 1.3), 50, qCount0 * 1.3);
  qctx1.fillStyle = '#1e293b'; qctx1.font = '500 12px Inter, sans-serif';
  qctx1.fillText(`|0⟩: ${qCount0}회`, bx + 40, by + 200);

  qctx1.fillStyle = '#dc2626';
  qctx1.fillRect(bx + 145, by + 180 - (qCount1 * 1.3), 50, qCount1 * 1.3);
  qctx1.fillStyle = '#1e293b';
  qctx1.fillText(`|1⟩: ${qCount1}회`, bx + 145, by + 200);

  requestAnimationFrame(drawQuantumLab1);
}

// =========================================================================
// Quantum Lab 2: H2 분자 결합 에너지 포텐셜 곡선 & VQE
// =========================================================================
let qc2, qctx2;
let qDist = 1.8;
let qIsVQERunning = false;

function initQuantumLab2() {
  qc2 = document.getElementById('canvasAioQuantum2');
  if (!qc2) return;
  qctx2 = qc2.getContext('2d');
  updateAioVQEInfo();
  drawQuantumLab2();
}

function getAioH2Energy(r) {
  const De = 0.8, a = 1.5, re = 0.74;
  return De * (Math.exp(-2 * a * (r - re)) - 2 * Math.exp(-a * (r - re))) - 0.337;
}

function manualAioDistChange() {
  if (qIsVQERunning) return;
  const slider = document.getElementById('aio-dist-slider');
  if (!slider) return;
  qDist = parseInt(slider.value) / 100;
  updateAioVQEInfo();
}

function updateAioVQEInfo() {
  const distEl = document.getElementById('aio-dist-val');
  const energyEl = document.getElementById('aio-energy-val');
  if (distEl) distEl.innerText = qDist.toFixed(2) + ' Å';
  if (energyEl) energyEl.innerText = getAioH2Energy(qDist).toFixed(3) + ' a.u.';
}

function runAioVQE() {
  if (qIsVQERunning) return;
  qIsVQERunning = true;
  const statusEl = document.getElementById('aio-vqe-status');
  const btn = document.getElementById('btn-aio-vqe');
  if (statusEl) statusEl.innerText = '최적화 루프 실행 중...';
  if (btn) btn.disabled = true;

  const target = 0.74;
  const inv = setInterval(() => {
    if (Math.abs(qDist - target) > 0.02) {
      qDist += (target - qDist) * 0.12;
      const slider = document.getElementById('aio-dist-slider');
      if (slider) slider.value = Math.round(qDist * 100);
      updateAioVQEInfo();
    } else {
      qDist = target;
      const slider = document.getElementById('aio-dist-slider');
      if (slider) slider.value = 74;
      updateAioVQEInfo();
      clearInterval(inv);
      qIsVQERunning = false;
      if (btn) btn.disabled = false;
      if (statusEl) statusEl.innerText = '최저 바닥 상태(-1.137 a.u.) 수렴 완료';
    }
  }, 70);
}

function resetAioLab2() {
  qDist = 1.8;
  const slider = document.getElementById('aio-dist-slider');
  const statusEl = document.getElementById('aio-vqe-status');
  if (slider) slider.value = 180;
  if (statusEl) statusEl.innerText = '수동 탐색 모드';
  updateAioVQEInfo();
}

function drawQuantumLab2() {
  if (!qctx2 || !qc2) return;
  qctx2.clearRect(0, 0, qc2.width, qc2.height);

  const mx = 180, my = 160;
  const sep = qDist * 50;

  // Electron cloud
  qctx2.fillStyle = 'rgba(94, 92, 230, 0.08)';
  qctx2.beginPath(); qctx2.ellipse(mx, my, sep / 2 + 30, 38, 0, 0, Math.PI * 2); qctx2.fill();

  // Protons
  qctx2.fillStyle = '#0075de';
  qctx2.beginPath(); qctx2.arc(mx - sep / 2, my, 15, 0, Math.PI * 2); qctx2.fill();
  qctx2.fillStyle = '#ffffff'; qctx2.font = '600 11px Inter, sans-serif';
  qctx2.fillText('H⁺', mx - sep / 2 - 6, my + 4);

  qctx2.fillStyle = '#0075de';
  qctx2.beginPath(); qctx2.arc(mx + sep / 2, my, 15, 0, Math.PI * 2); qctx2.fill();
  qctx2.fillStyle = '#ffffff';
  qctx2.fillText('H⁺', mx + sep / 2 - 6, my + 4);

  qctx2.fillStyle = '#6b7280'; qctx2.font = '11px Inter, sans-serif';
  qctx2.fillText(`R = ${qDist.toFixed(2)} Å`, mx - 25, my + 50);

  // Curve
  const gx = 450, gy = 30, gw = 500, gh = 250;
  qctx2.strokeStyle = '#e5e7eb'; qctx2.lineWidth = 1;
  qctx2.strokeRect(gx, gy, gw, gh);

  qctx2.strokeStyle = '#5e5ce6'; qctx2.lineWidth = 2.5;
  qctx2.beginPath();
  for (let r = 0.3; r <= 2.5; r += 0.02) {
    const px = gx + 40 + (r - 0.3) / 2.2 * (gw - 70);
    const e = getAioH2Energy(r);
    const py = gy + gh - 30 - ((e - (-1.2)) / 1.5) * (gh - 60);
    if (r === 0.3) qctx2.moveTo(px, py);
    else qctx2.lineTo(px, py);
  }
  qctx2.stroke();

  const curX = gx + 40 + (qDist - 0.3) / 2.2 * (gw - 70);
  const curE = getAioH2Energy(qDist);
  const curY = gy + gh - 30 - ((curE - (-1.2)) / 1.5) * (gh - 60);

  qctx2.fillStyle = '#d97706';
  qctx2.beginPath(); qctx2.arc(curX, curY, 7, 0, Math.PI * 2); qctx2.fill();

  requestAnimationFrame(drawQuantumLab2);
}

// Master Simulation Initializer
function initAllSimulations() {
  initOledLab1();
  initOledLab2();
  initQuantumLab1();
  initQuantumLab2();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllSimulations);
} else {
  initAllSimulations();
}
