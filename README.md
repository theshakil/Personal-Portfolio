# Shakil Omondi, portfolio

A one-page portfolio built with Next.js (App Router, TypeScript) and Tailwind CSS v4.
Fonts are Space Grotesk and Figtree, loaded through `next/font`, so they are self-hosted at build time.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript check
```

## Where things are

| Path | What it holds |
| --- | --- |
| `lib/content.ts` | All text and links: name, roles, disciplines, projects, method, contact. Edit this to update the site. |
| `app/globals.css` | Tailwind import, colour tokens (`night`, `bone`, `accent`, `mute`, `line`), animations and the `wrap` content column. |
| `app/layout.tsx` | Fonts, page title, description and theme colour. |
| `app/page.tsx` | Page order: hero, intro, tech-stack strip, disciplines, projects, method, contact, footer. |
| `components/` | One file per section, plus `NavMenu`, `Clock`, `ThemeToggle`, `SocialIcon`, `Reveal`, `ScrollProgress` and `CopyEmail`. |
| `app/icon.svg` | Browser tab icon. |

Components that need the browser (hamburger menu, theme toggle, scroll effects, clock, copy button) start with `"use client"`.
Everything else renders on the server.

## Adding a project

Add an entry to `projects` in `lib/content.ts`. Each one appears in the Projects list and gets its own page at `/work/<slug>`.

```ts
{
  slug: "my-project",              // the address: /work/my-project
  title: "Project name",
  kind: "Kotlin · Android",
  year: "2026",
  blurb: "One sentence for the list.",
  description: ["First paragraph.", "Second paragraph."],
  stack: ["Kotlin", "Jetpack Compose", "Room"],
  image: "/projects/my-project.png",  // file in /public/projects, or leave out for a placeholder
  site: "https://example.com",         // optional: shows the globe icon and a "Visit website" button
  github: "https://github.com/theshakil/repo", // optional: shows the GitHub icon and a "View source" button
}
```

The blank layout is live at `/work/template` (hidden from search). It is defined as `projectTemplate` in the same file.

## Deploy

Push to GitHub and import the repository in Vercel. No environment variables are needed.

## Night and day mode

Night is the default. The toggle in the top bar sets `data-theme="light"` on `<html>` and saves the choice in
`localStorage`. A small inline script in `app/layout.tsx` restores it before the first paint, so there is no flash.
The two palettes are the `--c-*` variables at the top of `app/globals.css`; edit them to retune either mode.

## Motion

Scroll reveals, the menu transitions and the hero name animation switch off for visitors who have
"reduce motion" turned on in their system settings.

## Search and AI readability

`app/layout.tsx` sets the title, description, Open Graph tags, canonical URL and a schema.org `Person` JSON-LD block.
`app/robots.ts`, `app/sitemap.ts` and `public/llms.txt` help crawlers and AI tools. Set `NEXT_PUBLIC_SITE_URL`
(for example `https://yourname.dev`) in your hosting environment so the canonical URL and sitemap use your real domain.
Keep `public/llms.txt` in step with `lib/content.ts` when you add projects.
