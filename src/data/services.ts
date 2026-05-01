export type ServiceTier = "T1" | "T2";
export type Locale = "de" | "ru" | "ua";

export interface ServiceContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
}

export interface Service {
  slug: string;
  tier: ServiceTier;
  primaryKeyword: { de: string; ru?: string; ua?: string };
  secondaryKeywords: { de: string[]; ru: string[]; ua: string[] };
  generaliPartner:
    | "Generali"
    | "ADVOCARD"
    | "Generali Pensionskasse"
    | "Central Krankenversicherung";
  content: Record<Locale, ServiceContent>;
}

export const services: Service[] = [
  {
    slug: "finanzberatung",
    tier: "T1",
    primaryKeyword: { de: "Finanzberater Bonn" },
    secondaryKeywords: {
      de: [
        "Finanzberatung",
        "Finanzberater Troisdorf",
        "Finanzberater russischsprachig",
      ],
      ru: [
        "финансовый консультант бонн",
        "финансовая консультация германия",
      ],
      ua: [
        "фінансовий консультант бонн",
        "фінансова консультація німеччина",
      ],
    },
    generaliPartner: "Generali",
    content: {
      de: {
        title: "Finanzberatung in Bonn und Troisdorf",
        metaTitle:
          "Finanzberater in Bonn und Troisdorf — auch auf Russisch | Babic Finance",
        metaDescription:
          "Persönliche Finanzberatung in Troisdorf, Bonn und im Rhein-Sieg-Kreis. Vorsorge, Geldanlage, Versicherungen, Immobilienfinanzierung. Beratung auf Deutsch und Russisch.",
        shortDescription:
          "Vorsorge, Geldanlage, Versicherungen, Immobilienfinanzierung — alles in einer Hand. Auf Deutsch und Russisch.",
      },
      ru: {
        title: "Финансовый консультант в Бонне и Тройсдорфе",
        metaTitle:
          "Финансовый консультант в Бонне и Тройсдорфе — на русском | Babic Finance",
        metaDescription:
          "Личная финансовая консультация в Тройсдорфе, Бонне и Райн-Зиг. Пенсия, инвестиции, страховки, ипотека. Консультация на русском и немецком.",
        shortDescription:
          "Пенсия, инвестиции, страховки, ипотека — всё в одних руках. На русском и немецком.",
      },
      ua: {
        title: "Фінансовий консультант у Бонні та Тройсдорфі",
        metaTitle:
          "Фінансовий консультант у Бонні та Тройсдорфі — українською | Babic Finance",
        metaDescription:
          "Особиста фінансова консультація в Тройсдорфі, Бонні та Райн-Зіг. Пенсія, інвестиції, страхування, іпотека. Консультація українською та німецькою.",
        shortDescription:
          "Пенсія, інвестиції, страхування, іпотека — все в одних руках. Українською та німецькою.",
      },
    },
  },
  {
    slug: "vermoegensberatung",
    tier: "T1",
    primaryKeyword: { de: "Vermögensberatung" },
    secondaryKeywords: {
      de: [
        "Vermögensberater Bonn",
        "DVAG Vermögensberater",
        "langfristiger Vermögensaufbau",
      ],
      ru: [
        "управление капиталом германия",
        "долгосрочные накопления германия",
      ],
      ua: [
        "управління капіталом німеччина",
        "довгострокові накопичення німеччина",
      ],
    },
    generaliPartner: "Generali",
    content: {
      de: {
        title: "Vermögensberatung — langfristig planen, strukturiert aufbauen",
        metaTitle: "Vermögensberatung in Troisdorf und Bonn | Babic Finance",
        metaDescription:
          "DVAG-Vermögensberater Vladislav Babic. Analyse von Versorgungslücken, langfristige Anlagestruktur, Absicherung — alles in einer Hand. Auch auf Russisch.",
        shortDescription:
          "Analyse, Strukturierung, Absicherung — langfristiger Vermögensaufbau für Privatpersonen und Familien.",
      },
      ru: {
        title:
          "Управление капиталом — долгосрочный план, структурированный подход",
        metaTitle: "Управление капиталом в Тройсдорфе и Бонне | Babic Finance",
        metaDescription:
          "DVAG-консультант по управлению капиталом Владислав Бабич. Анализ пробелов, долгосрочная структура, защита — всё в одних руках. Также на русском.",
        shortDescription:
          "Анализ, структурирование, защита — долгосрочное управление капиталом для частных лиц и семей.",
      },
      ua: {
        title:
          "Управління капіталом — довгостроковий план, структурований підхід",
        metaTitle:
          "Управління капіталом у Тройсдорфі та Бонні | Babic Finance",
        metaDescription:
          "DVAG-консультант з управління капіталом Владислав Бабич. Аналіз прогалин, довгострокова структура, захист — все в одних руках. Також українською.",
        shortDescription:
          "Аналіз, структурування, захист — довгострокове управління капіталом для приватних осіб та сімей.",
      },
    },
  },
  {
    slug: "altersvorsorge",
    tier: "T1",
    primaryKeyword: { de: "Altersvorsorge Beratung" },
    secondaryKeywords: {
      de: [
        "private Altersvorsorge",
        "Riester Rürup Beratung",
        "Versorgungslücke berechnen",
      ],
      ru: [
        "пенсия в германии частная",
        "риестер рюруп консультация",
      ],
      ua: [
        "пенсія в німеччині приватна",
        "рієстер рюруп консультація",
      ],
    },
    generaliPartner: "Generali",
    content: {
      de: {
        title:
          "Altersvorsorge — Versorgungslücke schließen, bevor sie zu groß wird",
        metaTitle:
          "Altersvorsorge Beratung — Riester, Rürup, private Rente | Babic Finance",
        metaDescription:
          "Strategische Altersvorsorge-Beratung: gesetzliche Rente, Riester, Rürup, betriebliche Vorsorge, private Rentenversicherung. Versorgungslücke berechnen — auf Russisch oder Deutsch.",
        shortDescription:
          "Gesetzliche Rente, Riester, Rürup, betriebliche und private Vorsorge — wir berechnen deine Versorgungslücke.",
      },
      ru: {
        title:
          "Пенсионное планирование — закрыть пробел до того, как станет поздно",
        metaTitle:
          "Пенсионная консультация — Riester, Rürup, частная пенсия | Babic Finance",
        metaDescription:
          "Стратегическая консультация по пенсии: государственная, Riester, Rürup, корпоративная, частная. Расчёт пенсионного пробела — на русском или немецком.",
        shortDescription:
          "Государственная, Riester, Rürup, корпоративная и частная — рассчитываем твой пенсионный пробел.",
      },
      ua: {
        title:
          "Пенсійне планування — закрити прогалину, поки не стало пізно",
        metaTitle:
          "Пенсійна консультація — Riester, Rürup, приватна пенсія | Babic Finance",
        metaDescription:
          "Стратегічна консультація з пенсії: державна, Riester, Rürup, корпоративна, приватна. Розрахунок пенсійної прогалини — українською або німецькою.",
        shortDescription:
          "Державна, Riester, Rürup, корпоративна та приватна — розраховуємо твою пенсійну прогалину.",
      },
    },
  },
  {
    slug: "bu-beratung",
    tier: "T1",
    primaryKeyword: { de: "BU Beratung" },
    secondaryKeywords: {
      de: [
        "Berufsunfähigkeitsversicherung Beratung",
        "BU Versicherung Generali",
        "Berufsunfähigkeit absichern",
      ],
      ru: [
        "страховка от потери трудоспособности",
        "BU страховка германия",
      ],
      ua: [
        "страхування від втрати працездатності",
        "BU страхування німеччина",
      ],
    },
    generaliPartner: "Generali",
    content: {
      de: {
        title:
          "Berufsunfähigkeitsversicherung — das größte Einkommensrisiko absichern",
        metaTitle:
          "Berufsunfähigkeitsversicherung Beratung in Troisdorf | Babic Finance",
        metaDescription:
          "BU-Beratung mit Tarifen der Generali Gruppe. Wir klären Gesundheitsprüfung, Beitragshöhe, Leistungsumfang — und helfen, das richtige BU-Modell zu finden.",
        shortDescription:
          "Berufsunfähigkeit ist statistisch das größte Einkommensrisiko — wir sichern dich richtig ab.",
      },
      ru: {
        title:
          "Страховка от потери трудоспособности — главный финансовый риск",
        metaTitle:
          "BU страховка — консультация в Тройсдорфе | Babic Finance",
        metaDescription:
          "BU-консультация с тарифами Generali. Разбираем медицинский осмотр, размер взноса, объём покрытия — помогаем выбрать подходящую модель.",
        shortDescription:
          "Потеря трудоспособности — самый большой риск дохода. Помогаем правильно застраховаться.",
      },
      ua: {
        title:
          "Страхування від втрати працездатності — головний фінансовий ризик",
        metaTitle:
          "BU страхування — консультація в Тройсдорфі | Babic Finance",
        metaDescription:
          "BU-консультація з тарифами Generali. Розбираємо медогляд, розмір внеску, обсяг покриття — допомагаємо вибрати потрібну модель.",
        shortDescription:
          "Втрата працездатності — найбільший ризик доходу. Допомагаємо правильно застрахуватися.",
      },
    },
  },
  {
    slug: "pkv-beratung",
    tier: "T2",
    primaryKeyword: { de: "PKV Beratung" },
    secondaryKeywords: {
      de: [
        "Private Krankenversicherung Beratung",
        "PKV Wechsel Beratung",
        "Central Krankenversicherung",
      ],
      ru: [
        "частная медстраховка германия",
        "переход на PKV консультация",
      ],
      ua: [
        "приватне медстрахування німеччина",
        "перехід на PKV консультація",
      ],
    },
    generaliPartner: "Central Krankenversicherung",
    content: {
      de: {
        title:
          "Private Krankenversicherung — eine Entscheidung für Jahrzehnte",
        metaTitle:
          "PKV Beratung in Troisdorf — Private Krankenversicherung | Babic Finance",
        metaDescription:
          "PKV oder GKV? Eine ehrliche Beratung dazu, ob sich der PKV-Wechsel in deiner Lebenssituation wirklich lohnt. Tarife der Central Krankenversicherung.",
        shortDescription:
          "Privat versichern? Die Entscheidung trägt Jahrzehnte. Wir schauen ehrlich, ob sie in deinem Fall passt.",
      },
      ru: {
        title:
          "Частная медицинская страховка — решение на десятилетия",
        metaTitle:
          "PKV консультация в Тройсдорфе — частная медстраховка | Babic Finance",
        metaDescription:
          "PKV или GKV? Честная консультация: подходит ли переход на частную страховку именно тебе. Тарифы Central Krankenversicherung.",
        shortDescription:
          "Перейти в PKV? Решение на десятилетия. Честно смотрим, подходит ли оно в твоём случае.",
      },
      ua: {
        title:
          "Приватна медична страховка — рішення на десятиліття",
        metaTitle:
          "PKV консультація в Тройсдорфі — приватне медстрахування | Babic Finance",
        metaDescription:
          "PKV чи GKV? Чесна консультація: чи підходить перехід на приватну страховку саме тобі. Тарифи Central Krankenversicherung.",
        shortDescription:
          "Перейти в PKV? Рішення на десятиліття. Чесно дивимося, чи підходить воно в твоєму випадку.",
      },
    },
  },
  {
    slug: "bav-betriebliche-altersvorsorge",
    tier: "T2",
    primaryKeyword: { de: "bAV Beratung" },
    secondaryKeywords: {
      de: [
        "betriebliche Altersvorsorge",
        "bAV Vergleich",
        "Generali Pensionskasse",
      ],
      ru: [
        "корпоративная пенсия германия bAV",
        "bAV консультация работодатель",
      ],
      ua: [
        "корпоративна пенсія німеччина bAV",
        "bAV консультація роботодавець",
      ],
    },
    generaliPartner: "Generali Pensionskasse",
    content: {
      de: {
        title:
          "Betriebliche Altersvorsorge (bAV) — für Arbeitgeber und Arbeitnehmer",
        metaTitle:
          "bAV Beratung — betriebliche Altersvorsorge in Troisdorf | Babic Finance",
        metaDescription:
          "bAV als Mitarbeiterbenefit, der wirklich ankommt — steuerlich gefördert und administrativ schlank. Lösungen über Generali Pensionskasse.",
        shortDescription:
          "Für Arbeitgeber: ein Benefit, der ankommt. Für Arbeitnehmer: hol raus, was geht. Generali Pensionskasse.",
      },
      ru: {
        title:
          "Корпоративная пенсия (bAV) — для работодателей и сотрудников",
        metaTitle:
          "bAV консультация — корпоративная пенсия в Тройсдорфе | Babic Finance",
        metaDescription:
          "bAV как бонус сотрудникам, который реально работает — с налоговой поддержкой и без бюрократии. Решения через Generali Pensionskasse.",
        shortDescription:
          "Работодателю: бонус, который ценят. Сотруднику: возьми максимум. Generali Pensionskasse.",
      },
      ua: {
        title:
          "Корпоративна пенсія (bAV) — для роботодавців і працівників",
        metaTitle:
          "bAV консультація — корпоративна пенсія в Тройсдорфі | Babic Finance",
        metaDescription:
          "bAV як бонус для працівників, який реально працює — з податковою підтримкою і без бюрократії. Рішення через Generali Pensionskasse.",
        shortDescription:
          "Роботодавцю: бонус, який цінують. Працівнику: візьми максимум. Generali Pensionskasse.",
      },
    },
  },
  {
    slug: "geldanlage",
    tier: "T2",
    primaryKeyword: { de: "Geldanlage Beratung" },
    secondaryKeywords: {
      de: [
        "Vermögensaufbau Generali",
        "Sparpläne Investmentfonds",
        "langfristig anlegen",
      ],
      ru: [
        "инвестиции германия консультация",
        "инвестиционные фонды generali",
      ],
      ua: [
        "інвестиції німеччина консультація",
        "інвестиційні фонди generali",
      ],
    },
    generaliPartner: "Generali",
    content: {
      de: {
        title: "Geldanlage — strategisch, langfristig, mit klarem Plan",
        metaTitle:
          "Geldanlage Beratung — Vermögensaufbau in Troisdorf | Babic Finance",
        metaDescription:
          "Strategische Geldanlage mit Investmentfonds der Generali Gruppe — renditeorientiert, transparent, ohne versteckte Gebühren. Sparpläne, Einmalanlagen, Mischportfolios.",
        shortDescription:
          "Investmentfonds der Generali — transparent, ohne versteckte Gebühren. Sparpläne, Einmalanlagen, Mischportfolios.",
      },
      ru: {
        title: "Инвестиции — стратегически, долгосрочно, с понятным планом",
        metaTitle: "Консультация по инвестициям в Тройсдорфе | Babic Finance",
        metaDescription:
          "Стратегические инвестиции через фонды Generali — прозрачно, без скрытых комиссий. Регулярные взносы, разовые вклады, смешанные портфели.",
        shortDescription:
          "Инвестиционные фонды Generali — прозрачно, без скрытых комиссий. Регулярные взносы, разовые вклады, портфели.",
      },
      ua: {
        title: "Інвестиції — стратегічно, довгостроково, з чітким планом",
        metaTitle: "Консультація з інвестицій у Тройсдорфі | Babic Finance",
        metaDescription:
          "Стратегічні інвестиції через фонди Generali — прозоро, без прихованих комісій. Регулярні внески, разові вклади, змішані портфелі.",
        shortDescription:
          "Інвестиційні фонди Generali — прозоро, без прихованих комісій. Регулярні внески, разові вклади, портфелі.",
      },
    },
  },
  {
    slug: "rechtsschutz",
    tier: "T2",
    primaryKeyword: { de: "Rechtsschutz ADVOCARD" },
    secondaryKeywords: {
      de: [
        "Rechtsschutzversicherung Beratung",
        "Verkehrsrechtsschutz",
        "Berufsrechtsschutz",
      ],
      ru: [
        "страховка правовой защиты германия",
        "rechtsschutz консультация",
      ],
      ua: [
        "страхування правового захисту німеччина",
        "rechtsschutz консультація",
      ],
    },
    generaliPartner: "ADVOCARD",
    content: {
      de: {
        title:
          "Rechtsschutzversicherung — über ADVOCARD, ohne Standardpaket-Überraschungen",
        metaTitle:
          "Rechtsschutzversicherung Beratung — ADVOCARD | Babic Finance",
        metaDescription:
          "Rechtsschutz im Beruf, im Verkehr, als Mieter oder Eigentümer — abgesichert über ADVOCARD. Beratung zur richtigen Bausteinwahl.",
        shortDescription:
          "Beruf, Verkehr, Mieter, Eigentümer — wir wählen die richtigen Bausteine. ADVOCARD.",
      },
      ru: {
        title:
          "Юридическая страховка — через ADVOCARD, без сюрпризов в стандартном пакете",
        metaTitle:
          "Юридическая страховка — консультация через ADVOCARD | Babic Finance",
        metaDescription:
          "Юридическая защита на работе, в транспорте, как арендатор или собственник — через ADVOCARD. Консультация по выбору модулей.",
        shortDescription:
          "Работа, транспорт, арендатор, собственник — выбираем правильные модули. ADVOCARD.",
      },
      ua: {
        title:
          "Юридична страховка — через ADVOCARD, без сюрпризів у стандартному пакеті",
        metaTitle:
          "Юридична страховка — консультація через ADVOCARD | Babic Finance",
        metaDescription:
          "Юридичний захист на роботі, у транспорті, як орендар або власник — через ADVOCARD. Консультація з вибору модулів.",
        shortDescription:
          "Робота, транспорт, орендар, власник — обираємо правильні модулі. ADVOCARD.",
      },
    },
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getServicesByTier = (tier: ServiceTier): Service[] =>
  services.filter((s) => s.tier === tier);

export const PATH_PREFIX_BY_LOCALE: Record<Locale, string> = {
  de: "/de/leistungen",
  ru: "/uslugi",
  ua: "/ua/poslugy",
};

export const HREFLANG_BY_LOCALE: Record<Locale, string> = {
  de: "de",
  ru: "ru",
  ua: "uk",
};
