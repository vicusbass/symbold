import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = sanityClient;

const clientConfig = sanityClient.config();
const projectId = clientConfig.projectId;
const dataset = clientConfig.dataset;

let builder: ReturnType<typeof imageUrlBuilder> | null = null;

if (projectId && dataset) {
  builder = imageUrlBuilder({ projectId, dataset });
} else {
  console.warn(
    'Sanity `projectId` or `dataset` not found in `sanityClient` configuration. ' +
      'This is usually configured in `astro.config.mjs` via the Sanity integration ' +
      'and relies on environment variables (e.g., SANITY_STUDIO_PROJECT_ID). ' +
      'Image URLs will not be generated. ' +
      'Current config from sanityClient:',
    clientConfig
  );
}

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!source || !builder) {
    return null;
  }
  try {
    return builder.image(source);
  } catch {
    return null;
  }
}
