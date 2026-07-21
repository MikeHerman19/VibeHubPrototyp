// Tappable quick-start chip (spec §7) — prefills a scripted question.
export function QuickStartChip({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-border-subtle bg-surface-card px-3 py-1.5 text-left text-xs font-medium text-bayer-blue transition-colors hover:border-bayer-capri hover:bg-bayer-capri/5"
    >
      {label}
    </button>
  );
}
