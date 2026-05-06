import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/finansovye-konsultatsii";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/finanzberatung`;
const UK_URL = `${SITE_URL}/ua/finansovi-konsultatsii`;

const PAGE_TITLE = "Финансовые консультации в Тройсдорфе и Бонне | Владислав Бабич (DVAG)";
const PAGE_DESCRIPTION =
  "Персональные финансовые консультации в Рейн-Зиг-Крайс: пенсионное обеспечение, инвестиции, страхование, ипотека — на русском и немецком. Первая встреча — без обязательств.";
const PAGE_NAME = "Финансовые консультации";
const H1 = "Финансовые консультации в Тройсдорфе и Бонне — структурно, лично, на годы вперёд";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Сколько стоит консультация?",
    a: "Сама консультация для вас бесплатна. При заключении договора DVAG получает вознаграждение от страховой или инвестиционной компании — оно уже включено в стоимость продукта, а не добавляется сверху.",
  },
  {
    q: "Должен ли я что-то после первой встречи?",
    a: "Нет. Первая встреча — без обязательств. Вы сами решаете, нужно ли двигаться дальше и какими шагами.",
  },
  {
    q: "Какие документы взять с собой на встречу?",
    a: "Полезно: актуальная справка о пенсионных правах (Rentenauskunft), действующие страховые полисы, расчётный лист или налоговое уведомление, существующие сберегательные или инвестиционные договоры. Если ничего из этого под рукой нет — приходите всё равно. Начнём с инвентаризации.",
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

export default function FinansovyeKonsultatsiiPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Финансовые консультации
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Грамотное финансовое планирование начинается не с продуктов, а с
            вашей конкретной жизненной ситуации. Как финансовый консультант
            DVAG я сопровождаю частных лиц, семьи и предпринимателей в
            Рейн-Зиг-Крайс при тех финансовых решениях, которые действительно
            работают — на годы, а не на кварталы.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Что входит в мою консультацию
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Я работаю в четырёх направлениях, которые в большинстве семей
            тесно связаны, но редко планируются вместе:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <Link href="/pensionnoe-obespechenie" className={linkClass}>
                Пенсионное обеспечение
              </Link>
              : государственная пенсия, Riester, Rürup, корпоративная пенсия
              (bAV) и частное пенсионное страхование.
            </li>
            <li>
              <Link href="/investitsii-i-fondy" className={linkClass}>
                Инвестиции и формирование капитала
              </Link>
              : регулярные сберегательные планы, разовые вложения и смешанные
              портфели на инвестиционных фондах группы Generali.
            </li>
            <li>
              <Link href="/strakhovanie" className={linkClass}>
                Страхование
              </Link>
              : страхование от потери трудоспособности, частное медицинское
              страхование, страхование жизни, ухода, имущества, гражданской
              ответственности и юридической защиты.
            </li>
            <li>
              <Link href="/ipoteka" className={linkClass}>
                Ипотека
              </Link>{" "}
              и{" "}
              <Link href="/bausparen" className={linkClass}>
                Bausparen
              </Link>
              : как элементы вашей долгосрочной финансовой стратегии.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Как я работаю
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Мой процесс консультации состоит из четырёх шагов, через которые я
            прохожу с каждым клиентом:
          </p>
          <ol className="space-y-4 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Прояснить ситуацию и цели.</strong> Что у вас есть? Чего
              вы хотите? Что этому угрожает?
            </li>
            <li>
              <strong>Найти пробелы в защите.</strong> Где реальный риск, а где
              только ощущаемый?
            </li>
            <li>
              <strong>Разработать стратегию.</strong> Какие инструменты
              экономически оправданно закроют пробелы?
            </li>
            <li>
              <strong>Внедрить и сопровождать.</strong> Я остаюсь вашим
              контактным лицом — не только в день подписания.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Консультации на русском и немецком
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Я больше двадцати лет консультирую клиентов в Германии и особенно
            помогаю русскоязычным семьям и предпринимателям ориентироваться в
            немецкой финансовой и страховой системе. В вопросах пенсионного
            обеспечения и договорных условий ясность языка критически важна —
            встречи и страховые случаи я по желанию веду на русском или
            немецком.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Почему DVAG и Generali
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Как связанный страховой агент в соответствии с § 34d Abs. 7 GewO я
            работаю исключительно с продуктами группы Generali Deutschland и
            страхования юридической защиты ADVOCARD. Это даёт чёткое
            преимущество: у вас один контактный человек по пенсионному
            обеспечению, инвестициям, страхованию и юридической защите — а я
            знаю продуктовую линейку достаточно глубоко, чтобы подбирать
            действительно подходящие решения, а не метаться между поставщиками.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Записаться на первую встречу
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Первая встреча — бесплатная и без обязательств. Мы выясним,
            подходим ли мы друг другу, где ваши приоритеты и какие следующие
            шаги имеют смысл. Встречи в офисе в Тройсдорфе, по видео или по
            телефону — в том числе вне рабочих часов.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Готовы к первой встрече без обязательств?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              На русском или немецком — в офисе, по видео или по телефону.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записаться онлайн
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group bg-cream rounded-xl border border-navy/10 p-5 [&_summary::-webkit-details-marker]:hidden">
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
