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
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 분자 속 전자 수에 따른 상태 조합의 수(2ᴺ)와 슈퍼컴퓨터 계산 시간을 정리하시오.</p>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
        <thead>
          <tr>
            <th style="width:20%;">물질명</th>
            <th style="width:14%;">화학식</th>
            <th style="width:14%;">전자 수 (N)</th>
            <th style="width:26%;">계산해야 할 상태 수 (2ᴺ)</th>
            <th style="width:26%;">일반 슈퍼컴퓨터 소요 시간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>수소 원자</td>
            <td>H</td>
            <td>1개</td>
            <td>2¹ = <input type="text" class="ws-mini-input" style="width:50px; text-align:center;" data-answer="2"> 가지</td>
            <td>0.000001초 (즉시)</td>
          </tr>
          <tr>
            <td>물 분자</td>
            <td>H₂O</td>
            <td>10개</td>
            <td>2¹⁰ = <input type="text" class="ws-mini-input" style="width:65px; text-align:center;" data-answer="1024"> 가지</td>
            <td>약 0.001초 (즉시)</td>
          </tr>
          <tr>
            <td>카페인 분자</td>
            <td>C₈H₁₀N₄O₂</td>
            <td>102개</td>
            <td>2¹⁰² ≈ 10³⁰ 가지</td>
            <td><input type="text" class="ws-table-input" data-answer="수백 년 이상 (모래알 수 초과)"></td>
          </tr>
          <tr>
            <td>페니실린</td>
            <td>C₁₆H₁₈N₂O₄S</td>
            <td>약 280개</td>
            <td>2²⁸⁰ ≈ 10⁸⁴ 가지</td>
            <td><input type="text" class="ws-table-input" data-answer="우주 나이(138억 년) 동안 계산 불가"></td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:1rem 0 0.5rem; font-weight:600;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:1.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 분자 속 전자가 1개 늘어날 때마다 계산해야 할 양자 상태의 수는 2배씩 곱해지는 '지수 폭발(2ᴺ)'이 일어난다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 최신 슈퍼컴퓨터를 사용하면 페니실린 분자(10⁸⁴가지)의 상태를 우주 나이(138억 년) 안에 전부 계산할 수 있다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 작은 약품 분자 하나 속 전자들의 상태 조합 수가 전 우주의 모든 원자 수(약 10⁸⁰개)보다 훨씬 많을 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">3. 지구상의 모든 모래알 수는 약 10²³개이고 우주 전체 원자 수는 약 10⁸⁰개이다. 현존하는 최고 성능의 슈퍼컴퓨터로도 작은 약품 분자 하나를 계산하지 못하는 이유를 서술하시오.</p>
      <div class="answer-box" style="padding:0.75rem 0.85rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="분자 속 전자가 증가함에 따라 양자 상태가 2의 거듭제곱으로 곱해지는 '지수 폭발(2ᴺ)'이 발생하기 때문입니다. 페니실린 같은 작은 분자도 계산해야 할 경우의 수가 10⁸⁴가지로 전 우주의 원자 수(10⁸⁰)를 훌쩍 뛰어넘어, 일반 컴퓨터 방식으로는 우주 나이 동안 계산해도 불가능합니다."></textarea>
      </div>

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#7c3aed; margin-top:1.2rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 체스판 쌀알 퀴즈(1칸 1톨, 2칸 2톨... 64번째 칸엔 1800경 톨)를 도입에 제시하여 거듭제곱의 무서운 증가 속도를 직관적으로 체감하게 하세요.
      </div>
    `,
    teacher: `
      <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">1. 표 예시 답안</h4>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
        <thead>
          <tr>
            <th style="width:20%;">물질명</th>
            <th style="width:14%;">화학식</th>
            <th style="width:14%;">전자 수 (N)</th>
            <th style="width:26%;">계산해야 할 상태 수 (2ᴺ)</th>
            <th style="width:26%;">일반 슈퍼컴퓨터 소요 시간</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>수소 원자</strong></td><td>H</td><td>1개</td><td><strong class="model-answer">2¹ = 2 가지</strong></td><td>0.000001초 (즉시 계산)</td></tr>
          <tr><td><strong>물 분자</strong></td><td>H₂O</td><td>10개</td><td><strong class="model-answer">2¹⁰ = 1,024 가지</strong></td><td>약 0.001초 (즉시 계산)</td></tr>
          <tr><td><strong>카페인 분자</strong></td><td>C₈H₁₀N₄O₂</td><td>102개</td><td><strong class="model-answer">2¹⁰² ≈ 10³⁰ 가지</strong></td><td><strong class="model-answer">수백 년 이상 (모래알 수 10²³개 초과)</strong></td></tr>
          <tr><td><strong>페니실린</strong></td><td>C₁₆H₁₈N₂O₄S</td><td>약 280개</td><td><strong class="model-answer">2²⁸⁰ ≈ 10⁸⁴ 가지</strong></td><td><strong class="model-answer">우주 나이(138억 년) 동안 계산 불가 (원자 수 10⁸⁰개 초과)</strong></td></tr>
        </tbody>
      </table>

      <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75;">
        (1) <strong>O</strong> : 양자역학에 의해 전자들이 취할 수 있는 스핀 조합은 전자가 1개 추가될 때마다 2배씩 기하급수적으로 폭발합니다.<br>
        (2) <strong>X</strong> : 계산 상태 수(10⁸⁴가지)가 관측 가능한 우주 전체 원자 수(10⁸⁰개)보다 훨씬 많아 슈퍼컴퓨터로 영원히 계산할 수 없습니다.<br>
        (3) <strong>O</strong> : 미시 세계의 전자 스핀 조합은 거시 세계 우주 원자 총수보다 훨씬 커지는 역설적 규모를 갖습니다.
      </div>

      <h4 style="color:#7c3aed; margin:0.8rem 0 0.4rem;">3. 서술형 문항 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        분자 속 전자가 증가함에 따라 양자 상태가 2의 거듭제곱으로 곱해지는 '지수 폭발(2ᴺ)'이 발생하기 때문입니다. 페니실린 같은 작은 분자도 계산해야 할 경우의 수가 10⁸⁴가지로 전 우주의 원자 수(10⁸⁰)를 훌쩍 뛰어넘어, 일반 컴퓨터 방식으로는 우주 나이 동안 계산해도 불가능합니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#7c3aed; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 체스판 쌀알 퀴즈(1칸 1톨, 2칸 2톨... 64번째 칸엔 1800경 톨)를 도입에 제시하여 거듭제곱의 무서운 증가 속도를 직관적으로 체감하게 하세요.
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
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 회전하는 동전 실험을 바탕으로 고전 비트와 양자 큐비트의 차이를 비교하여 표의 빈칸을 채우시오.</p>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
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
            <td><input type="text" class="ws-table-input" data-answer="0과 1 둘 다 동시 공존(중첩)"></td>
          </tr>
          <tr>
            <td><strong>10개 사용 시 길 탐색</strong></td>
            <td><input type="text" class="ws-table-input" data-answer="1,024개 길 중 1개씩 순서대로"></td>
            <td><input type="text" class="ws-table-input" data-answer="1,024개 길 동시 탐색(초병렬)"></td>
          </tr>
        </tbody>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:1rem 0 0.5rem; font-weight:600;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:1.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 책상 위에서 빠르게 회전하는 동전은 손으로 멈춰 확인하기 전까지 앞면과 뒷면이 동시에 공존하는 상태다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 일반 컴퓨터는 미로의 모든 갈래 길에 분신들을 동시에 한꺼번에 들여보내서 출구를 찾는다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 10개의 큐비트가 중첩되면 2¹⁰ = 1,024가지의 모든 경로를 단 한 번에 동시에 병렬 처리할 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">3. 미로 찾기 비유를 바탕으로 일반 컴퓨터와 양자 컴퓨터의 정보 처리 방식 차이를 서술하시오.</p>
      <div class="answer-box" style="padding:0.75rem 0.85rem;">
        <div style="display:flex; align-items:center; gap:0.25rem; margin-bottom:0.45rem; font-weight:600; color:#1e293b;">
          <i data-lucide="corner-down-right"></i> <span>서술:</span>
        </div>
        <textarea class="ws-textarea-input" rows="3" data-answer="일반 컴퓨터는 한 갈래 길씩 가보고 막히면 되돌아 나오는 '순차 탐색' 방식을 씁니다. 반면 양자 컴퓨터는 큐비트의 '중첩' 성질을 활용하여 1,024명의 분신이 모든 갈래 길을 단 한 번에 '동시에 쏟아져 들어가는 초병렬 처리'를 수행하므로 압도적으로 빠릅니다."></textarea>
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생들이 동전을 돌릴 때 떨어지지 않도록 트레이를 사용하고, "도는 동안 앞면인가요 뒷면인가요?"라는 발문으로 측정 전 공존 상태(중첩)를 온몸으로 느끼게 합니다.
      </div>
    `,
    teacher: `
      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">1. 표 예시 답안</h4>
      <table class="data-table text-center" style="margin-bottom:1.25rem;">
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
            <td>0과 1 (<strong class="model-answer">&nbsp;둘 다 동시 공존(중첩)&nbsp;</strong>)</td>
          </tr>
          <tr>
            <td><strong>10개 사용 시 길 탐색</strong></td>
            <td>1,024개 길 중 (<strong class="model-answer">&nbsp;1개씩 순서대로&nbsp;</strong>)</td>
            <td>1,024개 길 (<strong class="model-answer">&nbsp;1,024개 길 동시 탐색(초병렬)&nbsp;</strong>)</td>
          </tr>
        </tbody>
      </table>

      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75;">
        (1) <strong>O</strong> : 회전하는 동안 동전은 앞면(1)과 뒷면(0)이 확률적으로 뒤섞여 공존하는 상태(중첩)입니다.<br>
        (2) <strong>X</strong> : 일반 컴퓨터는 한 번에 하나의 길만 시도하는 직렬 순차 탐색을 하므로 갈래가 많아지면 극도로 느려집니다.<br>
        (3) <strong>O</strong> : 큐비트의 중첩과 얽힘 덕분에 2ᴺ개의 모든 상태를 단 1회의 연산 단계에서 동시에 검사할 수 있습니다.
      </div>

      <h4 style="color:#2563eb; margin:0.8rem 0 0.4rem;">3. 서술형 문항 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        일반 컴퓨터는 한 갈래 길씩 가보고 막히면 되돌아 나오는 '순차 탐색' 방식을 씁니다. 반면 양자 컴퓨터는 큐비트의 '중첩' 성질을 활용하여 1,024명의 분신이 모든 갈래 길을 단 한 번에 '동시에 쏟아져 들어가는 초병렬 처리'를 수행하므로 압도적으로 빠릅니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생들이 동전을 돌릴 때 떨어지지 않도록 트레이를 사용하고, "도는 동안 앞면인가요 뒷면인가요?"라는 발문으로 측정 전 공존 상태(중첩)를 온몸으로 느끼게 합니다.
      </div>
    `
  },
  3: {
    title: '[3차시] 양자-고전 하이브리드 VQE 알고리즘',
    badge: '양자컴퓨터 모듈 3차시 | 성취기준 [9과16-01] [9과16-06] [9정02-02]',
    student: `
      <div class="ws-student-meta">
        <span>제 3 학년 <input type="text" class="ws-mini-input" style="width:36px;"> 반</span>
        <span><input type="text" class="ws-mini-input" style="width:36px;"> 번</span>
        <span>이름: <input type="text" class="ws-mini-input" style="width:84px;"></span>
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 다음 빈칸에 알맞은 말을 쓰시오.</p>
      <div class="answer-box" style="padding:0.75rem 0.85rem; line-height:1.8;">
        자연계의 모든 화학 분자는 에너지가 가장 ( <input type="text" class="ws-mini-input" style="width:70px; text-align:center;" data-answer="낮은"> ) 상태인 최저 ( <input type="text" class="ws-mini-input" style="width:130px; text-align:center;" data-answer="바닥 상태"> )를 찾아 결합합니다.
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:1rem 0 0.5rem; font-weight:600;">2. 양자 컴퓨터와 일반 컴퓨터의 협동 알고리즘(VQE) 순서도의 빈칸을 채우시오.</p>
      <div class="answer-box" style="line-height:2.2; padding:0.85rem 1rem;">
        <div>[ 1단계: <strong>양자 컴퓨터의 임무</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( <input type="text" class="ws-mini-input" style="width:110px; text-align:center;" data-answer="에너지 값"> ) 계산하기</div>
        <div style="color:#64748b; font-size:0.88rem; padding-left:1.5rem;">⬇ 계산된 수치 전달</div>
        <div>[ 2단계: <strong>일반 컴퓨터의 임무</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( <input type="text" class="ws-mini-input" style="width:130px; text-align:center;" data-answer="미세 조정"> )하기</div>
        <div style="color:#64748b; font-size:0.88rem; padding-left:1.5rem;">⬇ 반복 피드백 루프</div>
        <div>[ 3단계: <strong>최종 목표 달성</strong> ] 골짜기 최저 바닥 상태 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>신물질 분자 구조</strong> 완성!</div>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:1rem 0 0.5rem; font-weight:600;">3. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:1.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 양자 컴퓨터 혼자서 모든 계산과 장비 제어를 100% 독립적으로 처리하는 것이 가장 효율적이다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 양자 컴퓨터(에너지 계산)와 일반 컴퓨터(파라미터 조정)가 서로 데이터를 주고받는 협력 알고리즘을 VQE라 부른다.</span>
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

      <div class="ws-teacher-tip callout-box" style="display:none; background:#f8fafc; border-left-color:#059669; margin-top:1.2rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생 A는 양자 계산기 역할(에너지 계산), 학생 B는 네비게이션 역할(파라미터 조정)을 맡겨 공이 골짜기 바닥으로 굴러 떨어지는 최적화 루프를 온몸으로 체험하게 합니다.
      </div>
    `,
    teacher: `
      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">1. 문항 예시 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> 자연계의 모든 화학 분자는 에너지가 가장 (<strong class="model-answer">&nbsp;낮은&nbsp;</strong>) 최저 (<strong class="model-answer">&nbsp;바닥 상태 (Ground State)&nbsp;</strong>)를 찾아 결합합니다.
      </div>

      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">2. 순서도 예시 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; line-height:2;">
        [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( <strong class="model-answer">에너지 값</strong> ) 계산<br>
        ⬇ 수치 전달<br>
        [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( <strong class="model-answer">미세 조정(최적화)</strong> )<br>
        ⬇ 반복(피드백 루프)<br>
        [ 3단계: <strong>목표 달성</strong> ] 골짜기 최저 바닥 상태(-1.137 a.u.) 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>신물질 분자 구조</strong> 완성!
      </div>

      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">3. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75;">
        (1) <strong>X</strong> : 현재의 양자 컴퓨터(NISQ)는 노이즈가 있어 일반 컴퓨터와의 하이브리드 협동(VQE)이 실용화의 핵심입니다.<br>
        (2) <strong>O</strong> : 양자 컴퓨터는 지수 폭발이 일어나는 분자 상태 에너지만 계산하고, 경로를 찾는 네비게이션은 일반 컴퓨터가 분담합니다.<br>
        (3) <strong>O</strong> : 분자는 에너지가 가장 낮을 때 결합이 가장 안정해지므로 골짜기 최저점(바닥 상태)을 찾는 것이 분자 설계의 최종 목표입니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생 A는 양자 계산기 역할(에너지 계산), 학생 B는 네비게이션 역할(파라미터 조정)을 맡겨 공이 골짜기 바닥으로 굴러 떨어지는 최적화 루프를 온몸으로 체험하게 합니다.
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
        <span>모둠: <input type="text" class="ws-mini-input" style="width:36px;"> 모둠</span>
      </div>

      <p style="font-size:0.92rem; color:#334155; margin-bottom:0.6rem; font-weight:600;">1. 컴퓨터를 이용한 양자 화학 시뮬레이션 기반 분자 설계 기획서를 작성하시오.</p>

      <table class="data-table" style="margin-bottom:1.25rem;">
        <tr>
          <th style="width:22%;">모둠명 / 프로젝트명</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="퀀텀 카탈리스트 (Quantum Catalyst)"></td>
          <th style="width:22%;">작성자(모둠원)</th>
          <td style="width:28%;"><input type="text" class="ws-table-input" data-answer="이양자 외 3명"></td>
        </tr>
        <tr>
          <th>해결할 지구 난제 및 선정 이유</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="2" data-answer="친환경 상온 비료 촉매 개발: 400℃ 고온과 200기압을 쓰는 전통 비료 생산 공정이 전 세계 전기의 2%를 소모하고 탄소를 배출하기 때문."></textarea>
          </td>
        </tr>
        <tr>
          <th>양자 컴퓨터 기반<br>분자 설계 아이디어</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="3" data-answer="뿌리혹박테리아 질소고정효소 활성 중심인 철-몰리브덴(Fe-Mo) 금속 착물의 전자 구조를 양자 컴퓨터로 정밀 계산하여 상온에서도 질소(N₂) 결합을 쉽게 끊는 인공 촉매 분자를 설계함."></textarea>
          </td>
        </tr>
        <tr>
          <th>기대 효과</th>
          <td colspan="3">
            <textarea class="ws-textarea-input" rows="2" data-answer="전 세계 온실가스 1.5% 감축, 값싸고 안전한 친환경 비료 공급으로 식량난 해결 및 농업 탄소 중립에 기여."></textarea>
          </td>
        </tr>
      </table>

      <p style="font-size:0.92rem; color:#334155; margin:1rem 0 0.5rem; font-weight:600;">2. 다음 설명이 맞으면 O, 틀리면 X를 선택하시오.</p>
      <div class="ws-ox-quiz" style="margin-bottom:1.25rem;">
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(1) 위험한 화학 시약과 비커 없이도 양자 컴퓨터 시뮬레이션을 통해 수만 가지 가상 분자를 미리 합성해 볼 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(2) 전통적인 하버-보슈 비료 공정은 고온·고압을 쓰지 않는 친환경 기술이므로 대체할 필요가 없다.</span>
          <div class="ws-ox-group" data-answer="X">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
        <div class="ws-ox-item">
          <span class="ws-ox-statement">(3) 양자 컴퓨터를 이용하면 10년 이상 걸리던 표적 신약이나 배터리 전해질 분자 개발 기간을 수개월로 단축할 수 있다.</span>
          <div class="ws-ox-group" data-answer="O">
            <button type="button" class="ws-ox-btn" data-choice="O">O</button>
            <button type="button" class="ws-ox-btn" data-choice="X">X</button>
          </div>
        </div>
      </div>
    `,
    teacher: `
      <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">1. 분자 설계 기획서 예시 답안</h4>
      <table class="data-table" style="margin-bottom:1.25rem;">
        <tr>
          <th style="width:22%;">모둠명 / 프로젝트명</th>
          <td style="width:28%;"><strong class="model-answer">퀀텀 카탈리스트 (Quantum Catalyst)</strong></td>
          <th style="width:22%;">작성자(모둠원)</th>
          <td style="width:28%;"><strong class="model-answer">이양자 외 3명</strong></td>
        </tr>
        <tr>
          <th>해결할 지구 난제 및 선정 이유</th>
          <td colspan="3"><strong class="model-answer">[친환경 상온 비료 촉매]: 400℃ 고온과 200기압을 쓰는 하버-보슈 공정을 대체하여 전 세계 전력의 2% 소비 절감</strong></td>
        </tr>
        <tr>
          <th>양자 컴퓨터 기반<br>분자 설계 아이디어</th>
          <td colspan="3"><strong class="model-answer">뿌리혹박테리아 질소고정효소 활성 중심인 철-몰리브덴(Fe-Mo) 클러스터의 전자 구조를 양자 시뮬레이션하여 상온에서도 질소(N₂) 삼중 결합을 끊는 인공 촉매 분자 설계.</strong></td>
        </tr>
        <tr>
          <th>기대 효과</th>
          <td colspan="3"><strong class="model-answer">전 세계 온실가스 1.5% 감축, 저개발국에 값싸고 안전한 친환경 비료 공급으로 농업 탄소 중립 및 인류 기아 문제 해결.</strong></td>
        </tr>
      </table>

      <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">2. O / X 퀴즈 정답 및 해설</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; font-size:0.9rem; line-height:1.75;">
        (1) <strong>O</strong> : 비커 없는 '인실리코(In-silico)' 양자 화학 시뮬레이션으로 실험실 폐기물 없이 신물질을 스크리닝할 수 있습니다.<br>
        (2) <strong>X</strong> : 하버-보슈 공정은 엄청난 화석연료와 전력을 소모하여 전 세계 온실가스의 주요 배출원으로 꼽혀 상온 대체 기술이 시급합니다.<br>
        (3) <strong>O</strong> : 분자 후보 물질 수백만 개 중 가장 결합 에너지가 낮은 최적 구조를 양자 컴퓨터로 즉시 선별하여 R&D 기간을 획기적으로 줄입니다.
      </div>

      <h4 style="color:#d97706; margin:0.8rem 0 0.4rem;">3. 3차원 평가 루브릭</h4>
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
};

