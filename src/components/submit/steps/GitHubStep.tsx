import { SelectableCard } from "../../ui/SelectableCard";
import { InfoCallout } from "./InfoCallout";
import { GITHUB_REQUEST_URL } from "../content";

// Step 1 (new path): confirm the user has a Bayer GitHub account before we provision a repo.
export function GitHubStep({
  hasGitHub,
  onChange,
}: {
  hasGitHub: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label="GitHub account">
      <div>
        <h3 className="text-sm font-semibold text-text-primary">
          Do you have a Bayer GitHub Enterprise account?
        </h3>
        <p className="mt-0.5 text-sm text-text-muted">
          Vibe Hub creates the repository under your account, so you'll need access first.
        </p>
      </div>

      <SelectableCard
        selected={hasGitHub === true}
        onSelect={() => onChange(true)}
        title="Yes, I have a Bayer GitHub account"
      />
      <SelectableCard
        selected={hasGitHub === false}
        onSelect={() => onChange(false)}
        title="No, not yet"
      />

      {hasGitHub === false && (
        <InfoCallout href={GITHUB_REQUEST_URL} linkLabel="Request a Bayer GitHub account">
          <p>
            You'll need a Bayer GitHub Enterprise account before we can provision your repo.
            Request one via the link below — it usually takes a short while to be approved. You
            can continue setting things up in the meantime.
          </p>
        </InfoCallout>
      )}
    </div>
  );
}
