import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectModal } from './components/ProjectModal';
import { projects } from './data/projects';
import { useReveal, useTheme } from './lib/ui';

function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash.startsWith('/projekte') ? '/projekte' : '/';
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [route, setRoute] = useState(currentRoute);
  const [openId, setOpenId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    const onHash = () => {
      setRoute(currentRoute());
      setMenuOpen(false);
      if (!window.location.hash.includes('#')) window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [route]);

  const openProject = (id: string) => setOpenId(id);
  const project = openId ? projects.find((p) => p.id === openId) : null;

  const nav = [
    { href: '#/', label: 'Start' },
    { href: '#/ueber', label: 'Über mich' },
    { href: '#/skills', label: 'Skills' },
    { href: '#/projekte', label: 'Projekte' },
    { href: '#/kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="grain relative min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft font-serif text-sm text-accent-ink">
              TN
            </span>
            <span className="font-serif text-[15px] leading-tight">
              Tim Nagraszus
              <span className="block text-[11px] font-sans uppercase tracking-[0.14em] text-muted">
                Anwendungsentwicklung
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  (n.href === '#/projekte' && route === '/projekte') || (n.href === '#/' && route === '/')
                    ? 'text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {n.label}
              </a>
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
                <a key={n.href} href={n.href} className="rounded-lg px-2 py-2 text-sm text-muted hover:bg-surface-2 hover:text-ink">
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <div className="relative z-10">
        {route === '/projekte' ? <Projects onOpenProject={openProject} /> : <Home onOpenProject={openProject} />}

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
