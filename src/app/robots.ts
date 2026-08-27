import type { MetadataRoute } from "next";

// TODO: replace with your real domain once deployed
const siteUrl = "https://example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
