"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export function Hero() {
  const scrollToMap = () => {
    document
      .querySelector("#thought-map")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-24 sm:px-10"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow mb-8"
        >
          {site.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl font-light leading-[1.05] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl font-serif text-2xl font-light italic leading-relaxed text-charcoal sm:text-3xl"
        >
          {site.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg"
        >
          {site.intro}
        </motion.p>

        <motion.button
          type="button"
          onClick={scrollToMap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="group mt-16 flex items-center gap-3 text-sm text-graphite transition-colors hover:text-ink"
        >
          <span className="hover-underline">Explore my map of thought</span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
