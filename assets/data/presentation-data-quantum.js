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
    // Quantum 1차시: 슈퍼컴퓨터도 멈춰버린 분자의 세계: 원자 레고 퍼즐과 지수 폭발
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 슈퍼컴퓨터도 멈춰버린 분자의 세계: 원자 레고 퍼즐과 지수 폭발',
      badge: '양자 1차시 · 지수 폭발 & 한계',
      slides: [
        // Slide 1: 단독 질문형 표지
        {
          tag: '1차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:2.8rem 2rem; max-width:880px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.7;">
                  <span style="font-size:1.3rem; font-weight:700; color:#475569; display:block; margin-bottom:0.5rem;">[1차시] 슈퍼컴퓨터도 멈춰버린 분자의 세계</span>
                  <span style="font-size:1.65rem; font-weight:800; color:#0f172a; display:block; white-space:nowrap; letter-spacing:-0.5px;">원자 레고 퍼즐과 지수 폭발(2ᴺ)의 한계</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '1차시 도입 · 핵심 질문',
          title: '동기 유발: 체스판 쌀알과 슈퍼컴퓨터의 한계',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 체스판과 쌀알 퀴즈</div>
                <ul class="pres-list">
                  <li>첫 칸에 쌀 1톨, 둘째 칸에 2톨, 셋째 칸에 4톨... 2배씩 늘려가면?</li>
                  <li>마지막 64번째 칸에는 <strong>전 세계 수백 년치 쌀 수확량(1800경 톨)</strong>이 필요합니다!</li>
                  <li>이것이 바로 하나씩 늘어날 때마다 2배씩 곱해지는 <strong>'거듭제곱의 위력'</strong>입니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="cpu"></i> 오늘의 핵심 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "왜 세상에서 가장 비싼 슈퍼컴퓨터도 커피 한 잔 속 카페인 분자 하나를 계산하지 못할까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="zap"></i> <strong>분자 속 전자가 늘어날 때 터지는 지수 폭발(2ᴺ)의 비밀!</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '1차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-stack">
              <div class="pres-card" style="padding:2.2rem 2.5rem; max-width:820px; margin:0 auto; box-sizing:border-box;">
                <div class="pres-card-title" style="font-size:1.25rem; margin-bottom:1.4rem;"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list" style="font-size:1.12rem; line-height:2.0;">
                  <li>분자 속 전자가 증가함에 따라 계산 조합의 수가 <strong>2의 N제곱(2ᴺ)</strong>으로 폭발함을 분석한다.</li>
                  <li>카페인과 페니실린의 상태 수가 <strong>전 우주의 모든 원자 수(10⁸⁰)</strong>를 초과함을 이해한다.</li>
                  <li>신약 및 신소재 개발에서 왜 기존 슈퍼컴퓨터가 멈추고 <strong>양자 컴퓨터가 필요한지</strong> 탐구한다.</li>
                </ul>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 실습 준비물 카드
        {
          tag: '1차시 준비 · 실험 교구',
          title: '1차시 탐구 준비물',
          content: `
            <div class="pres-stack">
              <div class="pres-tools-4col">
                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_kit.jpg')}" alt="분자 모형 키트" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">분자 구조 모형 키트</strong>
                  <p class="tool-card-desc">수소·물·카페인 원자 결합 조립용</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_tablet.jpg')}" alt="지수 계산 태블릿" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">지수 계산 시뮬레이터</strong>
                  <p class="tool-card-desc">전자 수에 따른 2ᴺ 상태 수 계산 앱</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_grains.jpg')}" alt="쌀알 모형 교구" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">거듭제곱 체감 교구</strong>
                  <p class="tool-card-desc">지수 폭발 수치를 체감하는 비교 모형</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_worksheet1.jpg')}" alt="지수 폭발 탐구 활동지" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">지수 폭발 활동지</strong>
                  <p class="tool-card-desc">분자별 상태 수 및 계산 시간 분석지</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 관찰 및 안전 수칙
        {
          tag: '1차시 준비 · 안전 수칙',
          title: '교구 사용 및 모둠 협동 안전 규칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield"></i></div>
                <div class="pres-safety-title">1. 모형 부품 분실 방지</div>
                <div class="pres-safety-desc">
                  작은 결합선(본드)과 원자 구슬이 바닥에 떨어져 분실되지 않도록 트레이 안에서 조립합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="calculator"></i></div>
                <div class="pres-safety-title">2. 자리수 계산 주의</div>
                <div class="pres-safety-desc">
                  거듭제곱 계산 시 지수(N) 값이 커지면 계산기 화면에 지수 표기(E)가 나타나므로 단위에 유의합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">3. 모둠 협동 분석</div>
                <div class="pres-safety-desc">
                  분자별 전자 수를 분담하여 계산하고, 슈퍼컴퓨터의 한계 시간에 대해 의견을 나눕니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 탐구 3단계
        {
          tag: '1차시 전개 · 탐구 절차',
          title: '탐구 절차: 분자 조립 & 지수 폭발 수치 계산',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">분자 모형 조립</div>
                <p>수소(H), 물(H₂O), 카페인 분자 모형을 조립하며 원자핵 주위를 도는 <strong>전자(N)의 개수</strong>를 파악합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">2ᴺ 상태 수 계산</div>
                <p>전자 1개가 늘어날 때마다 상태 수가 2배씩 곱해지는 <strong>계산 상태 수(2ᴺ)</strong>를 활동지 표에 기록합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">소요 시간 비교</div>
                <p>세계 최고 슈퍼컴퓨터가 카페인과 페니실린 분자를 계산하는 데 걸리는 시간을 비교하고 한계를 분석합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 시뮬레이션 관찰 결과표
        {
          tag: '1차시 전개 · 결과 분석',
          title: '분자별 전자 수와 계산 상태 수(2ᴺ) 비교표',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:18%;">물질명</th>
                    <th style="width:16%;">화학식</th>
                    <th style="width:16%;">전자 수 (N)</th>
                    <th style="width:25%;">계산해야 할 상태 수 (2ᴺ)</th>
                    <th style="width:25%;">슈퍼컴퓨터 소요 시간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>수소 원자</strong></td>
                    <td>H</td>
                    <td>1개</td>
                    <td>2¹ = <strong>2 가지</strong></td>
                    <td>0.000001초 (즉시)</td>
                  </tr>
                  <tr>
                    <td><strong>물 분자</strong></td>
                    <td>H₂O</td>
                    <td>10개</td>
                    <td>2¹⁰ = <strong>1,024 가지</strong></td>
                    <td>약 0.001초 (즉시)</td>
                  </tr>
                  <tr>
                    <td><strong>카페인 분자</strong></td>
                    <td>C₈H₁₀N₄O₂</td>
                    <td>102개</td>
                    <td>2¹⁰² ≈ <strong>10³⁰ 가지</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#ea580c; font-size:0.95rem;">지구 모든 모래알(10²³) 초과! 수백 년 소요!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>페니실린(항생제)</strong></td>
                    <td>C₁₆H₁₈N₂O₄S</td>
                    <td>약 280개</td>
                    <td>2²⁸⁰ ≈ <strong>10⁸⁴ 가지</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#dc2626; font-size:0.95rem;">우주 원자 수(10⁸⁰) 초과! 우주 나이로도 불가!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG 지수 폭발 vs 우주 원자 수 비교 벡터 다이어그램
        {
          tag: '1차시 전개 · 과학 다이어그램',
          title: '기하급수적 지수 폭발(2ᴺ)과 물리적 한계',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:0.8rem 1.2rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', sans-serif;">
                  <defs>
                    <marker id="arrowX" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 0 1 L 9 5 L 0 9 z" fill="#64748b" />
                    </marker>
                    <marker id="arrowY" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <path d="M 1 10 L 5 1 L 9 10 z" fill="#dc2626" />
                    </marker>
                  </defs>

                  <!-- 축선 -->
                  <line x1="70" y1="180" x2="550" y2="180" stroke="#64748b" stroke-width="2" marker-end="url(#arrowX)" />
                  <line x1="70" y1="180" x2="70" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#arrowY)" />
                  <text x="540" y="200" font-size="12" font-weight="800" fill="#475569">전자 수 (N)</text>
                  <text x="50" y="22" font-size="12" font-weight="800" fill="#dc2626">상태 수 (2ᴺ)</text>

                  <!-- 지수 곡선 (수직으로 솟구침) -->
                  <path d="M 70 180 Q 220 178 300 130 T 420 30" fill="none" stroke="#dc2626" stroke-width="3.5" />
                  <text x="425" y="25" font-size="13" font-weight="900" fill="#dc2626">2ᴺ 지수 폭발 곡선</text>

                  <!-- 슈퍼컴퓨터 한계 수평선 -->
                  <line x1="70" y1="110" x2="520" y2="110" stroke="#475569" stroke-width="1.8" stroke-dasharray="4,4" />
                  <rect x="360" y="98" width="165" height="22" rx="4" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1" />
                  <text x="442" y="114" font-size="11" font-weight="800" fill="#334155" text-anchor="middle">슈퍼컴퓨터 계산 한계선</text>

                  <!-- 포인트들 -->
                  <!-- 1. 수소 -->
                  <circle cx="100" cy="179" r="4" fill="#2563eb" />
                  <text x="100" y="195" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">수소(1)</text>

                  <!-- 2. 물 -->
                  <circle cx="180" cy="176" r="4" fill="#2563eb" />
                  <text x="180" y="195" font-size="11" font-weight="700" fill="#334155" text-anchor="middle">물(10)</text>

                  <!-- 3. 카페인 -->
                  <circle cx="280" cy="145" r="5" fill="#ea580c" />
                  <line x1="280" y1="145" x2="280" y2="180" stroke="#cbd5e1" stroke-dasharray="2,2" />
                  <text x="280" y="140" font-size="11" font-weight="800" fill="#ea580c" text-anchor="middle">카페인 (10³⁰)</text>
                  <text x="280" y="195" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">102개</text>

                  <!-- 4. 페니실린 -->
                  <circle cx="390" cy="55" r="5" fill="#dc2626" />
                  <line x1="390" y1="55" x2="390" y2="180" stroke="#cbd5e1" stroke-dasharray="2,2" />
                  <text x="390" y="50" font-size="11" font-weight="900" fill="#dc2626" text-anchor="middle">페니실린 (10⁸⁴)</text>
                  <text x="390" y="195" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">280개</text>

                  <!-- 우측: 충격적 수치 비교 박스 -->
                  <g transform="translate(560, 20)">
                    <rect x="0" y="0" width="280" height="175" rx="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.2" />
                    <text x="140" y="28" font-size="14" font-weight="800" fill="#0f172a" text-anchor="middle">우주의 크기와 비교</text>
                    <line x1="15" y1="40" x2="265" y2="40" stroke="#e2e8f0" stroke-width="1" />
                    
                    <text x="20" y="66" font-size="12" font-weight="700" fill="#475569">• 지구 모든 모래알: 약 10²³개</text>
                    <text x="20" y="90" font-size="12" font-weight="700" fill="#ea580c">• 카페인 상태 수: 약 10³⁰가지</text>
                    <text x="20" y="116" font-size="12" font-weight="700" fill="#475569">• 전 우주 모든 원자: 약 10⁸⁰개</text>
                    <text x="20" y="140" font-size="12" font-weight="900" fill="#dc2626">• 페니실린 상태 수: 약 10⁸⁴가지</text>
                    
                    <rect x="15" y="150" width="250" height="20" rx="4" fill="#fee2e2" />
                    <text x="140" y="164" font-size="11" font-weight="800" fill="#991b1b" text-anchor="middle">인류 슈퍼컴퓨터로 완전 계산 불가!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">지수 폭발(Exponential Explosion)이란?</strong> 전자가 늘어날 때마다 계산해야 하는 미시세계 양자 상태 수가 2의 N제곱(2ᴺ)으로 기하급수적으로 폭발하는 물리적 현상
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 슈퍼컴퓨터의 벽과 파인만의 통찰
        {
          tag: '1차시 전개 · 핵심 원리',
          title: '슈퍼컴퓨터의 벽과 리처드 파인만의 통찰',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 계산해야 할 분자 상태 수 ] = 2ᴺ &nbsp;(N = 분자 속 전자 수)
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • <strong>0과 1의 고전 컴퓨터 한계:</strong> 1개씩 순서대로 계산하는 고전 비트 컴퓨터는 전자가 100개만 넘어가도 우주 나이(138억 년) 동안 계산해도 끝나지 않습니다.
                </p>
                <p class="pres-law-desc-p">
                  • <strong>리처드 파인만의 명언 (1981):</strong> <em>"자연은 고전적이지 않다. 자연을 시뮬레이션하고 싶다면 컴퓨터 자체를 양자역학의 법칙으로 만들어야 한다!"</em> ➔ <strong>양자 컴퓨터의 탄생!</strong>
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 1차시 핵심 배움 확인
        {
          tag: '1차시 정리 · 배움 확인',
          title: '1차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🔬</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">원자의 미시세계</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  원자핵 주위를 도는 수많은 전자들의 복잡한 반발력과 상호작용
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">💥</div>
                <strong style="font-size:1.2rem; color:#dc2626; display:block; margin-bottom:0.5rem;">지수 폭발 (2ᴺ)</strong>
                <p style="font-size:0.95rem; color:#991b1b; margin:0; line-height:1.6; word-break:keep-all;">
                  전자가 늘어날 때마다 계산 상태 수가 우주의 원자 수(10⁸⁰)를 아득히 초과함
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">⚛️</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">양자 컴퓨터의 필연성</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  복잡한 분자를 계산하기 위해 양자역학으로 작동하는 새로운 컴퓨터 필요
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는?
        {
          tag: '1차시 정리 · 차시 예고',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:920px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:1.15rem; font-weight:800; color:#7c3aed; margin-bottom:0.8rem;">
                  [2차시] 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.35rem; font-weight:800; color:#0f172a; display:block;">
                    "0 또는 1만 쓰는 컴퓨터의 한계를 어떻게 깨부술 수 있을까?"
                  </span>
                  <span style="font-size:1.35rem; font-weight:800; color:#7c3aed; display:block; margin-top:0.6rem;">
                    0과 1이 동시에 공존하는 신비로운 '양자 중첩'의 마법이 펼쳐집니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 2차시: 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트',
      badge: '양자 2차시 · 동전과 큐비트 중첩',
      slides: [
        // Slide 1: 단독 질문형 표지
        {
          tag: '2차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:280px;">
              <div class="pres-inquiry-box" style="padding:2.8rem 2rem; max-width:880px; width:100%; text-align:center; box-sizing:border-box;">
                <div class="inquiry-q" style="line-height:1.7;">
                  <span style="font-size:1.3rem; font-weight:700; color:#475569; display:block; margin-bottom:0.5rem;">[2차시] 0과 1이 동시에 춤추는 마법</span>
                  <span style="font-size:1.65rem; font-weight:800; color:#0f172a; display:block; white-space:nowrap; letter-spacing:-0.5px;">동전 팽이와 양자 큐비트: 양자 중첩과 동시 병렬 탐색</span>
                </div>
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '2차시 도입 · 핵심 질문',
          title: '동기 유발: 멈춘 동전 vs 팽이처럼 도는 동전',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="circle-dot"></i> 책상 위에 멈춘 동전 (고전 비트)</div>
                <ul class="pres-list">
                  <li>바닥에 가만히 누워 있는 동전은 <strong>앞면(0) 또는 뒷면(1)</strong> 중 딱 하나만 가집니다.</li>
                  <li>전등 스위치를 켜거나(ON) 끄는(OFF) 것과 완전히 같습니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="loader"></i> 빠르게 회전하는 동전 (양자 큐비트)</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  손으로 탁 덮기 전까지 도는 동전은 지금 앞면일까요, 뒷면일까요?<br>
                  <strong>앞면과 뒷면이 동시에 섞여 있는 '양자 중첩(Superposition)' 상태</strong>입니다!
                </p>
                <div class="pres-badge-box" style="margin-top:1rem;">
                  <i data-lucide="sparkles"></i> <strong>0과 1을 동시에 품는 양자의 기적이 시작됩니다!</strong>
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '2차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-stack">
              <div class="pres-card" style="padding:2.2rem 2.5rem; max-width:820px; margin:0 auto; box-sizing:border-box;">
                <div class="pres-card-title" style="font-size:1.25rem; margin-bottom:1.4rem;"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list" style="font-size:1.12rem; line-height:2.0;">
                  <li>바닥의 동전(고전 비트)과 도는 동전(양자 큐비트)을 비교하여 <strong>양자 중첩 현상</strong>을 설명한다.</li>
                  <li><strong>블로흐 구(Bloch Sphere) 모형</strong>을 통해 양자 상태와 관측에 의한 붕괴를 이해한다.</li>
                  <li>10개 큐비트가 1,024개 경로를 동시에 찾는 <strong>동시 병렬 처리의 위력</strong>을 분석한다.</li>
                </ul>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 실습 준비물 카드
        {
          tag: '2차시 준비 · 실험 교구',
          title: '2차시 탐구 준비물',
          content: `
            <div class="pres-stack">
              <div class="pres-tools-4col">
                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_coins.jpg')}" alt="양자 중첩 실험용 금속 동전" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">중첩 실험용 동전 교구</strong>
                  <p class="tool-card-desc">고전 비트 vs 양자 큐비트 회전 시연</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_tray.jpg')}" alt="동전 회전 안전 트레이" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">동전 회전 안전 트레이</strong>
                  <p class="tool-card-desc">동전 이탈을 방지하는 원형 패드</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_bloch.jpg')}" alt="블로흐 구 가상실험실 태블릿" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">블로흐 구 시뮬레이터</strong>
                  <p class="tool-card-desc">3차원 양자 상태 벡터 조작 앱</p>
                </div>

                <div class="pres-tool-card">
                  <div class="tool-img-box">
                    <img src="${getToolAsset('quantum_tool_worksheet2.jpg')}" alt="큐비트 탐구 활동지" class="tool-img-real">
                  </div>
                  <strong class="tool-card-title">큐비트 탐구 활동지</strong>
                  <p class="tool-card-desc">비트 vs 큐비트 비교 및 미로 분석지</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 관찰 및 안전 수칙
        {
          tag: '2차시 준비 · 안전 수칙',
          title: '동전 회전 및 양자 시뮬레이션 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="coins"></i></div>
                <div class="pres-safety-title">1. 동전 튕김 주의</div>
                <div class="pres-safety-desc">
                  동전을 너무 세게 돌려 바깥으로 튕겨 나가지 않도록 트레이 안쪽에서 부드럽게 스핀을 줍니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="hand"></i></div>
                <div class="pres-safety-title">2. 손바닥 측정 주의</div>
                <div class="pres-safety-desc">
                  돌아가는 동전을 멈출 때 손톱에 부딪히지 않도록 손바닥 면 전체로 가볍게 덮어 측정합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="eye"></i></div>
                <div class="pres-safety-title">3. 디지털 시뮬레이션</div>
                <div class="pres-safety-desc">
                  가상실험실에서 3D 블로흐 구를 천천히 드래그하여 적도 지점의 확률 변화를 세심하게 관찰합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 탐구 3단계
        {
          tag: '2차시 전개 · 탐구 절차',
          title: '탐구 절차: 동전 회전 실험 & 블로흐 구 시뮬레이션',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">동전 팽이 회전 (중첩)</div>
                <p>동전을 돌리며 0(앞)과 1(뒤)이 섞인 <strong>중첩</strong>을 관찰하고, 손으로 덮어 <strong>측정(붕괴)</strong>을 체험합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">블로흐 구면 조작</div>
                <p>북극(|0⟩), 남극(|1⟩), 그리고 둘이 정확히 50:50으로 섞인 <strong>적도면 중첩 벡터</strong>를 조작합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">동시 병렬 처리 비교</div>
                <p>큐비트 10개가 1,024개의 모든 미로 갈래 길을 <strong>단 한 번에 동시에 탐색</strong>하는 위력을 분석합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 관찰 결과표
        {
          tag: '2차시 전개 · 결과 분석',
          title: '비트(Bit) vs 큐비트(Qubit) 비교 관찰표',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:24%;">비교 항목</th>
                    <th style="width:38%;">고전 비트 (Bit)</th>
                    <th style="width:38%;">양자 큐비트 (Qubit)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>동전 비유</strong></td>
                    <td>바닥에 가만히 누워 있는 동전</td>
                    <td>책상 위에서 팽이처럼 빠르게 도는 동전</td>
                  </tr>
                  <tr>
                    <td><strong>정보의 표현 상태</strong></td>
                    <td>0 또는 1 중 <strong>단 한 개만</strong> 선택</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:0.95rem;">0과 1이 둘 다 동시에 섞인 '중첩(Superposition)'!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>10개 사용 시 정보 탐색</strong></td>
                    <td>1,024개 길 중 <strong>1개씩 순서대로</strong> 검사</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:0.95rem;">1,024개 모든 경로를 '단 한 번에 동시에' 탐색!</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG 고전 비트 vs 양자 큐비트(블로흐 구면) 벡터 다이어그램
        {
          tag: '2차시 전개 · 과학 다이어그램',
          title: '고전 비트(스위치) vs 양자 큐비트(블로흐 구)',
          content: `
            <div class="pres-stack pres-spectrum-stack">
              <div class="pres-spectrum-img-card" style="padding:0.8rem 1.2rem;">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="max-height:240px; display:block; font-family:'Pretendard', sans-serif;">
                  <!-- 고전 비트 (좌측) -->
                  <g transform="translate(30, 15)">
                    <rect x="0" y="0" width="230" height="185" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
                    <text x="115" y="28" font-size="13" font-weight="800" fill="#334155" text-anchor="middle">고전 비트 (Bit)</text>
                    
                    <!-- 스위치 모형 -->
                    <rect x="65" y="45" width="100" height="40" rx="20" fill="#e2e8f0" />
                    <circle cx="85" cy="65" r="16" fill="#64748b" />
                    <text x="85" y="70" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">0</text>
                    <text x="145" y="70" font-size="12" font-weight="800" fill="#94a3b8" text-anchor="middle">1</text>
                    
                    <text x="115" y="115" font-size="12.5" font-weight="800" fill="#334155" text-anchor="middle">0 또는 1 중 딱 하나</text>
                    <text x="115" y="138" font-size="11.5" font-weight="700" fill="#64748b" text-anchor="middle">바닥에 누운 동전</text>
                    <rect x="25" y="150" width="180" height="22" rx="4" fill="#e2e8f0" />
                    <text x="115" y="165" font-size="11" font-weight="800" fill="#475569" text-anchor="middle">1개씩 순서대로 계산</text>
                  </g>

                  <!-- 중앙: 회전 동전 (중첩) -->
                  <g transform="translate(290, 15)">
                    <rect x="0" y="0" width="240" height="185" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2" />
                    <text x="120" y="28" font-size="13" font-weight="800" fill="#1d4ed8" text-anchor="middle">회전 동전 (중첩 상태)</text>
                    
                    <!-- 팽이 회전 동전 모형 -->
                    <ellipse cx="120" cy="75" rx="45" ry="25" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5" />
                    <path d="M 95 65 Q 120 50 145 65" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,2" />
                    <text x="120" y="80" font-size="15" font-weight="900" fill="#1d4ed8" text-anchor="middle">0 &amp; 1</text>
                    
                    <text x="120" y="120" font-size="12.5" font-weight="800" fill="#1e40af" text-anchor="middle">앞면과 뒷면의 공존</text>
                    <text x="120" y="140" font-size="11.5" font-weight="700" fill="#3b82f6" text-anchor="middle">손으로 덮기 전까지 중첩!</text>
                    <rect x="30" y="150" width="180" height="22" rx="4" fill="#dbeafe" />
                    <text x="120" y="165" font-size="11" font-weight="800" fill="#1d4ed8" text-anchor="middle">측정 순간 0 또는 1로 붕괴</text>
                  </g>

                  <!-- 우측: 블로흐 구 (Bloch Sphere) -->
                  <g transform="translate(560, 15)">
                    <rect x="0" y="0" width="270" height="185" rx="12" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="2" />
                    <text x="135" y="28" font-size="13" font-weight="800" fill="#6d28d9" text-anchor="middle">블로흐 구 (Bloch Sphere)</text>
                    
                    <!-- 3D 구면 -->
                    <circle cx="135" cy="95" r="45" fill="#ffffff" stroke="#8b5cf6" stroke-width="1.8" />
                    <ellipse cx="135" cy="95" rx="45" ry="14" fill="none" stroke="#c4b5fd" stroke-width="1.2" stroke-dasharray="3,3" />
                    <line x1="135" y1="45" x2="135" y2="145" stroke="#8b5cf6" stroke-width="1.5" />
                    
                    <!-- 북극 |0>, 남극 |1>, 적도 화살표 -->
                    <text x="135" y="44" font-size="11" font-weight="900" fill="#6d28d9" text-anchor="middle">북극 |0⟩</text>
                    <text x="135" y="156" font-size="11" font-weight="900" fill="#6d28d9" text-anchor="middle">남극 |1⟩</text>
                    <line x1="135" y1="95" x2="165" y2="78" stroke="#dc2626" stroke-width="2.5" />
                    <circle cx="165" cy="78" r="3" fill="#dc2626" />
                    <text x="175" y="78" font-size="10" font-weight="800" fill="#dc2626">|ψ⟩</text>

                    <rect x="25" y="152" width="220" height="22" rx="4" fill="#ede9fe" />
                    <text x="135" y="167" font-size="11" font-weight="800" fill="#5b21b6" text-anchor="middle">적도면 = 50:50 완벽한 중첩!</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">양자 중첩이란?</strong> 측정하기 전까지는 0과 1의 상태가 확률적으로 동시에 공존하며, 3차원 블로흐 구면 위의 모든 연속적 각도를 표현할 수 있는 양자의 성질
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 동시 병렬 처리의 힘
        {
          tag: '2차시 전개 · 핵심 원리',
          title: '미로 찾기 비유: 순차 탐색 vs 동시 병렬 탐색',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 10개 큐비트 동시 표현 상태 ] = 2¹⁰ = 1,024개 경로 동시 탐색!
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • <strong>고전 컴퓨터 (순차 탐색):</strong> 복잡한 미로를 풀 때 한 갈래 길씩 가보고, 벽에 부딪히면 되돌아 나오는 과정을 1,024번 반복해야 합니다.
                </p>
                <p class="pres-law-desc-p">
                  • <strong>양자 컴퓨터 (동시 병렬 탐색):</strong> 중첩의 힘으로 1,024명의 분신이 <strong>모든 갈래 길로 동시에 한꺼번에 쏟아져 들어가</strong> 막힘없이 최단 출구를 즉시 찾아냅니다!
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 2차시 핵심 배움 확인
        {
          tag: '2차시 정리 · 배움 확인',
          title: '2차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🪙</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">양자 중첩</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  0과 1이 동시에 섞여 있는 회전 동전 팽이 상태
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🌐</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">블로흐 구면</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  3차원 구면 위에서 자유롭게 각도를 조작하고 관측 시 붕괴
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">⚡</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">동시 병렬 처리</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  1,024개 모든 미로 경로를 단 한 번에 동시에 탐색
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 다음 시간에는?
        {
          tag: '2차시 정리 · 차시 예고',
          title: '다음 시간에는?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-inquiry-box" style="padding:3.2rem 2rem; max-width:920px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:1.15rem; font-weight:800; color:#2563eb; margin-bottom:0.8rem;">
                  [3차시] 환상의 2인 3각 달리기: VQE 알고리즘과 화학 결합의 바닥 상태
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.35rem; font-weight:800; color:#0f172a; display:block;">
                    "안개 자욱한 산에서 가장 깊은 골짜기(최저 에너지)를 어떻게 찾아낼까?"
                  </span>
                  <span style="font-size:1.35rem; font-weight:800; color:#2563eb; display:block; margin-top:0.6rem;">
                    양자 컴퓨터와 일반 컴퓨터가 발을 묶고 함께 달리는 기적의 VQE 알고리즘이 공개됩니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 3차시: 2인 3각 VQE 알고리즘과 바닥 상태
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 환상의 2인 3각 달리기: VQE 알고리즘과 화학 결합의 바닥 상태',
      badge: '양자 3차시 · VQE 하이브리드 알고리즘',
      slides: [
        // Slide 1: 단독 표지
        {
          tag: '3차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-single-cover">
              <div class="pres-cover-tag">QUANTUM COMPUTING MODULE · SESSION 03</div>
              <div class="pres-cover-q">
                "안개 자욱한 산에서 가장 깊은 골짜기(최저 에너지 바닥 상태)를 어떻게 찾아낼까?"
              </div>
              <div class="pres-cover-sub">
                양자 컴퓨터와 일반 컴퓨터가 발을 묶고 함께 달리는 기적의 VQE 하이브리드 알고리즘
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '3차시 도입 · 핵심 질문',
          title: '안개 속 골짜기 찾기: 눈을 가린 사람과 드론의 2인 3각',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="mountain"></i> 자연의 법칙: 최저 에너지 바닥 상태</div>
                <ul class="pres-list">
                  <li>언덕 위 공이 아래로 굴러떨어지듯, 모든 분자는 에너지가 가장 낮은 <strong>바닥 상태(Ground State)</strong>에 도달할 때 가장 편안하고 안정하게 결합합니다.</li>
                  <li>하지만 수십 개 전자가 서로 밀어내는 복잡한 분자는 골짜기가 어디에 있는지 계산하기가 불가능에 가깝습니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="users"></i> 환상의 2인 3각 팀워크 (VQE)</div>
                <p style="font-size:1.12rem; line-height:1.8; color:#1e40af; margin:0;">
                  <strong>양자 컴퓨터 (QPU):</strong> 초고속 양자 중첩으로 현재 위치의 분자 에너지를 찰나의 순간에 측정!<br>
                  <strong>고전 컴퓨터 (CPU):</strong> 측정값을 분석하여 "오른쪽으로 3도 더 내려가!" 방향을 지시!<br>
                  둘이 발을 묶고 피드백을 반복하여 <strong>최저 에너지 바닥 상태</strong>를 찾아냅니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '3차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🤝</div>
                <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.5rem;">역할 분담 이해</strong>
                <p style="font-size:0.92rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  양자 컴퓨터(QPU)와 일반 슈퍼컴퓨터(CPU)의 상호 보완적 2인 3각 역할을 구체적으로 설명한다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🔄</div>
                <strong style="font-size:1.15rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">VQE 피드백 루프</strong>
                <p style="font-size:0.92rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  골짜기 지형도 모델과 인터랙티브 시뮬레이터를 통해 파라미터가 최저 에너지로 수렴하는 과정을 추론한다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">📐</div>
                <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.5rem;">변분 원리 체득</strong>
                <p style="font-size:0.92rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  계산된 에너지가 실제 바닥 상태보다 항상 크거나 같다는 양자역학의 수학적 안전장치를 이해한다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 준비물 카드
        {
          tag: '3차시 준비 · 탐구 도구',
          title: '탐구 준비물 안내 (2인 3각 교구 & 시뮬레이터)',
          content: `
            <div class="pres-tools-4col">
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="link"></i></div>
                <div class="pres-tool-name">2인 3각 협력 밴드</div>
                <div class="pres-tool-desc">QPU와 CPU 발을 묶는 벨크로 스트랩</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="mountain"></i></div>
                <div class="pres-tool-name">3D 에너지 지형도 매트</div>
                <div class="pres-tool-desc">포텐셜 에너지 골짜기 최적화 탐색 판</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="tablet"></i></div>
                <div class="pres-tool-name">VQE 수렴 시뮬레이터</div>
                <div class="pres-tool-desc">각도(θ)별 에너지 하강 곡선 관찰 태블릿</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="clipboard-list"></i></div>
                <div class="pres-tool-name">VQE 수렴 기록 활동지</div>
                <div class="pres-tool-desc">회차별 각도 및 최저 에너지 기록표</div>
              </div>
            </div>
          `
        },

        // Slide 5: 안전 및 활동 수칙
        {
          tag: '3차시 준비 · 활동 수칙',
          title: '2인 3각 협력 및 시뮬레이터 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="shield-alert"></i></div>
                <div class="pres-safety-title">1. 발 걸림 및 넘어짐 방지</div>
                <div class="pres-safety-desc">
                  2인 3각 역할극 시 교실 통로의 가방과 의자를 정돈하고, 절대 뛰지 않으며 천천히 호흡을 맞춰 걷습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">2. QPU와 CPU 구령 일치</div>
                <div class="pres-safety-desc">
                  양자 역할(에너지 측정)과 고전 컴퓨터 역할(각도 조정)이 "하나, 둘" 신호를 교환하며 협동합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="line-chart"></i></div>
                <div class="pres-safety-title">3. 수렴 수치 정밀 기록</div>
                <div class="pres-safety-desc">
                  시뮬레이터에서 반복 회차가 늘어남에 따라 에너지가 바닥에 수렴(-1.137 Hartree)하는 수치를 정밀히 기록합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: VQE 최적화 3단계
        {
          tag: '3차시 전개 · 탐구 단계',
          title: 'VQE 2인 3각 하이브리드 최적화 3단계',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">초기 각도(파라미터) 설정</div>
                <p>고전 컴퓨터(CPU)가 임의의 초기 회전 각도(θ)를 생성하여 양자 칩(QPU)으로 보냅니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">양자 회로 에너지 측정</div>
                <p>QPU가 큐비트 중첩 상태를 만들고, 해당 상태의 분자 기대 에너지값(⟨H⟩)을 찰나에 측정하여 CPU로 전달합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">각도 업데이트 & 골짜기 도달</div>
                <p>CPU가 더 낮은 에너지를 향해 각도를 미세 수정하며 루프를 20회 반복, 최저 바닥 상태에 안착합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 관찰/시뮬레이션 결과표
        {
          tag: '3차시 전개 · 실험 결과',
          title: '활동지 VQE 수렴 기록표 (클릭하여 정답 확인)',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:22%;">반복 회수 (Iteration)</th>
                    <th style="width:24%;">회전 각도 (θ)</th>
                    <th style="width:27%;">계산된 에너지 (Hartree)</th>
                    <th style="width:27%;">시스템 상태 및 판정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1회차 (초기 상태)</strong></td>
                    <td>0.00 rad</td>
                    <td>-0.850 Hartree</td>
                    <td>높은 산 중턱 (불안정 상태)</td>
                  </tr>
                  <tr>
                    <td><strong>10회차 (중간 탐색)</strong></td>
                    <td>0.54 rad</td>
                    <td>-1.100 Hartree</td>
                    <td>에너지 경사면 하강 중</td>
                  </tr>
                  <tr>
                    <td><strong>20회차 (최적 수렴)</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭</span>
                        <span class="pres-reveal-content">0.785 rad</span>
                      </div>
                    </td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭</span>
                        <span class="pres-reveal-content"><strong>-1.137 Hartree</strong></span>
                      </div>
                    </td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭</span>
                        <span class="pres-reveal-content"><strong>바닥 상태(최저 에너지) 도달!</strong></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG 과학 벡터 다이어그램
        {
          tag: '3차시 전개 · 과학 원리 다이어그램',
          title: 'VQE 하이브리드 피드백 루프 & 에너지 골짜기 메커니즘',
          content: `
            <div class="pres-diagram-container">
              <div class="pres-svg-wrap">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="display:block; max-height:240px; margin:0 auto; font-family:'Pretendard', sans-serif;">
                  <defs>
                    <linearGradient id="vqeLoopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#eff6ff" />
                      <stop offset="100%" stop-color="#dbeafe" />
                    </linearGradient>
                    <linearGradient id="vqeQpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#f5f3ff" />
                      <stop offset="100%" stop-color="#ede9fe" />
                    </linearGradient>
                    <marker id="vqeArrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                      <path d="M 0 0 L 8 4 L 0 8 Z" fill="#2563eb" />
                    </marker>
                    <marker id="vqeArrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                      <path d="M 0 0 L 8 4 L 0 8 Z" fill="#7c3aed" />
                    </marker>
                  </defs>

                  <!-- 좌측 영역: VQE 2인 3각 하이브리드 루프 (x: 15 ~ 440) -->
                  <g transform="translate(15, 10)">
                    <rect x="0" y="0" width="415" height="195" rx="12" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5" />
                    <text x="207" y="24" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">VQE 하이브리드 최적화 루프 (QPU ↔ CPU)</text>

                    <!-- CPU 박스 (상단) -->
                    <rect x="25" y="42" width="365" height="50" rx="8" fill="url(#vqeLoopGrad)" stroke="#3b82f6" stroke-width="1.8" />
                    <text x="40" y="64" font-size="12" font-weight="900" fill="#1d4ed8">고전 컴퓨터 (CPU)</text>
                    <text x="40" y="82" font-size="11" font-weight="700" fill="#3b82f6">파라미터(θ) 업데이트 · 경사면 하강 최적화 알고리즘</text>

                    <!-- QPU 박스 (하단) -->
                    <rect x="25" y="128" width="365" height="52" rx="8" fill="url(#vqeQpuGrad)" stroke="#8b5cf6" stroke-width="1.8" />
                    <text x="40" y="150" font-size="12" font-weight="900" fill="#6d28d9">양자 프로세서 (QPU)</text>
                    <text x="40" y="168" font-size="11" font-weight="700" fill="#7c3aed">양자 회로 상태 생성 |ψ(θ)⟩ · 에너지 기댓값 ⟨H⟩ 초고속 측정</text>

                    <!-- 루프 화살표 1: CPU -> QPU (오른쪽 하강) -->
                    <path d="M 330 92 L 330 120" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#vqeArrowBlue)" />
                    <text x="340" y="110" font-size="10.5" font-weight="800" fill="#2563eb">θ 전달</text>

                    <!-- 루프 화살표 2: QPU -> CPU (왼쪽 상승) -->
                    <path d="M 85 128 L 85 100" fill="none" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#vqeArrowPurple)" />
                    <text x="95" y="116" font-size="10.5" font-weight="800" fill="#7c3aed">⟨H⟩ 피드백</text>
                  </g>

                  <!-- 우측 영역: 포텐셜 에너지 골짜기 지형도 (x: 445 ~ 845) -->
                  <g transform="translate(445, 10)">
                    <rect x="0" y="0" width="400" height="195" rx="12" fill="#fafafa" stroke="#e2e8f0" stroke-width="1.5" />
                    <text x="200" y="24" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">에너지 지형도와 바닥 상태 (Ground State)</text>

                    <!-- 축선 -->
                    <line x1="45" y1="165" x2="370" y2="165" stroke="#94a3b8" stroke-width="1.5" />
                    <line x1="45" y1="35" x2="45" y2="165" stroke="#94a3b8" stroke-width="1.5" />
                    <text x="370" y="180" font-size="11" font-weight="700" fill="#64748b" text-anchor="end">각도 파라미터 (θ) →</text>
                    <text x="45" y="32" font-size="11" font-weight="700" fill="#64748b">에너지 E(θ) ↑</text>

                    <!-- U자형 포텐셜 곡선 -->
                    <path d="M 60 55 Q 195 185 350 65" fill="none" stroke="#059669" stroke-width="3" />

                    <!-- 초기 상태 (1회차) -->
                    <circle cx="95" cy="80" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="1.5" />
                    <text x="108" y="76" font-size="10.5" font-weight="800" fill="#ef4444">1회차 (-0.85H)</text>

                    <!-- 10회차 (중간) -->
                    <circle cx="150" cy="120" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1.5" />
                    <path d="M 103 85 Q 125 105 145 118" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2" />

                    <!-- 최저 바닥 상태 (20회차) -->
                    <circle cx="205" cy="142" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2" />
                    <text x="205" y="160" font-size="11" font-weight="900" fill="#047857" text-anchor="middle">★ 바닥 상태 (-1.137H)</text>

                    <!-- 변분 원리 점선 기준선 -->
                    <line x1="45" y1="142" x2="370" y2="142" stroke="#10b981" stroke-width="1.2" stroke-dasharray="4,3" />
                    <rect x="230" y="42" width="150" height="24" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1" />
                    <text x="305" y="58" font-size="10.5" font-weight="800" fill="#047857" text-anchor="middle">변분 원리: E(θ) ≥ E_바닥</text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">VQE (변분 양자 고유값 솔버)란?</strong> 복잡한 양자 상태의 에너지는 양자 컴퓨터(QPU)가 빠르게 측정하고, 최적의 각도 파라미터는 일반 컴퓨터(CPU)가 보정하며 함께 가장 낮은 에너지 바닥 상태를 찾아내는 하이브리드 알고리즘
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 핵심 원리 & 수식
        {
          tag: '3차시 전개 · 핵심 원리',
          title: '변분 원리(Variational Principle)와 바닥 상태',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 양자역학의 변분 원리 공식 ] : E(θ) ≥ E(실제 바닥 상태 에너지)
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • <strong>수학적 안전장치:</strong> 임의로 만든 가짜 파동함수로 에너지를 계산해도, 그 값은 자연계의 진짜 최저 에너지보다 <strong>절대 아래로 내려갈 수 없습니다</strong>. 따라서 컴퓨터가 에너지를 낮추기만 하면 반드시 진실의 바닥 상태에 수렴합니다!
                </p>
                <p class="pres-law-desc-p">
                  • <strong>NISQ 시대의 구원투수:</strong> 잡음(Noise)이 있는 현재 양자 컴퓨터에서도 짧은 회로만 가동하고 복잡한 최적화는 슈퍼컴퓨터가 맡아 가장 실용적으로 작동하는 화학 시뮬레이션 기술입니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 핵심 배움 확인
        {
          tag: '3차시 정리 · 배움 확인',
          title: '3차시 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🤝</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">2인 3각 하이브리드</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  QPU(에너지 측정)와 CPU(파라미터 보정)의 상호 피드백
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">⛰️</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">최저 바닥 상태</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  자연계 분자가 가장 편안하게 안정되는 에너지 골짜기 도달
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🛡️</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">변분 원리의 안전성</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  E(θ) ≥ E_0 보장으로 지속적 하강 시 무조건 최적해 보장
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
                  [4차시] 지구를 구하는 틴에이저 양자 화학 스타트업 CEO 프로젝트
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.35rem; font-weight:800; color:#0f172a; display:block;">
                    "비커와 시험관 없이, 양자 컴퓨터로 지구의 미래를 구할 수 있을까?"
                  </span>
                  <span style="font-size:1.35rem; font-weight:800; color:#2563eb; display:block; margin-top:0.6rem;">
                    친환경 상온 비료, 전고체 배터리, 표적 신약을 직접 기획하는 스타트업 CEO가 되어봅니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Quantum 4차시: 틴에이저 양자 화학 스타트업 CEO 프로젝트
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] 지구를 구하는 틴에이저 양자 화학 스타트업 CEO 프로젝트',
      badge: '양자 4차시 · 스타트업 CEO 프로젝트',
      slides: [
        // Slide 1: 단독 표지
        {
          tag: '4차시 · 질문',
          title: '이번 시간에는?',
          content: `
            <div class="pres-single-cover">
              <div class="pres-cover-tag">QUANTUM COMPUTING MODULE · SESSION 04</div>
              <div class="pres-cover-q">
                "비커와 시험관 없이, 양자 컴퓨터로 지구의 미래를 구할 수 있을까?"
              </div>
              <div class="pres-cover-sub">
                인류 3대 지구 난제를 해결하는 틴에이저 양자 화학 스타트업 CEO 프로젝트
              </div>
            </div>
          `
        },

        // Slide 2: 동기 유발 & 핵심 질문
        {
          tag: '4차시 도입 · 핵심 질문',
          title: '비커 없는 실험실: 컴퓨터 속에서 분자를 창조하다',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="alert-octagon"></i> 전통 화학 실험의 한계</div>
                <ul class="pres-list">
                  <li>수만 번의 반복 합성 실험, 유독 물질 취급 및 고온·고압 폭발 위험</li>
                  <li>신물질 개발에 10년 이상의 시간과 수천억~수조 원의 막대한 비용 소모</li>
                  <li>나노초 단위로 일어나는 화학 반응 전이상태(Transition State) 관찰 불가능</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="sparkles"></i> 양자 가상 실험실 (In Silico)</div>
                <p style="font-size:1.12rem; line-height:1.8; color:#1e40af; margin:0;">
                  분자 속 전자들의 양자역학적 상호작용을 큐비트 알고리즘으로 100% 정밀 시뮬레이션합니다. 
                  비커 한 방울 없이 컴퓨터 화면 속에서 <strong>원하는 분자를 하루 만에 가상 합성하고 성능을 검증</strong>합니다!
                </p>
              </div>
            </div>
          `
        },

        // Slide 3: 학습 목표
        {
          tag: '4차시 도입 · 학습 목표',
          title: '오늘의 학습 목표',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🌍</div>
                <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.5rem;">3대 지구 난제 분석</strong>
                <p style="font-size:0.92rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  친환경 비료, 전고체 배터리, 표적 신약 개발에 가로놓인 화학 결합의 과학적 난제를 분석한다.
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">💡</div>
                <strong style="font-size:1.15rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">가상 분자 설계</strong>
                <p style="font-size:0.92rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  양자 컴퓨터 시뮬레이션을 통해 촉매, 전해질, 항암 분자를 가상으로 설계하는 아이디어를 도출한다.
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🚀</div>
                <strong style="font-size:1.15rem; color:#0f172a; display:block; margin-bottom:0.5rem;">CEO 창업 기획 발표</strong>
                <p style="font-size:0.92rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  탄소 중립 및 인류 복지에 기여하는 양자 스타트업 기획서를 작성하고 동료 평가를 수행한다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 4: 4열 준비물 카드
        {
          tag: '4차시 준비 · 탐구 도구',
          title: '탐구 준비물 안내 (스타트업 창업 패키지)',
          content: `
            <div class="pres-tools-4col">
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="file-spreadsheet"></i></div>
                <div class="pres-tool-name">스타트업 창업 기획서</div>
                <div class="pres-tool-desc">회사명, 분자 아이디어, 기대 효과 양식</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="globe"></i></div>
                <div class="pres-tool-name">3대 난제 팩트시트</div>
                <div class="pres-tool-desc">비료/배터리/신약 최신 화학 데이터 카드</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="laptop"></i></div>
                <div class="pres-tool-name">분자 모델링 스마트 패드</div>
                <div class="pres-tool-desc">3D 화학 결합 및 구조 시각화 태블릿</div>
              </div>
              <div class="pres-tool-card">
                <div class="pres-tool-icon"><i data-lucide="award"></i></div>
                <div class="pres-tool-name">모둠 투자 심사 평가표</div>
                <div class="pres-tool-desc">과학적 타당성 및 생태전환 루브릭 시트</div>
              </div>
            </div>
          `
        },

        // Slide 5: 안전 및 활동 수칙
        {
          tag: '4차시 준비 · 활동 수칙',
          title: '모둠 토의 및 스타트업 IR 피칭 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="users-2"></i></div>
                <div class="pres-safety-title">1. 역할 분담과 경청</div>
                <div class="pres-safety-desc">
                  대표 CEO, 수석 양자화학자, ESG 가치 평가자 등 모둠원 모두가 1개 이상의 전문 역할을 맡아 경청합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="check-square"></i></div>
                <div class="pres-safety-title">2. 과학적 근거 기반 설계</div>
                <div class="pres-safety-desc">
                  단순한 상상이 아닌, 1~3차시에서 배운 전자 반발력, 큐비트 중첩, 바닥 상태 원리를 접목하여 기획합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="leaf"></i></div>
                <div class="pres-safety-title">3. 생태전환 가치 연계</div>
                <div class="pres-safety-desc">
                  설계한 가상 분자가 전 세계 탄소 배출 저감, 식량난 해결, 질병 극복에 어떤 사회적 파급효과를 주는지 명시합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 스타트업 CEO 프로젝트 3단계
        {
          tag: '4차시 전개 · 탐구 단계',
          title: '스타트업 CEO 프로젝트 3단계 워크플로우',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">지구 난제 선택 & 원인 분석</div>
                <p>3대 난제(친환경 비료 / 전고체 배터리 / 표적 신약) 중 1개를 택해 기존 화학 기술의 한계를 분석합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">양자 가상 분자 설계</div>
                <p>양자 컴퓨터 가상 합성으로 삼중 결합을 끊을 촉매, 리튬 이동 경로 고체 전해질, 맞춤 항암 분자를 도출합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">IR 피칭 & 투자 심사</div>
                <p>작성된 기획서를 발표하고 다른 모둠의 스타트업에 투자 점수를 부여하는 3차원 루브릭 평가를 진행합니다.</p>
              </div>
            </div>
          `
        },

        // Slide 7: 기획서 표준 템플릿 및 모범 사례
        {
          tag: '4차시 전개 · 프로젝트 기획',
          title: '스타트업 CEO 기획서 표준 템플릿 (클릭하여 모범 사례 확인)',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:25%;">기획서 항목</th>
                    <th style="width:75%;">작성 내용 및 모범 답안 예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>스타트업 회사명 & 대표</strong></td>
                    <td><strong>퀀텀 카탈리스트 (Quantum Catalyst)</strong> / 대표: 이양자 (양자계산화학 모둠)</td>
                  </tr>
                  <tr>
                    <td><strong>해결할 지구 난제</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭하여 확인</span>
                        <span class="pres-reveal-content">
                          <strong>[친환경 상온 비료 합성 촉매]:</strong> 400℃ 고온과 200기압을 쓰는 하버-보슈 공정을 대체하여 전 세계 전력의 2% 소비 절감
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>양자 가상 분자 아이디어</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭하여 확인</span>
                        <span class="pres-reveal-content">
                          뿌리혹박테리아 질소고정효소 활성 중심인 <strong>철-몰리브덴(Fe-Mo) 클러스터</strong> 전자 구조를 양자 시뮬레이션하여 상온에서도 질소(N₂) 삼중 결합을 끊는 인공 유기금속 촉매 설계
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>사회·생태적 기대 효과</strong></td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <span class="pres-reveal-hint">클릭하여 확인</span>
                        <span class="pres-reveal-content">
                          전 세계 온실가스 1.5% 감축, 저개발국에 값싸고 안전한 친환경 비료를 공급하여 <strong>기후 위기 극복 및 인류 기아 문제 해결</strong>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 인라인 SVG 과학 벡터 다이어그램
        {
          tag: '4차시 전개 · 과학 원리 다이어그램',
          title: '인류 3대 난제 해결을 위한 양자 화학 가상 실험실 구조',
          content: `
            <div class="pres-diagram-container">
              <div class="pres-svg-wrap">
                <svg viewBox="0 0 860 215" width="100%" height="100%" style="display:block; max-height:240px; margin:0 auto; font-family:'Pretendard', sans-serif;">
                  <defs>
                    <linearGradient id="q4Card1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#ecfdf5" />
                      <stop offset="100%" stop-color="#d1fae5" />
                    </linearGradient>
                    <linearGradient id="q4Card2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#eff6ff" />
                      <stop offset="100%" stop-color="#dbeafe" />
                    </linearGradient>
                    <linearGradient id="q4Card3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stop-color="#fdf4ff" />
                      <stop offset="100%" stop-color="#fae8ff" />
                    </linearGradient>
                  </defs>

                  <!-- 3개 난제 카드 나열 -->
                  <!-- 1. 친환경 상온 비료 -->
                  <g transform="translate(15, 12)">
                    <rect x="0" y="0" width="265" height="150" rx="10" fill="url(#q4Card1Grad)" stroke="#10b981" stroke-width="1.8" />
                    <text x="132" y="24" font-size="12.5" font-weight="900" fill="#047857" text-anchor="middle">🌱 1. 친환경 상온 비료</text>
                    
                    <!-- 분자 모형 그래픽 -->
                    <circle cx="100" cy="58" r="14" fill="#3b82f6" />
                    <text x="100" y="62" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">N</text>
                    <line x1="114" y1="55" x2="150" y2="55" stroke="#1e293b" stroke-width="2" />
                    <line x1="114" y1="58" x2="150" y2="58" stroke="#1e293b" stroke-width="2" />
                    <line x1="114" y1="61" x2="150" y2="61" stroke="#1e293b" stroke-width="2" />
                    <circle cx="164" cy="58" r="14" fill="#3b82f6" />
                    <text x="164" y="62" font-size="10" font-weight="900" fill="#ffffff" text-anchor="middle">N</text>
                    
                    <text x="132" y="92" font-size="11.5" font-weight="800" fill="#065f46" text-anchor="middle">질소(N≡N) 삼중 결합 절단</text>
                    <text x="132" y="110" font-size="10.5" font-weight="700" fill="#047857" text-anchor="middle">Fe-Mo 생체 모사 인공 촉매 설계</text>
                    <rect x="25" y="122" width="215" height="20" rx="4" fill="#a7f3d0" />
                    <text x="132" y="136" font-size="10.5" font-weight="800" fill="#064e3b" text-anchor="middle">전 세계 전력 2% 절감 및 온실가스 감축</text>
                  </g>

                  <!-- 2. 전고체 배터리 -->
                  <g transform="translate(295, 12)">
                    <rect x="0" y="0" width="270" height="150" rx="10" fill="url(#q4Card2Grad)" stroke="#3b82f6" stroke-width="1.8" />
                    <text x="135" y="24" font-size="12.5" font-weight="900" fill="#1d4ed8" text-anchor="middle">🔋 2. 화재 없는 전고체 배터리</text>

                    <!-- 리튬 이온 채널 그래픽 -->
                    <rect x="40" y="45" width="190" height="26" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1" />
                    <circle cx="65" cy="58" r="8" fill="#f59e0b" />
                    <text x="65" y="62" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">Li⁺</text>
                    <path d="M 80 58 L 125 58" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,2" />
                    <circle cx="140" cy="58" r="8" fill="#f59e0b" />
                    <text x="140" y="62" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">Li⁺</text>
                    <path d="M 155 58 L 195 58" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,2" />

                    <text x="135" y="92" font-size="11.5" font-weight="800" fill="#1e40af" text-anchor="middle">초고속 리튬 이동 고체 전해질</text>
                    <text x="135" y="110" font-size="10.5" font-weight="700" fill="#2563eb" text-anchor="middle">결정 격자 결함 양자 제어</text>
                    <rect x="25" y="122" width="220" height="20" rx="4" fill="#bfdbfe" />
                    <text x="135" y="136" font-size="10.5" font-weight="800" fill="#1e3a8a" text-anchor="middle">폭발 제로 & 에너지 밀도 2배 향상</text>
                  </g>

                  <!-- 3. 표적 항암 신약 -->
                  <g transform="translate(580, 12)">
                    <rect x="0" y="0" width="265" height="150" rx="10" fill="url(#q4Card3Grad)" stroke="#c084fc" stroke-width="1.8" />
                    <text x="132" y="24" font-size="12.5" font-weight="900" fill="#7e22ce" text-anchor="middle">💊 3. 부작용 제로 표적 신약</text>

                    <!-- 수용체 결합 그래픽 -->
                    <path d="M 75 48 C 95 48 105 68 135 68 C 165 68 175 48 195 48" fill="none" stroke="#9333ea" stroke-width="3" />
                    <circle cx="135" cy="55" r="9" fill="#ef4444" />
                    <text x="135" y="58" font-size="9" font-weight="900" fill="#ffffff" text-anchor="middle">Drug</text>

                    <text x="132" y="92" font-size="11.5" font-weight="800" fill="#6b21a8" text-anchor="middle">단백질 결합 포켓 맞춤 분자</text>
                    <text x="132" y="110" font-size="10.5" font-weight="700" fill="#7e22ce" text-anchor="middle">전자 밀도 100% 양자 도킹 시뮬레이션</text>
                    <rect x="25" y="122" width="215" height="20" rx="4" fill="#e9d5ff" />
                    <text x="132" y="136" font-size="10.5" font-weight="800" fill="#581c87" text-anchor="middle">개발 기간 10년 → 1년 단축 혁신</text>
                  </g>

                  <!-- 하단 통합 배너 (x: 15 ~ 845) -->
                  <g transform="translate(15, 172)">
                    <rect x="0" y="0" width="830" height="34" rx="8" fill="#0f172a" />
                    <text x="415" y="22" font-size="11.5" font-weight="800" fill="#f8fafc" text-anchor="middle">
                      전통적 비커 실험 (수십 년, 수조 원 소모)  ➔  양자 가상 실험실 In Silico (수일 내 최적 분자 설계 및 지속가능 지구 실현)
                    </text>
                  </g>
                </svg>
              </div>

              <div class="pres-def-card">
                <p class="pres-def-text">
                  <strong class="pres-def-lead">양자 가상 실험실(In Silico Chemistry)이란?</strong> 비커와 시약 없이 양자역학 컴퓨터 알고리즘으로 분자의 결합과 전자 반응을 가상 공간에서 완벽히 모사하여, 인류 3대 난제를 단기간에 해결하는 첨단 미래 과학 기술
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 핵심 원리 & 비전
        {
          tag: '4차시 전개 · 핵심 원리',
          title: '계산 화학과 생태전환(Green Transition) 가치',
          content: `
            <div class="pres-stack pres-conservation-stack">
              <div class="pres-equation-box">
                <div class="pres-equation-text">
                  [ 양자 가상 분자 설계 ] = 개발 기간 10년 → 1년 단축 + 전 지구 탄소 배출 저감
                </div>
              </div>

              <div class="pres-law-desc-box">
                <p class="pres-law-desc-p">
                  • <strong>기후 위기 극복 (탄소 중립):</strong> 100년간 화석연료를 태워온 하버-보슈 비료 공정을 청정 상온 촉매로 대체하여 전 세계 온실가스의 1.5%를 즉시 감축할 수 있습니다.
                </p>
                <p class="pres-law-desc-p">
                  • <strong>에너지 전환과 인류 보건:</strong> 화재 없는 전기차 배터리로 청정 에너지 전환을 앞당기고, 바이러스 변이에 맞춘 맞춤형 표적 신약을 신속히 개발하여 전 인류의 생명을 지킵니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 핵심 배움 확인
        {
          tag: '4차시 정리 · 배움 확인',
          title: '4차시 및 전 과정 최종 핵심 배움 확인',
          content: `
            <div class="pres-grid-3">
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">💻</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">In Silico 가상 실험실</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  비커 없는 컴퓨터 속 양자 시뮬레이션으로 화학 결합 정밀 설계
                </p>
              </div>
              <div class="pres-card pres-highlight" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🌍</div>
                <strong style="font-size:1.2rem; color:#1d4ed8; display:block; margin-bottom:0.5rem;">3대 지구 난제 솔루션</strong>
                <p style="font-size:0.95rem; color:#1e40af; margin:0; line-height:1.6; word-break:keep-all;">
                  친환경 비료 촉매, 전고체 배터리, 표적 항암 분자 해결책 도출
                </p>
              </div>
              <div class="pres-card" style="text-align:center;">
                <div style="font-size:2rem; margin-bottom:0.6rem;">🚀</div>
                <strong style="font-size:1.2rem; color:#0f172a; display:block; margin-bottom:0.5rem;">융합 과학자 CEO</strong>
                <p style="font-size:0.95rem; color:#475569; margin:0; line-height:1.6; word-break:keep-all;">
                  물리·화학·정보를 융합하여 인류 지속가능 미래에 기여하는 진로 포부
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 과정 마무리 축하
        {
          tag: '4차시 정리 · 완주 축하',
          title: '양자컴퓨터와 화학의 만남 4차시 완주를 축하합니다!',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:300px;">
              <div class="pres-inquiry-box" style="padding:3rem 2rem; max-width:920px; width:100%; text-align:center; box-sizing:border-box;">
                <div style="font-size:2.8rem; margin-bottom:0.8rem;">⚛️ 🎉</div>
                <div style="font-size:1.45rem; font-weight:900; color:#2563eb; margin-bottom:0.8rem;">
                  KAIST CPRL 청소년 양자 계산 화학 아카데미 완주!
                </div>
                <div class="inquiry-q" style="line-height:1.8;">
                  <span style="font-size:1.2rem; font-weight:700; color:#334155; display:block;">
                    슈퍼컴퓨터의 지수 폭발($2^N$)부터 동전 회전 중첩(큐비트), 2인 3각 VQE 알고리즘,
                  </span>
                  <span style="font-size:1.2rem; font-weight:700; color:#334155; display:block;">
                    그리고 지구 난제를 해결하는 양자 스타트업 CEO 프로젝트까지 완벽히 마쳤습니다.
                  </span>
                  <span style="font-size:1.25rem; font-weight:900; color:#1d4ed8; display:block; margin-top:0.8rem;">
                    여러분이 바로 미래 양자 정보 과학과 첨단 계산 화학의 주인공입니다!
                  </span>
                </div>
              </div>
            </div>
          `
        }
      ]
    }
  };
