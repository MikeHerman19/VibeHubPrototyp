import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { App } from "../../data/types";
import { cn } from "../../lib/cn";
import { CategoryLabel } from "../ui/CategoryLabel";
import { Chip } from "../ui/Chip";
import { Tag } from "../ui/Tag";
import { AvatarStack } from "../ui/Avatar";
import { Thumbnail } from "../ui/Thumbnail";

/*
 * The core reusable card (spec §5.5). Whole card and the "Open →" affordance both navigate
 * to /app/:id (§5.4). Hover lifts and tints the border to Capri (§3).
 */
export function AppCard({ app }: { app: App }) {
  const navigate = useNavigate();
  const open = () => navigate(`/app/${app.id}`);

  return (
    <article
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      tabIndex={0}
      role="link"
      aria-label={`Open ${app.name}`}
      className={cn(
        "group flex cursor-pointer flex-col overflow-hidden rounded-[12px] border border-border-subtle bg-surface-card",
        "shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-bayer-capri hover:shadow-md"
      )}
    >
      {/* Thumbnail (~16:10) with optional status chip top-right */}
      <div className="relative aspect-[16/10] w-full">
        <Thumbnail variant={app.screenshots[0]} label={app.name} className="h-full w-full" />
        {app.status && (
          <div className="absolute right-3 top-3">
            <Chip tone={app.status === "NEW" ? "new" : "beta"}>{app.status}</Chip>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <CategoryLabel category={app.category} />
        <h3 className="text-[17px] font-semibold leading-snug text-bayer-blue">
          {app.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-text-muted">
          {app.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {app.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {/* Footer: reach out + open */}
        <div className="mt-auto flex items-center justify-between border-t border-border-subtle pt-3">
          <div className="flex items-center gap-2">
            <AvatarStack owners={app.owners} size="sm" />
            <span className="text-xs text-text-muted">
              {app.owners[0].name}
              {app.owners.length > 1 && ` +${app.owners.length - 1}`}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-bayer-blue transition-colors group-hover:text-bayer-capri">
            Open
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
