import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import CareerPainPoints from "@/components/recruitment/CareerPainPoints";
import MyStory from "@/components/recruitment/MyStory";
import SegmentCards from "@/components/recruitment/SegmentCards";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
import Transparenz from "@/components/recruitment/Transparenz";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  homeHero,
  homePainPoints,
  myStoryContent,
  segmentCards,
  qualifications,
  qualificationsCallout,
  pathSteps,
  incomeContent,
  transparenzItems,
  homeFAQContent,
  homeFAQItems,
  ui,
} from "@/data/recruitment.ua";

const SITE_URL = "https://fin-1.de";
const URL_PATH = "/ua";

export const metadata: Metadata = {
  title:
    "Кар'єра фінансового консультанта в Німеччині — україномовна команда DVAG | Babic Finance",
  description:
    "Побудуй кар'єру фінансового консультанта в Німеччині. Українською, без досвіду, з повною підтримкою команди DVAG і супроводом Владислава Бабича в Troisdorf.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/`,
      de: `${SITE_URL}/de`,
      uk: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title:
      "Кар'єра фінансового консультанта в Німеччині — україномовна команда DVAG",
    description:
      "Українською. Без досвіду. З повною підтримкою команди. Шлях від першої зустрічі до самостійного консультанта з чотирма визнаними кваліфікаціями.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Кар'єра фінансового консультанта в Німеччині — україномовна команда DVAG",
    description:
      "Українською. Без досвіду. З повною підтримкою команди DVAG.",
    images: ["/preview.webp"],
  },
};

export default function UaHomePage() {
  return (
    <div className="min-h-screen" lang="uk">
      <Navbar />
      <RecruitmentHero
        content={homeHero}
        scrollTargetId="recognize"
        backgroundAlt="Babic Finance — кар'єра фінансового консультанта в Німеччині"
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
      <Transparenz
        items={transparenzItems}
        eyebrow={ui.transparenzEyebrow}
        title={ui.transparenzTitleHome}
        subtitle={ui.transparenzSubtitleHome}
      />
      <RecruitmentFAQ
        eyebrow={homeFAQContent.eyebrow}
        title={homeFAQContent.title}
        items={homeFAQItems}
      />
      <RecruitmentQualificationForm sourcePage="homepage" locale="ua" />
      <Footer />
    </div>
  );
}
