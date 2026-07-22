# AGENTS.md

Overview of this codebase for developers and AI agents.

## Project Overview

Marketing website for On Demand 3D, a business-to-business 3D printing shop. Built with
TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── __forms.html       # Static skeleton so Netlify's build bot registers the contact form
│   └── images/             # Logo, category illustrations, and portfolio SVGs
├── src
│   ├── components
│   │   ├── Header.tsx        # Sticky nav with logo, links, mobile menu
│   │   ├── Footer.tsx        # Contact details + nav links
│   │   └── WhatsAppButton.tsx  # Floating WhatsApp CTA, fixed bottom-right on every page
│   ├── data
│   │   ├── products.ts       # The four product categories shown on the homepage
│   │   └── portfolio.ts      # Past-work items shown on /portfolio
│   ├── routes
│   │   ├── __root.tsx        # Root layout: wraps every route with Header/Footer/WhatsAppButton
│   │   ├── index.tsx         # Landing page: hero, product categories, process, CTA
│   │   ├── portfolio.tsx     # Filterable portfolio grid
│   │   └── contact.tsx       # Contact form (Netlify Forms, AJAX submit)
│   ├── router.tsx
│   └── styles.css            # Theme tokens (--ink, --lime, --paper) and global styles
├── netlify.toml
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### File-based routing
Routes are files under `src/routes/`. `__root.tsx` is the shared layout; every other file
maps to a URL path (`index.tsx` → `/`, `portfolio.tsx` → `/portfolio`, etc.).

### Brand theme
Colors live as CSS custom properties in `src/styles.css`: `--ink` (off-black background),
`--lime` (brand accent, matches the logo), `--paper` (off-white text). Use these instead of
hardcoding hex values so the palette stays consistent.

### Contact form
Uses Netlify Forms. `public/__forms.html` is a hidden static form that lets Netlify's build
bot detect and register the form at deploy time — it is never rendered to visitors. The real
form in `src/routes/contact.tsx` submits via `fetch('/__forms.html', ...)` with
`application/x-www-form-urlencoded` body, not a plain form POST, because TanStack Start's SSR
catch-all would otherwise intercept a POST to `/`. Form submissions appear in the Netlify UI
under Forms.

### Product data
`src/data/products.ts` holds the four categories shown on the homepage (parts, gears,
supports, branding/logos). `src/data/portfolio.ts` holds sample past jobs shown on
`/portfolio`, filterable by category.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Conventions

- Components: PascalCase, one per file in `src/components/`
- Import paths use the `@/` alias for `src/*`
- Tailwind utility classes for styling; shared brand colors via CSS variables, not inline hex
- TypeScript strict mode; no `any`
