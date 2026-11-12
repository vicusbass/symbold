// @ts-check

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import lottie from 'astro-integration-lottie';
import agentMarkdown from './src/integrations/agent-markdown.ts';

export default defineConfig({
  site: 'https://www.symbold.ro',

  // Canonical URLs end in a slash; the Vercel adapter turns this into permanent redirects
  // from the slash-less form, so /about and /about/ are no longer duplicates
  trailingSlash: 'always',

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
    build: {
      // Ship component scripts (reveal animations, cursor, Vercel Analytics) as cached files
      // instead of inlining them into every page, so the raw HTML is mostly content.
      // Returning undefined keeps Vite's default 4 KB rule for everything else.
      assetsInlineLimit: (filePath) => (filePath.endsWith('.js') ? false : undefined),
    },
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
    sitemap({
      // Pages rendered with <Layout noindex> must not be listed
      filter: (page) => !page.includes('/thank-you/'),
    }),
    // Markdown twin of every page for `Accept: text/markdown` (patches the Vercel build output)
    agentMarkdown(),
  ],

  adapter: vercel(),
});
