"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Asterisk, Code2, Pause, Play } from "lucide-react";
import { SKILL_GROUPS } from "@/utils/skill-groups";
import { TECH_SKILLS } from "@/utils/constants";

const normalize = (name: string) => name.toLowerCase().replace(/\.js|\s*\(.*?\)|\s+css/g, "").trim();
const icons = new Map(TECH_SKILLS.map(skill => [normalize(skill.name), skill.icon]));

function Skill({ name }: { name: string }) {
  const Icon = icons.get(normalize(name)) || Code2;
  return <span className="skill-item"><Icon aria-hidden="true" /><span>{name}</span></span>;
}

export default function TechMarquee() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();
  const root = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .2 });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || paused || interacting || reducedMotion) return;
    const timer = setInterval(() => setActive(index => (index + 1) % SKILL_GROUPS.length), 6500);
    return () => clearInterval(timer);
  }, [inView, paused, interacting, reducedMotion]);

  const select = (index: number) => { setActive(index); setPaused(true); };
  const group = SKILL_GROUPS[active];
  return <section ref={root} className="skills-showcase" aria-labelledby="skills-title"
    onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setInteracting(false); }}>
    <div className="skills-header"><div><span className="eyebrow">TOOLS OF THE TRADE</span><h2 id="skills-title">A toolkit for the <span className="serif">whole picture.</span></h2></div><Asterisk aria-hidden="true" /></div>
    <div className="skills-controls"><div className="skill-tabs" role="tablist" aria-label="Skill categories">{SKILL_GROUPS.map((item, index) =>
      <button key={item.id} ref={element => { tabRefs.current[index] = element; }} type="button" role="tab" id={"skill-tab-" + item.id} aria-selected={active === index} aria-controls="skill-panel" tabIndex={active === index ? 0 : -1} onClick={() => select(index)} onKeyDown={event => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % SKILL_GROUPS.length;
        else if (event.key === "ArrowLeft") next = (index + SKILL_GROUPS.length - 1) % SKILL_GROUPS.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = SKILL_GROUPS.length - 1;
        else return;
        event.preventDefault(); select(next); tabRefs.current[next]?.focus();
      }}>{item.name}</button>)}</div>
      {!reducedMotion && <button type="button" className="skills-play" onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume skill rotation" : "Pause skill rotation"}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>}
    </div>
    <div id="skill-panel" role="tabpanel" aria-labelledby={"skill-tab-" + group.id} tabIndex={0} className="skill-panel">
      <AnimatePresence mode="wait" initial={false}><motion.div key={group.id} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -6 }} transition={{ duration: .22 }}>
        <p className="skill-note">{group.note}<span>{String(active + 1).padStart(2, "0")} / {String(SKILL_GROUPS.length).padStart(2, "0")}</span></p>
        <div className="skill-items">{group.skills.map(name => <Skill name={name} key={name} />)}</div>
      </motion.div></AnimatePresence>
    </div>
    <div className="skills-footer"><span>FROM THE FIRST LINE TO THE FINAL DEPLOY.</span></div>
  </section>;
}
