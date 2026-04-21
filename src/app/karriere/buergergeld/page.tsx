import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
} from "@/data/recruitment";

const URL_PATH = "/karriere/buergergeld";
const SITE_URL = "https://babic-wealth-guide.base44.app";

export const metadata: Metadata = {
  title:
    "Путь из Bürgergeld в профессию финансового консультанта | Babic Finance",
  description:
    "С поддержкой государства — Einstiegsgeld до 24 месяцев. Помогаем оформить Tragfähigkeitsbescheinigung, сопровождаем встречу с Jobcenter и путь до первого клиента.",
  alternates: { canonical: `${SITE_URL}${URL_PATH}` },
  openGraph: {
    title:
      "Путь из Bürgergeld в профессию финансового консультанта",
    description:
      "С поддержкой государства, Einstiegsgeld до 24 месяцев, и сопровождением от подачи документов до первого клиента.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Путь из Bürgergeld в профессию финансового консультанта",
    description:
      "Einstiegsgeld до 24 месяцев + полное сопровождение от документов до первого клиента.",
  },
};

export default function BuergergeldPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RecruitmentHero content={buergergeldHero} scrollTargetId="support" />
      <SupportComparison />
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
        eyebrow="Путь"
        title="Пошаговый план для Bürgergeld / ALG I"
        steps={buergergeldPathSteps}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-navy to-secondary" />
      <Transparenz
        eyebrow="Честно"
        title="Что важно знать заранее"
        subtitle="Программы господдержки — это возможность, но не гарантия. Вот что реально стоит понимать"
        items={buergergeldTransparenzItems}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-secondary to-navy" />
      <RecruitmentFAQ
        eyebrow="Вопросы"
        title="Вопросы про Jobcenter и Bürgergeld"
        items={buergergeldFAQItems}
      />
      <div aria-hidden className="h-12 bg-gradient-to-b from-navy to-white" />

      <p className="bg-white px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto text-muted-foreground/80 text-xs italic text-center leading-relaxed">
        Einstiegsgeld und Gründungszuschuss sind Ermessensleistungen. Gewährung
        erfolgt durch Jobcenter / Arbeitsagentur im Einzelfall.
      </p>
      <div aria-hidden className="h-12 bg-gradient-to-b from-white to-navy" />

      <FinalCTA
        title={buergergeldFinalCTA.title}
        description={buergergeldFinalCTA.description}
        primary={buergergeldFinalCTA.primary}
        secondary={buergergeldFinalCTA.secondary}
      />
      <RecruitmentQualificationForm sourcePage="buergergeld" />
      <Footer />
    </div>
  );
}
