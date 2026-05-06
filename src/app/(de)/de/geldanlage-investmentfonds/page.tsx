import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/geldanlage-investmentfonds";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/investitsii-i-fondy`;
const UK_URL = `${SITE_URL}/ua/investytsii-i-fondy`;

const PAGE_TITLE = "Geldanlage & Investmentfonds | Vermögensaufbau Bonn & Troisdorf";
const PAGE_DESCRIPTION =
  "Strategische Geldanlage und Vermögensaufbau mit Investmentfonds der Generali Gruppe — langfristig, transparent, persönlich begleitet. Beratung auf Deutsch und Russisch.";
const PAGE_NAME = "Geldanlage & Investmentfonds";
const H1 = "Geldanlage und Investmentfonds — Vermögensaufbau mit System";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Wie lange sollte ich Geld in Investmentfonds anlegen?",
    a: "Aktien- und Mischfonds rechtfertigen sich erst ab einem Anlagehorizont von mindestens 5–7 Jahren. Kürzere Zeiträume erhöhen das Risiko, in einer schwachen Marktphase verkaufen zu müssen.",
  },
  {
    q: "Wie viel Geld brauche ich für einen Fondssparplan?",
    a: "Sparpläne sind über die Generali bereits ab 25 € monatlich möglich. Sinnvoll sind in der Regel höhere Beträge — wir besprechen, was zu Ihrem Haushaltsbudget passt.",
  },
  {
    q: "Was passiert mit meinem Geld, wenn ich kündige oder den Sparplan stoppe?",
    a: "Sie können Sparpläne jederzeit pausieren oder beenden, ohne Kündigungsfristen. Ihr investiertes Kapital bleibt im Fonds und kann später jederzeit verkauft werden.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: {
      de: CANONICAL,
      ru: RU_URL,
      uk: UK_URL,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    alternateLocale: ["ru_RU", "uk_UA"],
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/preview.webp"],
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: H1,
      description: PAGE_DESCRIPTION,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Troisdorf" },
        { "@type": "City", name: "Bonn" },
        { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
      ],
      url: CANONICAL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: PAGE_NAME, item: CANONICAL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      inLanguage: "de-DE",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

const linkClass =
  "font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors";

export default function GeldanlagePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Geldanlage & Investmentfonds
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Vermögen wächst nicht durch Glück, sondern durch System. Wer Geld
            langfristig anlegt, entscheidet vor allem über zwei Dinge: das
            richtige Verhältnis von Risiko zu Rendite — und die Disziplin, im
            richtigen Moment nichts zu tun.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Worin Sie über mich anlegen können
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Über die Generali Investments und Partner-Investmentgesellschaften
            der Generali Gruppe stehen verschiedene Anlageklassen zur
            Verfügung:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Aktien- und Mischfonds</strong> für den langfristigen
              Vermögensaufbau
            </li>
            <li>
              <strong>Anleihen- und Geldmarktfonds</strong> als
              Stabilitätskomponenten
            </li>
            <li>
              <strong>Sachwertfonds</strong> (Immobilien, Infrastruktur) für
              Inflationsschutz
            </li>
            <li>
              <strong>Vermögensverwaltete Lösungen</strong> („Strategiekonzepte"),
              bei denen die Allokation aktiv gesteuert wird
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Welche Mischung für Sie passt, hängt von Anlagehorizont,
            finanzieller Belastbarkeit und Anlagezielen ab — nicht von dem, was
            gerade gut performt hat.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Sparplan oder Einmalanlage?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Beide Wege haben ihren Platz. Ein <strong>Fondssparplan</strong> ab
            kleinen monatlichen Beträgen ist der klassische Einstieg in den
            langfristigen Vermögensaufbau und glättet Marktschwankungen über die
            Zeit. Eine <strong>Einmalanlage</strong> macht Sinn, wenn Sie
            bereits Liquidität haben, die nicht kurzfristig benötigt wird. In
            vielen Fällen ist eine Kombination sinnvoll: ein Teil des Vermögens
            wird einmalig angelegt, ein laufender Sparplan baut darauf auf.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Was Sie realistisch erwarten können
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Aktienmärkte haben in den letzten 30 Jahren im Durchschnitt
            zwischen 6 und 8 Prozent jährlich Rendite gebracht — aber nicht
            jedes Jahr und nicht jedes Jahrzehnt gleich. Wer kurzfristig auf
            Geld zugreifen muss, sollte nicht in schwankungsanfällige Anlagen
            investieren. Wer 10, 20 oder 30 Jahre Zeit hat, wird mit hoher
            Wahrscheinlichkeit deutlich oberhalb der Inflation abschließen —
            vorausgesetzt, er hält durch.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Mein Anspruch in der Anlageberatung
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Ich verkaufe keine „heißen Tipps" und keine Modethemen. Mein
            Beratungsansatz ist konservativ in der Methodik und langfristig in
            der Perspektive:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Ihre Anlage muss zu Ihrer Lebenssituation passen — nicht
              umgekehrt.
            </li>
            <li>
              Liquiditätsreserve und Vorsorgelücken werden vor der Geldanlage
              geschlossen.
            </li>
            <li>Kostenstruktur und Transparenz haben Priorität.</li>
            <li>
              Ich begleite Sie auch in turbulenten Marktphasen — denn die
              meisten Anleger verlieren Geld nicht durch falsche
              Entscheidungen, sondern durch panische Reaktionen.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Beratungsgespräch zur Geldanlage
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Bringen Sie eine Vorstellung mit, wofür das Geld langfristig dienen
            soll — und was Sie nachts nicht ruhig schlafen lässt. Den Rest
            klären wir gemeinsam.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Termin vereinbaren
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Wir besprechen Ziele, Anlagehorizont und die Mischung, die zu
              Ihrem Haushalt passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Termin vereinbaren
              </a>
              <a href="tel:+4922418989424" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-navy">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Verwandte Themen
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <Link href="/de/altersvorsorge" className={linkClass}>
                Altersvorsorge planen
              </Link>
            </li>
            <li>
              <Link href="/de/bausparen" className={linkClass}>
                Bausparen als Alternative
              </Link>
            </li>
            <li>
              <Link href="/de/finanzberatung" className={linkClass}>
                Zurück zur Finanzberatung-Übersicht
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl border border-navy/10 p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer flex items-start justify-between gap-4 font-semibold text-base md:text-lg">
                  <span>{item.q}</span>
                  <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 select-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
