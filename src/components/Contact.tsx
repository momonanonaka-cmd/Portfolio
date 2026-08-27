import { site } from "@/data/site";
import { RevealText } from "./RevealText";

export function Contact() {
  const links = [
    { label: "Email", href: `mailto:${site.email}` },
    site.social.linkedin && { label: "LinkedIn", href: site.social.linkedin },
    site.social.instagram && { label: "Instagram", href: site.social.instagram },
    site.social.github && { label: "GitHub", href: site.social.github },
  ].filter((l): l is { label: string; href: string } => Boolean(l));

  return (
    <section id="contact" className="border-t border-hairline px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <RevealText as="p" className="eyebrow mb-6">
          Get in touch
        </RevealText>
        <RevealText
          delay={0.1}
          as="p"
          className="font-serif text-3xl font-light leading-relaxed text-ink sm:text-4xl"
        >
          {site.contactStatement}
        </RevealText>

        <RevealText delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover-underline eyebrow text-graphite hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </RevealText>
      </div>
    </section>
  );
}
