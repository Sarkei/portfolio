import {
  ArrowRight,
  Boxes,
  Database,
  GitBranch,
  Layers,
  Mail,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const facts = [
  { label: 'Ausbildung', value: 'Fachinformatiker für Anwendungsentwicklung, 2. Ausbildungsjahr' },
  { label: 'Betrieb', value: 'Agenda Software' },
  { label: 'Berufsschule', value: 'BS1 Traunstein, Blockunterricht' },
  { label: 'Schwerpunkt', value: 'Web-Apps, KI-Integration, self-hosted Betrieb' },
];

const skillGroups = [
  {
    icon: Layers,
    title: 'Frontend',
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Blazor', 'PWA'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST-APIs', 'SSE & WebSockets', 'JWT-Auth'],
  },
  {
    icon: Terminal,
    title: 'Betrieb & Deployment',
    items: ['Docker & Compose', 'Linux', 'Cloudflare Tunnel', 'Self-Hosting', 'Backups & Monitoring'],
  },
  {
    icon: Sparkles,
    title: 'KI-Integration',
    items: ['DeepSeek', 'Mistral', 'Gemini', 'Prompt-Design', 'Function Calling', 'Strukturierte Ausgaben'],
  },
  {
    icon: Boxes,
    title: 'Weitere Sprachen',
    items: ['C# / .NET 8', 'Java 21', 'Python', 'SQL'],
  },
  {
    icon: Wrench,
    title: 'Arbeitsweise',
    items: ['Datenmodell zuerst', 'Kleine Commits', 'Tests vor dem Deploy', 'Dokumentation im Repo'],
  },
];

const principles = [
  {
    title: 'Datenmodell vor Oberfläche',
    text: 'Bevor eine Ansicht entsteht, steht das Schema: Rollen, Rechte, Beziehungen. Änderungen an Feldern werden migriert, nicht überschrieben — sonst zeigt die Oberfläche später etwas anderes als die Datenbank weiß.',
  },
  {
    title: 'Self-hosted statt abhängig',
    text: 'Alle Projekte laufen auf eigener Hardware: Docker-Container, PostgreSQL, Cloudflare-Tunnel. Daten bleiben dort, wo sie hingehören, und der Betrieb ist reproduzierbar.',
  },
  {
    title: 'KI als Werkzeug, nicht als Fassade',
    text: 'Modelle bekommen klare Aufgaben, feste Schemas und geprüfte Ergebnisse. Wenn eine Antwort nicht validiert werden kann, wird sie nicht gespeichert — lieber ein Fehler als falsche Daten.',
  },
];

export function Home({
  onOpenProject,
  onNavigate,
}: {
  onOpenProject: (id: string) => void;
  onNavigate: (target: { label: string; to?: string; section?: string }) => void;
}) {
  const featured = projects.filter((p) => p.shots?.desktop).slice(0, 4);

  return (
    <main id="start">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-accent-soft blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Fachinformatiker für Anwendungsentwicklung
          </p>
          <h1 className="reveal mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Ich baue Web-Apps, die im Alltag
            <span className="italic text-accent"> wirklich benutzt </span>
            werden.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ich bin Tim Nagraszus. Ich entwickle Anwendungen von der Datenbank bis zur Oberfläche —
            mit React, TypeScript und Node, betrieben auf eigener Infrastruktur. Was hier steht, läuft
            nicht als Demo, sondern täglich im Einsatz.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#/projekte"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium transition hover:opacity-90"
              style={{ color: 'var(--on-accent)' }}
            >
              Projekte ansehen <ArrowRight size={16} />
            </a>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                onNavigate({ label: 'Kontakt', section: 'kontakt' });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm transition hover:border-accent/50"
            >
              <Mail size={16} /> Kontakt
            </a>
          </div>

          <dl className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {[
              { k: '9', v: 'eigene Projekte' },
              { k: '5', v: 'im Dauerbetrieb' },
              { k: '7', v: 'Web-Anwendungen' },
              { k: '4', v: 'Sprachen im Einsatz' },
            ].map((s) => (
              <div key={s.v} className="bg-surface px-5 py-5">
                <dt className="font-serif text-3xl leading-none">{s.k}</dt>
                <dd className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber" className="border-t border-line bg-surface/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            <h2 className="font-serif text-3xl sm:text-4xl">Über mich</h2>
            <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed">
              <p>
                Ich lerne Fachinformatiker für Anwendungsentwicklung bei Agenda Software und bin im
                zweiten Ausbildungsjahr an der BS1 Traunstein. Der Teil, der mich am meisten
                interessiert, ist der ganze Weg einer Anwendung: Datenmodell, API, Oberfläche — und
                der Betrieb danach.
              </p>
              <p>
                Deshalb entstehen meine Projekte nicht als Übungsaufgaben, sondern als Werkzeuge, die
                ich selbst und mein Umfeld benutzen: Essensplanung, Darts-Abende, Fahrgemeinschaften,
                Schulunterlagen. Jede App läuft in Docker auf einem eigenen Server, mit Datenbank,
                Anmeldung und Backup.
              </p>
              <p>
                Neben der Ausbildung baue ich digitale Services für lokale Betriebe auf — Websites,
                kleine Web-Apps und Automatisierungen. Am liebsten dort, wo bisher Zettel, Excel und
                WhatsApp Gruppen die Arbeit machen.
              </p>
            </div>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="bg-surface px-4 py-3.5">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="reveal self-start rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <img
                src="/portrait-128.png"
                alt="Tim Nagraszus"
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-line ring-offset-2 ring-offset-surface"
              />
              <div>
                <p className="font-serif text-lg leading-tight">Tim Nagraszus</p>
                <p className="text-xs text-muted">Anwendungsentwicklung · Oberbayern</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Database size={17} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-muted">
                  <span className="text-ink">Vollständige Anwendungen</span> — von der ersten Tabelle
                  bis zum Deployment, inklusive Anmeldung, Rechten und Sicherung.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <GitBranch size={17} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-muted">
                  <span className="text-ink">Nachvollziehbar</span> — jede Änderung im Repo, jede
                  Entscheidung dokumentiert, Deployments wiederholbar.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={17} className="mt-0.5 shrink-0 text-accent" />
                <p className="text-muted">
                  <span className="text-ink">KI dort, wo sie hilft</span> — Planung, Texte,
                  Auswertungen. Nicht als Ersatz für Logik, sondern als Beschleuniger.
                </p>
              </div>
            </div>
            <a
              href="#/projekte"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline"
            >
              Alle Projekte <ArrowRight size={15} />
            </a>
          </aside>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-line bg-surface/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="reveal font-serif text-3xl sm:text-4xl">Womit ich arbeite</h2>
          <p className="reveal mt-2 max-w-2xl text-muted">
            Kein Sammelbecken aus Schlagwörtern: Diese Werkzeuge sind in den Projekten unten
            tatsächlich im Einsatz.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.title} className="reveal rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center gap-2.5">
                  <g.icon size={18} className="text-accent" />
                  <h3 className="text-sm font-medium">{g.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arbeitsweise */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="reveal font-serif text-3xl sm:text-4xl">Wie ich arbeite</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3 md:items-start">
            {principles.map((p, i) => (
              <div key={p.title} className="reveal rounded-2xl border border-line bg-surface p-6">
                <span className="font-serif text-2xl text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl">{p.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ausgewählte Projekte */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Ausgewählte Projekte</h2>
              <p className="mt-2 max-w-xl text-muted">
                Vier Anwendungen, die täglich laufen — mit Bildschirmfotos aus Desktop- und
                Mobilansicht.
              </p>
            </div>
            <a href="#/projekte" className="text-sm text-accent underline-offset-4 hover:underline">
              Alle {projects.length} Projekte →
            </a>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:items-start">
            {featured.map((p) => (
              <div key={p.id} className="reveal">
                <ProjectCard project={p} onOpen={() => onOpenProject(p.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-line bg-surface/60">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="reveal rounded-3xl border border-line bg-surface p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl">Kontakt</h2>
                <p className="mt-3 max-w-xl text-[16.5px] leading-relaxed text-muted">
                  Du suchst jemanden für eine Website, eine kleine Web-App oder eine Automatisierung —
                  oder willst mehr zu einem der Projekte wissen? Schreib mir, ich antworte in der
                  Regel am selben Tag.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:nagraszust@gmail.com"
                  className="flex items-center justify-between rounded-xl border border-line bg-paper px-4 py-3.5 transition hover:border-accent/50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <Mail size={17} className="text-accent" /> nagraszust@gmail.com
                  </span>
                  <ArrowRight size={16} className="text-muted" />
                </a>
                <a
                  href="https://github.com/Sarkei"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-line bg-paper px-4 py-3.5 transition hover:border-accent/50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <GitBranch size={17} className="text-accent" /> github.com/Sarkei
                  </span>
                  <ArrowRight size={16} className="text-muted" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
