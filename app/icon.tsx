import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#FBF8F5",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 18,
            height: 22,
            background: "#C1440E",
            borderRadius: "10px 10px 2px 2px",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
