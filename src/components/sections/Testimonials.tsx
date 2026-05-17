"use client";

import { Star } from "lucide-react";

import { InfiniteMovingCards } from "@/components/animations/InfiniteMovingCards";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { testimonials } from "@/config/testimonials";
import { useLiteMotion } from "@/lib/motion-prefs";

export function Testimonials() {
  const liteMotion = useLiteMotion();
  const cards = testimonials.map((t) => ({
    id: t.name,
    node: (
      <article className="flex h-full w-80 flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur sm:w-96">
        <div>
          <div className="flex items-center gap-1">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground">
            “{t.quote}”
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-full bg-primary/15 font-heading text-sm font-semibold text-primary">
            {t.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">{t.name}</div>
            <div className="text-xs text-muted-foreground">{t.role}</div>
          </div>
        </div>
      </article>
    ),
  }));

  return (
    <AnimatedSection id="testimonianze" className="py-24 sm:py-32">
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">
          Testimonianze
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
          Cosa dicono i nostri trader.
        </h2>
      </div>
      <InfiniteMovingCards items={cards} speed={liteMotion ? 90 : 60} />
      {!liteMotion && (
        <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6 lg:px-8">
          <InfiniteMovingCards
            items={[...cards].reverse()}
            speed={70}
            direction="right"
          />
        </div>
      )}
    </AnimatedSection>
  );
}
