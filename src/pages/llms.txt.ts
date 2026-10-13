import { sanityClient } from 'sanity:client';
import type { APIRoute } from 'astro';
import { portfolioListQuery } from '../lib/queries/portfolio';

type ProjectSummary = {
  title: string;
  slug: { current: string };
  description?: string;
};

export const GET: APIRoute = async () => {
  const projects = await sanityClient.fetch<ProjectSummary[]>(portfolioListQuery);

  const projectLinks = (projects ?? [])
    .map((p) => {
      const desc = p.description ? `: ${p.description.replace(/\s+/g, ' ').trim()}` : '';
      return `- [${p.title}](https://www.symbold.ro/work/${p.slug.current}/)${desc}`;
    })
    .join('\n');

  const body = `# Symbold

> Symbold is an independent branding and web design studio based in Cluj, Romania, working internationally. We craft conceptual, ambitious, and brutally honest brand identities for visionary companies that treat design as strategy, not decoration.

We are not a traditional agency. We move fast, deliver with depth and precision, and partner only with clients who understand the value of design done right.

## Services

- Brand Identity
- Brand Strategy
- Naming
- Packaging Design
- Web Design
- Graphic Design
- Motion Design
- UI/UX
- Brand Manual

## Core pages

- [Home](https://www.symbold.ro/): Overview of Symbold and featured work.
- [About](https://www.symbold.ro/about/): Who we are, our services, values, and differentiators.
- [Work](https://www.symbold.ro/work/): Portfolio of branding, packaging, and web design projects.
- [Contact](https://www.symbold.ro/contact/): Get in touch to start a project.

## Selected work

${projectLinks}

## Optional

- [Sitemap](https://www.symbold.ro/sitemap-index.xml)
- [Privacy Policy](https://www.symbold.ro/privacy/)
- [Cookie Policy](https://www.symbold.ro/cookie-policy/)
- [Terms](https://www.symbold.ro/terms/)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
