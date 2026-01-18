"use client";

import { marqueeContent } from "@/utils/constants";
import { motion } from "framer-motion";

export default function TechMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-32 md:py-44 border-t border-secondary/20">
      {/* SYSTEM LABEL - Moved slightly down (top-10) to match the increased spacing */}
      <div className="absolute left-6 top-10 z-20 md:left-12 lg:left-24">
        <h2 className="font-mono text-lg font-bold uppercase tracking-widest text-primary">
          {"/// ENGINEERING_ARSENAL"}
        </h2>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {marqueeContent.map((skill, i) => (
          <div
            key={i}
            className="group relative mx-8 flex items-center justify-center cursor-help"
          >
            <skill.icon className="h-12 w-12 text-secondary transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:filter-none grayscale group-hover:grayscale-0" />

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase opacity-0 transition-opacity group-hover:opacity-100 text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
