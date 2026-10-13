// @ts-check

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import lottie from 'astro-integration-lottie';

export default defineConfig({
  site: 'https://symbold.ro',

  // HTML whitespace rules (Astro 7 defaults to 'jsx'), matching how Biome formats templates
  compressHTML: true,

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Google Sans',
      cssVariable: '--font-google-sans',
      // Variable font: Google Fonts serves the full 400–700 wght axis
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      // latin-ext covers Romanian diacritics (ă, â, î, ș, ț)
      subsets: ['latin', 'latin-ext'],
    },
  ],

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
