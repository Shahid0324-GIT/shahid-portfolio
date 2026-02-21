"use client";

import { motion } from "framer-motion";
import { DATA, SOCIALS } from "@/utils/constants";
import { useEffect, useState } from "react";
import { useIsDark } from "@/hooks/useIsDark";

export default function Hero() {
  const isDark = useIsDark();
  const [coords, setCoords] = useState({ lat: "17.38", lng: "78.49" });
  const [isUserLoc, setIsUserLoc] = useState(false);

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (isLargeScreen && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude.toFixed(2),
            lng: position.coords.longitude.toFixed(2),
          });
          setIsUserLoc(true);
        },
        () => console.log("Loc access denied"),
      );
    }
  }, []);

  return (
    <section className="relative flex min-h-dvh flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="mcu-grid-bg pointer-events-none absolute inset-0 z-0" />
      <div className="mcu-hex-bg pointer-events-none absolute inset-0 z-0" />

      {!isDark && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(184,149,42,0.07) 0%, rgba(26,107,74,0.04) 40%, transparent 70%)",
          }}
        />
      )}
      {isDark && (
        <>
          <div className="at-field-overlay pointer-events-none absolute inset-0 z-0" />
          <div className="gits-surface pointer-events-none absolute inset-0 z-0" />
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(230,57,70,0.08) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      <div className="z-10 grid w-full max-w-[85dvw] grid-cols-1 items-center gap-12 lg:gap-20 lg:grid-cols-2">
        <div className="max-w-4xl order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="status-badge mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="status-dot absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="status-dot relative inline-flex h-2 w-2 rounded-full" />
            </span>
            {isDark ? "// SYSTEM ONLINE — " : "PROTOCOL ACTIVE — "}
            {DATA.location.split(",")[0].toUpperCase()}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {isDark ? (
              <>
                <span
                  className="neon-flicker"
                  style={{
                    color: "var(--primary)",
                    textShadow:
                      "0 0 20px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.15)",
                  }}
                >
                  {DATA.name.split(" ")[0].toUpperCase()}
                </span>
                <span style={{ color: "rgba(230,57,70,0.7)" }}>
                  {" "}
                  {DATA.name.split(" ")[2].toUpperCase()}
                </span>
              </>
            ) : (
              <>
                {DATA.name.split(" ")[0].toUpperCase()}
                <span style={{ color: "var(--primary)" }}>
                  {" "}
                  {DATA.name.split(" ")[2].toUpperCase()}
                </span>
              </>
            )}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`mt-6 max-w-2xl text-xl md:text-3xl ${isDark ? "neon-text" : ""}`}
            style={isDark ? {} : { color: "var(--muted)" }}
          >
            <span style={{ color: "var(--primary)" }}>{DATA.role}</span>{" "}
            {isDark
              ? "obsessed with performance."
              : "architecting digital worlds."}{" "}
            <br className="hidden md:block" />
            {isDark
              ? "Next.js × FastAPI × Neon architectures."
              : "Building with Next.js & Python — precision over flash."}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className={`group relative overflow-hidden px-8 py-3 text-sm font-bold transition-all duration-300 ${!isDark ? "mcu-btn-primary" : ""}`}
              style={
                isDark
                  ? {
                      background: "var(--foreground)",
                      color: "var(--background)",
                    }
                  : {}
              }
            >
              <span className="relative z-10">
                {isDark ? "// VIEW_PROJECTS" : "VIEW PROJECTS"}
              </span>
              {isDark && (
                <div
                  className="absolute inset-0 z-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                  style={{ background: "var(--primary)" }}
                />
              )}
            </a>

            <a
              href={SOCIALS.resumePdf || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border px-8 py-3 text-sm font-bold transition-all duration-300 hover:border-primary"
              style={{
                borderColor: "var(--secondary)",
                color: "var(--foreground)",
              }}
            >
              {isDark ? "RESUME_V2.0.PDF ↗" : "RESUME_V2.0.PDF"}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden h-full min-h-125 w-full items-center justify-end lg:flex lg:translate-x-16 order-1 lg:order-2"
        >
          {/* Cross-hair lines */}
          <div
            className="absolute h-full w-px"
            style={{
              background: `linear-gradient(180deg, transparent, ${isDark ? "rgba(0,229,255,0.12)" : "rgba(184,149,42,0.12)"}, transparent)`,
            }}
          />
          <div
            className="absolute w-full h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${isDark ? "rgba(0,229,255,0.12)" : "rgba(184,149,42,0.12)"}, transparent)`,
            }}
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="orbit-ring absolute size-150 rounded-full border-2 border-dashed"
          >
            <div className="orbit-planet-1 absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="orbit-planet-2 absolute bottom-0 right-1/2 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="orbit-ring orbit-reverse absolute size-100 rounded-full border"
          >
            <div className="orbit-dash absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 -translate-x-1/2" />
            <div className="orbit-planet-2 absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="orbit-ring-solid orbit absolute size-77.5 rounded-full border animate-pulse"
          />

          <div className="hero-center-node border-glow-pulse absolute z-10 flex flex-col items-center justify-center rounded-full p-8 min-w-55 min-h-55">
            <div
              className="mb-2 h-3 w-3 animate-pulse rounded-full"
              style={{
                background: "var(--primary)",
                boxShadow: "0 0 10px var(--primary)",
              }}
            />
            <span
              className="font-mono text-xs font-bold tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              {isUserLoc
                ? isDark
                  ? "USER_SIGNAL_LOCKED"
                  : "AGENT LOCATED"
                : isDark
                  ? "BASE_SIGNAL_ACTIVE"
                  : "STARK TOWER UPLINK"}
            </span>
            <span
              className="mt-1 font-mono text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {coords.lat}° N
            </span>
            <span
              className="font-mono text-xl font-bold"
              style={{ color: "var(--foreground)" }}
            >
              {coords.lng}° E
            </span>
            <span
              className="mt-2 text-xs font-bold tracking-tighter font-mono"
              style={{ color: "var(--primary)" }}
            >
              {isDark ? "SECURE_CHANNEL_OPEN" : "CLEARANCE: LEVEL 7"}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 hidden w-full justify-start gap-8 px-6 font-mono text-xs md:flex md:px-12 lg:px-24"
        style={{ color: "var(--muted)" }}
      >
        <span>EXP: {DATA.experience}</span>
        <span>STACK: NEXT.JS / BUN / TAILWIND</span>
        <span>{isDark ? "VER: 2026.1.0-NEON" : "PROTOCOL: STARK.2026.1"}</span>
      </motion.div>
    </section>
  );
}
