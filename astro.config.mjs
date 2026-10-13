// @ts-check

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import lottie from 'astro-integration-lottie';

export default defineConfig({
  site: 'https://symbold.ro',

  // HTML whitespace rules (Astro 7 defaults to 'jsx'), matching how Biome formats templates
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['cdn.sanity.io'],
  },

  integrations: [
    lottie(),
    sanity({
      projectId: 'p0rg3cc2',
      dataset: 'production',
      useCdn: false, // for static builds
    }),
    sitemap(),
  ],

  adapter: vercel(),
});
