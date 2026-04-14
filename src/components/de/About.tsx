import AnimateOnScroll from "../AnimateOnScroll";

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
      {/* Overlay - 55% opacity to keep text readable over image */}
      <div className="absolute inset-0 bg-navy/55" />

      {/* Content - capped at 1200px for ultra-wide screens */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-6 lg:py-8">
        {/* Heading - no eyebrow */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-3 lg:mb-4">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Meine Geschichte
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Alternating paragraphs */}
        <div className="space-y-3 lg:space-y-4">
          {/* Paragraph 1 - left */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="lg:w-[44%] lg:mr-auto text-left md:text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Ich kam 2003 aus Estland nach Deutschland. Ohne Sprachkenntnisse,
                ohne Kontakte, ohne Unterstützung. Das Einzige, was ich hatte,
                war der Wunsch, mehr zu erreichen.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 2 - right */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="lg:w-[44%] lg:ml-auto text-left md:text-center lg:text-right">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:ml-auto lg:mx-0">
                Ende 2004 kam ich zum ersten Mal mit der Finanzbranche in Berührung.
                Man sagte mir: „Lerne erst die Sprache", „Mache dich mit den
                Gesetzen vertraut". Ich habe einen anderen Weg gewählt - ich
                habe sofort angefangen. Gelernt, Fehler gemacht und gewachsen -
                mitten im Prozess.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Paragraph 3 - left */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="lg:w-[44%] lg:mr-auto text-left md:text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Heute helfe ich Menschen nicht nur dabei, ihre finanzielle Zukunft
                aufzubauen, sondern zeige ihnen auch, dass es in Deutschland
                möglich ist, bei null anzufangen und sich zu verwirklichen -
                auch ohne Sprachkenntnisse, Erfahrung oder Selbstvertrauen.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Pull-quote climax */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <blockquote className="text-center mt-3 lg:mt-4">
            <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl lg:text-[28px] font-semibold italic leading-snug max-w-[620px] mx-auto">
              Meine Mission ist es, die Angst zu nehmen und Menschen die Chance zu geben, anzufangen.
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
