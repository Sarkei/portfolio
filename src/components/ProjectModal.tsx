import { ArrowUpRight, Monitor, Smartphone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Project } from '../data/projects';
import { Cover } from './Cover';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const hasShots = Boolean(project.shots?.desktop);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[rgba(10,18,14,0.55)] p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="my-4 w-full max-w-5xl rounded-3xl border border-line bg-paper shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              {project.year} · {project.status === 'live' ? 'im Betrieb' : project.status === 'intern' ? 'intern' : 'abgeschlossen'}
            </p>
            <h3 className="mt-1 font-serif text-2xl sm:text-3xl">{project.title}</h3>
            <p className="text-muted">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-line p-2 text-muted transition hover:bg-surface-2 hover:text-ink"
            aria-label="Schließen"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-8 px-6 py-6 lg:grid-cols-[1.15fr_1fr]">
          <div>
            {hasShots ? (
              <div>
                <div className="mb-3 inline-flex rounded-full border border-line bg-surface p-1">
                  <button
                    onClick={() => setView('desktop')}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition ${
                      view === 'desktop' ? 'bg-accent-soft text-on-accent-soft' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <Monitor size={14} /> Desktop
                  </button>
                  <button
                    onClick={() => setView('mobile')}
                    disabled={!project.shots?.mobile}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition disabled:opacity-40 ${
                      view === 'mobile' ? 'bg-accent-soft text-on-accent-soft' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <Smartphone size={14} /> Mobil
                  </button>
                </div>
                <div className="device-frame overflow-hidden rounded-2xl">
                  {view === 'desktop' ? (
                    <img
                      src={project.shots?.desktop}
                      alt={`${project.title} auf dem Desktop`}
                      className="block w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex justify-center bg-surface-2 py-4">
                      <img
                        src={project.shots?.mobile}
                        alt={`${project.title} auf dem Smartphone`}
                        className="block w-[260px] rounded-[1.6rem] border border-line"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="device-frame overflow-hidden rounded-2xl">
                <Cover project={project} />
              </div>
            )}

            <div className="mt-5 grid grid-cols-3 gap-2">
              {project.highlights.map((h) => (
                <div key={h.label} className="rounded-xl border border-line bg-surface px-3 py-3">
                  <p className="font-serif text-lg leading-tight">{h.value}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">{h.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-muted">Worum es geht</h4>
              <p className="mt-2 text-[15px] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-muted">Funktionen</h4>
              <ul className="mt-2 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.16em] text-muted">Technik</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-accent transition hover:border-accent/50"
              >
                Quellcode auf GitHub <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
