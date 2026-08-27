"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxState {
  src: string;
  alt: string;
  type: "image" | "video";
  poster?: string;
}

interface LightboxContextValue {
  open: (src: string, alt: string, type?: "image" | "video", poster?: string) => void;
}

const LightboxCtx = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback(
    (src: string, alt: string, type: "image" | "video" = "image", poster?: string) =>
      setState({ src, alt, type, poster }),
    []
  );
  const close = useCallback(() => setState(null), []);

  useEffect(() => {
    if (!state) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, close]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxCtx.Provider value={value}>
      {children}
      <AnimatePresence>
        {state && [
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
            className="fixed inset-0 z-[70] bg-ink/85 backdrop-blur-sm"
            aria-hidden="true"
          />,
          <motion.div
            key="lightbox-figure"
            role="dialog"
            aria-modal="true"
            aria-label={state.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[71] flex items-center justify-center p-6 sm:p-12"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 text-3xl font-light text-paper transition-opacity hover:opacity-70 sm:right-8 sm:top-8"
            >
              ×
            </button>
            <div
              className="flex h-full max-h-[85vh] w-full max-w-4xl flex-col items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1">
                {state.type === "video" ? (
                  <video
                    src={state.src}
                    poster={state.poster}
                    controls
                    autoPlay
                    playsInline
                    className="mx-auto h-full max-h-full w-auto max-w-full"
                  />
                ) : (
                  <Image
                    src={state.src}
                    alt={state.alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                )}
              </div>
              <p className="shrink-0 text-xs tracking-[0.24em] text-mist uppercase">{state.alt}</p>
            </div>
          </motion.div>,
        ]}
      </AnimatePresence>
    </LightboxCtx.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxCtx);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}
