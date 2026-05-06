import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/investitsii-i-fondy";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/geldanlage-investmentfonds`;
const UK_URL = `${SITE_URL}/ua/investytsii-i-fondy`;

const PAGE_TITLE = "Инвестиции и фонды | Формирование капитала в Бонне и Тройсдорфе";
const PAGE_DESCRIPTION =
  "Стратегические инвестиции и формирование капитала через инвестиционные фонды группы Generali — долгосрочно, прозрачно, с личным сопровождением. Консультации на русском и немецком.";
const PAGE_NAME = "Инвестиции и фонды";
const H1 = "Инвестиции и фонды — формирование капитала по системе";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "На какой срок имеет смысл инвестировать в фонды?",
    a: "Акционерные и смешанные фонды оправданы при горизонте инвестирования от 5–7 лет. Более короткие сроки увеличивают риск продавать в слабую фазу рынка.",
  },
  {
    q: "Сколько денег нужно для регулярного фондового плана?",
    a: "Сберегательные планы через Generali возможны уже от 25 € в месяц. Разумные суммы обычно выше — мы обсудим, что подходит к вашему семейному бюджету.",
  },
  {
    q: "Что произойдёт с деньгами, если я расторгну или приостановлю план?",
    a: "Сберегательные планы можно в любой момент приостановить или прекратить, без сроков расторжения. Ваш вложенный капитал остаётся в фонде и может быть продан в любой момент позже.",
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

export default function InvestitsiiPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Инвестиции и фонды
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Капитал растёт не благодаря удаче, а благодаря системе. Тот, кто
            вкладывает деньги долгосрочно, прежде всего решает две вещи:
            правильное соотношение риска и доходности — и дисциплину в нужный
            момент ничего не делать.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Куда вы можете инвестировать через меня
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Через Generali Investments и партнёрские инвестиционные компании
            группы Generali доступны разные классы активов:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Акционерные и смешанные фонды</strong> для долгосрочного
              формирования капитала.
            </li>
            <li>
              <strong>Облигационные и денежные фонды</strong> как стабилизирующая
              составляющая.
            </li>
            <li>
              <strong>Фонды реальных активов</strong> (недвижимость,
              инфраструктура) для защиты от инфляции.
            </li>
            <li>
              <strong>Решения с управляемым портфелем</strong>{" "}
              («Strategiekonzepte»), где аллокация активно управляется.
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Какая комбинация подходит вам, зависит от горизонта инвестирования,
            финансовой устойчивости и инвестиционных целей — а не от того, что
            недавно показало хорошую доходность.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Регулярный план или разовое вложение?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Оба пути имеют своё место. <strong>Регулярный фондовый план</strong>{" "}
            от небольших ежемесячных сумм — классический вход в долгосрочное
            формирование капитала, он сглаживает рыночные колебания со временем.{" "}
            <strong>Разовое вложение</strong> имеет смысл, если у вас уже есть
            ликвидность, которая не понадобится в ближайшее время. Часто
            разумна комбинация: часть капитала вкладывается единовременно, а
            регулярный план её дополняет.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Чего реально можно ожидать
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            За последние 30 лет рынки акций давали в среднем от 6 до 8
            процентов годовой доходности — но не каждый год и не каждое
            десятилетие одинаково. Тем, кому деньги могут понадобиться в
            короткой перспективе, не стоит инвестировать в волатильные активы.
            Тот, у кого есть 10, 20 или 30 лет, с высокой вероятностью
            закроется существенно выше инфляции — при условии, что он
            выдержит.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Мой подход к инвестиционной консультации
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Я не продаю «горячих советов» и модных тем. Мой подход
            консервативен по методу и долгосрочен по перспективе:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Ваше вложение должно подходить к вашей жизненной ситуации — не
              наоборот.
            </li>
            <li>
              Резерв ликвидности и пробелы в защите закрываются до инвестиций.
            </li>
            <li>Структура издержек и прозрачность — приоритет.</li>
            <li>
              Я сопровождаю вас и в турбулентные фазы рынка — потому что
              большинство инвесторов теряет деньги не из-за неверных решений,
              а из-за панических реакций.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Консультация по инвестициям
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Приходите с представлением о том, для чего долгосрочно нужны эти
            деньги — и от чего вы плохо спите ночью. Остальное мы выясним
            вместе.
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
              Обсудим цели, горизонт инвестирования и комбинацию, подходящую
              именно вам.
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
              <Link href="/pensionnoe-obespechenie" className={linkClass}>
                Планирование пенсии
              </Link>
            </li>
            <li>
              <Link href="/bausparen" className={linkClass}>
                Bausparen как альтернатива
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
