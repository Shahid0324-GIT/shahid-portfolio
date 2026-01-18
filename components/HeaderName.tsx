"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAMES = [
  "MOHAMMED JAMEEL SHAHID",
  "モハメド・ジャミール・シャヒド",
  "محمد جميل شاهد",
];

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&アイウエオカキクケコサシスセソタチツテトابتثجحخدذرزسشصضطظعغفقكلمنهوي";

export default function HeaderName() {
  const [text, setText] = useState(NAMES[0]);
  const [langIndex, setLangIndex] = useState(0);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="md:ml-6 lg:ml-18 font-mono text-sm font-bold tracking-widest text-primary mix-blend-difference"
    >
      <span className="mr-2 text-foreground/50">{">"}</span>
      {text}
    </motion.div>
  );
}
