"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const services = [
  {
    title: "Фінансове консультування",
    desc: "Повний аналіз вашої фінансової ситуації та персональна стратегія. Розглядаємо доходи, витрати та податки й розробляємо чіткий план дій.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
    href: "/ua/poslugy/finanzberatung",
    details: [
      "Аналіз доходів, витрат і податків",
      "Персональна фінансова стратегія",
      "Оптимізація наявних договорів",
      "Довгостроковий супровід",
    ],
  },
  {
    title: "Управління капіталом",
    desc: "Довгострокове накопичення та захист для приватних осіб і сімей - аналіз прогалин, структуроване вкладення, страховий захист. Усе в одних руках.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
    href: "/ua/poslugy/vermoegensberatung",
    details: [
      "Аналіз пенсійних і страхових прогалин",
      "Довгострокова структура вкладень",
      "Захист сім'ї та активів",
      "Супровід на роки",
    ],
  },
  {
    title: "Інвестиції та фонди",
    desc: "Продумане розміщення коштів з урахуванням ваших цілей і особистої готовності до ризику. Підбираємо інструменти, які працюватимуть саме для вас.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
    href: "/ua/poslugy/geldanlage",
    details: [
      "Акції та облігації",
      "ETF та інвестиційні фонди",
      "Золото та срібло",
      "Накопичувальні плани (Sparpläne)",
    ],
  },
  {
    title: "Пенсійне забезпечення",
    desc: "Державні та приватні програми накопичення для комфортного життя на пенсії. Riester, Rürup, корпоративна пенсія - разом знаходимо те, що підходить вам.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    href: "/ua/poslugy/altersvorsorge",
    details: [
      "Riester-Rente",
      "Rürup-Rente (Basisrente)",
      "bAV - корпоративна пенсія",
      "Приватне пенсійне страхування",
    ],
  },
  {
    title: "Страхування від втрати працездатності (BU)",
    desc: "Втрата працездатності - найбільший фінансовий ризик. Допомагаємо правильно застрахуватися. Тарифи групи Generali, з розбором медогляду й покриття.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
    href: "/ua/poslugy/bu-beratung",
    details: [
      "Захист доходу при втраті працездатності",
      "Тарифи групи Generali",
      "Розбір медичного огляду",
      "Розмір внеску й покриття",
    ],
  },
  {
    title: "Приватне медичне страхування (PKV)",
    desc: "PKV чи GKV? Рішення на десятиліття. Чесно дивимося, чи підходить перехід саме у твоїй ситуації - тарифи Central Krankenversicherung.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
    href: "/ua/poslugy/pkv-beratung",
    details: [
      "Консультація з переходу в PKV",
      "Тарифи Central Krankenversicherung",
      "Динаміка внесків і резерви за віком",
      "Сімейне планування і Beihilfe",
    ],
  },
  {
    title: "Корпоративна пенсія (bAV)",
    desc: "bAV як бонус для працівників, який реально працює - з податковою підтримкою і без бюрократії. Рішення через Generali Pensionskasse.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    href: "/ua/poslugy/bav-betriebliche-altersvorsorge",
    details: [
      "Direktversicherung через Generali Pensionskasse",
      "Entgeltumwandlung з податковою вигодою",
      "Рішення для роботодавця і працівника",
      "Проста адміністрація",
    ],
  },
  {
    title: "Юридичне страхування",
    desc: "Робота, транспорт, орендар, власник - обираємо правильні модулі. Захист через ADVOCARD.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
    href: "/ua/poslugy/rechtsschutz",
    details: [
      "Захист на роботі (Berufsrechtsschutz)",
      "Транспортний захист (Verkehrsrechtsschutz)",
      "Орендар і власник (Wohnrechtsschutz)",
      "Приватний захист (Privatrechtsschutz)",
    ],
  },
  {
    title: "Risikolebensversicherung - страхування життя",
    desc: "Захист сім'ї на випадок відходу годувальника - лаконічно, доступно, з чітким покриттям. Тарифи групи Generali.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
    details: [
      "Захист сім'ї у разі смерті",
      "Захист при іпотеці",
      "Тарифи групи Generali",
      "Гнучка страхова сума",
    ],
  },
  {
    title: "Pflegeversicherung - страхування з догляду",
    desc: "Державне страхування з догляду покриває лише частину реальних витрат. Закриваємо прогалину приватними модулями.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    details: [
      "Pflegetagegeld як доплата",
      "Захист від власного внеску в будинку для літніх",
      "Захист для сім'ї та близьких",
      "Тарифи групи Generali",
    ],
  },
  {
    title: "Hausrat і Privathaftpflicht",
    desc: "Два класики, які потрібні в кожному домі - Hausrat захищає майно, Privathaftpflicht - від позовів про відшкодування шкоди.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
    details: [
      "Hausrat: захист від крадіжки, пожежі, води",
      "Privathaftpflicht: шкода третім особам",
      "Тарифи групи Generali",
      "Тарифи для сімей та одиноких",
    ],
  },
  {
    title: "Іпотечне фінансування",
    desc: "Підбір умов фінансування нерухомості в Німеччині в межах програм банків-партнерів DVAG. Супровід від розрахунку Tilgungsplan до подання документів.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
    details: [
      "Іпотека на будівництво / купівлю",
      "Bausparen із державною підтримкою",
      "Державні субсидії (KfW, Wohn-Riester)",
      "Перефінансування наявних кредитів",
    ],
  },
  {
    title: "Bausparen",
    desc: "Накопичувальні плани з державною підтримкою для придбання житла. Покажу, як використати субсидії й зафіксувати вигідні відсотки.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
    details: [
      "Низькі відсотки на довгий термін",
      "Державні субсидії (Wohnungsbauprämie)",
      "Arbeitnehmer-Sparzulage",
      "Гнучкі тарифи накопичення",
    ],
  },
  {
    title: "Консультації для бізнесу",
    desc: "Фінансові рішення для компаній - від стартапу до сталого підприємства. Корпоративне страхування та пенсії для співробітників.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/5e9da606e_generated_157ca161.png",
    details: [
      "Корпоративне страхування",
      "bAV - корпоративна пенсія",
      "Страхування відповідальності для GmbH",
      "Фінансове планування для компаній",
    ],
  },
  {
    title: "Безкоштовні семінари",
    desc: "Освітні заходи з фінансової грамотності. Обговорюємо реальні питання у живому форматі.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/d50888bf3_generated_35c01f2e.png",
    details: [
      "Фінансова грамотність для початківців",
      "Інвестиції та довгострокове накопичення капіталу",
      "Податки та податкова декларація",
      "Пенсійне забезпечення та страхування в Німеччині",
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
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
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
                  Перейти на сторінку послуги &rarr;
                </Link>
              ) : (
                <button
                  onClick={() => setModalIndex(active)}
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
                >
                  Дивитися деталі &rarr;
                </button>
              )}
            </div>
          </AnimateOnScroll>

          <div>
            <AnimateOnScroll animation="fade-right">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Послуги
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl xl:text-4xl font-bold text-navy mt-3 mb-10">
                Комплексний фінансовий супровід
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
                Безкоштовна консультація
              </a>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Послуги
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                Комплексний фінансовий супровід
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
                        Дивитися деталі &rarr;
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
              Безкоштовна консультація
            </a>
          </div>
        </div>
      </div>

      {modalService && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <button
            aria-label="Закрити"
            onClick={() => setModalIndex(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
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
                aria-label="Закрити"
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
                Записатися на консультацію
              </a>
              {"href" in modalService && modalService.href && (
                <a
                  href={modalService.href as string}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-full text-sm sm:text-base hover:bg-navy hover:text-white transition-all"
                >
                  Перейти на сторінку послуги →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
