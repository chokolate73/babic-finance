import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import SupportComparison from "@/components/recruitment/SupportComparison";
import BenefitsList from "@/components/recruitment/BenefitsList";
import CareerPath from "@/components/recruitment/CareerPath";
import Transparenz from "@/components/recruitment/Transparenz";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import FinalCTA from "@/components/recruitment/FinalCTA";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  buergergeldHero,
  buergergeldHelp,
  buergergeldPathSteps,
  buergergeldTransparenzItems,
  buergergeldFAQItems,
  buergergeldFinalCTA,
  supportTable,
  ui,
  legalDisclaimers,
} from "@/data/recruitment.ua";

const URL_PATH = "/ua/karriere/buergergeld";
const SITE_URL = "https://fin-1.de";

export const metadata: Metadata = {
  title:
    "Із Bürgergeld у професію фінансового консультанта | Babic Finance",
  description:
    "З підтримкою держави — Einstiegsgeld до 24 місяців. Допомагаємо з Tragfähigkeitsbescheinigung, супроводжуємо зустріч у Jobcenter і шлях до першого клієнта.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/buergergeld`,
      de: `${SITE_URL}/de/karriere/buergergeld`,
      uk: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title: "Із Bürgergeld у професію фінансового консультанта",
    description:
      "З підтримкою держави, Einstiegsgeld до 24 місяців, і супроводом від документів до першого клієнта.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Із Bürgergeld у професію фінансового консультанта",
    description:
      "Einstiegsgeld до 24 місяців + повний супровід від документів до першого клієнта.",
    images: ["/preview.webp"],
  },
};

export default function UaBuergergeldPage() {
  return (
    <div className="min-h-screen" lang="uk">
      <Navbar />
      <RecruitmentHero
        content={buergergeldHero}
        scrollTargetId="support"
        scrollLabel={ui.heroScrollLabel}
        backgroundAlt="Babic Finance — кар'єра фінансового консультанта в Німеччині"
      />
      <SupportComparison
        table={supportTable}
        eyebrow={ui.supportEyebrow}
        title={ui.supportTitle}
        description={ui.supportDescription}
        parameterHeader={ui.supportParameter}
      />
      <BenefitsList
        id="help"
        eyebrow={buergergeldHelp.eyebrow}
        title={buergergeldHelp.title}
        items={buergergeldHelp.items}
        background="white"
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-white to-navy" />
      <CareerPath
        id="path"
        eyebrow={ui.pathEyebrow}
        title={ui.pathTitleBuergergeld}
        steps={buergergeldPathSteps}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-navy to-secondary" />
      <Transparenz
        eyebrow={ui.transparenzEyebrow}
        title={ui.transparenzTitleBuergergeld}
        subtitle={ui.transparenzSubtitleBuergergeld}
        items={buergergeldTransparenzItems}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-secondary to-navy" />
      <RecruitmentFAQ
        eyebrow={ui.faqEyebrow}
        title={ui.faqTitleBuergergeld}
        items={buergergeldFAQItems}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-navy to-white" />

      <p className="bg-white px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto text-muted-foreground/80 text-xs italic text-center leading-relaxed">
        {legalDisclaimers.buergergeldFooter}
      </p>
      <div aria-hidden className="h-12 bg-gradient-to-b from-white to-navy" />

      <FinalCTA
        title={buergergeldFinalCTA.title}
        description={buergergeldFinalCTA.description}
        primary={buergergeldFinalCTA.primary}
        secondary={buergergeldFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="buergergeld" locale="ua" />
      <Footer />
    </div>
  );
}
