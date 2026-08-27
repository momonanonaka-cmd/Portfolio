"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { thoughts, getThought } from "@/data/thoughts";
import { ThoughtNode } from "./ThoughtNode";
import { ThoughtConnections } from "./ThoughtConnections";
import { ThoughtModal } from "./ThoughtModal";
import { useThoughtMap } from "./ThoughtMapContext";
import { useMediaQuery, usePrefersReducedMotion } from "@/lib/useMediaQuery";
import { RevealText } from "../RevealText";

export function ThoughtMap() {
  const { selectedId, hoveredId, select, setHovered } = useThoughtMap();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const translateX = useTransform(springX, (v) => `${v}px`);
  const translateY = useTransform(springY, (v) => `${v}px`);

  const activeId = hoveredId ?? selectedId;
  const activeThought = useMemo(() => (activeId ? getThought(activeId) ?? null : null), [activeId]);
  const relatedIds = useMemo(() => new Set(activeThought?.related ?? []), [activeThought]);

  const handlePointerMove = (e: React.MouseEvent) => {
    if (!isDesktop || reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mvX.set(relX * -14);
    mvY.set(relY * -14);
  };

  const handlePointerLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  const selectedThought = selectedId ? getThought(selectedId) ?? null : null;

  return (
    <section
      id="thought-map"
      className="relative border-t border-hairline px-6 py-28 sm:px-10 sm:py-36"
      aria-label="Interactive map of thought"
    >
      <div className="mx-auto mb-16 max-w-7xl">
        <RevealText as="p" className="eyebrow mb-3">
          How I think
        </RevealText>
        <RevealText as="h2" delay={0.08} className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
          A Map of Thought
        </RevealText>
        <RevealText
          delay={0.16}
          className="mt-5 max-w-xl text-base leading-relaxed text-graphite"
        >
          Every point below is a subject, question, or idea that shapes how I see things.
          Hover to see how they connect. Click one to read more.
        </RevealText>
      </div>

      <motion.div
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        className="relative mx-auto aspect-[4/5] w-full max-w-6xl sm:aspect-[16/11]"
      >
        <motion.div
          style={{ x: translateX, y: translateY }}
          className="absolute inset-0"
        >
          <ThoughtConnections activeThought={activeThought} />
          {thoughts.map((thought) => {
            const isSelected = selectedId === thought.id;
            const isHovered = hoveredId === thought.id;
            const isActiveNode = activeId === thought.id;
            const isRelatedToActive = !isActiveNode && relatedIds.has(thought.id);
            const isDimmed = Boolean(activeId) && !isActiveNode && !isRelatedToActive;

            return (
              <ThoughtNode
                key={thought.id}
                thought={thought}
                isSelected={isSelected}
                isHovered={isHovered}
                isRelatedToActive={isRelatedToActive}
                isDimmed={isDimmed}
                onHover={() => setHovered(thought.id)}
                onLeave={() => setHovered(null)}
                onSelect={() => select(thought.id)}
              />
            );
          })}
        </motion.div>
      </motion.div>

      <ThoughtModal
        thought={selectedThought}
        onClose={() => select(null)}
        onNavigate={(id) => select(id)}
      />
    </section>
  );
}
