import { ImageResponse } from "next/og";

export const alt = "타잔 아카이브";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const text = "타잔 아카이브1918–2016 · 영화 배우 시대별";
  const font = await fetch(`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&text=${encodeURIComponent(text)}`)
    .then((r) => r.text())
    .then((css) => css.match(/src: url\((.+?)\)/)?.[1])
    .then((url) => (url ? fetch(url).then((r) => r.arrayBuffer()) : null))
    .catch(() => null);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", background: "#0D110C", color: "#ECE6D6", padding: "72px", fontFamily: "NotoKR" }}>
        <div style={{ color: "#6F9A5A", fontSize: 28, letterSpacing: 6 }}>TARZAN ARCHIVE</div>
        <div style={{ marginTop: 24, fontSize: 76, color: "#C9A45A" }}>타잔 아카이브</div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#9FA79A" }}>1918–2016 · 영화 배우 시대별</div>
      </div>
    ),
    { ...size, fonts: font ? [{ name: "NotoKR", data: font, weight: 700 }] : [] },
  );
}
