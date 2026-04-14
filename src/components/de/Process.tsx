import AnimateOnScroll from "../AnimateOnScroll";

const steps = [
  {
    num: 1,
    title: "Sie stellen eine Anfrage",
    desc: "Über die Website, WhatsApp oder per Telefon",
  },
  {
    num: 2,
    title: "Kostenloses Gespräch",
    desc: "Wir besprechen Ihre Situation, Ziele und Wünsche",
  },
  {
    num: 3,
    title: "Analyse und Auswahl",
    desc: "Ich erarbeite persönliche Lösungen für Ihre Anliegen",
  },
  {
    num: 4,
    title: "Umsetzung",
    desc: "Wir übernehmen alle Unterlagen und Formalitäten",
  },
  {
    num: 5,
    title: "Laufende Betreuung",
    desc: "Ständige Unterstützung und regelmäßige Überprüfung",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-navy"
      style={{
        background:
          "radial-gradient(ellipse at center, #242a4e 0%, #1a1f3d 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8 lg:mb-14">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-4xl font-bold text-white">
              So läuft die Zusammenarbeit ab
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Mobile: compact list */}
        <div className="lg:hidden">
          <AnimateOnScroll animation="fade-up">
            <div className="space-y-4">
              {steps.map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center text-base font-bold font-[family-name:var(--font-serif)] flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-semibold text-white text-sm">
                      {s.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-0.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        {/* Desktop: horizontal grid */}
        <div className="hidden lg:block relative">
          <div
            className="absolute top-10 left-[10%] right-[10%] h-0.5"
            style={{
              background:
                "linear-gradient(to right, rgba(201,168,76,0.2), rgba(201,168,76,0.4), rgba(201,168,76,0.2))",
            }}
          />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} animation="fade-up" delay={i * 150}>
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-full bg-gold text-navy flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-serif)] relative z-10 shadow-lg shadow-gold/20">
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-white mt-5 mb-2 text-base">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">
                    {s.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center mt-10 lg:mt-20">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 bg-gold text-navy font-semibold rounded-full text-sm sm:text-lg whitespace-nowrap hover:opacity-90 transition-all"
            >
              Kostenlose Beratung
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
