export interface Connection {
  id: string;
  /** ids from src/data/thoughts.ts, in display order */
  pair: [string, string];
}

/**
 * Curated pairings shown in the Connections section. Add a new one by
 * referencing two thought `id`s from src/data/thoughts.ts.
 */
export const connections: Connection[] = [
  { id: "finance-psychology", pair: ["finance", "consumer-psychology"] },
  { id: "technology-healthcare", pair: ["technology", "healthcare"] },
  { id: "japan-globalization", pair: ["japan", "globalization"] },
  { id: "capital-entrepreneurship", pair: ["capital", "entrepreneurship"] },
  { id: "ai-human-behavior", pair: ["ai", "human-behavior"] },
  { id: "design-storytelling", pair: ["design", "storytelling"] },
  { id: "animals-care", pair: ["animals", "care"] },
];
