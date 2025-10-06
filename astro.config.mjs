// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import lottie from 'astro-integration-lottie';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    lottie(),
  ],
});
