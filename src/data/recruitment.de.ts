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
  headline: "Finanzberater werden -",
  headlineAccent: "auch wenn du in Deutschland nochmal von vorn anfängst",
  subtitle: "Ohne Vorerfahrung. Mit voller Team-Unterstützung.",
  personName: "Vladislav Babic",
  trustLine:
    "Während der Geschäftszeiten meldest du dich meist innerhalb einer Stunde - versprochen.",
  primaryCTA: {
    text: "Passt der Beruf zu mir?",
    href: QUIZ_URL,
  },
  secondaryCTA: { text: "So läuft der Einstieg", href: "#recognize" },
  stats: [
    { value: "21", label: "Jahre in der Finanzberatung" },
    { value: "4 387", label: "Kunden im Netzwerk" },
    { value: "Über 131 Mio. €", label: "Kundenkapital" },
  ],
  pills: [
    { text: "Ohne Vorerfahrung" },
    { text: "Ausbildung kostenfrei" },
    { text: "Begleitung durch DVAG" },
  ],
};

export const homePainPoints = {
  eyebrow: "Vielleicht kennst du das",
  title: "Kennst du das?",
  subtitle: "Wenn dich auch nur ein Punkt trifft - bleib dran.",
  messages: [
    {
      text: "Ich hab studiert, aber mein Abschluss wird hier nicht anerkannt.",
      time: "18:12",
    },
    {
      text: "Seit zehn Jahren arbeite ich nicht mehr in meinem Beruf.",
      time: "18:14",
    },
    {
      text: "Ich bin im Bürgergeld und würde mich gern selbstständig machen - weiß aber nicht, wie.",
      time: "18:16",
    },
    {
      text: "Ich möchte Menschen helfen - aber wie macht man daraus einen Beruf?",
      time: "18:19",
    },
    {
      text: "Ich bin nicht mehr 25. Ist es jetzt zu spät, nochmal was Neues anzufangen?",
      time: "18:22",
    },
    {
      text: "Ich will mehr aus mir machen - aber alles, was ich sehe, ist Hamsterrad.",
      time: "18:24",
    },
  ],
  reply:
    "Ich kenne das alles. Ich zeig dir, wie der Weg in Deutschland trotzdem funktioniert - auch wenn er gerade aussichtslos aussieht.",
} as const;

export const myStoryContent = {
  title: "Ich bin den Weg selbst gegangen",
  paragraphs: [
    "Ich habe früh angefangen, mir meinen eigenen Weg aufzubauen. Ohne Kontakte in der Branche, ohne Startkapital, ohne Plan B. Was ich hatte: den Wunsch, mehr aus meinem Leben zu machen.",
    `2005 bin ich in die Finanzberatung gerutscht. Damals hieß es ständig: „Mach erst mal eine Ausbildung. Sammle erst mal Erfahrung. Eins nach dem anderen." Ich hab nicht gewartet. Ich hab angefangen - und parallel dazu gelernt.`,
    `Heute leite ich die DVAG-Direktion in Troisdorf. 4 387 Kunden im Netzwerk, über 131 Millionen Euro Kapital, ein Team, das genau diesen Weg geht. Und ich helfe anderen, ihn auch zu gehen - von „keine Ahnung von Finanzen" bis zum selbstständigen Berater mit eigenem Geschäft.`,
  ],
  pullQuote:
    `Mir geht's darum, die Angst rauszunehmen. Du kannst dir einen Beruf von null aufbauen - auch ohne Branchenerfahrung, ohne Beziehungen, ohne das Gefühl, schon „bereit" zu sein.`,
} as const;

export const segmentCards: SegmentCard[] = [
  {
    id: "quereinsteiger",
    iconName: "GraduationCap",
    title: "Wenn du studiert hast, aber nicht in der Branche arbeitest",
    description:
      "Dein Abschluss passt nicht zu dem, was du heute machst, oder du hast schon lange den Beruf gewechselt? In der Finanzberatung zählen deine Lebenserfahrung und dein Engagement - und du musst nicht nochmal von vorn studieren.",
    ctaLabel: "Zum Quereinstieg →",
    ctaHref: "/de/karriere/quereinstieg",
  },
  {
    id: "buergergeld",
    iconName: "FileCheck2",
    title: "Wenn du Bürgergeld oder ALG I bekommst",
    description:
      "Der Staat fördert den Weg in die Selbstständigkeit - bis zu 24 Monate. Wir helfen dir bei den Unterlagen fürs Jobcenter und begleiten dich Schritt für Schritt aus dem Bezug raus.",
    ctaLabel: "So geht's mit dem Jobcenter →",
    ctaHref: "/de/karriere/buergergeld",
  },
  {
    id: "side-start",
    iconName: "TrendingUp",
    title: "Wenn du angestellt bist, aber raus willst",
    description:
      "Du musst deinen Job nicht sofort kündigen - du kannst nebenberuflich anfangen und später wechseln. Passt, wenn du in Deutschland schon Fuß gefasst hast und langfristig was Eigenes aufbauen willst.",
    ctaLabel: "Zum nebenberuflichen Einstieg →",
    ctaHref: "/de/karriere/quereinstieg",
  },
];

export const qualifications: Qualification[] = [
  {
    id: "ihk",
    title: "Kaufmann/-frau für Versicherungen und Finanzanlagen (IHK)",
    subtitle: "Staatlich anerkannte Ausbildung - direkt bei der DVAG",
    description:
      "Vollwertiger IHK-Abschluss in einem Beruf, der bundesweit anerkannt ist. Mit diesem Zeugnis stehen dir später die Türen jedes Finanzunternehmens in Deutschland offen.",
  },
  {
    id: "34f",
    title: "Finanzanlagenfachmann",
    subtitle: "Lizenz für Investments und Fonds",
    description:
      "Das kostet normalerweise 490–890 €, dazu kommt die Pflicht-Berufshaftpflicht über 1,27 Mio. €. Bei der DVAG ist das alles drin.",
  },
  {
    id: "34i",
    title: "Fachmann für Immobiliardarlehensvermittlung",
    subtitle: "Lizenz für Baufinanzierung und Immobilien",
    description:
      "Einer der lukrativsten Bereiche in der Finanzberatung.",
  },
  {
    id: "dbbv",
    title: "Vermögensberater DBBV",
    subtitle: "Eigenes Branchenzertifikat",
    description:
      "Branchenzertifikat des Deutschen Berufsbildungswerks für Vermögensberatung - innerhalb der Branche das Standard-Siegel.",
  },
];

export const qualificationsCallout = {
  text: "Die DVAG investiert pro Jahr über 80 Millionen Euro in die Ausbildung ihrer Berater.",
  sub: "Für dich heißt das konkret: keine Kosten für Ausbildung, Kurse oder die Pflichtversicherung - und du lernst von Anfang an mit Profis.",
  source: "Quelle: DVAG-Unternehmensbericht, dvag-karriere.de",
  productsPopup: {
    label: "Welche Produkte berätst du am Ende?",
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
      "Wir telefonieren oder treffen uns. Ziele, Zweifel, ehrliche Antwort: passt der Beruf zu dir?",
  },
  {
    num: 2,
    title: "Start der Ausbildung",
    description:
      "Du startest die Ausbildung - Vollzeit oder neben dem Job. Ich begleite dich persönlich.",
  },
  {
    num: 3,
    title: "Erste Praxis",
    description:
      "Du arbeitest von Anfang an mit echten Fällen. Mentor und Team stehen daneben.",
  },
  {
    num: 4,
    title: "Selbstständigkeit",
    description:
      "Am Ende: eigene Kunden, Erfahrung, Team. Du bist selbstständig - und dein eigener Chef.",
  },
];

export const incomeContent = {
  eyebrow: "Einkommen",
  title: "Was verdienen DVAG-Berater?",
  subtitle: "Ehrlich, ohne Versprechen - die Zahlen kommen aus öffentlichen Quellen.",
  mainRange: {
    value: "46 800 € - 119 700 €",
    label: "Jahresgehalt-Spanne bei DVAG-Beratern",
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
      value: "Nach oben offen",
      label: "Die Provision hängt davon ab, wie viel du machst",
    },
  ],
  explainer: [
    "Bei der DVAG gibt es kein Festgehalt. Du arbeitest als selbstständiger Handelsvertreter (§ 84, 92 HGB), und dein Einkommen hängt direkt davon ab, wie vielen Kunden du wirklich hilfst.",
  ],
  bullets: [
    {
      strong: "Nach oben gibt's keine Grenze.",
      rest: " Berater mit großem Kundenstamm und Verantwortung im Team verdienen deutlich über dem Durchschnitt.",
    },
    {
      strong: "Die ersten Monate brauchen Geduld.",
      rest: " Wie in jedem eigenen Geschäft baut sich das Einkommen Schritt für Schritt auf. Deshalb fangen wir mit der Ausbildung an - nicht mit dem Verkauf.",
    },
  ],
  disclaimer:
    "Selbstständige Handelsvertreter, Provisionsvergütung. Einkommensspannen laut Kununu-Daten - tatsächliches Einkommen hängt vom persönlichen Einsatz ab. Keine Garantie auf bestimmte Einkommenshöhen.",
};

export const transparenzItems: TransparenzItem[] = [
  {
    title: "Das ist Selbstständigkeit, keine Anstellung",
    description:
      "Du wirst selbstständiger Handelsvertreter (§ 84, 92 HGB). Das bedeutet Freiheit, aber auch Verantwortung: kein Festgehalt, keine Arbeitgeberbeiträge zur Sozialversicherung. Dafür auch keine Einkommensgrenze.",
  },
  {
    title: `Provision ist nicht sofort „auf dem Konto"`,
    description:
      "Ein Teil deines Verdienstes fließt in die Stornorückstellung (Reserve für den Fall von Kündigungen) und wird nach der Haftungszeit ausgezahlt. Das ist Branchenstandard, keine DVAG-Eigenheit.",
  },
  {
    title: "Die Ausbildung braucht Zeit",
    description:
      "Die vollständige Zertifizierung dauert parallel zur Praxis bis zu 3 Jahre. Eine ernsthafte Zeitinvestition - am Ende hast du vier anerkannte Qualifikationen fürs Leben.",
  },
  {
    title: "Wir unterstützen, aber der Erfolg ist deiner",
    description:
      `Du bekommst einen persönlichen Coach, ein Team und ein strukturiertes Programm. Das Endergebnis hängt aber von deiner Aktivität und Disziplin ab. Wir können dich nicht erfolgreich „machen" - wir geben dir alles, damit du es selbst schaffst.`,
  },
];

export const menteesPlaceholder: MenteeStory[] = [];

export const homeFAQContent = {
  eyebrow: "Häufige Fragen",
  title: "Häufige Fragen zum Einstieg",
};

export const homeFAQItems: FAQItem[] = [
  {
    q: "Ist das MLM oder Strukturvertrieb?",
    a: `Nein. Die DVAG ist ein Versicherungs- und Finanzvermittler mit über 40 Produktpartnern (Banken, Versicherungen, Investmentgesellschaften). Du berätst Kunden und bekommst die Provision vom jeweiligen Produktgeber - nicht „von Menschen unter dir". Was es gibt: ein Team mit Mentoring und gemeinsamer Weiterbildung. Was es nicht gibt: „bring einen Freund und kassier Prozente vom Umsatz".`,
  },
  {
    q: "Kann ich neben meinem Hauptjob einsteigen?",
    a: "Ja. Der nebenberufliche Einstieg ist bei der DVAG offiziell vorgesehen. Du kannst als Assistent oder parallel zum Hauptjob starten und später in Vollzeit wechseln - wenn du soweit bist.",
  },
  {
    q: "Wann verdiene ich?",
    a: "Sofort. Vom ersten Tag an bekommst du eine tarifliche Ausbildungsvergütung, und mit dem ersten abgeschlossenen Vertrag kommt die erste Provision dazu. Je aktiver du arbeitest und je mehr Kunden du betreust, desto schneller wächst dein Einkommen.",
  },
  {
    q: "Was ist die Bescheinigung fürs Jobcenter?",
    a: "Wenn du aus dem Bürgergeld in die Selbstständigkeit wechselst, will das Jobcenter eine sogenannte Tragfähigkeitsbescheinigung - ein Dokument, das belegt: dein Geschäftsplan trägt sich. Diese Bescheinigung stellt Vladislav persönlich als fachkundige Stelle aus - nicht die DVAG. Vorbereitung, Unterlagen und Begleitung übernehmen wir - du musst das nicht allein durchziehen. Details findest du auf der Seite zum Bürgergeld.",
  },
  {
    q: "Was kostet die Ausbildung?",
    a: "Für dich: nichts. Die DVAG investiert über 80 Millionen Euro pro Jahr in die Ausbildung. Alle erforderlichen Qualifikationen, die Vorbereitungskurse und die Pflicht-Berufshaftpflicht - alles übernimmt das Unternehmen.",
  },
  {
    q: "Was, wenn es nicht klappt?",
    a: "Das normale Risiko der Selbstständigkeit. Du kannst das Vertragsverhältnis mit der DVAG jederzeit beenden.",
  },
  {
    q: "Wie sieht der erste Schritt aus?",
    a: "Wir starten mit einem persönlichen oder Online-Gespräch und einem Besuch des Tags der offenen Tür in unserem Berufs Bildungszentrum (BBZ) in Düsseldorf.",
  },
  {
    q: "Ist die Ausbildung auch online möglich?",
    a: "Ja. Die Ausbildung läuft offline oder online - ganz nach deiner Wahl.",
  },
];

export const finalCtaContent = {
  title: "Bereit, mehr zu erfahren?",
  description:
    "10 Minuten Gespräch auf WhatsApp oder ein kostenloses Treffen in Troisdorf - und du weißt, ob das dein Weg ist. Ohne Verpflichtungen, ohne Druck.",
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
  headline: "Wechsle den Beruf -",
  headlineAccent: "in einen, der wirklich gebraucht wird",
  subtitle:
    "Finanzberater bei der DVAG - ein Beruf, in dem deine Erfahrung und dein Engagement zählen.",
  trustLine:
    "Von null oder parallel zum Job · Volle Ausbildung · Vier anerkannte Qualifikationen",
  primaryCTA: { text: "10 Fragen durchgehen", href: QUIZ_URL },
  secondaryCTA: { text: "Warum das passt", href: "#recognize" },
};

export const quereinstiegPainPoints = {
  eyebrow: "Situation",
  title: "Kommt dir das bekannt vor?",
  subtitle: "Wenn auch nur eines davon auf dich zutrifft - lies weiter",
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
  title: "Warum der Beruf zu Quereinsteigern passt",
  items: [
    {
      title: "Deine Lebenserfahrung ist ein Vorteil",
      description:
        "Wer Menschen wirklich versteht, baut schneller Vertrauen auf. In der Finanzberatung zählt nicht ein bestimmter Ausbildungsweg, sondern die Fähigkeit, Klienten ehrlich und auf Augenhöhe zu beraten.",
    },
    {
      title: "Egal aus welcher Branche du kommst - es zählt",
      description:
        "Medizin, Ingenieurwesen, Pädagogik, Handwerk - du bringst Menschenkenntnis mit, strukturiertes Denken, die Fähigkeit, Komplexes einfach zu erklären. Das sind 80 % des Beraterberufs.",
    },
    {
      title: "Du startest schrittweise",
      description:
        "Du musst deinen Job nicht sofort kündigen. Die ersten Monate läufst du parallel zur aktuellen Stelle. Der Wechsel in Vollzeit kommt, wenn du bereit bist und die ersten Kunden stehen.",
    },
    {
      title: "Alter ist kein Nachteil",
      description:
        "Kunden vertrauen Menschen mit Lebenserfahrung. Berater, die mit 35–50 einsteigen, wachsen oft schneller - mehr Kontakte, klarerer Blick auf Geld.",
    },
  ],
};

export const quereinstiegFAQItems: FAQItem[] = [
  {
    q: "Muss ich meinen aktuellen Job kündigen?",
    a: "Nein. Der nebenberufliche Einstieg ist bei der DVAG offiziell vorgesehen - du kannst parallel zur Hauptbeschäftigung starten. Die meisten meiner Mentees machen's genau so: erste 3–6 Monate nebenher, dann Wechsel in Vollzeit, wenn der Kundenstrom stabil läuft.",
  },
  {
    q: "Und wenn ich vorher nichts mit Finanzen zu tun hatte?",
    a: `Kein Problem. Das DVAG-Programm bringt dir die komplette Finanzbasis bei - von null. Wichtiger sind Menschenkenntnis, Disziplin und die Lust zu lernen. Meine besten Mentees waren vorher Ingenieure, Lehrer, Krankenpfleger, IT-Leute. Niemand mit „Finanzhintergrund".`,
  },
  {
    q: "Mein Abschluss wird in Deutschland nicht anerkannt - ist das ein Problem?",
    a: "Für diesen Beruf nein. Die IHK-Zertifizierungen über die DVAG setzen kein Hochschulstudium voraus. Wenn du schon einen Abschluss hast, ist das ein Plus - er zeigt, dass du lernen und durchziehen kannst.",
  },
  {
    q: "Ich bin 45. Zu spät?",
    a: "Viele DVAG-Berater starten nach 40 - und gehören zu den erfolgreichsten. Alter heißt: Kontakte, Lebenserfahrung, Augenhöhe mit Kunden. Genau das schätzt die Finanzbranche mehr als Jugend.",
  },
  {
    q: "Wie lange dauert die Ausbildung?",
    a: "Die Basisausbildung läuft 6–12 Monate parallel zur Praxis. Die volle Zertifizierung zieht sich bis zu drei Jahre. Aber: du arbeitest schon ab dem ersten Monat mit echten Kunden - unter meiner Begleitung - und verdienst Provisionen.",
  },
  {
    q: "Was ist mit Sozialabgaben?",
    a: "Als Selbstständiger kümmerst du dich selbst um Krankenversicherung und Rente. Klingt im ersten Moment kompliziert - die DVAG bietet dazu eigene Beratung an, und wir setzen das gemeinsam mit dir auf, passend zu deiner Situation.",
  },
  {
    q: "Was, wenn es nicht klappt - kann ich zurück in die Festanstellung?",
    a: "Ja. Du bleibst Fachkraft mit IHK-Abschluss - und der ist am Markt gefragt. Nicht wenige Berater wechseln nach 2–3 Jahren bei der DVAG in besser bezahlte Festanstellungen bei Banken oder Versicherungen. Das ist dein Plan B.",
  },
];

export const quereinstiegFinalCTA = {
  title: "Erster Schritt - ganz ohne Verpflichtung",
  description:
    "Kostenloses 30-Minuten-Gespräch - bei mir im Büro in Troisdorf, per Zoom oder WhatsApp. Wir reden über deine Situation, und ich sage dir ehrlich, ob ich glaube, dass der Beruf zu dir passt.",
  primary: {
    text: "Schreib auf WhatsApp",
    href: waLink(
      UTM.quereinstieg,
      "Hallo Vladislav! Ich bin Quereinsteiger - will den Beruf wechseln. Können wir reden?",
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
    "Wir helfen bei der Tragfähigkeitsbescheinigung · Begleiten zum Jobcenter-Termin · Start mit Team im Rücken",
  primaryCTA: {
    text: "Kostenloses Beratungsgespräch buchen",
    href: QUIZ_URL,
  },
  secondaryCTA: { text: "So läuft der Weg", href: "#recognize" },
};

export const buergergeldPainPoints = {
  eyebrow: "Situation",
  title: "Kommt dir das bekannt vor?",
  subtitle: "Wenn auch nur eines davon auf dich zutrifft - lies weiter",
  messages: [
    {
      text: "Ich bin seit einem Jahr auf Bürgergeld. Ich will selbstständig sein, aber habe Angst",
      time: "19:22",
    },
    { text: "Ich brauche einen Beruf, aber habe keine 3 Jahre für die Ausbildung", time: "19:24" },
    { text: "Was ist Einstiegsgeld und wie bekomme ich es?", time: "19:26" },
    { text: "Bescheinigung fürs Jobcenter - wo bekomme ich die?", time: "19:28" },
  ],
  reply:
    "Das Jobcenter unterstützt den Wechsel in die Selbstständigkeit - wenn die Unterlagen richtig sind. Wir wissen, wie das geht.",
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
      gruendungszuschuss: "-",
    },
    {
      label: "Antrag",
      einstiegsgeld: "vor Tätigkeitsbeginn stellen",
      gruendungszuschuss: "vor der Gewerbeanmeldung stellen",
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
    "Höhe und Bewilligung sind Ermessensleistungen - das Jobcenter bzw. die Arbeitsagentur entscheidet im Einzelfall. Eine Garantie auf Bewilligung können wir nicht geben, aber wir bereiten die Unterlagen so vor, dass deine Chancen so gut wie möglich stehen.",
};

export const buergergeldHelp = {
  eyebrow: "Unterstützung",
  title: "So helfen wir",
  items: [
    {
      title: "Businessplan fürs Jobcenter",
      description:
        "Wir bauen ihn mit dir auf - im Format, das dein Jobcenter sehen will.",
    },
    {
      title: "Tragfähigkeitsbescheinigung",
      description:
        "Wir vermitteln dich an IHK-Partner, die die Bescheinigung über die Tragfähigkeit deines Geschäfts ausstellen.",
    },
    {
      title: "Termin mit dem Fallmanager",
      description:
        "Wir gehen mit dir zum Jobcenter-Termin und unterstützen dich vor Ort.",
    },
    {
      title: "Gewerbeanmeldung",
      description:
        "Wir machen die Gewerbeanmeldung und die ersten Formalitäten gemeinsam.",
    },
  ],
};

export const buergergeldPathSteps: PathStep[] = [
  {
    num: 1,
    title: "Erstes Gespräch",
    description:
      "Wir reden über deine Situation: welche Leistung, wie lange, Familie, mögliche Einschränkungen.",
  },
  {
    num: 2,
    title: "Unterlagen vorbereiten",
    description:
      "Businessplan und Tragfähigkeitsbescheinigung - rechne mit etwa 2 Wochen. Wir sind in jedem Schritt dabei.",
  },
  {
    num: 3,
    title: "Termin beim Jobcenter",
    description:
      "Du gehst mit fertigen Unterlagen rein. Wenn du willst, gehen wir mit.",
  },
  {
    num: 4,
    title: "Bewilligung und Gewerbeanmeldung",
    description:
      "Bewilligung vom Jobcenter → Gewerbe wird angemeldet.",
  },
  {
    num: 5,
    title: "Start der Ausbildung",
    description:
      "Du startest die Ausbildung - das Einstiegsgeld läuft parallel rein, dein Einkommen ist stabil.",
  },
  {
    num: 6,
    title: "Erste Kunden",
    description:
      "Erste Provisionen → Schritt für Schritt raus aus dem Bürgergeld, rein in den eigenen Beruf.",
  },
];

export const buergergeldTransparenzItems: TransparenzItem[] = [
  {
    title: "Das Jobcenter kann ablehnen",
    description:
      "Das ist eine Ermessensleistung, kein Anspruch. Die endgültige Entscheidung trifft dein Fallmanager. Unsere Aufgabe ist, die Unterlagen so vorzubereiten, dass die Chancen maximal sind.",
  },
  {
    title: "Tragfähigkeit - unabhängige Bewertung",
    description:
      "Die Bescheinigung über die Tragfähigkeit des Geschäfts stellt die IHK oder ein akkreditierter Experte aus, nicht die DVAG. Wir helfen bei der Vorbereitung und vermitteln Partner.",
  },
  {
    title: "Einstiegsgeld kommt zusätzlich zum Bürgergeld",
    description:
      "Einstiegsgeld wird nicht auf das Bürgergeld angerechnet - du bekommst den Zuschuss oben drauf. Eine zeitlich begrenzte Unterstützung in der Aufbauphase.",
  },
  {
    title: "De-minimis-Limit",
    description:
      "Alle Formen staatlicher Hilfe - nicht mehr als 200 000 € insgesamt über 3 Jahre. Für die meisten Neuberater nicht relevant, aber gut zu wissen.",
  },
];

export const buergergeldFAQItems: FAQItem[] = [
  {
    q: "Das Jobcenter lehnt ab - was jetzt?",
    a: "Erster Schritt: schriftliche Begründung der Ablehnung anfordern. Oft sind es Formalien. Dann gibt's zwei Wege - neuer Antrag oder Widerspruch (innerhalb eines Monats). Wir helfen bei beidem. Eine erste Ablehnung heißt nicht, dass der Weg zu ist.",
  },
  {
    q: "Kann ich das Bürgergeld anfangs behalten?",
    a: "Ja. In den ersten Monaten der Selbstständigkeit ist das Einkommen meist gering, und das Bürgergeld läuft auf Basis deiner tatsächlichen Einnahmen weiter. Das Einstiegsgeld kommt zusätzlich oben drauf. Wichtig: deine Einkünfte korrekt ans Jobcenter melden.",
  },
  {
    q: "Was ist die Schonzeit und wie funktioniert sie?",
    a: "Schonzeit ist der Zeitraum, in dem ein Teil deiner Einkünfte aus der Selbstständigkeit nicht aufs Bürgergeld angerechnet wird. Für frisch Selbstständige gelten in den ersten Monaten Sonderregeln. Die konkreten Konditionen hängen von deinem Jobcenter ab - das klären wir gemeinsam.",
  },
  {
    q: "Wie läuft der Termin mit dem Fallmanager?",
    a: "Wir bereiten dich auf das Gespräch vor: welche Unterlagen du brauchst, welche Fragen kommen, wie du den Antrag begründest. Beim Termin selbst gehen wir mit - du musst da nicht allein hin.",
  },
  {
    q: "Wie lange dauert der gesamte Prozess bis zum Start?",
    a: "Vom ersten Gespräch bis zur Bewilligung durch das Jobcenter rechne mit 4–8 Wochen. Die meiste Zeit fließt in Businessplan und Tragfähigkeitsbescheinigung. Nach der Bewilligung dauert die Gewerbeanmeldung nochmal 1–2 Wochen.",
  },
  {
    q: "Ich bekomme ALG I, nicht Bürgergeld. Ist das ein anderes Programm?",
    a: "Ja. Für ALG I gibt's den Gründungszuschuss - ein Programm der Arbeitsagentur. Andere Konditionen: Höhe = ALG I + 300 €/Monat für bis zu 15 Monate. Antrag stellen, bevor das ALG I ausläuft. Wir kennen beide Programme und arbeiten mit beiden.",
  },
  {
    q: "Soll ich der DVAG sagen, dass ich Bürgergeld bekomme?",
    a: "Ja, sag's offen. Die DVAG nimmt Berater mit ganz unterschiedlichem Startstatus auf, Bürgergeld-Bezug ist kein Hindernis. Im Gegenteil - wir kennen die Besonderheiten und helfen, die Unterlagen richtig einzureichen. Ehrlicher Start = weniger Reibung später.",
  },
];

export const buergergeldFinalCTA = {
  title: "Erstes Treffen - kostenlos",
  description:
    "30 Minuten - wir reden über deine Situation mit dem Jobcenter, gehen die Unterlagen durch, schauen uns den Zeitplan an. Ganz ohne Verpflichtung.",
  primary: {
    text: "Schreib auf WhatsApp",
    href: waLink(
      UTM.buergergeld,
      "Hallo Vladislav! Ich bekomme Bürgergeld / ALG I - will den Weg in den Beruf besprechen.",
    ),
  },
  secondary: { text: "Anrufen", href: "tel:+4922418989424" },
};

// --- Shared strings for DE pages ---

export const ui = {
  pathEyebrow: "Ablauf",
  pathTitleHome: "So läuft's",
  pathTitleBuergergeld: "Schritt-für-Schritt - Bürgergeld und ALG I",
  transparenzEyebrow: "Ehrlich",
  transparenzTitleHome: "Ohne rosa Brille",
  transparenzSubtitleHome:
    "Das ist ein ehrliches Gespräch darüber, was es bedeutet, in diesem Beruf zu arbeiten",
  transparenzTitleBuergergeld: "Was vorab wichtig zu wissen ist",
  transparenzSubtitleBuergergeld:
    "Staatliche Förderprogramme sind eine Möglichkeit, keine Garantie. Das solltest du wissen",
  faqEyebrow: "Häufige Fragen",
  faqTitleQuereinstieg: "Häufige Fragen von Quereinsteigern",
  faqTitleBuergergeld: "Häufige Fragen zu Jobcenter und Bürgergeld",
  qualificationsEyebrow: "Qualifikationen",
  qualificationsTitle: "Vier Qualifikationen in einem Programm",
  qualificationsDescription:
    "Ausbildung und Lizenzen übernimmt die DVAG. Du bekommst am Ende einen Beruf, der in ganz Deutschland nachgefragt ist.",
  segmentsEyebrow: "Für wen das ist",
  segmentsTitle: "Für dich, wenn...",
  segmentsSubtitle:
    "Klick auf das, was am ehesten passt - wir schauen uns deinen Weg konkret an.",
  supportEyebrow: "Staatliche Unterstützung",
  supportTitle: "Einstiegsgeld vs Gründungszuschuss",
  supportDescription:
    "Zwei staatliche Förderprogramme für den Weg in die Selbstständigkeit - eines für Bürgergeld, eines für ALG I.",
  supportParameter: "Parameter",
  incomeThisMeans: "Heißt zwei Dinge:",
  heroScrollLabel: "Nach unten scrollen",
  chatAriaLabel:
    "Visuelle Darstellung typischer Karriere-Fragen im Chat-Format",
  replyAuthor: "Vladislav",
} as const;

export const legalDisclaimers = {
  buergergeldFooter:
    "Einstiegsgeld und Gründungszuschuss sind Ermessensleistungen. Gewährung erfolgt durch Jobcenter / Arbeitsagentur im Einzelfall.",
} as const;
