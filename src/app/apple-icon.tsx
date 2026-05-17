import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: 36,
          border: "4px solid #3d9a6a",
        }}
      >
        <div
          style={{
            color: "#7fd9a5",
            fontSize: 96,
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
