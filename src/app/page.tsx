import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoHero from "@/components/VideoHero";
import HeroVideo from "@/components/HeroVideo";
import Trust from "@/components/Trust";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Seminar from "@/components/Seminar";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";

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
      <Trust />
      <Benefits />
      <About />
      <PainPoints />
      <Services />
      <Testimonials />
      <Process />
      <Seminar />
      <FAQ />
      <BlogPreview />

      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
