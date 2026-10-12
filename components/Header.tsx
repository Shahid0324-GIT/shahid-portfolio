"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { SOCIALS } from "@/utils/constants";
import ParticleLabel from "@/components/ParticleLabel";
const navigation = [["About", "about"], ["Work", "projects"], ["Experience", "experience"], ["Contact", "contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key !== "Tab") return;
      const targets = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!targets?.length) return;
      const first = targets[0], last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const onResize = () => { if (innerWidth > 700) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      previousFocus?.focus({ preventScroll: true });
    };
  }, [open]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = "";
      if (pathname === "/") {
        navigation.forEach(([, id]) => {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= innerHeight * .3) current = id;
        });
      }
      setActive(current);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pathname]);
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Shahid home" onClick={() => setOpen(false)}>shahid<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <Link key={id} href={"/#" + id} aria-current={active === id ? "location" : undefined}>{label}</Link>)}</nav>
    <div className="header-actions"><a className="resume-link" href={SOCIALS.resumePdf} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={14} /></a><ThemeToggle /><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    {open && createPortal(<div id="mobile-nav" className="mobile-menu-overlay" ref={menuRef} role="dialog" aria-modal="true" aria-label="Mobile navigation" data-lenis-prevent>
      <div className="mobile-menu-top"><Link href="/" className="wordmark" aria-label="Shahid home" onClick={() => setOpen(false)}>shahid<span>.</span></Link><button ref={closeRef} className="mobile-menu-close" aria-label="Close navigation" onClick={() => setOpen(false)}><X size={24} /></button></div>
      <nav className="mobile-menu-links" aria-label="Mobile sections">{navigation.map(([label, id], index) => <Link key={id} href={"/#" + id} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}><span className="mobile-menu-number">0{index + 1}</span><ParticleLabel>{label}</ParticleLabel><ArrowUpRight size={30} /></Link>)}</nav>
      <div className="mobile-menu-bottom"><span className="eyebrow">CODE & CRAFT / TELANGANA, INDIA</span><a href={SOCIALS.resumePdf} target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={15} /></a></div>
    </div>, document.body)}
  </header>;
}
