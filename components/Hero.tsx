"use client";

import { motion } from "framer-motion";
import { DATA, SOCIALS } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function Hero() {
  const [coords, setCoords] = useState({ lat: "18.75", lng: "79.51" });
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (error) => {
          console.log("Loc access denied or redundant on mobile");
        },
      );
    }
  }, []);

  return (
    <section className="relative flex min-h-dvh flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="z-10 grid w-full max-w-[80dvw] grid-cols-1 items-center gap-12 lg:gap-20 lg:grid-cols-2">
        <div className="max-w-4xl order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary/30 px-3 py-1 text-xs font-mono text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            SYSTEM STATUS: ONLINE / BASED IN{" "}
            {DATA.location.split(",")[0].toUpperCase()}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {DATA.name.split(" ")[0].toUpperCase()}
            <span className="text-foreground/40">
              {" "}
              {DATA.name.split(" ")[2].toUpperCase()}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-2xl text-xl text-gray-500 md:text-3xl dark:text-gray-400"
          >
            <span className="text-primary">{DATA.role}</span> obsessed with
            performance. <br className="hidden md:block" />
            Building minimalist systems with Next.js & Python.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden bg-foreground px-8 py-3 text-sm font-bold text-background transition-transform hover:scale-105"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0" />
            </a>

            <a
              href={SOCIALS.resumePdf || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-foreground/20 px-8 py-3 text-sm font-bold text-foreground transition-colors hover:bg-foreground/10"
            >
              RESUME_V2.0.PDF
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative hidden h-full min-h-125 w-full items-center justify-end lg:flex lg:translate-x-16 order-1 lg:order-2"
        >
          {/* ORBIT 1: Dark orbits in light mode */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute size-150 rounded-full border-2 border-dashed border-secondary"
          >
            {/* Planets: Vibrant colors - aligned on orbit */}
            <div className="absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 dark:bg-blue-400 shadow-lg" />
            <div className="absolute bottom-0 right-1/2 h-3 w-3 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500 dark:bg-purple-400 shadow-md" />
          </motion.div>

          {/* ORBIT 2: Dark orbits in light mode */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute size-100 rounded-full border-2 border-secondary"
          >
            <div className="absolute top-1/2 left-0 h-6 w-1 -translate-y-1/2 -translate-x-1/2 bg-primary shadow-md" />
            <div className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 translate-x-1/2 bg-orange-500 dark:bg-orange-400 rounded-full shadow-md" />
          </motion.div>

          {/* ORBIT 3: Inner ring dark in light mode */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute size-78 rounded-full border animate-pulse duration-200 border-green-500/50"
          />

          <div className="absolute z-10 flex flex-col items-center justify-center rounded-full dark:bg-black p-6 border border-neutral-950 dark:border-white/20">
            <div className="mb-2 h-3 w-3 animate-pulse rounded-full bg-primary" />

            <span className="font-mono text-sm font-bold text-gray-900 dark:text-gray-300 tracking-widest">
              {isUserLoc ? "USER_LOC_DETECTED" : "BASE_LOC_ACTIVE"}
            </span>

            <span className="mt-1 font-mono text-2xl font-bold text-gray-900 dark:text-foreground">
              {coords.lat}° N, {coords.lng}° E
            </span>

            <span className="mt-1 text-xs text-primary font-bold tracking-tighter">
              SECURE_CONNECTION_ESTABLISHED
            </span>
          </div>

          <div className="absolute h-full w-px bg-linear-to-b from-transparent via-neutral-950/20 dark:via-white/10 to-transparent" />
          <div className="absolute w-full h-px bg-linear-to-r from-transparent via-neutral-950/20 dark:via-white/10 to-transparent" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 hidden w-full justify-start gap-8 px-6 font-mono text-xs text-gray-500 md:flex md:px-12 lg:px-24"
      >
        <span>EXP: {DATA.experience}</span>
        <span>STACK: NEXT.JS / BUN / TAILWIND</span>
        <span>VER: 2026.1.0</span>
      </motion.div>
    </section>
  );
}
