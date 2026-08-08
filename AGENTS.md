# Jason Scholefield — Portfolio Rebuild

Rebuild of https://jscholefield.webflow.io/ as a custom-coded, dark-mode
portfolio. Content was pulled from the live Webflow site; layout is built
from three reference sites the user liked. No animation library — CSS
transitions only, kept minimal.

## Stack

- **Astro** (content-first, minimal JS by default — chosen specifically
  because the user does not want Framer-style motion/animation)
- **Tailwind CSS v4** (`@theme` tokens in `src/styles/global.css`, no
  `tailwind.config.js` — v4 is CSS-first)
- **Content collections** (`src/content.config.ts`) for case studies —
  each project is a markdown file in `src/content/work/`
- **Inter Variable** font, self-hosted via `@fontsource-variable/inter`,
  used for both headings and body per the user's request
- `@tailwindcss/typography` for case-study markdown body copy (`prose
  prose-invert`, retinted to the site's tokens in `src/pages/work/[id].astro`)

## Design references and what was taken from each

- **https://sanvithi.com/** → homepage hero (`src/components/Hero.astro`):
  stacked line-list heading ("Who I am / What I do / …"), single-line
  descriptor, "Scroll to see work" cue at the bottom of a full-height section.
- **https://www.nicolearoberts.com/** → case study cards
  (`src/components/CaseStudyCard.astro` + `WorkGrid.astro`): client name,
  title, description, tags, stats/metrics, "View case study" + "View live"
  links. Rendered as a stacked list (not a grid of boxes) to match the
  reference's row-based layout.
- **https://chaachiedesigns.framer.website/newrestore** → case study page
  template (`src/pages/work/[id].astro`): hero with role/year/tools/live
  link, stats row, then Problem → Strategy & Execution → Outcome →
  Learnings narrative sections, closing with a CTA.

## Design tokens (`src/styles/global.css`)

Dark theme only. Near-black background (`--color-bg: #0a0a0b`), warm
off-white text (`--color-fg`), muted grays for secondary text/borders, and
a single lime accent (`--color-accent: #c6ff5c`) used sparingly for stats,
links, and hover states. Change these variables to retheme the whole site.

## Content

All 9 case studies and the About/Experience/Services/Testimonial copy were
pulled directly from the live Webflow site (via its rendered HTML), then
lightly restructured into Problem / Strategy & Execution / Outcome /
Learnings sections to fit the new case-study template. No content was
invented — anything not present on the original site was left out rather
than fabricated (e.g. a second, unattributed testimonial fragment on the
original site was dropped since it couldn't be confidently attributed).

Case study source files: `src/content/work/*.md`. Frontmatter schema is
defined in `src/content.config.ts` (client, title, summary, category,
tags, year, role, tools, stats, liveUrl, featured, order).

## Known gaps / next steps

- **No real images yet.** The original Webflow site's project thumbnails,
  screenshots, and mockups were not pulled (this rebuild is copy-first).
  Cards and case study pages currently have no imagery — add an
  `image`/`coverImage` field to the content schema and drop real assets in
  `src/assets/` or `public/` per project.
- **Resume link** currently points at the same external Google Drive URL
  used on the live site — swap for a locally hosted PDF if preferred.
- **Favicon** is still the default Astro icon at `public/favicon.svg` —
  replace with a real mark.
- **Testimonials**: only one fully-attributed quote was carried over;
  add more if available.
- Homepage hero line-list and section order can be tuned in
  `src/components/Hero.astro` — content there is original copy inspired
  by, not copied from, sanvithi.com.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
