import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-navy bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/wmremove-transformed (2).png')" }}
      />
      {/* Overlay — 55% opacity to keep text readable over image */}
      <div className="absolute inset-0 bg-navy/55" />

      {/* Content — capped at 1200px for ultra-wide screens */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Heading — no eyebrow */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-9 lg:mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Моя история
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Alternating paragraphs */}
        <div className="space-y-8 lg:space-y-10">
          {/* Paragraph 1 — left */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="lg:w-[44%] lg:mr-auto text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Я приехал в Германию в 2003 году из Эстонии. Без языка, без
                связей, без поддержки. Единственное, что у меня было — желание
                добиться большего.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 2 — right */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="lg:w-[44%] lg:ml-auto text-center lg:text-right">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:ml-auto lg:mx-0">
                В конце 2004 года я впервые познакомился с финансовым бизнесом.
                Мне говорили: «Сначала выучи язык», «Разберись в законах». Я
                выбрал другой путь — начал действовать сразу. Учился, ошибался,
                рос — прямо в процессе.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 3 — left */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="lg:w-[44%] lg:mr-auto text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Сегодня я помогаю людям не только выстраивать финансовое будущее,
                но и показываю, что в Германии возможно реализовать себя с нуля.
                Даже если у вас нет языка, опыта или уверенности.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Pull-quote climax */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <blockquote className="text-center mt-10 lg:mt-14">
            <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl lg:text-[28px] font-semibold italic leading-snug max-w-[620px] mx-auto">
              Моя миссия — убрать страх и дать людям шанс начать.
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
