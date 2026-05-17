import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Grazie!",
  description: "Richiesta ricevuta. Ti contattiamo entro 24h.",
  robots: { index: false, follow: false },
};

export default function GraziePage() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-4 pt-32 text-center sm:px-6 lg:px-8">
      <div className="grid size-16 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <CheckCircle2 className="size-8 text-primary" />
      </div>
      <h1 className="mt-8 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
        Richiesta ricevuta.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        Grazie per averci scritto. Ti contattiamo via email o telefono{" "}
        <span className="text-foreground">entro 24 ore</span> per fissare la
        call gratuita di 30 minuti. Controlla la casella di posta (e lo spam,
        per sicurezza).
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Torna alla home
        </Link>
        <Link href="/#faq" className={buttonVariants({ size: "lg", variant: "outline" })}>
          Leggi le FAQ
        </Link>
      </div>
    </div>
  );
}
