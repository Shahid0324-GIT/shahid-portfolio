import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, SOCIALS } from "@/utils/constants";
import { PROJECT_DETAILS } from "@/utils/project-details";
import ProjectVisual from "@/components/ProjectVisual";
export default function Projects() {
  return <section className="section-shell work-section" id="projects" aria-labelledby="work-title"><div className="section-kicker"><span>02 / SELECTED WORK</span><span>BUILT TO BE USED</span></div><div className="section-heading"><h2 id="work-title">Things I&apos;ve<br /><span className="serif">put into the world.</span></h2><p>A few projects at the intersection<br />of useful ideas and careful engineering.</p></div>
  <div className="project-grid">{PROJECTS.map((project, index) => { const detail = PROJECT_DETAILS[project.id]; return <article className={"project-card " + (index === 0 ? "featured-project" : "")} key={project.id}>
  <Link href={"/work/" + project.id} className="project-image-link" aria-label={"Read about " + project.title}><ProjectVisual id={project.id} priority={index === 0} /><span className="project-hover-arrow"><ArrowUpRight size={25} /></span></Link>
  <div className="project-info"><div className="project-meta"><span>{String(index + 1).padStart(2, "0")} / {detail.category}</span><span>{project.links.live ? "PUBLIC DEMO" : detail.sourceAvailable ? "OPEN SOURCE" : "PROJECT EXPLORATION"}</span></div><Link href={"/work/" + project.id} className="project-title"><h3>{project.title}</h3><ArrowUpRight size={25} /></Link><p>{detail.headline}</p><div className="project-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-links"><Link className="text-link" href={"/work/" + project.id}>Project notes <ArrowUpRight size={15} /></Link>{project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}{detail.sourceAvailable && <a href={project.links.repo} target="_blank" rel="noopener noreferrer">Source ↗</a>}</div></div>
  </article>; })}</div><a className="all-work-link" href={SOCIALS.github} target="_blank" rel="noopener noreferrer">There&apos;s more where that came from. <span>Explore my GitHub <ArrowUpRight size={18} /></span></a></section>;
}
