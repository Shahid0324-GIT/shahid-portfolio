"use client";

import { motion } from "framer-motion";
import { WORK, DATA } from "@/utils/constants";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useIsDark } from "@/hooks/useIsDark";

export default function History() {
  const isDark = useIsDark();

  const borderColor = isDark ? "rgba(0,229,255,0.08)" : "rgba(184,149,42,0.15)";
  const cardBg = isDark ? "rgba(13,13,20,0.7)" : "rgba(255,255,255,0.5)";
  const cardBorder = isDark ? "rgba(0,229,255,0.1)" : "rgba(184,149,42,0.2)";
  const cardHoverBorder = isDark
    ? "rgba(0,229,255,0.35)"
    : "rgba(184,149,42,0.5)";

  return (
    <section className="relative min-h-screen bg-background px-6 py-24 md:px-12 lg:px-24">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)"
            : "linear-gradient(rgba(184,149,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,42,0.06) 1px, transparent 1px)",
          backgroundSize: isDark ? "40px 40px" : "60px 60px",
          opacity: 1,
        }}
      />

      {isDark && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='69' viewBox='0 0 60 69'%3E%3Cpath d='M30 3 L57 17 L57 52 L30 66 L3 52 L3 17 Z' fill='none' stroke='rgba(123,45,139,0.05)' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 69px",
          }}
        />
      )}

      {isDark && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 z-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(230,57,70,0.08) 0%, rgba(123,45,139,0.05) 40%, transparent 70%)",
          }}
        />
      )}

      {!isDark && (
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-150 h-100 z-0"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(26,107,74,0.06) 0%, rgba(184,149,42,0.04) 40%, transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 mx-auto">
        <div
          className="mb-16 flex items-end justify-between border-b pb-6"
          style={{ borderColor }}
        >
          <h2 className="font-sans text-4xl font-bold uppercase tracking-tighter md:text-6xl">
            {isDark ? (
              <>
                <span style={{ color: "var(--foreground)" }}>Experience</span>{" "}
                <span
                  style={{
                    color: "var(--primary)",
                    textShadow:
                      "0 0 20px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.15)",
                  }}
                >
                  Log
                </span>
              </>
            ) : (
              <>
                Experience{" "}
                <span style={{ color: "var(--primary)" }}>Chronicle</span>
              </>
            )}
          </h2>
          <span
            className="hidden font-mono text-sm md:block"
            style={{ color: "var(--muted)" }}
          >
            {isDark ? "// MISSION_HISTORY_DECRYPTED" : "/// SCROLL TO DECIPHER"}
          </span>
        </div>

        <div className="relative space-y-12 pl-8 md:pl-0">
          <div
            className="absolute left-0 top-0 bottom-0 hidden w-px md:left-1/2 md:block"
            style={{
              background: isDark
                ? "linear-gradient(180deg, rgba(0,229,255,0.4) 0%, rgba(123,45,139,0.3) 50%, rgba(230,57,70,0.2) 100%)"
                : "linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%)",
              opacity: isDark ? 0.5 : 0.4,
              boxShadow: isDark ? "0 0 8px rgba(0,229,255,0.2)" : "none",
            }}
          />

          {WORK.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col gap-8 md:flex-row ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              }`}
            >
              <div
                className="absolute -left-9.5 top-0 flex h-4 w-4 items-center justify-center rounded-full border md:left-1/2 md:-translate-x-1/2"
                style={{
                  borderColor: "var(--primary)",
                  background: "var(--background)",
                  boxShadow: isDark
                    ? "0 0 12px rgba(0,229,255,0.6), 0 0 24px rgba(0,229,255,0.2)"
                    : "0 0 0 4px rgba(184,149,42,0.15)",
                }}
              >
                <div
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{
                    background: "var(--primary)",
                    boxShadow: isDark ? "0 0 6px var(--primary)" : "none",
                  }}
                />
              </div>

              <div className="flex-1">
                <div
                  className="group relative border p-6 transition-all duration-300"
                  style={{ background: cardBg, borderColor: cardBorder }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = cardHoverBorder;
                    e.currentTarget.style.boxShadow = isDark
                      ? "0 0 20px rgba(0,229,255,0.08), -4px 0 20px rgba(0,229,255,0.05)"
                      : "0 4px 30px rgba(184,149,42,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = cardBorder;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Card top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      background: isDark
                        ? "linear-gradient(90deg, var(--primary), var(--accent-2))"
                        : "linear-gradient(90deg, var(--primary), var(--accent))",
                    }}
                  />

                  {/* Period */}
                  <span
                    className="mb-2 block font-mono text-sm"
                    style={{
                      color: "var(--primary)",
                      textShadow: isDark
                        ? "0 0 8px rgba(0,229,255,0.4)"
                        : "none",
                    }}
                  >
                    {job.period}
                  </span>

                  <h3
                    className="mb-1 font-sans text-2xl font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {job.role}
                  </h3>
                  <h4
                    className="mb-4 text-sm font-mono"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.company}
                  </h4>
                  <p
                    className="mb-6 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.description}
                  </p>

                  <ul
                    className={`space-y-2 font-mono text-sm flex flex-col items-start ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
                  >
                    {job.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-left md:text-inherit"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          className="block md:hidden"
                          style={{ color: "var(--primary)" }}
                        >
                          {">"}
                        </span>

                        <span className="hidden md:block">
                          {index % 2 !== 0 && (
                            <span
                              style={{
                                color: "var(--primary)",
                                textShadow: isDark
                                  ? "0 0 6px rgba(0,229,255,0.5)"
                                  : "none",
                              }}
                            >
                              {">"}{" "}
                            </span>
                          )}
                        </span>

                        {item}

                        <span className="hidden md:block">
                          {index % 2 === 0 && (
                            <span
                              style={{
                                color: "var(--primary)",
                                textShadow: isDark
                                  ? "0 0 6px rgba(0,229,255,0.5)"
                                  : "none",
                              }}
                            >
                              {" <"}
                            </span>
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 border-t pt-16"
          style={{ borderColor }}
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-sans text-5xl font-bold uppercase leading-[0.9] tracking-tighter md:text-8xl">
                {isDark ? (
                  <>
                    <span style={{ color: "var(--foreground)" }}>
                      Let&apos;s Build
                    </span>
                    <br />
                    <span
                      style={{
                        color: "var(--primary)",
                        textShadow:
                          "0 0 30px rgba(0,229,255,0.3), 0 0 80px rgba(0,229,255,0.1)",
                      }}
                      className="neon-flicker"
                    >
                      Something
                    </span>
                  </>
                ) : (
                  <>
                    Let&apos;s Build
                    <br />
                    <span style={{ color: "var(--primary)" }}>Something</span>
                  </>
                )}
              </h2>
            </div>

            <div className="flex flex-col gap-4 items-start md:items-end md:text-right w-full md:w-auto">
              <a
                href={`mailto:${DATA.email}`}
                className="group flex items-center gap-4 text-xl font-bold transition-all duration-200"
                style={{ color: "var(--foreground)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--foreground)";
                }}
              >
                <span>{DATA.email}</span>
                <span
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{ color: "var(--primary)" }}
                >
                  ↗
                </span>
              </a>

              <div
                className="flex flex-wrap gap-6 font-mono text-sm md:justify-end"
                style={{ color: "var(--muted)" }}
              >
                <a
                  href="https://www.linkedin.com/in/mohammed-shahid1/"
                  className="flex items-center gap-2 transition-all duration-200"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--muted)";
                  }}
                >
                  <SiLinkedin className="h-4 w-4" />
                  LINKEDIN
                </a>
                <a
                  href="https://github.com/Shahid0324-GIT"
                  className="flex items-center gap-2 transition-all duration-200"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--muted)";
                  }}
                >
                  <SiGithub className="h-4 w-4" />
                  GITHUB
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-between font-mono text-[10px] text-gray-600 uppercase">
            <span>
              © {new Date().getFullYear()} {DATA.name}
            </span>
            <span
              style={{ color: isDark ? "rgba(0,229,255,0.3)" : "var(--muted)" }}
            >
              {isDark
                ? "MAGI.SYS // TELANGANA, INDIA"
                : "Telangana, INDIA // STARK.NET"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
