import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Обо мне
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Моя история
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Portrait */}
          <AnimateOnScroll animation="fade-left">
            <div className="mx-auto lg:mx-0 w-64 sm:w-72 flex-shrink-0">
              <div className="relative p-3">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold rounded-tl-xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold rounded-br-xl" />
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/c8c10b707_generated_318bd947.png"
                    alt="Владислав Бабич — финансовый консультант"
                    className="w-full h-auto object-cover"
                    width={400}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="space-y-6 text-foreground/80 leading-[1.6] text-base sm:text-lg max-w-[65ch]">
              <p>
                Я приехал в Германию в 2003 году из Эстонии с чёткой целью —
                построить свой бизнес. Тогда я не знал немецкого языка и не имел
                здесь ни связей, ни поддержки. Единственное, что у меня было — это
                желание добиться большего.
              </p>
              <p>
                В поисках возможностей я посещал все бизнес-семинары, которые мог
                найти — на понятном мне языке. В конце 2004 года я впервые
                познакомился с финансовым бизнесом и принял решение, которое
                изменило мою жизнь.
              </p>
              <p>
                Уже в январе 2005 года я сказал себе: я буду строить этот бизнес
                здесь и сейчас. Несмотря на то, что мне говорили: &laquo;Сначала выучи
                язык&raquo;, &laquo;Разберись в законах&raquo;, &laquo;Пойми систему&raquo; — я выбрал другой
                путь. Я начал действовать сразу. Учился, ошибался, рос — прямо в
                процессе.
              </p>
              <p>
                Сегодня, спустя более 20 лет, я являюсь региональным директором и
                финансовым коучем. В моём бизнесе — тысячи клиентов и сильная
                команда. Огромную роль в моём пути сыграла моя семья. Именно
                благодаря ей я стал тем, кем являюсь сегодня.
              </p>
              <p className="font-medium text-navy">
                Я помогаю людям не только выстраивать финансовое будущее, но и
                показываю, что в Германии возможно реализовать себя с нуля. Даже
                если у вас нет языка, опыта или уверенности.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className="mt-10 pt-8 border-t border-gold/30">
              <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-semibold italic leading-snug">
                Моя миссия — убрать страх и дать людям шанс начать.
              </p>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
