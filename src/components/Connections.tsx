"use client";

import { connections } from "@/data/connections";
import { getThought } from "@/data/thoughts";
import { goToThought, useThoughtMap } from "./ThoughtMap/ThoughtMapContext";
import { SectionHeading } from "./SectionHeading";
import { RevealText } from "./RevealText";

export function Connections() {
  const { select } = useThoughtMap();

  return (
    <section
      id="connections"
      className="border-t border-hairline px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How it fits together"
          title="Connections"
        />
        <RevealText delay={0.12} className="mt-5 max-w-xl text-base leading-relaxed text-graphite">
          A few of the pairings that keep showing up across what I&rsquo;ve studied, built, and
          worked on. Click one to see it on the map.
        </RevealText>

        <div className="mt-16 grid gap-x-8 gap-y-1 sm:grid-cols-2">
          {connections.map((c, i) => {
            const a = getThought(c.pair[0]);
            const b = getThought(c.pair[1]);
            if (!a || !b) return null;
            return (
              <RevealText key={c.id} delay={0.04 * i}>
                <button
                  type="button"
                  onClick={() => goToThought(select, a.id)}
                  className="group flex w-full items-baseline gap-3 border-b border-hairline py-6 text-left"
                >
                  <span className="font-serif text-2xl font-light text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                    {a.title}
                  </span>
                  <span aria-hidden className="text-graphite">×</span>
                  <span className="font-serif text-2xl font-light text-charcoal transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                    {b.title}
                  </span>
                </button>
              </RevealText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
