import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

type Message = { text: string; time: string };

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  messages: readonly Message[];
  reply: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function CareerPainPoints({
  id = "recognize",
  eyebrow,
  title,
  subtitle,
  messages,
  reply,
  ctaLabel,
  ctaHref,
}: Props) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
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

        <div
          className="max-w-md mx-auto px-2 sm:px-0"
          aria-label="Визуальное представление типичных карьерных вопросов в формате чата"
        >
          <div className="flex flex-col gap-2.5">
            {messages.map((msg, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="flex justify-end">
                  <div
                    className="bg-white text-navy px-4 py-2.5 max-w-[85%] relative"
                    style={{
                      borderRadius: "16px 16px 4px 16px",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                      border: "0.5px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <p className="text-[13px] sm:text-[14px] leading-relaxed">
                      {msg.text}
                    </p>
                    <span className="block text-[10px] text-muted-foreground text-right mt-1">
                      {msg.time}
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <AnimateOnScroll
              animation="fade-up"
              delay={messages.length * 80 + 120}
            >
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/vladislav-portrait.jpeg"
                    alt="Владислав"
                    width={28}
                    height={28}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="bg-navy px-4 py-3 flex gap-1.5 items-center"
                  style={{ borderRadius: "16px 16px 16px 4px" }}
                >
                  <span
                    className="typing-dot w-1.5 h-1.5 bg-white/70 rounded-full"
                    style={{ animationDelay: "0s" }}
                  />
                  <span
                    className="typing-dot w-1.5 h-1.5 bg-white/70 rounded-full"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <span
                    className="typing-dot w-1.5 h-1.5 bg-white/70 rounded-full"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              animation="fade-up"
              delay={messages.length * 80 + 280}
            >
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 flex-shrink-0" />
                <div
                  className="bg-navy text-white px-4 py-2.5 max-w-[85%]"
                  style={{ borderRadius: "16px 16px 16px 4px" }}
                >
                  <p className="text-[13px] sm:text-[14px] leading-relaxed">
                    {reply}
                  </p>
                  <span className="block text-[10px] text-white/40 mt-1">
                    Владислав
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll animation="fade-up" delay={800}>
          <div className="text-center mt-10 lg:mt-14">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
            >
              {ctaLabel}
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
