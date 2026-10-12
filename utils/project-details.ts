// Concept diagrams are illustrations, not screenshots or live telemetry.
export type ProjectDetail = { category: string; color: string; image?: string; imageAlt?: string; headline: string; problem: string; approach: string; result: string; sourceAvailable: boolean };
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "freelance-flow": {
    category: "FULLSTACK PRODUCT", color: "lavender", image: "/projects/freelance-flow.jpg", imageAlt: "Freelance Flow public landing page, captured from the live website",
    headline: "Less admin. More room to do good work.",
    problem: "Freelance work involves more than delivering a project. Time tracking, clients, and invoices need to stay connected without adding more administrative work.",
    approach: "A Next.js interface backed by FastAPI and PostgreSQL brings these workflows together. OAuth and JWT handle authentication, Zustand manages client state, and TanStack Query keeps server data in sync.",
    result: "A full-stack platform connecting time tracking and invoicing, with automated PDF generation and a public website to explore.", sourceAvailable: true,
  },
  "gitpulse": {
    category: "REAL-TIME SYSTEM", color: "mint", headline: "The heartbeat of open source.",
    problem: "GitHub activity is a continuous stream. Making that activity useful requires a pipeline that can ingest, process, and deliver events to the interface.",
    approach: "A producer-consumer architecture uses Redis for queueing and Pub/Sub. FastAPI broadcasts events over WebSockets to a Nuxt dashboard, with Docker orchestrating the services.",
    result: "A distributed project that explores real-time event processing, from ingestion through to browser visualization. The public repository includes its architecture and setup instructions.", sourceAvailable: true,
  },
  "handyman": {
    category: "DEVELOPER TOOLKIT", color: "peach", image: "/projects/handyman.jpg", imageAlt: "Handyman tools dashboard captured from the public demo",
    headline: "Useful tools. Your data stays with you.",
    problem: "Everyday development tasks often mean switching between websites and handing data to third-party services. Many utilities can run directly in the browser instead.",
    approach: "An offline-capable Next.js PWA brings together more than 25 developer utilities. Processing stays client-side, with Web Workers supporting work away from the main UI thread.",
    result: "A public toolkit for conversions, formatting, code generation, and cryptography, designed around browser-local processing.", sourceAvailable: true,
  },
  "pastebin-lite": {
    category: "BACKEND ENGINEERING", color: "blue", image: "/projects/pastebin-lite.jpg", imageAlt: "Pastebin Lite public form with content, expiry, and maximum view fields",
    headline: "Share a thought. Give it an expiry.",
    problem: "Temporary text sharing needs predictable expiration and view limits, including when several requests arrive at the same time.",
    approach: "Next.js and Redis support a small text-sharing service. Atomic operations such as INCR and EXPIRE address counters and expiration, with deterministic tests covering the behavior.",
    result: "A focused ephemeral sharing service with a public form for text, expiry, and maximum views.", sourceAvailable: true,
  },
  "reverse-ats": {
    category: "AI EXPERIMENT", color: "butter", headline: "From rough notes to a structured resume.",
    problem: "Turning raw career information into a structured resume involves both organizing the text and producing a consistent document format.",
    approach: "The project combines Next.js, Google Gemini, and the Vercel AI SDK to stream structured LaTeX output. Local storage keeps the client workflow stateless.",
    result: "An exploration of AI-assisted resume generation and constrained output. A public demo and accessible source link are not currently available.", sourceAvailable: false,
  },
};
