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

export const werdegang = [
  {
    zeitraum: 'seit September 2025',
    titel: 'Ausbildung zum Fachinformatiker für Anwendungsentwicklung',
    ort: 'Agenda Software',
    punkte: [
      'Mitarbeit an betrieblicher Softwareentwicklung im Team',
      'Schwerpunkte: Web-Anwendungen, Datenbanken, KI-Anbindung',
      'Eigene Anwendungen von der Datenbank bis zum laufenden Betrieb',
    ],
  },
  {
    zeitraum: 'September 2023 – August 2025',
    titel: 'Werkstudent in IT-nahen Aufgaben',
    ort: 'ROFA Industrial Automation',
    punkte: ['Unterstützung im Tagesgeschäft parallel zum Studium'],
  },
  {
    zeitraum: '2022 – 2025',
    titel: 'Studium Informatik',
    ort: 'Technische Hochschule Rosenheim',
    punkte: ['Grundlagen in Programmierung, Datenbanken und Softwaretechnik'],
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
  { name: 'Englisch', niveau: 'technische Dokumentation, gute Lesekenntnisse' },
  { name: 'Französisch', niveau: 'Grundkenntnisse aus der Schule' },
];
