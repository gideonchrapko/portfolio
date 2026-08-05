// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.gideonchrapko.com', // used for absolute OG/twitter image and canonical URLs
  integrations: [tailwind()],
});
