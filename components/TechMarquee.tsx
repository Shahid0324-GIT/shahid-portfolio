import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiFastapi, SiPostgresql, SiDocker, SiVuedotjs } from "react-icons/si";
const technologies = [{ name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "TypeScript", icon: SiTypescript }, { name: "Python", icon: SiPython }, { name: "FastAPI", icon: SiFastapi }, { name: "PostgreSQL", icon: SiPostgresql }, { name: "Docker", icon: SiDocker }, { name: "Vue", icon: SiVuedotjs }];
export default function TechMarquee() {
  return <div className="tech-strip" aria-label="Technologies I work with"><span className="eyebrow">TOOLS OF THE TRADE</span><div className="tech-list">{technologies.map(({name, icon: Icon}) => <span key={name}><Icon aria-hidden="true" />{name}</span>)}</div></div>;
}
