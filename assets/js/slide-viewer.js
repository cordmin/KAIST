/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * All-in-One Slide Deck Data & Viewer Controller (slide-viewer.js)
 * 
 * - OLED 10장 핵심 슬라이드 덱 (자외선/형광/전자의 준위/스토크스/스핀통계/핫엑시톤/신소재설계)
 * - Quantum 10장 핵심 슬라이드 덱 (지수폭발/큐비트중첩/동시병렬/VQE바닥상태/청소년프로젝트)
 */

// =========================================================================
// OLED Slide Deck Data & Controller
// =========================================================================
const oledSlideData = [
  { tag: "1차시 탐구 · [9과10-03]", title: "자외선 형광 탐정단: 일상 속 숨은 빛의 발견", body: "• 토닉워터(퀴닌): 자외선 아래서 선명한 사파이어 파란색 발광<br>• 비타민(리보플라빈): 밝은 형광 연두색 발광<br>• 올리브유(엽록소): 붉은색 형광 발광<br>→ 보이지 않는 자외선을 흡수하여 가시광선 빛을 방출하는 현상" },
  { tag: "빛의 스펙트럼", title: "빛의 파장과 에너지: 파장이 짧을수록 높은 에너지", body: "• 자외선(300~400nm): 고에너지 광자<br>• 가시광선(400~700nm): 인간의 눈으로 볼 수 있는 색채 영역<br>→ 높은 에너지를 흡수하여 낮은 에너지를 방출할 때, 차이나는 에너지는 어디로 갈까?" },
  { tag: "2차시 탐구 · [9과11-02]", title: "전자의 에너지 준위 전이: 3단계 상태 변화", body: "• 1단계 (흡수): 바닥 상태(1층) 전자가 자외선을 흡수하여 들뜬 상태(3층)로 전이<br>• 2단계 (진동 이완): 분자 진동을 통해 일부 에너지를 열(Heat)로 방출<br>• 3단계 (형광 방출): 남은 에너지를 가시광선 형광빛으로 방출하며 착지" },
  { tag: "[9과14-03] 에너지 보존", title: "스토크스 이동과 에너지 보존의 법칙", body: "<div style='background:#f8fafc; border:1px solid #e2e8f0; padding:1rem; border-radius:4px; text-align:center; color:#0075de; font-size:1.15rem; font-weight:600;'>[ 흡수한 자외선 에너지 ] = [ 방출된 형광빛 에너지 ] + [ 방출된 열에너지 ]</div><br>• 미시세계 전자의 에너지 준위 전이에서도 대자연의 에너지 보존 법칙이 엄격히 성립합니다." },
  { tag: "3차시 탐구 · 스핀 모형", title: "전자의 스핀 다중도: 단일항과 삼중항", body: "• 단일항(Singlet, ↑↓): 반대 방향 스핀 쌍. 1억 분의 1초 만에 바닥 상태로 전이하며 형광 방출<br>• 삼중항(Triplet, ↑↑): 같은 방향 스핀 쌍. 스핀 금지 전이로 인해 상온에서 빛 대신 열 방출<br>• 형광펜(즉시 소광)과 야광 물질(지연 방출)의 근본적 차이" },
  { tag: "[9과14-02] OLED 난제", title: "스핀 통계 한계: 스마트폰 OLED의 75% 열 손실", body: "• 배터리 전기를 유기 분자에 주입할 때의 양자 스핀 통계 확률<br>• 25%만 단일항이 되어 유용한 빛을 방출<br>• 75%는 삼중항에 갇혀 빛 대신 디스플레이 발열 유발<br>→ 배터리 소모와 발열, 패널 수명 단축의 근본 원인" },
  { tag: "4차시 탐구 · KAIST 성과", title: "KAIST CPRL의 해결책: 핫 엑시톤 및 역간교차", body: "• 핫 엑시톤(Hot Exciton): 고에너지 삼중항 옥상에서 단일항으로 초고속 역간교차(RISC) 우회로 구축<br>• 분자 진동 모드를 활용한 스핀 반전 촉진<br>→ 버려지던 75% 삼중항 전자를 100% 빛으로 전환하는 기술 완성" },
  { tag: "모둠 프로젝트", title: "차세대 청색 OLED 분자 설계 프로젝트", body: "• 청색(Blue)의 난제: 높은 밴드갭 에너지로 분자 결합 손상 및 번인 발생<br>• 탐구 과제: 붕소-질소 다중 공명 결합을 활용한 고효율 청색 발광 분자 설계<br>• 발열 최소화, 배터리 수명 극대화, 차세대 투명 롤러블 디스플레이 구현" },
  { tag: "단원 총정리", title: "핵심 개념 정리 및 진로 탐색", body: "1. 자외선 흡수 → 진동 완화(열 방출) → 가시광선 형광 방출 (에너지 보존)<br>2. 전자의 스핀 통계: 단일항 25% 발광 vs 삼중항 75% 열 손실<br>3. KAIST 핫 엑시톤 기술을 통한 100% 내부 양자 효율 달성" }
];

let oCurrentSlide = 1;

function changeOledSlide(dir) {
  oCurrentSlide += dir;
  if (oCurrentSlide < 1) oCurrentSlide = 1;
  if (oCurrentSlide > 10) oCurrentSlide = 10;
  renderOledSlide();
}

function renderOledSlide() {
  const viewer = document.getElementById('oledSlideViewer');
  if (!viewer) return;
  if (oCurrentSlide === 1) {
    viewer.innerHTML = `
      <div class="aio-slide-item active">
        <div>
          <div class="aio-slide-tag">KAIST CPRL 첨단과학 탐구 · 중학교 과학</div>
          <h1 class="aio-slide-title">스마트폰 속 75% 배터리 도둑을 잡아라!<br><span style="color:#60a5fa;">빛나는 분자와 OLED의 과학</span></h1>
          <div class="aio-slide-body">
            <p>• <strong>탐구 대상:</strong> 일상 속 형광 물질, 원자 속 전자, 스마트폰 OLED 디스플레이</p>
            <p>• <strong>핵심 질문:</strong> "왜 보이지 않는 자외선을 비추면 눈부신 빛이 나올까?"</p>
            <p>• <strong>KAIST의 도전:</strong> 스마트폰 배터리의 75%를 낭비하던 삼중항 전자를 어떻게 잡았을까?</p>
          </div>
        </div>
        <div class="aio-slide-footer">
          <span class="slide-counter" style="color:#9ca3af; font-size:0.85rem;">1 / 10</span>
          <div>
            <button class="topbar-btn" disabled style="opacity:0.5;">이전</button>
            <button class="topbar-btn primary" onclick="changeOledSlide(1)"><span>다음</span> <i data-lucide="arrow-right"></i></button>
          </div>
        </div>
      </div>
    `;
  } else {
    const d = oledSlideData[oCurrentSlide - 2];
    viewer.innerHTML = `
      <div class="aio-slide-item active">
        <div>
          <div class="aio-slide-tag">${d.tag}</div>
          <h2 class="aio-slide-title">${d.title}</h2>
          <div class="aio-slide-body">${d.body}</div>
        </div>
        <div class="aio-slide-footer">
          <span class="slide-counter" style="color:#9ca3af; font-size:0.85rem;">${oCurrentSlide} / 10</span>
          <div>
            <button class="topbar-btn" onclick="changeOledSlide(-1)">이전</button>
            <button class="topbar-btn primary" ${oCurrentSlide === 10 ? 'disabled style="opacity:0.5;"' : ''} onclick="changeOledSlide(1)"><span>다음</span> <i data-lucide="arrow-right"></i></button>
          </div>
        </div>
      </div>
    `;
  }
  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

// =========================================================================
// Quantum Slide Deck Data & Controller
// =========================================================================
const quantumSlideData = [
  { tag: "1차시 탐구 · 거듭제곱의 원리", title: "체스판과 쌀알 퀴즈: 거듭제곱의 폭발적 증가", body: "• 1칸 1톨, 2칸 2톨, 3칸 4톨, 4칸 8톨...<br>• 64번째 칸: 2^63 ≈ 922경 톨 (인류 연간 쌀 생산량의 수백 배)<br>→ 2배씩 증가하는 지수 함수는 순식간에 천문학적 규모에 도달합니다." },
  { tag: "[9과11-01] [9과11-02]", title: "슈퍼컴퓨터의 한계: 분자 속 전자의 지수 폭발", body: "• 물 분자(H2O, 전자 10개): 2^10 = 1,024가지 상태<br>• 카페인(전자 102개): 2^102 ≈ 10^30가지 (지구 전체 모래알 수 초과)<br>• 페니실린(전자 280개): 10^84가지 (관측 가능한 우주 전체 원자 수 초과)<br>→ 기존 컴퓨터로는 작은 의약품 분자 하나도 엄밀 계산 불가" },
  { tag: "2차시 탐구 · [9정01-03]", title: "0과 1이 공존하는 양자 큐비트 중첩", body: "• 고전 비트(Bit): 0 또는 1 중 하나의 상태만 유지<br>• 양자 큐비트(Qubit): 회전하는 동전처럼 0과 1의 상태가 동시에 존재하는 '중첩(Superposition)'<br>• n개의 큐비트는 2^n개의 상태를 동시에 표현 가능" },
  { tag: "동시 병렬 연산", title: "미로 탐색 비교: 순차 탐색 vs 동시 병렬 처리", body: "• 일반 컴퓨터: 1,024개의 경로를 하나씩 차례대로 검증<br>• 양자 컴퓨터: 1,024개의 분신이 모든 경로를 동시에 탐색<br><div style='background:#f8fafc; border:1px solid #e2e8f0; padding:1rem; border-radius:4px; text-align:center; color:#5e5ce6; font-size:1.1rem; font-weight:600; margin-top:1rem;'>큐비트 수가 증가할수록 연산 공간이 지수적으로 확장됩니다.</div>" },
  { tag: "3차시 탐구 · [9과16-01]", title: "골짜기 바닥 상태: 화학 결합과 에너지 최저화", body: "• 경사면에서 굴러 떨어진 공은 가장 낮은 골짜기 바닥에서 정지<br>• 원자와 분자도 에너지가 가장 낮은 '바닥 상태(Ground State)'에서 안정적으로 결합 형성<br>• 결합 형성 시 에너지가 방출되며 결합 거리 유지" },
  { tag: "[9정02-02] 하이브리드 알고리즘", title: "고전-양자 협력: VQE 알고리즘", body: "• 양자 프로세서: 큐비트 중첩을 이용해 분자 파동함수의 결합 에너지 기댓값 측정<br>• 고전 프로세서: 측정된 에너지를 기반으로 경사하강법을 통해 원자 간 결합 파라미터 갱신<br>→ 두 시스템의 협력 루프를 통해 화학 분자의 최저 바닥 상태 도달" },
  { tag: "미래 첨단 기술", title: "비커 없는 화학 실험실: 가상 분자 시뮬레이션", body: "• 유독성 시약과 위험한 반응 조건 없이 컴퓨터 내부에서 정밀 분자 합성<br>• 10년 이상 소요되던 신약 개발 및 촉매 스크리닝 기간을 수 주 단위로 단축<br>• 친환경 상온 비료 합성 촉매, 고효율 전고체 배터리 전해질 설계" },
  { tag: "4차시 프로젝트", title: "청소년 양자 화학 스타트업 프로젝트", body: "• 과제 1 (탄소중립): 고에너지가 소모되는 하버-보슈법을 대체할 상온 질소 고정 촉매 설계<br>• 과제 2 (차세대 모빌리티): 화재 위험 없는 전고체 리튬 배터리 고체 전해질 설계<br>• 과제 3 (난치병 극복): 바이러스 표적 단백질에 정확히 결합하는 맞춤형 화합물 도킹 시뮬레이션" },
  { tag: "단원 총정리", title: "핵심 개념 정리 및 진로 전망", body: "1. 전자의 얽힘으로 인한 지수 폭발(2^N)과 슈퍼컴퓨터의 한계<br>2. 회전하는 동전 팽이(큐비트 중첩)를 통한 동시 병렬 처리<br>3. 고전-양자 협업 VQE 알고리즘을 통한 분자 바닥 상태 계산" }
];

let qCurrentSlide = 1;

function changeQuantumSlide(dir) {
  qCurrentSlide += dir;
  if (qCurrentSlide < 1) qCurrentSlide = 1;
  if (qCurrentSlide > 10) qCurrentSlide = 10;
  renderQuantumSlide();
}

function renderQuantumSlide() {
  const viewer = document.getElementById('quantumSlideViewer');
  if (!viewer) return;
  if (qCurrentSlide === 1) {
    viewer.innerHTML = `
      <div class="aio-slide-item active">
        <div>
          <div class="aio-slide-tag">KAIST CPRL 첨단과학 탐구 · 중학교 과학 & 정보</div>
          <h1 class="aio-slide-title">0과 1의 한계를 넘는 분자 탐험<br><span style="color:#c084fc;">양자 컴퓨터와 계산 화학의 미래</span></h1>
          <div class="aio-slide-body">
            <p>• <strong>탐구 대상:</strong> 다전자 화학 분자, 양자 큐비트, 하이브리드 VQE 알고리즘</p>
            <p>• <strong>핵심 질문:</strong> "왜 세상에서 가장 똑똑한 슈퍼컴퓨터도 카페인 분자 하나를 계산하지 못할까?"</p>
            <p>• <strong>미래 비전:</strong> 비커 없는 화학 실험실로 기후 위기와 난치병을 극복하는 방법</p>
          </div>
        </div>
        <div class="aio-slide-footer">
          <span class="slide-counter" style="color:#9ca3af; font-size:0.85rem;">1 / 10</span>
          <div>
            <button class="topbar-btn" disabled style="opacity:0.5;">이전</button>
            <button class="topbar-btn primary" style="background:#5e5ce6; border-color:#5e5ce6;" onclick="changeQuantumSlide(1)"><span>다음</span> <i data-lucide="arrow-right"></i></button>
          </div>
        </div>
      </div>
    `;
  } else {
    const d = quantumSlideData[qCurrentSlide - 2];
    viewer.innerHTML = `
      <div class="aio-slide-item active">
        <div>
          <div class="aio-slide-tag">${d.tag}</div>
          <h2 class="aio-slide-title">${d.title}</h2>
          <div class="aio-slide-body">${d.body}</div>
        </div>
        <div class="aio-slide-footer">
          <span class="slide-counter" style="color:#9ca3af; font-size:0.85rem;">${qCurrentSlide} / 10</span>
          <div>
            <button class="topbar-btn" onclick="changeQuantumSlide(-1)">이전</button>
            <button class="topbar-btn primary" style="background:#5e5ce6; border-color:#5e5ce6;" ${qCurrentSlide === 10 ? 'disabled style="opacity:0.5;"' : ''} onclick="changeQuantumSlide(1)"><span>다음</span> <i data-lucide="arrow-right"></i></button>
          </div>
        </div>
      </div>
    `;
  }
  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

// Master Slide Viewer Initializer
function initAllSlides() {
  renderOledSlide();
  renderQuantumSlide();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllSlides);
} else {
  initAllSlides();
}
