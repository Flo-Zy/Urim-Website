# Kfz-Gutachter Kokaj – neue Startseite (Entwurf)

Erster Designentwurf für die Hauptseite von https://kfzgutachter-kokaj.de/.
Reines HTML/CSS/JS, keine Abhängigkeiten, kein Build-Schritt – `index.html` im Browser öffnen.

## Aufbau
- `index.html` – Startseite inkl. Meta-Tags, Open Graph, JSON-LD (LocalBusiness + FAQPage)
- `assets/css/style.css` – Design-Tokens (Farben aus dem Logo), Layout, Animationen
- `assets/js/main.js` – Menü, Header, Hero-Zähler, Ablauf-Animation, Formular-Validierung
- `assets/fonts/` – Archivo (variabel) lokal gehostet → DSGVO-konform, kein Google-Fonts-Request
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, Favicons

## SEO umgesetzt
- Ein `<h1>` mit Hauptkeyword „Kfz-Gutachter in München", saubere H2/H3-Hierarchie
- Title (< 60 Z.) und Meta-Description mit Keyword, Ort und Telefonnummer
- Canonical, Open Graph / Twitter Card, `lang="de"`
- Schema.org: `ProfessionalService` (Adresse, Telefon, Leistungen, Einsatzgebiet, Social) und `FAQPage`
- Semantisches HTML, Alt-Texte, Bildgrößen gesetzt (kein Layout-Shift), WebP + JPG-Fallback, Lazy Loading
- Lokale Keywords (Stadtteile, Landkreis) im Text
- Barrierearm: Skip-Link, sichtbarer Fokus, `prefers-reduced-motion`, Tap-Targets ≥ 44 px

## Offen vor dem Livegang
- Kontaktformular hat noch kein Backend (nur Validierung im Browser)
- Impressum / Datenschutz verlinken auf Platzhalter
- Öffnungszeiten und Geo-Koordinaten im JSON-LD ergänzen, sobald bestätigt
- Bilder stammen von der alten Website und sind nur 768 px breit → für den Hero hochauflösende Fotos besorgen
- Aussagen zu Kostenübernahme / Bagatellgrenze vom Kunden absegnen lassen
- Unterseiten (Unfallgutachten, Kaufberatung …) anlegen und in `sitemap.xml` eintragen
