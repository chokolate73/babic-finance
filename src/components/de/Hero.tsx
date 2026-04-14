"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "../WhatsAppIcon";

const heroContent = {
  headline: "Persönlicher Experte",
  headlineAccent: "für Finanzen in Deutschland",
  subtitle: "Wladislaw Babitsch",
  stats: [
    { value: "21", label: "Jahre Erfahrung" },
    { value: "4\u00a0387", label: "Kunden" },
    { value: "131+ Mio. €", label: "unter Verwaltung" },
  ],
  pills: [
    { text: "Immobilienfinanzierung" },
    { text: "Versicherung" },
    { text: "Investitionen & Fonds" },
    { text: "Altersvorsorge", mobileHidden: true },
  ],
  cta: {
    primary: { text: "Kostenlose Beratung", href: "https://wa.me/491784743490" },
    secondary: { text: "So arbeite ich", href: "#process" },
  },
  trustLine: "Wir antworten innerhalb einer Stunde während der Geschäftszeiten",
  scrollLabel: "Nach unten scrollen",
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  const bounce = prefersReduced
    ? {}
    : {
        animate: { y: [0, 8, 0] },
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <section className="relative min-h-[100svh] flex items-start md:items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Desktop background: Frankfurt skyline wide shot */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/hero.png"
            alt="Finanzberater in Deutschland"
            className="object-cover"
            fill
            priority
            quality={85}
          />
        </div>
        {/* Mobile background: crop of /hero.png zoomed to chest-up of Vladislav */}
        <div
          className="md:hidden absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "auto 220%",
            backgroundPosition: "center top",
          }}
        />
        {/* Desktop overlay: gradient with exposed right side (for bg image focal point) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-40% to-transparent" />
        {/* Mobile overlay: vertical gradient — top stays lighter so face reads, bottom darker for text legibility */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[55vh] pb-12 md:py-20">
        <div>
          <div className="max-w-2xl text-center">
            {/* Gold decorative line */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              {...fadeUp(0.2)}
            >
              <div className="h-px w-10 bg-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-10 bg-gold" />
            </motion.div>

            <motion.h1
              className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
              {...fadeUp(0.4)}
            >
              {heroContent.headline}
              <br />
              <span className="text-gold">{heroContent.headlineAccent}</span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-4 mt-4 mb-6"
              {...fadeUp(0.5)}
            >
              <div className="h-px w-10 shrink-0 bg-[#D4AF55]" />
              <span className="text-white not-italic font-medium uppercase text-[1.1rem] tracking-[0.15em]">
                {heroContent.subtitle}
              </span>
              <div className="h-px w-10 shrink-0 bg-[#D4AF55]" />
            </motion.div>

            {/* Stat badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6"
              {...fadeUp(0.6)}
            >
              {heroContent.stats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90"
                >
                  <span className="font-bold text-white">{stat.value}</span>{" "}
                  {stat.label}
                </span>
              ))}
            </motion.div>

            {/* Service pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-10"
              {...fadeUp(0.6)}
            >
              {heroContent.pills.map((pill) => (
                <span
                  key={pill.text}
                  className={`px-4 py-1.5 text-sm text-white/90 border border-white/25 rounded-full${pill.mobileHidden ? " hidden sm:inline-flex" : ""}`}
                >
                  {pill.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              {...fadeUp(0.7)}
            >
              <a
                href={heroContent.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nachricht per WhatsApp senden"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] text-white font-semibold rounded-full text-sm sm:text-lg whitespace-nowrap hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/25 min-h-[44px]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {heroContent.cta.primary.text}
              </a>
              <a
                href={heroContent.cta.secondary.href}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium rounded-full text-base hover:bg-white/10 transition-all min-h-[44px]"
              >
                {heroContent.cta.secondary.text}
              </a>
            </motion.div>

            <motion.p className="text-white/60 text-sm" {...fadeUp(0.8)}>
              {heroContent.trustLine}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#trust"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs">{heroContent.scrollLabel}</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...bounce}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </a>
      </div>
    </section>
  );
}
