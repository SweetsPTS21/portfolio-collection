# GiangNH Parfait Background Assets Design

## Goal

Make the GiangNH portfolio background feel richer and more alive by adding five new pastel SVG assets and rendering them as layered, low-opacity scene elements. The background must support the current unicorn parfait theme without hiding page content or hurting mobile readability.

## Current State

`giangnh/src/components/layout/ParfaitScene.jsx` renders one fixed background scene with cotton clouds, parfait island, unicorn mascot, and a few sprinkle images. Existing assets also include bubbles, marshmallow shapes, and parfait icons, but the scene uses only part of the asset set.

## New Assets

Create five SVG files in `giangnh/src/assets/unicorn-parfait-island/`:

- `rainbow-syrup-ribbons.svg`: soft rainbow syrup ribbons for top and middle background layers.
- `floating-macaron-moons.svg`: pastel macaron moon cluster for side drift.
- `jelly-bean-constellation.svg`: small jelly beans and star dots for far background texture.
- `waffle-star-balloons.svg`: waffle star balloon motif for edge accents.
- `cream-swirl-portal.svg`: low-opacity cream swirl for bottom-corner depth.

All assets should be standalone SVG, decorative, and lightweight enough for Vite imports.

## Rendering Design

Refactor `ParfaitScene.jsx` to import the five new assets and render them through small configuration arrays instead of repeated one-off markup. Keep the existing island, unicorn, cloud, and sprinkle layers. Add new decorative `<img>` nodes with stable class names and inline position custom properties where useful.

Layering priority:

- Far texture: jelly bean constellation, bubbles, small sprinkles.
- Mid atmosphere: cotton clouds, syrup ribbons, macaron moons.
- Edge anchors: waffle balloons and cream swirl.
- Foreground anchors: existing parfait island and unicorn, kept at low opacity.

All images remain `aria-hidden` with empty alt text.

## Motion And Responsive Rules

Add CSS animation utilities in `giangnh/src/index.css` for slow drift, bob, twinkle, and gentle rotate. Animations must remain subtle and respect the existing `prefers-reduced-motion` rule.

On mobile, reduce sizes and opacity for large edge assets so content stays readable. Keep pointer events disabled for the entire background scene.

## Verification

Run `npm run build` in `giangnh`. Start the Vite dev server after implementation and provide the local URL for visual review.
