"use client";

import { useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { getUpcomingEvents, formatEventDate } from "@/lib/events";
import { EventModal } from "./EventModal";

type Locale = "de" | "ru" | "uk";

const detailsLabels: Record<Locale, string> = {
  de: "Mehr erfahren",
  ru: "Подробнее",
  uk: "Детальніше",
};

export function AnnouncementStrip({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const events = getUpcomingEvents();
  const event = events.find((e) => e.isHighlighted) ?? events[0];
  if (!event) return null;

  const c = event.translations[locale];
  const dateLabel = `${formatEventDate(event.date, locale)} · ${event.startTime}`;

  return (
    <>
      <div className="bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold flex-shrink-0">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{dateLabel}</span>
            </span>

            <div className="flex-1 min-w-0 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-white">
              <span className="font-semibold truncate">{c.title}</span>
              <span className="inline-flex items-center gap-1 text-sm text-white/70">
                <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                <span>{c.location}</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto flex-shrink-0 px-4 py-2 rounded-full border border-gold text-gold text-sm font-semibold bg-transparent hover:bg-gold/10 transition-colors"
            >
              <span>{detailsLabels[locale]}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <EventModal
          event={event}
          locale={locale}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default AnnouncementStrip;
