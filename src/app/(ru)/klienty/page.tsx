import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Trust from "@/components/Trust";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/faq";
import { getBreadcrumbLd, getFaqLd } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/klienty";

export const metadata: Metadata = {
  title: "Babic Finance",
  description:
    "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}${URL_PATH}`,
      de: `${SITE_URL}/de${URL_PATH}`,
      uk: `${SITE_URL}/ua${URL_PATH}`,
    },
  },
  openGraph: {
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "ru_RU",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
    images: ["/preview.webp"],
  },
};

export default function KlientyPage() {
  return (
    <div className="min-h-screen">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Главная", url: SITE_URL },
          { name: "Услуги", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <JsonLd data={getFaqLd(faqs, "ru")} />
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
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
