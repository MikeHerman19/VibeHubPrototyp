import { Rocket, PackageCheck } from "lucide-react";
import { SelectableCard } from "../../ui/SelectableCard";
import { JOURNEY_STEPS } from "../content";
import type { SubmitPath } from "../types";

// Step 0: choose between registering an already-deployed app and starting a new deployment.
export function PathStep({
  path,
  onPath,
}: {
  path: SubmitPath | null;
  onPath: (p: SubmitPath) => void;
}) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Submission type">
      <p className="text-sm text-text-muted">
        How would you like to add your app to Vibe Hub?
      </p>

      <SelectableCard
        selected={path === "existing"}
        onSelect={() => onPath("existing")}
        icon={<PackageCheck size={20} />}
        title="My app is already deployed"
        description="Register an existing app so it shows up in the gallery."
      />
      <SelectableCard
        selected={path === "new"}
        onSelect={() => onPath("new")}
        icon={<Rocket size={20} />}
        title="I want to deploy a new app"
        description="We'll guide you through repo setup, Azure and the CI/CD pipeline."
      />

      {path === "new" && (
        <div className="mt-1 rounded-lg border border-border-subtle bg-surface p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
            The developer journey ahead
          </p>
          <ol className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-text-muted">
            {JOURNEY_STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span className="font-medium text-bayer-blue">
                  {i + 1}. {s}
                </span>
                {i < JOURNEY_STEPS.length - 1 && <span className="text-border-subtle">→</span>}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
