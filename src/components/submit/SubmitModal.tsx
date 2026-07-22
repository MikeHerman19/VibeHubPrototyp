import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { useToast } from "../../lib/ToastContext";
import { Stepper } from "./Stepper";
import { EMPTY_WIZARD, type WizardData } from "./types";
import { PathStep } from "./steps/PathStep";
import { GitHubStep } from "./steps/GitHubStep";
import { RepoStep } from "./steps/RepoStep";
import { AzureStep } from "./steps/AzureStep";
import { RegisterStep } from "./steps/RegisterStep";
import { ReviewStep } from "./steps/ReviewStep";

const NEW_STEPS = ["Type", "GitHub", "Repository", "Azure", "Review"];
const EXISTING_STEPS = ["Type", "Details", "Review"];

// Guided "Submit an app" wizard — the app's Developer Journey (kickoff deck). Holds all wizard
// state; branches on the chosen path. Prototype only: submit resolves to a confirmation toast.
export function SubmitModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { showToast } = useToast();
  const [data, setData] = useState<WizardData>(EMPTY_WIZARD);
  const [step, setStep] = useState(0);

  const steps =
    data.path === "existing" ? EXISTING_STEPS : data.path === "new" ? NEW_STEPS : ["Type"];
  const isLast = step === steps.length - 1;

  const patch = (p: Partial<WizardData>) => setData((prev) => ({ ...prev, ...p }));

  // Reset everything, then close (so re-opening starts fresh).
  const close = () => {
    onClose();
    setData(EMPTY_WIZARD);
    setStep(0);
  };

  // Per-step gate for the "Next"/"Submit" button.
  const canProceed = (() => {
    if (step === 0) return data.path !== null;
    if (data.path === "new") {
      if (step === 1) return data.hasGitHub !== null;
      if (step === 2) return data.repoName.trim() !== "";
      if (step === 3)
        return data.hasAzure !== null && (data.hasAzure === false || data.azureSubscription.trim() !== "");
      return true; // review
    }
    // existing
    if (step === 1) return data.appName.trim() !== "" && data.category !== "" && data.repoUrl.trim() !== "";
    return true; // review
  })();

  const next = () => {
    if (isLast) {
      const msg =
        data.path === "new"
          ? `Setup submitted — we'll provision "${data.repoName}" and notify you.`
          : `Thanks! "${data.appName}" has been submitted for the gallery.`;
      showToast(msg);
      close();
      return;
    }
    setStep((s) => s + 1);
  };

  const renderStep = () => {
    if (step === 0) return <PathStep path={data.path} onPath={(p) => patch({ path: p })} />;
    if (data.path === "new") {
      if (step === 1)
        return <GitHubStep hasGitHub={data.hasGitHub} onChange={(v) => patch({ hasGitHub: v })} />;
      if (step === 2)
        return (
          <RepoStep
            repoName={data.repoName}
            onRepoName={(v) => patch({ repoName: v })}
            hasGitHub={data.hasGitHub}
          />
        );
      if (step === 3)
        return (
          <AzureStep
            hasAzure={data.hasAzure}
            onHasAzure={(v) => patch({ hasAzure: v })}
            azureSubscription={data.azureSubscription}
            onSubscription={(v) => patch({ azureSubscription: v })}
          />
        );
      return <ReviewStep data={data} />;
    }
    // existing path
    if (step === 1) return <RegisterStep data={data} onChange={patch} />;
    return <ReviewStep data={data} />;
  };

  return (
    <Modal
      open={open}
      onClose={close}
      title="Submit an app"
      subtitle="Add your app to Vibe Hub"
      footer={
        <>
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
              <ChevronLeft size={16} />
              Back
            </Button>
          ) : (
            <span />
          )}
          {isLast ? (
            <Button variant="accent" onClick={next} disabled={!canProceed}>
              {data.path === "new" ? "Submit setup" : "Submit app"}
            </Button>
          ) : (
            <Button variant="primary" onClick={next} disabled={!canProceed}>
              Next
              <ChevronRight size={16} />
            </Button>
          )}
        </>
      }
    >
      <Stepper steps={steps} current={step} />
      {renderStep()}
    </Modal>
  );
}
