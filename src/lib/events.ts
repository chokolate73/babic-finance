export type EventContent = {
  title: string;
  location: string;
  addressLine2?: string;
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
    registrationUrl: "https://forms.office.com/e/TpLbVP0Tn5",
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

export function formatEventDate(iso: string, locale: "de" | "ru" | "uk"): string {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const months: Record<"de" | "ru" | "uk", string[]> = {
    de: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    ru: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
    uk: [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ],
  };
  return `${day} ${months[locale][d.getMonth()]}`;
}

export function formatDayOfWeek(iso: string, locale: "de" | "ru" | "uk"): string {
  const d = new Date(iso);
  const days: Record<"de" | "ru" | "uk", string[]> = {
    de: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    ru: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    uk: [
      "неділя",
      "понеділок",
      "вівторок",
      "середа",
      "четвер",
      "пʼятниця",
      "субота",
    ],
  };
  return days[locale][d.getDay()];
}

export function getDaysUntil(iso: string): number {
  const event = new Date(iso);
  event.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((event.getTime() - today.getTime()) / 86400000);
}

function slavicPlural(n: number, forms: [string, string, string]): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return forms[1];
  return forms[2];
}

export function formatCountdown(days: number, locale: "de" | "ru" | "uk"): string {
  if (days === 0) return { de: "Heute", ru: "Сегодня", uk: "Сьогодні" }[locale];
  if (days === 1) return { de: "Morgen", ru: "Завтра", uk: "Завтра" }[locale];

  if (locale === "de") {
    return `In ${days} Tagen`;
  }
  if (locale === "ru") {
    const word = slavicPlural(days, ["день", "дня", "дней"]);
    return `Через ${days} ${word}`;
  }
  const word = slavicPlural(days, ["день", "дні", "днів"]);
  return `Через ${days} ${word}`;
}
