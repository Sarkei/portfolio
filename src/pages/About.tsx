import { ArrowRight, Database, GitBranch, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { person, werdegang } from '../data/site';

const steckbrief = [
  { label: 'Ausbildung', value: 'Fachinformatiker für Anwendungsentwicklung' },
  { label: 'Im Betrieb seit', value: 'September 2025' },
  { label: 'Ausbildungsbetrieb', value: 'Agenda Software' },
  { label: 'Davor', value: 'Studium Informatik, TH Rosenheim' },
  { label: 'Schwerpunkt', value: 'Full-Stack-Anwendungen, KI-Anbindung, Deployment und eigener Serverbetrieb' },
  { label: 'Standort', value: person.location },
];

const grundsaetze = [
  {
    icon: Database,
    title: 'Der Unterbau entscheidet',
    text: 'Bevor ich eine Oberfläche baue, steht das Datenmodell. Wer Tabellen, Rechte und Zustände sauber hat, merkt beim Erweitern später kaum etwas davon.',
  },
  {
    icon: GitBranch,
    title: 'Verstehbar für andere',
    text: 'Code, den nur ich lesen kann, ist ein Risiko. Ich schreibe kurze Commits und eine README, die den Betrieb erklärt — damit jemand übernehmen kann, ohne mich fragen zu müssen.',
  },
  {
    icon: Sparkles,
    title: 'KI mit Kontrolle',
    text: 'Sprachmodelle sind für mich ein Werkzeug wie ein Compiler: nützlich, aber nicht blind vertraut. Was zurückkommt, wird gegen ein festes Format geprüft, bevor es gespeichert wird.',
  },
];

export function About() {
  return (
    <main className="pb-20">
      <PageHeader
        label="Über mich"
        title="Ich baue am liebsten Dinge, die jemand wirklich braucht"
        intro="Anwendungsentwicklung ist für mich kein Selbstzweck. Der Moment, in dem jemand ein Werkzeug von mir benutzt und es dadurch einfacher hat — dafür baue ich."
      />

      <section className="mx-auto max-w-6xl px-5 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="reveal space-y-5 text-[16.5px] leading-relaxed">
            <p>
              Vor meiner Ausbildung habe ich Informatik an der TH Rosenheim studiert — und dabei
              gemerkt, dass mich weniger die Theorie packt als der Moment, in dem etwas fertig ist
              und läuft. Seit September 2025 bin ich deshalb in der Ausbildung zum
              Fachinformatiker für Anwendungsentwicklung bei Agenda Software.
            </p>
            <p>
              Meine eigenen Projekte entstehen aus dem Alltag: eine Essensplanung, weil die
              Wocheneinkäufe ständig im Kopf entschieden wurden; eine Darts-Auswertung, weil ein
              Zettel dafür nicht reicht; eine Fahrgemeinschafts-App, weil Absprachen im Chat
              verloren gehen. Aus jedem dieser kleinen Probleme wurde eine Anwendung mit Datenbank,
              Anmeldung und eigenem Server.
            </p>
            <p>
              Dabei interessiert mich vor allem das Drumherum, das in Tutorials selten vorkommt:
              Wie kommen Änderungen in die Datenbank, ohne dass etwas kaputtgeht? Wer darf was
              sehen? Was passiert nachts um drei, wenn ein Container neu startet? Diese Fragen
              entscheiden über den Unterschied zwischen einer Demo und etwas, das täglich benutzt
              wird.
            </p>
            <p>
              Ich stehe damit am Anfang und nutze jede Gelegenheit, ein Stück weiterzukommen: ein
              neues Muster ausprobieren, einen Fehler bis zur Ursache verfolgen, eine Entscheidung
              im Nachhinein hinterfragen. Was ich lerne, landet direkt im nächsten Projekt.
            </p>
            <p className="rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] text-muted">
              Am meisten reizt mich die Aufgabe, bei der am Anfang nur ein Satz steht — und am Ende
              eine Anwendung, die jemand freiwillig jeden Tag öffnet.
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
              {steckbrief.map((f) => (
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
        <h2 className="reveal font-serif text-3xl">Was mir wichtig ist</h2>
        <p className="reveal mt-2 max-w-2xl text-muted">
          Drei Sätze dazu, wie ich an ein Projekt herangehe — unabhängig davon, wie groß es ist.
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {grundsaetze.map((w) => (
            <div key={w.title} className="reveal rounded-2xl border border-line bg-surface p-5">
              <w.icon size={19} className="text-accent" />
              <h3 className="mt-3 text-[15px] font-medium">{w.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <h2 className="reveal font-serif text-3xl">Mein Weg hierher</h2>
        <ol className="mt-7 space-y-6 border-l border-line pl-6">
          {werdegang.map((a) => (
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
