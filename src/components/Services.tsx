"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Финансовые консультации",
    desc: "Полный анализ вашей финансовой ситуации и персональная стратегия развития. Разберём доходы, расходы, налоги и выстроим план действий.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
  },
  {
    title: "Инвестиции и фонды",
    desc: "Грамотное вложение средств с учётом ваших целей и допустимого уровня риска. Подберём инструменты, которые работают на вас.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
  },
  {
    title: "Пенсионное обеспечение",
    desc: "Государственные и частные пенсионные программы для достойной жизни на пенсии. Riester, Rürup, betriebliche Altersvorsorge — разберёмся, что подходит именно вам.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
  },
  {
    title: "Страхование",
    desc: "Защита вас и вашей семьи — здоровье, имущество, ответственность. Проверим текущие полисы и оптимизируем покрытие.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
  },
  {
    title: "Ипотека",
    desc: "Подбор оптимальных условий финансирования вашей недвижимости в Германии. Сравним предложения и найдём лучший вариант.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
  },
  {
    title: "Bausparen",
    desc: "Накопительные программы с государственной поддержкой для покупки жилья. Расскажу, как получить дотации и зафиксировать ставку.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
  },
  {
    title: "Консультации для фирм",
    desc: "Финансовые решения для бизнеса — от стартапов до устоявшихся компаний. Корпоративное страхование, пенсии для сотрудников.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/5e9da606e_generated_157ca161.png",
  },
  {
    title: "Бесплатные семинары",
    desc: "Образовательные мероприятия о финансовой грамотности на русском языке. Разбираем реальные вопросы в живом формате.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/d50888bf3_generated_35c01f2e.png",
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const current = services[active];

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout — reference style */}
        <div className="hidden lg:flex gap-0 items-stretch">
          {/* Left — image + details */}
          <div className="w-[38%] flex-shrink-0">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                key={current.img}
                src={current.img}
                alt={current.title}
                className="object-cover"
                fill
              />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy mt-5 mb-2">
              {current.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {current.desc}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-gold font-semibold hover:underline"
            >
              Подробнее &rarr;
            </a>
          </div>

          {/* Middle — vertical numbered tabs */}
          <div className="flex items-stretch mx-4 xl:mx-6">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center group transition-all duration-300 ${
                  i === active ? "w-14" : "w-10"
                }`}
              >
                {/* Number at top */}
                <span
                  className={`font-[family-name:var(--font-serif)] text-sm font-bold mb-3 transition-colors duration-300 ${
                    i === active
                      ? "text-gold"
                      : "text-border group-hover:text-gold/50"
                  }`}
                >
                  {pad(i + 1)}.
                </span>
                {/* Vertical line */}
                <div
                  className={`w-px flex-grow transition-colors duration-300 ${
                    i === active ? "bg-gold" : "bg-border group-hover:bg-gold/30"
                  }`}
                />
                {/* Vertical title */}
                <span
                  className={`text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 mt-3 ${
                    i === active
                      ? "text-navy"
                      : "text-muted-foreground group-hover:text-navy"
                  }`}
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    maxHeight: "140px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right — heading + description */}
          <div className="flex-1 pl-6 xl:pl-10 flex flex-col justify-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Услуги
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl xl:text-4xl font-bold text-navy mt-3 mb-8">
              Комплексное финансовое сопровождение
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {current.desc}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all self-start"
            >
              Записаться на бесплатную консультацию
            </a>
          </div>
        </div>

        {/* Mobile layout — accordion */}
        <div className="lg:hidden">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Услуги
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                Комплексное финансовое сопровождение
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-0">
            {services.map((s, i) => {
              const isOpen = mobileOpen === i;
              return (
                <div key={s.title} className="border-b border-border">
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-[family-name:var(--font-serif)] text-xl font-bold transition-colors ${
                        isOpen ? "text-gold" : "text-border"
                      }`}
                    >
                      {pad(i + 1)}.
                    </span>
                    <span
                      className={`font-medium transition-colors ${
                        isOpen ? "text-navy" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    <svg
                      className={`w-4 h-4 ml-auto text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "500px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-6">
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={s.img}
                          alt={s.title}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Записаться на бесплатную консультацию
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
