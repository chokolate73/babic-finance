"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import type { FAQItem } from "@/data/recruitment";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items: FAQItem[];
};

export default function RecruitmentFAQ({
  id = "faq",
  eyebrow = "Вопросы",
  title,
  items,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={id}
      className="pt-16 pb-20 lg:pt-20 lg:pb-28 bg-navy"
      style={{
        background:
          "radial-gradient(ellipse at center, #242a4e 0%, #1a1f3d 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-white mt-3">
              {title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 60}>
                <div
                  className={`border rounded-xl px-6 transition-colors ${
                    isOpen
                      ? "bg-white/[0.05] border-gold/40"
                      : "bg-transparent border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-white text-base"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {faq.q}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "1000px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-5 text-base text-white/85 leading-[1.7]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
