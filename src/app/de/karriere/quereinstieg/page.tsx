import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/de/Footer";
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
  qualifications,
  qualificationsCallout,
  pathSteps,
  incomeContent,
  transparenzItems,
  quereinstiegFAQItems,
  quereinstiegFinalCTA,
  ui,
} from "@/data/recruitment.de";

const URL_PATH = "/de/karriere/quereinstieg";
const SITE_URL = "https://babic-wealth-guide.base44.app";

export const metadata: Metadata = {
  title:
    "Karriere als Finanzberater in Deutschland für Quereinsteiger | Babic Finance",
  description:
    "Wechsle in Deutschland den Beruf — in einen, der gebraucht wird. Finanzberater DVAG nutzt deine Erfahrung und Sprachen, starte parallel zum Job mit russischsprachigem Mentor.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/quereinstieg`,
      de: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title:
      "Karriere als Finanzberater in Deutschland für Quereinsteiger",
    description:
      "Wechsle in Deutschland den Beruf — in einen, der gebraucht wird. Ausbildung auf Russisch, mit DVAG-Team-Support.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karriere als Finanzberater in Deutschland für Quereinsteiger",
    description:
      "Wechsle in Deutschland den Beruf. Ausbildung auf Russisch.",
    images: ["/preview.webp"],
  },
};

export default function DeQuereinstiegPage() {
  return (
    <div className="min-h-screen" lang="de">
      <Navbar />
      <RecruitmentHero
        content={quereinstiegHero}
        scrollTargetId="why"
        scrollLabel={ui.heroScrollLabel}
      />
      <BenefitsList
        id="why"
        eyebrow={quereinstiegBenefits.eyebrow}
        title={quereinstiegBenefits.title}
        items={quereinstiegBenefits.items}
        background="white"
      />
      <Qualifications
        items={qualifications}
        callout={qualificationsCallout}
        eyebrow={ui.qualificationsEyebrow}
        title={ui.qualificationsTitle}
        description={ui.qualificationsDescription}
      />
      <CareerPath
        id="path"
        eyebrow={ui.pathEyebrow}
        title={ui.pathTitleHome}
        steps={pathSteps}
      />
      <IncomeRange content={incomeContent} thisMeansLabel={ui.incomeThisMeans} />
      <Transparenz
        items={transparenzItems}
        eyebrow={ui.transparenzEyebrow}
        title={ui.transparenzTitleHome}
        subtitle={ui.transparenzSubtitleHome}
      />
      <RecruitmentFAQ
        eyebrow={ui.faqEyebrow}
        title={ui.faqTitleQuereinstieg}
        items={quereinstiegFAQItems}
      />
      <FinalCTA
        title={quereinstiegFinalCTA.title}
        description={quereinstiegFinalCTA.description}
        primary={quereinstiegFinalCTA.primary}
        secondary={quereinstiegFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="quereinstieg" locale="de" />
      <Footer />
    </div>
  );
}
