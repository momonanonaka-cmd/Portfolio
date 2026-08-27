import { RevealText } from "./RevealText";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <RevealText as="p" className="eyebrow mb-3">
        {eyebrow}
      </RevealText>
      <RevealText as="h2" delay={0.08} className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
        {title}
      </RevealText>
    </div>
  );
}
