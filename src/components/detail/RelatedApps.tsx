import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { App } from "../../data/types";
import { CategoryLabel } from "../ui/CategoryLabel";
import { Thumbnail } from "../ui/Thumbnail";

// Related apps (spec §6.5): 2–3 smaller cards; each navigates to its own detail page.
export function RelatedApps({ apps }: { apps: App[] }) {
  const navigate = useNavigate();
  if (apps.length === 0) return null;

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
        Related apps
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => navigate(`/app/${app.id}`)}
            className="group flex flex-col overflow-hidden rounded-[12px] border border-border-subtle bg-surface-card text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-bayer-capri hover:shadow-md"
          >
            <Thumbnail
              variant={app.screenshots[0]}
              label={app.name}
              className="aspect-[16/9] w-full"
            />
            <div className="flex flex-col gap-1.5 p-3">
              <CategoryLabel category={app.category} />
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-bayer-blue">{app.name}</span>
                <ArrowRight
                  size={15}
                  className="shrink-0 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:text-bayer-capri"
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
