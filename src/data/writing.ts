export interface WritingEntry {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date, e.g. "2026-03-01"
  excerpt: string;
  /** Path under /public for a lead image, or leave undefined. */
  image?: string;
  /**
   * Placeholder body content. Written as plain paragraphs for now —
   * swap this field for MDX/Markdown file loading later without
   * touching any component (see README).
   */
  content: string[];
}

/**
 * Add a new essay by adding an entry to this array (most recent first).
 * Each entry automatically gets a page at /writing/[slug].
 */
export const writing: WritingEntry[] = [
  {
    id: "6",
    slug: "things-i-didnt-notice-living-in-japan",
    title: "Things I Didn't Notice Living in Japan as a Local",
    category: "Japan",
    date: "2026-08-24",
    excerpt:
      "A friend's offhand comment about Japan and AI sent me looking for the gap between how good Japan's infrastructure already is and how disconnected it still feels to use.",
    image: "/writing/japan-zen-garden.jpg",
    content: [
      "One of my close friends from college told me, \"I'm surprised Japan doesn't utilize AI that much.\"",
      "At first, I was surprised by his comment. Japan has always felt technologically advanced to me — fast transportation, excellent logistics, convenience stores everywhere, and highly reliable services.",
      "But his perspective made me look at Japan differently.",
      "And the data supports part of what he noticed: while AI adoption is increasing, Japan still trails other major economies in business adoption. In a 2025 government survey, only 49.7% of Japanese companies had established a policy to actively or selectively use generative AI, lower than the other countries surveyed. (Ministry of Internal Affairs and Communications)",
      "That conversation made me ask a different question:",
      "What services already work extremely well in Japan — but could become dramatically better if technology connected them?",
      "One example I noticed was tourism.",
      "Japan already has an incredible luggage-delivery infrastructure. Travelers can send luggage from major airports directly to hotels, and many hotels can arrange delivery between destinations. (JNTO)",
      "But from a tourist's perspective, the experience can still feel fragmented.",
      "Different airports, hotels, delivery companies, reservation systems, counters, cutoff times, languages, and tracking methods can all become separate touchpoints.",
      "This led me to think about an AI-powered integrated travel platform.",
      "Imagine landing in Japan and telling one platform: \"I just arrived at Haneda. Send my luggage to my hotel in Shinjuku, and I want to explore Asakusa before check-in.\"",
      "Instead of searching for the right delivery company and figuring out the logistics yourself, the platform could identify the best available service, arrange the luggage transfer, communicate with the hotel, track the baggage, and integrate the process into your itinerary.",
      "The infrastructure already exists. For example, JAL currently offers same-day airport-to-hotel delivery from Haneda, Narita, and Kansai airports.",
      "The opportunity may not be to reinvent Japan's logistics — it is to connect them.",
      "That changed how I think about innovation in Japan.",
      "Living there as a local, I saw individual services.",
      "Living abroad and hearing Japan described through the eyes of my international friends, I started seeing the gaps between those services.",
      "And I believe AI can fill many of those gaps.",
      "Japan already has world-class infrastructure. I think the next opportunity is making that infrastructure work together.",
    ],
  },
  {
    id: "7",
    slug: "do-we-put-enough-attention-to-companion-animals",
    title: "Do We Put Enough Attention to Our Companion Animals?",
    category: "Business",
    date: "2026-08-10",
    excerpt:
      "EP. 01 — the first entry in a series on building Loopi, starting with a simple question about why Japan has no nationwide blood-supply network for the 15.6 million dogs and cats who call it home.",
    content: [
      "More than 15.6 million dogs and cats live in Japan.",
      "We call them our companions. We spend on their food, healthcare, and well-being. But when one of them suddenly needs a lifesaving blood transfusion, the system looks very different.",
      "Unlike human medicine, Japan does not have a nationwide blood-supply network for companion animals. Veterinary hospitals often have to secure donors themselves, and in some cases, owners are asked to find a donor for their own pet.",
      "That made me ask:",
      "Do we really put enough attention into the systems that protect our beloved companion animals?",
      "The problem is not necessarily that there are no animals capable of donating blood.",
      "The problem is that we are not connected.",
      "Potential donors, pet owners, and veterinary hospitals exist across Japan, but there is no widely established infrastructure connecting them when blood is urgently needed.",
      "So I wanted to answer a simple question:",
      "What if finding a pet blood donor could become faster, safer, and more accessible?",
      "That question led me to build Loopi — a digital infrastructure connecting companion-animal care in Japan, starting with blood.",
      "Loopi is designed to bring pet owners, eligible blood donors, and veterinary hospitals into one network.",
      "Instead of relying solely on individual hospitals or personal networks to find donors, Loopi aims to make donor registration and matching more accessible, while working with veterinary institutions to build a safe and trusted donation ecosystem.",
      "Connecting blood. Connecting owners. Connecting hospitals. Connecting lives.",
      "Loopi is starting with blood donation, but the vision goes beyond a single transfusion.",
      "I want to create an infrastructure where information and resources surrounding companion-animal health are better connected — and where technology can help us respond before an emergency becomes a tragedy.",
      "Because with 15.6 million companion dogs and cats in Japan, improving the system behind their healthcare can affect millions of animals and the families who consider them part of their own.",
      "生命をつなぐ。未来をつなぐ。Connecting lives. Creating hope.",
    ],
  },
];
