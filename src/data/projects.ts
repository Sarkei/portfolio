export type Category = 'web' | 'game' | 'bot';

export type Shot = { desktop?: string; mobile?: string };

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  ai?: boolean;
  year: string;
  status: 'live' | 'intern' | 'archiv';
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  highlights: { label: string; value: string }[];
  shots?: Shot;
  repo?: string;
  demo?: string;
  coverIcon: 'calendar' | 'target' | 'car' | 'folder' | 'sparkles' | 'dumbbell' | 'wallet' | 'gamepad' | 'bot';
};

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Alle Projekte' },
  { id: 'web', label: 'Web-Anwendungen' },
  { id: 'game', label: 'Spiele' },
  { id: 'bot', label: 'Bots & Automatisierung' },
];

export const projects: Project[] = [
  {
    id: 'meal-planner',
    title: 'Meal Planner',
    subtitle: 'Gemeinsame Essensplanung mit KI',
    category: 'web',
    ai: true,
    year: '2026',
    status: 'live',
    summary:
      'Web-App für Haushalte: Wochenplan, gemeinsame Rezeptsammlung und ein KI-Assistent, der aus den Vorgaben aller Mitglieder einen Plan baut und die Einkaufsliste daraus ableitet.',
    problem:
      'Wer für mehrere Personen kocht, sammelt Rezepte in Chats, Zetteln und Screenshots. Diese App bündelt Sammlung, Planung und Einkauf an einer Stelle — inklusive Allergien, Küchenvorlieben und Zeitbudget.',
    features: [
      'Über 900 Rezepte in einer gemeinsamen, durchsuchbaren Sammlung mit Bewertungen, Favoriten und Kommentaren',
      'Wochenplan per Drag & Drop, auf Wunsch komplett von der KI erzeugt — nach Ernährungsform, Allergien und Küchengeräten aller Haushaltsmitglieder',
      'Einkaufsliste, die aus dem Plan abgeleitet und nach Zutaten gruppiert wird; Mengen werden über Einheiten hinweg korrekt summiert',
      'Echtzeit-Synchronisation zwischen allen Geräten eines Haushalts über Server-Sent Events',
      'Rezepte werden nie gelöscht, sondern archiviert — Bewertungen und Historie bleiben erhalten',
    ],
    stack: ['React 19', 'TypeScript', 'Tailwind 4', 'Express', 'PostgreSQL', 'DeepSeek API', 'Docker'],
    highlights: [
      { label: 'Rezepte', value: '912' },
      { label: 'Rollen', value: '3' },
      { label: 'Live seit', value: '2026' },
    ],
    shots: { desktop: '/shots/meal-desktop.webp', mobile: '/shots/meal-mobile.webp' },
    demo: 'https://meal-planner.nas-timgreen.com/?demo=1',
    repo: 'https://github.com/Sarkei/meal-planner',
    coverIcon: 'calendar',
  },
  {
    id: 'darts-tracker',
    title: 'Darts Tracker',
    subtitle: 'Match-Tracking, Statistik und Rangliste',
    category: 'web',
    ai: true,
    year: '2026',
    status: 'live',
    summary:
      'Selbst gehostete Darts-App fürs Wohnzimmer: Live-Scoring nach offiziellen Regeln, Checkout-Vorschläge, Wurfhistorie, Elo-Rangliste und ein Kamera-Modus, der das Handy als Sensor nutzt.',
    problem:
      'Papierbögen können keine Averages, Doppelquoten oder Checkout-Wege ausrechnen. Die App ist die Anzeigetafel für ein oder mehrere Geräte — Handy zum Eingeben, Tablet als Board.',
    features: [
      'Spielstand wird aus den gespeicherten Wurf-Ereignissen neu berechnet — Undo und Korrekturen bleiben exakt',
      'Regelwerk inklusive Bust, Double-In/Double-Out, Leg- und Satzwechsel sowie Checkout-Vorschlägen mit Alternativen',
      'Statistik mit Treffer-Heatmap, Average, First-9, Doppel- und Checkoutquote, 180ern und Busts',
      'Elo-Rangliste (K = 32) aus allen beendeten Matches',
      'KI-Analyse und Trainingsplan aus den eigenen Wurfdaten',
      'Kamera-Tracking als eigener Modus: Board-Erkennung im Browser, Live-Dashboard auf einem zweiten Gerät',
    ],
    stack: ['React PWA', 'TypeScript', 'Express', 'PostgreSQL', 'SSE', 'DeepSeek API', 'Docker'],
    highlights: [
      { label: 'Spieler', value: '2 – 8' },
      { label: 'Startpunkte', value: '301–1001' },
      { label: 'Kameras', value: '1–2' },
    ],
    shots: { desktop: '/shots/darts-desktop.webp', mobile: '/shots/darts-mobile.webp' },
    demo: 'https://darts.nas-timgreen.com/?demo=1',
    repo: 'https://github.com/Sarkei/darts-tracker',
    coverIcon: 'target',
  },
  {
    id: 'mitfahr-io',
    title: 'MitFahr.io',
    subtitle: 'Fahrgemeinschaften fair abrechnen',
    category: 'web',
    year: '2026',
    status: 'live',
    summary:
      'Eine App für Fahrgemeinschaften: Fahrten eintragen, Spritkosten automatisch aus dem tagesaktuellen Tankpreis berechnen und in einer Matrix sehen, wer wem was schuldet.',
    problem:
      'Nach jeder gemeinsamen Fahrt beginnt dieselbe Rechnerei. MitFahr.io rechnet die Kosten je Insasse aus, schreibt den Tankpreis fest und hält offene Beträge samt Begleichung nachvollziehbar.',
    features: [
      'Kosten je Fahrt aus Kilometern, Verbrauch und automatisch abgerufenem Tankpreis (MTS-K-Daten)',
      'Zahlungsmatrix mit Fahrern und Mitfahrern, einzelne oder alle offenen Beträge begleichen',
      'Rollen und Rechte: normale Konten tragen eigene Fahrten ein, Admins verwalten alle Personen und Einstellungen',
      'Passwort vergessen per E-Mail-Code, Admin-Dashboard mit Kontenübersicht und Passwort-Reset',
      'Öffentlich erreichbar hinter Cloudflare mit Session-Cookies und serverseitigen Rechten',
    ],
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Cloudflare Tunnel', 'Docker'],
    highlights: [
      { label: 'Tankpreis', value: 'live' },
      { label: 'Kosten', value: 'pro Kopf' },
      { label: 'Rollen', value: 'Nutzer / Admin' },
    ],
    shots: { desktop: '/shots/mitfahr-desktop.webp', mobile: '/shots/mitfahr-mobile.webp' },
    demo: 'https://tankpreis-rechner.nas-timgreen.com/?demo=1',
    repo: 'https://github.com/Sarkei/tankpreis-rechner',
    coverIcon: 'car',
  },
  {
    id: 'education-planner',
    title: 'Education Planner',
    subtitle: 'Schulunterlagen wie in OneNote',
    category: 'web',
    year: '2026',
    status: 'live',
    summary:
      'Dateiverwaltung für die Berufsschule: links der Ordnerbaum, rechts das Dokument im Office-Editor. Alles liegt als echte Datei auf dem eigenen Server, inklusive Volltextsuche und Versionen.',
    problem:
      'Unterlagen liegen verstreut in Cloud-Ordnern, Downloads und Mails. Der Education Planner bringt sie in eine Struktur, die sich wie ein Notizbuch bedient — und die Daten bleiben auf der eigenen Hardware.',
    features: [
      'Ordnerbaum mit Drag & Drop, Papierkorb und Wiederherstellung',
      'Word-, Excel- und PowerPoint-Dateien direkt im Browser bearbeiten (ONLYOFFICE), inklusive gemeinsamem Arbeiten',
      'Automatisches Speichern mit Versionierung — die letzten 20 Fassungen bleiben erhalten',
      'Volltextsuche über Inhalte von docx, xlsx, pptx, PDF und Textdateien mit deutschen Wortstämmen',
      'Uploads in 8-MB-Teilen, damit auch große Dateien durch den Tunnel kommen',
      'Galerie- und Listenansicht, Freigaben pro Ordner oder Datei',
    ],
    stack: ['React 19', 'TypeScript', 'Express', 'PostgreSQL', 'ONLYOFFICE Docs', 'Docker'],
    highlights: [
      { label: 'Versionen', value: '20' },
      { label: 'Formate', value: '15+' },
      { label: 'Suche', value: 'Volltext' },
    ],
    shots: { desktop: '/shots/edu-desktop.webp', mobile: '/shots/edu-mobile.webp' },
    demo: 'https://education-planner.nas-timgreen.com/?demo=1',
    repo: 'https://github.com/Sarkei/education-planner',
    coverIcon: 'folder',
  },
  {
    id: 'kita-planner',
    title: 'Kita-Planer',
    subtitle: 'Pädagogische Angebote per KI',
    category: 'web',
    ai: true,
    year: '2025',
    status: 'intern',
    summary:
      'Aus wenigen Angaben — Thema, Zielgruppe, Dauer — entsteht ein vollständiges pädagogisches Angebot mit Materialliste, Zielen, Vorbereitung und Schritten, optional zweisprachig und illustriert.',
    problem:
      'Angebote für den Morgenkreis oder die Turnstunde entstehen oft abends nach Dienstschluss. Der Kita-Planer liefert einen fertigen Entwurf, den Erzieherinnen nur noch prüfen und anpassen müssen.',
    features: [
      'Kategorien von Morgenkreis über Experimente bis Kamishibai, Zielgruppen von Krippe bis Vorschule',
      'Strukturierte Ausgabe per JSON-Modus, damit Titel, Material und Schritte einzeln weiterverarbeitet werden können',
      'Bibliothek mit Suche, PDF-Export und optionalen Illustrationen',
      'Zweisprachige Angebote (Deutsch/Englisch) für mehrsprachige Gruppen',
    ],
    stack: ['React', 'TypeScript', 'Mistral API', 'PostgreSQL', 'Docker'],
    highlights: [
      { label: 'Kategorien', value: '7' },
      { label: 'Export', value: 'PDF' },
      { label: 'Sprachen', value: 'DE / EN' },
    ],
    repo: 'https://github.com/Sarkei/kita-planner',
    coverIcon: 'sparkles',
  },
  {
    id: 'fitness-tracker',
    title: 'VRTX Fitness',
    subtitle: 'Training, Ernährung und KI-Coach',
    category: 'web',
    ai: true,
    year: '2026',
    status: 'intern',
    summary:
      'Trainings- und Ernährungs-App: Sätze werden live protokolliert, Mahlzeiten per Text, Foto oder Barcode erfasst, und ein KI-Coach leitet daraus Wochenpläne und Fortschrittsberichte ab.',
    problem:
      'Trainingsapps zwingen in feste Pläne. VRTX geht vom tatsächlichen Training aus und verbindet Volumen, Ernährung und Körperdaten in einer Auswertung.',
    features: [
      'Live-Sessions mit Satzprotokoll, Vorlagen und Wochenplänen',
      'Mahlzeiten per Freitext, Foto oder Barcode mit Nährwertschätzung',
      'KI-Coach für Trainingspläne und Wochenberichte auf Basis der eigenen Daten',
      'Gewichtsverlauf, Körpermaße, Check-ins und Tagesziele',
      'Datenexport als JSON oder CSV',
    ],
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Open Food Facts', 'Docker'],
    highlights: [
      { label: 'Module', value: '6' },
      { label: 'Quellen', value: 'Text/Foto/EAN' },
      { label: 'Export', value: 'JSON/CSV' },
    ],
    repo: 'https://github.com/Sarkei/fitness-tracker',
    coverIcon: 'dumbbell',
  },
  {
    id: 'budget-tracker',
    title: 'Budget Tracker',
    subtitle: 'Private Finanzen, sauber getrennt',
    category: 'web',
    year: '2026',
    status: 'intern',
    summary:
      'Blazor-Server-Anwendung für mehrere Konten, Daueraufträge, geplante Zahlungen, Spartöpfe und gemeinsame Ausgaben — mit echter SQLite-Datei im eigenen Container.',
    problem:
      'Finanz-Apps liegen in der Cloud und mischen private Daten mit Werbung. Diese Variante läuft vollständig auf eigener Hardware und bleibt trotzdem bedienbar wie eine moderne Web-App.',
    features: [
      'Mehrere Konten mit Typ, Währung, Farbe und Anfangssaldo; Umschaltung über die Seitenleiste',
      'Wiederkehrende Posten mit Intervallen, Ratenzahlungen und geplanten Zahlungen',
      'Spartöpfe mit Fortschritt und Auswertungen nach Kategorie und Zeitraum',
      'Fremdwährungen mit tagesaktuellem Kurs',
      'Gemeinsame Ausgaben in Gruppen',
    ],
    stack: ['C#', '.NET 8', 'Blazor Server', 'SQLite', 'Docker'],
    highlights: [
      { label: 'Sprache', value: 'C#' },
      { label: 'Speicher', value: 'SQLite' },
      { label: 'Betrieb', value: 'self-hosted' },
    ],
    repo: 'https://github.com/Sarkei/budget-tracker',
    coverIcon: 'wallet',
  },
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    subtitle: 'Ein Spiel, zwei Renderer',
    category: 'game',
    year: '2025',
    status: 'archiv',
    summary:
      'Space-Invaders-Variante in Java 21: dieselbe Spiellogik läuft als Swing-Anwendung auf dem Desktop und als Browser-Spiel, das über WebSockets ferngesteuert wird.',
    problem:
      'Ein Experiment zur Trennung von Spiellogik und Darstellung: die Engine kennt weder Fenster noch Pixel, sie liefert Zeichenaufrufe oder JSON — je nach Client.',
    features: [
      'Wellen mit drei Alien-Typen, steigender Geschwindigkeit und Punkte-Multiplikatoren',
      'Munitionssystem mit Nachschub-Drops statt Dauerfeuer',
      '20 Upgrades in vier Kategorien',
      'Zwei Clients auf einer Engine: Swing-Desktop und Browser über WebSocket',
    ],
    stack: ['Java 21', 'Swing', 'WebSockets', 'Maven'],
    highlights: [
      { label: 'Renderer', value: '2' },
      { label: 'Upgrades', value: '20' },
      { label: 'Engine', value: 'geteilt' },
    ],
    repo: 'https://github.com/Sarkei/space-invaders',
    coverIcon: 'gamepad',
  },
  {
    id: 'freqtrade-bot',
    title: 'Freqtrade KI-Bot',
    subtitle: 'Selbstoptimierende Scalping-Strategie',
    category: 'bot',
    ai: true,
    year: '2026',
    status: 'intern',
    summary:
      'Spot-Bot für Binance: Eine 1-Minuten-Scalping-Strategie wird von einem zweiten Container zyklisch nachoptimiert, journaliert und per Telegram gemeldet — mit Rollback, wenn ein Lauf schlechter ist.',
    problem:
      'Strategieparameter veralten mit dem Markt. Der Bot testet Änderungen im Backtest, übernimmt sie nur bei messbarer Verbesserung und schreibt ausschließlich die Parameterdatei — nie Code oder Konfiguration.',
    features: [
      'Pullback-Einstieg mit Marktfilter, RSI-, Volumen- und ATR-Bedingungen',
      'Gestaffelte Take-Profit-Stufen und nachziehender Stop-Loss',
      'Optimierungszyklus aus Live-Analyse, Backtest, Hyperopt und Hold-out-Prüfung',
      'Übernahme nur bei Score-Verbesserung von mindestens 3 % und geprüftem Drawdown',
      'Audit-Log, Markdown-Reports und Telegram-Benachrichtigung bei jedem geschlossenen Trade',
    ],
    stack: ['Python', 'Freqtrade', 'Pandas', 'Docker', 'DeepSeek / Gemini'],
    highlights: [
      { label: 'Zeitrahmen', value: '1 min' },
      { label: 'Trigger', value: '12 Trades' },
      { label: 'Risiko', value: 'Stop −2,2 %' },
    ],
    repo: 'https://github.com/Sarkei/freqtrade-ki-bot',
    coverIcon: 'bot',
  },
];
