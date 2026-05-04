import type { MetadataRoute } from "next";
import { articlesDe } from "@/data/blog.de";
import { articles } from "@/data/blog";
import { services } from "@/data/services";

const BASE_URL = "https://www.babicfinance.de";
const SERVICES_LASTMOD = new Date("2026-04-30");

const lastModByPath: Record<string, string> = {
  "/": "2026-03-15",
  "/de": "2026-03-15",
  "/ua": "2026-03-15",
  "/klienty": "2026-04-30",
  "/de/klienty": "2026-04-30",
  "/ua/klienty": "2026-04-30",
  "/karriere/quereinstieg": "2026-02-10",
  "/de/karriere/quereinstieg": "2026-02-10",
  "/ua/karriere/quereinstieg": "2026-02-10",
  "/karriere/buergergeld": "2026-02-10",
  "/de/karriere/buergergeld": "2026-02-10",
  "/ua/karriere/buergergeld": "2026-02-10",
  "/karriere/nebenberuf": "2026-03-01",
  "/ua/karriere/nebenberuf": "2026-03-01",
  "/blog": "2026-03-01",
  "/de/blog": "2026-04-30",
  "/impressum": "2026-01-15",
  "/datenschutz": "2026-01-15",
};

const lm = (path: string) => new Date(lastModByPath[path]);

export default function sitemap(): MetadataRoute.Sitemap {
  const deBlogArticles: MetadataRoute.Sitemap = articlesDe.map((a) => ({
    url: `${BASE_URL}/de/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const ruBlogArticles: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((s) => {
    const deUrl = `${BASE_URL}/de/leistungen/${s.slug}`;
    const ruUrl = `${BASE_URL}/uslugi/${s.slug}`;
    const uaUrl = `${BASE_URL}/ua/poslugy/${s.slug}`;
    const languages = { de: deUrl, ru: ruUrl, uk: uaUrl };
    const priority = s.slug === "pkv-beratung" ? 0.8 : 0.6;
    return [
      {
        url: deUrl,
        lastModified: SERVICES_LASTMOD,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: ruUrl,
        lastModified: SERVICES_LASTMOD,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: uaUrl,
        lastModified: SERVICES_LASTMOD,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages },
      },
    ];
  });

  return [
    {
      url: `${BASE_URL}`,
      lastModified: lm("/"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ru: `${BASE_URL}`,
          de: `${BASE_URL}/de`,
          uk: `${BASE_URL}/ua`,
        },
      },
    },
    {
      url: `${BASE_URL}/de`,
      lastModified: lm("/de"),
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: {
          ru: `${BASE_URL}`,
          de: `${BASE_URL}/de`,
          uk: `${BASE_URL}/ua`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua`,
      lastModified: lm("/ua"),
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: {
          ru: `${BASE_URL}`,
          de: `${BASE_URL}/de`,
          uk: `${BASE_URL}/ua`,
        },
      },
    },
    {
      url: `${BASE_URL}/karriere/quereinstieg`,
      lastModified: lm("/karriere/quereinstieg"),
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
      lastModified: lm("/de/karriere/quereinstieg"),
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
      lastModified: lm("/ua/karriere/quereinstieg"),
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
      lastModified: lm("/karriere/nebenberuf"),
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
      lastModified: lm("/ua/karriere/nebenberuf"),
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
      lastModified: lm("/karriere/buergergeld"),
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
      lastModified: lm("/de/karriere/buergergeld"),
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
      lastModified: lm("/ua/karriere/buergergeld"),
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
      lastModified: lm("/klienty"),
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
      lastModified: lm("/de/klienty"),
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
      lastModified: lm("/ua/klienty"),
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
      lastModified: lm("/blog"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...ruBlogArticles,
    {
      url: `${BASE_URL}/de/blog`,
      lastModified: lm("/de/blog"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...deBlogArticles,
    ...serviceRoutes,
    {
      url: `${BASE_URL}/impressum`,
      lastModified: lm("/impressum"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: lm("/datenschutz"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
