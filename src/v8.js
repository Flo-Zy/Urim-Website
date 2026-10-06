// Gesamtpaket v8 – v5-Design (Rot/Schwarz/Silber, Schrägen) mit GSAP-Bewegung.
// Gebündelt nach assets/js/v8.js (npm run build:v8). Die Klasse "motion" am <html> setzt das
// Inline-Skript im Kopf: nur ohne "Bewegung reduzieren" oder mit ?motion=1 in der Adresse.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const root = document.documentElement;
const motion = root.classList.contains('motion');

/* ---------- Menü ---------- */
const header = $('.site-header');
const nav = $('#nav');
const toggle = $('.menu-toggle');
const callbar = $('.callbar');
function setMenu(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
});

/* ---------- Kopfzeile und mobile Anrufleiste ---------- */
ScrollTrigger.create({
  start: 0, end: 'max',
  onUpdate(self) {
    const y = self.scroll();
    header.classList.toggle('is-solid', y > 20);
    callbar.classList.toggle('is-visible', y > window.innerHeight * 0.6);
  },
});

/* ---------- Navigation zeigt, in welchem Abschnitt man gerade ist ---------- */
const spyLinks = $$('.nav a[href^="#"]');
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    spyLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
spyLinks.forEach((a) => {
  const target = document.getElementById(a.getAttribute('href').slice(1));
  if (target) spy.observe(target);
});

/* ---------- Lichtkegel folgt dem Mauszeiger in den farbigen Abschnitten ---------- */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  $$('.svc-b, .buy, .contact, .promise').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${Math.round(e.clientX - r.left)}px`);
      el.style.setProperty('--my', `${Math.round(e.clientY - r.top)}px`);
    });
  });
}

/* ---------- Kontaktformular ----------
   Noch ohne Server: Die Angaben werden geprüft und als vorbereitete E-Mail im Mailprogramm geöffnet. */
const form = $('#kontaktformular');
if (form) {
  const status = $('.form-status', form);
  const setError = (input, show) => {
    input.setAttribute('aria-invalid', String(show));
    const err = document.getElementById(`${input.id}-err`);
    if (err) err.hidden = !show;
    return show;
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements.name;
    const email = form.elements.email;
    const badName = setError(name, !name.value.trim());
    const badMail = setError(email, email.value.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
    if (badName || badMail) {
      status.textContent = '';
      (badName ? name : email).focus();
      return;
    }
    const lines = [
      `Name: ${name.value.trim()}`,
      `Telefon: ${form.elements.telefon.value.trim()}`,
      `E-Mail: ${email.value.trim()}`,
      '',
      form.elements.nachricht.value.trim(),
    ];
    window.location.href = `mailto:info@kfzgutachter-kokaj.de?subject=${encodeURIComponent('Anfrage über die Website')}&body=${encodeURIComponent(lines.join('\n'))}`;
    status.textContent = 'Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.';
  });
  form.addEventListener('input', (e) => {
    if (e.target.getAttribute('aria-invalid') === 'true') setError(e.target, false);
  });
}

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

/* ---------- Rautenfeld im Hero: Silber, nahe am Mauszeiger Rot ---------- */
function rauten(canvas, animate) {
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  const W = 58;
  const H = 96;
  const ptr = { x: 0, y: 0, tx: 0, ty: 0, active: false };
  let w = 0;
  let h = 0;
  let raf = 0;
  let visible = true;

  function draw(ms) {
    const t = ms / 1000;
    if (!ptr.active) {
      ptr.tx = w * (0.3 + 0.22 * Math.sin(t * 0.45));
      ptr.ty = h * (0.35 + 0.22 * Math.cos(t * 0.33));
    }
    ptr.x += (ptr.tx - ptr.x) * 0.08;
    ptr.y += (ptr.ty - ptr.y) * 0.08;
    ctx.clearRect(0, 0, w, h);
    for (let cy = 0; cy < h + H; cy += H) {
      for (let cx = 0; cx < w + W; cx += W) {
        const dx = cx - ptr.x;
        const dy = cy - ptr.y;
        const glow = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 280);
        const wave = 0.5 + 0.5 * Math.sin(cx * 0.006 + cy * 0.004 - t * 1.1);
        const s = 0.66 + wave * 0.16 + glow * 0.3;
        const g = glow * glow;
        ctx.fillStyle = g > 0.02
          ? `rgba(210,20,11,${(0.05 + g * 0.5).toFixed(3)})`
          : `rgba(19,20,23,${(0.025 + wave * 0.04).toFixed(3)})`;
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

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!animate) { ptr.x = -999; ptr.y = -999; ptr.tx = -999; ptr.ty = -999; ptr.active = true; draw(0); }
  }

  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    ptr.tx = e.clientX - r.left;
    ptr.ty = e.clientY - r.top;
    ptr.active = true;
  };
  const onLeave = () => { ptr.active = false; };

  new ResizeObserver(resize).observe(canvas);
  resize();
  if (!animate) return;
  ptr.x = w * 0.3;
  ptr.y = h * 0.35;
  hero.addEventListener('pointermove', onMove);
  hero.addEventListener('pointerleave', onLeave);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(draw);
  }).observe(canvas);
}
rauten($('.rauten'), motion);

/* ---------- Ziffern der Telefonnummer rollen ein ---------- */
function rollDigits(el) {
  const final = el.getAttribute('aria-label');
  const state = { p: 0 };
  gsap.to(state, {
    p: 1, duration: 1.3, ease: 'power2.out',
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
if (motion) {
  const mm = gsap.matchMedia();
  mm.add({
    desktop: '(min-width: 1024px) and (min-height: 640px)',
    mobile: '(max-width: 1023px), (max-height: 639px)',
    fine: '(hover: hover) and (pointer: fine)',
  }, (context) => {
    const { desktop, fine } = context.conditions;
    const cleanups = [];
    const out = 'expo.out';

    gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

    /* Hero: Einstieg macht das CSS (wie v5), beim Scrollen driften die Ebenen auseinander */
    const heroScrub = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
    gsap.to('.hero-photo img', { yPercent: -10, ease: 'none', scrollTrigger: heroScrub });
    gsap.to('.hero-title', { xPercent: -5, ease: 'none', scrollTrigger: { ...heroScrub } });
    gsap.to('.rauten', { yPercent: 16, ease: 'none', scrollTrigger: { ...heroScrub } });
    gsap.to('.seal img', { rotation: 200, ease: 'none', scrollTrigger: { ...heroScrub } });

    /* Laufband: Grundtempo, beim Scrollen schneller und geneigt */
    const track = $('.ticker-track');
    track.style.animation = 'none';
    const loop = gsap.to(track, { xPercent: -50, ease: 'none', duration: 30, repeat: -1 });
    const skew = gsap.quickTo(track, 'skewX', { duration: 0.5, ease: 'power3.out' });
    ScrollTrigger.create({
      trigger: '.ticker', start: 'top bottom', end: 'bottom top',
      onUpdate(self) {
        const v = gsap.utils.clamp(-3000, 3000, self.getVelocity());
        const dir = v < 0 ? -1 : 1;
        skew(v / -200);
        gsap.to(loop, { timeScale: dir * (1 + Math.abs(v) / 300), duration: 0.2, overwrite: true });
        gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.25 });
        gsap.delayedCall(0.3, () => skew(0));
      },
      onToggle(self) { loop.paused(!self.isActive); },
    });
    const ticker = $('.ticker');
    const slow = () => gsap.to(loop, { timeScale: 0.12, duration: 0.5, overwrite: true });
    const fast = () => gsap.to(loop, { timeScale: 1, duration: 0.8, overwrite: true });
    ticker.addEventListener('pointerenter', slow);
    ticker.addEventListener('pointerleave', fast);
    cleanups.push(() => { track.style.animation = ''; ticker.removeEventListener('pointerenter', slow); ticker.removeEventListener('pointerleave', fast); });

    /* Zwei Unternehmen: Karten kommen von links und rechts, Logos drehen sich ein */
    gsap.from('.duo-card', { xPercent: (i) => (i ? 40 : -40), rotation: (i) => (i ? 10 : -10), opacity: 0, duration: 1.2, ease: out, scrollTrigger: { trigger: '.duo', start: 'top 82%' } });
    gsap.from('.duo-card img', { rotation: -200, scale: 0.3, duration: 1.4, ease: 'back.out(1.4)', stagger: 0.12, scrollTrigger: { trigger: '.duo', start: 'top 82%' } });

    /* Überschriften steigen Wort für Wort aus der Zeile, Absätze kommen nach */
    $$('[data-split]').forEach((el) => {
      gsap.from($$('.wi', el), { yPercent: 115, rotate: 6, duration: 1.1, ease: out, stagger: 0.07, scrollTrigger: { trigger: el, start: 'top 86%' } });
    });
    ScrollTrigger.batch('[data-rise]', { start: 'top 88%', once: true, onEnter: (els) => gsap.from(els, { y: 50, opacity: 0, duration: 1, ease: out, stagger: 0.12 }) });

    /* Wörter füllen sich mit dem Scrollen */
    $$('[data-fill]').forEach((el) => {
      const words = $$('.fw', el);
      gsap.set(words, { opacity: 0.22 });
      gsap.to(words, { opacity: 1, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: 0.4 } });
    });
    gsap.fromTo('.promise-stamp', { xPercent: 22 }, { xPercent: -14, ease: 'none', scrollTrigger: { trigger: '.promise', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('.exp-logo', { scale: 0.3, rotation: -160, opacity: 0, duration: 1.5, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.exp-logo', start: 'top 88%' } });

    /* Leistungen: Geisterwort wandert, jede Bildform öffnet sich auf ihre Art */
    const shapeIn = {
      'shape-slant': [{ clipPath: 'polygon(0% 0%, 0% 8%, 0% 100%, 0% 92%)' }, { clipPath: 'polygon(0% 0%, 100% 8%, 92% 100%, 0% 92%)' }],
      'shape-circle': [{ scale: 0, rotation: -120 }, { scale: 1, rotation: 0 }],
      'shape-arch': [{ clipPath: 'inset(100% 0% 0% 0%)', yPercent: 18 }, { clipPath: 'inset(0% 0% 0% 0%)', yPercent: 0 }],
      'shape-logo': [{ scale: 0.3, rotation: -200, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1 }],
    };
    $$('.svc').forEach((svc) => {
      const shape = $('.svc-shape', svc);
      const kind = Object.keys(shapeIn).find((k) => shape.classList.contains(k));
      const through = { trigger: svc, start: 'top bottom', end: 'bottom top', scrub: true };
      gsap.fromTo($('.svc-ghost', svc), { xPercent: 14 }, { xPercent: -14, ease: 'none', scrollTrigger: through });
      if (kind !== 'shape-logo') gsap.fromTo($('img', shape), { yPercent: 0 }, { yPercent: -12, ease: 'none', scrollTrigger: { ...through } });
      gsap.fromTo(shape, shapeIn[kind][0], { ...shapeIn[kind][1], duration: 1.4, ease: out, scrollTrigger: { trigger: shape, start: 'top 80%' } });
      gsap.from($$('.svc-text > *', svc), { y: 50, opacity: 0, duration: 1, ease: out, stagger: 0.09, scrollTrigger: { trigger: $('.svc-text', svc), start: 'top 82%' } });
    });

    /* Unfallgutachten: Kacheln springen der Reihe nach auf, Vorteile laufen ein */
    gsap.from('.tiles li', { y: 70, scale: 0.8, opacity: 0, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.07, scrollTrigger: { trigger: '.tiles', start: 'top 84%' } });
    gsap.from('.checks li', { x: 60, opacity: 0, duration: 0.9, ease: out, stagger: 0.08, scrollTrigger: { trigger: '.checks', start: 'top 86%' } });

    /* Kaufberatung: Schritte stapeln sich, die Karte darunter tritt zurück */
    const cards = $$('.stack-card');
    if (desktop) {
      const fit = () => {
        root.classList.remove('stack-on');
        root.style.removeProperty('--stack-h');
        const tallest = Math.max(...cards.map((c) => c.offsetHeight));
        const room = window.innerHeight - header.offsetHeight - 18 - (cards.length - 1) * 14 - 24;
        if (tallest > room) return;
        root.style.setProperty('--stack-h', `${tallest}px`);
        root.classList.add('stack-on');
      };
      fit();
      ScrollTrigger.addEventListener('refreshInit', fit);
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, { scale: 1 - (cards.length - 1 - i) * 0.025, ease: 'none', scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: true } });
      });
      cleanups.push(() => { ScrollTrigger.removeEventListener('refreshInit', fit); root.classList.remove('stack-on'); root.style.removeProperty('--stack-h'); });
    } else {
      cards.forEach((card) => gsap.from(card, { y: 70, opacity: 0, duration: 1, ease: out, scrollTrigger: { trigger: card, start: 'top 88%' } }));
    }

    /* Team: Fotos fahren von unten auf */
    gsap.fromTo('.person-img picture', { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.3 }, { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.3, ease: out, stagger: 0.15, scrollTrigger: { trigger: '.team', start: 'top 75%' } });
    gsap.from('.person figcaption', { y: 24, opacity: 0, duration: 0.9, ease: out, stagger: 0.15, delay: 0.4, scrollTrigger: { trigger: '.team', start: 'top 75%' } });

    /* Kontakt */
    gsap.from('.contact-title', { xPercent: -30, opacity: 0, duration: 1.4, ease: out, scrollTrigger: { trigger: '.contact', start: 'top 70%' } });
    gsap.from('.c-line', { x: -60, opacity: 0, duration: 1, ease: out, stagger: 0.1, scrollTrigger: { trigger: '.contact-lines', start: 'top 85%' } });
    gsap.from('.form', { y: 90, opacity: 0, duration: 1.2, ease: out, scrollTrigger: { trigger: '.form', start: 'top 88%' } });
    const phone = $('[data-roll]');
    ScrollTrigger.create({ trigger: phone, start: 'top 90%', once: true, onEnter: () => rollDigits(phone) });

    if (fine) {
      /* Hero: Foto, Karte, Siegel und Keil verschieben sich leicht gegeneinander */
      const hero = $('.hero');
      const drift = { x: 0, y: 0 };
      const apply = () => { hero.style.setProperty('--px', drift.x.toFixed(3)); hero.style.setProperty('--py', drift.y.toFixed(3)); };
      const dx = gsap.quickTo(drift, 'x', { duration: 0.8, ease: 'power3.out', onUpdate: apply });
      const dy = gsap.quickTo(drift, 'y', { duration: 0.8, ease: 'power3.out', onUpdate: apply });
      const heroMove = (e) => {
        const r = hero.getBoundingClientRect();
        dx(((e.clientX - r.left) / r.width - 0.5) * 2);
        dy(((e.clientY - r.top) / r.height - 0.5) * 2);
      };
      const heroLeave = () => { dx(0); dy(0); };
      hero.addEventListener('pointermove', heroMove);
      hero.addEventListener('pointerleave', heroLeave);
      cleanups.push(() => { hero.removeEventListener('pointermove', heroMove); hero.removeEventListener('pointerleave', heroLeave); hero.style.removeProperty('--px'); hero.style.removeProperty('--py'); });

      /* Team-Fotos neigen sich zum Mauszeiger */
      $$('[data-tilt]').forEach((card) => {
        const target = $('.person-img', card);
        gsap.set(target, { transformPerspective: 800 });
        const rx = gsap.quickTo(target, 'rotationX', { duration: 0.6, ease: 'power3.out' });
        const ry = gsap.quickTo(target, 'rotationY', { duration: 0.6, ease: 'power3.out' });
        const move = (e) => {
          const r = card.getBoundingClientRect();
          ry(((e.clientX - r.left) / r.width - 0.5) * 18);
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

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener('load', refresh);
    };
  });
}
