/**
 * Central place for all personal / brand information.
 * Replace the placeholder values below — nothing else in the codebase
 * needs to change when you do.
 */
export const site = {
  name: "Momona Nonaka",
  initials: "MN",

  role: "Finance · Business · Creator · Marketing · Technology ",

  // Shown large in the hero
  tagline:
    "Exploring the intersections of finance, technology, entrepreneurship, marketing, and human behavior.",

  // Shown smaller, under the tagline
  intro:
    "I'm interested in how businesses, technology, capital, and people interact — and in the patterns that repeat underneath all four. This site is a map of the questions I keep returning to.",

  email: "momonanonaka1@gmail.com",
  location: "Tokyo, Japan", // TODO — update once you've relocated post-graduation

  social: {
    linkedin: "https://www.linkedin.com/in/momonanonaka",
    instagram: "", // TODO — optional, leave empty to hide
    github: "", // TODO — optional, leave empty to hide
  },

  portrait: "/portrait.jpg" as string | null,

  contactStatement:
    "Always interested in thoughtful conversations about markets, technology, entrepreneurship, and unusual ideas. I also love to explore Real Estate, Fashion, Social Events, and experiencing great cusines. Since kindergarten, I spent about a month every summer in Hawaii or California, attending summer school and gaining exposure to English and American culture.  ",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Thoughts", href: "#thought-map" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;
