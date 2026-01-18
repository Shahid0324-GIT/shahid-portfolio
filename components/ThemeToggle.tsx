"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative flex h-9 w-16 cursor-pointer items-center rounded-full border border-secondary bg-background px-1 transition-colors hover:border-primary"
      aria-label="Toggle Theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`h-6 w-6 rounded-full ${
          theme === "dark" ? "bg-primary" : "bg-foreground"
        }`}
        animate={{
          x: theme === "dark" ? 28 : 0,
        }}
      >
        <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-white/20" />
      </motion.div>

      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
