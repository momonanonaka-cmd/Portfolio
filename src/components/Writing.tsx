import Link from "next/link";
import { writing } from "@/data/writing";
import { SectionHeading } from "./SectionHeading";
import { RevealText } from "./RevealText";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Writing() {
  return (
    <section id="writing" className="border-t border-hairline px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Essays & observations" title="Writing" />

        <ul className="mt-16 border-t border-hairline">
          {writing.map((entry, i) => (
            <RevealText key={entry.id} as="div" delay={0.04 * i}>
              <li className="border-b border-hairline">
                <Link
                  href={`/writing/${entry.slug}`}
                  className="group grid grid-cols-1 gap-2 py-7 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="eyebrow">{formatDate(entry.date)}</span>
                  <span className="hover-underline font-serif text-2xl font-light text-ink transition-colors sm:text-3xl">
                    {entry.title}
                  </span>
                  <span className="eyebrow">{entry.category}</span>
                </Link>
              </li>
            </RevealText>
          ))}
        </ul>
      </div>
    </section>
  );
}
