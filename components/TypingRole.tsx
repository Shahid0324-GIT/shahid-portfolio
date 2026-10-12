"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Software Engineer",
  "Curious Problem Solver",
  "Thoughtful Builder",
  "Performance Focused",
];

export default function TypingRole() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let roleIndex = 0;
    let characterIndex = roles[0].length;
    let deleting = true;

    const tick = () => {
      const role = roles[roleIndex];
      characterIndex += deleting ? -1 : 1;
      setText(role.slice(0, characterIndex));

      if (deleting && characterIndex === 0) {
        roleIndex = (roleIndex + 1) % roles.length;
        deleting = false;
        timer = setTimeout(tick, 300);
      } else if (!deleting && characterIndex === role.length) {
        deleting = true;
        timer = setTimeout(tick, 1800);
      } else {
        timer = setTimeout(tick, deleting ? 35 : 80);
      }
    };

    const start = () => {
      if (!motionPreference.matches) timer = setTimeout(tick, 1800);
    };
    const onMotionChange = () => {
      clearTimeout(timer);
      roleIndex = 0;
      characterIndex = roles[0].length;
      deleting = true;
      setText(roles[0]);
      start();
    };

    start();
    motionPreference.addEventListener("change", onMotionChange);
    return () => {
      clearTimeout(timer);
      motionPreference.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <span className="typing-role muted">
    <span className="sr-only">{roles.join(", ")}.</span>
    <span className="typing-animated" aria-hidden="true">{text}<span className="typing-cursor" /></span>
    <span className="typing-static" aria-hidden="true">{roles[0]}</span>
  </span>;
}
