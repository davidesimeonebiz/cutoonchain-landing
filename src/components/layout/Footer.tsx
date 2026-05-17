import Link from "next/link";
import { TrendingUp } from "lucide-react";

import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { CookiePreferencesButton } from "@/components/layout/CookiePreferencesButton";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <TrendingUp className="size-4 text-primary" />
              </span>
              <span className="font-heading text-lg font-semibold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sm font-semibold text-foreground">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id="disclaimer"
          className="mt-12 scroll-mt-24 rounded-2xl border border-bear/20 bg-bear/5 p-6 text-xs leading-relaxed text-muted-foreground"
        >
          <p className="mb-2 font-semibold text-foreground">
            Disclaimer di rischio
          </p>
          <p className="mb-3">
            <strong className="text-foreground">Nessuna promessa di rendimento.</strong>{" "}
            Obiettivi indicativi, medie storiche e casi passati non costituiscono
            garanzia di profitto futuro. {siteConfig.name} non è un intermediario
            finanziario né un operatore di gioco, salvo diversa comunicazione
            ufficiale.
          </p>
          <p>
            Il trading su Forex, metalli, CFD, criptovalute e derivati comporta
            rischio elevato di perdita del capitale, anche totale. I percorsi su
            bookmaker e promozioni broker sono soggetti a termini degli operatori
            e alla normativa applicabile (solo maggiorenni). Prima di agire
            valuta obiettivi, esperienza e propensione al rischio; non impiegare
            capitali che non puoi perdere. Contenuti a scopo informativo, non
            consulenza finanziaria ai sensi del TUF. Vedi anche{" "}
            <a href="/termini" className="text-foreground underline-offset-4 hover:underline">
              Termini
            </a>{" "}
            e{" "}
            <a href="/privacy" className="text-foreground underline-offset-4 hover:underline">
              Privacy
            </a>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.legal.companyName}. Tutti i
            diritti riservati.
          </p>
          <CookiePreferencesButton />
        </div>
      </div>
    </footer>
  );
}
