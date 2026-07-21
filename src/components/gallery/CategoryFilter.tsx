import { ChevronDown } from "lucide-react";
import { CATEGORIES, type Category } from "../../data/types";

// Native select styled to match the demo — filters the grid by category (spec §5.4).
export function CategoryFilter({
  value,
  count,
  onChange,
}: {
  value: Category | "all";
  count: number;
  onChange: (v: Category | "all") => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Category | "all")}
        className="appearance-none rounded-lg border border-border-subtle bg-surface-card py-2 pl-3 pr-9 text-sm font-medium text-text-primary focus:border-bayer-capri focus:outline-none"
      >
        <option value="all">All apps · {count}</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
      />
    </div>
  );
}
