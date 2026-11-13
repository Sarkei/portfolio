export type CvEntry = {
  period: string;
  title: string;
  place: string;
  details?: string[];
};

export type CvSkillGroup = { label: string; items: string[] };

export const cv = {
  name: 'Tim Nagraszus',
  role: 'Auszubildender Fachinformatiker für Anwendungsentwicklung',
  contact: [
    { label: 'E-Mail', value: 'nagraszust@gmail.com', href: 'mailto:nagraszust@gmail.com' },
    { label: 'GitHub', value: 'github.com/Sarkei', href: 'https://github.com/Sarkei' },
    { label: 'Portfolio', value: 'portfolio.nas-timgreen.com', href: 'https://portfolio.nas-timgreen.com' },
  ],
  profile:
    'Im zweiten Ausbildungsjahr zum Fachinformatiker für Anwendungsentwicklung. Ich baue Anwendungen, die täglich benutzt werden — von der Datenbank über die API bis zur Oberfläche, betrieben in Docker auf eigener Hardware. Neun eigene Projekte, fünf davon im Dauerbetrieb.',
  highlights: [
    { value: '9', label: 'eigene Anwendungen' },
    { value: '5', label: 'im Dauerbetrieb' },
    { value: '2.', label: 'Ausbildungsjahr' },
  ],
  experience: [
    {
      period: 'seit 09/2025',
      title: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
      place: 'Agenda Informationssysteme GmbH & Co. KG',
      details: [
        'Mitarbeit an betrieblicher Softwareentwicklung im Team',
        'Berufsschule 1 Traunstein, Blockunterricht (Klasse IT11b)',
      ],
    },
    {
      period: '09/2023 – 08/2025',
      title: 'Werkstudent',
      place: 'ROFA Industrial Automation AG',
      details: ['Unterstützung in IT-nahen Aufgaben parallel zum Studium'],
    },
    {
      period: '2020 – 2022',
      title: 'Minijob, Lager und Kasse',
      place: 'Getränkemarkt, Stephanskirchen',
      details: ['Kundenkontakt, Warenannahme und Kassensystem im Tagesbetrieb'],
    },
  ] as CvEntry[],
  education: [
    {
      period: '2022 – 2025',
      title: 'Studium Informatik',
      place: 'Technische Hochschule Rosenheim',
    },
    {
      period: '2012 – 2021',
      title: 'Allgemeine Hochschulreife',
      place: 'Karolinen-Gymnasium Rosenheim',
    },
  ] as CvEntry[],
  projects: [
    {
      title: 'Meal Planner',
      text: 'Wochenplanung für Haushalte mit gemeinsamer Rezeptsammlung und KI-Assistent, der aus den Vorgaben aller Mitglieder einen Plan und die Einkaufsliste baut.',
      tech: 'React · TypeScript · Express · PostgreSQL',
    },
    {
      title: 'Darts-Tracker',
      text: 'Scoring für Steeldarts mit Checkout-Vorschlägen, Live-Statistik, Elo-Wertung und Trainingsmodus für Doppel.',
      tech: 'React · Node.js · PostgreSQL',
    },
    {
      title: 'MitFahr.io',
      text: 'Fahrgemeinschaften mit Spritpreisberechnung und automatischem Kostenausgleich zwischen allen Mitfahrenden.',
      tech: 'React · TypeScript · PostgreSQL',
    },
    {
      title: 'Education Planner',
      text: 'Lernmittelverwaltung für die Berufsschule: Fächer, Unterlagen, Suche und Wiederherstellung aus dem Papierkorb.',
      tech: 'React · Express · SQLite',
    },
    {
      title: 'Kita-Planner',
      text: 'Gruppen- und Belegungsplanung für Kitas mit Jahresübersicht und KI-Unterstützung beim Ausfüllen der Betreuungszeiten.',
      tech: 'React · Express · PostgreSQL',
    },
    {
      title: 'Fitness-Tracker',
      text: 'Trainings- und Ernährungsprotokoll mit Wochenauswertung, Fortschrittskurven und einem Coach, der auf die eigenen Daten antwortet.',
      tech: 'React · TypeScript · PostgreSQL',
    },
  ],
  principles: [
    { title: 'Erst der Datenbestand', text: 'Schema, Rechte und Migrationen vor der Oberfläche — sonst räumt man später hinterher.' },
    { title: 'Betrieb mitdenken', text: 'Backups, Logs und ein Deployment, das auch in zwei Jahren noch nachvollziehbar ist.' },
    { title: 'KI mit Prüfung', text: 'Sprachmodelle liefern Vorschläge, die Anwendung validiert sie gegen ein festes Schema.' },
  ],
  skills: [
    { label: 'Programmiersprachen', items: ['TypeScript', 'JavaScript', 'Java', 'C#', 'C', 'SQL', 'HTML/CSS', 'Delphi'] },
    { label: 'Frontend', items: ['React', 'Tailwind CSS', 'Vite'] },
    { label: 'Backend', items: ['Node.js', 'Express', '.NET', 'REST-APIs', 'PostgreSQL', 'Authentifizierung'] },
    { label: 'KI-Integration', items: ['DeepSeek', 'Mistral', 'strukturierte Ausgaben', 'Validierung'] },
    { label: 'Betrieb', items: ['Linux', 'Docker Compose', 'nginx', 'Cloudflare Tunnel', 'Backups'] },
    { label: 'Werkzeuge', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Visual Studio'] },
  ] as CvSkillGroup[],
  languages: [
    { name: 'Deutsch', level: 'Muttersprache' },
    { name: 'Englisch', level: 'Schulkenntnisse' },
    { name: 'Französisch', level: 'Schulkenntnisse' },
  ],
  interests: ['Klettern', 'Kraftsport', 'Radfahren', 'Laufen'],
  updated: 'November 2026',
};
