import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/ua/Hero";
import PainPoints from "@/components/ua/PainPoints";
import Trust from "@/components/ua/Trust";
import Benefits from "@/components/ua/Benefits";
import About from "@/components/ua/About";
import Services from "@/components/ua/Services";
import Testimonials from "@/components/ua/Testimonials";
import LeadMagnet from "@/components/ua/LeadMagnet";
import Process from "@/components/ua/Process";
import Seminar from "@/components/ua/Seminar";
import FAQ from "@/components/ua/FAQ";
import Contact from "@/components/ua/Contact";
import Footer from "@/components/ua/Footer";
import FloatingButtons from "@/components/ua/FloatingButtons";

const SITE_URL = "https://fin-1.de";
const URL_PATH = "/ua/klienty";

export const metadata: Metadata = {
  title:
    "Особистий фінансовий консультант у Німеччині — українською | Babic Finance",
  description:
    "Особистий фінансовий консультант у Німеччині. Консультуємо українською, російською та німецькою. Інвестиції, страхування, пенсія, іпотека. DVAG.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
    languages: {
      ru: `${SITE_URL}/klienty`,
      de: `${SITE_URL}/de/klienty`,
      uk: `${SITE_URL}${URL_PATH}`,
    },
  },
  openGraph: {
    title:
      "Особистий фінансовий консультант у Німеччині — українською",
    description:
      "Особистий фінансовий консультант у Німеччині. Консультуємо українською. DVAG.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: ["/preview.webp"],
  },
};

export default function UaKlientyPage() {
  return (
    <div className="min-h-screen" lang="uk">
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
