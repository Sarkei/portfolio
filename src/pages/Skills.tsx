import { Boxes, Layers, Server, Sparkles, Terminal, Wrench } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { sprachen } from '../data/site';

type Group = {
  icon: typeof Layers;
  title: string;
  lead: string;
  items: { name: string; note: string }[];
};

const groups: Group[] = [
  {
    icon: Layers,
    title: 'Frontend',
    lead: 'Oberflächen, die auf dem Handy genauso funktionieren wie am Rechner.',
    items: [
      { name: 'React 19', note: 'Komponenten, Hooks, eigenes State-Handling — Grundlage fast aller Projekte' },
      { name: 'TypeScript', note: 'durchgehend typisiert, auch in Server-Code und API-Verträgen' },
      { name: 'Tailwind CSS', note: 'eigenes Design-System mit Farbtokens und Dark Mode' },
      { name: 'Vite', note: 'Build und Dev-Server, Code-Splitting' },
      { name: 'Blazor', note: 'aus der Ausbildung, Komponenten mit C#' },
      { name: 'PWA', note: 'installierbar, Offline-Cache, Push' },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    lead: 'APIs, die Daten sauber halten und Fehler ehrlich melden.',
    items: [
      { name: 'Node.js & Express', note: 'REST-Endpunkte, Middleware, Validierung' },
      { name: 'PostgreSQL', note: 'Schema-Design, Indizes, Migrationen, JSONB für flexible Felder' },
      { name: 'JWT & Sessions', note: 'Anmeldung mit Rollen, Rechteprüfung pro Route' },
      { name: 'SSE & WebSockets', note: 'Live-Aktualisierung ohne Polling' },
      { name: 'C# / .NET 8', note: 'aus Betrieb und Berufsschule, Web-APIs mit EF Core' },
      { name: 'Java 21 & Python', note: 'Grundlagen und kleinere Werkzeuge, Automatisierungsskripte' },
    ],
  },
  {
    icon: Terminal,
    title: 'Betrieb & Deployment',
    lead: 'Was hier nicht läuft, existiert für mich nicht.',
    items: [
      { name: 'Docker & Compose', note: 'ein Container pro Dienst, reproduzierbar per Compose-Datei' },
      { name: 'Linux', note: 'Server administration, systemd, Rechte, Logs' },
      { name: 'Cloudflare Tunnel', note: 'öffentliche Erreichbarkeit ohne offene Ports' },
      { name: 'Backups & Monitoring', note: 'nächtliche Sicherungen, Health-Checks, Watchdog' },
      { name: 'Git & GitHub Actions', note: 'Branches, saubere Commits, Automatisierung' },
      { name: 'nginx', note: 'Reverse Proxy, statische Auslieferung, Caching' },
    ],
  },
  {
    icon: Sparkles,
    title: 'KI-Integration',
    lead: 'Modelle als Baustein — mit klaren Grenzen.',
    items: [
      { name: 'DeepSeek, Mistral, Gemini', note: 'mehrere Provider, austauschbar über eine gemeinsame Schnittstelle' },
      { name: 'Prompt-Design', note: 'Systemprompts mit Formatvorgaben und Beispielen' },
      { name: 'Function Calling', note: 'Modell ruft definierte Werkzeuge auf statt frei zu antworten' },
      { name: 'Strukturierte Ausgaben', note: 'JSON-Schema, Validierung, Wiederholung bei Fehlern' },
      { name: 'Eigene KI-Features', note: 'Rezeptvorschläge, Trainings-Coach, Assistent im Kita-Planner' },
    ],
  },
  {
    icon: Boxes,
    title: 'Sprachen & Grundlagen',
    lead: 'Was ich aus Ausbildung und Schule mitbringe.',
    items: [
      { name: 'SQL', note: 'Abfragen, Joins, Auswertungen, Performance' },
      { name: 'Java', note: 'Objektorientierung, Collections, Unit-Tests' },
      { name: 'C#', note: 'Klassen, LINQ, ASP.NET-Grundlagen' },
      { name: 'Python', note: 'Skripte, Datenverarbeitung, Automatisierung' },
      { name: 'HTML & CSS', note: 'Semantik, Barrierefreiheit, responsive Layouts' },
      { name: 'Netzwerktechnik', note: 'IP, DNS, TLS, Reverse Proxy' },
    ],
  },
  {
    icon: Wrench,
    title: 'Arbeitsweise',
    lead: 'Wie ich an ein Problem herangehe.',
    items: [
      { name: 'Datenmodell zuerst', note: 'erst Schema und Rechte, dann die Oberfläche' },
      { name: 'Kleine Commits', note: 'eine Änderung, ein Gedanke, eine nachvollziehbare Nachricht' },
      { name: 'Tests vor dem Deploy', note: 'Build, Typprüfung und ein echter Klick-Durchlauf' },
      { name: 'Dokumentation im Repo', note: 'README mit Betrieb, Zugängen und Entscheidungen' },
      { name: 'Fehler selbst beheben', note: 'reproduzieren, Ursache eingrenzen, prüfen, dann berichten' },
    ],
  },
];

export function Skills() {
  return (
    <main className="pb-20">
      <PageHeader
        label="Skills"
        title="Womit ich arbeite"
        intro="Keine Schlagwortsammlung: Jedes dieser Werkzeuge steckt in mindestens einem Projekt, das gerade läuft. Die Notizen sagen, wofür ich es einsetze."
      />

      <section className="mx-auto mt-6 max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {groups.map((g) => (
            <div key={g.title} className="reveal rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2.5">
                <g.icon size={18} className="text-accent" />
                <h2 className="text-[15px] font-medium">{g.title}</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{g.lead}</p>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i.name}>
                    <p className="text-[13.5px] text-ink">{i.name}</p>
                    <p className="text-[12.5px] leading-relaxed text-muted">{i.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-5">
        <div className="reveal rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-serif text-2xl">Sprachen</h2>
          <dl className="mt-4 divide-y divide-line/70 border-t border-line/70">
            {sprachen.map((s) => (
              <div key={s.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                <dt className="text-[15px]">{s.name}</dt>
                <dd className="text-[13px] text-muted">{s.niveau}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
