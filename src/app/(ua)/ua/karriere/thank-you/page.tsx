import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ua/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Zap, BookOpen, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Заявку надіслано | Babic Finance",
  description:
    "Твою заявку надіслано. Владислав зв'яжеться протягом дня.",
  robots: { index: false, follow: false },
};

type Card = {
  icon: "zap" | "whatsapp" | "book";
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  external?: boolean;
  accent: "gold" | "whatsapp" | "navy";
};

const CARDS: Card[] = [
  {
    icon: "zap",
    title: "Хочеш прискорити процес?",
    description: `Пройди офіційний DVAG-опитувальник «10 Fragen zum Traumberuf» — тоді у Владислава буде повна картина до зустрічі.`,
    ctaText: "Почати DVAG-опитувальник",
    ctaHref: "https://dvag-karriere.de/10-fragen",
    external: true,
    accent: "gold",
  },
  {
    icon: "whatsapp",
    title: "Термінове питання?",
    description:
      "Напиши напряму у WhatsApp — Владислав відповідає протягом години в робочий час.",
    ctaText: "Написати у WhatsApp",
    ctaHref: "https://wa.me/491784743490",
    external: true,
    accent: "whatsapp",
  },
  {
    icon: "book",
    title: "Хочеш дізнатися більше?",
    description:
      "Читай блог про роботу фінансовим консультантом у Німеччині та життя в Troisdorf.",
    ctaText: "До блогу",
    ctaHref: "/blog",
    accent: "navy",
  },
];

function CardIcon({ icon }: { icon: Card["icon"] }) {
  if (icon === "zap") return <Zap className="w-6 h-6 text-gold" />;
  if (icon === "whatsapp")
    return <WhatsAppIcon className="w-6 h-6 text-whatsapp" />;
  return <BookOpen className="w-6 h-6 text-navy" />;
}

export default function UaThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col" lang="uk">
      <Navbar forceDark />
      <main className="flex-1 pt-24 lg:pt-28 pb-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 mb-6">
                <Check className="w-8 h-8 text-gold" strokeWidth={3} />
              </div>
              <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl font-bold text-navy">
                Заявку надіслано!
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mt-5 leading-relaxed">
                Владислав отримав твої відповіді та зв'яжеться сьогодні через WhatsApp.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={150}>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy text-center mb-8">
              А поки що:
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {CARDS.map((card, i) => {
              const ctaStyles: Record<Card["accent"], string> = {
                gold: "bg-gold text-navy hover:brightness-105 shadow-gold/25",
                whatsapp:
                  "bg-whatsapp text-white hover:opacity-90 shadow-whatsapp/25",
                navy: "bg-navy text-white hover:bg-navy/90 shadow-navy/25",
              };
              const iconBg: Record<Card["accent"], string> = {
                gold: "bg-gold/10",
                whatsapp: "bg-whatsapp/10",
                navy: "bg-navy/10",
              };
              return (
                <AnimateOnScroll
                  key={card.title}
                  animation="fade-up"
                  delay={200 + i * 100}
                >
                  <div className="h-full bg-white rounded-2xl border border-border p-6 sm:p-7 flex flex-col">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${iconBg[card.accent]}`}
                    >
                      <CardIcon icon={card.icon} />
                    </div>
                    <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold text-navy mb-2.5 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {card.description}
                    </p>
                    <a
                      href={card.ctaHref}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center justify-center gap-2 w-full h-12 font-semibold rounded-full text-sm transition-all shadow-lg ${ctaStyles[card.accent]}`}
                    >
                      {card.icon === "whatsapp" && (
                        <WhatsAppIcon className="w-4 h-4" />
                      )}
                      {card.ctaText}
                    </a>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
