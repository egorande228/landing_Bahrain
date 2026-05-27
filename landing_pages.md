# 08 - Tunisia, Mauritania, Yemen Production Report

## Purpose

This report audits the real page structure used by:

- `Landing_Tunisia`
- `landing_mauritania`
- `done/Landing_Yemen`

Its job is to turn those three builds into one reusable production profile for future country pages.

The target outcome is:

- one page-local `globals` file per country
- one page-local `theme` file per country
- one content file per country
- predefined PNG slots that can be filled later
- minimal edits after first generation

Colors and theme stay local per country.
Structure, section order, sizing, asset slots, and page wiring go into the country `globals` file.

---

## Main Conclusion

Use Tunisia and Yemen as the architectural base.
Use Mauritania as a density and section-composition reference, not as the cloning base.

Why:

- Tunisia and Yemen already separate shell, sections, config, theme, locale, and content.
- Mauritania still contains more hardcoded asset choices inside section files.
- Tunisia and Yemen are closer to the mass-production direction you described.

Recommended production model:

```txt
src/config/<country>.globals.ts
src/themes/<country>.ts
src/content/markets/<country>.ts
public/<country>/...
```

Do not let future pages inherit colors from the `globals` file.
Do not let future pages hardcode asset filenames inside section JSX.

---

## What The Three Builds Actually Use

| Market | Home page shape | Partnership page shape | Main character | Reuse value |
|---|---|---|---|---|
| Mauritania | Hero -> Sports -> Casino -> Promos | Hero -> Benefits -> How It Works -> Paths -> Final CTA | Dense glass cards, strong panel hero, national green/gold mood | Good reference for compact rhythm and section density |
| Tunisia | Hero -> Trending Games -> Sports -> Promos | Hero -> Steps -> Paths -> Tools -> Final CTA | Clean editorial premium, image-led home, lighter partnership | Best home-page reference for fresh visual variety |
| Yemen | Hero -> Trending Games -> Trending Sports -> Offers | Hero -> Benefits -> Steps -> Paths -> Tools -> Final CTA | Tight editorial premium, strongest dashboard logic, smallest spacing | Best partnership reference for structured mass production |

Important finding:

- Tunisia schema contains more sections than the rendered page currently uses.
- Mauritania section files still own some image selection.
- Yemen is the clearest example of route-aware shell + local theme + structured content.

This means future `globals` files must contain:

- explicit `enabledSections`
- explicit section order
- explicit section variant choice
- explicit asset slots

Do not assume that if content exists, the page should render it.

---

## Shared Structural Rules To Keep

### Shared Shell

All future pages should keep one shared shell with:

- route-aware header
- footer owned by content
- locale switch support
- runtime `dir` switching
- page background owned by layout, not by random sections

This is already present in Tunisia and Yemen and should become the default system.

### Required Routes

Every country page should default to:

```txt
/
/partnership
```

Optional third route:

```txt
/faq
/aboutus
```

### Standard Anchors

Home:

- `#top`
- `#games`
- `#sports`
- `#offers`
- optional `#trust`

Partnership:

- `#top`
- `#benefits`
- `#steps`
- `#paths`
- `#tools`
- `#final-cta`

Keep anchor names stable across countries even if one section is disabled for a specific page.

---

## Recommended Section Order

### Home

Standard mass-production order:

```txt
Header
Hero
Games / Discovery
Sports
Offers / Promos
Optional Final Player CTA
Footer
```

Notes:

- Tunisia proves this order works best for a fresh, image-led player page.
- Yemen proves the same order still works with tighter spacing and denser copy.
- Mauritania shows that a casino-first middle section can still fit if the page needs it, but it should remain a variant, not the default rule.

### Partnership

Standard mass-production order:

```txt
Header
Hero
Benefits
Steps
Paths
Tools
Final CTA
Footer
```

Notes:

- Yemen should be treated as the default partnership structure.
- Tunisia can still be used as a lighter partnership variant when the page should feel cleaner and less dashboard-heavy.
- Mauritania proves the page can still convert without a tools block, but for production scale keep `tools` in the schema and disable it explicitly when not needed.

---

## Section Variant Guidance

### Home Hero

Observed variants:

- Mauritania: split copy + live board
- Tunisia: media tile hero + centered copy
- Yemen: stage hero + rotating active content

Production rule:

- choose one home hero system per country
- do not mix Tunisia tiles and Yemen stage in the same hero
- use Tunisia hero when the country should feel visual and fresh
- use Yemen hero when the country should feel more product-led and controlled
- use Mauritania hero only when assets are limited and a code-built board is preferred

### Games / Discovery

Observed variants:

- Mauritania: animated category stage + icon rail
- Tunisia: horizontal trending game rail with hover panel
- Yemen: denser card-grid logic

Production rule:

- default to Tunisia for image-led discovery
- default to Yemen when cards need more text and metrics
- keep item count between 4 and 6

### Sports

Observed variants:

- Mauritania: 4 large cover cards
- Tunisia: 4 cards plus phone mockup
- Yemen: text-led sports grid

Production rule:

- keep 4 primary sports cards
- one optional lead visual is enough
- if a phone or device mockup is used, treat it as the only extra large visual in the section

### Offers / Promos

Observed variants:

- Mauritania: text-heavy cards with live strip
- Tunisia: image-led cards with fixed footer CTA
- Yemen: image-led or icon-led cards with denser copy

Production rule:

- keep 2 to 4 offer cards
- CTA footer must align to bottom
- make all cards equal height inside the row

### Benefits

Observed variants:

- Mauritania: 3 cards
- Yemen: 5 items in a dashboard-oriented structure
- Tunisia schema supports benefits but page currently skips them

Production rule:

- use 3 cards for compact pages
- use 4 or 5 cards for premium operational pages
- keep benefits enabled by default in the globals file even if one test page disables them

### Steps

Observed variants:

- Mauritania: onboarding / how-it-works sequence
- Tunisia: 3 cards
- Yemen: 3-step timeline

Production rule:

- always structure steps as 3 items
- page decides whether rendering is `cards` or `timeline`
- reserve PNG slots for all 3 steps even if first implementation uses placeholders

### Paths

Observed variants:

- Mauritania: partner and agent logic
- Tunisia: 2 large route cards inside a stage shell
- Yemen: 2 route cards with stronger business framing

Production rule:

- keep 2 primary route cards
- optional third route only if genuinely needed
- route cards should stay text-first, not art-first

### Tools

Observed variants:

- Mauritania: can work without it
- Tunisia: showcase
- Yemen: calculator

Production rule:

- use exactly one tools variant per country
- `tools-showcase` for trust and presentation
- `tools-calculator` for commercial pages
- do not combine calculator and showcase unless that becomes a reusable variant later

### Final CTA

Observed variants:

- Mauritania: strong messaging CTA
- Tunisia: dual messaging buttons
- Yemen: dual apply buttons

Production rule:

- always keep one main CTA block
- prefer 2 messaging buttons when both WhatsApp and Telegram exist
- no large country art is required here by default

---

## Sizing Audit

### Core Layout Tokens Seen In The Three Builds

| Token | Mauritania | Tunisia | Yemen | Production rule |
|---|---|---|---|---|
| Container width | `1200px` | `1180px` | `1080px` | Store per page in globals; only allow `1080`, `1120`, `1180`, `1200` |
| Outer page padding | `14px-48px` | `18px-42px` | `14px-32px` | Keep as clamp in globals, not hardcoded in sections |
| Header height | `72px`, mobile `64px` | implicit pill header | implicit compact header | Standardize to `64-72px` in globals |
| Default section Y | `3.5rem-5.5rem` | `4.5rem-7rem` | `2.1rem-2.8rem` | Use density presets in globals |
| Hero top pad | `4rem-7rem` | `4.2rem-6rem` | `4.05rem-5.4rem` | Keep separate from normal section spacing |
| Grid gap | visual range `0.75rem-1.5rem` | `1rem-1.5rem` | `0.68rem-0.9rem` | Put in globals as `gridGap` |
| Radius scale | `12 / 18 / 28 / 34` | `14 / 20 / 28 / 38` | `11 / 15 / 22 / 28` | Page globals should own radius scale; theme does not need to |
| Button min-height | `48-52px` | `50-54px` | `44-48px` | Standardize by page density |

### Recommended Density Presets

Use exactly one of these per page:

| Preset | Use for | Section Y | Grid gap | Card padding | Button min-height |
|---|---|---|---|---|---|
| `compact` | Yemen-like pages | `2.2rem-3rem` | `0.75rem-0.95rem` | `0.85rem-1rem` | `44-48px` |
| `balanced` | Mauritania-like pages | `3.25rem-4.75rem` | `0.9rem-1.2rem` | `1rem-1.2rem` | `48-52px` |
| `editorial` | Tunisia-like pages | `4.5rem-7rem` | `1.1rem-1.5rem` | `1.1rem-1.5rem` | `50-54px` |

Do not mix compact and editorial spacing in the same page unless a single section intentionally overrides it.

---

## Section-Level Size Contracts

### Header

- sticky or floating pill shell
- minimum functional height: `64px`
- comfortable desktop height: `72px`
- mobile menu width: `min(92vw, 320px-360px)`

### Home Hero

Allowed hero shapes:

- split stage
- tile hero
- editorial stage

Size contracts:

- home hero should be the tallest section on the page
- Mauritania stage min-height reaches `32rem-43rem`
- Tunisia tile media uses `aspect-ratio: 1.14`
- Yemen hero media shell uses `min-height: 260px mobile` and `360px desktop`

Production rule:

- if hero uses tile art, keep three tiles max
- if hero uses one large stage visual, reserve one media shell only

### Games / Discovery

- Tunisia hover rail proves `6` is the upper safe limit
- icon or product visuals should stay square or near-square
- use fixed card width when rail-based

Recommended contract:

- item count: `4-6`
- icon artwork: square PNG
- rail card width: `208px-264px`

### Sports

- Tunisia sports cards use `min-height: 232px`
- Mauritania sports cards are much taller and more cinematic
- phone mockup width tops out around `18.75rem-21.5rem`

Recommended contract:

- sports card count: `4`
- card min-height: `220px-300px`
- if using a phone/device mockup, cap it near `21.5rem`

### Offers

- Tunisia and Yemen offer visual areas run around `152px-182px`
- Mauritania proves text-heavy offers can skip large art if needed

Recommended contract:

- if image-led, reserve `160px-190px` visual height
- keep equal card heights in the row
- footer CTA row should stay pinned at bottom

### Benefits

- 3 to 5 cards
- keep equal-height cards in the same row
- if one card spans more space, it must be a deliberate variant rule, not an accident

### Steps

- always 3 steps
- if image slot exists, reserve `156px-180px` media height
- even when no image is ready, keep the media slot structure or a deliberate placeholder shell

### Paths

- 2 route cards inside one parent shell
- each card needs title, body, bullets, and CTA space
- no oversized decorative media required by default

### Tools

- showcase layout: left text/right stage
- calculator layout: left controls/right output stage
- desktop split should remain two-column
- mobile collapses to one column

### Final CTA

- dual-button row on desktop
- full-width stacked buttons on mobile
- icon slots are small messaging icons, not country hero art

---

## PNG Slot Plan

All future pages should reserve PNGs up front, even if the real art is added later.

Use country-scoped paths:

```txt
/public/<country>/home/hero/
/public/<country>/home/games/
/public/<country>/home/sports/
/public/<country>/home/offers/
/public/<country>/partnership/hero/
/public/<country>/partnership/steps/
/public/<country>/partnership/routes/
```

### Mandatory PNG Slots

| Slot | Path | Section | Ratio | Fit | Notes |
|---|---|---|---|---|---|
| `hero-01` | `/public/<country>/home/hero/hero-01.png` | home hero tile | `8:7` | cover | Safe lower area for title overlay |
| `hero-02` | `/public/<country>/home/hero/hero-02.png` | home hero tile | `8:7` | cover | Same framing as tile 1 |
| `hero-03` | `/public/<country>/home/hero/hero-03.png` | home hero tile | `8:7` | cover | Same framing as tile 1 |
| `game-01` to `game-06` | `/public/<country>/home/games/game-01.png` | games rail / cards | `1:1` | contain | Transparent PNG preferred |
| `sport-01` to `sport-04` | `/public/<country>/home/sports/sport-01.png` | sports cards | `4:5` or `5:6` | cover | Leave edge safety for crop |
| `offer-01` to `offer-04` | `/public/<country>/home/offers/offer-01.png` | offers cards | `4:3` or `16:10` | contain | Center-weighted composition |
| `step-01` to `step-03` | `/public/<country>/partnership/steps/step-01.png` | step cards | `16:10` | cover or contain | Keep readable central subject |

### Optional PNG Slots

| Slot | Path | Section | Ratio | Fit | Use when |
|---|---|---|---|---|---|
| `hero-stage` | `/public/<country>/partnership/hero/hero-stage.png` | partnership hero stage | `16:10` | contain | Only if hero uses image-led stage |
| `route-01` | `/public/<country>/partnership/routes/route-01.png` | path card | `16:10` | contain | Only if route cards gain art later |
| `route-02` | `/public/<country>/partnership/routes/route-02.png` | path card | `16:10` | contain | Same as above |

### Slots That Do Not Need Country PNGs By Default

- phone mockup demo screens
- tools charts
- calculator bars
- live strips
- final CTA messaging icons

These should stay code-built unless a new reusable variant requires art.

---

## What Goes Into `globals.ts`

The country `globals` file should own:

- market name and slug
- supported locales
- default locale
- direction per locale
- header nav map
- footer link map
- enabled section list per page
- section order per page
- chosen section variants per page
- page density preset
- layout sizing tokens
- radius scale
- button size tier
- PNG slot manifest
- route anchors
- page-level CTA map

Recommended shape:

```ts
export type CountryPageGlobals = {
  market: string;
  slug: string;
  locales: Array<"en" | "fr" | "ar">;
  defaultLocale: "en" | "fr" | "ar";
  directionByLocale: Record<string, "ltr" | "rtl">;
  chrome: {
    homeAnchors: string[];
    partnershipAnchors: string[];
    nav: {
      home: string[];
      partnership: string[];
    };
  };
  sizing: {
    density: "compact" | "balanced" | "editorial";
    containerWidth: 1080 | 1120 | 1180 | 1200;
    containerX: string;
    sectionY: string;
    sectionYTight: string;
    heroTop: string;
    heroBottom: string;
    gridGap: string;
    cardPadding: string;
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      pill: string;
    };
    buttonMinHeight: string;
  };
  pages: {
    home: {
      enabledSections: Array<"hero" | "games" | "sports" | "offers" | "finalCta">;
      variants: {
        hero: "tile" | "stage" | "split";
        games: "rail" | "grid";
        sports: "cards" | "cards-plus-mockup";
        offers: "cards";
      };
      assets: {
        hero: string[];
        games: string[];
        sports: string[];
        offers: string[];
      };
    };
    partnership: {
      enabledSections: Array<"hero" | "benefits" | "steps" | "paths" | "tools" | "finalCta">;
      variants: {
        hero: "editorial" | "split" | "centered";
        benefits: "glass-grid" | "dashboard" | "light-shell";
        steps: "cards" | "timeline";
        tools: "showcase" | "calculator";
      };
      assets: {
        hero?: string[];
        steps: string[];
        routes?: string[];
      };
    };
  };
};
```

This file is page-local, but it is not the theme file.

---

## What Goes Into `theme.ts`

The country `theme` file should own:

- color palette
- background treatment
- glow color
- surface tones
- border strength
- shadow behavior
- optional type-scale tuning
- optional radius tuning if the page needs a sharper or softer feel

The country `theme` file should not own:

- section order
- enabled sections
- route anchors
- image filenames
- CTA routing
- locale logic

Theme stays visual.
Globals stay structural.

---

## What Must Stay Out Of Shared Sections

Do not place these inside shared section JSX:

- country names
- raw hex colors
- hardcoded public image arrays
- section order logic
- ad hoc per-country spacing patches
- per-country messaging labels

Mauritania still does some of this.
Future pages should not repeat it.

---

## First-Test Recommendation

For the first page test:

- use Tunisia home-page logic as the visual baseline
- use Yemen partnership-page logic as the business baseline
- borrow Mauritania only for dense rhythm and strong panel treatment if needed

This gives you:

- fresher home pages
- stronger partnership pages
- fewer edits after generation

---

## Minimal-Edit Production Flow

1. Create `<country>.globals.ts` first.
2. Fill route map, enabled sections, variants, sizing preset, and PNG slot paths.
3. Create `<country>.ts` theme file with only visual tokens.
4. Create the content file and map copy into the selected sections.
5. Drop PNGs later into the exact paths already defined in globals.
6. Wire the page without changing shared section internals unless a new reusable variant is truly needed.
7. Test one country.
8. Tune this report once.
9. Use the tuned version for mass production.

---

## Short Prompt For Future Country Pages

```txt
Use profiles/08-tunisia-mauritania-yemen-production-report.md as the source of truth.
Create one new country page with:
- one page-local globals file for structure, section order, sizing, anchors, CTA routing, and PNG slot paths
- one local theme file for colors, background, surfaces, shadows, and glow only
- one localized content file wired to those globals
- PNG slots already referenced with .png paths, even if final assets are not added yet
Keep the page fresh by changing hero variant, section emphasis, density, and local theme.
Do not hardcode image paths or colors inside shared sections.
Do not clone Mauritania directly; use Tunisia and Yemen architecture as the base.
```

---

## Final Decision Rule

If a future change answers "how is this page built," it belongs in `globals.ts`.
If it answers "how this country should feel," it belongs in `theme.ts`.

That split is the cleanest path to minimal edits and repeatable mass production.
