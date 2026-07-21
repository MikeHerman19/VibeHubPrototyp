import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import type { App } from "../../data/types";
import { useToast } from "../../lib/ToastContext";
import { Button } from "../ui/Button";
import { CategoryLabel } from "../ui/CategoryLabel";
import { Chip } from "../ui/Chip";

// Detail header (spec §6.1): back control, title/category/status, Launch + Reach out CTAs.
export function DetailHeader({ app }: { app: App }) {
  const { showToast } = useToast();

  return (
    <div>
      <Link
        to="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-bayer-blue"
      >
        <ArrowLeft size={16} />
        Back to gallery
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-3">
            <CategoryLabel category={app.category} />
            {app.status && (
              <Chip tone={app.status === "NEW" ? "new" : "beta"}>{app.status}</Chip>
            )}
          </div>
          <h1 className="text-[30px] font-bold leading-tight text-bayer-blue">
            {app.name}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              showToast(`Demo — this would email ${app.owners[0].name}.`)
            }
          >
            <Mail size={16} />
            Reach out
          </Button>
          <Button
            variant="accent"
            onClick={() => showToast("Demo — this would launch the app.")}
          >
            Launch app
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
