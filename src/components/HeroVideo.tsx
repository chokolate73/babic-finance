"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";

const heroContent = {
  headline: "Персональный эксперт",
  headlineAccent: "по финансам в Германии",
  subtitle: "Владислав Бабич",
  stats: [
    { label: "Региональный директор DVAG" },
    { value: "391+", label: "клиентов" },
    { value: "С 2005", label: "года" },
  ],
  pills: ["Консультации", "Инвестиции", "Пенсия", "Страхование"],
  cta: {
    primary: { text: "Получить бесплатную консультацию", href: "https://wa.me/491784743490" },
    secondary: { text: "Как я работаю", href: "#process" },
  },
  trustLine: "Отвечаем в течение часа в рабочее время",
  scrollLabel: "Прокрутить вниз",
};

export default function HeroVideo() {
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
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Video Background with reduced-motion fallback */}
      <div className="absolute inset-0">
        {prefersReduced ? (
          <Image
            src="/hero.png"
            alt="Франкфурт"
            className="object-cover"
            fill
            priority
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
        {/* Base dimming layer */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Soft bottom-up gradient — full width, dark zone in lower half */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 25%, rgba(26,31,61,0.35) 50%, rgba(26,31,61,0.65) 100%)",
          }}
        />
      </div>

      {/* Portrait — desktop: right side anchored to bottom; mobile: top half */}
      <motion.div
        className="absolute bottom-0 right-0 lg:right-[2%] xl:right-[5%] z-10 pointer-events-none"
        {...(prefersReduced
          ? {}
          : {
              initial: { opacity: 0, y: 40 },
              animate: mounted
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 },
              transition: { duration: 0.8, delay: 0.5, ease: "easeOut" as const },
            })}
      >
        {/* Desktop portrait */}
        <Image
          src="/vladislav-portrait.png"
          alt="Владислав Бабич"
          className="hidden lg:block object-cover object-bottom"
          width={520}
          height={650}
          priority
          style={{
            height: "80vh",
            width: "auto",
            maxWidth: "40vw",
          }}
        />
        {/* Mobile portrait — positioned from top */}
        <Image
          src="/vladislav-portrait.png"
          alt="Владислав Бабич"
          className="lg:hidden object-cover object-top"
          width={300}
          height={400}
          priority
          style={{
            height: "45vh",
            width: "auto",
            maxWidth: "60vw",
          }}
        />
      </motion.div>

      {/* Text content — anchored to bottom of hero */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-28 pt-[45vh] sm:pt-[40vh] lg:pt-0">
        <div className="max-w-2xl text-center">
          {/* Gold decorative ornament */}
          <motion.div
            className="flex items-center justify-center justify-center gap-3 mb-4 lg:mb-6"
            {...fadeUp(0.2)}
          >
            <div className="h-0.5 w-12 bg-gold" />
            <div className="w-3 h-3 rotate-45 bg-gold shadow-sm shadow-gold/50" />
            <div className="h-0.5 w-12 bg-gold" />
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-serif)] font-bold text-white tracking-tight mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 1.08,
            }}
            {...fadeUp(0.4)}
          >
            {heroContent.headline}
            <br />
            <span className="text-gold">{heroContent.headlineAccent}</span>
          </motion.h1>

          <motion.p
            className="text-gold font-[family-name:var(--font-serif)] text-lg sm:text-xl lg:text-2xl font-medium mt-3 mb-5 lg:mb-6"
            {...fadeUp(0.5)}
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Stat badges */}
          <motion.div
            className="flex flex-wrap justify-center justify-center gap-2 lg:gap-3 mb-4 lg:mb-6"
            {...fadeUp(0.6)}
          >
            {heroContent.stats.map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-1.5 px-3 lg:px-4 py-1.5 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs lg:text-sm text-white/90"
              >
                {stat.value && (
                  <>
                    <span className="font-bold text-white">{stat.value}</span>{" "}
                  </>
                )}
                {stat.label}
              </span>
            ))}
          </motion.div>

          {/* Service pills — hidden on small mobile to save space */}
          <motion.div
            className="hidden sm:flex flex-wrap justify-center justify-center gap-2 mb-8 lg:mb-10"
            {...fadeUp(0.6)}
          >
            {heroContent.pills.map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 text-sm text-white/90 border border-white/25 rounded-full"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6"
            {...fadeUp(0.7)}
          >
            <a
              href={heroContent.cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в WhatsApp"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 lg:px-8 py-3.5 lg:py-4 bg-[#25D366] text-white font-semibold rounded-full text-base lg:text-lg hover:brightness-110 transition-all shadow-lg shadow-[#25D366]/25 min-h-[44px]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {heroContent.cta.primary.text}
            </a>
            <a
              href={heroContent.cta.secondary.href}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 lg:px-8 py-3.5 lg:py-4 border border-white/30 text-white font-medium rounded-full text-sm lg:text-base hover:bg-white/10 transition-all min-h-[44px]"
            >
              {heroContent.cta.secondary.text}
            </a>
          </motion.div>

          <motion.p className="text-white/60 text-xs lg:text-sm" {...fadeUp(0.8)}>
            {heroContent.trustLine}
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator — bottom-left, clear of portrait */}
      <div className="absolute bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 z-20">
        <a
          href="#trust"
          className="flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-[10px] lg:text-xs">{heroContent.scrollLabel}</span>
          <motion.svg
            className="w-4 h-4 lg:w-5 lg:h-5"
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
