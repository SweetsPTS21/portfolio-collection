# Thanks Card Design

## Goal

Make the `thanks-card` feel like the most memorable closing moment on the Conclusion page while staying aligned with the existing lavender glass portfolio style.

## Chosen Approach

Use a moon-gate centerpiece treatment. The card becomes a larger, more atmospheric finale with layered glass, glow, sparkle, and the existing `thank-you-moon-gate.svg` asset placed behind the text.

## UI Details

- Keep the current gratitude content and heading structure.
- Add decorative layers inside `thanks-card`: moon gate, sparkle dust, and small glow accents.
- Use a brighter layered background with lavender, pink, gold, and blue highlights.
- Make the card wider and taller than the timeline cards so it reads as the page finale.
- Add a visible inner frame and subtle hover lift/glow.
- Keep all decorative assets `aria-hidden`.

## Responsive Behavior

On mobile, reduce decorative asset size and opacity so text remains clear. Card padding and heading size should stay within the existing responsive rhythm.

## Implementation Scope

Touch only `src/app/App.jsx` and `src/styles.css` unless a small import adjustment is needed. Do not change portfolio text or data.

## Verification

Run `npm run build`. If practical, start the Vite dev server and inspect `/conclusion` on desktop and mobile widths.
