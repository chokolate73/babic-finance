import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/altersvorsorge";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/pensionnoe-obespechenie`;
const UK_URL = `${SITE_URL}/ua/pensiine-zabezpechennia`;

const PAGE_TITLE = "Altersvorsorge Troisdorf & Bonn | Riester, Rürup, bAV, private Rente";
const PAGE_DESCRIPTION =
  "Strategische Altersvorsorge im Rhein-Sieg-Kreis: Riester, Rürup, betriebliche Altersvorsorge, private Rentenversicherung. Persönliche Beratung in Deutsch und Russisch.";
const PAGE_NAME = "Altersvorsorge";
const H1 = "Altersvorsorge in Troisdorf und Bonn — Riester, Rürup, bAV, private Rente";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Wann sollte ich mit der Altersvorsorge anfangen?",
    a: "So früh wie möglich. Der Zinseszinseffekt ist mathematisch betrachtet die mit Abstand wichtigste Größe in der Altersvorsorge — wer mit 25 anfängt, braucht für dasselbe Endkapital nur einen Bruchteil dessen, was ein 45-Jähriger einzahlen müsste.",
  },
  {
    q: "Lohnt sich die Riester-Rente überhaupt noch?",
    a: "Für Familien mit Kindern und für Geringverdiener oft ja, für Singles mit hohem Einkommen oft nicht. Die Antwort ergibt sich aus der konkreten Berechnung, nicht aus der Schlagzeile.",
  },
  {
    q: "Was ist die beste Altersvorsorge?",
    a: "Die, die Sie tatsächlich durchhalten — und die zu Ihrer Lebenssituation passt. In den meisten Fällen ist es nicht ein Produkt, sondern eine Mischung aus zwei oder drei Bausteinen.",
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

export default function AltersvorsorgePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Altersvorsorge
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Die gesetzliche Rente reicht für die meisten nicht. Das ist keine
            Meinung, sondern Mathematik — und je früher Sie sich damit
            beschäftigen, desto entspannter wird die Lösung. Als
            DVAG-Vermögensberater zeige ich Ihnen Ihre Versorgungslücke und
            entwickle einen Plan, der zu Ihrem Einkommen, Ihrer Lebenssituation
            und Ihrer Familie passt.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Die drei Säulen der deutschen Altersvorsorge
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Das deutsche Vorsorgesystem steht auf drei Säulen, die jeweils
            anders funktionieren:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Gesetzliche Rente, Rürup-Rente, berufsständische
              Versorgung</strong> — die staatlich geförderte Basisvorsorge
            </li>
            <li>
              <strong>Riester-Rente und betriebliche Altersvorsorge (bAV)</strong>{" "}
              — die staatlich oder steuerlich geförderte Zusatzvorsorge
            </li>
            <li>
              <strong>Private Rentenversicherung, Investmentlösungen,
              Immobilien</strong> — die individuelle Vorsorge ohne staatliche
              Regulierung
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Welche Säulen für Sie sinnvoll sind, hängt von Beschäftigungsstatus,
            Steuerklasse, Familiensituation und Anlagehorizont ab.
          </p>

          <h2 id="riester" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Riester-Rente — für wen sie noch sinnvoll ist
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Die Riester-Rente bekommt seit Jahren schlechte Presse — nicht ohne
            Grund: hohe Kosten, geringe Rendite, komplexe Förderbedingungen.
            Trotzdem ist sie für bestimmte Gruppen weiterhin attraktiv: für
            Familien mit mehreren Kindern (Kinderzulagen), für Geringverdiener
            und für jüngere Arbeitnehmer mit langem Anlagehorizont. Ich rechne
            Ihnen ehrlich vor, ob es sich für Ihre konkrete Situation lohnt —
            und wenn nein, schauen wir gemeinsam nach Alternativen.
          </p>

          <h2 id="ruerup" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Rürup-Rente (Basisrente) — für Selbstständige und Gutverdiener
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Die Rürup-Rente ist steuerlich oft die effektivste Vorsorgeform für
            Selbstständige und für Arbeitnehmer mit höheren Einkommen, die
            keine bAV nutzen können oder wollen. Beiträge sind als
            Sonderausgaben weitgehend abzugsfähig — der Steuersparer-Effekt
            kann erheblich sein. Im Gegenzug ist sie unflexibel: keine
            Kapitalauszahlung, keine Beleihbarkeit, lebenslange Rente. Das
            macht sie zum klassischen Set-and-forget-Instrument.
          </p>

          <h2 id="bav" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Betriebliche Altersvorsorge (bAV)
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Wenn Sie angestellt sind, ist die bAV oft Ihre beste Vorsorgeoption
            — vor allem, wenn Ihr Arbeitgeber Beiträge zuschießt. Über die
            Entgeltumwandlung sparen Sie Steuern und Sozialabgaben; bei Generali
            Pensionskasse als Durchführungsweg sind die Verwaltungskosten
            konkurrenzfähig.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Für Arbeitgeber wiederum ist die bAV ein Mitarbeiter-Benefit, der
            wirklich beim Mitarbeiter ankommt — und administrativ schlanker, als
            viele denken. Ich berate sowohl Arbeitnehmer zur eigenen bAV als
            auch Arbeitgeber bei der Einführung eines bAV-Konzepts.
          </p>

          <h2 id="private-rente" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Private Rentenversicherung
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Außerhalb der staatlich geförderten Vorsorge bieten klassische und
            fondsgebundene private Rentenversicherungen Flexibilität, die
            Riester und Rürup nicht haben: Sie können Beiträge anpassen,
            vorzeitig auszahlen lassen oder Kapital entnehmen. Sie sind weniger
            steuerlich gefördert, aber in der Lebensführung freier — gerade in
            Verbindung mit Investmentfonds-Lösungen ein bewährter Baustein für
            die „dritte Schicht".
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Versorgungslücke berechnen — Schritt 1
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Bevor wir über Produkte sprechen, berechne ich gemeinsam mit Ihnen
            Ihre konkrete Versorgungslücke: Wie hoch wird Ihre voraussichtliche
            gesetzliche Rente sein? Wie viel davon werden Sie tatsächlich
            benötigen? Wie hoch ist die monatliche Differenz? Erst auf dieser
            Grundlage entscheiden wir, welche Bausteine zu welchen Beiträgen
            sinnvoll sind.
          </p>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Termin für Vorsorgeanalyse
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Wir berechnen Ihre Versorgungslücke und entwickeln einen Plan, der
              zu Ihrem Einkommen passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Termin für Vorsorgeanalyse
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-navy">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Verwandte Themen
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <Link href="/de/geldanlage-investmentfonds" className={linkClass}>
                Geldanlage in Investmentfonds
              </Link>
            </li>
            <li>
              <Link href="/de/versicherungen#bu" className={linkClass}>
                Berufsunfähigkeit absichern
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

      {/* FAQ */}
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
