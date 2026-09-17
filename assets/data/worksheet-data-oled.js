/**
 * KAIST 첨단과학 탐구 - OLED 모듈 1~4차시 활동지 및 모범답안 데이터
 * (Single Source of Truth: 디지털 입력칸 data-answer 및 교사용 팁 포함)
 */
window.worksheetModalData = window.worksheetModalData || {};

window.worksheetModalData.oled = {
  1: {
    title: '[1차시] 어둠 속을 밝히는 형광빛의 원리',
    badge: 'OLED 모듈 1차시 | 성취기준 [9과10-03]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 각 물질에 일반 조명과 자외선(UV-A)을 비추었을 때의 색상 변화를 표에 기록하시오.</p>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
        <thead>
          <tr>
            <th style="width:22%;">실험 물질</th>
            <th style="width:24%;">포함된 핵심 분자</th>
            <th style="width:27%;">일반 조명 아래 색상</th>
            <th style="width:27%;">자외선을 쬐었을 때 색상</th>
          </tr>
        </thead>
        <tbody style="text-align:center;">
          <tr>
            <td style="text-align:center;">토닉워터</td>
            <td style="text-align:center;">퀴닌</td>
            <td><input type="text" class="ws-table-input" data-answer="무색투명"></td>
            <td><input type="text" class="ws-table-input" data-answer="푸른색 형광"></td>
          </tr>
          <tr>
            <td style="text-align:center;">비타민 음료</td>
            <td style="text-align:center;">리보플라빈</td>
            <td><input type="text" class="ws-table-input" data-answer="노란색"></td>
            <td><input type="text" class="ws-table-input" data-answer="연두색 형광"></td>
          </tr>
          <tr>
            <td style="text-align:center;">올리브유</td>
            <td style="text-align:center;">엽록소</td>
            <td><input type="text" class="ws-table-input" data-answer="연초록색"></td>
            <td><input type="text" class="ws-table-input" data-answer="붉은색 형광"></td>
          </tr>
          <tr>
            <td style="text-align:center;">천원권 지폐</td>
            <td style="text-align:center;">형광 섬유</td>
            <td><input type="text" class="ws-table-input" data-answer="일반 인쇄"></td>
            <td><input type="text" class="ws-table-input" data-answer="형광 섬유 발광"></td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 자외선(300~400nm)과 가시광선(400~700nm) 중 파장이 더 짧고 에너지가 더 큰 빛은 무엇인지 서술하시오.</p>
      <div class="answer-box" style="display:flex; align-items:center; gap:0.6rem; padding:0.6rem 0.85rem;">
        <span style="white-space:nowrap; display:inline-flex; align-items:center; gap:0.25rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> 답:
        </span>
        <input type="text" class="ws-text-input" data-answer="자외선 (파장이 짧고 에너지가 큼)">
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">3. 눈에 보이지 않는 자외선을 비추었는데 왜 형광 빛이 나오는지, 들어간 자외선과 형광 빛의 에너지 차이는 어떨지 토의하여 서술하시오.</p>
      <div class="answer-box" style="padding:0.75rem 0.85rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>토의 내용:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="자외선을 흡수한 물질이 일부 에너지를 열로 먼저 방출하고, 남은 에너지를 가시광선(형광빛)으로 방출하기 때문입니다. (자외선 에너지 = 형광빛 에너지 + 열에너지)"></textarea>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#2563eb; margin-top:1.2rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 암실 상자를 활용하면 형광 빛의 선명도가 극대화됩니다. 학생들에게 &quot;왜 토닉워터는 파란색인데 올리브유는 붉은색일까?&quot; 질문하여 물질마다 방출하는 빛의 에너지가 다름을 자연스럽게 유도하세요.
      </div>
    `,
    teacher: `
      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">1. 각 물질의 관찰 결과 예시표</h4>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
        <thead>
          <tr>
            <th style="width:24%;">실험 물질</th>
            <th style="width:26%;">포함된 핵심 분자</th>
            <th style="width:25%;">일반 조명 아래 색상</th>
            <th style="width:25%;">자외선을 쬐었을 때 색상 (예시 답안)</th>
          </tr>
        </thead>
        <tbody style="text-align:center;">
          <tr><td style="text-align:center;"><strong>토닉워터</strong></td><td style="text-align:center;">퀴닌</td><td style="text-align:center;">무색투명</td><td style="text-align:center;"><strong class="model-answer">푸른색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>비타민 음료</strong></td><td style="text-align:center;">리보플라빈</td><td style="text-align:center;">노란색</td><td style="text-align:center;"><strong class="model-answer">연두색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>올리브유</strong></td><td style="text-align:center;">엽록소</td><td style="text-align:center;">연초록색</td><td style="text-align:center;"><strong class="model-answer">붉은색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>천원권 지폐</strong></td><td style="text-align:center;">형광 섬유</td><td style="text-align:center;">일반 인쇄</td><td style="text-align:center;"><strong class="model-answer">형광 섬유 발광</strong></td></tr>
        </tbody>
      </table>

      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">2. 파장과 에너지 관계 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        자외선 (파장이 짧고 에너지가 큼)
      </div>

      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">3. 형광 현상과 에너지 보존 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        자외선을 흡수한 물질이 일부 에너지를 열로 먼저 방출하고, 남은 에너지를 가시광선(형광빛)으로 방출하기 때문입니다. (자외선 에너지 = 형광빛 에너지 + 열에너지)
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 암실 상자를 활용하면 형광 빛의 선명도가 극대화됩니다. 학생들에게 "왜 토닉워터는 파란색인데 올리브유는 붉은색일까?" 질문하여 물질마다 방출하는 빛의 에너지가 다름을 자연스럽게 유도하세요.
      </div>
    `
  },
  2: {
    title: '[2차시] 전자의 에너지 전달',
    badge: 'OLED 모듈 2차시 | 성취기준 [9과11-02] [9과14-03]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 가상실험실을 관찰하고, 3단계 과정을 아래 빈칸에 정리해 보자.</p>
      <table class="data-table" style="margin-bottom:1.25rem;">
        <thead>
          <tr><th style="width:22%; text-align:center;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;"><strong>1단계</strong></td>
            <td>원자 속 전자가 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="자외선"> ) 에너지를 흡수하여 에너지가 높아진 상태가 된다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>2단계</strong></td>
            <td>전자가 주변 원자들과 부딪히고 진동하며 일부 에너지를 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="열"> ) 형태로 방출한다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>3단계</strong></td>
            <td>전자가 남은 에너지를 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="형광빛"> )으로 방출하며 원래 상태로 되돌아온다.</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 에너지 보존 법칙의 관점에서, [자외선 에너지]와 [형광빛 에너지], [열에너지] 사이의 관계식을 완성해 보자.</p>
      <div class="answer-box" style="text-align:center; font-size:0.95rem; display:flex; align-items:center; justify-content:center; gap:0.4rem; flex-wrap:wrap; padding:0.75rem 0.85rem;">
        <span>[ 자외선 에너지 ] = [</span>
        <input type="text" class="ws-mini-input" style="width:120px; text-align:center;" data-answer="형광빛 에너지">
        <span>] + [</span>
        <input type="text" class="ws-mini-input" style="width:100px; text-align:center;" data-answer="열에너지">
        <span>]</span>
      </div>
    `,
    teacher: `
      <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">1. 전자의 3단계 에너지 전달 예시 답안</h4>
      <table class="data-table" style="margin-bottom:1.25rem;">
        <thead>
          <tr><th style="width:22%; text-align:center;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환 (예시 답안)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;"><strong>1단계</strong></td>
            <td>원자 속 전자가 (<strong class="model-answer">&nbsp;자외선&nbsp;</strong>) 에너지를 흡수하여 에너지가 높아진 상태가 된다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>2단계</strong></td>
            <td>전자가 주변 원자들과 부딪히고 진동하며 일부 에너지를 (<strong class="model-answer">&nbsp;열&nbsp;</strong>) 형태로 방출한다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>3단계</strong></td>
            <td>전자가 남은 에너지를 (<strong class="model-answer">&nbsp;형광빛&nbsp;</strong>)으로 방출하며 원래 상태로 되돌아온다.</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">2. 에너지 보존 관계식</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; text-align:center; font-size:1rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>[ 자외선 에너지 ] = [ <span class="model-answer">형광빛 에너지</span> ] + [ <span class="model-answer">열에너지</span> ]</strong>
      </div>
    `
  },
  3: {
    title: '[3차시] 팽이 스핀과 스마트폰 OLED의 75% 배터리 도둑',
    badge: 'OLED 모듈 3차시 | 성취기준 [9과11-02] [9과14-02] [9과14-03]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;" placeholder=" "></span>
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 전자의 회전 팽이(스핀) 모형에 따른 단일항과 삼중항의 차이를 비교해 보자.</p>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
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
            <td><input type="text" class="ws-table-input" data-answer="마주보고 회전 (↑↓)" placeholder="마주보고 / 나란히"></td>
            <td><input type="text" class="ws-table-input" data-answer="나란히 회전 (↑↑)" placeholder="마주보고 / 나란히"></td>
          </tr>
          <tr>
            <td><strong>방출되는 빛의 종류</strong></td>
            <td><input type="text" class="ws-table-input" data-answer="형광" placeholder="형광 / 인광"></td>
            <td><input type="text" class="ws-table-input" data-answer="인광" placeholder="형광 / 인광"></td>
          </tr>
          <tr>
            <td><strong>빛을 내뿜는 속도</strong></td>
            <td><input type="text" class="ws-table-input" data-answer="1억 분의 1초 만에 즉시 방출" placeholder="즉시 방출 / 천천히 방출"></td>
            <td><input type="text" class="ws-table-input" data-answer="비상문이 잠겨 갇혀서 천천히 방출" placeholder="즉시 방출 / 천천히 방출"></td>
          </tr>
          <tr>
            <td><strong>전기 주입 시 생성 확률</strong></td>
            <td><input type="text" class="ws-mini-input" style="width:60px;" data-answer="25" placeholder=" "> %</td>
            <td><input type="text" class="ws-mini-input" style="width:60px;" data-answer="75" placeholder=" "> %</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 스마트폰 배터리 전기로 화면을 켤 때 무려 75%의 전자가 빛을 내지 못하고 스마트폰을 뜨겁게 달구는 까닭을 위의 확률과 관련지어 설명해 보자.</p>
      <div class="answer-box" style="padding:0.75rem 0.85rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>까닭:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="전기(전류)를 유기 분자에 주입하면 양자역학적 스핀 조합 확률에 의해 단 25%만 즉시 빛을 내는 '단일항'이 되고, 나머지 75%는 빛을 내뿜는 비상문이 잠긴 '삼중항'에 갇히게 됩니다. 이 75%의 전자는 빛을 내지 못하고 분자를 부르르 떨게 만들어 열에너지로 낭비되기 때문에 스마트폰이 뜨거워집니다." placeholder="스마트폰 화면을 켤 때 75%의 전자가 빛을 내지 못하고 열로 변하는 이유를 서술해 보세요..."></textarea>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#059669; margin-top:1.2rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 형광펜(빛을 끄면 즉시 소광)과 야광 스티커(불 꺼도 오래 지속)의 실물 관찰을 통해 단일항(형광)과 삼중항(인광)의 방출 시간 차이를 체감하게 합니다.
      </div>
    `,
    teacher: `
      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">1. 단일항과 삼중항 비교 예시표</h4>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
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
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        전기(전류)를 유기 분자에 주입하면 양자역학적 스핀 조합 확률에 의해 단 25%만 즉시 빛을 내는 '단일항'이 되고, 나머지 75%는 빛을 내뿜는 비상문이 잠긴 '삼중항'에 갇히게 됩니다. 이 75%의 전자는 빛을 내지 못하고 분자를 부르르 떨게 만들어 열에너지로 낭비되기 때문에 스마트폰이 뜨거워집니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 형광펜(빛을 끄면 즉시 소광)과 야광 스티커(불 꺼도 오래 지속)의 실물 관찰을 통해 단일항(형광)과 삼중항(인광)의 방출 시간 차이를 체감하게 합니다.
      </div>
    `
  },
  4: {
    title: '[4차시] KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
    badge: 'OLED 모듈 4차시 | 성취기준 [9과10-03] [9과01-02] [9과23-01]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;" placeholder=" "></span>
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;" placeholder=" "> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. KAIST CPRL 연구실의 핫 엑시톤(Hot Exciton) 및 TADF 원리를 적용하여, 우리 모둠만의 차세대 청색 OLED 발광 분자 디자이너 기획서를 작성해 보자.</p>

      <table class="data-table" style="margin-bottom:1.25rem;">
        <tr>
          <th style="width:22%;">스타트업 회사명</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="블루 퀀텀 퓨처스 (Blue Quantum)" placeholder="회사명 입력..."></td>
          <th style="width:22%;">대표 분자 디자이너</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="김청색 수석 디자이너 외 3명" placeholder="성명 입력..."></td>
        </tr>
        <tr>
          <th>해결할 과제</th>
          <td colspan="3">청색(Blue) OLED는 에너지가 너무 높아 분자가 쉽게 깨져 화면 수명이 짧고 번인(Burn-in)이 발생함.</td>
        </tr>
        <tr>
          <th>나만의 청색 분자<br>구조 아이디어</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="3" data-answer="단단한 벤젠 다환 고리로 원자들을 강력하게 결합하여 진동에 의한 열 손실을 억제하고 분자 깨짐을 원천 차단함." placeholder="단단한 결합 구조 아이디어 또는 모양을 서술해 보세요..."></textarea>
          </td>
        </tr>
        <tr>
          <th>75% 구출 메커니즘<br>적용 방안</th>
          <td colspan="3">
            <div style="font-weight:600; margin-bottom:0.35rem;">[ 핫 엑시톤 구름다리 우회로 / TADF 열 흡수 역전이 ] 중 선택 및 서술:</div>
            <textarea class="ws-textarea-input" rows="2" data-answer="KAIST CPRL의 [핫 엑시톤 구름다리 우회로] 적용: 갇힌 삼중항이 바닥으로 내려가기 전 옥상 고에너지 통로를 통해 단일항으로 초고속 이동시켜 100% 청색 형광으로 전환." placeholder="선택한 구출 메커니즘과 작동 원리를 서술하세요..."></textarea>
          </td>
        </tr>
        <tr>
          <th>미래 사회 기대 효과</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="2" data-answer="스마트폰 배터리 사용 시간 2배 증대, 10년 이상 잔상 없는 초고화질 롤러블 OLED TV 상용화, 에너지 절감에 기여." placeholder="디스플레이 수명 연장, 배터리 지속 시간, 롤러블/접는 스마트폰 등 기대 효과를 서술하세요..."></textarea>
          </td>
        </tr>
      </table>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#d97706; margin-top:1.2rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생들이 KAIST 연구의 핵심인 &quot;열로 버려질 삼중항을 빛을 내는 단일항으로 구출하는 역발상&quot;을 창의적인 비즈니스 모델로 연결할 수 있도록 피드백합니다.
      </div>
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
};
