/**
 * KAIST CPRL - 양자컴퓨터 수업 지도안 모듈 데이터 (개요 + 1~4차시)
 * assets/data/lesson-plan-data-quantum.js
 */
window.quantumLessonPlanHtml = `<div class="chrome-window" id="quantum-lesson-plan-chrome-window">
          <!-- [탭 0]: 수업 지도안 개요 (개요 표 + 2022 성취수준 연계표) -->
          <div class="chrome-tab-panel active" role="tabpanel">
            <div style="margin-bottom:1rem; display:flex; justify-content:space-between; align-items:center;">
              <h3 style="margin:0; font-size:1.2rem; font-weight:700; color:var(--color-charcoal);">1. 수업 지도안 개요</h3>
              <button class="topbar-btn primary" onclick="window.print()"><i data-lucide="printer"></i> <span>전체 지도안 인쇄</span></button>
            </div>

            <!-- 기본 개요 정보 표 -->
            <table class="data-table">
              <tr>
                <th style="width:100px; white-space:nowrap; text-align:center;">프로그램명</th>
                <td colspan="3"><strong>양자 컴퓨터와 계산 화학의 미래</strong></td>
              </tr>
              <tr>
                <th style="width:100px; white-space:nowrap; text-align:center;">관련 단원</th>
                <td>중학교 과학 &lt;물질의 구성&gt;, &lt;화학 반응의 규칙성&gt;, &lt;과학과 사회&gt; & 정보과 &lt;데이터와 알고리즘&gt; 융합 심화</td>
                <th style="width:100px; white-space:nowrap; text-align:center;">차시</th>
                <td><strong>총 4차시</strong> (90분 블록타임 2회 운영 가능)</td>
              </tr>
              <tr>
                <th style="text-align:center;">성취기준</th>
                <td colspan="3">
                  <strong>[9과01-02]</strong> 과학의 발전이 인류 문명에 미친 영향을 이해하고, 인공지능 등 첨단 과학기술이 가져올 미래 사회의 변화를 조사하여 발표할 수 있다.<br>
                  <strong>[9과11-01]</strong> 원소와 화합물의 정의를 알고, 원소와 화합물을 화학식으로 표현할 수 있다.<br>
                  <strong>[9과11-02]</strong> 원소를 구성하는 입자인 원자는 양성자, 중성자, 전자로 구성되며, 양성자의 수에 따라 원소의 종류가 달라짐을 입자 모형을 활용하여 설명할 수 있다.<br>
                  <strong>[9과16-01]</strong> 물리 변화와 화학 변화의 의미를 알고, 화학 변화에서 새로운 물질이 생성됨을 관찰할 수 있다.<br>
                  <strong>[9과16-03]</strong> 화학 반응에서 질량이 보존됨을 실험을 통해 추론할 수 있다.<br>
                  <strong>[9과16-06]</strong> 화학 반응에서 열에너지가 출입함을 알고, 생활 속 사례를 조사하여 발표할 수 있다.<br>
                  <strong>[9과23-01]</strong> 과학과 관련된 직업의 종류와 하는 일을 조사하고, 과학기술의 발달로 생기는 미래 사회의 직업 변화를 예상할 수 있다.<br>
                  <strong>[정보과 연계]</strong> [9정01-03] 2진수 데이터 표현 / [9정02-02] 문제 해결 알고리즘과 시뮬레이션 모델링
                </td>
              </tr>
              <tr>
                <th style="text-align:center;">학습 목표</th>
                <td colspan="3">
                  <strong>[지식·이해]</strong> 전자가 많은 분자일수록 계산해야 할 경우의 수가 2배씩 불어나는 까닭과, 비트와 큐비트(중첩)의 차이를 설명할 수 있다.<br>
                  <strong>[과정·기능]</strong> 동전 돌리기 실험과 가상실험실을 통해 양자 컴퓨터와 일반 컴퓨터가 함께 분자의 가장 안정한 상태(바닥 상태)를 찾아가는 2인 3각 계산 과정을 설명할 수 있다.<br>
                  <strong>[가치·태도]</strong> 양자 컴퓨터를 이용한 분자 계산이 기후 위기와 질병 극복에 기여할 수 있음을 알고, 과학·정보 융합 진로를 주도적으로 탐색한다.
                </td>
              </tr>
              <tr>
                <th style="text-align:center;">탐구방법</th>
                <td>동전 조작 실험, 가상실험실(시뮬레이션), 2인 1조 알고리즘 역할극, 분자 설계 스타트업 기획 프로젝트</td>
                <th style="text-align:center;">준비물</th>
                <td>스마트기기, 동전(학생당 1개), 역할 카드(양자 컴퓨터 / 고전 컴퓨터), 스타트업 기획서 양식</td>
              </tr>
            </table>

            <!-- 2022 개정 교육과정 성취수준 연계표 -->
            <div style="margin:2.25rem 0 0.85rem 0;">
              <h3 style="margin:0; font-size:1.2rem; font-weight:700; color:var(--color-charcoal);">2. 교육과정 성취수준 연계</h3>
            </div>

            <table class="data-table">
              <thead>
                <tr>
                  <th style="width:17%; min-width:155px; text-align:center;">영역</th>
                  <th style="width:29%; text-align:center;">성취기준</th>
                  <th style="width:23%; text-align:center;">본 프로그램 탐구 연계 요소</th>
                  <th style="width:31%; text-align:center;">프로그램 연계 성취수준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align:center;"><strong>물질의 구성</strong></td>
                  <td>
                    <strong>[9과11-01]</strong> 원소와 화합물의 정의를 알고, 원소와 화합물을 화학식으로 표현할 수 있다.<br>
                    <strong>[9과11-02]</strong> 원소를 구성하는 입자인 원자는 양성자, 중성자, 전자로 구성되며, 양성자의 수에 따라 원소의 종류가 달라짐을 입자 모형을 활용하여 설명할 수 있다.
                  </td>
                  <td>
                    • 분자를 이루는 원자와 전자의 수<br>
                    • 전자 수에 따라 2배씩 늘어나는 경우의 수(지수 폭발, $2^N$)
                  </td>
                  <td>
                    <strong>[A]</strong> 분자를 화학식으로 표현하고, 전자가 늘어날수록 계산해야 할 경우의 수가 2배씩 불어남을 거듭제곱으로 설명함.<br>
                    <strong>[B]</strong> 분자가 원자와 전자로 이루어져 있음을 이해함.<br>
                    <strong>[C]</strong> 원자 속에 전자가 있음을 안다.
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center;"><strong>화학 반응의 규칙성</strong></td>
                  <td>
                    <strong>[9과16-01]</strong> 물리 변화와 화학 변화의 의미를 알고, 화학 변화에서 새로운 물질이 생성됨을 관찰할 수 있다.<br>
                    <strong>[9과16-03]</strong> 화학 반응에서 질량이 보존됨을 실험을 통해 추론할 수 있다.<br>
                    <strong>[9과16-06]</strong> 화학 반응에서 열에너지가 출입함을 알고, 생활 속 사례를 조사하여 발표할 수 있다.
                  </td>
                  <td>
                    • 원자 재배열과 가장 안정한 결합(바닥 상태)<br>
                    • 적은 에너지로 비료를 만드는 촉매 아이디어
                  </td>
                  <td>
                    <strong>[A]</strong> 화학 반응에서 원자 배열이 변할 때 에너지가 출입함을 이해하고, 두 컴퓨터의 2인 3각 계산이 분자의 가장 안정한 상태(바닥 상태)를 찾아가는 과정을 화학 결합과 연결하여 서술함.<br>
                    <strong>[B]</strong> 화학 반응 시 에너지가 출입함을 설명함.<br>
                    <strong>[C]</strong> 화학 반응으로 물질이 변함을 안다.
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center;"><strong>데이터·알고리즘</strong></td>
                  <td>
                    <strong>[9정01-03]</strong> 2진수 데이터 표현<br>
                    <strong>[9정02-02]</strong> 문제 해결 알고리즘과 시뮬레이션 모델링
                  </td>
                  <td>
                    • 0 또는 1인 비트 vs 도는 동전에 비유한 큐비트(중첩)<br>
                    • 양자 컴퓨터와 일반 컴퓨터가 번갈아 계산하는 2인 3각 계산
                  </td>
                  <td>
                    <strong>[A]</strong> 비트와 큐비트의 차이(중첩)를 비교하고, 양자 컴퓨터가 모든 문제가 아니라 분자 계산처럼 잘 맞는 문제에서 강함을 설명하며 2인 3각 계산의 반복 과정을 분석함.<br>
                    <strong>[B]</strong> 큐비트가 중첩 상태임을 동전 비유로 설명함.<br>
                    <strong>[C]</strong> 컴퓨터가 0과 1을 씀을 안다.
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center; line-height:1.55;">
                    <strong>과학과 인류의 지속가능한 삶</strong><br>
                    <span style="display:inline-block; margin-top:0.35rem;"><strong>과학과 나의 미래</strong></span>
                  </td>
                  <td>
                    <strong>[9과01-02]</strong> 과학의 발전이 인류 문명에 미친 영향을 이해하고, 인공지능 등 첨단 과학기술이 가져올 미래 사회의 변화를 조사하여 발표할 수 있다.<br>
                    <strong>[9과23-01]</strong> 과학과 관련된 직업의 종류와 하는 일을 조사하고, 과학기술의 발달로 생기는 미래 사회의 직업 변화를 예상할 수 있다.
                  </td>
                  <td>
                    • 3대 지구 과제(비료, 배터리, 신약) 해결<br>
                    • 양자 컴퓨터를 이용한 분자 설계 기획
                  </td>
                  <td>
                    <strong>[A]</strong> 양자 컴퓨터를 이용한 분자 계산이 기후 위기와 의학에 기여하는 구체적 해결책을 창의적으로 기획하고 진로 포부를 논리적으로 밝힘.<br>
                    <strong>[B]</strong> 양자 컴퓨터가 신소재 개발에 미치는 영향을 설명함.<br>
                    <strong>[C]</strong> 첨단 과학기술의 유용성을 인식함.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 2]: 1차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;">[1차시] 슈퍼컴퓨터도 멈춰버린 분자의 세계: 원자 레고 퍼즐과 지수 폭발</h3>
            </div>
            
            <!-- [1차시] 통합 수업 지도안 표 -->
            <table class="data-table" style="font-size:0.88rem; margin:0.5rem 0 1.25rem 0;">
              <colgroup>
                <col style="width: 7%;">
                <col style="width: 41%;">
                <col style="width: 8%;">
                <col style="width: 23%;">
                <col style="width: 21%;">
              </colgroup>
              <tbody>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">성취기준</th>
                  <td colspan="4">
                    <strong>[9과11-01]</strong> 원소와 화합물의 화학식 표현<br>
                    <strong>[9과11-02]</strong> 원자 구성 입자 모형과 전자 상호작용<br>
                    <strong>[9과01-02]</strong> 첨단 과학기술이 가져올 미래 사회의 변화
                  </td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습 목표</th>
                  <td colspan="4">분자 속 전자가 늘어날수록 계산해야 할 경우의 수가 2의 거듭제곱(2ᴺ)으로 불어나는 '지수 폭발'을 계산해 보고, 슈퍼컴퓨터로도 분자를 정확히 계산하기 어려운 까닭을 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>사고 실험, 거듭제곱 수치 계산 체험, 모둠 데이터 분석 및 토의</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기(계산기 기능), 바둑알 또는 쌀알 모형, 지수 폭발 체험 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>카페인(약 10³⁰가지)과 페니실린(약 10⁵³가지)의 경우의 수가 지구의 모래알 수(약 10¹⁹개)와 지구 전체 원자 수(약 10⁵⁰개)보다 많다는 대비를 체감하도록 지도하고, 2ᴺ은 실제 계산을 아주 단순하게 줄인 모형임을 함께 안내</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="plan-material-btn primary" onclick="openWorksheetModal('quantum', 1, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-presentation" onclick="openPresentationModal('quantum', 1)">
                        <i data-lucide="presentation"></i> <span>슬라이드</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr style="background-color:#f1f5f9;">
                  <th style="text-align:center; white-space:nowrap;">단계</th>
                  <th colspan="3" style="text-align:center;">교수·학습 활동</th>
                  <th style="text-align:center;">지도상 유의점 및 평가</th>
                </tr>

                <!-- 도입 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>도입</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 동기 유발 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">동기 유발 3분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 체스판과 쌀알 퀴즈 시연 (1번째 칸 1톨, 2번째 칸 2톨, 3번째 칸 4톨... 64칸을 모두 합하면 약 1,800경 톨로 전 세계가 수백 년 동안 거두는 쌀보다 많음)<br>
                        • 거듭제곱(2ⁿ)의 가파른 증가 속도를 시각적으로 체감
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "1칸에 1톨씩 두 배로 늘려가면 64칸엔 얼마나 될까요?"<br>
                        <strong>[학생 반응]</strong> "한 가마니?", "트럭 한 대 분량?", 전 세계가 수백 년 동안 거두는 쌀보다 많다는 사실에 놀람
                      </div>
                    </div>

                    <!-- 카드 2: 학습 목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습 목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "왜 1초에 100경 번 계산하는 슈퍼컴퓨터도 커피 한 잔 속 카페인 분자 하나를 정확히 계산하지 못할까?"
                        </div>
                        <div>
                          <strong>[학습 목표]</strong> 분자 속 전자가 늘어날수록 계산해야 할 경우의 수가 2의 거듭제곱(2ᴺ)으로 불어나는 '지수 폭발'을 계산해 보고, 슈퍼컴퓨터로도 분자를 정확히 계산하기 어려운 까닭을 설명할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>단순 수학 공식 암기가 아닌, 실생활 분자(카페인)와 슈퍼컴퓨터의 한계를 연결하여 호기심 유발.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>숫자가 너무 커지므로 지수 표기법($10^{30}$ = 1 뒤에 0이 30개)을 알기 쉽게 짚어줌.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 미시세계와 전자 상호작용 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 탐구 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>서로 영향을 주고받는 전자:</strong> 음(-)전하를 띤 전자들은 서로 밀어내고, 양(+)전하를 띤 원자핵에는 끌려가며 끊임없이 영향을 주고받으므로 전자 하나씩 따로 계산할 수 없음<br>
                        • <strong>경우의 수 2배:</strong> 전자 하나가 두 가지 상태 중 하나를 가진다고 아주 단순하게 생각해도, 전자가 N개이면 $2^N$가지 경우를 함께 따져야 함
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#334155;">
                        <strong>[교사 발문]</strong> "친구 2명이 서 있을 때 거리 계산과, 100명이 좁은 방에서 부딪히지 않게 움직이는 계산 중 어느 것이 어려울까요?"<br>
                        <strong>[학생 반응]</strong> "사람이 많아지면 서로 피해야 하므로 경우의 수가 셀 수 없이 많아집니다!"
                      </div>
                    </div>

                    <!-- 카드 2: 지수 폭발 수치 체험 활동 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">체험 활동 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>활동지 지수 폭발 계산표 작성:</strong><br>
                        - 수소 분자($\\mathrm{H_2}$, 전자 2개): $2^2 = 4$가지 (순식간에 계산)<br>
                        - 물 분자($\\mathrm{H_2O}$, 전자 10개): $2^{10} = 1{,}024$가지 (순식간에 계산)<br>
                        - 카페인 분자($\\mathrm{C_8H_{10}N_4O_2}$, 전자 102개): $2^{102} \\approx 5 \\times 10^{30}$가지 (지구 모든 모래알 약 $7.5 \\times 10^{18}$개보다 많음!)<br>
                        - 페니실린 분자($\\mathrm{C_{16}H_{18}N_2O_4S}$, 전자 176개): $2^{176} \\approx 10^{53}$가지 (지구 전체 원자 수 약 $10^{50}$개보다 많음!)
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[지수 폭발의 결론]</strong> "지구의 모든 원자를 컴퓨터 메모리로 써도 페니실린 분자의 경우의 수를 다 적어 둘 수 없다!"
                      </div>
                    </div>

                    <!-- 카드 3: 화학 발전의 병목과 파인만의 제안 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">심화 토의 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>화학자의 시행착오:</strong> 분자를 정확히 계산할 수 없기 때문에 화학자들은 수많은 물질을 직접 만들고 시험하며 실패를 거듭함 (신약 하나 개발에 보통 10년 이상, 수조 원 소요)<br>
                        • <strong>리처드 파인만의 제안(1981년):</strong> "자연은 양자역학을 따르므로, 자연을 흉내 내려면 컴퓨터도 양자역학의 원리로 만들어야 한다!" ➔ 양자 컴퓨터 연구의 출발점
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 지수 폭발 수치표를 바르게 채우고 모래알 수·지구 원자 수와 비교하여 한계를 서술하는지 관찰 평가.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>스마트폰 공학용 계산기 앱을 활용하여 $2^{10}, 2^{20}$을 직접 입력해보도록 유도.</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 핵심 배움 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">핵심 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • $2^N$ 지수 폭발 원리와 슈퍼컴퓨터의 한계 요약<br>
                        • 분자의 전자 수가 늘어날수록 왜 일반 컴퓨터로 정확한 계산이 어려워지는지 활동지 확인 질문 점검
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[2차시 예고]</strong> 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트<br>
                        • "컴퓨터의 비트가 0과 1을 동시에 품을 수 있다면 무엇이 달라질까?" 호기심 질문 제시
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 1차시 탐구 정리 서술형 1~2번 모둠 상호 확인 후 제출 지도.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 3]: 2차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;">[2차시] 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트</h3>
            </div>

            <!-- [2차시] 통합 수업 지도안 표 -->
            <table class="data-table" style="font-size:0.88rem; margin:0.5rem 0 1.25rem 0;">
              <colgroup>
                <col style="width: 7%;">
                <col style="width: 41%;">
                <col style="width: 8%;">
                <col style="width: 23%;">
                <col style="width: 21%;">
              </colgroup>
              <tbody>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">성취기준</th>
                  <td colspan="4">
                    <strong>[9정01-03]</strong> 2진수 데이터 표현<br>
                    <strong>[9정02-02]</strong> 문제 해결 알고리즘과 모델링<br>
                    <strong>[9과01-02]</strong> 첨단 과학기술과 미래 사회 변화
                  </td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습 목표</th>
                  <td colspan="4">바닥에 놓인 동전(비트: 0 또는 1)과 회전하는 동전(큐비트: 0과 1의 '중첩')을 비교하여 비트와 큐비트의 차이를 설명하고, 양자 컴퓨터가 문제를 푸는 방식을 이해할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>동전 회전 조작 실험, 가상실험실 [큐비트 시뮬레이터] 조작, 미로 찾기 비교 토의</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">동전(학생 1인당 1개), 스마트기기, 가상실험실, 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>동전 회전 실험 시 트레이를 활용하고, 도는 동전은 큐비트를 이해하기 위한 비유일 뿐 실제 동전이 양자 상태인 것은 아님을 함께 안내</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="plan-material-btn primary" onclick="openWorksheetModal('quantum', 2, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-presentation" onclick="openPresentationModal('quantum', 2)">
                        <i data-lucide="presentation"></i> <span>슬라이드</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-virtual-lab" onclick="switchPackageView('quantum', 'lab')">
                        <i data-lucide="flask-conical"></i> <span>가상실험실</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr style="background-color:#f1f5f9;">
                  <th style="text-align:center; white-space:nowrap;">단계</th>
                  <th colspan="3" style="text-align:center;">교수·학습 활동</th>
                  <th style="text-align:center;">지도상 유의점 및 평가</th>
                </tr>

                <!-- 도입 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>도입</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 동기 유발 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">동기 유발 3분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 전등 스위치 켜기/끄기 조작 vs 책상 위 팽이처럼 빠르게 도는 동전 비교 시연
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "책상에 누운 동전은 앞면인가요 뒷면인가요? 팽이처럼 쌩쌩 도는 동전은 앞면인가요 뒷면인가요?"<br>
                        <strong>[학생 반응]</strong> "누운 동전은 앞면 아니면 뒷면 중 딱 하나지만, 도는 동전은 앞뒤가 섞여 보여서 아직 정해지지 않은 것 같아요!"
                      </div>
                    </div>

                    <!-- 카드 2: 학습 목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습 목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "0과 1이 함께 섞인 '중첩'을 이용하는 양자 컴퓨터는 일반 컴퓨터와 무엇이 다를까?"
                        </div>
                        <div>
                          <strong>[학습 목표]</strong> 바닥에 놓인 동전과 회전하는 동전을 비교하여 비트와 큐비트의 차이를 설명하고, 양자 컴퓨터가 문제를 푸는 방식을 이해할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>학생 1인당 동전 1개씩을 배부하여 직접 팽이처럼 돌리는 촉각적 조작 활동 참여 유도.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 조작 실험 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">조작 실험 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>[조작 실험] 도는 동전과 중첩:</strong> 학생들이 책상 트레이 위에서 동전을 돌리고 관찰<br>
                        • <strong>측정:</strong> 도는 동전을 손바닥으로 '탁' 덮는 순간 앞면(0) 또는 뒷면(1) 중 하나로 정해짐! 큐비트도 측정하기 전에는 0과 1이 일정한 비율로 섞인 <strong>'중첩'</strong> 상태이고, 측정하면 0 또는 1 하나로 정해짐
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#334155;">
                        <strong>[교사 발문]</strong> "손바닥으로 덮는 행위는 양자 컴퓨터에서 무엇에 해당할까요?"<br>
                        <strong>[학생 반응]</strong> "양자 상태를 관측하거나 측정하는 행위입니다!"
                      </div>
                    </div>

                    <!-- 카드 2: 블로흐 구면과 큐비트 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">시뮬레이션 탐구 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>비트 vs 큐비트 비교:</strong><br>
                        - 비트: 스위치처럼 0 또는 1 중 딱 하나 (바닥의 동전)<br>
                        - 큐비트: 지구본 모양 모형에서 북극은 0, 남극은 1이고, 화살표가 그 사이 어디든 가리킬 수 있음. 적도를 가리키면 0과 1이 반반으로 섞인 중첩<br>
                        • <strong>가상실험실 조작:</strong> 태블릿에서 큐비트 화살표의 각도를 바꾸며 100번 측정했을 때 0과 1이 나오는 비율 변화 관찰
                      </p>
                    </div>

                    <!-- 카드 3: 미로 찾기와 동시 병렬 처리 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 응용 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>미로 찾기 비유로 보는 차이:</strong><br>
                        - 일반 컴퓨터: 1,024개 길을 하나씩 확인하므로 운이 나쁘면 1,024번 가 봐야 함<br>
                        - 양자 컴퓨터: 10개 큐비트의 중첩으로 1,024개 길을 한꺼번에 담은 뒤, <strong>틀린 길이 나올 확률은 줄이고 맞는 길이 나올 확률은 키우는 과정</strong>을 약 25번 반복하면 측정했을 때 정답 길이 나올 확률이 매우 높아짐<br>
                        - 주의: 측정하면 답은 하나만 나오므로 "모든 길을 동시에 가 보고 답을 한 번에 꺼낸다"는 것은 오해. 양자 컴퓨터는 모든 문제가 아니라 분자 계산처럼 잘 맞는 문제에서 특히 강함
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>비트와 큐비트의 차이를 '동전 비유'와 '미로 찾기'를 활용하여 자기 언어로 구술 설명할 수 있는지 확인.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>복잡한 수식이나 기호(|0⟩ 등)는 쓰지 않고, 지구본 모형과 회전 동전 비유에 집중.</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 핵심 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">핵심 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 활동지 1번 [비트 vs 큐비트 비교표] 및 2번 [미로 찾기 서술] 모범 답안 점검<br>
                        • 중첩과 측정, 양자 컴퓨터가 잘하는 문제의 핵심 개념 확인
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[3차시 예고]</strong> 환상의 2인 3각 달리기: 두 컴퓨터가 함께 찾는 화학 결합의 바닥 상태<br>
                        • 양자 컴퓨터와 슈퍼컴퓨터가 서로 발을 묶고 가장 깊은 골짜기를 찾아가는 협동 알고리즘 예고
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 2차시 표 작성 확인 및 동전 수거.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 4]: 3차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;">[3차시] 환상의 2인 3각 달리기: 두 컴퓨터가 함께 찾는 화학 결합의 바닥 상태</h3>
            </div>

            <!-- [3차시] 통합 수업 지도안 표 -->
            <table class="data-table" style="font-size:0.88rem; margin:0.5rem 0 1.25rem 0;">
              <colgroup>
                <col style="width: 7%;">
                <col style="width: 41%;">
                <col style="width: 8%;">
                <col style="width: 23%;">
                <col style="width: 21%;">
              </colgroup>
              <tbody>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">성취기준</th>
                  <td colspan="4">
                    <strong>[9과16-01]</strong> 화학 변화에서 새로운 물질 생성<br>
                    <strong>[9과16-06]</strong> 화학 반응에서 열에너지 출입<br>
                    <strong>[9정02-02]</strong> 문제 해결 알고리즘과 시뮬레이션 모델링
                  </td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습 목표</th>
                  <td colspan="4">분자는 에너지가 가장 낮은 '바닥 상태'에서 가장 안정함을 이해하고, 양자 컴퓨터와 일반 컴퓨터가 함께 바닥 상태를 찾아가는 2인 3각 계산을 2인 1조 역할극으로 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>2인 1조 협동 역할극(양자 컴퓨터 역할 + 일반 컴퓨터 역할), 가상실험실 [바닥 상태 찾기 시뮬레이터] 조작, 에너지 지형도 탐색</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">2인 3각 벨크로 밴드, 에너지 지형도 매트, 태블릿(가상실험실), 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>신체 활동 시 교실 통로 안전 공간 확보. 양자 컴퓨터 역할(에너지 측정)과 일반 컴퓨터 역할(다음 걸음 결정)의 반복을 몸으로 익히도록 역할 교대 실습</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="plan-material-btn primary" onclick="openWorksheetModal('quantum', 3, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-presentation" onclick="openPresentationModal('quantum', 3)">
                        <i data-lucide="presentation"></i> <span>슬라이드</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-virtual-lab" onclick="switchPackageView('quantum', 'lab')">
                        <i data-lucide="flask-conical"></i> <span>가상실험실</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr style="background-color:#f1f5f9;">
                  <th style="text-align:center; white-space:nowrap;">단계</th>
                  <th colspan="3" style="text-align:center;">교수·학습 활동</th>
                  <th style="text-align:center;">지도상 유의점 및 평가</th>
                </tr>

                <!-- 도입 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>도입</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 동기 유발 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">동기 유발 3분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 굴러가는 공과 안개 자욱한 산골짜기 비유 제시
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "언덕 위에 공을 놓으면 왜 스스로 굴러떨어질까요? 안개로 앞이 안 보이는 깊은 산에서 가장 낮은 골짜기를 어떻게 찾을까요?"<br>
                        <strong>[학생 반응]</strong> "에너지가 가장 낮은 곳으로 가려는 성질 때문입니다!", "발밑의 경사면을 확인하며 조금씩 내려가 봅니다!"
                      </div>
                    </div>

                    <!-- 카드 2: 학습 목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습 목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "분자는 에너지가 가장 낮은 '바닥 상태'에서 가장 안정한데, 슈퍼컴퓨터 혼자 찾기 어려운 이 지점을 양자 컴퓨터와 어떻게 함께 찾을까?"
                        </div>
                        <div>
                          <strong>[학습 목표]</strong> 바닥 상태의 뜻을 이해하고, 양자 컴퓨터와 일반 컴퓨터가 협력하는 2인 3각 계산의 원리를 2인 1조 역할극으로 설명할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>2인 3각 활동 전 교실 바닥의 가방과 의자를 정리하여 통행 안전 공간 사전 확보.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 바닥 상태와 화학 결합 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 탐구 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>바닥 상태:</strong> 원자핵끼리 밀어내는 힘과, 전자와 원자핵이 끌어당기는 힘이 균형을 이루어 에너지가 가장 낮은 상태<br>
                        • 두 원자가 너무 가까우면 원자핵끼리 밀어내고, 너무 멀면 끌어당기는 힘이 약해져 결합이 끊어짐 ➔ 에너지가 가장 낮은 거리(수소 분자: 약 0.074 nm)에서 가장 안정하게 결합
                      </p>
                    </div>

                    <!-- 카드 2: 2인 1조 2인 3각 역할극 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">협동 역할극 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>[신체 활동] 2인 3각 역할극:</strong> 벨크로 밴드로 발을 묶고 짝과 협동 (교사 참고: 전문가들은 이 계산 방법을 VQE라고 부름. 학생에게는 이름을 강조하지 않음)<br>
                        - <strong>학생 A (양자 컴퓨터 역할):</strong> 지금 서 있는 자리의 에너지를 재서 "지금 에너지 -0.63!" 보고<br>
                        - <strong>학생 B (일반 컴퓨터 역할):</strong> 값을 보고 에너지가 더 낮아지는 쪽을 골라 "오른쪽으로 한 걸음!" 지시<br>
                        - <strong>반복:</strong> 에너지가 더는 낮아지지 않을 때까지 반복하여 골짜기 바닥(수소 분자: -1.137)에 도착 (에너지 단위는 생략)
                      </p>
                    </div>

                    <!-- 카드 3: 시뮬레이터 조작 및 변분 원리 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">시뮬레이션 & 원리 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>가상실험실 바닥 상태 찾기 시뮬레이터 조작:</strong> 태블릿에서 수소 분자의 두 원자 사이 거리를 바꾸며 에너지 곡선의 가장 낮은 곳을 찾아가는 과정 확인<br>
                        • <strong>2인 3각 계산의 안전장치:</strong> 이 방법으로 계산한 에너지는 진짜 바닥 상태 에너지보다 낮게 나올 수 없으므로, 더 낮은 값이 나올수록 정답에 더 가까워짐 (다만 작은 웅덩이에 갇히지 않도록 여러 출발점에서 시도함)
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span><strong>[협동학습]</strong> 양자 컴퓨터 역할과 일반 컴퓨터 역할을 번갈아 체험하며 반복 과정을 몸소 이해하도록 지도.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 2번 2인 3각 계산 3단계 순서도(양자 컴퓨터가 에너지 측정 ➔ 일반 컴퓨터가 다음 걸음 결정 ➔ 바닥 상태 도달)를 정확히 서술하는지 점검.</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 핵심 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">핵심 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 2인 3각 계산의 반복 과정과 안전장치 요약<br>
                        • 지금의 양자 컴퓨터는 아직 작고 오류가 많아 일반 컴퓨터와 2인 3각으로 일하는 이유 확인
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[4차시 예고]</strong> 양자 화학 시뮬레이션 기반 분자 설계 프로젝트<br>
                        • 비커 없이 컴퓨터로 3대 지구 과제(비료, 배터리, 신약)를 해결할 분자를 기획하는 프로젝트 예고
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 3차시 순서도 작성 확인 및 4차시 모둠(4인 1조) 사전 구성.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 5]: 4차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <!-- 4차시 지도안 -->
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;">[4차시] 양자 화학 시뮬레이션 기반 분자 설계 프로젝트</h3>
            </div>

            <!-- [4차시] 통합 수업 지도안 표 -->
            <table class="data-table" style="font-size:0.88rem; margin:0.5rem 0 1.25rem 0;">
              <colgroup>
                <col style="width: 7%;">
                <col style="width: 41%;">
                <col style="width: 8%;">
                <col style="width: 23%;">
                <col style="width: 21%;">
              </colgroup>
              <tbody>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">성취기준</th>
                  <td colspan="4">
                    <strong>[9과01-02]</strong> 첨단 과학기술이 가져올 미래 사회의 변화<br>
                    <strong>[9과16-01]</strong> 물리 변화와 화학 변화에서 새로운 물질 생성<br>
                    <strong>[9과23-01]</strong> 과학기술 발달과 미래 사회 직업 변화
                  </td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습 목표</th>
                  <td colspan="4">양자 컴퓨터를 이용한 분자 계산이 식량·에너지·질병 등 3대 지구 과제 해결에 도움을 줄 수 있음을 알고, 모둠별로 미래 분자 설계 스타트업 기획서를 작성·발표할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>지구 과제 해결 모둠 프로젝트, 스타트업 기획서 작성, 2분 발표 및 모둠 상호 평가</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기, 스타트업 기획서 양식, 발표 평가 기준표, 3대 과제 안내 자료</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>막연한 상상에 그치지 않고 질소 분자의 단단한 세 겹 결합(N≡N) 끊기, 리튬 이온이 잘 지나가는 고체 속 길, 질병 단백질의 홈에 꼭 맞는 약 분자 등 과학 원리와 연결하여 기획하도록 지도. 양자 컴퓨터는 아직 발전 중인 기술임을 함께 안내</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="plan-material-btn primary" onclick="openWorksheetModal('quantum', 4, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-presentation" onclick="openPresentationModal('quantum', 4)">
                        <i data-lucide="presentation"></i> <span>슬라이드</span>
                      </button>
                      <button type="button" class="plan-material-btn btn-virtual-lab" onclick="switchPackageView('quantum', 'lab')">
                        <i data-lucide="flask-conical"></i> <span>가상실험실</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr style="background-color:#f1f5f9;">
                  <th style="text-align:center; white-space:nowrap;">단계</th>
                  <th colspan="3" style="text-align:center;">교수·학습 활동</th>
                  <th style="text-align:center;">지도상 유의점 및 평가</th>
                </tr>

                <!-- 도입 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>도입</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 동기 유발 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">동기 유발 3분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 컴퓨터 속에서 분자를 미리 실험해 보는 '가상 실험실' 소개
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "위험한 화학 약품과 폭발 위험 없이, 컴퓨터 속에서 분자를 자유자재로 조립해 지구 온난화를 멈출 수 있다면 어떨까요?"<br>
                        <strong>[학생 반응]</strong> "위험하지 않게 좋은 약 후보를 빨리 찾을 수 있어요!", "진짜 과학자가 된 기분이에요!"
                      </div>
                    </div>

                    <!-- 카드 2: 프로젝트 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">프로젝트 선언 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "인류의 3대 지구 과제(식량, 청정 에너지, 질병)를 해결할 분자 설계 스타트업을 우리 손으로 세운다면?"
                        </div>
                        <div>
                          <strong>[학습 목표]</strong> 양자 컴퓨터를 이용한 분자 계산의 가치를 알고, 모둠별로 미래 분자 설계 스타트업 기획서를 작성·발표할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>학생들에게 '대표'와 '양자 화학 연구원' 역할을 부여하여 자긍심과 주도성 고취.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 3대 지구 과제 심층 분석 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">해결 과제 분석 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>3대 지구 과제와 화학 결합의 원리:</strong><br>
                        1) <strong>친환경 비료:</strong> 지금은 약 400~500℃, 200기압 안팎의 높은 온도와 압력으로 공기 속 질소를 비료 원료(암모니아)로 바꾸며 세계 에너지의 약 1~2%를 씀. 콩과 식물 뿌리의 세균은 상온에서도 질소의 세 겹 결합(N≡N)을 끊으므로, 그 비밀을 양자 컴퓨터로 계산해 상온 촉매를 설계하는 것이 목표<br>
                        2) <strong>안전한 배터리:</strong> 불이 붙기 쉬운 액체 전해질 대신, 리튬 이온($\\mathrm{Li^+}$)이 잘 지나가는 고체 전해질 구조를 찾아 화재 위험을 크게 줄이기<br>
                        3) <strong>맞춤형 신약:</strong> 질병을 일으키는 단백질의 홈에 꼭 맞는 약 분자를 컴퓨터로 미리 찾아 신약 개발 기간과 비용을 줄이기
                      </p>
                    </div>

                    <!-- 카드 2: 스타트업 CEO 기획서 구안 14분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">창업 기획 14분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>[모둠 프로젝트] 분자 설계 스타트업 기획서 작성:</strong><br>
                        - 4인 1조 모둠별 역할 분담 (대표, 양자 화학 연구원, 분자 설계 담당, 환경 가치 평가 담당)<br>
                        - 3대 과제 중 1개 선택, 회사 이름 짓기, 분자 아이디어의 과학 원리와 사회·환경적 기대 효과 쓰기<br>
                        - 예시(가상 회사 '퀀텀 카탈리스트': 상온 비료 촉매로 비료 공장의 에너지 사용과 온실가스 배출 줄이기) 참고
                      </p>
                    </div>

                    <!-- 카드 3: 2분 발표하기 & 상호 투자 심사 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">발표하기 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 모둠별 2분 발표하기<br>
                        • <strong>모의 투자 심사:</strong> 과학적 타당성(A/B/C)과 환경·사회 가치(A/B/C) 평가 기준표를 바탕으로 다른 모둠 스타트업에 모의 투자 점수 주기
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[생태전환교육]</strong> 탄소 중립, 기후 위기 극복, 인류 보건과의 연계성을 핵심 평가 지표로 반영.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[산출물평가]</strong> 기획서의 과학적 원리 접목도와 사회적 파급력을 구체적 평가 기준으로 다면 평가.</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 종합 평가 및 진로 탐색 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">진로 탐색 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 모의 투자 심사 결과 공유 및 우수 스타트업 격려<br>
                        • <strong>미래 융합 진로 탐색:</strong> 양자 소프트웨어 개발자, 계산 화학자, 녹색 기술 창업가
                      </p>
                    </div>

                    <!-- 카드 2: 전 과정 완주 축하 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">과정 완주 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[양자 모듈 4차시 완주]</strong> 지수 폭발에서 출발하여 큐비트 중첩, 2인 3각 계산, 분자 설계 스타트업 프로젝트까지 성실히 탐구한 학생들을 축하하고 KAIST CPRL 청소년 아카데미 수료 선언
                      </p>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>`;
