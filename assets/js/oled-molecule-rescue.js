const $ = id => document.getElementById(id);
const ui = Object.fromEntries(['scene','stage-card','scene-heading','analogy-labels','energy-overlay','analogy-panel','analogy-next-panel','molecule-panel','energy-panel','comparison-panel','start-quake','analogy-result','show-molecule','show-analogy','basic-mode','kaist-mode','inject','energy-grid','run-label','light-count','heat-count','basic-light','basic-heat','kaist-light','kaist-heat'].map(id => [id, $(id)]));
const cells = Array.from({ length: 100 }, () => {
  const cell = document.createElement('i');
  ui['energy-grid'].append(cell);
  return cell;
});

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
const braceMaterial = new THREE.MeshStandardMaterial({ color: 0x54e1ee, emissive: 0x139cae, emissiveIntensity: 1.3, metalness: .2, roughness: .25 });
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
const apex = new THREE.Vector3(0, 1.55, .18);
bond(new THREE.Vector3(-1.2, .83, .08), apex, .065, braceMaterial, braces);
bond(apex, new THREE.Vector3(1.2, .83, .08), .065, braceMaterial, braces);
bond(new THREE.Vector3(-1.2, -.83, .08), new THREE.Vector3(1.2, -.83, .08), .055, braceMaterial, braces);
const apexAtom = new THREE.Mesh(new THREE.SphereGeometry(.105, 12, 10), braceMaterial);
apexAtom.position.copy(apex);
braces.add(apexAtom);
molecule.add(braces);

const halo = new THREE.Mesh(new THREE.RingGeometry(1.95, 2.01, 64), new THREE.MeshBasicMaterial({ color: 0x36688d, side: THREE.DoubleSide, transparent: true, opacity: .5 }));
halo.rotation.x = -.75;
molecule.add(halo);
const lightning = new THREE.Group();
lightning.visible = false;
scene.add(lightning);
const electricCore = new THREE.MeshBasicMaterial({ color: 0xffd58a, blending: THREE.AdditiveBlending });
const electricGlow = new THREE.MeshBasicMaterial({ color: 0xffbd59, transparent: true, opacity: .18, depthWrite: false, blending: THREE.AdditiveBlending });
const electricSegments = Array.from({ length: 10 }, () => {
  const segments = [.03, .11].map((radius, index) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, 1, 6), index ? electricGlow : electricCore);
    lightning.add(mesh);
    return mesh;
  });
  return segments;
});
const boltPoints = Array.from({ length: 11 }, () => new THREE.Vector3());
const boltDirection = new THREE.Vector3();
const boltUnit = new THREE.Vector3();
function updateLightning(now) {
  boltPoints.forEach((point, index) => {
    const x = -4.6 + index * .4;
    const y = index === 0 || index === 10 ? 0 : (index % 2 ? .16 : -.16) + Math.sin(now * .025 + index * 3) * .08;
    point.set(x, y, .7);
  });
  electricSegments.forEach((segments, index) => {
    const a = boltPoints[index];
    const b = boltPoints[index + 1];
    boltDirection.subVectors(b, a);
    const length = boltDirection.length();
    boltUnit.copy(boltDirection).normalize();
    segments.forEach(mesh => {
      mesh.position.copy(a).add(b).multiplyScalar(.5);
      mesh.scale.y = length;
      mesh.quaternion.setFromUnitVectors(up, boltUnit);
    });
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
const plumes = [true, false].flatMap(isLight => Array.from({ length: 12 }, (_, index) => {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: smokeTexture, color: isLight ? 0x65d9ff : 0xff8f7b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  sprite.visible = false;
  scene.add(sprite);
  return { sprite, index, isLight };
}));

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
  ui['comparison-panel'].hidden = analogy;
  lightning.visible = false;
  plumes.forEach(({ sprite }) => { sprite.visible = false; });
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
  lightning.visible = false;
  plumes.forEach(({ sprite }) => { sprite.visible = false; });
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
  plumes.forEach(({ sprite }) => { sprite.visible = false; });
}
function finish() {
  running = false;
  lightning.visible = false;
  plumes.forEach(({ sprite }) => { sprite.visible = false; });
  const improved = mode === 'kaist';
  ui['basic-mode'].disabled = false;
  ui['kaist-mode'].disabled = false;
  ui.inject.disabled = false;
  ui['run-label'].textContent = improved ? '고정된 분자구조 결과' : '기본 분자구조 결과';
  ui['light-count'].textContent = improved ? '100%' : '25%';
  ui['heat-count'].textContent = improved ? '0%' : '75%';
  cells.forEach((cell, index) => cell.className = improved || index < 25 ? 'blue' : 'red');
  if (improved) {
    ui['kaist-light'].textContent = '100%';
    ui['kaist-heat'].textContent = '0%';
  } else {
    ui['basic-light'].textContent = '25%';
    ui['basic-heat'].textContent = '75%';
  }
}

function updateEnergyFlow(elapsed, now) {
  lightning.visible = elapsed < 1.95;
  if (lightning.visible) updateLightning(now);
  const outputTime = elapsed - 1.95;
  plumes.forEach(({ sprite, index, isLight }) => {
    const age = outputTime - index * .18;
    const visible = age >= 0 && age < 2.4 && (mode === 'kaist' ? isLight : !isLight || index < 4);
    sprite.visible = visible;
    if (!visible) return;
    const progress = age / 2.4;
    sprite.position.set(.2 + progress * 3.7, (isLight ? 2.3 : -3) * progress + Math.sin(index * 3 + progress * 12) * .12, .65);
    sprite.scale.set(1.5 + progress * 1.3, .55 + progress * .55, 1);
    sprite.material.opacity = .45 * Math.sin(Math.PI * progress);
  });
  const revealed = Math.min(100, Math.max(0, Math.floor(outputTime / 2.1 * 100)));
  const light = mode === 'kaist' ? revealed : Math.min(revealed, 25);
  cells.forEach((cell, index) => { cell.className = index < revealed ? (mode === 'kaist' || index < 25 ? 'blue' : 'red') : ''; });
  ui['light-count'].textContent = `${light}%`;
  ui['heat-count'].textContent = `${revealed - light}%`;
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
    redLamp.intensity = mode === 'basic' && elapsed > 1.8 ? 1.2 + Math.sin(time * 17) * .3 : 0;
    lamp.intensity = mode === 'kaist' && elapsed > 1.8 ? 1.4 : .8;
    if (elapsed > 4.85) finish();
  } else {
    redLamp.intensity = 0;
    lamp.intensity = .8;
  }
  orbit.update();
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
