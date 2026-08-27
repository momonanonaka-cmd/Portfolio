import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThoughtMap } from "@/components/ThoughtMap/ThoughtMap";
import { ThoughtMapProvider } from "@/components/ThoughtMap/ThoughtMapContext";
import { LightboxProvider } from "@/components/Lightbox/LightboxContext";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";
import { Connections } from "@/components/Connections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThoughtMapProvider>
      <LightboxProvider>
        <Navbar />
        <main id="main">
          <Hero />
          <ThoughtMap />
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Connections />
          <Contact />
        </main>
        <Footer />
      </LightboxProvider>
    </ThoughtMapProvider>
  );
}
