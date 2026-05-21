// PDF content extracted via: python tools/pdf-extractor/extract.py --batch

const modules = import.meta.glob('../assets/pdf-content/BT*/content.json', { eager: true });
const imageModules = import.meta.glob('../assets/pdf-content/BT*/page-*.png', { eager: true, import: 'default' });

function resolveImages(btKey) {
  const resolved = {};
  for (const [path, url] of Object.entries(imageModules)) {
    if (path.includes(`/${btKey}/`)) {
      const match = path.match(/page-(\d+)\.png$/);
      if (match) {
        resolved[parseInt(match[1], 10)] = url;
      }
    }
  }
  return resolved;
}

/**
 * Get PDF content for a specific assignment.
 * @param {number} num - 1-based assignment number (1-6)
 */
export function getPdfContent(num) {
  const key = `BT${num}`;
  const contentPath = Object.keys(modules).find((p) => p.includes(`/${key}/content.json`));
  if (!contentPath) return null;

  const content = modules[contentPath].default || modules[contentPath];
  const images = resolveImages(key);

  return {
    ...content,
    pages: content.pages.map((page) => ({
      ...page,
      imageUrl: images[page.page] || null,
    })),
  };
}
