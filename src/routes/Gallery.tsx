import { useState } from "react";
import { APPS, FEATURED_APPS } from "../data/mockData";
import type { Category } from "../data/types";
import { useFilteredApps, type SortKey } from "../lib/useFilteredApps";
import { PageHeader } from "../components/gallery/PageHeader";
import { FeaturedStrip } from "../components/gallery/FeaturedStrip";
import { AppGrid } from "../components/gallery/AppGrid";
import { SubmitModal } from "../components/submit/SubmitModal";

// Screen 1 — Gallery (spec §5). Featured strip + live-filterable card grid from mock data.
export function Gallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sort, setSort] = useState<SortKey>("date");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [submitOpen, setSubmitOpen] = useState(false);

  const results = useFilteredApps(APPS, query, category, sort);

  // Featured strip only shows when browsing the full, unfiltered gallery.
  const showFeatured = !query && category === "all";

  return (
    <div>
      <PageHeader
        total={APPS.length}
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={setCategory}
        sort={sort}
        onSort={setSort}
        view={view}
        onView={setView}
        onSubmit={() => setSubmitOpen(true)}
      />

      {showFeatured && <FeaturedStrip apps={FEATURED_APPS} />}

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
          {category === "all" ? "All apps" : category} · {results.length}
        </h2>
        <AppGrid apps={results} view={view} />
      </section>

      <SubmitModal open={submitOpen} onClose={() => setSubmitOpen(false)} />
    </div>
  );
}
