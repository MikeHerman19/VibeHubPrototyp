import { SearchX } from "lucide-react";
import type { App } from "../../data/types";
import { AppCard } from "./AppCard";

/*
 * Responsive card grid (spec §5.4): 4 across at 1440px, 3 at ~1200, 2 at ~1024.
 * `view` toggles a slightly denser single-column list — grid is the functional default.
 */
export function AppGrid({ apps, view }: { apps: App[]; view: "grid" | "list" }) {
  if (apps.length === 0) {
    return (
      <div className="grid place-items-center rounded-2xl border border-dashed border-border-subtle bg-surface-card/50 py-16 text-center">
        <SearchX size={28} className="mb-3 text-text-muted" />
        <p className="text-sm font-medium text-text-primary">No apps match your search</p>
        <p className="mt-1 text-sm text-text-muted">
          Try a different name, owner, tag, or category.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        view === "list"
          ? "grid grid-cols-1 gap-4 md:grid-cols-2"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      }
    >
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
}
