"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, ArrowRight } from "lucide-react";
import {
  getUpcomingEvents,
  formatEventDate,
  formatDayOfWeek,
  getDaysUntil,
  formatCountdown,
} from "@/lib/events";

type Locale = "de" | "ru" | "uk";

const strings: Record<
  Locale,
  { eyebrow: string; title: string; description: string; cta: string }
> = {
  de: {
    eyebrow: "Anstehende Veranstaltungen",
    title: "Treffen Sie uns persönlich",
    description:
      "Einmal im Monat veranstalte ich ein persönliches Seminar - ohne Formalitäten, mit Frühstück und Antworten auf alle Fragen.",
    cta: "Mehr erfahren",
  },
  ru: {
    eyebrow: "Ближайшие события",
    title: "Встретимся лично",
    description:
      "Раз в месяц провожу очный семинар - без формальностей, с завтраком, ответами на любые вопросы.",
    cta: "Подробнее",
  },
  uk: {
    eyebrow: "Найближчі події",
    title: "Зустрінемось особисто",
    description:
      "Раз на місяць проводжу очний семінар - без формальностей, зі сніданком, відповідями на всі питання.",
    cta: "Детальніше",
  },
};

export function EventsSection({ locale }: { locale: Locale }) {
  const events = getUpcomingEvents();
  const event = events.find((e) => e.isHighlighted) ?? events[0];
  if (!event) return null;

  const c = event.translations[locale];
  const t = strings[locale];
  const days = getDaysUntil(event.date);
  const dayPadded = new Date(event.date).getDate().toString().padStart(2, "0");
  const monthLabel = formatEventDate(event.date, locale).split(" ")[1];

  return (
    <>
      <section className="bg-cream py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold text-gold uppercase tracking-[0.16em] mb-3">
                {t.eyebrow}
              </p>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">
                {t.title}
              </h2>
              <p className="text-sm md:text-base text-navy/70 leading-relaxed mb-5">
                {t.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 rounded-full">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
                <span className="text-xs text-gold font-semibold">
                  {formatCountdown(days, locale)}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gold/15"
            >
              <div className="flex items-center gap-3.5 pb-4 border-b border-navy/10 mb-4">
                <div className="bg-navy rounded-md px-3.5 py-3 flex flex-col items-center min-w-[60px]">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-bold text-white leading-none">
                    {dayPadded}
                  </span>
                  <span className="text-[9px] font-semibold text-gold tracking-[0.16em] uppercase mt-0.5">
                    {monthLabel}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-navy mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-navy/55">
                    {formatDayOfWeek(event.date, locale)}, {event.startTime} - {event.endTime}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-navy">{c.location}</p>
                  {c.addressLine2 && (
                    <p className="text-xs text-navy/55">{c.addressLine2}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-2.5 bg-cream rounded my-3.5">
                <Coffee className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-gold font-medium">{c.included}</span>
              </div>

              <a
                href="/event"
                className="w-full flex items-center justify-center gap-1.5 bg-gold text-navy py-3 px-4 rounded font-semibold text-sm hover:bg-gold/90 transition-colors"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsSection;
