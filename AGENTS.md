# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for a design agency called SYMBOLD, built with TailwindCSS v4 for styling. The project uses TypeScript with strict configuration and implements custom CSS with the Darker Grotesque font family.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview built site locally
- `npm run lint` - Check formatting and lint rules with Biome (same as CI)
- `npm run lint:fix` - Apply Biome formatting, safe lint fixes and import sorting
- `npm run format` - Format code with Biome

## Architecture & Key Files

- **Pages**: All pages are in `src/pages/` as `.astro` files, with file-based routing
- **Styles**: Global styles in `src/styles/global.css` using TailwindCSS v4 with custom theme variables
- **Configuration**:
  - `astro.config.mjs` - Astro config with TailwindCSS Vite plugin
  - `biome.json` - Biome formatter/linter config (covers the site and `studio-symbold/`)
  - `tsconfig.json` - Extends Astro's strict TypeScript config

## Styling System

- Uses TailwindCSS v4 with custom theme variables defined in `src/styles/global.css`
- Primary font: area-normal, premium font from Adobe
- Typography plugin enabled for rich text content
- Custom CSS variables for colors and theming

## Code Style

- Biome configured for single quotes, semicolons, 2-space indentation, 100 character line width
- ES5 trailing commas (the Studio keeps its own style: no semicolons, no bracket spacing)
- `.astro` templates are formatted by Biome's HTML formatter, which follows HTML whitespace rules; `astro.config.mjs` sets `compressHTML: true` so rendering matches

## Workflow

- Use context7, devtools and Playwright MCPs for implementing/validating UI changes, the local site is available at http://localhost:4321/
- Use Astro MCP for all changes related to Astro files
- Anytime I mention components width, it's based on a viewport with 1728 px, but it must be responsive, all the time
