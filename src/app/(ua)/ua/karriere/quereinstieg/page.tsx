import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
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
} from "@/data/recruitment.ua";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/ua/karriere/quereinstieg";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title:
    "Кар'єра фінансового консультанта в Німеччині для тих, хто змінює професію | Babic Finance",
  description:
    "Зміни професію в Німеччині на фінансового консультанта DVAG. Використай свій досвід і мови. Можна паралельно з роботою. Повна підтримка.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/quereinstieg`,
      de: `${SITE_URL}/de/karriere/quereinstieg`,
      uk: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title:
      "Кар'єра фінансового консультанта в Німеччині для тих, хто змінює професію",
    description:
      "Зміни професію в Німеччині - на ту, що потрібна. Повне навчання з підтримкою команди DVAG.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Кар'єра фінансового консультанта в Німеччині для тих, хто змінює професію",
    description:
      "Зміни професію в Німеччині. Повне навчання.",
    images: ["/preview.webp"],
  },
};

export default function UaQuereinstiegPage() {
  return (
    <div className="min-h-screen" lang="uk">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Головна", url: `${SITE_URL}/ua` },
          { name: "Кар'єра", url: `${SITE_URL}/ua/karriere/quereinstieg` },
          { name: "Зміна професії", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar />
      <RecruitmentHero
        content={quereinstiegHero}
        scrollTargetId="why"
        scrollLabel={ui.heroScrollLabel}
        backgroundAlt="Babic Finance - кар'єра фінансового консультанта в Німеччині"
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
      <RecruitmentQualificationForm sourcePage="quereinstieg" locale="ua" />
      <Footer />
    </div>
  );
}
