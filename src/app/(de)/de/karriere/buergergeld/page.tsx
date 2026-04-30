import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/de/Footer";
import RecruitmentHero from "@/components/recruitment/RecruitmentHero";
import SupportComparison from "@/components/recruitment/SupportComparison";
import BenefitsList from "@/components/recruitment/BenefitsList";
import CareerPath from "@/components/recruitment/CareerPath";
import RecruitmentFAQ from "@/components/recruitment/RecruitmentFAQ";
import FinalCTA from "@/components/recruitment/FinalCTA";
import RecruitmentQualificationForm from "@/components/recruitment/RecruitmentQualificationForm";
import {
  buergergeldHero,
  buergergeldHelp,
  buergergeldPathSteps,
  buergergeldFAQItems,
  buergergeldFinalCTA,
  supportTable,
  ui,
  legalDisclaimers,
} from "@/data/recruitment.de";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const URL_PATH = "/de/karriere/buergergeld";
const SITE_URL = "https://www.fin-1.de";

export const metadata: Metadata = {
  title:
    "Vom Bürgergeld in den Beruf als Finanzberater | Babic Finance",
  description:
    "Mit staatlicher Unterstützung - Einstiegsgeld bis zu 24 Monate. Wir helfen bei der Tragfähigkeitsbescheinigung, begleiten den Jobcenter-Termin und den Weg bis zum ersten Kunden.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/karriere/buergergeld`,
      de: `${SITE_URL}${URL_PATH}`,
      uk: `${SITE_URL}/ua/karriere/buergergeld`,
      "x-default": `${SITE_URL}/karriere/buergergeld`,
    },
  },
  openGraph: {
    title: "Vom Bürgergeld in den Beruf als Finanzberater",
    description:
      "Mit staatlicher Unterstützung, Einstiegsgeld bis zu 24 Monate, und Begleitung von den Unterlagen bis zum ersten Kunden.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vom Bürgergeld in den Beruf als Finanzberater",
    description:
      "Einstiegsgeld bis zu 24 Monate + volle Begleitung von den Unterlagen bis zum ersten Kunden.",
    images: ["/preview.webp"],
  },
};

export default function DeBuergergeldPage() {
  return (
    <div className="min-h-screen" lang="de">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Startseite", url: `${SITE_URL}/de` },
          { name: "Karriere", url: `${SITE_URL}/de/karriere/quereinstieg` },
          { name: "Bürgergeld → Beruf", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar />
      <RecruitmentHero
        content={buergergeldHero}
        scrollTargetId="support"
        scrollLabel={ui.heroScrollLabel}
        backgroundAlt="Babic Finance - Karriere als Finanzberater in Deutschland"
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
      <RecruitmentQualificationForm sourcePage="buergergeld" locale="de" />
      <Footer />
    </div>
  );
}
