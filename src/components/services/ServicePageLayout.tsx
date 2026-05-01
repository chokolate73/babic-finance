import Link from "next/link";
import type { Service, Locale } from "@/data/services";

interface Props {
  service: Service;
  locale: Locale;
}

const labels: Record<
  Locale,
  {
    home: string;
    services: string;
    backToServices: string;
    cta: string;
    whatsapp: string;
    placeholder: string;
    homeHref: string;
    klientyHref: string;
  }
> = {
  de: {
    home: "Startseite",
    services: "Leistungen",
    backToServices: "Zurück zur Übersicht",
    cta: "Beratungstermin vereinbaren",
    whatsapp: "Auf WhatsApp schreiben",
    placeholder:
      "Diese Seite wird gerade ausgebaut. Für eine persönliche Beratung - direkt Kontakt aufnehmen.",
    homeHref: "/de",
    klientyHref: "/de/klienty",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    backToServices: "Все услуги",
    cta: "Записаться на консультацию",
    whatsapp: "Написать в WhatsApp",
    placeholder:
      "Страница в процессе подготовки. Для личной консультации - пиши напрямую.",
    homeHref: "/",
    klientyHref: "/klienty",
  },
  ua: {
    home: "Головна",
    services: "Послуги",
    backToServices: "Усі послуги",
    cta: "Записатися на консультацію",
    whatsapp: "Написати в WhatsApp",
    placeholder:
      "Сторінка в процесі підготовки. Для особистої консультації - пиши напряму.",
    homeHref: "/ua",
    klientyHref: "/ua/klienty",
  },
};

export default function ServicePageLayout({ service, locale }: Props) {
  const c = service.content[locale];
  const l = labels[locale];

  return (
    <article className="min-h-screen bg-cream">
      <div className="container mx-auto max-w-3xl px-4 py-16 lg:py-24">
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href={l.homeHref} className="hover:text-navy">
            {l.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href={l.klientyHref} className="hover:text-navy">
            {l.services}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{c.title}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-bold text-navy mb-6">
          {c.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          {c.shortDescription}
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground italic">[{l.placeholder}]</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="https://wa.me/491784743490"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold text-navy font-semibold px-6 py-3.5 hover:opacity-90 transition-all"
          >
            {l.whatsapp}
          </a>
          <a
            href="tel:+4922418989424"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy text-navy font-semibold px-6 py-3.5 hover:bg-navy hover:text-white transition-all"
          >
            {l.cta}
          </a>
        </div>

        <Link
          href={l.klientyHref}
          className="inline-block text-sm text-muted-foreground hover:text-navy hover:underline"
        >
          ← {l.backToServices}
        </Link>
      </div>
    </article>
  );
}
