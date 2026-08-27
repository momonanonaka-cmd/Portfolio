export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  year: string;
  description: string;
  details?: string;
  /** Path under /public to a local video clip, shown (playable) in the expanded details. */
  video?: string;
  /** An external link shown alongside the expanded details, e.g. a performance video on YouTube. */
  externalLink?: { label: string; url: string };
}

/**
 * Add a new role by adding an entry to this array (most recent first).
 */
export const experience: ExperienceEntry[] = [
  {
    id: "vc-sector-research",
    company: "HERO Impact Capital",
    role: "Sector Research",
    location: "Remote",
    year: "Apr 2024 — Present",
    description:
      "Ongoing research on US-based, VC-backed startups across DeepTech, ClimateTech, and other emerging sectors.",
    details:
      "Built sourcing databases tracking robotics and deep-tech startups (growth, funding history, investors) and overseas founders/researchers for deal flow.",
  },
  {
    id: "jpmorgan",
    company: "J.P. Morgan",
    role: "Investment Banking Summer Analyst",
    location: "Tokyo, Japan",
    year: "Jun 2026 — Jul 2026",
    description:
      "Seven-week Investment Banking Division internship at J.P. Morgan's Tokyo office, opening with a one-week APAC training program in Hong Kong covering valuation, financial analysis, and IB fundamentals alongside interns from across the region.",
    details:
      "Completed six one-week rotations across FIG, TMT, General Industries, Debt Capital Markets, Equity Capital Markets, and the Financial Sponsors Group — preparing presentation materials, conducting company and industry research, analyzing potential corporate value-enhancement initiatives, and supporting debt and equity capital raising assignments.",
  },
  {
    id: "telexistence",
    company: "Telexistence",
    role: "Business Analyst Intern",
    location: "Japan",
    year: "Feb 2024 — Mar 2024",
    description:
      "Presented the technological strengths and capabilities of a newly developed industrial robot to stakeholders and CVC investors at an industry expo, driving interest and early-stage client engagement.",
    details:
      "Worked cross-functionally with business development, engineering, and investor teams throughout the internship.",
  },
  {
    id: "rheos-capital",
    company: "Rheos Capital Works, Inc.",
    role: "Marketing Intern",
    location: "Tokyo, Japan",
    year: "Feb 2022 — Aug 2022",
    description: "Marketing internship at Rheos Capital Works, a Tokyo-based asset management firm.",
    details: "Conducted competitor and client-needs analysis to support new marketing strategies in the asset management industry. Created market commentary and social media content, translating market trends into engaging client-facing communications. Served as a Teaching Assistant at Waseda University for a course taught by CEO Hidetoshi Fujino. Collaborated with internal and external stakeholders, strengthening relationship-building and communication skills.",
  },
  {
    id: "world-scholars-cup",
    company: "The World Scholar's Cup",
    role: "Co-Director, Tokyo Regional Round",
    location: "Tokyo, Japan",
    year: "Jul 2019 — Aug 2020",
    description:
      "Co-directed the Tokyo Regional Round of the World Scholar's Cup and competed at the Tournament of Champions at Yale University.",
    details:
      "Represented Japan at the Tournament of Champions — won Gold in Essay and Silver in Team Debate.",
    video: "/experience/world-scholars-cup.mp4",
    externalLink: { label: "World Scholar's Cup", url: "https://www.scholarscup.org/" },
  },
  {
    id: "justin-bieber-tour",
    company: "Justin Bieber's Purpose World Tour",
    role: "Backup Dancer",
    location: "International",
    year: "Apr 2016",
    description:
      "Selected from thousands of applicants to perform on international stages as part of the official Purpose Tour 2016 dance team — one of the best lessons in preparation, discipline, and performing under pressure I've had.",
    video: "/experience/justin-bieber-purpose-tour.mp4",
    externalLink: {
      label: "Performance video",
      url: "https://youtu.be/sn7UNg_xsto?si=X-eJ8NIyxDqMjsRp",
    },
  },
];
