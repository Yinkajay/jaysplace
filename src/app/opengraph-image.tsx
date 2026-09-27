import { ImageResponse } from "next/og";

export const alt = "Jays Place coming soon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#efeee8",
        color: "#1f1f1f",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid #d7d9cc",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 32,
            fontWeight: 600,
            gap: 16,
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#1f1f1f",
              borderRadius: 999,
              color: "#f7f5ef",
              display: "flex",
              height: 56,
              justifyContent: "center",
              width: 56,
            }}
          >
            J.
          </div>
          Jays Place
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#60745d", fontSize: 24, fontWeight: 600 }}>
            WELLNESS AND RECREATION
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              marginTop: 24,
              maxWidth: 900,
            }}
          >
            A new place to feel more alive.
          </div>
          <div style={{ color: "#60745d", fontSize: 24, marginTop: 24 }}>
            Coming soon
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
