import type { Thought } from "@/data/thoughts";

export const CATEGORY_LABEL: Record<Thought["category"], string> = {
  interest: "Interest",
  industry: "Industry",
  concept: "Concept",
  place: "Place",
  value: "Value",
  skill: "Practice",
};

// Muted, CVD-checked category colors — kept as a secondary cue alongside the
// always-visible text label, never the sole way to tell categories apart.
export const CATEGORY_COLOR: Record<Thought["category"], string> = {
  industry: "#3e72af",
  interest: "#b85a2e",
  concept: "#33996f",
  place: "#d4a017",
  value: "#7a3a8a",
  skill: "#96303f",
};

export function withAlpha(hex: string, alpha: number) {
  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");
  return `${hex}${a}`;
}
