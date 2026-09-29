import * as THREE from 'three';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.160.1/examples/jsm/controls/OrbitControls.js';
import { createQuakeBuildings } from './oled-quake-buildings.js';

const $ = id => document.getElementById(id);
const ui = Object.fromEntries(['scene','stage-card','scene-heading','scene-hint','stage-caption','analogy-labels','energy-overlay','analogy-panel','molecule-panel','energy-panel','comparison-panel','start-quake','analogy-result','show-molecule','show-analogy','basic-mode','kaist-mode','mode-explain','inject','instruction','energy-grid','run-label','light-count','heat-count','basic-light','basic-heat','kaist-light','kaist-heat','takeaway','fullscreen'].map(id => [id, $(id)]));
const cells = Array.from({ length: 100 }, () => {
  const cell = document.createElement('i');
  ui['energy-grid'].append(cell);
  return cell;
});

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: ui.scene, antialias: true, alpha: true });
} catch (error) {
  ui['stage-caption'].textContent = '이 기기에서는 3D 화면을 열 수 없습니다. 다른 브라우저에서 다시 실행하세요.';
  ui.inject.disabled = true;
  throw error;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(44, 1, .1, 100);
camera.position.set(0, 1.5, 8.5);
const orbit = new OrbitControls(camera, ui.scene);
orbit.enableDamping = true;
orbit.enablePan = false;
orbit.minDistance = 5.4;
orbit.maxDistance = 12;
orbit.minPolarAngle = .5;
orbit.maxPolarAngle = 2.35;
orbit.target.set(0, 0, 0);
orbit.enabled = false;
camera.position.set(0, 1.1, 6.8);
scene.add(new THREE.AmbientLight(0xbad7ff, 2.2));
const lamp = new THREE.PointLight(0x8ad9ff, 60, 20);
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
const packetSphere = new THREE.SphereGeometry(.055, 8, 6);
const atomMaterial = new THREE.MeshStandardMaterial({ color: 0xdce9f7, metalness: .28, roughness: .3, emissive: 0x173858 });
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x67d9ff });
const redMaterial = new THREE.MeshBasicMaterial({ color: 0xff766d });
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
bond(new THREE.Vector3(-.37, 0, -.07), new THREE.Vector3(.37, 0, -.07), .095, bondMaterial, molecule);
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
const packets = Array.from({ length: 100 }, (_, index) => {
  const mesh = new THREE.Mesh(packetSphere, blueMaterial);
  mesh.visible = false;
  scene.add(mesh);
  const random = n => (Math.sin((index + 1) * n * 127.1) * 43758.5453) % 1;
  return { mesh, index, offset: Math.abs(random(1)), spread: random(2), depth: random(3) };
});

let mode = 'basic';
let view = 'analogy';
let running = false;
let started = 0;
let completedBasic = false;
let phase = '';
let quakeStarted = 0;
let analogyDone = false;

function showView(next) {
  if (running) return;
  view = next;
  const analogy = next === 'analogy';
  buildings.group.visible = analogy;
  molecule.visible = !analogy;
  orbit.enabled = !analogy;
  ui['stage-card'].classList.toggle('analogy-view', analogy);
  ui['analogy-labels'].hidden = !analogy;
  ui['energy-overlay'].hidden = analogy;
  ui['analogy-panel'].hidden = !analogy;
  ui['molecule-panel'].hidden = analogy;
  ui['energy-panel'].hidden = analogy;
  ui['comparison-panel'].hidden = analogy;
  packets.forEach(packet => packet.mesh.visible = false);
  camera.position.set(0, analogy ? 1.1 : 1.5, analogy ? buildingDistance() : 8.5);
  orbit.target.set(0, 0, 0);
  orbit.update();
  if (analogy) {
    ui['scene-heading'].textContent = '같은 지진을 만나면 어떻게 될까요?';
    ui['scene-hint'].textContent = '두 건물은 같은 진동대 위에 있습니다';
    ui['stage-caption'].textContent = analogyDone ? '대각선 연결을 더한 오른쪽 건물이 덜 흔들렸습니다.' : '오른쪽 건물의 하늘색 대각선 연결을 찾아보세요.';
  } else {
    selectMode(mode);
    ui['scene-hint'].textContent = '드래그: 회전 · 두 손가락: 확대';
    if (!completedBasic) {
      ui.inject.textContent = '전기 100 넣기';
      ui.instruction.textContent = '기본 상태부터 실행하세요.';
    }
  }
}

function startQuake() {
  if (quakeStarted) return;
  quakeStarted = performance.now();
  ui['start-quake'].disabled = true;
  ui['analogy-result'].textContent = '같은 진동대가 두 건물을 흔드는 중…';
  ui['stage-caption'].textContent = '바닥은 함께 움직입니다. 건물의 흔들림을 비교하세요.';
}

function selectMode(next) {
  if (running || (next === 'kaist' && !completedBasic)) return;
  mode = next;
  ui['basic-mode'].classList.toggle('active', next === 'basic');
  ui['kaist-mode'].classList.toggle('active', next === 'kaist');
  ui['basic-mode'].setAttribute('aria-pressed', String(next === 'basic'));
  ui['kaist-mode'].setAttribute('aria-pressed', String(next === 'kaist'));
  braces.visible = next === 'kaist';
  ui['scene-heading'].textContent = next === 'basic' ? '기본 상태의 분자' : '움직임을 조절한 분자';
  ui['mode-explain'].textContent = next === 'basic' ? '분자가 크게 흔들릴 때를 관찰합니다.' : '분자 뼈대의 큰 흔들림을 줄이고, 빛으로 바뀌는 속도를 높입니다.';
  ui['stage-caption'].textContent = next === 'basic' ? '분자 뼈대가 크게 흔들립니다. 전기를 넣어 결과를 확인하세요.' : '하늘색 연결을 보세요. 새 전기를 넣어 다시 비교하세요.';
  ui.inject.textContent = '새 전기 100 넣기';
  ui.instruction.textContent = next === 'basic' ? '기본 상태에서 전기를 다시 넣을 수 있습니다.' : '버튼을 눌러 새 전기 100을 넣으세요.';
  ui['run-label'].textContent = '실험 전';
  ui['light-count'].textContent = '—';
  ui['heat-count'].textContent = '—';
  cells.forEach(cell => cell.className = '');
  packets.forEach(packet => packet.mesh.visible = false);
}

function setPhase(name, message) {
  if (phase !== name) {
    phase = name;
    ui['stage-caption'].textContent = message;
  }
}
function inject() {
  if (running) return;
  running = true;
  phase = '';
  started = performance.now();
  ui.inject.disabled = true;
  ui['basic-mode'].disabled = true;
  ui['kaist-mode'].disabled = true;
  ui['run-label'].textContent = '전기 100 이동 중';
  ui['light-count'].textContent = '0%';
  ui['heat-count'].textContent = '0%';
  ui.instruction.textContent = '같은 양의 전기가 분자에 도착합니다.';
  cells.forEach(cell => cell.className = '');
  packets.forEach(({ mesh, index }) => {
    mesh.material = mode === 'kaist' || index < 25 ? blueMaterial : redMaterial;
    mesh.visible = false;
  });
}
function finish() {
  running = false;
  packets.forEach(packet => packet.mesh.visible = false);
  const improved = mode === 'kaist';
  if (!improved) completedBasic = true;
  ui['basic-mode'].disabled = false;
  ui['kaist-mode'].disabled = !completedBasic;
  ui.inject.disabled = false;
  ui['run-label'].textContent = improved ? '움직임 조절 결과' : '기본 상태 결과';
  ui['light-count'].textContent = improved ? '100%' : '25%';
  ui['heat-count'].textContent = improved ? '0%' : '75%';
  cells.forEach((cell, index) => cell.className = improved || index < 25 ? 'blue' : 'red');
  ui['stage-caption'].textContent = improved ? '큰 흔들림을 줄여 열로 빠지기 전에 빛으로 바뀌었습니다.' : '빛을 내지 못한 에너지가 분자를 흔들며 열로 빠져나갑니다.';
  if (improved) {
    ui['kaist-light'].textContent = '100%';
    ui['kaist-heat'].textContent = '0%';
    ui['takeaway'].textContent = '비교 결과: 같은 전기 100을 넣어도 분자의 움직임과 전환 속도에 따라 빛과 열의 비율이 달라집니다.';
    ui.instruction.textContent = '두 결과를 활동지에 기록하고, 차이가 생긴 까닭을 설명해 보세요.';
  } else {
    ui['basic-light'].textContent = '25%';
    ui['basic-heat'].textContent = '75%';
    ui['takeaway'].textContent = '다음 실험: 움직임 조절을 선택하고 새 전기 100을 넣어 보세요.';
    ui.instruction.textContent = '이제 움직임 조절을 선택해 다시 실험하세요.';
  }
}

function updatePackets(elapsed) {
  let light = 0;
  let heat = 0;
  packets.forEach(({ mesh, index, offset, spread, depth }) => {
    const t = elapsed - index * .006;
    if (t < 0 || t > 4.25) { mesh.visible = false; return; }
    mesh.visible = true;
    const cx = (spread - .5) * .75;
    const cy = (offset - .5) * .8;
    const cz = depth * .55;
    const isLight = mode === 'kaist' || index < 25;
    if (t < 1.45) {
      const p = t / 1.45;
      mesh.position.set(-4.7 + (4.7 + cx) * p, cy + Math.sin(p * 10 + index) * .06, cz);
    } else if (t < 1.95) {
      mesh.position.set(cx, cy, cz);
    } else {
      const p = Math.min((t - 1.95) / 2.1, 1);
      mesh.position.set(cx + (isLight ? 4.9 : 3.4) * p, cy + (isLight ? 2.3 : -3.9) * p, cz + spread * p);
      cells[index].className = isLight ? 'blue' : 'red';
    }
    if (t >= 1.95) isLight ? light++ : heat++;
  });
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

function animate(now) {
  requestAnimationFrame(animate);
  const time = now * .001;
  if (view === 'analogy') {
    if (quakeStarted) {
      const t = (now - quakeStarted) / 1000;
      const groundMotion = Math.sin(t * 17) * .09 * Math.min(t * 3, 1) * Math.max(0, Math.min((3.2 - t) * 3, 1));
      buildings.platform.position.x = groundMotion;
      buildings.frames[0].rotation.z = Math.sin(t * 13) * .16 * Math.exp(-t * .22);
      buildings.frames[1].rotation.z = Math.sin(t * 13) * .035 * Math.exp(-t * .35);
      if (t > 3.2) {
        quakeStarted = 0;
        buildings.platform.position.x = 0;
        buildings.frames.forEach(frame => frame.rotation.z = 0);
        analogyDone = true;
        ui['start-quake'].disabled = false;
        ui['show-molecule'].disabled = false;
        ui['analogy-result'].textContent = '같은 지진에도 대각선 연결을 더한 건물이 덜 흔들렸습니다.';
        ui['stage-caption'].textContent = '건물 뼈대의 연결처럼 분자의 연결도 움직임에 영향을 줍니다.';
      }
    }
    renderer.render(scene, camera);
    return;
  }
  const shake = mode === 'basic' ? .34 : .025;
  right.rotation.y = Math.sin(time * 8) * shake;
  left.rotation.y = Math.sin(time * 7 + 1) * shake * .55;
  molecule.position.y = Math.sin(time * (mode === 'basic' ? 11 : 3)) * (mode === 'basic' ? .14 : .012);
  molecule.rotation.y = Math.sin(time * .4) * .08;
  if (running) {
    const elapsed = (now - started) / 1000;
    updatePackets(elapsed);
    if (elapsed < 1.45) setPhase('arrive', '새 전기 100이 분자에 도착합니다.');
    else if (elapsed < 1.95) setPhase('inside', mode === 'basic' ? '분자가 크게 흔들리기 시작합니다.' : '큰 흔들림을 줄이며 에너지가 빠르게 바뀝니다.');
    else setPhase('out', mode === 'basic' ? '푸른빛 25, 붉은 열 75가 나옵니다.' : '에너지 100이 열로 빠지기 전에 푸른빛으로 나옵니다.');
    redLamp.intensity = mode === 'basic' && elapsed > 1.8 ? 24 + Math.sin(time * 17) * 7 : 0;
    lamp.intensity = mode === 'kaist' && elapsed > 1.8 ? 85 : 60;
    if (elapsed > 4.85) finish();
  } else {
    redLamp.intensity = 0;
    lamp.intensity = 60;
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
ui.fullscreen.addEventListener('click', async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  else await document.querySelector('.app').requestFullscreen();
});
document.addEventListener('fullscreenchange', resize);
selectMode('basic');
ui.inject.textContent = '전기 100 넣기';
ui.instruction.textContent = '먼저 기본 상태에서 실행하세요.';
showView('analogy');
requestAnimationFrame(animate);
