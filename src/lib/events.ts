export type EventContent = {
  title: string;
  location: string;
  description: string;
  bullets: string[];
  included: string;
  ctaLabel: string;
};

export type LocalizedEvent = {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  registrationUrl: string;
  isHighlighted?: boolean;
  translations: {
    de: EventContent;
    ru: EventContent;
    uk: EventContent;
  };
};

export const upcomingEvents: LocalizedEvent[] = [
  {
    id: "dvag-karriere-seminar-2026-05-09",
    date: "2026-05-09",
    startTime: "10:00",
    endTime: "13:00",
    registrationUrl: "https://wa.me/491234567890",
    isHighlighted: true,
    translations: {
      de: {
        title: "Karriere-Info-Seminar",
        location: "BBZ Meerbusch",
        description:
          "Erhalten Sie spannende Einblicke in die Karrierechancen bei der Deutschen Vermögensberatung (DVAG) und erfahren Sie, wie Sie sich eine erfolgreiche Zukunft im Finanzbereich aufbauen können.",
        bullets: [
          "Praxisnahe Einblicke",
          "Persönliche Entwicklungsmöglichkeiten",
          "Austausch mit erfolgreichen Unternehmern",
        ],
        included: "Inklusive: gemeinsames Frühstück und Networking",
        ctaLabel: "Jetzt Platz sichern",
      },
      ru: {
        title: "Карьерный инфо-семинар",
        location: "BBZ Meerbusch",
        description:
          "Узнайте о возможностях построения карьеры в Deutsche Vermögensberatung (DVAG) и о том, как заложить основу успешного будущего в финансовой сфере.",
        bullets: [
          "Практические инсайты из реальной работы",
          "Возможности личного и профессионального развития",
          "Общение с успешными предпринимателями",
        ],
        included: "В программе: общий завтрак и нетворкинг",
        ctaLabel: "Записаться на семинар",
      },
      uk: {
        title: "Кар'єрний інфо-семінар",
        location: "BBZ Meerbusch",
        description:
          "Дізнайтеся про можливості побудови кар'єри в Deutsche Vermögensberatung (DVAG) і про те, як закласти основу успішного майбутнього у фінансовій сфері.",
        bullets: [
          "Практичні інсайти з реальної роботи",
          "Можливості особистісного та професійного розвитку",
          "Спілкування з успішними підприємцями",
        ],
        included: "У програмі: спільний сніданок і нетворкінг",
        ctaLabel: "Зареєструватися",
      },
    },
  },
];

export function getUpcomingEvents(): LocalizedEvent[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return upcomingEvents.filter((e) => new Date(e.date) >= today);
}
