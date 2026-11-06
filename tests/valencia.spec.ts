import { test, expect } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const screenshots = join(process.cwd(), 'test-results', 'screenshots');
mkdirSync(screenshots, { recursive: true });

const routes = [
  '/',
  '/municipality',
  '/government',
  '/services',
  '/news',
  '/projects',
  '/tourism',
  '/transparency',
  '/contact',
  '/search',
  '/services/civil-registry',
  '/services/treasury-business-permits',
  '/news/dap-ai-course-october-2026',
  '/projects/anoyon-high-school-classrooms',
  '/tourism/badiang-spring',
  '/tourism/sto-nino-parish-church',
  '/culture/sang-at',
  '/stories/panangatan-origin',
  '/stories/canduao-occidental-pottery',
  '/tourism/canduao-occidental-pottery',
  '/valencia',
  '/progress',
  '/updates',
  '/discover'
];

const forbiddenJargon = [
  'Independent Prototype',
  'Independent municipal',
  'Awaiting Approved Original',
  'Awaiting approved original',
  'Research Candidate',
  'In This Prototype',
  'In this prototype',
  'Pending Editorial Approval',
  'Municipal Catchphrase',
  'Photo Slot'
];

test('all municipal routes render without runtime errors or internal prototype jargon', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });

  for (const route of routes) {
    const res = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(res?.status(), route).toBe(200);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('.utility-bar')).toContainText('Municipality of Valencia');

    const bodyText = await page.locator('main').innerText();
    for (const phrase of forbiddenJargon) {
      expect(bodyText, `Route ${route} should not contain "${phrase}"`).not.toContain(phrase);
    }
  }
  expect(errors).toEqual([]);
});

test('homepage renders real Valencia photography and routes to municipal destinations', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Valencia, Bohol.');

  const videoVisible = await page.locator('#hero-video').isVisible();
  expect(videoVisible).toBe(true);

  const chapterCount = await page.locator('.hero-chapter-btn').count();
  expect(chapterCount).toBe(3);

  await expect(page.locator('#hero-audio-toggle')).toBeVisible();

  await page.getByRole('link', { name: /Municipal Services/i }).first().click();
  await expect(page).toHaveURL(/\/services\/?$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Municipal Services');

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: /Explore Valencia/i }).first().click();
  await expect(page).toHaveURL(/\/tourism\/?$/);
});

test('global search modal, Escape and focus restore', async ({ page }) => {
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Search the website' });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Site search' });
  await expect(dialog).toBeVisible();
  await page.locator('#global-search-input').fill('Badiang');
  await expect(page.locator('#search-results')).toContainText('Badiang Spring');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('municipality, tourism, news and projects filters', async ({ page }) => {
  await page.goto('/municipality');
  await page.locator('#barangay-search').fill('Anoyon');
  await expect(page.locator('[data-barangay-row]:visible')).toHaveCount(1);

  await page.goto('/tourism');
  await page.locator('#tourism-category').selectOption('Karst Caves');
  expect(await page.locator('[data-destination-item]:visible').count()).toBeGreaterThan(0);

  await page.goto('/news');
  await page.locator('#news-query').fill('DAP');
  expect(await page.locator('[data-news-item]:visible').count()).toBeGreaterThan(0);

  await page.goto('/projects');
  await page.locator('#project-state').selectOption('verified_completed');
  expect(await page.locator('[data-project-item]:visible').count()).toBeGreaterThan(0);

  await page.goto('/search?q=Anoyon');
  await expect(page.locator('#page-search-results')).toContainText('Anoyon');
});

test('desktop tablet mobile no horizontal overflow and screenshots', async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [1440, 768, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    for (const route of [
      '/',
      '/municipality',
      '/government',
      '/services',
      '/news',
      '/projects',
      '/tourism',
      '/culture/sang-at',
      '/transparency',
      '/contact',
      '/search',
      '/projects/anoyon-high-school-classrooms',
      '/tourism/badiang-spring'
    ]) {
      const response = await page.goto(route, { waitUntil: 'load' });
      expect(response?.status()).toBe(200);
      await page.evaluate(async () => {
        const imgs = Array.from(document.querySelectorAll('img'));
        await Promise.all(
          imgs.map(img =>
            img.complete
              ? img.decode().catch(() => {})
              : new Promise(resolve => {
                  img.addEventListener('load', resolve, { once: true });
                  img.addEventListener('error', resolve, { once: true });
                })
          )
        );
      });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      expect(overflow, `${route} at ${width}px`).toBe(false);
      const key = route.replaceAll('/', '_').replace(/^_$/, 'home');
      await page.screenshot({
        path: join(screenshots, `${key}-${width}.png`),
        fullPage: true,
        animations: 'disabled'
      });
    }
  }
});

test('mobile navigation Escape, focus restore and navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const btn = page.getByRole('button', { name: 'Open navigation' });
  await expect(btn).toBeVisible();
  await btn.click();
  const menu = page.getByRole('dialog', { name: 'Mobile navigation' });
  await expect(menu).toBeVisible();
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
  await page.screenshot({ path: join(screenshots, 'mobile-menu-open-390.png'), animations: 'disabled' });
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(btn).toBeFocused();
  await btn.click();
  await menu.getByRole('link', { name: /Government/ }).click();
  await expect(page).toHaveURL(/\/government\/?$/);
});

test('all local homepage links go to valid pages', async ({ page, request }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('main a[href^="/"]')
    .evaluateAll(elements => [...new Set(elements.map(el => el.getAttribute('href')).filter(Boolean))] as string[]);
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), href).toBe(200);
  }
});
