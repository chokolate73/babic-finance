import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";
import { menteesPlaceholder, type MenteeStory } from "@/data/recruitment";

function isPlaceholder(mentees: MenteeStory[]) {
  return mentees.every((m) => m.name.startsWith("TODO"));
}

export default function MenteeStories({
  mentees = menteesPlaceholder,
}: {
  mentees?: MenteeStory[];
}) {
  const showPlaceholder = isPlaceholder(mentees);

  return (
    <section id="mentees" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Истории
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Люди, которые уже проходят этот путь
            </h2>
          </div>
        </AnimateOnScroll>

        {showPlaceholder ? (
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-2xl mx-auto bg-cream rounded-2xl border border-dashed border-gold/40 p-10 text-center">
              <p className="text-navy font-semibold text-lg">
                Этот блок в процессе заполнения
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Скоро здесь появятся реальные истории коллег, прошедших путь от
                первого знакомства до самостоятельного консультанта.
              </p>
            </div>
          </AnimateOnScroll>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {mentees.map((m, i) => (
              <AnimateOnScroll key={m.id} animation="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl border border-border overflow-hidden h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-cream">
                    <Image
                      src={m.photo}
                      alt={`Портрет: ${m.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-navy text-lg">
                      {m.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="text-navy/70">Было:</span>{" "}
                      {m.previousProfession}
                    </p>
                    <p className="text-sm text-gold font-medium mt-0.5">
                      Сейчас: {m.currentRole}
                      {m.yearsInDVAG ? `, с ${m.yearsInDVAG}` : ""}
                    </p>
                    <p className="text-sm text-foreground/80 mt-4 leading-relaxed flex-1">
                      {m.storyShort}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
