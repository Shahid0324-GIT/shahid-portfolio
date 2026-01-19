"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/utils/constants";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      id="projects"
      className="bg-background border-t border-b border-secondary"
    >
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
            className="group relative border border-secondary bg-secondary/5 p-6"
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
                <a
                  href={project.links.live}
                  className="text-foreground/60 hover:text-primary"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h3 className="mb-2 font-sans text-3xl font-bold uppercase leading-none">
              {project.title}
            </h3>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
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
      <div ref={containerRef} className="hidden h-[300vh] md:block relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute left-12 top-20 z-20 md:left-24">
            <h2 className="font-mono text-lg font-bold uppercase tracking-widest text-primary">
              {"/// PROJECT_ARCHIVE_2026"}
            </h2>
          </div>

          <motion.div style={{ x }} className="flex gap-24 pl-20">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className="group relative h-[60vh] w-[60vw] shrink-0 lg:w-[45vw]"
              >
                <div className="flex h-full flex-col justify-between border border-secondary bg-secondary/5 p-10 transition-colors hover:border-primary/50">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-secondary pb-4">
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
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 transition-colors hover:text-primary"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      </div>
                    </div>

                    <h3 className="font-sans text-5xl font-bold uppercase tracking-tight">
                      {project.title}
                    </h3>

                    <p className="max-w-md text-base text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-secondary px-2 py-1 font-mono text-lg uppercase text-gray-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 font-mono text-sm text-primary">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-primary"></span>
                          {">"} {highlight}
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
