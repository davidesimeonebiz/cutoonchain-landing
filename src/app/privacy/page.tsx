import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Informativa privacy ai sensi del Regolamento UE 2016/679 (GDPR) di ${siteConfig.legal.companyName}.`,
};

const LAST_UPDATED = "17 maggio 2026";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-32 pt-32 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ultimo aggiornamento: {LAST_UPDATED}
      </p>

      <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
        <Section title="1. Titolare del trattamento">
          <p>
            Il Titolare del trattamento è{" "}
            <strong>{siteConfig.legal.companyName}</strong>, P.IVA{" "}
            {siteConfig.legal.vat}, con sede in {siteConfig.legal.address}.
          </p>
          <p>
            Contatti privacy:{" "}
            <a href={`mailto:${siteConfig.legal.email}`}>
              {siteConfig.legal.email}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Ambito di applicazione">
          <p>
            La presente informativa si applica ai dati personali raccolti tramite
            il sito {siteConfig.url.replace(/^https?:\/\//, "")}, al form di
            contatto, ai cookie e alle comunicazioni correlate ai servizi
            descritti sul sito (percorsi strutturati e trading).
          </p>
        </Section>

        <Section title="3. Tipologie di dati raccolti">
          <ul>
            <li>
              <strong>Dati identificativi e di contatto:</strong> nome, email,
              telefono (facoltativo), messaggio, servizio di interesse — forniti
              tramite il form lead.
            </li>
            <li>
              <strong>Dati di consenso:</strong> accettazione privacy/termini
              (obbligatorio per inviare il form), consenso marketing (facoltativo).
            </li>
            <li>
              <strong>Dati tecnici:</strong> indirizzo IP, user agent, referrer,
              data/ora invio — per sicurezza, anti-abuso e gestione richieste.
            </li>
            <li>
              <strong>Cookie e strumenti analoghi:</strong> vedi sezione 9.
            </li>
          </ul>
          <p>
            Non raccogliamo categorie particolari di dati (art. 9 GDPR) tramite
            il form. Non richiediamo dati relativi a conti di trading o credenziali
            broker tramite il sito pubblico.
          </p>
        </Section>

        <Section title="4. Finalità e base giuridica">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-semibold text-foreground">
                  Finalità
                </th>
                <th className="py-2 font-semibold text-foreground">Base</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-border/60">
                <td className="py-3 pr-4">
                  Rispondere alle richieste e fissare consulenze
                </td>
                <td className="py-3">Art. 6.1.b GDPR (misure precontrattuali)</td>
              </tr>
              <tr className="border-b border-border/60">
                <td className="py-3 pr-4">Adempiere a obblighi di legge</td>
                <td className="py-3">Art. 6.1.c GDPR</td>
              </tr>
              <tr className="border-b border-border/60">
                <td className="py-3 pr-4">
                  Marketing diretto (newsletter, offerte)
                </td>
                <td className="py-3">
                  Art. 6.1.a GDPR (consenso, revocabile)
                </td>
              </tr>
              <tr className="border-b border-border/60">
                <td className="py-3 pr-4">
                  Sicurezza, prevenzione abusi, log tecnici
                </td>
                <td className="py-3">Art. 6.1.f GDPR (legittimo interesse)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">
                  Cookie analitici e di marketing
                </td>
                <td className="py-3">Art. 6.1.a GDPR (consenso via banner)</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="5. Natura del conferimento">
          <p>
            I dati contrassegnati come obbligatori nel form (nome, email,
            servizio, consenso privacy) sono necessari per gestire la richiesta.
            Il mancato conferimento impedisce l&apos;invio. Il telefono e il
            messaggio sono facoltativi.
          </p>
        </Section>

        <Section title="6. Modalità di trattamento e conservazione">
          <p>
            I dati sono trattati con strumenti elettronici, con misure tecniche
            e organizzative adeguate (HTTPS, accesso limitato, rate limiting sul
            form).
          </p>
          <ul>
            <li>
              <strong>Lead da form:</strong> fino a 24 mesi dall&apos;ultimo
              contatto, salvo obblighi di legge diversi.
            </li>
            <li>
              <strong>Marketing:</strong> fino a revoca del consenso.
            </li>
            <li>
              <strong>Log tecnici:</strong> periodo limitato alla finalità di
              sicurezza (in genere fino a 12 mesi).
            </li>
          </ul>
        </Section>

        <Section title="7. Destinatari e Responsabili">
          <p>
            I dati possono essere trattati da fornitori nominati Responsabili ex
            art. 28 GDPR, tra cui:
          </p>
          <ul>
            <li>Provider di hosting del sito;</li>
            <li>
              Google LLC (Google Workspace / Google Sheets) per archiviazione lead,
              se configurato — con possibile trasferimento verso USA regolato da
              Clausole Contrattuali Standard UE;
            </li>
            <li>
              Fornitori di analytics o advertising, solo previo consenso cookie.
            </li>
          </ul>
          <p>
            L&apos;elenco aggiornato dei Responsabili è disponibile scrivendo a{" "}
            {siteConfig.legal.email}.
          </p>
        </Section>

        <Section title="8. Trasferimenti extra-UE">
          <p>
            Ove i fornitori trattino dati fuori dallo Spazio Economico Europeo, il
            Titolare adotta garanzie adeguate (SCC, decisioni di adeguatezza o
            equivalenti) secondo il Capo V GDPR.
          </p>
        </Section>

        <Section title="9. Cookie e tecnologie simili">
          <p>
            Il sito utilizza cookie tecnici necessari al funzionamento e, previo
            consenso tramite il banner, cookie analitici e di marketing.
          </p>
          <ul>
            <li>
              <strong>Necessari:</strong> preferenze consenso, sicurezza — non
              disattivabili.
            </li>
            <li>
              <strong>Analitici:</strong> statistiche aggregate sull&apos;uso del
              sito (es. Google Analytics, se attivato).
            </li>
            <li>
              <strong>Marketing:</strong> remarketing e misurazione campagne (es.
              Meta Pixel, Google Ads, se attivati).
            </li>
          </ul>
          <p>
            Puoi modificare le preferenze in qualsiasi momento dal pulsante
            &quot;Gestisci preferenze cookie&quot; nel footer o{" "}
            <Link href="/" className="text-primary hover:underline">
              riaprendo il banner
            </Link>
            . Con &quot;solo necessari&quot; non attiviamo analitici/marketing.
          </p>
        </Section>

        <Section title="10. Diritti dell'interessato">
          <p>
            Ai sensi degli artt. 15–22 GDPR hai diritto di accesso, rettifica,
            cancellazione, limitazione, opposizione (anche al marketing), revoca
            del consenso e portabilità (ove applicabile).
          </p>
          <p>
            Richieste a:{" "}
            <a href={`mailto:${siteConfig.legal.email}`}>
              {siteConfig.legal.email}
            </a>
            . Risponderemo entro i termini di legge (di norma 30 giorni).
          </p>
          <p>
            Reclamo al Garante Privacy:{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.garanteprivacy.it
            </a>
            .
          </p>
        </Section>

        <Section title="11. Minori">
          <p>
            I servizi non sono destinati a minori di 18 anni. Se ritieni che un
            minore ci abbia fornito dati, contattaci per la cancellazione.
          </p>
        </Section>

        <Section title="12. Profilazione e decisioni automatizzate">
          <p>
            Non effettuiamo profilazione né decisioni unicamente automatizzate con
            effetti giuridici rilevanti ai sensi dell&apos;art. 22 GDPR.
          </p>
        </Section>

        <Section title="13. Modifiche">
          <p>
            Il Titolare può aggiornare questa informativa. La data in testa indica
            l&apos;ultima revisione. Per modifiche sostanziali, ove richiesto,
            sarà dato avviso sul sito.
          </p>
        </Section>

        <Section title="14. Collegamenti utili">
          <p>
            <Link href="/termini" className="text-primary hover:underline">
              Termini e Condizioni
            </Link>
            {" · "}
            <Link href="/#disclaimer" className="text-primary hover:underline">
              Disclaimer di rischio
            </Link>
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
