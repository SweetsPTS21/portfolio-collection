# FinalWhistleRoute Redesign

## Goal

Redesign `FinalWhistleRoute` into a bright, vivid football-themed conclusion dashboard. The screen must be easier to scan than the current vertical timeline and must not add invented portfolio content.

## Source Data

The route will render portfolio content only from these existing fields:

- `portfolioData.conclusion`
- `portfolioData.aiPrinciple`
- `portfolioData.recapSections`

Small UI labels are allowed, but they must stay generic and must not claim new achievements, facts, or personal details.

## Layout

1. Hero scoreboard
   - Replace the plain compact hero with a scoreboard-style hero.
   - Left area shows `Trang Tổng kết (Conclusion)`, `Tổng kết`, and `portfolioData.conclusion`.
   - Right area shows compact stat tiles derived from existing data, such as recap section count and challenge count.

2. AI principle band
   - Keep `PrincipleSlab` near the top, directly after the hero.
   - Treat it as a key summary principle, not a decorative aside.

3. Recap card grid
   - Replace `recap-layout`, `recap-rail`, and the strict vertical timeline feel with a responsive grid.
   - Render all sections from `portfolioData.recapSections`.
   - Each card shows a number badge, title, and bullet rows.
   - Football assets are used inside cards at low visual weight, not as background clutter.
   - The final recap section gets slightly stronger visual treatment because it is the forward-looking close.

## Components

- `FinalWhistleRoute.jsx` owns dashboard structure and derived counts.
- `RecapTimelineCard.jsx` can be refit into a recap play card while keeping the file name, or replaced with a new focused component if cleaner.
- Styling lives in `src/styles.css`, using current light vivid theme and existing asset approach.

## Data Integrity

- No new portfolio claims are added.
- Existing contract test for portfolio strings must continue passing.
- Static UI copy should be short and functional.

## Responsive Behavior

- Desktop: hero uses two columns; recap grid uses two columns where space allows.
- Mobile: hero stacks; recap cards become one column; card assets must not cover text.
- Text must not overflow buttons, badges, or cards.

## Testing

- Update contract tests to assert the new route structure, including scoreboard and recap grid markers.
- Run `npm test`.
- Run `npm run build`.
- If dev server is available, smoke-check `/recap` visually or by HTTP.

## Out Of Scope

- No changes to `portfolioData` content unless needed to remove invented data.
- No new route.
- No new background-heavy asset layer.
