// Zentrale Angaben zur Person und zum Impressum.
// Anschrift fehlt bewusst noch — hier eintragen, dann erscheint sie überall.
export const person = {
  name: 'Tim Nagraszus',
  role: 'Fachinformatiker für Anwendungsentwicklung',
  email: 'nagraszust@gmail.com',
  github: 'https://github.com/Sarkei',
  githubHandle: 'github.com/Sarkei',
  location: 'Oberbayern',
  updated: 'November 2026',
};

export const ausbildung = [
  {
    zeitraum: 'seit 2025',
    titel: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
    ort: 'Agenda Software',
    punkte: [
      'Duales System: Betrieb und Berufsschule im Blockunterricht',
      'Schwerpunkte: Web-Anwendungen, Datenbanken, KI-Integration',
      'Eigenverantwortliche Umsetzung mehrerer Anwendungen von der Datenbank bis zum Betrieb',
    ],
  },
  {
    zeitraum: '2025 – 2027',
    titel: 'Berufsschule BS1 Traunstein, Klasse IT11b',
    ort: 'Blockunterricht',
    punkte: ['Abschlussprüfung Teil 1 im Februar 2027'],
  },
];

export const kenntnisse = [
  {gruppe: 'Sprachen', werte: 'TypeScript / JavaScript, C#, Java, Python, SQL, HTML/CSS'},
  {gruppe: 'Frontend', werte: 'React 19, Tailwind CSS, Vite, Blazor Server, PWAs'},
  {gruppe: 'Backend', werte: 'Node.js, Express, PostgreSQL, REST-APIs, JWT-Auth, SSE/WebSockets'},
  {gruppe: 'Betrieb', werte: 'Docker und Compose, Linux, Cloudflare Tunnel, Backups, Monitoring'},
  {gruppe: 'KI', werte: 'DeepSeek, Mistral, Gemini, Prompt-Design, Function Calling, strukturierte Ausgaben'},
];

export const sprachen = [
  { name: 'Deutsch', niveau: 'Muttersprache' },
  { name: 'Englisch', niveau: 'gute Lesekenntnisse, technische Dokumentation' },
];
