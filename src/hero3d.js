// 3D-Szene im Hero: Fahrzeug als Punktwolke, Laser-Scan, Rundumleuchte
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';

const RED = new THREE.Color('#ff2414');
const ORANGE = new THREE.Color('#ff8a1f');

function carGeometries() {
  // Seitenprofil Karosserie (x = Länge, y = Höhe), Front bei +x
  const body = new THREE.Shape();
  body.moveTo(2.28, 0.3);
  body.lineTo(1.84, 0.3);
  body.absarc(1.4, 0.32, 0.44, 0, Math.PI, false);
  body.lineTo(-0.96, 0.32);
  body.absarc(-1.4, 0.32, 0.44, 0, Math.PI, false);
  body.lineTo(-2.22, 0.32);
  body.bezierCurveTo(-2.34, 0.42, -2.34, 0.78, -2.24, 0.9);
  body.lineTo(-1.62, 0.96);
  body.lineTo(1.05, 0.94);
  body.bezierCurveTo(1.7, 0.9, 2.18, 0.8, 2.3, 0.66);
  body.bezierCurveTo(2.36, 0.52, 2.34, 0.38, 2.28, 0.3);

  const cabin = new THREE.Shape();
  cabin.moveTo(-1.66, 0.9);
  cabin.bezierCurveTo(-1.4, 1.2, -1.15, 1.38, -0.8, 1.42);
  cabin.lineTo(0.2, 1.44);
  cabin.bezierCurveTo(0.55, 1.42, 0.85, 1.2, 1.2, 0.92);
  cabin.lineTo(-1.66, 0.9);

  const bodyGeo = new THREE.ExtrudeGeometry(body, {
    depth: 1.66, bevelEnabled: true, bevelThickness: 0.14, bevelSize: 0.08, bevelSegments: 6, curveSegments: 28,
  });
  bodyGeo.translate(0, 0, -0.83);
  const cabinGeo = new THREE.ExtrudeGeometry(cabin, {
    depth: 1.18, bevelEnabled: true, bevelThickness: 0.16, bevelSize: 0.06, bevelSegments: 6, curveSegments: 24,
  });
  cabinGeo.translate(0, 0, -0.59);

  const wheels = [];
  for (const x of [1.4, -1.4]) for (const z of [0.86, -0.86]) {
    const tire = new THREE.TorusGeometry(0.29, 0.1, 14, 48);
    tire.translate(x, 0.39, z);
    wheels.push(tire);
    const rim = new THREE.CylinderGeometry(0.22, 0.22, 0.04, 32, 1, false);
    rim.rotateX(Math.PI / 2);
    rim.translate(x, 0.39, z + Math.sign(z) * 0.06);
    wheels.push(rim);
  }
  return { bodyGeo, cabinGeo, wheels };
}

function samplePoints(geos, total) {
  // Punkte nach Fläche verteilen
  const meshes = geos.map((g) => new THREE.Mesh(g));
  const areas = geos.map((g) => {
    const p = g.attributes.position; const idx = g.index;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    let sum = 0; const n = idx ? idx.count : p.count;
    for (let i = 0; i < n; i += 3) {
      const i0 = idx ? idx.getX(i) : i, i1 = idx ? idx.getX(i + 1) : i + 1, i2 = idx ? idx.getX(i + 2) : i + 2;
      a.fromBufferAttribute(p, i0); b.fromBufferAttribute(p, i1); c.fromBufferAttribute(p, i2);
      sum += b.sub(a).cross(c.sub(a)).length() / 2;
    }
    return sum;
  });
  const areaSum = areas.reduce((s, v) => s + v, 0);
  const pos = [], start = [], rand = [], kind = [];
  const v = new THREE.Vector3();
  meshes.forEach((m, mi) => {
    const sampler = new MeshSurfaceSampler(m).build();
    const n = Math.round(total * areas[mi] / areaSum);
    const isWheel = mi >= 2 ? 1 : 0;
    for (let i = 0; i < n; i++) {
      sampler.sample(v);
      pos.push(v.x, v.y, v.z);
      // Startposition: weit verstreut in einer flachen Wolke
      const r = 6 + Math.random() * 10, th = Math.random() * Math.PI * 2;
      start.push(Math.cos(th) * r, (Math.random() - 0.2) * 8, Math.sin(th) * r);
      rand.push(Math.random());
      kind.push(isWheel);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aStart', new THREE.Float32BufferAttribute(start, 3));
  g.setAttribute('aRand', new THREE.Float32BufferAttribute(rand, 1));
  g.setAttribute('aKind', new THREE.Float32BufferAttribute(kind, 1));
  return g;
}

const pointsVert = /* glsl */`
  attribute vec3 aStart; attribute float aRand; attribute float aKind;
  uniform float uAssemble, uTime, uScan, uPixel, uSize, uScatter;
  varying float vScan, vSeen, vKind, vFade;
  float easeOut(float t){ return 1.0 - pow(1.0 - t, 3.0); }
  void main(){
    float t = clamp(uAssemble * 1.6 - aRand * 0.6, 0.0, 1.0);
    t = easeOut(t);
    vec3 p = mix(aStart, position, t);
    // leichtes Flimmern wie bei einem Live-Scan
    p += vec3(sin(uTime*1.7 + aRand*40.0), cos(uTime*1.3 + aRand*30.0), sin(uTime*1.1 + aRand*20.0)) * 0.006;
    // Zerstreuen beim Weiterscrollen
    p += normalize(position + vec3(0.0, 0.6, 0.0)) * uScatter * (0.6 + aRand * 2.4);
    p.y += uScatter * aRand * 1.5;
    vScan = 1.0 - smoothstep(0.0, 0.22, abs(position.x - uScan));
    vSeen = smoothstep(uScan - 0.05, uScan + 0.4, position.x);
    vKind = aKind;
    vFade = t;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixel * (1.0 + vScan * 2.2) * (0.7 + aRand * 0.6) / -mv.z;
  }
`;
const pointsFrag = /* glsl */`
  uniform vec3 uRed; uniform float uOpacity;
  varying float vScan, vSeen, vKind, vFade;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.1, d);
    vec3 steel = mix(vec3(0.55, 0.58, 0.64), vec3(0.95, 0.96, 0.98), vSeen * 0.7);
    steel = mix(steel, vec3(0.28, 0.29, 0.32), vKind * 0.6);
    vec3 col = mix(steel, uRed * 1.6, vScan);
    gl_FragColor = vec4(col, a * (0.55 + vScan * 0.45) * vFade * uOpacity);
  }
`;

const floorFrag = /* glsl */`
  uniform float uTime; uniform vec3 uOrange; uniform vec3 uRed; uniform float uScan; uniform float uOpacity;
  varying vec3 vPos;
  float line(float x, float w){ float f = abs(fract(x) - 0.5); return smoothstep(w, 0.0, 0.5 - f); }
  void main(){
    float dist = length(vPos.xz);
    float fade = smoothstep(14.0, 2.0, dist);
    float g = max(line(vPos.x * 1.0, 0.02), line(vPos.z * 1.0, 0.02));
    vec3 col = vec3(0.16, 0.17, 0.19) * g * fade;
    // Rundumleuchte: zwei rotierende Lichtkegel
    float ang = atan(vPos.z - 0.0, vPos.x + 3.6);
    float beam = pow(max(0.0, cos(ang - uTime * 2.6)), 18.0) + pow(max(0.0, cos(ang - uTime * 2.6 + 3.14159)), 18.0);
    float fall = smoothstep(16.0, 0.0, length(vPos.xz - vec2(-3.6, 0.0)));
    col += uOrange * beam * fall * 0.55;
    // Schatten/Glanz unter dem Auto
    float under = smoothstep(2.8, 0.0, length(vPos.xz * vec2(0.55, 1.0)));
    col += vec3(0.05) * under;
    // Laserlinie auf dem Boden
    float laser = smoothstep(0.06, 0.0, abs(vPos.x - uScan)) * smoothstep(3.0, 0.5, abs(vPos.z));
    col += uRed * laser * 1.2;
    gl_FragColor = vec4(col, uOpacity);
  }
`;
const floorVert = /* glsl */`
  varying vec3 vPos;
  void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vPos = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`;

export function initHero({ canvas, labels = [], mobile = false }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
  } catch (e) {
    return null;
  }
  const DPR = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor('#070707', 1);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog('#070707', 9, 22);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 60);

  const { bodyGeo, cabinGeo, wheels } = carGeometries();
  const pointsGeo = samplePoints([bodyGeo, cabinGeo, ...wheels], mobile ? 12000 : 26000);

  const uniforms = {
    uAssemble: { value: 0 }, uTime: { value: 0 }, uScan: { value: 3.2 }, uPixel: { value: DPR },
    uSize: { value: mobile ? 26 : 22 }, uScatter: { value: 0 }, uRed: { value: RED }, uOpacity: { value: 1 },
  };
  const points = new THREE.Points(pointsGeo, new THREE.ShaderMaterial({
    vertexShader: pointsVert, fragmentShader: pointsFrag, uniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  const car = new THREE.Group();
  car.add(points);

  // Kantenlinien – erscheinen nach dem Zusammensetzen
  const edgeMat = new THREE.LineBasicMaterial({ color: '#ff3b2a', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  car.add(new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 30), edgeMat));
  car.add(new THREE.LineSegments(new THREE.EdgesGeometry(cabinGeo, 30), edgeMat));
  scene.add(car);

  // Boden mit Raster, Rundumleuchte und Laser
  const floorUniforms = { uTime: uniforms.uTime, uOrange: { value: ORANGE }, uRed: { value: RED }, uScan: uniforms.uScan, uOpacity: { value: 1 } };
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.ShaderMaterial({ vertexShader: floorVert, fragmentShader: floorFrag, uniforms: floorUniforms, transparent: true, depthWrite: false })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Laser-Ebene
  // weicher Verlauf für den Laser-Vorhang
  const lc = document.createElement('canvas'); lc.width = 4; lc.height = 128;
  const lctx = lc.getContext('2d'); const lg = lctx.createLinearGradient(0, 0, 0, 128);
  lg.addColorStop(0, 'rgba(255,255,255,0)'); lg.addColorStop(0.55, 'rgba(255,255,255,.55)'); lg.addColorStop(1, 'rgba(255,255,255,1)');
  lctx.fillStyle = lg; lctx.fillRect(0, 0, 4, 128);
  const laserTex = new THREE.CanvasTexture(lc);
  const laser = new THREE.Mesh(
    new THREE.PlaneGeometry(2.8, 2.4),
    new THREE.MeshBasicMaterial({ color: RED, alphaMap: laserTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
  );
  laser.rotation.y = Math.PI / 2;
  laser.position.y = 1.2;
  scene.add(laser);

  // Schwebende Staubpartikel
  const dustN = mobile ? 250 : 600;
  const dustPos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 18;
    dustPos[i * 3 + 1] = Math.random() * 6;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 14;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: '#8a8f99', size: 0.025, transparent: true, opacity: 0.5, depthWrite: false }));
  scene.add(dust);

  // Kamera-Pfad: von vorne schräg -> Seite -> hinten oben
  const state = { progress: 0, mx: 0, my: 0, tmx: 0, tmy: 0 };
  const camAt = (p) => {
    const ang = THREE.MathUtils.lerp(0.62, -2.35, p);           // Umlauf um das Auto
    const rad = THREE.MathUtils.lerp(8.4, 9.6, p);
    const h = THREE.MathUtils.lerp(2.0, 3.6, p * p);
    return new THREE.Vector3(Math.sin(ang) * rad, h, Math.cos(ang) * rad);
  };

  const v = new THREE.Vector3();
  const right = new THREE.Vector3(), target = new THREE.Vector3();
  const center = new THREE.Vector3(0, 0.7, 0), UP = new THREE.Vector3(0, 1, 0);
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < 0.8 ? 46 : 32;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => {
    state.tmx = (e.clientX / window.innerWidth - 0.5);
    state.tmy = (e.clientY / window.innerHeight - 0.5);
  }, { passive: true });

  let running = true;
  new IntersectionObserver(([en]) => { running = en.isIntersecting; if (running) loop(); }).observe(canvas);

  const clock = new THREE.Timer();
  let raf = 0;
  function loop() {
    cancelAnimationFrame(raf);
    if (!running) return;
    raf = requestAnimationFrame(loop);
    clock.update(); const t = clock.getElapsed();
    uniforms.uTime.value = t;
    state.mx += (state.tmx - state.mx) * 0.05;
    state.my += (state.tmy - state.my) * 0.05;

    const p = state.progress;
    const cam = camAt(p);
    // Seitlicher Versatz, damit das Auto rechts neben der Headline steht
    const wide = canvas.clientWidth / canvas.clientHeight > 1.1;
    const shift = wide ? THREE.MathUtils.lerp(2.5, 0, Math.min(1, p * 2.2)) : 0;
    camera.position.set(cam.x + state.mx * 1.2, cam.y - state.my * 0.8, cam.z);
    // Blickpunkt seitlich versetzen -> Auto erscheint rechts neben der Headline
    right.subVectors(center, camera.position).normalize().cross(UP).normalize();
    target.copy(center).addScaledVector(right, -shift);
    target.y += wide ? 0 : -0.9;
    camera.lookAt(target);
    car.rotation.y = Math.sin(t * 0.25) * 0.04;

    laser.position.x = uniforms.uScan.value;
    dust.rotation.y = t * 0.02;

    // HTML-Labels an 3D-Punkte heften
    for (const l of labels) {
      v.copy(l.pos).applyMatrix4(car.matrixWorld).project(camera);
      const x = (v.x * 0.5 + 0.5) * canvas.clientWidth;
      const y = (-v.y * 0.5 + 0.5) * canvas.clientHeight;
      l.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    renderer.render(scene, camera);
  }
  loop();

  return {
    uniforms, edgeMat, laser, state,
    setProgress(p) { state.progress = p; if (!running) loop(); },
  };
}
