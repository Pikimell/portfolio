import { ImageResponse } from "next/og";
export const alt = "Volodymyr Pashchenko — Full-stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#0a0b0d",
        color: "#eceef1",
        padding: 70,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 64, fontWeight: 700, color: "#c8ef87" }}>VP</span>
        <span style={{ fontSize: 19 }}>Volodymyr Pashchenko</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 66, letterSpacing: -3 }}>
          I build products end to end —
        </span>
        <span style={{ fontSize: 66, letterSpacing: -3, color: "#c8ef87" }}>
          from interface to infrastructure.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 21,
        }}
      >
        <span>Full-stack Developer</span>
        <span>React · Next.js · Node.js · AWS · iOS</span>
      </div>
    </div>,
    size,
  );
}
