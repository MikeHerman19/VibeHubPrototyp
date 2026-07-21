import { cn } from "../../lib/cn";

// Small pill tag/chip (spec §3): light grey fill, muted text. Used for #hashtags.
export function Tag({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface px-2.5 py-0.5",
        "text-xs font-medium text-text-muted border border-border-subtle",
        className
      )}
    >
      {label}
    </span>
  );
}
