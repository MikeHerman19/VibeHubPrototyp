# Vibe Hub — Mockup Build Spec

**For:** Coding agent
**Deliverable:** Clickable React prototype (front-end only, mock data — no backend)
**Client demo:** Bayer onePSS × Capgemini
**Scope:** Two screens — (1) App Gallery, (2) App Detail — plus a persistent AI assistant side panel
**Reference:** Capgemini "AI Shelf Gallery / APA" (visual pattern only; rebrand fully to Bayer CI)

---

## 1. Goal & context

Build a **clickable, front-end-only React prototype** of the **Vibe Hub** — a centralized "one-stop shop" where Bayer onePSS staff discover, open, and learn about vibe-coded apps. This is a **client demo mockup**, not production. It must look polished and on-brand (Bayer CI), feel real when clicked, and run entirely on mock data.

The visual pattern is modeled on the Capgemini AI Shelf Gallery: a searchable card gallery of assets, each card showing a preview, category, description, tags, and an owner "reach out to" block, with an AI assistant docked on the right. We keep that structure but rebrand it to Bayer and add a dedicated app detail page.

---

## 2. Tech & constraints

- **Framework:** React (Vite). Single-page app with client-side routing (`react-router`).
- **Routing:** `/` = Gallery, `/app/:id` = App Detail. Clicking a card or "Open" navigates to detail; a back control returns to gallery.
- **State:** Local React state only. No backend, no auth, no persistence. All content from a local `mockData.js`/`.ts` file.
- **Styling:** Tailwind CSS (or CSS modules) using the Bayer design tokens in §3. Do not use arbitrary brand colors — use the tokens.
- **Icons:** `lucide-react`.
- **Responsive:** Desktop-first (target ~1440px, the demo will be shown on a laptop/projector). Must not break down to ~1024px. Mobile is out of scope.
- **No real network calls.** The assistant returns scripted mock responses (see §7).
- **Accessibility:** Sensible semantics, focus states, alt text on images. Nothing exotic.

---

## 3. Bayer design system (design tokens)

### Colors (from Bayer corporate identity)

| Token | Hex | Use |
|---|---|---|
| `--bayer-blue` (Prussian Blue) | `#00314E` | Primary brand, top bar, headings, primary buttons |
| `--bayer-green` (Harlequin Green) | `#56D500` | Accent, active states, success, category dots, CTA highlights |
| `--bayer-capri` (Capri) | `#01BEFF` | Secondary accent, links, focus rings, gradient stop |
| `--bayer-blue-deep` | `#001F33` | Darkest surfaces, card thumbnail backgrounds |
| `--surface` | `#F4F7FA` | App background (cool light grey-blue) |
| `--surface-card` | `#FFFFFF` | Cards, panels |
| `--border` | `#E2E8F0` | Card borders, dividers |
| `--text-primary` | `#0F2A3D` | Body text |
| `--text-muted` | `#5B7185` | Secondary text, metadata |

**Signature gradient** (Bayer uses blue→green/capri gradients): `linear-gradient(135deg, #00314E 0%, #01BEFF 60%, #56D500 120%)`. Use sparingly on the hero band and featured cards.

**Card thumbnails** should use a dark navy field (`--bayer-blue-deep`) with a subtle gradient or abstract angled shapes, echoing the reference's dark app previews.

### Bayer "dynamic angles" motif

Bayer's CI is built on diagonal/angled shapes. Apply lightly for brand feel:
- Featured/hero band: a subtle diagonal (skewed) edge or angled gradient overlay.
- Category tag chips: small, uppercase, with a colored leading dot.
- Avoid overusing angles on functional cards — keep those clean and rounded (radius ~12px).

### Typography

- **Primary typeface:** **Bayer Sans** (Bayer's proprietary corporate font). It is not publicly licensed, so:
  - **Fallback for this mockup:** `Inter` (Google Fonts) — a humanist sans that reads close to Bayer Sans.
  - Define the stack as: `font-family: "Bayer Sans", "Inter", system-ui, sans-serif;` so it upgrades automatically if Bayer Sans is dropped in later.
- **Scale:** Page title ~28–32px/700; section headers ~18–20px/600; card title ~16–18px/600; body ~14px/400; metadata/tags ~12px/500 uppercase for category labels.

### Component styling defaults

- Card radius 12px, subtle shadow, 1px `--border`, hover lift + border tint to `--bayer-capri`.
- Buttons: primary = Bayer blue fill / white text; secondary = white / blue border; accent CTA (e.g. "Launch app") may use green.
- Chips/tags: pill, light grey fill, `--text-muted`, small.
- Generous whitespace; the reference is airy — match that.

---

## 4. Information architecture

```
/                → Gallery (default)
/app/:id         → App Detail
AI Assistant     → persistent right-hand panel on both routes (collapsible)
```

Global chrome (top bar + assistant panel) persists across both routes. Only the main column swaps.

---

## 5. Screen 1 — Gallery (`/`)

Layout: **top bar** (full width) → **two-column body**: left = main content (~72%), right = **AI Assistant panel** (~28%, collapsible).

### 5.1 Top bar
- Left: **Bayer logo lockup** (use a placeholder Bayer-cross-style mark + "Vibe Hub" wordmark; note in code that the real Bayer Cross asset must be swapped in — do **not** ship a fake official logo to production). Small "onePSS" sub-label.
- Center/right nav (text links): **Apps** (active), **Connectors**, **Guidelines**, **About**.
- Right: user avatar circle.

### 5.2 Page header row
- H1: **"Vibe Hub"** with subtitle: *"— {N} apps, built by you and your onePSS peers"* (N from mock data).
- Right side controls: **Search field** ("Search by name, owner, or tag…"), **filter dropdown** ("All apps · {N}"), **sort dropdown** ("Date added"), **view toggle** (grid/list — grid is enough functionally; list toggle can be visual only), and a primary button **"+ Submit an app"** (opens a small "coming soon" toast — submission flow is out of scope).

### 5.3 Featured strip — "onePSS picks"
- Section label with a small "FEATURED" chip.
- 2–3 **large hero cards** using the Bayer gradient treatment. Each: preview thumbnail, category label, title, 2-line description, tag chips, "reach out to" owners, "Open →".

### 5.4 App gallery — "All apps"
- Section label "All apps · {N}".
- Responsive **card grid** (4 across at 1440px, 3 at ~1200, 2 at ~1024).
- Filtering: search field filters by name/owner/tag live; filter dropdown filters by category. Keep it real — clicking filters the grid.

### 5.5 App card anatomy (the core reusable component)
Top-to-bottom:
1. **Thumbnail** — dark navy preview area (mock screenshot or abstract Bayer-angled graphic). ~16:10.
2. **Category label** — uppercase, small, colored leading dot (e.g. `● DATA & CONNECTORS`). Optional status chip ("NEW" / "BETA") top-right.
3. **Title** (app name).
4. **Description** — 2–3 lines, truncated.
5. **Tag chips** — e.g. `#rag` `#streamlit` `#csw`.
6. **Footer row:** "REACH OUT TO" label + 1–3 overlapping avatar circles + owner name(s), and an **"Open →"** button on the right.
- Whole card and "Open →" both navigate to `/app/:id`.

---

## 6. Screen 2 — App Detail (`/app/:id`)

Same top bar + assistant panel. Main column layout:

### 6.1 Detail header
- Back control ("← Back to gallery").
- App title (H1), category label, status chip.
- Primary CTA **"Launch app ↗"** (green accent; opens a "demo — would open the app" toast). Secondary: **"Reach out"** (opens toast / mailto stub).

### 6.2 Hero / preview
- Large preview image or carousel (2–3 mock screenshots on dark navy).

### 6.3 Overview
- Full description paragraph.
- Tag chips.

### 6.4 "At a glance" info panel (two-column key/value or small cards)
- **Owners / reach out to** — avatars + names + role.
- **Tech stack** — e.g. Frontend: Streamlit; Backend: Python/FastAPI; Hosting: Azure.
- **Data connectors** — e.g. CSW (read-only), SharePoint. Show connector chips.
- **Auth** — e.g. Bayer SSO (Entra ID).
- **Status / environment** — e.g. Prod · onePSS.
- **Last updated** date.

### 6.5 Related apps
- 2–3 smaller app cards ("More in this category" / "Uses the same connector"), each navigating to its detail page.

---

## 7. AI Assistant panel (persistent, right rail)

Keep this on both screens. Models the reference's "AI Shelf Assistant".

- **Header:** "Vibe Hub Assistant" + status dot "Online — ask me about the hub".
- **Empty state:** friendly "How can I help?" line + short subtext ("Tell me what you're trying to do and I'll point you to the right app — plus who to ping").
- **Quick-start chips** (tappable, prefill a scripted answer):
  - "Which app connects to CSW?"
  - "Show me document analysis apps"
  - "How do I submit my own app?"
  - "What can I build on the hub?"
- **Input:** "Ask about an app in the hub…" + send.
- **Behavior (mocked):** No real LLM. Maintain a small keyword→response map. On unmatched input, return a friendly generic reply that suggests a couple of apps and offers a quick-start. Render user + assistant bubbles; auto-scroll. A brief typing indicator before the scripted reply makes it feel live.
- **Collapsible:** a chevron collapses the panel to a slim rail so the gallery can go full width.

---

## 8. Mock data

Provide a `mockData` module. **All names below are placeholders — replace with real onePSS apps and owners before any client-facing use.** Suggested shape:

```ts
type App = {
  id: string;
  name: string;
  category: string;          // one of the categories below
  status?: "NEW" | "BETA";
  featured?: boolean;
  description: string;
  tags: string[];            // e.g. ["#rag", "#streamlit", "#csw"]
  owners: { initials: string; name: string; role?: string }[];
  tech: { frontend: string; backend: string; hosting: string };
  connectors: string[];      // e.g. ["CSW", "SharePoint"]
  auth: string;              // e.g. "Bayer SSO (Entra ID)"
  environment: string;       // e.g. "Prod · onePSS"
  updated: string;           // ISO date
  screenshots: string[];     // placeholder image paths / gradients
};
```

**Categories:** Data & Connectors · Document Intelligence · Regulatory & Submissions · Knowledge Management · Process Automation · Agentic AI

**Suggested seed apps (8–10, placeholder — 3 featured):**

1. **CSW Explorer** *(featured)* — Data & Connectors — Browse and query CSW data through a guided UI without writing SQL. — `#csw #streamlit #data` — connectors: CSW.
2. **onePSS Knowledge Avatar** *(featured)* — Knowledge Management — Conversational assistant that captures and retrieves internal onePSS knowledge. — `#rag #knowledge #agentic`.
3. **Submission Copilot** *(featured, NEW)* — Regulatory & Submissions — RAG assistant over submission dossiers; drafts and cross-checks sections. — `#rag #react #azure`.
4. **Label Copy Checker** — Document Intelligence — Compares label-copy versions and flags differences. — `#nlp #python`.
5. **Signal Digest** — Process Automation — Summarizes incoming safety signals into a daily digest. — `#llm #automation`.
6. **MyGenAssist Bridge** — Agentic AI — Connector surface that lets hub apps call MyGenAssist. — `#agentic #integration`.
7. **Deviation Triage Agent** *(BETA)* — Agentic AI — Classifies and routes deviations to the right owner. — `#agentic #workflow`.
8. **Prompt Studio** — Knowledge Management — Practice and test prompts against models with feedback. — `#learning #chatbot`.

Give each 1–3 owners (placeholder names + initials for avatars), a plausible tech stack, connectors, and an "updated" date. Reuse a small set of abstract dark-navy gradient thumbnails.

---

## 9. Interactions & clickability (make these actually work)

- Card / "Open →" → navigate to detail.
- "← Back" → return to gallery (preserve scroll if easy).
- Search input → live-filters the grid by name/owner/tag.
- Category filter dropdown → filters grid.
- Assistant quick-start chips + input → scripted responses with typing indicator.
- Assistant collapse/expand.
- "Submit an app", "Launch app", "Reach out" → non-blocking toast (e.g. "Demo — this would launch the app"). No dead ends.
- Hover states on cards, buttons, nav. Visible focus rings (Capri).

---

## 10. Component inventory (for the agent)

`TopBar`, `PageHeader` (search/filter/sort/view/submit), `FeaturedStrip`, `AppCard`, `AppGrid`, `CategoryFilter`, `SearchField`, `AssistantPanel` (with `AssistantMessage`, `QuickStartChip`, `AssistantInput`), `AppDetail` (with `PreviewCarousel`, `AtAGlancePanel`, `OwnerBlock`, `ConnectorChip`, `RelatedApps`), `Toast`, `Avatar`, `Tag`, `CategoryLabel`, `Button`.

---

## 11. Out of scope (do not build)

- Real authentication / SSO.
- Real backend, database, or LLM calls.
- The full "submit an app" flow (button + toast only).
- Mobile layout.
- Real Bayer Cross logo asset (use a labeled placeholder; real asset dropped in later from Bayer's brand portal).

---

## 12. Acceptance criteria (definition of done)

- [ ] Gallery renders featured strip + filterable card grid from mock data.
- [ ] Search and category filter both work live.
- [ ] Clicking any card opens its detail page; back returns to gallery.
- [ ] Detail page shows overview, at-a-glance (owners, tech, connectors, auth), previews, and related apps.
- [ ] Assistant panel present on both screens, collapsible, with working quick-starts and scripted replies + typing indicator.
- [ ] All CTAs resolve to a navigation or a toast — no dead clicks.
- [ ] Bayer tokens applied (blue `#00314E`, green `#56D500`, capri `#01BEFF`), font stack leads with "Bayer Sans" then Inter.
- [ ] Looks polished at 1440px and holds together to ~1024px.

---

## 13. Notes for the design pass

- Match the reference's **airy, generous whitespace** and dark preview thumbnails.
- Use the Bayer gradient only on the hero/featured band and maybe the assistant header — keep functional cards clean.
- Category labels uppercase with a colored dot, exactly like the reference's `● KNOWLEDGE MANAGEMENT`.
- Keep the assistant visually distinct (slightly tinted panel) so it reads as a companion, not part of the grid.
