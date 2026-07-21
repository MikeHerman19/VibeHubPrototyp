import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ChipTone = "neutral" | "new" | "beta" | "featured";

// Status / label chip. "NEW" and "BETA" appear on cards (spec §5.5); "FEATURED" on the strip (§5.3).
const TONES: Record<ChipTone, string> = {
  neutral: "bg-surface text-text-muted border border-border-subtle",
  new: "bg-bayer-green/15 text-bayer-blue-deep border border-bayer-green/40",
  beta: "bg-bayer-capri/15 text-bayer-blue border border-bayer-capri/40",
  featured: "bg-white/15 text-white border border-white/30",
};

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        TONES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
