"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { useIsDark } from "@/hooks/useIsDark";

const NAMES = [
  "MOHAMMED JAMEEL SHAHID",
  "محمد جميل شاهد",
  "モハメド・ジャミール・シャヒド",
];

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&アイウエオカキクケコサシスセソタチツテトابتثجحخدذرزسشصضطظعغفقكلمنهوي";

export default function HeaderClient() {
  const [text, setText] = useState(NAMES[0]);
  const [langIndex, setLangIndex] = useState(0);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = useIsDark(); // hydration-safe

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  useEffect(() => {
    const cycleLanguage = () => {
      let iterations = 0;
      const nextIndex = (langIndex + 1) % NAMES.length;
      const target = NAMES[nextIndex];

      const glitch = setInterval(() => {
        setText(() =>
          target
            .split("")
            .map((letter, index) => {
              if (index < iterations) return target[index];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );
        if (iterations >= target.length) {
          clearInterval(glitch);
          setLangIndex(nextIndex);
        }
        iterations += 1 / 2;
      }, 30);
    };

    const interval = setInterval(cycleLanguage, 5000);
    return () => clearInterval(interval);
  }, [langIndex]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 z-50 flex w-full items-center justify-between py-3 md:px-12 px-4 pointer-events-none transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        background: isScrolled
          ? isDark
            ? "rgba(6,6,10,0.85)"
            : "rgba(247,244,238,0.85)"
          : "transparent",
        borderBottom: isScrolled
          ? `1px solid ${isDark ? "rgba(0,229,255,0.1)" : "rgba(184,149,42,0.15)"}`
          : "1px solid transparent",
      }}
    >
      <div className="pointer-events-auto md:ml-0 lg:ml-12 font-mono text-sm font-bold tracking-widest">
        <span
          style={{
            color: isDark ? "rgba(0,229,255,0.4)" : "rgba(184,149,42,0.5)",
            marginRight: "8px",
          }}
        >
          {isDark ? "//" : ">"}
        </span>
        <span
          className={isDark ? "neon-flicker" : ""}
          style={{
            color: "var(--primary)",
            textShadow: isDark
              ? "0 0 10px rgba(0,229,255,0.7), 0 0 30px rgba(0,229,255,0.3)"
              : "0 0 15px rgba(184,149,42,0.3)",
          }}
        >
          {text}
        </span>
      </div>

      <div className="pointer-events-auto flex items-center gap-4">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:flex items-center gap-2 font-mono text-xs"
          style={{ color: "var(--muted)" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{
              background: "var(--accent)",
              boxShadow: isDark
                ? "0 0 6px var(--accent)"
                : "0 0 6px rgba(26,107,74,0.5)",
            }}
          />
          {isDark ? "NERV.SYS ONLINE" : "CLEARANCE: AVENGER"}
        </motion.span>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
