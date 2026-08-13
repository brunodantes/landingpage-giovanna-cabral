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
          background: "#FBF8F5",
        }}
      >
        <div style={{ position: "relative", display: "flex", width: 92, height: 114 }}>
          <div
            style={{
              position: "absolute",
              top: -22,
              left: -32,
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "8px solid #C1440E",
              opacity: 0.55,
            }}
          />
          <div
            style={{
              width: 92,
              height: 114,
              background: "#C1440E",
              borderRadius: "50px 50px 12px 12px",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
