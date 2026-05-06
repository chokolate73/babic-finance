import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/ipoteka";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/immobilienfinanzierung`;
const RU_URL = `${SITE_URL}/ipoteka`;

const PAGE_TITLE = "Іпотечне фінансування — стратегічна орієнтація у Bonn та Troisdorf";
const PAGE_DESCRIPTION =
  "Стратегічна орієнтація перед іпотечним рішенням: погашення, фіксація ставки, власний капітал, ризик рефінансування — у контексті Вашого загального фінансового планування. Українською та німецькою.";
const PAGE_NAME = "Іпотечне фінансування";
const H1 = "Іпотечне фінансування — стратегічне вбудовування у Ваше фінансове планування";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Чи оформлюєте Ви іпотечні кредити безпосередньо?",
    a: "Головне у моїй консультації — стратегічне вбудовування Ваших іпотечних планів у загальне фінансове планування. Конкретні кредитні пропозиції оформлюються через спеціалізованих банківських партнерів — за бажанням я супроводжую Вас до й після.",
  },
  {
    q: "Коли варто починати думати про рефінансування (Anschlussfinanzierung)?",
    a: "Не пізніше ніж за 5 років до закінчення фіксації ставки. Forward-кредити можуть зафіксувати ставку рефінансування за роки наперед, часто з прийнятною надбавкою.",
  },
  {
    q: "Робити додаткові погашення чи краще інвестувати?",
    a: "Це залежить від ставки за іпотекою, горизонту інвестування та Вашої готовності до ризику. За низької ставки часто математично вигідніше інвестувати у дохідніші активи; за вищої ставки додаткове погашення — «безпечний» шлях. Рахуємо разом.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
    languages: {
      uk: CANONICAL,
      de: DE_URL,
      ru: RU_URL,
      "x-default": DE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    alternateLocale: ["de_DE", "ru_RU"],
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
        { "@type": "ListItem", position: 1, name: "Головна", item: `${SITE_URL}/ua` },
        { "@type": "ListItem", position: 2, name: PAGE_NAME, item: CANONICAL },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      inLanguage: "uk-UA",
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

export default function IpotekaUaPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Іпотечне фінансування
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Фінансування нерухомості змінює не лише Ваш баланс — воно змінює
            весь Ваш фінансовий простір. Ліквідність, можливості пенсійного
            забезпечення, потреби у страхуванні, податковий статус: усе це
            залежить від моделі фінансування. Перш ніж порівнювати конкретні
            пропозиції банків, варто вибудувати стратегічні орієнтири.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Що варто прояснити до розмови з банком
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Перш ніж приймати конкретні пропозиції з фінансування, є питання,
            на які потрібно відповісти у першу чергу:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              Яка нерухомість реально відповідає Вашому доходу — сьогодні і
              через 10 років?
            </li>
            <li>
              Який власний капітал варто внести, не жертвуючи резервом
              ліквідності?
            </li>
            <li>Яка стратегія погашення відповідає Вашому життєвому шляху?</li>
            <li>
              Як фінансування змінює Вашу пенсійну ситуацію та потребу у
              страхуванні?
            </li>
            <li>
              Які ризики потрібно додатково застрахувати (Risikoleben, BU,
              Wohngebäude)?
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            На ці питання у жодній розмові з банком не отримати чесної
            відповіді — банк продає кредити, а не загальну картину.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Головні важелі в огляді
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            При фінансуванні нерухомості важливі не лише ставка та платіж, а
            й взаємодія кількох параметрів:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Ставка погашення (Tilgungssatz)</strong> визначає, як
              швидко Ви вийдете з боргів.
            </li>
            <li>
              <strong>Термін фіксації ставки (Zinsbindung)</strong> (10, 15
              або 20 років) задає Ваш ризик рефінансування.
            </li>
            <li>
              <strong>Опції дострокового погашення (Sondertilgung)</strong>{" "}
              дають гнучкість при бонусах або спадщині.
            </li>
            <li>
              <strong>Forward-кредит</strong> може зафіксувати ставку
              рефінансування за роки наперед.
            </li>
            <li>
              <Link href="/ua/bausparen" className={linkClass}>
                Bausparen-договори
              </Link>{" "}
              залишаються актуальним елементом стратегії фінансування —
              насамперед для фіксації ставки на етапі рефінансування.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Власний капітал, побічні витрати та ліквідність
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Класичне банківське правило: 20–30 % власного капіталу. Реальність
            у більшості родин: помітно менше. На консультації ми разом
            подивимося, який обсяг власного капіталу економічно розумний — і
            який ліквідний резерв має залишитися. Нерухомість, при якій
            кожен ремонт змушує брати споживчий кредит, не фінансується
            надійно.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Не забувайте і побічні витрати при купівлі: податок на придбання
            землі (Grunderwerbsteuer, у NRW 6,5 %), витрати на нотаріуса та
            реєстр (близько 2 %), комісія маклера (у NRW зазвичай 3,57 % з
            покупця) — сумарно швидко 12 % від ціни купівлі.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Як іпотечне рішення впливає на пенсійне забезпечення
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Нерухомість може бути елементом пенсійного забезпечення — але
            вона не замінює інші форми, а доповнює їх. Той, хто 30 років
            спрямовує більшу частину доходу на погашення і паралельно не
            формує пенсію, на пенсії має дім і не має ліквідності.
            Змінюється і потреба у страхуванні: Risikoleben для покриття
            боргу, страхування житлового будинку, за необхідності BU для
            покриття щомісячного платежу.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Саме ці зв'язки ми опрацьовуємо на консультації — до того, як Ви
            ухвалите рішення, що буде з Вами 20 чи 30 років.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Стратегічна орієнтація замість порівняння продуктів
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Мій фокус — не порівняння банків, для цього краще підходять
            онлайн-платформи та спеціалізовані посередники. Мій внесок
            раніше: у стратегічному проясненні, чи відповідають Ваші
            іпотечні плани загальній ситуації, який масштаб економічно
            реалістичний і як рішення вплине на пенсійне забезпечення,
            страхування та ліквідність.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Коли Ви йдете на розмову з банком з такою ясністю — Ви ухвалюєте
            кращі рішення.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записатися на іпотечний check
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Стратегічна орієнтація до розмови з банком — у контексті
              Вашого загального фінансового планування.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записатися на check
              </a>
              <a href="tel:+4922418989424" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Зателефонувати
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-navy">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-3">
            Пов'язані теми
          </p>
          <ul className="space-y-2 text-base md:text-lg">
            <li>
              <Link href="/ua/bausparen" className={linkClass}>
                Bausparen як стратегічний елемент
              </Link>
            </li>
            <li>
              <Link href="/ua/strakhuvannia" className={linkClass}>
                Risikoleben та захист житлового будинку
              </Link>
            </li>
            <li>
              <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
                Пенсійне забезпечення в контексті
              </Link>
            </li>
            <li>
              <Link href="/ua/finansovi-konsultatsii" className={linkClass}>
                Назад до огляду фінансових консультацій
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Поширені запитання
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
