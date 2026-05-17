# Trading Landing — One-pager Next.js

Landing page one-pager scalabile per servizi trading (segnali + copy), con:

- **Next.js 16** (App Router) + **TypeScript** strict + **Tailwind CSS v4**
- **shadcn/ui** (primitive accessibili su Base UI)
- **Aceternity-style** animations: Aurora, Spotlight, Sticky Scroll Reveal, Bento Grid, Lamp Effect
- **Motion** (Framer Motion) + **GSAP ScrollTrigger** + **Lenis** smooth scroll
- **React Hook Form + Zod** + invio lead a **Google Sheet** via Apps Script
- Banner **GDPR** (vanilla-cookieconsent) con **Google Consent Mode v2**
- **Risk disclaimer** sticky e pagine **Privacy / Termini** placeholder
- **SEO** completo: metadata, OG image dinamica, sitemap, robots, JSON-LD `FinancialService`

---

## Avvio rapido

```bash
npm install
npm run dev
```

Apri http://localhost:3000.

In modalita' di sviluppo il form lead **funziona anche senza Google Sheet configurato**: i lead vengono loggati in console (vedi `src/lib/sheets.ts`).

---

## Personalizzare i contenuti

Tutto cio' che vede l'utente e' generato da **5 file di config**. Modifica questi, la UI si aggiorna in automatico:

| File                              | Cosa modifica                                                                          |
| --------------------------------- | -------------------------------------------------------------------------------------- |
| `src/config/site.ts`              | Nome brand, URL, descrizione, P.IVA, indirizzo, email, telefono, social                |
| `src/config/services.ts`          | **Array dei servizi**. Aggiungere/togliere/modificare = un solo file. La UI segue.     |
| `src/config/stats.ts`             | Numeri animati (trader attivi, ROI, segnali...)                                        |
| `src/config/testimonials.ts`      | Testimonianze (nome, ruolo, quote, rating)                                             |
| `src/config/faqs.ts`              | Domande frequenti                                                                      |
| `src/config/navigation.ts`        | Voci navbar, footer, pain points, step "Come funziona"                                 |

### Aggiungere un nuovo servizio

Apri `src/config/services.ts` e aggiungi un oggetto all'array:

```ts
{
  slug: "nuovo-servizio",
  category: "copy",          // 'segnali' | 'copy'
  title: "Nome del servizio",
  tagline: "Frase breve",
  description: "Descrizione lunga (3-5 righe).",
  highlights: ["Benefit 1", "Benefit 2", "Benefit 3"],
  icon: "Sparkles",          // nome icona Lucide
  badge: "Novita'",          // opzionale
  cta: { label: "Scopri", href: "#lead" },
  stats: [{ label: "ROI", value: "+22%" }],
}
```

Il servizio appare automaticamente in:

- sezione **Services** (Sticky Scroll Reveal)
- dropdown **Servizio di interesse** nel form lead
- JSON-LD `OfferCatalog` per SEO

---

## Cambiare colori, font, accent

Tutto in `src/app/globals.css`:

- Variabili `--bull` (verde rialzista), `--bear` (rosso ribassista), `--gold` (premium): modifica i valori `oklch(...)`
- Per il dark theme cerca `.dark { ... }`
- I font sono caricati via `next/font/google` in `src/app/layout.tsx` (Inter + Space Grotesk)

---

## Configurare il Google Sheet (lead capture)

### 1. Crea il Google Sheet

Vai su [sheets.google.com](https://sheets.google.com) e crea un nuovo foglio. Nella prima riga inserisci queste colonne (in quest'ordine):

```
createdAt | name | email | phone | service | message | consent | marketing | source | userAgent | ip
```

### 2. Apri lo script editor

Dal Sheet: **Estensioni → Apps Script**.

Sostituisci il contenuto del file `Code.gs` con questo:

```javascript
const SHEET_NAME = 'Foglio1'; // cambia se il tuo foglio si chiama diversamente
const SECRET_HEADER = '';     // opzionale: imposta una stringa segreta e replicala in SHEETS_WEBHOOK_SECRET

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (SECRET_HEADER && e.parameter.secret !== SECRET_HEADER) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'unauthorized' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([
      data.createdAt || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || '',
      data.consent ? 'si' : 'no',
      data.marketing ? 'si' : 'no',
      data.source || '',
      data.userAgent || '',
      data.ip || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3. Pubblica come Web App

1. Click **Distribuisci → Nuova distribuzione**
2. Tipo: **App web**
3. Esegui come: **Me**
4. Chi ha accesso: **Chiunque** (necessario perche' Next.js chiama il webhook in modo anonimo lato server)
5. Click **Distribuisci**, autorizza l'accesso al tuo account Google, e **copia l'URL** che termina con `/exec`

### 4. Configura il progetto

Crea il file `.env.local` (copia da `.env.local.example`):

```env
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbz.../exec
```

Riavvia `npm run dev`. Da ora ogni lead inviato dal form viene scritto sul Sheet.

> Nota sicurezza: l'URL Apps Script resta sempre **server-side** (mai esposto al browser). Il form chiama `/api/lead`, che valida con Zod, applica rate-limit e honeypot, e poi inoltra.

---

## Compliance UE

- **Cookie banner**: gestito da `vanilla-cookieconsent` in `src/components/layout/CookieBanner.tsx`. Categorie: necessari (sempre on) + analytics + marketing. Integrato con **Google Consent Mode v2** (`gtag('consent', 'update', ...)`).
- **Risk disclaimer**: sticky bar sempre visibile in basso (`RiskDisclaimerBar.tsx`) + sezione estesa nel `Footer.tsx`.
- **Pagine legali**: `src/app/privacy/page.tsx` e `src/app/termini/page.tsx`. **Da compilare** con i dati reali del cliente prima del go-live (ragione sociale, P.IVA, indirizzo: vedi `src/config/site.ts`).

---

## Checklist prima del go-live

- [ ] Compilare tutti i campi in `src/config/site.ts` (nome, P.IVA, indirizzo, email, telefono, social)
- [ ] Verificare/aggiornare i servizi in `src/config/services.ts`
- [ ] Aggiornare le testimonianze in `src/config/testimonials.ts` (con consenso scritto dei testimoniati)
- [ ] Aggiornare gli stats in `src/config/stats.ts` con numeri reali e verificabili
- [ ] Aggiornare le FAQ in `src/config/faqs.ts`
- [ ] Rivedere e completare `src/app/privacy/page.tsx` e `src/app/termini/page.tsx` (idealmente con un legale)
- [ ] Configurare `SHEETS_WEBHOOK_URL` in `.env.local` o nella piattaforma di hosting
- [ ] Inserire il dominio reale in `src/config/site.ts` (`url`)
- [ ] Sostituire il `favicon.ico` in `src/app/`
- [ ] Verificare l'immagine OG aprendo `http://localhost:3000/opengraph-image` e personalizzarla in `src/app/opengraph-image.tsx`
- [ ] (Opzionale) Aggiungere Google Analytics 4 caricato condizionalmente in base al consenso analytics
- [ ] Run `npm run build` per validare zero errori TS/lint

---

## Comandi disponibili

```bash
npm run dev     # dev server su http://localhost:3000
npm run build   # build produzione
npm run start   # avvia build di produzione
npm run lint    # lint
```

---

## Struttura cartelle

```
src/
  app/                     route + layout + API
    api/lead/route.ts      POST endpoint che inoltra al Google Sheet
    privacy/, termini/, grazie/
    opengraph-image.tsx    OG image dinamica
    sitemap.ts, robots.ts
  components/
    sections/              le 9 sezioni della one-pager
    layout/                Navbar, Footer, RiskBar, CookieBanner, SmoothScrollProvider
    animations/            wrapper Aceternity/Magic UI semplificati
    forms/LeadForm.tsx
    ui/                    primitive shadcn (Base UI)
    Icon.tsx               mappatura icone Lucide
  config/                  SINGOLA SORGENTE DI VERITA' dei contenuti
  lib/                     utils, schemas Zod, client Sheets, rate-limit
  types/                   tipi TS condivisi
```

---

## Note tecniche

- **Tutto config-driven**: aggiungere/modificare un servizio = toccare `services.ts`. La sezione `Services` (Sticky Scroll Reveal), il dropdown del form, lo schema Zod e il JSON-LD si aggiornano in automatico.
- **GSAP** registra `ScrollTrigger` solo client-side per non rompere SSR.
- **Lenis** rispetta `prefers-reduced-motion`: se l'utente lo richiede, lo smooth scroll viene disattivato.
- **Honeypot anti-spam**: campo `website` nascosto nel form; se viene compilato (bot) il lead viene scartato silenziosamente.
- **Rate limit**: 5 lead/ora per IP, in-memory (per multi-istanza in produzione passare a Redis/Upstash).
