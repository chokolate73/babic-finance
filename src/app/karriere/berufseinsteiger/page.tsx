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
  berufseinsteigerHero,
  berufseinsteigerBenefits,
  pathSteps,
  transparenzItems,
  berufseinsteigerFAQItems,
  berufseinsteigerFinalCTA,
} from "@/data/recruitment";

const URL_PATH = "/karriere/berufseinsteiger";
const SITE_URL = "https://fin-1.de";

export const metadata: Metadata = {
  title: "Старт карьеры после школы — Babic Finance",
  description:
    "Дуальное обучение, стажировка или подработка в DVAG для начинающих специалистов. Признанные квалификации и зарплата с самого начала.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title: "Старт карьеры после школы — Babic Finance",
    description:
      "Дуальное обучение, стажировка или подработка в DVAG для начинающих специалистов. Признанные квалификации и зарплата с самого начала.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Старт карьеры после школы — Babic Finance",
    description:
      "Дуальное обучение, стажировка или подработка в DVAG для начинающих специалистов.",
    images: ["/preview.webp"],
  },
};

export default function BerufseinsteigerPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RecruitmentHero content={berufseinsteigerHero} scrollTargetId="why" />
      <BenefitsList
        id="why"
        eyebrow={berufseinsteigerBenefits.eyebrow}
        title={berufseinsteigerBenefits.title}
        items={berufseinsteigerBenefits.items}
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
        title="Частые вопросы о старте карьеры"
        items={berufseinsteigerFAQItems}
      />
      <FinalCTA
        title={berufseinsteigerFinalCTA.title}
        description={berufseinsteigerFinalCTA.description}
        primary={berufseinsteigerFinalCTA.primary}
        secondary={berufseinsteigerFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="berufseinsteiger" />
      <Footer />
    </div>
  );
}
