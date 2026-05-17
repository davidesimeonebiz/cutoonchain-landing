"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export type StickyItem = {
  title: string;
  description: React.ReactNode;
  content: React.ReactNode;
};

/**
 * Sticky Scroll Reveal in stile Aceternity, riscritto per essere robusto con N servizi:
 *
 * - Desktop (lg+): un solo item visibile alla volta, posizionato in assoluto cosi'
 *   non puo' MAI overfloware il contenitore sticky e sovrapporsi alle sezioni vicine.
 *   Ogni servizio occupa una "fetta" di scroll pari a (containerHeight / items.length).
 *
 * - Mobile/tablet: layout dedicato, lista verticale di card senza sticky.
 *   Niente 450vh di scroll inutile.
 */
export function StickyScrollReveal({
  items,
  className,
}: {
  items: StickyItem[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      items.length - 1,
      Math.max(0, Math.floor(latest * items.length))
    );
    setActive(idx);
  });

  return (
    <>
      {/* ---------------- Mobile / tablet ---------------- */}
      <div className="space-y-6 px-4 sm:px-6 lg:hidden">
        {items.map((item, i) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-border bg-card/50 shadow-lg"
          >
            <div className="relative h-64 overflow-hidden border-b border-border bg-card/60 sm:h-72">
              {item.content}
            </div>
            <div className="space-y-3 p-5 sm:p-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-primary">
                Servizio {i + 1} di {items.length}
              </span>
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                {item.title}
              </h3>
              <div className="text-sm text-muted-foreground">
                {item.description}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ---------------- Desktop sticky reveal ---------------- */}
      <div
        ref={ref}
        className={cn("relative hidden w-full lg:block", className)}
        style={{ height: `${items.length * 85}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-4 sm:px-6 lg:px-8">
            {/* LEFT: text column, items stacked absolutely so no overflow */}
            <div className="relative h-[68vh]">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: active === i ? 0 : 24,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col justify-center space-y-4 pointer-events-none data-[active=true]:pointer-events-auto"
                  data-active={active === i}
                  aria-hidden={active !== i}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">
                    Servizio {i + 1} di {items.length}
                  </span>
                  <h3 className="font-heading text-4xl font-semibold text-foreground xl:text-5xl">
                    {item.title}
                  </h3>
                  <div className="max-w-md text-base text-muted-foreground">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CENTER: progress rail */}
            <div className="flex flex-col gap-2" aria-hidden>
              {items.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-8 w-1 rounded-full transition-colors duration-300",
                    active === i ? "bg-primary" : "bg-border"
                  )}
                />
              ))}
            </div>

            {/* RIGHT: visual column */}
            <div className="relative h-[68vh] overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                  aria-hidden={active !== i}
                >
                  {item.content}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
