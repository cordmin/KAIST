// 사이트 공통 배경: 마우스가 자외선 램프가 되어 분자를 비추면
// 흡수(보라) → 열(빨강) → 형광(파랑) 순서로 반응한다. (OLED 1·2차시 내용과 같은 흐름)
(function () {
  const canvas = document.getElementById('home-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('view-home'); // 홈 지면의 정렬만 별도로 관리
  const R_LAMP = 150, ABSORB = .35, HEAT = .9, GLOW = 1.7, REST = 3.2; // 단계 끝 시각(초)
  let W = 0, H = 0, dpr = 1, mols = [], sparks = [];
  const lamp = { x: -999, y: -999, auto: true, t: 0 };
  let lastMove = 0;

  // 컴퓨터 화면: 머리글 위쪽은 사이드바 로고 위쪽, 카드 아래 끝은 사이드바 마지막 메뉴 상자 아래 끝에 맞춤
  function alignToSidebar() {
    const logo = document.querySelector('.site-home');
    const lastBox = document.getElementById('rb-pkg-box-quantum');
    const cards = document.querySelector('.home-journeys');
    if (!logo || !lastBox || !cards || window.innerWidth <= 768 || !hero.offsetParent) return;
    hero.style.setProperty('--home-top', Math.round(logo.getBoundingClientRect().top) + 'px');
    requestAnimationFrame(() => {
      // 작은 화면에서 메뉴가 사이드바 안에서 스크롤되면, 마지막 상자 대신 사이드바 아래 끝에 맞춤
      const bottom = Math.min(lastBox.getBoundingClientRect().bottom, document.querySelector('.sidebar').getBoundingClientRect().bottom);
      const h = bottom - cards.getBoundingClientRect().top;
      hero.style.setProperty('--home-cards-h', Math.max(280, Math.round(h)) + 'px');
    });
  }

  function resize() {
    alignToSidebar();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight; // 캔버스는 화면 전체(사이드바 뒤 포함)에 고정
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(0, Math.round(W * H / 26000 * .7) - 20);
    canvas.dataset.moleculeCount = String(n);
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

    // 분자 도형과 입자만 본문 안쪽에서 제외한다. 배경 빛은 자르지 않는다.
    ctx.save();
    const content = document.querySelector('.content-view.active');
    if (content) {
      const bounds = content.getBoundingClientRect();
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.rect(bounds.left, bounds.top, bounds.width, bounds.height);
      ctx.clip('evenodd');
    }

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
    ctx.restore();
    // 램프 중심: 마우스를 쓸 때는 사이트 공통 커서(빛나는 점)가 대신하므로, 스스로 돌아다닐 때만 그림
    if (lamp.auto || now - lastMove > 4000) {
      ctx.beginPath(); ctx.arc(lamp.x, lamp.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(214,196,255,.95)'; ctx.shadowColor = '#9b6bff'; ctx.shadowBlur = 18; ctx.fill(); ctx.shadowBlur = 0;
    }
  }

  let prev = performance.now();
  function loop(now) {
    const dt = Math.min(.05, (now - prev) / 1000); prev = now;
    draw(dt, now); // 메뉴를 전환해도 같은 분자 상태로 계속 그림
    requestAnimationFrame(loop);
  }
  // 모든 메뉴에서 화면 어디서든 마우스를 따라감
  window.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const r = canvas.getBoundingClientRect();
    lamp.x = e.clientX - r.left; lamp.y = e.clientY - r.top; lamp.auto = false; lastMove = performance.now();
  });
  document.addEventListener('pointerleave', () => { lamp.auto = true; });
  new ResizeObserver(resize).observe(hero);
  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(loop);
})();


// 첨부 효과의 관성 포인터·탄성 복귀·연결망을 기존 Canvas 구조에 적용한다.
(function () {
  const overlay = document.getElementById('site-intro');
  if (!overlay) return;
  if (!document.documentElement.classList.contains('intro-pending')) {
    overlay.remove();
    return;
  }
  const app = document.querySelector('.app-layout');
  const canvas = document.getElementById('intro-mesh');
  const ctx = canvas.getContext('2d');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointer = { x:-2000, y:-2000, targetX:-2000, targetY:-2000 };
  let frame = 0, nodes = [], width = 0, height = 0, reach = 160, leaving = false, prev = performance.now();
  app.inert = true;
  overlay.focus({ preventScroll:true });

  function resizeIntro() {
    if (!ctx) return;
    width = innerWidth; height = innerHeight;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(220, Math.max(75, Math.round(width * height / 14000)));
    const cols = Math.max(4, Math.round(Math.sqrt(count * width / height)));
    const rows = Math.max(4, Math.round(count / cols));
    reach = Math.max(width / cols, height / rows) * 1.55;
    nodes = Array.from({ length:cols * rows }, (_, i) => {
      const x = ((i % cols) + .5) * width / cols + (Math.random() - .5) * 28;
      const y = (Math.floor(i / cols) + .5) * height / rows + (Math.random() - .5) * 28;
      return { ox:x, oy:y, x, y, vx:0, vy:0, phase:Math.random()*Math.PI*2, size:1+Math.random()*1.6 };
    });
    if (reduceMotion) drawIntro(performance.now());
  }
  function drawIntro(now) {
    const step = Math.min(2, Math.max(.1, (now - prev) / (1000 / 60))); prev = now;
    pointer.x += (pointer.targetX - pointer.x) * (1 - Math.pow(.92, step));
    pointer.y += (pointer.targetY - pointer.y) * (1 - Math.pow(.92, step));
    ctx.clearRect(0,0,width,height);
    if (pointer.x > 0 && pointer.y > 0) {
      const glow = ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,350);
      glow.addColorStop(0,'rgba(255,255,255,.11)'); glow.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle = glow; ctx.fillRect(0,0,width,height);
    }
    for (const n of nodes) {
      const x = n.ox + Math.cos(now*.0005+n.phase)*18;
      const y = n.oy + Math.sin(now*.00045+n.phase)*18;
      n.vx = (n.vx+(x-n.x)*.05*step)*Math.pow(.85,step);
      n.vy = (n.vy+(y-n.y)*.05*step)*Math.pow(.85,step);
      n.x += n.vx*step; n.y += n.vy*step;
      const dx = pointer.x-n.x, dy = pointer.y-n.y, distance = Math.hypot(dx,dy);
      if (distance > 0 && distance < 180 && !reduceMotion) {
        const force = Math.pow(1-distance/180,2)*12*step;
        n.x -= dx/distance*force; n.y -= dy/distance*force;
      }
    }
    for (let i=0; i<nodes.length; i++) {
      const n = nodes[i];
      for (let j=i+1; j<nodes.length; j++) {
        const other = nodes[j], distance = Math.hypot(n.x-other.x,n.y-other.y);
        if (distance >= reach) continue;
        ctx.strokeStyle = `rgba(230,233,238,${(1-distance/reach)*.48})`;
        ctx.lineWidth = .75; ctx.beginPath(); ctx.moveTo(n.x,n.y); ctx.lineTo(other.x,other.y); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(235,237,240,.8)'; ctx.beginPath(); ctx.arc(n.x,n.y,n.size,0,Math.PI*2); ctx.fill();
    }
    if (!reduceMotion) frame = requestAnimationFrame(drawIntro);
  }
  function moveIntro(event) { pointer.targetX = event.clientX; pointer.targetY = event.clientY; }
  function leaveIntro() { pointer.targetX = pointer.targetY = -2000; }
  function keyIntro(event) {
    if (['Enter',' ','Escape'].includes(event.key)) { event.preventDefault(); beginEntry(); }
  }
  async function beginEntry() {
    if (leaving) return;
    leaving = true;
    overlay.classList.add('is-exiting');
    const duration = reduceMotion ? 120 : 1200;
    const fade = [{opacity:1},{opacity:0}];
    overlay.querySelector('.intro-partner-full').animate(fade,{duration:180,fill:'forwards'});
    const landings = [];
    const flights = [
      [overlay.querySelector('.intro-kaist-logo'),document.querySelector('.site-home .rebuild-kaist-logo-img')],
      [overlay.querySelector('.intro-collab'),document.querySelector('.site-home-collab')],
      [overlay.querySelector('.intro-partner-wordmark'),document.querySelector('.site-home-partner')]
    ].map(([sourceElement,targetElement]) => {
      const source = sourceElement.getBoundingClientRect();
      const destination = targetElement.getBoundingClientRect();
      // 작은 화면에서 홈 영역이 숨겨진 경우 메뉴 열기 위치로 축소한다.
      const target = destination.width ? destination : document.querySelector('.rebuild-mobile-toggle').getBoundingClientRect();
      const scale = Math.min(target.width/source.width,target.height/source.height);
      const x = target.left+(target.width-source.width*scale)/2-source.left;
      const y = target.top+(target.height-source.height*scale)/2-source.top;
      landings.push(targetElement.animate([{opacity:0},{opacity:1}],{
        delay:Math.max(0,duration-180),duration:Math.min(180,duration),fill:'forwards'
      }));
      const flight = sourceElement.animate([
        {transform:'translate(0,0) scale(1)'},
        {transform:reduceMotion?'none':`translate(${x}px,${y}px) scale(${scale})`}
      ],{duration,easing:'cubic-bezier(.65,0,.2,1)',fill:'forwards'});
      sourceElement.animate(fade,{
        delay:Math.max(0,duration-180),duration:Math.min(180,duration),fill:'forwards'
      });
      return flight.finished;
    });
    try { await Promise.allSettled(flights); }
    finally { finishIntro(); landings.forEach(animation => animation.cancel()); }
  }

  function finishIntro() {
    cancelAnimationFrame(frame);
    window.removeEventListener('resize',resizeIntro);
    overlay.removeEventListener('keydown',keyIntro);
    overlay.removeEventListener('pointermove',moveIntro);
    overlay.removeEventListener('pointerleave',leaveIntro);
    overlay.removeEventListener('click',beginEntry);
    app.inert = false;
    document.documentElement.classList.remove('intro-pending');
    overlay.remove();
    const focusTarget = innerWidth > 768 ? document.querySelector('.site-home') : document.querySelector('.rebuild-mobile-toggle');
    focusTarget.focus({preventScroll:true});
  }
  overlay.addEventListener('keydown',keyIntro);
  overlay.addEventListener('click',beginEntry);
  overlay.addEventListener('pointermove',moveIntro);
  overlay.addEventListener('pointerleave',leaveIntro);
  window.addEventListener('resize',resizeIntro);
  if (ctx) { resizeIntro(); if (!reduceMotion) frame = requestAnimationFrame(drawIntro); }
})();
