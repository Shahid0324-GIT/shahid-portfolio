import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { DATA, SOCIALS, WORK, PROJECTS } from "@/utils/constants";
import { SKILL_GROUPS } from "@/utils/skill-groups";

export const metadata: Metadata = {
  title: "Mohammed Jameel Shahid | Resume & Experience",
  description: "A concise overview of Shahid's software engineering experience, technical skills, tools, projects, and contact details.",
  alternates: { canonical: "/resume" },
};

const sections = [["01", "Overview", "summary"], ["02", "Experience", "experience"], ["03", "Tech stack & tools", "skills"], ["04", "Selected projects", "projects"], ["05", "Contact", "contact"]];

export default function ResumePage() {
  return <main id="top" className="resume-page">
    <div className="resume-document">
      <aside className="resume-index" aria-label="Resume section index">
        <div className="resume-index-heading"><span className="resume-monogram" aria-hidden="true">MS</span><span>SHAHID / RESUME</span></div>
        <p>Software engineering<br />Professional overview</p>
        <nav aria-label="Resume sections">{sections.map(([number, label, id]) => <a key={id} href={"#" + id}><span>{number}</span>{label}</a>)}</nav>
        <a className="resume-index-pdf" href={SOCIALS.resumePdf} target="_blank" rel="noopener noreferrer">Download resume <Download size={13} /></a>
        <div className="resume-index-bottom"><span>LOOKING FOR THE FULL EXPERIENCE?</span><Link href="/">Explore the portfolio <ArrowUpRight size={13} /></Link></div>
      </aside>

      <article className="resume-content" aria-label="Professional resume">
        <header className="resume-profile" id="summary">
          <div className="resume-section-top"><span>01 / OVERVIEW</span><span className="resume-document-label">PROFESSIONAL PROFILE</span></div>
          <h1>{DATA.name}</h1>
          <p className="resume-role">Full Stack Developer <span aria-hidden="true">/</span> Software Engineer</p>
          <p className="resume-summary">I build web applications from interface to infrastructure. My work spans AI-powered healthcare and property platforms, real-time systems, and developer tools, with a focus on performance, dependable APIs, and maintainable software.</p>
          <div className="resume-quick-links"><a href={"mailto:" + DATA.email}><Mail size={14} />{DATA.email}</a><a href={SOCIALS.github} target="_blank" rel="noopener noreferrer"><Github size={14} />GitHub <ArrowUpRight size={12} /></a><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={14} />LinkedIn <ArrowUpRight size={12} /></a></div>
          <a className="resume-download" href={SOCIALS.resumePdf} target="_blank" rel="noopener noreferrer"><Download size={15} />Download PDF resume</a>
        </header>

        <dl className="resume-facts"><div><dt>BASED IN</dt><dd><MapPin size={13} />{DATA.location}</dd></div><div><dt>EXPERIENCE</dt><dd>{DATA.experience.toLowerCase()} building software</dd></div><div><dt>PRIMARY FOCUS</dt><dd>Full stack · AI applications</dd></div></dl>

        <section className="resume-section" id="experience" aria-labelledby="resume-experience-title">
          <div className="resume-section-top"><span>02 / EXPERIENCE</span><span>{WORK.length} ROLES</span></div><h2 id="resume-experience-title">Professional experience</h2>
          <div className="resume-jobs">{WORK.map(job => <article key={job.id} className="resume-job"><div className="resume-job-heading"><div><h3>{job.role}</h3><p>{job.company}</p></div><div className="resume-job-date"><span>{job.period}</span><span>{job.type}</span></div></div><p className="resume-job-summary">{job.description}</p><ul>{job.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}</ul></article>)}</div>
        </section>

        <section className="resume-section" id="skills" aria-labelledby="resume-skills-title">
          <div className="resume-section-top"><span>03 / CAPABILITIES</span><span>STACK + TOOLS</span></div><h2 id="resume-skills-title">Technical skills & tools</h2>
          <div className="resume-skills">{SKILL_GROUPS.map(group => <div className="resume-skill-row" key={group.id}><h3>{group.name}</h3><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
        </section>

        <section className="resume-section" id="projects" aria-labelledby="resume-projects-title">
          <div className="resume-section-top"><span>04 / SELECTED WORK</span><span>PERSONAL PROJECTS</span></div><h2 id="resume-projects-title">Applied engineering</h2>
          <div className="resume-projects">{PROJECTS.slice(0, 3).map(project => <article className="resume-project" key={project.id}><div><h3>{project.title}</h3><p>{project.description}</p><span className="resume-project-stack">{project.tech.join(" / ")}</span></div><div className="resume-project-links"><a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={project.title + " source code"}>Source <ArrowUpRight size={12} /></a>{project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={project.title + " live demo"}>Demo <ArrowUpRight size={12} /></a>}</div></article>)}</div>
          <a className="resume-more" href={SOCIALS.github} target="_blank" rel="noopener noreferrer">More projects on GitHub <ArrowRight size={14} /></a>
        </section>

        <section className="resume-section resume-contact" id="contact" aria-labelledby="resume-contact-title">
          <div className="resume-section-top"><span>05 / CONTACT</span><span>LET'S CONNECT</span></div><h2 id="resume-contact-title">Contact details</h2>
          <dl className="resume-contact-list"><div><dt>Email</dt><dd><a href={"mailto:" + DATA.email}>{DATA.email}<ArrowUpRight size={13} /></a></dd></div><div><dt>Location</dt><dd>{DATA.location}</dd></div><div><dt>LinkedIn</dt><dd><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/mohammed-shahid1<ArrowUpRight size={13} /></a></dd></div><div><dt>GitHub</dt><dd><a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">github.com/Shahid0324-GIT<ArrowUpRight size={13} /></a></dd></div></dl>
        </section>
        <footer className="resume-page-footer"><span>© {new Date().getFullYear()} {DATA.name}</span><Link href="/">Full portfolio <ArrowUpRight size={12} /></Link></footer>
      </article>
    </div>
  </main>;
}
