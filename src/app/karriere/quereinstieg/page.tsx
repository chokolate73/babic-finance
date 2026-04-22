import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import BenefitsList from "@/components/recruitment/BenefitsList";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
import Transparenz from "@/components/recruitment/Transparenz";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import FinalCTA from "@/components/recruitment/FinalCTA";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  quereinstiegHero,
  quereinstiegBenefits,
  pathSteps,
  transparenzItems,
  quereinstiegFAQItems,
  quereinstiegFinalCTA,
} from "@/data/recruitment";

const URL_PATH = "/karriere/quereinstieg";
const SITE_URL = "https://babic-wealth-guide.base44.app";

export const metadata: Metadata = {
  title:
    "Карьера финансового консультанта в Германии для квереинштайгеров | Babic Finance",
  description:
    "Смени профессию в Германии на ту, которая нужна. Финансовый консультант DVAG использует твой опыт и языки — начинай параллельно с работой, с русскоязычным наставником.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title:
      "Карьера финансового консультанта в Германии для квереинштайгеров",
    description:
      "Смени профессию в Германии на ту, которая нужна. Обучение на русском, с поддержкой команды DVAG.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Карьера финансового консультанта в Германии для квереинштайгеров",
    description:
      "Смени профессию в Германии на ту, которая нужна. Обучение на русском.",
    images: ["/preview.webp"],
  },
};

export default function QuereinstiegPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RecruitmentHero content={quereinstiegHero} scrollTargetId="why" />
      <BenefitsList
        id="why"
        eyebrow={quereinstiegBenefits.eyebrow}
        title={quereinstiegBenefits.title}
        items={quereinstiegBenefits.items}
        background="white"
      />
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
