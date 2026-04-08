import type { PortableTextBlock } from '../types/sanity';

/**
 * Extracts plain text from the first paragraph of a Portable Text array.
 * Truncates to maxLength characters at the nearest word boundary.
 */
export function extractPlainText(
  blocks: PortableTextBlock[] | undefined,
  maxLength: number = 155,
): string {
  if (!blocks || blocks.length === 0) return '';

  const firstBlock = blocks.find((block) => block._type === 'block');
  if (!firstBlock) return '';

  const text = firstBlock.children
    .filter((child) => child._type === 'span')
    .map((child) => child.text)
    .join('');

  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '...';
}
