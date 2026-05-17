import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Servizi", href: "#servizi" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Risultati", href: "#risultati" },
  { label: "Testimonianze", href: "#testimonianze" },
  { label: "FAQ", href: "#faq" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Strutturati",
    items: [
      { label: "Matched Betting", href: "#servizi" },
      { label: "AutoCPA", href: "#servizi" },
    ],
  },
  {
    title: "Trading",
    items: [
      { label: "Sala Segnali", href: "#servizi" },
      { label: "Copy XAU", href: "#servizi" },
      { label: "Flip", href: "#servizi" },
      { label: "Copy Conservativo", href: "#servizi" },
    ],
  },
  {
    title: "Legale",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Termini e Condizioni", href: "/termini" },
      { label: "Disclaimer di rischio", href: "#disclaimer" },
    ],
  },
];

export const problemPoints = [
  {
    title: "Vuoi metodi chiari senza stare ai grafici",
    description:
      "Non hai tempo di imparare il trading, ma vuoi percorsi spiegati con regole, vincoli e aspettative realistiche — non promesse irrealistiche.",
    icon: "Clock",
  },
  {
    title: "Confondi obiettivi indicativi con promesse certe",
    description:
      "Bonus, promozioni broker e trading sono cose diverse. Servono numeri verificabili, rischi dichiarati e zero linguaggio che prometta guadagni sicuri.",
    icon: "AlertTriangle",
  },
  {
    title: "Non sai quale servizio fa per te",
    description:
      "Zero capitale, deposito vincolato, segnali, copy su oro, flip o crescita conservativa: in call ti indirizziamo senza pressione commerciale.",
    icon: "Users",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Compili il form e ti contattiamo",
    description:
      "Indichi nome, email e servizio di interesse. Ti richiamiamo entro 24 ore per obiettivi, capitale e profilo di rischio.",
  },
  {
    number: "02",
    title: "Ti indirizziamo sul percorso giusto",
    description:
      "Strutturati (matched betting, AutoCPA) o trading (segnali, copy, flip): vincoli, tempi e rischi spiegati prima di iniziare.",
  },
  {
    number: "03",
    title: "Configurazione guidata",
    description:
      "Broker, Telegram o copy: accompagnamento passo passo. Credenziali investor solo in consulenza privata, mai pubblicate sul sito.",
  },
  {
    number: "04",
    title: "Monitoraggio e trasparenza",
    description:
      "Sul trading: MyFxBook dove pubblico o accesso investor su richiesta. Sui percorsi strutturati: report a fine ciclo, senza promesse di esito.",
  },
];
