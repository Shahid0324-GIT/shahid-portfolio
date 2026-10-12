import { SKILLS } from "@/utils/constants";

export const SKILL_GROUPS = [
  { id: "frontend", name: "Frontend", note: "Interfaces that feel considered.", skills: SKILLS.frontend },
  { id: "backend", name: "Backend", note: "The engineering behind the experience.", skills: [...SKILLS.backend, "Django"] },
  { id: "databases", name: "Databases", note: "Data, modeled and connected.", skills: SKILLS.database },
  { id: "tools", name: "Tools & Testing", note: "Build, test, iterate.", skills: ["Playwright", "Selenium", "Jest", "Cypress", "WebStorm", "ChatGPT", "Claude", "Google Gemini"] },
  { id: "cloud", name: "Cloud & Deployment", note: "From local ideas to running systems.", skills: ["Azure Functions", "Vercel", "Docker"] },
  { id: "languages", name: "Languages", note: "Different languages. The same curiosity.", skills: SKILLS.languages },
  { id: "systems", name: "Systems", note: "Designing for the bigger picture.", skills: SKILLS.system.filter(skill => skill !== "Docker") },
];
