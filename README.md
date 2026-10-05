# Hylton Cafe Website

Static Next.js, TypeScript and Tailwind CSS website for café pages. The root URL is intentionally blocked; each café appears at its own slug URL.

## Setup

```bash
cd web
npm install
npm run dev
```

Open one of:

- `http://localhost:3000/hylton-cafe`
- `http://localhost:3000/cafe-coffea`
- `http://localhost:3000/nexus-cafe`

## Verification

```bash
cd web
npm run lint
npm run typecheck
npm run build
```

## Research

Research notes live in `docs/research`:

- `docs/research/hylton-cafe.md`
- `docs/research/cafe-coffea.md`
- `docs/research/nexus-cafe.md`

Facts shown in the demos are limited to details found in public sources. No official standalone logo files were found in accessible public sources during this pass, so the demo uses local concept SVG imagery in `web/public/cafes/<slug>/`. These files are intentionally not presented as official logos.

## Theming

Themes are configured per cafe in `web/src/data/cafes/index.ts`:

- `Classic British`
- `Modern Specialty`
- `Boutique Brunch`

Each cafe config controls colours, typography class, layout variant, menu signals, visit details, source notes, and local assets. Shared rendering lives in `web/app/cafes/[slug]/page.tsx`.

## Adding Or Reusing Cafe Data

1. Add a new folder in `web/public/cafes/<new-slug>/`.
2. Store any permitted local assets there. Do not hotlink production images.
3. Add a researched markdown note in `docs/research/<new-slug>.md`.
4. Add or update an object in the `cafes` array in `web/src/data/cafes/index.ts`.
5. Run lint, typecheck, and build.

## Deployment

This app uses static generation for cafe routes and includes `robots: noindex, nofollow` metadata. It can deploy to Vercel or any platform that supports Next.js 14.

This project intentionally excludes payments, ordering backends, auth dashboards, and fake frontend password gates.
