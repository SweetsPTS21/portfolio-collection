import bt1Content from '../assets/pdf-content/bt1/content.json';
import bt2Content from '../assets/pdf-content/bt2/content.json';
import bt3Content from '../assets/pdf-content/bt3/content.json';
import bt4Content from '../assets/pdf-content/bt4/content.json';
import bt5Content from '../assets/pdf-content/bt5/content.json';
import bt6Content from '../assets/pdf-content/bt6/content.json';

const bt1Images = import.meta.glob('../assets/pdf-content/bt1/page-*.png', { eager: true, import: 'default' });
const bt2Images = import.meta.glob('../assets/pdf-content/bt2/page-*.png', { eager: true, import: 'default' });
const bt3Images = import.meta.glob('../assets/pdf-content/bt3/page-*.png', { eager: true, import: 'default' });
const bt4Images = import.meta.glob('../assets/pdf-content/bt4/page-*.png', { eager: true, import: 'default' });
const bt5Images = import.meta.glob('../assets/pdf-content/bt5/page-*.png', { eager: true, import: 'default' });
const bt6Images = import.meta.glob('../assets/pdf-content/bt6/page-*.png', { eager: true, import: 'default' });

function resolveImages(imageGlob) {
  const resolved = {};
  for (const [path, url] of Object.entries(imageGlob)) {
    const match = path.match(/page-(\d+)\.png$/);
    if (match) {
      resolved[parseInt(match[1], 10)] = url;
    }
  }
  return resolved;
}

const allImages = [
  null,
  resolveImages(bt1Images),
  resolveImages(bt2Images),
  resolveImages(bt3Images),
  resolveImages(bt4Images),
  resolveImages(bt5Images),
  resolveImages(bt6Images),
];

const allContent = [null, bt1Content, bt2Content, bt3Content, bt4Content, bt5Content, bt6Content];

/**
 * Get PDF content for a specific chapter.
 * @param {number} chapter - 1-based chapter number (1-6)
 */
export function getPdfContent(chapter) {
  const content = allContent[chapter];
  if (!content) return null;

  const images = allImages[chapter];

  return {
    ...content,
    pages: content.pages.map((page) => ({
      ...page,
      imageUrl: images[page.page] || null,
    })),
  };
}
