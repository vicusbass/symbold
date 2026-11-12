/**
 * Markdown for AI agents: after the Vercel adapter has written its build output, this converts
 * each indexable page's `<main>` to markdown and serves it to clients that ask for it.
 *
 * - `/about/` + `Accept: text/markdown` -> `/about/index.md` (`Content-Type: text/markdown`)
 * - `/about/` without it -> the HTML page, as before; both responses carry `Vary: Accept`
 * - an unknown URL + `Accept: text/markdown` -> `/404.md` with a 404 status
 *
 * Static files are served from Vercel's filesystem before any function or Astro middleware runs,
 * so the negotiation has to live in the routing table (`.vercel/output/config.json`), ahead of
 * the `filesystem` phase. Astro runs the adapter's `astro:build:done` (which writes config.json)
 * before ours; the adapter copies the client build into `.vercel/output/static` from a hook it
 * registers after ours, so the .md files are written to the client build dir and ride along.
 */

import { existsSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import TurndownService from 'turndown';

type Route = Record<string, unknown>;

export const ACCEPTS_MARKDOWN = [{ type: 'header', key: 'accept', value: '.*text/markdown.*' }];
const MARKDOWN_TYPE = 'text/markdown; charset=utf-8';

const FOOTER_LINKS = [
  ['Home', '/'],
  ['Work', '/work/'],
  ['About', '/about/'],
  ['Contact', '/contact/'],
  ['llms.txt', '/llms.txt'],
];

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === '#') {
      const value = code[1] === 'x' ? Number.parseInt(code.slice(2), 16) : Number(code.slice(1));
      return Number.isNaN(value) ? match : String.fromCodePoint(value);
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

function attr(html: string, pattern: RegExp): string | undefined {
  const value = html.match(pattern)?.[1];
  return value === undefined ? undefined : decodeEntities(value).trim();
}

function headingLevel(node: Node): number {
  return Number(node.nodeName.charAt(1));
}

function headingText(node: Element): string {
  return decodeEntities(node.innerHTML.replace(/<br\b[^>]*>/gi, ' ').replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
}

export function createConverter(site: string): TurndownService {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '_',
  });

  // Interactive and decorative markup has no meaning outside the browser
  turndown.remove(['script', 'style', 'noscript', 'template', 'form', 'iframe', 'video']);
  turndown.remove(
    (node) =>
      node.nodeName === 'svg' ||
      node.nodeName === 'MUX-VIDEO' ||
      node.getAttribute?.('aria-hidden') === 'true' ||
      (node.nodeName === 'BUTTON' && !node.hasAttribute('data-tag-id'))
  );

  // Tag pills (services on /about/, disciplines on case studies) are buttons, but their labels are content
  turndown.addRule('tags', {
    filter: (node) => node.nodeName === 'BUTTON' && node.hasAttribute('data-tag-id'),
    replacement: (content) => `\n- ${content.replace(/\s+/g, ' ').trim()}\n`,
  });

  // Display titles use <br> for line breaks, which would split a markdown heading
  turndown.addRule('headings', {
    filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    replacement: (_content, node) => {
      const text = headingText(node as HTMLElement);
      return text ? `\n\n${'#'.repeat(headingLevel(node))} ${text}\n\n` : '';
    },
  });

  turndown.addRule('absoluteLinks', {
    filter: (node) => node.nodeName === 'A' && Boolean(node.getAttribute('href')),
    replacement: (content, node) => {
      const href = new URL((node as HTMLElement).getAttribute('href') ?? '', site).href;
      // Card links (project previews) wrap a heading plus a hover duplicate of it: keep the heading
      const heading = (node as HTMLElement).querySelector('h1, h2, h3, h4, h5, h6');
      if (heading) {
        return `\n\n${'#'.repeat(headingLevel(heading))} [${headingText(heading)}](${href})\n\n`;
      }
      const text = content.replace(/\s+/g, ' ').trim();
      return text ? `[${text}](${href})` : '';
    },
  });

  // Images only say something to an agent through their alt text
  turndown.addRule('images', {
    filter: 'img',
    replacement: (_content, node) => {
      const alt = (node as HTMLElement).getAttribute('alt')?.trim();
      const src = (node as HTMLElement).getAttribute('src');
      return alt && src ? `![${alt}](${new URL(src, site).href})` : '';
    },
  });

  return turndown;
}

export function toMarkdown(
  html: string,
  turndown: TurndownService,
  site: string,
  canonical?: string
): string | null {
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1];
  if (!main) return null;

  const title = attr(html, /<title>([^<]*)<\/title>/i);
  const description = attr(html, /<meta\s+name="description"\s+content="([^"]*)"/i);

  const body = turndown
    .turndown(main)
    .split('\n')
    // Inline whitespace from the templates; list indentation is the only leading space that matters
    .map((line) => (/^\s+(?:[-*+]|\d+\.)\s/.test(line) ? line : line.trim()))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    // The closing <hr> every page ends with
    .replace(/(?:\n+\* \* \*)+$/, '');

  const frontMatter = [
    '---',
    title && `title: ${JSON.stringify(title)}`,
    description && `description: ${JSON.stringify(description)}`,
    canonical && `url: ${canonical}`,
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  const footer = FOOTER_LINKS.map(([label, href]) => `[${label}](${site}${href})`).join(' · ');

  return `${frontMatter}\n\n${body}\n\n---\n\n${footer}\n`;
}

async function findPages(dir: string, prefix = ''): Promise<string[]> {
  const pages: string[] = [];
  for (const entry of await readdir(path.join(dir, prefix), { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      pages.push(...(await findPages(dir, relative)));
    } else if (entry.name === 'index.html') {
      pages.push(prefix ? `/${prefix}/` : '/');
    }
  }
  return pages;
}

function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Routes that run before the filesystem phase, so they can override static HTML */
export function negotiationRoutes(site: string, pages: string[]): Route[] {
  const nested = pages.filter((page) => page !== '/').map((page) => escapeRegex(page.slice(1)));
  const groups: Array<{ src: string; dest: string; canonical: string }> = [];

  if (pages.includes('/')) {
    groups.push({ src: '^/$', dest: '/index.md', canonical: `${site}/` });
  }
  if (nested.length) {
    groups.push({ src: `^/(${nested.join('|')})$`, dest: '/$1index.md', canonical: `${site}/$1` });
  }

  return [
    ...groups.flatMap(({ src, dest, canonical }) => [
      // The HTML answer depends on Accept too, so shared caches must key on it
      { src, headers: { Vary: 'Accept' }, continue: true },
      {
        src,
        has: ACCEPTS_MARKDOWN,
        dest,
        headers: {
          'Content-Type': MARKDOWN_TYPE,
          Vary: 'Accept',
          Link: `<${canonical}>; rel="canonical"`,
        },
      },
    ]),
    // Direct requests for the markdown files: right type, and the HTML page stays canonical
    {
      src: '^/(.*)index\\.md$',
      headers: { 'Content-Type': MARKDOWN_TYPE, Link: `<${site}/$1>; rel="canonical"` },
      continue: true,
    },
  ];
}

export default function agentMarkdown(): AstroIntegration {
  let root: URL;
  let site: string;

  return {
    name: 'agent-markdown',
    hooks: {
      'astro:config:done': ({ config }) => {
        root = config.root;
        site = (config.site ?? '').replace(/\/$/, '');
      },
      'astro:build:done': async ({ dir, logger }) => {
        const staticDir = fileURLToPath(dir);
        const configPath = fileURLToPath(new URL('./.vercel/output/config.json', root));
        if (!site || !existsSync(configPath)) {
          logger.warn('No Vercel build output or `site`; skipping markdown pages.');
          return;
        }

        const turndown = createConverter(site);
        const served: string[] = [];

        for (const page of await findPages(staticDir)) {
          const file = path.join(staticDir, page, 'index.html');
          const html = await readFile(file, 'utf8');
          // Pages kept out of search (e.g. /thank-you/) stay out of the markdown set too
          if (/<meta\s+name="robots"\s+content="noindex/i.test(html)) continue;

          const markdown = toMarkdown(html, turndown, site, `${site}${page}`);
          if (!markdown) continue;
          await writeFile(path.join(staticDir, page, 'index.md'), markdown);
          served.push(page);
        }

        const notFoundHtml = path.join(staticDir, '404.html');
        const hasNotFound = existsSync(notFoundHtml);
        if (hasNotFound) {
          const markdown = toMarkdown(await readFile(notFoundHtml, 'utf8'), turndown, site);
          if (markdown) await writeFile(path.join(staticDir, '404.md'), markdown);
        }

        const config = JSON.parse(await readFile(configPath, 'utf8')) as { routes: Route[] };
        const filesystemIndex = config.routes.findIndex((route) => route.handle === 'filesystem');
        if (filesystemIndex === -1) {
          throw new Error('agent-markdown: no `filesystem` handle in .vercel/output/config.json');
        }
        config.routes.splice(filesystemIndex, 0, ...negotiationRoutes(site, served));

        if (hasNotFound) {
          const notFoundIndex = config.routes.findIndex((route) => route.dest === '/404.html');
          if (notFoundIndex === -1) {
            throw new Error('agent-markdown: no /404.html fallback route in config.json');
          }
          config.routes.splice(notFoundIndex, 0, {
            src: '/.*',
            has: ACCEPTS_MARKDOWN,
            dest: '/404.md',
            status: 404,
            headers: { 'Content-Type': MARKDOWN_TYPE, Vary: 'Accept' },
          });
        }

        await writeFile(configPath, `${JSON.stringify(config, null, '\t')}\n`);
        logger.info(
          `Markdown versions of ${served.length} pages, served for Accept: text/markdown`
        );
      },
    },
  };
}
