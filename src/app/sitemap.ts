import type { MetadataRoute } from "next";
import { articlesDe } from "@/data/blog.de";

const BASE_URL = "https://www.fin-1.de";

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
  "/de/finanzberatung": "2026-05-06",
  "/de/altersvorsorge": "2026-05-06",
  "/de/versicherungen": "2026-05-06",
  "/de/geldanlage-investmentfonds": "2026-05-06",
  "/de/immobilienfinanzierung": "2026-05-06",
  "/de/bausparen": "2026-05-06",
  "/finansovye-konsultatsii": "2026-05-06",
  "/pensionnoe-obespechenie": "2026-05-06",
  "/strakhovanie": "2026-05-06",
  "/investitsii-i-fondy": "2026-05-06",
  "/ipoteka": "2026-05-06",
  "/bausparen": "2026-05-06",
  "/ua/finansovi-konsultatsii": "2026-05-06",
  "/ua/pensiine-zabezpechennia": "2026-05-06",
  "/ua/strakhuvannia": "2026-05-06",
  "/ua/investytsii-i-fondy": "2026-05-06",
  "/ua/ipoteka": "2026-05-06",
  "/ua/bausparen": "2026-05-06",
};

const lm = (path: string) => new Date(lastModByPath[path]);

export default function sitemap(): MetadataRoute.Sitemap {
  const deBlogArticles: MetadataRoute.Sitemap = articlesDe.map((a) => ({
    url: `${BASE_URL}/de/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
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
    {
      url: `${BASE_URL}/de/blog`,
      lastModified: lm("/de/blog"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...deBlogArticles,
    {
      url: `${BASE_URL}/de/finanzberatung`,
      lastModified: lm("/de/finanzberatung"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/finanzberatung`,
          ru: `${BASE_URL}/finansovye-konsultatsii`,
          uk: `${BASE_URL}/ua/finansovi-konsultatsii`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/altersvorsorge`,
      lastModified: lm("/de/altersvorsorge"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/altersvorsorge`,
          ru: `${BASE_URL}/pensionnoe-obespechenie`,
          uk: `${BASE_URL}/ua/pensiine-zabezpechennia`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/versicherungen`,
      lastModified: lm("/de/versicherungen"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/versicherungen`,
          ru: `${BASE_URL}/strakhovanie`,
          uk: `${BASE_URL}/ua/strakhuvannia`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/geldanlage-investmentfonds`,
      lastModified: lm("/de/geldanlage-investmentfonds"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/geldanlage-investmentfonds`,
          ru: `${BASE_URL}/investitsii-i-fondy`,
          uk: `${BASE_URL}/ua/investytsii-i-fondy`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/immobilienfinanzierung`,
      lastModified: lm("/de/immobilienfinanzierung"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/immobilienfinanzierung`,
          ru: `${BASE_URL}/ipoteka`,
          uk: `${BASE_URL}/ua/ipoteka`,
        },
      },
    },
    {
      url: `${BASE_URL}/de/bausparen`,
      lastModified: lm("/de/bausparen"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: `${BASE_URL}/de/bausparen`,
          ru: `${BASE_URL}/bausparen`,
          uk: `${BASE_URL}/ua/bausparen`,
        },
      },
    },
    {
      url: `${BASE_URL}/finansovye-konsultatsii`,
      lastModified: lm("/finansovye-konsultatsii"),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          ru: `${BASE_URL}/finansovye-konsultatsii`,
          de: `${BASE_URL}/de/finanzberatung`,
          uk: `${BASE_URL}/ua/finansovi-konsultatsii`,
        },
      },
    },
    {
      url: `${BASE_URL}/pensionnoe-obespechenie`,
      lastModified: lm("/pensionnoe-obespechenie"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/pensionnoe-obespechenie`,
          de: `${BASE_URL}/de/altersvorsorge`,
          uk: `${BASE_URL}/ua/pensiine-zabezpechennia`,
        },
      },
    },
    {
      url: `${BASE_URL}/strakhovanie`,
      lastModified: lm("/strakhovanie"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/strakhovanie`,
          de: `${BASE_URL}/de/versicherungen`,
          uk: `${BASE_URL}/ua/strakhuvannia`,
        },
      },
    },
    {
      url: `${BASE_URL}/investitsii-i-fondy`,
      lastModified: lm("/investitsii-i-fondy"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/investitsii-i-fondy`,
          de: `${BASE_URL}/de/geldanlage-investmentfonds`,
          uk: `${BASE_URL}/ua/investytsii-i-fondy`,
        },
      },
    },
    {
      url: `${BASE_URL}/ipoteka`,
      lastModified: lm("/ipoteka"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/ipoteka`,
          de: `${BASE_URL}/de/immobilienfinanzierung`,
          uk: `${BASE_URL}/ua/ipoteka`,
        },
      },
    },
    {
      url: `${BASE_URL}/bausparen`,
      lastModified: lm("/bausparen"),
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${BASE_URL}/bausparen`,
          de: `${BASE_URL}/de/bausparen`,
          uk: `${BASE_URL}/ua/bausparen`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/finansovi-konsultatsii`,
      lastModified: lm("/ua/finansovi-konsultatsii"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/finansovi-konsultatsii`,
          de: `${BASE_URL}/de/finanzberatung`,
          ru: `${BASE_URL}/finansovye-konsultatsii`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/pensiine-zabezpechennia`,
      lastModified: lm("/ua/pensiine-zabezpechennia"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/pensiine-zabezpechennia`,
          de: `${BASE_URL}/de/altersvorsorge`,
          ru: `${BASE_URL}/pensionnoe-obespechenie`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/strakhuvannia`,
      lastModified: lm("/ua/strakhuvannia"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/strakhuvannia`,
          de: `${BASE_URL}/de/versicherungen`,
          ru: `${BASE_URL}/strakhovanie`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/investytsii-i-fondy`,
      lastModified: lm("/ua/investytsii-i-fondy"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/investytsii-i-fondy`,
          de: `${BASE_URL}/de/geldanlage-investmentfonds`,
          ru: `${BASE_URL}/investitsii-i-fondy`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/ipoteka`,
      lastModified: lm("/ua/ipoteka"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/ipoteka`,
          de: `${BASE_URL}/de/immobilienfinanzierung`,
          ru: `${BASE_URL}/ipoteka`,
        },
      },
    },
    {
      url: `${BASE_URL}/ua/bausparen`,
      lastModified: lm("/ua/bausparen"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          uk: `${BASE_URL}/ua/bausparen`,
          de: `${BASE_URL}/de/bausparen`,
          ru: `${BASE_URL}/bausparen`,
        },
      },
    },
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
