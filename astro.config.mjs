// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import lottie from 'astro-integration-lottie';

import dotenv from 'dotenv';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
dotenv.config({ path: '.env' });

export default defineConfig({
  site: 'https://symbold.ro',

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['cdn.sanity.io'],
  },

  experimental: {
    svgo: true,
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
