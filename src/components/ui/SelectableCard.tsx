import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

// Large radio-style card used for the wizard's path choice and yes/no questions.
// Active state uses the Capri accent; behaves as an ARIA radio.
export function SelectableCard({
  selected,
  onSelect,
  icon,
  title,
  description,
}: {
  selected: boolean;
  onSelect: () => void;
  icon?: ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "flex w-full items-start gap-3 rounded-[12px] border p-4 text-left transition-colors",
        selected
          ? "border-bayer-capri bg-bayer-capri/5"
          : "border-border-subtle bg-surface-card hover:border-bayer-blue/40"
      )}
    >
      {icon && (
        <span
          className={cn(
            "mt-0.5 shrink-0 transition-colors",
            selected ? "text-bayer-capri" : "text-text-muted"
          )}
        >
          {icon}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-text-primary">{title}</span>
        {description && (
          <span className="mt-0.5 block text-sm text-text-muted">{description}</span>
        )}
      </span>
      <span
        className={cn(
          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors",
          selected ? "border-bayer-capri bg-bayer-capri text-white" : "border-border-subtle"
        )}
      >
        {selected && <Check size={12} strokeWidth={3} />}
      </span>
    </button>
  );
}
