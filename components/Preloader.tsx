"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { words } from "@/utils/constants";
import { useIsDark } from "@/hooks/useIsDark";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0].text);
  const [isVisible, setIsVisible] = useState(true);
  const isDark = useIsDark();

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => setIsVisible(false), 400);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[index];
    const glitchInterval = setInterval(() => {
      const r = Math.random();
      if (r < 0.13) setDisplay(currentWord.text);
      else if (r < 0.36) setDisplay(currentWord.jp);
      else setDisplay(currentWord.ar);
    }, 50);
    const stabilize = setTimeout(() => {
      clearInterval(glitchInterval);
      setDisplay(currentWord.text);
    }, 100);
    return () => {
      clearInterval(glitchInterval);
      clearTimeout(stabilize);
    };
  }, [index]);

  const progress = ((index + 1) / words.length) * 100;

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-start justify-end px-6 py-12 md:px-20"
          style={{ background: "var(--background)" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              opacity: isDark ? 0.06 : 0.05,
            }}
          />

          {!isDark && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(184,149,42,0.05) 0%, transparent 70%)",
              }}
            />
          )}
          {isDark && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='69' viewBox='0 0 60 69'%3E%3Cpath d='M30 3 L57 17 L57 52 L30 66 L3 52 L3 17 Z' fill='none' stroke='rgba(123,45,139,0.07)' stroke-width='1'/%3E%3C/svg%3E\")",
                backgroundSize: "60px 69px",
              }}
            />
          )}

          {isDark && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.015) 3px, rgba(0,229,255,0.015) 4px)",
              }}
            />
          )}

          <div
            className="absolute top-0 left-0 h-0.5 w-full"
            style={{
              background: isDark
                ? "rgba(0,229,255,0.08)"
                : "rgba(184,149,42,0.1)",
            }}
          >
            <motion.div
              className="h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background: isDark
                  ? "linear-gradient(90deg, var(--accent-2), var(--primary))"
                  : "linear-gradient(90deg, var(--accent), var(--primary))",
                boxShadow: `0 0 10px var(--primary), 0 0 20px var(--primary-glow)`,
              }}
            />
          </div>

          {[
            "top-4 left-4 border-t-2 border-l-2",
            "top-4 right-4 border-t-2 border-r-2",
            "bottom-4 left-4 border-b-2 border-l-2",
            "bottom-4 right-4 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              className={`absolute h-8 w-8 ${cls}`}
              style={{ borderColor: "var(--primary)", opacity: 0.4 }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-8 right-8 font-mono text-xs tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {isDark ? "NERV MAGI SYSTEM" : "STARK / S.H.I.E.L.D."}
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-8 font-mono text-xs tracking-widest tabular-nums"
            style={{
              color: "var(--primary)",
              textShadow: isDark ? "0 0 8px var(--primary)" : "none",
            }}
          >
            {Math.round(progress).toString().padStart(3, "0")}%
          </motion.div>

          <div
            className="relative z-10 font-mono text-xs md:text-sm uppercase tracking-widest"
            style={{ color: "var(--primary)" }}
          >
            <span className="mr-4" style={{ color: "var(--muted)" }}>
              {isDark ? "//" : ">"}
            </span>
            <motion.span
              key={display}
              style={{
                textShadow: isDark ? "0 0 12px rgba(0,229,255,0.6)" : "none",
              }}
            >
              {display}
            </motion.span>
            <span
              className="animate-pulse"
              style={{
                color: isDark ? "rgba(0,229,255,0.8)" : "var(--foreground)",
              }}
            >
              _
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
