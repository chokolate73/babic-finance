"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Чи справді консультація безкоштовна?",
    a: "Так, перша консультація абсолютно безкоштовна й без жодних зобов'язань. Ми обговорюємо вашу ситуацію, і я показую, як можу вам допомогти.",
  },
  {
    q: "Скільки коштують ваші послуги?",
    a: "Для вас — безкоштовно. Я працюю як консультант DVAG, моя винагорода виплачується компаніями-партнерами. Ви отримуєте комплексний аналіз і підбір відповідних рішень із портфеля DVAG без додаткових витрат.",
  },
  {
    q: "Я не розуміюся на фінансах — це проблема?",
    a: "Зовсім ні. Більшість моїх клієнтів приходять без попередніх знань. Моя задача — пояснити все простою мовою й допомогти ухвалити правильне рішення.",
  },
  {
    q: "Що таке DVAG?",
    a: (
      <>
        Deutsche Vermögensberatung (DVAG) — найбільша компанія з фінансового консультування в Німеччині. Через DVAG я пропоную виключно ліцензовані та перевірені фінансові продукти. Більше про результати компанії — в{" "}
        <a
          href="https://unternehmensbericht.dvag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F5CD55] hover:underline"
        >
          офіційному звіті DVAG
        </a>
        .
      </>
    ),
  },
  {
    q: "З якими страховими та банками ви співпрацюєте?",
    a: "Я представляю продукти групи DVAG — страхові компанії Generali (Generali Versicherung, Central Krankenversicherung, ADVOCARD Rechtsschutz та інші) і банки-партнери. Цього достатньо, щоб підібрати рішення для будь-якої життєвої ситуації.",
  },
  {
    q: "Я нещодавно приїхав до Німеччини. Можете допомогти?",
    a: "Звичайно! Я спеціалізуюся на консультуванні людей, які нещодавно переїхали до Німеччини. Допомагаю розібратися в системі й зробити правильні перші кроки.",
  },
  {
    q: "Як проходять зустрічі?",
    a: "Зустрічі можуть проходити як особисто в моєму офісі в Troisdorf, так і онлайн. Ви обираєте формат, що зручніший вам.",
  },
  {
    q: "Чи треба знати німецьку?",
    a: "Ні, це не обов'язково. Консультація може проходити українською, російською або німецькою. Усю комунікацію з німецькими компаніями я беру на себе.",
  },
  {
    q: "Чи безкоштовні семінари?",
    a: "Так, усі мої семінари й освітні заходи абсолютно безкоштовні. Це частина моєї місії — сприяти фінансовій грамотності.",
  },
  {
    q: "Чи треба міняти банк або страхову, щоб працювати з вами?",
    a: "Ні, змінювати не обов'язково. Я аналізую ваші наявні договори й пропоную покращення лише там, де це справді доцільно. Мета — оптимізувати наявне, а не змінювати заради змін.",
  },
  {
    q: "Ви працюєте лише з клієнтами в Німеччині?",
    a: "Так, мої послуги для клієнтів, які живуть у Німеччині. Фінансові продукти й законодавчі рамки, з якими я працюю, діють тут. Консультації онлайн доступні з будь-якого міста Німеччини.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="pt-10 pb-20 lg:pt-14 lg:pb-28 bg-navy"
      style={{ background: "radial-gradient(ellipse at center, #242a4e 0%, #1a1f3d 70%)" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Питання
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-white mt-3">
              Часті запитання
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
              <div
                className={`border rounded-xl px-6 transition-colors ${
                  isOpen ? "bg-white/[0.05] border-gold/40" : "bg-transparent border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between py-5 text-left font-semibold text-white text-base"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="pb-5 text-base text-white/85 leading-[1.7]">
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
