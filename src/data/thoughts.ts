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
      "What interests me about finance is thinking about how different financial tools can create value for a company—whether that means identifying synergies through M&A, optimizing its capital structure, or finding the right mix of debt, equity, and other financing alternatives.",
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
      "Interested in understanding market movements—not simply how prices change, but how every movement reflects a constantly evolving collective view of information, expectations, and risk.",
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
      "Experienced as Summer Analyst at J.P.Morgan. Analytical thinking, attention to detail, financial modeling and valuation skills, and the ability to communicate complex financial ideas clearly while working collaboratively in a fast-paced environment. ",
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
      "Interested in how capital can be strategically deployed to create and maximize corporate value through M&A, debt and equity financing, capital markets, and other financial solutions.",
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
      "I see risk as an opportunity to challenge myself and build confidence. Taking calculated risks pushes me beyond what I already know and often leads to the greatest growth. ",
    related: ["finance", "markets", "decision-making"],
  },
  {
    id: "trust",
    title: "Trust",
    category: "value",
    size: "small",
    x: 33,
    y: 15,
    description: "",
    related: ["finance", "human-behavior", "community"],
  },
  {
    id: "incentives",
    title: "Incentives",
    category: "concept",
    size: "small",
    x: 3,
    y: 24,
    description: "",
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
      "Continuously learning how to use technology more effectively and staying current with emerging tools and skills. I’m interested in how technology can simplify processes, improve efficiency, and turn ideas into practical solutions.",
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
      "Using AI to research, build, analyze, and turn ideas into working solutions faster. AI-assisted coding · Research & analysis · Rapid prototyping · Prompt engineering · Content creation · Workflow optimization, Skills & Tools: ChatGPT · Claude Code · Gemini · Copilot · Cursor · Perplexity · NotebookLM · Canva AI",
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
    description: "",
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
      "",
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
    description: "",
    related: ["technology", "capital", "entrepreneurship"],
  },
  {
    id: "data",
    title: "Data",
    category: "concept",
    size: "small",
    x: 79,
    y: 33,
    description: "",
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
    description: "",
    related: ["ai", "technology", "efficiency"],
  },
  {
    id: "consumer-adoption",
    title: "Consumer Adoption",
    category: "concept",
    size: "small",
    x: 46,
    y: 19,
    description: "",
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
    description: "Currently building Pets Blood Donation System in Japan.",
    related: ["entrepreneurship", "growth", "product", "strategy"],
  },
  {
    id: "growth",
    title: "Growth",
    category: "concept",
    size: "small",
    x: 57,
    y: 41,
    description: "",
    related: ["startups", "opportunity", "scarcity"],
  },
  {
    id: "opportunity",
    title: "Opportunity",
    category: "concept",
    size: "small",
    x: 29,
    y: 45,
    description: "",
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
    description: "",
    related: ["startups", "investment-banking", "decision-making"],
  },
  {
    id: "product",
    title: "Product",
    category: "skill",
    size: "small",
    x: 41,
    y: 60,
    description: "",
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
      "",
    related: ["consumer-psychology", "human-behavior", "decision-making", "identity"],
  },
  {
    id: "consumer-psychology",
    title: "Consumer Psychology",
    category: "concept",
    size: "medium",
    x: 87,
    y: 44,
    description: "",
    related: ["behavior", "markets", "consumer-adoption", "storytelling"],
  },
  {
    id: "human-behavior",
    title: "Human Behavior",
    category: "concept",
    size: "small",
    x: 64,
    y: 58,
    description: "",
    related: ["behavior", "ai", "trust", "identity"],
  },
  {
    id: "decision-making",
    title: "Decision Making",
    category: "concept",
    size: "small",
    x: 81,
    y: 61,
    description: "",
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
    description: "",
    related: ["behavior", "human-behavior", "culture"],
  },
  {
    id: "storytelling",
    title: "Storytelling",
    category: "skill",
    size: "small",
    x: 70,
    y: 39,
    description: "",
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
      "Design by the product story-telling and target audiences' consumer behavior.",
    related: ["product", "observation", "storytelling", "curiosity"],
  },
  {
    id: "observation",
    title: "Observation",
    category: "skill",
    size: "small",
    x: 29,
    y: 33,
    description: "",
    related: ["design", "data", "curiosity"],
  },
  {
    id: "curiosity",
    title: "Curiosity",
    category: "value",
    size: "small",
    x: 44,
    y: 9,
    description: "",
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
    description: "",
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
    description: "",
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
      "",
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
    description: "",
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
    description: "Community expands our network, broadens our perspectives, and creates opportunities through meaningful connections with others. I love to build the bridge through social events.",
    related: ["trust", "culture", "care", "networks"],
  },
  {
    id: "networks",
    title: "Networks",
    category: "concept",
    size: "small",
    x: 61,
    y: 93,
    description: "I believe networks reflects who you are.",
    related: ["community", "systems", "communication"],
  },
  {
    id: "scarcity",
    title: "Scarcity",
    category: "concept",
    size: "small",
    x: 39,
    y: 91,
    description: "",
    related: ["markets", "growth", "access"],
  },
  {
    id: "efficiency",
    title: "Efficiency",
    category: "concept",
    size: "small",
    x: 55,
    y: 71,
    description: "",
    related: ["systems", "infrastructure", "automation"],
    projects: ["travel-infrastructure"],
  },
];

export function getThought(id: string): Thought | undefined {
  return thoughts.find((t) => t.id === id);
}
