import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { Cover } from './Cover';

const categoryLabel: Record<Project['category'], string> = {
  web: 'Web-App',
  ki: 'KI',
  tools: 'Werkzeug',
};

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_48px_-32px_rgba(12,30,20,0.45)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
        {project.shots?.desktop ? (
          <img
            src={project.shots.desktop}
            alt={`${project.title} — Desktopansicht`}
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <Cover project={project} compact />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-line bg-paper/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-muted backdrop-blur">
          {categoryLabel[project.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-xl">{project.title}</h3>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-3 line-clamp-3 text-[14.5px] leading-relaxed">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent">
          Details ansehen
          <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}
