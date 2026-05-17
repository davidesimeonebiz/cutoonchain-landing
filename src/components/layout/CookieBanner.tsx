"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/**
 * Banner GDPR con vanilla-cookieconsent v3.
 * - Categorie: necessari (sempre attivi) + analytics + marketing.
 * - Integrato con Google Consent Mode v2 (gtag) per quando aggiungerai GA/Ads.
 * - Riapribile via window.dispatchEvent(new Event('cc:reopen')) (vedi Footer).
 */
export function CookieBanner() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: () => void = () => {};

    (async () => {
      const cc = await import("vanilla-cookieconsent");
      if (cancelled) return;

      cc.run({
        guiOptions: {
          consentModal: { layout: "box", position: "bottom right" },
          preferencesModal: { layout: "box" },
        },
        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {},
          marketing: {},
        },
        language: {
          default: "it",
          translations: {
            it: {
              consentModal: {
                title: "Usiamo i cookie",
                description:
                  "Usiamo cookie tecnici (necessari) e, solo se acconsenti, cookie analitici e di marketing. Puoi accettare tutto, usare solo i necessari o personalizzare. I dati raccolti con il tuo consenso sono trattati come indicato nella Privacy Policy.",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Solo necessari",
                showPreferencesBtn: "Personalizza",
                footer: '<a href="/privacy">Privacy Policy</a> · <a href="/termini">Termini</a>',
              },
              preferencesModal: {
                title: "Preferenze cookie",
                acceptAllBtn: "Accetta tutto",
                acceptNecessaryBtn: "Solo necessari",
                savePreferencesBtn: "Salva preferenze",
                closeIconLabel: "Chiudi",
                sections: [
                  {
                    title: "Cookie strettamente necessari",
                    description:
                      "Indispensabili per il corretto funzionamento del sito. Non possono essere disattivati.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Cookie analitici",
                    description:
                      "Ci aiutano a capire come gli utenti usano il sito (in forma anonima/aggregata) per migliorarlo.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Cookie di marketing",
                    description:
                      "Usati per mostrare contenuti e pubblicita' piu' rilevanti, anche su siti terzi.",
                    linkedCategory: "marketing",
                  },
                  {
                    title: "Maggiori informazioni",
                    description:
                      'Per dettagli consulta la nostra <a href="/privacy">Privacy Policy</a>.',
                  },
                ],
              },
            },
          },
        },
        onConsent: ({ cookie }) => {
          updateConsentMode(cookie.categories);
        },
        onChange: ({ cookie }) => {
          updateConsentMode(cookie.categories);
        },
      });

      const reopen = () => cc.showPreferences();
      window.addEventListener("cc:reopen", reopen);
      cleanup = () => window.removeEventListener("cc:reopen", reopen);
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}

function updateConsentMode(categories: string[]) {
  if (typeof window === "undefined") return;
  type Gtag = (...args: unknown[]) => void;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: Gtag };
  w.dataLayer = w.dataLayer || [];
  const gtag: Gtag =
    w.gtag ||
    function (...args: unknown[]) {
      w.dataLayer!.push(args);
    };
  w.gtag = gtag;

  const granted = (cat: string) => (categories.includes(cat) ? "granted" : "denied");

  gtag("consent", "update", {
    ad_storage: granted("marketing"),
    ad_user_data: granted("marketing"),
    ad_personalization: granted("marketing"),
    analytics_storage: granted("analytics"),
  });
}
