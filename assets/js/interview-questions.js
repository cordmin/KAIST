// 기존 화면 전환기를 사용하고 검토 화면은 본문 안에서 지연 로드한다.
(() => {
  const root = document.getElementById('view-cprl-questions');
  const frame = document.getElementById('interview-review-frame');
  if (!root || !frame) return;
  const activate = () => {
    if (root.classList.contains('active') && !frame.hasAttribute('src')) frame.src = frame.dataset.src;
  };
  new MutationObserver(activate).observe(root, { attributes: true, attributeFilter: ['class'] });
  activate();
})();
