# Design Brief: Anne Arundel Dermatology

## Tone
Refined medical minimalism—trustworthy, human-centered, premium. Luxury dermatology aesthetic with web-forward clarity (Ilia Beauty meets Stripe).

## Differentiation
French Blue structural spine anchors hierarchy. Generous whitespace conveys expertise and calm. Video hero establishes emotional trust. Surgical use of accent color (buttons, hover, ticker) for impact without noise.

## Palette (OKLCH)

| Token | OKLCH | Semantic | Usage |
|:------|:------|:---------|:------|
| Primary | 0.54 0.14 258 | French Blue | CTAs, accent lines, active states |
| Background | 0.99 0 0 | White | Main surfaces |
| Foreground | 0.085 0 0 | Eerie Black | Body text, primary type |
| Muted | 0.92 0.01 0 | Off-White | Secondary surfaces, borders |
| Card | 0.99 0 0 | White | Card/panel backgrounds |
| Accent | 0.54 0.14 258 | French Blue | Highlights, borders, focus |
| Destructive | 0.55 0.22 25 | Red | Alerts, warnings |

## Typography

| Layer | Font | Size | Weight | Usage |
|:------|:-----|:-----|:-------|:------|
| Display | Fraunces Serif | 56–72px | Bold | Main headings, hero copy |
| Body | DM Sans | 16–18px | 400, 700 | Body text, UI labels, buttons |
| Mono | System | — | — | Code/technical (reserved) |

## Elevation & Depth

- **Header**: Fixed sticky white bg, 1px border-b `--muted`
- **Hero**: Full-width video with French Blue overlay accent bar
- **Cards**: 1px `--border`, minimal radius (4px), white bg with subtle `shadow-subtle`
- **Sections**: Alternating white/off-white (`oklch(0.96 0 0)`) for rhythm
- **Footer**: Dark solid (#141414), full-width

## Structural Zones

| Zone | Background | Border | Purpose |
|:-----|:-----------|:-------|:--------|
| Header | white | 1px muted | Navigation, logo, utility |
| Hero | video + overlay | none | Headline, CTAs, brand presence |
| Ticker | French Blue | none | Animated messaging |
| Content | white/off-white | 1px muted (cards) | Services, testimonials, team |
| Footer | Eerie Black | none | Links, legal, contact |

## Spacing & Rhythm
- Section padding: 80–128px (responsive)
- Card interior: 24–32px
- Component gap: 16–24px
- Tight letter-spacing on Playfair (-0.5px)

## Component Patterns
- **Buttons**: Primary (French Blue bg, white text), Secondary (white bg, French Blue border + text), outline only
- **Links**: French Blue underline on hover
- **Mega Menu**: Dropdown cards, subtle shadow, instant reveal on hover
- **Ticker**: Looping CSS animation, full-width French Blue band
- **Forms**: Minimal borders, focus ring French Blue

## Motion
- **Transition default**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Ticker scroll**: 20s linear loop
- **Card entrance**: Fade + subtle slide-up (0.4s ease-out)
- **Button hover**: Color shift, no scale (medical context favors restraint)

## Constraints
- Max 2 font families (Fraunces + DM Sans)
- French Blue used surgically (buttons, accents, hover—never diffused or tinted)
- No drop shadows except cards (`shadow-subtle`)
- No rounded corners >8px except full (pill buttons, avatars)
- Border radius default 4px
- Light mode primary; dark mode optional

## Signature Detail
Full-width autoplay video hero with muted overlay accent bar. Typography-driven layout (steep Playfair hierarchy) combined with photography-forward sections. Scrolling ticker ribbon reinforces messaging cadence without cluttering navigation.
