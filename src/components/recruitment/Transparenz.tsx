import { CircleAlert } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import type { TransparenzItem } from "@/data/recruitment";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: TransparenzItem[];
};

export default function Transparenz({
  id = "transparenz",
  eyebrow = "Честно",
  title = "Без розовых очков",
  subtitle = "Это честный разговор про то, что значит работать в этой профессии",
  items,
}: Props) {
  return (
    <section id={id} className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <AnimateOnScroll
              key={item.title}
              animation="fade-up"
              delay={i * 80}
              className="h-full"
            >
              <div className="h-full bg-white p-6 rounded-xl border border-border">
                <div className="flex items-start gap-3 mb-3">
                  <CircleAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-navy leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
