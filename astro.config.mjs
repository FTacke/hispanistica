import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hispanistica.com',
  base: '/',
  build: {
    assets: 'assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
