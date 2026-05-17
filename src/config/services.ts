import type { Service } from "@/types";

/**
 * Aggiungere un servizio = aggiungere un oggetto a questo array.
 *
 * - category: 'strutturati' | 'trading' (mai usare "garantito" nel copy pubblico).
 * - coverImage: path in /public, es. '/services/matched-betting.png'.
 */
export const services: Service[] = [
  {
    slug: "matched-betting",
    coverImage: "/services/matched-betting.png",
    category: "strutturati",
    title: "Matched Betting",
    tagline: "Bonus di benvenuto con metodo strutturato, senza capitale iniziale",
    description:
      "Percorso one-shot su siti di scommesse legali con copertura matematica delle puntate, finalizzato a ridurre l’esposizione al rischio sportivo. Obiettivo indicativo storico 150–300 € per ciclo, in base a condizioni dei bookmaker e rispetto delle regole: nessun risultato è assicurato.",
    highlights: [
      "Capitale richiesto: 0 €",
      "Obiettivo indicativo: 150–300 € per ciclo (non assicurato)",
      "Utilizzabile una tantum con la tua identità",
      "Solo per maggiorenni; rispetto normativa ADM e T&C operatori",
    ],
    icon: "Gift",
    badge: "Strutturato",
    cta: { label: "Richiedi info su Matched Betting", href: "#lead" },
    stats: [
      { label: "Capitale iniziale", value: "0 €" },
      { label: "Obiettivo indicativo", value: "150–300 €" },
    ],
  },
  {
    slug: "autocpa",
    coverImage: "/services/autocpa.png",
    category: "strutturati",
    title: "AutoCPA",
    tagline: "Promozioni broker gestite con metodo — obiettivo fino a 400 € per conto",
    description:
      "Processo guidato sulle promozioni che i broker usano per acquisire clienti. Deposito vincolato per almeno 3 mesi (condizione promozionale standard). Obiettivo indicativo fino a 400 € per broker completato: esito variabile per regole broker, tempistiche e operatività.",
    highlights: [
      "Capitale richiesto: 500 € o 1.000 € a broker",
      "Obiettivo indicativo fino a 400 € per broker (non assicurato)",
      "Fondi sul tuo conto; prelievo totale non immediato (min. 3 mesi)",
      "Percorso one-shot con la tua identità",
    ],
    icon: "Building2",
    badge: "Strutturato",
    cta: { label: "Scopri AutoCPA", href: "#lead" },
    stats: [
      { label: "Capitale per broker", value: "500–1.000 €" },
      { label: "Obiettivo max", value: "400 €" },
    ],
  },
  {
    slug: "sala-segnali",
    coverImage: "/services/sala-segnali.png",
    category: "trading",
    title: "Sala Segnali",
    tagline: "Impara a tradare con segnali quotidiani su Forex e oro — anche in copy automatico",
    description:
      "Canale Telegram con setup operativi su Forex e metalli preziosi. Ideale per imparare e decidere in autonomia, con opzione di copy che replica i segnali. Il trading comporta rischio di perdita del capitale; i risultati passati non prefigurano quelli futuri.",
    highlights: [
      "4+ segnali al giorno su Forex e metalli",
      "Copy trading opzionale su ogni segnale",
      "Storico verificabile su richiesta (accesso investor in consulenza)",
      "Percorso formativo, non consulenza finanziaria",
    ],
    icon: "Radio",
    cta: { label: "Entra nella Sala Segnali", href: "#lead" },
    stats: [
      { label: "Frequenza", value: "4+ / giorno" },
      { label: "Mercati", value: "Forex + metalli" },
    ],
  },
  {
    slug: "copytrading-xau",
    coverImage: "/services/copytrading-xau.png",
    category: "trading",
    title: "Copy Trading XAU",
    tagline: "Operatività su oro di un trader londinese — 8+ anni di track record documentato",
    description:
      "Replica automatica su XAUUSD di un trader UK, attivo in sessione mattutina. Profilo bilanciato tra aggressività e conservazione. Rischio di perdita del capitale; performance passate non indicative di risultati futuri.",
    highlights: [
      "Solo XAUUSD, replica automatica sul tuo conto",
      "8+ anni di operatività documentata",
      "Storico verificabile su richiesta (credenziali investor in consulenza)",
      "Adatto a chi preferisce il copy ai segnali manuali",
    ],
    icon: "Gem",
    cta: { label: "Attiva il copy su XAU", href: "#lead" },
    stats: [
      { label: "Asset", value: "XAUUSD" },
      { label: "Track record", value: "8+ anni" },
    ],
  },
  {
    slug: "flip",
    coverImage: "/services/flip.png",
    category: "trading",
    title: "Flip",
    tagline: "Crescita aggressiva in cicli brevi — apertura limitata ogni 1–2 mesi",
    description:
      "Strategia ad altissima intensità, non continuativa (cicli ~3 settimane). Obiettivi ambiziosi comportano elevato rischio di perdita, anche totale del capitale. Dopo eventuale raddoppio iniziale, si può prelevare il capitale di partenza secondo il metodo illustrato in consulenza.",
    highlights: [
      "Profilo molto rischioso: solo capitale che puoi perdere",
      "Cicli di ~3 settimane, ripetuti ogni 1–2 mesi",
      "Non adatto a profili conservativi",
      "Esempio storico verificabile su richiesta (accesso investor)",
    ],
    icon: "Zap",
    badge: "Apertura periodica",
    cta: { label: "Avvisami al prossimo Flip", href: "#lead" },
    stats: [
      { label: "Durata ciclo", value: "~3 settimane" },
      { label: "Disponibilità", value: "1–2 mesi" },
    ],
  },
  {
    slug: "copy-conservativo",
    coverImage: "/services/copy-conservativo.png",
    category: "trading",
    title: "Copy Conservativo",
    tagline: "Profilo difensivo con media storica documentata",
    description:
      "Operatività conservativa con media storica intorno al 6% mensile (non ripetibile in futuro) e drawdown contenuti nel passato. Entry consigliata 10.000 €; alternativa conto cent (100 € di deposito ≈ esposizione 10k, moltiplicatore ×100). Storico su MyFxBook a scopo informativo.",
    highlights: [
      "Media storica ~6%/mese — passato, non promessa futura",
      "Storico pubblico su MyFxBook",
      "Rischio di perdita del capitale sempre presente",
      "Setup guidato su broker compatibili",
    ],
    icon: "Shield",
    badge: "MyFxBook verificato",
    myfxbookUrl:
      "https://www.myfxbook.com/members/MonsonMetrix/maelstrom-apex/11815795",
    cta: { label: "Vedi il copy conservativo", href: "#lead" },
    stats: [
      { label: "Media storica", value: "~6%/mese" },
      { label: "Entry minima", value: "10.000 €" },
    ],
  },
];

export const serviceSelectOptions = services.map((s) => ({
  value: s.slug,
  label: s.title,
}));
