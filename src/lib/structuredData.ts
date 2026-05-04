export const SITE_URL = "https://www.babicfinance.de";
export const ORG_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/preview.webp`;

export type Locale = "ru" | "de" | "uk";

const localeTag: Record<Locale, string> = {
  ru: "ru-RU",
  de: "de-DE",
  uk: "uk-UA",
};

const localeUrl: Record<Locale, string> = {
  ru: SITE_URL,
  de: `${SITE_URL}/de`,
  uk: `${SITE_URL}/ua`,
};

export function getOrganizationLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": ORG_ID,
    name: "Babic Finance",
    alternateName: ["Vladislav Babic", "Владислав Бабич", "Vladislav Babich"],
    url: localeUrl[locale],
    inLanguage: localeTag[locale],
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 1200,
      height: 630,
    },
    image: LOGO_URL,
    telephone: "+49-2241-8989424",
    email: "Vladislav.Babic@dvag.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mottmannstr. 8",
      postalCode: "53842",
      addressLocality: "Troisdorf",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.8120883,
      longitude: 7.1290231,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Germany",
    },
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs: [
      "https://www.dvag.de/vladislav.babic/",
      "https://www.dvag.de/vladislav.babic/karriere.html",
      "https://www.google.com/maps/place/?q=place_id:ChIJYxNUvUrfvkcR9wFAfsljmig",
      "https://t.me/babic_fin",
      "https://www.facebook.com/p/Vladislav-Babic-61574094595836/",
    ],
  };
}

export function getPersonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Vladislav Babic",
    alternateName: ["Владислав Бабич", "Vladislav Babich"],
    jobTitle: "Vermögensberater",
    image: LOGO_URL,
    url: SITE_URL,
    worksFor: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mottmannstr. 8",
      postalCode: "53842",
      addressLocality: "Troisdorf",
      addressCountry: "DE",
    },
    telephone: "+49-2241-8989424",
    email: "Vladislav.Babic@dvag.de",
    sameAs: [
      "https://www.dvag.de/vladislav.babic/",
      "https://www.dvag.de/vladislav.babic/karriere.html",
      "https://www.google.com/maps/place/?q=place_id:ChIJYxNUvUrfvkcR9wFAfsljmig",
      "https://t.me/babic_fin",
      "https://www.facebook.com/p/Vladislav-Babic-61574094595836/",
    ],
  };
}

export function getWebSiteLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Babic Finance",
    inLanguage: localeTag[locale],
    publisher: { "@id": ORG_ID },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface FaqQA {
  q: string;
  aText: string;
}

export function getServiceLd(opts: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${opts.url}#service`,
    name: opts.name,
    description: opts.description,
    provider: { "@id": ORG_ID },
    serviceType: "FinancialService",
    areaServed: [
      { "@type": "City", name: "Troisdorf" },
      { "@type": "City", name: "Bonn" },
      { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
    ],
    url: opts.url,
    inLanguage: localeTag[opts.locale],
  };
}

export function getFaqLd(items: FaqQA[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: localeTag[locale],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.aText,
      },
    })),
  };
}
