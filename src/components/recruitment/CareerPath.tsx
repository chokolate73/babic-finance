import AnimateOnScroll from "../AnimateOnScroll";
import type { PathStep } from "@/data/recruitment";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  steps: PathStep[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CareerPath({
  id = "path",
  eyebrow,
  title,
  steps,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <section
      id={id}
      className="py-20 lg:py-28 bg-navy"
      style={{
        background:
          "radial-gradient(ellipse at center, #242a4e 0%, #1a1f3d 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
            {eyebrow && (
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                {eyebrow}
              </span>
            )}
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-white mt-3">
              {title}
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Mobile: list */}
        <div className="lg:hidden">
          <div className="space-y-5">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} animation="fade-up" delay={i * 70}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center text-base font-bold font-[family-name:var(--font-serif)] flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-white text-base">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Desktop: grid with connector */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-10 left-[8%] right-[8%] h-0.5"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.2), rgba(201,168,76,0.45), rgba(201,168,76,0.2))",
            }}
          />
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
            }}
          >
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} animation="fade-up" delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gold text-navy flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-serif)] relative z-10 shadow-lg shadow-gold/20">
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-white mt-5 mb-2 text-base">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed max-w-[220px]">
                    {s.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {ctaLabel && ctaHref && (
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="text-center mt-12 lg:mt-20">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 bg-gold text-navy font-semibold rounded-full text-sm sm:text-lg whitespace-nowrap hover:opacity-90 transition-all"
              >
                {ctaLabel}
              </a>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </section>
  );
}
