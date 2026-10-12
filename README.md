# Mohammed Jameel Shahid — Portfolio

A personal fullstack engineering portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

The design combines a warm editorial light theme with a restrained cyan-accented dark theme. Original CSS illustrations, real project screenshots, and individual project pages tell the story behind the work.

A brief welcome screen cycles the owner's name through English, Arabic, and Japanese once per tab session. The skills showcase contains every previously listed skill across seven selectable categories, with optional automatic fading transitions. A faint traveling wave, section entrances, and active navigation add motion without obscuring the content. The hero objects stay still, and the mobile menu fills the screen while small canvas particles assemble into the navigation labels. No particle library is required.

## Run locally

Dependencies are installed with Bun:

```sh
bun install
bun dev
```

Open the local URL printed by Next.js. Production checks:

```sh
bun run build
bun run lint
```

## Content and structure

- `utils/constants.ts`: personal details, social links, work history, and project links.
- `utils/project-details.ts`: project narratives, preview images, categories, and source-link availability.
- `utils/skill-groups.ts`: complete categorized skills; existing icon definitions are shared from `utils/constants.ts`.
- `app/page.tsx`: hero, about, technologies, selected work, experience, and contact.
- `app/work/[slug]/page.tsx`: statically generated project pages.
- `app/globals.css`: shared design tokens, light/dark themes, responsive styles, and reduced-motion handling.
- `app/opengraph-image.tsx`: generated PNG for social sharing.
- `public/projects/`: project screenshots and image provenance notes.
- `public/resume.pdf`: the owner's existing resume.

## Project previews

Freelance Flow, Handyman, and Pastebin Lite use captures of their public websites. GitPulse and Reverse ATS use original concept illustrations, visibly labeled as illustrations.

The Reverse ATS source URL in the original project data returned a public GitHub 404 during the review. Its source button is hidden via `sourceAvailable: false`; the original URL is retained for the owner to update. Projects without a public demo do not display a demo button.

To update an image, replace the file in `public/projects/` and update its descriptive alt text in `utils/project-details.ts`.

## Accessibility and performance

Main content is rendered immediately, with no blocking preloader or visitor-location request. Navigation includes a skip link, keyboard focus states, a mobile menu, and theme controls. Experience highlights use native disclosure elements. Lenis smooths page scrolling and same-page section links, while native touch scrolling is preserved. Reduced-motion preferences disable scroll smoothing and transitions.

Project images use Next.js image optimization. The homepage and five project pages are prerendered.

MIT © Mohammed Jameel Shahid
