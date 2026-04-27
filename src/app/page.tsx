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
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import Seminar from "@/components/Seminar";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  homeHero,
  homePainPoints,
  pathSteps,
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
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Девиз DVAG с 1975 года
          </span>
          <p className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mt-4 leading-tight">
            Menschen brauchen Menschen.
          </p>
          <span
            aria-hidden="true"
            className="block w-[60px] h-[2px] bg-gold mx-auto mt-6"
          />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Людям нужны люди. На этом построена работа DVAG — и моя личная философия консультирования.
          </p>
        </div>
      </section>
      <SegmentCards />
      <Qualifications />
      <CareerPath
        id="path"
        eyebrow="Путь"
        title="Как это работает"
        steps={pathSteps}
      />
      <IncomeRange />
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
