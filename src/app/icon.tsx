import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon Cuto On Chain — sostituisce il default Next.js (simile al logo Vercel). */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0d10",
          borderRadius: 8,
          border: "2px solid #3d9a6a",
        }}
      >
        <div
          style={{
            color: "#7fd9a5",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.05em",
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size }
  );
}
