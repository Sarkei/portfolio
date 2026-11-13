import { ArrowRight, Clock, Github, Globe, Mail, MapPin } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { person } from '../data/site';

const kanaele = [
  {
    icon: Mail,
    label: 'E-Mail',
    value: person.email,
    href: `mailto:${person.email}`,
    note: 'Der sicherste Weg — ich antworte in der Regel am selben Tag.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: person.githubHandle,
    href: person.github,
    note: 'Quellcode zu allen neun Projekten, öffentlich einsehbar.',
  },
  {
    icon: Globe,
    label: 'Demo-Zugänge',
    value: 'Projekte direkt ausprobieren',
    href: '#/projekte',
    note: 'Vier Anwendungen öffnen sich mit einem fertigen Beispielkonto, ohne Registrierung.',
  },
];

export function Kontakt() {
  return (
    <main className="pb-20">
      <PageHeader
        label="Kontakt"
        title="Schreib mir"
        intro="Frage zu einem Projekt, Feedback zum Code oder Interesse an einem Auszubildenden, der schon eigene Anwendungen betreibt — alles willkommen."
      />

      <section className="mx-auto mt-6 max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-3">
          {kanaele.map((k) => (
            <a
              key={k.label}
              href={k.href}
              {...(k.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="reveal group rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <k.icon size={18} className="text-accent" />
                <ArrowRight size={15} className="text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.13em] text-muted">{k.label}</p>
              <p className="mt-1 break-words text-[15px]">{k.value}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{k.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl px-5">
        <div className="reveal grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <h2 className="font-serif text-2xl">Was ich gerade suche</h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
              Ich bin mitten in der Ausbildung — fremde Projekte sind zeitlich begrenzt, dafür ist
              der Austausch umso interessanter: Web-Anwendungen, KI-Integration, saubere
              Datenmodelle. Auch ein kritischer Blick auf meinen Code ist ausdrücklich willkommen.
            </p>
          </div>
          <dl className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-[13.5px]">Antwortzeit</dt>
                <dd className="text-[13px] text-muted">meist am selben Tag, spätestens am nächsten</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-[13.5px]">Standort</dt>
                <dd className="text-[13px] text-muted">{person.location} — remote kein Problem</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Github size={16} className="mt-0.5 shrink-0 text-accent" />
              <div>
                <dt className="text-[13.5px]">Vorher ansehen</dt>
                <dd className="text-[13px] text-muted">
                  <a href="#/projekte" className="text-accent underline-offset-4 hover:underline">
                    Projekte mit Demo-Zugang
                  </a>{' '}
                  ·{' '}
                  <a href="#/lebenslauf" className="text-accent underline-offset-4 hover:underline">
                    Lebenslauf als PDF
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-5">
        <div className="reveal flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-serif text-2xl">Lieber direkt eine Mail?</p>
            <p className="mt-1 text-[14px] text-muted">
              Ein paar Sätze reichen — worum es geht, was du dir vorstellst.
            </p>
          </div>
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium transition hover:opacity-90"
            style={{ color: 'var(--on-accent)' }}
          >
            <Mail size={16} /> E-Mail schreiben
          </a>
        </div>
      </section>
    </main>
  );
}
