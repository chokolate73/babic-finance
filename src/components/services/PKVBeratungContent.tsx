"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/data/services";
import { pkvContent } from "@/data/pkv-content";

interface Props {
  locale: Locale;
}

const breadcrumbLabels: Record<Locale, { home: string; services: string; homeHref: string; klientyHref: string }> = {
  de: { home: "Startseite", services: "Leistungen", homeHref: "/de", klientyHref: "/de/klienty" },
  ru: { home: "Главная", services: "Услуги", homeHref: "/", klientyHref: "/klienty" },
  ua: { home: "Головна", services: "Послуги", homeHref: "/ua", klientyHref: "/ua/klienty" },
};

export default function PKVBeratungContent({ locale }: Props) {
  const c = pkvContent[locale];
  const b = breadcrumbLabels[locale];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <article className="min-h-screen bg-cream">
      <div className="container mx-auto max-w-4xl px-4 py-12 lg:py-20">
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link href={b.homeHref} className="hover:text-navy">
            {b.home}
          </Link>
          <span className="mx-2">/</span>
          <Link href={b.klientyHref} className="hover:text-navy">
            {b.services}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">PKV</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            {c.h1}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            {c.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/4922418989424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold text-navy font-semibold px-6 py-3.5 hover:opacity-90 transition-all"
            >
              {c.cta1}
            </a>
            <a
              href="tel:+4922418989424"
              className="inline-flex items-center justify-center rounded-full border-2 border-navy text-navy font-semibold px-6 py-3.5 hover:bg-navy hover:text-white transition-all"
            >
              {c.cta2}
            </a>
          </div>
        </header>

        {/* Decision helper */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold text-navy mb-4">
            {c.decisionHelperHeading}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">{c.decisionHelperIntro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {c.cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-border"
              >
                <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold text-navy mb-8">
            {c.processHeading}
          </h2>
          <ol className="space-y-6">
            {c.steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="font-[family-name:var(--font-serif)] text-3xl font-bold text-gold flex-shrink-0 w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold text-navy mb-8">
            {c.faqHeading}
          </h2>
          <div className="space-y-3">
            {c.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-navy">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "600px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
            {c.ctaHeading}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            {c.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/4922418989424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold text-navy font-semibold px-6 py-3.5 hover:opacity-90 transition-all"
            >
              {c.cta1}
            </a>
            <a
              href="tel:+4922418989424"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-navy transition-all"
            >
              {c.cta2}
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
