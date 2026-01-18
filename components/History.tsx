"use client";

import { motion } from "framer-motion";
import { WORK, DATA } from "@/utils/constants";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function History() {
  return (
    <section className="relative min-h-screen bg-background px-6 py-24 md:px-12 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-secondary) 1px, transparent 1px), linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto">
        <div className="mb-16 flex items-end justify-between border-b border-secondary pb-6">
          <h2 className="font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
            Experience <span className="text-primary">Log</span>
          </h2>
          <span className="hidden font-mono text-lg text-primary md:block">
            {"/// SCROLL_TO_DECIPHER"}
          </span>
        </div>

        <div className="relative space-y-12 pl-8 md:pl-0">
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-secondary md:left-1/2 md:block" />

          {WORK.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col gap-8 md:flex-row ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute -left-9.25 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-secondary bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="flex-1">
                <div className="group relative border border-secondary bg-secondary/5 p-6 transition-colors hover:border-primary/50">
                  <span className="mb-2 block font-mono text-lg text-primary">
                    {job.period}
                  </span>
                  <h3 className="mb-1 font-sans text-2xl font-bold">
                    {job.role}
                  </h3>
                  <h4 className="mb-4 text-sm text-gray-500">{job.company}</h4>
                  <p className="mb-6 text-sm leading-relaxed text-foreground/80">
                    {job.description}
                  </p>

                  <ul
                    className={`space-y-2 font-mono text-lg text-gray-500 flex flex-col items-start ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    {job.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-left md:text-inherit"
                      >
                        <span className="block md:hidden text-primary">
                          {">"}
                        </span>

                        <span className="hidden md:block">
                          {index % 2 !== 0 && (
                            <span className="text-primary">{"> "}</span>
                          )}
                        </span>

                        {item}

                        <span className="hidden md:block">
                          {index % 2 === 0 && (
                            <span className="text-primary">{" <"}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
        {/* --- CONTACT FOOTER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-secondary pt-16"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-5xl font-bold uppercase leading-[0.9] tracking-tighter md:text-8xl">
                Let&apos;s Build <br />
                <span className="text-primary">Something</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end md:text-right w-full md:w-auto">
              <a
                href={`mailto:${DATA.email}`}
                className="group flex items-center gap-4 text-xl font-bold transition-colors hover:text-primary"
              >
                <span>{DATA.email}</span>
                <span className="text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
              <div className="flex flex-wrap gap-6 font-mono text-lg text-foreground/50 md:justify-end">
                <a
                  href="https://www.linkedin.com/in/mohammed-shahid1/"
                  className="hover:text-primary transition-colors"
                >
                  <div className="flex gap-x-2 items-center">
                    <SiLinkedin className="h-5 w-5" />
                    LINKEDIN
                  </div>
                </a>
                <a
                  href="https://github.com/Shahid0324-GIT"
                  className="hover:text-primary transition-colors"
                >
                  <div className="flex gap-x-2 items-center">
                    <SiGithub className="h-5 w-5" />
                    GITHUB
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex text-lg justify-between font-mono text-[10px] text-gray-600 uppercase">
            <span>
              © {new Date().getFullYear()} {DATA.name}
            </span>
            <span>Telangana, INDIA </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
