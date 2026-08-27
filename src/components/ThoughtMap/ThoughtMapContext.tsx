"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface ThoughtMapContextValue {
  selectedId: string | null;
  hoveredId: string | null;
  select: (id: string | null) => void;
  setHovered: (id: string | null) => void;
}

const ThoughtMapCtx = createContext<ThoughtMapContextValue | null>(null);

export function ThoughtMapProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const select = useCallback((id: string | null) => setSelectedId(id), []);
  const setHovered = useCallback((id: string | null) => setHoveredId(id), []);

  const value = useMemo(
    () => ({ selectedId, hoveredId, select, setHovered }),
    [selectedId, hoveredId, select, setHovered]
  );

  return <ThoughtMapCtx.Provider value={value}>{children}</ThoughtMapCtx.Provider>;
}

export function useThoughtMap() {
  const ctx = useContext(ThoughtMapCtx);
  if (!ctx) throw new Error("useThoughtMap must be used within ThoughtMapProvider");
  return ctx;
}

/**
 * Selects a thought and scrolls the Map of Thought section into view.
 * Used by the Connections section to jump back into the map.
 */
export function goToThought(select: (id: string | null) => void, id: string) {
  select(id);
  document.querySelector("#thought-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
