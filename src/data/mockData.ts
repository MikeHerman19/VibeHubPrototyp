import type { App, AssistantRule } from "./types";

/*
 * App roster for the Vibe Hub prototype (spec §8).
 * Tech stack, connectors, auth, environment, and update dates below are
 * inferred placeholders (not confirmed by the app owners) — verify before
 * any client-facing use. Thumbnails are abstract CSS gradients (see
 * `screenshots`), not real screenshots.
 */

export const APPS: App[] = [
  {
    id: "one-pss-hub",
    name: "One PSS Hub",
    category: "Knowledge Management",
    featured: true,
    description:
      "Central knowledge hub for onePSS — surface curated SharePoint links, browse upcoming community meetups, and take role-based assessments, all from one place.",
    tags: ["#knowledge", "#sharepoint", "#community"],
    owners: [{ initials: "MC", name: "Maria Sofia Patino Carranza" }],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["SharePoint"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-18",
    screenshots: ["a", "b", "c"],
  },
  {
    id: "shiftconnector-io-performance-smarthub",
    name: "Shiftconnector ioPerformance SmartHub",
    category: "IT Service Management",
    featured: true,
    description:
      "Automatically creates and routes support tickets for Shiftconnector, turning shift-handover issues into tracked tickets without manual entry.",
    tags: ["#automation", "#ticketing", "#shiftconnector"],
    owners: [{ initials: "AS", name: "Alex Ramos Soszna" }],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["Shiftconnector"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-15",
    screenshots: ["b", "c", "a"],
  },
  {
    id: "pitwin",
    name: "PITwin",
    category: "Process Control",
    featured: true,
    description:
      "Manages process control technology across sites — tracks configuration, lifecycle, and change history for control-system assets.",
    tags: ["#process-control", "#ot", "#lifecycle"],
    owners: [
      { initials: "RS", name: "Ralf Steenhoff" },
      { initials: "MK", name: "Marc Kalliski" },
      { initials: "TK", name: "Tobias Kehren" },
    ],
    tech: { frontend: "React", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: [],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-10",
    screenshots: ["c", "a", "b"],
  },
  {
    id: "digital-learning-path",
    name: "Digital Learning Path",
    category: "Knowledge Management",
    description:
      "Offers digital training modules tailored to each user's role, guiding learners along a personalized path from onboarding to mastery.",
    tags: ["#learning", "#training", "#role-based"],
    owners: [{ initials: "MC", name: "Maria Sofia Patino Carranza" }],
    tech: { frontend: "Streamlit", backend: "Python", hosting: "Azure" },
    connectors: ["SharePoint"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-06-25",
    screenshots: ["a", "c"],
  },
  {
    id: "du-portfolio-comms-agent",
    name: "DU Portfolio & Comms Agent",
    category: "Agentic AI",
    description:
      "Consolidates decentralized reporting Excels into a single global project portfolio update, replacing a slow manual rollup with an automated agent.",
    tags: ["#agentic", "#automation", "#portfolio"],
    owners: [
      { initials: "AT", name: "Alexandru Tatulea-Codrean" },
      { initials: "AP", name: "Amari Parris" },
    ],
    tech: { frontend: "—", backend: "Python/FastAPI", hosting: "Azure" },
    connectors: ["Excel", "SharePoint"],
    auth: "Bayer SSO (Entra ID)",
    environment: "Prod · onePSS",
    updated: "2026-07-20",
    screenshots: ["b", "a"],
  },
];

export const FEATURED_APPS = APPS.filter((a) => a.featured);

// Assistant scripted responses (spec §7). No LLM — a simple keyword → reply map,
// checked in order; first match wins. Unmatched input falls back to GENERIC_REPLY.
export const ASSISTANT_RULES: AssistantRule[] = [
  {
    keywords: ["sharepoint", "knowledge", "meetup", "community", "assessment", "search", "find information"],
    reply:
      "One PSS Hub is your starting point for onePSS knowledge — curated SharePoint links, community meetups, and role-based assessments in one place.",
    apps: ["one-pss-hub"],
  },
  {
    keywords: ["ticket", "shiftconnector", "support", "incident"],
    reply:
      "Shiftconnector ioPerformance SmartHub automatically creates and routes support tickets for Shiftconnector, so shift-handover issues get tracked without manual entry.",
    apps: ["shiftconnector-io-performance-smarthub"],
  },
  {
    keywords: ["process control", "pitwin", "control system", "ot ", "plant"],
    reply:
      "PITwin manages process control technology across sites — configuration, lifecycle, and change history for control-system assets.",
    apps: ["pitwin"],
  },
  {
    keywords: ["training", "learning", "course", "upskill", "onboarding"],
    reply:
      "Digital Learning Path offers training modules tailored to your role — a personalized path from onboarding to mastery.",
    apps: ["digital-learning-path"],
  },
  {
    keywords: ["portfolio", "excel", "reporting", "rollup", "agent"],
    reply:
      "DU Portfolio & Comms Agent consolidates decentralized reporting Excels into a single global project portfolio update, automating what used to be a manual rollup.",
    apps: ["du-portfolio-comms-agent"],
  },
  {
    keywords: ["submit", "add my", "publish", "list my app", "own app", "how do i submit"],
    reply:
      "Submitting your own app will be a guided form on the hub — pick a category, add owners, tech stack, and connectors, and it appears in the gallery for onePSS peers. It's coming soon; for now, use “+ Submit an app” to register interest.",
  },
  {
    keywords: ["build", "what can i build", "capabilities", "what can", "get started"],
    reply:
      "On the hub you'll find apps across Knowledge Management, IT Service Management, Process Control, and Agentic AI. Tell me the task you have in mind and I'll point you to the closest app — plus who to ping.",
    apps: ["one-pss-hub", "digital-learning-path"],
  },
];

export const GENERIC_REPLY =
  "I can point you to the right app in the hub. Two good starting points are the One PSS Hub for onePSS knowledge and community, and Digital Learning Path for role-based training. Tell me the task you're trying to do — or try one of the quick starts below.";

export const GENERIC_REPLY_APPS = ["one-pss-hub", "digital-learning-path"];

export const QUICK_STARTS = [
  "Where can I find onePSS SharePoint links?",
  "How do I create a Shiftconnector ticket?",
  "What training fits my role?",
  "How do I submit my own app?",
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
