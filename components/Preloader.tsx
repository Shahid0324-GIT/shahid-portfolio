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
          // preloader-surface: themed background via CSS
          className="preloader-surface fixed inset-0 z-9999 flex flex-col items-start justify-end px-6 py-12 md:px-20"
        >
          {/* Dot grid — preloader-dot-grid handles opacity + size per theme */}
          <div className="preloader-dot-grid pointer-events-none absolute inset-0" />

          {/* Light: Asgard radial glow */}
          {!isDark && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(184,149,42,0.05) 0%, transparent 70%)",
              }}
            />
          )}

          {/* Dark: NGE AT-field hex */}
          {isDark && (
            <div className="at-field-overlay pointer-events-none absolute inset-0" />
          )}

          {/* Dark: NGE scan lines */}
          {isDark && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.015) 3px, rgba(0,229,255,0.015) 4px)",
              }}
            />
          )}

          {/* Progress bar track */}
          <div
            className="absolute top-0 left-0 h-0.5 w-full"
            style={{
              background: isDark
                ? "rgba(0,229,255,0.08)"
                : "rgba(184,149,42,0.1)",
            }}
          >
            {/* preloader-bar: glow shadow from CSS */}
            <motion.div
              className="preloader-bar h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                background: isDark
                  ? "linear-gradient(90deg, var(--accent-2), var(--primary))"
                  : "linear-gradient(90deg, var(--accent), var(--primary))",
              }}
            />
          </div>

          {/* Corner brackets */}
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

          {/* System label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-8 right-8 font-mono text-xs tracking-widest"
            style={{ color: "var(--muted)" }}
          >
            {isDark ? "NERV MAGI SYSTEM" : "STARK / S.H.I.E.L.D."}
          </motion.div>

          {/* Progress percentage */}
          <motion.div
            className="absolute bottom-12 right-8 font-mono text-xs tracking-widest tabular-nums"
            style={{
              color: "var(--primary)",
              textShadow: isDark ? "0 0 8px var(--primary)" : "none",
            }}
          >
            {Math.round(progress).toString().padStart(3, "0")}%
          </motion.div>

          {/* Boot text */}
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
            {/* flame-pulse: subtle vertical pulse on cursor blink in dark */}
            <span
              className={`animate-pulse ${isDark ? "flame-pulse" : ""}`}
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
