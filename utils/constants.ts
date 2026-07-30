import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiSelenium,
  SiTestinglibrary,
  SiCypress,
  SiJest,
  SiVuedotjs,
  SiNuxtdotjs,
  SiDjango,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiWebstorm,
  SiSharp,
} from "react-icons/si";

const calculateExperience = (startDate: Date) => {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  if (months < 0) {
    return `${years - 1} Years`; // Keeping it rough and clean
  }
  return `${years}+ Years`;
};

export const DATA = {
  name: "Mohammed Jameel Shahid",
  role: "Fullstack Engineer",
  location: "Telangana, India",
  email: "moshahid0324@gmail.com",
  experience: calculateExperience(new Date("2023-04-01")),
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/mohammed-shahid1/",
  github: "https://github.com/Shahid0324-GIT",
  resumePdf: "/resume.pdf",
};

export const SKILLS = {
  languages: [
    "JavaScript (ES6+)",
    "C#",
    "TypeScript",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
  ],
  frontend: [
    "Next.js",
    "React.js",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "TanStack Query",
  ],
  backend: [
    "Node.js",
    "FastAPI (Python)",
    "Express.js",
    "WebSockets",
    "ASP.NET Core",
    "NestJS",
  ],
  database: [
    "PostgreSQL",
    "MongoDB",
    "Redis (Upstash)",
    "SQLModel",
    "Prisma ORM",
  ],
  system: [
    "REST APIs",
    "JWT Auth",
    "OAuth 2.0",
    "Microservices",
    "Web Workers",
    "PWA",
    "Docker",
  ],
};

export const WORK = [
  {
    id: "propertyloop",
    role: "Software Engineer",
    company: "PropertyLoop/ QuantumLoopAI",
    period: "Apr 2026 – Present",
    type: "Remote",
    description:
      "Building AI-powered healthcare and property technology platforms with React, Next.js, NestJS, Prisma, Azure Functions, and PostgreSQL.",
    achievements: [
      "Designed and implemented the NINA & SOFIA chatbot feedback system end-to-end.",
      "Built Azure Functions for automated orphaned feedback reconciliation and Slack notifications.",
      "Optimized complex Prisma/SQL queries for production-scale datasets with millions of records.",
      "Delivered full-stack features across React, Next.js, NestJS, Prisma, and Azure while collaborating with product and QA teams.",
    ],
  },
  {
    id: "codseg",
    role: "Fullstack Developer",
    company: "Codseg & Paradigm Shift AI",
    period: "Jan 2024 – Jan 2026",
    type: "Remote",
    description:
      "Developed and maintained scalable full-stack web applications with a focus on performance, security, and user experience.",
    achievements: [
      "Reduced initial load times by 40% through code splitting and bundle optimization.",
      "Implemented RBAC, authentication, and robust error handling across multiple applications.",
      "Optimized complex dashboards to achieve sub-second response times.",
      "Improved application performance, consistently achieving Lighthouse scores above 95.",
    ],
  },
  {
    id: "nxtwave",
    role: "Teaching Assistant & Mentor",
    company: "NxtWave Disruptive Technologies",
    period: "Jul 2023 – Jan 2024",
    type: "Remote",
    description:
      "Mentored aspiring developers in full-stack web development and software engineering fundamentals.",
    achievements: [
      "Mentored over 300 students in React.js, JavaScript, and REST APIs.",
      "Debugged more than 500 student projects, helping identify and resolve architectural and coding issues.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "freelance-flow",
    title: "Freelance Flow",
    tech: ["Next.js 16", "FastAPI", "PostgreSQL", "Zustand"],
    links: {
      live: "https://time-tracker-five-lilac.vercel.app/",
      repo: "https://github.com/Shahid0324-GIT/time-tracker",
    },
    description:
      "Full-stack invoicing platform with robust state management and OAuth 2.0.",
    highlights: [
      "OAuth 2.0 & JWT Auth",
      "Automated PDF Generation",
      "Prevents data drift via TanStack Query",
    ],
  },
  {
    id: "gitpulse",
    title: "GitPulse",
    tech: ["Nuxt 4", "Python (FastAPI)", "Redis", "Docker"],
    links: {
      live: "",
      repo: "https://github.com/Shahid0324-GIT/gitpulse",
    },
    description:
      "Real-time distributed system visualizing global GitHub activity via WebSockets.",
    highlights: [
      "Producer-Consumer Architecture",
      "Sub-millisecond Redis Pub/Sub Broadcasting",
      "5-Service Docker Orchestration",
    ],
  },
  {
    id: "handyman",
    title: "Handyman",
    tech: ["Next.js", "Web Workers", "Crypto", "PWA"],
    links: {
      live: "https://handy-man-eight.vercel.app/",
      repo: "https://github.com/Shahid0324-GIT/handy-man",
    },
    description:
      "Privacy-first offline PWA with 25+ developer utilities running client-side.",
    highlights: [
      "Zero-Knowledge Privacy",
      "60fps UI Thread (Web Workers)",
      "AES/Bcrypt Local Cryptography",
    ],
  },
  {
    id: "pastebin-lite",
    title: "Pastebin Lite",
    tech: ["Next.js 16", "Redis", "Atomic Ops"],
    links: {
      live: "https://agnitha-test.vercel.app/",
      repo: "https://github.com/Shahid0324-GIT/pastebin-lite",
    },
    description: "High-performance ephemeral text sharing service using Redis.",
    highlights: [
      "Atomic Operations (INCR/EXPIRE)",
      "Race-condition-free counters",
      "Deterministic Testing Suite",
    ],
  },
  {
    id: "reverse-ats",
    title: "Reverse ATS Builder",
    tech: ["Next.js 16", "Gemini AI", "Vercel AI SDK"],
    links: {
      live: "",
      repo: "https://github.com/Shahid0324-GIT/reverse-ats-resume",
    },
    description:
      "Intelligent tool that transforms raw text into ATS-optimized LaTeX resumes using Google Gemini.",
    highlights: [
      "Real-time AI Text Streaming",
      "Stateless & Privacy-First (Local Storage)",
      "Strict LaTeX Output Enforcement",
    ],
  },
];

export const THEMES = {
  // Light mode: MCU — Loki's Asgard × Iron Man Arc Reactor
  mcu: {
    background: "#f7f4ee",
    foreground: "#1a1410",
    primary: "#b8952a",
    secondary: "#d9d3c4",
    accent: "#1a6b4a",
    accent2: "#1e4a8a",
  },
  // Dark mode: Anime — NGE × Ghost in the Shell × Demon Slayer
  anime: {
    background: "#06060a",
    foreground: "#e8e4f0",
    primary: "#00e5ff",
    secondary: "#1a1a2e",
    accent: "#e63946",
    accent2: "#7b2d8b",
  },
};

export const words = [
  { text: "INITIALIZING...", jp: "初期化中...", ar: "جارٍ البدء..." },
  {
    text: "CHECKING LOCATION: Telangana, India",
    jp: "位置確認中: テランガーナ州",
    ar: "التحقق من الموقع: تيلانغانا",
  },
  {
    text: "LOADING MODULES: NEXT.JS 16",
    jp: "モジュール読み込み: NEXT.JS 16",
    ar: "تحميل الوحدات: NEXT.JS 16",
  },
  {
    text: "VERIFYING: FASTAPI BACKEND",
    jp: "検証中: FASTAPI バックエンド",
    ar: "التحقق: واجهة FASTAPI الخلفية",
  },
  {
    text: "ACCESS GRANTED",
    jp: "アクセス許可 — ようこそ",
    ar: "تم السماح بالدخول",
  },
];
const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "C#", icon: SiSharp },
  { name: "Python", icon: SiPython },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Nuxt", icon: SiNuxtdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Docker", icon: SiDocker },
  { name: "Playwright", icon: SiTestinglibrary },
  { name: "Selenium", icon: SiSelenium },
  { name: "Jest", icon: SiJest },
  { name: "Cypress", icon: SiCypress },
  { name: "ChatGPT", icon: SiOpenai },
  { name: "Claude", icon: SiClaude },
  { name: "Google Gemini", icon: SiGooglegemini },
  { name: "Webstorm", icon: SiWebstorm },
];

export const marqueeContent = [...skills, ...skills, ...skills];
