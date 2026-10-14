/**
 * KAIST 첨단과학 탐구 - 양자컴퓨터 모듈 1~4차시 활동지 및 모범답안 데이터
 * (Single Source of Truth: 디지털 입력칸 data-answer 및 교사용 팁 포함)
 */
window.worksheetModalData = window.worksheetModalData || {};

window.worksheetModalData.quantum = {
  1: {
    title: '[1차시] 분자 속 전자와 지수 폭발',
    badge: '양자컴퓨터 모듈 1차시 | 성취기준 [9과11-01] [9과11-02] [9과01-02]',
    student: `
      <div class="ws-student-meta">
        <span>제 3 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 분자 속 전자 수에 따라 계산해야 할 경우의 수(2ᴺ)를 정리하고, 무엇보다 많은지 비교하시오.</p>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
        <thead>
          <tr>
            <th style="width:20%;">물질명</th>
            <th style="width:14%;">화학식</th>
            <th style="width:14%;">전자 수 (N)</th>
            <th style="width:26%;">계산해야 할 상태 수 (2ᴺ)</th>
            <th style="width:26%;">비교해 보기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>수소 분자</td>
            <td>H₂</td>
            <td>2개</td>
            <td>2² = <input type="text" class="ws-mini-input" style="width:50px; text-align:center;" data-answer="4"> 가지</td>
            <td>순식간에 계산</td>
          </tr>
          <tr>
            <td>물 분자</td>
            <td>H₂O</td>
            <td>10개</td>
            <td>2¹⁰ = <input type="text" class="ws-mini-input" style="width:65px; text-align:center;" data-answer="1024"> 가지</td>
            <td>순식간에 계산</td>
          </tr>
          <tr>
            <td>카페인 분자</td>
            <td>C₈H₁₀N₄O₂</td>
            <td>102개</td>
            <td>2¹⁰² ≈ 5×10³⁰ 가지</td>
            <td><input type="text" class="ws-table-input" data-answer="지구의 모래알 수(약 7.5×10¹⁸개)보다 많음"></td>
          </tr>
          <tr>
            <td>페니실린</td>
            <td>C₁₆H₁₈N₂O₄S</td>
            <td>176개</td>
            <td>2¹⁷⁶ ≈ 10⁵³ 가지</td>
            <td><input type="text" class="ws-table-input" data-answer="지구 전체 원자 수(약 10⁵⁰개)보다 많음"></td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 전자 하나가 두 가지 상태를 가진다고 단순하게 생각하면, 분자 속 전자가 1개 늘어날 때마다 계산해야 할 경우의 수는 2배씩 늘어난다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 지구의 모든 원자를 메모리로 쓰면 페니실린 분자(약 10⁵³가지)의 경우의 수를 모두 적어 둘 수 있다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 작은 약품 분자 하나의 경우의 수가 지구 전체 원자 수(약 10⁵⁰개)보다 많을 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 지구의 모든 모래알 수는 약 7.5×10¹⁸개이고 지구 전체 원자 수는 약 10⁵⁰개이다. 최고 성능의 슈퍼컴퓨터로도 작은 약품 분자 하나를 정확히 계산하기 어려운 이유를 서술하시오.</p>
      <div class="answer-box" style="padding:0.85rem 1rem; margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="분자 속 전자가 늘어날수록 계산해야 할 경우의 수가 2의 거듭제곱으로 불어나는 '지수 폭발(2ᴺ)'이 일어나기 때문입니다. 페니실린 같은 작은 분자도 경우의 수가 약 10⁵³가지로 지구 전체 원자 수(약 10⁵⁰개)보다 많아, 일반 컴퓨터로는 모두 적어 두거나 계산할 수 없습니다."></textarea>
      </div>
    `,
    teacher: `
      <h4 style="color:#7c3aed; margin:1.25rem 0 0.8rem;">1. 표 예시 답안</h4>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
        <thead>
          <tr>
            <th style="width:20%;">물질명</th>
            <th style="width:14%;">화학식</th>
            <th style="width:14%;">전자 수 (N)</th>
            <th style="width:26%;">계산해야 할 상태 수 (2ᴺ)</th>
            <th style="width:26%;">비교해 보기</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>수소 분자</strong></td><td>H₂</td><td>2개</td><td><strong class="model-answer">2² = 4 가지</strong></td><td>순식간에 계산</td></tr>
          <tr><td><strong>물 분자</strong></td><td>H₂O</td><td>10개</td><td><strong class="model-answer">2¹⁰ = 1,024 가지</strong></td><td>순식간에 계산</td></tr>
          <tr><td><strong>카페인 분자</strong></td><td>C₈H₁₀N₄O₂</td><td>102개</td><td><strong class="model-answer">2¹⁰² ≈ 5×10³⁰ 가지</strong></td><td><strong class="model-answer">지구의 모래알 수(약 7.5×10¹⁸개)보다 많음</strong></td></tr>
          <tr><td><strong>페니실린</strong></td><td>C₁₆H₁₈N₂O₄S</td><td>176개</td><td><strong class="model-answer">2¹⁷⁶ ≈ 10⁵³ 가지</strong></td><td><strong class="model-answer">지구 전체 원자 수(약 10⁵⁰개)보다 많음</strong></td></tr>
        </tbody>
      </table>

      <h4 style="color:#7c3aed; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 전자 하나에 두 가지 경우가 있으면 전자가 1개 늘 때마다 경우의 수가 2배가 됩니다. (실제 계산을 아주 단순하게 줄인 모형입니다.)<br>
        (2) <strong>X</strong> : 페니실린의 경우의 수(약 10⁵³가지)가 지구 전체 원자 수(약 10⁵⁰개)보다 많아, 원자 하나에 하나씩 적어도 모자랍니다.<br>
        (3) <strong>O</strong> : 전자가 176개인 페니실린만 해도 경우의 수가 약 10⁵³가지로 지구 전체 원자 수보다 많습니다.
      </div>

      <h4 style="color:#7c3aed; margin:2.25rem 0 0.8rem;">3. 서술형 문항 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; margin-bottom:2rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        분자 속 전자가 늘어날수록 계산해야 할 경우의 수가 2의 거듭제곱으로 불어나는 '지수 폭발(2ᴺ)'이 일어나기 때문입니다. 페니실린 같은 작은 분자도 경우의 수가 약 10⁵³가지로 지구 전체 원자 수(약 10⁵⁰개)보다 많아, 일반 컴퓨터로는 모두 적어 두거나 계산할 수 없습니다.
      </div>
    `
  },
  2: {
    title: '[2차시] 고전 비트와 양자 큐비트의 비교',
    badge: '양자컴퓨터 모듈 2차시 | 성취기준 [9정01-03] [9정02-02] [9과01-02]',
    student: `
      <div class="ws-student-meta">
        <span>제 3 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 회전하는 동전 실험을 바탕으로 고전 비트와 양자 큐비트의 차이를 비교하여 표의 빈칸을 채우시오.</p>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
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
            <td>바닥에 멈춰 누워 있는 동전</td>
            <td>책상 위에서 팽이처럼 빠르게 도는 동전</td>
          </tr>
          <tr>
            <td><strong>정보의 표현</strong></td>
            <td><input type="text" class="ws-table-input" data-answer="0 또는 1 중 단 1개만"></td>
            <td><input type="text" class="ws-table-input" data-answer="0과 1이 섞인 중첩 (측정하면 하나로 정해짐)"></td>
          </tr>
          <tr>
            <td><strong>10개 사용 시 길 탐색</strong></td>
            <td><input type="text" class="ws-table-input" data-answer="1,024개 길을 하나씩 확인"></td>
            <td><input type="text" class="ws-table-input" data-answer="정답 길이 나올 확률을 키워 약 25번 만에 찾음"></td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 큐비트는 측정하기 전에는 0과 1이 섞인 중첩 상태이고, 측정하면 0 또는 1 하나로 정해진다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 일반 컴퓨터는 미로의 갈래 길을 하나씩 확인해야 한다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 양자 컴퓨터는 1,024개 길을 모두 동시에 가 본 뒤, 측정 한 번으로 모든 길의 결과를 한꺼번에 알 수 있다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 미로 찾기 비유를 바탕으로 일반 컴퓨터와 양자 컴퓨터의 정보 처리 방식 차이를 서술하시오.</p>
      <div class="answer-box" style="padding:0.85rem 1rem; margin-bottom:2rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="일반 컴퓨터는 길을 하나씩 확인하므로 운이 나쁘면 1,024번을 가 봐야 합니다. 양자 컴퓨터는 중첩으로 1,024개 길을 한꺼번에 담은 뒤, 틀린 길이 나올 확률은 줄이고 맞는 길이 나올 확률은 키우는 과정을 약 25번 반복해 정답 길을 찾습니다. 측정하면 답은 하나만 나오므로 모든 길의 결과를 한 번에 꺼내는 것은 아닙니다."></textarea>
      </div>
    `,
    teacher: `
      <h4 style="color:#2563eb; margin:1.25rem 0 0.8rem;">1. 표 예시 답안</h4>
      <table class="data-table text-center" style="margin-bottom:2.25rem;">
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
            <td>0 또는 1 중 (<strong class="model-answer">&nbsp;단 1개만&nbsp;</strong>)</td>
            <td>0과 1이 (<strong class="model-answer">&nbsp;섞인 중첩, 측정하면 하나로 정해짐&nbsp;</strong>)</td>
          </tr>
          <tr>
            <td><strong>10개 사용 시 길 탐색</strong></td>
            <td>1,024개 길을 (<strong class="model-answer">&nbsp;하나씩 확인&nbsp;</strong>)</td>
            <td>1,024개 길 중 (<strong class="model-answer">&nbsp;정답 길이 나올 확률을 키워 약 25번 만에 찾음&nbsp;</strong>)</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color:#2563eb; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 큐비트는 측정 전에는 0과 1이 일정한 비율로 섞인 중첩 상태이고, 측정하면 그 비율(확률)에 따라 0 또는 1 하나로 정해집니다. 도는 동전은 이를 이해하기 위한 비유입니다.<br>
        (2) <strong>O</strong> : 일반 컴퓨터는 한 번에 한 길씩 확인하므로 갈래가 많아질수록 오래 걸립니다.<br>
        (3) <strong>X</strong> : 측정하면 결과는 하나만 나옵니다. 양자 컴퓨터는 정답이 나올 확률을 키우는 과정을 반복해 답을 찾으며(1,024개 길이면 약 25번), 모든 결과를 한 번에 꺼내는 것은 오해입니다.
      </div>

      <h4 style="color:#2563eb; margin:2.25rem 0 0.8rem;">3. 서술형 문항 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; margin-bottom:2rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        일반 컴퓨터는 길을 하나씩 확인하므로 운이 나쁘면 1,024번을 가 봐야 합니다. 양자 컴퓨터는 중첩으로 1,024개 길을 한꺼번에 담은 뒤, 틀린 길이 나올 확률은 줄이고 맞는 길이 나올 확률은 키우는 과정을 약 25번 반복해 정답 길을 찾습니다. 측정하면 답은 하나만 나오므로 모든 길의 결과를 한 번에 꺼내는 것은 아닙니다.
      </div>
    `
  },
  3: {
    title: '[3차시] 두 컴퓨터의 2인 3각 계산',
    badge: '양자컴퓨터 모듈 3차시 | 성취기준 [9과16-01] [9과16-06] [9정02-02]',
    student: `
      <div class="ws-student-meta">
        <span>제 3 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 다음 빈칸에 알맞은 말을 쓰시오.</p>
      <div class="answer-box" style="padding:0.85rem 1rem; line-height:1.8; margin-bottom:2.25rem;">
        분자는 에너지가 가장 ( <input type="text" class="ws-mini-input" style="width:70px; text-align:center;" data-answer="낮은"> ) 상태인 ( <input type="text" class="ws-mini-input" style="width:130px; text-align:center;" data-answer="바닥 상태"> )에서 가장 안정하게 결합합니다.
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 양자 컴퓨터와 일반 컴퓨터의 2인 3각 계산 순서도의 빈칸을 채우시오.</p>
      <div class="answer-box" style="line-height:2.2; padding:0.85rem 1rem; margin-bottom:2.25rem;">
        <div>[ 1단계: <strong>양자 컴퓨터의 임무</strong> ] 큐비트로 분자의 현재 ( <input type="text" class="ws-mini-input" style="width:110px; text-align:center;" data-answer="에너지 값"> ) 계산하기</div>
        <div style="color:#64748b; font-size:0.88rem; padding-left:1.5rem;">⬇ 계산된 수치 전달</div>
        <div>[ 2단계: <strong>일반 컴퓨터의 임무</strong> ] 골짜기 바닥으로 내려가도록 원자 사이 거리를 ( <input type="text" class="ws-mini-input" style="width:130px; text-align:center;" data-answer="조금씩 조정"> )하기</div>
        <div style="color:#64748b; font-size:0.88rem; padding-left:1.5rem;">⬇ 반복 피드백 루프</div>
        <div>[ 3단계: <strong>최종 목표 달성</strong> ] 골짜기 바닥(바닥 상태) 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>분자 구조</strong> 확인!</div>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">3. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 양자 컴퓨터 혼자서 모든 계산과 장비 제어를 100% 독립적으로 처리하는 것이 가장 효율적이다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 양자 컴퓨터(에너지 계산)와 일반 컴퓨터(다음 걸음 결정)가 서로 값을 주고받으며 함께 바닥 상태를 찾는다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 공이 골짜기 바닥으로 굴러 떨어지듯 최저 바닥 상태를 찾아갈 때 분자는 가장 단단하고 안정하게 결합한다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

    `,
    teacher: `
      <h4 style="color:#059669; margin:1.25rem 0 0.8rem;">1. 문항 예시 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; margin-bottom:2.25rem;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> 분자는 에너지가 가장 (<strong class="model-answer">&nbsp;낮은&nbsp;</strong>) 상태인 (<strong class="model-answer">&nbsp;바닥 상태&nbsp;</strong>)에서 가장 안정하게 결합합니다.
      </div>

      <h4 style="color:#059669; margin:2.25rem 0 0.8rem;">2. 순서도 예시 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; line-height:2; margin-bottom:2.25rem;">
        [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트로 분자의 현재 ( <strong class="model-answer">에너지 값</strong> ) 계산<br>
        ⬇ 값 전달<br>
        [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 원자 사이 거리를 ( <strong class="model-answer">조금씩 조정</strong> )<br>
        ⬇ 반복<br>
        [ 3단계: <strong>목표 달성</strong> ] 골짜기 바닥(수소 분자: -1.137) 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>분자 구조</strong> 확인!
      </div>

      <h4 style="color:#059669; margin:2.25rem 0 0.8rem;">3. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2rem;">
        (1) <strong>X</strong> : 지금의 양자 컴퓨터는 아직 작고 오류가 많아, 일반 컴퓨터와 함께 일하는 2인 3각 계산이 쓰입니다.<br>
        (2) <strong>O</strong> : 양자 컴퓨터는 계산하기 어려운 분자의 에너지를 맡고, 다음 걸음을 정하는 일은 일반 컴퓨터가 맡습니다.<br>
        (3) <strong>O</strong> : 분자는 에너지가 가장 낮을 때 가장 안정하므로 골짜기 바닥(바닥 상태)을 찾는 것이 목표입니다.
      </div>
    `
  },
  4: {
    title: '[4차시] 양자 화학 시뮬레이션 기반 분자 설계 기획서',
    badge: '양자컴퓨터 모듈 4차시 | 성취기준 [9과01-02] [9과16-01] [9과23-01]',
    student: `
      <div class="ws-student-meta">
        <span>제 3 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
      </div>

      <p style="font-size:0.95rem; color:#1e293b; margin:1.25rem 0 0.8rem; font-weight:700;">1. 컴퓨터를 이용한 양자 화학 시뮬레이션 기반 분자 설계 기획서를 작성하시오.</p>

      <table class="data-table" style="margin-bottom:2.25rem;">
        <tr>
          <th style="width:22%;">프로젝트 과제명</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="퀀텀 카탈리스트 (Quantum Catalyst)"></td>
          <th style="width:22%;">작성자(연구원)</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="이양자 외 3명"></td>
        </tr>
        <tr>
          <th>해결할 과제 및 선정 이유</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="2" data-answer="친환경 상온 비료 촉매 개발: 400~500℃의 고온과 200기압 안팎의 고압을 쓰는 지금의 비료 생산 방식이 세계 에너지의 약 1~2%를 쓰고 이산화 탄소를 많이 내보내기 때문."></textarea>
          </td>
        </tr>
        <tr>
          <th>양자 컴퓨터 기반<br>분자 설계 아이디어</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="3" data-answer="콩과 식물 뿌리의 세균이 상온에서 질소의 세 겹 결합(N≡N)을 끊는 비밀을 양자 컴퓨터로 계산하여, 상온에서도 질소를 비료 원료로 바꾸는 촉매 분자를 설계함."></textarea>
          </td>
        </tr>
        <tr>
          <th>기대 효과</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="2" data-answer="비료 공장의 에너지 사용과 온실가스 배출을 줄이고, 값싸고 안전한 비료 공급으로 식량 문제 해결에 기여."></textarea>
          </td>
        </tr>
      </table>

      <p style="font-size:0.95rem; color:#1e293b; margin:2.25rem 0 0.8rem; font-weight:700;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:2rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 위험한 화학 시약과 비커 없이도 컴퓨터 속 가상 실험으로 여러 분자 후보를 미리 시험해 볼 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 지금의 비료 생산 방식은 높은 온도와 압력을 쓰지 않으므로 에너지를 거의 쓰지 않는다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 양자 컴퓨터는 이미 완성된 기술이어서 지금 바로 모든 신약을 컴퓨터로만 개발할 수 있다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>
    `,
    teacher: `
      <h4 style="color:#d97706; margin:1.25rem 0 0.8rem;">1. 분자 설계 기획서 예시 답안</h4>
      <table class="data-table" style="margin-bottom:2.25rem;">
        <tr>
          <th style="width:22%;">프로젝트 과제명</th>
          <td style="width:28%;"><strong class="model-answer">퀀텀 카탈리스트 (Quantum Catalyst)</strong></td>
          <th style="width:22%;">작성자(연구원)</th>
          <td style="width:28%;"><strong class="model-answer">이양자 외 3명</strong></td>
        </tr>
        <tr>
          <th>해결할 과제 및 선정 이유</th>
          <td colspan="3"><strong class="model-answer">[친환경 상온 비료 촉매]: 400~500℃, 200기압 안팎을 쓰는 지금의 비료 생산 방식(세계 에너지의 약 1~2% 사용)을 상온 방식으로 바꾸기 위함</strong></td>
        </tr>
        <tr>
          <th>양자 컴퓨터 기반<br>분자 설계 아이디어</th>
          <td colspan="3"><strong class="model-answer">콩과 식물 뿌리의 세균이 상온에서 질소의 세 겹 결합(N≡N)을 끊는 비밀을 양자 컴퓨터로 계산하여, 상온에서도 작동하는 촉매 분자를 설계.</strong></td>
        </tr>
        <tr>
          <th>기대 효과</th>
          <td colspan="3"><strong class="model-answer">비료 공장의 에너지 사용과 온실가스 배출 감소, 값싸고 안전한 비료 공급으로 식량 문제 해결에 기여.</strong></td>
        </tr>
      </table>

      <h4 style="color:#d97706; margin:2.25rem 0 0.8rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75; margin-bottom:2.25rem;">
        (1) <strong>O</strong> : 컴퓨터 속 가상 실험으로 실험실 폐기물 없이 여러 분자 후보를 미리 걸러 낼 수 있습니다.<br>
        (2) <strong>X</strong> : 지금의 비료 생산은 높은 온도와 압력이 필요해 세계 에너지의 약 1~2%를 쓰고 이산화 탄소를 많이 내보냅니다.<br>
        (3) <strong>X</strong> : 양자 컴퓨터는 아직 발전 중인 기술입니다. 앞으로 분자 계산이 정확해지면 개발 기간과 비용을 줄이는 데 도움을 줄 것으로 기대됩니다.
      </div>

      <h4 style="color:#d97706; margin:2.25rem 0 0.8rem;">3. 평가 기준표</h4>
      <table class="data-table" style="font-size:0.88rem; margin-bottom:2rem;">
        <thead>
          <tr><th style="width:20%;">평가 영역</th><th style="width:26%;">탁월 (A)</th><th style="width:27%;">보통 (B)</th><th style="width:27%;">노력요함 (C)</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>과학적 타당성</strong></td>
            <td>분자 결합 및 양자 컴퓨터 시뮬레이션 원리를 논리적으로 접목함</td>
            <td>해결할 과제는 이해했으나 분자 시뮬레이션 설명이 다소 추상적임</td>
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
};

