import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/impressum";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title: "Impressum — Babic Finance",
  description:
    "Impressum, gesetzliche Pflichtangaben und Aufsichtsbehörden — Vladislav Babic, Vermögensberater DVAG.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Главная", url: SITE_URL },
          { name: "Impressum", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar forceDark />

      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Impressum
          </h1>

          <div className="mt-10 space-y-6 text-foreground/85 leading-relaxed text-base">
            <div>
              <p className="font-semibold text-navy">Vladislav Babic</p>
              <p>Mottmannstr. 8</p>
              <p>53842 Troisdorf</p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4922418989424"
                  className="text-gold hover:underline"
                >
                  +49 2241 89 89 424
                </a>
              </p>
              <p>Fax: +49 2241 89 89 418</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:Vladislav.Babic@dvag.de"
                  className="text-gold hover:underline"
                >
                  Vladislav.Babic@dvag.de
                </a>
              </p>
              <p>
                Internet:{" "}
                <a
                  href="https://www.dvag.de/Vladislav.Babic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.dvag.de/Vladislav.Babic
                </a>
              </p>
            </div>

            <p>
              Im Versicherungsbereich als gebundener Vermittler gemäß § 34d Abs.
              7 GewO auf Provisionsbasis ausschließlich vermittelnd und beratend
              tätig für die Generali Deutschland Lebensversicherung, Generali
              Deutschland Versicherung, Generali Deutschland
              Krankenversicherung, ADVOCARD Rechtsschutzversicherung. Darüber
              hinaus können in Einzelfällen geldwerte Vorteile in Form von
              Sachleistungen anfallen (z.B. Schulungen sowie Einladungen für die
              Teilnahme an kulturellen und gesellschaftlichen Veranstaltungen,
              Informationsmaterial, Aufmerksamkeiten).
            </p>

            <div>
              <h2 className="font-semibold text-navy mb-2">Schlichtungsstellen</h2>
              <p>Verein Versicherungsombudsmann e.V.</p>
              <p>Postfach 080632, 10006 Berlin</p>
              <p>Ombudsmann Private Kranken- und Pflegeversicherung</p>
              <p>Postfach 060222, 10052 Berlin</p>
              <p>
                <a
                  href="https://www.versicherungsombudsmann.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.versicherungsombudsmann.de
                </a>
                ,{" "}
                <a
                  href="https://www.pkv-ombudsmann.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.pkv-ombudsmann.de
                </a>
              </p>
            </div>

            <p>
              <span className="font-semibold text-navy">
                Erlaubnis- und Aufsichtsbehörde gemäß § 34c GewO:
              </span>{" "}
              Bundesstadt Bonn, Berliner Platz 2, 53111 Bonn
            </p>

            <p>
              Im Investmentbereich als Finanzanlagenvermittler gemäß § 34f Abs.
              1 Nr. 1 GewO nicht unabhängig vermittelnd tätig für: DWS
              Investment GmbH, DWS Investment S.A., Generali Investments
              Deutschland, Allianz Global Investors, Allianz Global Investors
              Luxembourg, SEB Investment, DWS Grundbesitz GmbH.
            </p>

            <p>
              Die Anlageberatung und Anlagevermittlung zu Investmentfonds
              erfolgen in deutscher und — soweit mit dem Vermögensberater
              individuell vereinbart — in englischer Sprache. Detaillierte
              Informationen zu diesen Produkten können den Fondsunterlagen (z.B.
              Prospekt und wesentliche Anlegerinformationen) entnommen werden,
              die kostenlos in deutscher Sprache vom Vermögensberater oder auf
              der Webseite{" "}
              <a
                href="https://www.dvag-produktinformationen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                www.dvag-produktinformationen.de
              </a>{" "}
              bereitgestellt werden. Die Kommunikation zwischen Vermögensberater
              und Kunde erfolgt ausschließlich persönlich, postalisch, per
              E-Mail, Telefon, Video und/oder Fax.
            </p>

            <p>
              Nach erbrachter Anlageberatung zu Investmentfonds erhalten die
              Kunden vom Vermögensberater eine Erklärung zur Geeignetheit der
              empfohlenen Produkte und sonstigen Empfehlungen.
            </p>

            <p>
              <span className="font-semibold text-navy">
                Erlaubnis- und Aufsichtsbehörde gemäß § 34f GewO:
              </span>{" "}
              IHK Bonn/Rhein-Sieg, Bonner Talweg 17, 53113 Bonn
            </p>

            <p>
              Im Immobiliarverbraucherdarlehensbereich als
              Immobiliardarlehensvermittler gemäß § 34i Abs. 1 GewO vermittelnd
              tätig für: Deutsche Bank AG, Deutsche Bausparkasse Badenia AG,
              Commerzbank AG, HypoVereinsbank, Santander Consumer Bank AG.
            </p>

            <p>
              <span className="font-semibold text-navy">
                Erlaubnis- und Aufsichtsbehörde gemäß § 34i GewO:
              </span>{" "}
              IHK Bonn/Rhein-Sieg, Bonner Talweg 17, 53113 Bonn
            </p>

            <div>
              <h2 className="font-semibold text-navy mb-2">
                Gemeinsame Registerstelle für § 34d GewO, § 34f GewO und § 34i
                GewO
              </h2>
              <p>Deutsche Industrie- und Handelskammer (DIHK)</p>
              <p>Breite Straße 29, 10178 Berlin</p>
              <p>Telefon 0180 600585-0 (20 Cent/Anruf)</p>
              <p>
                <a
                  href="https://www.vermittlerregister.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  www.vermittlerregister.info
                </a>
              </p>
            </div>

            <div>
              <p>
                <span className="font-semibold text-navy">
                  Registernummer nach § 34d GewO:
                </span>{" "}
                D-S8NF-8XNIN-60
              </p>
              <p>
                <span className="font-semibold text-navy">
                  Registernummer nach § 34f GewO:
                </span>{" "}
                D-F-110-B911-57
              </p>
              <p>
                <span className="font-semibold text-navy">
                  Registernummer nach § 34i GewO:
                </span>{" "}
                D-W-110-VVAB-06
              </p>
            </div>

            <p>
              Die Vermögensberater nehmen keine Kundengelder entgegen. Zahlungen
              erfolgen direkt von den Kunden an die jeweiligen Produktpartner.
            </p>

            <p>
              <span className="font-semibold text-navy">Haftungshinweis:</span>{" "}
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
