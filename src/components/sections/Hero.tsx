"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { Spotlight } from "@/components/animations/Spotlight";
import { stats } from "@/config/stats";
import { NumberTicker } from "@/components/animations/NumberTicker";
import { useLiteMotion } from "@/lib/motion-prefs";

export function Hero() {
  const liteMotion = useLiteMotion();

  return (
    <AuroraBackground className="relative flex min-h-[100svh] items-center justify-center pt-20">
      {!liteMotion && (
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="var(--bull)" />
      )}
      <div className="bg-grid bg-grid-fade absolute inset-0 -z-10 opacity-30" aria-hidden />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        {liteMotion ? (
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3 text-primary" />
            <span>Cuto On Chain — Strutturati e trading trasparente</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-3 text-primary" />
            <span>Cuto On Chain — Strutturati e trading trasparente</span>
          </motion.div>
        )}

        {liteMotion ? (
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Niente guru. Solo{" "}
            <span className="text-gold">metodi</span> e{" "}
            <span className="text-bull">numeri</span> verificabili.
          </h1>
        ) : (
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Niente guru. Solo{" "}
            <span className="text-gold">metodi</span> e{" "}
            <span className="text-bull">numeri</span> verificabili.
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          Matched betting e AutoCPA con obiettivi indicativi, senza mercati
          finanziari. Segnali, copy su oro, Flip e copy conservativo per chi
          accetta il rischio del trading. Nessuna promessa di rendimento: storici
          verificabili dove pubblicati.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#lead"
            className={cn(buttonVariants({ size: "lg" }), "glow-bull")}
          >
            Inizia gratis
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
          <Link
            href="#servizi"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Scopri i servizi
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-bull" />
            Percorsi strutturati senza mercati
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-bull" />
            Storici verificabili su richiesta
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-bull" />
            Consulenza prima di ogni attivazione
          </span>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid w-full grid-cols-2 gap-4 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-1 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                <NumberTicker
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </AuroraBackground>
  );
}
