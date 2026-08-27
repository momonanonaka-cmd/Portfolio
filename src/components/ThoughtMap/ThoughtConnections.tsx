"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getThought, type Thought } from "@/data/thoughts";

export function ThoughtConnections({
  activeThought,
}: {
  activeThought: Thought | null;
}) {
  const lines = activeThought
    ? activeThought.related
        .map((id) => getThought(id))
        .filter((t): t is Thought => Boolean(t))
    : [];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <AnimatePresence>
        {activeThought &&
          lines.map((target) => (
            <motion.line
              key={`${activeThought.id}-${target.id}`}
              x1={activeThought.x}
              y1={activeThought.y}
              x2={target.x}
              y2={target.y}
              stroke="var(--color-graphite)"
              strokeWidth={0.12}
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 0.55, pathLength: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
      </AnimatePresence>
    </svg>
  );
}
