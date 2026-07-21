import { ChevronDown, LayoutGrid, List, Plus } from "lucide-react";
import type { Category } from "../../data/types";
import type { SortKey } from "../../lib/useFilteredApps";
import { cn } from "../../lib/cn";
import { Button } from "../ui/Button";
import { SearchField } from "./SearchField";
import { CategoryFilter } from "./CategoryFilter";

// Page header row (spec §5.2): title + subtitle and the search/filter/sort/view/submit controls.
export function PageHeader({
  total,
  query,
  onQuery,
  category,
  onCategory,
  sort,
  onSort,
  view,
  onView,
  onSubmit,
}: {
  total: number;
  query: string;
  onQuery: (v: string) => void;
  category: Category | "all";
  onCategory: (v: Category | "all") => void;
  sort: SortKey;
  onSort: (v: SortKey) => void;
  view: "grid" | "list";
  onView: (v: "grid" | "list") => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[30px] font-bold leading-tight text-bayer-blue">Vibe Hub</h1>
          <p className="mt-1 text-sm text-text-muted">
            — {total} apps, built by you and your onePSS peers
          </p>
        </div>
        <Button variant="primary" onClick={onSubmit}>
          <Plus size={16} />
          Submit an app
        </Button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <SearchField value={query} onChange={onQuery} />
        <CategoryFilter value={category} count={total} onChange={onCategory} />

        {/* Sort dropdown */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value as SortKey)}
            className="appearance-none rounded-lg border border-border-subtle bg-surface-card py-2 pl-3 pr-9 text-sm font-medium text-text-primary focus:border-bayer-capri focus:outline-none"
          >
            <option value="date">Date added</option>
            <option value="name">Name (A–Z)</option>
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>

        {/* View toggle (grid is functional; list is a visual affordance) */}
        <div className="ml-auto inline-flex overflow-hidden rounded-lg border border-border-subtle">
          <button
            onClick={() => onView("grid")}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
            className={cn(
              "grid h-9 w-9 place-items-center transition-colors",
              view === "grid" ? "bg-bayer-blue text-white" : "bg-surface-card text-text-muted hover:text-bayer-blue"
            )}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => onView("list")}
            aria-label="List view"
            aria-pressed={view === "list"}
            className={cn(
              "grid h-9 w-9 place-items-center border-l border-border-subtle transition-colors",
              view === "list" ? "bg-bayer-blue text-white" : "bg-surface-card text-text-muted hover:text-bayer-blue"
            )}
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
