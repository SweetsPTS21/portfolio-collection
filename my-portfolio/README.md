# My Portfolio Build Guide

This folder is an asset-first portfolio package for Dang Vu Tra My. Build the web project from the visual assets in `src/assets`, the written content in `docs/portfolio.md`, and the extracted icon set in `src/assets/icons`.

The implementation target is pixel-faithful reconstruction of `src/assets/DESIGN.png`. Treat the design image as the source of truth, not as loose inspiration.

## Tech Stack

- React 18
- Vite
- Framer Motion
- lucide-react, only when a functional icon is needed and no matching sticker asset exists

Use the provided PNG stickers as the primary visual language. Lucide icons should stay secondary, for accessibility or utility controls such as close, external link, menu, download, and navigation.

## Source Assets

The source design assets are:

- `src/assets/DESIGN.png` - full visual reference and mandatory source of truth for the final layout.
- `src/assets/page.png` - page/background frame asset.
- `src/assets/hero.png` - wide hero illustration/background.
- `src/assets/avatar-portrait.png` - profile portrait/card asset.
- `src/assets/project-card.png` - project/chapter card asset.
- `src/assets/conclution-left.png` and `src/assets/conclution-right.png` - conclusion section decoration. Keep the current filename spelling unless you update imports everywhere.
- `src/assets/wrap-icon-1.png` and `src/assets/wrap-icon-2.png` - original sticker sheets.
- `src/assets/icons/**` - extracted individual stickers from the two sheets.

The original sticker sheets should be kept as reference files. In React components, import the extracted files from `src/assets/icons`.

## Pixel-Perfect Requirement

`DESIGN.png` is a `941x1672` vertical mockup. The desktop implementation must recreate this composition as closely as possible:

- Match the major layout regions, object placement, colors, spacing, rounded shapes, stickers, and visual hierarchy from `DESIGN.png`.
- Use the extracted sticker PNGs only where they correspond to the design reference; do not add unrelated stickers just because they are available.
- Use real HTML text for readable content, but position and style it to match the mockup.
- Use image assets as visual layers when they are already part of the design language: `page.png`, `hero.png`, `avatar-portrait.png`, `project-card.png`, and the extracted stickers.
- Avoid creative reinterpretation unless the asset is missing or the mockup cannot express responsive behavior.
- Keep responsive behavior secondary. First build the canonical desktop/reference layout, then adapt it for smaller screens while preserving the same visual identity.

Acceptance criteria:

1. At the reference viewport, the page should visually align with `DESIGN.png` section by section.
2. Sticker positions should be deliberate and traceable to either `DESIGN.png` or the matching source asset.
3. Typography, colors, card shapes, soft shadows, and decorative density should match the mockup before adding any new UI.
4. Before calling the implementation complete, capture a screenshot and compare it side by side with `DESIGN.png`.

## Extracted Icon Library

The extracted icon library contains:

- `src/assets/icons/wrap-icon-1/` - 81 individual stickers.
- `src/assets/icons/wrap-icon-2/` - 73 individual stickers.
- `src/assets/icons/manifest.json` - source map with original sheet, crop box, dimensions, and output filename.

Useful examples:

```js
import bowLarge from "./assets/icons/wrap-icon-1/wrap1-002-bow-ribbon-large.png";
import browserTabs from "./assets/icons/wrap-icon-2/wrap2-007-browser-window-tabs.png";
import readMoreButton from "./assets/icons/wrap-icon-2/wrap2-019-button-read-more.png";
import contactButton from "./assets/icons/wrap-icon-2/wrap2-022-button-contact-me.png";
import mailIcon from "./assets/icons/wrap-icon-2/wrap2-action-mail.png";
```

Use `manifest.json` when searching for a sticker by source position or checking crop dimensions. Use the filenames when building the app.

## Suggested App Structure

Use a small Vite React app:

```txt
src/
  App.jsx
  main.jsx
  index.css
  data/
    portfolioData.js
  components/
    layout/
      DiaryShell.jsx
      StickerLayer.jsx
      SectionFrame.jsx
    ui/
      Sticker.jsx
      PixelButton.jsx
      BrowserWindow.jsx
      ChapterHeart.jsx
  pages/
    AboutPage.jsx
    ChaptersPage.jsx
    ConclusionPage.jsx
```

Keep content in `portfolioData.js`, derived from `docs/portfolio.md`. Keep visual components reusable and asset-driven.

## Build Method

Build from the design outward:

1. Set a fixed design reference frame matching `DESIGN.png` proportions.
2. Place global background and page shell first using `page.png` and CSS gradients only when the mockup requires them.
3. Place hero/profile/project/conclusion image assets next.
4. Add extracted stickers by importing individual files from `src/assets/icons`.
5. Add HTML text on top of the frame and tune typography to match the mockup.
6. Add Framer Motion only after the static screenshot matches the reference.

For precise positioning, use CSS custom properties per decorative asset:

```css
.sticker-bow-main {
  --x: 42px;
  --y: 36px;
  --w: 132px;
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
}
```

Do not rely on random sticker placement for the reference layout.

## Page Plan

Build the site as a soft diary/browser interface:

- About page: use `hero.png`, `avatar-portrait.png`, soft bow/heart stickers, and the introduction from `portfolio.md`.
- Chapters page: render the six learning chapters as cards. Use `project-card.png`, chapter heart stickers `wrap2-010-chapter-heart-01.png` through `wrap2-009-chapter-heart-06.png`, and action-style button stickers where appropriate.
- Conclusion page: use `conclution-left.png`, `conclution-right.png`, lace borders, labels, and the reflection/challenge/thank-you content from `portfolio.md`.

Prefer one continuous scroll with anchored sections, or three route-like sections animated with Framer Motion. If using routes later, keep the animation gentle: fade, slight y movement, and no large rotations.

## Visual Rules

- Overall mood: cute, soft, diary-like, pink fairy-core, gentle academic portfolio.
- Use light cream/pink backgrounds and sticker accents.
- Use extracted PNG stickers as decorative objects, not repeated as noisy wallpaper.
- Keep text readable: cards should use real HTML text over assets, not bake content into images.
- Treat stickers as `aria-hidden="true"` unless they are meaningful controls.
- For decorative stickers, always set `pointer-events: none`.
- Use stable dimensions for sticker-heavy components to avoid layout shifts.

## Asset Usage Patterns

Create a generic sticker component:

```jsx
export default function Sticker({ src, className = "", alt = "" }) {
  return <img src={src} alt={alt} className={`sticker ${className}`} aria-hidden={alt ? undefined : "true"} />;
}
```

For decorative layers:

```jsx
<div className="sticker-layer" aria-hidden="true">
  <img src={bowLarge} className="sticker sticker-top-left" alt="" />
  <img src={heartPixel} className="sticker sticker-bottom-right" alt="" />
</div>
```

For button-like sticker assets, use a real button or link for semantics and place the sticker as a visual background:

```jsx
<a className="sticker-button" href="#chapters">
  <img src={readMoreButton} alt="" aria-hidden="true" />
  <span>Read More</span>
</a>
```

## Motion Guidance

Use Framer Motion sparingly:

- Section reveal: opacity `0 -> 1`, y `16 -> 0`.
- Stickers: tiny float or rotate loops with long durations.
- Buttons: small hover lift, no aggressive scaling.
- Respect reduced motion with `useReducedMotion`.

## Data Mapping

Convert `docs/portfolio.md` into structured data:

```js
export const profile = {
  name: "Dang Vu Tra My",
  major: "Luật học",
  school: "Trường Đại học Luật - Đại học Quốc gia Hà Nội (VNU-UL)",
  style: "Dễ thương và nhẹ nhàng",
  hobby: "Đọc tiểu thuyết",
  future: "Chuyên gia pháp lý hoặc luật sư về Sở hữu trí tuệ",
};

export const chapters = [
  { number: "01", title: "Tổ chức, sắp xếp và lưu trữ dữ liệu", ... },
  { number: "02", title: "Khai thác dữ liệu và thông tin", ... },
  { number: "03", title: "Tổng quan về trí tuệ nhân tạo (AI)", ... },
  { number: "04", title: "Giao tiếp và hợp tác trong môi trường số", ... },
  { number: "05", title: "Sáng tạo nội dung số", ... },
  { number: "06", title: "An toàn và liêm chính học thuật", ... },
];
```

Use the chapter heart stickers for chapter numbering:

- `wrap2-010-chapter-heart-01.png`
- `wrap2-008-chapter-heart-02.png`
- `wrap2-011-chapter-heart-03.png`
- `wrap2-012-chapter-heart-04.png`
- `wrap2-013-chapter-heart-05.png`
- `wrap2-009-chapter-heart-06.png`

## Implementation Checklist

1. Scaffold Vite React 18 inside `my-portfolio`.
2. Install `framer-motion` and `lucide-react`.
3. Create `portfolioData.js` from `docs/portfolio.md`.
4. Build the app shell using `page.png`, `hero.png`, and extracted stickers.
5. Build About, Chapters, and Conclusion sections.
6. Add responsive CSS for desktop, tablet, and mobile.
7. Add reduced-motion handling.
8. Run `npm run build`.

## Important Notes

- Do not delete `wrap-icon-1.png` or `wrap-icon-2.png`; they are the source sheets.
- Prefer extracted icon files for code imports.
- Keep filenames stable once components import them.
- If a crop looks too tight or accidentally grouped, update the PNG in `src/assets/icons` and the corresponding `manifest.json` entry together.
