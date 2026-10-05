# Munich Express – Abschleppdienst & Kfz-Gutachter Kokaj (Entwurf v2)

Startseiten-Entwurf für https://kfzgutachter-kokaj.de/ mit 3D-Szene und scroll-gesteuerten Animationen.
`index.html` direkt im Browser öffnen – funktioniert auch ohne Server.

## Ausrichtung (v3)
Seriöser Fachbetrieb statt Show: ruhige Typografie, helle Inhaltsbereiche, Rot nur für Handlungen.
Die Seite spricht Kunden aus ihrer Situation heraus an.

## Aufbau der Startseite
1. **Hero mit 3D-Szene:** Fahrzeug als Punktwolke, alle paar Sekunden ein ruhiger Laser-Scan mit Schadenmarkierungen
2. **„Was ist passiert?“:** drei Situationen (Unfall / Panne / Auto prüfen) mit direktem Handlungsknopf
3. **„Was Sie jetzt tun sollten“:** 5-Punkte-Checkliste nach dem Unfall (hilfreich + gut für SEO)
4. **Leistungen:** Unfallgutachten, Abschleppdienst, Kaufberatung, Oldtimer, Fahrzeugbewertung
5. **Ihre Rechte als Geschädigter:** freie Gutachterwahl, Kostenübernahme, Wertminderung, Nutzungsausfall
6. **Ablauf** in 4 Schritten, **24h-Leiste** mit Live-Uhrzeit, **Über uns**, **FAQ**, **Kontakt + Rückruf-Formular**
- Mobil: feste Anrufleiste unten; `prefers-reduced-motion` wird respektiert

## Technik
- Quellcode in `src/` (`main.js`, `hero3d.js`), gebündelt nach `assets/js/app.js`
- three.js + GSAP, lokal gebündelt (keine CDNs)
- Schriften (Archivo) als Data-URI in `assets/css/fonts.css` → DSGVO-konform, läuft auch per Doppelklick

```
npm install
npm run build      # oder: npm run watch
```

## SEO
- H1 „Kfz-Gutachter und Abschleppdienst in München“, Title, Description, Canonical, Open Graph
- JSON-LD: `AutomotiveBusiness` (24/7, Leistungen, Adresse) + `FAQPage`
- Ratgeber-Inhalte (Checkliste, Rechte) liefern Suchbegriffe wie „was tun nach Unfall“, „freie Gutachterwahl“

## Offen vor dem Livegang
- Abschleppdienst + Markenname „Munich Express“ mit Kunde bestätigen
- Echte Google-Bewertungen einbinden (stärkstes Vertrauenssignal, bewusst keine erfundenen Bewertungen)
- Formular-Backend, Impressum, Datenschutz
- Hochauflösende Fotos und Logo als SVG
- three.js (~180 KB gzip) für Produktion erst nach dem ersten Bildaufbau nachladen
