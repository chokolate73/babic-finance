import type { Metadata } from "next";
import Navbar from "@/components/de/Navbar";
import Hero from "@/components/de/Hero";
import PainPoints from "@/components/de/PainPoints";
import Trust from "@/components/de/Trust";
import Benefits from "@/components/de/Benefits";
import About from "@/components/de/About";
import Services from "@/components/de/Services";
import Testimonials from "@/components/de/Testimonials";
import LeadMagnet from "@/components/de/LeadMagnet";
import Process from "@/components/de/Process";
import Seminar from "@/components/de/Seminar";
import FAQ from "@/components/de/FAQ";
import Contact from "@/components/de/Contact";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faq.de";
import { getBreadcrumbLd, getFaqLd } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/klienty";

export const metadata: Metadata = {
  title:
    "Persönlicher Finanzberater in Deutschland — auf Russisch & Deutsch | Babic Finance",
  description:
    "Finanzberatung in Deutschland — Vorsorge, Versicherung, Bürgergeld, Investitionen. Persönliche Beratung in Russisch und Deutsch von Vladislav Babic, DVAG Troisdorf.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/klienty`,
      de: `${SITE_URL}${URL_PATH}`,
      uk: `${SITE_URL}/ua/klienty`,
      "x-default": `${SITE_URL}/klienty`,
    },
  },
  openGraph: {
    title:
      "Persönlicher Finanzberater in Deutschland — auf Russisch & Deutsch | Babic Finance",
    description:
      "Finanzberatung in Deutschland — Vorsorge, Versicherung, Bürgergeld, Investitionen.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Persönlicher Finanzberater in Deutschland — auf Russisch & Deutsch | Babic Finance",
    description:
      "Finanzberatung in Deutschland — Vorsorge, Versicherung, Bürgergeld, Investitionen.",
    images: ["/preview.webp"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Startseite", url: `${SITE_URL}/de` },
          { name: "Leistungen", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <JsonLd data={getFaqLd(faqs, "de")} />
      <Navbar />
      <Hero />
      <PainPoints />
      <Trust />
      <Services />
      <Benefits />
      <About />
      <Testimonials />
      <LeadMagnet />
      <Process />
      <Seminar />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
