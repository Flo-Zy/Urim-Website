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

## Variante v4 – Japandi (`index-v4.html`)
Alternative Gestaltung, erzeugt mit der Prompt-Vorlage (Stil per Zufall: **Japandi**). Prompt: `prompts/v4-japandi.md`.
Idee: „Nach dem Unfall wird es laut. Bei uns wird es ruhig.“ – Stein- und Eichentöne, viel Weißraum,
ein roter Prüfstempel (Hanko) als einziger Farbakzent, ein Pinselkreis (Ensō) mit Live-Uhrzeit.
Ohne 3D und ohne Bibliotheken (`assets/css/v4.css`, `assets/js/v4.js`, Schrift `fonts-v4.css`).
Steht auf `noindex`, damit sie nicht mit der Hauptseite konkurriert.

## Variante v5 – Original, aber besser (`index-v5.html`)
Basiert auf der bestehenden Seite und dem Kokaj-Wappen: bayerische Rauten, Blau/Weiß/Gold, die vier Originalleistungen.
- **Gutachter-Lupe:** Die Lupe aus dem Logo fährt über das Unfallfoto und zeigt Beispielbefunde mit Messwerten.
  Mit der Maus selbst führbar, auf dem Handy per Tippen. Zähler „x von 5 Befunden entdeckt“.
- **Gutachten-Check:** 3 Fragen → ehrliche Empfehlung (Gutachten / Kostenvoranschlag / Beratung), inkl. Abschlepp-Hinweis
- Foto im Wappen-Umriss mit Goldrand, Rautenband, das sich beim Scrollen umdreht, Ablauf als Rauten-Straße
- Abschleppdienst als Partnerleistung von Munich Express eingebunden
- Ohne Bibliotheken (`assets/css/v5.css`, `assets/js/v5.js`), `noindex` bis zur Entscheidung
