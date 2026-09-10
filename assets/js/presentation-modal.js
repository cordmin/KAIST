/**
 * KAIST 첨단과학 탐구 - 차시별 탐구수업 전용 프리젠테이션 시스템
 * 
 * [설계 원칙]
 * 1. 차시별 완전 독립 프리젠테이션 (OLED 1~4차시, Quantum 1~4차시)
 * 2. 10장 이내 엄격 준수 (각 차시당 정확히 9장 표준 시퀀스)
 * 3. 탐구수업 프로세스 표준화:
 *    - Slide 1: 도입 (표지 & 탐구 질문)
 *    - Slide 2: 도입 (동기 유발 현상)
 *    - Slide 3: 준비 (탐구 활동 준비물 안내 - 실제 실험도구 실사 사진)
 *    - Slide 4: 준비 (필수 안전 수칙)
 *    - Slide 5: 전개 (탐구 활동 절차 Step-by-Step)
 *    - Slide 6: 전개 (탐구 기록 및 모범 정답)
 *    - Slide 7: 전개 (핵심 개념 원리)
 *    - Slide 8: 정리 (탐구 결론 및 생각거리)
 *    - Slide 9: 정리 (차시 정리 및 다음 차시 예고)
 * 4. 텍스트 최소화 및 시각화 (카드형 UI, 뱃지, 실사 사진, 관찰표)
 * 5. 빔프로젝터 / 전자칠판 16:9 전체화면(Fullscreen API) 및 키보드 단축키 지원
 */

function getToolAsset(filename) {
  const isSub = (typeof window !== 'undefined' && window.location && window.location.pathname) 
    ? (window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/'))
    : false;
  return (isSub ? '../' : '') + 'image/tools/' + filename;
}

const presentationModalData = {
  // =========================================================================
  // [패키지 01] 분자의 빛과 디스플레이의 과학 (OLED)
  // =========================================================================
  oled: {
    // -----------------------------------------------------------------------
    // OLED 1차시: 자외선과 형광
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 어둠 속을 밝히는 빛의 마법: 자외선과 형광 탐정단',
      badge: 'OLED 1차시 · 자외선과 형광',
      slides: [
        {
          tag: '1차시 도입 · [9과10-03]',
          title: '자외선 형광 탐정단: 어둠 속 숨은 빛을 찾아라!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "왜 우리 눈에 전혀 보이지 않는 자외선(Black Light)을 비추었는데, 눈부신 알록달록 무지개 빛이 뿜어져 나올까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="sparkles"></i> <strong>형광(Fluorescence)의 마법을 밝혀라!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list">
                  <li>자외선과 가시광선의 <strong>파장 및 에너지 차이</strong>를 비교할 수 있다.</li>
                  <li>일상 속 형광 물질에 자외선을 비추어 <strong>새로운 빛이 방출되는 원리</strong>를 관찰한다.</li>
                  <li>에너지가 전환되는 과정에서 <strong>에너지 보존 법칙</strong>을 설명할 수 있다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 도입 · 동기 유발',
          title: '어두운 방에서 켠 블랙라이트: 신발 끈과 지폐의 대변신!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="eye"></i> 일상 속 신비한 순간</div>
                <ul class="pres-list">
                  <li>평범했던 <strong>하얀 운동화 끈</strong>이 눈이 시리도록 푸른빛으로 발광!</li>
                  <li>지폐와 여권을 비추자 숨겨져 있던 <strong>비밀 형광 무늬</strong>가 선명하게 등장!</li>
                  <li>투명한 탄산음료(토닉워터)가 <strong>사파이어 보석빛</strong>으로 변신!</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="zap"></i> 생각 열기 질문</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  분명히 어두컴컴한 암실에서 <strong>보이지 않는 빛(자외선)</strong>만 쏘아주었는데, 
                  물질 속 분자들은 어디서 에너지를 얻어 새로운 색의 빛을 만들어내는 것일까요?
                </p>
                <div style="text-align:center; margin-top:1rem; font-weight:800; font-size:1.3rem; color:#60a5fa;">
                  👉 물질 속 '원자와 전자'의 비밀을 파헤쳐 봅시다!
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 준비 · 실물 실험도구',
          title: '1차시 탐구 활동 준비물 안내 (실제 실험 도구)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('oled_tools_1.jpg')}" alt="1차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>실제 실험대 위 준비물 세트 (1조당 1세트)</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="flashlight"></i></div>
                  <div>
                    <div class="pres-tool-name">UV-A 블랙라이트 램프 (365nm)</div>
                    <div class="pres-tool-desc">형광 물질을 들뜨게 만드는 자외선 광원</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="glasses"></i></div>
                  <div>
                    <div class="pres-tool-name">자외선 차단 실험 보안경</div>
                    <div class="pres-tool-desc">눈을 안전하게 보호하는 필수 보호 장비</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="flask-round"></i></div>
                  <div>
                    <div class="pres-tool-name">시약 3종 (토닉워터 / 비타민 / 올리브유)</div>
                    <div class="pres-tool-desc">퀴닌, 리보플라빈, 엽록소 형광 관찰용</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="banknote"></i></div>
                  <div>
                    <div class="pres-tool-name">암실 상자, 형광펜, 지폐</div>
                    <div class="pres-tool-desc">암실 환경 조성 및 보안 형광 요소 확인</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 준비 · 안전 수칙',
          title: '실험실 필수 안전 수칙 (Safety First)',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="alert-triangle"></i></div>
                <div class="pres-safety-title">1. 자외선 직시 절대 금지</div>
                <div class="pres-safety-desc">
                  자외선(UV-A) 광원을 직접 눈으로 보거나 친구 얼굴/피부에 절대 비추지 마세요. <strong>보안경을 반드시 착용</strong>합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="ban"></i></div>
                <div class="pres-safety-title">2. 시약 음용 절대 금지</div>
                <div class="pres-safety-desc">
                  토닉워터, 비타민 음료, 올리브유는 <strong>실험 관찰용 시약</strong>입니다. 어떠한 경우에도 마시거나 맛보지 않습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield-check"></i></div>
                <div class="pres-safety-title">3. 암실 상자 & 폐액 분리</div>
                <div class="pres-safety-desc">
                  주변 빛을 차단하는 <strong>암실 상자 안에서만 램프를 작동</strong>하고, 실험 후 시약은 지정된 폐액통에 분리 수거합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 전개 · 탐구 절차',
          title: '탐구 활동: 일상 속 형광 탐정단 3단계 미션',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">시약 준비 & 암실 배치</div>
                <p>3개의 비커에 토닉워터, 비타민 음료, 올리브유를 각각 30mL씩 따르고 암실 상자 내부에 정렬합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">자외선 조사 & 색상 관찰</div>
                <p>보안경을 쓰고 암실 투입구로 UV-A 램프를 켭니다. 일반 빛과 자외선 아래서의 색상 변화를 비교 관찰합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">지폐 & 형광펜 확인</div>
                <p>지폐의 숨은 형광 실선과 형광펜 글씨에 자외선을 비추어 나타나는 발광 패턴을 활동지에 기록합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 전개 · 탐구 기록 및 정답',
          title: '활동지 관찰 결과 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>관찰 대상</th>
                    <th>포함된 핵심 분자</th>
                    <th>일반 조명 아래 색</th>
                    <th>자외선(UV-A) 조사 시 관찰 결과 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>토닉워터</strong></td>
                    <td>퀴닌 (Quinine)</td>
                    <td>무색 투명</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">눈부신 사파이어 파란색(Blue) 형광 발광</span></td>
                  </tr>
                  <tr>
                    <td><strong>비타민 음료</strong></td>
                    <td>리보플라빈 (비타민 B2)</td>
                    <td>맑은 노란색</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">시리도록 밝은 형광 연두색(Green) 발광</span></td>
                  </tr>
                  <tr>
                    <td><strong>올리브유</strong></td>
                    <td>엽록소 (Chlorophyll)</td>
                    <td>연한 초록빛</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">신비로운 붉은색(Crimson Red) 발광</span></td>
                  </tr>
                  <tr>
                    <td><strong>지폐 & 형광펜</strong></td>
                    <td>위조방지 형광염료</td>
                    <td>연한 무늬 / 노란 잉크</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">숨겨진 다색 형광 실선 및 고휘도 발광</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '1차시 전개 · 개념 원리',
          title: '빛의 스펙트럼: 파장이 짧을수록 에너지는 세다!',
          content: `
            <div class="pres-spectrum-wrap">
              <div class="pres-spectrum-bar">
                <div class="spec-part spec-uv">자외선 (300~400nm)<br><span class="spec-sub">고에너지 · 눈에 안 보임</span></div>
                <div class="spec-part spec-vis">가시광선 (400~700nm)<br><span class="spec-sub">인간이 보는 무지개 (파랑 ➔ 초록 ➔ 빨강)</span></div>
                <div class="spec-part spec-ir">적외선 (700nm~)<br><span class="spec-sub">저에너지 · 열선</span></div>
              </div>
            </div>
            <div class="pres-grid-2" style="margin-top:1.25rem;">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="zap"></i> 파장과 광자 에너지</div>
                <p>빛은 알갱이(광자)입니다. 파장이 짧은 <strong>자외선(UV) 광자</strong>는 마치 빠른 강펀치처럼 에너지가 매우 큽니다!</p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="scale"></i> 에너지의 변신 법칙</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  <strong>센 에너지(자외선)</strong>가 들어가서 <strong>순한 에너지(가시광선)</strong>로 바뀌어 나왔습니다. 
                  남은 에너지는 어디로 사라졌을까요?
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '1차시 정리 · 결론 및 법칙',
          title: '탐구 결론: 에너지 보존의 법칙 (사라진 에너지는 어디로?)',
          content: `
            <div class="pres-equation-card">
              <div class="eq-title">[ 대자연의 철칙: 에너지 보존 법칙 (Energy Conservation) ]</div>
              <div class="eq-formula">
                [ 흡수한 자외선 에너지 ] = [ 방출된 형광빛 에너지 ] + [ 분자가 흘린 열(Heat) ]
              </div>
            </div>
            <div class="pres-grid-2" style="margin-top:1.25rem;">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 오늘 확인한 과학 원리</div>
                <ul class="pres-list">
                  <li>형광은 보이지 않는 고에너지 자외선을 흡수하여 가시광선으로 뿜는 현상입니다.</li>
                  <li>빛의 에너지는 절대 사라지지 않고 <strong>빛 + 열</strong>로 완벽히 보존됩니다.</li>
                </ul>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="flame"></i> 열에너지의 역할</div>
                <p>분자 속 전자가 계단 위에서 부르르 떨며 미세한 <strong>열(진동 에너지)</strong>을 흘렸기 때문에 나오는 빛의 색이 바뀐 것입니다!</p>
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
                  <li>✅ 자외선(고에너지) vs 가시광선(저에너지) 파장 관계 이해</li>
                  <li>✅ 퀴닌(파랑), 리보플라빈(연두), 엽록소(빨강) 형광 관찰 완료</li>
                  <li>✅ 에너지 보존 법칙 (자외선 = 형광빛 + 열) 수식 도출</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 2차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[2차시] 꼬마 전자의 트램펄린 점프: 들뜬 상태와 에너지 전환</strong><br>
                  "원자 속 전자는 어떻게 계단을 뛰어오르고, 어떻게 열과 형광을 뿜으며 착지할까요?"<br>
                  👉 <strong>인터랙티브 가상실험실(Lab 1)</strong>에서 전자를 직접 발사해 봅니다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 2차시: 전자의 점프와 에너지 준위
    // -----------------------------------------------------------------------
    2: {
      lessonTitle: '[2차시] 꼬마 전자의 트램펄린 점프: 들뜬 상태와 에너지 전환',
      badge: 'OLED 2차시 · 전자의 에너지 준위',
      slides: [
        {
          tag: '2차시 도입 · [9과11-02]',
          title: '원자 속 전자의 아파트 계단: 들뜬 상태와 바닥 상태',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "전자는 계단과 계단 사이 허공에 서 있을 수 있을까? 왜 정해진 높이로만 점프할까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="layers"></i> <strong>불연속적인 에너지 준위(양자화)의 비밀!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list">
                  <li>원자 속 전자가 <strong>정해진 궤도(에너지 준위)</strong>에만 존재함을 모형으로 설명한다.</li>
                  <li>가상실험실을 통해 <strong>흡수 ➔ 진동 이완 ➔ 형광 방출</strong> 3단계를 조작한다.</li>
                  <li><strong>스토크스 이동(Stokes Shift)</strong>의 원리를 설명할 수 있다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 도입 · 동기 유발',
          title: '트램펄린 점프 비유: 뛰어오른 아이는 공중에 멈출 수 없다!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="activity"></i> 트램펄린 놀이터의 전자</div>
                <ul class="pres-list">
                  <li><strong>바닥 상태 (1층):</strong> 트램펄린 매트 위에서 편안하게 쉬고 있는 안정된 상태</li>
                  <li><strong>광자 흡수 (도약):</strong> 아래에서 강한 힘을 받아 옥상(3층)으로 껑충 점프!</li>
                  <li><strong>들뜬 상태 (3층):</strong> 너무 높아 불안정하므로 반드시 바닥으로 떨어져야 함!</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="sparkles"></i> 미시세계의 놀라운 규칙</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  전자는 1.5층이나 2.3층 같은 어중간한 높이에는 결코 존재할 수 없습니다. 
                  정확히 계단 높이에 딱 맞는 에너지만 먹고 점프합니다. 이것이 바로 <strong>'양자(Quantum)'</strong>입니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 준비 · 실물 실험도구',
          title: '2차시 탐구 실습 준비물 안내 (실제 교구 및 태블릿)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('oled_tools_2.jpg')}" alt="2차시 실습 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>가상실험 태블릿 및 에너지 준위 모형 카드 세트</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="tablet"></i></div>
                  <div>
                    <div class="pres-tool-name">스마트 태블릿 / 크롬북</div>
                    <div class="pres-tool-desc">HTML5 가상실험실(Lab 1) 구동 장치</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="layers"></i></div>
                  <div>
                    <div class="pres-tool-name">에너지 준위 모형 카드 (S0, S1, T1)</div>
                    <div class="pres-tool-desc">바닥 상태와 들뜬 상태를 손으로 맞추는 조립 카드</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="ruler"></i></div>
                  <div>
                    <div class="pres-tool-name">파장-에너지 컬러 스펙트럼 자</div>
                    <div class="pres-tool-desc">자외선과 파란 형광의 에너지 수치 비교 도구</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="file-edit"></i></div>
                  <div>
                    <div class="pres-tool-name">탐구 활동지 2번 & 기록 펜</div>
                    <div class="pres-tool-desc">계단 점프 3단계 시뮬레이션 결과 기록</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 준비 · 안전 및 실습 수칙',
          title: '디지털 가상실험 안전 및 실습 규칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="smartphone"></i></div>
                <div class="pres-safety-title">1. 스마트기기 안전 관리</div>
                <div class="pres-safety-desc">
                  태블릿 거치대를 안정적으로 설치하고, 물기 있는 손으로 화면을 만지지 않습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="sliders"></i></div>
                <div class="pres-safety-title">2. 단계별 시뮬레이션 준수</div>
                <div class="pres-safety-desc">
                  버튼을 무작위로 연타하지 말고, <strong>광자 발사 ➔ 진동 ➔ 방출</strong> 과정을 순서대로 관찰합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="users"></i></div>
                <div class="pres-safety-title">3. 모둠원 역할 분담</div>
                <div class="pres-safety-desc">
                  조작 담당과 관찰 기록 담당을 번갈아 가며 모든 학생이 시뮬레이터를 직접 체험합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 탐구 절차',
          title: '가상실험실(Lab 1): 전자의 3단계 여정 조작',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">자외선 광자 발사 (흡수)</div>
                <p>가상실험실에서 <strong>[⚡ 자외선 광자 발사!]</strong>를 클릭하여 1층 전자가 3층(S₁)으로 솟구치는 순간을 확인합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">진동 열 방출 (이완)</div>
                <p>3층에서 전자가 바들바들 떨면서 미세한 <strong>열(진동 에너지)</strong>을 뿜고 2층으로 한 칸 내려앉는 모습을 관찰합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">형광 가시광선 방출</div>
                <p>2층에서 1층(S₀)으로 수직 착지하면서 사방으로 <strong>눈부신 파란 형광 광자(450nm)</strong>를 뿜어내는 모습을 기록합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 탐구 기록 및 정답',
          title: '활동지 시뮬레이션 관찰표 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>단계</th>
                    <th>전자의 위치 이동</th>
                    <th>에너지 출입 형태</th>
                    <th>활동지 정답 및 물리적 의미</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1단계: 흡수</strong></td>
                    <td>1층(S₀) ➔ 3층(S₁) 옥상</td>
                    <td>자외선 광자 흡수</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">들뜬 상태(Excited State) 도달 (에너지 축적)</span></td>
                  </tr>
                  <tr>
                    <td><strong>2단계: 진동 이완</strong></td>
                    <td>3층 높은 곳 ➔ 2층 출발선</td>
                    <td>미세 열에너지 방출</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">분자 진동으로 열 방출 (방출 빛의 에너지 감소 원인)</span></td>
                  </tr>
                  <tr>
                    <td><strong>3단계: 형광 방출</strong></td>
                    <td>2층 출발선 ➔ 1층(S₀) 바닥</td>
                    <td>가시광선 광자 방출</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">사파이어 파란 형광(450nm) 1억 분의 1초 만에 방출</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '2차시 전개 · 개념 원리',
          title: '스토크스 이동 (Stokes Shift): 빛의 색이 바뀐 이유',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="move-right"></i> 스토크스 이동의 정의</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  물질이 <strong>흡수한 빛의 파장보다 방출하는 빛의 파장이 더 길어지는 현상</strong>을 발견자 조지 스토크스의 이름을 따서 <strong>스토크스 이동</strong>이라고 부릅니다.
                </p>
                <div class="pres-badge-box" style="margin-top:1rem;">
                  파장이 길어졌다 = 광자 에너지가 작아졌다!
                </div>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 에너지가 줄어든 원인</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  전자가 높은 층에 도달했을 때 분자가 덜덜 떨리며 <strong>'열'</strong>을 외부로 흘렸기 때문에, 
                  남은 에너지만 빛으로 나오면서 파장이 긴 가시광선(파랑, 연두, 빨강)으로 바뀐 것입니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '2차시 정리 · 결론 및 수식',
          title: '탐구 결론: 원자 속 꼬마 전자도 에너지 보존을 지킨다!',
          content: `
            <div class="pres-equation-card">
              <div class="eq-title">[ 전자의 3단계 에너지 수지 방정식 ]</div>
              <div class="eq-formula">
                E(자외선 광자) = E(형광 광자) + E(진동 열에너지)
              </div>
            </div>
            <div class="pres-grid-2" style="margin-top:1.25rem;">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 핵심 결론 1</div>
                <p>미시세계의 원자와 전자도 대자연의 위대한 <strong>에너지 보존 법칙</strong>을 한 치의 오차 없이 엄격하게 준수합니다.</p>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 핵심 결론 2</div>
                <p>전자가 1층으로 내려오며 빛을 내는 속도는 무려 <strong>1억 분의 1초(나노초 단위)</strong>로 번개보다 빠릅니다.</p>
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
                  <li>✅ 양자화된 에너지 준위(불연속 계단) 이해</li>
                  <li>✅ 전자의 3단계(흡수 ➔ 진동 열 손실 ➔ 형광 방출) 시뮬레이션</li>
                  <li>✅ 스토크스 이동과 에너지 보존 법칙 증명</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 3차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[3차시] 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑</strong><br>
                  "스마트폰 화면은 왜 오래 켜두면 뜨거워지고 배터리가 닳을까요?"<br>
                  전자가 팽이처럼 도는 <strong>'스핀'</strong> 때문에 나타난 충격적인 배터리 도둑을 파헤칩니다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 3차시: 스핀과 OLED 75% 배터리 도둑
    // -----------------------------------------------------------------------
    3: {
      lessonTitle: '[3차시] 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑',
      badge: 'OLED 3차시 · 스핀 통계 & 난제',
      slides: [
        {
          tag: '3차시 도입 · [9과14-02] [9과14-03]',
          title: '스마트폰 화면의 미스터리: 전기를 넣었는데 왜 뜨거워질까?',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "스마트폰 OLED 화면에 전기를 주입하면, 왜 25%만 빛이 되고 무려 75%는 쓸모없는 열로 낭비될까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="rotate-cw"></i> <strong>전자의 자전 팽이: 스핀(Spin) 통계의 비밀!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list">
                  <li>스마트폰 화면 속 <strong>RGB 서브픽셀</strong>을 간이 루페로 관찰한다.</li>
                  <li>전자의 스핀 방향에 따라 <strong>단일항(25%)과 삼중항(75%)</strong>이 생김을 이해한다.</li>
                  <li>스마트폰 OLED 디스플레이의 <strong>발열 및 배터리 소모 원인</strong>을 설명한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 도입 · 동기 유발',
          title: '스마트폰 화면 돋보기 관찰: 알록달록 미세 모자이크!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="smartphone"></i> 하얀색 화면의 착시 현상</div>
                <ul class="pres-list">
                  <li>스마트폰 화면의 하얀 바탕을 현미경 루페로 보면 하얀색이 아닙니다!</li>
                  <li><strong>빨강(R), 초록(G), 파랑(B)</strong> 세 가지 초소형 발광 다이오드가 빽빽이 모여 빛을 내고 있습니다.</li>
                  <li>빛의 삼원색 합성으로 우리 눈에 하얀색으로 느껴지는 것입니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="flame"></i> 충격적인 배터리 도둑</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  우리가 100의 배터리 전기를 화면에 밀어 넣으면, 고작 <strong>25만 빛</strong>으로 바뀌고 
                  무려 <strong>75는 열</strong>이 되어 폰을 뜨겁게 달굽니다. 이 75%의 범인은 누구일까요?
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 준비 · 실물 실험도구',
          title: '3차시 탐구 준비물 안내 (스마트폰 & 마이크로 루페)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('oled_tools_3.jpg')}" alt="3차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>스마트폰 OLED 디스플레이 & 마이크로 루페 관찰 세트</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="smartphone"></i></div>
                  <div>
                    <div class="pres-tool-name">스마트폰 디스플레이 (OLED)</div>
                    <div class="pres-tool-desc">RGB 서브픽셀 관찰 대상 화면</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="search"></i></div>
                  <div>
                    <div class="pres-tool-name">스마트폰 장착용 마이크로 루페 (60배)</div>
                    <div class="pres-tool-desc">서브픽셀 다이아몬드 배열 확대 렌즈</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="rotate-cw"></i></div>
                  <div>
                    <div class="pres-tool-name">양자 스핀 회전 팽이 교구 (시계/반시계)</div>
                    <div class="pres-tool-desc">전자의 업(↑) / 다운(↓) 스핀 조합 모형</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="table"></i></div>
                  <div>
                    <div class="pres-tool-name">스핀 통계 1:3 기록지</div>
                    <div class="pres-tool-desc">확률 계산 및 발열 메커니즘 분석표</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 준비 · 안전 및 관찰 수칙',
          title: '정밀 광학 관찰 및 기기 보호 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="shield"></i></div>
                <div class="pres-safety-title">1. 화면 스크래치 방지</div>
                <div class="pres-safety-desc">
                  루페 렌즈의 금속 부위가 스마트폰 액정에 직접 닿지 않도록 클립 보호 패드를 확인합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="eye"></i></div>
                <div class="pres-safety-title">2. 초점 맞추기 주의</div>
                <div class="pres-safety-desc">
                  너무 가까이 보아 눈이 피로해지지 않도록 스마트폰 카메라 화면으로 미러링하여 함께 관찰합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="battery-warning"></i></div>
                <div class="pres-safety-title">3. 고온 발열 주의</div>
                <div class="pres-safety-desc">
                  화면 밝기를 최대치로 장시간 켜두면 기기가 뜨거워지므로 관찰 후 화면을 잠시 꺼둡니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 전개 · 탐구 절차',
          title: '탐구 활동: 서브픽셀 관찰 & 팽이 스핀 확률 실험',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">RGB 서브픽셀 관찰</div>
                <p>스마트폰에 흰색 이미지를 띄운 뒤 마이크로 루페를 대고 R, G, B 다이아몬드 배열 화소를 사진으로 캡처합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">스핀 팽이 조합 매칭</div>
                <p>두 개의 스핀 팽이를 돌려 (시계, 반시계)가 마주보는 경우와 같은 방향으로 도는 경우의 수를 카운트합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">발광 효율 1:3 계산</div>
                <p>가상실험실(Lab 2)에서 전자와 정공이 결합할 때 단일항과 삼중항이 생성되는 비율을 시뮬레이션합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 전개 · 탐구 기록 및 정답',
          title: '활동지 스핀 통계 관찰표 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>상태 이름</th>
                    <th>스핀 배열</th>
                    <th>생성 확률</th>
                    <th>빛 방출 여부 & 결과 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>단일항 (Singlet, S₁)</strong></td>
                    <td>반대 방향 (↑↓)</td>
                    <td><strong>25%</strong> (1/4)</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">비상문 열림 ➔ 1억 분의 1초 만에 빛 방출 성공!</span></td>
                  </tr>
                  <tr>
                    <td><strong>삼중항 (Triplet, T₁)</strong></td>
                    <td>같은 방향 (↑↑, ↓↓, ↑↓+↓↑)</td>
                    <td><strong>75%</strong> (3/4)</td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">비상문 잠김 ➔ 빛을 못 내고 100% '열'로 소멸!</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pres-callout pres-danger" style="margin-top:1rem;">
              <i data-lucide="alert-circle"></i> <strong>75% 배터리 도둑의 진실:</strong> 전기 주입 시 4개 중 3개의 전자는 삼중항에 갇혀 스마트폰을 뜨겁게 달구고 수명을 갉아먹습니다!
            </div>
          `
        },
        {
          tag: '3차시 전개 · 개념 원리',
          title: '전자의 팽이 스핀과 양자역학적 선택 규칙',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="rotate-cw"></i> 단일항 (Singlet): 반대 회전</div>
                <p>두 전자가 <strong>서로 반대 방향(↑↓)</strong>으로 돕니다. 총 스핀 합이 <strong>0</strong>이 되어 바닥 상태(0)와 스핀이 일치하므로 순식간에 빛을 뿜고 내려옵니다.</p>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="lock"></i> 삼중항 (Triplet): 나란한 회전</div>
                <p>두 전자가 <strong>같은 방향(↑↑)</strong>으로 돕니다. 총 스핀 합이 <strong>1</strong>이 되어 양자역학 규칙상 바닥 상태로 내려갈 수 있는 비상문이 굳게 잠깁니다(전이 금지).</p>
              </div>
            </div>
            <div class="pres-chart-box" style="margin-top:1.25rem;">
              <div class="pres-pie-legend">
                <div class="leg-item"><span class="dot dot-blue"></span> <strong>단일항 25%:</strong> 유용한 빛</div>
                <div class="leg-item"><span class="dot dot-red"></span> <strong>삼중항 75%:</strong> 열 방출 낭비 (배터리 도둑)</div>
              </div>
            </div>
          `
        },
        {
          tag: '3차시 정리 · 결론 및 난제',
          title: '탐구 결론: OLED 기술의 최대 난제 (어떻게 75%를 구출할까?)',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="x-circle"></i> 75% 열 손실의 치명적 피해</div>
                <ul class="pres-list">
                  <li>스마트폰 디스플레이의 급격한 발열 발생</li>
                  <li>소중한 배터리가 빛도 못 내고 75% 증발</li>
                  <li>열 때문에 유기 분자가 파괴되는 <strong>번인(Burn-in) 현상</strong> 발생</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 인류 과학계의 거대한 질문</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  "잠겨 있는 삼중항의 탈출문을 열려고 하면 분자가 깨집니다. 
                  그렇다면 <strong>스핀을 반대로 뒤집어 단일항으로 몰래 탈출시키는 구름다리</strong>를 놓을 수는 없을까요?"
                </p>
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
                  <li>✅ 스마트폰 RGB 서브픽셀 배열 관찰 완료</li>
                  <li>✅ 전자의 스핀 방향과 단일항(25%) vs 삼중항(75%) 이해</li>
                  <li>✅ 삼중항의 양자역학적 탈출문 폐쇄 및 발열 난제 확인</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="arrow-right-circle"></i> 다음 4차시 예고</div>
                <p style="font-size:1.15rem; line-height:1.8; color:#f8fafc;">
                  <strong>[4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너</strong><br>
                  세계 최초로 75%의 전자를 구출한 대한민국 <strong>KAIST CPRL 연구진의 '핫 엑시톤' 구름다리</strong>가 공개됩니다!<br>
                  👉 발광 효율 100%에 도전하는 분자 디자이너가 되어 봅시다!
                </p>
              </div>
            </div>
          `
        }
      ]
    },

    // -----------------------------------------------------------------------
    // OLED 4차시: KAIST 핫 엑시톤 100% 구출작전
    // -----------------------------------------------------------------------
    4: {
      lessonTitle: '[4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
      badge: 'OLED 4차시 · KAIST 연구 성과',
      slides: [
        {
          tag: '4차시 도입 · [9과01-02] [9과23-01]',
          title: 'KAIST의 위대한 도전: 75%의 전자를 100% 구출하라!',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="help-circle"></i> 오늘의 핵심 탐구 질문</div>
                <p style="font-size:1.25rem; font-weight:700; line-height:1.7; color:#fde047;">
                  "KAIST 화학과 이영민 교수팀은 어떻게 갇혀 있던 75%의 삼중항 전자를 빛으로 구출했을까?"
                </p>
                <div class="pres-badge-box" style="margin-top:1.2rem;">
                  <i data-lucide="rocket"></i> <strong>핫 엑시톤(Hot Exciton) 초고속 구름다리의 비밀!</strong>
                </div>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
                <ul class="pres-list">
                  <li>KAIST CPRL 연구진의 <strong>핫 엑시톤 메커니즘</strong>을 설명할 수 있다.</li>
                  <li>가장 깨지기 쉬운 <strong>청색(Blue) OLED</strong>의 난제 해결 과정을 탐구한다.</li>
                  <li>첨단 디스플레이 <strong>신소재 화학자 및 계산과학자 진로</strong>를 탐색한다.</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 도입 · 동기 유발',
          title: '스마트폰 번인의 주범: 왜 항상 파란색(Blue)이 먼저 죽을까?',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="tv"></i> 청색 OLED의 비극</div>
                <ul class="pres-list">
                  <li>빨간색과 초록색 화소는 수명이 <strong>10만 시간 이상</strong>으로 튼튼합니다.</li>
                  <li>하지만 파란색 화소는 에너지가 너무 높아 <strong>수명이 훨씬 짧고 쉽게 파괴</strong>됩니다.</li>
                  <li>파란색 소자가 죽으면 스마트폰 화면에 누런 자국(번인)이 영구적으로 남습니다.</li>
                </ul>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="award"></i> 대한민국 KAIST의 해답</div>
                <p style="font-size:1.15rem; line-height:1.8;">
                  세계 모든 전자 기업들이 풀지 못하던 청색 OLED 수명과 효율 난제를 
                  <strong>대한민국 KAIST 화학과 계산 광동역학 연구실</strong>이 슈퍼컴퓨터 시뮬레이션으로 해결했습니다!
                </p>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 준비 · 실물 실험도구',
          title: '4차시 탐구 준비물 안내 (OLED 회로 & 분자 시뮬레이터)',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('oled_tools_4.jpg')}" alt="4차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <i data-lucide="camera"></i> <span>발광 소자 회로 키트 & KAIST 분자 시뮬레이션 태블릿</span>
                </div>
              </div>
              <div class="pres-tool-tag-list">
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="cpu"></i></div>
                  <div>
                    <div class="pres-tool-name">LED / OLED 초소형 발광 소자</div>
                    <div class="pres-tool-desc">전기 에너지를 빛으로 바꾸는 반도체 부품</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="zap"></i></div>
                  <div>
                    <div class="pres-tool-name">전도성 구리 테이프 & 3V 코인 전지</div>
                    <div class="pres-tool-desc">회로를 구성하여 직접 발광 실험하는 키트</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="tablet"></i></div>
                  <div>
                    <div class="pres-tool-name">KAIST 분자 설계 가상실험실</div>
                    <div class="pres-tool-desc">핫 엑시톤 구름다리 분자를 시뮬레이션하는 앱</div>
                  </div>
                </div>
                <div class="pres-tool-item">
                  <div class="pres-tool-item-icon"><i data-lucide="file-check"></i></div>
                  <div>
                    <div class="pres-tool-name">미래 분자 디자이너 프로젝트 시트</div>
                    <div class="pres-tool-desc">청색 발광 분자 설계안 작성 활동지</div>
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 준비 · 안전 및 제작 수칙',
          title: '회로 제작 및 화학 시뮬레이션 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-icon"><i data-lucide="battery-charging"></i></div>
                <div class="pres-safety-title">1. 배터리 단락(쇼트) 주의</div>
                <div class="pres-safety-desc">
                  코인 전지의 (+)극과 (-)극을 구리 테이프로 직접 연결하여 과열되지 않도록 극성을 확인합니다.
                </div>
              </div>
              <div class="pres-safety-card">
                <div class="pres-safety-icon"><i data-lucide="scissors"></i></div>
                <div class="pres-safety-title">2. 구리 테이프 취급 주의</div>
                <div class="pres-safety-desc">
                  구리 포일의 단면이 날카로울 수 있으므로 손가락이 베이지 않도록 가위를 조심히 다룹니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-icon"><i data-lucide="save"></i></div>
                <div class="pres-safety-title">3. 분자 설계안 저장</div>
                <div class="pres-safety-desc">
                  가상실험실에서 설계한 분자의 에너지 준위 그래프를 캡처하여 활동지에 깔끔하게 부착합니다.
                </div>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 탐구 절차',
          title: '탐구 활동: KAIST 핫 엑시톤 구름다리 연결 미션',
          content: `
            <div class="pres-steps-row">
              <div class="pres-step-box">
                <div class="step-num">Step 1</div>
                <div class="step-title">회로 구성 & 빛 확인</div>
                <p>구리 테이프로 코인 전지와 LED 소자를 연결하여 전기가 빛으로 변환되는 기본 회로를 점등합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 2</div>
                <div class="step-title">핫 엑시톤 구름다리 조작</div>
                <p>가상실험실(Lab 3)에서 2층 삼중항(T₂)과 1층 단일항(S₁) 사이에 <strong>초고속 역간교차(RISC) 다리</strong>를 연결합니다.</p>
              </div>
              <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
              <div class="pres-step-box">
                <div class="step-num">Step 3</div>
                <div class="step-title">효율 100% 달성 기록</div>
                <p>갇혀 있던 75%의 전자가 구름다리를 건너 단일항으로 변신한 뒤 100% 빛으로 뿜어져 나오는 효율을 기록합니다.</p>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 탐구 기록 및 정답',
          title: 'OLED 세대별 발광 효율 비교표 및 모범 정답',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th>OLED 기술 세대</th>
                    <th>주요 발광 원리</th>
                    <th>내부 발광 효율</th>
                    <th>장단점 및 특징 (정답)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1세대 (형광)</strong></td>
                    <td>단일항 전자만 발광</td>
                    <td>최대 <strong>25%</strong></td>
                    <td>75% 열 손실로 화면 과열 및 배터리 광속 소모</td>
                  </tr>
                  <tr>
                    <td><strong>2세대 (인광)</strong></td>
                    <td>중금속(이리듐) 첨가</td>
                    <td>최대 100% 가능</td>
                    <td>희귀 금속으로 매우 비쌈, <strong>청색 인광은 수명이 극히 짧음</strong></td>
                  </tr>
                  <tr>
                    <td><strong>4세대 (KAIST 핫 엑시톤)</strong></td>
                    <td><strong>고에너지 삼중항 구름다리</strong></td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">이론 효율 100%</span></td>
                    <td><span class="pres-ans-badge">정답</span> <span class="pres-ans-text">비싼 중금속 없이 순수 유기 분자로 100% 청색 발광 & 긴 수명 달성!</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          tag: '4차시 전개 · 개념 원리',
          title: 'KAIST CPRL 원천 기술: 핫 엑시톤(Hot Exciton) 메커니즘',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="git-merge"></i> 옥상 위의 초고속 구름다리</div>
                <p style="font-size:1.15rem; line-height:1.7;">
                  삼중항 전자가 1층(T₁) 바닥으로 떨어져 열을 내기 전에, 
                  <strong>에너지가 높은 2층(T₂) 옥상</strong>에서 단일항(S₁)으로 순식간에 스핀을 뒤집어 건너가는 
                  <strong>'역간교차(RISC) 구름다리'</strong>를 KAIST 연구팀이 규명하였습니다!
                </p>
              </div>
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="zap"></i> 기적의 구출 결과</div>
                <ul class="pres-list">
                  <li>버려지던 <strong>75%의 전자가 100% 찬란한 빛</strong>으로 변신!</li>
                  <li>디스플레이 발열 극적 감소로 <strong>화면 번인 방지</strong></li>
                  <li>스마트폰 배터리 사용 시간 <strong>2배 이상 연장</strong></li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 정리 · 결론 및 진로',
          title: '탐구 결론: 신소재 화학자 & 미래 디스플레이의 비전',
          content: `
            <div class="pres-grid-2">
              <div class="pres-card">
                <div class="pres-card-title"><i data-lucide="check-circle-2"></i> 대한민국 첨단 기술의 힘</div>
                <p>우리가 매일 쓰는 스마트폰 속에는 전 세계를 선도하는 <strong>대한민국 KAIST의 양자역학 및 광화학 연구 성과</strong>가 살아 숨 쉬고 있습니다.</p>
              </div>
              <div class="pres-card pres-highlight">
                <div class="pres-card-title"><i data-lucide="briefcase"></i> 나의 미래 진로 탐색</div>
                <ul class="pres-list">
                  <li><strong>계산화학자 (Computational Chemist):</strong> 컴퓨터 시뮬레이션으로 신물질을 설계하는 과학자</li>
                  <li><strong>신소재 나노공학자:</strong> 접히고 둘둘 말리는 미래 디스플레이를 개발하는 공학자</li>
                  <li><strong>친환경 에너지 연구원:</strong> 손실 없는 빛을 연구하는 광과학자</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          tag: '4차시 정리 · 전체 패키지 마무리',
          title: '[OLED 패키지 수료] 분자의 빛과 디스플레이의 과학 완주!',
          content: `
            <div class="pres-card" style="text-align:center; padding:2rem;">
              <div style="font-size:3rem; margin-bottom:1rem;">🏆</div>
              <h3 style="font-size:1.8rem; color:#60a5fa; margin-bottom:1rem;">4차시 첨단 탐구 여정을 훌륭히 마쳤습니다!</h3>
              <p style="font-size:1.2rem; line-height:1.8; color:#cbd5e1; max-width:700px; margin:0 auto 1.5rem auto;">
                자외선 형광 탐정단에서 시작하여, 전자의 계단 점프, 75% 배터리 도둑의 비밀, 
                그리고 KAIST의 핫 엑시톤 100% 구출 작전까지 모두 탐구하였습니다.
              </p>
              <div style="display:inline-flex; gap:1rem; flex-wrap:wrap; justify-content:center;">
                <span class="badge" style="background:#1e3a8a; color:#bfdbfe; font-size:1rem; padding:0.6rem 1.2rem;">자외선과 형광 마스터</span>
                <span class="badge" style="background:#4c1d95; color:#e9d5ff; font-size:1rem; padding:0.6rem 1.2rem;">에너지 보존 & 스핀 마스터</span>
                <span class="badge" style="background:#065f46; color:#a7f3d0; font-size:1rem; padding:0.6rem 1.2rem;">KAIST CPRL 탐구 수료</span>
              </div>
            </div>
          `
        }
      ]
    }
  },

  // =========================================================================
  // [패키지 02] 양자 컴퓨터와 계산 화학의 미래
  // =========================================================================
  quantum: {
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습 목표</div>
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
  }
};

let currentPresModule = 'oled';
let currentPresLesson = 1;
let currentPresSlideIndex = 0;

function ensurePresentationModalExists() {
  if (document.getElementById('presentation-modal')) return;

  const modalHtml = `
    <div id="presentation-modal" class="presentation-modal" onclick="handlePresentationBackdropClick(event)">
      <div class="presentation-modal-window" id="presentation-modal-window">
        
        <!-- Modal Header -->
        <div class="presentation-modal-header">
          <div class="pres-header-left">
            <h3 id="pres-modal-title" class="pres-modal-title">발표 슬라이드</h3>
            <span id="pres-modal-badge" class="badge badge-purple">
              <i data-lucide="presentation"></i> <span id="pres-badge-text">프리젠테이션</span>
            </span>
          </div>

          <div class="pres-header-actions">
            <button type="button" id="btn-pres-fullscreen" class="topbar-btn pres-btn-fullscreen" onclick="togglePresentationFullscreen()" title="전체화면 (빔프로젝터/전자칠판 발표 모드)">
              <i data-lucide="maximize-2"></i> <span>전체화면</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closePresentationModal()" title="닫기 (ESC)">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <!-- Slide Content Screen -->
        <div class="presentation-modal-body" id="presentation-modal-body">
          <div class="presentation-slide-screen" id="presentation-slide-screen">
            <!-- Rendered slide content goes here -->
          </div>
        </div>

        <!-- Modal Footer Navigation -->
        <div class="presentation-modal-footer">
          <span id="pres-slide-counter" class="pres-slide-counter">1 / 9</span>
          <div class="pres-nav-btns">
            <button type="button" id="pres-btn-prev" class="topbar-btn" onclick="changePresentationSlide(-1)">
              <i data-lucide="arrow-left"></i> <span>이전</span>
            </button>
            <button type="button" id="pres-btn-next" class="topbar-btn primary" onclick="changePresentationSlide(1)">
              <span>다음</span> <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('presentation-modal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      changePresentationSlide(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      changePresentationSlide(-1);
    } else if (e.key === 'Escape') {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else {
        closePresentationModal();
      }
    }
  });

  // Listen to fullscreen changes to update button icon and label
  document.addEventListener('fullscreenchange', updateFullscreenButtonState);
  document.addEventListener('webkitfullscreenchange', updateFullscreenButtonState);
  document.addEventListener('mozfullscreenchange', updateFullscreenButtonState);
  document.addEventListener('MSFullscreenChange', updateFullscreenButtonState);
}

function openPresentationModal(moduleType, lessonNum) {
  ensurePresentationModalExists();

  currentPresModule = moduleType;
  currentPresLesson = lessonNum;
  currentPresSlideIndex = 0;

  const deck = presentationModalData[moduleType] && presentationModalData[moduleType][lessonNum];
  if (!deck) return;

  document.getElementById('pres-modal-title').innerText = deck.lessonTitle;
  document.getElementById('pres-badge-text').innerText = deck.badge;

  renderCurrentPresentationSlide();

  const modalEl = document.getElementById('presentation-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
  updateFullscreenButtonState();

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function renderCurrentPresentationSlide() {
  const deck = presentationModalData[currentPresModule] && presentationModalData[currentPresModule][currentPresLesson];
  if (!deck) return;

  const slide = deck.slides[currentPresSlideIndex];
  if (!slide) return;

  const screen = document.getElementById('presentation-slide-screen');
  if (!screen) return;

  const badgeClass = currentPresModule === 'quantum' ? 'quantum-accent' : '';

  screen.innerHTML = `
    <div class="pres-slide-card ${badgeClass}">
      <div class="pres-slide-header">
        <span class="pres-slide-tag">${slide.tag}</span>
        <h2 class="pres-slide-heading">${slide.title}</h2>
      </div>
      <div class="pres-slide-body">
        ${slide.content}
      </div>
    </div>
  `;

  // Update counter
  const total = deck.slides.length;
  document.getElementById('pres-slide-counter').innerText = `${currentPresSlideIndex + 1} / ${total}`;

  // Update button states
  const btnPrev = document.getElementById('pres-btn-prev');
  const btnNext = document.getElementById('pres-btn-next');

  if (btnPrev) {
    btnPrev.disabled = (currentPresSlideIndex === 0);
    btnPrev.style.opacity = (currentPresSlideIndex === 0) ? '0.4' : '1';
  }
  if (btnNext) {
    btnNext.disabled = (currentPresSlideIndex === total - 1);
    btnNext.style.opacity = (currentPresSlideIndex === total - 1) ? '0.4' : '1';
  }

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function changePresentationSlide(dir) {
  const deck = presentationModalData[currentPresModule] && presentationModalData[currentPresModule][currentPresLesson];
  if (!deck) return;
  const total = deck.slides.length;

  const target = currentPresSlideIndex + dir;
  if (target >= 0 && target < total) {
    currentPresSlideIndex = target;
    renderCurrentPresentationSlide();
  }
}

function closePresentationModal() {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
  const modalEl = document.getElementById('presentation-modal');
  const modalWindow = document.getElementById('presentation-modal-window');
  if (modalEl) {
    modalEl.classList.remove('open', 'fullscreen-active');
  }
  if (modalWindow) {
    modalWindow.classList.remove('is-fullscreen');
  }
  document.body.classList.remove('presentation-fullscreen-mode');
  document.body.style.overflow = '';
}

function handlePresentationBackdropClick(event) {
  if (event.target && event.target.id === 'presentation-modal') {
    closePresentationModal();
  }
}

function togglePresentationFullscreen() {
  const modalWindow = document.getElementById('presentation-modal-window');
  if (!modalWindow) return;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    if (modalWindow.requestFullscreen) {
      modalWindow.requestFullscreen().catch(err => {
        console.warn('Fullscreen error:', err);
      });
    } else if (modalWindow.webkitRequestFullscreen) {
      modalWindow.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function updateFullscreenButtonState() {
  const btn = document.getElementById('btn-pres-fullscreen');
  const modal = document.getElementById('presentation-modal');
  const modalWindow = document.getElementById('presentation-modal-window');
  const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);

  if (modal) {
    modal.classList.toggle('fullscreen-active', isFull);
  }
  if (modalWindow) {
    modalWindow.classList.toggle('is-fullscreen', isFull);
  }
  document.body.classList.toggle('presentation-fullscreen-mode', isFull);

  if (btn) {
    if (isFull) {
      btn.innerHTML = '<i data-lucide="minimize-2"></i> <span>전체화면 종료</span>';
      btn.title = '전체화면 종료 (ESC)';
    } else {
      btn.innerHTML = '<i data-lucide="maximize-2"></i> <span>전체화면</span>';
      btn.title = '전체화면 (빔프로젝터/전자칠판 발표 모드)';
    }
    if (window.lucide) {
      try { lucide.createIcons(); } catch(e) {}
    }
  }
}
