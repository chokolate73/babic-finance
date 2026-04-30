import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

const messages = [
  { text: "Ich verstehe nicht, woher die Abzüge auf meinem Gehalt kommen 😐", time: "22:47" },
  { text: "Der Versicherungsberater spricht Deutsch - ich nicke und unterschreibe", time: "22:48" },
  { text: "Ich weiß nicht, ob meine Rente in Deutschland ausreichen wird", time: "22:49" },
  { text: "Ich möchte eine Wohnung kaufen, aber weiß nicht, wo ich anfangen soll", time: "22:51" },
  { text: "Alle reden von Steuern, aber ich weiß nicht einmal, was eine Steuerklasse ist 🫠", time: "22:53" },
];

export default function PainPoints() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Herausforderungen
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Kommt Ihnen das bekannt vor?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Wenn auch nur eines davon auf Sie zutrifft - Sie sind nicht allein
            </p>
          </div>
        </AnimateOnScroll>

        {/* Chat thread */}
        <div
          className="max-w-md mx-auto px-2 sm:px-0"
          aria-label="Visuelle Darstellung typischer Kundenfragen im Chat-Format"
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
                    alt="Vladislav"
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
                    Lassen Sie uns das gemeinsam klären - kostenlos und unverbindlich.
                  </p>
                  <span className="block text-[10px] text-white/40 mt-1">
                    Vladislav · 22:54
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
              Wenn auch nur eines davon auf Sie zutrifft - lassen Sie uns das gemeinsam klären.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
            >
              Kostenlose Beratung
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
