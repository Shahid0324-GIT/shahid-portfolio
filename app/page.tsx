import Hero from "@/components/Hero";
import About from "@/components/About";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import History from "@/components/History";
import Contact from "@/components/Contact";

export default function Home() {
  return <main id="top"><Hero /><About /><TechMarquee /><Projects /><History /><Contact /></main>;
}
