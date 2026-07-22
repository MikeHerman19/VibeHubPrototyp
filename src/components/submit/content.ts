/*
 * Copy + request links for the submit wizard.
 * NOTE: the URLs below are PLACEHOLDERS — consistent with the repo's placeholder convention
 * (logo, mock tech/connector data). TODO: replace with the real Bayer-internal request pages
 * before any client-facing use.
 */
export const GITHUB_REQUEST_URL = "https://github.example.bayer.com/request-access"; // TODO: real URL
export const AZURE_REQUEST_URL = "https://cloud.example.bayer.com/request-subscription"; // TODO: real URL

// The seven-step developer journey from the kickoff deck — shown as context on the intro step
// so the overall path is clear in the demo.
export const JOURNEY_STEPS = [
  "Create application",
  "Provision repo from approved template",
  "Develop AI-assisted (Vibe Code)",
  "Commit & push changes",
  "Build, test & deploy automatically",
  "Monitor & manage",
] as const;
