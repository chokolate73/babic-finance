import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/finanzberatung";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/finansovye-konsultatsii`;
const UK_URL = `${SITE_URL}/ua/finansovi-konsultatsii`;

const PAGE_TITLE = "Finanzberatung Troisdorf & Bonn | Vladislav Babich (DVAG)";
const PAGE_DESCRIPTION =
  "Persönliche Finanzberatung im Rhein-Sieg-Kreis: Vorsorge, Geldanlage, Versicherungen, Immobilienfinanzierung — auf Deutsch und Russisch. Erstgespräch unverbindlich.";
const PAGE_NAME = "Finanzberatung";
const H1 = "Finanzberatung in Troisdorf und Bonn — strukturiert, persönlich, langfristig";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Was kostet die Finanzberatung?",
    a: "Die Beratung selbst ist für Sie kostenfrei. Bei Vertragsabschluss erhält DVAG eine Vergütung vom Versicherer oder der Investmentgesellschaft — diese ist im Produkt eingerechnet, nicht zusätzlich.",
  },
  {
    q: "Bin ich nach dem Gespräch zu etwas verpflichtet?",
    a: "Nein. Das Erstgespräch ist unverbindlich. Sie entscheiden, ob und welche Schritte Sie gehen wollen.",
  },
  {
    q: "Welche Unterlagen sollte ich zum Termin mitbringen?",
    a: "Hilfreich sind: aktuelle Rentenauskunft, bestehende Versicherungspolicen, Gehaltsabrechnung oder Einkommensteuerbescheid, eventuell vorhandene Spar- oder Anlageverträge. Wenn Sie nichts davon zur Hand haben — kommen Sie trotzdem. Wir starten dann mit einer Bestandsaufnahme.",
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

export default function FinanzberatungPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      {/* Hero / page header */}
      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Finanzberatung
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Eine gute Finanzplanung beginnt nicht mit Produkten, sondern mit
            Ihrer konkreten Lebenssituation. Als DVAG-Vermögensberater begleite
            ich Privatpersonen, Familien und Selbstständige im Rhein-Sieg-Kreis
            bei den finanziellen Entscheidungen, die wirklich Wirkung haben —
            über Jahre, nicht über Quartale.
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Was meine Finanzberatung umfasst
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Ich arbeite in vier Themenfeldern, die in den meisten Haushalten
            zusammenhängen, aber selten zusammen geplant werden:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <Link href="/de/altersvorsorge" className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                Altersvorsorge
              </Link>
              : gesetzliche Rente, Riester, Rürup, betriebliche Altersvorsorge
              und private Rentenversicherung
            </li>
            <li>
              <Link href="/de/geldanlage-investmentfonds" className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                Geldanlage und Vermögensaufbau
              </Link>
              : strukturierte Sparpläne, Einmalanlagen und Mischportfolios mit
              Investmentfonds der Generali Gruppe
            </li>
            <li>
              <Link href="/de/versicherungen" className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                Versicherungen
              </Link>
              : Berufsunfähigkeit, private Krankenversicherung, Risikoleben,
              Pflege, Hausrat, Haftpflicht und Rechtsschutz
            </li>
            <li>
              <Link href="/de/immobilienfinanzierung" className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                Immobilienfinanzierung
              </Link>{" "}
              und{" "}
              <Link href="/de/bausparen" className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors">
                Bausparen
              </Link>
              : als Bausteine Ihrer langfristigen Vermögensstrategie
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Wie ich arbeite
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Mein Beratungsprozess folgt vier Schritten, die ich mit jedem
            Mandanten durchgehe:
          </p>
          <ol className="space-y-4 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Situation und Ziele klären.</strong> Was haben Sie? Was
              wollen Sie? Was bedroht das?
            </li>
            <li>
              <strong>Versorgungslücken erkennen.</strong> Wo besteht echtes
              Risiko, wo besteht nur gefühltes?
            </li>
            <li>
              <strong>Strategie entwickeln.</strong> Welche Bausteine schließen
              die Lücke wirtschaftlich sinnvoll?
            </li>
            <li>
              <strong>Umsetzen und begleiten.</strong> Ich bleibe Ihr
              Ansprechpartner — nicht nur am Tag der Unterschrift.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Beratung auf Deutsch und Russisch
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Ich berate seit über zwei Jahrzehnten Mandanten in Deutschland und
            unterstütze insbesondere russischsprachige Familien und Unternehmer
            dabei, sich im deutschen Finanz- und Versicherungssystem
            zurechtzufinden. Sprachliche Klarheit ist bei Vorsorge- und
            Vertragsfragen entscheidend — Termine und Schadenfälle bespreche ich
            auf Wunsch in russischer oder deutscher Sprache.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Warum DVAG und Generali
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Als gebundener Versicherungsvertreter nach § 34d Abs. 7 GewO arbeite
            ich exklusiv mit Produkten der Generali Deutschland Gruppe und der
            ADVOCARD Rechtsschutzversicherung. Das hat einen klaren Vorteil: Sie
            haben einen einzigen Ansprechpartner für Vorsorge, Geldanlage,
            Versicherungen und Rechtsschutz — und ich kenne das Produktspektrum
            tief genug, um wirklich passende Lösungen zu finden, statt zwischen
            Anbietern hin- und herzuspringen.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Erstgespräch vereinbaren
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Das erste Gespräch ist unverbindlich und kostenfrei. Wir klären, ob
            es passt, wo Ihre Prioritäten liegen und welche nächsten Schritte
            sinnvoll sind. Termine vor Ort in meinem Büro in Troisdorf, per
            Video oder telefonisch — auch außerhalb der Bürozeiten.
          </p>
        </div>
      </article>

      {/* CTA block */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Bereit für ein unverbindliches Erstgespräch?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Auf Deutsch oder Russisch — vor Ort, per Video oder telefonisch.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Termin online buchen
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group bg-cream rounded-xl border border-navy/10 p-5 [&_summary::-webkit-details-marker]:hidden">
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
