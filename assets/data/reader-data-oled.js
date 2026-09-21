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
    title: '스마트폰은 왜 뜨거워질까? 75%의 비밀',
    chapters: [
      // 1장
      {
        chapter: 1,
        title: '1. 스마트폰 뒷면이 뜨거워지는 이유',
        text: '스마트폰으로 게임을 하거나 영상을 오래 보면 기기 뒷면이 후끈후끈 뜨거워지는 것을 누구나 겪어보았을 것입니다. 특히 파란색 화면이 많을 때 배터리가 유독 빨리 닳고 열도 심하게 납니다. 왜 그럴까요? 배터리에서 공급한 전기 에너지가 화면의 빛으로 다 바뀌지 못하기 때문입니다. OLED 화면 속 분자에 전기를 흘려보내면, 겨우 25%만 빛을 내고 나머지 75%는 빛을 내지 못한 채 그대로 열로 버려집니다. 우리가 충전한 전기의 무려 4분의 3이 화면을 뜨겁게 달구는 데 낭비되고 있었던 것입니다.',
        image: 'reader_oled_1_heat.jpg'
      },

      // 2장
      {
        chapter: 2,
        title: '2. 빗맞은 야구 배트와 분자의 떨림',
        text: '야구를 할 때 배트 끝이나 손잡이에 공이 빗맞으면 손바닥이 찌릿하고 얼얼합니다. 타격 에너지가 공을 시원하게 날려 보내지 못하고, 배트의 떨림으로 바뀌어 손으로 전달되었기 때문입니다. 반대로 배트 중심에 공이 제대로 맞으면 손에 울림 없이 에너지가 공에 온전히 전달되어 멀리 날아갑니다. 스마트폰 속 분자도 똑같습니다. 전기를 받은 분자가 에너지를 곧바로 빛으로 방출해야 하는데, 분자 자체가 제자리에서 심하게 떨리면서 에너지가 빛으로 나오지 못하고 전부 열로 빠져나가 버립니다. 마치 빗맞은 배트가 손만 아프게 울리듯, 75%의 전자가 분자를 마구 흔들며 열만 내뿜고 마는 것입니다.',
        image: 'reader_oled_2_vibration.jpg'
      },

      // 3장
      {
        chapter: 3,
        title: '3. 양자 시뮬레이션으로 쓸데없는 떨림을 잡다',
        text: '그렇다면 분자가 열을 내며 흔들리는 것을 막고, 전기를 온전히 빛으로 바꿀 수는 없을까요? KAIST 연구진은 이 문제를 해결하기 위해 슈퍼컴퓨터로 \'양자 시뮬레이션\'을 진행했습니다. 분자 속 원자들이 어떤 구조로 어떻게 진동하는지 컴퓨터로 정밀하게 계산한 것입니다. 연구진은 원자들의 결합 구조를 단단하게 고정하면 쓸데없는 열 진동을 크게 줄일 수 있다는 사실을 밝혀냈습니다. 에너지가 열로 흩어지기 전에 곧바로 빛으로 방출되도록, 분자의 진동수를 조절하여 새로운 구조로 재설계한 것입니다.',
        image: 'reader_oled_3_simulation.jpg'
      },

      // 4장
      {
        chapter: 4,
        title: '4. 시원한 화면, 두 배 오래가는 배터리',
        text: '새롭게 설계된 청색 OLED 분자는 전기를 받는 즉시 열로 새지 않고, 정타를 맞은 야구공처럼 깨끗하고 푸른 빛을 시원하게 내뿜었습니다. 손목을 아프게 울리던 헛떨림(열)처럼 버려지던 75%의 에너지가 드디어 빛으로 살아난 것입니다. 화면 발열은 크게 줄어들었고, 배터리 사용 시간은 최대 두 배 가까이 늘어나게 되었습니다. 값비싼 귀금속 없이 순수한 분자 설계 기술만으로 이뤄낸 놀라운 성과입니다. 이제 대한민국 첨단 과학기술이 열어갈 더 밝고 편리한 미래 세상을 함께 탐구해 보세요!',
        image: 'reader_oled_4_pure_blue.jpg'
      }
    ]
  }
};
