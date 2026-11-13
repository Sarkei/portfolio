import { ArrowLeft, Download, ExternalLink, RefreshCw } from 'lucide-react';

export function Lebenslauf({ onBack }: { onBack: () => void }) {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-16 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={15} /> Zurück
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="/lebenslauf.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent/50"
          >
            <ExternalLink size={15} /> Im neuen Tab öffnen
          </a>
          <a
            href="/lebenslauf.pdf"
            download="Lebenslauf_Tim_Nagraszus.pdf"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
          >
            <Download size={15} /> PDF herunterladen
          </a>
        </div>
      </div>

      <h1 className="mt-6 font-serif text-3xl sm:text-4xl">Lebenslauf</h1>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
        <RefreshCw size={13} /> Wird automatisch aus meiner aktuellen Datei aktualisiert.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
        <object
          data="/lebenslauf.pdf#view=FitH"
          type="application/pdf"
          className="h-[78vh] w-full"
          aria-label="Lebenslauf als PDF"
        >
          <div className="p-8 text-center">
            <p className="text-sm text-muted">
              Dein Browser kann PDFs nicht direkt anzeigen. Nutze den Download-Button oben.
            </p>
            <a href="/lebenslauf.pdf" className="mt-3 inline-block text-sm text-accent underline">
              Lebenslauf öffnen
            </a>
          </div>
        </object>
      </div>
    </main>
  );
}
