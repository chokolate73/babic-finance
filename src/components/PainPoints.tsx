import AnimateOnScroll from "./AnimateOnScroll";

const painPoints = [
  "Не понимаю, откуда берутся вычеты в моей зарплате",
  "Страховой агент говорит по-немецки — киваю и подписываю",
  "Не знаю, хватит ли мне пенсии в Германии",
  "Хочу купить квартиру, но не понимаю, с чего начать",
  "Плачу за страховку, но не уверен, что она мне вообще нужна",
  "Пугают налогами, а я даже не знаю, что такое Steuerklasse",
];

export default function PainPoints() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Проблемы
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Знакомая ситуация?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Если хоть что-то из этого про вас — вы не одни
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 80} className="h-full">
              <div className="bg-white p-6 rounded-xl border border-border flex items-start gap-4 h-full">
                <span className="text-gold text-xl leading-none mt-0.5 flex-shrink-0">?</span>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {point}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-8">
              Если хоть что-то из этого — про вас, давайте разберёмся вместе.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Получить бесплатную консультацию
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
