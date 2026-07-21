import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { App } from "../../data/types";
import { Chip } from "../ui/Chip";
import { Tag } from "../ui/Tag";
import { AvatarStack } from "../ui/Avatar";

/*
 * Featured "onePSS picks" strip (spec §5.3): 2–3 large hero cards using the Bayer gradient
 * treatment. Each navigates to detail. Gradient is used here (and the assistant header) only.
 */
export function FeaturedStrip({ apps }: { apps: App[] }) {
  if (apps.length === 0) return null;
  return (
    <section className="mb-10">
      <div className="mb-3 flex items-center gap-3">
        <Chip tone="new" className="!bg-bayer-green/20">
          Featured
        </Chip>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
          onePSS picks
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {apps.map((app) => (
          <FeaturedCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ app }: { app: App }) {
  const navigate = useNavigate();
  const open = () => navigate(`/app/${app.id}`);
  return (
    <article
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter") open();
      }}
      tabIndex={0}
      role="link"
      aria-label={`Open ${app.name}`}
      className="bg-bayer-gradient group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-5 text-white shadow-md transition-transform duration-200 hover:-translate-y-1"
    >
      {/* Dynamic-angle overlay (spec §3 motif) */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rotate-12 bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-40 -skew-x-12 bg-bayer-blue-deep/30" />

      <div className="relative flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
          {app.category}
        </span>
        {app.status && (
          <Chip tone="featured">{app.status}</Chip>
        )}
      </div>

      <h3 className="relative mt-3 text-xl font-bold leading-snug">{app.name}</h3>
      <p className="relative mt-2 line-clamp-2 text-sm leading-relaxed text-white/85">
        {app.description}
      </p>

      <div className="relative mt-3 flex flex-wrap gap-1.5">
        {app.tags.map((t) => (
          <Tag
            key={t}
            label={t}
            className="!border-white/25 !bg-white/10 !text-white/90"
          />
        ))}
      </div>

      <div className="relative mt-auto flex items-center justify-between border-t border-white/20 pt-3">
        <div className="flex items-center gap-2">
          <AvatarStack owners={app.owners} size="sm" />
          <span className="text-xs text-white/80">{app.owners[0].name}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-sm font-semibold">
          Open
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
