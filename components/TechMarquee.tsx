"use client";

import { marqueeContent } from "@/utils/constants";
import { motion } from "framer-motion";
import { useIsDark } from "@/hooks/useIsDark";

export default function TechMarquee() {
  const isDark = useIsDark();
  const seamlessLoop = [...marqueeContent, ...marqueeContent];

  return (
    <section
      className="relative overflow-hidden bg-background mt-12 py-20 md:py-32 border-t"
      style={{
        borderColor: isDark ? "rgba(0,229,255,0.08)" : "rgba(184,149,42,0.15)",
      }}
    >
      {/* Background grid — mcu-grid-bg in light, overridden to anime grid in dark via CSS */}
      <div className="mcu-grid-bg pointer-events-none absolute inset-0 opacity-50" />

      {/* Section label — section-label handles color + letter-spacing + dark glow via CSS */}
      <div className="absolute left-6 top-8 z-20 md:left-12 lg:left-24">
        <h2 className="section-label font-mono text-sm md:text-lg font-bold uppercase">
          {isDark ? "// NEURAL_STACK_LOADED" : "/// ENGINEERING ARSENAL"}
        </h2>
        {isDark && (
          <div
            className="mt-1 h-px w-48"
            style={{
              background: "linear-gradient(90deg, var(--primary), transparent)",
              opacity: 0.4,
            }}
          />
        )}
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, var(--background), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, var(--background), transparent)",
        }}
      />

      {/* Scrolling icons — marquee-icon handles base color + hover glow per theme via CSS */}
      <motion.div
        className="flex min-w-full w-max mt-16"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {seamlessLoop.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${i}-${skill.name}`}
              className="group relative mx-8 flex flex-col items-center justify-center cursor-help"
            >
              {/* marquee-icon: themed base color + neon/gold hover glow from globals.css */}
              <Icon className="marquee-icon skill-icon-hover h-10 w-10 transition-all duration-300" />
              <span
                className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap"
                style={{ color: "var(--primary)" }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </motion.div>

      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), rgba(230,57,70,0.15), transparent)"
            : "linear-gradient(90deg, transparent, rgba(184,149,42,0.2), rgba(26,107,74,0.1), transparent)",
        }}
      />
    </section>
  );
}
