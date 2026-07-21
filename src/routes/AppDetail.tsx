import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PackageX } from "lucide-react";
import { getApp, getRelatedApps } from "../data/mockData";
import { Button } from "../components/ui/Button";
import { Tag } from "../components/ui/Tag";
import { DetailHeader } from "../components/detail/DetailHeader";
import { PreviewCarousel } from "../components/detail/PreviewCarousel";
import { AtAGlancePanel } from "../components/detail/AtAGlancePanel";
import { RelatedApps } from "../components/detail/RelatedApps";

// Screen 2 — App Detail (spec §6). Same chrome; main column shows overview, previews,
// at-a-glance, and related apps. Unknown :id renders a friendly not-found state.
export function AppDetail() {
  const { id } = useParams();
  const app = getApp(id);

  // Reset scroll when navigating between apps.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!app) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <div className="max-w-sm text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-bayer-blue/5 text-bayer-blue">
            <PackageX size={26} />
          </div>
          <h1 className="text-2xl font-bold text-bayer-blue">App not found</h1>
          <p className="mt-2 text-sm text-text-muted">
            We couldn't find an app with that id. It may have been renamed or removed.
          </p>
          <Link to="/" className="mt-6 inline-block">
            <Button variant="secondary">← Back to gallery</Button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedApps(app);

  return (
    <div className="flex flex-col gap-8">
      <DetailHeader app={app} />

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        {/* Left: preview + overview */}
        <div className="flex flex-col gap-6">
          <PreviewCarousel screenshots={app.screenshots} label={app.name} />

          <section>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Overview
            </h2>
            <p className="text-[15px] leading-relaxed text-text-primary">
              {app.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {app.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
          </section>
        </div>

        {/* Right: at a glance */}
        <AtAGlancePanel app={app} />
      </div>

      <RelatedApps apps={related} />
    </div>
  );
}
