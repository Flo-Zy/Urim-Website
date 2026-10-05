// Munich Express – Interaktionen (ruhig, seriös)
import { gsap } from 'gsap';
import { Vector3 } from 'three';
import { initHero } from './hero3d.js';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const small = matchMedia('(max-width: 980px)').matches;
const root = document.documentElement;
if (!reduce) root.style.scrollBehavior = 'smooth';

/* ---------- Menü ---------- */
const header = $('.site-header');
const toggle = $('.menu-toggle');
const nav = $('#nav');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* ---------- Header & Anrufleiste ---------- */
const callbar = $('.callbar');
const heroEl = $('.hero');
let hero = null;
const onScroll = () => {
  const y = window.scrollY;
  const h = heroEl.offsetHeight;
  header.classList.toggle('is-solid', y > h - 90);
  callbar.classList.toggle('is-visible', y > h * 0.6);
  if (hero) hero.setProgress(Math.min(1, y / h) * 0.35);
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- 3D-Hero: ruhige, wiederkehrende Schadenaufnahme ---------- */
const hsEls = $$('.hs');
const hsPos = [[2.36, 0.52, 0.5], [1.4, 0.39, 1.0], [-1.72, 0.86, 0.94]];
hero = initHero({ canvas: $('.hero-canvas'), labels: hsEls.map((el, i) => ({ el, pos: new Vector3(...hsPos[i]) })), mobile: small });
if (!hero) root.classList.add('no-webgl');

if (hero) {
  const U = hero.uniforms;
  if (reduce) {
    U.uAssemble.value = 1;
    hero.edgeMat.opacity = 0.1;
  } else {
    gsap.to(U.uAssemble, { value: 1, duration: 3, ease: 'power3.out', delay: 0.2 });
    gsap.to(hero.edgeMat, { opacity: 0.1, duration: 1.5, delay: 2.4 });
    // Scan-Zyklus: Laser fährt über das Auto, Schadenpunkte erscheinen nacheinander
    const scanDur = 3.6;
    const at = (x) => ((3.2 - x) / 6.4) * scanDur; // Zeitpunkt, an dem der Laser x erreicht
    const cap = $('.js-cap');
    const scan = gsap.timeline({ repeat: -1, repeatDelay: 2.5, delay: 2.6 });
    scan.call(() => { cap.textContent = 'Schadenaufnahme läuft …'; }, null, 0)
      .fromTo(U.uScan, { value: 3.2 }, { value: -3.2, duration: scanDur, ease: 'power1.inOut' }, 0)
      .fromTo(hero.laser.material, { opacity: 0 }, { opacity: 0.12, duration: 0.4 }, 0)
      .to(hero.laser.material, { opacity: 0, duration: 0.4 }, scanDur - 0.4);
    hsPos.forEach((p, i) => scan.fromTo(hsEls[i], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, at(p[0])));
    scan.call(() => { cap.textContent = '3 Schäden dokumentiert'; }, null, scanDur)
      .to(hsEls, { opacity: 0, duration: 0.5, stagger: 0.1 }, scanDur + 1.8)
      .call(() => { cap.textContent = 'Digitale Schadenaufnahme'; }, null, scanDur + 2.4);
  }
  // Inhalte des Heros sanft einblenden
  if (!reduce) {
    gsap.from('.hero-content > *', { y: 24, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.15 });
    gsap.from('.site-header', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' });
  }
}
onScroll();

/* ---------- Scroll-Reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--d', `${Math.max(0, sibs.indexOf(el)) * 0.08}s`);
    el.classList.add('is-in');
    io.unobserve(el);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach((el) => io.observe(el));

/* ---------- Ablauf: Fortschrittslinie ---------- */
const tl = $('[data-timeline]');
if (tl) {
  const items = $$('li', tl);
  new IntersectionObserver(([en], obs) => {
    if (!en.isIntersecting) return;
    obs.disconnect();
    if (reduce) { items.forEach((li) => li.classList.add('is-on')); tl.style.setProperty('--p', 1); return; }
    const state = { p: 0 };
    gsap.to(state, {
      p: 1, duration: 2.4, ease: 'power1.inOut',
      onUpdate: () => {
        tl.style.setProperty('--p', state.p);
        items.forEach((li, i) => li.classList.toggle('is-on', state.p >= i / (items.length - 1) - 0.01));
      },
    });
  }, { threshold: 0.5 }).observe(tl);
}

/* ---------- Uhr in der 24h-Leiste ---------- */
(function clock() {
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
  const set = (f, val, fast) => {
    const cur = f.dataset.v;
    const [top, bot, lf, lb] = $$('span', f);
    if (cur === undefined || reduce) { top.textContent = bot.textContent = lf.textContent = lb.textContent = val; f.dataset.v = val; return Promise.resolve(); }
    if (cur === val) return Promise.resolve();
    top.textContent = val; bot.textContent = cur; lf.textContent = cur; lb.textContent = val;
    f.classList.toggle('fast', !!fast);
    f.classList.remove('flip'); void f.offsetWidth; f.classList.add('flip');
    f.dataset.v = val;
    return new Promise((r) => setTimeout(() => { bot.textContent = val; lf.textContent = val; f.classList.remove('flip'); r(); }, fast ? 220 : 480));
  };
  const show = (d, fast) => Promise.all(flaps.map((f, i) => set(f, d[i], fast)));
  const d0 = now();
  text.textContent = `${d0.slice(0, 2)}:${d0.slice(2)}`;
  show(d0);
  new IntersectionObserver(async ([en], obs) => {
    if (!en.isIntersecting) return;
    obs.disconnect();
    for (let k = 0; k < 4; k++) await show(Array.from({ length: 4 }, () => String(Math.floor(Math.random() * 10))), true);
    await show(now());
  }, { threshold: 0.6 }).observe(board);
  setInterval(() => { const d = now(); text.textContent = `${d.slice(0, 2)}:${d.slice(2)}`; show(d); }, 10000);
})();

/* ---------- FAQ: weiches Auf- und Zuklappen ---------- */
$$('.faq-list details').forEach((d) => {
  const sum = $('summary', d);
  const body = $('.faq-a', d);
  sum.addEventListener('click', (e) => {
    if (reduce) return;
    e.preventDefault();
    if (d.open) {
      gsap.to(body, { height: 0, opacity: 0, duration: 0.35, ease: 'power2.inOut', onComplete: () => { d.open = false; gsap.set(body, { clearProps: 'all' }); } });
    } else {
      d.open = true;
      gsap.from(body, { height: 0, opacity: 0, duration: 0.45, ease: 'power2.out', clearProps: 'all' });
    }
  });
});

/* ---------- Rückruf-Formular (Entwurf: kein Versand) ---------- */
const form = $('#callback');
const msg = $('.form-msg', form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let bad = null;
  $$('[required]', form).forEach((el) => {
    const b = el.type === 'checkbox' ? !el.checked : !el.value.trim();
    el.setAttribute('aria-invalid', String(b));
    if (b && !bad) bad = el;
  });
  if (bad) {
    msg.className = 'form-msg err';
    msg.textContent = 'Bitte Name, Telefonnummer und Einverständnis ergänzen.';
    bad.focus();
    return;
  }
  msg.className = 'form-msg ok';
  msg.textContent = 'Vielen Dank – wir rufen Sie schnellstmöglich zurück.';
  form.reset();
});

$('.js-year').textContent = new Date().getFullYear();
