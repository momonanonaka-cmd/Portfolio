import Image from "next/image";
import { site } from "@/data/site";
import { RevealText } from "./RevealText";
import { SectionHeading } from "./SectionHeading";

const subsections = [
  {
    label: "Currently exploring",
    content:
      "Momona will be graduating from UC Davis this fall. She is currently expanding her network horizontly in tech related field. She loves to dive into the frontline and crete values.",
  },
  {
    label: "What I care about",
    content:
      "Being surrounded by smart, ambitious people, and giving back what I've been given. I'd rather be the least experienced person in a room that's going somewhere than the most experienced person in one that isn't.",
  },
  {
    label: "How I think",
    content:
      "I think in synergies. I naturally look at how ideas, people, and systems can connect—what value those connections could create, what could be changed, and what might be missing. I’m always asking not just “Does this work?” but “How could this work better?”",
  },
  {
    label: "Where I've been",
    content:
      "Grew up in Japan, studied in the U.S. — Traveled to Punta Cana for the tour with Justin Bieber as Back Up Dancer, Visited Sydney, Australia for WSC Global Round, Travel around Asia etc.",
  },
];

export function About() {
  return (
    <section id="about" className="border-t border-hairline px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Who I am" title="About" />

        <div className="mt-14 grid gap-14 md:grid-cols-[1fr_auto] md:gap-16">
          <RevealText delay={0.1} className="max-w-2xl">
            <p className="font-serif text-2xl font-light leading-relaxed text-charcoal sm:text-3xl">
              I&rsquo;m ambitious, curious, and intentional about making the most of every opportunity. I’m drawn to challenges and approach them with an independent perspective. Growing up in Japan and studying in the U.S. taught me early that the most conventional path isn’t always the one that leads to the most meaningful growth.
            </p>
          </RevealText>

          {site.portrait && (
            <RevealText delay={0.2} className="mx-auto md:mx-0">
              <div className="relative h-48 w-40 overflow-hidden bg-paper-dim sm:h-56 sm:w-48">
                <Image
                  src={site.portrait}
                  alt={site.name}
                  fill
                  sizes="(min-width: 640px) 192px, 160px"
                  className="object-cover grayscale"
                />
              </div>
            </RevealText>
          )}
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-12 border-t border-hairline pt-12 sm:grid-cols-2">
          {subsections.map((s, i) => (
            <RevealText key={s.label} delay={0.06 * i}>
              <p className="eyebrow mb-3">{s.label}</p>
              <p className="max-w-md text-base leading-relaxed text-graphite">{s.content}</p>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  );
}
