export type ProjectStatus = "active" | "concept" | "archived";

export interface GalleryItem {
  type: "image" | "video";
  /** Path under /public */
  src: string;
  /** Path under /public to a still frame, shown as the thumbnail for a video item */
  poster?: string;
  /** Short caption, e.g. the client name — shown in the lightbox and to screen readers */
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
  shortDescription: string;
  longDescription: string;
  /** Path under /public, or leave undefined for a placeholder texture */
  image?: string;
  /** Additional images/videos (e.g. past social posts) shown as a small thumbnail row */
  gallery?: GalleryItem[];
  externalUrl?: string;
  relatedThoughts: string[];
}

/**
 * Add a new project by adding an entry to this array.
 * `relatedThoughts` should reference `id`s from `src/data/thoughts.ts`.
 */
export const projects: Project[] = [
  {
    id: "loopi",
    title: "Loopi",
    category: "Animal Healthcare",
    year: "2024 — Present",
    status: "active",
    shortDescription:
      "A new infrastructure connecting companion-animal care in Japan — blood donation and disaster preparedness, in one loop.",
    longDescription:
      "Loopi — \"Life, in the loop.\" — started from the same problem Connect set out to solve: more than 15.6 million dogs and cats live in Japan, but unlike human medicine, there's no nationwide blood-supply network for them, and no shared system connecting owners to hospitals beyond phone calls and LINE messages. Loopi Blood carries that forward — hospitals post urgent transfusion requests, owners register healthy dogs and cats as donors with blood type and medical history on file, and the two sides match directly. Loopi Alert extends that same registered health record to disaster preparedness, so the information that could save another animal's life one day could also protect your own pet during an emergency. The loop: Register → Match → Transfuse → Record.",
    image: "/projects/loopi/home.jpg",
    gallery: [
      {
        type: "video",
        src: "/projects/loopi/demo.mp4",
        poster: "/projects/loopi/demo-poster.jpg",
        label: "Loopi — App Walkthrough",
      },
      {
        type: "image",
        src: "/projects/loopi/original-poster.jpg",
        label: "Earlier Concept — Connect Brand Poster",
      },
      {
        type: "image",
        src: "/projects/loopi/concept-mockup-japanese.jpg",
        label: "Earlier Concept — App Mockup (Japanese)",
      },
      {
        type: "image",
        src: "/projects/loopi/concept-mockup-english.jpg",
        label: "Earlier Concept — App Mockup (English)",
      },
    ],
    externalUrl: "https://connecttblood.netlify.app/",
    relatedThoughts: ["animals", "healthcare", "care", "technology", "systems", "japan", "infrastructure"],
  },
  {
    id: "pet-wellness-ai",
    title: "Pet Wellness AI",
    category: "Health & Wellness Infrastructure",
    year: "2024",
    status: "concept",
    shortDescription:
      "AI-powered health and wellness infrastructure for companion animals.",
    longDescription:
      "An early-stage concept exploring how predictive, AI-driven monitoring could shift companion animal care from reactive treatment to preventative wellness.",
    externalUrl: "",
    relatedThoughts: ["ai", "healthcare", "animals", "data", "decision-making"],
  },
  {
    id: "travel-infrastructure",
    title: "Travel Infrastructure Concept",
    category: "Travel & Logistics",
    year: "2023",
    status: "concept",
    shortDescription:
      "Technology-enabled luggage infrastructure connecting airports, hotels, and travelers.",
    longDescription:
      "Japan already has an excellent luggage-delivery infrastructure — travelers can send bags from major airports straight to their hotel, and JAL currently offers same-day airport-to-hotel delivery from Haneda, Narita, and Kansai. But from a tourist's perspective it still feels fragmented: different airports, hotels, delivery companies, reservation systems, and tracking methods, each its own touchpoint. This concept is an AI-powered layer on top of infrastructure that already exists — tell one platform \"I just landed at Haneda, send my luggage to my hotel in Shinjuku, and I want to explore Asakusa before check-in,\" and it identifies the right service, arranges the transfer, talks to the hotel, and builds it into your itinerary. The opportunity isn't to reinvent Japan's logistics — it's to connect them.",
    image: "/projects/travel-infrastructure.jpg",
    externalUrl: "",
    relatedThoughts: ["travel", "infrastructure", "technology", "efficiency", "japan", "ai"],
  },
  {
    id: "beauty-salon-marketing",
    title: "Beauty Salon Marketing",
    category: "Brand & Marketing",
    year: "2021 — Present",
    status: "active",
    shortDescription:
      "Website and marketing work for independent beauty salons in Japan, including IVY New York and Salon Moon.",
    longDescription:
      "Project-based marketing and web design for boutique beauty salons in Japan that don't have an in-house team. For IVY New York, a fully private, appointment-only salon in Chiba — natural and organic-focused, offering 3D HIFU facial lifting, epilation, facial treatments, and body contouring — I built and designed their marketing website around the brand's own line, \"Beautiful Results. Personalized Care,\" and supported their broader marketing and online booking presence. For Salon Moon, I've supported content built around their signature decollete lymphatic massage, included with every facial to improve circulation and reduce swelling.",
    image: "/projects/ivy/homepage.jpg",
    gallery: [
      { type: "image", src: "/projects/ivy/night-menu.jpg", label: "IVY New York — Night Menu" },
      { type: "image", src: "/projects/ivy/press-feature.jpg", label: "IVY New York — Press feature" },
      {
        type: "image",
        src: "/projects/ivy/ig-device-1.jpg",
        label: "IVY New York — IG Carousel: Bring the Salon Home (1/5)",
      },
      {
        type: "image",
        src: "/projects/ivy/ig-device-2.jpg",
        label: "IVY New York — IG Carousel: Bring the Salon Home (2/5)",
      },
      {
        type: "image",
        src: "/projects/ivy/ig-device-3.jpg",
        label: "IVY New York — IG Carousel: Bring the Salon Home (3/5)",
      },
      {
        type: "image",
        src: "/projects/ivy/ig-device-4.jpg",
        label: "IVY New York — IG Carousel: Bring the Salon Home (4/5)",
      },
      {
        type: "image",
        src: "/projects/ivy/ig-device-5.jpg",
        label: "IVY New York — IG Carousel: Bring the Salon Home (5/5)",
      },
      {
        type: "video",
        src: "/projects/ivy/reel-01.mp4",
        poster: "/projects/ivy/reel-01.jpg",
        label: "IVY New York — Reel",
      },
      {
        type: "video",
        src: "/projects/ivy/reel-02.mp4",
        poster: "/projects/ivy/reel-02.jpg",
        label: "IVY New York — Reel",
      },
      {
        type: "video",
        src: "/projects/ivy/salon-moon.mp4",
        poster: "/projects/ivy/salon-moon.jpg",
        label: "Salon Moon — Decollete massage",
      },
    ],
    externalUrl: "https://ivynewyork88.wixsite.com/my-site",
    relatedThoughts: ["design", "storytelling", "communication", "entrepreneurship"],
  },
  {
    id: "other-ventures",
    title: "Other Ventures",
    category: "Ongoing",
    year: "—",
    status: "concept",
    shortDescription:
      "Space for future startup, research, and product ideas.",
    longDescription:
      "A holding space for the ideas currently in progress — some will become companies, some will become essays, some will quietly disappear.",
    externalUrl: "",
    relatedThoughts: ["entrepreneurship", "curiosity", "opportunity"],
  },
];
