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
      <div className="absolute left-6 top-8 z-20 md:left-12 lg:left-24">
        <h2
          className="font-mono text-sm md:text-lg font-bold uppercase tracking-widest"
          style={{
            color: "var(--primary)",
            textShadow: isDark ? "0 0 12px rgba(0,229,255,0.5)" : "none",
          }}
        >
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

      <div
        className="absolute left-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, var(--background), transparent)`,
        }}
      />
      <div
        className="absolute right-0 top-0 z-10 h-full w-24 md:w-40 pointer-events-none"
        style={{
          background: `linear-gradient(270deg, var(--background), transparent)`,
        }}
      />

      <motion.div
        className="flex min-w-full w-max mt-16"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
        {seamlessLoop.map((skill, i) => (
          <div
            key={`${i}-${skill.name}`}
            className="group relative mx-8 flex flex-col items-center justify-center cursor-help"
          >
            <skill.icon
              className="h-10 w-10 transition-all duration-300"
              style={{
                color: isDark ? "rgba(255,255,255,0.2)" : "var(--muted)",
                filter: "grayscale(1)",
                transitionProperty: "color, filter, transform, drop-shadow",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as SVGElement;
                el.style.color = "var(--primary)";
                el.style.filter = isDark
                  ? "grayscale(0) drop-shadow(0 0 8px rgba(0,229,255,0.8)) drop-shadow(0 0 20px rgba(0,229,255,0.4))"
                  : "grayscale(0) drop-shadow(0 0 6px rgba(184,149,42,0.6))";
                el.style.transform = "scale(1.2) translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as SVGElement;
                el.style.color = isDark
                  ? "rgba(255,255,255,0.2)"
                  : "var(--muted)";
                el.style.filter = "grayscale(1)";
                el.style.transform = "scale(1) translateY(0)";
              }}
            />
            <span
              className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap"
              style={{ color: "var(--primary)" }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

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
