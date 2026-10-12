import { ArrowDown, ArrowUpRight, Asterisk, Code2 } from "lucide-react";
import { DATA } from "@/utils/constants";
const keys = ["esc", "1", "2", "3", "4", "5", "6", "7", "tab", "Q", "W", "E", "R", "T", "Y", "U", "caps", "A", "S", "D", "F", "G", "H", "J", "shift", "Z", "X", "C", "V", "B", "N", "↵"];
export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-sky" aria-hidden="true" />
    <svg className="hero-thread" viewBox="0 0 1440 850" fill="none" aria-hidden="true"><path d="M-80 440C250 55 25 1020 470 650S1000 180 1035 490 1350 900 1520 300" stroke="currentColor" strokeWidth="1.5" /></svg>
    <div className="keyboard-object" aria-hidden="true"><div className="keyboard-brand">BUILT WITH CURIOSITY</div><div className="keyboard-keys">{keys.map((key, i) => <span className={i === 0 || key === "↵" ? "key-accent" : ""} key={i}>{key}</span>)}</div><div className="keyboard-space"><span>ctrl</span><span /><span>alt</span></div></div>
    <div className="code-object" aria-hidden="true"><div className="code-object-top"><span /><span /><span /><small>hello.ts</small></div><code><span>const</span> engineer = &#123;<br />&nbsp; name: <em>&apos;Shahid&apos;</em>,<br />&nbsp; builds: <em>&apos;useful things&apos;</em>,<br />&nbsp; curiosity: <strong>Infinity</strong><br />&#125;;</code><Code2 size={28} /></div>
    <div className="hero-content"><p className="eyebrow hero-eyebrow"><span className="status-dot" /> FULLSTACK ENGINEER · TELANGANA, INDIA</p><h1 id="hero-title">CODE <span className="hero-amp">&</span><br /><span className="hero-craft">CRAFT<Asterisk aria-hidden="true" /></span></h1><p className="hero-description">Thoughtful interfaces. Reliable systems.<br />I&apos;m Shahid. I build the whole experience.</p><a className="pill-link" href="#projects">Explore my work <ArrowDown size={17} /></a></div>
    <div className="hero-note" aria-hidden="true"><span>FROM IDEA</span><ArrowUpRight size={36} /><span>TO SOMETHING REAL.</span></div>
    <div className="hero-bottom"><span>{DATA.name}</span><span>SCROLL TO DISCOVER <ArrowDown size={13} /></span><span>DESIGNED WITH INTENT. BUILT WITH CARE.</span></div>
  </section>;
}
