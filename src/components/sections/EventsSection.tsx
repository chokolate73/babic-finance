"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Check, ArrowRight } from "lucide-react";
import { getUpcomingEvents, type LocalizedEvent } from "@/lib/events";

type Locale = "de" | "ru" | "uk";

const HEADER: Record<Locale, { eyebrow: string; title: string }> = {
  de: {
    eyebrow: "Anstehende Veranstaltungen",
    title: "Treffen Sie uns persönlich",
  },
  ru: {
    eyebrow: "Ближайшие события",
    title: "Встретимся лично",
  },
  uk: {
    eyebrow: "Найближчі події",
    title: "Зустрінемось особисто",
  },
};

const MONTHS_SHORT: Record<Locale, string[]> = {
  de: ["JAN", "FEB", "MÄR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEZ"],
  ru: ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЯ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"],
  uk: ["СІЧ", "ЛЮТ", "БЕР", "КВІТ", "ТРАВ", "ЧЕРВ", "ЛИП", "СЕРП", "ВЕР", "ЖОВТ", "ЛИСТ", "ГРУД"],
};

function formatDateBadge(isoDate: string, locale: Locale): { day: string; month: string } {
  const [, monthStr, dayStr] = isoDate.split("-");
  const monthIndex = Math.max(0, Math.min(11, parseInt(monthStr, 10) - 1));
  const dayPadded = dayStr.padStart(2, "0");
  const day = locale === "de" ? `${dayPadded}.` : dayPadded;
  return { day, month: MONTHS_SHORT[locale][monthIndex] };
}

function EventCard({ event, locale }: { event: LocalizedEvent; locale: Locale }) {
  const t = event.translations[locale];
  const { day, month } = formatDateBadge(event.date, locale);
  const highlighted = !!event.isHighlighted;

  const cardClasses = [
    "rounded-2xl p-6 sm:p-8 h-full flex flex-col",
    highlighted
      ? "bg-gold/5 border border-gold/40 shadow-sm"
      : "bg-white border border-navy/10",
  ].join(" ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cardClasses}
    >
      <div className="flex items-start gap-5 sm:gap-6">
        <div
          aria-hidden="true"
          className="flex-shrink-0 w-20 sm:w-24 rounded-xl bg-navy text-white flex flex-col items-center justify-center py-3"
        >
          <span className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold leading-none">
            {day}
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold mt-1">
            {month}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy leading-snug">
            {t.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>
                {event.startTime} - {event.endTime}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" aria-hidden="true" />
              <span>{t.location}</span>
            </span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-foreground/80">
        {t.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {t.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-md bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-gold" aria-hidden="true" />
            </span>
            <span className="text-base text-foreground/80 leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/70">
        <Calendar className="w-4 h-4 text-gold" aria-hidden="true" />
        <span>{t.included}</span>
      </p>

      <div className="mt-6 pt-6 border-t border-navy/10">
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-gold text-navy font-semibold hover:bg-gold/90 transition-colors"
        >
          <span>{t.ctaLabel}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

export function EventsSection({ locale }: { locale: Locale }) {
  const events = getUpcomingEvents();
  if (events.length === 0) return null;

  const { eyebrow, title } = HEADER[locale];
  const gridClasses =
    events.length > 1
      ? "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
      : "grid grid-cols-1 max-w-3xl mx-auto gap-6";

  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 leading-tight">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="block w-[60px] h-[2px] bg-gold mx-auto mt-5"
          />
        </motion.div>

        <div className={gridClasses}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
