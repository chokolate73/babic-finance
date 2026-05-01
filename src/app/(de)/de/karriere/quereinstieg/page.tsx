import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/de/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import BenefitsList from "@/components/recruitment/BenefitsList";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
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
  quereinstiegFAQItems,
  quereinstiegFinalCTA,
  ui,
} from "@/data/recruitment.de";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/de/karriere/quereinstieg";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title:
    "Quereinstieg in die Finanzberatung - Karriere wechseln in Deutschland | Babic Finance",
  description:
    "Quereinstieg in die Finanzberatung - auch ohne Finanzhintergrund. Deine Erfahrung und dein Engagement zählen. Start parallel zum Hauptjob möglich, persönliche Begleitung in Troisdorf.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/quereinstieg`,
      de: `${SITE_URL}${URL_PATH}`,
      uk: `${SITE_URL}/ua/karriere/quereinstieg`,
      "x-default": `${SITE_URL}/karriere/quereinstieg`,
    },
  },
  openGraph: {
    title:
      "Quereinstieg in die Finanzberatung - Karriere wechseln in Deutschland",
    description:
      "Quereinstieg in die Finanzberatung - auch ohne Finanzhintergrund. Vollständige Ausbildung mit Begleitung durch DVAG-Team.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Quereinstieg in die Finanzberatung - Karriere wechseln in Deutschland",
    description:
      "Quereinstieg in die Finanzberatung - Karriere wechseln, ohne nochmal von vorn zu studieren.",
    images: ["/preview.webp"],
  },
};

export default function DeQuereinstiegPage() {
  return (
    <div className="min-h-screen" lang="de">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Startseite", url: `${SITE_URL}/de` },
          { name: "Karriere", url: `${SITE_URL}/de/karriere/quereinstieg` },
          { name: "Quereinstieg", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar />
      <RecruitmentHero
        content={quereinstiegHero}
        scrollTargetId="why"
        scrollLabel={ui.heroScrollLabel}
        backgroundAlt="Babic Finance - Karriere als Finanzberater in Deutschland"
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
      <FloatingContactButtons locale="de" showMobileBar={false} />
      <Footer />
    </div>
  );
}
