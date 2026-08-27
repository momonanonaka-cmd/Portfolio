"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getThought, type Thought } from "@/data/thoughts";
import { projects } from "@/data/projects";
import { useMediaQuery } from "@/lib/useMediaQuery";

const CATEGORY_LABEL: Record<Thought["category"], string> = {
  interest: "Interest",
  industry: "Industry",
  concept: "Concept",
  place: "Place",
  value: "Value",
  skill: "Practice",
};

const DESKTOP_PANEL_VARIANTS = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 32 },
};

const MOBILE_PANEL_VARIANTS = {
  hidden: { opacity: 1, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: "100%" },
};

export function ThoughtModal({
  thought,
  onClose,
  onNavigate,
}: {
  thought: Thought | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!thought) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [thought, onClose]);

  const related = thought
    ? thought.related.map((id) => getThought(id)).filter((t): t is Thought => Boolean(t))
    : [];
  const relatedProjects = thought
    ? projects.filter((p) => thought.projects?.includes(p.id))
    : [];

  const panelVariants = isDesktop ? DESKTOP_PANEL_VARIANTS : MOBILE_PANEL_VARIANTS;

  return (
    <AnimatePresence>
      {thought && [
        <motion.div
          key="thought-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-[2px]"
          aria-hidden="true"
        />,
        <motion.div
          key="thought-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="thought-modal-title"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={panelVariants}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 max-h-[85svh] overflow-y-auto rounded-t-2xl border-t border-hairline bg-paper px-7 pb-10 pt-8 shadow-[0_-12px_40px_rgba(0,0,0,0.08)] sm:px-10 md:inset-x-auto md:inset-y-0 md:right-0 md:h-full md:max-h-none md:w-full md:max-w-md md:rounded-none md:border-l md:border-t-0 md:pt-28"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-6 top-6 text-2xl font-light text-graphite transition-colors hover:text-ink md:right-8 md:top-8"
          >
            ×
          </button>

          <p className="eyebrow mb-4">{CATEGORY_LABEL[thought.category]}</p>
          <h3
            id="thought-modal-title"
            className="font-serif text-4xl font-light leading-tight text-ink"
          >
            {thought.title}
          </h3>
          <p className="mt-6 font-serif text-xl font-light italic leading-relaxed text-charcoal">
            “{thought.description}”
          </p>

          {related.length > 0 && (
            <div className="mt-10">
              <p className="eyebrow mb-4">Related thoughts</p>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => onNavigate(r.id)}
                    className="hover-underline rounded-full border border-hairline px-3.5 py-1.5 text-sm text-charcoal transition-colors hover:border-ink hover:text-ink"
                  >
                    {r.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div className="mt-10">
              <p className="eyebrow mb-4">Related projects</p>
              <ul className="flex flex-col gap-3">
                {relatedProjects.map((p) => (
                  <li key={p.id}>
                    <a
                      href="#projects"
                      onClick={onClose}
                      className="hover-underline font-serif text-lg text-ink"
                    >
                      {p.title}
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-graphite">
                      {p.shortDescription}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>,
      ]}
    </AnimatePresence>
  );
}
