import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Seminar from "@/components/Seminar";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <AboutMe />
      <Process />
      <Seminar />
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
