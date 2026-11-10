// 가상실험실 회전문: 카드를 좌우로 밀면 회전문처럼 돌고, 가운데 카드를 누르면 실험실이 열림.
// pos(소수)를 끌기·옆 카드 누르기로 바꾸고, 카드마다 pos와의 거리 d로 3D 위치를 정함.
// 한쪽 끝으로 나간 카드는 반대쪽에서 다시 들어옴. (app-router.js가 양자 화면에 복사한 뒤 실행되어야 함)
document.querySelectorAll('.lab-door').forEach(door => {
  const cards = [...door.querySelectorAll('.hub-showcase-card')], n = cards.length;
  let pos = 0, target = 0, drag = null, moved = false;

  const wrap = d => ((d % n) + n + n / 2) % n - n / 2;          // 가장 가까운 쪽 거리 (-n/2 ~ n/2)
  const front = () => ((Math.round(target) % n) + n) % n;
  const goTo = i => { target = Math.round(target) + wrap(i - front()); };

  function render() {
    requestAnimationFrame(render);
    const w = cards[0].offsetWidth;
    if (!w) return;                                            // 화면이 숨겨져 있으면 쉼
    if (!drag) pos += (target - pos) * 0.14;
    cards.forEach((c, i) => {
      const d = wrap(i - pos), a = Math.abs(d);
      c.style.transform = `translate(-50%, -50%) translateX(${d * w * 0.98}px) translateZ(${-a * 260}px) rotateY(${d * 38}deg)`;
      c.style.zIndex = 100 - Math.round(a * 10);
      c.style.opacity = Math.max(0, 1 - Math.max(0, a - 1) * 2);
      c.style.filter = `brightness(${1 - Math.min(a, 1) * 0.55})`;
    });
  }
  render();

  // 손가락/마우스로 좌우 밀기 (창에 붙여서 카드 밖으로 나가도 계속 따라감)
  door.addEventListener('pointerdown', e => {
    if (e.button) return;
    drag = { x: e.clientX, p: pos }; moved = false;
    door.classList.add('dragging');
  });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 5) moved = true;
    pos = drag.p - dx / (cards[0].offsetWidth * 0.9);
  });
  const end = () => {
    if (!drag) return;
    drag = null; door.classList.remove('dragging');
    target = Math.round(pos);
  };
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);

  // 끌었거나 옆 카드를 눌렀으면 실험실을 열지 않고 돌기만 함 (카드의 onclick보다 먼저 가로챔)
  door.addEventListener('click', e => {
    const card = e.target.closest('.hub-showcase-card');
    if (!moved && card && cards.indexOf(card) === front()) return;
    e.stopPropagation();
    if (!moved && card) goTo(cards.indexOf(card));
  }, true);
});
