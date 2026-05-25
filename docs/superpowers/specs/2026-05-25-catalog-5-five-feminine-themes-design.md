# Catalog 5 Five Feminine Themes Design

## Goal

Add five new themes to `catalog-5.md` for feminine portfolio designs. The themes must be visually rich, harmonious, bright, cute, and implementation-oriented. Each theme should treat the background as the main visual layer, with 2D assets and smooth animation defining the experience.

## Approved Theme Set

| ID | Theme | Main background scene | Primary motion |
| --- | --- | --- | --- |
| `strawberry-picnic-meadow` | Strawberry Picnic Meadow Portfolio | Strawberry picnic meadow, gingham blanket, basket, bees, butterflies | Butterfly drift, berry pop, gingham wave |
| `pastel-magic-boutique` | Pastel Magic Boutique Portfolio | Pastel magic shop, potion shelves, mirror, ribbons, star dust | Potion bubbles, mirror shimmer, ribbon flutter |
| `dreamy-flower-train` | Dreamy Flower Train Portfolio | Flower train moving through pastel sky and cloud gardens | Train glide, flower smoke, cloud parallax |
| `mermaid-pearl-lagoon` | Mermaid Pearl Lagoon Portfolio | Pearl lagoon with shells, coral, water shimmer, soft mermaid accents | Pearl shimmer, shell open, water caustics |
| `kawaii-stationery-room` | Kawaii Stationery Room Portfolio | Cute stationery desk room with stickers, gel pens, notes, washi tape | Sticker peel, pen doodle, paper float |

## Content Structure

Each theme will follow the existing `catalog-5.md` format:

- Theme title and short concept paragraph.
- `Đặc điểm nhận dạng`.
- Token palette and CSS variables.
- Typography and Google Font import.
- Library usage table.
- Layout ideas.
- Animation rules.
- Component notes.
- SVG asset table.
- `Yêu cầu triển khai bắt buộc`.

## Mandatory Implementation Direction

Each new theme must explicitly require:

- Three main pages: `about`, `projects`, `conclution`.
- Background scene as the dominant asset and animation layer.
- Cards with multi-color decoration, layered frames, icons, stickers, patterns, or animated accents; cards must not use flat single-color surfaces.
- 2D SVG assets imported into UI or feature layers, not only stored in the asset folder.
- Smooth animations through Framer Motion, Rive, SVGator or CSS keyframes.
- Responsive layout that keeps the background expressive but reduces decoration density on mobile.
- `prefers-reduced-motion` fallback for looping or particle animation.
- Performance budget of about 20-30 visible animated particles or decorative elements.

## Scope

This change only updates `catalog-5.md`. It does not implement any portfolio app, assets, generated images, package changes, or tests.

## Validation

After editing, verify:

- The theme list includes all five new IDs.
- Numbering continues after the existing seven themes.
- Each new theme has `Yêu cầu triển khai bắt buộc`.
- The final updated date reflects May 25, 2026.
- Markdown headings and tables remain readable.
