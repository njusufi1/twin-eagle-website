# Twin Eagle Tech — Homepage Content & Design Update

This is a **file-level patch**, not a full repo. Copy these files into
`twin-eagle-technologies/` in your repo at the matching paths, overwriting
the existing ones. Three files are brand new (no conflict risk):
`components/animated-counter.tsx`, `components/connection-pulse.tsx`,
`components/guarantee-badge.tsx`.

## Files changed
- `lib/content.ts` — added `pillars`, `guarantee`, `processSteps`; added the
  Coverage Guarantee + hire-approval FAQ entries at the top of `faqs`.
- `app/page.tsx` — restructured: hero now leads with the 50%+ cost claim and
  the Coverage Guarantee; added the four-pillar section, the named Coverage
  Guarantee panel, and the 4-step process; Services moved further down.
- `app/faq/page.tsx` — metadata description updated to mention the guarantee
  (content itself just reads from `lib/content.ts`, so no structural change).
- `app/layout.tsx` — site-wide meta description updated to lead with cost +
  guarantee instead of generic "connects clients with talent" copy.
- `tailwind.config.ts` — added a `gold` accent color (`#C9A15A`) used only in
  the new Guarantee/pillar sections, plus `marquee`/`pulseSlow` keyframes.
- `app/globals.css` — added a `prefers-reduced-motion` block so the new
  animations respect accessibility settings.

## New files
- `components/animated-counter.tsx` — the single count-up moment (used only
  on the hero's "50%+" figure, per the "spend your boldness in one place"
  principle — not applied to every stat).
- `components/connection-pulse.tsx` — an animated US <-> Kosovo bridge SVG.
  No longer used on the homepage (replaced by the team photo below), but
  left in the repo in case you want it for another page later. Safe to
  delete if you don't.
- `components/guarantee-badge.tsx` — the small "Protected by the Coverage
  Guarantee" pill placed near CTAs (hero, final section).
- `public/team-office.jpg` — the hero photo. Optimized from your original
  PNG (1.9MB) down to ~180KB JPEG for page speed, same 1672x941 resolution.
  **Replace this file (same filename) the moment you have a real photo of
  the team** — nothing else needs to change, `app/page.tsx` just references
  `/team-office.jpg`.

## Round 3 edits (this patch)
- Hero visual is now a 4-image auto-advancing slider instead of a single
  static photo. Crossfades every 4.5s with a slow Ken Burns zoom on each
  slide (one deliberate, disciplined motion effect, not a generic
  carousel-library look), plus clickable dot navigation.
- New component: `components/hero-slider.tsx`.
- New images: `public/team-slide-1.jpg` through `team-slide-4.jpg`
  (optimized from ~1.9MB PNGs to ~150-185KB JPEGs each, same 1672x941
  resolution as the original).
- `public/team-office.jpg` (the old single hero photo) is removed and no
  longer referenced — delete it from your repo if you're merging by hand.
- **When you have real team photos**, replace `team-slide-1.jpg` through
  `team-slide-4.jpg` (same filenames, same folder) with your own images at
  roughly the same 16:9 aspect ratio. Nothing in the code needs to change.
  Want more or fewer than 4 slides later, just ask, it's a one-line edit
  to the `slides` array in `hero-slider.tsx`.

## Verified
Ran `npm install` + `npx next build` locally in a sandbox before delivering —
compiles clean, all 9 routes generate successfully, no type errors.

## Not changed
Every other page (About, Services, Careers, Contact, Why Partner, Industries)
is untouched. `public/twin-eagle-logo.png` and all config/lockfiles are
untouched — don't overwrite those.
