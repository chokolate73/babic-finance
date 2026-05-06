"use client";

import { useEffect } from "react";
import { X, Check, MapPin, Coffee, ArrowRight, Calendar } from "lucide-react";
import { formatEventDate, type LocalizedEvent } from "@/lib/events";

type Locale = "de" | "ru" | "uk";

const closeLabels: Record<Locale, string> = {
  de: "Schließen",
  ru: "Закрыть",
  uk: "Закрити",
};

type Props = {
  event: LocalizedEvent;
  locale: Locale;
  onClose: () => void;
};

export function EventModal({ event, locale, onClose }: Props) {
  const c = event.translations[locale];
  const dateLabel = `${formatEventDate(event.date, locale)} · ${event.startTime} - ${event.endTime}`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <button
        aria-label={closeLabels[locale]}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        <div className="relative bg-navy px-6 pt-6 pb-5">
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabels[locale]}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{dateLabel}</span>
          </span>

          <h2
            id="event-modal-title"
            className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-white mt-3 leading-tight pr-10"
          >
            {c.title}
          </h2>

          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{c.location}</span>
          </p>
        </div>

        <div className="px-6 py-6 overflow-y-auto">
          <p className="text-base leading-relaxed text-foreground/80">
            {c.description}
          </p>

          <ul className="mt-5 space-y-3">
            {c.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                </span>
                <span className="text-base text-foreground/80 leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-cream px-4 py-3">
            <Coffee className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-sm text-navy/80 leading-relaxed">
              {c.included}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 sm:pt-4 border-t border-border">
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:opacity-90 text-navy font-semibold rounded-full text-base shadow transition-all"
          >
            <span>{c.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventModal;
