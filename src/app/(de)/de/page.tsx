import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/de/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import CareerPainPoints from "@/components/recruitment/CareerPainPoints";
import MyStory from "@/components/recruitment/MyStory";
import SegmentCards from "@/components/recruitment/SegmentCards";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import StickyMobileCTA from "@/components/recruitment/StickyMobileCTA";
import {
  homeHero,
  homePainPoints,
  myStoryContent,
  segmentCards,
  qualifications,
  qualificationsCallout,
  pathSteps,
  incomeContent,
  homeFAQContent,
  homeFAQItems,
  ui,
} from "@/data/recruitment.de";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de";

export const metadata: Metadata = {
  title:
    "Karriere als Finanzberater in Deutschland - DVAG-Team | Babic Finance",
  description:
    "Baue deine Karriere als Finanzberater in Deutschland auf. Ohne Vorerfahrung, mit voller Unterstützung des DVAG-Teams und persönlicher Begleitung von Vladislav Babic in Troisdorf.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/`,
      de: `${SITE_URL}${URL_PATH}`,
      uk: `${SITE_URL}/ua`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    title:
      "Karriere als Finanzberater in Deutschland - DVAG-Team",
    description:
      "Ohne Vorerfahrung. Mit voller Team-Unterstützung. Vom ersten Kennenlernen bis zum selbstständigen Berater mit vier anerkannten Qualifikationen.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karriere als Finanzberater in Deutschland - DVAG-Team",
    description:
      "Ohne Vorerfahrung. Mit voller Team-Unterstützung.",
    images: ["/preview.webp"],
  },
};

export default function DeHomePage() {
  return (
    <div className="min-h-screen" lang="de">
      <Navbar />
      <RecruitmentHero
        content={homeHero}
        scrollTargetId="recognize"
        backgroundAlt="Babic Finance - Karriere als Finanzberater in Deutschland"
        scrollLabel={ui.heroScrollLabel}
      />
      <CareerPainPoints
        id="recognize"
        eyebrow={homePainPoints.eyebrow}
        title={homePainPoints.title}
        subtitle={homePainPoints.subtitle}
        messages={homePainPoints.messages}
        reply={homePainPoints.reply}
        replyAuthor={ui.replyAuthor}
        chatAriaLabel={ui.chatAriaLabel}
      />
      <MyStory content={myStoryContent} />
      <SegmentCards
        items={segmentCards}
        eyebrow={ui.segmentsEyebrow}
        title={ui.segmentsTitle}
        subtitle={ui.segmentsSubtitle}
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
        eyebrow={homeFAQContent.eyebrow}
        title={homeFAQContent.title}
        items={homeFAQItems}
      />
      <RecruitmentQualificationForm sourcePage="homepage" locale="de" />
      <StickyMobileCTA label="Beratung anfragen" />
      <Footer />
    </div>
  );
}
