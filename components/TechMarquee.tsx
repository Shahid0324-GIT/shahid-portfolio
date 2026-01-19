"use client";

import { marqueeContent } from "@/utils/constants";
import { motion } from "framer-motion";

export default function TechMarquee() {
  const seamlessLoop = [...marqueeContent, ...marqueeContent];

  return (
    <section className="relative overflow-hidden bg-background mt-12 py-26 md:py-44 border-t border-secondary">
      <div className="absolute left-6 top-10 z-20 md:left-12 lg:left-24">
        <h2 className="font-mono text-lg md:py-12 font-bold uppercase tracking-widest text-primary">
          {"/// ENGINEERING_ARSENAL"}
        </h2>
      </div>

      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex min-w-full w-max mt-12"
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      >
        {seamlessLoop.map((skill, i) => (
          <div
            key={`${i}-${skill}`}
            className="group relative mx-8 flex items-center justify-center cursor-help"
          >
            <skill.icon className="h-12 w-12 text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:filter-none grayscale group-hover:grayscale-0" />

            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase opacity-0 transition-opacity group-hover:opacity-100 text-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
