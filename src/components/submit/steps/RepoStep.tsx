import { GitBranch } from "lucide-react";
import { Field } from "../../ui/Field";

// Step 2 (new path): name the repo Vibe Hub will create from the approved template.
export function RepoStep({
  repoName,
  onRepoName,
  hasGitHub,
}: {
  repoName: string;
  onRepoName: (v: string) => void;
  hasGitHub: boolean | null;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2.5 rounded-lg border border-border-subtle bg-surface p-4">
        <GitBranch size={16} className="mt-0.5 shrink-0 text-bayer-blue" />
        <p className="text-sm text-text-muted">
          Vibe Hub will create a GitHub repository for you from an{" "}
          <span className="font-medium text-text-primary">approved template</span> — including
          starter code, Terraform, CI/CD pipelines and the guardrail context files.
        </p>
      </div>

      <Field
        label="Repository name"
        value={repoName}
        onChange={onRepoName}
        placeholder="e.g. onepss-regulatory-assistant"
        hint="Lowercase, hyphen-separated. This becomes your repo and app identifier."
      />

      {hasGitHub === false && (
        <p className="text-xs text-bayer-capri">
          Heads up: you indicated you don't have a Bayer GitHub account yet — the repo will be
          created once your access is approved.
        </p>
      )}
    </div>
  );
}
