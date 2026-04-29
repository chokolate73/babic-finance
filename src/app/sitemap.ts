import type { MetadataRoute } from "next";
import { articlesDe } from "@/data/blog.de";

const BASE_URL = "https://fin-1.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const deBlogArticles: MetadataRoute.Sitemap = articlesDe.map((a) => ({
    url: `${BASE_URL}/de/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
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
          uk: `${BASE_URL}/ua`,
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
          uk: `${BASE_URL}/ua`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: {
          ru: `${BASE_URL}/`,
          de: `${BASE_URL}/de`,
          uk: `${BASE_URL}/ua`,
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
          uk: `${BASE_URL}/ua/karriere/quereinstieg`,
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
          uk: `${BASE_URL}/ua/karriere/quereinstieg`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/karriere/quereinstieg`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/quereinstieg`,
          de: `${BASE_URL}/de/karriere/quereinstieg`,
          uk: `${BASE_URL}/ua/karriere/quereinstieg`,
        },
      },
    },
    {
      url: `${BASE_URL}/karriere/nebenberuf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/nebenberuf`,
          uk: `${BASE_URL}/ua/karriere/nebenberuf`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/karriere/nebenberuf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/nebenberuf`,
          uk: `${BASE_URL}/ua/karriere/nebenberuf`,
        },
      },
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
          uk: `${BASE_URL}/ua/karriere/buergergeld`,
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
          uk: `${BASE_URL}/ua/karriere/buergergeld`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/karriere/buergergeld`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/karriere/buergergeld`,
          de: `${BASE_URL}/de/karriere/buergergeld`,
          uk: `${BASE_URL}/ua/karriere/buergergeld`,
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
          uk: `${BASE_URL}/ua/klienty`,
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
          uk: `${BASE_URL}/ua/klienty`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/klienty`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/klienty`,
          de: `${BASE_URL}/de/klienty`,
          uk: `${BASE_URL}/ua/klienty`,
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
      url: `${BASE_URL}/de/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...deBlogArticles,
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
