import Image from "next/image";
import AnimateOnScroll from "../AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy"
    >
      <Image
        src="/wmremove-transformed (2).png"
        alt=""
        fill
        loading="lazy"
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/55" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-6 lg:py-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-3 lg:mb-4">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Моя історія
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="space-y-3 lg:space-y-4">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="lg:w-[44%] lg:mr-auto text-left md:text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Я приїхав до Німеччини у 2003 році з Естонії. Без знання мови,
                без зв'язків, без підтримки. Єдине, що я мав, - це бажання
                досягти більшого.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="lg:w-[44%] lg:ml-auto text-left md:text-center lg:text-right">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:ml-auto lg:mx-0">
                Наприкінці 2004 року я вперше зіткнувся з фінансовою сферою.
                Мені казали: «Спершу вивчи мову», «Спочатку розберися із
                законами». Я обрав інший шлях - почав одразу. Вчився,
                помилявся й зростав - у самому процесі.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="lg:w-[44%] lg:mr-auto text-left md:text-center lg:text-left">
              <p className="text-white/[0.92] text-base sm:text-lg lg:text-[18px] leading-[1.65] max-w-[52ch] mx-auto lg:mx-0">
                Сьогодні я допомагаю людям не лише будувати фінансове майбутнє,
                а й показую, що в Німеччині можна почати з нуля й реалізувати
                себе - навіть без знання мови, досвіду та впевненості.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <blockquote className="text-center mt-3 lg:mt-4">
            <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl lg:text-[28px] font-semibold italic leading-snug max-w-[620px] mx-auto">
              Моя місія - прибрати страх і дати людям шанс почати.
            </p>
          </blockquote>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
