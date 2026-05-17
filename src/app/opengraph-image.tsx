import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #050708 0%, #0a0d10 50%, #0e1a14 100%)",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#7fd9a5",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(127, 217, 165, 0.15)",
              border: "1px solid rgba(127, 217, 165, 0.4)",
              fontSize: 30,
            }}
          >
            ▲
          </div>
          <span style={{ fontWeight: 600 }}>{siteConfig.name}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            Percorsi strutturati e trading documentato.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a3a3a3",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Matched betting, AutoCPA, segnali, copy XAU, Flip e copy conservativo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#737373",
          }}
        >
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
          <span style={{ color: "#e8b952" }}>Cuto On Chain</span>
        </div>
      </div>
    ),
    size
  );
}
