import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/ua/datenschutz";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title: "Datenschutz - Babic Finance",
  description:
    "Datenschutzerklärung - Informationen zur Verarbeitung personenbezogener Daten auf den Webseiten von Vladislav Babic, Vermögensberater DVAG.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  robots: { index: true, follow: true },
};

const linkClass = "text-gold hover:underline";
const headingClass =
  "font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mt-12 mb-4";
const subheadingClass =
  "font-semibold text-navy text-lg mt-8 mb-3";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {children}
    </a>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Головна", url: SITE_URL },
          { name: "Datenschutz", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar forceDark />

      <section className="pt-28 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Datenschutz
          </h1>

          <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed text-base">
            <p>
              Der Schutz Ihrer Daten ist uns sehr wichtig. Daher verarbeiten wir
              Ihre Daten nur im Rahmen der geltenden Datenschutzgesetze und
              schützen sie nach dem Stand der Technik. Nachfolgend möchten wir
              Sie über die Verarbeitung Ihrer personenbezogenen Daten auf
              unseren Webseiten und über Ihre Rechte aus dem Datenschutz
              informieren. Hinweise zur Verarbeitung Ihrer Daten als Kunden
              finden Sie darüber hinaus auf{" "}
              <ExtLink href="https://www.datenschutz.dvag">
                www.datenschutz.dvag
              </ExtLink>
              .
            </p>

            <h2 className={headingClass}>
              1. Verantwortliche Stelle und Datenschutzbeauftragter
            </h2>
            <div>
              <p className="font-semibold text-navy">
                Deutsche Vermögensberatung Aktiengesellschaft DVAG
              </p>
              <p>Wilhelm-Leuschner-Straße 24</p>
              <p>60329 Frankfurt am Main</p>
              <p>
                Telefon:{" "}
                <a href="tel:+4969238400" className={linkClass}>
                  069/2384-0
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@dvag.com" className={linkClass}>
                  info@dvag.com
                </a>
              </p>
            </div>
            <p>
              Unseren Datenschutzbeauftragten erreichen Sie ebenfalls unter
              vorstehender Anschrift, mit dem Zusatz „Datenschutzbeauftragter“
              oder unter{" "}
              <a href="mailto:datenschutz@dvag.com" className={linkClass}>
                datenschutz@dvag.com
              </a>
              .
            </p>

            <h2 className={headingClass}>
              2. Allgemeines zur Datenverarbeitung und Ihren Rechten
            </h2>

            <h3 className={subheadingClass}>
              2.1. Maßgebliche Rechtsgrundlagen der Datenverarbeitung
            </h3>
            <p>
              Sofern die Rechtsgrundlage in diesen Datenschutzhinweisen nicht
              ausdrücklich genannt wird, sind die folgenden Rechtsgrundlagen
              maßgeblich: Soweit wir für eine Datenverarbeitung Ihre
              Einwilligung einholen, ist Artikel 6 Abs. 1 lit. a und Art. 7
              DSGVO Rechtsgrundlage für die Datenverarbeitung. Erfolgt die
              Verarbeitung der Daten zur Erfüllung unserer Leistungen und
              Durchführung vertraglicher Maßnahmen sowie Beantwortung von
              Anfragen so ist Art. 6 Abs. 1 lit. b DSGVO Rechtsgrundlage der
              Datenverarbeitung. Dient die Datenverarbeitung zur Erfüllung einer
              rechtlichen Verpflichtung ist Artikel 6 Abs. 1 lit. c DSGVO
              Rechtsgrundlage. Beispiele hierfür sind die Erfüllung von
              handelsrechtlichen Aufbewahrungsfristen oder die Erfüllung
              steuerlicher (Aufbewahrungs-)Pflichten. Ist die Verarbeitung
              personenbezogener Daten zur Wahrung eines berechtigten Interesses
              unseres Unternehmens oder eines Dritten erforderlich so dient uns
              Artikel 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage. Berechtigte
              Interessen sind insbesondere die Gewährleistung der IT-Sicherheit
              und des IT-Betriebs, die Geltendmachung rechtlicher Ansprüche und
              Verteidigung in Rechtstreitigkeiten, die Erstellung von
              Benutzerstatistiken, Werbung für eigene Leistungen und Produkte
              der Unternehmen der DVAG-Unternehmensgruppe, unserer
              Vermögensberater und unserer Produktpartner, sowie der Markt und
              Meinungsforschung durch Vorstehende, sofern der Direktwerbung
              nicht widersprochen wurde.
            </p>

            <h3 className={subheadingClass}>2.2. Ihre Rechte</h3>
            <p>Sie haben das Recht</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>auf Auskunft nach Art. 15 DSGVO,</li>
              <li>auf Berichtigung nach Art. 16 DSGVO,</li>
              <li>auf Löschung nach Art. 17 DSGVO,</li>
              <li>auf Einschränkung der Verarbeitung nach Art. 18 DSGVO,</li>
              <li>auf Datenübertragung nach Art. 20 DSGVO.</li>
            </ul>
            <p>
              Für die Rechte auf Auskunft und auf Löschung gelten die
              Einschränkungen der §§ 34 und 35 BDSG. Darüber hinaus haben Sie
              ein Beschwerderecht nach Art. 77 DSGVO bei einer
              Datenschutzaufsichtsbehörde gem. § 19 BDSG.
            </p>
            <p>
              Eine uns erteilte Einwilligung in die Verarbeitung
              personenbezogener Daten können Sie jederzeit uns gegenüber mit
              Wirkung für die Zukunft widerrufen.
            </p>

            <h3 className={subheadingClass}>2.3. Dauer der Speicherung</h3>
            <p>
              Sofern in diesen Datenschutzhinweisen nicht anders angegeben,
              werden personenbezogene Daten nur solange gespeichert, wie es zur
              Erfüllung des jeweiligen Zwecks oder zur Erfüllung unserer
              vertraglichen oder gesetzlichen Pflichten erforderlich ist. Wir
              unterliegen verschiedenen Aufbewahrungs- und
              Dokumentationspflichten. Diese ergeben sich insbesondere aus dem
              Handelsgesetzbuch, der Abgabenordnung, dem Geldwäschegesetz und
              der Verordnung über die Finanzanlagenvermittlung sowie der
              Versicherungsvermittlungsverordnung. Die dort vorgegebenen Fristen
              können bis zu 10 Jahren betragen.
            </p>

            <h3 className={subheadingClass}>
              2.4. Übermittlung von personenbezogenen Daten
            </h3>
            <p>
              Falls wir personenbezogene Daten an andere Personen oder
              Unternehmen übermitteln, erfolgt dies nur auf Grundlage Ihrer
              Einwilligung, einer gesetzlichen Erlaubnis, aufgrund einer
              rechtlichen Verpflichtung (z.B. an öffentliche Stellen und
              Institutionen wie Aufsichtsbehörden oder Finanzbehörden) oder auf
              Grundlage einer Vereinbarung zur Auftragsverarbeitung nach Art. 28
              DSGVO. Weitere Kategorien von Empfängern können Sie diesen
              Datenschutzhinweisen entnehmen (siehe dazu Ziffer 3.).
            </p>

            <h3 className={subheadingClass}>
              2.5. Übermittlung von Daten in Drittstaaten
            </h3>
            <p>
              Eine Verarbeitung von personenbezogenen Daten außerhalb des
              Europäischen Wirtschaftsraum erfolgt nur, soweit in dem Drittland
              ein angemessenes Datenschutzniveau gemäß Art. 44 ff. DSGVO durch
              die EU-Kommission bestätigt wurde oder andere angemessene
              Garantien zum Schutz personenbezogener Daten vorhanden sind.
            </p>

            <h3 className={subheadingClass}>2.6. Automatische Entscheidungsfindung</h3>
            <p>
              Eine automatische Entscheidungsfindung oder Profiling erfolgt im
              Rahmen dieser Webseite nicht.
            </p>

            <h2 className={headingClass}>
              3. Weitere Informationen zur Datenverarbeitung
            </h2>

            <h3 className={subheadingClass}>3.1. Cookies</h3>
            <p>
              Unsere Webseite verwendet Cookies. Hierbei handelt es sich um
              kleine Datenpakete, die auf dem Endgerät des Kunden gespeichert
              werden. Neben so genannten Session-Cookies, die automatisch
              gelöscht werden, sobald Sie sich abmelden oder den Browser
              schließen, werden auch so genannte permanente Cookies verwendet,
              die einen wiederkehrenden Nutzer erkennen. Diese Cookies erlöschen
              automatisch nach einem festen Zeitraum.
            </p>
            <p>
              Es ist jederzeit möglich, dass Setzen eines Cookies durch
              entsprechende Einstellungen im Internetbrowser zu widersprechen.
              Bereits gesetzte Cookies können Sie jederzeit löschen. Bei einer
              Deaktivierung von Cookies können möglicherweise nicht alle
              Funktionen unserer Webseite im vollen Umfang genutzt werden.
              Rechtsgrundlage für das Setzen eines Cookies ist die Wahrung der
              vorstehend genannten berechtigten Interessen gemäß Art. 6 Abs. 1
              lit. f DSGVO.
            </p>

            <h3 className={subheadingClass}>
              3.2. Erfassung allgemeiner Daten und Erstellung von Protokolldaten
            </h3>
            <p>
              Bei Aufruf unserer Webseite werden automatisch allgemeine Daten
              und Informationen erfasst und in einem Protokoll des Servers
              gespeichert. Folgende Daten können hierbei erhoben werden:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Informationen zum Browsertyp und Version</li>
              <li>Informationen zum Betriebssystem des Nutzers</li>
              <li>Informationen zum Service-Provider des Nutzers</li>
              <li>
                Die Internet-Protokoll-Adresse (IP-Adresse) des Nutzers oder
                aufrufenden Systems
              </li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Die Seite, über die Sie zu uns gekommen sind (Referrer URL)</li>
              <li>
                Webseiten, die vom System des Nutzers über unsere Webseite
                aufgerufen werden
              </li>
            </ul>
            <p>
              Die Verarbeitung dieser Daten dient der Bereitstellung unserer
              Webseite, zur Gewährleistung der Funktionsfähigkeit unserer
              Informationstechnischen Systeme und der Optimierung unserer
              Webseite. Diese grundsätzlich anonym erhobenen Daten und
              Informationen werden durch uns statistisch ausgewertet, mit dem
              Ziel, den Datenschutz und die Datensicherheit sicherzustellen. Die
              Daten der Logfiles werden dabei stets getrennt von anderen
              gegebenenfalls erfassten personenbezogenen Daten gespeichert und
              grundsätzlich nicht an Dritte weitergegeben. Die Löschung der
              Daten erfolgt automatisch nach Fristlablauf. Rechtsgrundlage für
              die vorrübergehende Verarbeitung der Daten ist die Wahrung der
              vorstehend genannten berechtigten Interessen gemäß Art. 6 Abs. 1
              lit. f DSGVO.
            </p>

            <h3 className={subheadingClass}>
              3.3. Erfassung und Auswertung von Nutzeraktionen / personalisierte
              Inhalte
            </h3>
            <p>
              Soweit Sie uns Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
              erteilt haben, erfassen wir beim Besuch unserer Webseite Ihre
              Benutzeraktionen und speichern diese in einem pseudonymisierten
              Nutzungsprofil. Hierfür greifen wir auf Funktionen der Salesforce
              Marketing Cloud zurück, wo wir die pseudonymisierten Profile auch
              speichern. Hierzu gehören beispielsweise Informationen zu
              aufgerufenen Seiten unserer Webseite, Klickpfade und sonstige
              Interaktionen auf unserer Webseite. Wir nutzen diese
              pseudonymisierten Profile, um Ihnen personalisierte und auf Ihre
              Produktinteressen angepasste Inhalte anbieten zu können und das
              Nutzungserlebnis unserer Webseite zu verbessern. Ihre Einwilligung
              für die Erfassung und Auswertung können Sie jederzeit unter
              „Cookies bearbeiten“ widerrufen.
            </p>

            <h3 className={subheadingClass}>
              3.4. Kontaktformular und E-Mail-Kontakt
            </h3>
            <p>
              Auf unserer Webseite finden Sie ein Kontaktformular und eine
              E-Mail-Adresse, über die Sie mit uns auf elektronischem Weg Kontakt
              aufnehmen können. Nutzen Sie einen dieser Kanäle und nehmen mit
              uns Kontakt auf, so werden die von Ihnen uns übermittelten
              personenbezogenen Daten automatisch gespeichert. Die Speicherung
              und weitere Verarbeitung dieser Daten dient ausschließlich der
              Bearbeitung Ihrer Kontaktanfrage und zur anschließenden
              Kontaktanfrage mit Ihnen. Eine Weitergabe an Dritte erfolgt
              grundsätzlich nicht. Eine Ausnahme besteht dann, wenn Ihre Anfrage
              sich auf einen Vermögensberater unserer Gesellschaft bezieht und
              eine Weitergabe der Daten zur Bearbeitung Ihrer Kontaktanfrage
              erforderlich ist. Die von Ihnen übermittelten Daten werden nach
              Abschluss des Vorgangs gelöscht, sofern der Löschung keine
              vertraglichen oder gesetzlichen Aufbewahrungsfristen
              entgegenstehen. In diesem Fall werden die aufbewahrungspflichtigen
              Daten nach Fristablauf gelöscht. Rechtsgrundlage für die
              Verarbeitung der Daten ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className={subheadingClass}>3.5. Newsletter und E-Mail-Werbung</h3>
            <p>
              Mit unseren Newslettern informieren wir Sie über aktuelle Produkte
              und Neuigkeiten. Um sich zu registrieren, reicht es grundsätzlich
              aus, wenn Sie Ihre E-Mail-Adresse angeben. Die Angabe weiterer
              Daten ist freiwillig. Sofern Sie sich bei einem unserer Newsletter
              registriert haben, nutzen wir Ihre E-Mail-Adresse sowie die
              gegebenenfalls weiteren, von Ihnen freiwillig angegebenen Daten,
              zum Versand des Newsletters. Bei erfolgreicher Anmeldung zum
              Newsletter, speichern wir das Datum Ihrer Anmeldung sowie im Falle
              der Anmeldung über eine Webseite auch Ihre IP-Adresse. Diese
              Speicherung dient dem Nachweis für den Fall, dass ein Dritter eine
              E-Mailadresse missbraucht und sich ohne Wissen des Berechtigten
              für den Newsletter anmeldet. Daten, die Sie uns bei Ihrer
              Anmeldung zur Verfügung stellen, verarbeiten wir, zum Zwecke des
              Versands des Newsletters, in der Salesforce Marketingcloud und
              Salesforce Salescloud. Der Versand des Newsletters erfolgt auf
              Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Ist
              eine Einwilligung zur Werbung für eigene ähnliche Waren oder
              Dienstleistungen nicht erforderlich, erfolgt dies auf Grundlage
              berechtigter Interessen nach Artikel 6 Abs. 1 lit. f DSGVO an der
              Bewerbung unserer Waren und Dienstleistungen, sofern dies, z.B. im
              Falle von Bestandskundenwerbung, gesetzlich erlaubt ist und Sie
              dem nicht widersprochen haben. Ebenfalls auf Grundlage
              berechtigter Interessen speichern wir die im Registrierungsverfahren
              erhobenen Daten, um gegebenenfalls Ihre Einwilligung nachweisen zu
              können. Eine Beendigung des Newsletter-Abos ist jederzeit durch
              den in jedem Newsletter enthaltenen Abmelde-Link möglich.
              Alternativ können Sie sich auch direkt an die oben genannte Post
              oder E-Mail-Adresse wenden. Bei Beendigung können wir die
              ausgetragenen E-Mail-Adressen noch bis zu drei Jahre speichern, um
              eine zuvor abgegebene Einwilligung nachweisen zu können.
            </p>
            <p>
              Um unsere Newsletter fortlaufend zu optimieren und um Ihnen einen
              nutzerorientierten und sicheren Newsletter anbieten zu können,
              werten wir einzelne Nutzeraktivitäten aus. Wir messen, wie häufig
              der Newsletter geöffnet wird und auf welche Links Nutzer klicken.
              Zu diesem Zweck enthält der Newsletter einen sog. „web-beacon“
              oder Pixel, eine Datei, die beim Öffnen des Newsletters von
              unserem Server abgerufen wird. Dabei werden zunächst technische
              Informationen (z.B. Browsertyp, Betriebssystem, Zeitpunkt des
              Abrufs) erhoben. Auch lässt sich feststellen, ob und wann ein
              Newsletter geöffnet wurde und welche Links angeklickt wurden.
              Diese Informationen helfen uns, die Nutzungs- und Lesegewohnheiten
              sowie Interessen unserer Abonnenten zu erkennen, um Inhalte
              anzupassen und das Nutzungserlebnis zu verbessen. Die Auswertung
              erfolgt auf Grundlage Ihrer Einwilligung sowie auf Grundlage
              unserer berechtigten Interessen an einem nutzerfreundlichen und
              informativen Newsletter.
            </p>
            <p>
              In einigen Fällen können wir die Inanspruchnahme kostenloser
              Leistungen von der Einwilligung in den Empfang des Newsletters
              oder anderer Mails abhängig machen, z.B. für die Teilnahme an
              bestimmten Aktionen.
            </p>

            <h3 className={subheadingClass}>
              3.6. Einsatz von Salesforce Marketing-Komponenten
            </h3>
            <p>
              Daten, die Sie bei einem Besuch unserer Webseiten zur Verfügung
              stellen, z.B. im Rahmen von Kontaktformularen oder bei einer
              Anmeldung zu unseren Newslettern, werden in der Salesforce Sales
              Cloud gespeichert, einer Plattform der salesforce.com Germany
              GmbH, Erika-Mann-Straße 31, 80636 München.
            </p>
            <p>
              Ferner setzen wir, zum Versand von Newslettern, Mailings,
              personalisierten Inhalten auf unseren Webseiten sowie für
              Kampagnen in sozialen Netzwerken, die Salesforce Marketing Cloud
              ein. Mit Salesforce haben wir eine Vereinbarung zur
              Auftragsverarbeitung nach Art. 28 DSGVO einerseits sowie
              Standardvertragsklauseln andererseits vereinbart. Salesforce hat
              zudem verbindliche interne Datenschutzvorschriften nach Art. 47
              DSGVO geschlossen, die von europäischen Datenschutzbehörden
              verifiziert wurden. Wir haben Maßnahmen getroffen, damit Daten
              vornehmlich auf Servern innerhalb der Europäischen Union
              verarbeitet werden. Weitere Informationen finden Sie hier:{" "}
              <ExtLink href="https://www.salesforce.com/de/company/privacy/">
                https://www.salesforce.com/de/company/privacy/
              </ExtLink>
              . Trotz der von uns getroffenen Maßnahmen, können, in bestimmten
              Fällen, dennoch personenbezogene Daten an das Mutterunternehmen
              von salesforce.com Germany GmbH, die salesforce Inc., One Market
              Street, Suite 300, San Francisco, CA 94105, USA, übermittelt oder
              in anderen Nicht-EU-Staaten verarbeitet werden. Hierbei unterliegt
              Salesforce als Auftragsverarbeiter der Verpflichtung im Rahmen der
              EU-Standardvertragsklauseln, die sicherstellen sollen, dass ein
              angemessenes Datenschutzniveau und zusätzliche Sicherheitsmaßnahmen
              eingehalten werden.
            </p>
            <p>
              Sofern Sie keine personalisierten Inhalte auf unseren Webseiten
              wünschen, können Sie Ihre Einwilligung jederzeit unter „Cookies
              bearbeiten“ widerrufen.
            </p>

            <h3 className={subheadingClass}>3.7. Fragen zum Traumberuf</h3>
            <p>
              Auf unserer Webseite können Sie unsere „10 Fragen zum Traumberuf“
              beantworten. Die von Ihnen angegebenen Daten werden an den
              jeweiligen Vermögensberater übermittelt, auf dessen Webseite Sie
              die 10 Fragen beantworten und gegebenenfalls durch diesen auch
              gespeichert. Eine Weitergabe an andere Personenkreise erfolgt
              nicht. Im Rahmen der 10 Fragen werden insbesondere Angaben zu
              Ihren Vorstellungen bezüglich Ihrer (zukünftigen) beruflichen
              Tätigkeit sowie Kontaktdaten (Name, E-Mail, ggf. Telefonnummer)
              erhoben. Die Daten werden durch den jeweiligen Vermögensberater
              genutzt, um mit Ihnen, falls gewünscht, Kontakt aufzunehmen und
              bei Interesse verschiedene Karrierewege im Zusammenhang mit dem
              Vermögensberater-Beruf aufzuzeigen. Die von Ihnen übermittelten
              Daten werden nach Abschluss des Vorgangs gelöscht, sofern der
              Löschung keine vertraglichen oder gesetzlichen
              Aufbewahrungsfristen entgegenstehen. In diesem Fall werden die
              aufbewahrungspflichtigen Daten nach Fristablauf gelöscht. Ihre
              Rechte auf Widerspruch und Löschung bleiben unberührt.
              Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a
              DSGVO.
            </p>

            <h3 className={subheadingClass}>3.8. Einsatz von Adobe Analytics</h3>
            <p>
              Auf unserer Webseite setzen wir Adobe Analytics (Omniture) bzw.
              die Adobe Marketing Cloud (nachfolgend „Omniture“ genannt), einen
              Webanalysedienst von Adobe Systems Software Ireland Limited, 4-6
              Riverwalk, Citywest Business Campus, Dublin 24, Republic of
              Ireland ein. Omniture ermöglicht es uns, das Nutzerverhalten von
              Besuchern und Besucherströme zu analysieren. Das ermöglicht es
              uns Inhalte bedarfsgerecht zu erstellen und darüber hinaus
              Probleme schneller zu erkennen und zu beheben.
            </p>
            <p>
              Omniture speichert hierfür Cookie auf Ihrem System. Wir stellen
              zudem durch entsprechende Systemeinstellungen sicher, dass die an
              Adobe übermittelten Tracking-Datensätze vor einer Geolokalisierung
              anonymisiert werden. Die Anonymisierung wird durch das Ersetzen
              des letzten Teils der IP-Adresse umgesetzt. Wir haben darüber
              hinaus serverseitig Einstellungen vorgenommen, aufgrund derer Ihre
              IP-Adresse vor der Verarbeitung für die Geolokalisierung und die
              Reichweitenmessung unabhängig voneinander anonymisiert werden.
              Adobe verarbeitet die erhobenen Daten und Informationen
              ausschließlich in unserem Auftrag. Gegenstand ist das analysieren
              des Nutzerverhaltens und das Erstellen von anonymisierten
              Berichten bzw. Statistiken. Die dabei erhobenen Daten, insbesondere
              Ihre IP-Adresse werden weder durch Adobe noch durch uns mit
              anderen personenbezogenen Daten zusammengeführt. Die hieraus
              gewonnenen Informationen nutzen wir zur Optimierung unseres
              Webauftritts. Rechtsgrundlage der Datenverarbeitung ist § 15 Abs.
              3 TMG bzw. Art. 6 Abs. 1 lit. f DSGVO. Die berechtigten Interessen
              sind die vorstehend genannten Zwecke. Die geltenden
              Datenschutzbestimmungen von Adobe können unter{" "}
              <ExtLink href="http://www.adobe.com/de/privacy.html">
                http://www.adobe.com/de/privacy.html
              </ExtLink>{" "}
              abgerufen werden.
            </p>
            <p>
              Sie können die Setzung von Cookies durch unsere Internetseite
              jederzeit mittels einer entsprechenden Einstellung im
              Internetbrowser verhindern und damit der Setzung von Cookies
              dauerhaft widersprechen. Eine solche Einstellung des genutzten
              Internetbrowsers würde auch verhindern, dass Omniture ein Cookie
              auf dem informationstechnologischen System der betroffenen Person
              setzt. Zudem können die von Omniture bereits gesetzten Cookies
              jederzeit über einen Internetbrowser oder andere Softwareprogramme
              gelöscht werden.
            </p>
            <p>
              Ferner haben Sie die Möglichkeit, einer Erfassung der durch das
              Adobe-Cookie erzeugten, auf eine Nutzung dieser Internetseite
              bezogenen Daten sowie der Verarbeitung dieser Daten durch Adobe zu
              widersprechen und eine solche zu verhindern. Hierzu müssen Sie den
              Abmelde-Button unter dem Link{" "}
              <ExtLink href="http://www.adobe.com/de/privacy/opt-out.html">
                http://www.adobe.com/de/privacy/opt-out.html
              </ExtLink>{" "}
              drücken, der einen Opt-Out-Cookie setzt. Der mit dem Widerspruch
              gesetzte Opt-Out-Cookie wird auf Ihrem System abgelegt. Werden die
              Cookies auf Ihrem System nach einem Widerspruch gelöscht, müssen
              Sie den Link erneut aufrufen und einen neuen Opt-Out-Cookie
              setzen.
            </p>
            <p>
              Mit der Setzung des Opt-Out-Cookies besteht jedoch die
              Möglichkeit, dass die Internetseiten des für die Verarbeitung
              Verantwortlichen für Sie nicht mehr vollumfänglich nutzbar sind.
            </p>

            <h3 className={subheadingClass}>3.9. Einsatz von Google Analytics</h3>
            <p>
              Unsere Webseite nutzt das Analysetool Google Analytics, einen
              Webanalysedienst von Google Inc., 1600 Amphitheatre Pkwy, Mountain
              View, CA 94043-1351, USA. Webanalyse beinhaltet die Erhebung,
              Sammlung und Auswertung von Informationen über das Verhalten von
              Besuchern von Internetseiten. Beispielsweise von welcher Seite Sie
              zu uns gelangt sind, auf welche Unterseiten Sie zugegriffen haben
              und wie lange eine Unterseite betrachtet wurde. Hierfür werden
              Cookies verwendet. Cookies sind Textdateien, welche über einen
              Internetbrowser auf einem Computersystem abgelegt und gespeichert
              werden. Die durch das Cookie erfassten Informationen werden an
              einen Server von Google Inc. in den USA übermittelt. Hierzu
              gehört, neben den Informationen zur Webseitennutzung, auch Ihre
              IP-Adresse. Wir setzen Google Analytics jedoch mit dem Zusatz
              &quot;AnonymizeIP&quot; ein. Das bedeutet, dass Ihre IP-Adresse
              von Google gekürzt und anonymisiert wird, wenn Sie unsere Seite
              innerhalb von Mitgliedstaaten der Europäischen Union oder in
              anderen Vertragsstaaten des Abkommens über den Europäischen
              Wirtschaftsraum aufrufen. Die übermittelte IP-Adresse wird auch
              nicht mit anderen Daten von Google zusammengeführt. Zweck der
              Datenverarbeitung ist die Auswertung von Besucherströmen und der
              Webseitennutzung durch Besucher. In unserem Auftrag erstellt
              Google hierüber für uns Online-Reports. Die hieraus gewonnenen
              Informationen nutzen wir zur Optimierung unseres Webauftritts.
              Rechtsgrundlage der Datenverarbeitung ist § 15 Abs. 3 TMG bzw.
              Art. 6 Abs. 1 lit. f DSGVO. Die berechtigten Interessen sind die
              vorstehend genannten Zwecke. Die geltenden Datenschutzbedingungen
              sowie Nutzungsbedingungen von Google Analytics finden Sie unter{" "}
              <ExtLink href="https://www.google.com/analytics/terms/de.html">
                https://www.google.com/analytics/terms/de.html
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="https://policies.google.com/?hl=de">
                https://policies.google.com/?hl=de
              </ExtLink>
              .
            </p>
            <p>
              Sie können die Setzung von Cookies durch unsere Internetseite
              jederzeit mittels einer entsprechenden Einstellung im
              Internetbrowser verhindern und damit der Setzung von Cookies
              dauerhaft widersprechen. Zudem können die von Google bereits
              gesetzten Cookies jederzeit über einen Internetbrowser oder andere
              Softwareprogramme gelöscht werden.
            </p>
            <p>
              Ferner haben Sie die Möglichkeit, einer Erfassung der durch das
              Cookie erzeugten, auf eine Nutzung dieser Internetseite bezogenen
              Daten sowie der Verarbeitung dieser Daten durch Google zu
              widersprechen und eine solche zu verhindern. Hierzu müssen Sie ein
              Browser Add-On herunterladen und installieren. Den Download finden
              Sie hier:{" "}
              <ExtLink href="https://tools.google.com/dlpage/gaoptout?hl=de">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </ExtLink>
              . Das Add-On verhindert, dass Ihre Daten zukünftig erfasst und
              verarbeitet werden.
            </p>

            <h3 className={subheadingClass}>
              3.10. Informationen zur Datenverarbeitung im Rahmen von
              Online-Meetings
            </h3>
            <p>
              Für Online-Meetings, Videokonferenzen oder Webinare
              („Online-Meetings“) verwenden Vermögensberater die Tools „Zoom“
              oder „Microsoft Teams“.
            </p>
            <p>
              „Zoom“ ist ein Dienst der Zoom Video Communications Ltd., 55
              Almaden Boulevard, 6th Floor, San Jose, California 95113, USA.
            </p>
            <p>
              „Microsoft Teams“ ist ein Dienst der Microsoft Corporation, One
              Microsoft Way, Redmond, WA 98052-6399, USA.
            </p>
            <p>
              Verantwortlich für die Datenverarbeitung, die im unmittelbaren
              Zusammenhang mit der Durchführung von Online-Meetings steht, ist
              der Vermögensberater, der Sie zum jeweiligen Online-Meeting
              eingeladen hat. Rufen Sie die Webseite von Zoom oder Microsoft auf
              oder benutzen Sie die Zoom oder Teams App, so sind Zoom bzw.
              Microsoft verantwortlich.
            </p>
            <p>
              Bei Durchführung des Online-Meetings werden auch personenbezogene
              Daten der Teilnehmer verarbeitet und gegebenenfalls auf Servern
              von Zoom oder Microsoft gespeichert, soweit diese Bestandteil des
              Kommunikationsvorgangs sind. Hierzu gehören insbesondere Metadaten
              (z.B. IP-Adressen, Geräte- und Hardwareinformationen),
              Benutzerdaten (z.B. Benutzername, E-Mail-Adresse, Passwort),
              Text-, Audio und Videodaten.
            </p>
            <p>
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in einer geeigneten und
              effizienten Durchführung von Online-Meetings.
            </p>

            <h3 className={subheadingClass}>
              3.11. Aufzeichnungspflichten nach § 18a der
              Finanzanlagen-Vermittlungsverordnung
            </h3>
            <p>
              Unser Unternehmen und die für uns tätigen selbständigen
              Handelsvertreter sind nach § 18a Finanzanlagen-Vermittlungsverordnung
              (FinVermV) verpflichtet, zum Zwecke der Beweissicherung die
              Inhalte von Telefongesprächen oder sonstiger elektronischer
              Kommunikation aufzuzeichnen, sobald sich die Kommunikation auf die
              Vermittlung von oder die Beratung zu Finanzanlagen bezieht. Das
              gilt auch, wenn das Telefongespräch oder die sonstige elektronische
              Kommunikation nicht zum Abschluss eines Vertrages führen. Die
              Aufzeichnungen werden nach Ablauf der gesetzlichen
              Aufbewahrungsfrist automatisch gelöscht. Die Telefonaufzeichnung
              ist freiwillig. Sie können der Telefonaufzeichnung widersprechen.
              Eine telefonische Anlagevermittlung oder Anlageberatung sind dann
              ausgeschlossen. Innerhalb unseres Unternehmens erhalten nur
              diejenigen Stellen Zugriff auf die Aufzeichnungen, die diese zur
              Erfüllung des Verarbeitungszwecks benötigen. An andere Stellen
              geben wir die Aufzeichnungen nur weiter, wenn wir hierzu
              gesetzlich verpflichtet sind oder dies der Rechtsverteidigung
              dient. Rechtsgrundlagen für die Verarbeitung sind Art. 6 Abs. 1
              lit. c DSGVO und § 18a FinVermV.
            </p>

            <h3 className={subheadingClass}>3.12. Personalisierte Angebote</h3>
            <p>
              Von Zeit zu Zeit kann Ihr Vermögensberater Ihnen personalisierte
              Angebote zukommen lassen, von denen er glaubt, dass diese zu Ihren
              Interessen und Bedürfnissen passen. Zu diesem Zweck verarbeitet
              Ihr Vermögensberater Ihre personenbezogenen Daten auf Grundlage
              berechtigter Interessen nach Art. 6 Abs. 1 lit. f DSGVO, um Ihnen
              entsprechende Informationen und Angebote per Post oder – soweit
              Sie zugestimmt haben – per E-Mail zuzusenden. Hierfür nutzt Ihr
              Vermögensberater Ihre Kontaktdaten (Name, Anschrift,
              E-Mail-Adresse) sowie weitere Informationen, die Sie ihm oder uns
              mitgeteilt haben (z.B. Angaben zu Produktinteresse). Natürlich
              können Sie dieser werblichen Nutzung Ihrer Daten jederzeit mit
              Wirkung für die Zukunft widersprechen bzw. erteilte Einwilligungen
              widerrufen. Ihr Widerspruch bzw. Widerruf kann direkt gegenüber
              dem jeweiligen Vermögensberater oder per E-Mail an{" "}
              <a href="mailto:datenschutz@dvag.com" className={linkClass}>
                datenschutz@dvag.com
              </a>{" "}
              erfolgen. Personalisierte Angebote können Sie online abschließen.
              Nur Sie haben Zugriff auf das Angebot. Entscheiden Sie sich für
              einen Abschluss, so erheben und verarbeiten wir im Rahmen der
              jeweiligen Service- oder Antragsdialoge gegebenenfalls weitere
              personenbezogene Daten (z.B. Name, Anschrift, Daten zum
              versicherten Risiko, Zahlungsdaten). Zweck der Datenverarbeitung
              ist die Vermittlung von Versicherungs- und Finanzprodukten unserer
              Produktpartner, die Antragserstellung sowie die Erfüllung der
              damit verbundenen vorvertraglichen Maßnahmen. Rechtsgrundlage
              hierfür sind Art. 6 Abs. 1 lit. b und f DSGVO. Eine Datenweitergabe
              erfolgt nur an den Produktpartner, bei dem Sie den Vertrag
              abschließen möchten. Weitere Informationen zur Datenverarbeitung
              durch uns und unsere Vermögensberater bei der Vermittlung von
              Versicherungs- und Finanzprodukten finden Sie auch unter{" "}
              <ExtLink href="https://www.datenschutz.dvag">
                www.datenschutz.dvag
              </ExtLink>
              . Informationen zur Datenverarbeitung durch Produktpartner finden
              Sie in den Datenschutzhinweisen des Antrags des jeweiligen
              Produktpartners. Damit unsere Vermögensberater Sie auch bei
              personalisierten Angeboten unterstützen können und um unser
              Angebot für Sie noch interessanter zu gestalten, erfassen wir auf
              Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f
              DSGVO) und soweit erforderlich aufgrund Ihrer Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO) Nutzungsdaten aus dem Online-Bereich unserer
              personalisierten Angebote.
            </p>

            <h3 className={subheadingClass}>3.13. Kundenbewertungen</h3>
            <p>
              Geben Sie eine Kundenbewertung ab, veröffentlichen wir Ihre
              Bewertung unter Ihrem Namen oder alternativ unter einem von Ihnen
              gewählten Pseudonym. Eine Verarbeitung der Daten erfolgt
              ausschließlich zum Zweck der Veröffentlichung Ihrer Bewertung auf
              unseren Webseiten. Eine bestimmte Speicherdauer ist nicht
              vorgesehen. Ihre Bewertung ist neben dem bewerteten
              Vermögensberater auch anderen Besuchern der Webseite zugänglich.
              Sie können jederzeit die Löschung der Bewertung verlangen bzw.
              einer Verarbeitung jederzeit mit Wirkung für die Zukunft
              widersprechen. Rechtsgrundlage für die Verarbeitung ist Art. 6
              Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
              Transparenz und Meinungsbildung.
            </p>

            <h2 className={headingClass}>
              4. Einbindung von Diensten und Inhalte Dritter (Social-Plugins
              etc.)
            </h2>
            <p>
              Einige unserer Webseiten nutzen Dienste und Inhalte von
              Drittanbietern. Insbesondere sogenannte „Social-Plugins“, Videos
              oder Schriftarten. Dies erfolgt auf Grundlage unserer berechtigten
              Interessen (Art. 6 Abs. 1 lit. f DSGVO) an der Bereitstellung und
              Verbreitung unserer Inhalte, der Analyse, der Optimierung und des
              Betriebs unserer Webseite. Auf unseren Webseiten können daher
              Dienste und Inhalte folgender Drittanbieter eingebunden sein:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Facebook, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA (für die
                Verarbeitung personenbezogener Daten Verantwortlicher ist, wenn
                eine betroffene Person außerhalb der USA oder Kanada lebt, die
                Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal
                Harbour, Dublin 2, Ireland)
              </li>
              <li>
                Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA
                94043-1351, USA
              </li>
              <li>
                YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA
              </li>
              <li>
                XING AG, Gänsemarkt 43 – 20354 Hamburg – Deutschland
              </li>
              <li>
                Instagram LLC, 1 Hacker Way, Building 14 First Floor, Menlo
                Park, CA, USA
              </li>
              <li>
                Twitter, Inc., 1355 Market Street, Suite 900, San Francisco, CA
                94103, USA
              </li>
              <li>
                LinkedIn Corporation, 2029 Stierlin Court Mountain View, CA
                94043, USA (für Datenschutzangelegenheiten außerhalb der USA:
                LinkedIn Ireland, Privacy Policy Issues, Wilton Plaza, Wilton
                Place, Dublin 2, Ireland)
              </li>
            </ul>
            <p>
              Soweit eine Webseite Social-Plugins einsetzt, verwenden wir zum
              Schutze Ihrer Daten die Lösung „Shariff“. Social-Plugins werden
              dadurch auf unserer Webseite lediglich als Grafik eingebunden.
              Damit erfolgt keine direkte Verlinkung zur Webseite des
              Plugin-Anbieters. Klicken Sie eine die Grafik an, werden Sie
              direkt zum jeweiligen Anbieter weitergeleitet. Erst dann werden
              Ihre Daten an den Anbieter übermittelt. Klicken Sie die Grafik
              nicht an, werden auch keine Daten mit den Anbietern der
              eingebundenen Social-Plugins ausgetauscht. Weitere Informationen
              zur Verwendung Ihrer Daten finden sie in den jeweiligen
              Nutzungsbedingungen und Datenschutzhinweisen der jeweiligen
              Anbieter. Informationen und Hinweise zu der von uns eingesetzten
              Shariff-Lösung finden Sie hier:{" "}
              <ExtLink href="http://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html">
                heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html
              </ExtLink>
              .
            </p>
            <p>
              Weitere Datenschutzhinweise und Informationen zu den von uns
              genutzten Social-Plugins sowie Diensten von Drittanbietern:
            </p>

            <h3 className={subheadingClass}>
              4.1. Datenschutzhinweise für Facebook-Komponenten
            </h3>
            <p>
              Einige unserer Webseiten nutzen Social-Plugins und -Komponenten
              des sozialen Netzwerks Facebook, Inc., 1 Hacker Way, Menlo Park,
              CA 94025, USA. Für die Verarbeitung personenbezogener Daten
              Verantwortlicher ist, wenn eine betroffene Person außerhalb der
              USA oder Kanada lebt, die Facebook Ireland Ltd., 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Ireland.
            </p>
            <p>
              Nutzen Sie Facebook-Plugins, baut Ihr Webbrowser eine direkte
              Verbindung mit den Servern von Facebook auf. Der Inhalt des
              Plugins wird von Facebook direkt an Ihren Browser übermittelt und
              von diesem in die Webseite eingebunden. Wir haben daher keinen
              Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses
              Plugins erhebt und insoweit auch keine Kenntnis über die von
              Facebook erhobenen Daten. Facebook kann jedoch durch Ihren Aufruf
              des Plugins erfahren, dass Sie unsere Webseite mit Ihrer
              IP-Adresse besucht haben. Insbesondere dann, wenn Sie bei Facebook
              mit Ihrem Facebook-Profil eingeloggt sind. Mit einem Klick auf den
              Facebook &quot;Like-Button&quot; verlinken Sie darüber hinaus
              Inhalte unserer Webseite mit Ihrem Facebook-Profil, womit Facebook
              Ihnen den Besuch unserer Webseite zuordnen kann. Entsprechendes
              gilt für andere Facebook-Plugins die wir einsetzen.
            </p>
            <p>
              Eine Übersicht aller Facebook-Plugins kann unter{" "}
              <ExtLink href="https://developers.facebook.com/docs/plugins/?locale=de_DE">
                developers.facebook.com/docs/plugins
              </ExtLink>{" "}
              abgerufen werden. Die Datenschutzrichtlinie von Facebook finden
              Sie unter{" "}
              <ExtLink href="https://de-de.facebook.com/about/privacy/">
                de-de.facebook.com/about/privacy/
              </ExtLink>
              . Auf dieser erhalten Sie weitere Informationen über die Erhebung,
              Verarbeitung und Nutzung personenbezogener Daten durch Facebook
              und welche Einstellungsmöglichkeiten Facebook zum Schutz Ihrer
              personenbezogenen Daten bietet.
            </p>

            <h3 className={subheadingClass}>
              4.2. Datenschutzhinweise für YouTube-Videos
            </h3>
            <p>
              Auf manchen unserer Webseiten sind Videos des Internet-Videoportals
              YouTube eingebettet. Diese Videos werden von der YouTube, LLC, 901
              Cherry Ave., San Bruno, CA 94066, USA (YouTube) zur Verfügung
              gestellt. Die YouTube, LLC ist einer Tochtergesellschaft der
              Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351,
              USA.
            </p>
            <p>
              Mit Aufruf einer Webseite, die eine Youtube-Komponente beinhaltet
              oder wenn Sie ein eingebettetes Video abspielen, baut Ihr
              Webbrowser eine direkte Verbindung mit den Servern von YouTube
              auf. Der Inhalt wird von YouTube direkt an Ihren Browser
              übermittelt bzw. heruntergeladen und abgespielt. Wir haben keinen
              Einfluss auf den Umfang der Daten, die YouTube dabei erhebt und
              insoweit auch keine Kenntnis über die von YouTube erhobenen Daten.
              YouTube kann jedoch durch Ihren Aufruf des Videos erfahren, dass
              Sie unsere Webseite mit Ihrer IP-Adresse besucht haben.
              Insbesondere dann, wenn Sie bei YouTube mit Ihrem YouTube-Profil
              eingeloggt sind. Genauere Informationen zum Datenschutz und der
              Verwendung Ihrer Daten durch YouTube sind unter{" "}
              <ExtLink href="https://www.google.de/intl/de/policies/privacy/">
                google.de/intl/de/policies/privacy/
              </ExtLink>{" "}
              abrufbar.
            </p>

            <h3 className={subheadingClass}>
              4.3. Datenschutzhinweise für Instagram-Komponenten
            </h3>
            <p>
              Einige unserer Webseiten nutzen Plugins des Sozialen Netzwerks
              Instagram, z.B. den Insta-Button. Diese Komponenten werden von der
              Instagram LLC, 1 Hacker Way, Building 14 First Floor, Menlo Park,
              CA, USA (Instagram) zur Verfügung gestellt und betrieben.
            </p>
            <p>
              Nutzen Sie Instagram-Plugins, wie den Insta-Button, baut Ihr
              Webbrowser eine direkte Verbindung mit den Servern von Instagram
              auf. Der Inhalt des Plugins wird von Instagram direkt an Ihren
              Browser übermittelt und von diesem in die Webseite eingebunden.
              Wir haben daher keinen Einfluss auf den Umfang der Daten, die
              Instagram mit Hilfe dieses Plugins erhebt und insoweit auch keine
              Kenntnis über die von Instagram erhobenen Daten. Instagram kann
              jedoch durch Ihren Aufruf des Plugins erfahren, dass Sie unsere
              Webseite mit Ihrer IP-Adresse besucht haben. Insbesondere dann,
              wenn Sie bei Instagram mit Ihrem Instagram-Profil eingeloggt sind.
              Mit einem Klick auf den Insta-Button verlinken Sie darüber hinaus
              Inhalte unserer Webseite mit Ihrem Instagram-Profil, womit
              Instagram Ihnen den Besuch unserer Webseite zuordnen kann.
              Genauere Informationen zum Insta-Button und weiteren Plugins des
              Anbieters und der Verwendung Ihrer Daten durch Instagram sind
              unter{" "}
              <ExtLink href="https://www.instagram.com/about/legal/privacy">
                instagram.com/about/legal/privacy
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="https://help.instagram.com/155833707900388">
                help.instagram.com/155833707900388
              </ExtLink>{" "}
              abrufbar.
            </p>

            <h3 className={subheadingClass}>
              4.4. Datenschutzhinweise LinkedIn-Plugins
            </h3>
            <p>
              Einige unserer Webseiten nutzen den LinkedIn-Plugin des Sozialen
              Netzwerks LinkedIn. Diese Komponente wird von der LinkedIn
              Corporation, 2029 Stierlin Court Mountain View, CA 94043, USA
              (LinkedIn) zur Verfügung gestellt und betrieben. Für
              Datenschutzangelegenheiten außerhalb der USA ist LinkedIn Ireland,
              Privacy Policy Issues, Wilton Plaza, Wilton Place, Dublin 2,
              Ireland, zuständig.
            </p>
            <p>
              Nutzen Sie den LinkedIn-Button, baut Ihr Webbrowser eine direkte
              Verbindung mit den Servern von LinkedIn auf. Der Inhalt des
              Plugins wird von LinkedIn direkt an Ihren Browser übermittelt und
              von diesem in die Webseite eingebunden. Wir haben daher keinen
              Einfluss auf den Umfang der Daten, die LinkedIn mit Hilfe dieses
              Plugins erhebt und insoweit auch keine Kenntnis über die von
              LinkedIn erhobenen Daten. LinkedIn kann jedoch durch Ihren Aufruf
              des Plugins erfahren, dass Sie unsere Webseite mit Ihrer
              IP-Adresse besucht haben. Insbesondere dann, wenn Sie bei LinkedIn
              mit Ihrem LinkedIn-Profil angemeldet sind. Mit einem Klick auf den
              LinkedIn-Button verlinken Sie darüber hinaus Inhalte unserer
              Webseite mit Ihrem LinkedIn-Profil, womit LinkedIn Ihnen den
              Besuch unserer Webseite zuordnen kann. Genauere Informationen zum
              LinkedIn-Button und weiteren Plugins des Anbieters und der
              Verwendung Ihrer Daten durch LinkedIn sind unter{" "}
              <ExtLink href="https://www.linkedin.com/legal/privacy-policy">
                linkedin.com/legal/privacy-policy
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="https://www.linkedin.com/legal/cookie-policy">
                linkedin.com/legal/cookie-policy
              </ExtLink>{" "}
              abrufbar.
            </p>

            <h3 className={subheadingClass}>
              4.5. Datenschutzhinweise für Twitter-Komponenten
            </h3>
            <p>
              Einige unserer Webseiten nutzen Plugins und Komponenten des
              Mikroblogging-Dienstes Twitter. Diese Komponenten werden von der
              Twitter, Inc., 1355 Market Street, Suite 900, San Francisco, CA
              94103, USA (Twitter) zur Verfügung gestellt und betrieben.
            </p>
            <p>
              Nutzen Sie den Twitter-Button oder Twitter-Komponenten, baut Ihr
              Webbrowser eine direkte Verbindung mit den Servern von Twitter
              auf. Der Inhalt des Plugins oder der Komponente wird von Twitter
              direkt an Ihren Browser übermittelt und von diesem in die Webseite
              eingebunden. Wir haben daher keinen Einfluss auf den Umfang der
              Daten, die Twitter mit Hilfe dieses Plugins erhebt und insoweit
              auch keine Kenntnis über die von Twitter erhobenen Daten. Twitter
              kann jedoch durch Ihren Aufruf des Plugins erfahren, dass Sie
              unsere Webseite mit Ihrer IP-Adresse besucht haben. Insbesondere
              dann, wenn Sie bei Twitter mit Ihrem Twitter-Profil angemeldet
              sind. Mit einem Klick auf den Twitter-Button verlinken Sie darüber
              hinaus Inhalte unserer Webseite mit Ihrem Twitter-Profil oder
              übermitteln Daten und Informationen an Twitter oder andere Nutzer
              von Twitter, womit Twitter und andere Twitter-Nutzer Ihnen den
              Besuch unserer Webseite zuordnen kann. Genauere Informationen zum
              Twitter-Button und weiteren Plugins des Anbieters und der
              Verwendung Ihrer Daten durch Twitter sind unter{" "}
              <ExtLink href="https://twitter.com/privacy?lang=de">
                twitter.com/privacy
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="https://about.twitter.com/de/resources/buttons">
                about.twitter.com/de/resources/buttons
              </ExtLink>{" "}
              abrufbar.
            </p>

            <h3 className={subheadingClass}>
              4.6. Datenschutzhinweise für Xing-Share-Button
            </h3>
            <p>
              Einige unserer Webseiten nutzen den Share-Button des Sozialen
              Netzwerks Xing. Diese Komponente wird von der XING SE,
              Dammtorstraße 30, 20354 Hamburg, Deutschland (Xing) zur Verfügung
              gestellt und betrieben.
            </p>
            <p>
              Nutzen Sie den Share-Button, baut Ihr Webbrowser eine direkte
              Verbindung mit den Servern von Xing auf. Der Inhalt des Plugins
              oder der Komponente wird von Xing direkt an Ihren Browser
              übermittelt und von diesem in die Webseite eingebunden. Wir haben
              daher keinen Einfluss auf den Umfang der Daten, die Xing mit Hilfe
              dieses Plugins erhebt und insoweit auch keine Kenntnis über die
              von Xing erhobenen Daten. Xing kann jedoch durch Ihren Aufruf des
              Plugins erfahren, dass Sie unsere Webseite mit Ihrer IP-Adresse
              besucht haben. Insbesondere dann, wenn Sie bei Xing mit Ihrem
              Xing-Profil angemeldet sind. Mit einem Klick auf den Xing-Button
              verlinken Sie darüber hinaus Inhalte unserer Webseite mit Ihrem
              Xing-Profil oder übermitteln Daten und Informationen an Xing,
              womit Xing Ihnen den Besuch unserer Webseite zuordnen kann.
              Genauere Informationen zum Xing-Button und weiteren Plugins des
              Anbieters und der Verwendung Ihrer Daten durch Xing sind unter{" "}
              <ExtLink href="https://www.xing.com/privacy">
                xing.com/privacy
              </ExtLink>{" "}
              und{" "}
              <ExtLink href="https://www.xing.com/app/share?op=data_protection">
                xing.com/app/share?op=data_protection
              </ExtLink>{" "}
              abrufbar.
            </p>

            <h3 className={subheadingClass}>
              4.7. Datenschutzhinweise für Google Maps
            </h3>
            <p>
              Einzelne unserer Webseiten nutzen den Landkartendienst „Google
              Maps” der Google Ireland Limited, Gordon House, 4 Barrow St,
              Dublin, D04 E5W5, Irland (Google). Google Maps ist ein Dienst zur
              Darstellung von interaktiven Landkarten. Wir verwenden die Google
              Maps API um auf einzelnen Webseiten geographische Informationen
              visuell darzustellen und einzubinden, z.B. um Vermögensberater in
              Ihrer Nähe anzuzeigen. Nutzen Sie Google Maps, werden auch Daten
              an Google übermittelt und durch Google verarbeitet, z.B. Ihre
              IP-Adresse sowie weitere Nutzungsdaten. Diese können auch an
              Server der Google LLC in den USA übertragen werden. Soweit
              rechtlich erforderlich, holen wir vor der Nutzung von Google Maps
              Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO ein. Im Übrigen
              erfolgt die Datenverarbeitung auf Grundlage unserer berechtigten
              Interessen nach Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen
              über die Datenverarbeitung durch Google finden sie hier:{" "}
              <ExtLink href="https://www.google.com/policies/privacy/">
                google.com/policies/privacy/
              </ExtLink>
              .
            </p>

            <h3 className={subheadingClass}>4.8. Datenschutzhinweise für Matomo</h3>
            <p>
              Zur Analyse des Nutzerverhaltens auf unserer Website nutzen wir
              die Webanalyse-Software Matomo. Mit Hilfe von Matomo können wir
              Informationen über die Nutzung unserer Website erheben und in
              pseudonymisierten Nutzungsprofilen auswerten. Dies dient der
              statistischen Auswertung und der Optimierung unserer Inhalte.
              Hierzu werden auch Cookies auf Ihrem Endgerät gespeichert und von
              uns ausgelesen. Auf diese Weise sind wir in der Lage, den
              einzelnen, zusammenhängenden Besuch sowie wiederkehrende Besuche
              zu erkennen und zu zählen. Dabei verarbeiten wir Ihre IP-Adresse
              (gekürzt), Nutzungsdaten (z. B. aufgerufene Seiten, Verweildauer,
              Klickpfade), Geräteinformationen (z. B. Browsertyp,
              Bildschirmauflösung) und Herkunft (z. B. Referrer-URL). Die
              Verarbeitung Ihrer Daten erfolgt grundsätzlich innerhalb der EU /
              des EWR. Jedoch kann eine Verarbeitung in Drittstaaten nicht
              ausgeschlossen werden. Rechtsgrundlage der Datenverarbeitung ist
              Ihre Einwilligung nach § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a
              DSGVO. Ihre Einwilligung können Sie jederzeit über die
              Cookie-Einstellungen unserer Webseite widerrufen. Weitere
              Informationen zu den eingesetzten Cookies: _pk_id.*, Speicherdauer:
              bis zu 13 Monate, in der Regel aufgrund von Beschränkungen im
              Browser nur 7 Tage, Zweck: Erkennung wiederkehrender Nutzer und
              langfristige Analyse von Besuchsverhalten; _pk_ses.*: Speicherdauer:
              30 Minuten, Zweck: Temporäre Speicherung von Daten eines Besuchs.
              Weitere Informationen zu Matomo:{" "}
              <ExtLink href="https://matomo.org/privacy/">
                matomo.org/privacy/
              </ExtLink>
              .
            </p>

            <h2 className={headingClass}>
              5. Kommunikation mittels Messenger-Dienste (WhatsApp, Signal etc.)
            </h2>
            <p>
              Gegebenenfalls treten Sie mit uns auch über Messenger-Dienste wie
              WhatsApp oder Signal in Kontakt. Informationen und Hinweise zur
              Kommunikation über Messenger-Dienste finden Sie in unseren
              Datenschutzhinweisen zur Nutzung von Messenger-Diensten.
            </p>

            <h2 className={headingClass}>6. Änderungen</h2>
            <p>
              Wir behalten uns die Änderung dieser Datenschutzerklärung für die
              Zukunft vor.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
