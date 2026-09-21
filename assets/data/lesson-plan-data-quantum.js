/**
 * KAIST CPRL - 양자컴퓨터 수업 지도안 모듈 데이터 (개요 + 1~4차시)
 * assets/data/lesson-plan-data-quantum.js
 */
window.quantumLessonPlanHtml = `<div class="chrome-window" id="quantum-lesson-plan-chrome-window">
          <!-- 6페이지 크롬 탭 바 (성취수준 연계 신설) -->
          <div class="chrome-tab-bar" role="tablist">
            <button type="button" class="chrome-tab-btn active" onclick="switchLessonPlanTab(event, 0)" role="tab" aria-selected="true">
              <span><span class="tab-text-full">성취수준 연계</span><span class="tab-text-mid">성취수준</span><span class="tab-text-short">성취수준</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 1)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">수업 지도안 개요</span><span class="tab-text-mid">지도안 개요</span><span class="tab-text-short">개요</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 2)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[1차시] 지수 폭발</span><span class="tab-text-mid">[1차시]</span><span class="tab-text-short">[1차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 3)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[2차시] 동전과 큐비트</span><span class="tab-text-mid">[2차시]</span><span class="tab-text-short">[2차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 4)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[3차시] VQE 알고리즘</span><span class="tab-text-mid">[3차시]</span><span class="tab-text-short">[3차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 5)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[4차시] 스타트업 CEO</span><span class="tab-text-mid">[4차시]</span><span class="tab-text-short">[4차시]</span></span>
            </button>
          </div>

          <!-- [탭 0]: 성취수준 연계 (2022 개정 교육과정 연계표) -->
          <div class="chrome-tab-panel active" role="tabpanel">
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
                    • 다전자 분자 구조와 전자 배치<br>
                    • 전자 간 반발력과 계산 조합의 수(지수 폭발, $2^N$)
                  </td>
                  <td>
                    <strong>[A]</strong> 원자 속 전자 간 상호작용으로 인해 전자가 늘어날수록 분자 상태 수가 지수적으로 폭발함을 논리적으로 설명하고 화학식으로 표현함.<br>
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
                    • 원자 재배열과 최저 바닥 상태 결합<br>
                    • 상온 비료 합성 촉매 설계를 통한 화학 반응 에너지 장벽 극복
                  </td>
                  <td>
                    <strong>[A]</strong> 화학 반응에서 원자 배열이 변할 때 에너지가 출입함을 이해하고, VQE 알고리즘이 분자의 바닥 상태를 찾아가는 과정을 화학 결합과 연결하여 서술함.<br>
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
                    • 고전 0과 1의 비트 vs 동전 회전 중첩(큐비트)<br>
                    • VQE 양자-고전 하이브리드 최적화 피드백 루프
                  </td>
                  <td>
                    <strong>[A]</strong> 비트와 큐비트의 차이(중첩)를 바탕으로 양자 컴퓨터의 동시 병렬 처리 장점을 명확히 비교하고 VQE 피드백 루프를 분석함.<br>
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
                    • 3대 지구 난제(비료, 배터리, 신약) 해결<br>
                    • 양자 화학 시뮬레이션 기반 분자 설계 기획
                  </td>
                  <td>
                    <strong>[A]</strong> 양자 계산 화학 기술이 기후 위기 및 의학에 기여하는 구체적 해결책을 창의적으로 기획하고 진로 포부를 논리적으로 피력함.<br>
                    <strong>[B]</strong> 양자 컴퓨터가 신소재 개발에 미치는 영향을 설명함.<br>
                    <strong>[C]</strong> 첨단 과학기술의 유용성을 인식함.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 1]: 지도안 개요 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div class="card-header" style="margin-bottom:1rem;">
              <h2 class="card-title" style="margin:0; font-size:1.3rem; color:var(--color-charcoal);"><i data-lucide="clipboard-list"></i> 양자 컴퓨터와 계산 화학의 미래</h2>
              <button class="topbar-btn primary" onclick="window.print()"><i data-lucide="printer"></i> <span>전체 지도안 인쇄</span></button>
            </div>

            <table class="data-table">
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
                <th style="text-align:center;">학습목표</th>
                <td colspan="3">
                  <strong>[지식·이해]</strong> 다전자 분자에서 전자 간 반발력으로 인해 발생하는 계산 복잡도와 비트 vs 큐비트 중첩의 차이를 설명할 수 있다.<br>
                  <strong>[과정·기능]</strong> 동전 돌리기 조작 실험 및 인터랙티브 시뮬레이터를 통해 VQE 바닥 상태 탐색 과정을 시각적으로 추론할 수 있다.<br>
                  <strong>[가치·태도]</strong> 양자 화학이 기후 위기 및 난치병 극복에 기여함을 인식하고 융합 진로에 주도적으로 참여한다.
                </td>
              </tr>
              <tr>
                <th style="text-align:center;">탐구방법</th>
                <td>동전 조작 실험, 가상실험실(시뮬레이션), 2인 1조 알고리즘 역할극, 스타트업 CEO 프로젝트</td>
                <th style="text-align:center;">준비물</th>
                <td>스마트기기, 동전(학생당 1개), 역할 카드(양자 컴퓨터 / 고전 컴퓨터), 스타트업 기획서 양식</td>
              </tr>
            </table>

            <div class="callout-box" style="margin-top:1.25rem;">
              <strong><i data-lucide="lightbulb"></i> [수식 없는 양자역학 지도 팁]:</strong> 수식이나 파동방정식을 지양하고, <strong>"바닥에 놓인 동전(비트) vs 도는 팽이 동전(큐비트)"</strong>과 <strong>"2인 3각 산골짜기 바닥 찾기(VQE)"</strong>라는 직관적 은유를 활용하여 지도합니다.
            </div>
          </div>

          <!-- [탭 2]: 1차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#7c3aed;">[1차시]</span> 슈퍼컴퓨터도 멈춰버린 분자의 세계: 원자 레고 퍼즐과 지수 폭발</h3>
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
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">분자 속 전자가 증가함에 따라 전자 간 반발력으로 인해 계산 조합의 수가 2의 N제곱(2ᴺ)으로 폭발하는 '지수 폭발'의 한계를 체험하고 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>사고 실험, 거듭제곱 수치 계산 체험, 모둠 데이터 분석 및 토의</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기(계산기 기능), 바둑알 또는 쌀알 모형, 지수 폭발 체험 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>단순 수학 계산에 머물지 않고 카페인(10³⁰)과 페니실린(10⁸⁴)이 우주 전체 원자 수(10⁸⁰)를 초과한다는 극적 대비를 체감하도록 지도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('quantum', 1, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('quantum', 1)">
                        <i data-lucide="presentation"></i> <span>프리젠테이션</span>
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
                        • 체스판과 쌀알 퀴즈 시연 (1번째 칸 1톨, 2번째 칸 2톨, 3번째 칸 4톨... 64번째 칸엔 1,800경 톨로 전 세계 쌀 생산량의 수백 배)<br>
                        • 거듭제곱(2ⁿ)의 가파른 증가 속도를 시각적으로 체감
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "1칸에 1톨씩 두 배로 늘려가면 64칸엔 얼마나 될까요?"<br>
                        <strong>[학생 반응]</strong> "한 가마니?", "트럭 한 대 분량?", "전 세계 쌀 수확량보다 많다는 사실에 놀람"
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "왜 1초에 100경 번 계산하는 수천억 원짜리 슈퍼컴퓨터도 우리가 매일 마시는 커피 한 잔 속 카페인 분자 하나를 완벽히 계산하지 못할까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 분자 속 전자가 증가함에 따라 전자 간 반발력으로 인해 계산 조합의 수가 2의 N제곱(2ᴺ)으로 폭발하는 '지수 폭발'의 한계를 체험하고 설명할 수 있다.
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
                      <span>숫자가 너무 커지므로 지수 표기법($10^{30}$)의 개념을 알기 쉽게 짚어줌.</span>
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
                        • <strong>원자 속 전자의 반발력 [9과11-02]:</strong> 원자핵 주위 음(-)전하를 띤 전자들이 1:1로 서로 밀어내고 끌어당기며 복잡한 전자 구름을 형성<br>
                        • <strong>경우의 수 2배 폭발:</strong> 전자 1개가 어디로 갈지 계산할 때 2가지 상태가 있다면, 전자 N개가 모이면 $2^N$개의 상태를 동시에 고려해야 함
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
                        - 수소 분자($H_2$, 전자 2개): $2^2 = 4$가지 (슈퍼컴퓨터 0.0001초)<br>
                        - 물 분자($H_2O$, 전자 10개): $2^{10} = 1,024$가지 (0.01초)<br>
                        - 카페인 분자($C_8H_{10}N_4O_2$, 전자 102개): $2^{102} \approx 10^{30}$가지 (지구 모든 해변 모래알 $7.5 \times 10^{18}$ 초과!)<br>
                        - 페니실린 분자(전자 276개): $2^{276} \approx 10^{84}$가지 (우주 전체 원자 수 $10^{80}$개 초과! 슈퍼컴퓨터가 우주 나이만큼 계산해도 불가능)
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[지수 폭발의 결론]</strong> "우주에 있는 모든 원자를 컴퓨터 메모리로 만들어도 페니실린 분자 상태 하나를 저장조차 할 수 없다!"
                      </div>
                    </div>

                    <!-- 카드 3: 화학 발전의 병목과 파인만의 제안 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">심화 토의 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>전통 화학의 시행착오:</strong> 컴퓨터로 계산할 수 없기 때문에 화학자들은 10년간 비커에 시약을 직접 섞어가며 수만 번 실패와 폭발 위험을 감수함 (신약 1종 개발에 2조 원 소요)<br>
                        • <strong>리처드 파인만의 제안:</strong> "자연을 계산하려면 컴퓨터 자체를 양자역학의 원리로 작동하게 만들어야 한다!" ➔ 양자 컴퓨터 탄생의 서막
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 지수 폭발 수치표를 바르게 채우고 우주 원자 수와 비교하여 한계를 서술하는지 관찰 평가.</span>
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
                        • $2^N$ 지수 폭발 원리 및 슈퍼컴퓨터의 근본적 한계 요약<br>
                        • 분자의 전자 수가 늘어날수록 왜 고전 비트 컴퓨터가 멈추는지 활동지 확인 질문 점검
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[2차시 예고]</strong> 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트<br>
                        • "컴퓨터 비트가 0과 1을 동시에 가질 수 있다면 미로를 어떻게 빠져나올까?" 호기심 질문 제시
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
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#2563eb;">[2차시]</span> 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트</h3>
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
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">바닥에 놓인 동전(고전 비트: 0 또는 1)과 회전하는 동전 팽이(양자 큐비트: 0과 1의 '중첩')를 비교하여 양자 컴퓨터의 동시 병렬 처리 원리를 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>동전 회전 조작 실험, 가상실험실 [블로흐 구 시뮬레이터] 조작, 미로 찾기 병렬 처리 모형 비교</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">동전(학생 1인당 1개), 스마트기기, 가상실험실(lab.html), 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>동전 회전 실험 시 트레이를 활용하고, 손으로 덮기 전까지 0과 1이 공존하는 상태임을 체감하도록 지도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('quantum', 2, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('quantum', 2)">
                        <i data-lucide="presentation"></i> <span>프리젠테이션</span>
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
                        <strong>[학생 반응]</strong> "누운 동전은 앞면 아니면 뒷면 중 딱 하나지만, 도는 동전은 앞뒤가 섞여서 둘 다인 것 같아요!"
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "0과 1이 동시에 섞여 있는 '양자 중첩' 상태를 이용하면 어떻게 1,024개의 길을 한꺼번에 찾아낼 수 있을까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 바닥에 놓인 동전과 회전하는 동전 팽이를 비교하여 양자 컴퓨터의 동시 병렬 처리 원리를 설명할 수 있다.
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
                        • <strong>[조작 실험] 동전 팽이와 양자 중첩:</strong> 학생들이 책상 트레이 위에서 동전을 돌리고 관찰<br>
                        • <strong>측정과 파동함수 붕괴:</strong> 도는 동전을 손바닥으로 '탁' 덮는 순간, 앞면(0) 또는 뒷면(1) 중 하나로 확정! 손으로 덮기 전까지는 앞뒤가 공존하는 <strong>'중첩(Superposition)'</strong> 상태임을 체감
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
                        • <strong>비트(Bit) vs 큐비트(Qubit) 비교:</strong><br>
                        - 고전 비트: 북극(|0⟩)과 남극(|1⟩) 두 점 중 딱 하나만 존재 (바닥의 동전)<br>
                        - 양자 큐비트: 3차원 구면(블로흐 구) 위의 모든 연속적인 점(|ψ⟩)에 존재 가능! 적도면은 50:50 완벽한 중첩<br>
                        • <strong>가상실험실 시뮬레이터 조작:</strong> 태블릿에서 큐비트 화살표의 각도를 조작하며 측정 확률 변화 관찰
                      </p>
                    </div>

                    <!-- 카드 3: 미로 찾기와 동시 병렬 처리 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 응용 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>미로 찾기 비유로 보는 압도적 속도 차이:</strong><br>
                        - 고전 컴퓨터(순차 탐색): 10개 비트로 1,024개 길 중 1개씩 순서대로 가보고, 벽에 부딪히면 되돌아오는 과정을 1,024번 반복<br>
                        - 양자 컴퓨터(동시 병렬 탐색): 10개 큐비트의 중첩으로 <strong>1,024명의 분신이 모든 갈래 길로 동시에 한꺼번에 쏟아져 들어가</strong> 단 한 번에 출구 탐색!
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
                      <span>복잡한 행렬식이나 양자 게이트 수식은 절대 언급하지 않고, 3차원 구면과 회전 동전 은유에 집중.</span>
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
                        • 중첩과 동시 병렬 처리의 핵심 개념 확인
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[3차시 예고]</strong> 환상의 2인 3각 달리기: VQE 알고리즘과 화학 결합의 바닥 상태<br>
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
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#059669;">[3차시]</span> 환상의 2인 3각 달리기: VQE 알고리즘과 화학 결합의 바닥 상태</h3>
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
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">화학 반응에서 원자가 가장 안정한 최저 바닥 상태를 찾아 결합함을 이해하고, 양자 프로세서(QPU)와 일반 슈퍼컴퓨터(CPU)가 협력하는 VQE 하이브리드 알고리즘을 2인 1조 역할극으로 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>2인 1조 협동 역할극(양자 QPU + 고전 CPU), 가상실험실 [VQE 최적화 루프 시뮬레이터] 조작, 3D 등고선 지형도 탐색</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">2인 3각 벨크로 밴드, 3D 에너지 지형도 매트, 태블릿(lab.html), 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>신체 활동 시 교실 통로 안전 공간 확보. QPU(에너지 측정)와 CPU(각도 보정)의 피드백 루프를 온몸으로 체득하도록 역할 교대 실습</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('quantum', 3, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('quantum', 3)">
                        <i data-lucide="presentation"></i> <span>프리젠테이션</span>
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

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "자연계의 모든 분자는 에너지가 가장 낮은 '바닥 상태'에서 안정하게 결합하는데, 슈퍼컴퓨터 혼자 못 찾는 이 지점을 양자와 어떻게 협력하여 찾아낼까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 바닥 상태의 개념을 이해하고, QPU와 CPU가 협력하는 VQE 하이브리드 알고리즘의 원리를 2인 1조 역할극으로 설명할 수 있다.
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
                        • <strong>바닥 상태(Ground State)의 원리 [9과16-01]:</strong> 원자핵 간 반발력과 전자-핵 간 인력이 완벽한 균형을 이루는 에너지 최저점<br>
                        • 너무 가까우면 반발력으로 튕겨 나가고, 너무 멀어지면 결합이 끊어짐 ➔ 오직 골짜기 바닥에 안착할 때만 영구적 신물질 형성
                      </p>
                    </div>

                    <!-- 카드 2: 2인 1조 VQE 역할극 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">협동 역할극 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>[신체 활동] VQE 2인 3각 하이브리드 루프:</strong> 벨크로 밴드로 발을 묶고 짝과 협동<br>
                        - <strong>학생 A (양자 QPU, 빠른 탐험가):</strong> 큐비트 중첩으로 현재 지형의 에너지를 찰나에 측정하여 "현재 -0.85 Hartree!" 보고<br>
                        - <strong>학생 B (고전 CPU, 스마트 내비게이션):</strong> 수치를 분석하여 경사면 하강 각도를 계산하고 "오른쪽으로 30도 돌려 한 걸음 전진!" 지시<br>
                        - <strong>반복 피드백:</strong> 20회 반복하여 최저 골짜기(-1.137 Hartree)에 완벽 안착!
                      </p>
                    </div>

                    <!-- 카드 3: 시뮬레이터 조작 및 변분 원리 12분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">시뮬레이션 & 원리 12분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>VQE 인터랙티브 시뮬레이터 조작:</strong> 태블릿에서 회전 각도(θ)를 보정하며 에너지가 U자형 골짜기 최저점으로 수렴하는 곡선 확인<br>
                        • <strong>변분 원리(Variational Principle):</strong> 계산된 에너지 $E(\theta) \ge E(바닥상태)$. 아무리 엉터리 각도를 넣어도 진짜 바닥 아래로는 내려가지 않으므로, 낮추기만 하면 무조건 정답에 도달하는 완벽한 수학적 안전장치!
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span><strong>[협동학습]</strong> QPU와 CPU의 역할을 번갈아 체험하며 알고리즘의 피드백 루프를 몸소 이해하도록 지도.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 2번 VQE 3단계 협동 순서도(QPU 측정 ➔ CPU 최적화 ➔ 바닥 상태 도달)를 정확히 서술하는지 점검.</span>
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
                        • VQE 하이브리드 루프 및 변분 원리 요약<br>
                        • 양자 컴퓨터가 혼자 일하지 않고 고전 슈퍼컴퓨터와 2인 3각으로 일하는 이유 확인
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[4차시 예고]</strong> 양자 화학 시뮬레이션 기반 분자 설계 프로젝트<br>
                        • 비커 없이 컴퓨터로 인류 3대 지구 난제(비료, 배터리, 신약)를 해결하는 분자 설계 기획 프로젝트 예고
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
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#d97706;">[4차시]</span> 양자 화학 시뮬레이션 기반 분자 설계 프로젝트</h3>
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
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">양자 계산 화학이 인류의 3대 지구 난제를 해결하는 생태전환적 가치를 인식하고, 가상 분자 설계 아이디어를 바탕으로 미래 스타트업 CEO 창업 기획서를 작성·발표할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>지구적 난제 해결 모둠 프로젝트, 스타트업 기획서 구안, 2분 엘리베이터 피칭 및 모둠 상호 투자 심사</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기, 스타트업 CEO 창업 기획서 양식, 발표 평가 루브릭, 3대 난제 팩트시트</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>단순 공상에 그치지 않고 질소(N≡N) 삼중 결합 절단, 전고체 리튬 이동 채널, 단백질 결합 포켓 등 과학적 메커니즘과 연계하여 기획하도록 지도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('quantum', 4, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('quantum', 4)">
                        <i data-lucide="presentation"></i> <span>프리젠테이션</span>
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
                        • 비커와 시험관 없는 가상 실험실 In Silico Chemistry 비전 소개
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "위험한 화학 약품과 폭발 위험 없이, 컴퓨터 속에서 분자를 자유자재로 조립해 지구 온난화를 멈출 수 있다면 어떨까요?"<br>
                        <strong>[학생 반응]</strong> "위험하지 않게 원하는 약을 하루 만에 만들 수 있어요!", "진짜 과학자가 된 기분이에요!"
                      </div>
                    </div>

                    <!-- 카드 2: 프로젝트 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">프로젝트 선언 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "인류의 3대 지구 난제(식량, 청정 에너지, 질병)를 해결할 양자 화학 스타트업을 우리 손으로 창업한다면?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 양자 계산 화학의 생태전환 가치를 인식하고, 가상 분자 설계 아이디어를 바탕으로 미래 스타트업 CEO 창업 기획서를 작성·발표할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>학생들에게 '틴에이저 CEO'와 '수석 양자과학자' 역할을 부여하여 자긍심과 주도성 고취.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 3대 지구 난제 심층 분석 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">난제 분석 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>인류 3대 지구 난제와 화학 결합 메커니즘:</strong><br>
                        1) <strong>친환경 상온 비료:</strong> 400℃, 200기압을 쓰는 하버-보슈 공정을 대체하여, 상온에서 질소(N≡N) 삼중 결합을 끊는 뿌리혹박테리아 철-몰리브덴(Fe-Mo) 클러스터 모사 촉매 설계 (전 세계 전력 2% 절감)<br>
                        2) <strong>전고체 배터리:</strong> 화재 위험 액체 전해질을 대체하는 초고속 리튬($Li^+$) 이동 결정 채널 설계 (폭발 제로 & 에너지 밀도 2배)<br>
                        3) <strong>표적 항암 신약:</strong> 변종 바이러스 단백질 결합 포켓에 딱 들어맞는 분자를 양자 도킹 시뮬레이션하여 10년 걸릴 개발 기간을 1년으로 단축
                      </p>
                    </div>

                    <!-- 카드 2: 스타트업 CEO 기획서 구안 14분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">창업 기획 14분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>[모둠 프로젝트] 스타트업 CEO 창업 기획서 작성:</strong><br>
                        - 4인 1조 모둠별 역할 분담 (대표 CEO, 수석 양자화학자, 분자 모델러, ESG 가치 평가자)<br>
                        - 3대 난제 중 1개 선택, 스타트업 회사명 작명, 가상 분자 핵심 원리 및 사회·생태적 기대 효과 구안<br>
                        - 모범 사례(퀀텀 카탈리스트, 상온 질소 고정 촉매로 온실가스 1.5% 감축) 벤치마킹
                      </p>
                    </div>

                    <!-- 카드 3: 2분 IR 피칭 & 상호 투자 심사 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">IR 피칭 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 모둠별 2분 엘리베이터 스피치 발표<br>
                        • <strong>3차원 모의 투자 심사:</strong> 과학적 타당성(A/B/C) + 생태전환 가치(A/B/C) 루브릭을 기준으로 다른 모둠 스타트업에 모의 벤처 캐피탈 투자 점수 부여
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
                      <span><strong>[산출물평가]</strong> 기획서의 과학적 원리 접목도와 사회적 파급력을 루브릭으로 다면 평가.</span>
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
                        <span class="plan-card-badge">진로 로드맵 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 모의 투자 심사 결과 공유 및 우수 스타트업 격려<br>
                        • <strong>미래 융합 진로 탐색:</strong> 양자 소프트웨어 엔지니어, 첨단 계산 화학자, 녹색 기술(Green Tech) 창업가
                      </p>
                    </div>

                    <!-- 카드 2: 전 과정 완주 축하 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">과정 완주 3분</span>
                      </div>
                      <p style="margin:0; color:#334155;">
                        • <strong>[양자 모듈 4차시 완주]</strong> 지수 폭발에서 출발하여 큐비트 중첩, 2인 3각 VQE, 스타트업 CEO 프로젝트까지 성실히 탐구한 학생들을 축하하고 KAIST CPRL 청소년 아카데미 수료 선언
                      </p>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>학생들의 창의적 아이디어를 학교생활기록부 교과학습발달상황 세부능력및특기사항(세특) 기재 자료로 적극 연계.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>`;
