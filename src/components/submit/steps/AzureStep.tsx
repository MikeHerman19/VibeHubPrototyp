import { SelectableCard } from "../../ui/SelectableCard";
import { Field } from "../../ui/Field";
import { InfoCallout } from "./InfoCallout";
import { AZURE_REQUEST_URL } from "../content";

// Step 3 (new path): confirm an Azure subscription (or point the user to request one).
export function AzureStep({
  hasAzure,
  onHasAzure,
  azureSubscription,
  onSubscription,
}: {
  hasAzure: boolean | null;
  onHasAzure: (v: boolean) => void;
  azureSubscription: string;
  onSubscription: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3" role="radiogroup" aria-label="Azure subscription">
      <div>
        <h3 className="text-sm font-semibold text-text-primary">
          Do you have an Azure subscription?
        </h3>
        <p className="mt-0.5 text-sm text-text-muted">
          Your app is deployed into your own Azure environment via the CI/CD pipeline.
        </p>
      </div>

      <SelectableCard
        selected={hasAzure === true}
        onSelect={() => onHasAzure(true)}
        title="Yes, I have an Azure subscription"
      />
      <SelectableCard
        selected={hasAzure === false}
        onSelect={() => onHasAzure(false)}
        title="No, not yet"
      />

      {hasAzure === true && (
        <div className="mt-1">
          <Field
            label="Azure subscription ID or name"
            value={azureSubscription}
            onChange={onSubscription}
            placeholder="e.g. 00000000-0000-0000-0000-000000000000"
            hint="Found in the Azure portal under Subscriptions."
          />
        </div>
      )}

      {hasAzure === false && (
        <InfoCallout href={AZURE_REQUEST_URL} linkLabel="Request an Azure subscription">
          <p>
            You'll need an Azure subscription to host your app. Request one via the link below;
            once it's provisioned, add its ID here to complete the setup.
          </p>
        </InfoCallout>
      )}
    </div>
  );
}
