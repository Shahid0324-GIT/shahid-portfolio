"use client";

import { useIsDark } from "@/hooks/useIsDark";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = useIsDark();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // Use justify-start/end to position the knob — no manual x offset
      // that can overflow. Framer's `layout` prop animates between the two.
      className="group relative flex h-9 w-16 cursor-pointer items-center rounded-full p-1 transition-all duration-300"
      style={{
        justifyContent: isDark ? "flex-end" : "flex-start",
        border: `1px solid ${isDark ? "rgba(0,229,255,0.2)" : "rgba(184,149,42,0.3)"}`,
        background: isDark ? "rgba(13,13,20,0.8)" : "rgba(255,255,255,0.6)",
        boxShadow: isDark ? "0 0 12px rgba(0,229,255,0.1)" : "none",
      }}
      aria-label="Toggle Theme"
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--primary)";
        el.style.boxShadow = isDark
          ? "0 0 16px rgba(0,229,255,0.3)"
          : "0 0 16px rgba(184,149,42,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = isDark
          ? "rgba(0,229,255,0.2)"
          : "rgba(184,149,42,0.3)";
        el.style.boxShadow = isDark ? "0 0 12px rgba(0,229,255,0.1)" : "none";
      }}
    >
      {/* Label sits on the opposite side from the knob */}
      <span
        className="absolute font-mono text-[7px] tracking-widest select-none pointer-events-none"
        style={{
          color: "var(--muted)",
          left: isDark ? "6px" : "auto",
          right: isDark ? "auto" : "6px",
          opacity: 0.5,
        }}
      >
        {isDark ? "NGE" : "MCU"}
      </span>

      {/* Knob — layout animates position as justify changes */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="toggle-knob relative z-10 h-6 w-6 shrink-0 rounded-full"
        style={{
          background: "var(--primary)",
          boxShadow: isDark
            ? "0 0 8px rgba(0,229,255,0.8), 0 0 20px rgba(0,229,255,0.4)"
            : "0 0 8px rgba(184,149,42,0.5)",
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-[8px]"
          style={{
            color: isDark ? "rgba(6,6,10,0.8)" : "rgba(247,244,238,0.9)",
          }}
        >
          {isDark ? "⚡" : "✦"}
        </span>
      </motion.div>

      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
