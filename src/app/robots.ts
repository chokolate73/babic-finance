import type { MetadataRoute } from "next";

const BASE_URL = "https://www.babicfinance.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/karriere/thank-you", "/de/karriere/thank-you"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
