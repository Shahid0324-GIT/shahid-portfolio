"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsDark } from "@/hooks/useIsDark";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const isDark = useIsDark();
  return <button className="theme-toggle" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>;
}
