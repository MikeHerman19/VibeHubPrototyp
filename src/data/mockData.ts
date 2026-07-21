import type { App, AssistantRule } from "./types";

/*
 * ⚠️ PLACEHOLDER CONTENT — spec §8.
 * All app names, owners, and initials below are placeholders. Replace with real
 * onePSS apps and owners before any client-facing use. Thumbnails are abstract
 * CSS gradients (see `thumbVariant`), not real screenshots.
 */

export const APPS: App[] = [
  {
    id: "csw-explorer",
    name: "CSW Explorer",
    category: "Data & Connectors",
    featured: true,
    description:
      "Browse and query CSW data through a guided UI — no SQL required. Filter, preview, and export result sets with a few clicks.",
    tags: ["#csw", "#streamlit", "#data"],
    owners: [
      { initials: "AM", name: "Alex Meyer", role: "Data Engineer" },
      { initials: "PK", name: "Priya Kaur", role: "Product Owner" },
    ],
    tech: { frontend: "Streamlit", backend: "Python", hosting: "Azure" },
    connectors: ["CSW"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-06-28",
    screenshots: ["a", "b", "c"],
  },
  {
    id: "onepss-knowledge-avatar",
    name: "onePSS Knowledge Avatar",
    category: "Knowledge Management",
    featured: true,
    description:
      "Conversational assistant that captures and retrieves internal onePSS knowledge, with source citations back to the origin documents.",
    tags: ["#rag", "#knowledge", "#agentic"],
    owners: [
      { initials: "JS", name: "Jordan Silva", role: "Knowledge Lead" },
      { initials: "MW", name: "Mei Wang", role: "ML Engineer" },
    ],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["SharePoint", "Confluence"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-05",
    screenshots: ["b", "c", "a"],
  },
  {
    id: "submission-copilot",
    name: "Submission Copilot",
    category: "Regulatory & Submissions",
    status: "NEW",
    featured: true,
    description:
      "RAG assistant over submission dossiers. Drafts and cross-checks sections against source evidence, flagging gaps before review.",
    tags: ["#rag", "#react", "#azure"],
    owners: [
      { initials: "TR", name: "Tom Richter", role: "Regulatory Affairs" },
      { initials: "LF", name: "Lena Fischer", role: "Solution Architect" },
    ],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["SharePoint", "CSW"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-12",
    screenshots: ["c", "a", "b"],
  },
  {
    id: "label-copy-checker",
    name: "Label Copy Checker",
    category: "Document Intelligence",
    description:
      "Compares label-copy versions side by side and flags differences, so reviewers spend time on the changes that matter.",
    tags: ["#nlp", "#python"],
    owners: [{ initials: "SD", name: "Sofia Duarte", role: "NLP Engineer" }],
    tech: { frontend: "Streamlit", backend: "Python", hosting: "Azure" },
    connectors: ["SharePoint"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-05-19",
    screenshots: ["a", "b"],
  },
  {
    id: "signal-digest",
    name: "Signal Digest",
    category: "Process Automation",
    description:
      "Summarizes incoming safety signals into a concise daily digest, grouped by product and severity, delivered each morning.",
    tags: ["#llm", "#automation"],
    owners: [
      { initials: "NB", name: "Noah Bauer", role: "Automation Lead" },
      { initials: "IV", name: "Ines Vogel", role: "Pharmacovigilance" },
    ],
    tech: { frontend: "React", backend: "Python", hosting: "Azure" },
    connectors: ["CSW"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-06-11",
    screenshots: ["b", "a"],
  },
  {
    id: "mygenassist-bridge",
    name: "MyGenAssist Bridge",
    category: "Agentic AI",
    description:
      "Connector surface that lets hub apps call MyGenAssist through a single, governed interface — one integration instead of many.",
    tags: ["#agentic", "#integration"],
    owners: [{ initials: "RC", name: "Rafael Costa", role: "Platform Engineer" }],
    tech: { frontend: "—", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["MyGenAssist"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-01",
    screenshots: ["c", "b"],
  },
  {
    id: "deviation-triage-agent",
    name: "Deviation Triage Agent",
    category: "Agentic AI",
    status: "BETA",
    description:
      "Classifies incoming deviations and routes each to the right owner, with a suggested priority and a short rationale.",
    tags: ["#agentic", "#workflow"],
    owners: [
      { initials: "HK", name: "Hana Kim", role: "Quality Systems" },
      { initials: "DO", name: "Diego Ortiz", role: "ML Engineer" },
    ],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["SharePoint"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Beta · onePSS",
    updated: "2026-07-15",
    screenshots: ["a", "c"],
  },
  {
    id: "prompt-studio",
    name: "Prompt Studio",
    category: "Knowledge Management",
    description:
      "Practice and test prompts against models with structured feedback, so teams build prompt skills on a safe internal sandbox.",
    tags: ["#learning", "#chatbot"],
    owners: [{ initials: "EG", name: "Emma Green", role: "Enablement" }],
    tech: { frontend: "Streamlit", backend: "Python", hosting: "Azure" },
    connectors: ["MyGenAssist"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-06-02",
    screenshots: ["b", "c"],
  },
];

export const FEATURED_APPS = APPS.filter((a) => a.featured);

// Assistant scripted responses (spec §7). No LLM — a simple keyword → reply map,
// checked in order; first match wins. Unmatched input falls back to GENERIC_REPLY.
export const ASSISTANT_RULES: AssistantRule[] = [
  {
    keywords: ["csw", "connect", "connector", "sql", "query data"],
    reply:
      "For CSW, take a look at CSW Explorer — it lets you browse and query CSW data through a guided UI, no SQL needed. Submission Copilot and Signal Digest also read from CSW.",
    apps: ["csw-explorer", "submission-copilot", "signal-digest"],
  },
  {
    keywords: ["document", "label", "compare", "pdf", "analysis", "analyse", "analyze"],
    reply:
      "For document work, Label Copy Checker compares label-copy versions and flags differences. Submission Copilot drafts and cross-checks dossier sections against sources.",
    apps: ["label-copy-checker", "submission-copilot"],
  },
  {
    keywords: ["submit", "add my", "publish", "list my app", "own app", "how do i submit"],
    reply:
      "Submitting your own app will be a guided form on the hub — pick a category, add owners, tech stack, and connectors, and it appears in the gallery for onePSS peers. It's coming soon; for now, use “+ Submit an app” to register interest.",
  },
  {
    keywords: ["build", "what can i build", "capabilities", "what can", "get started"],
    reply:
      "On the hub you'll find apps across Data & Connectors, Document Intelligence, Regulatory & Submissions, Knowledge Management, Process Automation, and Agentic AI. Tell me the task you have in mind and I'll point you to the closest app — plus who to ping.",
    apps: ["onepss-knowledge-avatar", "csw-explorer"],
  },
  {
    keywords: ["knowledge", "search", "ask", "find information", "rag"],
    reply:
      "The onePSS Knowledge Avatar is a conversational assistant over internal onePSS knowledge, with citations back to the source. Prompt Studio is handy if you want to practise the prompts first.",
    apps: ["onepss-knowledge-avatar", "prompt-studio"],
  },
  {
    keywords: ["agent", "agentic", "route", "triage", "workflow", "automation"],
    reply:
      "For agentic workflows, the Deviation Triage Agent classifies and routes deviations, and MyGenAssist Bridge lets hub apps call MyGenAssist through one governed interface. Signal Digest automates the daily safety-signal summary.",
    apps: ["deviation-triage-agent", "mygenassist-bridge", "signal-digest"],
  },
];

export const GENERIC_REPLY =
  "I can point you to the right app in the hub. Two good starting points are the onePSS Knowledge Avatar for finding internal knowledge, and CSW Explorer for working with CSW data. Tell me the task you're trying to do — or try one of the quick starts below.";

export const GENERIC_REPLY_APPS = ["onepss-knowledge-avatar", "csw-explorer"];

export const QUICK_STARTS = [
  "Which app connects to CSW?",
  "Show me document analysis apps",
  "How do I submit my own app?",
  "What can I build on the hub?",
];

export function getApp(id: string | undefined): App | undefined {
  return APPS.find((a) => a.id === id);
}

// Related apps: same category first, then apps that share a connector (spec §6.5).
export function getRelatedApps(app: App, limit = 3): App[] {
  const sameCategory = APPS.filter(
    (a) => a.id !== app.id && a.category === app.category
  );
  const sharedConnector = APPS.filter(
    (a) =>
      a.id !== app.id &&
      a.category !== app.category &&
      a.connectors.some((c) => app.connectors.includes(c))
  );
  const seen = new Set<string>();
  return [...sameCategory, ...sharedConnector]
    .filter((a) => (seen.has(a.id) ? false : (seen.add(a.id), true)))
    .slice(0, limit);
}

export function resolveAssistantReply(input: string): {
  text: string;
  apps: string[];
} {
  const q = input.toLowerCase();
  for (const rule of ASSISTANT_RULES) {
    if (rule.keywords.some((k) => q.includes(k))) {
      return { text: rule.reply, apps: rule.apps ?? [] };
    }
  }
  return { text: GENERIC_REPLY, apps: GENERIC_REPLY_APPS };
}
