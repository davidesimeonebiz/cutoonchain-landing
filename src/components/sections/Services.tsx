"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";

import {
  StickyScrollReveal,
  type StickyItem,
} from "@/components/animations/StickyScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { serviceCategoryLabels } from "@/config/legal";
import { services } from "@/config/services";
import { cn } from "@/lib/utils";

export function Services() {
  const items: StickyItem[] = services.map((s) => ({
    title: s.title,
    description: (
      <div className="space-y-4">
        <p className="text-base font-medium text-foreground/80">{s.tagline}</p>
        <p className="text-sm text-muted-foreground">{s.description}</p>
        <ul className="space-y-1.5 text-sm">
          {s.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-bull" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        {s.myfxbookUrl && (
          <Link
            href={s.myfxbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Storico su MyFxBook
            <ExternalLink className="size-3.5" />
          </Link>
        )}
        <div className="pt-2">
          <Link href={s.cta.href} className={buttonVariants({ size: "lg" })}>
            {s.cta.label}
          </Link>
        </div>
      </div>
    ),
    content: <ServiceVisual service={s} />,
  }));

  return (
    <section id="servizi" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">
          I nostri servizi
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-5xl">
          Strutturati e trading,{" "}
          <span className="gradient-text">due percorsi chiari.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Metodi senza mercati finanziari o strategie di trading con storici
          documentati — sempre con rischi e limiti esplicitati, senza promesse di
          guadagno.
        </p>
      </div>
      <StickyScrollReveal items={items} />
    </section>
  );
}

function ServiceVisual({
  service,
}: {
  service: (typeof services)[number];
}) {
  const isStrutturato = service.category === "strutturati";
  const categoryLabel = serviceCategoryLabels[service.category];
  const coverImage =
    service.coverImage ?? `/services/${service.slug}.png`;

  return (
    <div className="relative h-full w-full overflow-hidden bg-card/60 p-5 sm:p-6 lg:p-8">
      <Image
        src={coverImage}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-center"
        quality={55}
        loading={service.slug === "matched-betting" ? "eager" : "lazy"}
        priority={service.slug === "matched-betting"}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55"
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 opacity-50 mix-blend-soft-light",
          isStrutturato
            ? "bg-[radial-gradient(circle_at_30%_20%,_color-mix(in_oklch,var(--gold)_25%,transparent),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_30%_20%,_color-mix(in_oklch,var(--bull)_22%,transparent),transparent_55%)]"
        )}
      />
      <div className="relative flex h-full flex-col justify-between gap-4">
        <div className="flex items-start justify-between">
          <div className="grid size-11 place-items-center rounded-xl bg-background/60 text-primary ring-1 ring-primary/30 backdrop-blur-sm lg:size-14 lg:rounded-2xl">
            <Icon name={service.icon} className="size-5 lg:size-7" />
          </div>
          {service.badge && (
            <span className="rounded-full border border-gold/40 bg-background/70 px-2.5 py-0.5 text-[10px] font-medium text-gold backdrop-blur-sm lg:px-3 lg:py-1 lg:text-xs">
              {service.badge}
            </span>
          )}
        </div>
        <div>
          <div className="mb-1.5 text-[10px] uppercase tracking-wider text-muted-foreground lg:text-xs">
            {categoryLabel.short}
          </div>
          <div className="font-heading text-xl font-semibold leading-tight text-foreground lg:text-3xl">
            {service.title}
          </div>
          {service.stats && (
            <div className="mt-3 grid grid-cols-2 gap-2 lg:mt-6 lg:gap-4">
              {service.stats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-lg border border-border/80 bg-background/70 p-2.5 backdrop-blur-sm lg:rounded-xl lg:p-3"
                >
                  <div className="text-[9px] uppercase tracking-wider text-muted-foreground lg:text-[10px]">
                    {st.label}
                  </div>
                  <div
                    className={cn(
                      "mt-0.5 font-heading text-lg font-semibold lg:text-2xl",
                      isStrutturato ? "text-gold" : "text-bull"
                    )}
                  >
                    {st.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
