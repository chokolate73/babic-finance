import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ipoteka";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/immobilienfinanzierung`;
const UK_URL = `${SITE_URL}/ua/ipoteka`;

const PAGE_TITLE = "Ипотека — стратегическая ориентация в Бонне и Тройсдорфе";
const PAGE_DESCRIPTION =
  "Стратегическая ориентация перед ипотечным решением: погашение, фиксация ставки, собственный капитал, риск рефинансирования — в контексте вашего общего финансового планирования. На русском и немецком.";
const PAGE_NAME = "Ипотека";
const H1 = "Ипотека — стратегическое встраивание в ваше финансовое планирование";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Оформляете ли вы ипотечные кредиты напрямую?",
    a: "Главное в моей консультации — стратегическое встраивание ваших ипотечных планов в общее финансовое планирование. Конкретные кредитные предложения оформляются через специализированных банковских партнёров — я по желанию сопровождаю вас до и после.",
  },
  {
    q: "Когда стоит начинать думать о рефинансировании (Anschlussfinanzierung)?",
    a: "Не позднее чем за 5 лет до окончания фиксации ставки. Forward-кредиты могут зафиксировать ставку рефинансирования за годы вперёд, часто с обозримой надбавкой.",
  },
  {
    q: "Делать дополнительные погашения или лучше инвестировать?",
    a: "Это зависит от ставки по ипотеке, горизонта инвестирования и вашей готовности к риску. При низкой ставке часто математически выгоднее инвестировать в более доходные активы; при высокой ставке дополнительное погашение — «безопасный» путь. Считаем вместе.",
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

export default function IpotekaPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Ипотека
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Финансирование недвижимости меняет не только ваш баланс — оно
            меняет всё ваше финансовое пространство. Ликвидность, возможности
            пенсионного обеспечения, потребности в страховании, налоговый
            статус: всё это зависит от модели финансирования. Прежде чем
            сравнивать конкретные предложения банков, имеет смысл выстроить
            стратегические ориентиры.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Что стоит прояснить до разговора с банком
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Прежде чем принимать конкретные предложения по финансированию,
            есть вопросы, на которые нужно ответить в первую очередь:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              Какая недвижимость реально подходит к вашему доходу — сегодня и
              через 10 лет?
            </li>
            <li>
              Какой собственный капитал стоит внести, не жертвуя резервом
              ликвидности?
            </li>
            <li>
              Какая стратегия погашения подходит вашему жизненному пути?
            </li>
            <li>
              Как финансирование меняет вашу пенсионную ситуацию и потребность
              в страховании?
            </li>
            <li>
              Какие риски нужно дополнительно застраховать (Risikoleben, BU,
              Wohngebäude)?
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Эти вопросы ни в одном разговоре с банком не получат честного
            ответа — банк продаёт кредиты, а не общую картину.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Главные рычаги в обзоре
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            При финансировании недвижимости важны не только ставка и платёж,
            но и взаимодействие нескольких параметров:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Ставка погашения (Tilgungssatz)</strong> определяет, как
              быстро вы выйдете из долгов.
            </li>
            <li>
              <strong>Срок фиксации ставки (Zinsbindung)</strong> (10, 15 или
              20 лет) задаёт ваш риск рефинансирования.
            </li>
            <li>
              <strong>Опции досрочного погашения (Sondertilgung)</strong> дают
              гибкость при бонусах или наследстве.
            </li>
            <li>
              <strong>Forward-кредит</strong> может зафиксировать ставку
              рефинансирования за годы вперёд.
            </li>
            <li>
              <Link href="/bausparen" className={linkClass}>
                Bausparen-договоры
              </Link>{" "}
              остаются актуальным элементом стратегии финансирования — прежде
              всего для фиксации ставки на этапе рефинансирования.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Собственный капитал, побочные расходы и ликвидность
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Классическое банковское правило: 20–30 % собственного капитала.
            Реальность в большинстве семей: заметно меньше. На консультации
            мы вместе посмотрим, какой объём собственного капитала
            экономически разумен — и какой ликвидный резерв должен остаться.
            Недвижимость, при которой каждый ремонт вынуждает брать
            потребительский кредит, не финансируется надёжно.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Не забывайте и побочные расходы при покупке: налог на
            приобретение земли (Grunderwerbsteuer, в NRW 6,5 %), расходы на
            нотариуса и реестр (около 2 %), комиссия маклера (в NRW обычно
            3,57 % с покупателя) — суммарно быстро 12 % от цены покупки.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Как ипотечное решение влияет на пенсионное обеспечение
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Недвижимость может быть элементом пенсионного обеспечения — но
            она не заменяет другие формы, а дополняет их. Тот, кто 30 лет
            направляет большую часть дохода на погашение и параллельно не
            формирует пенсию, на пенсии имеет дом и не имеет ликвидности.
            Меняется и потребность в страховании: Risikoleben для покрытия
            долга, страхование жилого здания, при необходимости BU для
            покрытия ежемесячного платежа.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Именно эти связи мы прорабатываем на консультации — до того, как
            вы примете решение, которое будет с вами 20 или 30 лет.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Стратегическая ориентация вместо сравнения продуктов
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Мой фокус — не сравнение банков, для этого лучше подходят
            онлайн-платформы и специализированные посредники. Мой вклад
            раньше: в стратегическом прояснении, подходят ли ваши ипотечные
            планы к общей ситуации, какой масштаб экономически реалистичен и
            как решение скажется на пенсионном обеспечении, страховании и
            ликвидности.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Когда вы идёте на разговор с банком с такой ясностью — вы
            принимаете лучшие решения.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записаться на ипотечный check
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Стратегическая ориентация до разговора с банком — в контексте
              вашего общего финансового планирования.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записаться на check
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
              <Link href="/bausparen" className={linkClass}>
                Bausparen как стратегический элемент
              </Link>
            </li>
            <li>
              <Link href="/strakhovanie" className={linkClass}>
                Risikoleben и защита жилого здания
              </Link>
            </li>
            <li>
              <Link href="/pensionnoe-obespechenie" className={linkClass}>
                Пенсионное обеспечение в контексте
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
