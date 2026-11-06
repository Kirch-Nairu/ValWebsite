import { defineConfig, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

function resolveBaseUrl(): string {
  if (process.env.VALENCIA_BASE_URL) return process.env.VALENCIA_BASE_URL;
  try {
    const statePath = path.resolve(process.cwd(), '.valencia-server.json');
    if (fs.existsSync(statePath)) {
      const raw = fs.readFileSync(statePath, 'utf8').replace(/^\uFEFF/, '');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.url === 'string') return parsed.url;
    }
  } catch {
    // Fallback to default port
  }
  return 'http://127.0.0.1:4321';
}

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: resolveBaseUrl(),
    trace: 'off'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
