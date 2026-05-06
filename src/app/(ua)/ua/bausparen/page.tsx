import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/bausparen";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/bausparen`;
const RU_URL = `${SITE_URL}/bausparen`;

const PAGE_TITLE = "Bausparen — коли будівельний ощадний договір має сенс";
const PAGE_DESCRIPTION =
  "Bausparen у правильному контексті: коли Bausparvertrag вписується у Вашу фінансову стратегію, а коли ні. У зв'язці з пенсійним забезпеченням та іпотекою. Bonn та Troisdorf.";
const PAGE_NAME = "Bausparen";
const H1 = "Bausparen — коли він вписується у Вашу фінансову стратегію";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Чи має сенс Bausparen, якщо конкретних планів на нерухомість поки немає?",
    a: "З обмеженнями. Якщо можливість придбати нерухомість через 10–20 років існує, договір може слугувати фіксацією ставки. Якщо така перспектива практично виключена, інші форми заощаджень зазвичай доцільніші.",
  },
  {
    q: "Чим Bausparen відрізняється від регулярного фондового плану?",
    a: "Фондовий план націлений на прибутковість, Bausparvertrag — на майбутнє вигідне фінансування. Обидві форми — довгострокові, але з різною метою, і вони не виключають одна одну.",
  },
  {
    q: "Що буде, якщо у підсумку я не візьму Bauspar-кредит?",
    a: "Ви зберігаєте накопичений залишок з нарахованими відсотками. Перевагою вигідного Bauspar-кредиту Ви не скористаєтеся — що цілком нормально, якщо ринкові ставки на момент Zuteilung виявляться нижчими.",
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

export default function BausparenUaPage() {
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
            Bausparen — не самоціль і не застарілий продукт. Це інструмент,
            який в одних життєвих ситуаціях працює, а в інших — ні. Чи має
            Bausparvertrag сенс саме для Вас, виводиться не з рекламного
            буклета, а з Вашої конкретної життєвої та фінансової ситуації.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Що Bausparen дає сьогодні
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Bausparvertrag виконує дві функції, які варто розглядати окремо:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Фаза накопичення:</strong> структуроване накопичення з
              гарантованою ставкою за заощадженнями, залежно від тарифу
              доповнене Wohnungsbauprämie або Arbeitnehmer-Sparzulage.
            </li>
            <li>
              <strong>Фаза кредиту:</strong> право на Bauspar-кредит за
              ставкою, зафіксованою вже сьогодні.
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            У фазі низьких ставок Bausparen був непривабливим, оскільки
            гарантована ставка Bauspar-кредиту майже не відрізнялася від
            ринкової. У фазі зростаючих або високих ставок Bausparen як
            довгострокова фіксація ставки знову стає цікавим — насамперед
            для молодих заощаджувачів з конкретними або можливими іпотечними
            планами на 10–15 років.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Коли Bausparen розумно вписується
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            З погляду консультації можна виділити три ситуації, у яких
            Bausparvertrag вписується у ширшу стратегію:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Захистити рефінансування.</strong> Той, хто через 8–12
              років очікує закінчення{" "}
              <Link href="/ua/ipoteka" className={linkClass}>
                первинної іпотеки
              </Link>
              , може за допомогою Bausparvertrag довгостроково зафіксувати
              ставку рефінансування.
            </li>
            <li>
              <strong>Молоді заощаджувачі з перспективою власного житла.</strong>{" "}
              Той, хто у 25–30 років збирає на майбутню купівлю будинку,
              виграє від тривалого терміну накопичення та фіксації ставки
              майбутнього Bauspar-кредиту.
            </li>
            <li>
              <strong>Розумно використати Vermögenswirksame Leistungen.</strong>{" "}
              VL від роботодавця можна через Bausparverträge з
              Wohnungsbauprämie або Arbeitnehmer-Sparzulage оптимізувати
              податково.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Коли Bausparen радше не підходить
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Не менш важлива чесна відповідь, коли Bausparvertrag у фінансовій
            стратегії радше шкодить, аніж допомагає:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              Якщо у короткостроковій перспективі (до 5 років) кошти мають
              залишатися гнучко доступними.
            </li>
            <li>
              Якщо іпотечні плани практично виключені — тоді{" "}
              <Link href="/ua/investytsii-i-fondy" className={linkClass}>
                інвестиції у фонди
              </Link>{" "}
              або інші форми заощаджень зазвичай більш дохідні.
            </li>
            <li>
              Якщо структура тарифу та витрат поглинає теоретичну перевагу
              фіксації ставки.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen у порівнянні з іншими формами заощаджень
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Перш ніж розглядати Bausparvertrag, варто поглянути на
            альтернативи:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Tagesgeld / Festgeld:</strong> у короткостроковій
              перспективі гнучкіше, але без функції фіксації ставки.
            </li>
            <li>
              <strong>Регулярні фондові плани:</strong> більш дохідні за
              довгого горизонту, але без права на майбутній вигідний кредит.
            </li>
            <li>
              <strong>Riester / Wohnriester:</strong> з державною підтримкою,
              але з власними обмеженнями використання.
            </li>
            <li>
              <strong>Приватне пенсійне страхування:</strong> коли на першому
              місці пенсійний аспект, а не іпотечна перспектива.
            </li>
          </ul>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Яка форма заощаджень правильна саме для Вас — і чи потрібен
            взагалі Bausparen — з'ясуємо на консультації.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Bausparen у контексті загального планування
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Bausparvertrag рідко є самостійним продуктом. Як правило, він має
            сенс лише тоді, коли вписується у ширшу стратегію:{" "}
            <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
              пенсійне забезпечення
            </Link>
            ,{" "}
            <Link href="/ua/ipoteka" className={linkClass}>
              іпотека
            </Link>{" "}
            або формування капіталу для дітей. Саме тут окуповується особиста
            консультація — замість того, щоб ізольовано «оформити договір»,
            ми разом вибудовуємо концепцію, у яку Bausparvertrag вбудований
            (або свідомо ні).
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
              Разом з'ясуємо, чи вписується Bausparen у Вашу стратегію — або
              інша форма заощаджень буде доцільнішою.
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
              <Link href="/ua/ipoteka" className={linkClass}>
                Іпотечне фінансування — огляд
              </Link>
            </li>
            <li>
              <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
                Планування пенсії
              </Link>
            </li>
            <li>
              <Link href="/ua/investytsii-i-fondy" className={linkClass}>
                Інвестиції у фонди
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
