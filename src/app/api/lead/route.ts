import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/schemas";
import { forwardLeadToSheet } from "@/lib/sheets";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const rl = rateLimit({
    key: `lead:${ip}`,
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Troppi tentativi. Riprova tra un'ora." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body non valido" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Dati non validi",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 400 }
    );
  }

  const { website, consent, ...rest } = parsed.data;

  // Honeypot: bot fills hidden field -> silently ignore
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    await forwardLeadToSheet({
      ...rest,
      consent,
      source: req.headers.get("referer") ?? "direct",
      userAgent: req.headers.get("user-agent") ?? "unknown",
      ip,
      createdAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] forward error:", err);
    return NextResponse.json(
      { error: "Errore di salvataggio. Riprova piu' tardi." },
      { status: 502 }
    );
  }
}
