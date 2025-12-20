import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { Root } from 'mdast';

// https://docs.astro.build/en/recipes/reading-time/

interface VFile {
  data: {
    astro: {
      frontmatter: Record<string, unknown>;
    };
  };
}

export function remarkReadingTime() {
  return function (tree: Root, file: VFile) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    file.data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
