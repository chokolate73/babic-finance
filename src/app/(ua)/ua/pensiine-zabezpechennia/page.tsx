import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/pensiine-zabezpechennia";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/altersvorsorge`;
const RU_URL = `${SITE_URL}/pensionnoe-obespechenie`;

const PAGE_TITLE = "Пенсійне забезпечення у Troisdorf та Bonn | Riester, Rürup, bAV, приватна пенсія";
const PAGE_DESCRIPTION =
  "Стратегічне пенсійне забезпечення у регіоні Rhein-Sieg-Kreis: Riester, Rürup, корпоративна пенсія (bAV), приватне пенсійне страхування. Особисті консультації українською та німецькою.";
const PAGE_NAME = "Пенсійне забезпечення";
const H1 = "Пенсійне забезпечення у Troisdorf та Bonn — Riester, Rürup, bAV, приватна пенсія";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Коли потрібно починати формувати пенсію?",
    a: "Якомога раніше. Ефект складного відсотка — математично найважливіший чинник у пенсійному забезпеченні: тому, хто починає у 25, для того ж самого підсумкового капіталу потрібно сплачувати лише частку того, що довелося б відкладати 45-річному.",
  },
  {
    q: "Чи має сенс Riester-пенсія загалом?",
    a: "Для родин з дітьми та для працівників з низьким доходом — часто так; для одиноких людей з високим доходом — часто ні. Відповідь завжди з конкретного розрахунку, а не з газетних заголовків.",
  },
  {
    q: "Яка пенсія найкраща?",
    a: "Та, яку Ви реально доведете до кінця — і яка відповідає Вашій життєвій ситуації. У більшості випадків це не один продукт, а поєднання двох чи трьох елементів.",
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

export default function PensiinePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Пенсійне забезпечення
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Державної пенсії більшості не вистачить. Це не думка, а математика
            — і чим раніше Ви цим займетеся, тим спокійніше знаходиться
            рішення. Як фінансовий консультант DVAG я покажу Вашу пенсійну
            прогалину та складу план, який відповідає Вашому доходу,
            життєвій ситуації та родині.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Три рівні німецької пенсійної системи
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Німецька пенсійна система складається з трьох рівнів, кожен з
            яких працює по-своєму:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Державна пенсія, Rürup-пенсія, професійні каси</strong>
              {" "}— державно підтримувана базова складова.
            </li>
            <li>
              <strong>Riester-пенсія та корпоративна пенсія (bAV)</strong> —
              додаткова складова з державною або податковою підтримкою.
            </li>
            <li>
              <strong>Приватне пенсійне страхування, інвестиційні рішення,
              нерухомість</strong> — індивідуальна складова без державного
              регулювання.
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Які рівні мають сенс саме для Вас, залежить від статусу зайнятості,
            податкового класу, сімейного стану та горизонту інвестування.
          </p>

          <h2 id="riester" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Riester-пенсія — для кого вона ще має сенс
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Riester-пенсія роками отримує погану пресу — не безпідставно:
            високі витрати, низька прибутковість, складні умови дотацій. І
            все ж для певних груп вона залишається привабливою: для родин з
            кількома дітьми (надбавки на дітей), для працівників з низьким
            доходом і для молодших співробітників із довгим горизонтом. Я
            чесно прорахую, чи вигідна вона саме у Вашій ситуації — а якщо
            ні, разом подивимося на альтернативи.
          </p>

          <h2 id="ruerup" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Rürup-пенсія (Basisrente) — для самозайнятих та осіб з високим доходом
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            З податкового погляду Rürup-пенсія часто є найефективнішою формою
            забезпечення для самозайнятих та найманих працівників з вищими
            доходами, які не можуть або не хочуть користуватися bAV. Внески
            у значній мірі вираховуються як Sonderausgaben — ефект економії
            на податках може бути суттєвим. Натомість вона негнучка: немає
            одноразової виплати, не можна закласти, лише довічна пенсія. Це
            класичний інструмент «налаштувати й забути».
          </p>

          <h2 id="bav" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Корпоративна пенсія (bAV)
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Якщо Ви працюєте за наймом, bAV часто — Ваш найкращий варіант
            забезпечення, особливо коли роботодавець додає свою частку.
            Через Entgeltumwandlung Ви економите податки та соціальні внески;
            при використанні Generali Pensionskasse як Durchführungsweg
            адміністративні витрати конкурентоспроможні.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Для роботодавців bAV — це бенефіт, який справді доходить до
            співробітника, і адміністративно простіший, ніж багато хто
            думає. Я консультую як працівників щодо їхньої bAV, так і
            роботодавців при впровадженні концепції bAV.
          </p>

          <h2 id="private-rente" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Приватне пенсійне страхування
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Поза державно підтримуваною пенсією класичні та фондові приватні
            пенсійні страховки дають гнучкість, якої немає у Riester та
            Rürup: можна змінювати внески, отримати дострокову виплату або
            вилучити капітал. Вони менше підтримані податково, але вільніші
            у використанні — особливо у поєднанні з фондовими рішеннями це
            перевірений елемент «третього рівня».
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Розрахунок пенсійної прогалини — крок 1
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Перш ніж говорити про продукти, я разом з Вами розрахую конкретну
            пенсійну прогалину: наскільки високою буде Ваша імовірна державна
            пенсія? Скільки Вам знадобиться насправді? Якою є щомісячна
            різниця? Лише на цій основі ми вирішимо, які елементи та за які
            внески мають сенс.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записатися на пенсійний аналіз
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Розрахуємо Вашу пенсійну прогалину та складемо план, що
              відповідає Вашому доходу.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записатися на аналіз
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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
              <Link href="/ua/investytsii-i-fondy" className={linkClass}>
                Інвестиції у фонди
              </Link>
            </li>
            <li>
              <Link href="/ua/strakhuvannia#bu" className={linkClass}>
                Страхування на випадок втрати працездатності
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
