import type { Category } from "../../data/types";
import { cn } from "../../lib/cn";

// Category → leading-dot color. Mirrors the reference's "● KNOWLEDGE MANAGEMENT" (spec §5.5, §13).
const DOT_COLOR: Record<Category, string> = {
  "Data & Connectors": "bg-bayer-capri",
  "Document Intelligence": "bg-bayer-green",
  "Regulatory & Submissions": "bg-bayer-blue",
  "Knowledge Management": "bg-bayer-green",
  "Process Automation": "bg-bayer-capri",
  "Agentic AI": "bg-bayer-blue",
};

export function CategoryLabel({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-muted",
        className
      )}
    >
      <span className={cn("h-2 w-2 rounded-full", DOT_COLOR[category])} />
      {category}
    </span>
  );
}
