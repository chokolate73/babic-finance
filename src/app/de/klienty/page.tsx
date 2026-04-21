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

export default function Home() {
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
