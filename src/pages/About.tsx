import { ArrowRight, Database, GitBranch, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ausbildung, person } from '../data/site';

const facts = [
  { label: 'Ausbildung', value: 'Fachinformatiker für Anwendungsentwicklung' },
  { label: 'Ausbildungsjahr', value: '2. Jahr, seit 2025' },
  { label: 'Betrieb', value: 'Agenda Software' },
  { label: 'Berufsschule', value: 'BS1 Traunstein, Klasse IT11b' },
  { label: 'Schwerpunkt', value: 'Web-Anwendungen, KI-Integration, self-hosted Betrieb' },
  { label: 'Standort', value: person.location },
];

const werte = [
  {
    icon: Database,
    title: 'Vollständig statt angefangen',
    text: 'Eine Anwendung ist für mich erst fertig, wenn sie Datenbank, Anmeldung, Rechte und Datensicherung hat. Die halbe Strecke bringt niemandem etwas.',
  },
  {
    icon: GitBranch,
    title: 'Nachvollziehbar',
    text: 'Jede Änderung liegt im Repo, jede Entscheidung steht in der README. Wer ein Projekt übernimmt, soll es ohne Rückfrage verstehen können.',
  },
  {
    icon: Sparkles,
    title: 'KI dort, wo sie hilft',
    text: 'Sprachmodelle übernehmen Planung, Texte und Auswertungen — aber jeder Vorschlag wird gegen ein festes Schema geprüft, bevor er gespeichert wird.',
  },
];

export function About() {
  return (
    <main className="pb-20">
      <PageHeader
        label="Über mich"
        title="Auszubildender, der abends weiterbaut"
        intro="Ich lerne Anwendungsentwicklung — und baue dieselben Dinge, die ich in Betrieb und Berufsschule höre, noch einmal selbst: von der Datenbank bis zum laufenden Server."
      />

      <section className="mx-auto max-w-6xl px-5 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="reveal space-y-5 text-[16.5px] leading-relaxed">
            <p>
              Ich bin Tim, 2025 in die Ausbildung zum Fachinformatiker für Anwendungsentwicklung
              gestartet und aktuell im zweiten Ausbildungsjahr. Im Betrieb arbeite ich an
              Softwareprojekten mit, in der Berufsschule läuft der Blockunterricht an der BS1
              Traunstein — und der Teil, der mich am meisten interessiert, ist der ganze Weg einer
              Anwendung: Datenmodell, API, Oberfläche und der Betrieb danach.
            </p>
            <p>
              Deshalb entstehen meine eigenen Projekte nicht als Übungsaufgaben mit Beispieldaten,
              sondern als Werkzeuge, die ich selbst und mein Umfeld benutzen: Essensplanung,
              Darts-Abende, Fahrgemeinschaften, Schulunterlagen. Jede dieser Anwendungen läuft in
              Docker auf einem eigenen Server, mit Datenbank, Anmeldung und Backup.
            </p>
            <p>
              Ich bin am Anfang meiner Laufbahn und nutze jedes Projekt, um ein Stück tiefer zu
              gehen: Rechtekonzepte, Migrationen, Deployment, Fehlersuche im Betrieb. Was ich in der
              Ausbildung lerne, probiere ich abends an einer eigenen Anwendung aus — und was dort
              funktioniert, kommt zurück in den nächsten Aufbau.
            </p>
            <p className="rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] text-muted">
              Was mich dabei am meisten reizt: Probleme, bei denen am Anfang nur ein Satz steht
              („wir planen die Woche noch auf Papier") und am Ende eine Anwendung, die wirklich
              benutzt wird.
            </p>
          </div>

          <aside className="reveal self-start rounded-2xl border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <img
                src="/portrait-128.png"
                alt="Tim Nagraszus"
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-line ring-offset-2 ring-offset-surface"
              />
              <div>
                <p className="font-serif text-lg leading-tight">{person.name}</p>
                <p className="text-xs text-muted">Anwendungsentwicklung · {person.location}</p>
              </div>
            </div>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-line bg-line">
              {facts.map((f) => (
                <div key={f.label} className="bg-surface px-3.5 py-2.5">
                  <dt className="text-[10.5px] uppercase tracking-[0.13em] text-muted">{f.label}</dt>
                  <dd className="mt-0.5 text-[13.5px]">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#/lebenslauf"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent underline-offset-4 hover:underline"
            >
              Zum Lebenslauf <ArrowRight size={15} />
            </a>
          </aside>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <h2 className="reveal font-serif text-3xl">Woran ich mich messe</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {werte.map((w) => (
            <div key={w.title} className="reveal rounded-2xl border border-line bg-surface p-5">
              <w.icon size={19} className="text-accent" />
              <h3 className="mt-3 text-[15px] font-medium">{w.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <h2 className="reveal font-serif text-3xl">Werdegang</h2>
        <ol className="mt-7 space-y-6 border-l border-line pl-6">
          {ausbildung.map((a) => (
            <li key={a.titel} className="reveal relative">
              <span className="absolute -left-[1.72rem] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-paper" />
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{a.zeitraum}</p>
              <p className="mt-1 font-serif text-xl leading-snug">{a.titel}</p>
              <p className="text-sm text-muted">{a.ort}</p>
              <ul className="mt-2 space-y-1.5">
                {a.punkte.map((p) => (
                  <li key={p} className="text-[14px] leading-relaxed text-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
