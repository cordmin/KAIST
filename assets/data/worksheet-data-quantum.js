/**
 * KAIST 첨단과학 탐구 - 양자컴퓨터 모듈 1~4차시 활동지 및 모범답안 데이터
 * (Single Source of Truth: 디지털 입력칸 data-answer 및 교사용 팁 포함)
 */
window.worksheetModalData = window.worksheetModalData || {};

window.worksheetModalData.quantum = {
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
        <i data-lucide="corner-down-right"></i> 서술 내용: 
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
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        분자 속 전자가 1개 늘어날 때마다 계산해야 하는 양자역학적 상태의 수가 2배씩 곱해지는 <strong>'지수 폭발(2ᴺ)'</strong>이 발생하기 때문입니다. 전자가 100개만 넘어가도 조합의 수가 전 우주의 모든 원자 수(10⁸⁰)를 아득히 뛰어넘어, 현존하는 가장 강력한 슈퍼컴퓨터로도 계산이 물리적으로 불가능합니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#7c3aed; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 체스판 쌀알 퀴즈(1칸 1톨, 2칸 2톨... 64번째 칸엔 1800경 톨)를 도입에 제시하여 거듭제곱의 무서운 증가 속도를 직관적으로 체감하게 하세요.
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
        <i data-lucide="corner-down-right"></i> 서술 내용: 
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
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> <strong>모범 답안:</strong> 
        일반 컴퓨터는 한 갈래 길씩 가보고 막히면 되돌아 나오는 <strong>'순차 탐색'</strong> 방식입니다. 반면 양자 컴퓨터는 중첩의 성질을 이용하여 <strong>1,024명의 분신이 모든 갈래 길을 '동시에 단 한 번에' 쏟아져 들어가서</strong> 최단 경로를 즉각 찾아내는 <strong>'동시 병렬 처리'</strong> 방식이기 때문입니다.
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#2563eb; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생들이 동전을 돌릴 때 떨어지지 않도록 트레이를 사용하고, "도는 동안 앞면인가요 뒷면인가요?"라는 발문으로 측정 전 공존 상태(중첩)를 온몸으로 느끼게 합니다.
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
        <i data-lucide="corner-down-right"></i> 자연계의 모든 화학 분자는 에너지가 가장 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 최저 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )를 찾아 결합합니다.
      </div>

      <p style="font-size:0.92rem; color:#334155; margin:0.9rem 0 0.4rem; font-weight:600;">2. 2인 1조 역할극을 바탕으로 양자 컴퓨터와 일반 컴퓨터의 VQE 협동 순서도를 완성해 보자.</p>
      <div class="answer-box" style="line-height:2;">
        [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) 계산<br>
        ⬇ 수치 전달<br>
        [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )<br>
        ⬇ 반복(피드백 루프)<br>
        [ 3단계: <strong>목표 달성</strong> ] 골짜기 최저 바닥 상태(-1.137 a.u.) 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>신물질 분자 구조</strong> 완성!
      </div>
    `,
    teacher: `
      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">1. 화학 분자의 결합 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48;">
        <span class="answer-arrow"><i data-lucide="corner-down-right"></i></span> 자연계의 모든 화학 분자는 에너지가 가장 (<strong class="model-answer">&nbsp;낮은&nbsp;</strong>) 최저 (<strong class="model-answer">&nbsp;바닥 상태 (Ground State)&nbsp;</strong>)를 찾아 결합합니다.
      </div>

      <h4 style="color:#059669; margin:0.8rem 0 0.4rem;">2. VQE 협동 순서도 모범 답안</h4>
      <div class="callout-box" style="background:#fff1f2; border-left-color:#e11d48; line-height:2;">
        [ 1단계: <strong>양자 컴퓨터</strong> ] 큐비트 중첩으로 복잡한 분자의 현재 ( <strong class="model-answer">에너지 값</strong> ) 계산<br>
        ⬇ 수치 전달<br>
        [ 2단계: <strong>일반 컴퓨터</strong> ] 골짜기 바닥으로 내려가도록 결합 각도와 거리를 ( <strong class="model-answer">미세 조정(최적화)</strong> )<br>
        ⬇ 반복(피드백 루프)<br>
        [ 3단계: <strong>목표 달성</strong> ] 골짜기 최저 바닥 상태(-1.137 a.u.) 도달! <i data-lucide="arrow-right"></i> 가장 안정한 <strong>신물질 분자 구조</strong> 완성!
      </div>

      <div class="callout-box" style="background:#f8fafc; border-left-color:#059669; margin-top:1rem; font-size:0.88rem;">
        <strong><i data-lucide="lightbulb"></i> 수업 지도 팁:</strong> 학생 A는 양자 계산기 역할(에너지 계산), 학생 B는 네비게이션 역할(파라미터 조정)을 맡겨 공이 골짜기 바닥으로 굴러 떨어지는 최적화 루프를 온몸으로 체험하게 합니다.
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
          <td colspan="3">[ 친환경 상온 비료 / 전고체 배터리 / 표적 신약 ] 중 선택:<br><i data-lucide="corner-down-right"></i> 선택 이유:</td>
        </tr>
        <tr>
          <th>양자 컴퓨터로 설계할<br>가상 분자 아이디어</th>
          <td colspan="3">
            <i data-lucide="corner-down-right"></i> 설계할 촉매, 전해질, 또는 약품 분자의 핵심 원리 서술:
          </td>
        </tr>
        <tr>
          <th>사회적 및 생태적<br>기대 효과</th>
          <td colspan="3">
            <i data-lucide="corner-down-right"></i> 탄소 중립, 식량난 해결, 질병 극복 등 인류 공헌 효과 서술:
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
};
