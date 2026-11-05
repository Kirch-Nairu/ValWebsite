# M01-B — Antigravity Argon Low visual-engineering evaluation
Mission: `VAL-M01B-ARGON-LOW-VISUAL-SPIKE`. Status: **NOT RUN**.
Read [creative brief](./03-behold-valencia-creative-brief.md), [destination-first architecture](./01-product-architecture-roadmap.md), [research/media register](./04-research-media-source-register.md) and [Opus Low research mission](./05-antigravity-opus-low-research-mission.md) before any frontend work.

## Workflow
1. **First Opus Low discovery** collects verified sources and traceable photo candidate URLs. Only launch frontend spike after those are reviewed or a strictly temporary demo with labeled photo placeholders is explicitly authorized.
2. **Then Argon Low** (if actually available in Antigravity model selector) is the preferred frontend design/coding evaluation, not because proven best but to test the user's hypothesis. All project models use **Low effort**. Optional second model at Low may implement the identical prompt on a separate branch for comparison.
3. Choose a common frozen exact base SHA from planning PR (or merged main), never a moving target; no inherited feature code or cherry-picks between candidates. Branch `spike/val-m01b-argon-low`.
4. No `main` changes, no deployment/DNS/official branding, no source claims without explicit evidence; create a draft PR with screenshot and build artifacts, exactly tagged with model, selected effort and SHA.

## Prompt for Argon Low once Opus research returns
> Execute `VAL-M01B-ARGON-LOW-VISUAL-SPIKE` in `Kirch-Nairu/ValWebsite`. Use **Gemini Argon — Low effort** if the UI offers that model. Read docs/00–05; the core direction is a **premium destination-promotion municipal website**, “BEHOLD VALENCIA,” not a government help portal. Implement one extraordinary accessible, static-first Astro + TypeScript homepage prototype on its own branch. Its immersive responsive hero and image-led editorial hierarchy must prioritize Valencia's identity, culture, Sang-at Festival, people, verified progress and discovery. Government services and announcements should remain accessible but secondary. Use only images from a permission-cleared manifest; otherwise employ clearly marked accurate placeholders, not random Bohol stock or invented Valencia footage. Design must look editorial, locally specific, sophisticated, and beautiful at 1440 and 390px, with no heavy unneeded JS. No official seal unless authorized. Run dev server, Playwright screenshots, build/typecheck and actual browser tests with logs. Return an isolated draft PR, screenshots and exact SHAs; no merge/deploy/DNS changes. Report issues instead of claiming imaginary evidence.

## Compare 3 creative treatments (not necessarily 3 models)
A. Cinematic Place Editorial — dramatic full-bleed real town imagery, typographic scale and distinctive rhythm.
B. Heritage Museum Editorial — archival/local storytelling with photograph captions and historical details.
C. Modern Municipal Destination — clean institutional coherence, refined photography and compact utility.

Recommended to create **one production-quality design direction first** and supply two compact alternate design explorations or clearly described variants, rather than three competing full apps. Never publish a mockup with fake local facts.

## Browser evidence
- Report repo/branch/base SHA/head SHA, exact model name and Low effort selection, tool versions, actual dev URL and test command exit codes.
- 1440 x 900 and 390 x 844 full-page screenshots of running local preview; show 390 mobile menu, scrolled picture essay, festival section, progress section and utility entry.
- Test actual nav, keyboard tab/focus, 390 horizontal overflow, offscreen text, click targets, contrast/alt, console errors, broken links, reduced-motion behavior.
- Auto aXe check if available (automated tool is not complete WCAG proof); PageSpeed/Lighthouse lab only when actually executed; preserve reports.
- Keep screenshot evidence `artifacts/antigravity/argon-low/` on isolated branch or attach in GitHub; do not commit third-party copyrighted content inadvertently.

## 100-point acceptance rubric
| Dimension | Weight |
| --- | ---: |
| Immediate Valencia identity + breathtaking visual hierarchy | 25 |
| Quality of visual storytelling / cultural authenticity | 20 |
| Mobile layout, touch UX and image art direction | 20 |
| Accessibility, usability and utility findability | 15 |
| Source and photo rights discipline | 10 |
| Code quality, performance restraint, reproduction and test evidence | 10 |

**Hard rejection:** confusing municipalities, fabricated current official status, stolen Facebook photo, unauthorized official seal, production deploy, main mutation or fake tests. Only a measured design with legitimate local visual assets can be accepted.

## Return report format
```
Mission:
Exact Antigravity model / effort selector:
Repo / branch / baseline SHA / head SHA:
Architecture and creative direction:
Original local media used + permission IDs:
Placeholder media and unresolved location:
Commands and exit codes:
Local preview and screen sizes:
Screenshot paths and comparison notes:
Playwright/keyboard/aXe/Lighthouse evidence:
Console/failed requests:
Bugs, limits and improvement priorities:
Draft PR link:
No merge / no deployment declaration:
```
