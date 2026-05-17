"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/lib/motion-prefs";

export type StickyItem = {
  title: string;
  description: React.ReactNode;
  content: React.ReactNode;
};

const SCROLL_VH_PER_ITEM = 55;

export function StickyScrollReveal({
  items,
  className,
}: {
  items: StickyItem[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const liteMotion = useLiteMotion();
  const rafRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateActive = (latest: number) => {
      const idx = Math.min(
        items.length - 1,
        Math.max(0, Math.floor(latest * items.length))
      );
      setActive((prev) => (prev === idx ? prev : idx));
    };

    const onChange = (latest: number) => {
      if (liteMotion) {
        updateActive(latest);
        return;
      }
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        updateActive(latest);
        rafRef.current = null;
      });
    };

    updateActive(scrollYProgress.get());
    return scrollYProgress.on("change", onChange);
  }, [scrollYProgress, items.length, liteMotion]);

  const activeItem = items[active];

  return (
    <>
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

      <div
        ref={ref}
        className={cn("relative hidden w-full lg:block", className)}
        style={{ height: `${items.length * SCROLL_VH_PER_ITEM}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-[68vh] flex-col justify-center space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-primary">
                Servizio {active + 1} di {items.length}
              </span>
              <h3 className="font-heading text-4xl font-semibold text-foreground xl:text-5xl">
                {activeItem.title}
              </h3>
              <div className="max-w-md text-base text-muted-foreground">
                {activeItem.description}
              </div>
            </div>

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

            <div className="relative h-[68vh] overflow-hidden rounded-3xl border border-border bg-card/40 shadow-2xl">
              <div key={activeItem.title} className="absolute inset-0">
                {activeItem.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
