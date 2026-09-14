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

window.presentationModalData.oled = {
    // -----------------------------------------------------------------------
    // OLED 1차시: 자외선과 형광
    // -----------------------------------------------------------------------
    1: {
      lessonTitle: '[1차시] 어둠 속을 밝히는 빛의 마법: 자외선과 형광 탐정단',
      badge: 'OLED 1차시 · 자외선과 형광',
      slides: [
        // Slide 1: 표지 (제목 단독 심플 페이지)
        {
          tag: '',
          title: '',
          content: `
            <div class="pres-hero-question">
              <h1 class="hero-q-text" style="font-size:2.2rem; font-weight:800; letter-spacing:-0.5px; color:#0f172a; word-break:keep-all; line-height:1.5;">
                어둠 속을 밝히는 빛의 마법:<br>
                자외선과 형광 탐정단
              </h1>
            </div>
          `
        },

        // Slide 2: 어두운 교실에서 켠 블랙라이트 (동기 유발)
        {
          tag: '',
          title: '어두운 교실에서 켠 블랙라이트',
          content: `
            <div class="pres-stack">
              <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:1.2rem;">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1.2rem; text-align:center;">
                  <div style="font-size:2rem; margin-bottom:0.4rem;">👟</div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block; margin-bottom:0.25rem;">흰 운동화 끈 & 옷</strong>
                  <p style="font-size:0.92rem; color:#2563eb; font-weight:700; margin:0;">어둠 속 눈부신 푸른빛 발광</p>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1.2rem; text-align:center;">
                  <div style="font-size:2rem; margin-bottom:0.4rem;">🖍️</div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block; margin-bottom:0.25rem;">형광펜 메모 & 종이</strong>
                  <p style="font-size:0.92rem; color:#16a34a; font-weight:700; margin:0;">선명하고 밝은 형광빛 발광</p>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1.2rem; text-align:center;">
                  <div style="font-size:2rem; margin-bottom:0.4rem;">🧤</div>
                  <strong style="color:#0f172a; font-size:1.05rem; display:block; margin-bottom:0.25rem;">흰색 면장갑</strong>
                  <p style="font-size:0.92rem; color:#7c3aed; font-weight:700; margin:0;">자외선 아래 푸른빛 방출</p>
                </div>
              </div>

              <div class="pres-inquiry-box">
                <div class="inquiry-q">
                  "블랙라이트는 어두운 보랏빛인데, 왜 물체들은 눈부신 형광빛을 뿜어낼까?"
                </div>
              </div>
            </div>
          `
        },

        // Slide 3: 학습목표 (단독 슬라이드)
        {
          tag: '',
          title: '학습목표',
          content: `
            <div class="pres-objective-box">
              <p class="objective-main">
                <span>자외선과 가시광선의 파장 및 에너지 차이를 비교하고,</span>
                <span>일상 속 형광 물질을 관찰하여 빛 방출 현상을 탐구할 수 있다.</span>
              </p>
            </div>
          `
        },

        // Slide 4: 실험 준비물
        {
          tag: '',
          title: '실험 준비물',
          content: `
            <div class="pres-tool-layout">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('oled_tools_1.jpg')}" alt="1차시 실험 준비물 실사 사진" class="pres-tool-img">
                <div class="pres-tool-img-caption">
                  <span>실제 실험대 위 준비물 세트</span>
                </div>
              </div>
              <div class="pres-tool-tag-list" style="gap:0.9rem;">
                <div class="pres-tool-item" style="padding:1.1rem 1.4rem;">
                  <div class="pres-tool-name" style="font-size:1.15rem; font-weight:700; color:#0f172a;">
                    UV-A 블랙라이트 램프 & 보안경
                  </div>
                </div>
                <div class="pres-tool-item" style="padding:1.1rem 1.4rem;">
                  <div class="pres-tool-name" style="font-size:1.15rem; font-weight:700; color:#0f172a;">
                    시약 3종 (토닉워터 / 비타민 음료 / 올리브유)
                  </div>
                </div>
                <div class="pres-tool-item" style="padding:1.1rem 1.4rem;">
                  <div class="pres-tool-name" style="font-size:1.15rem; font-weight:700; color:#0f172a;">
                    암실 상자 & 검은색 종이
                  </div>
                </div>
                <div class="pres-tool-item" style="padding:1.1rem 1.4rem;">
                  <div class="pres-tool-name" style="font-size:1.15rem; font-weight:700; color:#0f172a;">
                    천원권 지폐 & 형광펜
                  </div>
                </div>
              </div>
            </div>
          `
        },

        // Slide 5: 실험실 안전 수칙
        {
          tag: '',
          title: '실험실 안전 수칙',
          content: `
            <div class="pres-safety-grid">
              <div class="pres-safety-card">
                <div class="pres-safety-title">1. 보안경 상시 착용</div>
                <div class="pres-safety-desc">
                  자외선(UV-A) 램프를 얼굴이나 눈에 직접 비추지 마세요. <strong>실험 종료 시까지 보안경을 상시 착용</strong>합니다.
                </div>
              </div>
              <div class="pres-safety-card safe-amber">
                <div class="pres-safety-title">2. 시약 음용 절대 금지</div>
                <div class="pres-safety-desc">
                  토닉워터, 비타민 음료, 올리브유는 <strong>실험용 관찰 시약</strong>입니다. 어떠한 경우에도 맛보거나 마시지 않습니다.
                </div>
              </div>
              <div class="pres-safety-card safe-blue">
                <div class="pres-safety-title">3. 암실 상자 & 폐액 분리</div>
                <div class="pres-safety-desc">
                  암실 상자 덮개를 밀착하고 <strong>45도 각도로 조사</strong>하며, 실험 후 시약은 <strong>지정 폐액통에 분리 수거</strong>합니다.
                </div>
              </div>
            </div>
          `
        },

        // Slide 6: 형광 물질 관찰 순서
        {
          tag: '',
          title: '형광 물질 관찰 순서',
          content: `
            <div class="pres-stack">
              <div class="pres-steps-row">
                <div class="pres-step-box">
                  <div class="step-num">Step 1</div>
                  <div class="step-title">시약 및 재료 준비</div>
                  <p>3개 비커에 토닉워터, 비타민 음료, 올리브유를 <strong>각 30mL씩 담아 암실 상자에 배치</strong>하고 지폐와 메모지를 준비합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 2</div>
                  <div class="step-title">형광등 아래 기본 색상 기록</div>
                  <p>일반 실내 조명 아래에서 4가지 관찰 대상의 <strong>본래 기본 색상을 관찰표에 객관적으로 기록</strong>합니다.</p>
                </div>
                <div class="pres-step-arrow"><i data-lucide="arrow-right"></i></div>
                <div class="pres-step-box">
                  <div class="step-num">Step 3</div>
                  <div class="step-title">UV-A 램프 조사 & 형광빛 기록</div>
                  <p>보안경을 쓰고 암실 상자 안으로 UV-A 램프를 비추며 <strong>새롭게 뿜어져 나오는 형광 발광 색상을 기록</strong>합니다.</p>
                </div>
              </div>
            </div>
          `
        },

        // Slide 7: 형광 물질 관찰 결과
        {
          tag: '',
          title: '형광 물질 관찰 결과',
          content: `
            <div class="pres-table-wrap">
              <table class="pres-table">
                <thead>
                  <tr>
                    <th style="width:20%;">실험 물질</th>
                    <th style="width:24%;">포함된 핵심 분자</th>
                    <th style="width:24%;">형광등 아래 기본 색상</th>
                    <th style="width:32%;">자외선 조사 시 관찰 결과</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>토닉워터</strong></td>
                    <td>퀴닌 분자 (Quinine)</td>
                    <td>무색투명</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#2563eb; font-size:1.02rem;">파란색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>비타민 음료</strong></td>
                    <td>리보플라빈 (비타민 B2)</td>
                    <td>맑은 노란색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#16a34a; font-size:1.02rem;">연두색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>올리브유</strong></td>
                    <td>엽록소 분자 (Chlorophyll)</td>
                    <td>연초록색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#dc2626; font-size:1.02rem;">붉은색 형광 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>지폐 & 형광펜</strong></td>
                    <td>형광 염료 (위조방지)</td>
                    <td>일반 종이색 / 기본 잉크색</td>
                    <td>
                      <div class="pres-reveal-cell" onclick="this.classList.toggle('revealed')">
                        <button type="button" class="pres-reveal-btn">결과 확인</button>
                        <div class="pres-reveal-content">
                          <strong style="color:#d97706; font-size:1.02rem;">숨겨진 형광 보안 섬유 발광</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        // Slide 8: 빛의 파장과 에너지
        {
          tag: '',
          title: '빛의 파장과 에너지',
          content: `
            <div class="pres-stack">
              <div class="pres-spectrum-wrap">
                <div class="pres-spectrum-bar">
                  <div class="spec-part spec-uv">
                    <strong>자외선 (UV-A, 300~400nm)</strong><br>
                    <span class="spec-sub">파장 짧음 · 에너지가 큼 · 눈에 보이지 않음</span>
                  </div>
                  <div class="spec-part spec-vis">
                    <strong>가시광선 (400~700nm)</strong><br>
                    <span class="spec-sub">파장 길어짐 · 에너지가 상대적으로 작음 · 눈에 보이는 무지개</span>
                  </div>
                  <div class="spec-part spec-ir">
                    <strong>적외선 (700nm~)</strong><br>
                    <span class="spec-sub">파장 가장 김 · 저에너지 · 열선</span>
                  </div>
                </div>
              </div>

              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1.15rem 1.6rem;">
                <p style="font-size:1.15rem; line-height:1.7; color:#0f172a; margin:0; word-break:keep-all;">
                  자외선(300~400nm)은 가시광선(400~700nm)보다 <strong>파장이 더 짧고 에너지가 더 큰 빛</strong>입니다.
                </p>
              </div>

              <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:12px; padding:1.15rem 1.6rem;">
                <p style="font-size:1.12rem; line-height:1.7; color:#1e40af; margin:0; word-break:keep-all;">
                  <strong>형광이란?</strong> 물질 속 분자가 큰 에너지(자외선)를 흡수한 뒤, 에너지가 더 작은 가시광선으로 바꾸어 방출하는 현상
                </p>
              </div>
            </div>
          `
        },

        // Slide 9: 생각해보기 (모둠 토의 질문)
        {
          tag: '',
          title: '사라진 30의 에너지는 어디로 갔을까?',
          content: `
            <div class="pres-stack" style="justify-content:center; align-items:center; min-height:340px;">
              <div class="pres-inquiry-box" style="margin:0; width:100%; max-width:860px; padding:2.5rem 2rem;">
                <div class="inquiry-q" style="font-size:1.4rem; line-height:1.7; margin-bottom:1.2rem;">
                  "흡수한 자외선 에너지가 100이라면, 방출된 형광빛의 에너지는 70~80입니다.<br>
                  그렇다면 나머지 20~30의 에너지는 어디로 갔을까요?"
                </div>
                <p class="inquiry-hint" style="font-size:1.08rem; margin:0; color:#2563eb; font-weight:600;">
                  들어간 빛 에너지와 나온 빛 에너지 사이의 차이를 모둠원과 함께 토의해 봅시다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 10: 에너지 보존 법칙
        {
          tag: '',
          title: '에너지 보존 법칙',
          content: `
            <div class="pres-stack" style="justify-content:center; gap:1.5rem; max-width:880px; margin:0 auto; width:100%;">
              <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:14px; padding:1.8rem 2.2rem; text-align:center;">
                <div style="font-size:1.1rem; font-weight:800; color:#047857; margin-bottom:0.75rem;">
                  에너지 보존 법칙
                </div>
                <div style="font-size:1.4rem; font-weight:800; color:#065f46; word-break:keep-all;">
                  [ 흡수한 자외선 에너지 ] = [ 방출된 형광빛 에너지 ] + [ 열에너지 ]
                </div>
              </div>

              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:1.6rem 2.2rem;">
                <p style="font-size:1.15rem; line-height:1.8; color:#334155; margin:0 0 0.8rem 0; word-break:keep-all;">
                  • 에너지는 사라진 것이 아니라 <strong>다른 형태의 에너지로 전환</strong>된 것입니다.
                </p>
                <p style="font-size:1.15rem; line-height:1.8; color:#334155; margin:0; word-break:keep-all;">
                  • 분자가 자외선을 흡수한 후 미세하게 진동하면서 일부 에너지를 <strong>'열(열에너지)'</strong> 형태로 방출합니다.
                </p>
              </div>
            </div>
          `
        },

        // Slide 11: 일상 속 형광 기술 활용
        {
          tag: '',
          title: '일상 속 형광 기술 활용',
          content: `
            <div class="pres-tool-layout" style="align-items:center;">
              <div class="pres-tool-img-wrap">
                <img src="${getToolAsset('fluorescence_apps.jpg')}" alt="일상 속 형광 기술 활용 실사 사진" class="pres-tool-img" style="height:330px; object-fit:cover;">
                <div class="pres-tool-img-caption">
                  <span>위조지폐·여권 감별, 형광펜, 야간 안전 장비</span>
                </div>
              </div>
              <div class="pres-tool-tag-list" style="gap:0.9rem;">
                <div class="pres-tool-item" style="padding:1.1rem 1.3rem;">
                  <div>
                    <div style="font-size:1.22rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">
                      위조지폐 및 신분증 감별
                    </div>
                    <div style="font-size:1.05rem; line-height:1.65; color:#475569; word-break:keep-all;">
                      지폐나 여권에 자외선(UV)을 비추면 숨겨진 <strong>형광 보안 섬유와 워터마크가 발광</strong>하여 위조 여부를 즉시 판별합니다.
                    </div>
                  </div>
                </div>
                <div class="pres-tool-item" style="padding:1.1rem 1.3rem;">
                  <div>
                    <div style="font-size:1.22rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">
                      형광펜 및 형광 염료
                    </div>
                    <div style="font-size:1.05rem; line-height:1.65; color:#475569; word-break:keep-all;">
                      눈에 보이지 않는 자외선을 흡수한 뒤, 사람의 눈에 매우 잘 띄는 <strong>선명하고 밝은 가시광선으로 바꾸어 방출</strong>합니다.
                    </div>
                  </div>
                </div>
                <div class="pres-tool-item" style="padding:1.1rem 1.3rem;">
                  <div>
                    <div style="font-size:1.22rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">
                      야간 안전 조끼 및 장비
                    </div>
                    <div style="font-size:1.05rem; line-height:1.65; color:#475569; word-break:keep-all;">
                      어두운 환경에서 미세한 빛을 받아 <strong>강하게 형광빛을 방출하여 보행자와 작업자의 안전을 확보</strong>합니다.
                    </div>
                  </div>
                </div>
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
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
                  <li><strong>자외선 흡수 (도약):</strong> 아래에서 강한 에너지를 받아 옥상(3층)으로 껑충 점프!</li>
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
                  버튼을 무작위로 연타하지 말고, <strong>자외선 흡수 ➔ 진동 ➔ 형광 방출</strong> 과정을 순서대로 관찰합니다.
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
                <div class="step-title">자외선 흡수 & 도약</div>
                <p>가상실험실에서 <strong>[⚡ 자외선(UV) 흡수 & 점프!]</strong>를 클릭하여 1층 전자가 3층(S₁)으로 솟구치는 순간을 확인합니다.</p>
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
                <p>2층에서 1층(S₀)으로 수직 착지하면서 사방으로 <strong>눈부신 파란 형광빛(450nm)</strong>을 뿜어내는 모습을 기록합니다.</p>
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
                    <td>자외선 흡수</td>
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
                    <td>가시광선(형광) 방출</td>
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
                  파장이 길어졌다 = 빛의 에너지가 작아졌다!
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
                E(흡수한 자외선) = E(방출된 형광빛) + E(진동 열에너지)
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
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
                <div class="pres-card-title"><i data-lucide="target"></i> 오늘의 학습목표</div>
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
          title: '[OLED 패키지 수료] 스마트폰 속 75% 배터리 도둑을 잡아라! 완주!',
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
  };
