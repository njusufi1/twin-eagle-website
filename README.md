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
- `components/connection-pulse.tsx` — the hero's animated US ⟷ Kosovo bridge
  graphic. This is a placeholder for the "video or something" ask — it's a
  lightweight, on-brand SVG/motion piece grounded in your actual timezone
  differentiator. A real video/photo of your team would be a stronger
  long-term replacement once you have footage; this fills the gap for now
  without needing an asset.
- `components/guarantee-badge.tsx` — the small "Protected by the Coverage
  Guarantee" pill placed near CTAs (hero, final section).

## Verified
Ran `npm install` + `npx next build` locally in a sandbox before delivering —
compiles clean, all 9 routes generate successfully, no type errors.

## Not changed
Every other page (About, Services, Careers, Contact, Why Partner, Industries)
is untouched. `public/twin-eagle-logo.png` and all config/lockfiles are
untouched — don't overwrite those.
