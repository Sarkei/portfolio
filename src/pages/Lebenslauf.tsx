import { ArrowLeft, Download, Github, Globe, Mail, Printer } from 'lucide-react';
import { cv } from '../data/cv';

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
      <span className="h-px flex-1 bg-line" />
    </h2>
  );
}

type Entry = { period: string; title: string; place: string; details?: string[] };

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className="divide-y divide-line/70">
      {entries.map((e) => (
        <li key={e.period + e.title} className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
          <span className="pt-1 text-[11px] font-medium uppercase tracking-[0.09em] text-muted">
            {e.period}
          </span>
          <div>
            <p className="text-[16px] font-semibold leading-snug text-ink">{e.title}</p>
            <p className="mt-0.5 text-[13.5px] text-muted">{e.place}</p>
            {e.details?.length ? (
              <ul className="mt-2 space-y-1.5">
                {e.details.map((d) => (
                  <li key={d} className="relative pl-4 text-[13.5px] leading-relaxed text-muted">
                    <span className="absolute left-0 top-[0.62em] h-1 w-1 rounded-full bg-accent/60" />
                    {d}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function PageHead({ section }: { section: string }) {
  return (
    <div className="mb-6 flex items-baseline justify-between border-b border-line pb-2.5">
      <span className="font-serif text-[15px] text-ink">{cv.name}</span>
      <span className="text-[10px] uppercase tracking-[0.16em] text-muted">Lebenslauf · {section}</span>
    </div>
  );
}

function Footer({ note, page }: { note: string; page: string }) {
  return (
    <footer className="mt-auto flex items-center justify-between border-t border-line pt-3 text-[10.5px] uppercase tracking-[0.1em] text-muted">
      <span>
        {cv.name} · {note}
      </span>
      <span>{page}</span>
    </footer>
  );
}

export function Lebenslauf({ onBack }: { onBack: () => void }) {
  return (
    <main className="mx-auto max-w-[210mm] px-4 pb-20 pt-8 sm:px-0">
      <div className="no-print mb-5 flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={15} /> Zurück
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent/50"
          >
            <Printer size={15} /> Drucken
          </button>
          <a
            href="/lebenslauf.pdf?v=2026-11-13c"
            download="Lebenslauf_Tim_Nagraszus.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition hover:opacity-90"
          >
            <Download size={15} /> PDF herunterladen
          </a>
        </div>
      </div>

      {/* Blatt 1: Beruf und Ausbildung */}
      <article className="cv-sheet flex flex-col rounded-2xl bg-surface px-6 py-8 shadow-[0_1px_2px_rgba(22,36,28,0.06),0_12px_40px_-24px_rgba(22,36,28,0.35)] ring-1 ring-line sm:px-10 sm:py-10">
        <header className="border-b border-line pb-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-serif text-[2.15rem] leading-[1.05] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                {cv.name}
              </h1>
              <p className="mt-2 max-w-[26rem] text-[13px] uppercase leading-[1.7] tracking-[0.1em] text-accent">
                {cv.role}
              </p>
            </div>
            <ul className="space-y-1.5 text-[12.5px] text-muted sm:text-right">
              {cv.contact.map((c) => {
                const Icon = c.label === 'E-Mail' ? Mail : c.label === 'GitHub' ? Github : Globe;
                return (
                  <li key={c.label} className="flex items-center gap-2 sm:justify-end">
                    <Icon size={13} className="shrink-0 text-accent" />
                    <a href={c.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                      {c.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </header>

        <section className="border-b border-line py-6">
          <p className="text-[14.5px] leading-relaxed text-ink/90">{cv.profile}</p>
          <dl className="mt-5 grid grid-cols-3 gap-3">
            {cv.highlights.map((h) => (
              <div key={h.label} className="rounded-xl bg-accent-soft px-3 py-2.5">
                <dt className="font-serif text-xl leading-none text-accent-ink">{h.value}</dt>
                <dd className="mt-1 text-[10.5px] uppercase tracking-[0.09em] text-on-accent-soft">{h.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-6">
          <SectionTitle>Berufserfahrung</SectionTitle>
          <Timeline entries={cv.experience} />
        </section>

        <section className="mt-7 border-t border-line pt-6">
          <SectionTitle>Ausbildung</SectionTitle>
          <Timeline entries={cv.education} />
        </section>

        <Footer note="Lebenslauf" page="Seite 1 von 3" />
      </article>

      {/* Blatt 2: Kenntnisse, Sprachen, Arbeitsweise */}
      <article className="cv-sheet cv-sheet--second mt-6 flex flex-col rounded-2xl bg-surface px-6 py-8 shadow-[0_1px_2px_rgba(22,36,28,0.06),0_12px_40px_-24px_rgba(22,36,28,0.35)] ring-1 ring-line sm:px-10 sm:py-10">
        <PageHead section="Kenntnisse" />
        <SectionTitle>Kenntnisse</SectionTitle>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {cv.skills.map((g) => (
            <div key={g.label} className="rounded-xl border border-line/80 px-5 py-[18px]">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-accent">{g.label}</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-surface-2 px-2.5 py-1.5 text-[12.5px] leading-tight text-ink/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-9">
          <SectionTitle>Sprachen</SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-3">
            {cv.languages.map((l) => (
              <li key={l.name} className="rounded-xl bg-surface-2 px-4 py-3.5">
                <p className="text-[15px] font-semibold text-ink">{l.name}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.06em] text-muted">{l.level}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-9">
          <SectionTitle>Wie ich arbeite</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {cv.principles.map((p) => (
              <div key={p.title} className="border-t-2 border-accent/30 pt-3">
                <p className="text-[13.5px] font-semibold text-ink">{p.title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-line pt-5">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent">Interessen</p>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{cv.interests.join(' · ')}</p>
        </section>

        <Footer note="Kenntnisse" page="Seite 2 von 3" />
      </article>

      {/* Blatt 3: Projekte */}
      <article className="cv-sheet cv-sheet--third mt-6 flex flex-col rounded-2xl bg-surface px-6 py-8 shadow-[0_1px_2px_rgba(22,36,28,0.06),0_12px_40px_-24px_rgba(22,36,28,0.35)] ring-1 ring-line sm:px-10 sm:py-10">
        <PageHead section="Projekte" />
        <SectionTitle>Eigene Projekte</SectionTitle>
        <p className="mb-5 max-w-[46rem] text-[13px] leading-relaxed text-muted">
          Alle neun Anwendungen sind von mir entworfen, gebaut und werden von mir betrieben:
          Datenmodell, API, Oberfläche, Deployment und Backups.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {cv.projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-line/80 p-4 last:sm:col-span-2">
              <p className="text-[14px] font-semibold text-ink">{p.title}</p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">{p.text}</p>
              <p className="mt-2.5 text-[10.5px] uppercase tracking-[0.07em] text-accent">{p.tech}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-accent-soft px-4 py-3.5">
          <p className="text-[12px] leading-relaxed text-on-accent-soft">
            Screenshots, Demo-Zugänge und Quellcode zu allen neun Projekten:
            <span className="font-semibold"> portfolio.nas-timgreen.com</span>
          </p>
        </div>

        <Footer note="Projekte" page="Seite 3 von 3" />
      </article>
    </main>
  );
}
