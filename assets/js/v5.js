/* Kfz-Gutachter Kokaj – Variante v5: Gutachter-Lupe, Gutachten-Check, Rauten */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.style.scrollBehavior = 'smooth';

  /* Header, Menü, Anrufleiste */
  const header = $('.site-header');
  const callbar = $('.callbar');
  const onScroll = () => {
    header.classList.toggle('is-solid', scrollY > 20);
    callbar.classList.toggle('is-visible', scrollY > innerHeight * 0.7);
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  const toggle = $('.menu-toggle');
  const nav = $('#nav');
  const setMenu = (o) => { toggle.setAttribute('aria-expanded', String(o)); toggle.setAttribute('aria-label', o ? 'Menü schließen' : 'Menü öffnen'); nav.classList.toggle('is-open', o); };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- Gutachter-Lupe ---------- */
  const fig = $('.inspect');
  const box = $('.inspect-shield', fig);
  const lens = $('.lens', fig);
  const lensImg = $('.lens-view > img', lens);
  const finds = $$('.finding', lens).map((el) => ({
    el, fx: parseFloat(el.style.getPropertyValue('--x')) / 100, fy: parseFloat(el.style.getPropertyValue('--y')) / 100, seen: false,
  }));
  const foundEl = $('.js-found');
  const hint = $('.js-hint');
  const ZOOM = 2.3;
  const NW = 768, NH = 576; // Originalmaße des Fotos
  let geo = null;
  let pos = { x: 0.5, y: 0.5 };      // aktuelle Lupenposition (0..1 im Wappen)
  let target = { x: 0.5, y: 0.5 };
  let userControl = false;
  let idleTimer = 0;

  const measure = () => {
    const w = box.clientWidth, h = box.clientHeight;
    const s = Math.max(w / NW, h / NH);
    const rw = NW * s, rh = NH * s;
    geo = { w, h, rw, rh, dx: (w - rw) / 2, dy: (h - rh) / 2, L: lens.offsetWidth, ox: box.getBoundingClientRect().left - fig.getBoundingClientRect().left, oy: box.getBoundingClientRect().top - fig.getBoundingClientRect().top };
    lensImg.style.width = `${rw * ZOOM}px`;
    lensImg.style.height = `${rh * ZOOM}px`;
  };

  const render = () => {
    const { w, h, rw, rh, dx, dy, L, ox, oy } = geo;
    const px = pos.x * w, py = pos.y * h;
    lens.style.left = `${ox + px}px`;
    lens.style.top = `${oy + py}px`;
    const il = L / 2 - (px - dx) * ZOOM;
    const it = L / 2 - (py - dy) * ZOOM;
    lensImg.style.left = `${il}px`;
    lensImg.style.top = `${it}px`;
    let count = 0;
    finds.forEach((f) => {
      f.el.style.left = `${il + rw * ZOOM * f.fx}px`;
      f.el.style.top = `${it + rh * ZOOM * f.fy}px`;
      // als entdeckt zählen, wenn der Befund nah an der Lupenmitte ist
      const fx = dx + rw * f.fx, fy = dy + rh * f.fy;
      if (!f.seen && Math.hypot(fx - px, fy - py) < L * 0.18) f.seen = true;
      if (f.seen) count++;
    });
    if (foundEl.textContent !== String(count)) {
      foundEl.textContent = count;
      if (count === finds.length) {
        foundEl.parentElement.classList.add('done');
        hint.textContent = 'Alle Befunde entdeckt – genau so gründlich prüfen wir Ihr Fahrzeug.';
      }
    }
  };

  // Automatische Tour über die Befunde, solange niemand die Lupe führt
  const tour = finds.map((f) => ({ fx: f.fx, fy: f.fy }));
  let tourIdx = 0;
  const toBox = (p) => ({ x: (geo.dx + geo.rw * p.fx) / geo.w, y: (geo.dy + geo.rh * p.fy) / geo.h });
  const nextTour = () => {
    if (userControl || reduce) return;
    target = toBox(tour[tourIdx % tour.length]);
    tourIdx++;
    idleTimer = setTimeout(nextTour, 2600);
  };

  const loop = () => {
    const k = userControl ? 0.25 : 0.045;
    pos.x += (target.x - pos.x) * k;
    pos.y += (target.y - pos.y) * k;
    render();
    requestAnimationFrame(loop);
  };

  const setFromEvent = (e) => {
    const r = box.getBoundingClientRect();
    target = { x: Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), y: Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)) };
  };

  const initLens = () => {
    measure();
    pos = { ...toBox({ fx: 0.6, fy: 0.3 }) };
    target = { ...pos };
    fig.classList.add('is-ready');
    if (reduce) { finds.forEach((f) => (f.seen = false)); render(); return; }
    loop();
    setTimeout(nextTour, 1200);
  };

  fig.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    userControl = true;
    clearTimeout(idleTimer);
    setFromEvent(e);
  });
  fig.addEventListener('pointerleave', (e) => {
    if (e.pointerType !== 'mouse') return;
    userControl = false;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(nextTour, 1500);
  });
  // Touch: Tippen verschiebt die Lupe
  fig.addEventListener('click', (e) => {
    if (!geo) return;
    clearTimeout(idleTimer);
    userControl = false;
    setFromEvent(e);
    idleTimer = setTimeout(nextTour, 5000);
  });
  addEventListener('resize', () => { if (geo) { measure(); render(); } });
  const img = $('.inspect-img');
  if (img.complete) initLens(); else img.addEventListener('load', initLens);

  /* ---------- Rautenband ---------- */
  $$('.rautenband').forEach((band) => {
    const w = band.clientWidth || innerWidth;
    const size = band.classList.contains('rautenband--thin') ? 26 : 36;
    const n = Math.ceil(w / size) + 2;
    for (let i = 0; i < n; i++) {
      const r = document.createElement('span');
      r.className = 'rt';
      r.style.setProperty('--d', `${i * 0.025}s`);
      band.appendChild(r);
    }
    if (reduce) return;
    new IntersectionObserver(([en]) => { band.classList.toggle('is-on', en.isIntersecting); }, { threshold: 0.9 }).observe(band);
  });

  /* ---------- Erscheinen beim Scrollen ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      el.style.setProperty('--d', `${Math.max(0, sibs.indexOf(el)) * 0.1}s`);
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach((el) => io.observe(el));

  /* ---------- Gutachten-Check ---------- */
  const quiz = $('[data-quiz]');
  const steps = $$('.q', quiz);
  const answers = {};
  const show = (i) => {
    steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
    quiz.style.setProperty('--qp', `${(i / (steps.length - 1)) * 100}%`);
    const btn = $('button', steps[i]);
    if (btn && quiz.dataset.started) btn.focus({ preventScroll: true });
  };
  const result = () => {
    const { schuld, hoehe, fahrbereit } = answers;
    let title, text;
    if (schuld === 'fremd' && hoehe === 'klein') {
      title = 'Vermutlich reicht ein Kostenvoranschlag.';
      text = 'Bei kleinen Schäden unter etwa 750 € ist ein Gutachten oft nicht nötig. Rufen Sie kurz an – wir schauen uns den Schaden an und sagen Ihnen ehrlich, was sinnvoll ist.';
    } else if (schuld === 'fremd') {
      title = 'Ein Gutachten lohnt sich für Sie.';
      text = 'Sie waren nicht schuld – damit trägt in der Regel die Versicherung des Unfallgegners die Kosten. Mit einem unabhängigen Gutachten sichern Sie Reparaturkosten, Wertminderung und Nutzungsausfall.';
    } else if (schuld === 'selbst') {
      title = 'Lassen Sie sich kurz beraten.';
      text = 'Bei eigenem Verschulden kommt es auf Ihre Vollkasko an. Ob ein Gutachten oder ein Kostenvoranschlag sinnvoller ist, klären wir gemeinsam am Telefon.';
    } else {
      title = 'Sichern Sie jetzt die Beweise.';
      text = 'Solange die Schuldfrage offen ist, ist eine unabhängige, lückenlose Dokumentation besonders wichtig. Sie hilft Ihnen später gegenüber Versicherung und Anwalt.';
    }
    $('.js-res-title', quiz).textContent = title;
    $('.js-res-text', quiz).textContent = text;
    $('.js-res-tow', quiz).hidden = fahrbereit !== 'nein';
  };
  steps.forEach((s, i) => {
    $$('[data-a]', s).forEach((b) => b.addEventListener('click', () => {
      quiz.dataset.started = '1';
      answers[s.dataset.q] = b.dataset.a;
      if (i === steps.length - 2) result();
      show(i + 1);
    }));
  });
  $('[data-restart]', quiz).addEventListener('click', () => show(0));
  show(0);

  /* ---------- FAQ: nur eine Frage gleichzeitig offen ---------- */
  const det = $$('.faq-list details');
  det.forEach((d) => d.addEventListener('toggle', () => { if (d.open) det.forEach((o) => { if (o !== d) o.open = false; }); }));

  /* ---------- Formular (Entwurf: kein Versand) ---------- */
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
    if (bad) { msg.className = 'form-msg err'; msg.textContent = 'Bitte Name, Telefonnummer und Einverständnis ergänzen.'; bad.focus(); return; }
    msg.className = 'form-msg ok';
    msg.textContent = 'Vielen Dank – wir rufen Sie schnellstmöglich zurück.';
    form.reset();
  });

  $('.js-year').textContent = new Date().getFullYear();
})();
