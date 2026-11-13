import { ArrowRight, FileText, FolderKanban, Mail, User, Wrench } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

const teile = [
  {
    icon: User,
    to: '#/ueber-mich',
    title: 'Über mich',
    text: 'Woher ich komme, was mich an Anwendungsentwicklung reizt und womit ich mich messe.',
  },
  {
    icon: Wrench,
    to: '#/skills',
    title: 'Skills',
    text: 'Die Werkzeuge, mit denen ich baue — jeweils mit dem Hinweis, wofür ich sie einsetze.',
  },
  {
    icon: FolderKanban,
    to: '#/projekte',
    title: 'Projekte',
    text: `${projects.length} eigene Anwendungen mit Bildschirmfotos, Demo-Zugang und Quellcode.`,
  },
  {
    icon: FileText,
    to: '#/lebenslauf',
    title: 'Lebenslauf',
    text: 'Werdegang, Kenntnisse und Projekte auf zwei Seiten — online und als PDF.',
  },
  {
    icon: Mail,
    to: '#/kontakt',
    title: 'Kontakt',
    text: 'E-Mail, GitHub und der schnellste Weg zu einer Antwort.',
  },
];

export function Home({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  const featured = projects.filter((p) => p.shots?.desktop).slice(0, 4);

  return (
    <main id="start">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Auszubildender Fachinformatiker für Anwendungsentwicklung
          </p>
          <h1 className="reveal mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Ich baue Web-Apps, die im Alltag
            <span className="italic text-accent"> wirklich benutzt </span>
            werden.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Ich bin Tim Nagraszus, im zweiten Ausbildungsjahr zum Fachinformatiker für
            Anwendungsentwicklung. In meiner Freizeit baue ich Anwendungen von der Datenbank bis zur
            Oberfläche — mit React, TypeScript und Node, betrieben auf eigener Infrastruktur. Was hier
            steht, läuft nicht als Demo, sondern täglich im Einsatz.
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
              href="#/kontakt"
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
              { k: '2', v: 'Ausbildungsjahr' },
            ].map((s) => (
              <div key={s.v} className="bg-surface px-5 py-5">
                <dt className="font-serif text-3xl leading-none">{s.k}</dt>
                <dd className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Übersicht: die fünf Bereiche */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="reveal flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-3xl sm:text-4xl">Alles auf einen Blick</h2>
            <p className="text-sm text-muted">Fünf Bereiche, jeder mit eigener Seite</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teile.map((t) => (
              <a
                key={t.title}
                href={t.to}
                className="reveal group flex flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <t.icon size={19} className="text-accent" />
                  <ArrowRight
                    size={16}
                    className="text-muted transition group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl">{t.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{t.text}</p>
              </a>
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
    </main>
  );
}
