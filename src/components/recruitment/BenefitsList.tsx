import { CheckCircle2 } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

type Item = { title: string; description: string };

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items: Item[];
  background?: "white" | "cream";
};

export default function BenefitsList({
  id,
  eyebrow,
  title,
  items,
  background = "white",
}: Props) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${background === "cream" ? "bg-cream" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            {eyebrow && (
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                {eyebrow}
              </span>
            )}
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {title}
            </h2>
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
              <div
                className={`h-full p-6 rounded-xl border border-border ${background === "cream" ? "bg-white" : "bg-cream"}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
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
