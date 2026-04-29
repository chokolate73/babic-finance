import type { Metadata } from "next";
import { Pin, Wallet, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";

const URL_PATH = "/karriere/nebenberuf";
const SITE_URL = "https://fin-1.de";
const DVAG_NEBENBERUF =
  "https://www.dvag-karriere.de/einstiegsmoeglichkeiten/nebenberuf.html#vladislav.babic";

export const metadata: Metadata = {
  title: "Параллельный старт в финансах — Babic Finance",
  description:
    "Подработка с минимальными усилиями — без рисков. Vertrauensmitarbeiter или Vermögensberater-Assistent параллельно с основной работой или учёбой.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}${URL_PATH}`,
      uk: `${SITE_URL}/ua${URL_PATH}`,
    },
  },
  openGraph: {
    title: "Параллельный старт в финансах — Babic Finance",
    description:
      "Подработка с минимальными усилиями — без рисков. Vertrauensmitarbeiter или Vermögensberater-Assistent параллельно с основной работой или учёбой.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "ru_RU",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Параллельный старт в финансах — Babic Finance",
    description:
      "Подработка с минимальными усилиями — без рисков. Параллельно с основной работой или учёбой.",
    images: ["/preview.webp"],
  },
};

const profileItems = [
  "открытый, мотивированный, надёжный",
  "любишь общаться с людьми и легко заводишь новые знакомства",
  "хочешь увеличить свой доход без сложностей",
  "интересуешься финансовыми темами (плюс, но не обязательно)",
];

const benefitItems = [
  "интересную подработку с возможностью найти профессию мечты",
  "свободный график и максимум гибкости",
  "хорошие условия оплаты, привязанные к результату",
  "персональную поддержку опытного финансового коуча",
  "осмысленное дело — ты реально помогаешь другим людям",
];

export default function NebenberufPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero / Header */}
      <section className="relative bg-navy text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Параллельно с работой или учёбой
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Подработка с минимальными усилиями — без рисков
            </h1>
            <p className="text-white/80 mt-6 text-lg leading-relaxed">
              Если хочешь подзаработать и без обязательств познакомиться с
              профессией финансового консультанта — формат подработки идеально
              подходит. Даже без опыта в финансах.
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
                Ты работаешь откуда хочешь и когда хочешь — параллельно со своей
                основной деятельностью. Подходит и студентам, и школьникам.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={80}>
            <div>
              <p className="text-foreground/85 text-base leading-relaxed">
                <strong className="text-navy">Бонус:</strong> ты без риска
                изучаешь интересную профессию изнутри. Через какое-то время сам
                решаешь — хочешь ли перейти в финансовый консалтинг как основную
                деятельность.
              </p>
              <a
                href={DVAG_NEBENBERUF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors"
              >
                Подробнее о профессии финансового коуча
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
                Форматы
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                Два формата подработки
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
                  Доверенное лицо
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Расширяешь круг знакомых, рекомендуешь консультацию своего
                  финансового коуча. Если из твоей рекомендации получается новый
                  клиент — ты получаешь денежную премию.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="h-full bg-white p-7 rounded-2xl border border-border">
                <h3 className="font-semibold text-navy text-lg leading-snug">
                  Vermögensberater-Assistent
                </h3>
                <p className="text-sm text-gold mt-1 font-medium">
                  Ассистент консультанта
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                  Помогаешь своему личному коучу в его работе — например, с
                  заполнением клиентских данных. Саму консультацию проводит
                  коуч. В любой момент можешь решить — оставаться на подработке
                  или переходить в полную занятость.
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
                  Привлекательная подработка
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Твой доход зависит от того, со сколькими заинтересованными
                  людьми прошла успешная консультация. Несколько сотен евро
                  дополнительного дохода в месяц — реально.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="h-full p-7 rounded-2xl border border-border bg-cream">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg">
                  Максимальная гибкость
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  Работаешь тогда, когда есть время — вечером, по выходным,
                  параллельно с основной деятельностью. Если возникают вопросы —
                  твой персональный коуч на связи в любой момент.
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
                  Профиль
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mt-3">
                  Это для тебя, если ты:
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
                  Что получаешь
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mt-3">
                  Что ты получаешь:
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

      <RecruitmentQualificationForm sourcePage="nebenberuf" />
      <Footer />
    </div>
  );
}
