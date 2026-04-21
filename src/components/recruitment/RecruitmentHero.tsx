"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroContent } from "@/data/recruitment";

type Props = {
  content: HeroContent;
  /**
   * Optional scroll target id (used by the scroll-indicator arrow).
   * Defaults to "recognize".
   */
  scrollTargetId?: string;
  /**
   * Background image — falls back to existing portrait.
   * TODO: replace with a recruitment-context photo (Vladislav with team/seminar).
   */
  backgroundSrc?: string;
  backgroundAlt?: string;
};

export default function RecruitmentHero({
  content,
  scrollTargetId = "recognize",
  backgroundSrc = "/vladislav-portrait.jpeg",
  backgroundAlt = "Vladislav Babic — team recruitment context (photo pending)",
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
        <Image
          src={backgroundSrc}
          alt={backgroundAlt}
          className="object-cover"
          fill
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Recruitment overlay — darker and more centered than /klienty hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
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
            className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
            {...fadeUp(0.4)}
          >
            {content.headline}
            <br />
            <span className="text-gold">{content.headlineAccent}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-xl text-white font-medium mb-4 max-w-2xl mx-auto leading-relaxed"
            {...fadeUp(0.5)}
          >
            {content.subtitle}
          </motion.p>

          <motion.p
            className="text-sm text-white/70 mb-10 max-w-xl mx-auto"
            {...fadeUp(0.55)}
          >
            {content.trustLine}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
