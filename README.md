# Personal Portfolio Website

A bilingual (English/Arabic) personal portfolio built with the Next.js App Router. The site highlights professional experience, featured work, and side projects while supporting theme and language toggles for an accessible, modern reading experience.

## Overview

This project showcases a digital product manager’s profile with dedicated sections for portfolio case studies, resume details, side projects, and contact information. Content is stored locally in structured TypeScript dictionaries to keep presentation and copy aligned across languages.

## Key Features

- **App Router-based pages** for home, about, portfolio, resume, side projects, blog, and contact.
- **Bilingual content (EN/AR)** with direction-aware layout updates when switching languages.
- **Theme toggling** with persisted user preference and system theme detection.
- **Scroll reveal animations** that respect reduced-motion preferences.
- **Reusable layout shell** with a shared header and footer.

## Tech Stack

- **Next.js 16** + React 19
- **TypeScript**
- **Tailwind CSS**
- **Radix UI + lucide-react** for UI primitives and icons

## Project Structure

```
app/
  about/                # About page
  blog/                 # Blog landing (coming soon)
  contact/              # Contact details
  portfolio/            # Portfolio overview + case study
  resume/               # Resume timeline
  side-projects/        # Side project listing
  layout.tsx            # Root layout + providers
  page.tsx              # Home page
components/
  site-header.tsx       # Navigation + language/theme toggles
  site-footer.tsx       # Social links + copyright
hooks/
  use-scroll-reveal.ts  # Scroll reveal animation hook
lib/
  i18n.ts               # Copy dictionary (EN/AR)
  language-context.tsx  # Language state + RTL/LTR switching
  theme-context.tsx     # Theme state + persistence
  resume-data.ts        # Resume content data
```

## Content Management

- **Localized copy** lives in `lib/i18n.ts` and is referenced across pages.
- **Resume data** (experience, education, certifications) lives in `lib/resume-data.ts`.
- Update these files to keep both English and Arabic content in sync.

## Running Locally

> The repo includes a `pnpm-lock.yaml`, so pnpm is the recommended package manager.

```bash
pnpm install
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build the production app
- `pnpm start` — Start the production server
- `pnpm lint` — Run ESLint

## Deployment Notes

The `next.config.mjs` sets `images.unoptimized = true` and ignores TypeScript build errors, which can be useful for static hosting or lightweight deployments. Adjust these settings if stricter build checks are required.
