import type { Metadata } from "next";
import { getServiceBySlug, type Locale } from "@/data/services";
import { SITE_URL } from "@/lib/structuredData";

const ogLocale: Record<Locale, string> = {
  de: "de_DE",
  ru: "ru_RU",
  ua: "uk_UA",
};

export function buildServiceMetadata(
  slug: string,
  locale: Locale,
  pathPrefix: string,
): Metadata {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const c = service.content[locale];
  const url = `${SITE_URL}${pathPrefix}/${slug}`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        de: `${SITE_URL}/de/leistungen/${slug}`,
        ru: `${SITE_URL}/uslugi/${slug}`,
        uk: `${SITE_URL}/ua/poslugy/${slug}`,
        "x-default": `${SITE_URL}/de/leistungen/${slug}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      siteName: "Babic Finance",
      type: "website",
      locale: ogLocale[locale],
      images: ["/preview.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: ["/preview.webp"],
    },
    robots:
      slug === "pkv-beratung"
        ? undefined
        : { index: false, follow: true },
  };
}
