import { notFound } from "next/navigation";
import { getServiceBySlug, type Locale } from "@/data/services";
import ServicePageLayout from "./ServicePageLayout";
import PKVBeratungContent from "./PKVBeratungContent";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  getServiceLd,
  getBreadcrumbLd,
  getFaqLd,
} from "@/lib/structuredData";
import { pkvContent } from "@/data/pkv-content";

const localeBreadcrumbs: Record<
  Locale,
  { home: string; services: string; homeUrl: string; klientyUrl: string }
> = {
  de: {
    home: "Startseite",
    services: "Leistungen",
    homeUrl: `${SITE_URL}/de`,
    klientyUrl: `${SITE_URL}/de/klienty`,
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    homeUrl: `${SITE_URL}`,
    klientyUrl: `${SITE_URL}/klienty`,
  },
  ua: {
    home: "Головна",
    services: "Послуги",
    homeUrl: `${SITE_URL}/ua`,
    klientyUrl: `${SITE_URL}/ua/klienty`,
  },
};

const schemaLocale: Record<Locale, "de" | "ru" | "uk"> = {
  de: "de",
  ru: "ru",
  ua: "uk",
};

export default function ServicePage({
  slug,
  locale,
  pathPrefix,
}: {
  slug: string;
  locale: Locale;
  pathPrefix: string;
}) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}${pathPrefix}/${slug}`;
  const c = service.content[locale];
  const bc = localeBreadcrumbs[locale];

  const serviceLd = getServiceLd({
    name: c.title,
    description: c.metaDescription,
    url,
    locale: schemaLocale[locale],
  });

  const breadcrumbLd = getBreadcrumbLd([
    { name: bc.home, url: bc.homeUrl },
    { name: bc.services, url: bc.klientyUrl },
    { name: c.title, url },
  ]);

  const isPKV = slug === "pkv-beratung";

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={breadcrumbLd} />
      {isPKV && (
        <JsonLd
          data={getFaqLd(
            pkvContent[locale].faq.map((f) => ({ q: f.q, aText: f.a })),
            schemaLocale[locale],
          )}
        />
      )}
      {isPKV ? (
        <PKVBeratungContent locale={locale} />
      ) : (
        <ServicePageLayout service={service} locale={locale} />
      )}
    </>
  );
}
