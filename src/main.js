// Munich Express – Interaktionen & Animationen
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Vector3 } from 'three';
import { initHero } from './hero3d.js';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;
const small = matchMedia('(max-width: 960px)').matches;
const root = document.documentElement;
if (reduce) root.classList.add('reduced');

/* ---------- Smooth Scroll ---------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
const scrollTo = (el) => (lenis ? lenis.scrollTo(el, { offset: -70, duration: 1.4 }) : el.scrollIntoView());
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const el = $(id);
  if (!el) return;
  e.preventDefault();
  setMenu(false);
  scrollTo(el);
}));

/* ---------- Text-Splitting (Original bleibt für Screenreader erhalten) ---------- */
function srCopy(el) {
  const sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = el.textContent.trim();
  return sr;
}
function splitChars(el) {
  const text = el.textContent.trim();
  const line = document.createElement('span');
  line.className = 'split-line';
  line.setAttribute('aria-hidden', 'true');
  text.split(' ').forEach((word, wi, arr) => {
    const w = document.createElement('span');
    w.style.display = 'inline-block';
    w.style.whiteSpace = 'nowrap';
    [...word].forEach((ch) => {
      const c = document.createElement('span');
      c.className = 'split-char';
      c.textContent = ch;
      w.appendChild(c);
    });
    line.appendChild(w);
    if (wi < arr.length - 1) line.appendChild(document.createTextNode(' '));
  });
  const sr = srCopy(el);
  el.textContent = '';
  el.append(sr, line);
  return $$('.split-char', line);
}
function splitWords(el, cls = 'split-word') {
  const text = el.textContent.trim();
  const holder = document.createElement('span');
  holder.setAttribute('aria-hidden', 'true');
  const out = [];
  text.split(/\s+/).forEach((word, i, arr) => {
    const w = document.createElement('span');
    w.className = cls;
    const inner = document.createElement('span');
    inner.textContent = word;
    w.appendChild(inner);
    holder.appendChild(w);
    if (i < arr.length - 1) holder.appendChild(document.createTextNode(' '));
    out.push(cls === 'w' ? w : inner);
  });
  const sr = srCopy(el);
  el.textContent = '';
  el.append(sr, holder);
  return out;
}

/* ---------- Menü ---------- */
const toggle = $('.menu-toggle');
const nav = $('#nav');
function setMenu(open) {
  if (!toggle) return;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  nav.classList.toggle('is-open', open);
  if (lenis) open ? lenis.stop() : lenis.start();
  if (open && !reduce) gsap.from($$('a', nav), { yPercent: 120, opacity: 0, rotate: 4, stagger: 0.05, duration: 0.9, ease: 'expo.out', delay: 0.15 });
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* ---------- Header & Anrufleiste ---------- */
const header = $('.site-header');
const callbar = $('.callbar');
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  const past = y > window.innerHeight * 0.9;
  header.classList.toggle('is-hidden', past && y > lastY + 4);
  if (y < lastY - 4 || !past) header.classList.remove('is-hidden');
  callbar.classList.toggle('is-visible', past);
  lastY = y;
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- 3D-Hero ---------- */
const canvas = $('.hero-canvas');
const hsEls = $$('.hs');
const hsPos = [[2.36, 0.52, 0.5], [1.4, 0.39, 1.0], [-1.72, 0.86, 0.94]];
const hero = initHero({ canvas, labels: hsEls.map((el, i) => ({ el, pos: new Vector3(...hsPos[i]) })), mobile: small });
if (!hero) root.classList.add('no-webgl');
const U = hero ? hero.uniforms : null;

const titleChars = $$('[data-split]').map(splitChars);

function heroIntro() {
  const tl = gsap.timeline();
  if (hero) {
    tl.to(U.uAssemble, { value: 1, duration: 3.2, ease: 'power3.out' }, 0)
      .to(hero.edgeMat, { opacity: 0.16, duration: 1.2 }, 2.2)
      .fromTo(U.uScan, { value: 3.2 }, { value: -3.2, duration: 1.8, ease: 'power2.inOut' }, 2.0)
      .to(hero.laser.material, { opacity: 0.18, duration: 0.3 }, 2.0)
      .to(hero.laser.material, { opacity: 0, duration: 0.3 }, 3.5)
      .set(U.uScan, { value: 3.2 }, 3.85);
  }
  tl.from('.site-header', { yPercent: -150, duration: 1.2, ease: 'expo.out' }, 0.2)
    .from('.hero-kicker', { y: 30, opacity: 0, duration: 1, ease: 'expo.out' }, 0.35);
  titleChars.forEach((chars, i) => {
    tl.from(chars, { yPercent: 115, rotateX: -90, rotateY: 20, opacity: 0, transformOrigin: '50% 100% -40px', stagger: 0.025, duration: 1.3, ease: 'expo.out' }, 0.4 + i * 0.16);
  });
  tl.from('.hero-lead', { y: 30, opacity: 0, duration: 1.1, ease: 'expo.out' }, 1.0)
    .from('.hero-actions .btn', { y: 40, opacity: 0, stagger: 0.1, duration: 1.1, ease: 'expo.out' }, 1.1)
    .from('.scroll-hint', { opacity: 0, duration: 1 }, 1.6);
  return tl;
}

function heroScroll() {
  if (!hero || reduce) return;
  const proxy = { p: 0 };
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=200%', pin: '.hero-stage', scrub: 1.2, anticipatePin: 1 },
  });
  tl.to(proxy, { p: 1, duration: 1, ease: 'none', onUpdate: () => hero.setProgress(proxy.p) }, 0)
    .to('.hero-content', { y: -120, opacity: 0, filter: 'blur(8px)', duration: 0.16, ease: 'power2.in' }, 0)
    .to('.scroll-hint', { opacity: 0, duration: 0.05 }, 0)
    .fromTo(U.uScan, { value: 3.2 }, { value: -3.2, duration: 0.42, ease: 'none', immediateRender: false }, 0.08)
    .fromTo(hero.laser.material, { opacity: 0 }, { opacity: 0.22, duration: 0.04, immediateRender: false }, 0.08)
    .to(hero.laser.material, { opacity: 0, duration: 0.04 }, 0.48)
    .fromTo(hsEls[0], { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.05 }, 0.14)
    .fromTo(hsEls[1], { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.05 }, 0.2)
    .fromTo(hsEls[2], { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.05 }, 0.38)
    .fromTo('.hero-phase2', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' }, 0.3)
    .fromTo('.p2-big', { letterSpacing: '0.2em' }, { letterSpacing: '-0.03em', duration: 0.2, ease: 'power3.out' }, 0.3)
    .to(hsEls, { opacity: 0, duration: 0.06 }, 0.78)
    .to('.hero-phase2', { opacity: 0, y: -60, duration: 0.08 }, 0.8)
    .to(U.uScatter, { value: 3, duration: 0.2, ease: 'power2.in' }, 0.8)
    .to(U.uOpacity, { value: 0, duration: 0.2 }, 0.8)
    .to(hero.edgeMat, { opacity: 0, duration: 0.1 }, 0.8);
}

/* ---------- Ladebildschirm ---------- */
function loader() {
  return new Promise((done) => {
    if (reduce) return done();
    const c = { v: 0 };
    const out = $('.js-load');
    const bar = $('.loader-bar span');
    gsap.timeline()
      .to(c, { v: 100, duration: 1.7, ease: 'power3.inOut', onUpdate: () => { out.textContent = String(Math.round(c.v)).padStart(3, '0'); bar.style.transform = `scaleX(${c.v / 100})`; } })
      .to('.loader-inner', { scale: 0.85, opacity: 0, duration: 0.45, ease: 'power3.in' })
      .add(done, '-=0.15')
      .to('.loader', { clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)', duration: 1.1, ease: 'expo.inOut' }, '-=0.2')
      .set('.loader', { display: 'none' });
  });
}

/* ---------- Laufbänder (reagieren auf Scroll-Tempo) ---------- */
function tickers() {
  $$('.ticker-row').forEach((row) => {
    const track = $('.ticker-track', row);
    track.innerHTML += track.innerHTML + track.innerHTML;
    const dir = Number(row.dataset.dir) || -1;
    let x = 0;
    let skew = 0;
    gsap.ticker.add((t, dt) => {
      const v = lenis ? lenis.velocity : 0;
      const boost = 1 + Math.min(Math.abs(v) * 0.25, 10);
      const sign = v < -0.1 ? -1 : 1;
      x += 0.07 * dt * boost * dir * sign;
      const w = track.scrollWidth / 3;
      const pos = ((x % w) + w) % w;
      skew += (gsap.utils.clamp(-14, 14, v * 0.7) - skew) * 0.1;
      track.style.transform = `translate3d(${-pos}px,0,0) skewX(${-skew}deg)`;
    });
  });
  if (!reduce) gsap.from('.ticker', { scaleX: 0.6, rotate: 8, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.ticker', start: 'top 95%' } });
}

/* ---------- Überschriften ---------- */
function titles() {
  $$('[data-split-words]').forEach((el) => {
    const words = splitWords(el);
    if (reduce) return;
    gsap.from(words, { yPercent: 120, rotate: 8, stagger: 0.07, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  if (reduce) return;
  $$('.sec-head p, .about-copy p, .clock-copy p, .contact-lead').forEach((p) => {
    gsap.from(p, { y: 40, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: p, start: 'top 90%' } });
  });
}

/* ---------- 3D-Kippkarten ---------- */
function cards() {
  if (!reduce) {
    gsap.from('.card', {
      y: 180, rotateX: -50, rotateZ: (i) => (i % 2 ? 4 : -4), opacity: 0, transformOrigin: '50% 0%', transformPerspective: 1200,
      stagger: 0.12, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.cards', start: 'top 82%' },
    });
  }
  if (!fine || reduce) return;
  $$('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.classList.add('is-tilting');
      card.style.setProperty('--rx', `${(0.5 - py) * 14}deg`);
      card.style.setProperty('--ry', `${(px - 0.5) * 18}deg`);
      card.style.setProperty('--gx', `${px * 100}%`);
      card.style.setProperty('--gy', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.classList.remove('is-tilting');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* ---------- Fallblattanzeige ---------- */
function clock() {
  const board = $('.js-flaps');
  const text = $('.js-clock-text');
  const fmt = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' });
  const now = () => fmt.format(new Date()).replace(/\D/g, '').padStart(4, '0');
  const flaps = [];
  for (let i = 0; i < 4; i++) {
    if (i === 2) { const s = document.createElement('span'); s.className = 'flap-sep'; s.textContent = ':'; board.appendChild(s); }
    const f = document.createElement('div');
    f.className = 'flap';
    f.innerHTML = '<div class="f-top"><span></span></div><div class="f-bot"><span></span></div><div class="leaf-front"><span></span></div><div class="leaf-back"><span></span></div>';
    board.appendChild(f);
    flaps.push(f);
  }
  const set = (f, val, fast = false) => {
    const cur = f.dataset.v;
    const [top, bot, lf, lb] = $$('span', f);
    if (cur === undefined || reduce) { top.textContent = bot.textContent = lf.textContent = lb.textContent = val; f.dataset.v = val; return Promise.resolve(); }
    if (cur === val) return Promise.resolve();
    top.textContent = val; bot.textContent = cur; lf.textContent = cur; lb.textContent = val;
    f.classList.toggle('fast', fast);
    f.classList.remove('flip'); void f.offsetWidth; f.classList.add('flip');
    f.dataset.v = val;
    return new Promise((r) => setTimeout(() => { bot.textContent = val; lf.textContent = val; f.classList.remove('flip'); r(); }, fast ? 280 : 920));
  };
  const show = (digits, fast) => Promise.all(flaps.map((f, i) => set(f, digits[i], fast)));
  const t0 = now();
  flaps.forEach((f) => set(f, '0'));
  const updateText = (d) => { text.textContent = `${d.slice(0, 2)}:${d.slice(2)}`; };
  updateText(t0);

  const shuffle = async () => {
    for (let k = 0; k < 7; k++) await show(Array.from({ length: 4 }, () => String(Math.floor(Math.random() * 10))), true);
    await show(now(), false);
  };
  if (reduce) show(t0);
  else ScrollTrigger.create({ trigger: '.clock', start: 'top 70%', once: true, onEnter: shuffle });
  setInterval(() => { const d = now(); updateText(d); if (flaps[0].dataset.v !== undefined) show(d); }, 5000);

  if (!reduce) gsap.from('.flaps', { rotateY: -70, rotateX: 40, z: -400, opacity: 0, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: '.clock', start: 'top 75%' } });
}

/* ---------- Kosten: Wörter leuchten beim Scrollen auf ---------- */
function costs() {
  const el = $('.reveal-words');
  const words = splitWords(el, 'w');
  const hot = ['Sie', 'wählen', 'den', 'Gutachter.'];
  const idx = words.findIndex((w, i) => hot.every((h, k) => words[i + k] && words[i + k].textContent === h));
  if (idx >= 0) hot.forEach((_, k) => words[idx + k].classList.add('hot'));
  if (reduce) { words.forEach((w) => (w.style.opacity = 1)); return; }
  gsap.to(words, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 40%', scrub: true } });
  gsap.from('.costs-note', { x: -60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.costs-note', start: 'top 92%' } });
}

/* ---------- Ablauf: horizontaler Scroll mit Abschleppwagen ---------- */
function process() {
  if (reduce) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 641px)', () => {
    const track = $('.process-track');
    const road = $('.road');
    const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 40);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: '.process', start: 'top top', end: () => `+=${dist() + window.innerHeight * 0.4}`, pin: '.process-pin', scrub: 1, invalidateOnRefresh: true },
    });
    tl.to(track, { x: () => -dist(), ease: 'none' }, 0)
      .to('.road-truck', { x: () => road.clientWidth - 110, ease: 'none' }, 0)
      .to('.road-line', { backgroundPositionX: '-800px', ease: 'none' }, 0);
    $$('.pstep').forEach((s) => {
      gsap.from(s, {
        rotateY: -55, rotateZ: -3, scale: 0.85, opacity: 0.2, transformPerspective: 1000, transformOrigin: '0% 50%', ease: 'none',
        scrollTrigger: { trigger: s, containerAnimation: tl, start: 'left 100%', end: 'left 55%', scrub: true },
      });
      gsap.from($('.pstep-no', s), { xPercent: 60, ease: 'none', scrollTrigger: { trigger: s, containerAnimation: tl, start: 'left 100%', end: 'right 0%', scrub: true } });
    });
  });
  mm.add('(max-width: 640px)', () => {
    $$('.pstep').forEach((s) => gsap.from(s, { y: 100, rotateX: -30, opacity: 0, transformPerspective: 900, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 88%' } }));
    gsap.to('.road-truck', { x: () => $('.road').clientWidth - 110, ease: 'none', scrollTrigger: { trigger: '.process-track', start: 'top 70%', end: 'bottom 60%', scrub: true } });
  });
}

/* ---------- Team ---------- */
function team() {
  if (reduce) return;
  $$('.person').forEach((p, i) => {
    gsap.from(p, { y: 160, rotate: i ? 6 : -6, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: p, start: 'top 92%' } });
    gsap.fromTo($('img', p), { yPercent: -12 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ---------- FAQ mit weicher Höhe ---------- */
function faq() {
  $$('.faq-list details').forEach((d) => {
    const sum = $('summary', d);
    const body = $('.faq-a', d);
    sum.addEventListener('click', (e) => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        gsap.to(body, { height: 0, opacity: 0, duration: 0.5, ease: 'expo.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'all' }); ScrollTrigger.refresh(); } });
      } else {
        d.open = true;
        gsap.from(body, { height: 0, opacity: 0, duration: 0.7, ease: 'expo.out', onComplete: () => ScrollTrigger.refresh() });
      }
    });
  });
  if (!reduce) gsap.from('.faq-list details', { x: 80, opacity: 0, stagger: 0.08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } });
}

/* ---------- Kontakt & Footer ---------- */
function contact() {
  if (reduce) return;
  gsap.from('.contact-phone', { scale: 0.6, rotateX: -80, opacity: 0, transformPerspective: 800, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.contact-phone', start: 'top 90%' } });
  gsap.from('.form', { y: 120, rotateY: -25, opacity: 0, transformPerspective: 1200, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.form', start: 'top 88%' } });
  gsap.from('.footer-giant span', { yPercent: 110, skewX: -20, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: '.footer-giant', start: 'top bottom', end: 'bottom bottom', scrub: true } });
}

/* ---------- Magnetische Elemente & Cursor ---------- */
function pointerFx() {
  if (!fine || reduce) return;
  $$('.magnetic').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.35);
      yTo((e.clientY - r.top - r.height / 2) * 0.45);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
  const cur = $('.cursor');
  const dot = $('.cursor-dot');
  const ring = $('.cursor-ring');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.1 }), dy = gsap.quickTo(dot, 'y', { duration: 0.1 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  document.addEventListener('pointerover', (e) => cur.classList.toggle('is-hover', !!e.target.closest('a, button, summary, .card, label')));
}

/* ---------- Formular (Entwurf: kein Versand) ---------- */
function form() {
  const f = $('#callback');
  const msg = $('.form-msg', f);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    let bad = null;
    $$('[required]', f).forEach((el) => {
      const b = el.type === 'checkbox' ? !el.checked : !el.value.trim();
      el.setAttribute('aria-invalid', String(b));
      if (b && !bad) bad = el;
    });
    if (bad) {
      msg.className = 'form-msg err';
      msg.textContent = 'Bitte Name, Telefonnummer und Einverständnis ergänzen.';
      bad.focus();
      if (!reduce) gsap.fromTo(f, { x: -10 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
      return;
    }
    msg.className = 'form-msg ok';
    msg.textContent = 'Rückruf angefordert. Wir melden uns sofort.';
    f.reset();
  });
}

/* ---------- Start ---------- */
$('.js-year').textContent = new Date().getFullYear();
heroScroll();   // zuerst: der Hero-Pin verschiebt alle folgenden Trigger
tickers();
titles();
cards();
clock();
costs();
process();
team();
faq();
contact();
pointerFx();
form();
ScrollTrigger.sort();

if (reduce) {
  if (U) { U.uAssemble.value = 1; hero.edgeMat.opacity = 0.16; }
} else {
  gsap.set('.hero-content, .site-header', { visibility: 'visible' });
  loader().then(() => { lenis && lenis.start(); heroIntro(); });
}
document.fonts && document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh());
