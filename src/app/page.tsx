import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import CareerPainPoints from "@/components/recruitment/CareerPainPoints";
import MyStory from "@/components/recruitment/MyStory";
import SegmentCards from "@/components/recruitment/SegmentCards";
import Qualifications from "@/components/recruitment/Qualifications";
import CareerPath from "@/components/recruitment/CareerPath";
import IncomeRange from "@/components/recruitment/IncomeRange";
import Transparenz from "@/components/recruitment/Transparenz";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import Seminar from "@/components/Seminar";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  homeHero,
  homePainPoints,
  pathSteps,
  transparenzItems,
  homeFAQContent,
  homeFAQItems,
} from "@/data/recruitment";

const SITE_URL = "https://fin-1.de";

export const metadata: Metadata = {
  title:
    "Карьера финансового консультанта в Германии — русскоязычная команда DVAG | Babic Finance",
  description:
    "Построй карьеру финансового консультанта в Германии. На русском, без опыта, с полной поддержкой команды DVAG и сопровождением Владислава Бабича в Troisdorf.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title:
      "Карьера финансового консультанта в Германии — русскоязычная команда DVAG",
    description:
      "На русском. Без опыта. С полной поддержкой команды. Путь от первой встречи до самостоятельного консультанта с четырьмя признанными квалификациями.",
    url: SITE_URL,
    siteName: "Babic Finance",
    type: "website",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Карьера финансового консультанта в Германии — русскоязычная команда DVAG",
    description:
      "На русском. Без опыта. С полной поддержкой команды DVAG.",
    images: ["/preview.webp"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RecruitmentHero content={homeHero} scrollTargetId="recognize" />
      <CareerPainPoints
        id="recognize"
        eyebrow={homePainPoints.eyebrow}
        title={homePainPoints.title}
        subtitle={homePainPoints.subtitle}
        messages={homePainPoints.messages}
        reply={homePainPoints.reply}
        ctaLabel={homePainPoints.ctaLabel}
        ctaHref={homePainPoints.ctaHref}
      />
      <MyStory />
      <SegmentCards />
      <Qualifications />
      <CareerPath
        id="path"
        eyebrow="Путь"
        title="Как это работает"
        steps={pathSteps}
      />
      <IncomeRange />
      <Transparenz items={transparenzItems} />
      <Seminar />
      <RecruitmentFAQ
        eyebrow={homeFAQContent.eyebrow}
        title={homeFAQContent.title}
        items={homeFAQItems}
      />
      <RecruitmentQualificationForm sourcePage="homepage" />
      <Footer />
    </div>
  );
}
