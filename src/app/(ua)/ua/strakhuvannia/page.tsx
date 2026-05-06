import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua/strakhuvannia";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/versicherungen`;
const RU_URL = `${SITE_URL}/strakhovanie`;

const PAGE_TITLE = "Страхування у Troisdorf та Bonn | BU, PKV, Hausrat, юридичний захист";
const PAGE_DESCRIPTION =
  "Особисті консультації зі страхування на випадок втрати працездатності, приватного медичного страхування, страхування життя, майна, відповідальності та юридичного захисту у регіоні Rhein-Sieg-Kreis. Українською та німецькою.";
const PAGE_NAME = "Страхування";
const H1 = "Страхування у Troisdorf та Bonn — те, що Вам справді потрібно";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Яке страхування оформлювати у першу чергу?",
    a: "Страхування цивільної відповідальності (Privathaftpflicht), потім страхування на випадок втрати працездатності (BU), далі — залежно від ситуації — Hausrat або Risikoleben. У такому порядку найважливіші ризики покриті за порівняно низьких витрат.",
  },
  {
    q: "Що буде, якщо я зміню професію?",
    a: "Договори BU у принципі не залежать від професії. Однак при укладенні договору професія впливає на розмір внеску — при переході у «вигіднішу» професію має сенс повідомити про це страхову компанію.",
  },
  {
    q: "Чи можна отримати консультацію українською мовою?",
    a: "Так. Консультації, роз'яснення договорів та супровід страхових випадків за бажанням ведуться українською — це дозволяє уникнути непорозумінь у важливих пунктах договору.",
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

export default function StrakhuvanniaPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Страхування
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Найважливіша страховка — не найдорожча, а та, яка Вам справді
            потрібна і яка у страховому випадку реально сплачує. Як страховий
            консультант DVAG у регіоні Rhein-Sieg-Kreis я разом з Вами
            розберу, що потрібно справді захистити, де у Вас надмірне
            страхування, а де зяє прогалина, що у серйозному випадку може
            загрожувати Вашому існуванню.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Які страховки я оформлюю
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Через групу Generali Deutschland та страхування юридичного
            захисту ADVOCARD (партнер DVAG) я покриваю спектр страхування для
            приватних осіб та родин:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Захист існування
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Страхування на випадок втрати працездатності (BU)</strong>{" "}
              — найважливіший захист доходу взагалі.
            </li>
            <li>
              <strong>Страхування життя на випадок смерті (Risikoleben)</strong>{" "}
              — фінансовий захист родини у випадку смерті.
            </li>
            <li>
              <strong>Приватне медичне страхування (PKV)</strong> — через
              Central Krankenversicherung (дочірню компанію Generali).
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Майно та повсякденне життя
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Страхування майна (Hausrat)</strong> — крадіжка, пожежа,
              вода, шторм.
            </li>
            <li>
              <strong>Страхування приватної цивільної відповідальності
              (Privathaftpflicht)</strong> — найважливіше та водночас
              найдешевше страхування для кожного дорослого.
            </li>
            <li>
              <strong>Страхування житлового будинку (Wohngebäude)</strong> —
              для власників.
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Юридичний захист та догляд
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Юридичний захист (Rechtsschutz)</strong> через
              ADVOCARD — транспорт, професія, оренда, договірне право.
            </li>
            <li>
              <strong>Додаткове страхування на догляд (Pflegezusatz)</strong>{" "}
              — для покриття прогалини державного страхування на догляд.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Що справді важливо — а що ні
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Страхування у Німеччині традиційно надто багато продається й
            замало аналізується. Мої практичні правила:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Справді важливо (екзистенційні ризики)
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>BU — найбільший ризик втрати доходу.</li>
            <li>
              Privathaftpflicht — суми відшкодування збитків можуть сягати
              мільйонів.
            </li>
            <li>
              Risikoleben, якщо є родина або іпотечний кредит.
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Важливо для якості життя
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>Hausrat (особливо у міських квартирах із ризиком крадіжки).</li>
            <li>Юридичний захист (транспорт і професія).</li>
            <li>Pflegezusatz (чим раніше, тим дешевше).</li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Часто надмірне страхування
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>Дрібні майнові страховки на низьку суму.</li>
            <li>Додаткові модулі, що вже включені в інші договори.</li>
            <li>«Allgefahrendeckung» на недорогу побутову техніку.</li>
          </ul>

          <h2 id="bu" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Страхування на випадок втрати працездатності (BU)
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Статистично кожен четвертий працівник втрачає працездатність до
            пенсійного віку. Державної пенсії з непрацездатності
            (Erwerbsminderungsrente) у переважній більшості випадків не
            вистачає на життя. Приватна BU закриває цю прогалину — але лише
            якщо поліс правильно сконструйований: страхова сума, кінцевий
            вік, гарантія додаткового страхування (Nachversicherungsgarantie),
            відмова від абстрактного посилання (abstrakte Verweisung). Я
            чесно консультую щодо тарифів BU групи Generali, включно з
            медичним обстеженням, стратегією подачі заяви та обсягом послуг.
          </p>

          <h2 id="pkv" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Приватне медичне страхування (PKV) — рішення на десятиліття
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Перехід з державного на приватне медичне страхування — одне з
            найбільш далекосяжних фінансових рішень узагалі, і одна з
            найпоширеніших помилок. Не всім, хто має право перейти, справді
            варто це робити. Планування родини, зростання внесків у літньому
            віці та стратегії власної участі (Selbstbehalt) — головні
            питання, через які ми проходимо перед будь-якою рекомендацією.
            Консультація щодо тарифів Central Krankenversicherung як
            ексклюзивного партнера Generali.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Підхід до консультації та compliance
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Як пов'язаний страховий агент відповідно до § 34d Abs. 7 GewO я
            працюю виключно для групи Generali та ADVOCARD. Це означає: я не
            порівнюю весь ринок, а рекомендую з продуктової лінійки цих
            компаній. Перевага для Вас: одна контактна особа з усього
            пенсійного та страхового забезпечення — і я знаю продуктову
            лінійку достатньо глибоко, щоб знаходити рішення, які справді
            підходять.
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
              Перевіримо Ваш страховий пакет і закриємо ті прогалини, які
              справді важливі.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записатися
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
              <Link href="/ua/pensiine-zabezpechennia" className={linkClass}>
                Пенсійне забезпечення та Pflegezusatz
              </Link>
            </li>
            <li>
              <Link href="/ua/ipoteka" className={linkClass}>
                Захист житлового будинку та іпотека
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
