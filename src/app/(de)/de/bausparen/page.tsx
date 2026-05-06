import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/bausparen";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/bausparen`;
const UK_URL = `${SITE_URL}/ua/bausparen`;

const PAGE_TITLE = "Bausparen verstehen | Wann ein Bausparvertrag sinnvoll ist";
const PAGE_DESCRIPTION =
  "Bausparen einordnen: wann ein Bausparvertrag in Ihre Finanzstrategie passt und wann nicht. Im Kontext von Vorsorge und Immobilienplanung. Bonn & Troisdorf.";
const PAGE_NAME = "Bausparen";
const H1 = "Bausparen — wann es in Ihre Finanzstrategie passt";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Lohnt sich Bausparen, wenn ich noch keine konkreten Immobilienpläne habe?",
    a: "Eingeschränkt. Wenn die Möglichkeit besteht, in 10–20 Jahren eine Immobilie zu kaufen, kann der Vertrag als Zinsabsicherung dienen. Ist das nahezu ausgeschlossen, sind andere Sparformen meist sinnvoller.",
  },
  {
    q: "Wie unterscheidet sich Bausparen von einem Fondssparplan?",
    a: "Ein Fondssparplan zielt auf Rendite, ein Bausparvertrag auf eine künftige günstige Finanzierung. Beide sind langfristige Sparformen, aber mit unterschiedlichem Zweck — und sie schließen sich nicht aus.",
  },
  {
    q: "Was passiert, wenn ich das Bauspardarlehen am Ende nicht in Anspruch nehme?",
    a: "Sie behalten Ihr angespartes Guthaben mit Sparzinsen. Den Vorteil des günstigen Bauspardarlehens nehmen Sie dann nicht in Anspruch — was vollkommen in Ordnung ist, wenn die Marktzinsen zum Zeitpunkt der Zuteilung niedriger sind.",
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

export default function BausparenPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Bausparen
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Bausparen ist kein Selbstzweck und auch kein Auslaufmodell. Es ist
            ein Instrument, das in bestimmten Lebenssituationen funktioniert —
            und in anderen nicht. Ob ein Bausparvertrag für Sie sinnvoll ist,
            lässt sich nicht aus einem Werbeprospekt ableiten, sondern aus
            Ihrer konkreten Lebens- und Finanzplanung.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Was Bausparen heute leistet
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Ein Bausparvertrag erfüllt zwei Funktionen, die getrennt
            voneinander betrachtet werden sollten:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Sparphase:</strong> strukturiertes Sparen mit garantiertem
              Sparzins, je nach Tarif ergänzt um Wohnungsbauprämie oder
              Arbeitnehmer-Sparzulage.
            </li>
            <li>
              <strong>Darlehensphase:</strong> Anspruch auf ein Bauspardarlehen
              zu einem heute schon festgelegten Zins.
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            In Niedrigzinsphasen war Bausparen unattraktiv, weil der
            garantierte Bauspar-Darlehenszins kaum unter dem Marktniveau lag.
            In Phasen steigender oder hoher Zinsen wird Bausparen als
            langfristige Zinsabsicherung wieder interessant — vor allem für
            jüngere Sparer mit konkreten oder potenziellen Immobilienplänen in
            10–15 Jahren.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Wann sich Bausparen sinnvoll einfügen kann
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Aus Beratungsperspektive lassen sich drei Konstellationen
            unterscheiden, in denen ein Bausparvertrag in eine größere
            Strategie passt:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Anschlussfinanzierung absichern.</strong> Wer in 8–12
              Jahren das Auslaufen einer{" "}
              <Link href="/de/immobilienfinanzierung" className={linkClass}>
                Erstfinanzierung
              </Link>{" "}
              erwartet, kann mit einem Bausparvertrag den Anschlusszins
              langfristig sichern.
            </li>
            <li>
              <strong>Junge Sparer mit Eigenheim-Perspektive.</strong> Wer mit
              25–30 Jahren für einen späteren Hauskauf spart, profitiert vom
              langen Sparzeitraum und der Zinsbindung des späteren
              Bauspardarlehens.
            </li>
            <li>
              <strong>Vermögenswirksame Leistungen sinnvoll einsetzen.</strong>{" "}
              VL vom Arbeitgeber lassen sich über Bausparverträge mit
              Wohnungsbauprämie oder Arbeitnehmer-Sparzulage steuerlich
              optimieren.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Wann Bausparen eher nicht passt
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Genauso wichtig ist die ehrliche Antwort, wann ein Bausparvertrag
            in einer Finanzstrategie eher schadet als nützt:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Wenn Sie kurzfristig (unter 5 Jahre) flexibel über das Geld
              verfügen müssen.
            </li>
            <li>
              Wenn Sie mit hoher Wahrscheinlichkeit keine Immobilienpläne haben
              — dann sind eine{" "}
              <Link href="/de/geldanlage-investmentfonds" className={linkClass}>
                Geldanlage in Investmentfonds
              </Link>{" "}
              oder andere Sparformen meist renditestärker.
            </li>
            <li>
              Wenn die Tarif- und Kostenstruktur den theoretischen Vorteil der
              Zinsabsicherung auffrisst.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen im Vergleich zu anderen Sparformen
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Bevor ein Bausparvertrag in Frage kommt, lohnt der Blick auf
            Alternativen:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Tagesgeld / Festgeld:</strong> kurzfristig flexibler, aber
              ohne Zinsabsicherungs-Funktion.
            </li>
            <li>
              <strong>Investmentfonds-Sparpläne:</strong> renditestärker bei
              langem Anlagehorizont, aber ohne Anspruch auf späteres günstiges
              Darlehen.
            </li>
            <li>
              <strong>Riester-/Wohnriester-Modelle:</strong> staatlich
              gefördert, aber mit eigenen Verwendungs-Beschränkungen.
            </li>
            <li>
              <strong>Private Rentenversicherung:</strong> wenn der
              Vorsorgeaspekt im Vordergrund steht, nicht die
              Immobilienperspektive.
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Welche Sparform für Sie die richtige ist — und ob Bausparen
            überhaupt eine Rolle spielen sollte — klären wir im
            Beratungsgespräch.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen im Kontext Ihrer Gesamtplanung
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Ein Bausparvertrag ist selten ein Stand-alone-Produkt. In der Regel
            ergibt er nur Sinn, wenn er sich in eine größere Strategie einfügt:{" "}
            <Link href="/de/altersvorsorge" className={linkClass}>
              Altersvorsorge
            </Link>
            ,{" "}
            <Link href="/de/immobilienfinanzierung" className={linkClass}>
              Immobilienfinanzierung
            </Link>
            , oder Vermögensaufbau für Kinder. Gerade hier zahlt sich die
            persönliche Beratung aus — anstatt isoliert „einen Vertrag
            abzuschließen", entwickeln wir gemeinsam ein Konzept, in das ein
            Bausparvertrag eingebettet ist (oder bewusst nicht).
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
              Wir klären gemeinsam, ob Bausparen in Ihre Strategie passt — oder
              eine andere Sparform sinnvoller ist.
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
              <Link href="/de/immobilienfinanzierung" className={linkClass}>
                Immobilienfinanzierung im Überblick
              </Link>
            </li>
            <li>
              <Link href="/de/altersvorsorge" className={linkClass}>
                Altersvorsorge planen
              </Link>
            </li>
            <li>
              <Link href="/de/geldanlage-investmentfonds" className={linkClass}>
                Geldanlage in Investmentfonds
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
