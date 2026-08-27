"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getThought } from "@/data/thoughts";
import { useLightbox } from "./Lightbox/LightboxContext";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<Project["status"], string> = {
  active: "Active",
  concept: "Concept",
  archived: "Archived",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { open: openLightbox } = useLightbox();
  const relatedThoughts = project.relatedThoughts
    .map((id) => getThought(id))
    .filter(Boolean);

  return (
    <div
      className="border-b border-hairline py-10 first:border-t sm:py-14"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[7rem_1fr_auto] sm:items-start sm:gap-8">
        <span className="eyebrow hidden sm:block">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-serif text-3xl font-light text-ink sm:text-4xl">
              {project.title}
            </h3>
            <span className="eyebrow">{project.status !== "active" ? STATUS_LABEL[project.status] : null}</span>
          </div>
          <p className="mt-2 text-sm text-graphite">
            {project.category} · {project.year}
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal">
            {project.shortDescription}
          </p>

          {project.image && (
            <button
              type="button"
              onClick={() => openLightbox(project.image!, `${project.title} preview`, "image")}
              aria-label={`View larger image of ${project.title}`}
              className="relative mt-6 block h-56 w-full max-w-xs cursor-zoom-in overflow-hidden border border-hairline bg-paper-dim sm:h-64"
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="320px"
                className={cn(
                  "object-contain p-3 transition-all duration-700 ease-out",
                  hovered ? "grayscale-0" : "grayscale"
                )}
              />
            </button>
          )}

          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="hover-underline mt-5 text-sm text-ink"
            aria-expanded={expanded}
          >
            {expanded ? "Read less" : "Read more"}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-graphite">
                  {project.longDescription}
                </p>

                {project.gallery && project.gallery.length > 0 && (
                  <div className="mt-6">
                    <p className="eyebrow mb-3">More from this project</p>
                    <div className="flex flex-wrap gap-2">
                      {project.gallery.map((item, i) => {
                        const caption = item.label ?? `${project.title} — item ${i + 1}`;
                        return (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => openLightbox(item.src, caption, item.type, item.poster)}
                          aria-label={
                            item.type === "video" ? `Play video: ${caption}` : `View larger image: ${caption}`
                          }
                          className="group relative h-20 w-20 cursor-zoom-in overflow-hidden border border-hairline bg-paper-dim sm:h-24 sm:w-24"
                        >
                          {item.type === "video" ? (
                            <>
                              <video
                                src={item.src}
                                poster={item.poster}
                                muted
                                preload="metadata"
                                playsInline
                                className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                              />
                              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-xs text-ink">
                                  ▶
                                </span>
                              </span>
                            </>
                          ) : (
                            <Image
                              src={item.src}
                              alt={caption}
                              fill
                              sizes="96px"
                              className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                            />
                          )}
                        </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline mt-4 inline-block text-sm text-ink"
                  >
                    Visit ↗
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={cn(
            "flex flex-wrap gap-2 transition-opacity duration-500 sm:max-w-[12rem] sm:justify-end",
            hovered ? "opacity-100" : "opacity-40 sm:opacity-0"
          )}
        >
          {relatedThoughts.map((t) => (
            <span
              key={t!.id}
              className="rounded-full border border-hairline px-3 py-1 text-xs text-graphite"
            >
              {t!.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
