Vibe Hub — Project Context
Overview

Project: Vibe Hub — Centralized platform for professionalizing Vibe Coding at Bayer
Client: Bayer (onePSS division)
Consulting Partner: Capgemini
Budget: 250–277k€ (Stage 1)
Timeline: July – December 2026 (Stage 1: Productive MLP)

Problem Statement

Usage of multiple Vibe coding tools is causing pain points across onePSS:

Isolated systems and workflows
Inconsistent logic across solutions
Limited transparency on generated changes
Unclear ownership and missing standards
Increasing complexity in integration and maintenance

Result: Slowed adoption and non-scalable use of Vibe coding.

Business Need

Enhancing user experience for onePSS through:

One single point of access for Vibe coding tools
Consolidation of existing tools and agents
Increased transparency and ease of use
Introduction of consistent standards in corporate design
Intuitive and low-friction user experience

Goal: Enable fast and scalable value creation across Vibe use cases.

Solution Approach — Staged Roadmap
Stage 1: Productive MLP (Now – EOY 2026)
Central Vibe Hub (one-stop shop)
Basic hosting, dev/test/prod setup
UI guidelines, code review & architecture guardrails
SSO & security baseline
CI/CD and infrastructure backbone
Integration of first data connector (e.g., CSW), 1–3 onePSS apps
Stage 2: Stabilized Pilot (Next)
Governance & ownership model
Monitoring & cost model
UI/UX user feedback iterations
SSO and security (incl. Bayer IT)
Extended CI/CD standard & infrastructure backbone
Integration of new data connectors, use cases by submissions
Stage 3: Agentic Workflows (Future)
Agent frameworks & runtimes
Agent authentication & authorization
MCP Tools
Agent governance
Potential scaling into organization

Philosophy: MLP-first approach — immediate value and fast adoption, then scale stepwise into a corporate platform.

Stage 1 — Phases & Timeline
Phase	Timing	Objective	Key Gate
Assessment	07/2026	Understanding business needs with defined use cases	Platform Use Cases, Make or Buy
Design	08/2026	Conceptualizing the platform and its experience	Bayer IT Quality Gate
Build & Iterate	09–11/2026	Developing, testing and iterating with user feedback	Soft Launch
Handover	12/2026	Preparing Stage 2 platform user adoption	End Stage 1
Work Streams
1. User Experience — Boosting adoption by reducing mental load
Phase	Activities
Assessment	Engage 1–3 early user adopters from onePSS; define platform use cases
Design	Design user journey and use case life cycle; define UI guidelines
Build & Iterate	Build UI framework (Bayer CI); build and host Vibe Hub structure, pages, components; integrate 1–3 onePSS apps
Handover	Evaluate MLP success, derive best practices, prepare storytelling
2. Architecture — Ensuring fit into Bayer IT and safeguarding security
Phase	Activities
Assessment	Engage responsible Bayer IT stakeholders; prepare make or buy considering existing systems (MyGenAssist)
Design	Select tech stack, design target architecture, suggest hub governance; conduct Bayer IT collaboration workshops
Build & Iterate	Build hosting base, UI workspace, dev/test/prod environment, CI/CD backbone; integrate vibe coding tool; build security baseline
Handover	Document architecture and governance; support further onboarding of Bayer IT
3. Developer Experience — Managing creativity and complexity through clear guardrails
Phase	Activities
Assessment	Engage 1–3 early developer adopters from onePSS; define platform use cases
Design	Design developer journey; define development guardrails (quality & safety)
Build & Iterate	Build standardized dev environment and templates (GitHub/Codespaces); build CI/CD integration; test platform
Handover	Draft developer onboarding pack incl. "golden path"
4. Data Integration — Enabling data-driven value creation with standardized data access
Phase	Activities
Assessment	Engage Bayer IT stakeholders; define platform use cases incl. scope of MLP data connectors (CSW)
Design	Clarify and ensure Bayer IT requirements / Auth; design ownership model for connectors and approval of changes
Build & Iterate	Build reusable backend for data integration incl. 1 connector (CSW); test data integration
Handover	Document data connector ownership and governance
Phase Deliverables
Assessment
Consolidated interview insights & structured documentation
Defined UI guardrails (i.e., Storybook)
Prioritized tool selection and recommendation
Defined developer guardrails
Defined MVP scope incl. prioritized use cases & connector definition
Design
Documented end-to-end user journey & lifecycle
UI design guidelines aligned to Bayer CI incl. components
Architecture blueprint incl. environments & governance
Workshop summaries & decisions
Defined developer onboarding & usage journey
Defined developer standards (quality, safety, guardrails)
Documented IT requirements
Defined ownership & governance model
Build & Iterate
Implemented UI framework
Implemented hub structure
Apps integrated into hub
Platform infrastructure ready
Implemented security and SSO
Dev environment ready
CI/CD pipelines running
Tested platform
Backend incl. connector ready
Tested connector and flows
Handover
Evaluation results
Documentation package
Knowledge transfer
Onboarding package
Governance model documented
Team & Responsibilities (CW28 Kickoff)
Person	Role / Focus
Luisa	Project management, stakeholder engagement, user/developer interviews, Bayer IT alignment
Deniz	Work stream structure, use case definition templates
Mike	UI best practices, vibe coding tool selection criteria, architecture input, "buy not make" rationale
Shailesh	Architecture scenarios, tech stack drafting, Bayer IT stakeholder engagement (security)
Andreas	GitHub / AWS / Azure access (pre-work)
CW28 Key Actions

Project Management:

Align on way of working (agile vs. waterfall), tools/boards (Azure DevOps)
Set up project structure, governance, roles, communication channels, recurring meetings
Define consistent wording: "apps", "use cases", "platform use cases"

User Experience:

Gather and assess client's existing published vibe-coded apps/use cases
Engage 1–3 early user adopters; draft interview guide
Collect UI best practices from existing apps, CI material

Architecture:

Draft high-level architecture scenarios & tech stack (Azure/AWS, DevOps platform, vibe coding tools)
Engage Bayer IT stakeholders (esp. Heather Hazel, security)
Identify relevant existing systems (MyGenAssist, "Design Agent from Make Team in USA")

Developer Experience:

Define target group, engage 1–3 early developer adopters
Build long list of vibe coding tools (in use and not in use)
Define selection criteria (strategic tech fit, developer competency, policy compliance)

Data Integration:

Engage Bayer IT stakeholders for first data connector alignment (CSW scope)

Blocker (all streams): Mike & Shailesh need access to required tools.

Key Systems & References
System	Context
MyGenAssist	Existing Bayer system — evaluate fit/overlap
GitHub / Codespaces	Target dev environment for standardized templates
Azure	Target hosting infrastructure
CSW	First data connector for MLP
onePSS	Client division / user base
Design Agent (Make Team, USA)	Existing initiative — clarify relationship
Open Questions & Risks
Make or Buy decision due end of July — very tight; may be pre-decided
Tool access blocker affects all work streams at kickoff
Bayer IT Quality Gate criteria and approver not yet defined
Governance gap: Stage 1 builds production assets but governance model is Stage 2 scope
Change management: No explicit adoption/communication plan beyond early adopters
Security timeline risk: IT requirements discovered in Design (Aug) could reshape Build (Sep)
Stage 2 funding criteria: No defined success metrics for MLP evaluation