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
  experience: calculateExperience(new Date("2024-01-01")),
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/mohammed-shahid1/",
  github: "https://github.com/Shahid0324-GIT",
  resumePdf: "/resume.pdf",
};

export const SKILLS = {
  languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
  ],
  frontend: [
    "Next.js 16",
    "React.js",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "TanStack Query",
  ],
  backend: ["Node.js", "FastAPI (Python)", "Express.js", "WebSockets"],
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
    id: "codseg",
    role: "Fullstack Developer",
    company: "Codseg & Paradigm Shift AI",
    period: "Jan 2024 – Jan 2026",
    type: "Remote",
    description: "Architecting responsive web apps and optimizing performance.",
    achievements: [
      "Reduced initial load times by 40% using aggressive code splitting.",
      "Ensured sub-second response times for complex analytics dashboards.",
      "Implemented RBAC and robust error handling boundaries.",
      "Achieved 95+ Lighthouse scores by refactoring heavy component trees.",
    ],
  },
  {
    id: "nxtwave",
    role: "Teaching Assistant & Mentor",
    company: "NxtWave Disruptive Technologies",
    period: "Jul 2023 – Jan 2024",
    type: "Remote",
    description: "Mentoring students in full-stack concepts.",
    achievements: [
      "Mentored 300+ students in React.js and REST APIs.",
      "Debugged 500+ student codebases to identify anti-patterns.",
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
  tva: {
    background: "#f5f2e8",
    foreground: "#1a1918",
    primary: "#d97706",
    secondary: "#78716c",
    accent: "#f59e0b",
  },
  unit02: {
    background: "#09090b",
    foreground: "#fafafa",
    primary: "#ef4444",
    secondary: "#a1a1aa",
    accent: "#ea580c",
  },
  system: {
    background: "#000000",
    foreground: "#ffffff",
    primary: "#22c55e",
    secondary: "#3f3f46",
    accent: "#f97316",
  },
};

export const words = [
  {
    text: "INITIALIZING...",
    jp: "初期化中...",
    ar: "جارٍ البدء...",
  },
  {
    text: "CHECKING LOCATION: Telangana, India",
    jp: "位置を確認中: ラーマグンダム",
    ar: "التحقق من الموقع: راماغوندام",
  },
  {
    text: "LOADING MODULES: NEXT.JS 16",
    jp: "モジュール読み込み中: NEXT.JS 16",
    ar: "تحميل الوحدات: NEXT.JS 16",
  },
  {
    text: "VERIFYING: FASTAPI BACKEND",
    jp: "検証中: FASTAPI バックエンド",
    ar: "التحقق: واجهة FASTAPI الخلفية",
  },
  {
    text: "ACCESS GRANTED",
    jp: "アクセス許可",
    ar: "تم السماح بالدخول",
  },
];

const skills = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Nuxt", icon: SiNuxtdotjs },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Tailwind", icon: SiTailwindcss },
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
