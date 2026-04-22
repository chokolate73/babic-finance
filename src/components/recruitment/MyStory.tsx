import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";
import { myStoryContent as myStoryContentRu } from "@/data/recruitment";

type StoryContent = {
  title: string;
  paragraphs: readonly string[];
  pullQuote: string;
};

export default function MyStory({
  content = myStoryContentRu,
}: {
  content?: StoryContent;
} = {}) {
  const myStoryContent = content;
  return (
    <section id="story" className="relative overflow-hidden bg-navy">
      <Image
        src="/wmremove-transformed (2).png"
        alt=""
        fill
        loading="lazy"
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {myStoryContent.title}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4 lg:space-y-5">
          {myStoryContent.paragraphs.map((para, i) => {
            const alignLeft = i % 2 === 0;
            return (
              <AnimateOnScroll
                key={i}
                animation="fade-up"
                delay={100 + i * 100}
              >
                <div
                  className={
                    alignLeft
                      ? "lg:w-[46%] lg:mr-auto text-left md:text-center lg:text-left"
                      : "lg:w-[46%] lg:ml-auto text-left md:text-center lg:text-right"
                  }
                >
                  <p
                    className={`text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto ${
                      alignLeft ? "lg:mx-0" : "lg:ml-auto lg:mx-0"
                    }`}
                  >
                    {para}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <AnimateOnScroll animation="fade-up" delay={500}>
          <blockquote className="text-center mt-6 lg:mt-10">
            <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl lg:text-[28px] font-semibold italic leading-snug max-w-[720px] mx-auto">
              {myStoryContent.pullQuote}
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
