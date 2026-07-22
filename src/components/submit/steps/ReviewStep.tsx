import { CheckCircle2 } from "lucide-react";
import type { WizardData } from "../types";

// Final step: summarize the collected input before submitting.
export function ReviewStep({ data }: { data: WizardData }) {
  const rows: Array<[string, string]> =
    data.path === "new"
      ? [
          ["Submission type", "Deploy a new app"],
          ["Bayer GitHub account", data.hasGitHub ? "Yes" : "Not yet — access requested"],
          ["Repository name", data.repoName || "—"],
          [
            "Azure subscription",
            data.hasAzure ? data.azureSubscription || "Provided" : "Not yet — subscription requested",
          ],
        ]
      : [
          ["Submission type", "Register an existing app"],
          ["App name", data.appName || "—"],
          ["Category", data.category || "—"],
          ["Repository URL", data.repoUrl || "—"],
          ["Azure subscription", data.azureSubscription || "—"],
        ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2.5 rounded-lg border border-bayer-green/40 bg-bayer-green/10 p-4">
        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-bayer-blue" />
        <p className="text-sm text-text-primary">
          Almost there — review your details, then submit. In this prototype no repo or
          infrastructure is created; you'll get a confirmation.
        </p>
      </div>

      <dl className="divide-y divide-border-subtle rounded-lg border border-border-subtle">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-start justify-between gap-4 px-4 py-2.5">
            <dt className="text-sm text-text-muted">{label}</dt>
            <dd className="text-right text-sm font-medium text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
