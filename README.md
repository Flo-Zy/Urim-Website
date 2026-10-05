# Munich Express – Abschleppdienst & Kfz-Gutachter Kokaj (Entwurf v2)

Startseiten-Entwurf für https://kfzgutachter-kokaj.de/ mit 3D-Szene und scroll-gesteuerten Animationen.
`index.html` direkt im Browser öffnen – funktioniert auch ohne Server.

## Was passiert auf der Seite
- **Ladebildschirm** mit Logo und Zähler 000 → 100, danach fährt der Vorhang nach oben
- **3D-Hero (WebGL / Three.js):** Ein Fahrzeug setzt sich aus ~26.000 Lichtpunkten zusammen,
  ein Laser scannt es, eine Rundumleuchte streift orange über den Boden.
  Beim Scrollen fährt die Kamera einmal ums Auto, Schadenpunkte erscheinen („Schaden erkannt.“),
  danach zerfällt das Auto in Partikel. Kamera folgt leicht der Maus.
- **Laufbänder**, die schneller werden und sich neigen, je schneller man scrollt
- **3D-Kippkarten** mit Lichtreflex, die der Maus folgen
- **Fallblattanzeige** mit der echten Uhrzeit in München (24h-Botschaft)
- **Kosten-Text**, der beim Scrollen Wort für Wort aufleuchtet
- **Ablauf** als horizontaler Scroll, ein Abschleppwagen fährt die Straße mit
- Magnetische Buttons, eigener Cursor, Smooth Scroll (Lenis), weiche FAQ-Animationen
- `prefers-reduced-motion` wird respektiert (keine Animationen, kein Ladebildschirm)

## Technik
- Quellcode in `src/` (`main.js`, `hero3d.js`), gebündelt nach `assets/js/app.js`
- Bibliotheken: three.js, GSAP + ScrollTrigger, Lenis – alles lokal gebündelt, keine CDNs
- Schriften (Archivo, variabel, normal + kursiv) als Data-URI in `assets/css/fonts.css` → DSGVO-konform und auch per Doppelklick lauffähig

Nach Änderungen in `src/` neu bauen:
```
npm install
npm run build      # oder: npm run watch
```

## SEO
- H1 „Abschleppdienst & Kfz-Gutachter in München“, Title, Description, Canonical, Open Graph
- JSON-LD: `AutomotiveBusiness` (24/7-Öffnungszeiten, Leistungen, Adresse) + `FAQPage`
- Gesplittete Animations-Texte bleiben für Suchmaschinen/Screenreader als Klartext erhalten
- 3D-Canvas ist rein dekorativ (`aria-hidden`), Fallback-Bild ohne WebGL

## Offen vor dem Livegang
- **Abschleppdienst** als Leistung wurde aus dem neuen Logo abgeleitet → mit Kunde klären
- Markenname: Seite heißt jetzt „Munich Express“, Domain ist noch kfzgutachter-kokaj.de
- JS-Bundle ist ~200 KB (gzip) wegen three.js → für Produktion 3D erst nach dem ersten Paint nachladen
- Formular ohne Backend, Impressum/Datenschutz sind Platzhalter
- Fotos (768 px) gegen hochauflösende tauschen; Logo als Vektor (SVG) besorgen
