# Tra K-Beauty Portfolio Design

## Goal

Build `tra-portfolio` as an independent React/Vite one-page portfolio for Pham Thanh Tra. The page must use only content from `tra-portfolio/docs/portfolio.md`, preserve the supplied avatar and six PDF assignments, and express the `k-beauty` style from `ui-styles-catalog.md` without copying the layout language of the existing portfolio apps.

## Approved Direction

Use a **Soft dossier gallery** concept: a clean Korean beauty-inspired profile where academic content is organized like a calm, premium dossier. The visual language should be soft and feminine, but the information structure remains direct and suitable for a law student portfolio.

Key traits:
- Milk-white and pastel surfaces.
- Large soft radii, subtle shadows, clear hierarchy.
- Light 2D beauty assets used as interface accents, not as unrelated decoration.
- One-page architecture with in-page PDF modal viewing.

## One-Page Architecture

The app will have no router and no separate project detail pages.

Sections:
- `HeroSection`: name, major, university, personal style, avatar.
- `BeautyProfileSection`: about, development direction, portfolio purpose.
- `CapabilitiesSection`: core strengths, principles, tools and platforms.
- `ProjectsSection`: six assignment cards mapped to the six PDFs.
- `ConclusionSection`: reflection, developed skills, challenge, future direction.
- Footer: copyright and asset attribution.

The main reading flow stays vertical and continuous. Project cards open PDFs in a modal so users stay inside the same one-page experience.

## Assets

Source assets:
- Copy `tra-portfolio/docs/avatar.png` to `tra-portfolio/public/assets/avatar.png`.
- Copy `tra-portfolio/docs/bt1.pdf` through `bt6.pdf` to `tra-portfolio/public/docs/`.

2D UI assets:
- Add soft pastel blob shapes for background accents and section dividers. These can be implemented as local SVG/CSS shapes so no external runtime dependency is needed.
- Add minimal beauty/skincare-inspired line icons for project badges, skill tags, and decorative labels. Prefer `lucide-react` for interface icons; use local simple SVG assets only where the catalog calls for beauty-specific 2D styling.
- Add one Korean-style soft character or portrait-adjacent illustration only if it does not compete with the real avatar. It should be secondary, small, and attributed if downloaded from a free source.

Attribution:
- Footer must include compact attribution for any downloaded free assets.
- If all 2D accents are locally created with CSS/SVG and Lucide icons, the footer only needs the portfolio copyright and no external asset credit beyond what is actually used.

## Visual Design

Use the catalog palette:
- Background: `#FDF9F7`
- Surface: `#FFFFFF`
- Primary powder pink: `#E8A0BF`
- Text: `#2D2D35`
- Secondary text: `#8A8498`
- Sky pastel: `#B8D8F5`
- Lavender: `#D4C5F9`
- Warm beige: `#F5EDE8`
- Peach: `#FFD6C0`
- Border: `#F0E6EC`

Typography:
- Import `Plus Jakarta Sans` and `Noto Sans KR`.
- Use Plus Jakarta Sans for headings and interface labels.
- Use Noto Sans KR for body copy to reinforce the K-style mood while keeping Vietnamese readable.

Layout rules:
- Avoid nested cards.
- Use full-width soft bands or unframed sections with constrained inner content.
- Cards use 20-28px radius and subtle shadow.
- Keep text dense enough for academic content, but not cramped.
- Do not reuse the toy-box, candy-pop, garden, editorial, desk, island, or summer structural patterns from other projects.

## Components

Core files:
- `src/App.jsx`: ConfigProvider and one-page composition.
- `src/theme.js`: Ant Design tokens and shared palette.
- `src/index.css`: fonts, CSS variables, global k-beauty styling.
- `src/data/portfolioData.js`: all text extracted from `docs/portfolio.md`.

Reusable components:
- `src/components/kbeauty/SoftBackground.jsx`: pastel ambient 2D blobs and gentle page backdrop.
- `src/components/kbeauty/GlassCard.jsx`: soft container card.
- `src/components/kbeauty/PastelTag.jsx`: pill tags for competencies, principles, tools.
- `src/components/ui/ScrollReveal.jsx`: React Motion fade/translate entrance.
- `src/components/ui/PdfViewerModal.jsx`: Ant Design modal for embedded PDF viewing.

Section components:
- `src/components/sections/HeroSection.jsx`
- `src/components/sections/BeautyProfileSection.jsx`
- `src/components/sections/CapabilitiesSection.jsx`
- `src/components/sections/ProjectsSection.jsx`
- `src/components/sections/ConclusionSection.jsx`

## Data Flow

`portfolioData.js` is the single source consumed by all sections. It will contain:
- `personalInfo`
- `about`
- `developmentDirection`
- `portfolioPurpose`
- `capabilities`
- `principles`
- `tools`
- `projects`
- `conclusion`
- `footer`

Every displayed text must trace back to `tra-portfolio/docs/portfolio.md`. No invented fields, metrics, social links, slogans, or extra achievements.

## PDF Modal Behavior

Each project card has one primary action to open the matching PDF in `PdfViewerModal`.

Modal behavior:
- Uses Ant Design `Modal`.
- Displays the PDF in an `iframe` or `object` with a direct open fallback link.
- Keeps the current scroll/page state intact when closed.
- Works on desktop and mobile; on narrow viewports the modal becomes nearly full-screen.

## Animation

Use React Motion for section entrance:
- Initial: opacity 0, translateY 12px.
- Final: opacity 1, translateY 0.
- Keep animation subtle and deterministic.

Use CSS transitions for:
- Card hover: translateY(-4px), slightly stronger shadow.
- Button hover: scale 1.02 and pastel shadow.
- Tag hover: background shade shift.
- Avatar/illustration hover: scale 1.03.

## Testing And Verification

Required checks:
- `npm run build`
- `npm run lint`
- Existing or new Playwright render check at desktop and mobile widths.

Manual visual checks:
- 375px mobile: no text overflow, modal usable.
- 768px tablet: project grid readable.
- 1280px desktop: one-page rhythm and assets feel balanced.
- Avatar and PDFs load from public assets.

## Out Of Scope

- No backend.
- No routing.
- No contact form unless the source document adds contact content.
- No content beyond `docs/portfolio.md`.
- No direct reuse of another portfolio's section layout.
