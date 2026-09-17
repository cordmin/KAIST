/**
 * KAIST CPRL - OLED 수업 지도안 모듈 데이터 (개요 + 1~4차시)
 * assets/data/lesson-plan-data-oled.js
 */
window.oledLessonPlanHtml = `<div class="chrome-window" id="oled-lesson-plan-chrome-window">
          <!-- 6페이지 크롬 탭 바 (성취수준 연계 신설) -->
          <div class="chrome-tab-bar" role="tablist">
            <button type="button" class="chrome-tab-btn tab-blue active" onclick="switchLessonPlanTab(event, 0)" role="tab" aria-selected="true">
              <span><span class="tab-text-full">성취수준 연계</span><span class="tab-text-mid">성취수준</span><span class="tab-text-short">성취수준</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 1)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">수업 지도안 개요</span><span class="tab-text-mid">지도안 개요</span><span class="tab-text-short">개요</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 2)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[1차시] 형광빛의 원리</span><span class="tab-text-mid">[1차시]</span><span class="tab-text-short">[1차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 3)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[2차시] 전자의 에너지 전달</span><span class="tab-text-mid">[2차시]</span><span class="tab-text-short">[2차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 4)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[3차시] 스핀과 OLED</span><span class="tab-text-mid">[3차시]</span><span class="tab-text-short">[3차시]</span></span>
            </button>
            <button type="button" class="chrome-tab-btn" onclick="switchLessonPlanTab(event, 5)" role="tab" aria-selected="false">
              <span><span class="tab-text-full">[4차시] KAIST 구출작전</span><span class="tab-text-mid">[4차시]</span><span class="tab-text-short">[4차시]</span></span>
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
                  <td style="text-align:center;"><strong>빛과 파동</strong></td>
                  <td>
                    <strong>[9과10-03]</strong> 물체의 색을 빛의 반사와 관련지어 설명하고, 영상 장치에서 빛의 합성을 이용하여 다양한 색이 표현되는 원리를 이해할 수 있다.
                  </td>
                  <td>
                    • 자외선과 가시광선의 파장 및 에너지 차이<br>
                    • 스마트폰 픽셀(RGB) 빛의 합성<br>
                    • 일상 속 형광 물질의 빛 방출 관찰
                  </td>
                  <td>
                    <strong>[A]</strong> 영상 장치가 픽셀(RGB) 합성으로 색을 나타내는 원리를 자외선·가시광선의 에너지 차이와 연결하여 설명함.<br>
                    <strong>[B]</strong> 스마트폰 픽셀(RGB)과 일상 속 형광 물질의 빛 방출 현상을 관찰하고 설명함.<br>
                    <strong>[C]</strong> 영상 장치에서 빛이 합성되어 다양한 색이 나타나는 현상을 관찰하고 말함.
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center;"><strong>물질의 구성</strong></td>
                  <td>
                    <strong>[9과11-02]</strong> 원소를 구성하는 입자인 원자는 양성자, 중성자, 전자로 구성되며, 양성자의 수에 따라 원소의 종류가 달라짐을 입자 모형을 활용하여 설명할 수 있다.<br>
                    <strong>[9과11-04]</strong> 물질을 이루는 입자는 원자, 분자, 이온 등으로 존재할 수 있음을 알고, 이온은 전하를 띠고 있음을 설명할 수 있다.
                  </td>
                  <td>
                    • 자외선이 형광 빛과 열로 바뀌는 과정<br>
                    • 형광 물질을 활용한 에너지 전환 관찰<br>
                    • OLED의 75% 열 손실과 에너지 낭비 원인 탐구
                  </td>
                  <td>
                    <strong>[A]</strong> 물질이 자외선을 흡수하여 형광 빛과 열로 전환되는 과정을 설명하고, OLED의 열 손실 원인을 찾아 제시함.<br>
                    <strong>[B]</strong> 형광 물질을 통해 자외선이 빛과 열로 전환되는 과정을 관찰하여 설명함.<br>
                    <strong>[C]</strong> 형광 물질에 자외선을 비추었을 때 빛이 방출되는 현상을 관찰하여 제시함.
                  </td>
                </tr>
                <tr>
                  <td style="text-align:center;"><strong>전기와 자기</strong></td>
                  <td>
                    <strong>[9과14-02]</strong> 전기 회로에서 전류를 모형으로 설명하고, 실험을 통해 저항, 전류, 전압 사이의 관계를 이끌어낼 수 있다.<br>
                    <strong>[9과14-03]</strong> 저항의 직렬연결과 병렬연결의 특징을 비교하고, 일상생활에서 전기 에너지가 다양한 형태의 에너지로 전환됨을 소비 전력과 관련지어 설명할 수 있다.
                  </td>
                  <td>
                    • 스마트폰 화면(OLED)에 전류가 흐를 때 빛이 나는 원리<br>
                    • 전기 에너지가 빛과 열로 전환되는 현상<br>
                    • 열 손실을 줄여 스마트폰 배터리를 아끼는 기술
                  </td>
                  <td>
                    <strong>[A]</strong> 스마트폰 화면(OLED)에서 전기 에너지가 빛과 열로 전환되는 관계를 바탕으로, 열 손실을 줄여 배터리를 절약하는 원리를 설명함.<br>
                    <strong>[B]</strong> 스마트폰 화면에 전류가 흐를 때 빛과 열이 발생하는 현상을 설명함.<br>
                    <strong>[C]</strong> 전기 에너지가 빛과 열로 전환되어 쓰이는 일상생활의 예를 찾아 말함.
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
                    • 버려지는 열을 빛으로 바꾸는 KAIST 첨단 발광 기술<br>
                    • 미래 디스플레이를 만드는 화학과 연구원 진로 탐구
                  </td>
                  <td>
                    <strong>[A]</strong> 버려지는 열을 빛으로 바꾸는 첨단 발광 기술의 필요성을 설명하고, 미래 디스플레이를 위한 분자 설계 기획서를 타당하게 작성하여 발표함.<br>
                    <strong>[B]</strong> 미래 디스플레이를 개발하는 화학과 연구원이 하는 일을 조사하고 발표함.<br>
                    <strong>[C]</strong> 첨단 디스플레이 기술이 일상생활에 활용되는 사례를 조사하여 제시함.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 1]: 지도안 개요 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div class="card-header" style="margin-bottom:1rem;">
              <h2 class="card-title" style="margin:0; font-size:1.3rem; color:var(--color-charcoal);"><i data-lucide="clipboard-list"></i> 스마트폰 속 75% 배터리 도둑을 잡아라! 빛나는 분자와 OLED의 과학</h2>
              <button class="topbar-btn primary" onclick="window.print()"><i data-lucide="printer"></i> <span>전체 지도안 인쇄</span></button>
            </div>

            <table class="data-table">
              <tr>
                <th style="width:100px; white-space:nowrap; text-align:center;">관련 단원</th>
                <td>중학교 1학년 &lt;과학과 인류의 지속가능한 삶&gt;<br>중학교 2학년 &lt;빛과 파동&gt;, &lt;물질의 구성&gt;, &lt;전기와 자기&gt;<br>중학교 3학년 &lt;과학과 나의 미래&gt;</td>
                <th style="width:100px; white-space:nowrap; text-align:center;">차시</th>
                <td><strong>총 4차시</strong> (90분 블록타임 2회 운영 가능)</td>
              </tr>
              <tr>
                <th style="text-align:center;">성취기준</th>
                <td colspan="3">
                  <strong>[9과10-03]</strong> 물체의 색을 빛의 반사와 관련지어 설명하고, 영상 장치에서 빛의 합성을 이용하여 다양한 색이 표현되는 원리를 이해할 수 있다.<br>
                  <strong>[9과11-02]</strong> 원소를 구성하는 입자인 원자는 양성자, 중성자, 전자로 구성되며, 양성자의 수에 따라 원소의 종류가 달라짐을 입자 모형을 활용하여 설명할 수 있다.<br>
                  <strong>[9과14-02]</strong> 전기 회로에서 전류를 모형으로 설명하고, 실험을 통해 저항, 전류, 전압 사이의 관계를 이끌어낼 수 있다.<br>
                  <strong>[9과14-03]</strong> 저항의 직렬연결과 병렬연결의 특징을 비교하고, 일상생활에서 전기 에너지가 다양한 형태의 에너지로 전환됨을 소비 전력과 관련지어 설명할 수 있다.<br>
                  <strong>[9과01-02]</strong> 과학의 발전이 인류 문명에 미친 영향을 이해하고, 인공지능 등 첨단 과학기술이 가져올 미래 사회의 변화를 조사하여 발표할 수 있다.<br>
                  <strong>[9과23-01]</strong> 과학과 관련된 직업의 종류와 하는 일을 조사하고, 과학기술의 발달로 생기는 미래 사회의 직업 변화를 예상할 수 있다.
                </td>
              </tr>
              <tr>
                <th style="text-align:center;">학습목표</th>
                <td colspan="3">
                  <strong>[지식·이해]</strong> 자외선과 가시광선의 파장 및 에너지 차이를 비교하고, 형광 물질에서 일어나는 빛과 열의 에너지 전환 과정을 설명할 수 있다.<br>
                  <strong>[과정·기능]</strong> 스마트폰 픽셀(RGB)과 일상 속 형광 물질을 관찰하고, 가상실험실을 활용하여 스마트폰 화면(OLED)의 발광 원리와 열 손실(에너지 낭비) 원인을 탐구할 수 있다.<br>
                  <strong>[가치·태도]</strong> 버려지는 열을 빛으로 바꾸는 첨단 발광 기술이 일상생활에 미치는 영향을 인식하고, 미래 디스플레이를 개발하는 화학과 연구원 진로에 흥미와 호기심을 갖는다.
                </td>
              </tr>
              <tr>
                <th style="text-align:center;">탐구방법</th>
                <td>실물 실험, 가상실험실(인터랙티브 시뮬레이션), 디지털 분자 설계 프로젝트</td>
                <th style="text-align:center;">준비물</th>
                <td>스마트기기, UV-A 블랙라이트 램프, 보안경, 토닉워터, 비타민 음료, 올리브유, 형광펜, 천원권 지폐, 검은색 종이</td>
              </tr>
              <tr>
                <th style="text-align:center; white-space:nowrap;">안전 수칙</th>
                <td colspan="3">
                  <strong>1. UV 램프 보안경 착용:</strong> 자외선(UV-A) 광원을 직접 눈으로 보거나 타인에게 비추지 않도록 보안경 착용 지도 및 암실 상자 활용.<br>
                  <strong>2. 시약 음용 금지:</strong> 음료류(토닉워터, 비타민)는 실험용이므로 마시지 않도록 사전 지도 및 폐액 분리 수거.
                </td>
              </tr>
            </table>
          </div>

          <!-- [탭 1]: 1차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#2563eb;">[1차시]</span> 어둠 속을 밝히는 형광빛의 원리 (45분)</h3>
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
                  <td colspan="4"><strong>[9과10-03]</strong> 물체의 색을 빛의 반사와 관련지어 설명하고, 영상 장치에서 빛의 합성을 이용하여 다양한 색이 표현되는 원리를 이해할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">자외선과 가시광선의 파장 및 에너지 차이를 비교하고, 일상 속 형광 물질을 관찰하여 빛 방출 현상을 탐구할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>실물 관찰 실험, 암실 자외선(UV-A) 조사 탐구, 모둠 토의</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기, UV-A 블랙라이트 램프, 보안경, 암실 상자, 토닉워터, 비타민 음료, 올리브유, 형광펜, 천원권 지폐, 검은색 종이</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>보안경 착용, 자외선(UV-A)을 눈이나 피부에 비추지 않기. 시약 음용 금지</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('oled', 1, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('oled', 1)">
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
                        • 교실 소등 후 암실 상자에서 UV-A 블랙라이트로 흰색 면장갑, 형광펜 메모, 학생들의 흰 운동화 끈이나 옷이 어둠 속에서 푸른빛으로 보이는 현상 시연
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "블랙라이트는 어두운 보랏빛으로 거의 보이지 않는데, 왜 신발 끈과 종이는 눈부신 형광빛을 뿜어낼까요?"<br>
                        <strong>[학생 반응]</strong> "스스로 빛을 낸다", "빛을 반사한다", "형광 물질이 들어있다" 등 다양한 생각 유도
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[문제 인식]</strong> "눈에 보이지 않는 빛(자외선)을 비추었는데, 어떻게 우리 눈에 보이는 형광빛으로 바뀌어 나오는 것일까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 자외선과 가시광선의 파장 및 에너지 차이를 비교하고, 일상 속 형광 물질을 관찰하여 빛 방출 현상을 탐구할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>자외선 램프를 얼굴이나 눈에 직접 비추지 않도록 주의 지도. 실험 종료 시까지 보안경 상시 착용 필수.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>극적인 시각 발광 연출을 통해 호기심을 유도하되, 교실 환경이 산만해지지 않도록 정돈된 분위기 유지.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 실험 탐구 14분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">실험 탐구 14분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 3개 비커에 토닉워터, 비타민 음료, 올리브유를 각 30mL씩 담아 암실 상자에 배치, 천원권 지폐 및 형광펜으로 필기한 검은색 종이 준비<br>
                        • <strong>1단계:</strong> 형광등 아래에서 기본 색상 기록 (토닉워터: 무색투명 / 비타민: 맑은 노란색 / 올리브유: 연초록색 / 지폐: 일반 종이색)<br>
                        • <strong>2단계:</strong> 보안경 착용 후 UV-A 램프를 비추며 형광 발광 관찰
                      </p>
                      
                      <!-- 4개 물질 발광 미니 그리드 -->
                      <div class="substance-mini-grid">
                        <div class="substance-mini-item">
                          <span style="font-weight:700;">• 토닉워터 (퀴닌 분자)</span>
                          <span>무색투명 → <strong style="color:#2563eb;">파란색 형광 발광</strong></span>
                        </div>
                        <div class="substance-mini-item">
                          <span style="font-weight:700;">• 비타민 음료 (리보플라빈)</span>
                          <span>맑은 노란색 → <strong style="color:#16a34a;">연두색 형광 발광</strong></span>
                        </div>
                        <div class="substance-mini-item">
                          <span style="font-weight:700;">• 올리브유 (엽록소 분자)</span>
                          <span>연초록색 → <strong style="color:#dc2626;">붉은색 형광 발광</strong></span>
                        </div>
                        <div class="substance-mini-item">
                          <span style="font-weight:700;">• 지폐 & 형광펜 (형광염료)</span>
                          <span>지폐 기본색 → <strong style="color:#d97706;">형광색 발광</strong></span>
                        </div>
                      </div>
                    </div>

                    <!-- 카드 2: 개념 강의 10분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 강의 10분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>빛의 파장과 에너지 관계:</strong> '파도의 촘촘함과 충격량' 비유로 설명 (파도가 촘촘할수록 에너지가 큼)
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.75rem; margin-bottom:0.4rem; line-height:1.6; color:#334155;">
                        • <strong>자외선 (UV-A, 300~400nm):</strong> 파장이 짧고 <strong>에너지가 큼</strong>, 눈에 보이지 않음 (활동지 2번)<br>
                        • <strong>가시광선 (400~700nm):</strong> 파장이 길고 <strong>에너지가 상대적으로 작음</strong>, 눈에 보이는 무지개 색상
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[형광의 정의]</strong> 물질 속 분자가 보이지 않는 <strong>자외선</strong>을 흡수한 뒤, 에너지가 더 낮은 <strong>가시광선</strong>으로 변환하여 방출하는 현상
                      </div>
                    </div>

                    <!-- 카드 3: 모둠 토의 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">모둠 토의 8분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.75rem; margin-bottom:0.35rem; color:#334155;">
                        <strong>[교사 질문]</strong> "자외선 에너지를 100이라고 하면, 방출된 형광빛의 에너지는 70~80입니다. 그렇다면 30의 에너지는 어디로 갔을까요?"<br>
                        <strong>[모둠별 토의]</strong> 활동지 3번에 자유 추론 기록 후 의견 발표
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[에너지 보존 결론]</strong> 에너지가 소멸한 것이 아니라, 분자가 에너지를 흡수한 후 진동하며 <strong>'미세한 열(열에너지)'</strong> 형태로 주변에 방출했음을 도출
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>토닉워터, 비타민 음료 등은 실험용 시약이므로 절대 맛보거나 마시지 않도록 순회 지도.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>암실 상자 덮개를 밀착하여 외부 빛을 차단하고, 램프를 45도 각도로 조사하여 최적의 형광 발광을 관찰하도록 유도.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>각 물질의 본래 색과 자외선을 쬐었을 때의 형광 색상을 왜곡 없이 객관적으로 기록하는지 점검 (활동지 1번).</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>파장과 빛 에너지의 관계(파장이 짧을수록 에너지가 큼)를 올바르게 이해하고 설명할 수 있는지 확인 (활동지 2번).</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>에너지가 '소멸'한 것이 아니라 '열'로 형태가 변환되었음을 강조하여 에너지 보존 법칙의 기초 개념 확립.</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 결과 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">결과 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 모둠별 관찰 결과 공유 (토닉워터: <strong style="color:#2563eb;">파란색 형광</strong>, 비타민: <strong style="color:#16a34a;">연두색 형광</strong>, 올리브유: <strong style="color:#dc2626;">붉은색 형광</strong>, 지폐·형광펜: <strong style="color:#d97706;">주황색 형광</strong>)<br>
                        • 일상 속 형광 기술 활용 사례 (위조지폐·여권 감별, 형광펜, 야간 안전 조끼 등) 소개
                      </p>
                      <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:4px; padding:0.45rem 0.75rem; text-align:center; font-weight:700; color:#0f172a; font-size:0.88rem;">
                        [흡수한 자외선 에너지] = [방출된 형광빛 에너지] + [방출된 열에너지]
                      </div>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 활동지 1~3번 기록 완료 점검 및 상호 확인<br>
                        • 시약은 전용 폐액통에 분리 수거하고 실험 기구 제자리 정돈
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; color:#334155; font-size:0.83rem;">
                        <strong>[2차시 예고]</strong> "전자는 자외선 에너지를 어떻게 흡수하여 빛과 열로 전달할까? (가상실험실 활용)"
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>"자외선과 방출된 형광빛 중 파장이 더 길고 에너지가 작은 빛은 무엇인가?" 구두 질문을 통한 성취기준 달성도 점검.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>시약 잔여물을 하수구에 무단 방류하지 않고 지정된 폐액통에 올바르게 분리 수거하도록 철저 지도.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 2]: 2차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#7c3aed;">[2차시]</span> 전자의 에너지 전달 (45분)</h3>
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
                  <td colspan="4"><strong>[9과11-02]</strong> 원소를 구성하는 입자인 원자는 양성자, 중성자, 전자로 구성됨을 입자 모형을 활용하여 설명할 수 있다.<br><strong>[9과14-03]</strong> 일상생활에서 전기 에너지가 다양한 형태의 에너지로 전환됨을 소비 전력과 관련지어 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">전자의 에너지 전달 과정을 에너지 보존 법칙으로 설명할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>가상실험실(시뮬레이션 조작), 원자 입자 모형 분석, 에너지 전환 관계식 도출</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트기기(태블릿/노트북), 가상실험실, 스펙트럼 자, 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>가상실험실 접속 시 과도한 기기 사용으로 인한 눈 피로 방지 지도 및 전자가 에너지를 흡수·전달하는 직관적 입자 모형 탐구 유도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('oled', 2, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('oled', 2)">
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
                        • 전자의 에너지 흡수와 전달 비유: "탁구채로 공을 때리면 에너지를 받아 날아가듯, 원자 속 전자가 자외선 빛 에너지를 받으면 어떤 일이 일어날까?"
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "1차시에서 형광 물질이 자외선을 받아 가시광선과 열을 뿜어냈습니다. 이 에너지를 실제로 받아서 전달하는 물질 속 입자는 누구일까요?"<br>
                        <strong>[학생 반응]</strong> "원자 속에 있는 전자요!", "전자가 에너지를 흡수해서 움직여요!" 등 원자 모형 속 전자의 역할 상기
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[핵심 질문]</strong> "원자 속 전자는 자외선 에너지를 어떻게 흡수하여 형광빛과 열 형태로 전달하고 전환할까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 원자 모형을 바탕으로 전자가 자외선 에너지를 흡수하여 형광 빛과 열로 전달·전환하는 과정을 에너지 보존 법칙으로 설명할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>고등학교 수준의 '들뜬 상태', '전자의 궤도', '에너지 준위 양자화' 등 과도한 용어 주입을 지양하고, 중2 교육과정의 원자 모형(원자핵과 전자) 및 에너지 전달·전환 개념에 집중하도록 지도.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 원자 모형과 전자의 에너지 변화 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">개념 모형 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>원자 모형 복습:</strong> 물질을 이루는 원자는 중심의 원자핵(+)과 그 주위를 구성하는 전자(-)로 이루어짐<br>
                        • <strong>전자의 에너지 흡수와 상태 변화:</strong> 전자는 외부에서 빛 에너지를 받으면 에너지가 높은 상태가 되며, 이 에너지를 밖으로 전달·방출하며 다시 안정된 원래 상태로 되돌아감
                      </p>
                    </div>

                    <!-- 카드 2: 가상실험실 탐구 16분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">가상실험실 탐구 16분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 가상실험실 조작 실습<br>
                        • <strong>전자의 3단계 에너지 전달 과정:</strong><br>
                        &nbsp;&nbsp;• 1단계 (에너지 흡수): 전자가 높은 에너지의 자외선(365nm)을 흡수하여 에너지가 풍부한 상태가 됨<br>
                        &nbsp;&nbsp;• 2단계 (열에너지 전달): 전자가 주변 원자들과 상호작용(진동)하며 일부 에너지를 미세한 열 형태로 먼저 방출<br>
                        &nbsp;&nbsp;• 3단계 (형광빛 방출): 전자가 남은 에너지를 파란색 가시광선 형광빛(450nm)으로 방출하며 안정된 원래 상태로 복귀
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[빛 에너지의 변화]</strong> 전자가 자외선 에너지를 받은 후 일부를 열로 먼저 방출하고 남은 에너지를 빛으로 내보내므로, 방출되는 형광빛은 흡수한 자외선보다 에너지가 작고 파장이 긴 가시광선으로 나타남
                      </div>
                    </div>

                    <!-- 카드 3: 모둠 토의 및 에너지 보존식 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">모둠 토의 8분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.75rem; margin-bottom:0.35rem; color:#334155;">
                        <strong>[교사 질문]</strong> "전자가 흡수한 자외선 에너지가 100인데, 방출된 형광빛 에너지는 75에 불과합니다. 그렇다면 나머지 에너지는 어디로 갔을까요?"<br>
                        <strong>[학생 토의]</strong> "사라진 것이 아니라 열로 방출되었다", "빛과 열을 합치면 처음 에너지와 같다" 등 에너지 보존 도출
                      </div>
                      <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:4px; padding:0.45rem 0.75rem; text-align:center; font-weight:700; color:#0f172a; font-size:0.88rem;">
                        [전자가 흡수한 자외선 에너지] = [방출된 형광빛 에너지] + [방출된 열에너지]
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>태블릿 접속 및 가상실험실 조작 순회 지도. 눈 피로 방지를 위해 화면 밝기 적정 유지.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[과정평가]</strong> 전자의 3단계 에너지 전달 과정(흡수 → 열 방출 → 형광빛 방출)을 활동지 1번 표에 올바르게 기록하는지 확인.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[과정평가]</strong> 전자의 에너지 전달·전환과 에너지 보존 법칙 관계식을 도출할 수 있는지 점검 (활동지 2번).</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 결과 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">결과 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 2차시 핵심 배움 확인: 1) 원자 모형 속 전자의 역할, 2) 전자의 3단계 에너지 전달(흡수→열 방출→형광 방출), 3) 에너지 전환과 보존 법칙<br>
                        • 활동지 1, 2번 작성 완료 확인 및 모둠 간 상호 검토
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; color:#334155; font-size:0.83rem;">
                        <strong>[3차시 예고]</strong> "배터리의 75%를 열에너지로 낭비하고 있는 스마트폰"
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>"전자가 흡수한 자외선 에너지와 방출된 형광빛·열 에너지의 합은 왜 같은가?" 구두 질문으로 성취기준 달성 점검.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 3]: 3차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#059669;">[3차시]</span> 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑 (45분)</h3>
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
                  <td colspan="4"><strong>[9과11-02]</strong> 물질의 구성 입자 모형<br><strong>[9과14-02]</strong> 전기 회로와 전류 모형<br><strong>[9과14-03]</strong> 전기 에너지의 다양한 형태 전환과 소비 전력</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">스마트폰 화면(OLED)에 전류가 흐를 때 일어나는 에너지 전환을 탐구하고, 75%의 에너지가 열로 낭비되는 원인을 분석할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>현미경 루페 픽셀 관찰, 양자 스핀 팽이 교구 조작, 가상실험실 확률 시뮬레이션, 모둠 토의</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">스마트폰 디스플레이, 마이크로 루페(60배), 양자 스핀 팽이 교구, 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>단일항과 삼중항의 양자역학 수식 대신 '회전 팽이 방향(↑↓ vs ↑↑)'과 탈출 비상문 비유로 지도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('oled', 3, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('oled', 3)">
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
                        • 스마트폰 발열 현상 상기: "유튜브나 게임을 오래 하면 왜 화면 뒤쪽이 점점 뜨거워지고 배터리가 닳을까?"
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "화면을 켜기 위해 배터리 전기를 100 넣었는데, 왜 화면은 뜨거워지고 배터리는 순식간에 사라질까요?"<br>
                        <strong>[학생 반응]</strong> "전기가 열로 바뀌어서", "빛을 만드는 데 전기를 다 못 써서" 등
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[핵심 질문]</strong> "스마트폰 화면에 전기를 주입하면, 왜 25%만 빛이 되고 무려 75%는 쓸모없는 열로 버려질까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 스마트폰 화면(OLED)에 전류가 흐를 때 일어나는 에너지 전환을 탐구하고, 75%의 에너지가 열로 낭비되는 원인을 분석할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>학생들이 매일 접하는 스마트폰 배터리 소모와 발열 현상을 출발점으로 삼아 높은 몰입도 유도.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 서브픽셀 관찰 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">서브픽셀 관찰 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 마이크로 루페(60배)로 스마트폰 화면의 하얀 바탕 초근접 관찰: 빨강(R), 초록(G), 파랑(B) 다이아몬드 배열 확인 [9과10-03]<br>
                        • 전자의 자전 팽이(스핀) 모형 도입: 전자는 시계 또는 반시계 방향으로 회전하는 작은 팽이(↑ 또는 ↓)
                      </p>
                    </div>

                    <!-- 카드 2: 가상실험실 및 스핀 통계 16분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">가상실험실 & 통계 16분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>스핀 통계 1:3의 양자역학적 비밀:</strong> 전기를 넣으면 전자(-)와 정공(+)이 만날 때 4가지 스핀 조합 형성<br>
                        &nbsp;&nbsp;1) <strong>단일항 (Singlet, S₁ - 25%):</strong> 서로 반대 방향 회전(↑↓). 탈출 비상문 활짝 열림 ➔ 1억 분의 1초 만에 100% <strong>빛(형광)</strong> 방출!<br>
                        &nbsp;&nbsp;2) <strong>삼중항 (Triplet, T₁ - 75%):</strong> 서로 같은 방향 회전(↑↑, ↓↓ 등). 탈출 비상문 굳게 잠김 ➔ 빛을 못 내고 100% <strong>열</strong>로 낭비!
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[75% 배터리 도둑의 진실]</strong> 주입된 배터리 전기의 75%가 빛을 내지 못하고 스마트폰을 뜨겁게 달구며 배터리를 낭비함
                      </div>
                    </div>

                    <!-- 카드 3: 모둠 토의 및 발열 메커니즘 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">모둠 토의 8분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.75rem; margin-bottom:0.35rem; color:#334155;">
                        <strong>[교사 질문]</strong> "삼중항에 갇힌 75%의 전자는 스마트폰에 어떤 치명적인 피해를 줄까요?"<br>
                        <strong>[학생 토의]</strong> 화면 발열, 배터리 조기 방전, 유기 분자 파괴(번인 현상) 분석
                      </div>
                      <div style="background:#ffffff; border:1px solid #cbd5e1; border-radius:4px; padding:0.45rem 0.75rem; text-align:center; font-weight:700; color:#0f172a; font-size:0.88rem;">
                        [ 주입된 배터리 전기 ] = [ 25% 유용한 형광빛 ] + [ 75% 버려지는 열에너지 ]
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>루페 클립 보호 패드를 확인하여 스마트폰 액정에 스크래치가 생기지 않도록 주의 지도.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[과정평가]</strong> 단일항과 삼중항의 차이를 전자의 스핀 회전 방향과 연결하여 활동지 1번 표에 올바르게 기록하는지 확인.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[과정평가]</strong> 75% 열 손실의 원인을 양자 스핀 확률과 연결하여 서술할 수 있는지 점검 (활동지 2번).</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 결과 정리 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">결과 정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 3차시 핵심 배움 확인: 1) RGB 서브픽셀 빛의 합성, 2) 스핀 확률 1:3(단일항 25% vs 삼중항 75%), 3) 75% 발열 난제<br>
                        • 활동지 1, 2번 기록 점검 및 상호 피드백
                      </p>
                    </div>

                    <!-- 카드 2: 차시 예고 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">차시 예고 3분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; color:#334155; font-size:0.83rem;">
                        <strong>[4차시 예고]</strong> "갇혀서 열만 내는 75%의 전자를 구출할 기적의 방법은 없을까? (KAIST의 핫 엑시톤 원천 기술과 청색 분자 디자이너)"
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>"전기를 넣었을 때 단일항과 삼중항의 생성 비율은 각각 몇 %인가?" 구두 질문으로 성취기준 달성도 점검.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- [탭 4]: 4차시 -->
          <div class="chrome-tab-panel" role="tabpanel">
            <div style="margin-bottom:0.75rem;">
              <h3 style="color:#1e293b; font-size:1.2rem; margin:0;"><span style="color:#d97706;">[4차시]</span> KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너 (45분)</h3>
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
                  <td colspan="4"><strong>[9과10-03]</strong> 영상 장치에서 빛의 합성 원리<br><strong>[9과01-02]</strong> 첨단 과학기술이 가져올 미래 사회의 변화<br><strong>[9과23-01]</strong> 과학기술의 발달과 미래 사회 직업 변화</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">학습목표</th>
                  <td colspan="4">버려지는 열을 빛으로 바꾸는 KAIST 첨단 발광 기술을 탐구하고, 미래 디스플레이를 위한 화학과 연구원 프로젝트(분자 기획서 작성)를 수행할 수 있다.</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">탐구방법</th>
                  <td>회로 제작 실습, 가상실험실 분자 시뮬레이션, 모둠별 분자 디자이너 기획서 작성, 1분 피칭 발표</td>
                  <th style="text-align:center; white-space:nowrap;">준비물</th>
                  <td colspan="2">초소형 LED/OLED 발광 소자 키트, 구리 테이프, 3V 코인 전지, 분자 시뮬레이터 태블릿, 기획서 활동지</td>
                </tr>
                <tr>
                  <th style="text-align:center; white-space:nowrap;">주의사항</th>
                  <td>빛의 합성 원리와 화학 결합 안정성을 융합적으로 고려하고 3차원 루브릭 기반 상호 평가 유도</td>
                  <th style="text-align:center; white-space:nowrap;">수업자료</th>
                  <td colspan="2">
                    <div style="display:inline-flex; gap:0.45rem; flex-wrap:wrap; align-items:center;">
                      <button type="button" class="topbar-btn primary" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openWorksheetModal('oled', 4, 'student')">
                        <i data-lucide="file-text"></i> <span>활동지</span>
                      </button>
                      <button type="button" class="topbar-btn btn-presentation" style="padding:0.35rem 0.75rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="openPresentationModal('oled', 4)">
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
                        • 스마트폰 화면 번인(Burn-in) 상기: "스마트폰 화면을 오래 쓰면 왜 항상 파란색이 먼저 타서 누런 잔상이 남을까?"
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; margin-top:0.35rem; color:#334155;">
                        <strong>[교사 발문]</strong> "파란색은 에너지가 너무 높아 분자가 쉽게 깨집니다. 갇혀서 열만 내는 75%의 전자를 구출하여 파란색 OLED를 살릴 방법은 없을까요?"<br>
                        <strong>[학생 반응]</strong> "분자를 더 튼튼하게 만든다", "열을 빛으로 바꾸는 우회로를 만든다" 등
                      </div>
                    </div>

                    <!-- 카드 2: 학습목표 안내 2분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">학습목표 안내 2분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.65rem; font-size:0.83rem; color:#334155; line-height:1.5;">
                        <div style="margin-bottom:0.35rem;">
                          <strong>[핵심 질문]</strong> "KAIST 연구팀은 어떻게 갇혀 있던 75%의 삼중항 전자를 빛으로 구출하여 효율 100%를 달성했을까?"
                        </div>
                        <div>
                          <strong>[학습목표]</strong> 버려지는 열을 빛으로 바꾸는 KAIST 첨단 발광 기술을 탐구하고, 미래 디스플레이를 위한 화학과 연구원 프로젝트(분자 기획서 작성)를 수행할 수 있다.
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>세계 최고 권위의 대한민국 KAIST CPRL 연구진 성과를 소개해 학생들의 자긍심 고취.</span>
                    </div>
                  </td>
                </tr>

                <!-- 전개 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>전개</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 회로 점등 및 청색 난제 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">회로 점등 & 난제 8분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • 코인 전지와 구리 테이프로 LED 회로를 구성하여 점등 실습 (전기 ➔ 빛 전환 체험)<br>
                        • <strong>청색(Blue) OLED의 비극:</strong> 빨강·초록과 달리 파란색은 에너지가 너무 높아 화학 결합이 쉽게 분해됨
                      </p>
                    </div>

                    <!-- 카드 2: KAIST 핫 엑시톤 원리 규명 16분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">핫 엑시톤 메커니즘 16분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • <strong>옥상 위의 초고속 구름다리(Hot Exciton):</strong><br>
                        &nbsp;&nbsp;- 갇힌 삼중항 전자가 1층(T₁) 바닥으로 떨어져 열을 내기 전에, 에너지가 높은 2층(T₂) 옥상에서 단일항(S₁)으로 순식간에 스핀을 뒤집어 건너가는 <strong>초고속 역간교차(RISC) 구름다리</strong> 개설!<br>
                        &nbsp;&nbsp;- <i data-lucide="sparkles" style="width:14px; height:14px; vertical-align:middle; color:#2563eb;"></i> <strong>결과: 비싼 중금속 없이 100% 청색 발광 & 배터리 사용 시간 2배 증대 달성!</strong>
                      </p>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; font-size:0.84rem; color:#0f172a;">
                        <strong>[모둠 프로젝트] 미래 청색 OLED 분자 디자이너:</strong> 결합을 단단하게 보강한 나만의 고효율 파란색 발광 분자 및 롤러블 디스플레이 기획서 작성 [9과23-01]
                      </div>
                    </div>

                    <!-- 카드 3: 모둠 발표 및 상호 평가 8분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">피칭 발표 8분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.45rem 0.75rem; margin-bottom:0.35rem; color:#334155;">
                        <strong>[모둠별 1분 피칭]</strong> 스타트업 회사명, 대표 디자이너, 단단한 분자 구조 아이디어, 75% 구출 메커니즘 적용 방안 발표<br>
                        <strong>[동료 평가]</strong> 3차원 루브릭(과학적 타당성, 창의성 및 기획력) 기반 모둠 간 상호 평가
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="alert-triangle"></i>
                      <span>구리 테이프 절단 시 단면에 손이 베이지 않도록 안전 지도 및 전지 극성 확인.</span>
                    </div>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span><strong>[산출물평가]</strong> 미래 청색 분자 디자이너 기획서의 과학적 타당성(핫 엑시톤 구름다리 적용 여부)을 평가 (루브릭 적용).</span>
                    </div>
                  </td>
                </tr>

                <!-- 정리 -->
                <tr>
                  <td style="text-align:center; vertical-align:middle; white-space:nowrap; background-color:#f1f5f9;"><strong>정리</strong></td>
                  <td colspan="3">
                    <!-- 카드 1: 결과 정리 및 모듈 완주 5분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">단원 총정리 5분</span>
                      </div>
                      <p style="margin:0 0 0.35rem 0; color:#334155;">
                        • OLED 4차시 총정리: 1) 형광빛의 원리, 2) 전자의 에너지 전달, 3) 1:3 스핀 확률과 75% 배터리 도둑, 4) KAIST 핫 엑시톤 100% 구출 원천 기술<br>
                        • 우수 분자 디자이너 모둠 선정 및 축하
                      </p>
                    </div>

                    <!-- 카드 2: 미래 진로 탐색 3분 -->
                    <div class="plan-card">
                      <div class="plan-card-header">
                        <span class="plan-card-badge">진로 로드맵 3분</span>
                      </div>
                      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:4px; padding:0.4rem 0.65rem; color:#334155; font-size:0.83rem;">
                        <strong>[미래 진로 로드맵]</strong> 컴퓨터로 분자를 프로그래밍하는 <strong>계산화학자</strong>, 접히고 말리는 디스플레이를 만드는 <strong>신소재 나노공학자</strong>로의 꿈 연결 [9과23-01]
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="plan-note-card">
                      <i data-lucide="pencil"></i>
                      <span>활동지 산출물과 피칭 태도를 종합하여 학교생활기록부 교과학습발달상황 세특 기재 연계.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>`;
