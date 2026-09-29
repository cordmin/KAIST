function beam(a, b, radius, material, parent) {
  const direction = new THREE.Vector3().subVectors(b, a);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 10), material);
  mesh.position.copy(a).add(b).multiplyScalar(.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  parent.add(mesh);
}

function createQuakeBuildings() {
  const group = new THREE.Group();
  const platform = new THREE.Group();
  group.add(platform);
  const concrete = new THREE.MeshStandardMaterial({ color: 0x7891a9, metalness: .25, roughness: .65 });
  const steel = new THREE.MeshStandardMaterial({ color: 0xc6d8e8, metalness: .55, roughness: .35 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x19384e, metalness: .25, roughness: .55 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x65b7d9, emissive: 0x11354b, metalness: .15, roughness: .25, transparent: true, opacity: .72 });
  const wall = new THREE.MeshStandardMaterial({ color: 0x718da7, transparent: true, opacity: .18, depthWrite: false, side: THREE.DoubleSide });
  const brace = new THREE.MeshStandardMaterial({ color: 0x61e6f1, emissive: 0x128b9d, emissiveIntensity: 1.25, metalness: .3, roughness: .3 });
  const ground = new THREE.Mesh(new THREE.BoxGeometry(7.9, .18, 1.55), concrete);
  ground.position.y = -1.38;
  platform.add(ground);
  const groundEdge = new THREE.Mesh(new THREE.BoxGeometry(7.9, .08, 1.59), dark);
  groundEdge.position.y = -1.5;
  platform.add(groundEdge);
  const frames = [];

  [-2.05, 2.05].forEach((x, index) => {
    const frame = new THREE.Group();
    frame.position.set(x, -1.27, 0);
    platform.add(frame);
    frames.push(frame);
    for (const z of [-.42, .42]) {
      for (const side of [-1, 1]) beam(new THREE.Vector3(side, .05, z), new THREE.Vector3(side, 2.42, z), .055, steel, frame);
      for (const y of [.05, 1.23, 2.42]) beam(new THREE.Vector3(-1, y, z), new THREE.Vector3(1, y, z), .052, steel, frame);
    }
    for (const side of [-1, 1]) {
      for (const y of [.05, 1.23, 2.42]) beam(new THREE.Vector3(side, y, -.42), new THREE.Vector3(side, y, .42), .045, steel, frame);
    }
    for (const y of [.63, 1.82]) {
      for (const wx of [-.53, .53]) {
        const window = new THREE.Mesh(new THREE.BoxGeometry(.56, .55, .02), glass);
        window.position.set(wx, y, .47);
        frame.add(window);
        const sill = new THREE.Mesh(new THREE.BoxGeometry(.62, .035, .07), steel);
        sill.position.set(wx, y - .3, .49);
        frame.add(sill);
      }
    }
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(2, 2.38), wall);
    backWall.position.set(0, 1.23, -.43);
    frame.add(backWall);
    const sideWall = new THREE.Mesh(new THREE.PlaneGeometry(.84, 2.38), wall);
    sideWall.rotation.y = Math.PI / 2;
    sideWall.position.set(-1, 1.23, 0);
    frame.add(sideWall);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, .14, 1.1), dark);
    roof.position.set(0, 2.5, 0);
    frame.add(roof);
    const roofTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, .06, 1.18), steel);
    roofTop.position.set(0, 2.59, 0);
    frame.add(roofTop);
    if (index === 1) {
      for (const z of [-.46, .51]) {
        beam(new THREE.Vector3(-.94, .08, z), new THREE.Vector3(.94, 1.2, z), .065, brace, frame);
        beam(new THREE.Vector3(.94, 1.25, z), new THREE.Vector3(-.94, 2.39, z), .065, brace, frame);
      }
    }
  });
  return { group, platform, frames };
}
