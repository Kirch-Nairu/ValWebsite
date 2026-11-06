import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = path.resolve(process.cwd(), 'research-local', 'screenshots', 'm01b');

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
});

const REQUIRED_ROUTES = [
  { path: '/', heading: 'BARUG VALENCIA' },
  { path: '/discover', heading: 'From Coastal Cold Springs to Interior Limestone Ridges' },
  { path: '/culture', heading: 'Riverbank Resilience, Hardwood Craft, and Living Tradition' },
  { path: '/culture/sang-at', heading: 'Sang-at: How a Riverbank Shelter Became Valencia’s Cultural Signature' },
  { path: '/valencia', heading: 'Municipality of Valencia, Province of Bohol' },
  { path: '/progress', heading: 'Verified Milestones & Transparently Labeled Proposals' },
  { path: '/updates', heading: 'Dated Milestones, News & Event Records' },
  { path: '/government', heading: 'Public Service Guide, Transparency & Governance' },
  { path: '/contact', heading: 'Verified Municipal Channels & Rights Provenance' },
  { path: '/discover/badiang-spring', heading: 'Badiang Spring Resort and Hotel' },
  { path: '/discover/sto-nino-parish-church', heading: 'Sr. Santo Niño Parish Church & Convent' },
  { path: '/discover/kinawa-falls', heading: 'Kinawa Falls' },
  { path: '/stories/panangatan-origin', heading: 'Where the Boats Were Lifted: From Barrio Panangatan to the Municipality of Valencia' },
  { path: '/stories/sto-nino-wooden-floor', heading: 'Tindalo and Molave: Inside the 1882 Hardwood Floor of Santo Niño Parish' },
  { path: '/stories/sunday-tabu-and-crafts', heading: 'Sunday Tabu, Paleng-QR, and the Living Economy of Valencia’s 35 Barangays' }
];

test('All required top-level and detail routes render HTTP 200 with zero console/page errors and include prototype disclosures', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`${page.url()}: ${msg.text()}`);
  });
  page.on('pageerror', (err) => {
    pageErrors.push(`${page.url()}: ${err.message}`);
  });

  for (const route of REQUIRED_ROUTES) {
    const response = await page.goto(route.path, { waitUntil: 'domcontentloaded' });
    expect(response?.status(), `HTTP status for ${route.path}`).toBe(200);
    await expect(page.locator('main h1')).toContainText(route.heading);
    await expect(page.locator('.prototype-banner')).toContainText('Not an official live municipal service');
    await expect(page.locator('.site-header')).toContainText('BARUG VALENCIA');
  }

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test('Responsive viewports (1440px, 768px, 390px) have zero horizontal overflow and capture full-page screenshots', async ({ page }) => {
  // Desktop 1440x900 captures
  await page.setViewportSize({ width: 1440, height: 900 });
  const desktopCaptures = [
    { path: '/', file: 'home-1440x900.png' },
    { path: '/discover', file: 'discover-1440x900.png' },
    { path: '/culture/sang-at', file: 'culture-sang-at-1440x900.png' },
    { path: '/valencia', file: 'valencia-1440x900.png' },
    { path: '/progress', file: 'progress-1440x900.png' },
    { path: '/updates', file: 'updates-1440x900.png' },
    { path: '/government', file: 'government-1440x900.png' },
    { path: '/contact', file: 'contact-1440x900.png' }
  ];

  for (const item of desktopCaptures) {
    await page.goto(item.path, { waitUntil: 'domcontentloaded' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `Desktop overflow on ${item.path}`).toBe(false);
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, item.file), fullPage: true });
  }

  // Tablet 768x1024 overflow check
  await page.setViewportSize({ width: 768, height: 1024 });
  for (const item of desktopCaptures.slice(0, 4)) {
    await page.goto(item.path, { waitUntil: 'domcontentloaded' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `Tablet overflow on ${item.path}`).toBe(false);
  }

  // Mobile 390x844 captures + mobile drawer open state
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const mobileOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(mobileOverflow, 'Mobile 390px overflow on /').toBe(false);
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'home-390x844.png'), fullPage: true });

  // Open mobile drawer and capture screenshot
  const menuBtn = page.locator('#open-mobile-menu-btn');
  await expect(menuBtn).toBeVisible();
  await menuBtn.click();
  await expect(page.locator('#mobile-nav-drawer')).toBeVisible();
  await expect(menuBtn).toHaveAttribute('aria-expanded', 'true');
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile-menu-open-390x844.png'), fullPage: false });

  // Close mobile drawer with Escape
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-drawer-backdrop')).toBeHidden();
});

test('Interactive Search modal, Discover filter, Updates filter, and 35-Barangay filter work properly', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');

  // Search Modal
  await page.locator('#open-search-btn').click();
  const searchModal = page.locator('#site-search-modal');
  await expect(searchModal).toBeVisible();
  const searchInput = page.locator('#global-search-input');
  await searchInput.fill('Badiang');
  await expect(page.locator('#global-search-results')).toContainText('Badiang Spring Resort and Hotel');
  await page.keyboard.press('Escape');
  await expect(searchModal).toBeHidden();

  // Discover Filter
  await page.goto('/discover');
  await page.locator('[data-discover-filter="Karst Caves"]').click();
  await expect(page.locator('#discover-count-label')).toContainText('Showing 1 documented entry for "Karst Caves"');

  // Valencia 35 Barangays table & filter
  await page.goto('/valencia');
  const allBarangays = await page.locator('[data-barangay-row]').count();
  expect(allBarangays).toBe(35);
  await page.locator('#barangay-search').fill('Anoyon');
  const visibleBarangays = await page.locator('[data-barangay-row]:not([hidden])').count();
  expect(visibleBarangays).toBe(1);

  // Updates Filter
  await page.goto('/updates');
  await page.locator('[data-update-filter="Cultural Milestone"]').click();
  await expect(page.locator('#updates-count-status')).toContainText('Cultural Milestone');
});
