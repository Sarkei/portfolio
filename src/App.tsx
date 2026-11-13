import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectModal } from './components/ProjectModal';
import { projects } from './data/projects';
import { useReveal, useTheme } from './lib/ui';

export type NavTarget = { label: string; to?: string; section?: string };

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash.startsWith('/projekte') ? '/projekte' : '/';
}

const nav: NavTarget[] = [
  { label: 'Start', section: 'start' },
  { label: 'Über mich', section: 'ueber' },
  { label: 'Skills', section: 'skills' },
  { label: 'Projekte', to: '/projekte' },
  { label: 'Kontakt', section: 'kontakt' },
];

export default function App() {
  const { theme, toggle } = useTheme();
  const [route, setRoute] = useState(currentRoute);
  const [openId, setOpenId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal(route);

  useEffect(() => {
    const onHash = () => {
      setRoute(currentRoute());
      setMenuOpen(false);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [route]);

  /** Springt zu einem Abschnitt — auch wenn gerade die Projektseite offen ist. */
  const goTo = (target: NavTarget) => {
    setMenuOpen(false);
    if (target.to) {
      window.location.hash = `#${target.to}`;
      setRoute(target.to);
      window.scrollTo({ top: 0 });
      return;
    }
    if (route !== '/') {
      window.location.hash = '#/';
      setRoute('/');
    }
    window.setTimeout(() => {
      const el = document.getElementById(target.section ?? 'start');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 140);
  };

  const openProject = (id: string) => setOpenId(id);
  const project = openId ? projects.find((p) => p.id === openId) : null;

  return (
    <div className="grain relative min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <button onClick={() => goTo({ label: 'Start', section: 'start' })} className="flex items-center gap-2.5 text-left">
            <img
              src="/avatar-128.png"
              alt="Porträt von Tim Nagraszus"
              width={38}
              height={38}
              className="h-[38px] w-[38px] rounded-full border border-line object-cover"
            />
            <span className="font-serif text-[15px] leading-tight">
              Tim Nagraszus
              <span className="block font-sans text-[11px] uppercase tracking-[0.14em] text-muted">
                Anwendungsentwicklung
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <button
                key={n.label}
                onClick={() => goTo(n)}
                className={`rounded-full px-3 py-1.5 text-sm transition hover:text-ink ${
                  n.to === '/projekte' && route === '/projekte' ? 'text-ink' : 'text-muted'
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggle}
              className="rounded-full border border-line p-2 text-muted transition hover:text-ink"
              aria-label={theme === 'dark' ? 'Helles Design' : 'Dunkles Design'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-full border border-line p-2 text-muted transition hover:text-ink md:hidden"
              aria-label="Menü"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-line bg-paper px-5 py-3 md:hidden">
            <div className="flex flex-col">
              {nav.map((n) => (
                <button
                  key={n.label}
                  onClick={() => goTo(n)}
                  className="rounded-lg px-2 py-2 text-left text-sm text-muted hover:bg-surface-2 hover:text-ink"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      <div className="relative z-10">
        {route === '/projekte' ? (
          <Projects onOpenProject={openProject} />
        ) : (
          <Home onOpenProject={openProject} onNavigate={goTo} />
        )}

        <footer className="border-t border-line bg-surface/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tim Nagraszus</p>
            <p className="text-xs">
              Gebaut mit React, TypeScript und Tailwind CSS — gehostet auf eigener Infrastruktur.
            </p>
          </div>
        </footer>
      </div>

      {project && <ProjectModal project={project} onClose={() => setOpenId(null)} />}
    </div>
  );
}
