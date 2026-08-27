import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { writing } from "@/data/writing";
import { site } from "@/data/site";

export function generateStaticParams() {
  return writing.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = writing.find((w) => w.slug === slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: `${entry.title} — ${site.name}`,
      description: entry.excerpt,
      type: "article",
      publishedTime: entry.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function WritingArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = writing.find((w) => w.slug === slug);
  if (!entry) notFound();

  return (
    <main className="min-h-screen px-6 py-28 sm:px-10">
      <article className="mx-auto max-w-2xl">
        <Link href="/#writing" className="hover-underline eyebrow">
          ← Writing
        </Link>

        <p className="eyebrow mb-4 mt-10">
          {entry.category} · {formatDate(entry.date)}
        </p>
        <h1 className="font-serif text-4xl font-light leading-tight text-ink sm:text-5xl">
          {entry.title}
        </h1>

        {entry.image && (
          <div className="relative mt-10 h-72 w-full overflow-hidden border border-hairline bg-paper-dim sm:h-96">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              sizes="(min-width: 672px) 672px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-12 flex flex-col gap-6">
          {entry.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-charcoal">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
