"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const SEMINAR_DATE = new Date("2026-04-10T18:30:00+02:00");

function getTimeLeft() {
  const now = new Date();
  const diff = SEMINAR_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Seminar() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const countdown = [
    { value: time.days, label: "дней" },
    { value: time.hours, label: "часов" },
    { value: time.minutes, label: "минут" },
    { value: time.seconds, label: "секунд" },
  ];

  return (
    <section id="seminar" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Ближайший семинар
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Присоединяйтесь к мероприятию
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg">
            <div className="relative h-56 sm:h-72">
              <Image
                src="https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/18a10eace_generated_e3868091.png"
                alt="Семинар — Недвижимость в Германии"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-gold text-navy text-sm font-semibold rounded-full">
                  Очный семинар
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Countdown */}
              <div className="flex justify-center gap-3 sm:gap-4 mb-8">
                {countdown.map((c) => (
                  <div key={c.label} className="text-center">
                    <div className="bg-navy text-white w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center">
                      <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold">
                        {c.value}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 block">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
                Недвижимость в Германии — простым языком
              </h3>

              <div className="space-y-3 mb-6">
                <p className="text-muted-foreground">Разберём:</p>
                <ul className="space-y-2">
                  {[
                    "Как начать с недвижимостью в Германии",
                    "Что такое Bauspar и как им пользоваться",
                    "Какие дотации от государства можно получить",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>10.04.2026, 18:30</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Mottmannstra&szlig;e 8, 53842 Troisdorf</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Очно</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://forms.office.com/e/GqjXvfPaSX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-whatsapp text-white font-semibold rounded-full hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Зарегистрироваться
                </a>
                <a
                  href="https://wa.me/491784743490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
                >
                  Задать вопрос
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
