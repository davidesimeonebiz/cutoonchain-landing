"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { howItWorksSteps } from "@/config/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HowItWorks() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".how-step");
      if (!items.length) return;

      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      const line = root.current?.querySelector<HTMLElement>(".how-line");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    },
    { scope: root }
  );

  return (
    <section
      id="come-funziona"
      ref={root}
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto mb-16 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">
          Come funziona
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
          Dal primo contatto ai primi risultati{" "}
          <span className="gradient-text">in 48 ore.</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="absolute left-7 top-0 bottom-0 w-px overflow-hidden bg-border sm:left-9">
          <div className="how-line absolute inset-0 origin-top bg-gradient-to-b from-primary via-primary to-transparent" />
        </div>

        <ol className="space-y-12">
          {howItWorksSteps.map((step) => (
            <li
              key={step.number}
              className="how-step relative pl-16 sm:pl-20"
            >
              <div className="absolute left-0 top-0 grid size-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 font-heading text-lg font-semibold text-primary sm:size-[4.5rem] sm:text-xl">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
