"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroContent } from "@/data/recruitment";

type Props = {
  content: HeroContent;
  scrollTargetId?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  videoSrc?: string;
};

export default function RecruitmentHero({
  content,
  scrollTargetId = "recognize",
  backgroundSrc = "/hero.png",
  backgroundAlt = "Babic Finance — карьера финансового консультанта в Германии",
  videoSrc = "/hero.mp4",
}: Props) {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  const bounce = prefersReduced
    ? {}
    : {
        animate: { y: [0, 8, 0] },
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Desktop background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={backgroundSrc}
            alt={backgroundAlt}
            className="object-cover"
            fill
            priority
            quality={85}
          />
        </div>
        {/* Mobile background: looping video */}
        <video
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* Desktop overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 via-40% to-transparent" />
        {/* Mobile overlay */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              {content.headline}
              <br />
              <span className="text-gold">{content.headlineAccent}</span>
            </motion.h1>

            {/* Subtitle with gold rules */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-4 mb-6"
              {...fadeUp(0.5)}
            >
              <div className="h-px w-10 shrink-0 bg-[#D4AF55]" />
              <span className="text-white/90 font-medium text-sm sm:text-base">
                {content.subtitle}
              </span>
              <div className="h-px w-10 shrink-0 bg-[#D4AF55]" />
            </motion.div>

            {/* Stat badges */}
            {content.stats && (
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-6"
                {...fadeUp(0.6)}
              >
                {content.stats.map((stat) => (
                  <span
                    key={stat.label}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90"
                  >
                    <span className="font-bold text-white">{stat.value}</span>{" "}
                    {stat.label}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Benefit pills */}
            {content.pills && (
              <motion.div
                className="flex flex-wrap justify-center gap-2 mb-10"
                {...fadeUp(0.65)}
              >
                {content.pills.map((pill) => (
                  <span
                    key={pill.text}
                    className={`px-4 py-1.5 text-sm text-white/90 border border-white/25 rounded-full${pill.mobileHidden ? " hidden sm:inline-flex" : ""}`}
                  >
                    {pill.text}
                  </span>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              {...fadeUp(0.7)}
            >
              <a
                href={content.primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-4 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-normal sm:whitespace-nowrap hover:brightness-105 transition-all shadow-lg shadow-gold/25 min-h-[44px] text-center"
              >
                {content.primaryCTA.text}
              </a>
              <a
                href={content.secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium rounded-full text-base hover:bg-white/10 transition-all min-h-[44px]"
              >
                {content.secondaryCTA.text}
              </a>
            </motion.div>

            <motion.p className="text-white/60 text-sm" {...fadeUp(0.8)}>
              {content.trustLine}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href={`#${scrollTargetId}`}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          aria-label="Прокрутить вниз"
        >
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
