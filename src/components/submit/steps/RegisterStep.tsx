import { ChevronDown } from "lucide-react";
import { Field } from "../../ui/Field";
import { CATEGORIES, type Category } from "../../../data/types";
import type { WizardData } from "../types";

// Existing-app path: a short registration form so a deployed app shows up in the gallery.
export function RegisterStep({
  data,
  onChange,
}: {
  data: WizardData;
  onChange: (patch: Partial<WizardData>) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-text-muted">
        Tell us about your deployed app so it appears in the Vibe Hub gallery.
      </p>

      <Field
        label="App name"
        value={data.appName}
        onChange={(v) => onChange({ appName: v })}
        placeholder="e.g. Regulatory Submission Assistant"
      />

      {/* Category — native select matching the gallery filter styling. */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-text-primary">Category</label>
        <div className="relative">
          <select
            value={data.category}
            onChange={(e) => onChange({ category: e.target.value as Category | "" })}
            className="w-full appearance-none rounded-lg border border-border-subtle bg-surface-card py-2 pl-3 pr-9 text-sm font-medium text-text-primary focus:border-bayer-capri focus:outline-none"
          >
            <option value="" disabled>
              Select a category…
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
        </div>
      </div>

      <Field
        label="Repository URL"
        value={data.repoUrl}
        onChange={(v) => onChange({ repoUrl: v })}
        placeholder="https://github.bayer.com/onepss/your-app"
      />

      <Field
        label="Azure subscription (optional)"
        value={data.azureSubscription}
        onChange={(v) => onChange({ azureSubscription: v })}
        placeholder="Subscription ID or name"
      />
    </div>
  );
}
