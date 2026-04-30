"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Ist die Beratung wirklich kostenlos?",
    a: "Ja, die Erstberatung ist absolut kostenlos und völlig unverbindlich. Wir besprechen Ihre Situation und ich zeige Ihnen, wie ich Ihnen helfen kann.",
  },
  {
    q: "Was kosten Ihre Leistungen?",
    a: "Für Sie kostenfrei. Ich arbeite als DVAG-Vermögensberater, meine Vergütung erhalte ich von den Partnergesellschaften. Sie erhalten eine umfassende Analyse und die Auswahl der passenden Lösungen aus dem DVAG-Sortiment ohne zusätzliche Kosten.",
  },
  {
    q: "Ich kenne mich mit Finanzen nicht aus - ist das ein Problem?",
    a: "Überhaupt nicht. Die meisten meiner Kunden kommen ohne Vorkenntnisse zu mir. Meine Aufgabe ist es, alles in einfacher Sprache zu erklären und Ihnen zu helfen, die richtige Entscheidung zu treffen.",
  },
  {
    q: "Was ist die DVAG?",
    a: (
      <>
        Die Deutsche Vermögensberatung (DVAG) ist das größte Finanzberatungsunternehmen Deutschlands. Über die DVAG biete ich ausschließlich lizenzierte und geprüfte Finanzprodukte an. Mehr über die Ergebnisse des Unternehmens — im{" "}
        <a
          href="https://unternehmensbericht.dvag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5CD55] hover:underline"
        >
          offiziellen DVAG-Bericht
        </a>
        .
      </>
    ),
  },
  {
    q: "Mit welchen Versicherungen und Banken arbeiten Sie zusammen?",
    a: "Ich vermittle Produkte der DVAG-Gruppe — die Versicherungsgesellschaften der Generali (Generali Versicherung, Central Krankenversicherung, ADVOCARD Rechtsschutz u. a.) sowie Partnerbanken. Damit lässt sich für jede Lebenssituation eine passende Lösung finden.",
  },
  {
    q: "Ich bin erst kürzlich nach Deutschland gekommen. Können Sie mir helfen?",
    a: "Selbstverständlich! Ich bin auf die Beratung von Menschen spezialisiert, die erst kürzlich nach Deutschland gezogen sind. Ich helfe Ihnen, sich im System zurechtzufinden und die wichtigen ersten Schritte zu gehen.",
  },
  {
    q: "Wie laufen die Termine ab?",
    a: "Die Termine können sowohl persönlich in meinem Büro in Troisdorf als auch online stattfinden. Sie wählen das für Sie passende Format.",
  },
  {
    q: "Muss ich Deutsch sprechen können?",
    a: "Nein, das ist nicht notwendig. Die gesamte Kommunikation mit den deutschen Gesellschaften übernehme ich für Sie und erkläre alles in einfacher Sprache.",
  },
  {
    q: "Sind die Seminare kostenlos?",
    a: "Ja, alle meine Seminare und Bildungsveranstaltungen sind absolut kostenlos. Das ist Teil meiner Mission - die Finanzbildung zu fördern.",
  },
  {
    q: "Muss ich meine Bank oder Versicherung wechseln, um mit Ihnen zu arbeiten?",
    a: "Nein, ein Wechsel ist nicht zwingend erforderlich. Ich analysiere Ihre bestehenden Verträge und schlage nur dort Verbesserungen vor, wo es tatsächlich sinnvoll ist. Das Ziel ist es, das Vorhandene zu optimieren - nicht zu wechseln um des Wechsels willen.",
  },
  {
    q: "Arbeiten Sie nur mit Kunden in Deutschland?",
    a: "Ja, meine Leistungen richten sich an Kunden, die in Deutschland leben. Die Finanzprodukte und gesetzlichen Rahmenbedingungen, mit denen ich arbeite, gelten hier. Beratungen sind online aus jeder Stadt Deutschlands möglich.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="pt-10 pb-20 lg:pt-14 lg:pb-28 bg-navy"
      style={{ background: "radial-gradient(ellipse at center, #242a4e 0%, #1a1f3d 70%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Fragen
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-white mt-3">
              Häufig gestellte Fragen
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <div
                className={`border rounded-xl px-6 transition-colors ${
                  isOpen ? "bg-white/[0.05] border-gold/40" : "bg-transparent border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between py-5 text-left font-semibold text-white text-base"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-base text-white/85 leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
