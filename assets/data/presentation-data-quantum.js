/**
 * KAIST CPRL - 양자컴퓨터 모듈 슬라이드 데이터 (1~4차시)
 * assets/data/presentation-data-quantum.js
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

window.presentationModalData.quantum = {
    // -----------------------------------------------------------------------
    // Quantum 1차시: 비트 vs 큐비트
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 동전 던지기에서 시작하는 양자 마법: 비트 vs 큐비트',
      badge: '양자 1차시 · 비트 vs 큐비트',
      slides: [
        {
          tag: '1차시 도입 · [9과01-02] [9과11-01]',
          title: '비트 vs 큐비트: 복잡한 분자 계산의 한계를 뛰어넘어라!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "물 분자(H₂O) 하나 시뮬레이션하는데 왜 세계 최고 슈퍼컴퓨터도 멈추어 설까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="cpu"></i> <strong>0과 1이 공존하는 양자 중첩(Superposition)의 마법!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
                <ul class="pres-list">
                  <li>고전 컴퓨터의 <strong>비트(Bit)</strong>와 양자 컴퓨터의 <strong>큐비트(Qubit)</strong> 차이를 설명한다.</li>
                  <li>회전하는 동전 모형으로 <strong>양자 중첩 현상</strong>을 직관적으로 이해한다.</li>
                  <li>원자와 전자의 결합을 계산하기 위해 왜 양자 컴퓨터가 필요한지 탐구한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 도입 · 동기 유발',
          title: '동전 던지기의 비밀: 멈춘 동전 vs 팽이처럼 도는 동전',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="circle-dot"></i> 책상 위에 멈춘 동전 (고전 비트)</div>
                <ul class="pres-list">
                  <li>바닥에 멈춰 있는 동전은 <strong>앞면(0) 또는 뒷면(1)</strong> 중 딱 하나만 가집니다.</li>
                  <li>스위치를 켜거나(ON) 끄는(OFF) 것과 같습니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="loader"></i> 팽이처럼 빠르게 도는 동전 (양자 큐비트)</div>
                <ul class="pres-list">
                  <li>팽이처럼 돌고 있는 동전은 지금 앞면일까요, 뒷면일까요?</li>
                  <li>손으로 멈추기 전까지는 <strong>앞면과 뒷면이 동시에 섞여 있는 '중첩 상태'</strong>입니다!</li>
                  <li>이것이 바로 1개의 큐비트가 0과 1을 동시에 품는 양자의 기적입니다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 준비 · 실물 실험도구',
          title: '1차시 탐구 활동 준비물 안내 (실제 실험 교구)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('quantum_tools_1.jpg')}" alt="양자 1차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>분자 모형 키트, 중첩 동전 교구, 계산화학 태블릿 세트</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="atom"></i></div>
                  <div>
                    <div class="pres-tool-name">볼-앤-스틱 분자 구조 모형 키트</div>
                    <div class="pres-tool-desc">물(H₂O), 메탄(CH₄) 원자 결합 조립용</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="coins"></i></div>
                  <div>
                    <div class="pres-tool-name">중첩 실험용 금속 동전 교구</div>
                    <div class="pres-tool-desc">고전 비트(정지) vs 양자 큐비트(회전 중첩) 시연</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="tablet"></i></div>
                  <div>
                    <div class="pres-tool-name">스마트 태블릿 (분자 계산 시뮬레이터)</div>
                    <div class="pres-tool-desc">전자 간 상호작용 계산 난이도 체험 앱</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="file-text"></i></div>
                  <div>
                    <div class="pres-tool-name">양자 계산 화학 탐구 활동지</div>
                    <div class="pres-tool-desc">기하급수적 경우의 수 계산표 작성</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 준비 · 안전 및 활동 수칙',
          title: '교구 사용 및 모둠 협력 안전 규칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="alert-circle"></i></div>
                <div class="pres-safety-title">1. 분자 모형 분실 방지</div>
                <div class="pres-safety-desc">
                  작은 플라스틱 원자 구슬이나 결합 막대가 바닥에 떨어지지 않도록 부품 상자에 보관합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="coins"></i></div>
                <div class="pres-safety-title">2. 동전 회전 안전</div>
                <div class="pres-safety-desc">
                  동전을 너무 강하게 튕겨 옆 모둠으로 날아가지 않도록 책상 중앙 고무 매트 위에서 돌립니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">3. 상호 토의 존중</div>
                <div class="pres-safety-desc">
                  양자역학의 낯선 개념에 대해 자유롭게 질문하고, 서로의 생각을 경청하며 토의합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 전개 · 탐구 절차',
          title: '탐구 활동: 고전 동전 vs 회전 동전 중첩 비교',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">고전 비트 동전 던지기</div>
                <p>동전을 책상에 던져 멈춘 상태를 확인합니다. 0(앞면)과 1(뒷면) 중 1가지 상태만 확정됨을 기록합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">회전 팽이 동전 (중첩)</div>
                <p>동전을 팽이처럼 빠르게 회전시킵니다. 돌아가는 동안 앞면과 뒷면이 동시에 존재하는 중첩을 확인합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">손바닥으로 측정 (붕괴)</div>
                <p>돌아가는 동전을 탁 덮는 순간, 중첩이 깨지며 0 또는 1로 결정되는 '양자 측정' 과정을 관찰합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 전개 · 탐구 기록 및 정답',
          title: '활동지 비교 관찰표 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>기본 단위</th>
                    <th>정보 표현 상태</th>
                    <th>3개 연결 시 동시 표현 정보량 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>고전 컴퓨터</strong></td>
                    <td>비트 (Bit)</td>
                    <td>0 또는 1 중 딱 1개</td>
                    <td>2³ = 8개 경우의 수 중 <strong>단 1개의 숫자만 표현</strong></td>
                  </tr>
                  <tr>
                    <td><strong>양자 컴퓨터</strong></td>
                    <td>큐비트 (Qubit)</td>
                    <td><strong>0과 1이 동시에 중첩</strong></td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">2³ = 8개의 모든 상태를 '동시에 단 한 번에' 병렬 연산!</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pres-callout" style="margin-top:1rem;">
              <i data-lucide="zap"></i> <strong>기하급수적 폭발:</strong> 큐비트가 50개만 모여도 2⁵⁰(약 1000조 개)의 상태를 동시에 계산할 수 있습니다!
            </div>
          `
        },
        {
          tag: '1차시 전개 · 개념 원리',
          title: '핵심 개념: 양자 중첩 (Superposition)과 분자 계산',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="cpu"></i> 고전 컴퓨터의 한계</div>
                <p>기존 컴퓨터는 복잡한 분자를 계산할 때 모든 전자의 위치를 <strong>하나하나 순서대로</strong> 계산해야 하므로 우주 나이보다 긴 시간이 걸립니다.</p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="sparkles"></i> 양자 컴퓨터의 초능력</div>
                <p>자연의 전자 자체가 <strong>양자역학</strong>으로 움직입니다. 따라서 양자 큐비트를 사용하면 분자의 복잡한 움직임을 <strong>그대로 흉내 내어 순식간에 계산</strong>합니다!</p>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 정리 · 결론 및 의미',
          title: '탐구 결론: "자연을 시뮬레이션하려면 양자 컴퓨터를 써라!"',
          content: `
            <div class="pres-equation-card">
              <div class="eq-title">[ 물리학자 리처드 파인만의 명언 ]</div>
              <div class="eq-formula">
                "자연은 고전적이지 않다. 자연을 시뮬레이션하고 싶다면 양자역학적으로 계산하라!"
              </div>
            </div>
            <div class="pres-grid-2" style="margin-top:1.25rem;">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 오늘 확인한 핵심</div>
                <p>동전의 회전처럼 큐비트는 0과 1의 무한한 가능성을 동시에 품고 있어 분자의 화학 결합을 완벽히 계산합니다.</p>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="activity"></i> 미래 기술의 패러다임</div>
                <p>신약 개발, 배터리 신소재, 탄소 포집 촉매 개발의 열쇠가 바로 양자 컴퓨터에 있습니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 정리 · 차시 예고',
          title: '1차시 학습 정리 및 2차시 탐구 예고',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="list-checks"></i> 1차시 배움 확인</div>
                <ul class="pres-list">
                  <li>✅ 비트(0 or 1) vs 큐비트(0 and 1 중첩) 개념 정리</li>
                  <li>✅ 회전 동전 모형으로 중첩 및 관측에 의한 붕괴 확인</li>
                  <li>✅ 양자 병렬 연산(2ⁿ)의 위력 확인</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 2차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[2차시] 3차원 지구본 위의 양자 큐비트: 블록 구와 중첩의 조작</strong><br>
                  "큐비트의 상태는 3차원 지구본 위에서 어떻게 자유자재로 움직일까요?"<br>
                  👉 <strong>블록 구(Bloch Sphere) 가상실험실</strong>에서 양자 화살표를 직접 돌려봅니다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 2차시: 블록 구와 중첩의 조작
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 3차원 지구본 위의 양자 큐비트: 블록 구와 중첩의 조작',
      badge: '양자 2차시 · 블록 구와 양자 상태',
      slides: [
        {
          tag: '2차시 도입 · [9정01-03] [9과11-02]',
          title: '3차원 지구본 위의 양자 큐비트: 블록 구(Bloch Sphere)',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "북극은 |0⟩, 남극은 |1⟩! 그렇다면 적도에 서 있는 큐비트는 과연 몇 퍼센트의 확률을 가질까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="globe"></i> <strong>3차원 구면 위의 양자 상태 벡터 탐험!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
                <ul class="pres-list">
                  <li><strong>블록 구(Bloch Sphere) 모형</strong>을 통해 양자 상태를 3차원으로 시각화한다.</li>
                  <li>양자 게이트(회전)를 조작하여 <strong>중첩 상태의 확률 변화</strong>를 관찰한다.</li>
                  <li>측정 순간 상태가 북극이나 남극으로 <strong>붕괴(Collapse)</strong>함을 이해한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 도입 · 동기 유발',
          title: '스위치 vs 입체 나침반: 정보가 3차원으로 춤춘다!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="toggle-left"></i> 고전 스위치 (1차원)</div>
                <p>위로 올리면 켜짐(ON), 아래로 내리면 꺼짐(OFF). 오직 양 끝 두 지점만 왔다 갔다 할 수 있습니다.</p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="compass"></i> 3차원 양자 나침반 (블록 구)</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  큐비트는 구면 위의 <strong>동서남북, 위도와 경도 모든 지점</strong>을 화살표로 가리킬 수 있습니다. 
                  무한히 부드러운 아날로그 각도를 가지면서도, 측정할 때는 디지털(0 또는 1)로 답하는 신비로운 구체입니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 준비 · 실물 실험도구',
          title: '2차시 탐구 준비물 안내 (블록 구 교구 & 레이저)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('quantum_tools_2.jpg')}" alt="양자 2차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>이온트랩 양자 조작 실험 장치 및 블록 구 제어 시스템</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="globe"></i></div>
                  <div>
                    <div class="pres-tool-name">3D 블록 구(Bloch Sphere) 입체 교구</div>
                    <div class="pres-tool-desc">XYZ 축과 회전 화살표가 달린 양자 구체 모형</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="disc"></i></div>
                  <div>
                    <div class="pres-tool-name">광학 편광 필터 세트 (0°, 45°, 90°)</div>
                    <div class="pres-tool-desc">빛의 편광 중첩 및 투과율 측정 도구</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="tablet"></i></div>
                  <div>
                    <div class="pres-tool-name">인터랙티브 블록 구 시뮬레이터</div>
                    <div class="pres-tool-desc">마우스 드래그로 큐비트 화살표를 회전시키는 앱</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="table"></i></div>
                  <div>
                    <div class="pres-tool-name">위도별 측정 확률 기록표</div>
                    <div class="pres-tool-desc">0과 1 출현 빈도 통계 분석 활동지</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 준비 · 안전 및 조작 수칙',
          title: '광학 및 시뮬레이터 조작 안전 규칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="eye-off"></i></div>
                <div class="pres-safety-title">1. 레이저 눈 직시 금지</div>
                <div class="pres-safety-desc">
                  광학 실험 시 광원을 사람의 눈으로 직접 비추지 않도록 주의하고 지정된 스크린에만 투사합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="disc"></i></div>
                <div class="pres-safety-title">2. 편광 필터 흠집 방지</div>
                <div class="pres-safety-desc">
                  편광판 표면을 날카로운 펜으로 긁지 말고 테두리 플라스틱 프레임을 잡고 회전시킵니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="rotate-3d"></i></div>
                <div class="pres-safety-title">3. 3D 뷰어 부드럽게 조작</div>
                <div class="pres-safety-desc">
                  시뮬레이터에서 화살표를 너무 급격히 돌리지 않고, 각도를 천천히 변화시키며 확률 바를 관찰합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 탐구 절차',
          title: '탐구 활동: 블록 구 화살표 회전과 확률 측정',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">북극과 남극 위치 확인</div>
                <p>화살표를 똑바로 위(북극)로 세우면 |0⟩(100%), 아래(남극)로 내리면 |1⟩(100%)임을 확인합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">적도(중첩)로 90도 회전</div>
                <p>마다마르(H) 게이트를 적용하여 화살표를 적도로 눕힙니다. 0과 1이 반반 섞인 중첩 상태를 만듭니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">100회 측정 시뮬레이션</div>
                <p><strong>[측정하기]</strong> 버튼을 100번 눌러 적도 상태에서 실제로 0과 1이 약 50대 50으로 나오는지 검증합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 탐구 기록 및 정답',
          title: '활동지 블록 구 위치별 측정 확률 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>블록 구 위치</th>
                    <th>상태 벡터 기호</th>
                    <th>|0⟩ 측정 확률</th>
                    <th>|1⟩ 측정 확률 & 의미 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>북극 (North Pole)</strong></td>
                    <td>|0⟩</td>
                    <td>100%</td>
                    <td>0% (고전 비트 0과 동일)</td>
                  </tr>
                  <tr>
                    <td><strong>적도 (Equator)</strong></td>
                    <td>(|0⟩ + |1⟩)/√2</td>
                    <td><span class="pres-ans-badge">정답</span> <strong>50%</strong></td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">50% (완벽한 균등 양자 중첩!)</span></td>
                  </tr>
                  <tr>
                    <td><strong>남극 (South Pole)</strong></td>
                    <td>|1⟩</td>
                    <td>0%</td>
                    <td>100% (고전 비트 1과 동일)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 개념 원리',
          title: '핵심 개념: 양자 측정에 의한 파동함수의 붕괴',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="eye"></i> 보는 순간 결정된다!</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  적도에 머물던 큐비트는 관측하기 전까지는 <strong>양쪽에 동시에 존재</strong>합니다. 
                  하지만 인간이 측정 장비로 들여다보는 순간, 상태가 순식간에 북극(|0⟩)이나 남극(|1⟩) 중 하나로 툭 떨어져 버립니다.
                </p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="shuffle"></i> 확률의 기하학</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  화살표가 북극에 가까울수록 0이 나올 확률이 높고, 남극에 가까울수록 1이 나올 확률이 높습니다. 
                  이 각도를 정밀하게 제어하는 것이 바로 <strong>'양자 알고리즘'</strong>입니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 정리 · 결론 및 법칙',
          title: '탐구 결론: 무한한 공간을 가진 3차원 양자 비트',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 오늘 확인한 핵심</div>
                <ul class="pres-list">
                  <li>블록 구는 큐비트의 중첩과 확률을 한눈에 보여주는 기하학적 나침반입니다.</li>
                  <li>양자 컴퓨터는 이 구면 위의 각도를 회전시켜 방대한 연산을 병렬로 수행합니다.</li>
                </ul>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="layers"></i> 화학과 양자의 만남</div>
                <p>분자 속 전자의 스핀 업/다운 상태도 바로 이 블록 구 위의 벡터로 정확하게 표현됩니다!</p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 정리 · 차시 예고',
          title: '2차시 학습 정리 및 3차시 탐구 예고',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="list-checks"></i> 2차시 배움 확인</div>
                <ul class="pres-list">
                  <li>✅ 블록 구의 북극(|0⟩), 남극(|1⟩), 적도(중첩) 이해</li>
                  <li>✅ 적도 위치에서의 50:50 측정 확률 검증</li>
                  <li>✅ 양자 측정에 의한 상태 붕괴 개념 체득</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 3차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[3차시] 양자와 슈퍼컴퓨터의 2인 3각: VQE로 가장 편안한 분자 찾기</strong><br>
                  "안개 자욱한 산에서 가장 깊은 골짜기(최저 에너지)를 어떻게 찾아낼까요?"<br>
                  👉 양자 프로세서와 슈퍼컴퓨터의 환상적인 협동 알고리즘 <strong>VQE</strong>를 탐구합니다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 3차시: 2인 3각 VQE 알고리즘
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 양자와 슈퍼컴퓨터의 2인 3각: VQE로 가장 편안한 분자 찾기',
      badge: '양자 3차시 · VQE 하이브리드 알고리즘',
      slides: [
        {
          tag: '3차시 도입 · [9과16-06] [9정02-02]',
          title: '양자와 슈퍼컴퓨터의 2인 3각: VQE로 최저 에너지를 찾아라!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "분자가 가장 편안하게 안정되는 '바닥 상태(최저 에너지)'를 어떻게 양자와 슈퍼컴퓨터가 협력해서 찾아낼까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="users"></i> <strong>VQE (변분 양자 고유값 솔버) 하이브리드 알고리즘!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
                <ul class="pres-list">
                  <li><strong>양자 프로세서(QPU)</strong>와 <strong>고전 컴퓨터(CPU)</strong>의 역할 분담을 설명한다.</li>
                  <li><strong>골짜기 지형도 모형</strong>을 통해 바닥 상태 에너지 탐색 원리를 이해한다.</li>
                  <li>VQE 시뮬레이터를 조작하여 최적의 에너지 수렴 과정을 탐구한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 도입 · 동기 유발',
          title: '안개 속 골짜기 찾기: 눈을 가린 사람과 드론의 2인 3각',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="mountain"></i> 분자의 목표: 가장 깊은 골짜기</div>
                <ul class="pres-list">
                  <li>자연계의 모든 물질은 에너지가 가장 낮은 <strong>바닥 상태</strong>에 머물고 싶어 합니다.</li>
                  <li>골짜기가 어디 있는지 알려면 수조 번의 복잡한 계산을 거쳐야 합니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="users"></i> 환상의 2인 3각 팀워크</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  <strong>양자 컴퓨터:</strong> 험준한 지형의 현재 높이(에너지)를 빛의 속도로 측정!<br>
                  <strong>고전 컴퓨터:</strong> 측정값을 보고 "오른쪽으로 3도 더 내려가!" 방향을 지시!<br>
                  이 둘이 발을 묶고 함께 달려 최저 에너지 골짜기를 정복합니다.
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 준비 · 실물 실험도구',
          title: '3차시 탐구 준비물 안내 (이온트랩 시뮬레이션 & 지형도)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('quantum_tools_3.jpg')}" alt="양자 3차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>이온트랩 양자 칩 시뮬레이션 및 VQE 알고리즘 제어기</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="link"></i></div>
                  <div>
                    <div class="pres-tool-name">2인 3각 협력 밴드 / 벨크로 스트랩</div>
                    <div class="pres-tool-desc">QPU와 CPU 역할 분담 신체 활동 교구</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="mountain"></i></div>
                  <div>
                    <div class="pres-tool-name">3D 에너지 등고선 지형도 매트</div>
                    <div class="pres-tool-desc">포텐셜 에너지 골짜기 최적화 탐색 판</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="tablet"></i></div>
                  <div>
                    <div class="pres-tool-name">VQE 최적화 인터랙티브 시뮬레이터</div>
                    <div class="pres-tool-desc">각도 매개변수 반복 수렴 그래프 관찰 태블릿</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="table"></i></div>
                  <div>
                    <div class="pres-tool-name">최적화 반복(Iteration) 기록표</div>
                    <div class="pres-tool-desc">반복 회수별 에너지 하강 기록 활동지</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 준비 · 안전 및 활동 수칙',
          title: '2인 3각 신체 활동 및 소프트웨어 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="shield-alert"></i></div>
                <div class="pres-safety-title">1. 발 걸림 및 넘어짐 방지</div>
                <div class="pres-safety-desc">
                  2인 3각 활동 시 책상을 치우고 안전 공간을 확보하며, 뛰지 않고 보폭을 맞추어 천천히 걷습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">2. 파트너와 신호 일치</div>
                <div class="pres-safety-desc">
                  양자 역할과 고전 컴퓨터 역할이 "하나, 둘" 구령을 붙여 호흡을 맞추며 활동합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="line-chart"></i></div>
                <div class="pres-safety-title">3. 수렴 그래프 정밀 기록</div>
                <div class="pres-safety-desc">
                  시뮬레이터의 반복 회수(Iteration)에 따른 에너지 하강 곡선이 평평해지는 지점을 정확히 기록합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 전개 · 탐구 절차',
          title: '탐구 활동: VQE 2인 3각 하이브리드 루프 조작',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">초기 각도(매개변수) 설정</div>
                <p>고전 컴퓨터가 임의의 초기 각도(θ)를 생성하여 양자 프로세서(QPU)에 전달합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">양자 회로 에너지 측정</div>
                <p>양자 칩이 해당 각도로 상태를 준비하고, 분자의 기대 에너지값을 순식간에 측정하여 CPU로 전송합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">각도 업데이트 & 골짜기 도달</div>
                <p>CPU가 더 낮은 에너지를 향해 각도를 보정하는 과정을 20회 반복하여 최저 바닥 상태에 도달합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 전개 · 탐구 기록 및 정답',
          title: '활동지 VQE 수렴 기록표 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>반복 회수 (Iteration)</th>
                    <th>회전 각도 (θ)</th>
                    <th>계산된 에너지 (Hartree)</th>
                    <th>시스템 상태 및 판정 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1회차 (초기)</td>
                    <td>0.00 rad</td>
                    <td>-0.85 Hartree</td>
                    <td>높은 산 중턱 (불안정 상태)</td>
                  </tr>
                  <tr>
                    <td>10회차 (중간)</td>
                    <td>0.54 rad</td>
                    <td>-1.10 Hartree</td>
                    <td>경사면 하강 중</td>
                  </tr>
                  <tr>
                    <td>20회차 (수렴)</td>
                    <td>0.78 rad</td>
                    <td><span class="pres-ans-badge">정답</span> <strong>-1.137 Hartree</strong></td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">바닥 상태(최저 에너지 골짜기) 정복 성공!</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '3차시 전개 · 개념 원리',
          title: '핵심 원리: 변분 원리 (Variational Principle)',
          content: `
            <div class="pres-equation-card">
              <div class="eq-title">[ 양자역학의 변분 원리 공식 ]</div>
              <div class="eq-formula">
                E(계산값) ≥ E(실제 바닥 상태 에너지)
              </div>
            </div>
            <div class="pres-grid-2" style="margin-top:1.25rem;">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="shield-check"></i> 수학적 안전장치</div>
                <p>아무리 엉터리 파동함수를 대입해도 계산된 에너지는 진짜 바닥 상태 에너지보다 <strong>절대 아래로 내려가지 않습니다</strong>. 계속 낮추기만 하면 반드시 정답에 도달합니다!</p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="cpu"></i> NISQ 시대의 구원투수</div>
                <p>노이즈가 많은 현대 양자 컴퓨터에서도 짧은 회로로 고전 컴퓨터와 손잡고 슈퍼컴퓨터를 능가하는 결과를 내는 가장 현실적인 알고리즘입니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 정리 · 결론 및 의미',
          title: '탐구 결론: 하이브리드 양자 컴퓨팅의 위력',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 오늘 확인한 핵심</div>
                <ul class="pres-list">
                  <li>양자 컴퓨터는 혼자 일하지 않고 슈퍼컴퓨터와 2인 3각으로 협력합니다.</li>
                  <li>VQE 알고리즘을 통해 복잡한 분자의 최저 에너지 구조를 정밀하게 찾아냈습니다.</li>
                </ul>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="flask-conical"></i> 계산 화학으로의 도약</div>
                <p>이제 화학자들은 위험한 폭발 실험을 하지 않고도 컴퓨터 속에서 양자 알고리즘으로 새로운 물질을 합성할 수 있습니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 정리 · 차시 예고',
          title: '3차시 학습 정리 및 4차시 탐구 예고',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="list-checks"></i> 3차시 배움 확인</div>
                <ul class="pres-list">
                  <li>✅ 양자(QPU)와 고전(CPU)의 2인 3각 VQE 구조 이해</li>
                  <li>✅ 에너지 골짜기 최적화 반복 수렴 과정 증명</li>
                  <li>✅ 변분 원리의 수학적 원리 체득</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 4차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[4차시] KAIST 계산 화학 연구실 속으로: 양자 컴퓨터로 그리는 화학 반응의 미래</strong><br>
                  "수소 분자가 결합할 때 생기는 에너지를 양자 코드로 직접 계산해 본다면?"<br>
                  👉 <strong>KAIST CPRL 연구실의 최첨단 계산화학 워크플로우</strong>를 직접 체험합니다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 4차시: KAIST 계산화학 워크플로우와 미래
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] KAIST 계산 화학 연구실 속으로: 양자 컴퓨터로 그리는 화학 반응의 미래',
      badge: '양자 4차시 · KAIST 계산화학 연구',
      slides: [
        {
          tag: '4차시 도입 · [9과16-01] [9과23-01]',
          title: 'KAIST 연구실 속으로: 양자 컴퓨터로 그리는 화학의 미래',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "화학자가 비커 대신 컴퓨터 코드로 분자를 합성한다면 인류의 미래는 어떻게 바뀔까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="terminal"></i> <strong>KAIST CPRL 파이썬 양자 계산 화학 워크플로우!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
                <ul class="pres-list">
                  <li>수소 분자(H₂)의 <strong>핵간 거리별 결합 에너지 곡선</strong>을 해석한다.</li>
                  <li>KAIST 연구실의 <strong>파이썬/Qiskit 양자 시뮬레이션</strong> 과정을 이해한다.</li>
                  <li>양자 알고리즘 개발자 및 <strong>계산화학자 진로</strong>를 구체적으로 탐색한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 도입 · 동기 유발',
          title: '가상 분자 실험실: 시험관 폭발 없는 완벽한 화학 실험!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="alert-octagon"></i> 전통 화학 실험의 한계</div>
                <ul class="pres-list">
                  <li>유독 가스 노출 및 폭발의 위험성</li>
                  <li>수개월~수년이 걸리는 시약 합성 시간과 막대한 비용</li>
                  <li>눈으로 볼 수 없는 나노초 단위 화학 결합 순간의 관찰 불가</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="code"></i> 양자 계산 화학의 혁명</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  분자 속 원자핵과 전자의 양자역학 방정식을 컴퓨터 코드로 풀어냅니다. 
                  원하는 성질의 약물 분자나 배터리 소재를 <strong>합성하기 전에 화면에서 미리 완벽히 검증</strong>합니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 준비 · 실물 실험도구',
          title: '4차시 탐구 준비물 안내 (파이썬 워크플로우 & 연구 시트)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('quantum_tools_4.jpg')}" alt="양자 4차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>KAIST CPRL 파이썬/주피터 양자 계산화학 연구 워크스테이션</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="laptop"></i></div>
                  <div>
                    <div class="pres-tool-name">스마트 노트북 / 주피터 인터페이스</div>
                    <div class="pres-tool-desc">Qiskit 양자 회로 및 분자 시뮬레이션 환경</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="trending-down"></i></div>
                  <div>
                    <div class="pres-tool-name">수소 분자 결합 포텐셜 에너지 곡선 차트</div>
                    <div class="pres-tool-desc">원자간 거리 R에 따른 결합 길이 분석표</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="microscope"></i></div>
                  <div>
                    <div class="pres-tool-name">KAIST CPRL 연구 논문 요약 시트</div>
                    <div class="pres-tool-desc">양자역학 기반 분자 광동역학 최신 성과물</div>
                  </div>
                </div>
                <div class="pres-tool-item quantum-accent">
                  <div class="pres-tool-item-icon"><i data-lucide="award"></i></div>
                  <div>
                    <div class="pres-tool-name">미래 양자 화학 연구자 포트폴리오</div>
                    <div class="pres-tool-desc">진로 프로젝트 기획 및 최종 탐구 활동지</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 준비 · 안전 및 연구 수칙',
          title: '디지털 연구 윤리 및 기기 관리 규칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield-check"></i></div>
                <div class="pres-safety-title">1. 전원선 발 걸림 주의</div>
                <div class="pres-safety-desc">
                  노트북 충전 케이블이 통로에 늘어지지 않도록 책상 정리를 철저히 합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="code-2"></i></div>
                <div class="pres-safety-title">2. 파이썬 코드 오탈자 점검</div>
                <div class="pres-safety-desc">
                  대소문자와 괄호 닫힘을 꼼꼼히 확인하고 에러 메시지를 침착하게 분석합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="book-open"></i></div>
                <div class="pres-safety-title">3. 연구 데이터 정직성</div>
                <div class="pres-safety-desc">
                  시뮬레이션에서 나온 수치를 임의로 수정하지 않고 있는 그대로 그래프에 기록합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 탐구 절차',
          title: '탐구 활동: 수소 분자(H₂) 결합 에너지 곡선 그리기',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">원자간 거리 R 설정</div>
                <p>두 수소 원자 사이의 거리 R을 0.2 Å부터 2.5 Å까지 0.1 단위로 변경하며 시뮬레이터를 가동합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">포텐셜 에너지 측정</div>
                <p>너무 가까우면 반발력으로 치솟고, 너무 멀어지면 결합이 풀리는 에너지 U자형 곡선을 도출합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">최적 결합 길이 도출</div>
                <p>에너지가 가장 깊게 떨어지는 최저점의 거리(R_eq)와 결합 에너지를 활동지 그래프에 마킹합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 탐구 기록 및 정답',
          title: '활동지 수소 분자 시뮬레이션 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>물리적 지표</th>
                    <th>이론값 / 실험값</th>
                    <th>양자 시뮬레이션 결과</th>
                    <th>과학적 해석 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>평형 결합 길이 (R_eq)</strong></td>
                    <td>0.74 Å (0.074 nm)</td>
                    <td><span class="pres-ans-badge">정답</span> <strong>0.741 Å</strong></td>
                    <td>두 원자핵과 전자의 인력과 반발력이 완벽한 균형을 이루는 가장 안정한 거리</td>
                  </tr>
                  <tr>
                    <td><strong>결합 해리 에너지</strong></td>
                    <td>약 4.75 eV</td>
                    <td><span class="pres-ans-badge">정답</span> <strong>4.748 eV</strong></td>
                    <td>결합을 끊기 위해 외부에서 가해주어야 하는 에너지 (양자 컴퓨터 오차 0.05% 이내)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 개념 원리',
          title: '핵심 개념: 포텐셜 에너지 곡선 (PES)과 화학 반응의 길목',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="mountain"></i> U자형 에너지 골짜기</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  원자 둘이 너무 가까워지면 양성자끼리 밀어내어 <strong>반발력 급증</strong>!<br>
                  너무 멀어지면 서로 잡지 못해 <strong>결합 분리</strong>!<br>
                  오직 <strong>0.74 Å 골짜기 바닥</strong>에 쏙 들어앉을 때 단단한 화학 결합이 완성됩니다.
                </p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="sparkles"></i> KAIST CPRL 연구의 힘</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  이 원리를 광합성 단백질 나노 안테나(LH2)와 첨단 OLED 소자에 적용하여, 
                  빛과 분자가 춤추는 초미세 순간을 세계 최초로 밝혀내고 있습니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 정리 · 결론 및 진로',
          title: '탐구 결론: 계산 화학자와 양자 엔지니어의 미래',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 미래 사회를 바꿀 3대 기술</div>
                <ul class="pres-list">
                  <li><strong>신약 혁명:</strong> 수만 종의 바이러스 변이 치료제를 수일 만에 설계</li>
                  <li><strong>상온 초전도체:</strong> 손실 없는 전력망과 자기부상열차 신소재 개발</li>
                  <li><strong>탄소 포집 촉매:</strong> 지구 온난화를 멈출 인공 광합성 공장 설계</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="compass"></i> 나의 진로 로드맵</div>
                <ul class="pres-list">
                  <li><strong>양자 소프트웨어 엔지니어:</strong> 큐비트 알고리즘을 코딩하는 개발자</li>
                  <li><strong>계산 광화학자:</strong> 빛과 분자의 움직임을 연구하는 과학자</li>
                  <li><strong>융합 나노과학자:</strong> 물리·화학·정보를 융합하는 미래 인재</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 정리 · 전체 패키지 마무리',
          title: '[양자 패키지 수료] 양자 컴퓨터와 계산 화학의 미래 완주!',
          content: `
            <div class="pres-card" style="text-align:center; padding:2rem;">
              <div style="font-size:3rem; margin-bottom:1rem;">⚛️</div>
              <h3 style="font-size:1.8rem; color:#c084fc; margin-bottom:1rem;">양자 컴퓨터와 계산 화학 탐구를 훌륭히 완주했습니다!</h3>
              <p style="font-size:1.2rem; line-height:1.8; color:#cbd5e1; max-width:700px; margin:0 auto 1.5rem auto;">
                비트와 큐비트의 중첩에서 출발하여, 3차원 블록 구, 양자와 고전의 2인 3각 VQE, 
                그리고 KAIST 연구실의 수소 분자 시뮬레이션까지 미래 과학의 지평을 활짝 열었습니다.
              </p>
              <div style="display:inline-flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
                <span class="badge" style="background:#3b0764; color:#e9d5ff; font-size:1rem; padding:0.6rem 1.2rem;">큐비트 & 블록 구 마스터</span>
                <span class="badge" style="background:#1e1b4b; color:#c7d2fe; font-size:1rem; padding:0.6rem 1.2rem;">VQE 양자 알고리즘 마스터</span>
                <span class="badge" style="background:#0f766e; color:#99f6e4; font-size:1rem; padding:0.6rem 1.2rem;">KAIST 양자계산화학 탐구 수료</span>
              </div>
            </div>
          `
        }
      ]
    }
  };
