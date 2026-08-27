import type { MetadataRoute } from "next";
import { writing } from "@/data/writing";

// TODO: replace with your real domain once deployed
const siteUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date() },
    ...writing.map((entry) => ({
      url: `${siteUrl}/writing/${entry.slug}`,
      lastModified: entry.date,
    })),
  ];
}
