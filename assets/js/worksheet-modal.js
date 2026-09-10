/**
 * KAIST 첨단과학 탐구 - 활동지 & 교사도움자료 모달 시스템
 * Chrome 탭 UI (학생용 활동지 / 교사용 지도자료) 및 A4 인쇄 지원
 */

const worksheetModalData = {
  oled: {
    1: {
      title: '[1차시] 자외선 형광 탐정단: 일상 속 숨은 빛 찾기',
      badge: 'OLED 모듈 1차시 | 성취기준 [9과10-03]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 2 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 각 물질에 일반 조명과 자외선(UV-A)을 비추었을 때의 색상 변화를 표에 기록해 보자.</p>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:24%;">실험 물질</th>
              <th style="width:26%;">포함된 핵심 분자</th>
              <th style="width:25%;">일반 조명 아래 색상</th>
              <th style="width:25%;">자외선(UV-A) 조사 시 색상</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>토닉워터</td><td>퀴닌 (Quinine)</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>비타민 음료</td><td>리보플라빈 (비타민 B₂)</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>올리브유</td><td>엽록소 (Chlorophyll)</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>대한민국 지폐</td><td>형광 인쇄 섬유</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          </tbody>
        </table>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 자외선(300~400nm)과 가시광선(400~700nm) 중 파장이 더 짧고 에너지가 더 큰 빛은 무엇인가?</p>
        <div class="answer-box">
          ☞ 답: 
        </div>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">3. 눈에 보이지 않는 자외선을 비추었는데 왜 알록달록 가시광선이 나오는지, 들어간 자외선과 나온 형광 빛의 에너지 차이는 어떻게 되었을지 토의하여 써 보자.</p>
        <div class="answer-box">
          ☞ 토의 내용: 
        </div>

        <div class="callout-box callout-danger" style="margin-top:1.2rem; font-size:0.88rem;">
          <strong>🚨 실험 안전 수칙:</strong> 보안경 착용, 자외선(UV-A)을 눈이나 피부에 비추지 않기. 시약 음용 금지
        </div>
      `,
      teacher: `
        <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">1. 각 물질의 관찰 결과 예시표</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:24%;">실험 물질</th>
              <th style="width:26%;">포함된 핵심 분자</th>
              <th style="width:25%;">일반 조명 아래 색상</th>
              <th style="width:25%;">자외선(UV-A) 조사 시 색상 (예시 답안)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>토닉워터</strong></td><td>퀴닌 (Quinine)</td><td>투명한 무색</td><td><strong class="model-answer">눈부신 푸른색 (Blue) 형광</strong></td></tr>
            <tr><td><strong>비타민 음료</strong></td><td>리보플라빈 (비타민 B₂)</td><td>노란색</td><td><strong class="model-answer">밝은 형광 연두색 / 황록색</strong></td></tr>
            <tr><td><strong>올리브유</strong></td><td>엽록소 (Chlorophyll)</td><td>연한 초록색/노란색</td><td><strong class="model-answer">선명한 붉은색 (Red) 형광</strong></td></tr>
            <tr><td><strong>대한민국 지폐</strong></td><td>형광 인쇄 섬유</td><td>일반 인쇄만 보임</td><td><strong class="model-answer">숨겨진 형광 보안 섬유 발광 (주황/청록)</strong></td></tr>
          </tbody>
        </table>

        <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">2. 파장과 에너지 관계 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> <strong>모범 답안:</strong> 
          자외선(300~400nm)이 가시광선(400~700nm)보다 파장이 짧고 광자의 에너지가 더 큽니다. (파장이 짧을수록 에너지가 셈)
        </div>

        <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">3. 형광 현상과 에너지 보존 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> <strong>모범 답안:</strong> 
          물질 속 분자가 센 에너지의 자외선을 흡수하여 전자가 들뜬 상태로 점프한 뒤, 분자 진동을 통해 일부 에너지를 <strong>'열'</strong>로 잃어버립니다. 그 후 남은 에너지만을 파장이 더 긴 <strong>'가시광선(형광)'</strong>으로 방출합니다. 차이 나는 에너지는 주변으로 방출된 <strong>열에너지</strong>로 보존됩니다. (스토크스 이동 및 에너지 보존 법칙)
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 암실 상자를 활용하면 형광 빛의 선명도가 극대화됩니다. 학생들에게 "왜 토닉워터는 파란색인데 올리브유는 붉은색일까?" 질문하여 분자마다 에너지 계단의 높이 차이가 다름을 자연스럽게 유도하세요.
        </div>
      `
    },
    2: {
      title: '[2차시] 꼬마 전자의 트램펄린 점프: 들뜬 상태와 에너지 전환',
      badge: 'OLED 모듈 2차시 | 성취기준 [9과11-02] [9과14-03]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 2 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 가상실험실(lab.html)의 [전자의 에너지 계단 시뮬레이터]를 관찰하고, 3단계 과정을 아래 빈칸에 정리해 보자.</p>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr><th style="width:22%;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1단계: 흡수</strong></td>
              <td>바닥 상태(1층)의 전자가 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 에너지를 먹고 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 상태(3층)로 높이 점프한다.</td>
            </tr>
            <tr>
              <td><strong>2단계: 진동</strong></td>
              <td>3층이 너무 불안정하여 전자가 부르르 떨며(분자 진동) 에너지를 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 에너지 형태로 잃어버린다.</td>
            </tr>
            <tr>
              <td><strong>3단계: 방출</strong></td>
              <td>남은 에너지를 알록달록한 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 빛으로 번쩍 뿜어내며 바닥 상태로 사뿐히 착지한다.</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 에너지 보존 법칙의 관점에서, [흡수한 자외선 에너지]와 [방출된 형광빛], [흘린 열에너지] 사이의 관계식을 완성해 보자.</p>
        <div class="answer-box" style="text-align:center; font-size:1rem;">
          [ 흡수한 자외선 에너지 ] = [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ] + [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]
        </div>
      `,
      teacher: `
        <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">1. 전자의 에너지 계단 3단계 예시 답안</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr><th style="width:22%;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환 (예시 답안)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1단계: 흡수</strong></td>
              <td>바닥 상태(1층)의 전자가 (<strong class="model-answer">&nbsp;자외선(높은 에너지)&nbsp;</strong>) 에너지를 먹고 (<strong class="model-answer">&nbsp;들뜬&nbsp;</strong>) 상태(3층)로 높이 점프한다.</td>
            </tr>
            <tr>
              <td><strong>2단계: 진동</strong></td>
              <td>3층이 너무 불안정하여 전자가 부르르 떨며(분자 진동) 에너지를 (<strong class="model-answer">&nbsp;열&nbsp;</strong>) 에너지 형태로 잃어버린다.</td>
            </tr>
            <tr>
              <td><strong>3단계: 방출</strong></td>
              <td>남은 에너지를 알록달록한 (<strong class="model-answer">&nbsp;가시광선 형광&nbsp;</strong>) 빛으로 번쩍 뿜어내며 바닥 상태로 사뿐히 착지한다.</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">2. 에너지 보존 관계식</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; text-align:center; font-size:1rem;">
          <span class="answer-arrow">☞</span> <strong>[ 흡수한 자외선 에너지 ] = [ <span class="model-answer">방출된 형광빛 에너지</span> ] + [ <span class="model-answer">흘린 열에너지</span> ]</strong>
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#7c3aed; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 양자역학의 파동방정식 대신 "1층, 2층, 3층 아파트 계단" 비유를 사용하여 중간 층간(1.5층)에는 전자가 머물 수 없다는 '에너지 양자화' 개념을 직관적으로 이해시킵니다.
        </div>
      `
    },
    3: {
      title: '[3차시] 팽이 스핀과 스마트폰 OLED의 75% 배터리 도둑',
      badge: 'OLED 모듈 3차시 | 성취기준 [9과11-02] [9과14-02] [9과14-03]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 2 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 전자의 회전 팽이(스핀) 모형에 따른 단일항과 삼중항의 차이를 비교해 보자.</p>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:24%;">구분</th>
              <th style="width:38%;">단일항 (Singlet)</th>
              <th style="width:38%;">삼중항 (Triplet)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>전자 팽이 회전 방향</strong></td>
              <td>서로 ( 마주보고 / 나란히 ) 회전 (↑↓)</td>
              <td>서로 ( 마주보고 / 나란히 ) 회전 (↑↑)</td>
            </tr>
            <tr>
              <td><strong>방출되는 빛의 종류</strong></td>
              <td>( 형광 / 인광 )</td>
              <td>( 형광 / 인광 )</td>
            </tr>
            <tr>
              <td><strong>빛을 내뿜는 속도</strong></td>
              <td>1억 분의 1초 만에 ( 즉시 방출 / 갇혀서 천천히 방출 )</td>
              <td>비상문이 잠겨 ( 즉시 방출 / 갇혀서 천천히 방출 )</td>
            </tr>
            <tr>
              <td><strong>전기 주입 시 생성 확률</strong></td>
              <td>( &nbsp;&nbsp;&nbsp;&nbsp; ) %</td>
              <td>( &nbsp;&nbsp;&nbsp;&nbsp; ) %</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 스마트폰 배터리 전기로 화면을 켤 때 무려 75%의 전자가 빛을 내지 못하고 스마트폰을 뜨겁게 달구는 까닭을 위의 확률과 관련지어 설명해 보자.</p>
        <div class="answer-box">
          ☞ 까닭: 
        </div>
      `,
      teacher: `
        <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">1. 단일항과 삼중항 비교 예시표</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:24%;">구분</th>
              <th style="width:38%;">단일항 (Singlet)</th>
              <th style="width:38%;">삼중항 (Triplet)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>전자 팽이 회전 방향</strong></td>
              <td>서로 (<strong class="model-answer">&nbsp;마주보고&nbsp;</strong>) 회전 (↑↓)</td>
              <td>서로 (<strong class="model-answer">&nbsp;나란히&nbsp;</strong>) 회전 (↑↑)</td>
            </tr>
            <tr>
              <td><strong>방출되는 빛의 종류</strong></td>
              <td>(<strong class="model-answer">&nbsp;형광&nbsp;</strong>)</td>
              <td>(<strong class="model-answer">&nbsp;인광&nbsp;</strong>)</td>
            </tr>
            <tr>
              <td><strong>빛을 내뿜는 속도</strong></td>
              <td>1억 분의 1초 만에 (<strong class="model-answer">&nbsp;즉시 방출&nbsp;</strong>)</td>
              <td>비상문이 잠겨 (<strong class="model-answer">&nbsp;갇혀서 천천히 방출&nbsp;</strong>)</td>
            </tr>
            <tr>
              <td><strong>전기 주입 시 생성 확률</strong></td>
              <td>(<strong class="model-answer">&nbsp;25&nbsp;</strong>) %</td>
              <td>(<strong class="model-answer">&nbsp;75&nbsp;</strong>) %</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">2. 75% 열 손실 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> <strong>모범 답안:</strong> 
          전기(전류)를 유기 분자에 주입하면 양자역학적 스핀 조합 확률에 의해 단 25%만 즉시 빛을 내는 '단일항'이 되고, 나머지 75%는 빛을 내뿜는 비상문이 잠긴 '삼중항'에 갇히게 됩니다. 이 75%의 전자는 빛을 내지 못하고 분자를 부르르 떨게 만들어 열에너지로 낭비되기 때문에 스마트폰이 뜨거워집니다.
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 형광펜(빛을 끄면 즉시 소광)과 야광 스티커(불 꺼도 오래 지속)의 실물 관찰을 통해 단일항(형광)과 삼중항(인광)의 방출 시간 차이를 체감하게 합니다.
        </div>
      `
    },
    4: {
      title: '[4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
      badge: 'OLED 모듈 4차시 | 성취기준 [9과10-03] [9과01-02] [9과23-01]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 2 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. KAIST CPRL 연구실의 핫 엑시톤(Hot Exciton) 및 TADF 원리를 적용하여, 우리 모둠만의 차세대 청색 OLED 발광 분자 디자이너 기획서를 작성해 보자.</p>

        <table class="data-table" style="margin-bottom:1.25rem;">
          <tr>
            <th style="width:22%;">스타트업 회사명</th>
            <td style="width:28%;">&nbsp;</td>
            <th style="width:22%;">대표 분자 디자이너</th>
            <td style="width:28%;">&nbsp;</td>
          </tr>
          <tr>
            <th>해결할 과제</th>
            <td colspan="3">청색(Blue) OLED는 에너지가 너무 높아 분자가 쉽게 깨져 화면 수명이 짧고 번인(Burn-in)이 발생함.</td>
          </tr>
          <tr>
            <th>나만의 청색 분자<br>구조 스케치 및 아이디어</th>
            <td colspan="3">
              <div class="answer-box" style="height:90px; display:flex; align-items:center; justify-content:center; color:#94a3b8;">
                (여기에 분자의 결합을 단단하게 고정한 모양을 스케치해 보세요)
              </div>
            </td>
          </tr>
          <tr>
            <th>75% 구출 메커니즘<br>적용 방안</th>
            <td colspan="3">
              [ 핫 엑시톤 구름다리 우회로 / TADF 열 흡수 역전이 ] 중 선택:<br>
              ☞ 구출 원리 서술: 
            </td>
          </tr>
          <tr>
            <th>미래 사회 기대 효과</th>
            <td colspan="3">
              ☞ 디스플레이 수명 연장, 배터리 지속 시간, 롤러블/접는 스마트폰 등 기대 효과 서술:
            </td>
          </tr>
        </table>
      `,
      teacher: `
        <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">1. 차세대 청색 분자 디자이너 기획서 예시 산출물</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <tr>
            <th style="width:22%;">스타트업 회사명</th>
            <td style="width:28%;"><strong class="model-answer">블루 퀀텀 퓨처스 (Blue Quantum)</strong></td>
            <th style="width:22%;">대표 분자 디자이너</th>
            <td style="width:28%;"><strong class="model-answer">김청색 수석 디자이너 외 3명</strong></td>
          </tr>
          <tr>
            <th>해결할 과제</th>
            <td colspan="3">높은 에너지로 인해 쉽게 분해되는 청색 발광 분자의 열화(번인) 방지 및 발광 효율 100% 달성</td>
          </tr>
          <tr>
            <th>분자 구조 아이디어</th>
            <td colspan="3"><strong class="model-answer">단단한 벤젠 다환 고리로 원자들을 강력하게 결합하여 진동에 의한 열 손실을 억제하고 분자 깨짐을 원천 차단함.</strong></td>
          </tr>
          <tr>
            <th>75% 구출 메커니즘</th>
            <td colspan="3"><strong class="model-answer">KAIST CPRL의 [핫 엑시톤 구름다리 우회로] 적용: 갇힌 삼중항이 바닥으로 내려가기 전 옥상 고에너지 통로를 통해 단일항으로 초고속 이동시켜 100% 청색 형광으로 전환.</strong></td>
          </tr>
          <tr>
            <th>미래 사회 기대 효과</th>
            <td colspan="3"><strong class="model-answer">스마트폰 배터리 사용 시간 2배 증대, 10년 이상 잔상 없는 초고화질 롤러블 OLED TV 상용화, 에너지 절감에 기여.</strong></td>
          </tr>
        </table>

        <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">2. 3차원 평가 루브릭</h4>
        <table class="data-table" style="font-size:0.88rem;">
          <thead>
            <tr><th style="width:20%;">평가 영역</th><th style="width:26%;">탁월 (A)</th><th style="width:27%;">보통 (B)</th><th style="width:27%;">노력요함 (C)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>과학적 타당성</strong></td>
              <td>단일항/삼중항 및 KAIST 구출 원리를 정확히 적용함</td>
              <td>구출 원리는 이해했으나 분자 구조 설명이 다소 모호함</td>
              <td>구출 메커니즘 적용이 미흡하고 단순 상상에 의존함</td>
            </tr>
            <tr>
              <td><strong>창의성 및 기획력</strong></td>
              <td>미래 사회 문제와 연결된 혁신적 디스플레이 구안</td>
              <td>기존 제품의 단순 개선 수준에 머무름</td>
              <td>기획 내용의 구체성이 부족함</td>
            </tr>
          </tbody>
        </table>
      `
    }
  },
  quantum: {
    1: {
      title: '[1차시] 원자 레고 퍼즐과 지수 폭발 체험',
      badge: '양자컴퓨터 모듈 1차시 | 성취기준 [9과11-01] [9과11-02] [9과01-02]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 3 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 분자 속 전자 수에 따른 계산 조합의 수(2ᴺ)를 계산하여 표의 빈칸을 채워보자.</p>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:20%;">물질명</th>
              <th style="width:15%;">화학식</th>
              <th style="width:15%;">전자 수 (N)</th>
              <th style="width:25%;">계산해야 할 상태 수 (2ᴺ)</th>
              <th style="width:25%;">일반 슈퍼컴퓨터 소요 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>수소 원자</td><td>H</td><td>1개</td><td>2¹ = ( &nbsp;&nbsp;&nbsp;&nbsp; ) 가지</td><td>0.000001초 (즉시)</td></tr>
            <tr><td>물 분자</td><td>H₂O</td><td>10개</td><td>2¹⁰ = ( &nbsp;&nbsp;&nbsp;&nbsp; ) 가지</td><td>약 0.001초</td></tr>
            <tr><td>카페인 분자</td><td>C₈H₁₀N₄O₂</td><td>102개</td><td>2¹⁰² ≈ 10³⁰ 가지</td><td>( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</td></tr>
            <tr><td>페니실린(항생제)</td><td>C₁₆H₁₈N₂O₄S</td><td>약 280개</td><td>2²⁸⁰ ≈ 10⁸⁴ 가지</td><td>( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</td></tr>
          </tbody>
        </table>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 지구상의 모든 모래알 수는 약 10²³개이고, 우주 전체의 모든 원자 수는 약 10⁸⁰개입니다. 이 사실을 바탕으로 왜 슈퍼컴퓨터로도 작은 약품 분자 하나를 계산하지 못하는지 '지수 폭발'의 관점에서 서술해 보자.</p>
        <div class="answer-box">
          ☞ 서술 내용: 
        </div>
      `,
      teacher: `
        <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">1. 지수 폭발 체험표 예시 답안</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <thead>
            <tr>
              <th style="width:20%;">물질명</th>
              <th style="width:15%;">화학식</th>
              <th style="width:15%;">전자 수 (N)</th>
              <th style="width:25%;">계산해야 할 상태 수 (2ᴺ)</th>
              <th style="width:25%;">일반 슈퍼컴퓨터 소요 시간</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>수소 원자</strong></td><td>H</td><td>1개</td><td><strong class="model-answer">2¹ = 2 가지</strong></td><td>0.000001초 (즉시 계산)</td></tr>
            <tr><td><strong>물 분자</strong></td><td>H₂O</td><td>10개</td><td><strong class="model-answer">2¹⁰ = 1,024 가지</strong></td><td>약 0.001초 (즉시 계산)</td></tr>
            <tr><td><strong>카페인 분자</strong></td><td>C₈H₁₀N₄O₂</td><td>102개</td><td><strong class="model-answer">2¹⁰² ≈ 10³⁰ 가지</strong></td><td><strong class="model-answer">수백 년 이상 소요 (지구 모든 모래알 10²³개 초과!)</strong></td></tr>
            <tr><td><strong>페니실린</strong></td><td>C₁₆H₁₈N₂O₄S</td><td>약 280개</td><td><strong class="model-answer">2²⁸⁰ ≈ 10⁸⁴ 가지</strong></td><td><strong class="model-answer">우주 나이(138억 년) 동안 계산해도 불가 (우주 원자 수 10⁸⁰개 초과!)</strong></td></tr>
          </tbody>
        </table>

        <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">2. 슈퍼컴퓨터의 한계 서술 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> <strong>모범 답안:</strong> 
          분자 속 전자가 1개 늘어날 때마다 계산해야 하는 양자역학적 상태의 수가 2배씩 곱해지는 <strong>'지수 폭발(2ᴺ)'</strong>이 발생하기 때문입니다. 전자가 100개만 넘어가도 조합의 수가 전 우주의 모든 원자 수(10⁸⁰)를 아득히 뛰어넘어, 현존하는 가장 강력한 슈퍼컴퓨터로도 계산이 물리적으로 불가능합니다.
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#7c3aed; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 체스판 쌀알 퀴즈(1칸 1톨, 2칸 2톨... 64번째 칸엔 1800경 톨)를 도입에 제시하여 거듭제곱의 무서운 증가 속도를 직관적으로 체감하게 하세요.
        </div>
      `
    },
    2: {
      title: '[2차시] 0과 1이 동시에 춤추는 동전 팽이와 양자 큐비트',
      badge: '양자컴퓨터 모듈 2차시 | 성취기준 [9정01-03] [9정02-02] [9과01-02]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 3 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 책상 위 동전 팽이 조작 실험을 통해 고전 비트와 양자 큐비트의 차이를 비교해 보자.</p>
        <table class="data-table" style="margin-bottom:1.25rem;">
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
              <td><strong>정보의 표현</strong></td>
              <td>0 또는 1 중 ( 단 한 개만 / 둘 다 동시에 ) 선택</td>
              <td>0과 1이 ( 단 한 개만 / 둘 다 동시에 ) 섞인 <strong>중첩</strong></td>
            </tr>
            <tr>
              <td><strong>10개 사용 시 정보 처리</strong></td>
              <td>1,024개 길 중 ( 1 / 1,024 )개씩 순서대로 검사</td>
              <td>1,024개 길을 ( 1개씩 순서대로 / 단 한 번에 동시에 ) 탐색!</td>
            </tr>
          </tbody>
        </table>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 미로 찾기 비유에서 왜 양자 컴퓨터가 슈퍼컴퓨터보다 압도적으로 빠른지 서술해 보자.</p>
        <div class="answer-box">
          ☞ 서술 내용: 
        </div>
      `,
      teacher: `
        <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">1. 비트 vs 큐비트 비교 예시표</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
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
              <td><strong>정보의 표현</strong></td>
              <td>0 또는 1 중 (<strong class="model-answer">&nbsp;단 한 개만&nbsp;</strong>) 선택</td>
              <td>0과 1이 (<strong class="model-answer">&nbsp;둘 다 동시에&nbsp;</strong>) 섞인 <strong>중첩</strong></td>
            </tr>
            <tr>
              <td><strong>10개 사용 시 정보 처리</strong></td>
              <td>1,024개 길 중 (<strong class="model-answer">&nbsp;1&nbsp;</strong>)개씩 순서대로 검사</td>
              <td>1,024개 길을 (<strong class="model-answer">&nbsp;단 한 번에 동시에&nbsp;</strong>) 동시 탐색!</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">2. 미로 찾기 비유 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> <strong>모범 답안:</strong> 
          일반 컴퓨터는 한 갈래 길씩 가보고 막히면 되돌아 나오는 <strong>'순차 탐색'</strong> 방식입니다. 반면 양자 컴퓨터는 중첩의 성질을 이용하여 <strong>1,024명의 분신이 모든 갈래 길을 '동시에 단 한 번에' 쏟아져 들어가서</strong> 최단 경로를 즉각 찾아내는 <strong>'동시 병렬 처리'</strong> 방식이기 때문입니다.
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 학생들이 동전을 돌릴 때 떨어지지 않도록 트레이를 사용하고, "도는 동안 앞면인가요 뒷면인가요?"라는 발문으로 측정 전 공존 상태(중첩)를 온몸으로 느끼게 합니다.
        </div>
      `
    },
    3: {
      title: '[3차시] 환상의 2인 3각 달리기: VQE 알고리즘 역할극',
      badge: '양자컴퓨터 모듈 3차시 | 성취기준 [9과16-01] [9과16-06] [9정02-02]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 3 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 자연계의 모든 화학 분자가 결합할 때 나타나는 에너지 특징을 완성해 보자.</p>
        <div class="answer-box">
          ☞ 자연계의 모든 화학 분자는 에너지가 가장 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 최저 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )를 찾아 결합합니다.
        </div>

        <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 2인 1조 역할극을 바탕으로 양자 컴퓨터와 일반 컴퓨터의 VQE 협동 순서도를 완성해 보자.</p>
        <div class="answer-box" style="line-height:2;">
          [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 계산<br>
          ⬇ 수치 전달<br>
          [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )<br>
          ⬇ 반복(피드백 루프)<br>
          [ 3단계: <strong>목표 달성</strong> ] 골짜기 최저 바닥 상태(-1.137 a.u.) 도달! ➔ 가장 안정한 <strong>신물질 분자 구조</strong> 완성!
        </div>
      `,
      teacher: `
        <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">1. 화학 분자의 결합 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
          <span class="answer-arrow">☞</span> 자연계의 모든 화학 분자는 에너지가 가장 (<strong class="model-answer">&nbsp;낮은&nbsp;</strong>) 최저 (<strong class="model-answer">&nbsp;바닥 상태 (Ground State)&nbsp;</strong>)를 찾아 결합합니다.
        </div>

        <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">2. VQE 협동 순서도 모범 답안</h4>
        <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; line-height:2;">
          [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( <strong class="model-answer">에너지 값</strong> ) 계산<br>
          ⬇ 수치 전달<br>
          [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( <strong class="model-answer">미세 조정(최적화)</strong> )<br>
          ⬇ 반복(피드백 루프)<br>
          [ 3단계: <strong>목표 달성</strong> ] 골짜기 최저 바닥 상태(-1.137 a.u.) 도달! ➔ 가장 안정한 <strong>신물질 분자 구조</strong> 완성!
        </div>

        <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1rem; font-size:0.88rem;">
          <strong>💡 수업 지도 팁:</strong> 학생 A는 양자 계산기 역할(에너지 계산), 학생 B는 네비게이션 역할(파라미터 조정)을 맡겨 공이 골짜기 바닥으로 굴러 떨어지는 최적화 루프를 온몸으로 체험하게 합니다.
        </div>
      `
    },
    4: {
      title: '[4차시] 지구를 구하는 틴에이저 양자 화학 스타트업 CEO 프로젝트',
      badge: '양자컴퓨터 모듈 4차시 | 성취기준 [9과01-02] [9과16-01] [9과23-01]',
      student: `
        <div style="display:flex; justify-content:flex-end; gap:1.2rem; margin-bottom:1rem; font-size:0.9rem; font-weight:600; padding:0.5rem 0.8rem; background:#f1f5f9; border-radius:0.4rem;">
          <span>제 3 학년 ( &nbsp;&nbsp;&nbsp;&nbsp; ) 반</span>
          <span>( &nbsp;&nbsp;&nbsp;&nbsp; ) 번</span>
          <span>이름: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
          <span>모둠: ( &nbsp;&nbsp;&nbsp;&nbsp; ) 모둠</span>
        </div>

        <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 인류의 3대 지구 난제 중 1개를 선택하여, 비커 없이 컴퓨터로 분자를 디자인하는 우리 모둠의 미래 스타트업 창업 기획서를 작성해 보자.</p>

        <table class="data-table" style="margin-bottom:1.25rem;">
          <tr>
            <th style="width:22%;">스타트업 회사명</th>
            <td style="width:28%;">&nbsp;</td>
            <th style="width:22%;">대표 CEO 및 연구팀</th>
            <td style="width:28%;">&nbsp;</td>
          </tr>
          <tr>
            <th>해결할 지구 난제</th>
            <td colspan="3">[ 친환경 상온 비료 / 전고체 배터리 / 표적 신약 ] 중 선택:<br>☞ 선택 이유:</td>
          </tr>
          <tr>
            <th>양자 컴퓨터로 설계할<br>가상 분자 아이디어</th>
            <td colspan="3">
              ☞ 설계할 촉매, 전해질, 또는 약품 분자의 핵심 원리 서술:
            </td>
          </tr>
          <tr>
            <th>사회적 및 생태적<br>기대 효과</th>
            <td colspan="3">
              ☞ 탄소 중립, 식량난 해결, 질병 극복 등 인류 공헌 효과 서술:
            </td>
          </tr>
        </table>
      `,
      teacher: `
        <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">1. 스타트업 CEO 기획서 예시 산출물</h4>
        <table class="data-table" style="margin-bottom:1.25rem;">
          <tr>
            <th style="width:22%;">스타트업 회사명</th>
            <td style="width:28%;"><strong class="model-answer">퀀텀 카탈리스트 (Quantum Catalyst)</strong></td>
            <th style="width:22%;">대표 CEO 및 연구팀</th>
            <td style="width:28%;"><strong class="model-answer">이양자 대표 (양자계산과학자 모둠)</strong></td>
          </tr>
          <tr>
            <th>해결할 지구 난제</th>
            <td colspan="3"><strong class="model-answer">[친환경 상온 비료 합성 촉매 설계]: 400℃ 고온과 200기압을 쓰는 하버-보슈 공정을 대체하여 전 세계 전기의 2% 소비 절감</strong></td>
          </tr>
          <tr>
            <th>가상 분자 아이디어</th>
            <td colspan="3"><strong class="model-answer">뿌리혹박테리아 질소고정효소 활성 중심인 철-몰리브덴(Fe-Mo) 클러스터의 전자 구조를 양자 시뮬레이션하여 상온에서도 질소(N₂) 결합을 끊는 인공 금속 유기 촉매 설계.</strong></td>
          </tr>
          <tr>
            <th>사회·생태적 기대효과</th>
            <td colspan="3"><strong class="model-answer">전 세계 온실가스 1.5% 감축, 저개발국에 값싸고 안전한 친환경 비료 공급으로 농업 탄소 중립 및 인류 기아 문제 해결.</strong></td>
          </tr>
        </table>

        <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">2. 3차원 평가 루브릭</h4>
        <table class="data-table" style="font-size:0.88rem;">
          <thead>
            <tr><th style="width:20%;">평가 영역</th><th style="width:26%;">탁월 (A)</th><th style="width:27%;">보통 (B)</th><th style="width:27%;">노력요함 (C)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>과학적 타당성</strong></td>
              <td>분자 결합 및 양자 컴퓨터 시뮬레이션 원리를 논리적으로 접목함</td>
              <td>지구 난제는 이해했으나 분자 시뮬레이션 설명이 다소 추상적임</td>
              <td>양자역학 원리 접목 없이 단순 아이디어만 나열함</td>
            </tr>
            <tr>
              <td><strong>생태전환 가치</strong></td>
              <td>탄소 중립, 환경, 인류 복지와의 연계성을 설득력 있게 제시함</td>
              <td>사회적 파급 효과가 단편적으로 언급됨</td>
              <td>사회적 기대 효과 분석이 미흡함</td>
            </tr>
          </tbody>
        </table>
      `
    }
  }
};

let currentModalModule = 'oled';
let currentModalLesson = 1;
let currentModalTab = 'student';

function ensureWorksheetModalExists() {
  if (document.getElementById('worksheet-modal')) return;

  const modalHtml = `
    <div id="worksheet-modal" class="worksheet-modal-backdrop" onclick="handleModalBackdropClick(event)">
      <div class="worksheet-modal-container" onclick="event.stopPropagation()">
        
        <!-- Modal Header without Chrome tabs -->
        <div class="worksheet-modal-header">
          <div class="worksheet-modal-title-wrap">
            <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
              <h3 id="worksheet-modal-title" class="worksheet-modal-title">활동지</h3>
              <span id="worksheet-modal-type-badge" class="worksheet-modal-type-badge badge-student">📝 학생용 활동지</span>
            </div>
          </div>

          <div class="worksheet-modal-actions">
            <button type="button" id="modal-mode-toggle-btn" class="modal-toggle-btn" onclick="toggleModalMode()" title="다른 자료로 바로 전환">
              <span>💡 교사용 보기</span>
            </button>
            <button type="button" class="topbar-btn primary modal-print-btn" onclick="printModalWorksheet()" title="현재 열린 문서를 A4로 인쇄합니다">
              <span>🖨️ A4 인쇄</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closeWorksheetModal()" title="닫기 (ESC)">✕</button>
          </div>
        </div>

        <!-- Modal Body (Panes for Student & Teacher) -->
        <div class="worksheet-modal-body" id="worksheet-modal-body">
          <div id="modal-pane-student" class="modal-tab-pane active"></div>
          <div id="modal-pane-teacher" class="modal-tab-pane"></div>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeWorksheetModal();
    }
  });
}

function openWorksheetModal(moduleType, lessonNum, tabType = 'student') {
  ensureWorksheetModalExists();

  const data = worksheetModalData[moduleType] && worksheetModalData[moduleType][lessonNum];
  if (!data) return;

  currentModalModule = moduleType;
  currentModalLesson = lessonNum;

  document.getElementById('worksheet-modal-title').innerText = data.title;
  document.getElementById('modal-pane-student').innerHTML = data.student;
  document.getElementById('modal-pane-teacher').innerHTML = data.teacher;

  setModalMode(tabType || 'student');

  const modalEl = document.getElementById('worksheet-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeWorksheetModal() {
  const modalEl = document.getElementById('worksheet-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
  }
  document.body.style.overflow = '';
}

function handleModalBackdropClick(event) {
  if (event.target && event.target.id === 'worksheet-modal') {
    closeWorksheetModal();
  }
}

function setModalMode(tabType) {
  currentModalTab = tabType;
  const paneStudent = document.getElementById('modal-pane-student');
  const paneTeacher = document.getElementById('modal-pane-teacher');
  const typeBadge = document.getElementById('worksheet-modal-type-badge');
  const toggleBtn = document.getElementById('modal-mode-toggle-btn');

  if (tabType === 'student') {
    paneStudent.classList.add('active');
    paneTeacher.classList.remove('active');
    if (typeBadge) {
      typeBadge.className = 'worksheet-modal-type-badge badge-student';
      typeBadge.innerText = '📝 학생용 활동지';
    }
    if (toggleBtn) {
      toggleBtn.className = 'modal-toggle-btn to-teacher';
      toggleBtn.innerHTML = '<span>💡 교사용 보기</span>';
    }
  } else {
    paneTeacher.classList.add('active');
    paneStudent.classList.remove('active');
    if (typeBadge) {
      typeBadge.className = 'worksheet-modal-type-badge badge-teacher';
      typeBadge.innerText = '💡 교사용 지도자료';
    }
    if (toggleBtn) {
      toggleBtn.className = 'modal-toggle-btn to-student';
      toggleBtn.innerHTML = '<span>📝 학생용 활동지 보기</span>';
    }
  }
}

function toggleModalMode() {
  const nextMode = (currentModalTab === 'student') ? 'teacher' : 'student';
  setModalMode(nextMode);
}

function printModalWorksheet() {
  document.body.classList.add('printing-modal');

  const cleanup = () => {
    document.body.classList.remove('printing-modal');
    window.removeEventListener('afterprint', cleanup);
  };

  window.addEventListener('afterprint', cleanup);
  window.print();
  setTimeout(cleanup, 1200);
}

// Global exposure
window.openWorksheetModal = openWorksheetModal;
window.closeWorksheetModal = closeWorksheetModal;
window.setModalMode = setModalMode;
window.toggleModalMode = toggleModalMode;
window.switchModalTab = setModalMode; // 하위 호환
window.printModalWorksheet = printModalWorksheet;
