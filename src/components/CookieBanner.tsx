"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "babic-cookie-consent";

type Consent = "accepted" | "essential";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function persist(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore quota / disabled storage */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Согласие на использование cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-navy text-white/90 rounded-2xl shadow-2xl border border-white/10 p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 lg:gap-6">
          <div className="hidden sm:flex w-11 h-11 rounded-full bg-gold/15 items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-gold" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-base">
              Cookies — небольшое уточнение
            </p>
            <p className="text-sm text-white/75 leading-relaxed mt-1.5">
              Мы используем технические cookies, чтобы сайт работал корректно,
              и аналитические — чтобы понимать, какие страницы тебе интереснее.
              Подробнее — в{" "}
              <Link
                href="/datenschutz"
                className="underline hover:no-underline text-gold"
              >
                Datenschutz
              </Link>
              .
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => persist("accepted")}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
              >
                Принять все
              </button>
              <button
                type="button"
                onClick={() => persist("essential")}
                className="inline-flex items-center justify-center px-5 py-2.5 border border-white/30 text-white/90 text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Только необходимые
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => persist("essential")}
            aria-label="Закрыть"
            className="absolute top-3 right-3 sm:static sm:flex w-8 h-8 rounded-full text-white/60 hover:text-white hover:bg-white/10 items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
