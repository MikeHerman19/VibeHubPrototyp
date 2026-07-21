// Domain types for the Vibe Hub prototype (spec §8).

export const CATEGORIES = [
  "Data & Connectors",
  "Document Intelligence",
  "Regulatory & Submissions",
  "Knowledge Management",
  "Process Automation",
  "Agentic AI",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Owner = {
  initials: string;
  name: string;
  role?: string;
};

export type App = {
  id: string;
  name: string;
  category: Category;
  status?: "NEW" | "BETA";
  featured?: boolean;
  description: string;
  tags: string[]; // e.g. ["#rag", "#streamlit", "#csw"]
  owners: Owner[];
  tech: { frontend: string; backend: string; hosting: string };
  connectors: string[]; // e.g. ["CSW", "SharePoint"]
  auth: string; // e.g. "Bayer SSO (Entra ID)"
  environment: string; // e.g. "Prod · onePSS"
  updated: string; // ISO date
  screenshots: string[]; // placeholder gradient variant keys
};

// A scripted assistant reply (spec §7). `apps` are optional app ids to surface as suggestions.
export type AssistantRule = {
  keywords: string[];
  reply: string;
  apps?: string[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  apps?: string[];
};
