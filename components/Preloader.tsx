"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { DATA } from "@/utils/constants";

const names = [
  { text: DATA.name, lang: "en", label: "HELLO / WELCOME" },
  { text: "محمد جميل شاهد", lang: "ar", label: "مرحباً / أهلاً بك" },
  { text: "モハメド・ジャミール・シャヒド", lang: "ja", label: "こんにちは / ようこそ" },
];

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("shahid-intro-v1")) return;
    } catch { /* The intro still works when storage is unavailable. */ }
    const frame = requestAnimationFrame(() => {
      setVisible(true);
      try { sessionStorage.setItem("shahid-intro-v1", "seen"); } catch { /* Storage is optional. */ }
    });
    const timers = [
      setTimeout(() => setIndex(1), 390),
      setTimeout(() => setIndex(2), 780),
      setTimeout(() => setIndex(0), 1170),
      setTimeout(() => setVisible(false), 1450),
    ];
    return () => { cancelAnimationFrame(frame); timers.forEach(clearTimeout); };
  }, []);

  return <AnimatePresence>{visible && <motion.div className="intro-loader" aria-hidden="true" initial={{ opacity: 1 }} exit={{ y: "-100%" }} transition={{ duration: .55, ease: [.76, 0, .24, 1] }}>
    <div className="intro-top"><span className="wordmark">shahid<span>.</span></span><span className="eyebrow">CODE & CRAFT</span></div>
    <div className="intro-center"><Asterisk className="intro-star" /><span className="intro-name" lang={names[index].lang} dir={names[index].lang === "ar" ? "rtl" : "ltr"} key={index}>{names[index].text}</span><span className="intro-greeting" lang={names[index].lang}>{names[index].label}</span></div>
    <div className="intro-bottom"><span className="eyebrow">THOUGHTFUL INTERFACES. RELIABLE SYSTEMS.</span><div className="intro-line"><span /></div><span className="eyebrow">TELANGANA, INDIA</span></div>
  </motion.div>}</AnimatePresence>;
}
