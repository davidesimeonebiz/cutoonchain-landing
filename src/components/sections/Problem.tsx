"use client";

import { BentoGrid, BentoCard } from "@/components/animations/BentoGrid";
import { Icon } from "@/components/Icon";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { problemPoints } from "@/config/navigation";

export function Problem() {
  return (
    <AnimatedSection className="relative py-24 sm:py-32">
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-bear">Il problema</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
          Il 76% dei trader retail perde soldi.{" "}
          <span className="text-muted-foreground">
            Non perche&apos; il mercato sia impossibile.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          E&apos; perche&apos; opera senza un metodo, senza risk management e
          inseguendo guru diversi ogni settimana.
        </p>
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <BentoGrid>
          {problemPoints.map((p, i) => (
            <BentoCard
              key={p.title}
              index={i}
              title={p.title}
              description={p.description}
              icon={<Icon name={p.icon} className="size-5" />}
            />
          ))}
        </BentoGrid>
      </div>
    </AnimatedSection>
  );
}
