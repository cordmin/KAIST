const $ = id => document.getElementById(id);
const ui = Object.fromEntries(['scene','stage-card','scene-heading','analogy-labels','energy-overlay','analogy-panel','analogy-next-panel','molecule-panel','energy-panel','start-quake','analogy-result','show-molecule','show-analogy','basic-mode','kaist-mode','inject','energy-grid','run-label','light-count','heat-count'].map(id => [id, $(id)]));
const cells = Array.from({ length: 100 }, () => {
  const cell = document.createElement('i');
  ui['energy-grid'].append(cell);
  return cell;
});
const sourceLabel = ui['energy-overlay'].querySelector('.source-label');
const supplyScreenPosition = new THREE.Vector3();

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: ui.scene, antialias: true, alpha: true });
} catch (error) {
  ui['analogy-result'].textContent = '이 기기에서는 3D 화면을 열 수 없습니다. 다른 브라우저에서 다시 실행하세요.';
  ui.inject.disabled = true;
  throw error;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(44, 1, .1, 100);
camera.position.set(0, 1.5, 8.5);
const orbit = new THREE.OrbitControls(camera, ui.scene);
orbit.enableDamping = true;
orbit.enablePan = false;
orbit.minDistance = 5.4;
orbit.maxDistance = 12;
orbit.minPolarAngle = .5;
orbit.maxPolarAngle = 2.35;
orbit.target.set(0, 0, 0);
camera.position.set(0, 1.1, 6.8);
scene.add(new THREE.AmbientLight(0xbad7ff, .45));
const lamp = new THREE.PointLight(0x8ad9ff, .8, 20);
lamp.position.set(1, 3, 4);
scene.add(lamp);
const redLamp = new THREE.PointLight(0xff615e, 0, 10);
redLamp.position.set(0, -2, 2);
scene.add(redLamp);
const buildings = createQuakeBuildings();
scene.add(buildings.group);
function buildingDistance() {
  const { width, height } = ui.scene.getBoundingClientRect();
  const scale = width < 620 ? .8 : 1;
  const halfAngle = THREE.MathUtils.degToRad(camera.fov / 2);
  return Math.max(6.8, (7.9 * scale * height) / (2 * Math.tan(halfAngle) * width) * 1.07);
}

const sphere = new THREE.SphereGeometry(.17, 16, 12);
const atomMaterial = new THREE.MeshStandardMaterial({ color: 0xdce9f7, metalness: .28, roughness: .3, emissive: 0x173858 });
const bondMaterial = new THREE.MeshStandardMaterial({ color: 0x84a6c5, metalness: .35, roughness: .32 });
const braceMaterial = new THREE.MeshStandardMaterial({ color: 0xef5b58, emissive: 0x7b1719, emissiveIntensity: .45, metalness: .15, roughness: .38 });
const molecule = new THREE.Group();
molecule.visible = false;
scene.add(molecule);

function bond(a, b, radius, material, parent) {
  const direction = new THREE.Vector3().subVectors(b, a);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 10), material);
  mesh.position.copy(a).add(b).multiplyScalar(.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  parent.add(mesh);
  return mesh;
}
function ring(x, tint) {
  const group = new THREE.Group();
  group.position.x = x;
  const positions = Array.from({ length: 6 }, (_, i) => {
    const angle = i * Math.PI / 3;
    return new THREE.Vector3(.83 * Math.cos(angle), .83 * Math.sin(angle), i % 2 ? .07 : -.07);
  });
  group.userData.atomPositions = positions;
  positions.forEach((point, i) => {
    const atom = new THREE.Mesh(sphere, atomMaterial.clone());
    atom.material.color.setHex(tint);
    atom.position.copy(point);
    group.add(atom);
    bond(point, positions[(i + 1) % 6], .075, bondMaterial, group);
  });
  molecule.add(group);
  return group;
}
const left = ring(-1.2, 0xc7e2f2);
const right = ring(1.2, 0xc7e2f2);
const centerBond = bond(new THREE.Vector3(-.37, 0, -.07), new THREE.Vector3(.37, 0, .07), .095, bondMaterial, molecule);
const leftJoin = new THREE.Vector3(.83, 0, -.07);
const rightJoin = new THREE.Vector3(-.83, 0, .07);
const joinA = new THREE.Vector3();
const joinB = new THREE.Vector3();
const joinDirection = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);
function connectRings() {
  joinA.copy(leftJoin).applyQuaternion(left.quaternion).add(left.position);
  joinB.copy(rightJoin).applyQuaternion(right.quaternion).add(right.position);
  joinDirection.subVectors(joinB, joinA);
  centerBond.position.copy(joinA).add(joinB).multiplyScalar(.5);
  centerBond.scale.y = joinDirection.length() / centerBond.geometry.parameters.height;
  centerBond.quaternion.setFromUnitVectors(up, joinDirection.normalize());
}
const braces = new THREE.Group();
// 분자 고정의 개념 모형이며 특정 물질의 실제 화학 구조를 재현한 것은 아니다.
[-1, 1].forEach(side => {
  const leftAtom = left.userData.atomPositions[side > 0 ? 1 : 5].clone().add(left.position);
  const rightAtom = right.userData.atomPositions[side > 0 ? 2 : 4].clone().add(right.position);
  const bridge = [leftAtom, new THREE.Vector3(-.38, side * 1.16, .07), new THREE.Vector3(.38, side * 1.16, -.07), rightAtom];
  bridge.slice(1).forEach((point, index) => bond(bridge[index], point, .065, braceMaterial, braces));
  bridge.slice(1, -1).forEach(point => {
    const atom = new THREE.Mesh(sphere, braceMaterial);
    atom.position.copy(point);
    braces.add(atom);
  });
});
molecule.add(braces);

const lightning = new THREE.Group();
lightning.visible = false;
molecule.add(lightning);
const electricCore = new THREE.MeshBasicMaterial({ color: 0xffd58a, blending: THREE.AdditiveBlending });
const chargeCanvas = document.createElement('canvas');
chargeCanvas.width = chargeCanvas.height = 64;
const chargeContext = chargeCanvas.getContext('2d');
chargeContext.fillStyle = '#172438';
chargeContext.fillRect(12, 27, 40, 10);
const chargeMaterial = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(chargeCanvas), transparent: true, depthTest: false, depthWrite: false });
const electronTravelTime = 1.05 * 1.5;
const supplyDuration = 1.95 * 1.5;
const electronInterval = .18;
// 화면에 필요한 알갱이를 재사용해 공급 중 계속 흐르게 한다.
const electrons = Array.from({ length: Math.ceil(electronTravelTime / electronInterval) }, () => {
  const group = new THREE.Group();
  group.add(new THREE.Mesh(new THREE.SphereGeometry(.11, 16, 12), electricCore));
  const charge = new THREE.Sprite(chargeMaterial);
  charge.scale.setScalar(.2);
  // Sprite는 카메라를 향하며, 깊이 검사 없이 공 중심에 기호를 표시한다.
  charge.renderOrder = 10;
  group.add(charge);
  lightning.add(group);
  return group;
});
// 공급 경로 전체를 잇는 번개가 끊기지 않고 분자 쪽으로 일렁인다.
const pathBolts = Array.from({ length: 2 }, () => {
  const group = new THREE.Group();
  const core = new THREE.MeshBasicMaterial({ color: 0xffefb0, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const glow = new THREE.MeshBasicMaterial({ color: 0xffb72e, transparent: true, opacity: .22, depthWrite: false, blending: THREE.AdditiveBlending });
  const points = Array.from({ length: 28 }, () => new THREE.Vector3());
  const segments = Array.from({ length: points.length - 1 }, () => [.018, .065].map((radius, i) => bond(new THREE.Vector3(), new THREE.Vector3(0, .1, 0), radius, i ? glow : core, group)));
  lightning.add(group);
  return { group, points, segments, core, glow };
});
const pathDirection = new THREE.Vector3();
function updateLightning(elapsed, now) {
  electrons.forEach((group, index) => {
    const progress = (elapsed / electronTravelTime + index / electrons.length) % 1;
    group.visible = true;
    group.position.set(-3.6 * (1 - progress), (1 - progress) * (index % 2 ? -.12 : .12), 0);
  });
  pathBolts.forEach(({ group, points, segments, core, glow }, index) => {
    group.visible = true;
    for (let i = 0; i < points.length; i++) {
      const x = -3.6 + i / (points.length - 1) * 3.6;
      const zigzag = i === 0 || i === points.length - 1 ? 0 : (Math.sin(i * 2.3 - now * .045 + index) + .4 * Math.sin(i * 5.1 - now * .07)) * .065;
      const distanceToCenter = -x / 3.6;
      points[i].set(x, ((index % 2 ? -.28 : .28) + zigzag) * distanceToCenter, 0);
    }
    segments.forEach((meshes, i) => {
      pathDirection.subVectors(points[i + 1], points[i]);
      const length = pathDirection.length();
      meshes.forEach(mesh => {
        mesh.position.copy(points[i]).add(points[i + 1]).multiplyScalar(.5);
        mesh.scale.y = length / .1;
        if (length > 0) mesh.quaternion.setFromUnitVectors(up, pathDirection.normalize());
      });
    });
    core.opacity = .7 + .3 * Math.abs(Math.sin(now * .032 + index * 2));
    glow.opacity = core.opacity * .25;
  });
}

const smokeCanvas = document.createElement('canvas');
smokeCanvas.width = smokeCanvas.height = 128;
const smokeContext = smokeCanvas.getContext('2d');
const smokeGradient = smokeContext.createRadialGradient(64, 64, 4, 64, 64, 64);
smokeGradient.addColorStop(0, 'rgba(255,255,255,.55)');
smokeGradient.addColorStop(.45, 'rgba(255,255,255,.22)');
smokeGradient.addColorStop(1, 'rgba(255,255,255,0)');
smokeContext.fillStyle = smokeGradient;
smokeContext.fillRect(0, 0, 128, 128);
const smokeTexture = new THREE.CanvasTexture(smokeCanvas);
const heatDuration = 2.9;
const lightDuration = 2.1;
// 끊어진 입자 대신 연속적인 가는 흐름을 위로 일렁이게 한다.
const heatMaterial = new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, side: THREE.DoubleSide,
  uniforms: { time: { value: 0 }, opacity: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    varying vec2 vUv; uniform float time; uniform float opacity;
    void main() {
      float y = vUv.y;
      float bend = sin(y * 11.0 - time * 3.0) * .018 + sin(y * 19.0 - time * 4.1) * .009;
      float streak = pow(max(0.0, cos((vUv.x + bend) * 43.9823)), 14.0);
      float edges = smoothstep(0.0, .18, vUv.x) * (1.0 - smoothstep(.82, 1.0, vUv.x));
      float fade = smoothstep(0.0, .13, y) * pow(1.0 - y, 1.6);
      float shimmer = .65 + .35 * sin(y * 8.0 - time * 4.0);
      gl_FragColor = vec4(1.0, .16 + y * .1, .1, streak * edges * fade * shimmer * opacity);
    }`
});
const heatHaze = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 3.3), heatMaterial);
heatHaze.visible = false;
scene.add(heatHaze);
// 2차시와 동일한 중심 섬광과 확장 발광으로 빛을 열 연무와 구별한다.
const emission = new THREE.Group();
scene.add(emission);
const emissionWaves = Array.from({ length: 3 }, (_, index) => {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTexture, color: index ? 0x38bdf8 : 0xbcecff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
  emission.add(sprite);
  return sprite;
});
const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTexture, color: 0xbcecff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
emission.add(flash);
const burstLight = new THREE.PointLight(0x86dfff, 0, 8);
emission.add(burstLight);
function clearEnergyEffects() {
  lightning.visible = emission.visible = false;
  burstLight.intensity = 0;
  heatHaze.visible = false;
}

let mode = 'basic';
let view = 'analogy';
let running = false;
let started = 0;
let quakeStarted = 0;

function showView(next) {
  if (running) return;
  view = next;
  const analogy = next === 'analogy';
  buildings.group.visible = analogy;
  molecule.visible = !analogy;
  orbit.minAzimuthAngle = analogy ? -Math.PI / 3 : -Infinity;
  orbit.maxAzimuthAngle = analogy ? Math.PI / 3 : Infinity;
  ui['stage-card'].classList.toggle('analogy-view', analogy);
  ui['analogy-labels'].hidden = !analogy;
  ui['energy-overlay'].hidden = analogy;
  ui['analogy-panel'].hidden = !analogy;
  ui['analogy-next-panel'].hidden = !analogy;
  ui['molecule-panel'].hidden = analogy;
  ui['energy-panel'].hidden = analogy;
  clearEnergyEffects();
  camera.position.set(0, analogy ? 1.1 : 1.5, analogy ? buildingDistance() : 8.5);
  orbit.target.set(0, 0, 0);
  orbit.update();
  if (analogy) {
    ui['scene-heading'].textContent = '건물 구조를 KAIST 분자연구에 비유하기';
  } else {
    selectMode(mode);
  }
}

function startQuake() {
  if (quakeStarted) return;
  quakeStarted = performance.now();
  ui['start-quake'].disabled = true;
}

function selectMode(next) {
  if (running) return;
  mode = next;
  ui['basic-mode'].classList.toggle('active', next === 'basic');
  ui['kaist-mode'].classList.toggle('active', next === 'kaist');
  ui['basic-mode'].setAttribute('aria-pressed', String(next === 'basic'));
  ui['kaist-mode'].setAttribute('aria-pressed', String(next === 'kaist'));
  braces.visible = next === 'kaist';
  ui['scene-heading'].textContent = next === 'basic' ? '기본 분자구조' : '고정된 분자구조';
  ui['run-label'].textContent = '실험 전';
  ui['light-count'].textContent = '—';
  ui['heat-count'].textContent = '—';
  cells.forEach(cell => cell.className = '');
  clearEnergyEffects();
}

function inject() {
  if (running) return;
  running = true;
  started = performance.now();
  ui.inject.disabled = true;
  ui['basic-mode'].disabled = true;
  ui['kaist-mode'].disabled = true;
  ui['run-label'].textContent = '전기에너지 이동 중';
  ui['light-count'].textContent = '0%';
  ui['heat-count'].textContent = '0%';
  cells.forEach(cell => cell.className = '');
  clearEnergyEffects();
}
function finish() {
  running = false;
  clearEnergyEffects();
  const improved = mode === 'kaist';
  ui['basic-mode'].disabled = false;
  ui['kaist-mode'].disabled = false;
  ui.inject.disabled = false;
  ui['run-label'].textContent = improved ? '고정된 분자구조 결과' : '기본 분자구조 결과';
  ui['light-count'].textContent = improved ? '100%' : '25%';
  ui['heat-count'].textContent = improved ? '0%' : '75%';
  cells.forEach((cell, index) => cell.className = improved || index < 25 ? 'blue' : 'red');

}

function updateEnergyFlow(elapsed, now) {
  lightning.visible = elapsed < supplyDuration;
  if (lightning.visible) updateLightning(elapsed, now);
  const outputTime = elapsed - supplyDuration;
  const lightTime = (outputTime - (mode === 'basic' ? heatDuration : 0)) / (mode === 'kaist' ? 2 : 1);
  heatHaze.visible = mode === 'basic' && outputTime >= 0 && outputTime < heatDuration;
  ui['run-label'].textContent = outputTime < 0 ? '전기에너지 이동 중' : heatHaze.visible ? '열에너지 방출 중' : '빛에너지 방출 중';
  heatHaze.quaternion.copy(camera.quaternion);
  heatHaze.position.copy(molecule.position);
  heatHaze.position.y += 1.05;
  heatMaterial.uniforms.time.value = outputTime;
  heatMaterial.uniforms.opacity.value = .75 * Math.sin(Math.PI * THREE.MathUtils.clamp(outputTime / heatDuration, 0, 1));
  emission.visible = lightTime >= 0 && lightTime < lightDuration;
  const brightness = mode === 'kaist' ? 1 : .5;
  emissionWaves.forEach((sprite, index) => {
    const delay = index * .14;
    const age = (lightTime - delay) / (lightDuration - delay);
    const progress = THREE.MathUtils.clamp(age, 0, 1);
    sprite.scale.setScalar(1.6 + progress * 8);
    sprite.material.opacity = age > 0 && age < 1 ? Math.sin(progress * Math.PI) * .45 * brightness : 0;
  });
  const burst = THREE.MathUtils.clamp(lightTime / lightDuration, 0, 1);
  flash.scale.setScalar(2 + burst * 7);
  const softGlow = Math.sin(burst * Math.PI);
  flash.material.opacity = emission.visible ? (.25 * Math.pow(1 - burst, 5) + .16 * softGlow) * brightness : 0;
  burstLight.intensity = emission.visible ? (Math.pow(1 - burst, 3) + .65 * softGlow) * brightness : 0;
  const light = Math.floor(THREE.MathUtils.clamp(lightTime / lightDuration, 0, 1) * (mode === 'kaist' ? 100 : 25));
  const heat = mode === 'basic' ? Math.floor(THREE.MathUtils.clamp(outputTime / heatDuration, 0, 1) * 75) : 0;
  cells.forEach((cell, index) => { cell.className = index < light ? 'blue' : index >= 25 && index < 25 + heat ? 'red' : ''; });
  ui['light-count'].textContent = `${light}%`;
  ui['heat-count'].textContent = `${heat}%`;
}

const resize = () => {
  const { width, height } = ui.scene.getBoundingClientRect();
  if (!width || !height) return;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  buildings.group.scale.setScalar(width < 620 ? .8 : 1);
  if (view === 'analogy') camera.position.z = buildingDistance();
  camera.updateProjectionMatrix();
};
new ResizeObserver(resize).observe(ui.scene);
resize();

function updateSourceLabel() {
  molecule.updateWorldMatrix(true, false);
  camera.updateMatrixWorld();
  supplyScreenPosition.set(-3.6, 0, 0);
  molecule.localToWorld(supplyScreenPosition).project(camera);
  const { x, y, z } = supplyScreenPosition;
  sourceLabel.hidden = z < -1 || z > 1 || Math.abs(x) > 1 || Math.abs(y) > 1;
  if (sourceLabel.hidden) return;
  const overlay = ui['energy-overlay'];
  const width = sourceLabel.offsetWidth;
  const height = sourceLabel.offsetHeight;
  const left = THREE.MathUtils.clamp((x + 1) * overlay.clientWidth / 2 - width / 2, 8, overlay.clientWidth - width - 8);
  const top = THREE.MathUtils.clamp((1 - y) * overlay.clientHeight / 2 - height - 12, 8, overlay.clientHeight - height - 8);
  sourceLabel.style.left = `${left}px`;
  sourceLabel.style.top = `${top}px`;
}

function animate(now) {
  requestAnimationFrame(animate);
  const time = now * .001;
  if (view === 'analogy') {
    if (quakeStarted) {
      const t = (now - quakeStarted) / 1000;
      const groundMotion = Math.sin(t * 17) * .09 * Math.min(t * 3, 1) * Math.max(0, Math.min((3.2 - t) * 3, 1));
      buildings.platform.position.x = groundMotion;
      buildings.sway(0, Math.sin(t * 13) * .55 * Math.exp(-t * .22));
      buildings.sway(1, Math.sin(t * 13) * .07 * Math.exp(-t * .35));
      if (t > 3.2) {
        quakeStarted = 0;
        buildings.platform.position.x = 0;
        buildings.sway(0, 0);
        buildings.sway(1, 0);
        ui['start-quake'].disabled = false;
      }
    }
    renderer.render(scene, camera);
    return;
  }
  const shake = mode === 'basic' ? .34 : .025;
  right.rotation.y = Math.sin(time * 8) * shake;
  left.rotation.y = Math.sin(time * 7 + 1) * shake * .55;
  connectRings();
  molecule.position.y = Math.sin(time * (mode === 'basic' ? 11 : 3)) * (mode === 'basic' ? .14 : .012);
  molecule.rotation.y = Math.sin(time * .4) * .08;
  if (running) {
    const elapsed = (now - started) / 1000;
    updateEnergyFlow(elapsed, now);
    redLamp.intensity = heatHaze.visible ? 1.2 + Math.sin(time * 17) * .3 : 0;
    lamp.intensity = mode === 'kaist' && elapsed > supplyDuration ? 1.4 : .8;
    if (elapsed > supplyDuration + (mode === 'basic' ? heatDuration + 2.9 : 2.9 * 2)) finish();
  } else {
    redLamp.intensity = 0;
    lamp.intensity = .8;
  }
  orbit.update();
  updateSourceLabel();
  renderer.render(scene, camera);
}

ui['basic-mode'].addEventListener('click', () => selectMode('basic'));
ui['kaist-mode'].addEventListener('click', () => selectMode('kaist'));
ui['start-quake'].addEventListener('click', startQuake);
ui['show-molecule'].addEventListener('click', () => showView('molecule'));
ui['show-analogy'].addEventListener('click', () => showView('analogy'));
ui.inject.addEventListener('click', inject);
selectMode('basic');
showView('analogy');
requestAnimationFrame(animate);
