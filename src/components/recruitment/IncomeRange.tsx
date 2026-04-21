import AnimateOnScroll from "../AnimateOnScroll";
import { incomeContent as incomeContentRu } from "@/data/recruitment";

type IncomeContent = typeof incomeContentRu;

export default function IncomeRange({
  content = incomeContentRu,
  thisMeansLabel = "Это значит две вещи:",
}: {
  content?: IncomeContent;
  thisMeansLabel?: string;
} = {}) {
  const incomeContent = content;
  return (
    <section id="income" className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {incomeContent.eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {incomeContent.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              {incomeContent.subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main range card */}
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-2xl mx-auto rounded-2xl bg-gradient-to-br from-navy to-[#242a4e] text-white p-8 sm:p-10 text-center shadow-xl shadow-navy/10">
            <p className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-gold tracking-tight">
              {incomeContent.mainRange.value}
            </p>
            <p className="text-white/85 mt-3 text-base sm:text-lg">
              {incomeContent.mainRange.label}
            </p>
            <p className="text-white/50 text-xs mt-3 italic">
              {incomeContent.mainRange.source}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Small blocks */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {incomeContent.smallBlocks.map((block, i) => (
            <AnimateOnScroll key={block.label} animation="fade-up" delay={i * 100}>
              <div className="bg-cream rounded-xl p-6 text-center border border-border">
                <p className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy">
                  {block.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {block.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Explainer */}
        <AnimateOnScroll animation="fade-up">
          <div className="mt-12 max-w-3xl mx-auto">
            {incomeContent.explainer.map((p, i) => (
              <p
                key={i}
                className="text-foreground/80 leading-relaxed text-base mb-4"
              >
                {p}
              </p>
            ))}
            <p className="text-foreground/80 mb-3">{thisMeansLabel}</p>
            <ul className="space-y-3">
              {incomeContent.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>
                    <strong className="text-navy">{b.strong}</strong>
                    {b.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          <p className="text-muted-foreground/80 text-xs italic mt-10 text-center max-w-3xl mx-auto">
            {incomeContent.disclaimer}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
