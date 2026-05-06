import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/immobilienfinanzierung";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/ipoteka`;
const UK_URL = `${SITE_URL}/ua/ipoteka`;

const PAGE_TITLE = "Immobilienfinanzierung verstehen | Strategische Orientierung Bonn & Troisdorf";
const PAGE_DESCRIPTION =
  "Strategische Orientierung vor der Immobilienentscheidung: Tilgung, Zinsbindung, Eigenkapital, Anschlussrisiko — im Kontext Ihrer Gesamtfinanzplanung. Deutsch und Russisch.";
const PAGE_NAME = "Immobilienfinanzierung";
const H1 = "Immobilienfinanzierung — strategische Einordnung in Ihre Finanzplanung";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Vermitteln Sie Immobilienkredite direkt?",
    a: "Schwerpunkt meiner Beratung ist die strategische Einordnung Ihrer Immobilienpläne in Ihre Gesamtfinanzplanung. Konkrete Kreditangebote werden über spezialisierte Bankpartner abgewickelt — ich begleite Sie auf Wunsch im Vorfeld und im Anschluss.",
  },
  {
    q: "Wie früh sollte ich über die Anschlussfinanzierung nachdenken?",
    a: "Spätestens 5 Jahre vor Auslaufen der Zinsbindung. Forward-Darlehen können den Anschlusszins Jahre im Voraus sichern, oft mit überschaubarem Aufschlag.",
  },
  {
    q: "Sollte ich Sondertilgungen leisten oder das Geld lieber anlegen?",
    a: 'Das hängt vom Hypothekenzins, vom Anlagehorizont und von Ihrer Risikobereitschaft ab. Bei niedrigem Zins ist es oft mathematisch günstiger, in renditestärkere Anlagen zu investieren — bei höheren Zinsen ist die Sondertilgung der „sichere" Weg. Wir rechnen das gemeinsam durch.',
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

export default function ImmobilienfinanzierungPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Immobilienfinanzierung
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Eine Immobilie zu finanzieren verändert nicht nur Ihre Bilanz — sie
            verändert Ihren gesamten finanziellen Spielraum. Liquidität,
            Vorsorgemöglichkeiten, Versicherungsbedarfe, Steuerstatus: all das
            hängt am Finanzierungsmodell. Bevor Sie konkrete Bankangebote
            vergleichen, lohnt sich eine strategische Standortbestimmung.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Was Sie vor dem Bankgespräch klären sollten
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Bevor Sie sich auf konkrete Finanzierungsangebote einlassen, gibt
            es Fragen, die zuerst beantwortet sein sollten:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              Wie viel Immobilie passt realistisch zu Ihrem Einkommen — heute
              und in 10 Jahren?
            </li>
            <li>
              Wie viel Eigenkapital sollten Sie einbringen, ohne Ihre
              Liquiditätsreserve zu opfern?
            </li>
            <li>Welche Tilgungsstrategie passt zu Ihrem Lebensentwurf?</li>
            <li>
              Wie verändert eine Finanzierung Ihre Vorsorgesituation und Ihren
              Versicherungsbedarf?
            </li>
            <li>
              Welche Risiken sollten zusätzlich abgesichert werden (Risikoleben,
              Berufsunfähigkeit, Wohngebäude)?
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Diese Fragen werden in keinem Bankgespräch ehrlich beantwortet —
            eine Bank verkauft Kredite, kein Gesamtbild.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Die wichtigsten Hebel im Überblick
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Bei einer Immobilienfinanzierung sind nicht nur Zins und Rate
            entscheidend, sondern das Zusammenspiel mehrerer Größen:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Tilgungssatz</strong> bestimmt, wie schnell Sie
              schuldenfrei sind.
            </li>
            <li>
              <strong>Zinsbindung</strong> (10, 15 oder 20 Jahre) entscheidet
              über Ihr Anschlussrisiko.
            </li>
            <li>
              <strong>Sondertilgungsoptionen</strong> geben Flexibilität bei
              Boni oder Erbschaften.
            </li>
            <li>
              <strong>Forward-Darlehen</strong> können einen Anschlusszins
              Jahre im Voraus sichern.
            </li>
            <li>
              <Link href="/de/bausparen" className={linkClass}>
                Bausparverträge
              </Link>{" "}
              sind als Bausteine in einer Finanzierungsstrategie weiterhin
              relevant — vor allem zur Zinsabsicherung der Anschlussfinanzierung.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Eigenkapital, Nebenkosten und Liquidität
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Die klassische Bankfaustregel: 20–30 % Eigenkapital. Realität in
            den meisten Familien: deutlich weniger. Im Beratungsgespräch
            schauen wir gemeinsam, wie viel Eigenkapital wirtschaftlich sinnvoll
            wäre — und wie viel Liquiditätspuffer übrig bleiben sollte. Eine
            Immobilie, die jede Reparatur per Konsumkredit erzwingt, ist nicht
            solide finanziert.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Vergessen Sie auch die Kaufnebenkosten nicht: Grunderwerbsteuer (in
            NRW 6,5 %), Notar- und Grundbuchkosten (rund 2 %), Maklerprovision
            (in NRW typisch 3,57 % Käuferanteil) — zusammen schnell 12 % des
            Kaufpreises.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Wie eine Immobilienentscheidung Ihre Vorsorge berührt
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Eine Immobilie kann ein Vorsorgebaustein sein — aber sie ersetzt
            keine andere Vorsorge, sie ergänzt sie. Wer 30 Jahre lang einen
            Großteil seines Einkommens in Tilgung steckt und nebenher keine
            Altersvorsorge aufbaut, hat im Ruhestand ein Haus und keine
            Liquidität. Auch der Versicherungsbedarf ändert sich: Risikoleben
            zur Absicherung der Tilgung, Wohngebäudeversicherung, eventuell
            Berufsunfähigkeit zur Absicherung der monatlichen Rate.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Genau diese Verbindungen klären wir im Beratungsgespräch — bevor
            Sie eine Entscheidung treffen, die Sie 20 oder 30 Jahre begleitet.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Strategische Orientierung statt Produktvergleich
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Mein Schwerpunkt liegt nicht im Bankenvergleich — dafür sind
            Online-Plattformen und Spezialvermittler besser aufgestellt. Mein
            Beitrag liegt davor: in der strategischen Klärung, ob Ihre
            Immobilienpläne zu Ihrer Gesamtsituation passen, welche
            Größenordnung wirtschaftlich tragfähig ist, und wie sich die
            Entscheidung auf Vorsorge, Versicherungen und Liquidität auswirkt.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Wenn Sie mit dieser Klarheit ins Bankgespräch gehen, treffen Sie
            bessere Entscheidungen.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Termin für Finanzierungs-Check
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Strategische Orientierung vor dem Bankgespräch — im Kontext Ihrer
              Gesamtfinanzplanung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Termin für Finanzierungs-Check
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
              <Link href="/de/bausparen" className={linkClass}>
                Bausparen als Strategiebaustein
              </Link>
            </li>
            <li>
              <Link href="/de/versicherungen" className={linkClass}>
                Risikoleben und Wohngebäudeschutz
              </Link>
            </li>
            <li>
              <Link href="/de/altersvorsorge" className={linkClass}>
                Altersvorsorge im Kontext
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
