import { useMemo } from "react";
import type { App, Category } from "../data/types";

export type SortKey = "date" | "name";

// Pure search + category filter (spec §5.4, §9). Search matches name, owner names, and tags.
export function filterApps(
  apps: App[],
  query: string,
  category: Category | "all",
  sort: SortKey
): App[] {
  const q = query.trim().toLowerCase();

  const filtered = apps.filter((app) => {
    if (category !== "all" && app.category !== category) return false;
    if (!q) return true;
    const haystack = [
      app.name,
      ...app.tags,
      ...app.owners.map((o) => o.name),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name);
    return b.updated.localeCompare(a.updated); // date, newest first
  });

  return sorted;
}

export function useFilteredApps(
  apps: App[],
  query: string,
  category: Category | "all",
  sort: SortKey
): App[] {
  return useMemo(
    () => filterApps(apps, query, category, sort),
    [apps, query, category, sort]
  );
}
