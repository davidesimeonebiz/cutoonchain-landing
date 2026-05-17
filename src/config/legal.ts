import type { ServiceCategory } from "@/types";

/** Etichette pubbliche — mai usare "garantito/i" o "rendimento garantito". */
export const serviceCategoryLabels: Record<
  ServiceCategory,
  { short: string; description: string }
> = {
  strutturati: {
    short: "Strutturati",
    description: "Percorsi metodici senza operatività sui mercati (es. bonus, promozioni).",
  },
  trading: {
    short: "Trading",
    description: "Segnali, copy e strategie su mercati finanziari — rischio di perdita.",
  },
};

export const noGuaranteeDisclaimer =
  "Nessun contenuto del sito costituisce promessa o garanzia di guadagno. I risultati passati, ove indicati, non sono indicativi di risultati futuri.";
