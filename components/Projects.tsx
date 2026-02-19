"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/utils/constants";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useIsDark } from "@/hooks/useIsDark";

export default function Projects() {
  const isDark = useIsDark();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const scrollAmount =
          scrollContainerRef.current.scrollWidth - window.innerWidth;
        setScrollWidth(scrollAmount > 0 ? scrollAmount : 0);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  const sectionLabel = isDark
    ? "// MISSION_ARCHIVE_2026"
    : "/// PROJECT DOSSIER — 2026";

  const cardBg = isDark ? "rgba(13,13,20,0.8)" : "rgba(255,255,255,0.5)";
  const cardBorder = isDark ? "rgba(0,229,255,0.1)" : "rgba(184,149,42,0.2)";
  const cardHoverBorder = isDark
    ? "rgba(0,229,255,0.45)"
    : "rgba(184,149,42,0.6)";
  const cardHoverShadow = isDark
    ? "0 0 30px rgba(0,229,255,0.08), 0 0 80px rgba(0,229,255,0.03)"
    : "0 8px 40px rgba(184,149,42,0.12), 0 2px 8px rgba(0,0,0,0.05)";

  return (
    <section
      id="projects"
      className="bg-background border-t border-b"
      style={{
        borderColor: isDark ? "rgba(0,229,255,0.08)" : "rgba(184,149,42,0.15)",
      }}
    >
      <div className="flex flex-col gap-12 px-6 py-20 md:hidden">
        <div>
          <h2
            className="font-mono text-sm font-bold uppercase tracking-widest"
            style={{
              color: "var(--primary)",
              textShadow: isDark ? "0 0 10px rgba(0,229,255,0.4)" : "none",
            }}
          >
            {sectionLabel}
          </h2>
        </div>

        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative overflow-hidden border p-6 transition-all duration-300"
            style={{
              background: cardBg,
              borderColor: cardBorder,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cardHoverBorder;
              e.currentTarget.style.boxShadow = cardHoverShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = cardBorder;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{
                background: isDark
                  ? "linear-gradient(90deg, var(--primary), var(--accent))"
                  : "linear-gradient(90deg, var(--primary), var(--accent))",
              }}
            />

            <div
              className="mb-4 flex items-center justify-between border-b pb-4"
              style={{ borderColor: cardBorder }}
            >
              <span
                className="font-mono text-4xl font-bold transition-colors duration-300"
                style={{
                  color: isDark
                    ? "rgba(0,229,255,0.12)"
                    : "rgba(184,149,42,0.18)",
                }}
              >
                0{i + 1}
              </span>
              <div className="flex gap-4">
                <a
                  href={project.links.repo}
                  className="transition-all duration-200"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--muted)";
                  }}
                >
                  <SiGithub className="h-5 w-5" />
                </a>
                {project.links.live !== "" && (
                  <a
                    href={project.links.live}
                    className="transition-all duration-200"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--muted)";
                    }}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <h3
              className="mb-2 font-sans text-3xl font-bold uppercase leading-tight hyphens-auto"
              style={{ color: "var(--foreground)" }}
            >
              {project.title}
            </h3>
            <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border px-2 py-1 font-mono text-[10px] uppercase"
                  style={{
                    borderColor: isDark
                      ? "rgba(0,229,255,0.12)"
                      : "rgba(184,149,42,0.2)",
                    color: "var(--muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div ref={containerRef} className="hidden h-[300vh] md:block relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute left-12 top-16 z-20 md:left-24">
            <h2
              className="font-mono text-sm md:text-lg font-bold uppercase tracking-widest"
              style={{
                color: "var(--primary)",
                textShadow: isDark ? "0 0 12px rgba(0,229,255,0.5)" : "none",
              }}
            >
              {sectionLabel}
            </h2>
            {isDark && (
              <div
                className="mt-1 h-px w-48"
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary), transparent)",
                  opacity: 0.4,
                }}
              />
            )}
          </div>

          <motion.div
            ref={scrollContainerRef}
            style={{ x }}
            className="flex gap-20 pl-24 pr-24"
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className="group project-card-hover relative h-[60vh] w-[60vw] shrink-0 lg:w-[45vw]"
              >
                <div
                  className="relative flex h-full flex-col justify-between border p-8 lg:p-10 overflow-y-auto scrollbar-hide transition-all duration-400"
                  style={{
                    background: cardBg,
                    borderColor: cardBorder,
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = cardHoverBorder;
                    e.currentTarget.style.boxShadow = cardHoverShadow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = cardBorder;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: isDark
                        ? "linear-gradient(90deg, var(--primary), var(--accent), var(--accent-2))"
                        : "linear-gradient(90deg, var(--primary), var(--accent))",
                    }}
                  />

                  {isDark && (
                    <div
                      className="absolute bottom-0 right-0 h-8 w-8 border-b border-r opacity-30 group-hover:opacity-60 transition-opacity"
                      style={{ borderColor: "var(--accent)" }}
                    />
                  )}

                  <div className="space-y-4">
                    <div
                      className="flex items-center justify-between border-b pb-4 shrink-0"
                      style={{ borderColor: cardBorder }}
                    >
                      <span
                        className="project-num font-mono text-4xl font-bold transition-colors duration-300"
                        style={{
                          color: isDark
                            ? "rgba(0,229,255,0.12)"
                            : "rgba(184,149,42,0.18)",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-200"
                          style={{ color: "var(--muted)" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--primary)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--muted)";
                          }}
                        >
                          <SiGithub className="h-6 w-6" />
                        </a>
                        {project.links.live !== "" && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-200"
                            style={{ color: "var(--muted)" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--primary)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--muted)";
                            }}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3
                      className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight hyphens-auto leading-none"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="max-w-md text-sm md:text-base"
                      style={{ color: "var(--muted)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border px-2 py-1 font-mono text-xs uppercase whitespace-nowrap"
                          style={{
                            borderColor: isDark
                              ? "rgba(0,229,255,0.12)"
                              : "rgba(184,149,42,0.2)",
                            color: "var(--muted)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 font-mono text-xs md:text-sm pb-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span
                            className="h-1.5 w-1.5 mt-1.5 shrink-0 rounded-full"
                            style={{
                              background: "var(--primary)",
                              boxShadow: isDark
                                ? "0 0 6px var(--primary)"
                                : "none",
                            }}
                          />
                          <span
                            style={{
                              color: isDark
                                ? "rgba(0,229,255,0.7)"
                                : "var(--accent)",
                            }}
                          >
                            {">"}{" "}
                          </span>
                          <span style={{ color: "var(--muted)" }}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
