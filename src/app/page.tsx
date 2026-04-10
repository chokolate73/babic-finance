import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoHero from "@/components/VideoHero";
import HeroVideo from "@/components/HeroVideo";
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoHero />
      <HeroVideo />
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
// deploy trigger
