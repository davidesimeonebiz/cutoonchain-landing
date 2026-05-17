"use client";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { NumberTicker } from "@/components/animations/NumberTicker";
import { stats } from "@/config/stats";

export function Stats() {
  return (
    <AnimatedSection id="risultati" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Numeri reali
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
            Track record verificabile, non promesse.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Ogni numero che vedi qui sotto e&apos; auditabile sul nostro
            portale clienti. Le performance sono aggiornate mensilmente.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/40 p-6 backdrop-blur lg:grid-cols-4 lg:p-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border/60 bg-background/40 p-6 text-center"
            >
              <div className="font-heading text-4xl font-semibold text-bull sm:text-5xl">
                <NumberTicker
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
