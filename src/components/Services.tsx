"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Финансовые консультации",
    desc: "Полный анализ вашей финансовой ситуации и персональная стратегия развития. Разберём доходы, расходы, налоги и выстроим план действий.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
    href: "/uslugi/finanzberatung",
    details: [
      "Анализ доходов, расходов и налогов",
      "Персональная финансовая стратегия",
      "Оптимизация текущих договоров",
      "Долгосрочное сопровождение",
    ],
  },
  {
    title: "Управление капиталом",
    desc: "Долгосрочный план накоплений и защита для частных лиц и семей — анализ пробелов, структурированное вложение, страховая защита. Всё в одних руках.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
    href: "/uslugi/vermoegensberatung",
    details: [
      "Анализ пенсионных и страховых пробелов",
      "Долгосрочная структура вложений",
      "Защита семьи и активов",
      "Сопровождение на годы",
    ],
  },
  {
    title: "Investitionen & Fonds",
    desc: "Грамотное вложение средств с учётом ваших целей и допустимого уровня риска. Подберём инструменты, которые работают на вас.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
    href: "/uslugi/geldanlage",
    details: [
      "Акции и облигации",
      "ETF и инвестиционные фонды",
      "Золото и серебро",
      "Накопительные программы (Sparpläne)",
    ],
  },
  {
    title: "Altersvorsorge",
    desc: "Государственные и частные пенсионные программы для достойной жизни на пенсии. Riester, Rürup, betriebliche Altersvorsorge - разберёмся, что подходит именно вам.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    href: "/uslugi/altersvorsorge",
    details: [
      "Riester-Rente",
      "Rürup-Rente (Basisrente)",
      "bAV - betriebliche Altersvorsorge",
      "Частные пенсионные планы",
    ],
  },
  {
    title: "Страховка от потери трудоспособности (BU)",
    desc: "Потеря трудоспособности — самый большой финансовый риск. Помогаем правильно застраховаться. Тарифы группы Generali, с разбором медосмотра и покрытия.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
    href: "/uslugi/bu-beratung",
    details: [
      "Защита дохода при потере трудоспособности",
      "Тарифы группы Generali",
      "Разбор медицинского осмотра",
      "Размер взноса и покрытия",
    ],
  },
  {
    title: "Частная медицинская страховка (PKV)",
    desc: "PKV или GKV? Решение на десятилетия. Честно смотрим, подходит ли переход в твоей жизненной ситуации — тарифы Central Krankenversicherung.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
    href: "/uslugi/pkv-beratung",
    details: [
      "Консультация по переходу в PKV",
      "Тарифы Central Krankenversicherung",
      "Динамика взносов и резервы по возрасту",
      "Семейное планирование и Beihilfe",
    ],
  },
  {
    title: "Корпоративная пенсия (bAV)",
    desc: "bAV как бонус сотрудникам, который реально работает — с налоговой поддержкой и без бюрократии. Решения через Generali Pensionskasse.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    href: "/uslugi/bav-betriebliche-altersvorsorge",
    details: [
      "Direktversicherung через Generali Pensionskasse",
      "Entgeltumwandlung с налоговой выгодой",
      "Решения для работодателя и сотрудника",
      "Простая администрация",
    ],
  },
  {
    title: "Юридическая страховка",
    desc: "Работа, транспорт, арендатор, собственник — выбираем правильные модули. Защита через ADVOCARD.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
    href: "/uslugi/rechtsschutz",
    details: [
      "Защита по работе (Berufsrechtsschutz)",
      "Транспортная защита (Verkehrsrechtsschutz)",
      "Арендатор и собственник (Wohnrechtsschutz)",
      "Частная защита (Privatrechtsschutz)",
    ],
  },
  {
    title: "Risikolebensversicherung — страховка жизни",
    desc: "Защита семьи на случай ухода кормильца — лаконично, доступно, с понятным покрытием. Тарифы группы Generali.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
    details: [
      "Защита семьи в случае смерти",
      "Защита при ипотеке",
      "Тарифы группы Generali",
      "Гибкая страховая сумма",
    ],
  },
  {
    title: "Pflegeversicherung — страховка по уходу",
    desc: "Государственная страховка по уходу покрывает только часть реальных расходов. Закрываем пробел частными модулями.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    details: [
      "Pflegetagegeld как доплата",
      "Защита от собственного взноса в доме престарелых",
      "Защита для семьи и близких",
      "Тарифы группы Generali",
    ],
  },
  {
    title: "Hausrat и Privathaftpflicht",
    desc: "Два классика, которые нужны в каждом доме — Hausrat защищает имущество, Privathaftpflicht — от исков о возмещении ущерба.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
    details: [
      "Hausrat: защита от взлома, пожара, воды",
      "Privathaftpflicht: ущерб третьим лицам",
      "Тарифы группы Generali",
      "Тарифы для семей и одиноких",
    ],
  },
  {
    title: "Immobilienfinanzierung",
    desc: "Подбор условий финансирования недвижимости в Германии в рамках программ банков-партнёров DVAG. Сопровождаю весь путь - от расчёта Tilgungsplan до подачи документов.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
    details: [
      "Ипотечные кредиты (Baufinanzierung)",
      "Bausparen с государственной поддержкой",
      "Государственные дотации (KfW, Wohn-Riester)",
      "Рефинансирование действующей ипотеки",
    ],
  },
  {
    title: "Bausparen",
    desc: "Накопительные программы с государственной поддержкой для покупки жилья. Расскажу, как получить дотации и зафиксировать ставку.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
    details: [
      "Фиксация низкой процентной ставки",
      "Государственные дотации (Wohnungsbauprämie)",
      "Arbeitnehmer-Sparzulage для сотрудников",
      "Гибкие накопительные тарифы",
    ],
  },
  {
    title: "Консультации для фирм",
    desc: "Финансовые решения для бизнеса - от стартапов до устоявшихся компаний. Корпоративное страхование, пенсии для сотрудников.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/5e9da606e_generated_157ca161.png",
    details: [
      "Корпоративное страхование",
      "bAV - пенсии для сотрудников",
      "Страхование ответственности GmbH",
      "Финансовое планирование для бизнеса",
    ],
  },
  {
    title: "Бесплатные семинары",
    desc: "Образовательные мероприятия о финансовой грамотности. Разбираем реальные вопросы в живом формате.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/d50888bf3_generated_35c01f2e.png",
    details: [
      "Финансовая грамотность для начинающих",
      "Инвестиции и долгосрочные накопления",
      "Налоги и Steuererklärung",
      "Пенсия и страхование в Германии",
    ],
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const current = services[active];

  useEffect(() => {
    if (modalIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalIndex]);

  const modalService = modalIndex !== null ? services[modalIndex] : null;

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left - active service image + details */}
          <AnimateOnScroll animation="fade-left">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  key={current.img}
                  src={current.img}
                  alt={current.title}
                  className="object-cover transition-opacity duration-500"
                  fill
                />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mb-3">
                {current.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {current.desc}
              </p>
              {"href" in current && current.href ? (
                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
                >
                  Подробнее на странице услуги &rarr;
                </Link>
              ) : (
                <button
                  onClick={() => setModalIndex(active)}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
                >
                  Узнать подробнее &rarr;
                </button>
              )}
            </div>
          </AnimateOnScroll>

          {/* Right - heading + numbered list */}
          <div>
            <AnimateOnScroll animation="fade-right">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Услуги
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl xl:text-4xl font-bold text-navy mt-3 mb-10">
                Комплексное финансовое сопровождение
              </h2>
            </AnimateOnScroll>

            <div className="space-y-0">
              {services.map((s, i) => {
                const rowClass = `w-full text-left flex items-center gap-5 py-4 border-b border-border transition-all duration-300 group ${
                  i === active ? "border-gold" : "hover:border-gold/40"
                }`;
                const numClass = `font-[family-name:var(--font-serif)] text-2xl font-bold transition-colors duration-300 ${
                  i === active ? "text-gold" : "text-border group-hover:text-gold/50"
                }`;
                const titleClass = `text-base font-medium transition-colors duration-300 ${
                  i === active ? "text-navy" : "text-muted-foreground group-hover:text-navy"
                }`;
                if ("href" in s && s.href) {
                  return (
                    <Link
                      key={s.title}
                      href={s.href}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={rowClass}
                    >
                      <span className={numClass}>{pad(i + 1)}.</span>
                      <span className={titleClass}>{s.title}</span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={s.title}
                    onClick={() => setActive(i)}
                    className={rowClass}
                  >
                    <span className={numClass}>{pad(i + 1)}.</span>
                    <span className={titleClass}>{s.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
              >
                Бесплатная консультация
              </a>
            </div>
          </div>
        </div>

        {/* Mobile layout - accordion */}
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
              if ("href" in s && s.href) {
                return (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="border-b border-border w-full flex items-center gap-4 py-5 text-left"
                  >
                    <span className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy">
                      {pad(i + 1)}.
                    </span>
                    <span className="font-medium text-muted-foreground">
                      {s.title}
                    </span>
                    <span className="ml-auto text-muted-foreground">→</span>
                  </Link>
                );
              }
              return (
                <div key={s.title} className="border-b border-border">
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-[family-name:var(--font-serif)] text-xl font-bold transition-colors ${
                        isOpen ? "text-gold" : "text-navy"
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
                      className={`w-4 h-4 ml-auto text-muted-foreground transition-transform duration-200 ${
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
                      maxHeight: isOpen ? "600px" : "0",
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
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      <button
                        onClick={() => setModalIndex(i)}
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:underline text-sm"
                      >
                        Узнать подробнее &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
            >
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          {/* Backdrop */}
          <button
            aria-label="Закрыть"
            onClick={() => setModalIndex(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          {/* Content */}
          <div className="relative w-full sm:max-w-lg bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={modalService.img}
                alt={modalService.title}
                className="object-cover"
                fill
              />
              <button
                onClick={() => setModalIndex(null)}
                aria-label="Закрыть"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-7 overflow-y-auto">
              <h3
                id="service-modal-title"
                className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mb-2"
              >
                {modalService.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {modalService.desc}
              </p>
              <ul className="space-y-2.5 mb-6">
                {modalService.details.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setModalIndex(null)}
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base hover:opacity-90 transition-all"
              >
                Записаться на консультацию
              </a>
              {"href" in modalService && modalService.href && (
                <a
                  href={modalService.href as string}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-full text-sm sm:text-base hover:bg-navy hover:text-white transition-all"
                >
                  Перейти на страницу услуги →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
