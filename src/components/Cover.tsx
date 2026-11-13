import {
  CalendarDays,
  Car,
  FolderClosed,
  Gamepad2,
  Sparkles,
  Target,
  Dumbbell,
  Wallet,
  Bot,
} from 'lucide-react';
import type { Project } from '../data/projects';

const icons = {
  calendar: CalendarDays,
  target: Target,
  car: Car,
  folder: FolderClosed,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
  wallet: Wallet,
  gamepad: Gamepad2,
  bot: Bot,
};

/** Gestaltetes Cover für Projekte ohne Bildschirmfoto. */
export function Cover({ project, compact = false }: { project: Project; compact?: boolean }) {
  const Icon = icons[project.coverIcon];
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-2 ${
        compact ? '' : 'min-h-52'
      }`}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--accent-soft), transparent 55%), radial-gradient(circle at 85% 75%, var(--accent-soft), transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
          <Icon size={26} strokeWidth={1.6} />
        </span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.stack.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-surface/80 px-2.5 py-1 text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
