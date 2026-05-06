import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { ORG_ID } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/pensionnoe-obespechenie";
const CANONICAL = `${SITE_URL}${URL_PATH}`;
const DE_URL = `${SITE_URL}/de/altersvorsorge`;
const UK_URL = `${SITE_URL}/ua/pensiine-zabezpechennia`;

const PAGE_TITLE = "Пенсионное обеспечение в Тройсдорфе и Бонне | Riester, Rürup, bAV, частная пенсия";
const PAGE_DESCRIPTION =
  "Стратегическое пенсионное обеспечение в Рейн-Зиг-Крайс: Riester, Rürup, корпоративная пенсия (bAV), частное пенсионное страхование. Личные консультации на русском и немецком.";
const PAGE_NAME = "Пенсионное обеспечение";
const H1 = "Пенсионное обеспечение в Тройсдорфе и Бонне — Riester, Rürup, bAV, частная пенсия";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Когда нужно начинать формировать пенсию?",
    a: "Как можно раньше. Эффект сложного процента — математически самый важный фактор в пенсионном обеспечении: тому, кто начинает в 25, для одного и того же итогового капитала нужно вносить лишь долю того, что пришлось бы откладывать 45-летнему.",
  },
  {
    q: "Имеет ли смысл Riester-пенсия в принципе?",
    a: "Для семей с детьми и низкооплачиваемых работников — часто да; для одиноких людей с высоким доходом — часто нет. Ответ всегда из конкретного расчёта, а не из газетных заголовков.",
  },
  {
    q: "Какая пенсия лучшая?",
    a: "Та, которую вы реально доведёте до конца — и которая подходит к вашей жизненной ситуации. В большинстве случаев это не один продукт, а сочетание двух или трёх элементов.",
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

export default function PensionnoePage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={graph} />
      <Navbar />

      <section className="bg-navy text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Пенсионное обеспечение
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {H1}
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            Государственной пенсии большинству не хватит. Это не мнение, а
            математика — и чем раньше вы этим займётесь, тем спокойнее
            находится решение. Как финансовый консультант DVAG я покажу ваш
            пенсионный пробел и составлю план, который подходит к вашему
            доходу, жизненной ситуации и семье.
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-navy">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Три уровня немецкой пенсионной системы
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Немецкая пенсионная система стоит на трёх уровнях, каждый из
            которых работает по-своему:
          </p>
          <ol className="space-y-3 text-base md:text-lg leading-relaxed mb-6 list-decimal pl-6 marker:text-gold marker:font-bold">
            <li>
              <strong>Государственная пенсия, Rürup-пенсия, профессиональные
              кассы</strong> — государственно поддерживаемая базовая
              составляющая.
            </li>
            <li>
              <strong>Riester-пенсия и корпоративная пенсия (bAV)</strong> —
              дополнительная составляющая с государственной или налоговой
              поддержкой.
            </li>
            <li>
              <strong>Частное пенсионное страхование, инвестиционные решения,
              недвижимость</strong> — индивидуальная составляющая без
              государственного регулирования.
            </li>
          </ol>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Какие уровни имеют смысл для вас, зависит от статуса занятости,
            налогового класса, семейного положения и горизонта инвестирования.
          </p>

          <h2 id="riester" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Riester-пенсия — для кого она ещё имеет смысл
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Riester-пенсия годами получает плохую прессу — не без оснований:
            высокие издержки, низкая доходность, сложные условия дотаций. И
            всё же для определённых групп она остаётся привлекательной: для
            семей с несколькими детьми (надбавки на детей), для
            низкооплачиваемых работников и для молодых сотрудников с длинным
            горизонтом. Я честно посчитаю, выгодна ли она именно в вашей
            ситуации — а если нет, мы вместе посмотрим альтернативы.
          </p>

          <h2 id="ruerup" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Rürup-пенсия (Basisrente) — для самозанятых и хорошо зарабатывающих
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            С налоговой точки зрения Rürup-пенсия часто наиболее эффективная
            форма обеспечения для самозанятых и для наёмных работников с
            высоким доходом, которые не могут или не хотят использовать bAV.
            Взносы в значительной мере вычитаются как Sonderausgaben — эффект
            налоговой экономии может быть существенным. Взамен она негибкая:
            нет единовременной выплаты, нельзя заложить, только пожизненная
            пенсия. Это классический инструмент «настроить и забыть».
          </p>

          <h2 id="bav" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Корпоративная пенсия (bAV)
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Если вы работаете по найму, bAV часто — ваш лучший вариант
            обеспечения, особенно когда работодатель добавляет свою долю.
            Через Entgeltumwandlung вы экономите налоги и социальные взносы;
            при использовании Generali Pensionskasse как Durchführungsweg
            административные издержки конкурентоспособны.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            Для работодателей, в свою очередь, bAV — это бенефит, который
            действительно доходит до сотрудника, и административно проще, чем
            многие думают. Я консультирую как сотрудников по их собственной
            bAV, так и работодателей при внедрении концепции bAV.
          </p>

          <h2 id="private-rente" className="scroll-mt-24 font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Частное пенсионное страхование
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-12">
            За пределами государственно поддерживаемой пенсии классические и
            фондовые частные пенсионные страховки дают гибкость, которой нет у
            Riester и Rürup: можно изменять взносы, получить досрочную выплату
            или изъять капитал. Они меньше поддержаны налогово, но свободнее в
            использовании — особенно в связке с фондовыми решениями это
            проверенный элемент «третьего уровня».
          </p>

          <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-6">
            Расчёт пенсионного пробела — шаг 1
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Прежде чем говорить о продуктах, я вместе с вами рассчитаю
            конкретный пенсионный пробел: насколько высокой будет ваша
            предполагаемая государственная пенсия? Сколько вам понадобится на
            самом деле? Какова ежемесячная разница? Только на этой основе мы
            решим, какие элементы и за какие взносы имеют смысл.
          </p>
        </div>
      </article>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold mb-4">
              Записаться на пенсионный анализ
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Рассчитаем ваш пенсионный пробел и составим план, который
              подходит к вашему доходу.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                WhatsApp
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-white/90 transition-colors">
                Записаться на анализ
              </a>
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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
              <Link href="/investitsii-i-fondy" className={linkClass}>
                Инвестиции в фонды
              </Link>
            </li>
            <li>
              <Link href="/strakhovanie#bu" className={linkClass}>
                Страхование от потери трудоспособности
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
