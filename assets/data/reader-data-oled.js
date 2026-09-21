/**
 * KAIST CPRL × 2022 개정 중학 과학 첨단 탐구 플랫폼
 * [읽기 자료] OLED 모듈 데이터 (동화책/스토리북 뷰어)
 * assets/data/reader-data-oled.js
 */

if (typeof getToolAsset === 'undefined') {
  function getToolAsset(filename) {
    const isSub = (typeof window !== 'undefined' && window.location && window.location.pathname) 
      ? (window.location.pathname.includes('/oled/') || window.location.pathname.includes('/quantum/'))
      : false;
    return (isSub ? '../' : '') + 'image/tools/' + filename;
  }
}

window.readerModalData = window.readerModalData || {};

window.readerModalData.oled = {
  4: {
    title: '스마트폰 속 75% 배터리 도둑을 잡아라!',
    subtitle: 'KAIST 핫 엑시톤 기술과 분자 진동수 재설계 이야기',
    totalChapters: 4,
    chapters: [
      // 1장: 스마트폰의 비명
      {
        chapter: 1,
        tag: '제1장 · 스마트폰의 비명',
        title: '왜 화면 뒤통수가 뜨거워질까?',
        lead: '게임을 하거나 영상을 오래 볼 때, 스마트폰 화면 뒤가 후끈후끈 달아오르는 경험을 누구나 해보았을 것입니다.',
        paragraphs: [
          '특히 화면이 눈부신 파란색을 띨 때 유독 배터리가 뚝뚝 떨어지고 손바닥이 뜨거워집니다. 배터리에서 밀어준 전기가 온전히 화면 빛으로 변하지 못하고 있다는 뜻입니다.',
          '자연 법칙상 OLED 분자에 전기를 100만큼 밀어 넣으면, 오직 25%만 빛을 내고 <strong>무려 75%는 빛을 내지 못한 채 갇혀서 열로 버려집니다.</strong>',
          '우리가 스마트폰을 충전할 때 쓰는 전기의 4분의 3이 화면을 뜨겁게 달구며 허공으로 날아가고 있었던 것입니다!'
        ],
        callout: {
          icon: 'battery-warning',
          title: '자연의 1:3 전환 법칙',
          text: '주입된 전기 100% = [ 25% 유용한 빛 ] + [ 75% 버려지는 열 ]'
        },
        image: 'reader_oled_1_heat.jpg',
        imageCaption: '스마트폰 화면의 푸른 빛과 과열된 붉은 열기의 대조'
      },

      // 2장: 빗맞은 야구 배트
      {
        chapter: 2,
        tag: '제2장 · 빗맞은 야구 배트',
        title: '75%의 에너지가 손을 울리는 열이 되는 비밀',
        lead: '야구를 할 때 야구 배트 끝이나 손잡이에 공이 빗맞으면 어떤 일이 일어날까요?',
        paragraphs: [
          '공은 앞으로 뻗어나가지 못하고, <strong>배트를 쥔 손목과 손바닥만 "징~" 하고 부르르 떨리며 찌릿하고 불타듯 얼얼해집니다.</strong> 배트의 진동수가 공의 충격과 어긋나면서, 에너지가 공을 튕겨내지 못하고 손잡이를 타고 들어와 헛진동(열)으로 변해버렸기 때문입니다.',
          '반대로 배트의 중심인 <strong>스위트 스폿(Sweet Spot)</strong>에 완벽한 박자로 정타가 맞으면 손에 울림이 전혀 없이 에너지가 100% 공에 실려 담장 밖으로 시원하게 날아갑니다.',
          '스마트폰 속 OLED 분자도 이와 똑같습니다! 배터리가 힘차게 전기를 밀어 넣어줘도, <strong>분자의 떨림 박자(고유 진동수)가 스위트 스폿처럼 빛과 딱 맞지 않으면</strong> 에너지가 밖으로 뻗어나가지 못합니다.',
          '결국 75%의 전자는 빛이 되지 못한 채, 제자리에서 분자만 덜덜 떨게 만드는 <strong>"빗맞은 헛떨림(열 진동)"</strong>으로 낭비되고 마는 것입니다.'
        ],
        callout: {
          icon: 'flame',
          title: '빗맞은 헛진동(열) 메커니즘',
          text: '스위트 스폿 불일치 ➔ 에너지가 밖으로 뻗지 못함 ➔ 제자리 헛떨림(열) 75% 발생'
        },
        image: 'reader_oled_2_vibration.jpg',
        imageCaption: '스위트 스폿을 벗어나 에너지가 갇힌 채 격렬하게 헛떨리며 열을 내는 분자'
      },

      // 3장: 양자 시뮬레이션
      {
        chapter: 3,
        tag: '제3장 · 양자 시뮬레이션',
        title: '슈퍼컴퓨터로 분자의 박자를 맞추다',
        lead: '"그렇다면 분자가 빗맞아 헛떨리지 않고, 100% 스위트 스폿 정타로 빛을 뿜어내게 박자를 바꿀 순 없을까?"',
        paragraphs: [
          '대한민국 KAIST CPRL 연구진은 이 거대한 난제에 정면으로 도전했습니다. 연구진은 눈에 보이지 않는 미시 세계를 들여다보기 위해 <strong>슈퍼컴퓨터 양자 시뮬레이션</strong>을 가동했습니다.',
          '분자를 이루는 수많은 원자들이 어떤 각도로 얼마나 빠르게 진동하는지를 <strong>1조 분의 1초(피코초) 단위</strong>로 정밀하게 계산했습니다.',
          '그리고 마침내 에너지가 열로 새어나가지 않고 오직 빛으로만 시원하게 뿜어져 나오는 <strong>"완벽한 스위트 스폿 정타 박자(공명 진동수)"</strong>를 찾아냈습니다. 원자 사이의 결합을 레고 블록처럼 단단히 조여 분자의 진동수를 완벽하게 재설계한 것입니다!'
        ],
        callout: {
          icon: 'cpu',
          title: 'KAIST 양자 시뮬레이션 기술',
          text: '1조 분의 1초 단위 분자 진동 계산 ➔ 원자 결합 보강 ➔ 스위트 스폿 정타 진동수로 재설계'
        },
        image: 'reader_oled_3_simulation.jpg',
        imageCaption: '슈퍼컴퓨터 홀로그램으로 분자의 고유 진동수를 정밀 시뮬레이션하는 연구진'
      },

      // 4장: 100% 정타의 기적
      {
        chapter: 4,
        tag: '제4장 · 100% 정타의 기적',
        title: '차가운 블루, 배터리가 2배가 되다',
        lead: '박자가 완벽하게 맞춰진 새로운 청색 OLED 분자는 더 이상 헛떨리지 않았습니다.',
        paragraphs: [
          '전기가 들어오는 즉시, 빗맞음 없이 <strong>100% 시원한 홈런 정타처럼 깨끗하고 찬란한 청색 빛으로 펑 터져 날아갔습니다!</strong> 손목을 아프게 하던 헛떨림(열)이 완벽히 사라진 것입니다.',
          '버려지던 75%의 에너지가 모두 빛으로 구출되면서, 스마트폰 화면 발열은 획기적으로 줄어들고 <strong>배터리 사용 시간은 무려 2배</strong>로 늘어났습니다.',
          '더 이상 비싼 희귀 금속(이리듐)에 의존하지 않고, 순수한 유기 분자 설계만으로 이뤄낸 세계 최초의 쾌거입니다. 이제 여러분이 미래의 분자 디자이너가 되어 세상을 바꿀 새로운 분자를 직접 기획해 보세요!'
        ],
        callout: {
          icon: 'sparkles',
          title: '미래 디스플레이의 완성',
          text: '헛떨림(열) 0% ➔ 100% 청색 정타 발광 ➔ 배터리 2배 & 발열 없는 차세대 화면'
        },
        image: 'reader_oled_4_pure_blue.jpg',
        imageCaption: '열기 없이 100% 찬란한 순수 청색 빛을 뿜어내는 미래형 플렉서블 디스플레이'
      }
    ]
  }
};
