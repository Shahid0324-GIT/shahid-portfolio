"use client";
import { useState } from "react";
import Preloader from "@/components/Preloader";
import TechMarquee from "@/components/TechMarquee";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import History from "@/components/History";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen w-full selection:bg-primary selection:text-black">
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="animate-in fade-in zoom-in-95 duration-1000">
          <Hero />

          <TechMarquee />

          <Projects />

          <History />
        </div>
      )}
    </main>
  );
}
