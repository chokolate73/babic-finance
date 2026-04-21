import { GraduationCap, FileCheck2, TrendingUp } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import { segmentCards, type SegmentCard } from "@/data/recruitment";

const iconMap = {
  GraduationCap,
  FileCheck2,
  TrendingUp,
} as const;

function Card({ card, index }: { card: SegmentCard; index: number }) {
  const Icon = iconMap[card.iconName];
  const isExternal = card.ctaHref.startsWith("http");

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 100} className="h-full">
      <a
        href={card.ctaHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex flex-col h-full bg-white p-7 rounded-2xl border border-border hover:shadow-xl hover:border-l-4 hover:border-l-gold hover:-translate-y-1 transition-all duration-300 group"
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
      </a>
    </AnimateOnScroll>
  );
}

export default function SegmentCards() {
  return (
    <section id="segments" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Для кого
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Для тебя, если...
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Выбери ситуацию, которая ближе — и узнай путь в деталях
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {segmentCards.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
