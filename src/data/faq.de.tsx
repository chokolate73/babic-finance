import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  a: ReactNode;
  aText: string;
}

export const faqs: FaqItem[] = [
  {
    q: "Ist die Beratung wirklich kostenlos?",
    a: "Ja, die Erstberatung ist absolut kostenlos und völlig unverbindlich. Wir besprechen Ihre Situation und ich zeige Ihnen, wie ich Ihnen helfen kann.",
    aText:
      "Ja, die Erstberatung ist absolut kostenlos und völlig unverbindlich. Wir besprechen Ihre Situation und ich zeige Ihnen, wie ich Ihnen helfen kann.",
  },
  {
    q: "Was kosten Ihre Leistungen?",
    a: "Für Sie kostenfrei. Ich arbeite als DVAG-Vermögensberater, meine Vergütung erhalte ich von den Partnergesellschaften. Sie erhalten eine umfassende Analyse und die Auswahl der passenden Lösungen aus dem DVAG-Sortiment ohne zusätzliche Kosten.",
    aText:
      "Für Sie kostenfrei. Ich arbeite als DVAG-Vermögensberater, meine Vergütung erhalte ich von den Partnergesellschaften. Sie erhalten eine umfassende Analyse und die Auswahl der passenden Lösungen aus dem DVAG-Sortiment ohne zusätzliche Kosten.",
  },
  {
    q: "Ich kenne mich mit Finanzen nicht aus - ist das ein Problem?",
    a: "Überhaupt nicht. Die meisten meiner Kunden kommen ohne Vorkenntnisse zu mir. Meine Aufgabe ist es, alles in einfacher Sprache zu erklären und Ihnen zu helfen, die richtige Entscheidung zu treffen.",
    aText:
      "Überhaupt nicht. Die meisten meiner Kunden kommen ohne Vorkenntnisse zu mir. Meine Aufgabe ist es, alles in einfacher Sprache zu erklären und Ihnen zu helfen, die richtige Entscheidung zu treffen.",
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
    aText:
      "Die Deutsche Vermögensberatung (DVAG) ist das größte Finanzberatungsunternehmen Deutschlands. Über die DVAG biete ich ausschließlich lizenzierte und geprüfte Finanzprodukte an. Mehr über die Ergebnisse des Unternehmens — im offiziellen DVAG-Bericht.",
  },
  {
    q: "Mit welchen Versicherungen und Banken arbeiten Sie zusammen?",
    a: "Ich vermittle Produkte der DVAG-Gruppe — die Versicherungsgesellschaften der Generali (Generali Versicherung, Central Krankenversicherung, ADVOCARD Rechtsschutz u. a.) sowie Partnerbanken. Damit lässt sich für jede Lebenssituation eine passende Lösung finden.",
    aText:
      "Ich vermittle Produkte der DVAG-Gruppe — die Versicherungsgesellschaften der Generali (Generali Versicherung, Central Krankenversicherung, ADVOCARD Rechtsschutz u. a.) sowie Partnerbanken. Damit lässt sich für jede Lebenssituation eine passende Lösung finden.",
  },
  {
    q: "Ich bin erst kürzlich nach Deutschland gekommen. Können Sie mir helfen?",
    a: "Selbstverständlich! Ich bin auf die Beratung von Menschen spezialisiert, die erst kürzlich nach Deutschland gezogen sind. Ich helfe Ihnen, sich im System zurechtzufinden und die wichtigen ersten Schritte zu gehen.",
    aText:
      "Selbstverständlich! Ich bin auf die Beratung von Menschen spezialisiert, die erst kürzlich nach Deutschland gezogen sind. Ich helfe Ihnen, sich im System zurechtzufinden und die wichtigen ersten Schritte zu gehen.",
  },
  {
    q: "Wie laufen die Termine ab?",
    a: "Die Termine können sowohl persönlich in meinem Büro in Troisdorf als auch online stattfinden. Sie wählen das für Sie passende Format.",
    aText:
      "Die Termine können sowohl persönlich in meinem Büro in Troisdorf als auch online stattfinden. Sie wählen das für Sie passende Format.",
  },
  {
    q: "Muss ich Deutsch sprechen können?",
    a: "Nein, das ist nicht notwendig. Die Beratung kann auf Russisch oder auf Deutsch erfolgen. Die gesamte Kommunikation mit den deutschen Gesellschaften übernehme ich für Sie.",
    aText:
      "Nein, das ist nicht notwendig. Die Beratung kann auf Russisch oder auf Deutsch erfolgen. Die gesamte Kommunikation mit den deutschen Gesellschaften übernehme ich für Sie.",
  },
  {
    q: "Sind die Seminare kostenlos?",
    a: "Ja, alle meine Seminare und Bildungsveranstaltungen sind absolut kostenlos. Das ist Teil meiner Mission - die Finanzbildung zu fördern.",
    aText:
      "Ja, alle meine Seminare und Bildungsveranstaltungen sind absolut kostenlos. Das ist Teil meiner Mission - die Finanzbildung zu fördern.",
  },
  {
    q: "Muss ich meine Bank oder Versicherung wechseln, um mit Ihnen zu arbeiten?",
    a: "Nein, ein Wechsel ist nicht zwingend erforderlich. Ich analysiere Ihre bestehenden Verträge und schlage nur dort Verbesserungen vor, wo es tatsächlich sinnvoll ist. Das Ziel ist es, das Vorhandene zu optimieren - nicht zu wechseln um des Wechsels willen.",
    aText:
      "Nein, ein Wechsel ist nicht zwingend erforderlich. Ich analysiere Ihre bestehenden Verträge und schlage nur dort Verbesserungen vor, wo es tatsächlich sinnvoll ist. Das Ziel ist es, das Vorhandene zu optimieren - nicht zu wechseln um des Wechsels willen.",
  },
  {
    q: "Arbeiten Sie nur mit Kunden in Deutschland?",
    a: "Ja, meine Leistungen richten sich an Kunden, die in Deutschland leben. Die Finanzprodukte und gesetzlichen Rahmenbedingungen, mit denen ich arbeite, gelten hier. Beratungen sind online aus jeder Stadt Deutschlands möglich.",
    aText:
      "Ja, meine Leistungen richten sich an Kunden, die in Deutschland leben. Die Finanzprodukte und gesetzlichen Rahmenbedingungen, mit denen ich arbeite, gelten hier. Beratungen sind online aus jeder Stadt Deutschlands möglich.",
  },
];
