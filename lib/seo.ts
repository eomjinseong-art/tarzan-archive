import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function canonicalUrl(path: string) {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(text: string, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max - 1).trim()}…`;
}

export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const isHome = path === "/";
  const full = isHome ? SITE_NAME : `${title} · ${SITE_NAME}`;
  const url = canonicalUrl(path);
  const text = clip(description);
  return {
    title: isHome ? { absolute: SITE_NAME } : title,
    description: text,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "ko_KR", url, siteName: SITE_NAME, title: full, description: text, images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title: full, description: text, images: ["/opengraph-image"] },
  };
}
