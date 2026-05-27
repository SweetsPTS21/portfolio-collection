# Plinh Nature Background Redesign

Date: 2026-05-27
Project: `plinh-portfolio`
Status: Approved design

## Goal

Replace the current `NatureBackground` with a more vivid botanical background that matches `docs/pallet.jpg` and the existing theme tokens. The result should feel rich, animated, and asset-heavy while keeping content readable.

## Source Context

- Palette from `docs/pallet.jpg` and `src/theme.js`:
  - White: `#F5F5F5`
  - Cream: `#DAD7CD`
  - Beige: `#A3B18A`
  - Leaf: `#588157`
  - Moss: `#3A5A40`
  - Existing accent: `#D6A25F`
- Personal theme from `docs/porfolio.md`: gentle, free, natural, creative, legal-academic, digital journal.
- Existing app stack: React, Vite, Tailwind utilities, Framer Motion, Ant Design.
- Existing issue: background has too few assets, uses inline leaf SVGs, and references assets through `./src/...` paths that are fragile in Vite builds.

## Chosen Approach

Use the **Botanical Canopy Parallax** direction with high visual energy.

The background should feel like a cream paper page under a living leaf canopy: branches sway, vines drift, leaves fall in varied paths, pollen floats upward, pressed botanical silhouettes move softly, and warm sun rays shimmer behind content.

## Visual Layers

1. Paper base
   - Body remains `#F5F5F5`.
   - Add subtle speckles and fiber texture using palette-safe SVG/CSS.

2. Ambient color wash
   - Low-opacity gradients using `#DAD7CD`, `#A3B18A`, `#588157`, and `#3A5A40`.
   - No unrelated color families.

3. Canopy frame
   - Large botanical SVG assets in the top corners and side edges.
   - Opacity stays low enough that cards and text remain dominant.

4. Sunlight
   - Soft sun-ray mask and dapple shimmer.
   - Use `#D6A25F` only as a restrained warm accent.

5. Floating assets
   - 24-32 falling leaves with varied size, delay, speed, opacity, rotation, and drift.
   - 14-20 pollen/sparkle particles.
   - 6-8 pressed botanical silhouettes or clusters for depth.

6. Foreground edge detail
   - A few slow vine/leaf clusters near viewport edges.
   - These should not block nav, cards, buttons, modal, or PDF viewer.

## New Assets

Create new background-specific SVGs under:

`src/assets/botanical/background/`

Required files:

- `canopy-top-left.svg`
- `canopy-top-right.svg`
- `vine-column-left.svg`
- `vine-column-right.svg`
- `leaf-cluster-1.svg`
- `leaf-cluster-2.svg`
- `pressed-flower.svg`
- `seed-pod.svg`
- `sun-ray-mask.svg`
- `paper-speckles.svg`

SVGs should use only approved palette colors and opacity. They should be lightweight, hand-drawn/botanical in style, and reusable through CSS classes.

## Component Design

Update `src/components/ui/NatureBackground.jsx`.

Implementation requirements:

- Import assets with ES module imports instead of string paths like `./src/assets/...`.
- Generate particle data from deterministic arrays or seeded helpers, not `Math.random()` during render/mount.
- Keep all background DOM under one fixed, `aria-hidden`, `pointer-events-none` wrapper.
- Avoid layout shifts by giving all assets fixed dimensions or responsive `clamp()` constraints.
- Keep z-index behind content and below modal layers.
- Remove duplicate inline leaf SVG logic from this component; use image assets or compact reusable data.

## Animation Design

- Canopy sway: 9-14s, slow alternate ease-in-out.
- Vine drift: 12-18s vertical and slight rotation.
- Falling leaves: 16-34s, varied routes and rotations.
- Pollen: 10-22s upward float with blur and fade.
- Pressed silhouettes: 18-30s subtle parallax drift.
- Sun shimmer: 14-24s low-opacity breathing effect.

Reduced motion support:

- If `prefers-reduced-motion: reduce`, disable particle animations and hide moving leaves/pollen.
- Keep static paper texture and low-opacity canopy assets.

## CSS Design

Update `src/index.css` with scoped background class names such as:

- `.nature-bg`
- `.nature-bg__paper`
- `.nature-bg__wash`
- `.nature-bg__canopy`
- `.nature-bg__vine`
- `.nature-bg__leaf`
- `.nature-bg__pollen`
- `.nature-bg__pressed`
- `.nature-bg__sun-rays`

Retire or replace current global animation names if they are only used by the old background. Keep unrelated card/nav styles unchanged.

## Scope Limits

- Do not redesign sections, nav, footer, PDF modal, or portfolio content.
- Do not introduce new libraries.
- Do not use external image URLs.
- Do not change theme tokens unless a build or visual conflict requires it.
- Do not make the background obscure text, buttons, cards, or modals.

## Verification

Run:

- `npm run build`

Manual checks:

- Desktop viewport: background should look rich and animated but content remains readable.
- Mobile viewport: side/corner assets should not crowd nav or cards.
- Reduced motion: moving particles should stop/hide.
- Vite build: no broken `./src/assets/...` paths.

## Risks

- Too many moving elements can compete with portfolio content. Control with opacity, blur, and edge placement.
- Large SVGs can add visual weight. Keep SVGs compact and reuse shapes.
- Existing CSS has global animation names. Scope new selectors to reduce accidental side effects.
