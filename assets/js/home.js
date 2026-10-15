// 홈 화면 첫 장면: 마우스가 자외선 램프가 되어 분자를 비추면
// 흡수(보라) → 열(빨강) → 형광(파랑) 순서로 반응한다. (OLED 1·2차시 내용과 같은 흐름)
(function () {
  const canvas = document.getElementById('home-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement; // 홈 화면 전체 (첫 화면 + 탐구 여정)
  const R_LAMP = 150, ABSORB = .35, HEAT = .9, GLOW = 1.7, REST = 3.2; // 단계 끝 시각(초)
  let W = 0, H = 0, dpr = 1, mols = [], sparks = [];
  const lamp = { x: -999, y: -999, auto: true, t: 0 };
  let lastMove = 0;

  // 컴퓨터 화면: 머리글 위쪽은 사이드바 로고 위쪽, 카드 아래 끝은 사이드바 마지막 메뉴 상자 아래 끝에 맞춤
  function alignToSidebar() {
    const logo = document.querySelector('.rebuild-ws-identity');
    const lastBox = document.getElementById('rb-pkg-box-quantum');
    const cards = document.querySelector('.home-journeys');
    if (!logo || !lastBox || !cards || window.innerWidth <= 768 || !hero.offsetParent) return;
    hero.style.setProperty('--home-top', Math.round(logo.getBoundingClientRect().top) + 'px');
    requestAnimationFrame(() => {
      const h = lastBox.getBoundingClientRect().bottom - cards.getBoundingClientRect().top;
      hero.style.setProperty('--home-cards-h', Math.max(280, Math.round(h)) + 'px');
    });
  }

  function resize() {
    alignToSidebar();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight; // 캔버스는 화면 전체(사이드바 뒤 포함)에 고정
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(W * H / 26000);
    mols = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: 12 + Math.random() * 16,
      a: Math.random() * Math.PI, va: (Math.random() - .5) * .25,
      vx: (Math.random() - .5) * 8, vy: (Math.random() - .5) * 8, t: -1
    }));
  }

  function hexagon(m, scale) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const ang = m.a + i * Math.PI / 3, rr = m.r * scale;
      ctx[i ? 'lineTo' : 'moveTo'](m.x + Math.cos(ang) * rr, m.y + Math.sin(ang) * rr);
    }
    ctx.closePath();
  }

  function draw(dt, now) {
    ctx.clearRect(0, 0, W, H);
    // 마우스가 멈추거나 터치 기기면 램프가 스스로 천천히 돌아다님
    if (lamp.auto || now - lastMove > 4000) {
      lamp.t += dt * .25;
      lamp.x = W * (.6 + .3 * Math.sin(lamp.t * 1.3));
      lamp.y = H * (.45 + .4 * Math.sin(lamp.t * .9 + 1));
    }
    const g = ctx.createRadialGradient(lamp.x, lamp.y, 0, lamp.x, lamp.y, R_LAMP * 1.6);
    g.addColorStop(0, 'rgba(155,107,255,.28)'); g.addColorStop(1, 'rgba(155,107,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    for (const m of mols) {
      m.x += m.vx * dt; m.y += m.vy * dt; m.a += m.va * dt;
      if (m.x < -40) m.x = W + 40; if (m.x > W + 40) m.x = -40;
      if (m.y < -40) m.y = H + 40; if (m.y > H + 40) m.y = -40;
      const d = Math.hypot(m.x - lamp.x, m.y - lamp.y);
      if (m.t < 0 && d < R_LAMP) m.t = 0;
      let jitter = 0, scale = 1, stroke = 'rgba(200,206,216,.28)', fill = null;
      if (m.t >= 0) {
        m.t += dt;
        const t = m.t;
        if (t < ABSORB) { scale = 1 + .25 * t / ABSORB; stroke = 'rgba(183,148,255,.95)'; fill = 'rgba(155,107,255,.25)'; }
        else if (t < HEAT) {
          scale = 1.2; jitter = 2.2; stroke = 'rgba(255,122,92,.9)'; fill = 'rgba(255,90,60,.16)';
          if (Math.random() < dt * 30) sparks.push({ x: m.x, y: m.y, vx: (Math.random() - .5) * 60, vy: -20 - Math.random() * 50, life: .6, c: '255,110,80' });
        } else if (t < GLOW) {
          const k = (t - HEAT) / (GLOW - HEAT);
          scale = 1.2 - .2 * k; stroke = 'rgba(90,169,255,.95)'; fill = `rgba(90,169,255,${.3 * (1 - k)})`;
          if (t - dt < HEAT) for (let i = 0; i < 6; i++) { const an = i * Math.PI / 3 + m.a; sparks.push({ x: m.x, y: m.y, vx: Math.cos(an) * 160, vy: Math.sin(an) * 160, life: .9, c: '120,190,255' }); }
          ctx.beginPath(); ctx.arc(m.x, m.y, m.r * (1.2 + 2.2 * k), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(90,169,255,${.5 * (1 - k)})`; ctx.lineWidth = 2; ctx.stroke();
        } else if (t > REST) m.t = -1;
      }
      const ox = m.x, oy = m.y;
      m.x += (Math.random() - .5) * jitter; m.y += (Math.random() - .5) * jitter;
      hexagon(m, scale);
      if (fill) { ctx.fillStyle = fill; ctx.fill(); }
      ctx.strokeStyle = stroke; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.beginPath(); ctx.arc(m.x, m.y, m.r * scale * .55, 0, Math.PI * 2);
      ctx.strokeStyle = stroke.replace(/[\d.]+\)$/, '.35)'); ctx.lineWidth = 1; ctx.stroke();
      m.x = ox; m.y = oy;
    }

    sparks = sparks.filter(s => (s.life -= dt) > 0);
    for (const s of sparks) {
      s.x += s.vx * dt; s.y += s.vy * dt;
      ctx.beginPath(); ctx.arc(s.x, s.y, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.c},${Math.min(1, s.life * 1.6)})`; ctx.fill();
    }
    // 램프 중심: 마우스를 쓸 때는 사이트 공통 커서(빛나는 점)가 대신하므로, 스스로 돌아다닐 때만 그림
    if (!(lamp.auto || now - lastMove > 4000)) return;
    ctx.beginPath(); ctx.arc(lamp.x, lamp.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(214,196,255,.95)'; ctx.shadowColor = '#9b6bff'; ctx.shadowBlur = 18; ctx.fill(); ctx.shadowBlur = 0;
  }

  let prev = performance.now();
  function loop(now) {
    const dt = Math.min(.05, (now - prev) / 1000); prev = now;
    if (hero.offsetParent) draw(dt, now); // 홈이 보일 때만 그림
    requestAnimationFrame(loop);
  }
  // 홈이 보이는 동안 화면 어디서든(오른쪽 빈 곳 포함) 마우스를 따라감
  window.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || !hero.offsetParent) return;
    const r = canvas.getBoundingClientRect();
    lamp.x = e.clientX - r.left; lamp.y = e.clientY - r.top; lamp.auto = false; lastMove = performance.now();
  });
  document.addEventListener('pointerleave', () => { lamp.auto = true; });
  new ResizeObserver(resize).observe(hero);
  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(loop);
})();
