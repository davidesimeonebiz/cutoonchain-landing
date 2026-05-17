"use client";

import { motion } from "motion/react";
import { LeadForm } from "@/components/forms/LeadForm";

export function LeadCta() {
  return (
    <section
      id="lead"
      className="relative isolate scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      >
        <div className="absolute left-1/2 top-0 size-[60rem] -translate-x-1/2 rounded-full bg-bull/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            Inizia gratis
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
            Una call gratuita per capire{" "}
            <span className="gradient-text">se fa per te.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Lascia i tuoi dati: ti contattiamo entro 24 ore. Valutiamo se ti
            conviene un percorso strutturato (matched betting, AutoCPA) o di
            trading. Zero pressione, nessuna promessa di guadagno.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>Onboarding gratuito e non vincolante</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>Analisi del tuo capitale e profilo di rischio</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>Setup tecnico configurato insieme su call</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>Disdici quando vuoi, nessuna penale</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
