/**
 * PDF content data — page images extracted via tools/pdf-extractor.
 * Images live in /public/pdf-pages/<btN>/page-N.png
 */

const pdfData = {
  1: {
    pages: Array.from({ length: 15 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt1/page-${i + 1}.png`,
    })),
  },
  2: {
    pages: Array.from({ length: 2 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt2/page-${i + 1}.png`,
    })),
  },
  3: {
    pages: Array.from({ length: 23 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt3/page-${i + 1}.png`,
    })),
  },
  4: {
    pages: Array.from({ length: 4 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt4/page-${i + 1}.png`,
    })),
  },
  5: {
    pages: Array.from({ length: 17 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt5/page-${i + 1}.png`,
    })),
  },
  6: {
    pages: Array.from({ length: 4 }, (_, i) => ({
      page: i + 1,
      imageUrl: `/pdf-pages/bt6/page-${i + 1}.png`,
    })),
  },
};

/**
 * Retrieve PDF content (page image list) for a given chapter number.
 * @param {number} chapter - Chapter number (1–6)
 * @returns {{ pages: { page: number, imageUrl: string }[] } | null}
 */
export function getPdfContent(chapter) {
  return pdfData[chapter] ?? null;
}
