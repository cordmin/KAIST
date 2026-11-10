// 가상실험실 공용 효과음 — 소리 파일 없이 브라우저(Web Audio)에서 직접 만듦.
// 이어지는 소리(층)는 매 화면 setLevels()로 크기를 정해서 화면 움직임·속도·일시정지와 저절로 맞음.
//   air    빛줄기·전기가 들어가는 쉬이~
//   heat   분자가 떨며 열이 새는 지글지글
//   glow   빛이 방사되는 동안 중후하게 부와아앙~ (크기에 따라 소리가 열리고 닫힘)
//   rumble 지진의 낮은 우르릉
//   spin   동전이 팽이처럼 도는 위이잉
// 한 번 나는 소리는 sfx.* 로 울림.

let ac = null, master = null, on = true;
const L = {};   // 층마다 { gain, set(level, opt) }

function noiseBuffer(sec = 1) {
  const b = ac.createBuffer(1, ac.sampleRate * sec, ac.sampleRate), d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}
function noise() { const n = ac.createBufferSource(); n.buffer = noiseBuffer(2); n.loop = true; n.start(); return n; }
function osc(type, f, detune = 0) { const o = ac.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = detune; o.start(); return o; }
function layer(input, max) {
  const g = ac.createGain(); g.gain.value = 0; input.connect(g).connect(master);
  return { g, max };
}
const ease = (p, v, tc) => p.setTargetAtTime(v, ac.currentTime, tc);

function build() {
  master = ac.createGain(); master.gain.value = on ? .6 : 0;
  // 큰 소리가 겹쳐도 찢어지지 않게
  const comp = ac.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
  master.connect(comp).connect(ac.destination);

  // air: 맑은 바람 소리
  const airF = ac.createBiquadFilter(); airF.type = 'bandpass'; airF.Q.value = 1.4; airF.frequency.value = 2600;
  noise().connect(airF);
  L.air = { ...layer(airF, .3), f: airF };

  // heat: 빠르게 출렁이는 잡음
  const heatF = ac.createBiquadFilter(); heatF.type = 'bandpass'; heatF.frequency.value = 700; heatF.Q.value = .8;
  const trem = ac.createGain(); trem.gain.value = .5;
  const lfo = osc('sine', 17), lfoAmt = ac.createGain(); lfoAmt.gain.value = .5; lfo.connect(lfoAmt).connect(trem.gain);
  noise().connect(heatF).connect(trem);
  L.heat = layer(trem, .22);

  // glow: 낮은 저음 + 살짝 어긋난 톱니파 화음(라·미·라) → 저역 필터가 열렸다 닫히며 '부와아앙'
  const glowF = ac.createBiquadFilter(); glowF.type = 'lowpass'; glowF.Q.value = 3; glowF.frequency.value = 150;
  const mix = ac.createGain(); mix.gain.value = .22;
  const sub = osc('sine', 55); const subG = ac.createGain(); subG.gain.value = 2.2; sub.connect(subG).connect(glowF);
  for (const [f, dt] of [[110, -7], [110, 7], [164.8, -4], [164.8, 5], [220, -3], [220, 6]]) osc('sawtooth', f, dt).connect(mix);
  mix.connect(glowF);
  // 천천히 일렁이는 맛
  const wob = osc('sine', .35), wobAmt = ac.createGain(); wobAmt.gain.value = 60; wob.connect(wobAmt).connect(glowF.frequency);
  L.glow = { ...layer(glowF, .34), f: glowF };

  // rumble: 낮은 우르릉
  const rumF = ac.createBiquadFilter(); rumF.type = 'lowpass'; rumF.frequency.value = 140;
  noise().connect(rumF);
  const rumO = osc('sine', 38), rumOG = ac.createGain(); rumOG.gain.value = .5; rumO.connect(rumOG).connect(rumF);
  L.rumble = layer(rumF, .9);

  // spin: 금속이 빠르게 도는 소리 (좁은 대역 잡음을 빠르게 출렁임)
  const spinF = ac.createBiquadFilter(); spinF.type = 'bandpass'; spinF.frequency.value = 1900; spinF.Q.value = 7;
  const spinT = ac.createGain(); spinT.gain.value = .6;
  const sl = osc('sine', 24), slAmt = ac.createGain(); slAmt.gain.value = .4; sl.connect(slAmt).connect(spinT.gain);
  noise().connect(spinF).connect(spinT);
  L.spin = layer(spinT, .5);

  document.addEventListener('visibilitychange', () => document.hidden ? ac.suspend() : ac.resume());
}

// 사용자가 처음 누를 때 소리 장치를 깨움 (브라우저 규칙)
export function audio() {
  if (!ac) { ac = new AudioContext(); build(); }
  else if (ac.state === 'suspended') ac.resume();
}

// 매 화면 호출: 넘기지 않은 층은 0으로. paused면 모두 조용히.
export function setLevels(lv = {}, paused = false) {
  if (!ac) return;
  for (const k in L) {
    const v = paused ? 0 : Math.max(0, Math.min(1, lv[k] || 0));
    ease(L[k].g.gain, v * L[k].max, k === 'glow' ? .12 : .05);
  }
  if (lv.airFreq) ease(L.air.f.frequency, lv.airFreq, .05);
  // 빛이 셀수록 필터가 열려 '부'→'와아앙'으로 밝아짐
  const g = paused ? 0 : (lv.glow || 0);
  ease(L.glow.f.frequency, 150 + Math.pow(g, 1.6) * 2400, .12);
}

function tone(f0, f1, dur, { type = 'sine', vol = .3, delay = 0, attack = .012 } = {}) {
  if (!ac) return;
  const t0 = ac.currentTime + delay, o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t0); o.frequency.exponentialRampToValueAtTime(f1, t0 + dur * .8);
  g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol, t0 + attack); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
  o.connect(g).connect(master); o.start(t0); o.stop(t0 + dur + .05);
}
function burst(dur, vol, { from = 2400, to = 300, type = 'bandpass' } = {}) {
  if (!ac) return;
  const t0 = ac.currentTime, n = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
  n.buffer = noiseBuffer(dur); f.type = type; f.Q.value = 1.2;
  f.frequency.setValueAtTime(from, t0); f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
  g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
  n.connect(f).connect(g).connect(master); n.start(t0); n.stop(t0 + dur);
}

export const sfx = {
  tick: () => tone(1500, 1400, .05, { vol: .08 }),                       // 고르기
  click: () => tone(2400, 1900, .05, { vol: .1 }),                        // 켜기·시작
  rise: () => { tone(260, 1040, .5, { vol: .26 }); tone(520, 2080, .45, { type: 'triangle', vol: .07, delay: .03 }); }, // 들뜸
  pass: () => { burst(.7, .35); tone(200, 120, .35, { type: 'triangle', vol: .12 }); },  // 흡수 안 되고 지나감
  coin: () => { tone(2650, 2600, .35, { vol: .09 }); tone(3980, 3900, .22, { vol: .05 }); burst(.06, .18, { from: 1400, to: 300, type: 'lowpass' }); }, // 동전이 '탁'
  tap: () => tone(1900, 1800, .03, { vol: .035 }),                         // 빠른 측정 '다다닥'
  thud: (k = 1) => { tone(110, 45, .25, { vol: .35 * k }); burst(.12, .25 * k, { from: 900, to: 120, type: 'lowpass' }); } // 공이 바닥에 쿵
};

// 소리 켬/끔 단추
export function soundButton(btn) {
  const SPEAKER = '<svg viewBox="0 0 12 12"><path d="M1 4h2.5L7 1v10L3.5 8H1z"/><path d="M8.6 3.6a3.4 3.4 0 0 1 0 4.8M10 2.2a5.4 5.4 0 0 1 0 7.6" fill="none" stroke="currentColor" stroke-width="1.1"/></svg>';
  const MUTED = '<svg viewBox="0 0 12 12"><path d="M1 4h2.5L7 1v10L3.5 8H1z"/><path d="M8.5 4l3 4m0-4l-3 4" stroke="currentColor" stroke-width="1.1"/></svg>';
  const paint = () => { btn.innerHTML = on ? SPEAKER + '소리 켬' : MUTED + '소리 끔'; btn.setAttribute('aria-pressed', String(on)); };
  paint();
  btn.addEventListener('click', () => {
    audio(); on = !on; paint();
    ease(master.gain, on ? .6 : 0, .03);
  });
}
