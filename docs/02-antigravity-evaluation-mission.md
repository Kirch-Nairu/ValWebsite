# M01 — Antigravity frontend capability evaluation and bounded design spike
Mission: `VAL-M01-ANTIGRAVITY-FRONTEND-BAKEOFF`
Status: **NOT EXECUTED**. This document is a task order for the Antigravity app on the user's machine. Any claim of success requires actual captured evidence. Read [discovery](./00-discovery-source-register.md) and [architecture](./01-product-architecture-roadmap.md) first.

## Roles and safety boundaries
- Technical authority / reviewer: Kirch-Nairu with ChatGPT as the external review/architecture assistant; ChatGPT cannot infer it controls the installed desktop app from screenshots.
- Agent executor: Google Antigravity in the local `ValWebsite` workspace, operating on an explicitly named isolated branch.
- Ground truth: Git history and code; test logs and actual screenshots; reliable cited public records.
- Forbidden: direct `main` edits, merging, production deployments, DNS, arbitrary third-party dependencies without reason, scraping/embedding unlicensed imagery, fake municipal endorsement, fabricated contacts/office names/service fees, active external forms, secrets or API tokens in files, force pushes, claiming tests without artifacts.

## Capability-probe stages
### A. Workspace and shell (read-only)
1. Confirm local directory is the Git checkout for `Kirch-Nairu/ValWebsite`; report working tree, remotes, local SHA and `main` HEAD.
2. Report `node --version`, `npm --version`, `git --version`, and shell platform from actual outputs.
3. Read `README.md` and planning documents. Detect clean state, never silently discard edits.
4. Confirm whether editor agent, terminal commands, preview browser, screenshot capture, and artifact attachments are operational. Report unavailable capabilities as unavailable.
**Gate:** reproducible environment, truthful capability matrix, no source changes.

### B. Controlled visual spike (one branch per candidate)
Create isolated branches from the same validated `main` base:
- `spike/val-m01-gpt-oss`
- `spike/val-m01-gemini`
- `spike/val-m01-claude`

Candidate models visible in the supplied screenshot: GPT-OSS 120B (Medium), Gemini 4 Argon Medium, Claude Sonnet 5.5 Medium. These are **UI options**, not performance claims or verified runtime configurations. The operator selects each model manually. Use the **identical specification** for each candidate and keep branches independent; never copy another candidate's generated code into the new candidate. The exact available models, costs and tool entitlements may change.

### C. Identical implementation benchmark prompt
> You are executing VAL-M01-ANTIGRAVITY-FRONTEND-BAKEOFF for the Valencia, Bohol public-information website. Read docs/00-discovery-source-register.md, docs/01-product-architecture-roadmap.md and docs/02-antigravity-evaluation-mission.md. Implement a bounded, static-first, mobile-responsive homepage prototype using Astro, TypeScript and maintainable styles. The homepage must show (1) qualified Valencia Bohol identity without claiming official LGU endorsement, (2) a photo-ready editorial hero with an openly labeled asset placeholder, (3) primary paths for Services, News/Advisories, Municipality, Transparency, Discover and Contact, (4) service navigation cards with no invented service details, (5) dated/advisory placeholder clearly marked DEMO, (6) verified PSA quick facts: 28,535 population in the 2024 census and 35 barangays, with visible PSA source, (7) a heritage teaser for Sto. Niño Parish Church grounded to the Bohol Provincial Tourism Office, and (8) accessible footer. Use authentic-content placeholders instead of fake images, fabricated services or contacts. Use semantic HTML, visible focus, responsive typography, reduced-motion handling, and no unnecessary animation library or backend. The prototype must never be presented or indexed as an official live website. Run actual build, typecheck and relevant test commands. Use browser testing to capture 390px and 1440px full-page screenshots; check console errors, navigation, keyboard focus and overflow. Submit evidence and a draft PR ONLY. Do not deploy, merge, change DNS or write to main. If tools fail, report failure explicitly and preserve logs.

### D. Real browser verification
Capture on an actual running local dev server or production preview with a traceable port and git SHA:
- Desktop **1440 × 900** and mobile **390 × 844** full-page screenshots; optional tablet 768px.
- At least one open mobile navigation screenshot and one focused keyboard element.
- Browser console errors and failed network requests; screenshot generation method and exact command/tool.
- Playwright smoke test: homepage loads, nav links resolve, service CTA works, no horizontal scroll at 390, no `img` lacking alt, no dead-end buttons.
- Run aXe automated scan if available; report it as partial accessibility evidence, not a complete WCAG guarantee.
- Build output, generated output structure, and honest dependency audit (including any installation advisories).
Do not assert “browser tested” or Lighthouse PASS on source inspection alone.

### E. Artifacts and review report
Each draft PR description must include:
```
Mission:
Model UI selection:
Repo / branch / base SHA / head SHA:
Changed files:
Commands + exit codes:
Dev server URL or origin:
Screenshots (desktop/mobile/focus):
Browser logs/errors:
Accessibility automated findings:
Performance measurements (only if actually run):
Known issues/limitations:
Unverified or placeholder content:
Dependencies added with reasons:
Explicit declaration: not deployed, not merged, no municipal endorsement claimed
```
Put appropriately compressed screenshot evidence in `artifacts/antigravity/<model>/` on the candidate branch or attach it to the PR via normal GitHub UI; no sensitive or unrelated user data.

## Comparison rubric — 100 points
| Category | Weight | Pass/fail evidence |
| --- | ---: | --- |
| Visual hierarchy / tasteful civic design | 20 | independently examined 1440px screenshot, useful hierarchy |
| Mobile usability / information finding | 20 | 390px screenshot, nav and tap target smoke tests |
| Accessibility / semantics | 15 | keyboard, focus, alt/labels and automated findings |
| Source discipline / content correctness | 15 | PSA and tourism reference, no fake civic authority |
| Code quality / static-first architecture | 15 | diff, dependency review, Astro build outputs |
| Reproducibility / artifacts | 10 | complete commands, SHAs, screenshots, logs |
| Performance restraint | 5 | JS/image budget and actual Lighthouse if run |
**Hard reject independent of score:** fabricated official status, unlicensed images presented as owned, secrets, `main` mutation, fake verification, or deployment without authorization.

## Maintainer verdict requirements
I will only accept an execution candidate after inspecting the exact branch/diff and evidence. Benchmarked model score must not become a claim of universal model superiority. If only one agent test is completed, label the result “single-model pilot”, not “comparison accepted”. Rework defects require a follow-up commit and recheck; no merge during capability evaluation without an explicit architecture decision.

## Local operator first instruction
Open Antigravity's `ValWebsite` project; ensure it corresponds to the GitHub checkout; select an available candidate model. **First run stage A only**, return shell outputs and capability evidence; then use the same document to authorize the isolated visual spike. If remote updates to planning docs have not arrived, fetch the planning branch in read-only mode first. Do not work from an out-of-date or detached repository silently.
