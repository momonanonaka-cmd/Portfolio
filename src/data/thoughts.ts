export type ThoughtSize = "large" | "medium" | "small";
export type ThoughtCategory =
  | "interest"
  | "industry"
  | "concept"
  | "place"
  | "value"
  | "skill";

export interface Thought {
  id: string;
  title: string;
  category: ThoughtCategory;
  size: ThoughtSize;
  /** Position as a percentage of the map container, 0–100 */
  x: number;
  y: number;
  description: string;
  /** ids of related thoughts, for the connection lines */
  related: string[];
  /** ids of related projects, from src/data/projects.ts */
  projects?: string[];
}

/**
 * Add a new node to the Map of Thought by adding an entry here.
 * `x` / `y` are percentages (0–100) of the map's width/height —
 * place new nodes near their thematic neighbors so the constellation
 * stays legible. `related` should list other `id`s in this file.
 */
export const thoughts: Thought[] = [
  // — Finance cluster —
  {
    id: "finance",
    title: "Finance",
    category: "industry",
    size: "large",
    x: 8,
    y: 18,
    description:
      "Interested in capital markets, M&A synergies, and strategy — less the deals themselves than what they reveal about how value actually gets created, and who ends up capturing it.",
    related: ["markets", "investment-banking", "capital", "risk", "trust"],
  },
  {
    id: "markets",
    title: "Markets",
    category: "concept",
    size: "medium",
    x: 20,
    y: 10,
    description:
      "Markets are less about prices than about the collective, constantly-revised guess of what everyone else believes.",
    related: ["finance", "consumer-psychology", "risk", "scarcity"],
  },
  {
    id: "investment-banking",
    title: "Investment Banking",
    category: "industry",
    size: "medium",
    x: 6,
    y: 34,
    description:
      "A front-row seat to how capital gets allocated, and to the incentives that shape those decisions.",
    related: ["finance", "capital", "strategy"],
  },
  {
    id: "capital",
    title: "Capital",
    category: "concept",
    size: "medium",
    x: 28,
    y: 28,
    description:
      "Capital is a tool, not a goal — the interesting question is always what it unlocks.",
    related: ["finance", "entrepreneurship", "innovation", "opportunity"],
  },
  {
    id: "risk",
    title: "Risk",
    category: "concept",
    size: "small",
    x: 16,
    y: 5,
    description:
      "Most decisions are really decisions about which risks are worth taking on.",
    related: ["finance", "markets", "decision-making"],
  },
  {
    id: "trust",
    title: "Trust",
    category: "value",
    size: "small",
    x: 33,
    y: 15,
    description: "The real currency underneath every market and every relationship.",
    related: ["finance", "human-behavior", "community"],
  },
  {
    id: "incentives",
    title: "Incentives",
    category: "concept",
    size: "small",
    x: 3,
    y: 24,
    description: "Show me the incentive and I'll show you the outcome.",
    related: ["finance", "decision-making", "markets"],
  },

  // — Technology / AI cluster —
  {
    id: "technology",
    title: "Technology",
    category: "industry",
    size: "large",
    x: 58,
    y: 14,
    description:
      "I'm interested less in technology itself than in how it changes existing systems, behaviors, and industries.",
    related: ["ai", "systems", "infrastructure", "innovation", "japan"],
    projects: ["connect", "travel-infrastructure"],
  },
  {
    id: "ai",
    title: "AI",
    category: "industry",
    size: "large",
    x: 73,
    y: 8,
    description:
      "The most interesting AI questions aren't technical — they're about trust, adoption, and what we're willing to delegate.",
    related: ["technology", "automation", "consumer-adoption", "data", "human-behavior"],
    projects: ["pet-wellness-ai"],
  },
  {
    id: "systems",
    title: "Systems",
    category: "concept",
    size: "medium",
    x: 50,
    y: 31,
    description: "I tend to see problems as systems first, decisions second.",
    related: ["technology", "infrastructure", "efficiency"],
    projects: ["connect"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    category: "concept",
    size: "medium",
    x: 83,
    y: 23,
    description:
      "The unglamorous layer underneath every industry that actually determines what's possible.",
    related: ["technology", "travel", "systems", "economic-development"],
    projects: ["travel-infrastructure"],
  },
  {
    id: "innovation",
    title: "Innovation",
    category: "concept",
    size: "medium",
    x: 64,
    y: 29,
    description: "Rarely a single invention — usually an old idea meeting a new incentive.",
    related: ["technology", "capital", "entrepreneurship"],
  },
  {
    id: "data",
    title: "Data",
    category: "concept",
    size: "small",
    x: 79,
    y: 33,
    description: "Data is only as useful as the question you bring to it.",
    related: ["ai", "decision-making", "observation"],
    projects: ["pet-wellness-ai"],
  },
  {
    id: "automation",
    title: "Automation",
    category: "concept",
    size: "small",
    x: 69,
    y: 3,
    description: "Automation doesn't remove human judgment — it relocates it.",
    related: ["ai", "technology", "efficiency"],
  },
  {
    id: "consumer-adoption",
    title: "Consumer Adoption",
    category: "concept",
    size: "small",
    x: 46,
    y: 19,
    description: "The best technology in the world is worthless until someone trusts it enough to use it.",
    related: ["ai", "technology", "consumer-psychology"],
  },

  // — Entrepreneurship cluster —
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    category: "interest",
    size: "large",
    x: 46,
    y: 47,
    description:
      "Building things is the fastest way I've found to actually test an idea about how the world works.",
    related: ["startups", "capital", "innovation", "product", "opportunity"],
    projects: ["connect", "pet-wellness-ai", "travel-infrastructure", "other-ventures"],
  },
  {
    id: "startups",
    title: "Startups",
    category: "interest",
    size: "medium",
    x: 35,
    y: 55,
    description: "Small teams making fast, reversible bets under real uncertainty.",
    related: ["entrepreneurship", "growth", "product", "strategy"],
  },
  {
    id: "growth",
    title: "Growth",
    category: "concept",
    size: "small",
    x: 57,
    y: 41,
    description: "Growth is a symptom of a real problem solved well, not a goal in itself.",
    related: ["startups", "opportunity", "scarcity"],
  },
  {
    id: "opportunity",
    title: "Opportunity",
    category: "concept",
    size: "small",
    x: 29,
    y: 45,
    description: "Usually disguised as an inefficiency someone else has decided to ignore.",
    related: ["entrepreneurship", "capital", "growth"],
    projects: ["other-ventures"],
  },
  {
    id: "strategy",
    title: "Strategy",
    category: "skill",
    size: "small",
    x: 53,
    y: 59,
    description: "Deciding what not to do is usually harder than deciding what to do.",
    related: ["startups", "investment-banking", "decision-making"],
  },
  {
    id: "product",
    title: "Product",
    category: "skill",
    size: "small",
    x: 41,
    y: 60,
    description: "The point where a belief about human behavior becomes something you can click on.",
    related: ["startups", "entrepreneurship", "design"],
  },

  // — Behavior / Psychology cluster —
  {
    id: "behavior",
    title: "Behavior",
    category: "interest",
    size: "large",
    x: 75,
    y: 50,
    description:
      "Almost everything I'm curious about eventually comes back to why people do what they do.",
    related: ["consumer-psychology", "human-behavior", "decision-making", "identity"],
  },
  {
    id: "consumer-psychology",
    title: "Consumer Psychology",
    category: "concept",
    size: "medium",
    x: 87,
    y: 44,
    description: "People rarely buy what they say they want — they buy what they fear losing.",
    related: ["behavior", "markets", "consumer-adoption", "storytelling"],
  },
  {
    id: "human-behavior",
    title: "Human Behavior",
    category: "concept",
    size: "small",
    x: 64,
    y: 58,
    description: "The variable every model quietly assumes away.",
    related: ["behavior", "ai", "trust", "identity"],
  },
  {
    id: "decision-making",
    title: "Decision Making",
    category: "concept",
    size: "small",
    x: 81,
    y: 61,
    description: "Most decisions are made on incomplete information, dressed up afterward as certainty.",
    related: ["behavior", "risk", "data", "incentives"],
    projects: ["pet-wellness-ai"],
  },
  {
    id: "identity",
    title: "Identity",
    category: "concept",
    size: "small",
    x: 91,
    y: 55,
    description: "Half of consumption is signaling something to yourself.",
    related: ["behavior", "human-behavior", "culture"],
  },
  {
    id: "storytelling",
    title: "Storytelling",
    category: "skill",
    size: "small",
    x: 70,
    y: 39,
    description: "The interface between a fact and a decision.",
    related: ["consumer-psychology", "design", "communication"],
  },

  // — Design cluster —
  {
    id: "design",
    title: "Design",
    category: "interest",
    size: "large",
    x: 38,
    y: 23,
    description:
      "Design is the discipline of deciding what a system should ignore.",
    related: ["product", "observation", "storytelling", "curiosity"],
  },
  {
    id: "observation",
    title: "Observation",
    category: "skill",
    size: "small",
    x: 29,
    y: 33,
    description: "Most good ideas are just careful attention paid somewhere no one else was looking.",
    related: ["design", "data", "curiosity"],
  },
  {
    id: "curiosity",
    title: "Curiosity",
    category: "value",
    size: "small",
    x: 44,
    y: 9,
    description: "The thing I try hardest to protect.",
    related: ["design", "observation", "entrepreneurship"],
    projects: ["other-ventures"],
  },

  // — Place / Culture cluster —
  {
    id: "japan",
    title: "Japan",
    category: "place",
    size: "large",
    x: 14,
    y: 69,
    description:
      "A place that has shaped how I think about craft, patience, and systems built to last generations, not quarters.",
    related: ["technology", "globalization", "culture", "travel"],
  },
  {
    id: "globalization",
    title: "Globalization",
    category: "concept",
    size: "medium",
    x: 28,
    y: 58,
    description: "The slow, uneven process of ideas and capital learning to move faster than borders.",
    related: ["japan", "economic-development", "community", "travel"],
  },
  {
    id: "travel",
    title: "Travel",
    category: "interest",
    size: "medium",
    x: 8,
    y: 85,
    description: "The fastest way to find out which of your assumptions were just local habits.",
    related: ["japan", "infrastructure", "globalization"],
    projects: ["travel-infrastructure"],
  },
  {
    id: "culture",
    title: "Culture",
    category: "concept",
    size: "small",
    x: 22,
    y: 79,
    description: "The operating system running underneath every market and every institution.",
    related: ["japan", "identity", "community"],
  },
  {
    id: "economic-development",
    title: "Economic Development",
    category: "concept",
    size: "medium",
    x: 35,
    y: 71,
    description: "How places, not just companies, compound or stagnate.",
    related: ["globalization", "infrastructure", "capital"],
  },
  {
    id: "communication",
    title: "Communication",
    category: "skill",
    size: "small",
    x: 18,
    y: 93,
    description: "Clarity is a form of respect.",
    related: ["culture", "storytelling", "community"],
  },

  // — Healthcare / Animals cluster —
  {
    id: "healthcare",
    title: "Healthcare",
    category: "industry",
    size: "large",
    x: 66,
    y: 81,
    description:
      "An industry where the incentives, the technology, and the emotion are more tangled than anywhere else I've looked.",
    related: ["animals", "care", "access", "ai"],
    projects: ["connect", "pet-wellness-ai"],
  },
  {
    id: "animals",
    title: "Animals",
    category: "interest",
    size: "large",
    x: 83,
    y: 89,
    description:
      "I care about animal welfare for its own sake, and I think it's an underbuilt category, technologically.",
    related: ["healthcare", "care", "community"],
    projects: ["connect", "pet-wellness-ai"],
  },
  {
    id: "care",
    title: "Care",
    category: "value",
    size: "small",
    x: 74,
    y: 69,
    description: "An underrated word for what most healthcare businesses are actually selling.",
    related: ["healthcare", "animals", "community"],
    projects: ["connect"],
  },
  {
    id: "access",
    title: "Access",
    category: "value",
    size: "small",
    x: 91,
    y: 75,
    description: "The gap between what exists and who can actually reach it.",
    related: ["healthcare", "economic-development", "scarcity"],
  },

  // — Community / Systems (connective tissue) —
  {
    id: "community",
    title: "Community",
    category: "value",
    size: "medium",
    x: 50,
    y: 87,
    description: "The unit that decisions actually get made inside of, whatever the org chart says.",
    related: ["trust", "culture", "care", "networks"],
  },
  {
    id: "networks",
    title: "Networks",
    category: "concept",
    size: "small",
    x: 61,
    y: 93,
    description: "Value accrues to whoever sits at the densest intersection.",
    related: ["community", "systems", "communication"],
  },
  {
    id: "scarcity",
    title: "Scarcity",
    category: "concept",
    size: "small",
    x: 39,
    y: 91,
    description: "Real or perceived, it's still the thing that moves people fastest.",
    related: ["markets", "growth", "access"],
  },
  {
    id: "efficiency",
    title: "Efficiency",
    category: "concept",
    size: "small",
    x: 55,
    y: 71,
    description: "Usually means moving the friction somewhere less visible.",
    related: ["systems", "infrastructure", "automation"],
    projects: ["travel-infrastructure"],
  },
];

export function getThought(id: string): Thought | undefined {
  return thoughts.find((t) => t.id === id);
}
