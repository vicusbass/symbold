// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import lottie from 'astro-integration-lottie';

import dotenv from 'dotenv';
import sanity from '@sanity/astro';
dotenv.config({ path: '.env' });

// https://astro.build/config
export default defineConfig({
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
  ],
});
