/**
 * Client server-side per inoltrare il lead allo Apps Script webhook
 * collegato al Google Sheet. L'URL non e' mai esposto al browser.
 */
import type { LeadInput } from "@/lib/schemas";

export type SheetPayload = Omit<LeadInput, "website"> & {
  source: string;
  userAgent: string;
  ip: string;
  createdAt: string;
};

export async function forwardLeadToSheet(payload: SheetPayload) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[lead] SHEETS_WEBHOOK_URL non impostato. Lead loggato qui sotto invece di essere inviato:"
      );
      console.warn(payload);
      return { ok: true, mocked: true };
    }
    throw new Error("SHEETS_WEBHOOK_URL non configurato");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Webhook fallito (${res.status}): ${text}`);
  }
  return { ok: true, mocked: false };
}
