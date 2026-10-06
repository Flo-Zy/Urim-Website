/* KFZ Sachverständiger & Gutachter Kokaj – Variante v5 */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.style.scrollBehavior = 'smooth';

  // Kopfzeile, Menü, Anrufleiste
  const header = $('.site-header');
  const callbar = $('.callbar');
  const toggle = $('.menu-toggle');
  const nav = $('#nav');
  const setMenu = (o) => { toggle.setAttribute('aria-expanded', String(o)); toggle.setAttribute('aria-label', o ? 'Menü schließen' : 'Menü öffnen'); nav.classList.toggle('is-open', o); };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Parallax für Bilder mit data-parallax
  const para = $$('[data-parallax]').map((el) => ({ el, k: parseFloat(el.dataset.parallax), img: el.tagName === 'IMG' ? el : $('img', el) }));
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY;
    header.classList.toggle('is-solid', y > 20);
    callbar.classList.toggle('is-visible', y > innerHeight * 0.6);
    if (reduce) return;
    const vh = innerHeight;
    para.forEach(({ el, k, img }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = (r.top + r.height / 2 - vh / 2) * k;
      (img || el).style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)${el === img ? ' rotate(8deg)' : ''}`;
    });
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();

  // Erscheinen beim Scrollen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      el.style.setProperty('--d', `${Math.max(0, sibs.indexOf(el)) * 0.12}s`);
      el.classList.add('is-in');
      io.unobserve(el);
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach((el) => io.observe(el));
})();
