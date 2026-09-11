/**
 * KAIST 첨단과학 탐구 - 학생용 읽기자료 장별 독립 모달 시스템 (textbook-modal.js)
 * 각 차시별 완전히 독립된 대형 모달 창 (장 간 탭 전환 없음)
 * 군더더기 없는 컴팩트 레이아웃 및 각 장별 핵심 돋보기 용어 분산 탑재
 */

const textbookModalData = {
  oled: {
    title: '스마트폰 속 75% 배터리 도둑을 잡아라! 빛나는 분자와 OLED의 과학',
    chapters: {
      1: {
        lesson: '1차시',
        num: '1장',
        title: '1장. 어둠 속에서 빛나는 마법, 형광의 정체',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">1차시 탐구 연계 · 빛과 분자의 마법</div>
    <h2 class="magazine-hero-title">1장. 어둠 속에서 빛나는 마법, 형광의 정체</h2>
    <p class="magazine-hero-subtitle">보이지 않는 자외선을 흡수해 아름다운 가시광선으로 내뿜는 유기 분자의 비밀</p>
  </div>

  <div class="magazine-lead">
    불이 꺼진 방에서 블랙라이트(자외선 램프)를 켜면 투명한 토닉워터는 파란색, 비타민 음료는 형광 연두색으로 빛납니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        비밀은 음료 속에 녹아 있는 <strong>유기 분자</strong>입니다. 토닉워터 속에는 <strong>'퀴닌(Quinine)'</strong> 분자가, 비타민 음료 속에는 <strong>'리보플라빈(비타민 B₂)'</strong> 분자가 들어 있습니다.
      </p>
      <p class="magazine-text-p">
        이 분자들은 눈에 보이지 않는 고에너지 자외선(파장 300~400nm)을 흡수한 뒤, 사람의 눈으로 볼 수 있는 부드러운 가시광선(400~700nm)으로 바꾸어 방출합니다. 이 현상을 과학에서는 <strong>'형광(Fluorescence)'</strong>이라고 부릅니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_1.jpg" alt="토닉워터와 비타민 음료의 자외선 형광 발광 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="sparkles"></i>
          <span><strong>자외선 형광 반응:</strong> 자외선(UV)을 비추었을 때 퀴닌은 파란색, 비타민 B₂는 연두색 형광을 뿜어냅니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="microscope"></i>
      <span>💡 1장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">자외선 (UV, 파장 100~400nm)</span>
      <p class="term-desc">가시광선보다 파장이 짧아 눈에 보이지 않지만, 광자의 에너지가 강력하여 물질 속 전자를 들뜨게 만듭니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">형광 (Fluorescence)</span>
      <p class="term-desc">물질이 높은 에너지를 흡수한 뒤, 약 1억 분의 1초 만에 가시광선 빛을 내뿜고 원래대로 복귀하는 현상입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">유기 발광 분자 (퀴닌 & 리보플라빈)</span>
      <p class="term-desc">탄소 고리 구조를 통해 빛 에너지를 효율적으로 흡수하고 가시광선 형광으로 재방출하는 유기 화합물입니다.</p>
    </div>
  </div>
</div>`
      },
      2: {
        lesson: '2차시',
        num: '2장',
        title: '2장. 꼬마 전자의 트램펄린 점프와 사라진 에너지',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">2차시 탐구 연계 · 에너지 보존 법칙</div>
    <h2 class="magazine-hero-title">2장. 꼬마 전자의 트램펄린 점프와 사라진 에너지</h2>
    <p class="magazine-hero-subtitle">들뜬 상태에서 부르르 떨며 열을 흘리는 꼬마 전자의 비밀</p>
  </div>

  <div class="magazine-lead">
    원자 속 전자는 평소 에너지가 가장 낮고 안정한 1층, 즉 <strong>'바닥 상태'</strong>에 머물러 있습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        전자가 강한 자외선 광자를 흡수하면 트램펄린을 탄 것처럼 높은 층인 <strong>'들뜬 상태(Excited State)'</strong>로 뛰어오릅니다.
      </p>
      <p class="magazine-text-p">
        하지만 들뜬 상태는 매우 불안정하므로, 전자는 온몸을 부르르 떨며(분자 진동) 흡수한 에너지의 일부를 <strong>'열(Heat)'</strong>로 방출합니다.
      </p>
      <p class="magazine-text-p">
        열을 흘린 뒤 1층 바닥 상태로 내려오며 남은 에너지를 빛으로 방출하는데, 처음보다 에너지가 줄어들었기 때문에 파장이 길어진 가시광선 형광이 됩니다. 이를 <strong>'스토크스 이동(Stokes Shift)'</strong>이라 하며, <code>[흡수 자외선] = [방출 빛] + [흘린 열]</code>의 <strong>에너지 보존 법칙</strong>이 성립합니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_2.jpg" alt="분광기와 파장 분석 스펙트럼 측정 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="activity"></i>
          <span><strong>스토크스 이동:</strong> 분광기 측정 결과, 열 손실로 인해 방출 파장이 흡수 파장보다 긴 쪽으로 이동합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="zap"></i>
      <span>💡 2장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">바닥 상태 vs 들뜬 상태</span>
      <p class="term-desc">전자가 가장 낮은 에너지를 지닌 안정한 상태를 '바닥 상태', 에너지를 얻어 높은 층으로 전이한 불안정한 상태를 '들뜬 상태'라 합니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">스토크스 이동 (Stokes Shift)</span>
      <p class="term-desc">들뜬 상태에서 분자 진동열로 에너지를 잃어 방출되는 빛의 파장이 흡수한 파장보다 길어지는 현상입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">에너지 보존 법칙</span>
      <p class="term-desc">흡수된 총 자외선 에너지는 방출된 빛 에너지와 손실된 열에너지의 합과 정확히 일치합니다.</p>
    </div>
  </div>
</div>`
      },
      3: {
        lesson: '3차시',
        num: '3장',
        title: '3장. 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">3차시 탐구 연계 · 양자 스핀과 배터리</div>
    <h2 class="magazine-hero-title">3장. 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑</h2>
    <p class="magazine-hero-subtitle">빛을 내지 못하고 열만 뿜어내는 삼중항 전자의 함정</p>
  </div>

  <div class="magazine-lead">
    스마트폰 <strong>OLED 디스플레이</strong>는 자외선 조명 대신 배터리의 전기(전류)를 유기 분자에 주입하여 빛을 냅니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        전자는 팽이처럼 회전하는 <strong>'스핀(Spin)'</strong>이라는 양자역학적 성질을 가집니다. 전기로 분자를 들뜨게 하면 두 가지 스핀 조합이 만들어집니다:
      </p>
      <ul style="margin-left:1.2rem; margin-bottom:0.8rem; font-size:0.94rem; color:#334155; line-height:1.7;">
        <li><strong>단일항 (Singlet, 25%):</strong> 반대 방향 스핀(↑↓). 1억 분의 1초 만에 빛을 내뿜습니다.</li>
        <li><strong>삼중항 (Triplet, 75%):</strong> 같은 방향 스핀(↑↑). 규칙상 1층 전이가 금지되어 빛을 내지 못하고 갇힙니다.</li>
      </ul>
      <p class="magazine-text-p">
        주입된 전기의 <strong>75%가 빛 대신 열로 버려지며</strong> 스마트폰을 뜨겁게 달구는 배터리 낭비(75% 배터리 도둑)가 일어납니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_3.jpg" alt="전자 스핀 단일항 삼중항 모델과 OLED 분자 모형" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="zap-off"></i>
          <span><strong>양자 스핀 통계:</strong> 단일항은 25%만 생성되어 발광하며, 75%의 삼중항 전자는 열로 소모됩니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="help-circle"></i>
      <span>💡 3장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">OLED (유기발광다이오드)</span>
      <p class="term-desc">전류를 흘리면 스스로 빛을 발하는 얇고 유연한 차세대 유기 디스플레이 소자입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">전자 스핀 (Spin)</span>
      <p class="term-desc">전자가 자전하며 작은 자석처럼 행동하는 양자역학 고유의 각운동량 상태입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">단일항(25%) vs 삼중항(75%)</span>
      <p class="term-desc">전기 주입 시 양자 통계에 의해 단일항(발광)은 25%, 삼중항(전이 금지, 열 방출)은 75%의 비율로 발생합니다.</p>
    </div>
  </div>
</div>`
      },
      4: {
        lesson: '4차시',
        num: '4장',
        title: '4장. KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">4차시 탐구 연계 · KAIST 첨단 신소재</div>
    <h2 class="magazine-hero-title">4장. KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너</h2>
    <p class="magazine-hero-subtitle">컴퓨터 시뮬레이션으로 삼중항 비상문을 열어 100% 발광을 이뤄내다</p>
  </div>

  <div class="magazine-lead">
    <strong>KAIST 화학과 CPRL(계산 광동역학 연구실) 이영민 교수팀</strong>은 열로 버려지던 75%의 전자를 빛으로 전환하는 혁신적인 분자 설계를 실현했습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        연구팀은 갇혀 있던 삼중항 전자가 열을 잃기 전에 단일항으로 빠르게 건너갈 수 있는 초고속 구름다리 우회로인 <strong>'핫 엑시톤(Hot Exciton)'</strong> 메커니즘을 분자 내에 설계했습니다.
      </p>
      <p class="magazine-text-p">
        또한 주변의 미세한 열에너지를 흡수해 단일항으로 전이시키는 <strong>TADF(열활성 지연형광)</strong> 기술을 결합하여, 버려지던 75%의 삼중항을 모두 빛으로 바꾸며 <strong>100% 발광 효율</strong>을 달성했습니다.
      </p>
      <p class="magazine-text-p">
        이 기술은 에너지가 높아 쉽게 깨지던 <strong>청색(Blue) OLED</strong>의 수명과 전력 효율을 비약적으로 끌어올리는 세계적 핵심 원천 기술입니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_4.jpg" alt="KAIST 연구실 컴퓨터 시뮬레이션 및 분자 구조 설계 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="check-circle"></i>
          <span><strong>KAIST 첨단 분자 설계:</strong> 컴퓨터 시뮬레이션으로 분자 구조를 최적화하여 100% 발광 효율을 구현합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="award"></i>
      <span>💡 4장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">핫 엑시톤 (Hot Exciton)</span>
      <p class="term-desc">고에너지 들뜬 삼중항 상태에서 열을 잃기 전에 단일항으로 초고속 역계간교차를 통해 건너가게 만드는 기술입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">TADF (열활성 지연형광)</span>
      <p class="term-desc">단일항과 삼중항의 에너지 차이를 최소화하여, 상온의 열에너지만으로도 삼중항을 단일항으로 되돌려 빛을 내게 하는 기술입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">청색 OLED 난제</span>
      <p class="term-desc">빛의 삼원색 중 에너지가 가장 높아 분자 수명이 짧았던 청색 발광층의 내구성을 극복하는 핵심 연구 과제입니다.</p>
    </div>
  </div>
</div>`
      }
    }
  },
  quantum: {
    title: '0과 1의 한계를 넘는 분자 탐험: 양자 컴퓨터와 계산 화학의 미래',
    chapters: {
      1: {
        lesson: '1차시',
        num: '1장',
        title: '1장. 슈퍼컴퓨터도 무릎 꿇은 분자의 미시세계: 지수 폭발',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">1차시 탐구 연계 · 미시세계와 지수 폭발</div>
    <h2 class="magazine-hero-title">1장. 슈퍼컴퓨터도 무릎 꿇은 분자의 미시세계: 지수 폭발</h2>
    <p class="magazine-hero-subtitle">원자 몇 개만 늘어나도 계산량이 우주 전체 원자 수를 뛰어넘는 이유</p>
  </div>

  <div class="magazine-lead quantum">
    체스판의 쌀알처럼 칸마다 2배씩 늘어나면 64번째 칸에는 전 세계 쌀을 모두 합친 것보다 많은 양이 됩니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        화학 분자의 세계에서도 전자가 1개 늘어날 때마다 계산해야 하는 양자 상태 수가 2배씩 급증합니다. 이를 <strong>'지수 폭발(Exponential Explosion, 2ᴺ)'</strong>이라 부릅니다.
      </p>
      <p class="magazine-text-p">
        커피 한 잔 속 카페인 분자(전자 102개)의 계산 조합은 약 <strong>10³⁰가지</strong>로 지구상의 모든 모래알 수(10²³)를 능가하며, 페니실린 분자는 <strong>10⁸⁴가지</strong>로 전 우주의 원자 수(10⁸⁰개)를 초과합니다.
      </p>
      <p class="magazine-text-p">
        이 때문에 기존 슈퍼컴퓨터로는 분자의 화학 반응을 계산하는 데 우주의 나이만큼의 시간이 걸려 한계에 부딪혔습니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_1.jpg" alt="분자 구조와 전자 구름 상호작용 시뮬레이션" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="cpu"></i>
          <span><strong>지수 폭발의 난제:</strong> 전자들의 다체 상호작용은 입자 수가 늘어날 때마다 조합이 폭발적으로 증가합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="activity"></i>
      <span>💡 1장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">지수 폭발 (Exponential Explosion, 2ᴺ)</span>
      <p class="term-desc">변수(전자 수)가 1개씩 추가될 때마다 연산해야 할 상태 수가 2배, 4배, 8배로 급증하는 현상입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">다체 문제 (Many-Body Problem)</span>
      <p class="term-desc">여러 입자가 서로에게 동시에 힘을 미칠 때, 그 미시적 상호작용을 고전 수치해석으로 풀어내기 어려운 문제입니다.</p>
    </div>
  </div>
</div>`
      },
      2: {
        lesson: '2차시',
        num: '2장',
        title: '2장. 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">2차시 탐구 연계 · 양자 중첩과 큐비트</div>
    <h2 class="magazine-hero-title">2장. 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트</h2>
    <p class="magazine-hero-subtitle">책상 위 팽이처럼 회전하며 모든 경우의 수를 동시에 탐색하다</p>
  </div>

  <div class="magazine-lead quantum">
    물리학자 리처드 파인만은 "자연의 분자가 양자역학으로 움직인다면, 컴퓨터 자체를 양자역학으로 만들자"고 제안했습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        일반 컴퓨터는 전등 스위치처럼 0 또는 1 중 하나만 저장하는 <strong>'비트(Bit)'</strong>를 씁니다. 책상 위에 누워 있는 동전(앞면 또는 뒷면)과 같습니다.
      </p>
      <p class="magazine-text-p">
        반면 양자 컴퓨터의 <strong>'큐비트(Qubit)'</strong>는 팽이처럼 빠르게 회전하는 동전과 같아서, <strong>0과 1의 확률을 동시에 지니는 '중첩(Superposition)'</strong> 상태로 동작합니다.
      </p>
      <p class="magazine-text-p">
        N개의 큐비트는 2ᴺ개의 상태를 동시에 표현하므로, 미로의 수많은 갈림길을 한 번에 탐색하여 분자 계산 시간을 기하급수적으로 단축합니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_2.jpg" alt="회전하는 동전 팽이와 큐비트 블로흐 구면" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="rotate-cw"></i>
          <span><strong>양자 큐비트:</strong> 0과 1이 공존하는 중첩 상태를 이용해 방대한 경우의 수를 동시에 병렬 연산합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="disc"></i>
      <span>💡 2장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">비트(Bit) vs 큐비트(Qubit)</span>
      <p class="term-desc">0 또는 1만 표현 가능한 고전 정보 단위(비트)와, 0과 1의 중첩 상태를 가지는 양자 정보 단위(큐비트)입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">양자 중첩 (Superposition)</span>
      <p class="term-desc">측정하기 전까지 입자가 여러 상태의 확률을 동시에 머금고 존재하는 양자역학적 특성입니다.</p>
    </div>
  </div>
</div>`
      },
      3: {
        lesson: '3차시',
        num: '3장',
        title: '3장. 환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">3차시 탐구 연계 · 하이브리드 VQE 알고리즘</div>
    <h2 class="magazine-hero-title">3장. 환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태</h2>
    <p class="magazine-hero-subtitle">양자 컴퓨터와 슈퍼컴퓨터가 손을 잡고 가장 안정한 분자 모양을 찾아가다</p>
  </div>

  <div class="magazine-lead quantum">
    언덕에서 굴러떨어진 공이 골짜기 바닥에 멈추듯, 분자도 에너지가 가장 낮은 <strong>'바닥 상태'</strong>를 찾아 결합합니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        분자의 최저 에너지를 찾는 핵심 기법이 바로 <strong>'VQE(변분 양자 고유값 계산기)'</strong>입니다. 양자 컴퓨터와 고전 컴퓨터가 <strong>2인 3각 달리기</strong>처럼 협업합니다:
      </p>
      <ul style="margin-left:1.2rem; margin-bottom:0.8rem; font-size:0.94rem; color:#334155; line-height:1.7;">
        <li><strong>양자 컴퓨터:</strong> 큐비트 중첩을 이용해 복잡한 전자 에너지 상태를 순식간에 계산해 전달합니다.</li>
        <li><strong>고전 컴퓨터:</strong> 전달받은 에너지 값을 보고 원자 간 결합 거리를 미세 보정합니다.</li>
      </ul>
      <p class="magazine-text-p">
        이 피드백 루프를 반복하여 실제 이온 트랩 양자 컴퓨터로 분자의 결합 에너지와 바닥 상태를 정밀하게 예측합니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_3.jpg" alt="VQE 2인 3각 하이브리드 루프 및 위치에너지 곡면 최적화" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="layers"></i>
          <span><strong>VQE 하이브리드 루프:</strong> 양자 프로세서와 고전 CPU가 상호 협력하여 바닥 상태 에너지를 찾아냅니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="git-merge"></i>
      <span>💡 3장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">바닥 상태 (Ground State)</span>
      <p class="term-desc">분자 속 전자들이 에너지를 가장 낮게 소모하며 가장 안정하게 결합해 있는 상태입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">VQE (변분 양자 고유값 계산기)</span>
      <p class="term-desc">양자 프로세서의 고속 에너지 측정과 고전 컴퓨터의 수치 최적화를 결합한 하이브리드 알고리즘입니다.</p>
    </div>
  </div>
</div>`
      },
      4: {
        lesson: '4차시',
        num: '4장',
        title: '4장. 비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">4차시 탐구 연계 · 비커 없는 미래 화학실험실</div>
    <h2 class="magazine-hero-title">4장. 비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업</h2>
    <p class="magazine-hero-subtitle">컴퓨터 속 양자 시뮬레이션으로 기후 위기와 난치병 치료제를 디자인하다</p>
  </div>

  <div class="magazine-lead quantum">
    화학은 위험한 유리 비커의 시대를 지나 컴퓨터 안에서 분자를 시뮬레이션하는 <strong>'양자 계산 화학'</strong>의 시대로 진화했습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        양자 계산 화학은 3대 인류 난제를 해결할 혁신적 열쇠입니다:
      </p>
      <ol style="margin-left:1.2rem; margin-bottom:0.8rem; font-size:0.94rem; color:#334155; line-height:1.75;">
        <li><strong>친환경 상온 비료:</strong> 상온에서 질소를 고정하는 인공 촉매 분자를 계산하여 막대한 탄소 배출을 줄입니다.</li>
        <li><strong>전고체 배터리:</strong> 화재 위험 없이 초고속 충전이 가능한 차세대 고체 전해질 분자를 가상 설계합니다.</li>
        <li><strong>맞춤형 표적 신약:</strong> 바이러스 단백질 결합 구조를 초정밀 분석하여 치료제 분자를 신속히 스크리닝합니다.</li>
      </ol>
      <p class="magazine-text-p">
        파이썬 코드와 양자 알고리즘을 통해 컴퓨터 모니터 앞에서 지구를 구하는 미래 분자 디자이너로 활약할 수 있습니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_4.jpg" alt="파이썬 양자 계산 화학 코드와 친환경 분자 디자인" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="terminal"></i>
          <span><strong>디지털 가상 실험:</strong> 파이썬 양자 알고리즘을 실행하여 분자의 반응 경로와 최적 구조를 계산합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="globe"></i>
      <span>💡 4장 핵심 돋보기 용어</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">계산 화학 (Computational Chemistry)</span>
      <p class="term-desc">실제 시약 대신 양자역학 방정식과 컴퓨터 시뮬레이션으로 분자의 성질과 화학 반응을 예측하는 분야입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">상온 질소 고정 촉매</span>
      <p class="term-desc">공기 중 질소를 상온·상압에서 암모니아 비료로 변환하여 온실가스를 감축할 수 있는 친환경 인공 촉매입니다.</p>
    </div>
  </div>
</div>`
      }
    }
  }
};

let currentTextbookModule = 'oled';
let currentTextbookChapter = 1;

function ensureTextbookModalExists() {
  if (document.getElementById('textbook-modal')) return;

  const modalHtml = `
    <div id="textbook-modal" class="worksheet-modal-backdrop textbook-modal-backdrop" onclick="handleTextbookBackdropClick(event)">
      <div class="textbook-modal-container">
        <!-- 상단 헤더 (단독 챕터 정보만 명확히 표시, 타 장 이동 탭 없음) -->
        <div class="textbook-modal-header">
          <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
            <span id="textbook-modal-badge" class="badge" style="background:#eff6ff; color:#1e40af; font-weight:700; font-size:0.82rem; padding:0.3rem 0.65rem; border-radius:6px;">
              📖 학생용 읽기자료
            </span>
            <h3 id="textbook-modal-title" style="margin:0; font-size:1.1rem; font-weight:800; color:#1e293b;">
              스토리텔링 교과서
            </h3>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <button type="button" class="topbar-btn" onclick="printModalTextbook()" title="인쇄하기" style="padding:0.35rem 0.8rem; font-size:0.84rem; display:inline-flex; align-items:center; gap:0.35rem;">
              <i data-lucide="printer"></i> <span>인쇄</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closeTextbookModal()" aria-label="닫기" style="background:none; border:none; font-size:1.35rem; line-height:1; cursor:pointer; color:#64748b; padding:0.2rem 0.45rem;">
              ✕
            </button>
          </div>
        </div>

        <!-- 본문 -->
        <div id="textbook-modal-body" class="textbook-modal-body">
          <!-- 동적 주입 -->
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // ESC 키 닫기 핸들러
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTextbookModal();
    }
  });
}

function openTextbookModal(moduleType, lessonNum = 1) {
  ensureTextbookModalExists();

  const modData = textbookModalData[moduleType];
  if (!modData) return;

  currentTextbookModule = moduleType;
  currentTextbookChapter = lessonNum;

  renderTextbookContent();

  const modalEl = document.getElementById('textbook-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';

  const bodyEl = document.getElementById('textbook-modal-body');
  if (bodyEl) bodyEl.scrollTop = 0;

  if (window.lucide) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

function renderTextbookContent() {
  const modData = textbookModalData[currentTextbookModule];
  const chData = modData.chapters[currentTextbookChapter];
  if (!chData) return;

  const titleEl = document.getElementById('textbook-modal-title');
  const badgeEl = document.getElementById('textbook-modal-badge');
  const bodyEl = document.getElementById('textbook-modal-body');

  if (titleEl) {
    titleEl.innerText = `[${chData.lesson}] ${chData.title}`;
  }
  if (badgeEl) {
    const isOled = currentTextbookModule === 'oled';
    badgeEl.style.background = isOled ? '#eff6ff' : '#f5f3ff';
    badgeEl.style.color = isOled ? '#1e40af' : '#6d28d9';
    badgeEl.innerText = `📖 ${chData.lesson} 읽기자료`;
  }
  if (bodyEl) {
    const isSubfolder = window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/');
    let contentHtml = chData.content;
    if (isSubfolder) {
      contentHtml = contentHtml.replace(/src="image\//g, 'src="../image/');
    }
    bodyEl.innerHTML = contentHtml;
  }
}

function closeTextbookModal() {
  const modalEl = document.getElementById('textbook-modal');
  if (modalEl) {
    modalEl.classList.remove('open');
  }
  document.body.style.overflow = '';
}

function handleTextbookBackdropClick(event) {
  if (event.target && event.target.id === 'textbook-modal') {
    closeTextbookModal();
  }
}

function printModalTextbook() {
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
window.openTextbookModal = openTextbookModal;
window.closeTextbookModal = closeTextbookModal;
window.printModalTextbook = printModalTextbook;
