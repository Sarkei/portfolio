import { ArrowLeft } from 'lucide-react';
import { person } from '../data/site';

export function Impressum({ onBack }: { onBack: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-10">
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink print:hidden">
        <ArrowLeft size={15} /> Zurück
      </button>
      <h1 className="mt-4 font-serif text-3xl">Impressum</h1>

      <div className="mt-6 space-y-6 rounded-2xl border border-line bg-surface p-6 text-[15px] leading-relaxed sm:p-8">
        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Angaben gemäß § 5 DDG</h2>
          <p className="mt-2">
            {person.name}
            <br />
            {person.street || 'Straße und Hausnummer'}
            <br />
            {person.zipCity || 'Postleitzahl und Ort'}
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Kontakt</h2>
          <p className="mt-2">
            E-Mail: {person.email}
            <br />
            Web: {person.githubHandle}
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">
            {person.name}
            <br />
            {person.street || 'Straße und Hausnummer'}
            <br />
            {person.zipCity || 'Postleitzahl und Ort'}
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Haftung für Inhalte und Links</h2>
          <p className="mt-2 text-muted">
            Die Inhalte dieser Seite wurden mit Sorgfalt erstellt, erheben aber keinen Anspruch auf
            Vollständigkeit und Aktualität. Für Inhalte externer Seiten, auf die hier verlinkt wird,
            sind ausschließlich deren Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren
            keine Rechtsverstöße erkennbar.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Urheberrecht</h2>
          <p className="mt-2 text-muted">
            Die hier gezeigten Texte, Bilder und Anwendungen sind eigene Arbeiten. Eine Verwendung
            außerhalb dieser Website — auch auszugsweise — nur mit vorheriger Zustimmung.
          </p>
        </section>
      </div>
    </main>
  );
}

export function Datenschutz({ onBack }: { onBack: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-10">
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink print:hidden">
        <ArrowLeft size={15} /> Zurück
      </button>
      <h1 className="mt-4 font-serif text-3xl">Datenschutz</h1>

      <div className="mt-6 space-y-6 rounded-2xl border border-line bg-surface p-6 text-[15px] leading-relaxed sm:p-8">
        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Verantwortlicher</h2>
          <p className="mt-2">
            {person.name}
            <br />
            {person.street || 'Straße und Hausnummer'}
            <br />
            {person.zipCity || 'Postleitzahl und Ort'}
            <br />
            E-Mail: {person.email}
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Grundsatz</h2>
          <p className="mt-2">
            Diese Website ist rein informativ. Es gibt keine Anmeldung, keine Formulare, keine
            Cookies zur Analyse und kein Tracking durch Dritte. Es werden keine Nutzerprofile
            gebildet.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Hosting und Server-Logs</h2>
          <p className="mt-2">
            Die Seite wird auf eigener Hardware betrieben und über den Dienst Cloudflare erreichbar
            gemacht. Beim Aufruf verarbeitet der Hoster technisch notwendige Verbindungsdaten
            (IP-Adresse, Zeitpunkt, aufgerufene Datei, Browserkennung), um die Seite auszuliefern und
            Angriffe abzuwehren. Rechtsgrundlage ist das berechtigte Interesse an einem sicheren
            Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Die Logs werden nicht mit anderen Daten
            zusammengeführt und nach kurzer Zeit gelöscht.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Kontaktaufnahme</h2>
          <p className="mt-2">
            Wer per E-Mail Kontakt aufnimmt, übermittelt freiwillig Name, Adresse und Nachricht.
            Diese Daten werden ausschließlich zur Beantwortung der Anfrage verwendet und nicht
            weitergegeben. Eine Löschung ist jederzeit auf Wunsch möglich.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Eine kurze Nachricht an {person.email} genügt.
            Zudem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">Verschlüsselung</h2>
          <p className="mt-2">
            Die Seite wird ausschließlich über HTTPS ausgeliefert; die Übertragung ist damit
            verschlüsselt.
          </p>
        </section>
      </div>
    </main>
  );
}
