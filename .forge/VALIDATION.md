# Validation & Runtime Evidence — `VAL-R2-ONE-SHOT-FRONTEND-DESIGN-REBUILD`

## Verification Matrix
- **Typecheck (`npm run check`):** Passed (`49 files: 0 errors, 0 warnings, 0 hints`).
- **Static Production Build (`npm run build`):** Passed (`50 page(s) built` to `dist/`).
- **Playwright E2E Suite (`npx playwright test`):** Passed (`7 passed`, covering all 22 core & redirect routes, zero console/page errors, zero forbidden internal jargon, real Valencia hero photography verification, search dialog Escape/focus restore, directory/tourism/news/project filters, responsive `1440px` / `768px` / `390px` zero-overflow + 39 full-page screenshots, mobile menu drawer Escape/focus restore, and homepage link validation).
- **Visual Inspection (`1440x900`, `768x900`, `390x844`):** Directly inspected via `view_file` across `home-1440.png`, `home-768.png`, `home-390.png`, `mobile-menu-open-390.png`, `_municipality-1440.png`, `_municipality-390.png`, `_tourism-1440.png`, `_services-1440.png`, `_projects-1440.png`, `_projects_anoyon-high-school-classrooms-1440.png`, `_government-1440.png`, `_culture_sang-at-1440.png`, and `_transparency-1440.png`.
- **Live Local Server (`http://127.0.0.1:4321`):** Running persistently via `scripts/Start-Valencia.ps1` (`Win32_Process Create`) and returning HTTP 200.
