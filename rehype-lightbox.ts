import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

/**
 * Rehype plugin that wraps standalone images with lightbox links.
 * Images already wrapped in links are skipped.
 */
export function rehypeLightbox() {
  return function (tree: Root) {
    visit(tree, 'element', (node, index, parent) => {
      // Only process img elements
      if (node.tagName !== 'img') return;

      // Skip if already wrapped in a link
      if (parent && (parent as Element).tagName === 'a') return;

      // Skip if no parent or index (shouldn't happen)
      if (!parent || index === undefined) return;

      const src = node.properties?.src as string | undefined;
      if (!src) return;

      const alt = (node.properties?.alt as string) || '';

      // Use the optimized src for the lightbox link
      // Astro replaces the src with the optimized path during build
      const wrapper: Element = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: src, // This will be the optimized /_astro/... path after Astro processes it
          class: 'glightbox',
          'data-gallery': 'markdown',
          'data-description': alt,
          'aria-label': alt ? `View ${alt} full size` : 'View image full size',
        },
        children: [node],
      };

      // Replace the img with the wrapped version
      (parent as Element).children[index] = wrapper;
    });
  };
}
