import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { noGuaranteeDisclaimer } from "@/config/legal";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description: `Termini e condizioni d'uso del sito e dei servizi di ${siteConfig.legal.companyName}.`,
};

const LAST_UPDATED = "17 maggio 2026";

export default function TerminiPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Termini e Condizioni
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ultimo aggiornamento: {LAST_UPDATED}
      </p>

      <div className="mt-8 rounded-xl border border-bear/30 bg-bear/5 p-5 text-sm leading-relaxed text-muted-foreground">
        <p className="font-semibold text-foreground">Avvertenza importante</p>
        <p className="mt-2">{noGuaranteeDisclaimer}</p>
      </div>

      <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
        <Section title="1. Oggetto">
          <p>
            I presenti Termini regolano l&apos;accesso al sito{" "}
            <strong>{siteConfig.url}</strong> e l&apos;utilizzo dei contenuti e
            servizi informativi offerti da{" "}
            <strong>{siteConfig.legal.companyName}</strong> (P.IVA{" "}
            {siteConfig.legal.vat}).
          </p>
        </Section>

        <Section title="2. Natura dei servizi — nessuna consulenza finanziaria">
          <p>
            I servizi descritti (matched betting, AutoCPA, segnali operativi,
            copy trading, flip e altre strategie) hanno finalità{" "}
            <strong>informative ed educative</strong>. Non costituiscono
            consulenza in materia di investimenti ai sensi del D.Lgs. 58/1998
            (TUF), consulenza fiscale o legale, né sollecitazione al pubblico
            risparmio.
          </p>
          <p>
            Ogni decisione economica resta sotto la esclusiva responsabilità
            dell&apos;utente, che deve valutare autonomamente rischi, costi e
            conformità normativa (inclusi limiti di età, residenza e regolamenti
            ADM per il gioco e CONSOB/CySEC per i mercati finanziari).
          </p>
        </Section>

        <Section title="3. Nessuna garanzia di rendimento">
          <p>
            {siteConfig.name} non garantisce — né può garantire — alcun
            risultato economico, percentuale di profitto, recupero del capitale
            o esito positivo. Eventuali obiettivi indicativi, range storici o
            medie passate sono esempi non vincolanti e non assicurano
            performance future.
          </p>
          <p>
            L&apos;utente riconosce che bonus bookmaker, promozioni broker e
            strategie di trading possono essere modificati, sospesi o revocati
            dai terzi, e che errori operativi o di mercato possono comportare
            perdite.
          </p>
        </Section>

        <Section title="4. Avvertenze sui rischi — trading">
          <p>
            Il trading su Forex, metalli, CFD, criptovalute e strumenti derivati
            comporta rischio elevato di perdita del capitale, anche totale.
            La leva può amplificare perdite. I risultati passati non sono
            indicativi di risultati futuri.
          </p>
        </Section>

        <Section title="5. Percorsi strutturati (matched betting, AutoCPA)">
          <p>
            Tali percorsi possono coinvolgere operatori di gioco e broker
            regolamentati. L&apos;utente deve:
          </p>
          <ul>
            <li>avere almeno 18 anni;</li>
            <li>
              rispettare termini e condizioni degli operatori e la normativa
              italiana applicabile (incluso il divieto di accesso ove previsto);
            </li>
            <li>
              comprendere che obiettivi economici indicativi non sono promesse
              contrattuali.
            </li>
          </ul>
          <p>
            {siteConfig.name} non è un operatore di gioco né un intermediario
            finanziario autorizzato, salvo diversa indicazione espressa e
            documentata.
          </p>
        </Section>

        <Section title="6. Copy trading e segnali">
          <p>
            Segnali e replica automatica non eliminano il rischio di mercato.
            Slippage, spread, interruzioni di connessione e politiche dei broker
            possono alterare i risultati. Storici su piattaforme terze (es.
            MyFxBook) sono forniti a scopo informativo senza garanzia di
            accuratezza o continuità.
          </p>
        </Section>

        <Section title="7. Testimonianze e contenuti marketing">
          <p>
            Testimonianze, screenshot e casi studio possono non essere
            rappresentativi dell&apos;esperienza media. Non costituiscono
            promessa di risultato. Dove non diversamente indicato, possono
            essere esemplificativi o anonimizzati.
          </p>
        </Section>

        <Section title="8. Abbonamenti e pagamenti">
          <p>
            Eventuali abbonamenti o corrispettivi saranno regolati da condizioni
            contrattuali separate comunicate prima dell&apos;attivazione.
            Salvo diversa previsione di legge, non sono previsti rimborsi per
            periodi già fruiti.
          </p>
        </Section>

        <Section title="9. Diritto di recesso (consumatori)">
          <p>
            Ai sensi del D.Lgs. 206/2005, il consumatore può esercitare il
            recesso entro 14 giorni ove applicabile, salvo eccezioni per
            servizi digitali già eseguiti con consenso espresso.
          </p>
        </Section>

        <Section title="10. Proprietà intellettuale">
          <p>
            Testi, grafica, metodologie e codice del sito sono protetti. È
            vietata la riproduzione non autorizzata.
          </p>
        </Section>

        <Section title="11. Limitazione di responsabilità">
          <p>
            Nei limiti massimi consentiti dalla legge italiana,{" "}
            {siteConfig.legal.companyName} non risponde di perdite economiche,
            danni indiretti o mancati guadagni derivanti dall&apos;uso del sito,
            dai contenuti o dall&apos;adozione di strategie descritte.
          </p>
        </Section>

        <Section title="12. Privacy e cookie">
          <p>
            Il trattamento dei dati personali è descritto nella{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            . L&apos;uso del sito implica presa visione della stessa.
          </p>
        </Section>

        <Section title="13. Legge applicabile e foro">
          <p>
            I Termini sono regolati dalla legge italiana. Per i consumatori si
            applica il foro del luogo di residenza o domicilio del consumatore;
            in ogni caso restano i diritti inderogabili previsti dalla legge.
          </p>
        </Section>

        <Section title="14. Contatti">
          <p>
            Per richieste:{" "}
            <a href={`mailto:${siteConfig.legal.email}`}>
              {siteConfig.legal.email}
            </a>
            .
          </p>
        </Section>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
