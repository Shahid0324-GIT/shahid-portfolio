"use client";

import { useEffect } from "react";

export default function PageMotion() {
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const reveal = () => {
      observer?.disconnect();
      const sections = document.querySelectorAll<HTMLElement>(".section-shell, .skills-showcase");
      sections.forEach(section => section.classList.remove("reveal-pending"));
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove("reveal-pending"); observer?.unobserve(entry.target); } });
      }, { threshold: .05 });
      sections.forEach(section => {
        if (section.getBoundingClientRect().top > innerHeight) section.classList.add("reveal-pending");
        observer?.observe(section);
      });
    };
    reveal();
    preference.addEventListener("change", reveal);
    return () => { observer?.disconnect(); preference.removeEventListener("change", reveal); document.querySelectorAll(".reveal-pending").forEach(element => element.classList.remove("reveal-pending")); };
  }, []);
  return null;
}
