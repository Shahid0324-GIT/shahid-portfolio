"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { words } from "@/utils/constants";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(words[0].text);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => setIsVisible(false), 800);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[index];

    const glitchInterval = setInterval(() => {
      const r = Math.random();
      if (r < 0.33) setDisplay(currentWord.text);
      else if (r < 0.66) setDisplay(currentWord.jp);
      else setDisplay(currentWord.ar);
    }, 100);

    const stabilizeTimeout = setTimeout(() => {
      clearInterval(glitchInterval);
      setDisplay(currentWord.text);
    }, 900);

    return () => {
      clearInterval(glitchInterval);
      clearTimeout(stabilizeTimeout);
    };
  }, [index]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 flex items-end justify-start bg-background px-6 py-12 md:px-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="absolute top-0 left-0 h-1 w-full bg-foreground/10">
            <motion.div
              className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
              initial={{ width: "0%" }}
              animate={{ width: `${((index + 1) / words.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 font-mono text-xs md:text-sm text-primary uppercase tracking-widest">
            <span className="mr-4 text-foreground">{">"}</span>
            {display}
            <span className="animate-pulse text-foreground">_</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
