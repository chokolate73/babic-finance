"use client";

import { useState, FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Пожалуйста, введите корректный email");
      return;
    }

    // TODO: connect lead magnet form to email service (Resend, Mailchimp, or Google Sheets)
    console.log("Lead magnet email:", email);
    setSubmitted(true);
  }

  const checklist = [
    "Налоги и Steuererklärung",
    "Пенсия и накопления",
    "Страхование и Bausparen",
  ];

  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gold/20 bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left panel - Navy with PDF mockup */}
              <div className="lg:w-[35%] bg-navy flex flex-col items-center justify-center p-8 lg:p-10">
                <div className="relative">
                  {/* Ghost page behind */}
                  <div
                    className="absolute inset-0 w-[150px] h-[210px] md:w-[150px] md:h-[210px] bg-white/10 rounded-[4px]"
                    style={{ transform: "rotate(2deg)" }}
                  />
                  {/* Main PDF page */}
                  <div
                    className="relative w-[130px] h-[180px] md:w-[150px] md:h-[210px] bg-white rounded-[4px] flex flex-col overflow-hidden"
                    style={{ transform: "rotate(-2deg)" }}
                  >
                    <div className="px-4 pt-5 pb-3 flex-1 flex flex-col">
                      {/* Gold accent bar */}
                      <div className="w-8 h-[3px] bg-gold mb-3" />
                      {/* Title */}
                      <p className="text-[9px] md:text-[10px] font-bold text-navy leading-tight mb-0.5">
                        7 финансовых ошибок
                      </p>
                      <p className="text-[7px] md:text-[8px] text-muted-foreground leading-tight mb-3">
                        которые совершают русскоязычные в Германии
                      </p>
                      {/* Simulated body text lines */}
                      <div className="space-y-[5px] flex-1">
                        <div className="h-[2px] bg-gray-200 w-full rounded" />
                        <div className="h-[2px] bg-gray-200 w-[80%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[92%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[75%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[88%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[70%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[95%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[60%] rounded" />
                      </div>
                    </div>
                    {/* Gold bottom strip */}
                    <div className="w-full h-1.5 bg-gold" />
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4 text-center">
                  PDF, 12 страниц
                </p>
              </div>

              {/* Right panel - White with copy + form */}
              <div className="lg:w-[65%] p-6 sm:p-8 lg:p-9 flex flex-col justify-center">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Бесплатный гайд
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mt-2 leading-snug">
                  7 финансовых ошибок, которые совершают русскоязычные в Германии
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Узнайте, какие типичные ошибки стоят вам сотни евро в год - и
                  как их исправить.
                </p>

                {/* Checklist */}
                <ul className="mt-4 space-y-1.5">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-navy text-sm"
                    >
                      <span className="text-gold font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Form */}
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="mt-5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ваш email"
                      className="flex w-full border border-input bg-[#FAFAF8] px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                    />
                    {error && (
                      <p className="text-red-500 text-xs mt-1.5">{error}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full mt-2.5 h-12 bg-gold hover:opacity-90 text-navy font-semibold rounded-xl transition-all"
                    >
                      Получить бесплатный гайд
                    </button>
                    <p className="text-muted-foreground text-xs mt-2.5 text-center">
                      Без спама - только гайд на почту.
                    </p>
                  </form>
                ) : (
                  <div className="mt-5 text-center py-6">
                    <p className="text-green-600 font-semibold">
                      Гайд отправлен на вашу почту!
                    </p>
                    {/* TODO: add lead magnet PDF at /public/downloads/7-financial-mistakes.pdf */}
                    <a
                      href="#"
                      className="text-gold text-sm mt-2 inline-block hover:underline"
                    >
                      Скачать PDF напрямую
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
