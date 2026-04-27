import type { MetadataRoute } from "next";

const BASE_URL = "https://fin-1.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${BASE_URL}/`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/de`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: {
          ru: `${BASE_URL}/`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/karriere/quereinstieg`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/quereinstieg`,
          de: `${BASE_URL}/de/karriere/quereinstieg`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/karriere/quereinstieg`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/quereinstieg`,
          de: `${BASE_URL}/de/karriere/quereinstieg`,
        },
      },
    },
    {
      url: `${BASE_URL}/karriere/nebenberuf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/karriere/buergergeld`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/buergergeld`,
          de: `${BASE_URL}/de/karriere/buergergeld`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/karriere/buergergeld`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/buergergeld`,
          de: `${BASE_URL}/de/karriere/buergergeld`,
        },
      },
    },
    {
      url: `${BASE_URL}/klienty`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${BASE_URL}/klienty`,
          de: `${BASE_URL}/de/klienty`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/klienty`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/klienty`,
          de: `${BASE_URL}/de/klienty`,
        },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
