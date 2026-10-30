import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon com as iniciais do escritório nas cores da marca.
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
          background: "#ae1016",
          color: "#ffffff",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: -0.5,
          fontFamily: "serif",
          borderRadius: 4,
        }}
      >
        MS
      </div>
    ),
    { ...size }
  );
}
