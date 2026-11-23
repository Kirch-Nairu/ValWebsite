import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://127.0.0.1:4321',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  server: {
    host: '127.0.0.1',
    port: 4321
  }
});
