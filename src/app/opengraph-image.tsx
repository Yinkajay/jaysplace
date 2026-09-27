import { ImageResponse } from "next/og";

export const alt = "Jaysplace, a considered place to start";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#131209",
        color: "#f5efe8",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "flex-start",
          border: "2px solid #313131",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
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
              background: "#ffb000",
              borderRadius: 999,
              color: "#131209",
              display: "flex",
              height: 56,
              justifyContent: "center",
              width: 56,
            }}
          >
            J
          </div>
          Jaysplace
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffb000", fontSize: 24, fontWeight: 600 }}>
            Your workspace is ready
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
            Your next idea has a proper place to start.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
