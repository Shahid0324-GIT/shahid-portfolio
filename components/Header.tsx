"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { SOCIALS } from "@/utils/constants";
const navigation = [["About", "about"], ["Work", "projects"], ["Experience", "experience"], ["Contact", "contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link href="/" className="wordmark" aria-label="Shahid home" onClick={() => setOpen(false)}>shahid<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <Link key={id} href={"/#" + id}>{label}</Link>)}</nav>
    <div className="header-actions"><a className="resume-link" href={SOCIALS.resumePdf} target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={14} /></a><ThemeToggle /><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, id]) => <Link key={id} href={"/#" + id} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={20} /></Link>)}</nav>}
  </header>;
}
