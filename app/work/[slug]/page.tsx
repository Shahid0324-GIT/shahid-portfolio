import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/utils/constants";
import { PROJECT_DETAILS } from "@/utils/project-details";
import ProjectVisual from "@/components/ProjectVisual";
import Contact from "@/components/Contact";
export function generateStaticParams() { return PROJECTS.map(project => ({ slug: project.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.id === slug);
  return { title: project ? project.title + " | Shahid" : "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find(p => p.id === slug);
  if (!project) notFound();
  const detail = PROJECT_DETAILS[slug];
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  return <main id="top"><section className="section-shell case-study"><Link className="text-link case-back" href="/#projects"><ArrowLeft size={17} /> All work</Link><div className="section-kicker"><span>{detail.category}</span><span>PROJECT NOTES</span></div><h1>{project.title}<span className="accent">.</span></h1><p className="case-headline">{detail.headline}</p><div className="project-tags">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-links case-links">{project.links.live && <a className="pill-link" href={project.links.live} target="_blank" rel="noopener noreferrer">Explore the live demo <ArrowUpRight size={17} /></a>}{detail.sourceAvailable && <a className="text-link" href={project.links.repo} target="_blank" rel="noopener noreferrer">View the source <ArrowUpRight size={17} /></a>}</div><ProjectVisual id={slug} priority /><div className="case-content">{[["01", "The idea", detail.problem], ["02", "The engineering", detail.approach], ["03", "What it brings together", detail.result]].map(([number, title, content]) => <div className="case-row" key={number}><span className="eyebrow">{number} / {title.toUpperCase()}</span><p>{content}</p></div>)}<div className="case-row"><span className="eyebrow">DETAILS THAT MATTER</span><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></div></div><Link className="next-project" href={"/work/" + next.id}><span className="eyebrow">NEXT PROJECT</span><strong>{next.title}</strong><ArrowUpRight size={32} /></Link></section><Contact /></main>;
}
