import type { MetadataRoute } from "next";
import { actors } from "@/data/actors";
import { films } from "@/data/films";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/eras", "/films", "/actors", "/tv", "/credits", ...films.map((f) => `/films/${f.slug}`), ...actors.map((a) => `/actors/${a.slug}`)];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
