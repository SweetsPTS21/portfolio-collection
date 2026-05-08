# Linh Candy Pop Portfolio Design

## Goal

Create `linh-portfolio` as a standalone Vite React portfolio project. It should reuse the technical structure and data contract from `trang-portfolio`, while replacing the tropical summer visual language with a distinct `candy-pop` Bubblegum App direction.

The project is prepared before Linh's final `portfolio.md` is available. Data remains static in `src/data/portfolioData.js` and can be edited later without changing component structure.

## Scope

In scope:

- Clone `trang-portfolio` into a new `linh-portfolio` folder.
- Rename project metadata, README, app labels, tests, and footer defaults for Linh.
- Keep the existing React/Vite/Ant Design/Tailwind stack.
- Keep the existing section contract: hero, about, skills/tools, projects, conclusion.
- Replace the visual system completely with candy-pop: bubblegum palette, rounded bubble panels, sticker-like badges, candy box project cards, and soft pop motion.
- Keep placeholder content based on the existing data shape so the user can edit it later.

Out of scope:

- No markdown parser or automatic import from `docs/portfolio.md`.
- No new content writing for Linh beyond generic placeholder identity/defaults.
- No backend, CMS, or shared package extraction.

## Visual Direction

Use the selected A direction: Bubblegum App.

Key traits:

- Background: airy pastel pink base with floating candy bubbles, soft mint/lavender/yellow accents, and no tropical sun/waves/palm motifs.
- Hero: large rounded bubble panel, Linh name as the first visual signal, avatar in a soft candy frame, pill CTA/scroll affordance.
- About: bubble panel and profile chips, not postcard or diary styling.
- Skills/tools: sticker grid with small icon markers and playful hover bounce/rotate.
- Projects: six candy-box cards with varied pastel accents and clear readable text.
- Conclusion: structured bubble board with reflection/future items in compact candy panels.

Typography:

- Heading: `Baloo 2` or similar rounded display face.
- Body: `Nunito` for readability.
- Letter spacing remains normal; no viewport-scaled font sizing.

## Architecture

`linh-portfolio` remains a standalone app mirroring `trang-portfolio`:

- `src/App.jsx` wires the Ant Design theme, background, section components, and footer.
- `src/theme.js` defines candy-pop Ant Design tokens.
- `src/data/portfolioData.js` is the editable static data source.
- `src/components/sections/*` render the existing content sections with candy-pop classes.
- `src/components/ui/*` holds small reusable presentation helpers.
- `src/components/candy/*` or a renamed background folder holds candy-specific background/nav shapes if needed.

The data shape should remain close to `trang-portfolio` so future edits are mostly text replacement.

## Testing

Update the existing Playwright smoke test for `linh-portfolio`:

- Visit the local dev server port used by the test.
- Assert the Linh heading/footer placeholder renders.
- Assert candy-specific background/card/sticker selectors exist.
- Assert six project cards render.
- Keep the self-reference pronoun data check if it still matches project conventions.

Run at minimum:

- `npm run build`
- `npm run lint`
- Playwright render check if browser dependencies are available.

## Acceptance Criteria

- `linh-portfolio` exists as an independent project and can install/build like the other portfolios.
- The UI no longer reads as tropical summer/postcard; no wave, palm, sun, beach, or travel stamp motifs remain.
- Candy-pop palette and component shapes match the catalog direction.
- Editing `src/data/portfolioData.js` later is enough to replace Linh's content without structural changes.
- Tests and README reference `linh-portfolio` and candy-pop, not Trang/tropical summer.
