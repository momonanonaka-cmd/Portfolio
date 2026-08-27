"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { RevealText } from "./RevealText";
import { cn } from "@/lib/utils";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="experience" className="border-t border-hairline px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Where I've worked" title="Experience" />

        <div className="mt-16 border-t border-hairline">
          {experience.map((entry, i) => {
            const open = openId === entry.id;
            return (
              <RevealText key={entry.id} delay={0.04 * i} as="div">
                <div className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : entry.id)}
                    aria-expanded={open}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-4 py-7 text-left sm:grid-cols-[7rem_1fr_auto] sm:gap-8"
                  >
                    <span className="eyebrow hidden sm:block">{entry.year}</span>
                    <span>
                      <span className="block font-serif text-2xl font-light text-ink sm:text-3xl">
                        {entry.company}
                      </span>
                      <span className="mt-1 block text-sm text-graphite">
                        {entry.role} · {entry.location}
                      </span>
                      <span className="eyebrow mt-1 block sm:hidden">{entry.year}</span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "font-light text-graphite transition-transform duration-300",
                        open && "rotate-45"
                      )}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-2xl pb-8 pl-0 sm:pl-[7.5rem]">
                          <p className="text-base leading-relaxed text-charcoal">
                            {entry.description}
                          </p>
                          {entry.details && (
                            <p className="mt-4 text-sm leading-relaxed text-graphite">
                              {entry.details}
                            </p>
                          )}

                          {entry.video && (
                            <video
                              src={entry.video}
                              controls
                              playsInline
                              preload="metadata"
                              className="mt-6 w-full max-w-sm border border-hairline bg-ink"
                            />
                          )}

                          {entry.externalLink && (
                            <a
                              href={entry.externalLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover-underline mt-4 inline-block text-sm text-ink"
                            >
                              {entry.externalLink.label} ↗
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
