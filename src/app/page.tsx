import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoHero from "@/components/VideoHero";
import Trust from "@/components/Trust";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Seminar from "@/components/Seminar";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Social from "@/components/Social";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoHero />
      <Trust />
      <Benefits />
      <About />
      <Services />
      <Seminar />
      <Process />
      <FAQ />
      <Social />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
