import type { Metadata } from "next";
import { Pin, Wallet, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/ua/karriere/nebenberuf";
const SITE_URL = "https://www.fin-1.de";
const DVAG_NEBENBERUF =
  "https://www.dvag-karriere.de/einstiegsmoeglichkeiten/nebenberuf.html#vladislav.babic";

export const metadata: Metadata = {
  title: "Паралельний старт у фінансах — Babic Finance",
  description:
    "Підробіток із мінімальними зусиллями — без ризиків. Vertrauensmitarbeiter або Vermögensberater-Assistent паралельно з основною роботою чи навчанням.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/nebenberuf`,
      uk: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title: "Паралельний старт у фінансах — Babic Finance",
    description:
      "Підробіток із мінімальними зусиллями — без ризиків. Vertrauensmitarbeiter або Vermögensberater-Assistent паралельно з основною роботою чи навчанням.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Паралельний старт у фінансах — Babic Finance",
    description:
      "Підробіток із мінімальними зусиллями — без ризиків. Паралельно з основною роботою чи навчанням.",
    images: ["/preview.webp"],
  },
};

const profileItems = [
  "відкритий, мотивований, надійний",
  "любиш спілкуватися з людьми й легко знайомишся",
  "хочеш збільшити дохід без зайвих складнощів",
  "цікавишся фінансовими темами (плюс, але не обов'язково)",
];

const benefitItems = [
  "цікавий підробіток із можливістю знайти професію мрії",
  "вільний графік і максимальну гнучкість",
  "хороші умови оплати, прив'язані до результату",
  "персональну підтримку досвідченого фінансового коуча",
  "осмислену справу — ти реально допомагаєш іншим людям",
];

export default function UaNebenberufPage() {
  return (
    <div className="min-h-screen" lang="uk">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Головна", url: `${SITE_URL}/ua` },
          { name: "Кар'єра", url: `${SITE_URL}/ua/karriere/quereinstieg` },
          { name: "Підробіток", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar />

      {/* Hero / Header */}
      <section className="relative bg-navy text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Паралельно з роботою або навчанням
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Підробіток із мінімальними зусиллями — без ризиків
            </h1>
            <p className="text-white/80 mt-6 text-lg leading-relaxed">
              Якщо хочеш підзаробити й без зобов'язань познайомитися з професією
              фінансового консультанта — формат підробітку ідеально підходить.
              Навіть без досвіду у фінансах.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lead paragraph + Bonus */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AnimateOnScroll animation="fade-up">
            <div className="flex gap-4 items-start rounded-2xl border border-border bg-cream p-6">
              <Pin
                aria-hidden="true"
                className="w-6 h-6 text-gold flex-shrink-0 mt-1"
              />
              <p className="text-foreground/90 text-base leading-relaxed">
                Ти працюєш звідки хочеш і коли хочеш — паралельно зі своєю
                основною діяльністю. Підходить і студентам, і школярам.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={80}>
            <div>
              <p className="text-foreground/85 text-base leading-relaxed">
                <strong className="text-navy">Бонус:</strong> ти без ризику
                вивчаєш цікаву професію зсередини. Через якийсь час сам
                вирішуєш — чи хочеш перейти у фінансовий консалтинг як основну
                діяльність.
              </p>
              <a
                href={DVAG_NEBENBERUF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors"
              >
                Детальніше про професію фінансового коуча
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Two roles */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Формати
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                Два формати підробітку
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="h-full bg-white p-7 rounded-2xl border border-border">
                <h3 className="font-semibold text-navy text-lg leading-snug">
                  Vertrauensmitarbeiter
                </h3>
                <p className="text-sm text-gold mt-1 font-medium">
                  Довірена особа
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Розширюєш коло знайомих, рекомендуєш консультацію свого
                  фінансового коуча. Якщо з твоєї рекомендації виходить новий
                  клієнт — ти отримуєш грошову премію.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="h-full bg-white p-7 rounded-2xl border border-border">
                <h3 className="font-semibold text-navy text-lg leading-snug">
                  Vermögensberater-Assistent
                </h3>
                <p className="text-sm text-gold mt-1 font-medium">
                  Асистент консультанта
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Допомагаєш своєму особистому коучу в його роботі — наприклад,
                  із заповненням клієнтських даних. Саму консультацію проводить
                  коуч. У будь-який момент можеш вирішити — залишатися на
                  підробітку чи переходити на повну зайнятість.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Income + Flexibility */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="h-full p-7 rounded-2xl border border-border bg-cream">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Wallet className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  Привабливий підробіток
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Твій дохід залежить від того, зі скількома зацікавленими
                  людьми пройшла успішна консультація. Кілька сотень євро
                  додаткового доходу на місяць — реально.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="h-full p-7 rounded-2xl border border-border bg-cream">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  Максимальна гнучкість
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Працюєш тоді, коли є час — ввечері, на вихідних, паралельно
                  з основною діяльністю. Якщо виникають питання — твій
                  персональний коуч на зв'язку будь-коли.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Profile + Benefits */}
      <section className="bg-cream py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <AnimateOnScroll animation="fade-up">
              <div>
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Профіль
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mt-3">
                  Це для тебе, якщо ти:
                </h2>
                <ul className="mt-6 space-y-3">
                  {profileItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-foreground/85 text-base leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div>
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Що отримуєш
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mt-3">
                  Що ти отримуєш:
                </h2>
                <ul className="mt-6 space-y-3">
                  {benefitItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-foreground/85 text-base leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <RecruitmentQualificationForm sourcePage="nebenberuf" locale="ua" />
      <Footer />
    </div>
  );
}
