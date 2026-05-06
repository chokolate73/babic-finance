import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/finansovi-konsultatsii";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/finanzberatung`;
const RU_URL = `${SITE_URL}/finansovye-konsultatsii`;

const PAGE_TITLE = "Фінансові консультації у Troisdorf та Bonn | Владислав Бабич (DVAG)";
const PAGE_DESCRIPTION =
  "Персональні фінансові консультації у регіоні Rhein-Sieg-Kreis: пенсійне забезпечення, інвестиції, страхування, іпотечне фінансування — українською та німецькою. Перша зустріч — без зобов'язань.";
const PAGE_NAME = "Фінансові консультації";
const H1 = "Фінансові консультації у Troisdorf та Bonn — структуровано, особисто, на роки вперед";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Скільки коштує консультація?",
    a: "Сама консультація для Вас безкоштовна. У разі укладення договору DVAG отримує винагороду від страхової або інвестиційної компанії — вона вже включена у вартість продукту, а не додається понад неї.",
  },
  {
    q: "Чи зобов'язаний я до чогось після першої зустрічі?",
    a: "Ні. Перша зустріч — без зобов'язань. Ви самі вирішуєте, чи рухатись далі та якими саме кроками.",
  },
  {
    q: "Які документи варто взяти на зустріч?",
    a: "Корисно мати: актуальну довідку про пенсійні права (Rentenauskunft), чинні страхові поліси, розрахунковий лист або податкове повідомлення, наявні ощадні чи інвестиційні договори. Якщо нічого з цього під рукою немає — приходьте все одно. Почнемо з інвентаризації.",
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

export default function FinansoviKonsultatsiiPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Фінансові консультації
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Якісне фінансове планування починається не з продуктів, а з Вашої
            конкретної життєвої ситуації. Як фінансовий консультант DVAG я
            супроводжую приватних осіб, родини та підприємців у регіоні
            Rhein-Sieg-Kreis у тих фінансових рішеннях, які справді працюють
            — на роки, а не на квартали.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Що входить до моєї консультації
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Я працюю у чотирьох напрямках, які у більшості родин тісно
            пов'язані, але рідко плануються разом:
          </p>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
                Пенсійне забезпечення
              </Link>
              : державна пенсія, Riester, Rürup, корпоративна пенсія (bAV) та
              приватне пенсійне страхування.
            </li>
            <li>
              <Link href="/ua/investytsii-i-fondy" className={linkClass}>
                Інвестиції та формування капіталу
              </Link>
              : регулярні ощадні плани, разові вкладення та змішані портфелі
              на інвестиційних фондах групи Generali.
            </li>
            <li>
              <Link href="/ua/strakhuvannia" className={linkClass}>
                Страхування
              </Link>
              : страхування на випадок втрати працездатності, приватне
              медичне страхування, страхування життя, догляду, майна,
              цивільної відповідальності та юридичного захисту.
            </li>
            <li>
              <Link href="/ua/ipoteka" className={linkClass}>
                Іпотечне фінансування
              </Link>{" "}
              та{" "}
              <Link href="/ua/bausparen" className={linkClass}>
                Bausparen
              </Link>
              : як елементи Вашої довгострокової фінансової стратегії.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Як я працюю
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Мій процес консультації складається з чотирьох кроків, через які
            я проходжу з кожним клієнтом:
          </p>
          <ol className="space-y-4 text-base md:text-lg leading-relaxed mb-12 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Прояснити ситуацію та цілі.</strong> Що Ви маєте? Чого
              прагнете? Що цьому загрожує?
            </li>
            <li>
              <strong>Виявити прогалини у захисті.</strong> Де реальний ризик,
              а де лише відчутний?
            </li>
            <li>
              <strong>Розробити стратегію.</strong> Які інструменти економічно
              виправдано закриють прогалини?
            </li>
            <li>
              <strong>Впровадити та супроводжувати.</strong> Я залишаюся Вашою
              контактною особою — не лише в день підписання.
            </li>
          </ol>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Консультації українською та німецькою
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Я понад двадцять років консультую клієнтів у Німеччині та особливо
            допомагаю українськомовним родинам і підприємцям орієнтуватися у
            німецькій фінансовій та страховій системі. У питаннях пенсійного
            забезпечення та умов договорів мовна ясність є критично важливою
            — зустрічі та страхові випадки я за бажанням веду українською або
            німецькою мовою.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Чому DVAG та Generali
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Як пов'язаний страховий агент відповідно до § 34d Abs. 7 GewO я
            працюю виключно з продуктами групи Generali Deutschland та
            страхування юридичного захисту ADVOCARD. Це дає чітку перевагу: у
            Вас одна контактна особа з пенсійного забезпечення, інвестицій,
            страхування та юридичного захисту — і я знаю продуктову лінійку
            достатньо глибоко, щоб підбирати справді відповідні рішення, а не
            метатися між постачальниками.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Записатися на першу зустріч
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Перша зустріч — безкоштовна та без зобов'язань. Ми з'ясуємо, чи
            підходимо одне одному, де Ваші пріоритети та які наступні кроки
            мають сенс. Зустрічі в офісі у Troisdorf, відеозв'язком або
            телефоном — у тому числі поза робочими годинами.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Готові до першої зустрічі без зобов'язань?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Українською або німецькою — в офісі, відеозв'язком або
              телефоном.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/4922418989424" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записатися онлайн
              </a>
              <a href="tel:+4922418989424" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Зателефонувати
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-8">
            Поширені запитання
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
