"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ViewSwitch() {
  const resume = usePathname() === "/resume";
  return <nav className="view-switch" aria-label="Portfolio display">
    <Link href="/" aria-current={!resume ? "page" : undefined} aria-label="Open full portfolio">Portfolio</Link>
    <Link href="/resume" aria-current={resume ? "page" : undefined} aria-label="Open simplified resume view">Resume<span className="view-switch-long"> view</span></Link>
  </nav>;
}
