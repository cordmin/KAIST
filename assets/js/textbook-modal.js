/**
 * KAIST 첨단과학 탐구 - 학생용 읽기자료 장별 독립 모달 시스템 (textbook-modal.js)
 * 각 차시별 완전히 독립된 대형 모달 창 (장 간 탭 전환 없음)
 * 각 장별 실사 사진 및 인라인 돋보기 용어 분산 탑재
 */

const textbookModalData = {
  oled: {
    title: '스마트폰 속 75% 배터리 도둑을 잡아라! 빛나는 분자와 OLED의 과학',
    chapters: {
      1: {
        lesson: '1차시',
        num: '1장',
        title: '1장. 어둠 속에서 빛나는 마법, 형광의 정체',
        tag: '1차시 탐구 연계 · 빛과 분자의 마법',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">1차시 탐구 연계 · 빛과 분자의 마법</div>
    <h2 class="magazine-hero-title">1장. 어둠 속에서 빛나는 마법, 형광의 정체</h2>
    <p class="magazine-hero-subtitle">보이지 않는 빛을 꿀꺽 삼켜 아름다운 색으로 되돌려주는 신비한 분자 이야기</p>
  </div>

  <div class="magazine-lead">
    불이 꺼진 방 안에서 블랙라이트(자외선 램프)를 켜본 적이 있나요? 투명한 유리잔에 담긴 토닉워터가 마법처럼 눈부신 사파이어 빛 파란색으로 변하고, 평범한 비타민 음료는 눈이 시리도록 밝은 형광 연두색으로 빛납니다!
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        우리 눈에는 아무것도 보이지 않는 투명한 자외선을 비추었을 뿐인데, 도대체 왜 액체 속에서 알록달록한 눈부신 가시광선이 뿜어져 나오는 걸까요?
      </p>
      <p class="magazine-text-p">
        비밀은 음료 속에 숨어 있는 <strong>'분자(Molecule)'</strong>에 있습니다. 토닉워터 속에는 말라리아 치료제로 쓰이던 <strong>'퀴닌(Quinine)'</strong>이라는 특별한 유기 분자가 녹아 있고, 비타민 음료 속에는 <strong>'리보플라빈(비타민 B₂)'</strong> 분자가 가득 들어 있습니다.
      </p>
      <p class="magazine-text-p">
        이 분자들은 사람의 눈에는 보이지 않지만 매우 강력한 에너지를 지닌 파장 300~400nm(나노미터)의 자외선 빛을 꿀꺽 삼킨 뒤, 우리 눈에 보이는 부드러운 가시광선(400~700nm)으로 바꾸어 다시 내뿜습니다. 이 신비로운 마법 현상을 과학에서는 <strong>'형광(Fluorescence)'</strong>이라고 부릅니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_1.jpg" alt="토닉워터와 비타민 음료의 자외선 형광 발광 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="sparkles"></i>
          <span><strong>실제 실험 사진:</strong> 블랙라이트 자외선(UV)을 비추자 토닉워터의 퀴닌 분자는 사파이어 파란빛을, 비타민 B₂ 분자는 에메랄드 연두빛을 눈부시게 뿜어냅니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="microscope"></i>
      <span>💡 1장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">자외선 (UV, Ultraviolet)</span>
      <p class="term-desc">파장이 약 100~400nm로 가시광선보다 짧아 눈에 보이지 않지만, 광자 1개가 가진 에너지가 매우 강력하여 물질 속 전자를 번쩍 들뜨게 만드는 빛입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">형광 (Fluorescence)</span>
      <p class="term-desc">물질이 자외선처럼 높은 에너지를 흡수한 뒤, 약 1억 분의 1초(수 나노초)라는 눈 깜짝할 사이에 스스로 가시광선 빛을 내뿜고 원래대로 돌아오는 현상입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">유기 발광 분자 (퀴닌 & 리보플라빈)</span>
      <p class="term-desc">탄소, 수소, 산소, 질소 등이 고리 모양으로 연결되어 있어 외부 빛 에너지를 효율적으로 흡수하고 아름다운 빛으로 다시 방출하는 분자 구조를 지니고 있습니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "친구들! 음료수에 자외선을 비췄을 때 액체 색이 변하는 게 아니라, 음료수 속 <strong>분자가 자외선을 꿀꺽 먹고 가시광선 빛을 번쩍 뱉어내는 것</strong>이었어요! 보이지 않는 에너지가 눈에 보이는 빛으로 바뀐다니 정말 신기하지 않나요?"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway">
    <div class="magazine-takeaway-icon">🌟</div>
    <p class="magazine-takeaway-text">
      <strong>1장 핵심 요약:</strong> 자외선(센 에너지) 흡수 ➔ 형광 분자(퀴닌·비타민) 속 전자 반응 ➔ 가시광선(부드러운 에너지) 방출!
    </p>
  </div>
</div>`
      },
      2: {
        lesson: '2차시',
        num: '2장',
        title: '2장. 꼬마 전자의 트램펄린 점프와 사라진 에너지',
        tag: '2차시 탐구 연계 · 에너지 보존 법칙',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">2차시 탐구 연계 · 에너지 보존 법칙</div>
    <h2 class="magazine-hero-title">2장. 꼬마 전자의 트램펄린 점프와 사라진 에너지</h2>
    <p class="magazine-hero-subtitle">들뜬 상태에서 부르르 떨며 열을 흘리는 꼬마 전자의 비밀</p>
  </div>

  <div class="magazine-lead">
    원자 속에는 무거운 원자핵 주위를 가볍게 맴도는 음(-)전하를 띤 귀여운 '꼬마 전자'가 살고 있습니다. 평소에 전자는 에너지가 가장 낮고 편안한 1층 거실, 즉 <strong>'바닥 상태'</strong>에 얌전히 머물러 있습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        그런데 에너지가 센 자외선 광자가 전자를 톡 건드리면, 전자는 그 에너지를 트램펄린 발판 삼아 3층 옥상인 <strong>'들뜬 상태(Excited State)'</strong>로 껑충 뛰어오릅니다!
      </p>
      <p class="magazine-text-p">
        하지만 3층은 전자가 오래 머물기에 너무 높고 아찔하게 불안정합니다. 전자는 불안해서 온몸을 부르르 떨기 시작하는데, 이를 화학에서는 <strong>'분자 진동'</strong>이라고 부릅니다. 이때 전자는 부르르 떨면서 흡수했던 에너지 중 일부를 <strong>'열(Heat)'</strong>로 뚝뚝 흘려버립니다.
      </p>
      <p class="magazine-text-p">
        열을 조금 흘려 에너지가 약간 줄어든 전자는, 마침내 1층 바닥 상태로 편안하게 착지하면서 남은 에너지를 한꺼번에 바깥으로 번쩍 뿜어냅니다. 처음 들어갔던 자외선보다 에너지가 약간 작아졌기 때문에, 파장이 더 길어진 <strong>알록달록한 가시광선 형광빛</strong>이 되어 나오는 것입니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_2.jpg" alt="분광기와 파장 분석 스펙트럼 측정 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="activity"></i>
          <span><strong>분광 측정 원리:</strong> 분광기(Spectrometer)로 흡수 스펙트럼과 방출 스펙트럼을 측정하면 방출 파장이 오른쪽(긴 파장)으로 이동하는 스토크스 이동을 직접 확인할 수 있습니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="zap"></i>
      <span>💡 2장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">바닥 상태 (Ground State) vs 들뜬 상태 (Excited State)</span>
      <p class="term-desc">전자가 에너지가 가장 낮고 편안하게 머무는 1층 안락의자 상태를 '바닥 상태', 외부 에너지를 받아 높은 층으로 뛰어오른 아슬아슬한 상태를 '들뜬 상태'라고 합니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">스토크스 이동 (Stokes Shift)</span>
      <p class="term-desc">전자가 들뜬 상태에서 진동으로 열에너지를 흘리기 때문에, 방출되는 형광 파장(400~700nm)이 처음 흡수한 자외선 파장(300~400nm)보다 더 길어지는 현상입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">에너지 보존 법칙 (Energy Conservation)</span>
      <p class="term-desc">에너지는 마법처럼 사라지지 않습니다. [흡수한 자외선 에너지] = [방출된 형광빛 에너지] + [흘린 열에너지] 공식이 100% 완벽하게 성립합니다!</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "방출된 빛의 파장이 왜 흡수한 빛보다 항상 길어질까요? <strong>파장이 길어질수록 빛의 에너지가 작아지기 때문</strong>이에요! 전자가 3층에서 부르르 떨며 열을 흘렸으니, 남은 빛 에너지가 줄어들어 파장이 길어진 거랍니다!"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway">
    <div class="magazine-takeaway-icon">⚡</div>
    <p class="magazine-takeaway-text">
      <strong>2장 핵심 공식:</strong> <code>E(흡수 자외선) = E(방출 형광빛) + E(흘린 열)</code> — 에너지는 사라지지 않고 모습만 바꿉니다!
    </p>
  </div>
</div>`
      },
      3: {
        lesson: '3차시',
        num: '3장',
        title: '3장. 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑',
        tag: '3차시 탐구 연계 · 양자 스핀과 배터리',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">3차시 탐구 연계 · 양자 스핀과 배터리</div>
    <h2 class="magazine-hero-title">3장. 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑</h2>
    <p class="magazine-hero-subtitle">빛을 내지 못하고 열만 뿜어내는 삼중항 전자의 함정</p>
  </div>

  <div class="magazine-lead">
    우리가 매일 손에서 놓지 못하는 스마트폰! 그 화면 속에는 스스로 빛을 내는 첨단 유기 분자로 만든 <strong>OLED(유기발광다이오드)</strong> 디스플레이가 자리 잡고 있습니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        스마트폰은 자외선 램프를 비추는 대신, 리튬 배터리에서 나오는 <strong>전기(전류)</strong>를 유기 분자에 직접 찔러 넣어 빛을 냅니다. 그런데 여기서 전 세계 과학자들을 골머리 앓게 만든 거대한 난제가 발생했습니다.
      </p>
      <p class="magazine-text-p">
        전자는 제자리에서 팽이처럼 뱅글뱅글 회전하는 <strong>'스핀(Spin)'</strong>이라는 신비한 양자역학적 성질을 가지고 있습니다. 전기로 들뜬 분자를 만들면 두 전자가 짝을 이루는데, 놀랍게도 두 가지 상태가 생겨납니다:
      </p>
      <ul style="margin-left:1.2rem; margin-bottom:1rem; font-size:0.98rem; color:#334155; line-height:1.75;">
        <li><strong>단일항 (Singlet, ↑↓):</strong> 두 전자가 서로 마주보고 반대로 돕니다. 1층으로 내려가는 문이 활짝 열려 있어, 1억 분의 1초 만에 눈부신 빛을 뿜어냅니다!</li>
        <li><strong>삼중항 (Triplet, ↑↑):</strong> 두 전자가 나란히 같은 방향으로 돕니다. 양자 규칙 때문에 비상문이 쾅 닫혀 전자가 내려가지 못하고 갇히게 됩니다.</li>
      </ul>
      <p class="magazine-text-p">
        문제는 배터리 전기를 넣으면 양자 확률상 <strong>빛을 내는 단일항은 단 25%만 생기고, 문이 잠긴 삼중항이 무려 75%나 생긴다는 사실</strong>입니다! 이 갇힌 75% 전자는 빛 대신 열을 뿜어내며 스마트폰을 뜨거운 난로로 만듭니다. 이것이 바로 <strong>'75% 배터리 도둑'</strong>입니다!
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_3.jpg" alt="전자 스핀 단일항 삼중항 모델과 OLED 분자 모형" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="zap-off"></i>
          <span><strong>양자 스핀 모형:</strong> 반대로 도는 단일항(25%)은 빛을 시원하게 내뿜지만, 같은 방향으로 도는 삼중항(75%)은 문이 닫혀 빛을 내지 못하고 배터리를 갉아먹는 열로 낭비됩니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="help-circle"></i>
      <span>💡 3장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">OLED (Organic Light Emitting Diode)</span>
      <p class="term-desc">백라이트(뒤쪽 조명)가 필요한 LCD와 달리, 전기를 받으면 스스로 빨강·초록·파랑 빛을 내는 유기 탄소 화합물 디스플레이 소자입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">전자 스핀 (Spin)</span>
      <p class="term-desc">전자가 마치 자전하는 지구처럼 스스로 회전하며 작은 자석처럼 행동하는 양자역학 고유의 물리량입니다. 위쪽 스핀(↑)과 아래쪽 스핀(↓)이 있습니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">단일항 (25%) vs 삼중항 (75%)</span>
      <p class="term-desc">전기 자극으로 전자가 결합할 때 위-아래 반대쌍(단일항, 1가지=25%)과 같은 방향쌍(삼중항, 3가지=75%)이 만들어집니다. 삼중항은 바닥 상태와 스핀이 달라 전이가 금지(비상문 잠김)됩니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "내가 스마트폰으로 게임이나 영상을 볼 때 폰이 따끈따끈해졌던 이유가 바로 <strong>삼중항에 갇힌 75%의 전자들 때문</strong>이었군요! 배터리의 75%가 빛이 아니라 열로 버려지다니, 이 녀석들을 구출할 방법은 없을까요?"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway">
    <div class="magazine-takeaway-icon">🔋</div>
    <p class="magazine-takeaway-text">
      <strong>3장 핵심 발견:</strong> 전기 주입 ➔ 단일항 25%(빛 방출 성공) vs 삼중항 75%(비상문 폐쇄, 열 손실) ➔ 75% 배터리 도둑 발생!
    </p>
  </div>
</div>`
      },
      4: {
        lesson: '4차시',
        num: '4장',
        title: '4장. KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
        tag: '4차시 탐구 연계 · KAIST 첨단 신소재',
        content: `<div class="magazine-container">
  <div class="magazine-hero">
    <div class="magazine-hero-tag">4차시 탐구 연계 · KAIST 첨단 신소재</div>
    <h2 class="magazine-hero-title">4장. KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너</h2>
    <p class="magazine-hero-subtitle">컴퓨터 시뮬레이션으로 삼중항 비상문을 열어 100% 발광을 이뤄내다</p>
  </div>

  <div class="magazine-lead">
    대한민국 최고의 과학기술 대학인 <strong>KAIST 화학과 CPRL(계산 광동역학 연구실) 이영민 교수팀</strong>이 갇혀버린 75%의 전자를 구출하기 위해 팔을 걷어붙였습니다!
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        연구팀은 갇혀 있는 삼중항 전자가 1층에서 열을 내뿜기 전에, 에너지가 높은 2층 삼중항 옥상에서 단일항으로 훌쩍 건너갈 수 있는 초고속 구름다리 우회로를 분자 속에 설계했습니다. 이를 <strong>'핫 엑시톤(Hot Exciton)'</strong> 메커니즘이라고 부릅니다!
      </p>
      <p class="magazine-text-p">
        또한 주변의 미세한 열에너지를 흡수해 단일항으로 거꾸로 뛰어넘는 <strong>TADF(열활성 지연형광)</strong> 기술도 함께 발전시켰습니다.
      </p>
      <p class="magazine-text-p">
        그 결과, 버려지던 75%의 전자를 모조리 빛으로 전환하여 <strong>100% 발광 효율</strong>을 달성하는 기적을 만들어냈습니다! 특히 빛의 삼원색(Red, Green, Blue) 중 에너지가 가장 높아 분자가 쉽게 부서지는 <strong>'청색(Blue) OLED'</strong>의 수명을 비약적으로 늘릴 수 있게 되었습니다. 이제 여러분이 미래의 신소재 분자 디자이너가 되어 나만의 빛나는 발광 분자를 설계할 차례입니다!
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card">
        <img src="image/tools/oled_tools_4.jpg" alt="KAIST 연구실 컴퓨터 시뮬레이션 및 분자 구조 설계 실험" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="check-circle"></i>
          <span><strong>KAIST 첨단 연구 현장:</strong> 슈퍼컴퓨터로 분자 궤도(HOMO-LUMO)를 계산하고 비틀림 각도를 조절하여 갇힌 삼중항을 100% 빛으로 탈출시키는 첨단 분자 설계 기술입니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box">
    <div class="term-lens-header">
      <i data-lucide="award"></i>
      <span>💡 4장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">핫 엑시톤 (Hot Exciton)</span>
      <p class="term-desc">KAIST 연구진이 밝혀낸 첨단 원리로, 에너지가 높은 고에너지 들뜬 삼중항 상태(T₂)에서 열을 잃기 전에 단일항(S₁)으로 초고속 역계간교차를 통해 건너가게 만드는 기술입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">TADF (열활성 지연형광)</span>
      <p class="term-desc">단일항과 삼중항의 에너지 차이(ΔE_ST)를 극도로 좁혀서, 상온의 미세한 열에너지만으로도 삼중항이 단일항으로 거꾸로 뛰어넘어가 형광 빛을 내도록 유도하는 차세대 OLED 기술입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">청색(Blue) OLED 난제</span>
      <p class="term-desc">청색 빛은 파장이 짧고 에너지가 가장 강력하여 발광 분자가 쉽게 손상됩니다. KAIST의 핫 엑시톤 기술은 청색 분자가 깨지지 않고 오래 버티도록 돕는 세계 최고의 혁신 기술입니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "우와! 비상문이 닫혀 있던 75%의 전자들에게 <strong>'구름다리 우회로'</strong>를 놓아주어 결국 100% 빛으로 만들어내다니! 미래에는 제가 디자인한 분자가 전 세계 사람들의 스마트폰 화면을 밝힐 수도 있겠네요!"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway">
    <div class="magazine-takeaway-icon">🚀</div>
    <p class="magazine-takeaway-text">
      <strong>4장 핵심 성과:</strong> KAIST CPRL 연구진의 핫 엑시톤 & TADF 설계 ➔ 75% 삼중항 구출 ➔ 100% 발광 효율 달성!
    </p>
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
        tag: '1차시 탐구 연계 · 미시세계와 지수 폭발',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">1차시 탐구 연계 · 미시세계와 지수 폭발</div>
    <h2 class="magazine-hero-title">1장. 슈퍼컴퓨터도 무릎 꿇은 분자의 미시세계: 지수 폭발</h2>
    <p class="magazine-hero-subtitle">원자 몇 개만 늘어나도 계산량이 우주 전체 원자 수를 뛰어넘는 이유</p>
  </div>

  <div class="magazine-lead quantum">
    옛날 인도의 왕과 지혜로운 신하의 '체스판과 쌀알' 이야기를 아시나요? 첫 칸에 쌀 1톨, 둘째 칸에 2톨, 셋째 칸에 4톨… 64번째 칸에는 전 세계 쌀을 다 합쳐도 모자란 기적이 일어납니다!
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        화학 분자의 미시세계에서도 똑같은 일이 일어납니다. 우리가 매일 마시는 커피 한 잔 속 카페인 분자(C₈H₁₀N₄O₂) 속에는 102개의 전자가 살고 있습니다.
      </p>
      <p class="magazine-text-p">
        이 전자들은 서로를 밀어내며 끊임없이 상호작용하는데, 전자가 1개 늘어날 때마다 계산해야 하는 상태의 수가 2배씩 곱해집니다. 이를 <strong>'지수 폭발(Exponential Explosion, 2ᴺ)'</strong>이라고 부릅니다.
      </p>
      <p class="magazine-text-p">
        전자가 102개인 카페인의 상태 수는 무려 <strong>2¹⁰² ≈ 10³⁰가지</strong>로, 지구상의 모든 바닷가 모래알 수(10²³개)보다 천만 배나 많습니다! 심지어 흔한 항생제인 페니실린 분자는 <strong>10⁸⁴가지</strong>의 상태를 가지는데, 이는 전 우주의 모든 원자 수(10⁸⁰개)를 초과합니다. 아무리 비싼 슈퍼컴퓨터를 총동원해도 우주의 나이(138억 년) 동안 계산할 수 없습니다. 그래서 화학자들은 지금까지 위험한 비커와 약품을 수만 번 섞어보며 10년 넘게 실패를 거듭해야만 신약을 만들 수 있었습니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_1.jpg" alt="분자 구조와 전자 구름 상호작용 시뮬레이션" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="cpu"></i>
          <span><strong>지수 폭발의 현장:</strong> 전자들이 서로 밀고 당기는 양자 얽힘 상태는 입자 수가 조금만 늘어나도 경우의 수가 우주 원자 수를 훌쩍 뛰어넘어 일반 슈퍼컴퓨터를 마비시킵니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="activity"></i>
      <span>💡 1장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">지수 폭발 (Exponential Explosion, 2ᴺ)</span>
      <p class="term-desc">문제를 풀기 위한 경우의 수가 변수(전자 수) N에 대해 2배, 4배, 8배(2ᴺ)로 폭발적으로 늘어나 일반 컴퓨터로는 영원히 풀 수 없게 되는 난제입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">다체 문제 (Many-Body Problem)</span>
      <p class="term-desc">전자 1개만 있을 때는 쉽게 계산할 수 있지만, 전자들이 여러 개 모이면 서로를 동시에 밀어내어 상호작용을 한 치의 오차도 없이 예측하기가 불가능에 가까워지는 문제입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">계산 복잡도 한계</span>
      <p class="term-desc">커피 속 카페인(102개 전자) 계산에 필요한 숫자는 10³⁰개로, 지구상 모든 모래알(10²³)보다 훨씬 많아 슈퍼컴퓨터로도 처리가 불가능합니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "매일 마시는 커피 속 카페인 분자 하나를 계산하는 데 지구 모래알보다 많은 계산이 필요하다니 충격이에요! 기존 컴퓨터로는 우주가 끝날 때까지 계산해도 답이 안 나온다니, 도대체 어떤 새로운 컴퓨터가 필요할까요?"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway quantum">
    <div class="magazine-takeaway-icon">💥</div>
    <p class="magazine-takeaway-text">
      <strong>1장 핵심 요약:</strong> 전자 1개 증가 ➔ 계산량 2배 폭증(지수 폭발, 2ᴺ) ➔ 슈퍼컴퓨터의 한계 봉착 ➔ 새로운 양자 패러다임 필요!
    </p>
  </div>
</div>`
      },
      2: {
        lesson: '2차시',
        num: '2장',
        title: '2장. 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트',
        tag: '2차시 탐구 연계 · 양자 중첩과 큐비트',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">2차시 탐구 연계 · 양자 중첩과 큐비트</div>
    <h2 class="magazine-hero-title">2장. 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트</h2>
    <p class="magazine-hero-subtitle">책상 위 팽이처럼 회전하며 모든 경우의 수를 동시에 탐색하다</p>
  </div>

  <div class="magazine-lead quantum">
    천재 물리학자 리처드 파인만은 기막힌 아이디어를 냈습니다. <em>"자연의 분자가 양자역학으로 움직인다면, 컴퓨터 자체를 양자역학으로 만들면 되지 않겠는가!"</em> 이렇게 탄생한 것이 바로 <strong>'양자 컴퓨터'</strong>입니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        우리가 쓰는 일반 컴퓨터는 전등 스위치처럼 전기가 꺼짐(0) 또는 켜짐(1) 중 한 가지만 선택할 수 있는 <strong>'비트(Bit)'</strong>를 씁니다. 책상 위에 가만히 누워 있는 동전과 같습니다. 앞면(0)이거나 뒷면(1)입니다.
      </p>
      <p class="magazine-text-p">
        하지만 양자 컴퓨터의 기본 단위인 <strong>'큐비트(Qubit)'</strong>는 책상 위에서 팽이처럼 빠르게 빙글빙글 회전하는 동전과 같습니다! 동전이 도는 동안에는 앞면인가요, 뒷면인가요? <strong>0과 1이 둘 다 동시에 섞여 있습니다!</strong> 이를 양자역학에서는 <strong>'중첩(Superposition)'</strong>이라고 부릅니다.
      </p>
      <p class="magazine-text-p">
        고전 비트 10개는 1,024개의 미로 갈림길 중 한 번에 1개씩 순서대로 검사해야 하지만, 큐비트 10개는 0과 1의 중첩 덕분에 <strong>1,024개의 갈림길을 '동시에 단 한 번에' 탐색</strong>합니다! 큐비트가 늘어날 때마다 처리 속도가 기하급수적으로 폭발하여, 슈퍼컴퓨터가 수백 년 걸릴 분자 계산을 단 몇 초 만에 끝낼 수 있게 됩니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_2.jpg" alt="회전하는 동전 팽이와 큐비트 블로흐 구면" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="rotate-cw"></i>
          <span><strong>동전 팽이와 큐비트:</strong> 바닥에 누운 동전(0 or 1)과 달리, 팽이처럼 도는 동전은 앞면(0)과 뒷면(1)의 확률을 모두 머금은 중첩(Superposition) 상태로 모든 연산을 동시에 수행합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="disc"></i>
      <span>💡 2장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">고전 비트 (Bit) vs 양자 큐비트 (Qubit)</span>
      <p class="term-desc">비트는 0 또는 1 중 오직 하나만 저장할 수 있는 스위치입니다. 큐비트는 0과 1을 동시에 품을 수 있는 양자 정보의 최소 단위입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">양자 중첩 (Superposition)</span>
      <p class="term-desc">측정하기 전까지 입자가 여러 가지 상태를 동시에 가지고 있는 신비로운 현상입니다. 회전하는 동전 팽이나 슈뢰딩거의 고양이 사고실험으로 설명됩니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">양자 병렬 처리 (Quantum Parallelism)</span>
      <p class="term-desc">N개의 큐비트는 2ᴺ개의 상태를 동시에 표현할 수 있어, 수억 개의 복잡한 계산 경로를 한 번에 통과하는 초고속 병렬 계산이 가능합니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "동전이 누워있을 때는 앞 아니면 뒤지만, <strong>돌고 있을 때는 앞과 뒤가 동시에 존재</strong>한다니! 이 중첩 현상 덕분에 양자 컴퓨터는 모든 미로의 길을 동시에 걸어갈 수 있군요!"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway quantum">
    <div class="magazine-takeaway-icon">🔮</div>
    <p class="magazine-takeaway-text">
      <strong>2장 핵심 원리:</strong> 큐비트의 양자 중첩 ➔ 2ᴺ개 상태 동시 연산 ➔ 복잡한 분자 미로를 단 한 번에 돌파!
    </p>
  </div>
</div>`
      },
      3: {
        lesson: '3차시',
        num: '3장',
        title: '3장. 환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태',
        tag: '3차시 탐구 연계 · 하이브리드 VQE 알고리즘',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">3차시 탐구 연계 · 하이브리드 VQE 알고리즘</div>
    <h2 class="magazine-hero-title">3장. 환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태</h2>
    <p class="magazine-hero-subtitle">양자 컴퓨터와 슈퍼컴퓨터가 손을 잡고 가장 안정한 분자 모양을 찾아가다</p>
  </div>

  <div class="magazine-lead quantum">
    가파른 언덕 위에서 축구공을 굴리면 공은 어디로 굴러가서 멈출까요? 당연히 가장 낮은 골짜기 바닥입니다! 자연계의 모든 분자도 에너지가 가장 낮고 편안한 <strong>'바닥 상태'</strong>를 찾아 스스로 결합합니다.
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        화학 분자가 가장 안정한 모양을 찾는 알고리즘이 바로 <strong>'VQE(변분 양자 고유값 계산기)'</strong>입니다. VQE는 양자 컴퓨터 혼자 일하는 것이 아니라, 일반 고전 컴퓨터와 <strong>'2인 3각 달리기'</strong>처럼 완벽한 팀워크를 이룹니다:
      </p>
      <ul style="margin-left:1.2rem; margin-bottom:1rem; font-size:0.98rem; color:#334155; line-height:1.75;">
        <li><strong>양자 컴퓨터 (빠른 탐험가):</strong> 큐비트의 중첩을 활용하여 복잡하게 얽힌 전자 구름의 현재 에너지 값을 순식간에 계산해 일반 컴퓨터에 넘겨줍니다.</li>
        <li><strong>고전 컴퓨터 (스마트 내비게이션):</strong> 넘겨받은 에너지를 보고 "지금 경사가 오른쪽으로 기울었으니, 원자 결합 거리를 0.05Å(옹스트롬) 좁히자!"라고 분자 모양을 미세 조정하도록 명령합니다.</li>
      </ul>
      <p class="magazine-text-p">
        이 피드백 루프를 반복하면, 공이 산골짜기 맨 밑바닥에 안착하듯 분자가 에너지가 가장 낮은 완벽한 결합 구조를 찾아냅니다! KAIST 연구진은 이 원리를 바탕으로 실제 이온 트랩 양자 컴퓨터를 이용해 분자의 화학 결합 에너지를 오차 없이 정밀하게 계산하는 데 성공했습니다.
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_3.jpg" alt="VQE 2인 3각 하이브리드 루프 및 위치에너지 곡면 최적화" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="layers"></i>
          <span><strong>VQE 2인 3각 하이브리드:</strong> 양자 프로세서(QPU)가 에너지를 순식간에 측정하고, 고전 CPU가 파라미터를 최적화하여 위치 에너지 곡면(PES)의 가장 깊은 바닥점을 찾아냅니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="git-merge"></i>
      <span>💡 3장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">VQE (Variational Quantum Eigensolver)</span>
      <p class="term-desc">변분 양자 고유값 계산기로, 잡음이 있는 현대 양자 컴퓨터(NISQ)에서 가장 효율적으로 분자의 최저 바닥 상태 에너지를 계산하는 핵심 알고리즘입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">바닥 상태 (Ground State)</span>
      <p class="term-desc">분자 속 전자들이 에너지를 가장 낮게 소모하며 가장 안정하게 결합해 있는 상태입니다. 이 에너지를 알아야 화학 반응이 일어날지 예측할 수 있습니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">양자-고전 하이브리드 컴퓨팅</span>
      <p class="term-desc">양자 컴퓨터의 초고속 에너지 계산 능력과 고전 컴퓨터의 정밀한 수치 최적화 능력을 결합하여 현재 기술 한계를 돌파하는 똑똑한 협업 방식입니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "양자 컴퓨터 혼자 모든 걸 하는 게 아니었군요! 양자 컴퓨터가 빠른 눈으로 산세를 살피고, 고전 컴퓨터가 나침반을 보며 발걸음을 옮기는 <strong>환상의 2인 3각 콤비</strong>였어요!"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway quantum">
    <div class="magazine-takeaway-icon">🏔️</div>
    <p class="magazine-takeaway-text">
      <strong>3장 핵심 알고리즘:</strong> 양자 컴퓨터(에너지 계산) ⟷ 고전 컴퓨터(구조 보정) 반복 ➔ 분자 골짜기 바닥 상태 도달!
    </p>
  </div>
</div>`
      },
      4: {
        lesson: '4차시',
        num: '4장',
        title: '4장. 비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업',
        tag: '4차시 탐구 연계 · 비커 없는 미래 화학실험실',
        content: `<div class="magazine-container">
  <div class="magazine-hero purple">
    <div class="magazine-hero-tag">4차시 탐구 연계 · 비커 없는 미래 화학실험실</div>
    <h2 class="magazine-hero-title">4장. 비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업</h2>
    <p class="magazine-hero-subtitle">컴퓨터 속 양자 시뮬레이션으로 기후 위기와 난치병 치료제를 디자인하다</p>
  </div>

  <div class="magazine-lead quantum">
    이제 화학은 폭발 위험과 유독 가스가 가득한 유리 비커의 시대를 넘어, 컴퓨터 안에서 분자를 시뮬레이션하는 <strong>'양자 계산 화학'</strong>의 시대로 힘차게 도약하고 있습니다!
  </div>

  <div class="magazine-grid two-col">
    <div class="magazine-text-col">
      <p class="magazine-text-p">
        양자 계산 화학은 인류가 직면한 3대 글로벌 난제를 해결할 기적의 열쇠입니다:
      </p>
      <ol style="margin-left:1.2rem; margin-bottom:1rem; font-size:0.98rem; color:#334155; line-height:1.75;">
        <li><strong>친환경 상온 비료:</strong> 현재 비료 공장은 전 세계 전기의 2%를 쓰며 막대한 탄소를 배출합니다. 콩과 식물 뿌리혹박테리아처럼 상온에서 질소를 고정하는 인공 효소 분자를 양자 컴퓨터로 시뮬레이션하면 기후 위기와 식량난을 동시에 해결합니다!</li>
        <li><strong>화재 없는 전고체 배터리:</strong> 폭발 위험이 없고 10배 빨리 충전되는 꿈의 고체 전해질 분자를 컴퓨터로 가상 합성합니다.</li>
        <li><strong>맞춤형 표적 신약:</strong> 바이러스 단백질의 열쇠구멍 구조를 원자 단위로 분석하여 부작용 없는 신약 분자를 수천 배 빠르게 찾아냅니다.</li>
      </ol>
      <p class="magazine-text-p">
        미래에는 청소년인 여러분이 파이썬 코드 한 줄과 양자 컴퓨터 한 대로 전 세계를 구하는 <strong>'양자 화학 스타트업 CEO'</strong>가 될 수 있습니다. 0과 1의 한계를 넘어 분자의 세계를 자유롭게 디자인해 보세요!
      </p>
    </div>
    <div class="magazine-photo-col">
      <div class="magazine-photo-card purple">
        <img src="image/tools/quantum_tools_4.jpg" alt="파이썬 양자 계산 화학 코드와 친환경 분자 디자인" loading="lazy">
        <div class="magazine-photo-caption">
          <i data-lucide="terminal"></i>
          <span><strong>비커 없는 미래 실험실:</strong> 유독 약품을 섞는 대신, 파이썬 양자 알고리즘 코드를 실행하여 컴퓨터 모니터 안에서 분자의 반응 경로와 에너지를 초정밀 가상 합성합니다.</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 💡 이 장의 핵심 돋보기 용어 (분산 배치) -->
  <div class="term-lens-box purple">
    <div class="term-lens-header">
      <i data-lucide="globe"></i>
      <span>💡 4장 핵심 돋보기 용어: 이것만은 꼭 기억해요!</span>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">계산 화학 (Computational Chemistry)</span>
      <p class="term-desc">유리 실험 도구 대신 양자역학 방정식과 컴퓨터 시뮬레이션을 이용해 물질의 성질과 화학 반응을 예측하고 신소재를 설계하는 미래 융합 학문입니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">상온 질소 고정 (Nitrogen Fixation) 인공 촉매</span>
      <p class="term-desc">공기 중 질소(N₂)를 상온·상압에서 암모니아 비료로 변환하는 기적의 촉매입니다. 개발 시 전 세계 온실가스 배출량을 즉각 수 퍼센트 줄일 수 있습니다.</p>
    </div>
    <div class="term-lens-item">
      <span class="term-badge">디지털 분자 디자인 (In Silico Screening)</span>
      <p class="term-desc">수억 개의 후보 물질을 컴퓨터 안에서 가상으로 결합시켜 보고, 가장 효능이 뛰어난 최적의 약물 분자만 골라내는 혁신적인 신약 개발 방식입니다.</p>
    </div>
  </div>

  <!-- 넙죽이 대화 말풍선 -->
  <div class="storybook-bubble">
    <div class="storybook-bubble-avatar">
      <img src="image/kaist_mascot.png" alt="KAIST 넙죽이">
    </div>
    <div class="storybook-bubble-content">
      <div class="storybook-bubble-speaker"><i data-lucide="message-circle"></i> KAIST 마스코트 넙죽이의 탐구 코멘트</div>
      <p class="storybook-bubble-text">
        "위험한 화학 약품을 만지지 않고도 <strong>컴퓨터 코딩으로 지구를 살리는 친환경 분자를 만들어낼 수 있다니</strong> 정말 가슴 뛰지 않나요? 여러분도 미래의 양자 화학 리더가 될 수 있어요!"
      </p>
    </div>
  </div>

  <div class="magazine-takeaway quantum">
    <div class="magazine-takeaway-icon">🌱</div>
    <p class="magazine-takeaway-text">
      <strong>4장 미래 비전:</strong> 비커 없는 양자 화학 ➔ 상온 비료 촉매 · 전고체 배터리 · 기적의 신약 디자인 ➔ 청소년 양자 CEO의 탄생!
    </p>
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
            <span id="textbook-modal-badge" class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:700; font-size:0.85rem; padding:0.35rem 0.75rem; border-radius:6px;">
              📖 학생용 읽기자료
            </span>
            <h3 id="textbook-modal-title" style="margin:0; font-size:1.15rem; font-weight:800; color:#1e293b;">
              스토리텔링 교과서
            </h3>
          </div>
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <button type="button" class="topbar-btn" onclick="printModalTextbook()" title="인쇄하기" style="padding:0.4rem 0.85rem; font-size:0.85rem; display:inline-flex; align-items:center; gap:0.4rem;">
              <i data-lucide="printer"></i> <span>인쇄</span>
            </button>
            <button type="button" class="modal-close-btn" onclick="closeTextbookModal()" aria-label="닫기" style="background:none; border:none; font-size:1.4rem; line-height:1; cursor:pointer; color:#64748b; padding:0.25rem 0.5rem;">
              ✕
            </button>
          </div>
        </div>

        <!-- 본문 (대형 화면 최적화) -->
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
    badgeEl.innerText = `📖 ${chData.lesson} 독립 읽기자료`;
  }
  if (bodyEl) {
    // 서브폴더(oled/ 또는 quantum/)에서 모달 호출 시 이미지 상대 경로 자동 변환
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
