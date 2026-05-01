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
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import StickyMobileCTA from "@/components/recruitment/StickyMobileCTA";
import Seminar from "@/components/ua/Seminar";
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
} from "@/data/recruitment.ua";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/ua";

export const metadata: Metadata = {
  title:
    "Фінансовий консультант у Німеччині - кар'єра з DVAG | Babic Finance",
  description:
    "Кар'єра фінансового консультанта в Німеччині - без досвіду, з повним супроводом команди DVAG і Владислава Бабича в Тройсдорфі.",
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
      "Кар'єра фінансового консультанта в Німеччині - команда DVAG",
    description:
      "Без досвіду. З повною підтримкою команди. Шлях від першої зустрічі до самостійного консультанта з чотирма визнаними кваліфікаціями.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Кар'єра фінансового консультанта в Німеччині - команда DVAG",
    description:
      "Без досвіду. З повною підтримкою команди DVAG.",
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
        backgroundAlt="Babic Finance - кар'єра фінансового консультанта в Німеччині"
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
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Девіз DVAG з 1975 року
          </span>
          <p className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">
            Menschen brauchen Menschen.
          </p>
          <span
            aria-hidden="true"
            className="block w-[60px] h-[2px] bg-gold mx-auto mt-6"
          />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Людям потрібні люди. На цьому побудована робота DVAG - і моя особиста філософія консультування.
          </p>
        </div>
      </section>
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
      <Seminar />
      <RecruitmentFAQ
        eyebrow={homeFAQContent.eyebrow}
        title={homeFAQContent.title}
        items={homeFAQItems}
      />
      <RecruitmentQualificationForm sourcePage="homepage" locale="ua" />
      <StickyMobileCTA label="Проконсультуватися" />
      <Footer />
    </div>
  );
}
