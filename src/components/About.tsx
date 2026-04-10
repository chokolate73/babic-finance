import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14 lg:py-16">
        {/* Heading */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8 lg:mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Обо мне
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
              Моя история
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Alternating paragraphs */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Paragraph 1 — left */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="lg:w-[45%] lg:mr-auto text-center lg:text-left">
              <p className="text-white/90 text-base sm:text-lg lg:text-[17px] leading-[1.65] max-w-[55ch] mx-auto lg:mx-0">
                Я приехал в Германию в 2003 году из Эстонии. Без языка, без
                связей, без поддержки. Единственное, что у меня было — желание
                добиться большего.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 2 — right */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="lg:w-[45%] lg:ml-auto text-center lg:text-right">
              <p className="text-white/90 text-base sm:text-lg lg:text-[17px] leading-[1.65] max-w-[55ch] mx-auto lg:ml-auto lg:mx-0">
                В конце 2004 года я впервые познакомился с финансовым бизнесом.
                Мне говорили: «Сначала выучи язык», «Разберись в законах». Я
                выбрал другой путь — начал действовать сразу. Учился, ошибался,
                рос — прямо в процессе.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 3 — left */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="lg:w-[45%] lg:mr-auto text-center lg:text-left">
              <p className="text-white/90 text-base sm:text-lg lg:text-[17px] leading-[1.65] max-w-[55ch] mx-auto lg:mx-0">
                Сегодня я помогаю людям не только выстраивать финансовое будущее,
                но и показываю, что в Германии возможно реализовать себя с нуля.
                Даже если у вас нет языка, опыта или уверенности.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Pull-quote climax */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <blockquote className="text-center mt-10 sm:mt-12 lg:mt-14">
            <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl lg:text-3xl font-semibold italic leading-snug max-w-2xl mx-auto">
              Моя миссия — убрать страх и дать людям шанс начать.
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
