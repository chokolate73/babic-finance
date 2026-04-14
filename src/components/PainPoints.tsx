import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const messages = [
  { text: "Не понимаю, откуда берутся вычеты в моей зарплате 😐", time: "22:47" },
  { text: "Страховой агент говорит по-немецки - киваю и подписываю", time: "22:48" },
  { text: "Не знаю, хватит ли мне пенсии в Германии", time: "22:49" },
  { text: "Хочу купить квартиру, но не понимаю, с чего начать", time: "22:51" },
  { text: "Пугают налогами, а я не знаю, что такое Steuerklasse 🫠", time: "22:53" },
];

export default function PainPoints() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Проблемы
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Знакомая ситуация?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Если хоть что-то из этого про вас - вы не одни
            </p>
          </div>
        </AnimateOnScroll>

        {/* Chat thread */}
        <div
          className="max-w-md mx-auto px-2 sm:px-0"
          aria-label="Визуальное представление типичных вопросов клиентов в формате чата"
        >
          {/* Outgoing messages */}
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

          {/* Typing indicator + reply */}
          <div className="mt-5 flex flex-col gap-2.5">
            <AnimateOnScroll animation="fade-up" delay={550}>
              {/* Typing dots */}
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

            {/* Vladislav's reply */}
            <AnimateOnScroll animation="fade-up" delay={700}>
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 flex-shrink-0" />
                <div
                  className="bg-navy text-white px-4 py-2.5 max-w-[85%]"
                  style={{ borderRadius: "16px 16px 16px 4px" }}
                >
                  <p className="text-[13px] sm:text-[14px] leading-relaxed">
                    Давайте разберёмся вместе - это бесплатно.
                  </p>
                  <span className="block text-[10px] text-white/40 mt-1">
                    Владислав · 22:54
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={800}>
          <div className="text-center mt-10 lg:mt-14">
            <p className="text-muted-foreground text-sm mb-6">
              Если хоть что-то из этого - про вас, давайте разберёмся вместе.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
            >
              Бесплатная консультация
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
