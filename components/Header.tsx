"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

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
              if (index < iterations) {
                return target[index];
              }
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
      className={`fixed top-0 z-50 flex w-full items-center justify-between py-3 md:px-12 px-4 pointer-events-none transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-background/10" : ""
      }`}
    >
      <div className="pointer-events-auto md:ml-0 lg:ml-12 font-mono text-sm font-bold tracking-widest text-primary mix-blend-difference">
        <span className="mr-2 text-foreground/50">{">"}</span>
        {text}
      </div>

      <div className="pointer-events-auto">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
