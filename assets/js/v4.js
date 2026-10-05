/* Munich Express – Variante v4 „Japandi“: ruhige Interaktionen, ohne Bibliotheken */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.style.scrollBehavior = 'smooth';

  // Kopfzeile und mobile Anrufleiste
  const header = $('.site-header');
  const callbar = $('.callbar');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-solid', y > 30);
    callbar.classList.toggle('is-visible', y > window.innerHeight * 0.7);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menü
  const toggle = $('.menu-toggle');
  const nav = $('#nav');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Langsames Erscheinen beim Scrollen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      if (el.classList.contains('fade')) {
        const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('fade'));
        el.style.setProperty('--d', `${Math.max(0, sibs.indexOf(el)) * 0.15}s`);
      }
      el.classList.add('is-in');
      if (el.matches('[data-flow]')) el.style.setProperty('--p', 1);
      io.unobserve(el);
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
  $$('.fade, .enso-wrap, [data-flow]').forEach((el) => io.observe(el));

  // Uhrzeit in München im Ensō
  const fmt = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' });
  const tick = () => {
    const t = fmt.format(new Date());
    $$('.js-time, .js-time-text').forEach((el) => { el.textContent = t; });
  };
  tick();
  setInterval(tick, 15000);

  // Rückruf-Formular (Entwurf: kein Versand)
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
    msg.textContent = 'Danke. Wir rufen Sie in Ruhe zurück – so schnell wie möglich.';
    form.reset();
  });
})();
