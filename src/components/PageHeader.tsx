import type { ReactNode } from 'react';

/** Gemeinsamer Kopf für Unterseiten: Label, Titel, Einleitung. */
export function PageHeader({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: string;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1360px] px-5 pb-4 pt-12">
      <p className="reveal inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {label}
      </p>
      <h1 className="reveal mt-5 font-serif text-4xl tracking-tight sm:text-5xl">{title}</h1>
      <div className="reveal mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</div>
      {children}
    </header>
  );
}
