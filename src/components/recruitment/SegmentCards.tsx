"use client";

import { useState } from "react";
import { GraduationCap, FileCheck2, TrendingUp, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import AnimateOnScroll from "../AnimateOnScroll";
import { segmentCards as segmentCardsRu, type SegmentCard } from "@/data/recruitment";

const iconMap = {
  GraduationCap,
  FileCheck2,
  TrendingUp,
} as const;

type CardSurfaceProps = {
  card: SegmentCard;
  className?: string;
};

function CardSurface({ card, className }: CardSurfaceProps) {
  const Icon = iconMap[card.iconName];
  return (
    <div
      className={`flex flex-col h-full bg-white p-7 rounded-2xl border border-border hover:shadow-xl hover:border-l-4 hover:border-l-gold hover:-translate-y-1 transition-all duration-300 group ${className ?? ""}`}
    >
      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
        <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="font-semibold text-navy text-lg mb-2">{card.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {card.description}
      </p>
      <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-gold group-hover:underline">
        {card.ctaLabel}
      </span>
    </div>
  );
}

function PopupCard({ card, index }: { card: SegmentCard; index: number }) {
  const [open, setOpen] = useState(false);
  const popup = card.popup!;

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100} className="h-full">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button type="button" className="text-left w-full h-full">
            <CardSurface card={card} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-navy/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 sm:p-8 lg:p-12 shadow-2xl focus:outline-none">
            <Dialog.Close
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:bg-cream hover:text-navy transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
            <Dialog.Title className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy pr-8">
              {popup.title}
            </Dialog.Title>
            <Dialog.Description asChild>
              <p className="text-foreground/85 mt-5 leading-relaxed">
                {popup.intro}
              </p>
            </Dialog.Description>
            <ul className="mt-5 space-y-3">
              {popup.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-foreground/85 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/85 mt-6 leading-relaxed">
              {popup.body}
            </p>
            {popup.externalLink.href.startsWith("#") ? (
              <a
                href={popup.externalLink.href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 mt-7 px-5 py-2.5 bg-gold text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {popup.externalLink.label}
                <span aria-hidden="true">→</span>
              </a>
            ) : (
              <a
                href={popup.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-7 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors"
              >
                {popup.externalLink.label}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </AnimateOnScroll>
  );
}

function LinkCard({ card, index }: { card: SegmentCard; index: number }) {
  const isExternal = card.ctaHref.startsWith("http");

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100} className="h-full">
      <a
        href={card.ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        <CardSurface card={card} />
      </a>
    </AnimateOnScroll>
  );
}

function Card({ card, index }: { card: SegmentCard; index: number }) {
  if (card.popup) {
    return <PopupCard card={card} index={index} />;
  }
  return <LinkCard card={card} index={index} />;
}

type Props = {
  items?: readonly SegmentCard[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function SegmentCards({
  items = segmentCardsRu,
  eyebrow = "Для кого",
  title = "Для тебя, если...",
  subtitle = "Выбери ситуацию, которая ближе — и узнай путь в деталях",
}: Props = {}) {
  return (
    <section id="segments" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
