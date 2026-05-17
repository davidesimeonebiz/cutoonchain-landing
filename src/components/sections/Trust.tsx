"use client";

import { InfiniteMovingCards } from "@/components/animations/InfiniteMovingCards";

const partners = [
  "TradingView",
  "MetaTrader 5",
  "Binance",
  "Bybit",
  "IC Markets",
  "Pepperstone",
  "Kraken",
  "OKX",
  "FP Markets",
];

export function Trust() {
  const items = partners.map((p) => ({
    id: p,
    node: (
      <div className="flex h-14 items-center justify-center rounded-xl border border-border bg-card/40 px-8 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
        {p}
      </div>
    ),
  }));

  return (
    <section className="border-y border-border/60 bg-card/20 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Compatibile con i broker e gli exchange piu&apos; usati
        </p>
        <InfiniteMovingCards items={items} speed={50} />
      </div>
    </section>
  );
}
