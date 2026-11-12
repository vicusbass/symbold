import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  ACCEPTS_MARKDOWN,
  createConverter,
  negotiationRoutes,
  toMarkdown,
} from '../src/integrations/agent-markdown.ts';

const SITE = 'https://www.symbold.ro';
const turndown = createConverter(SITE);

type Route = {
  src?: string;
  dest?: string;
  has?: Array<{ value: string }>;
  headers?: Record<string, string>;
  continue?: boolean;
};

function page(main: string): string {
  return `<!doctype html><html><head>
    <title>About Symbold &amp; friends</title>
    <meta name="description" content="Branding agency in Cluj-Napoca &#38; Bucharest">
  </head><body><header><a href="/">nav</a></header><main class="flex-1">${main}</main>
  <footer>footer</footer></body></html>`;
}

/**
 * Resolves a request against the routes that run before Vercel's filesystem phase: headers
 * accumulate from `continue` routes, the first matching route without `continue` decides the
 * destination ($n substituted from its capture groups).
 */
function resolve(routes: Route[], pathname: string, accept: string) {
  const headers: Record<string, string> = {};
  for (const route of routes) {
    if (!route.src) continue;
    const match = pathname.match(new RegExp(route.src));
    if (!match) continue;
    if (route.has && !route.has.every((h) => new RegExp(`^${h.value}$`).test(accept))) continue;

    const fill = (value: string) => value.replace(/\$(\d)/g, (_, n) => match[Number(n)] ?? '');
    for (const [key, value] of Object.entries(route.headers ?? {})) headers[key] = fill(value);
    if (!route.continue) return { dest: route.dest ? fill(route.dest) : pathname, headers };
  }
  return { dest: pathname, headers };
}

describe('toMarkdown', () => {
  it('writes front matter from the title, description and canonical URL', () => {
    const markdown = toMarkdown(page('<p>Hello</p>'), turndown, SITE, `${SITE}/about/`);
    assert.ok(
      markdown?.startsWith(
        '---\ntitle: "About Symbold & friends"\n' +
          'description: "Branding agency in Cluj-Napoca & Bucharest"\n' +
          'url: https://www.symbold.ro/about/\n---\n\nHello\n'
      ),
      markdown ?? 'null'
    );
  });

  it('omits the url when there is no canonical page (404)', () => {
    const markdown = toMarkdown(page('<h1>page not found</h1>'), turndown, SITE);
    assert.doesNotMatch(markdown ?? '', /^url:/m);
    assert.match(markdown ?? '', /^# page not found$/m);
  });

  it('converts only <main>, and ends with links back into the site', () => {
    const markdown = toMarkdown(page('<p>Body</p>'), turndown, SITE) ?? '';
    assert.doesNotMatch(markdown, /nav|footer/);
    assert.match(markdown, /\[llms\.txt\]\(https:\/\/www\.symbold\.ro\/llms\.txt\)\n$/);
  });

  it('returns null for a page without <main>', () => {
    assert.equal(toMarkdown('<html><body><p>x</p></body></html>', turndown, SITE), null);
  });

  it('turns <br> in display headings into spaces', () => {
    const markdown = toMarkdown(
      page(
        '<h1>symbold, <br>brutally honest<br/>branding</h1><h2>who<br class="hidden">we are</h2>'
      ),
      turndown,
      SITE
    );
    assert.match(markdown ?? '', /^# symbold, brutally honest branding$/m);
    assert.match(markdown ?? '', /^## who we are$/m);
  });

  it('keeps one linked heading for project cards and drops the hover duplicate', () => {
    const markdown = toMarkdown(
      page(
        '<a href="/work/canopy/"><h3>canopy rebranding</h3><img src="x.jpg" alt="canopy">' +
          '<div>canopy rebranding</div></a>'
      ),
      turndown,
      SITE
    );
    assert.match(
      markdown ?? '',
      /^### \[canopy rebranding\]\(https:\/\/www\.symbold\.ro\/work\/canopy\/\)$/m
    );
    assert.equal(markdown?.match(/canopy rebranding/g)?.length, 1);
  });

  it('makes links and images absolute, and drops images without alt text', () => {
    const markdown = toMarkdown(
      page(
        '<p><a href="/contact/">Work with us</a></p>' +
          '<img src="/_astro/logo.png" alt="Symbold logo"><img src="/decor.png" alt="">'
      ),
      turndown,
      SITE
    );
    assert.match(markdown ?? '', /\[Work with us\]\(https:\/\/www\.symbold\.ro\/contact\/\)/);
    assert.match(
      markdown ?? '',
      /!\[Symbold logo\]\(https:\/\/www\.symbold\.ro\/_astro\/logo\.png\)/
    );
    assert.doesNotMatch(markdown ?? '', /decor/);
  });

  it('keeps tag pill labels as a list but drops scripts, forms, svg and other buttons', () => {
    const markdown = toMarkdown(
      page(
        '<button data-tag-id="Naming" type="button">Naming</button>' +
          '<button type="button">Menu</button><script>alert(1)</script>' +
          '<form><label>Email<input name="email"></label><button>Send</button></form>' +
          '<svg><title>icon</title></svg><div aria-hidden="true">decorative</div><hr>'
      ),
      turndown,
      SITE
    );
    const body = markdown?.split('---\n')[2] ?? '';
    assert.match(body, /^- Naming$/m);
    for (const text of ['Menu', 'alert', 'Email', 'Send', 'icon', 'decorative', '* * *']) {
      assert.ok(!body.includes(text), `${text} should be dropped`);
    }
  });
});

describe('negotiationRoutes', () => {
  const routes = negotiationRoutes(SITE, [
    '/',
    '/about/',
    '/work/',
    '/work/Fermele-Moraru/',
  ]) as Route[];
  const MARKDOWN = 'text/markdown';
  const BROWSER = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';

  it('only matches requests that ask for markdown', () => {
    const value = ACCEPTS_MARKDOWN[0].value;
    const accepts = (header: string) => new RegExp(`^${value}$`).test(header);
    assert.ok(accepts(MARKDOWN));
    assert.ok(accepts('text/markdown, text/html;q=0.9'));
    assert.ok(accepts('text/html;q=0.5, text/markdown'));
    assert.ok(!accepts(BROWSER));
    assert.ok(!accepts('*/*'));
  });

  it('serves the homepage markdown with the negotiation headers', () => {
    assert.deepEqual(resolve(routes, '/', MARKDOWN), {
      dest: '/index.md',
      headers: {
        Vary: 'Accept',
        'Content-Type': 'text/markdown; charset=utf-8',
        Link: '<https://www.symbold.ro/>; rel="canonical"',
      },
    });
  });

  it('keeps serving HTML to browsers, with Vary: Accept', () => {
    assert.deepEqual(resolve(routes, '/', BROWSER), { dest: '/', headers: { Vary: 'Accept' } });
    assert.deepEqual(resolve(routes, '/about/', 'text/html'), {
      dest: '/about/',
      headers: { Vary: 'Accept' },
    });
  });

  it('maps nested pages to their index.md, case-sensitively', () => {
    const result = resolve(routes, '/work/Fermele-Moraru/', MARKDOWN);
    assert.equal(result.dest, '/work/Fermele-Moraru/index.md');
    assert.equal(
      result.headers.Link,
      '<https://www.symbold.ro/work/Fermele-Moraru/>; rel="canonical"'
    );
    assert.equal(resolve(routes, '/work/', MARKDOWN).dest, '/work/index.md');
  });

  it('leaves unknown paths alone so they reach the 404 routes', () => {
    for (const path of ['/nope/', '/about/extra/', '/work/fermele-moraru/', '/aboutx/']) {
      assert.deepEqual(resolve(routes, path, MARKDOWN), { dest: path, headers: {} }, path);
    }
  });

  it('labels direct .md requests as markdown with the HTML page as canonical', () => {
    assert.deepEqual(resolve(routes, '/about/index.md', 'text/html'), {
      dest: '/about/index.md',
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        Link: '<https://www.symbold.ro/about/>; rel="canonical"',
      },
    });
  });

  it('escapes regex characters in slugs', () => {
    const escaped = negotiationRoutes(SITE, ['/work/a.b/']) as Route[];
    assert.equal(resolve(escaped, '/work/a.b/', MARKDOWN).dest, '/work/a.b/index.md');
    assert.equal(resolve(escaped, '/work/aXb/', MARKDOWN).dest, '/work/aXb/');
  });
});
