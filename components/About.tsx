import { ArrowUpRight, Asterisk } from "lucide-react";
import { DATA, SOCIALS } from "@/utils/constants";
import TypingRole from "@/components/TypingRole";
export default function About() {
  return <section className="section-shell about-section" id="about" aria-labelledby="about-title">
    <div className="section-kicker"><span>01 / A LITTLE ABOUT ME</span><span>THE PERSON BEHIND THE CODE</span></div>
    <div className="about-grid"><div className="about-art" aria-hidden="true"><div className="about-stamp"><Asterisk /><span>ALWAYS<br />CURIOUS.</span><small>SH AH ID / ENGINEER</small></div><div className="about-tag">a work in progress, always.</div></div>
    <div><h2 id="about-title">Hi, I&apos;m Shahid.<br /><TypingRole /></h2><p>I&apos;m a fullstack engineer based in Telangana, India. I bring interfaces, APIs, and data together to build software that feels simple, even when the engineering behind it isn&apos;t.</p><p>My work spans AI-powered platforms, real-time systems, and tools for developers. I care about the details: how a page feels, how an API behaves, and what happens when a system grows.</p><div className="about-facts"><div><strong>{DATA.experience.replace(" Years", "")}</strong><span>years building software</span></div><div><strong>End to end</strong><span>from interface to infrastructure</span></div></div><a className="text-link" href={SOCIALS.github} target="_blank" rel="noopener noreferrer">See what I&apos;m building <ArrowUpRight size={17} /></a></div></div>
  </section>;
}
