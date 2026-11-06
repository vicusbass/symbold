const BRAND_CREDIT = 'Brand identity by Symbold.';

/** Shortest sentence run worth using on its own; anything shorter reads like a fragment. */
const MIN_SENTENCE_LENGTH = 60;

/** A sentence ends at . ! or ?, optionally followed by closing quotes/brackets, then a space or the end. */
const SENTENCE_END = /[.!?]["'”’)]*(?=\s|$)/g;

/**
 * Builds a meta description from a project's plain-text description.
 *
 * - Collapses whitespace.
 * - Keeps the longest run of whole sentences that fits, and appends a
 *   "Brand identity by Symbold." credit when the text doesn't already mention Symbold.
 * - If no whole sentence fits, cuts at a word boundary with an ellipsis (no credit).
 */
export function buildMetaDescription(text: string | undefined, maxLength = 155): string {
  const clean = (text ?? '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';

  const credit = /symbold/i.test(clean) ? '' : ` ${BRAND_CREDIT}`;
  const budget = maxLength - credit.length;

  const sentences = fitWholeSentences(clean, budget);
  if (sentences) return `${sentences}${credit}`;

  return truncateAtWord(clean, maxLength);
}

function fitWholeSentences(text: string, budget: number): string | null {
  let best: string | null = null;
  for (const match of text.matchAll(SENTENCE_END)) {
    const end = (match.index ?? 0) + match[0].length;
    if (end > budget) break;
    if (end >= MIN_SENTENCE_LENGTH) best = text.slice(0, end);
  }
  return best;
}

function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  // Leave room for the ellipsis character
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return `${cut.replace(/[\s,;:\-–—]+$/, '')}…`;
}
