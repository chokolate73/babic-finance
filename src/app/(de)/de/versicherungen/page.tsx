import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/versicherungen";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const RU_URL = `${SITE_URL}/strakhovanie`;
const UK_URL = `${SITE_URL}/ua/strakhuvannia`;

const PAGE_TITLE = "Versicherungsberatung Troisdorf & Bonn | BU, PKV, Hausrat, Rechtsschutz";
const PAGE_DESCRIPTION =
  "Persönliche Beratung zu Berufsunfähigkeit, privater Krankenversicherung, Risikoleben, Hausrat, Haftpflicht und Rechtsschutz im Rhein-Sieg-Kreis. Auf Deutsch und Russisch.";
const PAGE_NAME = "Versicherungen";
const H1 = "Versicherungsberatung Troisdorf und Bonn — was Sie wirklich brauchen";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Welche Versicherung sollte ich als erstes abschließen?",
    a: "Privathaftpflicht, dann Berufsunfähigkeit, dann je nach Lebenssituation Hausrat oder Risikoleben. Mit dieser Reihenfolge sind die wichtigsten Risiken zu vergleichsweise geringen Kosten abgedeckt.",
  },
  {
    q: "Was passiert, wenn ich meinen Beruf wechsle?",
    a: 'BU-Verträge sind grundsätzlich berufsunabhängig. Allerdings beeinflusst der Beruf bei Vertragsabschluss den Beitrag — bei einem Wechsel in einen „günstigeren" Beruf kann es lohnen, dies dem Versicherer zu melden.',
  },
  {
    q: "Bekomme ich auch eine Beratung in russischer Sprache?",
    a: "Ja. Beratungstermine, Vertragserklärungen und die Begleitung im Schadenfall finden auf Wunsch in russischer Sprache statt — das vermeidet Missverständnisse bei wichtigen Klauseln.",
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

export default function VersicherungenPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Versicherungen
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Die wichtigste Versicherung ist nicht die teuerste, sondern die, die
            Sie tatsächlich brauchen — und im Schadenfall auch zahlt. Als
            DVAG-Versicherungsberater im Rhein-Sieg-Kreis sortiere ich
            gemeinsam mit Ihnen, was Sie wirklich absichern müssen, wo Sie
            überversichert sind und wo eine Lücke klafft, die im Ernstfall
            existenzbedrohend wäre.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Welche Versicherungen ich vermittle
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Über die Generali Deutschland Gruppe und die ADVOCARD
            Rechtsschutzversicherung (DVAG-Produktpartner) decke ich das
            Versicherungsspektrum für Privatpersonen und Familien ab:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Existenzielle Absicherung
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Berufsunfähigkeitsversicherung (BU)</strong> — der
              wichtigste Einkommensschutz überhaupt
            </li>
            <li>
              <strong>Risikolebensversicherung</strong> — finanzielle
              Absicherung der Familie bei Tod
            </li>
            <li>
              <strong>Private Krankenversicherung (PKV)</strong> — über die
              Central Krankenversicherung (Generali-Tochter)
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Sachwerte und Alltag
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Hausratversicherung</strong> — Einbruch, Feuer, Wasser,
              Sturm
            </li>
            <li>
              <strong>Privathaftpflichtversicherung</strong> — die wichtigste
              und gleichzeitig günstigste Versicherung für jeden Erwachsenen
            </li>
            <li>
              <strong>Wohngebäudeversicherung</strong> — für Eigentümer
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Rechtsschutz und Pflege
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Rechtsschutzversicherung</strong> über ADVOCARD — Verkehr,
              Beruf, Mietrecht, Vertragsrecht
            </li>
            <li>
              <strong>Pflegezusatzversicherung</strong> — für die Lücke der
              gesetzlichen Pflegeversicherung
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Was wirklich wichtig ist — und was nicht
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Versicherungen werden in Deutschland traditionell zu viel verkauft
            und zu wenig analysiert. Meine Faustregeln:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Wirklich wichtig (existenzielle Risiken)
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>Berufsunfähigkeitsversicherung — das größte Einkommensrisiko</li>
            <li>
              Privathaftpflicht — Schadenersatzforderungen können in die
              Millionen gehen
            </li>
            <li>
              Risikolebensversicherung, wenn Familie oder Hauskredit dranhängen
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Wichtig für die Lebensqualität
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>Hausrat (vor allem in Stadtwohnungen mit Einbruchsrisiko)</li>
            <li>Rechtsschutz (Verkehr und Beruf)</li>
            <li>Pflegezusatz (je früher, je günstiger)</li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Häufig überversichert
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>Kleinere Sachversicherungen mit niedrigem Eigenwert</li>
            <li>Zusatzbausteine, die schon in anderen Verträgen enthalten sind</li>
            <li>„Allgefahrendeckungen" für niedrigwertige Geräte</li>
          </ul>

          <h2 id="bu" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Beratung zur Berufsunfähigkeitsversicherung
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Statistisch wird jeder vierte Erwerbstätige vor dem Rentenalter
            berufsunfähig. Die gesetzliche Erwerbsminderungsrente reicht in den
            allermeisten Fällen nicht zum Leben. Eine private BU-Versicherung
            schließt diese Lücke — aber nur, wenn die Police richtig
            konstruiert ist: Versicherungssumme, Endalter,
            Nachversicherungsgarantie, Verzicht auf abstrakte Verweisung. Ich
            berate ehrlich zu BU-Tarifen der Generali Gruppe inklusive
            Gesundheitsprüfung, Antragsstrategie und Leistungsumfang.
          </p>

          <h2 id="pkv" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Private Krankenversicherung — eine Entscheidung für Jahrzehnte
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Der Wechsel von der gesetzlichen in die private Krankenversicherung
            ist eine der weitreichendsten finanziellen Entscheidungen überhaupt
            — und einer der häufigsten Fehler. Nicht jeder, der wechseln darf,
            sollte das auch tun. Familienplanung, Beitragsentwicklung im Alter
            und Selbstbehalt-Strategien sind die Kernfragen, die wir vor jeder
            Empfehlung gemeinsam durchgehen. Beratung zu Tarifen der Central
            Krankenversicherung als exklusivem Generali-Partner.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Beratungsansatz und Compliance
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Als gebundener Versicherungsvertreter nach § 34d Abs. 7 GewO bin
            ich exklusiv für die Generali Gruppe und ADVOCARD tätig. Das heißt:
            Ich vergleiche nicht den gesamten Markt, sondern empfehle aus dem
            Produktspektrum dieser Anbieter. Der Vorteil für Sie: Sie haben
            einen einzigen Ansprechpartner für Ihre gesamte Vorsorge — und ich
            kenne das Produktspektrum tief genug, um Lösungen zu finden, die
            wirklich passen.
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
              Wir prüfen Ihren Versicherungsschutz und schließen die Lücken,
              die wirklich zählen.
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
                Altersvorsorge und Pflegezusatz
              </Link>
            </li>
            <li>
              <Link href="/de/immobilienfinanzierung" className={linkClass}>
                Wohngebäudeschutz und Immobilienfinanzierung
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
