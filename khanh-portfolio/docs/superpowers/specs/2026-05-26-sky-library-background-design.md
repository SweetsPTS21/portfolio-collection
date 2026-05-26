# Sky Library Background Design

Date: 2026-05-26
Project: `khanh-portfolio`

## Goal

Replace the current faint PNG watermark background with a vivid, cute, layered "Serene Sky Library & AI Clouds" scene that matches `README.md`: baby blue, dreamy sky, cloud library, floating books, soft mascot energy, and gentle AI sparkle motion.

The selected direction is the high-presence option: cute, lively, and visually memorable, while preserving readable portfolio content on desktop and mobile.

## Existing Context

The app already renders a global fixed background through `src/components/layout/SkyScene.jsx`.

Current assets available in `src/assets/theme/`:

- `sky-library-bg.png`
- `cloudy-owl-mascot.png`
- `cozy-crescent-moon.png`
- `dreamy-balloon.png`
- `floating-books.png`

The current implementation makes `sky-library-bg.png` a full-screen image at `opacity: 0.05`, so the primary themed asset reads as a weak watermark. Supporting PNGs float independently, but they do not yet compose into a layered world with depth and page rhythm.

## Recommended Approach

Use a layered React/CSS scene inside `SkyScene.jsx`.

This keeps the implementation lightweight, uses the existing asset set, and matches the README requirement for large 2D assets with slow parallax-style motion. A full static PNG would stay too flat, while a canvas scene would add complexity without enough benefit for this portfolio.

## Visual Design

The background should feel like a "dreamy sky library world":

- A baby-blue to lavender, peach, and milk-cream gradient base.
- Soft radial glows behind the library and page content.
- `sky-library-bg.png` as the main focal object, no longer a barely visible watermark. It should sit oversized near the center/right with opacity around `0.22-0.36`, plus soft glow and controlled blur/shadow.
- Multiple cloud bands and cloud clusters at different depths. Some should drift slowly across the viewport.
- `cozy-crescent-moon.png`, `dreamy-balloon.png`, and `floating-books.png` placed as lively props with different float durations.
- `cloudy-owl-mascot.png` as a background mascot accent near the lower right, separate from the interactive foreground owl component.
- 20-28 sparkle particles in pastel gold, mint, white, and pink, generated once and animated with twinkle/drift.

## Page Personality

`SkyScene` should react to the current route by adding a page-specific class:

- About page: strongest sky library and owl presence.
- Projects page: more book/sparkle energy to support the "magical book shelf" mood.
- Conclusion page: warmer peach/cream glow and softer background props to suggest sunrise and closure.

This can be implemented by reading `useLocation()` in `SkyScene.jsx` and mapping the path to classes such as `sky-scene--about`, `sky-scene--projects`, and `sky-scene--conclusion`.

## Component Boundaries

`SkyScene.jsx` should be the only component responsible for the global background scene. It should expose no new public API unless needed by `App.jsx`.

Suggested internal structure:

- Backdrop layer: gradients and global glows.
- Main library layer: large library PNG.
- Cloud layer: CSS/SVG cloud shapes and bands.
- Prop layer: moon, balloon, floating books, background owl.
- Particle layer: memoized sparkle data rendered as decorative nodes.

Content pages should not own background positioning. They remain focused on portfolio content.

## Responsive Rules

Desktop:

- Show the full layered scene.
- Keep the library large and visible but behind content.
- Maintain content readability through opacity, blur, and optional soft content glow.

Tablet:

- Reduce asset sizes by roughly 15-25%.
- Keep fewer book clusters visible.

Mobile:

- Hide or reduce the lower-right background owl and large drifting side clouds.
- Keep a softer library presence near the upper half.
- Reduce particles to avoid visual noise.
- Do not let decorative images overlap text-heavy cards.

## Accessibility and Performance

Support `prefers-reduced-motion: reduce` by stopping all looping animations and hiding nonessential drifting elements.

Keep particle count capped at 28. Use CSS transforms and opacity for animations. Avoid canvas, scroll listeners, or expensive layout reads. Decorative images must use empty alt text or `aria-hidden="true"`.

## Verification

Run:

- `npm run build`

Visual checks:

- Desktop route `/`: background reads as cute, dreamy, and clearly themed.
- Desktop `/projects`: book/sparkle energy is stronger than About.
- Desktop `/conclusion`: warmer close-out tone.
- Mobile width: text remains readable and decorative elements do not cover cards.
- Reduced motion: no continuous drifting or twinkling.

## Out of Scope

- Generating new AI bitmap assets.
- Rewriting page content.
- Replacing the interactive `CloudyOwl` component.
- Adding canvas or WebGL.
