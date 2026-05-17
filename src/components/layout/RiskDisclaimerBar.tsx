"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

export function RiskDisclaimerBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bear/20 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <AlertTriangle className="size-3.5 shrink-0 text-bear" />
        <p className="text-[11px] leading-snug text-muted-foreground sm:text-xs">
          <span className="font-semibold text-foreground">Avviso:</span>{" "}
          nessun contenuto promette guadagni o rendimenti assicurati. Trading,
          bonus e promozioni comportano rischi di perdita. I risultati passati non
          sono indicativi di risultati futuri. Solo per maggiorenni.
        </p>
        <button
          type="button"
          aria-label="Chiudi avviso"
          onClick={() => setVisible(false)}
          className="ml-auto grid size-6 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
