# Mohammed Jameel Shahid | Portfolio 2026

> A high-performance, engineering-first portfolio built with **Next.js 16**, **Bun**, and **Tailwind CSS v4**. Features a dual cinematic theme system — **MCU (Loki/Iron Man)** in light mode and **Anime (NGE × Ghost in the Shell × Demon Slayer)** in dark mode — with a sticky horizontal scroll, tri-lingual system boot sequence, and a dynamic geolocation HUD.

![Project Banner](./public/landing.png)

## Tech Stack

| Layer     | Technology                                                               |
| --------- | ------------------------------------------------------------------------ |
| Runtime   | [Bun](https://bun.sh)                                                    |
| Framework | [Next.js 16](https://nextjs.org) (App Router)                            |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) (CSS Variables, No Config)    |
| Animation | [Framer Motion](https://www.framer.com/motion/)                          |
| Icons     | [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons) |
| Fonts     | Inter + JetBrains Mono (via `next/font`)                                 |

## Features

- **Dual Cinematic Theme System**
  - **Light Mode — MCU:** Asgardian parchment, Loki gold, Iron Man arc reactor blue. Subtle rune-grid backgrounds, gold shimmer card hovers, Stark HUD orbital display.
  - **Dark Mode — Anime:** NGE void black, Ghost in the Shell cyan, Demon Slayer crimson. Scanline overlay, AT Field hex patterns, neon glow text, flame pulse animations.
- **System Boot Loader:** Cinematic tri-lingual (EN/JP/AR) loading sequence with corner bracket frames and a themed progress bar.
- **Sticky Horizontal Scroll:** Project showcase that transforms vertical scrolling into horizontal panning via Framer Motion.
- **Ghost Tech Marquee:** Infinite scrolling tech stack with theme-aware icon glow on hover — gold shimmer in light, cyan neon in dark.
- **Dynamic Geolocation HUD:** Hero section detects real coordinates or falls back to base location; styled as a Stark/NERV targeting display.
- **Bilingual Header:** Name glitch effect cycling between English, Japanese (Katakana), and Arabic with responsive mobile initials fallback.
- **Hydration-Safe Theming:** Custom `useIsDark` hook centralises the `next-themes` mounted guard, preventing SSR/client mismatches across all components.

## Getting Started

This project uses **Bun**. Make sure it's installed before proceeding.

```bash
# Install dependencies
bun install

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```path

src/
├── app/
│   ├── globals.css         # Tailwind v4 theme variables (MCU + Anime palettes)
│   ├── layout.tsx          # Root layout with Header & ThemeProvider
│   └── page.tsx            # Entry: Preloader → Hero → Marquee → Projects → History
├── components/
│   ├── Header.tsx          # Fixed nav with glitch name, status badge, theme toggle
│   ├── Hero.tsx            # Orbital HUD with geolocation display
│   ├── History.tsx         # Work timeline + contact footer
│   ├── Preloader.tsx       # Boot sequence loading screen
│   ├── Projects.tsx        # Horizontal scroll project showcase
│   ├── TechMarquee.tsx     # Infinite tech logo loop
│   └── ThemeToggle.tsx     # MCU ✦ / NGE ⚡ theme switch
├── hooks/
│   └── useIsDark.ts        # Hydration-safe theme hook (use this everywhere)
└── utils/
    └── constants.ts        # Single source of truth — update all content here
```

## Customization

### 1. Update Your Content

Everything personal lives in `src/utils/constants.ts`. Name, role, links, work history, and projects all live here — the site updates automatically.

```typescript
export const DATA = {
  name: "Mohammed Jameel Shahid",
  role: "Fullstack Engineer",
  location: "Telangana, India",
  email: "moshahid0324@gmail.com",
};
```

### 2. Change the Theme Colors

The entire palette is in `src/app/globals.css` via CSS variables. Swap any hex to change the accent instantly.

```css
/* Light Mode — MCU (Loki/Iron Man) */
:root {
  --background: #f7f4ee; /* Asgardian parchment */
  --primary: #b8952a; /* Loki gold */
  --accent: #1a6b4a; /* Loki emerald */
}

/* Dark Mode — Anime (NGE × GITS × Demon Slayer) */
.dark {
  --background: #06060a; /* NGE void */
  --primary: #00e5ff; /* Ghost in the Shell cyan */
  --accent: #e63946; /* Demon Slayer crimson */
}
```

### 3. Add a New Component with Theme Support

Use the `useIsDark` hook instead of `useTheme` directly — it handles the SSR mounted guard for you:

```typescript
import { useIsDark } from "@/hooks/useIsDark";

export default function MyComponent() {
  const isDark = useIsDark();
  // Safe to branch on isDark immediately — no hydration errors
}
```

## License

MIT © [Mohammed Jameel Shahid](https://github.com/Shahid0324-GIT)
