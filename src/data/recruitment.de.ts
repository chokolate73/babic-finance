import {
  QUIZ_URL,
  UTM,
  WHATSAPP_NUMBER,
  type FAQItem,
  type HeroContent,
  type MenteeStory,
  type PathStep,
  type Qualification,
  type SegmentCard,
  type SupportRow,
  type TransparenzItem,
} from "./recruitment";

export { QUIZ_URL, UTM, WHATSAPP_NUMBER };

export function waLink(utm: string, message: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}&${utm}`;
}

export const homeHero: HeroContent = {
  headline: "Starte deine Karriere als",
  headlineAccent: "Finanzberater in Deutschland",
  subtitle: "Ohne Vorerfahrung. Mit voller Team-Unterstützung.",
  personName: "Vladislav Babic",
  trustLine: "Wir antworten innerhalb einer Stunde während der Geschäftszeiten",
  primaryCTA: {
    text: "Passt dieser Beruf zu mir?",
    href: QUIZ_URL,
  },
  secondaryCTA: { text: "Mehr erfahren", href: "#recognize" },
  stats: [
    { value: "21", label: "Jahre in Finanzen" },
    { value: "4 387", label: "Kunden im Netzwerk" },
    { value: "131+ Mio. €", label: "unter Verwaltung" },
  ],
  pills: [
    { text: "Ohne Vorerfahrung" },
    { text: "Kostenlose Ausbildung" },
    { text: "Volle Unterstützung" },
    { text: "DVAG", mobileHidden: true },
  ],
};

export const homePainPoints = {
  eyebrow: "Situation",
  title: "Kommt dir das bekannt vor?",
  subtitle: "Wenn auch nur eines davon auf dich zutrifft — lies weiter",
  messages: [
    {
      text: "Ich habe einen Hochschulabschluss, aber mein Diplom wird hier nicht anerkannt",
      time: "18:12",
    },
    { text: "Ich arbeite seit 10 Jahren nicht in meinem Beruf", time: "18:14" },
    {
      text: "Ich beziehe Bürgergeld. Ich will selbstständig sein, weiß aber nicht wie",
      time: "18:16",
    },
    {
      text: "Ich will Menschen helfen, aber weiß nicht, wie ich das zum Beruf mache",
      time: "18:19",
    },
    { text: "Ich bin nicht mehr jung — ist es zu spät, was zu ändern?", time: "18:22" },
    { text: "Meine Sprachen sind mein Plus, aber wo werden sie gebraucht?", time: "18:24" },
  ],
  reply:
    "Ich habe diesen Weg selbst gemacht. Ich zeige dir, wie du in Deutschland einen Beruf aufbauen kannst — auch wenn es zu spät scheint.",
} as const;

export const myStoryContent = {
  title: "Ich habe diesen Weg selbst gegangen",
  paragraphs: [
    "Ich kam 2003 aus Estland nach Deutschland. Ohne Sprache, ohne Kontakte, ohne Geld. Ich habe gearbeitet, gelernt, Fehler gemacht — aber bin weitergegangen.",
    `2005 entdeckte ich das Finanzgeschäft. Damals sagten mir alle: „Lern erst Deutsch. Mach erst eine Ausbildung. Erst, erst, erst…" — ich wartete nicht. Ich begann zu handeln und zu lernen gleichzeitig.`,
    `Heute bin ich Regionaldirektor der DVAG in Troisdorf — mit über 131 Millionen Euro Kundenkapital unter Verwaltung und 4 387 Menschen in meinem Netzwerk. Und ich helfe anderen, den gleichen Weg zu gehen: von „keine Ahnung von Finanzen" bis zum eigenständigen Berater mit eigenem Geschäft.`,
  ],
  pullQuote:
    "Meine Mission ist es, die Angst zu nehmen und zu zeigen, dass man in Deutschland einen Beruf von Null aufbauen kann. Auch ohne Sprache, Erfahrung oder Selbstvertrauen.",
} as const;

export const segmentCards: SegmentCard[] = [
  {
    id: "quereinsteiger",
    iconName: "GraduationCap",
    title: "Wenn du eine Ausbildung hast",
    description:
      "Dein Heimatdiplom wird nicht anerkannt oder du arbeitest nicht in deinem Beruf? Dieser Beruf nutzt deine Erfahrung und Sprachen — ohne dass du in Deutschland neu studieren musst.",
    ctaLabel: "Quereinsteiger →",
    ctaHref: "/de/karriere/quereinstieg",
  },
  {
    id: "buergergeld",
    iconName: "FileCheck2",
    title: "Wenn du Bürgergeld oder ALG I beziehst",
    description:
      "Der Staat unterstützt den Weg in die Selbstständigkeit — bis zu 24 Monate Zuschuss. Wir helfen dir mit den Unterlagen fürs Jobcenter und begleiten dich vom Empfänger zum Berater.",
    ctaLabel: "Weg mit dem Jobcenter →",
    ctaHref: "/de/karriere/buergergeld",
  },
  {
    id: "side-start",
    iconName: "TrendingUp",
    title: "Wenn du arbeitest, aber selbstständig sein willst",
    description:
      "Du musst deine Stelle nicht sofort aufgeben — du kannst parallel starten. Passend für alle, die bereits in Deutschland angekommen sind und eine langfristige Perspektive suchen.",
    ctaLabel: "Mehr erfahren →",
    ctaHref: QUIZ_URL,
  },
];

export const qualifications: Qualification[] = [
  {
    id: "ihk",
    title: "Kaufmann/-frau für Versicherungen und Finanzanlagen (IHK)",
    subtitle: "Staatlich anerkannter Beruf",
    description:
      "Abschluss der Industrie- und Handelskammer. Öffnet dir Türen zu jedem Finanzunternehmen in Deutschland.",
  },
  {
    id: "34f",
    title: "Finanzanlagenfachmann (§34f GewO)",
    subtitle: "Lizenz für Investments und Fonds",
    description:
      "Normalerweise kosten Kurs und Prüfung 490–890 € + verpflichtende Berufshaftpflicht über 1,27 Mio. €. Bei der DVAG — alles inklusive.",
  },
  {
    id: "34i",
    title: "Fachmann für Immobiliardarlehensvermittlung (§34i GewO)",
    subtitle: "Lizenz für Baufinanzierung und Immobilien",
    description:
      "Einer der ertragreichsten Bereiche der Finanzberatung.",
  },
  {
    id: "dbbv",
    title: "Vermögensberater DBBV",
    subtitle: "Eigenes Branchenzertifikat",
    description:
      "Deutsches Berufsbildungswerk für Vermögensberatung — in der Branche anerkannt.",
  },
];

export const qualificationsCallout = {
  text: "Die DVAG investiert über 80 Millionen Euro pro Jahr in die Ausbildung ihrer Berater.",
  sub: "Für dich heißt das: du zahlst nichts für Prüfungen, Kurse und Versicherungen — und lernst sofort von den Besten.",
  source: "Quelle: Unternehmensbericht DVAG, dvag-karriere.de",
  productsPopup: {
    label: "Welche Produkte werde ich beraten?",
    title: "Welche Produkte du berätst",
    description:
      "Aus dem umfangreichen Angebot der DVAG wählst du gemeinsam mit deinen Kunden die für sie passenden Produkte aus. Dank der engen Kooperation mit unseren Produktpartnern bieten wir leistungsstarke Konzepte, die einzigartig am Markt und flexibel auf die individuelle Lebenssituation abgestimmt sind.",
    categories: [
      "Absicherung",
      "Altersvorsorge",
      "Vermögensaufbau",
      "Wohneigentum",
      "Geld sparen & managen",
      "Konzepte für Kinder",
      "Firmenkunden",
    ],
    closeLabel: "Schließen",
    link: {
      href: "https://www.dvag.de/dvag/allfinanzberatung/produkte.html",
      label: "Mehr auf dvag.de",
    },
  },
};

export const pathSteps: PathStep[] = [
  {
    num: 1,
    title: "Kennenlernen",
    description:
      "Kostenloses Gespräch: Ziele, Zweifel, ehrliche Antwort — ob es zu dir passt.",
  },
  {
    num: 2,
    title: "10 Fragen",
    description:
      `Offizieller DVAG-Test „10 Fragen zum Traumberuf". Ergebnis sehen wir beide.`,
  },
  {
    num: 3,
    title: "Start der Ausbildung",
    description:
      "Lernen mit meiner persönlichen Begleitung — Vollzeit oder berufsbegleitend.",
  },
  {
    num: 4,
    title: "Erste Praxis",
    description:
      "Echte Fälle von Anfang an — mit Mentor und Team im Rücken.",
  },
  {
    num: 5,
    title: "Lizenzprüfungen",
    description:
      "IHK-Prüfungen §34d / §34f / §34i — Kosten und Vorbereitung übernimmt die DVAG.",
  },
  {
    num: 6,
    title: "Selbstständigkeit",
    description:
      "Am Ende der Ausbildung: Kunden, Erfahrung, Team. Du bist dein eigener Chef.",
  },
];

export const incomeContent = {
  eyebrow: "Einkommen",
  title: "Was verdienen Berater",
  subtitle: "Ehrlich, ohne Versprechen — auf Basis offener Quellen",
  mainRange: {
    value: "46 800 € — 119 700 €",
    label: "Jahresverdienst-Bandbreite von DVAG-Beratern",
    source: "Quelle: Kununu, 133 Bewertungen",
    sourceHref:
      "https://www.kununu.com/de/deutsche-vermoegensberatung/gehalt/vermoegensberater-in-45577",
  },
  smallBlocks: [
    {
      value: "~80 200 € / Jahr",
      label: "Durchschnitt laut Kununu",
    },
    {
      value: "Keine Obergrenze",
      label: "Provision hängt von deinem Einsatz ab",
    },
  ],
  explainer: [
    "Bei der DVAG gibt es kein Festgehalt. Du bist selbstständiger Berater (§§ 84, 92 HGB), und dein Einkommen hängt direkt davon ab, wie vielen Kunden du hilfst und welche Lösungen du anbietest.",
  ],
  bullets: [
    {
      strong: "Das Einkommen hat keine Obergrenze",
      rest: " — Berater mit großem Portfolio und Führungsrollen im Team verdienen deutlich überdurchschnittlich",
    },
    {
      strong: "Die ersten Monate brauchen Geduld",
      rest: " — wie in jedem Geschäft baut sich das Einkommen schrittweise auf. Deshalb starten wir mit der Ausbildung, nicht mit dem Verkauf",
    },
  ],
  disclaimer:
    "Selbstständige Handelsvertreter, Provisionsvergütung. Einkommensspannen laut Kununu-Daten — tatsächliches Einkommen hängt vom persönlichen Einsatz ab. Keine Garantie auf bestimmte Einkommenshöhen.",
};

export const transparenzItems: TransparenzItem[] = [
  {
    title: "Das ist Selbstständigkeit, keine Anstellung",
    description:
      "Du wirst selbstständiger Handelsvertreter (§§ 84, 92 HGB). Das bedeutet Freiheit, aber auch Verantwortung: kein Festgehalt, keine Arbeitgeberbeiträge zur Sozialversicherung. Dafür auch keine Einkommensgrenze.",
  },
  {
    title: `Provision ist nicht sofort „auf dem Konto"`,
    description:
      "Ein Teil deines Verdienstes fließt in die Stornorückstellung (Reserve für den Fall von Kündigungen) und wird nach der Haftungszeit ausgezahlt. Das ist Branchenstandard, keine DVAG-Eigenheit.",
  },
  {
    title: "Die Ausbildung braucht Zeit",
    description:
      "Die vollständige Zertifizierung (§34d + §34f + §34i) dauert parallel zur Praxis bis zu 3 Jahre. Eine ernsthafte Zeitinvestition — am Ende hast du vier anerkannte Qualifikationen fürs Leben.",
  },
  {
    title: "Wir unterstützen, aber der Erfolg ist deiner",
    description:
      `Du bekommst einen persönlichen Coach, ein Team und ein strukturiertes Programm. Das Endergebnis hängt aber von deiner Aktivität und Disziplin ab. Wir können dich nicht erfolgreich „machen" — wir geben dir alles, damit du es selbst schaffst.`,
  },
];

export const menteesPlaceholder: MenteeStory[] = [];

export const homeFAQContent = {
  eyebrow: "Fragen",
  title: "Häufige Fragen zum Beruf",
};

export const homeFAQItems: FAQItem[] = [
  {
    q: "Ist das MLM oder Strukturvertrieb?",
    a: `Nein. Die DVAG ist ein Versicherungs- und Finanzvermittler auf Provisionsbasis mit über 40 Produktpartnern (Banken, Versicherungen, Investmentgesellschaften). Du berätst Kunden und bekommst Provision vom Produktgeber für abgeschlossene Verträge — nicht von „Menschen unter dir". Die Struktur in der DVAG bedeutet Mentoring und Teamarbeit, nicht „bring einen Freund und bekomm Prozente".`,
  },
  {
    q: "Muss ich Deutsch können?",
    a: "Für den Start — nicht zwingend. Mein gesamtes Team in Troisdorf betreut Ausländer, und viele Berater starten mit Grundkenntnissen. Die Sprache wächst mit der Zeit — die IHK-Prüfungen sind auf Deutsch, aber bis dahin bist du bereit.",
  },
  {
    q: "Kann ich neben meinem Hauptjob einsteigen?",
    a: "Ja. Die DVAG unterstützt offiziell den nebenberuflichen Einstieg. Du kannst als Assistent oder parallel zum Hauptjob anfangen und in die Vollzeit wechseln, wenn du dich bereit fühlst.",
  },
  {
    q: "Wann verdiene ich?",
    a: "Zu Beginn der Ausbildung bekommst du eine tarifliche Ausbildungsvergütung plus mögliche Provisionen aus ersten Verträgen. Das volle Einkommen kommt schrittweise — die ersten 6–12 Monate gehen meist in den Aufbau der Kundenbasis. Das ist die ehrliche Realität jedes Geschäfts.",
  },
  {
    q: "Was ist die Bescheinigung fürs Jobcenter?",
    a: "Wenn du Bürgergeld beziehst und in die Selbstständigkeit wechselst, fordert das Jobcenter eine Tragfähigkeitsbescheinigung — ein Dokument, das belegt, dass dein Geschäftsplan tragfähig ist. Wir helfen bei der Erstellung über IHK-Partner. Das Dokument stellt nicht die DVAG aus, sondern unabhängige Experten — wir begleiten aber den gesamten Prozess. Mehr auf der Seite zum Bürgergeld.",
  },
  {
    q: "Was kosten Ausbildung und Prüfungen?",
    a: "Für dich — nichts. Die DVAG investiert über 80 Millionen Euro pro Jahr in die Ausbildung ihrer Berater. IHK-Prüfungen (§34d, §34f, §34i), Vorbereitungskurse, verpflichtende Versicherung — alles zahlt das Unternehmen.",
  },
  {
    q: "Was, wenn es nicht klappt?",
    a: "Das normale Risiko der Selbstständigkeit. Du kannst das Vertragsverhältnis mit der DVAG jederzeit beenden — aber sei bereit, dass Provisionen für nicht abgeschlossene Verträge im Rahmen der Stornohaftung neu berechnet werden können. Das ist Branchenstandard und steht im Vertrag.",
  },
  {
    q: "Wie sieht der erste Schritt aus?",
    a: `Wir beginnen mit einem kostenlosen Gespräch (persönlich in Troisdorf, per Zoom oder WhatsApp). Ich sage dir ehrlich, ob dieser Beruf zu dir passt. Danach — die offiziellen „10 Fragen zum Traumberuf" der DVAG. Wenn du sie bestehst — besprechen wir die Details.`,
  },
];

export const finalCtaContent = {
  title: "Bereit, mehr zu erfahren?",
  description:
    "10 Minuten Gespräch auf WhatsApp oder ein kostenloses Treffen in Troisdorf — und du weißt, ob das dein Weg ist. Ohne Verpflichtungen, ohne Druck.",
  primary: {
    text: "Schreib auf WhatsApp",
    href: waLink(
      UTM.home,
      "Hallo Vladislav! Ich möchte mehr über den Beruf des Finanzberaters bei der DVAG erfahren.",
    ),
  },
  secondary: { text: "10 Fragen durchgehen", href: QUIZ_URL },
};

// --- Quereinstieg ---

export const quereinstiegHero: HeroContent = {
  headline: "Wechsle deinen Beruf in Deutschland —",
  headlineAccent: "in einen, der gebraucht wird",
  subtitle:
    "Finanzberater DVAG — ein Beruf, der deine Erfahrung und Sprachen nutzt",
  trustLine:
    "Von Null oder parallel zur Arbeit · Vollständige Ausbildung · Vier anerkannte Qualifikationen",
  primaryCTA: { text: "10 Fragen durchgehen", href: QUIZ_URL },
  secondaryCTA: { text: "Mehr erfahren", href: "#recognize" },
};

export const quereinstiegPainPoints = {
  eyebrow: "Situation",
  title: "Kommt dir das bekannt vor?",
  subtitle: "Wenn auch nur eines davon auf dich zutrifft — lies weiter",
  messages: [
    { text: "Ich bin Ingenieur, aber arbeite seit 5 Jahren im Lager", time: "19:04" },
    {
      text: "Mein Lehrerdiplom wird nicht anerkannt, ich sitze an der Kasse",
      time: "19:08",
    },
    { text: "Ich will mit Menschen arbeiten, nicht mit Papieren", time: "19:10" },
    {
      text: "Ich traue mich nicht, in meinem Alter was Neues anzufangen",
      time: "19:12",
    },
  ],
  reply:
    "Du kannst schon mehr, als du denkst. Lass uns das in einen Beruf verwandeln.",
  ctaLabel: "So läuft's",
  ctaHref: "#path",
} as const;

export const quereinstiegBenefits = {
  eyebrow: "Warum es passt",
  title: "Warum dieser Beruf zu Quereinsteigern passt",
  items: [
    {
      title: "Deine Sprache ist ein Asset, kein Problem",
      description:
        "In Deutschland leben Millionen ausländische Familien, die einen Finanzberater in ihrer Sprache brauchen. Du startest in einer Nische fast ohne Konkurrenz.",
    },
    {
      title: "Ausbildung aus jedem Bereich ist ein Plus",
      description:
        "Medizin, Ingenieurwesen, Pädagogik — du hast bereits Menschenkenntnis, strukturiertes Denken und die Fähigkeit, Komplexes einfach zu erklären. Das sind 80% des Beraterberufs.",
    },
    {
      title: "Du startest schrittweise",
      description:
        "Du musst deine Arbeit nicht aufgeben. Die ersten Monate — parallel zum aktuellen Job. Wechselst in die Vollzeit, wenn du bereit bist und erste Kunden hast.",
    },
    {
      title: "Alter ist kein Minus",
      description:
        "Kunden vertrauen Menschen mit Lebenserfahrung. Berater, die mit 35–50 einsteigen, wachsen oft schneller — mehr Kontakte, reifer Blick auf Finanzen.",
    },
  ],
};

export const quereinstiegFAQItems: FAQItem[] = [
  {
    q: "Muss ich meinen aktuellen Job kündigen?",
    a: "Nein. Die DVAG unterstützt offiziell den nebenberuflichen Einstieg — du kannst parallel zur Hauptbeschäftigung starten. Die meisten meiner Mentees machen es so: erste 3–6 Monate parallel, dann Wechsel in die Vollzeit bei stabilem Kundenstrom.",
  },
  {
    q: "Und wenn ich keine Finanzausbildung habe?",
    a: "Kein Problem. Das DVAG-Programm vermittelt die gesamte Finanzbasis von Null. Wichtiger sind Menschenkenntnis, Disziplin und Lernbereitschaft. Meine besten Schüler sind ehemalige Ingenieure, Lehrer, Krankenpfleger und IT-Fachkräfte ohne Finanzhintergrund.",
  },
  {
    q: "Mein Diplom ist in Deutschland nicht anerkannt. Ist das wichtig?",
    a: "Für diesen Beruf — nein. IHK-Zertifizierungen in der DVAG verlangen kein deutsches Hochschulstudium. Dein Heimatdiplom ist ein Plus, kein Minus: es zeigt deine Lern- und Arbeitsfähigkeit.",
  },
  {
    q: "Ich bin 45. Zu spät?",
    a: "Viele DVAG-Berater starten nach 40 — und zeigen die besten Ergebnisse. Alter bedeutet Kontakte, Lebenserfahrung und Augenhöhe mit Kunden. Die Finanzbranche schätzt das mehr als Jugend.",
  },
  {
    q: "Wie lange dauert die Ausbildung?",
    a: "Basisausbildung — 6–12 Monate parallel zur Praxis. Vollständige Zertifizierung (§34d + §34f + §34i) — bis zu 3 Jahre. Aber schon am Anfang kannst du unter meiner Begleitung mit Kunden arbeiten und Provisionen verdienen.",
  },
  {
    q: "Was ist mit Sozialabgaben?",
    a: "Als Selbstständiger organisierst du Krankenversicherung und Rente selbst. Am Anfang klingt das kompliziert — die DVAG bietet Beratungen dazu, und wir helfen, optimale Lösungen für deine Situation zu finden.",
  },
  {
    q: "Kann ich in eine Festanstellung zurück, falls es nicht klappt?",
    a: "Ja. Du bleibst qualifizierte Fachkraft mit IHK-Abschluss, der auf dem Markt gefragt ist. Viele Berater finden nach 2–3 Jahren DVAG höher bezahlte Festanstellungen bei Banken oder Versicherungen — das ist dein Plan B.",
  },
];

export const quereinstiegFinalCTA = {
  title: "Erster Schritt — ohne Verpflichtung",
  description:
    "Kostenloses 30-Minuten-Gespräch — im Büro in Troisdorf, per Zoom oder WhatsApp. Wir besprechen deine Situation, ich sage ehrlich, ob dieser Beruf zu dir passt.",
  primary: {
    text: "Schreib auf WhatsApp",
    href: waLink(
      UTM.quereinstieg,
      "Hallo Vladislav! Ich bin Quereinsteiger — will den Beruf wechseln. Können wir reden?",
    ),
  },
  secondary: { text: "10 Fragen durchgehen", href: QUIZ_URL },
};

// --- Bürgergeld ---

export const buergergeldHero: HeroContent = {
  headline: "Vom Bürgergeld",
  headlineAccent: "in den eigenen Beruf",
  subtitle:
    "Mit staatlicher Unterstützung, Einstiegsgeld bis zu 24 Monate, und Begleitung von den Unterlagen bis zum ersten Kunden",
  trustLine:
    "Hilfe bei Tragfähigkeitsbescheinigung · Begleitung zum Jobcenter-Termin · Start mit Team-Unterstützung",
  primaryCTA: {
    text: "Kostenloses Beratungsgespräch buchen",
    href: QUIZ_URL,
  },
  secondaryCTA: { text: "Mehr erfahren", href: "#recognize" },
};

export const buergergeldPainPoints = {
  eyebrow: "Situation",
  title: "Kommt dir das bekannt vor?",
  subtitle: "Wenn auch nur eines davon auf dich zutrifft — lies weiter",
  messages: [
    {
      text: "Ich bin seit einem Jahr auf Bürgergeld. Ich will selbstständig sein, aber habe Angst",
      time: "19:22",
    },
    { text: "Ich brauche einen Beruf, aber habe keine 3 Jahre für die Ausbildung", time: "19:24" },
    { text: "Was ist Einstiegsgeld und wie bekomme ich es?", time: "19:26" },
    { text: "Bescheinigung fürs Jobcenter — wo bekomme ich die?", time: "19:28" },
  ],
  reply:
    "Das Jobcenter unterstützt den Wechsel in die Selbstständigkeit — wenn die Unterlagen richtig sind. Wir wissen, wie das geht.",
  ctaLabel: "So helfen wir",
  ctaHref: "#help",
} as const;

export const supportTable: {
  rows: SupportRow[];
  disclaimer: string;
} = {
  rows: [
    {
      label: "Für wen",
      einstiegsgeld: "Bürgergeld-Empfänger",
      gruendungszuschuss: "ALG-I-Empfänger",
    },
    {
      label: "Höhe",
      einstiegsgeld: "~280–420 €/Monat",
      gruendungszuschuss: "ALG I + 300 €/Monat",
    },
    {
      label: "Dauer",
      einstiegsgeld: "bis zu 24 Monate",
      gruendungszuschuss: "bis zu 15 Monate (6+9)",
    },
    {
      label: "Zusatzförderung",
      einstiegsgeld: "bis zu 5 000 € für Ausstattung",
      gruendungszuschuss: "—",
    },
    {
      label: "Antrag",
      einstiegsgeld: "VOR Tätigkeitsbeginn",
      gruendungszuschuss: "VOR Gewerbeanmeldung",
    },
    {
      label: "Voraussetzung",
      einstiegsgeld: "Tragfähigkeitsbescheinigung",
      gruendungszuschuss: "Tragfähigkeitsbescheinigung",
    },
    {
      label: "Steuern",
      einstiegsgeld: "Steuerfrei",
      gruendungszuschuss: "Steuerfrei",
    },
  ],
  disclaimer:
    "Höhe und Gewährung — Entscheidung des jeweiligen Jobcenters / der Arbeitsagentur (Ermessensleistung). Wir garantieren nicht den Erhalt — aber wir helfen, die Unterlagen so vorzubereiten, dass die Chancen maximal sind.",
};

export const buergergeldHelp = {
  eyebrow: "Unterstützung",
  title: "So helfen wir",
  items: [
    {
      title: "Businessplan fürs Jobcenter",
      description:
        "Wir helfen bei der Erstellung nach dem Format, das dein Jobcenter erwartet.",
    },
    {
      title: "Tragfähigkeitsbescheinigung",
      description:
        "Wir vermitteln IHK-Partner, die die Bescheinigung über die Tragfähigkeit deines Geschäfts ausstellen.",
    },
    {
      title: "Termin mit dem Fallmanager",
      description:
        "Wir begleiten dich zum Jobcenter-Termin — bei Bedarf mit Übersetzung.",
    },
    {
      title: "Gewerbeanmeldung",
      description:
        "Wir helfen bei der Anmeldung des Gewerbes und den ersten Formalitäten.",
    },
  ],
};

export const buergergeldPathSteps: PathStep[] = [
  {
    num: 1,
    title: "Erstes Gespräch",
    description:
      "Wir besprechen deine Situation: welche Leistung, wie lange, Familienstand, Einschränkungen.",
  },
  {
    num: 2,
    title: "Unterlagen vorbereiten",
    description:
      "Businessplan und Tragfähigkeitsbescheinigung — etwa 2 Wochen. Wir helfen in jedem Schritt.",
  },
  {
    num: 3,
    title: "Termin beim Jobcenter",
    description:
      "Du gehst mit fertigen Unterlagen. Bei Bedarf begleiten wir dich.",
  },
  {
    num: 4,
    title: "Bewilligung und Gewerbeanmeldung",
    description:
      "Bewilligung vom Jobcenter → Anmeldung der gewerblichen Tätigkeit.",
  },
  {
    num: 5,
    title: "Start der Ausbildung",
    description:
      "Du beginnst parallel zum Eingang des Einstiegsgeldes zu lernen — das Einkommen ist stabil.",
  },
  {
    num: 6,
    title: "Erste Kunden",
    description:
      "Erste Provisionen → der Weg zur Unabhängigkeit vom Bürgergeld und zu deinem eigenen Beruf.",
  },
];

export const buergergeldTransparenzItems: TransparenzItem[] = [
  {
    title: "Das Jobcenter kann ablehnen",
    description:
      "Das ist eine Ermessensleistung, kein Anspruch. Die endgültige Entscheidung trifft dein Fallmanager. Unsere Aufgabe ist, die Unterlagen so vorzubereiten, dass die Chancen maximal sind.",
  },
  {
    title: "Tragfähigkeit — unabhängige Prüfung",
    description:
      "Die Bescheinigung über die Tragfähigkeit des Geschäfts stellt die IHK oder ein akkreditierter Experte aus, nicht die DVAG. Wir helfen bei der Vorbereitung und vermitteln Partner.",
  },
  {
    title: "Einstiegsgeld kommt zusätzlich zum Bürgergeld",
    description:
      "Einstiegsgeld wird nicht auf das Bürgergeld angerechnet — du bekommst den Zuschuss oben drauf. Eine zeitlich begrenzte Unterstützung in der Aufbauphase.",
  },
  {
    title: "De-minimis-Limit",
    description:
      "Alle Formen staatlicher Hilfe — nicht mehr als 200 000 € insgesamt über 3 Jahre. Für die meisten Neuberater nicht relevant, aber gut zu wissen.",
  },
];

export const buergergeldFAQItems: FAQItem[] = [
  {
    q: "Das Jobcenter lehnt ab — was nun?",
    a: "Erster Schritt — schriftliche Begründung der Ablehnung einholen. Oft liegt es an Formalien. Wir können helfen, erneut zu beantragen oder Widerspruch einzulegen (innerhalb eines Monats). Eine erste Ablehnung bedeutet nicht, dass der Weg verschlossen ist.",
  },
  {
    q: "Kann ich das Bürgergeld anfangs behalten?",
    a: "Ja. In den ersten Monaten der Selbstständigkeit ist das Einkommen meist niedrig, und Bürgergeld wird unter Berücksichtigung der realen Einnahmen weitergezahlt. Einstiegsgeld kommt als zusätzliche Unterstützung oben drauf. Wichtig: Einkommen korrekt ans Jobcenter melden.",
  },
  {
    q: "Was ist die Schonzeit und wie funktioniert sie?",
    a: "Schonzeit ist der Zeitraum, in dem ein Teil deiner Einkünfte aus Selbstständigkeit nicht auf das Bürgergeld angerechnet wird. Für neue Selbstständige gelten in den ersten Monaten Sonderregelungen. Die genauen Bedingungen hängen von deinem Jobcenter ab — klären wir individuell.",
  },
  {
    q: "Brauche ich Deutsch fürs Jobcenter?",
    a: "Ich und das Team helfen dir mit dem gesamten Prozess. Beim Jobcenter selbst ist Deutsch nötig — aber wir gehen diese Hürde mit dir: wir erklären, was zu sagen ist, begleiten zum Termin und organisieren bei Bedarf Übersetzung.",
  },
  {
    q: "Wie lange dauert der gesamte Prozess bis zum Start?",
    a: "Vom ersten Gespräch bis zur Bewilligung des Jobcenters — meist 4–8 Wochen. Die meiste Zeit geht in Businessplan und Tragfähigkeitsbescheinigung. Nach der Bewilligung — Gewerbeanmeldung in 1–2 Wochen.",
  },
  {
    q: "Ich bekomme ALG I, nicht Bürgergeld. Ist das ein anderes Programm?",
    a: "Ja. Für ALG I gibt es den Gründungszuschuss — ein Programm über die Arbeitsagentur. Andere Bedingungen: Höhe = ALG I + 300 €/Monat für bis zu 15 Monate. Antrag, bevor ALG I endet. Wir arbeiten mit beiden Programmen.",
  },
  {
    q: "Was, wenn ich den Bürgergeld-Status vor der DVAG verschweige?",
    a: "Nicht nötig. Die DVAG nimmt Berater mit unterschiedlichem Startstatus auf, auch Bürgergeld-Empfänger. Im Gegenteil — wir kennen die Besonderheiten und helfen, die Unterlagen richtig einzureichen. Ehrlicher Start = weniger Probleme später.",
  },
];

export const buergergeldFinalCTA = {
  title: "Erstes Treffen — kostenlos",
  description:
    "30 Minuten — wir besprechen deine Situation mit dem Jobcenter, welche Unterlagen nötig sind, wie lange der Prozess dauert. Ohne Verpflichtungen.",
  primary: {
    text: "Schreib auf WhatsApp",
    href: waLink(
      UTM.buergergeld,
      "Hallo Vladislav! Ich bekomme Bürgergeld / ALG I — will den Weg in den Beruf besprechen.",
    ),
  },
  secondary: { text: "Anrufen", href: "tel:+491784743490" },
};

// --- Shared strings for DE pages ---

export const ui = {
  pathEyebrow: "Weg",
  pathTitleHome: "So läuft's",
  pathTitleBuergergeld: "Schritt-für-Schritt-Plan für Bürgergeld / ALG I",
  transparenzEyebrow: "Ehrlich",
  transparenzTitleHome: "Ohne rosa Brille",
  transparenzSubtitleHome:
    "Das ist ein ehrliches Gespräch darüber, was es bedeutet, in diesem Beruf zu arbeiten",
  transparenzTitleBuergergeld: "Was vorab wichtig zu wissen ist",
  transparenzSubtitleBuergergeld:
    "Staatliche Förderprogramme sind eine Möglichkeit, keine Garantie. Das solltest du wissen",
  faqEyebrow: "Fragen",
  faqTitleQuereinstieg: "Häufige Fragen von Quereinsteigern",
  faqTitleBuergergeld: "Fragen zu Jobcenter und Bürgergeld",
  qualificationsEyebrow: "Qualifikationen",
  qualificationsTitle: "Vier Qualifikationen in einem Programm",
  qualificationsDescription:
    "Die DVAG übernimmt Ausbildung, Prüfungen und Lizenzen — du bekommst einen Beruf, der in ganz Deutschland gefragt ist",
  segmentsEyebrow: "Für wen",
  segmentsTitle: "Für dich, wenn...",
  segmentsSubtitle:
    "Wähle die Situation, die dir näher ist — und erfahre den Weg im Detail",
  supportEyebrow: "Staatliche Unterstützung",
  supportTitle: "Einstiegsgeld vs Gründungszuschuss",
  supportDescription:
    "Zwei staatliche Förderprogramme für den Weg in die Selbstständigkeit — eines für Bürgergeld-Empfänger, das andere für ALG I",
  supportParameter: "Parameter",
  incomeThisMeans: "Das bedeutet zweierlei:",
  heroScrollLabel: "Nach unten scrollen",
  chatAriaLabel:
    "Visuelle Darstellung typischer Karriere-Fragen im Chat-Format",
  replyAuthor: "Vladislav",
} as const;

export const legalDisclaimers = {
  buergergeldFooter:
    "Einstiegsgeld und Gründungszuschuss sind Ermessensleistungen. Gewährung erfolgt durch Jobcenter / Arbeitsagentur im Einzelfall.",
} as const;
