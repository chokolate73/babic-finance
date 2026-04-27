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
  nebenberufHero,
  nebenberufBenefits,
  pathSteps,
  transparenzItems,
  nebenberufFAQItems,
  nebenberufFinalCTA,
} from "@/data/recruitment";

const URL_PATH = "/karriere/nebenberuf";
const SITE_URL = "https://fin-1.de";

export const metadata: Metadata = {
  title: "Параллельный старт в финансах — Babic Finance",
  description:
    "Начни карьеру финансового консультанта параллельно с текущей работой. DVAG официально поддерживает nebenberuflichen Einstieg.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title: "Параллельный старт в финансах — Babic Finance",
    description:
      "Начни карьеру финансового консультанта параллельно с текущей работой. DVAG официально поддерживает nebenberuflichen Einstieg.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Параллельный старт в финансах — Babic Finance",
    description:
      "Начни карьеру финансового консультанта параллельно с текущей работой.",
    images: ["/preview.webp"],
  },
};

export default function NebenberufPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RecruitmentHero content={nebenberufHero} scrollTargetId="why" />
      <BenefitsList
        id="why"
        eyebrow={nebenberufBenefits.eyebrow}
        title={nebenberufBenefits.title}
        items={nebenberufBenefits.items}
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
        title="Частые вопросы о параллельном старте"
        items={nebenberufFAQItems}
      />
      <FinalCTA
        title={nebenberufFinalCTA.title}
        description={nebenberufFinalCTA.description}
        primary={nebenberufFinalCTA.primary}
        secondary={nebenberufFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="nebenberuf" />
      <Footer />
    </div>
  );
}
