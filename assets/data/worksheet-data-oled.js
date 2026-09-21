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
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 각 물질에 일반 조명과 자외선(UV-A)을 비추었을 때의 색상 변화를 표에 기록하시오.</p>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
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

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 자외선(300~400nm)은 가시광선(400~700nm)보다 파장이 더 짧고 에너지가 더 크다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 토닉워터의 퀴닌 분자가 흡수한 자외선 에너지는 밖으로 뿜어내는 형광빛 에너지보다 항상 작다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 형광 물질은 자외선을 흡수한 후 일부 에너지를 열로 잃고 가시광선(형광빛)으로 방출한다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 자외선을 비추었을 때 형광빛이 나오는 이유를 에너지 보존 법칙과 관련지어 서술하시오.</p>
      <div class="answer-box" style="padding:0.85rem 1rem; margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술 내용:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="자외선을 흡수한 물질 속 분자가 일부 에너지를 열로 먼저 방출하고, 남은 에너지를 파장이 더 길고 에너지가 낮은 가시광선(형광빛)으로 방출하기 때문입니다. (자외선 에너지 = 형광빛 에너지 + 열에너지)"></textarea>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#2563eb; margin-top:1.5rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 암실 상자를 활용하면 형광 빛의 선명도가 극대화됩니다. 물질마다 방출하는 빛의 에너지가 다름을 자연스럽게 유도하세요.
      </div>
    `,
    teacher: `
      <h4 style="color:#2563eb; margin:1.25rem 0 0.8rem;">1. 각 물질의 관찰 결과 예시표</h4>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
        <thead>
          <tr>
            <th style="width:24%;">실험 물질</th>
            <th style="width:26%;">포함된 핵심 분자</th>
            <th style="width:25%;">일반 조명 아래 색상</th>
            <th style="width:25%;">자외선을 쬐었을 때 색상</th>
          </tr>
        </thead>
        <tbody style="text-align:center;">
          <tr><td style="text-align:center;"><strong>토닉워터</strong></td><td style="text-align:center;">퀴닌</td><td style="text-align:center;">무색투명</td><td style="text-align:center;"><strong class="model-answer">푸른색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>비타민 음료</strong></td><td style="text-align:center;">리보플라빈</td><td style="text-align:center;">노란색</td><td style="text-align:center;"><strong class="model-answer">연두색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>올리브유</strong></td><td style="text-align:center;">엽록소</td><td style="text-align:center;">연초록색</td><td style="text-align:center;"><strong class="model-answer">붉은색 형광</strong></td></tr>
          <tr><td style="text-align:center;"><strong>천원권 지폐</strong></td><td style="text-align:center;">형광 섬유</td><td style="text-align:center;">일반 인쇄</td><td style="text-align:center;"><strong class="model-answer">형광 섬유 발광</strong></td></tr>
        </tbody>
      </table>

      <h4 style="color:#2563eb; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 빛은 파장이 짧을수록 진동수가 높고 광자당 에너지가 큽니다. 자외선(300~400nm)이 가시광선(400~700nm)보다 에너지가 큽니다.<br>
        (2) <strong>X</strong> : 에너지 보존 법칙에 의해 흡수한 자외선 에너지는 방출된 형광빛 에너지와 발생한 열에너지의 합과 같으므로, 흡수한 자외선이 항상 더 큽니다.<br>
        (3) <strong>O</strong> : 흡수된 자외선의 높은 에너지는 일부 열로 빠져나가고 남은 에너지가 형광빛으로 방출됩니다.
      </div>

      <h4 style="color:#2563eb; margin:2.25rem 0 0.8rem;">3. 형광 현상과 에너지 보존 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; margin-bottom:2rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        자외선을 흡수한 물질 속 분자가 일부 에너지를 열로 먼저 방출하고, 남은 에너지를 파장이 더 길고 에너지가 낮은 가시광선(형광빛)으로 방출하기 때문입니다. (자외선 에너지 = 형광빛 에너지 + 열에너지)
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1.5rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 암실 상자를 활용하면 형광 빛의 선명도가 극대화됩니다. 물질마다 방출하는 빛의 에너지가 다름을 자연스럽게 유도하세요.
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
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 가상실험실을 관찰하고, 전자의 3단계 에너지 전달 과정을 빈칸에 정리하시오.</p>
      <table class="data-table" style="margin-bottom:2.25rem;">
        <thead>
          <tr><th style="width:22%; text-align:center;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;"><strong>1단계</strong></td>
            <td>원자 속 전자가 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="자외선"> ) 에너지를 흡수하여 에너지가 높아진 들뜬 상태가 된다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>2단계</strong></td>
            <td>전자가 주변 원자들과 부딪히고 진동하며 일부 에너지를 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="열"> ) 형태로 방출한다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>3단계</strong></td>
            <td>전자가 남은 에너지를 ( <input type="text" class="ws-mini-input" style="width:90px;" data-answer="형광빛"> )으로 방출하며 원래의 안정한 바닥 상태로 되돌아온다.</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 전자가 자외선을 흡수하면 에너지가 가장 낮은 바닥 상태에서 들뜬 상태로 뛰어오른다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 에너지를 얻어 들뜬 전자는 열이나 빛 방출 없이도 그 높은 상태를 영원히 유지할 수 있다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 2단계에서 방출된 열에너지와 3단계에서 나온 형광빛 에너지를 더하면 흡수한 자외선 에너지와 같다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 에너지 보존 법칙의 관점에서 에너지 관계식을 완성하시오.</p>
      <div class="answer-box" style="text-align:center; font-size:0.95rem; display:flex; align-items:center; justify-content:center; gap:0.4rem; flex-wrap:wrap; padding:0.85rem 1rem; margin-bottom:2rem;">
        <span>[ 자외선 에너지 ] = [</span>
        <input type="text" class="ws-mini-input" style="width:120px; text-align:center;" data-answer="형광빛 에너지">
        <span>] + [</span>
        <input type="text" class="ws-mini-input" style="width:100px; text-align:center;" data-answer="열에너지">
        <span>]</span>
      </div>
    `,
    teacher: `
      <h4 style="color:#7c3aed; margin:1.25rem 0 0.8rem;">1. 전자의 3단계 에너지 전달 예시 답안</h4>
      <table class="data-table" style="margin-bottom:2.25rem;">
        <thead>
          <tr><th style="width:22%; text-align:center;">단계</th><th style="width:78%;">전자의 상태 변화 및 에너지 전환 (예시 답안)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;"><strong>1단계</strong></td>
            <td>원자 속 전자가 (<strong class="model-answer">&nbsp;자외선&nbsp;</strong>) 에너지를 흡수하여 에너지가 높아진 들뜬 상태가 된다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>2단계</strong></td>
            <td>전자가 주변 원자들과 부딪히고 진동하며 일부 에너지를 (<strong class="model-answer">&nbsp;열&nbsp;</strong>) 형태로 방출한다.</td>
          </tr>
          <tr>
            <td style="text-align:center;"><strong>3단계</strong></td>
            <td>전자가 남은 에너지를 (<strong class="model-answer">&nbsp;형광빛&nbsp;</strong>)으로 방출하며 원래의 안정한 바닥 상태로 되돌아온다.</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color:#7c3aed; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 전자는 외부 에너지를 흡수하면 높은 에너지 준위인 들뜬 상태로 도약합니다.<br>
        (2) <strong>X</strong> : 들뜬 상태는 매우 불안정하므로 전자는 즉시 열과 빛을 방출하고 가장 안정한 바닥 상태로 되돌아옵니다.<br>
        (3) <strong>O</strong> : 에너지는 새롭게 생기거나 소멸하지 않고 형태만 전환되므로 흡수한 총에너지는 방출된 열과 빛의 합과 일치합니다.
      </div>

      <h4 style="color:#7c3aed; margin:2.25rem 0 0.8rem;">3. 에너지 보존 관계식</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; text-align:center; font-size:1rem; margin-bottom:2rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>[ 자외선 에너지 ] = [ <span class="model-answer">형광빛 에너지</span> ] + [ <span class="model-answer">열에너지</span> ]</strong>
      </div>
    `
  },
  3: {
    title: '[3차시] 스마트폰의 에너지 낭비',
    badge: 'OLED 모듈 3차시 | 성취기준 [9과11-02] [9과14-02] [9과14-03]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 배터리 전기가 스마트폰에 공급될 때 화면을 이루고 있는 두 가지 분자를 비교하여 표의 빈칸을 채우시오.</p>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
        <thead>
          <tr>
            <th style="width:24%;">구분</th>
            <th style="width:38%;">빛을 내는 분자</th>
            <th style="width:38%;">열을 내는 분자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>에너지 방출 형태</strong></td>
            <td><input type="text" class="ws-table-input ws-cell-input" data-answer="화면 빛"></td>
            <td><input type="text" class="ws-table-input ws-cell-input" data-answer="발열"></td>
          </tr>
          <tr>
            <td><strong>전기 공급 시 생성 비율</strong></td>
            <td>
              <div class="ws-input-unit-wrap">
                <input type="text" class="ws-table-input ws-cell-input" data-answer="25">
                <span class="ws-unit-label">%</span>
              </div>
            </td>
            <td>
              <div class="ws-input-unit-wrap">
                <input type="text" class="ws-table-input ws-cell-input" data-answer="75">
                <span class="ws-unit-label">%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 배터리 전기가 공급되면 스마트폰 화면 속 모든 분자(100%)가 화면 빛을 방출한다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 화면 분자의 75%는 빛을 내지 못하고 심하게 진동하며 발열로 전기를 전부 낭비한다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 75%의 열 손실은 스마트폰 배터리를 빠르게 닳게 하고 화면 잔상(번인)의 주요 원인이 된다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 스마트폰 화면에 전기를 공급했을 때 75%의 에너지가 열로 버려져 일어나는 문제점을 서술하시오.</p>
      <div class="answer-box" style="padding:0.85rem 1rem; margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술 내용:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="스마트폰 배터리 전기가 공급되면 분자의 75%가 빛을 내지 못하고 발열로 전부 낭비됩니다. 이로 인해 배터리가 빠르게 닳아 사용 시간이 단축되고, 기기가 뜨거워지며, 지속적인 열 때문에 발광 분자가 손상되어 화면 수명이 줄어들고 잔상(번인)이 발생하는 심각한 문제가 일어납니다."></textarea>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#059669; margin-top:1.5rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생들이 일상에서 스마트폰을 오래 쓸 때 화면이 뜨거워지고 배터리가 빨리 닳는 경험을 떠올리게 하여, 1:3 에너지 낭비 특성(빛 25% vs 열 75%)과 연결하도록 유도합니다.
      </div>
    `,
    teacher: `
      <h4 style="color:#059669; margin:1.25rem 0 0.8rem;">1. 빛을 내는 분자 vs 열을 내는 분자 비교 예시표</h4>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
        <thead>
          <tr>
            <th style="width:24%;">구분</th>
            <th style="width:38%;">빛을 내는 분자</th>
            <th style="width:38%;">열을 내는 분자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>에너지 방출 형태</strong></td>
            <td><strong class="model-answer">화면 빛</strong></td>
            <td><strong class="model-answer">발열</strong></td>
          </tr>
          <tr>
            <td><strong>전기 공급 시 생성 비율</strong></td>
            <td><strong class="model-answer">25</strong> %</td>
            <td><strong class="model-answer">75</strong> %</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color:#059669; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>X</strong> : 배터리 전기가 공급되면 1:3 자연 법칙에 의해 유용한 빛을 내는 분자는 25%에 불과하며 75%는 빛을 내지 못합니다.<br>
        (2) <strong>O</strong> : 75%에 해당하는 분자는 빛을 내지 못하고 강한 진동 에너지로 바뀌어 기기 발열로 전부 버려집니다.<br>
        (3) <strong>O</strong> : 낭비된 열은 배터리 조기 방전의 주범이며, 높은 온도로 인해 유기 분자가 파괴되면서 화면 번인(잔상) 현상을 유발합니다.
      </div>

      <h4 style="color:#059669; margin:2.25rem 0 0.8rem;">3. 75% 열 손실 문제점 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; margin-bottom:2rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        스마트폰 배터리 전기가 공급되면 화면 속 분자의 75%가 빛을 내지 못하고 발열로 전부 낭비됩니다. 이로 인해 배터리가 빠르게 닳아 사용 시간이 단축되고, 기기가 뜨거워지며, 지속적인 열 때문에 발광 분자가 손상되어 화면 수명이 줄어들고 잔상(번인)이 발생하는 심각한 문제가 일어납니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1.5rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 스마트폰 발열과 배터리 소모 경험을 떠올리도록 유도하여 1:3 낭비 법칙(빛 25% vs 열 75%)을 체감하도록 지도합니다.
      </div>
    `
  },
  4: {
    title: '[4차시] KAIST의 분자 연구',
    badge: 'OLED 모듈 4차시 | 성취기준 [9과10-03] [9과01-02] [9과23-01]',
    student: `
      <div class="ws-student-meta">
        <span>제 2 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. KAIST 연구진의 초고속 에너지 전환 기술(열로 빠져나가기 전 빛으로 전환)을 탐구하고, 아래 질문에 답하시오.</p>

      <table class="data-table" style="margin-bottom:2.25rem;">
        <tr>
          <th style="width:28%; text-align:center;">(1) 해결된 문제점</th>
          <td>
            <textarea class="ws-textarea-input" rows="2" placeholder="기존 스마트폰 화면에서 75%의 열 낭비로 인해 발생하던 문제점(기기 발열, 배터리 소모, 번인 등) 중 해결된 점을 서술하시오." data-answer="75%의 열 손실을 빛으로 구출하여 화면 발열을 크게 줄이고, 배터리 사용 시간을 최대 2배 늘렸으며 화면 번인(잔상) 문제를 해결함."></textarea>
          </td>
        </tr>
        <tr>
          <th style="width:28%; text-align:center;">(2) 미래 사회 기대 효과</th>
          <td>
            <textarea class="ws-textarea-input" rows="2" placeholder="이 첨단 기술이 적용되었을 때 우리가 미래에 사용하게 될 새로운 디스플레이 제품의 모습을 상상하여 서술하시오." data-answer="배터리 걱정 없이 하루 종일 쓰는 초경량 스마트폰, 잔상 없이 10년 이상 선명한 롤러블/폴더블 화면, 친환경 저전력 대형 디스플레이 등."></textarea>
          </td>
        </tr>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 청색(Blue) 빛은 빨강·초록빛보다 에너지가 높아 분자 결합이 깨지기 쉽고 수명이 가장 짧다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) KAIST 기술은 75%의 에너지가 열로 완전히 식어버린 후에 외부에서 열을 다시 모으는 방식이다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 열로 낭비되던 75%를 빛으로 구출하면 이론적으로 스마트폰 발광 효율을 최대 100%까지 끌어올릴 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#d97706; margin-top:1.5rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> KAIST의 첨단 기술이 가져올 일상생활의 혁신적 변화(배터리 2배, 발열 억제, 롤러블 등)와 미래 디스플레이 연구원 진로를 연결하여 지도합니다.
      </div>
    `,
    teacher: `
      <h4 style="color:#d97706; margin:1.25rem 0 0.8rem;">1. KAIST 첨단 기술 및 미래 사회 변화 예시 답안</h4>
      <table class="data-table" style="margin-bottom:2.25rem;">
        <tr>
          <th style="width:28%; text-align:center;">(1) 해결된 문제점</th>
          <td><strong class="model-answer">75%의 열 손실을 100% 빛으로 구출하여 스마트폰 기기 발열을 크게 낮추고, 배터리 사용 시간을 최대 2배 늘렸으며 화면 잔상(번인) 문제를 원천적으로 해결함.</strong></td>
        </tr>
        <tr>
          <th style="width:28%; text-align:center;">(2) 미래 사회 기대 효과</th>
          <td><strong class="model-answer">배터리 걱정 없이 얇고 가벼운 차세대 스마트폰 상용화, 10년 이상 써도 얼룩 잔상이 남지 않는 초고화질 롤러블/투명 디스플레이 출시, 디스플레이 소비전력 절감으로 친환경 기여.</strong></td>
        </tr>
      </table>

      <h4 style="color:#d97706; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 파란색 빛은 가시광선 중 파장이 가장 짧고 에너지가 가장 높아 결합 손상이 잦아 OLED의 오랜 해결 과제로 꼽힙니다.<br>
        (2) <strong>X</strong> : 열로 완전히 식어 주변으로 흩어지면 다시 모으는 것이 불가능하므로, 열로 식기 전에 빛을 내는 상태로 초고속 전환시켜야 합니다.<br>
        (3) <strong>O</strong> : 25%의 형광 빛에 더해 75%의 버려지는 에너지를 빛으로 전환하면 이론상 100% 내부 발광 효율을 달성할 수 있습니다.
      </div>

      <h4 style="color:#d97706; margin:2.25rem 0 0.8rem;">3. 평가 기준표</h4>
      <table class="data-table" style="font-size:0.88rem; margin-bottom:2rem;">
        <thead>
          <tr><th style="width:20%;">평가 영역</th><th style="width:26%;">탁월 (A)</th><th style="width:27%;">보통 (B)</th><th style="width:27%;">노력요함 (C)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>과학적 타당성</strong></td>
            <td>열로 식기 전 빛으로 전환하는 KAIST 초고속 기술 원리와 발열·배터리 해결 관계를 정확히 설명함</td>
            <td>기술 원리는 이해했으나 기존 문제점 해결 설명이 다소 모호함</td>
            <td>기술 원리 이해가 미흡하고 단순 상상에 의존함</td>
          </tr>
          <tr>
            <td><strong>창의성 및 미래 영향</strong></td>
            <td>미래 사회 문제와 연결된 혁신적 디스플레이 제품의 변화를 구체적으로 제시함</td>
            <td>기존 스마트폰의 단순 개선 수준에 머무름</td>
            <td>미래 변화에 대한 서술이 부족함</td>
          </tr>
        </tbody>
      </table>
    `
  }
};

