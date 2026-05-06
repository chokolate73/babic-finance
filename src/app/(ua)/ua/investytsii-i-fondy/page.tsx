import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/investytsii-i-fondy";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/geldanlage-investmentfonds`;
const RU_URL = `${SITE_URL}/investitsii-i-fondy`;

const PAGE_TITLE = "Інвестиції та фонди | Формування капіталу у Bonn та Troisdorf";
const PAGE_DESCRIPTION =
  "Стратегічні інвестиції та формування капіталу через інвестиційні фонди групи Generali — довгостроково, прозоро, з особистим супроводом. Консультації українською та німецькою.";
const PAGE_NAME = "Інвестиції та фонди";
const H1 = "Інвестиції та фонди — формування капіталу за системою";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "На який термін має сенс інвестувати у фонди?",
    a: "Акційні та змішані фонди виправдані за горизонту інвестування від 5–7 років. Коротші терміни підвищують ризик продавати у слабку фазу ринку.",
  },
  {
    q: "Скільки коштів потрібно для регулярного фондового плану?",
    a: "Ощадні плани через Generali можливі вже від 25 € на місяць. Розумні суми зазвичай вищі — обговоримо, що відповідає Вашому сімейному бюджету.",
  },
  {
    q: "Що буде з коштами, якщо я розірву чи призупиню план?",
    a: "Ощадні плани можна у будь-який момент призупинити або припинити, без термінів розірвання. Ваш вкладений капітал залишається у фонді й може бути проданий у будь-який момент пізніше.",
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

export default function InvestytsiiPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Інвестиції та фонди
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Капітал зростає не завдяки везінню, а завдяки системі. Той, хто
            вкладає кошти довгостроково, передусім вирішує дві речі: правильне
            співвідношення ризику та прибутковості — і дисципліну в потрібний
            момент нічого не робити.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Куди Ви можете інвестувати через мене
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Через Generali Investments та партнерські інвестиційні компанії
            групи Generali доступні різні класи активів:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Акційні та змішані фонди</strong> для довгострокового
              формування капіталу.
            </li>
            <li>
              <strong>Облігаційні та грошові фонди</strong> як стабілізаційна
              складова.
            </li>
            <li>
              <strong>Фонди реальних активів</strong> (нерухомість,
              інфраструктура) для захисту від інфляції.
            </li>
            <li>
              <strong>Рішення з керованим портфелем</strong>{" "}
              («Strategiekonzepte»), де алокація активно керується.
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Яка комбінація підходить Вам, залежить від горизонту інвестування,
            фінансової стійкості та інвестиційних цілей — а не від того, що
            нещодавно показало добру прибутковість.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Регулярний план чи разове вкладення?
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Обидва шляхи мають своє місце. <strong>Регулярний фондовий план</strong>{" "}
            від невеликих щомісячних сум — класичний вхід у довгострокове
            формування капіталу, він згладжує ринкові коливання з часом.{" "}
            <strong>Разове вкладення</strong> має сенс, якщо у Вас уже є
            ліквідність, яка не знадобиться найближчим часом. Часто розумна
            комбінація: частина капіталу вкладається одноразово, а
            регулярний план її доповнює.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Чого реально можна очікувати
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            За останні 30 років ринки акцій давали в середньому від 6 до 8
            відсотків річної прибутковості — але не щороку й не кожне
            десятиліття однаково. Тим, кому кошти можуть знадобитися
            короткостроково, не варто інвестувати у волатильні активи. Той,
            хто має 10, 20 чи 30 років, з високою імовірністю закриється
            суттєво вище інфляції — за умови, що він витримає.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Мій підхід до інвестиційної консультації
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Я не продаю «гарячих порад» і модних тем. Мій підхід
            консервативний за методом і довгостроковий за перспективою:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Ваше вкладення має відповідати Вашій життєвій ситуації — а не
              навпаки.
            </li>
            <li>
              Резерв ліквідності та прогалини в захисті закриваються до
              інвестицій.
            </li>
            <li>Структура витрат та прозорість — пріоритет.</li>
            <li>
              Я супроводжую Вас і у турбулентні фази ринку — адже більшість
              інвесторів втрачає кошти не через хибні рішення, а через
              панічні реакції.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Консультація з інвестицій
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Приходьте з уявленням про те, для чого довгостроково потрібні ці
            кошти — і від чого Ви погано спите вночі. Решту з'ясуємо разом.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записатися на зустріч
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Обговоримо цілі, горизонт інвестування та комбінацію, що
              підходить саме Вам.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записатися
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
              <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
                Планування пенсії
              </Link>
            </li>
            <li>
              <Link href="/ua/bausparen" className={linkClass}>
                Bausparen як альтернатива
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
