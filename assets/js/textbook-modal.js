/**
 * KAIST 첨단과학 탐구 - 학생용 읽기자료 모달 시스템 (textbook-modal.js)
 * 각 차시별 스토리텔링 교과서 본문 및 핵심 용어사전 뷰 제공
 */

const textbookModalData = {
  oled: {
    title: '스마트폰 속 75% 배터리 도둑을 잡아라! 빛나는 분자와 OLED의 과학',
    chapters: {
      1: {
        num: '1장',
        title: '1장. 어둠 속에서 빛나는 마법, 형광의 정체',
        tag: '1차시 연계 · 자외선과 형광 현상',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #1e3a8a, #3b82f6); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">1차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">어둠 속에서 빛나는 마법, 형광의 정체</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            불이 꺼진 방 안에서 블랙라이트(자외선 램프)를 켜본 적이 있나요? 투명한 유리잔에 담긴 토닉워터가 마법처럼 눈부신 사파이어 빛 파란색으로 변하고, 평범한 비타민 음료는 눈이 시리도록 밝은 형광 연두색으로 빛납니다. 우리 눈에는 보이지 않는 투명한 자외선을 비추었을 뿐인데, 도대체 왜 액체 속에서 알록달록한 눈부신 가시광선이 뿜어져 나오는 걸까요?
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            비밀은 음료 속에 숨어 있는 <strong>'분자(Molecule)'</strong>에 있습니다. 토닉워터 속에는 말라리아 치료제로 쓰이던 <strong>'퀴닌(Quinine)'</strong>이라는 특별한 유기 분자가 녹아 있고, 비타민 음료 속에는 <strong>'리보플라빈(비타민 B₂)'</strong> 분자가 가득 들어 있습니다. 이 분자들은 사람의 눈에는 보이지 않지만 매우 강력한 에너지를 지닌 파장 300~400nm(나노미터)의 자외선 빛을 꿀꺽 삼킨 뒤, 눈에 보이는 부드러운 가시광선(400~700nm)으로 바꾸어 다시 내뿜습니다. 이 신비로운 마법 현상을 과학에서는 <strong>'형광(Fluorescence)'</strong>이라고 부릅니다.
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#eff6ff; border-left:4px solid #3b82f6; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#1e40af;"><i data-lucide="lightbulb"></i> 1차시 핵심 발견:</strong>
            자외선(파장 300~400nm, 센 에너지) 흡수 → 분자 속 전자 반응 → 가시광선(파장 400~700nm, 부드러운 에너지) 방출!
          </div>
        `
      },
      2: {
        num: '2장',
        title: '2장. 꼬마 전자의 트램펄린 점프와 사라진 에너지',
        tag: '2차시 연계 · 들뜬 상태와 에너지 전환',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #5b21b6, #7c3aed); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">2차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">꼬마 전자의 트램펄린 점프와 사라진 에너지</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            원자 속에는 무거운 원자핵 주위를 가볍게 맴도는 음(-)전하를 띤 <strong>'전자(Electron)'</strong>가 살고 있습니다. 평소에 전자는 에너지가 가장 낮고 편안한 1층 거실, 즉 <strong>'바닥 상태(Ground State)'</strong>에 얌전히 머물러 있습니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            그런데 에너지가 센 자외선 광자가 전자를 톡 건드리면, 전자는 그 에너지를 트램펄린 발판 삼아 3층 옥상인 <strong>'들뜬 상태(Excited State)'</strong>로 껑충 뛰어오릅니다! 하지만 3층은 전자가 오래 머물기에 너무 높고 불안정합니다. 전자는 불안해서 온몸을 부르르 떨기 시작하는데, 이를 화학에서는 <strong>'분자 진동'</strong>이라고 합니다. 이때 전자는 부르르 떨면서 흡수했던 에너지 중 일부를 <strong>'열(Heat)'</strong>로 뚝뚝 흘려버립니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            열을 조금 흘려 에너지가 약간 줄어든 전자는, 마침내 1층 바닥 상태로 편안하게 착지하면서 남은 에너지를 한꺼번에 바깥으로 번쩍 뿜어냅니다. 처음 들어갔던 자외선보다 에너지가 약간 작아졌기 때문에, 파장이 더 길어진 <strong>알록달록한 가시광선 형광빛</strong>이 되어 나오는 것입니다. 영국의 물리학자 조지 스토크스의 이름을 따 이를 <strong>'스토크스 이동(Stokes Shift)'</strong>이라 부르며, 이때도 <code>[흡수한 자외선] = [방출된 빛] + [흘린 열]</code>이라는 위대한 <strong>에너지 보존 법칙</strong>이 완벽하게 성립합니다!
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#f5f3ff; border-left:4px solid #7c3aed; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#6d28d9;"><i data-lucide="zap"></i> 2차시 핵심 공식:</strong>
            <code>E(흡수 자외선) = E(방출 형광빛) + E(흘린 열)</code> — 에너지는 사라지지 않고 형태만 바뀝니다!
          </div>
        `
      },
      3: {
        num: '3장',
        title: '3장. 팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑',
        tag: '3차시 연계 · 스핀과 75% 열 손실',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #047857, #10b981); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">3차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">팽이 스핀의 비밀과 스마트폰 OLED의 75% 배터리 도둑</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            오늘날 우리가 매일 들여다보는 스마트폰 화면은 스스로 빛을 내는 첨단 유기 분자로 만든 <strong>OLED(유기발광다이오드)</strong> 디스플레이입니다. 스마트폰은 자외선 조명을 비추는 대신, 리튬 배터리에서 나오는 <strong>전기(전류)</strong>를 유기 분자에 직접 찔러 넣어 빛을 냅니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            그런데 여기서 놀라운 과학의 난제가 발생합니다. 전자는 제자리에서 팽이처럼 빙글빙글 도는 <strong>'스핀(Spin)'</strong>이라는 양자역학적 성질을 가지고 있습니다. 전기로 들뜬 분자를 만들면 두 전자가 팽이처럼 돌며 짝을 이루는데, 놀랍게도 두 가지 상태가 생겨납니다:
          </p>
          <ul style="margin-left:1.5rem; margin-bottom:1rem; line-height:1.8; color:#334155;">
            <li><strong>단일항 (Singlet, ↑↓):</strong> 두 전자가 서로 마주보고 반대로 회전합니다. 1층으로 내려가는 비상문이 활짝 열려 있어, 1억 분의 1초 만에 눈부신 형광 빛을 뿜어냅니다!</li>
            <li><strong>삼중항 (Triplet, ↑↑):</strong> 두 전자가 나란히 같은 방향으로 회전합니다. 양자역학 규칙에 의해 1층 비상문이 쾅 닫혀 있어 전자가 내려가지 못하고 갇히게 됩니다.</li>
          </ul>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            문제는 배터리에서 전기를 주입하면 양자 통계 확률에 따라 <strong>빛을 내는 단일항은 단 25%만 생기고, 문이 잠긴 삼중항이 무려 75%나 생긴다는 점</strong>입니다! 이 갇힌 75%의 전자는 빛을 내지 못하고 부르르 떨며 에너지를 모조리 <strong>열</strong>로 방출합니다. 결국 스마트폰 배터리의 75%가 화면을 밝히는 대신 스마트폰을 뜨겁게 달구는 난로가 되어 버리는 <strong>'75% 배터리 도둑'</strong> 현상이 발생한 것입니다.
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#ecfdf5; border-left:4px solid #10b981; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#065f46;"><i data-lucide="alert-circle"></i> 3차시 핵심 통계:</strong>
            단일항(빛) 25% vs 삼중항(열 손실) 75% → 75%의 전기가 낭비되는 스마트폰 발열의 원인!
          </div>
        `
      },
      4: {
        num: '4장',
        title: '4장. KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너',
        tag: '4차시 연계 · KAIST CPRL 청색 OLED 구출',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #b45309, #f59e0b); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">4차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">KAIST의 75% 구출 작전과 미래의 청색 OLED 분자 디자이너</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            대한민국 최고의 과학기술 대학인 <strong>KAIST 화학과 CPRL(계산 광동역학 연구실) 이영민 교수팀</strong>은 이 갇혀버린 75%의 전자를 구출하기 위해 컴퓨터 시뮬레이션과 첨단 레이저 분광학을 결합한 혁신적인 연구를 성공시켰습니다!
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            연구팀은 갇혀 있는 삼중항 전자가 1층에서 열을 내뿜기 전에, 에너지가 높은 2층 삼중항 옥상에서 단일항으로 훌쩍 건너갈 수 있는 초고속 구름다리 우회로를 분자 속에 설계했습니다. 이를 <strong>'핫 엑시톤(Hot Exciton)'</strong> 메커니즘이라고 부릅니다. 또한 주변의 미세한 열에너지를 흡수해 단일항으로 거꾸로 뛰어넘는 <strong>TADF(열활성 지연형광)</strong> 기술도 함께 발전시켰습니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            그 결과, 버려지던 75%의 전자를 모조리 빛으로 전환하여 <strong>100% 발광 효율</strong>을 달성하는 기적을 만들어냈습니다! 특히 빛의 삼원색(Red, Green, Blue) 중 에너지가 가장 높아 분자가 쉽게 깨지는 <strong>'청색(Blue) OLED'</strong>의 수명을 비약적으로 늘릴 수 있게 되었습니다. 이제 여러분이 미래의 신소재 분자 디자이너가 되어, 더 단단하고 오래가는 나만의 발광 분자를 설계할 차례입니다!
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#fffbeb; border-left:4px solid #f59e0b; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#92400e;"><i data-lucide="award"></i> KAIST 연구 결실:</strong>
            역간시스템교차(RISC)와 핫 엑시톤 기술로 75% 삼중항을 빛으로 구출하여 내부 양자 효율 100% 달성!
          </div>
        `
      },
      5: {
        num: '용어사전',
        title: '중학생 핵심 과학 용어 사전 (OLED)',
        tag: '핵심 개념 총정리',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #334155, #64748b); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">한눈에 쏙쏙!</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">중학생 핵심 과학 용어 사전 (OLED)</h3>
          </div>
          <dl style="font-size:0.92rem; line-height:1.75; color:#334155;">
            <dt style="font-weight:700; color:#1e3a8a; margin-top:0.8rem;">1. 형광 (Fluorescence)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">물질이 에너지가 높은 빛(자외선 등)을 흡수한 직후, 에너지가 약간 낮은 다른 색의 빛(가시광선)을 즉시 다시 내뿜는 현상.</dd>
            
            <dt style="font-weight:700; color:#1e3a8a; margin-top:0.8rem;">2. 바닥 상태 & 들뜬 상태 (Ground & Excited State)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">전자가 가장 안정하고 편안하게 있는 에너지가 낮은 상태를 '바닥 상태', 에너지를 얻어 옥상으로 점프한 불안정한 상태를 '들뜬 상태'라고 함.</dd>
            
            <dt style="font-weight:700; color:#1e3a8a; margin-top:0.8rem;">3. 스토크스 이동 (Stokes Shift)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">들뜬 전자가 바닥으로 내려올 때 미세한 진동열을 흘려, 흡수한 빛보다 방출되는 빛의 에너지가 작아지고(파장이 길어지는) 현상.</dd>
            
            <dt style="font-weight:700; color:#1e3a8a; margin-top:0.8rem;">4. 전자 스핀 (Spin) & 단일항/삼중항</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">전자가 팽이처럼 자전하는 양자역학 성질. 두 전자의 회전 방향이 반대이면 '단일항(25%, 빛 방출)', 같으면 '삼중항(75%, 비상문 닫힘, 열 방출)'.</dd>
            
            <dt style="font-weight:700; color:#1e3a8a; margin-top:0.8rem;">5. 핫 엑시톤 (Hot Exciton)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">갇혀서 열로 사라질 운명의 삼중항 전자를 높은 에너지 옥상에서 단일항으로 재빠르게 구출하는 KAIST CPRL의 첨단 분자 설계 메커니즘.</dd>
          </dl>
        `
      }
    }
  },
  quantum: {
    title: '0과 1의 한계를 넘는 분자 탐험: 양자 컴퓨터와 계산 화학의 미래',
    chapters: {
      1: {
        num: '1장',
        title: '1장. 슈퍼컴퓨터도 무릎 꿇은 분자의 미시세계: 지수 폭발',
        tag: '1차시 연계 · 원자 조합과 지수 폭발',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #5b21b6, #7c3aed); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">1차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">슈퍼컴퓨터도 무릎 꿇은 분자의 미시세계: 지수 폭발</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            옛날 인도의 왕과 지혜로운 학자의 '체스판과 쌀알' 이야기를 아시나요? 첫 번째 칸에 쌀 1톨, 두 번째 칸에 2톨, 세 번째 칸에 4톨… 매 칸마다 2배씩 늘려가면 64번째 칸에는 전 세계 쌀 생산량의 수백 배가 넘는 어마어마한 쌀알이 필요합니다. 거듭제곱의 무서운 힘입니다!
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            화학 분자의 세계에서도 똑같은 일이 일어납니다. 우리가 매일 마시는 커피 한 잔 속 카페인 분자(C₈H₁₀N₄O₂) 속에는 102개의 전자가 살고 있습니다. 이 전자들은 서로를 밀어내며 끊임없이 상호작용하는데, 전자가 1개 늘어날 때마다 계산해야 하는 상태의 수가 2배씩 곱해집니다. 이를 <strong>'지수 폭발(Exponential Explosion, 2ᴺ)'</strong>이라고 부릅니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            전자가 102개인 카페인의 상태 수는 무려 2¹⁰² ≈ 10³⁰가지로, 지구상의 모든 바닷가 모래알 수(10²³개)보다 천만 배나 많습니다! 심지어 흔한 항생제인 페니실린 분자는 10⁸⁴가지의 상태를 가지는데, 이는 전 우주의 모든 원자 수(10⁸⁰개)를 초과합니다. 아무리 비싼 슈퍼컴퓨터를 총동원해도 우주의 나이(138억 년) 동안 계산할 수 없습니다. 그래서 화학자들은 지금까지 위험한 비커와 약품을 수만 번 섞어보며 10년 넘게 실패를 거듭해야만 신약을 만들 수 있었습니다.
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#f5f3ff; border-left:4px solid #7c3aed; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#6d28d9;"><i data-lucide="alert-triangle"></i> 1차시 핵심 발견:</strong>
            분자 속 전자 N개 → 계산 조합 2ᴺ개 폭발! 고전 슈퍼컴퓨터의 절대적인 계산 한계 직면.
          </div>
        `
      },
      2: {
        num: '2장',
        title: '2장. 0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트',
        tag: '2차시 연계 · 큐비트와 양자 중첩',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #1d4ed8, #3b82f6); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">2차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">0과 1이 동시에 춤추는 마법: 동전 팽이와 양자 큐비트</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            천재 물리학자 리처드 파인만은 기막힌 아이디어를 냈습니다. <em>"자연의 분자가 양자역학으로 움직인다면, 컴퓨터 자체를 양자역학으로 만들면 되지 않겠는가!"</em> 이렇게 탄생한 것이 바로 <strong>'양자 컴퓨터(Quantum Computer)'</strong>입니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            우리가 쓰는 일반 컴퓨터는 전등 스위치처럼 전기가 꺼짐(0) 또는 켜짐(1) 중 한 가지만 선택할 수 있는 <strong>'비트(Bit)'</strong>를 씁니다. 책상 위에 가만히 누워 있는 동전과 같습니다. 앞면(0)이거나 뒷면(1)입니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            하지만 양자 컴퓨터의 기본 단위인 <strong>'큐비트(Qubit)'</strong>는 책상 위에서 팽이처럼 빠르게 빙글빙글 회전하는 동전과 같습니다! 동전이 도는 동안에는 앞면(0)인가요, 뒷면(1)인가요? <strong>0과 1이 둘 다 동시에 섞여 있습니다!</strong> 이를 양자역학에서는 <strong>'중첩(Superposition)'</strong>이라고 부릅니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            비트 10개는 1,024개의 갈림길 중 한 번에 1개씩 순서대로 검사해야 하지만, 큐비트 10개는 0과 1의 중첩 덕분에 <strong>1,024개의 갈림길을 '동시에 단 한 번에' 탐색</strong>합니다! 큐비트가 늘어날 때마다 처리 능력이 기하급수적으로 폭발하므로, 슈퍼컴퓨터가 수백 년 걸릴 분자 계산을 단 몇 분 만에 끝낼 수 있게 됩니다.
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#eff6ff; border-left:4px solid #3b82f6; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#1e40af;"><i data-lucide="compass"></i> 2차시 핵심 비교:</strong>
            바닥에 멈춘 동전 = 고전 비트(0 또는 1) vs 회전하는 팽이 동전 = 양자 큐비트(0과 1 동시 공존 '중첩')!
          </div>
        `
      },
      3: {
        num: '3장',
        title: '3장. 환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태',
        tag: '3차시 연계 · VQE 하이브리드 최적화',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #047857, #10b981); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">3차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">환상의 2인 3각 달리기: VQE 알고리즘과 골짜기 바닥 상태</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            가파른 언덕에서 축구공을 굴리면 공은 어디로 굴러가서 멈출까요? 당연히 가장 낮은 골짜기 바닥입니다! 자연계의 모든 원자와 분자도 에너지가 가장 낮고 편안한 <strong>'바닥 상태(Ground State)'</strong>를 찾아 서로 단단하게 결합합니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            화학 분자가 가장 안정한 모양을 찾는 알고리즘이 바로 <strong>'VQE(변분 양자 고유값 계산기, Variational Quantum Eigensolver)'</strong>입니다. VQE는 놀랍게도 양자 컴퓨터 혼자 일하는 것이 아니라, 일반 슈퍼컴퓨터와 <strong>2인 3각 달리기</strong>처럼 완벽한 팀워크를 이룹니다:
          </p>
          <ul style="margin-left:1.5rem; margin-bottom:1rem; line-height:1.8; color:#334155;">
            <li><strong>양자 컴퓨터 (빠른 탐험가):</strong> 큐비트의 중첩을 활용하여 복잡하게 얽힌 전자 구름의 현재 에너지 값을 순식간에 계산해 일반 컴퓨터에 넘겨줍니다.</li>
            <li><strong>일반 컴퓨터 (스마트 내비게이션):</strong> 넘겨받은 에너지 숫자를 보고 "지금 경사가 오른쪽으로 기울었으니, 원자 결합 거리를 0.05Å(옹스트롬) 좁히자!"라고 분자 모양을 미세 조정하도록 명령합니다.</li>
          </ul>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            이 피드백 루프를 몇 번 반복하면, 공이 산골짜기 맨 밑바닥에 안착하듯 분자가 에너지가 가장 낮은 완벽한 결합 구조를 찾아냅니다! KAIST 연구진은 이 원리를 바탕으로 실제 이온 트랩 양자 컴퓨터를 이용해 분자의 화학 결합 에너지를 초정밀 계산하는 데 성공했습니다.
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#ecfdf5; border-left:4px solid #10b981; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#065f46;"><i data-lucide="repeat"></i> 3차시 핵심 구조:</strong>
            양자 컴퓨터(상태 에너지 고속 측정) ⟷ 일반 컴퓨터(매개변수 최적화 피드백) = VQE 2인 3각 알고리즘!
          </div>
        `
      },
      4: {
        num: '4장',
        title: '4장. 비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업',
        tag: '4차시 연계 · 지구 난제 해결과 스타트업',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #b45309, #f59e0b); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">4차시 탐구 연계 스토리</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">비커 없는 미래 실험실과 틴에이저 양자 화학 스타트업</h3>
          </div>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            이제 화학은 위험한 폭발 위험과 유독 가스가 가득한 비커와 시험관의 시대를 지나, 컴퓨터 안에서 분자를 시뮬레이션하는 <strong>'양자 계산 화학(Quantum Computational Chemistry)'</strong>의 시대로 진화하고 있습니다.
          </p>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            양자 계산 화학은 인류가 직면한 3대 지구 난제를 해결할 열쇠입니다:
          </p>
          <ol style="margin-left:1.5rem; margin-bottom:1rem; line-height:1.8; color:#334155;">
            <li><strong>친환경 상온 비료:</strong> 현재 비료 공장은 전 세계 전기의 2%를 쓰며 막대한 온실가스를 배출합니다. 콩과 식물 뿌리혹박테리아처럼 상온에서 질소를 고정하는 인공 촉매 분자를 계산해내면 기후 위기와 식량난을 동시에 해결합니다.</li>
            <li><strong>화재 없는 전고체 배터리:</strong> 불이 붙지 않고 10배 빨리 충전되는 꿈의 고체 전해질 분자를 컴퓨터로 가상 합성합니다.</li>
            <li><strong>맞춤형 표적 신약:</strong> 변종 바이러스 단백질의 열쇠구멍 구조를 분석하여 꼭 맞는 치료제 분자를 수천 배 빠르게 스크리닝합니다.</li>
          </ol>
          <p style="margin-bottom:1rem; line-height:1.85; font-size:0.98rem; color:#334155;">
            여러분은 어떤 지구 난제를 해결하고 싶나요? 틴에이저 양자 화학 스타트업의 대표가 되어 인류의 지속가능한 미래를 열어갈 신물질 프로젝트를 직접 기획해 봅시다!
          </p>
          <div class="callout-box" style="margin-top:1.2rem; background:#fffbeb; border-left:4px solid #f59e0b; padding:1rem; border-radius:0.5rem;">
            <strong style="color:#92400e;"><i data-lucide="rocket"></i> 4차시 미션:</strong>
            상온 질소 고정 촉매, 전고체 배터리, 맞춤형 신약 중 1개를 선택하여 2분 엘리베이터 피칭 수행!
          </div>
        `
      },
      5: {
        num: '용어사전',
        title: '중학생 핵심 과학 용어 사전 (양자컴퓨터)',
        tag: '핵심 개념 총정리',
        content: `
          <div class="textbook-chapter-banner" style="background:linear-gradient(135deg, #334155, #64748b); color:#fff; padding:1.2rem; border-radius:0.75rem; margin-bottom:1.5rem;">
            <div style="font-size:0.82rem; opacity:0.9;">한눈에 쏙쏙!</div>
            <h3 style="margin:0.25rem 0 0; font-size:1.25rem; color:#fff;">중학생 핵심 과학 용어 사전 (양자컴퓨터)</h3>
          </div>
          <dl style="font-size:0.92rem; line-height:1.75; color:#334155;">
            <dt style="font-weight:700; color:#5b21b6; margin-top:0.8rem;">1. 지수 폭발 (Exponential Explosion)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">입자나 조건이 하나 늘어날 때마다 경우의 수가 거듭제곱(2의 N제곱)으로 폭발하여 슈퍼컴퓨터로도 계산이 불가능해지는 현상.</dd>
            
            <dt style="font-weight:700; color:#5b21b6; margin-top:0.8rem;">2. 큐비트 (Qubit) & 중첩 (Superposition)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">양자 컴퓨터의 기본 정보 단위. 0 또는 1 하나만 선택하는 고전 비트와 달리, 회전하는 팽이 동전처럼 0과 1의 상태가 동시에 공존하는 성질.</dd>
            
            <dt style="font-weight:700; color:#5b21b6; margin-top:0.8rem;">3. 바닥 상태 (Ground State)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">자연계의 분자와 원자가 가장 안정한 결합을 이루는 에너지가 가장 낮은 산골짜기 바닥 상태.</dd>
            
            <dt style="font-weight:700; color:#5b21b6; margin-top:0.8rem;">4. VQE 알고리즘 (Variational Quantum Eigensolver)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">양자 컴퓨터(에너지 고속 계산)와 일반 컴퓨터(피드백 최적화)가 2인 3각으로 협력하여 분자의 바닥 상태 결합을 찾아내는 핵심 알고리즘.</dd>
            
            <dt style="font-weight:700; color:#5b21b6; margin-top:0.8rem;">5. 양자 계산 화학 (Quantum Computational Chemistry)</dt>
            <dd style="margin-left:1rem; margin-bottom:0.5rem;">폭발 위험이 있는 실제 화학 실험 대신, 양자 컴퓨터로 원자와 분자의 움직임을 가상 시뮬레이션하여 신약과 신소재를 설계하는 미래 과학.</dd>
          </dl>
        `
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
      <div class="worksheet-modal-container textbook-modal-container" style="max-width:920px; max-height:90vh;">
        <!-- 헤더 -->
        <div class="worksheet-modal-header" style="background:#f8fafc; border-bottom:1px solid #e2e8f0; padding:0.9rem 1.35rem; display:flex; align-items:center; justify-content:space-between;">
          <div style="display:flex; align-items:center; gap:0.65rem; flex-wrap:wrap;">
            <span class="worksheet-modal-type-badge" style="background:#ecfdf5; color:#047857; font-size:0.8rem; font-weight:700; padding:0.25rem 0.55rem; border-radius:0.35rem; display:inline-flex; align-items:center; gap:0.35rem;">
              <i data-lucide="book-open"></i> <span>학생용 읽기자료</span>
            </span>
            <h3 id="textbook-modal-title" style="margin:0; font-size:1.05rem; font-weight:700; color:#1e293b;">스토리텔링 교과서</h3>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <button type="button" class="topbar-btn" style="padding:0.35rem 0.75rem; font-size:0.82rem; display:inline-flex; align-items:center; gap:0.35rem;" onclick="printModalTextbook()">
              <i data-lucide="printer"></i> <span>인쇄</span>
            </button>
            <button type="button" class="modal-close-btn" style="background:none; border:none; font-size:1.3rem; line-height:1; cursor:pointer; color:#64748b; padding:0.2rem 0.4rem;" onclick="closeTextbookModal()" aria-label="닫기">✕</button>
          </div>
        </div>

        <!-- 챕터 탭 스위처 -->
        <div id="textbook-chapter-tabs" style="display:flex; gap:0.35rem; padding:0.5rem 1.35rem; background:#f1f5f9; border-bottom:1px solid #e2e8f0; overflow-x:auto;">
          <!-- 동적 생성 -->
        </div>

        <!-- 본문 -->
        <div id="textbook-modal-body" class="worksheet-modal-body" style="padding:1.5rem 2rem; overflow-y:auto; flex:1; max-height:calc(90vh - 130px);">
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

function renderTextbookChapterTabs() {
  const tabsContainer = document.getElementById('textbook-chapter-tabs');
  if (!tabsContainer) return;

  const chapters = textbookModalData[currentTextbookModule].chapters;
  let html = '';

  for (let key = 1; key <= 5; key++) {
    const ch = chapters[key];
    if (!ch) continue;
    const isActive = Number(currentTextbookChapter) === Number(key);
    const activeStyle = isActive 
      ? 'background:#059669; color:#fff; font-weight:700; border-color:#059669;' 
      : 'background:#ffffff; color:#475569; border-color:#cbd5e1;';

    html += `
      <button type="button" 
              onclick="switchTextbookChapter(${key})" 
              style="padding:0.35rem 0.8rem; font-size:0.84rem; border-radius:0.4rem; border:1px solid; cursor:pointer; transition:all 0.15s; white-space:nowrap; ${activeStyle}">
        ${ch.num}
      </button>
    `;
  }

  tabsContainer.innerHTML = html;
}

function openTextbookModal(moduleType, lessonNum = 1) {
  ensureTextbookModalExists();

  const modData = textbookModalData[moduleType];
  if (!modData) return;

  currentTextbookModule = moduleType;
  currentTextbookChapter = lessonNum;

  renderTextbookChapterTabs();
  renderTextbookContent();

  const modalEl = document.getElementById('textbook-modal');
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.lucide) {
    lucide.createIcons();
  }
}

function switchTextbookChapter(chapterNum) {
  currentTextbookChapter = chapterNum;
  renderTextbookChapterTabs();
  renderTextbookContent();
  
  const bodyEl = document.getElementById('textbook-modal-body');
  if (bodyEl) bodyEl.scrollTop = 0;

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderTextbookContent() {
  const modData = textbookModalData[currentTextbookModule];
  const chData = modData.chapters[currentTextbookChapter];
  if (!chData) return;

  const titleEl = document.getElementById('textbook-modal-title');
  const bodyEl = document.getElementById('textbook-modal-body');

  if (titleEl) {
    titleEl.innerText = chData.title;
  }
  if (bodyEl) {
    bodyEl.innerHTML = chData.content;
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
window.switchTextbookChapter = switchTextbookChapter;
window.printModalTextbook = printModalTextbook;
