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
Aufbau und Ideen der bestehenden Seite, gestaltet mit dem neuen **Munich-Express-Logo** (Rot/Schwarz/Weiß/Silber).
Das Foto steckt in Wappenform (Anlehnung an das alte Kokaj-Wappen), Rauten bleiben als Gestaltungselement.
- **Gutachten-Check:** 3 Fragen → ehrliche Empfehlung (Gutachten / Kostenvoranschlag / Beratung), inkl. Abschlepp-Hinweis
- Foto im Wappen-Umriss mit Chromrand, Rautenband, das sich beim Scrollen umdreht, Ablauf als Rauten-Straße
- Abschleppdienst als eigene Hauptleistung
- Ohne Bibliotheken (`assets/css/v5.css`, `assets/js/v5.js`), `noindex` bis zur Entscheidung

## Variante v6 – Bayerisch-Blau mit Animationen (`index-v6.html`)
Von Grund auf neu, Texte der Originalseite. Farben und Rauten aus dem Kokaj-Wappen: Nachtblau, ein kräftiges Blau als Akzent.
- **Hero:** Rautenfeld (Canvas), das auf den Mauszeiger reagiert; Foto klappt aus einer Raute auf
- **Laufband**, das beim Scrollen schneller wird und sich neigt
- **Versprechen:** Abschnitt bleibt stehen, die Wörter füllen sich beim Scrollen
- **Leistungen:** seitlicher Schwenk durch die drei Leistungen (am Handy untereinander)
- Team-Fotos neigen sich zum Mauszeiger, Telefonnummer rollt ein, Anruf-Button zieht zum Mauszeiger
- Quellcode `src/v6.js` (GSAP + ScrollTrigger), gebündelt mit `npm run build:v6` nach `assets/js/v6.js`; Stil in `assets/css/v6.css`
- Bei der Systemeinstellung „Bewegung reduzieren“ bleibt die Seite ruhig. Zum Ansehen trotzdem: `index-v6.html?motion=1`
- `noindex` bis zur Entscheidung

## Gesamtpaket v7 – beide Unternehmen (`index-v7.html`)
Gestaltung und Animationen der v6, dazu beide Unternehmen des Kunden: **KFZ Sachverständiger & Gutachter Kokaj** und **Munich Express Abschleppdienst**.
Texte stammen von kfzgutachter-kokaj.de inklusive der Unterseiten Unfallgutachten, Kaufberatung, Über uns und Kontakt.
- Zwei-Unternehmen-Karten unter dem Hero, Abschleppdienst als vierte Leistung im seitlichen Schwenk
- Unfallgutachten: Service-Kacheln und Vorteile; Kaufberatung: sechs Schritte als Kartenstapel beim Scrollen
- Kontakt mit Formular (Name, Telefon, E-mail, Nachricht). Noch ohne Server: öffnet eine vorbereitete E-Mail
- **Nicht vom Original:** die zwei Sätze zum Abschleppdienst (im HTML markiert) und die Fehlermeldungen des Formulars
- Quellcode `src/v7.js`, Build `npm run build:v7`, Stil `assets/css/v7.css`; Animationen bei „Bewegung reduzieren“ mit `?motion=1` ansehen

## Gesamtpaket v8 – v5-Design mit beiden Unternehmen (`index-v8.html`)
Aktueller Stand. Gestaltung der v5 (Rot/Schwarz/Silber, schräge Formen, Siegel, Laufband), die dem Kunden gefallen hat,
kombiniert mit den Inhalten der v7 (beide Unternehmen, Texte der Unterseiten, Kontaktformular) und GSAP-Bewegung.
- `assets/css/v8.css` baut auf `v5.css` auf; neue Abschnitte (Firmenkarten, Abschleppdienst, Service-Kacheln, Kartenstapel, Formular) in derselben Formsprache
- Quellcode `src/v8.js`, Build `npm run build:v8`
- Animationen laufen nur ohne „Bewegung reduzieren“; zum Ansehen trotzdem `index-v8.html?motion=1`
- Nicht vom Original: die zwei Sätze zum Abschleppdienst (im HTML markiert) und die Fehlermeldungen des Formulars
