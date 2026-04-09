"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    q: "Консультация действительно бесплатная?",
    a: "Да, первая консультация абсолютно бесплатная и ни к чему не обязывает. Мы обсудим вашу ситуацию и я расскажу, как могу помочь.",
  },
  {
    q: "Я не разбираюсь в финансах — это нормально?",
    a: "Абсолютно нормально. Большинство моих клиентов приходят без специальных знаний. Моя задача — объяснить всё простым языком и помочь принять правильное решение.",
  },
  {
    q: "Что такое DVAG?",
    a: "Deutsche Vermögensberatung (DVAG) — это крупнейшая финансовая консалтинговая компания в Германии. Работая через DVAG, я предлагаю только лицензированные и проверенные финансовые продукты.",
  },
  {
    q: "С какими страховыми и банками вы работаете?",
    a: "Через DVAG я имею доступ к продуктам ведущих страховых компаний и банков Германии, что позволяет подобрать оптимальное решение для каждого клиента.",
  },
  {
    q: "Я недавно приехал в Германию. Можете помочь?",
    a: "Конечно! Я специализируюсь на работе с людьми, которые недавно переехали в Германию. Помогу разобраться в системе и сделать первые важные шаги.",
  },
  {
    q: "Как проходят встречи?",
    a: "Встречи могут проходить как лично в моём офисе в Troisdorf, так и онлайн. Выбирайте удобный для вас формат.",
  },
  {
    q: "Нужно ли мне знать немецкий язык?",
    a: "Нет, не нужно. Все консультации проводятся на русском языке. Я беру на себя всё общение с немецкими компаниями.",
  },
  {
    q: "Семинары бесплатные?",
    a: "Да, все мои семинары и образовательные мероприятия абсолютно бесплатные. Это часть моей миссии — повышение финансовой грамотности.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Вопросы
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Часто задаваемые вопросы
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <div
                className={`bg-white border rounded-xl px-6 transition-colors ${
                  isOpen ? "border-gold/30" : "border-border"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between py-5 text-left font-semibold text-navy text-base"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
