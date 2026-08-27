"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Thought } from "@/data/thoughts";
import { cn } from "@/lib/utils";
import { CATEGORY_COLOR, withAlpha } from "./categoryStyles";

const SIZE_STYLES: Record<Thought["size"], { diameter: string; font: string; baseOpacity: number }> = {
  large: { diameter: "clamp(58px, 7.4vw, 104px)", font: "clamp(0.85rem, 1.1vw, 1.05rem)", baseOpacity: 1 },
  medium: { diameter: "clamp(34px, 4.6vw, 60px)", font: "clamp(0.68rem, 0.85vw, 0.8rem)", baseOpacity: 0.85 },
  small: { diameter: "clamp(16px, 2.2vw, 30px)", font: "clamp(0.6rem, 0.72vw, 0.7rem)", baseOpacity: 0.55 },
};

// Deterministic pseudo-random values per id, so server and client render identically.
function hashToRange(id: string, min: number, max: number) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  const t = (h % 1000) / 1000;
  return min + t * (max - min);
}

export function ThoughtNode({
  thought,
  isSelected,
  isHovered,
  isRelatedToActive,
  isDimmed,
  onHover,
  onLeave,
  onSelect,
}: {
  thought: Thought;
  isSelected: boolean;
  isHovered: boolean;
  isRelatedToActive: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}) {
  const sizing = SIZE_STYLES[thought.size];
  const driftX = hashToRange(thought.id, 5, 12);
  const driftY = hashToRange(thought.id, 6, 14);
  const driftDuration = hashToRange(thought.id, 12, 22);
  const driftDelay = hashToRange(thought.id + "-d", 0, 8);

  const active = isSelected || isHovered;
  const showLabel = thought.size === "large" || active || isRelatedToActive;
  const color = CATEGORY_COLOR[thought.category];

  const style: CSSProperties = {
    left: `${thought.x}%`,
    top: `${thought.y}%`,
    ["--drift-x" as string]: `${driftX}px`,
    ["--drift-y" as string]: `${driftY}px`,
    ["--drift-duration" as string]: `${driftDuration}s`,
    ["--drift-delay" as string]: `${driftDelay}s`,
  };

  return (
    <div
      className="animate-drift absolute -translate-x-1/2 -translate-y-1/2"
      style={style}
    >
      <motion.button
        type="button"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        onClick={onSelect}
        aria-label={`${thought.title} — open`}
        aria-expanded={isSelected}
        animate={{
          scale: active ? 1.22 : 1,
          opacity: isDimmed ? 0.18 : sizing.baseOpacity,
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex cursor-pointer items-center justify-center rounded-full"
        style={{ width: sizing.diameter, height: sizing.diameter }}
      >
        <span
          className="absolute inset-0 rounded-full border transition-colors duration-300"
          style={{
            borderColor: active ? color : withAlpha(color, 0.4),
            backgroundColor: withAlpha(color, active ? 0.16 : 0.08),
          }}
        />
        {isSelected && (
          <motion.span
            layoutId="thought-node-ring"
            className="absolute -inset-2 rounded-full border border-accent/60"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
        <span
          className={cn(
            "pointer-events-none absolute whitespace-nowrap font-sans tracking-wide text-ink transition-opacity duration-300",
            thought.size === "small" ? "left-1/2 top-[calc(100%+10px)] -translate-x-1/2" : "left-1/2 top-[calc(100%+12px)] -translate-x-1/2",
            showLabel ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          )}
          style={{ fontSize: sizing.font }}
        >
          {thought.title}
        </span>
      </motion.button>
    </div>
  );
}
