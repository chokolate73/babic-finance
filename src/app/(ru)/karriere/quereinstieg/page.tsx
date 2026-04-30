import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BenefitsList from "@/components/recruitment/BenefitsList";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
import Transparenz from "@/components/recruitment/Transparenz";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import FinalCTA from "@/components/recruitment/FinalCTA";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  quereinstiegIntro,
  quereinstiegTasks,
  quereinstiegProfile,
  pathSteps,
  transparenzItems,
  quereinstiegFAQItems,
  quereinstiegFinalCTA,
} from "@/data/recruitment";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/karriere/quereinstieg";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title: "Смена профессии — финансовый консультант — Babic Finance",
  description:
    "Сменить профессию и стать финансовым консультантом. Полное обучение, персональный коуч, старт параллельно с текущей работой возможен.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}${URL_PATH}`,
      de: `${SITE_URL}/de${URL_PATH}`,
      uk: `${SITE_URL}/ua${URL_PATH}`,
    },
  },
  openGraph: {
    title: "Смена профессии — финансовый консультант — Babic Finance",
    description:
      "Сменить профессию и стать финансовым консультантом. Полное обучение, персональный коуч, старт параллельно с текущей работой возможен.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "ru_RU",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Смена профессии — финансовый консультант — Babic Finance",
    description:
      "Сменить профессию и стать финансовым консультантом. Полное обучение и персональный коуч.",
    images: ["/preview.webp"],
  },
};

export default function QuereinstiegPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Главная", url: SITE_URL },
          { name: "Карьера", url: `${SITE_URL}/karriere/quereinstieg` },
          { name: "Смена профессии", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar />

      {/* Block A — Intro */}
      <section className="bg-cream pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {quereinstiegIntro.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 leading-tight">
              {quereinstiegIntro.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              {quereinstiegIntro.body}
            </p>
          </AnimateOnScroll>

          {/* Block B — 📌 Bonus callout */}
          <AnimateOnScroll animation="fade-up" delay={80}>
            <div className="mt-10 rounded-2xl border border-[#F5CD55]/40 bg-white p-6 lg:p-8">
              <p className="text-foreground/90 leading-relaxed">
                <span aria-hidden="true">📌</span>{" "}
                <strong className="text-navy">
                  Мы ищем тебя — кандидата на смену профессии в роли
                  самостоятельного финансового консультанта.
                </strong>{" "}
                Место работы можешь выбрать гибко по всей Германии. Можешь
                стартовать{" "}
                <Link
                  href="/karriere/nebenberuf"
                  className="underline hover:no-underline text-[#F5CD55] font-semibold"
                >
                  параллельно с основной работой
                </Link>
                . Благодаря{" "}
                <a
                  href="https://www.dvag-karriere.de/beruf-vermoegensberater/ausbildung.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline text-[#F5CD55] font-semibold"
                >
                  нашему обучению на топ-уровне
                </a>{" "}
                и персональному карьерному коучу рядом — твой вход в профессию
                максимально простой.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Block C — Tasks */}
      <BenefitsList
        id="tasks"
        eyebrow={quereinstiegTasks.eyebrow}
        title={quereinstiegTasks.title}
        items={quereinstiegTasks.items}
        background="white"
      />

      {/* Block D — Good to know */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="rounded-2xl border-l-4 border-l-gold bg-white px-6 py-5 lg:px-8 lg:py-6">
              <p className="text-foreground/90 leading-relaxed italic">
                <strong className="not-italic text-navy">Good to know:</strong>{" "}
                у нас ты можешь сначала попробовать профессию финансового коуча
                — без риска и без необходимости сразу увольняться с текущей
                работы. Начни параллельно — и пойми, твоё ли это направление.{" "}
                <Link
                  href="/karriere/nebenberuf"
                  className="not-italic underline hover:no-underline text-[#F5CD55] font-semibold"
                >
                  → Подробнее про подработку
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Block E — Profile */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                {quereinstiegProfile.eyebrow}
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                {quereinstiegProfile.title}
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={80}>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {quereinstiegProfile.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-foreground/85 text-base leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      <Qualifications />
      <CareerPath
        id="path"
        eyebrow="Путь"
        title="Как это работает"
        steps={pathSteps}
      />
      <IncomeRange />
      <Transparenz items={transparenzItems} />
      <RecruitmentFAQ
        eyebrow="Вопросы"
        title="Часто задаваемые вопросы квереинштайгеров"
        items={quereinstiegFAQItems}
      />
      <FinalCTA
        title={quereinstiegFinalCTA.title}
        description={quereinstiegFinalCTA.description}
        primary={quereinstiegFinalCTA.primary}
        secondary={quereinstiegFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="quereinstieg" />
      <Footer />
    </div>
  );
}
