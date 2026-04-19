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
import Seminar from "@/components/Seminar";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Babic Finance",
  description:
    "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
  openGraph: {
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
    url: "https://babic-wealth-guide.base44.app/klienty",
    siteName: "Babic Finance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
  },
};

export default function KlientyPage() {
  return (
    <div className="min-h-screen">
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
