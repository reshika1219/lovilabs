# Lovi Labs website

This directory contains the Next.js migration of the Lovi Labs website. The migrated site includes the original routes, shared navigation and footer, contact form API, Sanity-backed portfolio and team content, and public image assets.

## Getting started

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Environment variables

Copy `.env.example` to `.env.local` and configure the Sanity and contact email variables before enabling the portfolio, team, or contact form integrations.

### Available commands

```bash
bun run build          # production build
bun run start          # serve the production build
bun run lint           # ESLint checks
bun run studio         # start Sanity Studio
bun run studio:deploy  # deploy Sanity Studio
```

The main routes are `/`, `/about`, `/services`, `/portfolio`, `/team`, and `/contact`.
