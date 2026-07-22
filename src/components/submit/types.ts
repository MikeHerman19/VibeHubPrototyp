import type { Category } from "../../data/types";

// Which branch of the submit flow the user picked.
export type SubmitPath = "new" | "existing";

// All wizard input, held as one object in SubmitModal.
export type WizardData = {
  path: SubmitPath | null;

  // new-deploy path
  hasGitHub: boolean | null;
  repoName: string;
  hasAzure: boolean | null;
  azureSubscription: string;

  // existing-app registration path
  appName: string;
  category: Category | "";
  repoUrl: string;
};

export const EMPTY_WIZARD: WizardData = {
  path: null,
  hasGitHub: null,
  repoName: "",
  hasAzure: null,
  azureSubscription: "",
  appName: "",
  category: "",
  repoUrl: "",
};
