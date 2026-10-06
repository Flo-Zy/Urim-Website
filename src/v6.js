// Variante v6 – Bewegung (GSAP + ScrollTrigger, lokal gebündelt nach assets/js/v6.js)
// Jede Animation hat eine Aufgabe: Einstieg lenkt den Blick, Scrub-Effekte erzählen in Lesereihenfolge,
// der seitliche Schwenk stellt die drei Leistungen gleichwertig nebeneinander.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;

/* ---------- Menü ---------- */
const header = $('.hd');
const nav = $('#nav');
const menuBtn = $('.menu-btn');
function setMenu(open) {
  nav.classList.toggle('is-open', open);
  header.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}
menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
});

/* ---------- Text in Wörter zerlegen (einmalig, Inhalt bleibt lesbar) ---------- */
function splitWords(el, wrap) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      frag.appendChild(wrap(part));
    });
    node.parentNode.replaceChild(frag, node);
  });
}
$$('[data-split]').forEach((el) => splitWords(el, (word) => {
  const outer = document.createElement('span');
  const inner = document.createElement('span');
  outer.className = 'w';
  inner.className = 'wi';
  inner.textContent = word;
  outer.appendChild(inner);
  return outer;
}));
$$('[data-fill]').forEach((el) => splitWords(el, (word) => {
  const span = document.createElement('span');
  span.className = 'fw';
  span.textContent = word;
  return span;
}));
$$('.hero-sub, .hero-cta, .hero-media').forEach((el) => el.setAttribute('data-in', ''));

/* ---------- Rautenfeld im Hero ---------- */
function rauten(canvas, animate) {
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const W = 62;
  const H = 102;
  const ptr = { x: 0, y: 0, tx: 0, ty: 0, active: false };
  let w = 0;
  let h = 0;
  let raf = 0;
  let visible = true;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!animate) draw(0);
  }

  function draw(ms) {
    const t = ms / 1000;
    if (!ptr.active) {
      ptr.tx = w * (0.68 + 0.24 * Math.sin(t * 0.45));
      ptr.ty = h * (0.42 + 0.26 * Math.cos(t * 0.33));
    }
    ptr.x += (ptr.tx - ptr.x) * 0.08;
    ptr.y += (ptr.ty - ptr.y) * 0.08;
    ctx.clearRect(0, 0, w, h);
    for (let cy = 0; cy < h + H; cy += H) {
      for (let cx = 0; cx < w + W; cx += W) {
        const dx = cx - ptr.x;
        const dy = cy - ptr.y;
        const glow = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 300);
        const wave = 0.5 + 0.5 * Math.sin(cx * 0.006 + cy * 0.004 - t * 1.1);
        const s = 0.7 + wave * 0.16 + glow * 0.28;
        const g = glow * glow;
        ctx.fillStyle = `rgba(${Math.round(40 + g * 140)},${Math.round(110 + g * 100)},255,${(0.05 + wave * 0.09 + g * 0.6).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(cx, cy - (H / 2) * s);
        ctx.lineTo(cx + (W / 2) * s, cy);
        ctx.lineTo(cx, cy + (H / 2) * s);
        ctx.lineTo(cx - (W / 2) * s, cy);
        ctx.closePath();
        ctx.fill();
      }
    }
    if (animate && visible) raf = requestAnimationFrame(draw);
  }

  function onMove(e) {
    const r = canvas.getBoundingClientRect();
    ptr.tx = e.clientX - r.left;
    ptr.ty = e.clientY - r.top;
    ptr.active = true;
  }
  function onLeave() { ptr.active = false; }

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  ptr.x = w * 0.7;
  ptr.y = h * 0.4;

  let io;
  if (animate) {
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
  } else {
    ptr.tx = ptr.x; ptr.ty = ptr.y; ptr.active = true;
    draw(0);
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    if (io) io.disconnect();
    hero.removeEventListener('pointermove', onMove);
    hero.removeEventListener('pointerleave', onLeave);
  };
}

/* ---------- Ziffern der Telefonnummer rollen ein ---------- */
function rollDigits(el) {
  const final = el.getAttribute('aria-label');
  const state = { p: 0 };
  return gsap.to(state, {
    p: 1, duration: 1.5, ease: 'power2.out',
    onUpdate() {
      const locked = Math.floor(state.p * final.length);
      let out = '';
      for (let i = 0; i < final.length; i++) {
        const ch = final[i];
        out += i < locked || !/\d/.test(ch) ? ch : String(Math.floor(Math.random() * 10));
      }
      el.textContent = out;
    },
    onComplete() { el.textContent = final; },
  });
}

/* ---------- Bewegung ---------- */
const CHAMFER = 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)';
const RAUTE = 'polygon(50% 0%, 50% 0%, 100% 50%, 50% 100%, 50% 100%, 0% 50%)';
const mm = gsap.matchMedia();
// Besucher mit "Bewegung reduzieren" bekommen die ruhige Fassung. Zum Ansehen der Animationen auf einem
// Gerät mit dieser Einstellung: Adresse mit ?motion=1 aufrufen.
const forceMotion = new URLSearchParams(window.location.search).has('motion');

mm.add({
  motion: forceMotion ? 'all' : '(prefers-reduced-motion: no-preference)',
  desktop: '(min-width: 1024px) and (min-height: 640px)',
  fine: '(hover: hover) and (pointer: fine)',
}, (context) => {
  const { motion, desktop, fine } = context.conditions;
  const canvas = $('.rauten');

  if (!motion) {
    const stop = rauten(canvas, false);
    const st = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => header.classList.toggle('is-scrolled', self.scroll() > 40) });
    return () => { stop(); st.kill(); };
  }

  const stopRauten = rauten(canvas, true);
  if (desktop) root.classList.add('pan-on');

  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (self) => header.classList.toggle('is-scrolled', self.scroll() > 40) });
  gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  /* Hero: Einstieg in Lesereihenfolge, Foto klappt aus einer Raute auf */
  gsap.set('.hero h1, .hero [data-in]', { visibility: 'visible' });
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from('.hero h1 .wi', { yPercent: 115, rotate: 5, duration: 1.2, stagger: 0.07 }, 0.1)
    .fromTo('.hero-frame', { clipPath: RAUTE, scale: 0.6 }, { clipPath: CHAMFER, scale: 1, duration: 1.4 }, 0.35)
    .fromTo('.hero-media', { '--o': 0 }, { '--o': 1, duration: 0.9 }, 1.1)
    .from('.hero-sub', { y: 30, opacity: 0, duration: 1 }, 0.7)
    .from('.hero-cta > *', { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, 0.85)
    .from('.hd-in > *', { y: -24, opacity: 0, duration: 0.9, stagger: 0.06 }, 0.3);

  gsap.to('.hero-frame img', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.rauten', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* Laufband: Grundtempo, beim Scrollen schneller und geneigt */
  const track = $('.band-track');
  const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 26, repeat: -1 });
  const skew = gsap.quickTo(track, 'skewX', { duration: 0.5, ease: 'power3.out' });
  ScrollTrigger.create({
    trigger: '.band', start: 'top bottom', end: 'bottom top',
    onUpdate(self) {
      const v = gsap.utils.clamp(-3000, 3000, self.getVelocity());
      const dir = v < 0 ? -1 : 1;
      skew(v / -220);
      gsap.to(loop, { timeScale: dir * (1 + Math.abs(v) / 350), duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.25 });
      gsap.delayedCall(0.3, () => skew(0));
    },
    onToggle(self) { loop.paused(!self.isActive); },
  });

  /* Versprechen: Wörter füllen sich mit dem Scrollen, am Desktop steht der Abschnitt dabei still */
  const promiseWords = $$('.promise .fw');
  gsap.set(promiseWords, { opacity: 0.14 });
  gsap.to(promiseWords, {
    opacity: 1, ease: 'none', stagger: 0.12,
    scrollTrigger: desktop
      ? { trigger: '.promise', start: 'top top', end: '+=110%', pin: true, scrub: 0.4 }
      : { trigger: '.promise', start: 'top 75%', end: 'bottom 70%', scrub: 0.4 },
  });
  $$('.exp-close [data-fill]').forEach((el) => {
    const words = $$('.fw', el);
    gsap.set(words, { opacity: 0.14 });
    gsap.to(words, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 85%', end: 'bottom 55%', scrub: 0.4 } });
  });

  /* Leistungen */
  const pan = $('.pan');
  const panTrack = $('.pan-track');
  const panels = $$('.panel');
  const figFrom = { clipPath: RAUTE, scale: 0.7, opacity: 0 };
  const figTo = { clipPath: 'polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)', scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out' };
  let onAnchor;

  if (desktop) {
    const dist = () => panTrack.scrollWidth - window.innerWidth;
    const slide = gsap.to(panTrack, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: pan, start: 'top top', end: () => `+=${dist()}`, pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate(self) { pan.dataset.active = String(Math.round(self.progress * (panels.length - 1))); },
      },
    });
    pan.dataset.active = '0';

    panels.forEach((panel, i) => {
      const inPanel = { trigger: panel, containerAnimation: slide, start: 'left right', end: 'right left', scrub: true };
      gsap.fromTo($('.ghost', panel), { xPercent: 35 }, { xPercent: -45, ease: 'none', scrollTrigger: inPanel });
      gsap.fromTo($('.panel-fig img', panel), { xPercent: -8 }, { xPercent: 8, ease: 'none', scrollTrigger: { ...inPanel } });
      const enter = i === 0
        ? { trigger: pan, start: 'top 60%', toggleActions: 'play none none reverse' }
        : { trigger: panel, containerAnimation: slide, start: 'left 62%', toggleActions: 'play none none reverse' };
      gsap.fromTo($('.panel-fig', panel), figFrom, { ...figTo, scrollTrigger: enter });
      gsap.from($$('.panel-text > *', panel), { x: 90, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { ...enter } });
    });

    /* Sprungmarken auf die Leistungen landen an der passenden Stelle im Schwenk */
    onAnchor = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const index = panels.findIndex((p) => `#${p.id}` === link.getAttribute('href'));
      if (index < 0) return;
      e.preventDefault();
      const st = slide.scrollTrigger;
      window.scrollTo({ top: st.start + ((st.end - st.start) * index) / (panels.length - 1), behavior: 'smooth' });
    };
    document.addEventListener('click', onAnchor);
  } else {
    panels.forEach((panel) => {
      const enter = { trigger: panel, start: 'top 78%' };
      gsap.fromTo($('.panel-fig', panel), figFrom, { ...figTo, scrollTrigger: enter });
      gsap.from($$('.panel-text > *', panel), { y: 50, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: $('.panel-text', panel), start: 'top 85%' } });
    });
  }

  /* Überschriften: Wörter steigen aus der Zeile */
  $$('.display[data-split]').forEach((el) => {
    gsap.from($$('.wi', el), { yPercent: 115, rotate: 5, duration: 1.1, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 86%' } });
  });

  /* Expertise */
  gsap.from('.exp-text p', { y: 60, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: 0.14, scrollTrigger: { trigger: '.exp-text', start: 'top 82%' } });
  gsap.from('.logo-plate-lg', { rotationY: -180, scale: 0.5, opacity: 0, duration: 1.5, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.exp-close', start: 'top 80%' } });

  /* Team: Fotos fahren von unten auf, am Desktop neigen sie sich zum Mauszeiger */
  gsap.fromTo('.person-img picture', { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.3 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.3, ease: 'expo.out', stagger: 0.15, scrollTrigger: { trigger: '.team-grid', start: 'top 72%' } });
  gsap.from('.person figcaption', { y: 24, opacity: 0, duration: 0.9, ease: 'expo.out', stagger: 0.15, delay: 0.4, scrollTrigger: { trigger: '.team-grid', start: 'top 72%' } });

  const cleanups = [];
  if (fine) {
    $$('[data-tilt]').forEach((card) => {
      const target = $('.person-img', card);
      const rx = gsap.quickTo(target, 'rotationX', { duration: 0.6, ease: 'power3.out' });
      const ry = gsap.quickTo(target, 'rotationY', { duration: 0.6, ease: 'power3.out' });
      const move = (e) => {
        const r = card.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 16);
        rx(((e.clientY - r.top) / r.height - 0.5) * -14);
      };
      const leave = () => { rx(0); ry(0); };
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerleave', leave);
      cleanups.push(() => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); });
    });

    /* Anruf-Buttons ziehen leicht zum Mauszeiger */
    $$('[data-magnetic]').forEach((btn) => {
      const x = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' });
      const y = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' });
      const move = (e) => {
        const r = btn.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * 0.3);
        y((e.clientY - r.top - r.height / 2) * 0.4);
      };
      const leave = () => { gsap.to(btn, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' }); };
      btn.addEventListener('pointermove', move);
      btn.addEventListener('pointerleave', leave);
      cleanups.push(() => { btn.removeEventListener('pointermove', move); btn.removeEventListener('pointerleave', leave); });
    });
  }

  /* Kontakt */
  gsap.from('.contact-list li', { x: -60, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.12, scrollTrigger: { trigger: '.contact-list', start: 'top 82%' } });
  const phone = $('[data-roll]');
  ScrollTrigger.create({ trigger: phone, start: 'top 88%', once: true, onEnter: () => rollDigits(phone) });

  const refresh = () => ScrollTrigger.refresh();
  window.addEventListener('load', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

  return () => {
    stopRauten();
    cleanups.forEach((fn) => fn());
    if (onAnchor) document.removeEventListener('click', onAnchor);
    window.removeEventListener('load', refresh);
    root.classList.remove('pan-on');
    gsap.set('.hero h1, .hero [data-in]', { visibility: 'visible' });
  };
});
