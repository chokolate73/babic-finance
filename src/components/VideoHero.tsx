"use client";

import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function VideoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80" />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center pt-20 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-10 bg-gold" />
        </div>

        <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Персональный эксперт
          <br />
          <span className="text-gold">по финансам в Германии</span>
        </h1>

        <div
          className={`flex items-center justify-center gap-4 mt-4 mb-6 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="h-px w-10 shrink-0 bg-[#F5CD55]" />
          <span className="text-white not-italic font-medium uppercase text-[1.1rem] tracking-[0.15em]">
            Владислав Бабич
          </span>
          <div className="h-px w-10 shrink-0 bg-[#F5CD55]" />
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {["Финансовые консультации", "Инвестиции", "Пенсия", "Страхование"].map(
            (tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm text-white/90 border border-white/25 rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="https://wa.me/491784743490"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-semibold rounded-full text-base hover:opacity-90 transition-all shadow-lg shadow-whatsapp/25"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Обсудить детали
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full text-base hover:opacity-90 transition-all"
          >
            Узнать подробнее
          </a>
        </div>

        <p
          className={`hidden sm:block text-white/60 text-sm transition-all duration-1000 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          Отвечаем в течение часа в рабочее время
        </p>
      </div>

      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs">Прокрутить вниз</span>
          <svg
            className="w-5 h-5 animate-bounce-arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
