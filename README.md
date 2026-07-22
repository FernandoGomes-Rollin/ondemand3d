# On Demand 3D

Marketing website for On Demand 3D, a business-to-business 3D printing shop based in
Portugal. The site showcases the four product lines (functional parts, gears, structural
supports, and branded signage), a portfolio of past jobs, and a contact form for quote
requests. It also includes a floating WhatsApp button for quick chat-based inquiries.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- [Vite 7](https://vitejs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact form
- TypeScript (strict mode)
- Deployed on [Netlify](https://www.netlify.com/)

## Running locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

Note: Netlify Forms only processes submissions on a deployed site (including Netlify deploy
previews) — form submissions won't be recorded when running locally.

## Building

```bash
npm run build
```

## Project layout

See [AGENTS.md](./AGENTS.md) for a full breakdown of the directory structure and conventions.
