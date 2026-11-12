/**
 * Checks the production build output (run `npm run build` first; skipped when it is missing):
 * the Vercel routing table, the markdown files, llms.txt and the homepage HTML.
 */
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { describe, it } from 'node:test';

const OUTPUT = new URL('../.vercel/output/', import.meta.url);
const STATIC = new URL('static/', OUTPUT);
const built = existsSync(new URL('config.json', OUTPUT));

type Route = {
  src?: string;
  dest?: string;
  status?: number;
  handle?: string;
  has?: unknown[];
  headers?: Record<string, string>;
};

const read = (path: string) => readFileSync(new URL(path, STATIC), 'utf8');

describe('build output', { skip: !built && 'no .vercel/output; run `npm run build` first' }, () => {
  const routes: Route[] = built
    ? JSON.parse(readFileSync(new URL('config.json', OUTPUT), 'utf8')).routes
    : [];
  const sitemapPaths = built
    ? [...read('sitemap-0.xml').matchAll(/<loc>https:\/\/www\.symbold\.ro(\/[^<]*)<\/loc>/g)].map(
        (match) => match[1]
      )
    : [];

  it('negotiates markdown before the filesystem serves the HTML', () => {
    const filesystem = routes.findIndex((route) => route.handle === 'filesystem');
    const home = routes.findIndex((route) => route.src === '^/$' && route.dest === '/index.md');
    assert.ok(home !== -1 && home < filesystem);
    assert.equal(routes[home].headers?.['Content-Type'], 'text/markdown; charset=utf-8');
    assert.equal(routes[home].headers?.Vary, 'Accept');
  });

  it('answers unknown URLs with a markdown 404 when asked, before the HTML 404', () => {
    const markdown = routes.findIndex((route) => route.dest === '/404.md');
    const html = routes.findIndex((route) => route.dest === '/404.html');
    assert.ok(markdown !== -1 && markdown === html - 1);
    assert.equal(routes[markdown].status, 404);
    assert.equal(routes[html].status, 404);
    assert.ok(routes[markdown].has?.length);
  });

  it('has a markdown 404 body that explains the error and links to llms.txt', () => {
    const body = read('404.md');
    assert.match(body, /^# page not found$/m);
    assert.ok(body.length > 200);
    assert.match(body, /https:\/\/www\.symbold\.ro\/llms\.txt/);
    assert.match(read('404.html'), /<h1[^>]*>page not found<\/h1>/);
  });

  it('has a markdown version of every page in the sitemap, and only those', () => {
    assert.ok(sitemapPaths.length > 10);
    for (const path of sitemapPaths) {
      const markdown = read(`.${path}index.md`);
      assert.match(markdown, new RegExp(`^url: https://www\\.symbold\\.ro${path}$`, 'm'), path);
      assert.match(markdown, /^# \S/m, `${path} has an H1`);
    }
    assert.ok(!sitemapPaths.includes('/404/'));
    assert.ok(!existsSync(new URL('thank-you/index.md', STATIC)), 'noindex pages get no markdown');
  });

  it('routes every sitemap page to its markdown file', () => {
    const nested = routes.find((route) => route.dest === '/$1index.md');
    assert.ok(nested?.src);
    const pattern = new RegExp(nested.src);
    for (const path of sitemapPaths.filter((path) => path !== '/')) {
      assert.match(path, pattern, path);
    }
  });

  it('keeps the homepage HTML free of inline scripts other than JSON-LD', () => {
    const html = read('index.html');
    const inline = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(
      ([, attributes, body]) => body.trim() && !attributes.includes('application/ld+json')
    );
    assert.deepEqual(
      inline.map(([tag]) => tag.slice(0, 80)),
      []
    );
  });

  it('leads the JSON-LD knowsAbout with a term the homepage uses', () => {
    const html = read('index.html');
    const knowsAbout: string[] = JSON.parse(html.match(/"knowsAbout":(\[[^\]]*\])/)?.[1] ?? '[]');
    assert.ok(knowsAbout.length);
    const text = html.replace(/<(script|style)[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, ' ');
    assert.match(text.toLowerCase(), new RegExp(knowsAbout[0].toLowerCase()));
  });

  it('writes llms.txt in the llmstxt.org layout, with when-to-use guidance', () => {
    const text = read('llms.txt');
    const lines = text.split('\n');
    assert.equal(lines[0], '# Symbold');
    assert.equal(lines.filter((line) => line.startsWith('# ')).length, 1, 'one H1');
    assert.match(lines[2], /^> \S/, 'blockquote summary after the H1');
    assert.match(text, /\*\*When to use Symbold\.\*\*/);
    assert.match(text, /^- Design of a website, web app or mobile app /m);
    assert.match(text, /\*\*How an agent should engage Symbold\.\*\*/);
    assert.match(text, /https:\/\/www\.symbold\.ro\/contact\//);

    // H2 sections hold only link lists, and "Optional" comes last
    const sections = text.split(/^## /m).slice(1);
    assert.ok(sections.length >= 2);
    assert.match(sections.at(-1) ?? '', /^Optional\n/);
    for (const section of sections) {
      const [title, ...body] = section.trim().split('\n');
      for (const line of body.filter(Boolean)) {
        assert.match(line, /^- \[[^\]]+\]\(https:\/\/[^)]+\)(: .+)?$/, `${title}: ${line}`);
      }
    }
  });

  it('keeps the homepage <main> at 5% or more visible text (agent readiness target)', () => {
    const main = read('index.html').match(/<main[\s\S]*<\/main>/)?.[0] ?? '';
    const text = main
      .replace(/<(script|style|svg|noscript)\b[\s\S]*?<\/\1>/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    assert.ok(text.length >= 500, `${text.length} characters of text`);
    const ratio = text.length / main.length;
    assert.ok(ratio >= 0.05, `${(ratio * 100).toFixed(2)}% (${text.length}/${main.length})`);
    assert.doesNotMatch(main, /<!--/, 'no HTML comments shipped in <main>');
  });

  it('adds the disabled: styles to real buttons only', () => {
    const cta = read('index.html').match(
      /<a href="\/contact\/" class="([^"]*bg-accent[^"]*)"/
    )?.[1];
    assert.ok(cta, 'homepage "Work with us" link');
    assert.doesNotMatch(cta, /disabled:/);
    assert.doesNotMatch(cta, /\n/);
    const submit = read('contact/index.html').match(
      /<button id="submit-button"[^>]*class="([^"]*)"/
    )?.[1];
    assert.match(submit ?? '', /disabled:bg-gray-300/);
  });

  it('ships video posters without scoped-style attributes or default Mux parameters', () => {
    const html = read('index.html');
    assert.match(html, /data-mux-video/);
    assert.doesNotMatch(html, /<(?:mux-video|picture)\b[^>]*data-astro-cid-/);
    assert.match(html, /image\.mux\.com\/[^/]+\/thumbnail\.webp\?width=\d+[ "]/);
    assert.doesNotMatch(html, /fit_mode=/);
    // The fade-in rule is still on the page, now global
    assert.match(html, /\[data-mux-video\]\.is-playing\{opacity:1\}/);
  });
});
