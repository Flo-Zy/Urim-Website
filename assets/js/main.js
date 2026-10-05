/* Kfz-Gutachter Kokaj – Interaktionen (ohne Abhängigkeiten) */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header beim Scrollen verdichten, mobile Anrufleiste einblenden
  const header = document.querySelector('.site-header');
  const callbar = document.querySelector('.callbar');
  const hero = document.querySelector('.hero');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    if (callbar && hero) callbar.classList.toggle('is-visible', y > hero.offsetHeight * 0.6);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobiles Menü
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Hero: Zähler der Schadenaufnahme synchron zu den Markierungen
  const marks = document.querySelectorAll('.mark');
  const count = document.querySelector('.js-count');
  const fill = document.querySelector('.ib-fill');
  const total = marks.length;
  const setCount = (n) => {
    count.textContent = n;
    fill.style.width = (n / total) * 100 + '%';
  };
  if (reduce) setCount(total);
  else marks.forEach((m, i) => setTimeout(() => setCount(i + 1), 1450 + (i + 1) * 500));

  // Ablauf: Fortschrittslinie, sobald der Bereich sichtbar ist
  const steps = document.querySelector('[data-steps]');
  if (steps) {
    steps.querySelectorAll('.step-no').forEach((el, i) => el.style.setProperty('--i', i));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          steps.classList.add('is-on');
          steps.style.setProperty('--progress', 1);
          io.disconnect();
        }
      });
    }, { threshold: 0.45 });
    io.observe(steps);
  }

  // Rückruf-Formular (Entwurf: kein Versand, nur Validierung)
  const form = document.getElementById('callback');
  if (form) {
    const msg = form.querySelector('.form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let firstBad = null;
      form.querySelectorAll('[required]').forEach((el) => {
        const bad = el.type === 'checkbox' ? !el.checked : !el.value.trim();
        el.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = el;
      });
      if (firstBad) {
        msg.className = 'form-msg err';
        msg.textContent = 'Bitte Name, Telefonnummer und Einverständnis ergänzen.';
        firstBad.focus();
        return;
      }
      msg.className = 'form-msg ok';
      msg.textContent = 'Rückruf angefordert. Wir melden uns so schnell wie möglich.';
      form.reset();
    });
  }

  const year = document.querySelector('.js-year');
  if (year) year.textContent = new Date().getFullYear();
})();
