# Portfolio — Tim Nagraszus

Persönliche Portfolio-Website für Bewerbungen und Kundenanfragen: eine Startseite mit
Über-mich, Werdegang und Schwerpunkten sowie ein Projektbereich mit Beschreibung, Technik
und Bildschirmfotos aus Desktop- und Mobilansicht.

Live: **https://portfolio.nas-timgreen.com**

## Inhalt

- **Startseite** — Kurzvorstellung, Kennzahlen, Über mich, eingesetzte Technologien,
  Arbeitsweise, Kontakt.
- **Projekte** (`#/projekte`) — neun eigene Anwendungen, filterbar nach Art. Jede Karte öffnet
  eine Detailansicht mit Problem, Funktionen, Technik, Kennzahlen und Umschalter
  Desktop/Mobil für die Bildschirmfotos.
- **Hell/Dunkel** — Umschalter in der Kopfzeile, Wahl wird im `localStorage` gemerkt.
- **Mobil** — eigene Navigation, Karten einspaltig, Screenshots als Geräterahmen.

## Technik

Vite + React 19 + TypeScript + Tailwind 4, vollständig statisch gebaut (kein Server, keine
Datenbank). Ausgeliefert über nginx im Docker-Container, öffentlich über Cloudflare Tunnel.

```
src/
  App.tsx            Kopfzeile, Hash-Router (#/, #/projekte), Theme, Modal
  pages/Home.tsx     Startseite
  pages/Projects.tsx Projektübersicht mit Filtern
  components/        ProjectCard, ProjectModal, Cover
  data/projects.ts   alle Projektinhalte an einer Stelle
public/shots/        Bildschirmfotos (Desktop 2880 px, Mobil 780 px breit)
```

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
```

## Deployment

```bash
docker build -t portfolio:1.0 .
docker run -d --name portfolio --network cloudflare-tunnel-net \
  -p 22228:80 --restart unless-stopped portfolio:1.0
```

Route: `portfolio.nas-timgreen.com → http://portfolio:80` (Cloudflare Tunnel, DNS per
`/opt/data/scripts/cloudflare_routes.py`).

Auf der NAS wird ohne Buildx gebaut: statische Dateien in einen nginx-Container kopieren.

```bash
npm run build
docker cp dist/. portfolio:/usr/share/nginx/html/
docker restart portfolio
```

## Projektinhalte ändern

Alle Texte stehen in `src/data/projects.ts`. Ein Eintrag braucht `title`, `subtitle`,
`summary`, `problem`, `features`, `stack`, `highlights` und optional `shots`:

```ts
shots: { desktop: '/shots/meal-desktop.png', mobile: '/shots/meal-mobile.png' }
```

Projekte ohne Bild bekommen automatisch ein gestaltetes Cover mit Icon und Stack-Chips.

## Bildschirmfotos

Aufgenommen aus den laufenden Instanzen (1440 × 900 Desktop, 390 × 844 Mobil), danach auf
den Inhaltsbereich zugeschnitten und als PNG gespeichert. Originale liegen ungeschnitten in
`public/shots/full/`.
