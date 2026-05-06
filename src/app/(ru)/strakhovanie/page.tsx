import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/strakhovanie";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/versicherungen`;
const UK_URL = `${SITE_URL}/ua/strakhuvannia`;

const PAGE_TITLE = "Страхование в Тройсдорфе и Бонне | BU, PKV, Hausrat, юридическая защита";
const PAGE_DESCRIPTION =
  "Личные консультации по страхованию от потери трудоспособности, частному медицинскому страхованию, страхованию жизни, имущества, ответственности и юридической защите в Рейн-Зиг-Крайс. На русском и немецком.";
const PAGE_NAME = "Страхование";
const H1 = "Страхование в Тройсдорфе и Бонне — то, что вам действительно нужно";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Какую страховку оформлять в первую очередь?",
    a: "Страхование гражданской ответственности (Privathaftpflicht), затем страхование от потери трудоспособности (BU), потом — в зависимости от ситуации — Hausrat или Risikoleben. В таком порядке самые важные риски покрыты при сравнительно низких затратах.",
  },
  {
    q: "Что произойдёт, если я сменю профессию?",
    a: "Договоры BU в принципе не зависят от профессии. Однако при заключении договора профессия влияет на размер взноса — при переходе в «более выгодную» профессию имеет смысл сообщить об этом страховой компании.",
  },
  {
    q: "Можно ли получить консультацию на русском языке?",
    a: "Да. Консультации, разъяснение договоров и сопровождение страховых случаев по желанию ведутся на русском — это позволяет избежать недоразумений в важных пунктах договора.",
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

export default function StrakhovaniePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Страхование
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Самая важная страховка — не самая дорогая, а та, которая вам
            действительно нужна и которая в страховом случае реально платит.
            Как страховой консультант DVAG в Рейн-Зиг-Крайс я вместе с вами
            разберу, что нужно действительно защитить, где у вас избыточная
            страховка, а где зияет пробел, который в серьёзном случае может
            угрожать существованию.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Какие страховки я оформляю
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Через группу Generali Deutschland и страхование юридической
            защиты ADVOCARD (партнёр DVAG) я покрываю спектр страхования для
            частных лиц и семей:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Защита существования
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Страхование от потери трудоспособности (BU)</strong> —
              самая важная защита дохода вообще.
            </li>
            <li>
              <strong>Страхование жизни на случай смерти (Risikoleben)</strong>{" "}
              — финансовая защита семьи в случае смерти.
            </li>
            <li>
              <strong>Частное медицинское страхование (PKV)</strong> — через
              Central Krankenversicherung (дочернюю компанию Generali).
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Имущество и повседневная жизнь
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-8 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Страхование имущества (Hausrat)</strong> — кража, пожар,
              вода, шторм.
            </li>
            <li>
              <strong>Страхование частной гражданской ответственности
              (Privathaftpflicht)</strong> — самая важная и одновременно самая
              недорогая страховка для каждого взрослого.
            </li>
            <li>
              <strong>Страхование жилого здания (Wohngebäude)</strong> — для
              собственников.
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Юридическая защита и уход
          </h3>
          <ul className="space-y-3 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>
              <strong>Юридическая защита (Rechtsschutz)</strong> через
              ADVOCARD — транспорт, профессия, аренда, договорное право.
            </li>
            <li>
              <strong>Дополнительное страхование на уход (Pflegezusatz)</strong>{" "}
              — для покрытия пробела государственного страхования по уходу.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Что действительно важно — а что нет
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Страхование в Германии традиционно слишком много продаётся и
            слишком мало анализируется. Мои практические правила:
          </p>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Действительно важно (риски существования)
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>BU — самый большой риск потери дохода.</li>
            <li>
              Privathaftpflicht — суммы возмещения ущерба могут уходить в
              миллионы.
            </li>
            <li>
              Risikoleben, если есть семья или ипотечный кредит.
            </li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Важно для качества жизни
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-6 list-disc pl-6 marker:text-gold">
            <li>Hausrat (особенно в городских квартирах с риском кражи).</li>
            <li>Юридическая защита (транспорт и профессия).</li>
            <li>Pflegezusatz (чем раньше, тем дешевле).</li>
          </ul>

          <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold mb-3 mt-6">
            Часто избыточная страховка
          </h3>
          <ul className="space-y-2 text-base md:text-lg leading-relaxed mb-12 list-disc pl-6 marker:text-gold">
            <li>Мелкие имущественные страховки на низкую сумму.</li>
            <li>Дополнительные модули, уже включённые в другие договоры.</li>
            <li>«Allgefahrendeckung» на недорогие приборы.</li>
          </ul>

          <h2 id="bu" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Страхование от потери трудоспособности (BU)
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Статистически каждый четвёртый работник теряет трудоспособность
            до пенсионного возраста. Государственная пенсия по нетрудоспособности
            (Erwerbsminderungsrente) в подавляющем большинстве случаев не
            хватает на жизнь. Частная BU закрывает этот пробел — но только
            если полис правильно сконструирован: страховая сумма, конечный
            возраст, гарантия дополнительного страхования (Nachversicherungsgarantie),
            отказ от абстрактной отсылки (abstrakte Verweisung). Я честно
            консультирую по тарифам BU группы Generali, включая медицинское
            обследование, стратегию подачи заявления и объём услуг.
          </p>

          <h2 id="pkv" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Частное медицинское страхование (PKV) — решение на десятилетия
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Переход с государственного на частное медицинское страхование —
            одно из самых далеко идущих финансовых решений вообще, и одна из
            самых частых ошибок. Не всем, кто имеет право перейти, действительно
            стоит это делать. Планирование семьи, рост взносов в пожилом
            возрасте и стратегии собственного участия (Selbstbehalt) — главные
            вопросы, через которые мы проходим перед любой рекомендацией.
            Консультация по тарифам Central Krankenversicherung как
            эксклюзивного партнёра Generali.
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Подход к консультации и compliance
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Как связанный страховой агент в соответствии с § 34d Abs. 7 GewO
            я работаю исключительно для группы Generali и ADVOCARD. Это
            значит: я не сравниваю весь рынок, а рекомендую из продуктовой
            линейки этих компаний. Преимущество для вас: один контактный
            человек по всему пенсионному и страховому обеспечению — и я знаю
            продуктовую линейку достаточно глубоко, чтобы находить решения,
            которые действительно подходят.
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
              Проверим ваш страховой пакет и закроем те пробелы, которые
              действительно важны.
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
                Пенсионное обеспечение и Pflegezusatz
              </Link>
            </li>
            <li>
              <Link href="/ipoteka" className={linkClass}>
                Защита жилого здания и ипотека
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
