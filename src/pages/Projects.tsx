import { useMemo, useState } from 'react';
import { categories, projects, type Category } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Projects({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  const [active, setActive] = useState<Category | 'all'>('all');

  const list = useMemo(() => {
    const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);
    return [...filtered].sort((a, b) => b.year.localeCompare(a.year));
  }, [active]);

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-12">
      <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {projects.length} Projekte · {projects.filter((p) => p.shots?.desktop).length} mit Bildschirmfotos
      </p>
      <h1 className="reveal mt-5 font-serif text-4xl tracking-tight sm:text-5xl">Projekte</h1>
      <p className="reveal mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Anwendungen, die ich für mich und mein Umfeld gebaut habe — jeweils mit dem Problem, der
        Lösung und dem eingesetzten Stack. Die Bilder stammen aus den laufenden Instanzen, nicht aus
        einem Design-Werkzeug.
      </p>

      <div className="reveal mt-8 flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c.id === 'all' ? projects.length : projects.filter((p) => p.category === c.id).length;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                active === c.id
                  ? 'border-accent/40 bg-accent-soft text-on-accent-soft'
                  : 'border-line bg-surface text-muted hover:text-ink'
              }`}
            >
              {c.label}
              <span className="ml-1.5 text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
        {list.map((p) => (
          <div key={p.id} className="reveal">
            <ProjectCard project={p} onOpen={() => onOpenProject(p.id)} />
          </div>
        ))}
      </div>

      <p className="mt-10 rounded-2xl border border-line bg-surface px-5 py-4 text-sm text-muted">
        Drei dieser Anwendungen sind nicht öffentlich erreichbar: Sie laufen intern auf dem eigenen
        Server und sind nur für den jeweiligen Nutzerkreis freigeschaltet. Bilder und Beschreibungen
        zeigen den echten Stand.
      </p>
    </main>
  );
}
