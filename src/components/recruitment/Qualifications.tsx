import AnimateOnScroll from "../AnimateOnScroll";
import {
  qualifications as qualificationsRu,
  qualificationsCallout as qualificationsCalloutRu,
} from "@/data/recruitment";

type QualificationItem = (typeof qualificationsRu)[number];
type Callout = typeof qualificationsCalloutRu;

type Props = {
  items?: readonly QualificationItem[];
  callout?: Callout;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function Qualifications({
  items = qualificationsRu,
  callout = qualificationsCalloutRu,
  eyebrow = "Квалификации",
  title = "Четыре квалификации в одной программе",
  description = "DVAG берёт на себя обучение, экзамены и лицензии — а ты получаешь профессию, которую ищут по всей Германии",
}: Props = {}) {
  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {title}
            </h2>
            <p className="text-muted-foreground mt-3">
              {description}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {items.map((q, i) => (
            <AnimateOnScroll
              key={q.id}
              animation="fade-up"
              delay={i * 100}
              className="h-full"
            >
              <div className="h-full bg-white p-7 rounded-2xl border border-border flex flex-col">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-[family-name:var(--font-serif)] font-bold text-gold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-lg leading-snug">
                      {q.title}
                    </h3>
                    <p className="text-sm text-gold mt-1 font-medium">
                      {q.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-14">
                  {q.description}
                </p>
                {q.link && (
                  <a
                    href={q.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 ml-14 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors self-start"
                  >
                    {q.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gold/30 bg-gold/5 p-6 sm:p-8 text-center">
            <p className="text-navy text-lg sm:text-xl font-semibold leading-snug">
              {callout.text}
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              {callout.sub}
            </p>
            <p className="text-muted-foreground/80 text-xs mt-4 italic">
              {callout.source}
            </p>
            {callout.link && (
              <a
                href={callout.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors"
              >
                {callout.link.label}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
