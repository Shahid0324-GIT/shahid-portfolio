"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/utils/constants";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
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

  return (
    <section
      id="projects"
      className="bg-background border-t border-b border-secondary"
    >
      {/* MOBILE VIEW (Vertical List) */}
      <div className="flex flex-col gap-16 px-6 py-20 md:hidden">
        <div className="md-8 md:left-12">
          <h2 className="font-mono text-lg font-bold uppercase tracking-widest text-primary">
            {"/// PROJECT_ARCHIVE_2026"}
          </h2>
        </div>

        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative border border-secondary bg-secondary/5 p-6 overflow-hidden"
          >
            <div className="mb-4 flex items-center justify-between border-b border-secondary pb-4">
              <span className="font-mono text-4xl font-bold text-gray-500/20">
                0{i + 1}
              </span>
              <div className="flex gap-4">
                <a
                  href={project.links.repo}
                  className="text-foreground/60 hover:text-primary"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
                {project.links.live !== "" && (
                  <a
                    href={project.links.live}
                    className="text-foreground/60 hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="mb-2 font-sans text-3xl font-bold uppercase leading-tight wrap-break-word hyphens-auto">
              {project.title}
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 wrap-break-word">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="border border-secondary px-2 py-1 font-mono text-[10px] uppercase text-gray-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP VIEW (Horizontal Scroll) */}
      <div ref={containerRef} className="hidden h-[300vh] md:block relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute left-12 top-20 z-20 md:left-24">
            <h2 className="font-mono text-lg font-bold uppercase tracking-widest text-primary">
              {"/// PROJECT_ARCHIVE_2026"}
            </h2>
          </div>

          <motion.div
            ref={scrollContainerRef}
            style={{ x }}
            className="flex gap-24 pl-24 pr-24"
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className="group relative h-[60vh] w-[60vw] shrink-0 lg:w-[45vw]"
              >
                <div className="flex h-full flex-col justify-between border border-secondary bg-secondary/5 p-8 lg:p-10 transition-colors hover:border-primary/50 overflow-y-auto scrollbar-hide">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-secondary pb-4 shrink-0">
                      <span className="font-mono text-4xl font-bold text-gray-500/20 group-hover:text-primary/40 transition-colors">
                        0{i + 1}
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition-colors hover:text-primary"
                        >
                          <SiGithub className="h-6 w-6" />
                        </a>
                        {project.links.live !== "" && (
                          <a
                            href={project.links.live}
                            className="text-foreground/60 hover:text-primary"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight wrap-break-word hyphens-auto leading-none">
                      {project.title}
                    </h3>

                    <p className="max-w-md text-sm md:text-base text-gray-500 dark:text-gray-400 wrap-break-word">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-secondary px-2 py-1 font-mono text-sm md:text-base uppercase text-gray-500 whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 font-mono text-xs md:text-sm text-primary pb-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="h-1 w-1 bg-primary mt-2 shrink-0"></span>
                          <span className="wrap-break-word">
                            {">"} {highlight}
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
