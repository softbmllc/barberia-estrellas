

// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://barberiadelasestrellas.vercel.app").replace(/\/$/, "");
const locales = ["es", "en"] as const;
const staticSegments = ["", "servicios", "equipo", "prensa", "galeria", "social-club", "ubicacion", "reservar"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const seg of staticSegments) {
      const path = seg ? `/${locale}/${seg}` : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency: "weekly",
        priority: seg === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}