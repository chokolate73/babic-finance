import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/bausparen";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/bausparen`;
const UK_URL = `${SITE_URL}/ua/bausparen`;

const PAGE_TITLE = "Bausparen — когда строительный накопительный договор имеет смысл";
const PAGE_DESCRIPTION =
  "Bausparen в правильном контексте: когда Bausparvertrag вписывается в вашу финансовую стратегию, а когда нет. В связке с пенсионным обеспечением и ипотекой. Бонн и Тройсдорф.";
const PAGE_NAME = "Bausparen";
const H1 = "Bausparen — когда он вписывается в вашу финансовую стратегию";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Имеет ли смысл Bausparen, если конкретных планов на недвижимость пока нет?",
    a: "С ограничениями. Если возможность купить недвижимость через 10–20 лет существует, договор может служить фиксацией ставки. Если такая перспектива практически исключена, другие формы сбережений обычно осмысленнее.",
  },
  {
    q: "Чем Bausparen отличается от регулярного фондового плана?",
    a: "Фондовый план нацелен на доходность, Bausparvertrag — на будущее выгодное финансирование. Обе формы — долгосрочные, но с разной целью, и они не исключают друг друга.",
  },
  {
    q: "Что произойдёт, если в итоге я не возьму Bauspar-кредит?",
    a: "Вы сохраняете накопленный остаток с накопительными процентами. Преимуществом выгодного Bauspar-кредита вы не воспользуетесь — что вполне нормально, если рыночные ставки на момент Zuteilung окажутся ниже.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: {
      ru: CANONICAL,
      de: DE_URL,
      uk: UK_URL,
      "x-default": CANONICAL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    siteName: "Babic Finance",
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["de_DE", "uk_UA"],
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/preview.webp"],
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: H1,
      description: PAGE_DESCRIPTION,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Troisdorf" },
        { "@type": "City", name: "Bonn" },
        { "@type": "AdministrativeArea", name: "Rhein-Sieg-Kreis" },
      ],
      url: CANONICAL,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: PAGE_NAME, item: CANONICAL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      inLanguage: "ru-RU",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

const linkClass =
  "font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors";

export default function BausparenPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Bausparen
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Bausparen — не самоцель и не устаревший продукт. Это инструмент,
            который в одних жизненных ситуациях работает, а в других — нет.
            Имеет ли Bausparvertrag смысл именно для вас, выводится не из
            рекламного буклета, а из вашей конкретной жизненной и финансовой
            ситуации.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Что Bausparen даёт сегодня
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Bausparvertrag выполняет две функции, которые стоит рассматривать
            раздельно:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Фаза накопления:</strong> структурированное накопление с
              гарантированной ставкой по сбережениям, в зависимости от тарифа
              дополненное Wohnungsbauprämie или Arbeitnehmer-Sparzulage.
            </li>
            <li>
              <strong>Фаза кредита:</strong> право на Bauspar-кредит по
              ставке, зафиксированной уже сегодня.
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            В фазе низких ставок Bausparen был непривлекателен, потому что
            гарантированная ставка Bauspar-кредита почти не отличалась от
            рыночной. В фазе растущих или высоких ставок Bausparen как
            долгосрочная фиксация ставки снова становится интересным —
            прежде всего для молодых сберегателей с конкретными или
            возможными ипотечными планами на 10–15 лет.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Когда Bausparen разумно вписывается
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            С точки зрения консультации можно выделить три ситуации, в
            которых Bausparvertrag вписывается в более широкую стратегию:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Защитить рефинансирование.</strong> Тот, кто через 8–12
              лет ожидает окончания{" "}
              <Link href="/ipoteka" className={linkClass}>
                первичной ипотеки
              </Link>
              , может с помощью Bausparvertrag долгосрочно зафиксировать
              ставку рефинансирования.
            </li>
            <li>
              <strong>Молодые сберегатели с перспективой собственного жилья.</strong>{" "}
              Тот, кто в 25–30 копит на будущую покупку дома, выигрывает от
              длинного срока накопления и фиксации ставки будущего
              Bauspar-кредита.
            </li>
            <li>
              <strong>Разумно использовать Vermögenswirksame Leistungen.</strong>{" "}
              VL от работодателя можно через Bausparverträge с
              Wohnungsbauprämie или Arbeitnehmer-Sparzulage оптимизировать
              налогово.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Когда Bausparen скорее не подходит
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Не менее важен честный ответ, когда Bausparvertrag в финансовой
            стратегии скорее вреден, чем полезен:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Если в краткосрочной перспективе (до 5 лет) деньги должны
              оставаться гибко доступными.
            </li>
            <li>
              Если ипотечные планы практически исключены — тогда{" "}
              <Link href="/investitsii-i-fondy" className={linkClass}>
                инвестиции в фонды
              </Link>{" "}
              или другие формы сбережений обычно более доходны.
            </li>
            <li>
              Если структура тарифа и издержек съедает теоретическое
              преимущество фиксации ставки.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen в сравнении с другими формами сбережений
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Прежде чем рассматривать Bausparvertrag, имеет смысл взглянуть на
            альтернативы:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Tagesgeld / Festgeld:</strong> в краткосрочной перспективе
              гибче, но без функции фиксации ставки.
            </li>
            <li>
              <strong>Регулярные фондовые планы:</strong> более доходны при
              длинном горизонте, но без права на будущий выгодный кредит.
            </li>
            <li>
              <strong>Riester / Wohnriester:</strong> с государственной
              поддержкой, но с собственными ограничениями использования.
            </li>
            <li>
              <strong>Частное пенсионное страхование:</strong> когда на первом
              месте пенсионный аспект, а не ипотечная перспектива.
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Какая форма сбережений правильная именно для вас — и нужен ли
            вообще Bausparen — мы прояснимся на консультации.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen в контексте общего планирования
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Bausparvertrag редко бывает самостоятельным продуктом. Как правило,
            он имеет смысл, только когда вписывается в более широкую стратегию:{" "}
            <Link href="/pensionnoe-obespechenie" className={linkClass}>
              пенсионное обеспечение
            </Link>
            ,{" "}
            <Link href="/ipoteka" className={linkClass}>
              ипотека
            </Link>{" "}
            или формирование капитала для детей. Именно здесь окупается
            личная консультация — вместо того, чтобы изолированно «оформить
            договор», мы вместе выстраиваем концепцию, в которую Bausparvertrag
            встроен (или сознательно нет).
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записаться на встречу
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Вместе выясним, вписывается ли Bausparen в вашу стратегию — или
              другая форма сбережений будет осмысленнее.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записаться
              </a>
              <a href="tel:+4922418989424" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-navy">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Связанные темы
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <Link href="/ipoteka" className={linkClass}>
                Ипотека — обзор
              </Link>
            </li>
            <li>
              <Link href="/pensionnoe-obespechenie" className={linkClass}>
                Планирование пенсии
              </Link>
            </li>
            <li>
              <Link href="/investitsii-i-fondy" className={linkClass}>
                Инвестиции в фонды
              </Link>
            </li>
            <li>
              <Link href="/finansovye-konsultatsii" className={linkClass}>
                Назад к обзору финансовых консультаций
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl border border-navy/10 p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer flex items-start justify-between gap-4 font-semibold text-base md:text-lg">
                  <span>{item.q}</span>
                  <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45 select-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-navy/80">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
