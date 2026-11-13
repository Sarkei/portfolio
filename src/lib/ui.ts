import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
const KEY = 'portfolio.theme';

function preferred(): Theme {
  const stored = localStorage.getItem(KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => preferred());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return {
    theme,
    toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
  };
}

/**
 * Blendet Elemente beim Scrollen ein.
 *
 * Wichtig: der Beobachter wird nur bei einem Wechsel von `key` (Route) neu aufgesetzt,
 * nicht nach jedem Render — sonst wird er sofort wieder getrennt und kein Element wird
 * jemals sichtbar. Zusätzlich gibt es ein Sicherheitsnetz: was nach 800 ms noch nicht
 * eingeblendet ist, wird sichtbar geschaltet, damit Inhalt nie unsichtbar hängen bleibt.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (els.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    );
    els.forEach((el) => io.observe(el));

    const fallback = window.setTimeout(() => {
      els.forEach((el) => el.classList.add('is-visible'));
    }, 800);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [key]);
}
