import AnimateOnScroll from "./AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Обо мне
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Моя история
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full hidden md:block" />
            <div className="md:pl-10 space-y-6 text-foreground/80 leading-relaxed text-base sm:text-lg">
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
              <p className="text-gold font-semibold font-[family-name:var(--font-playfair)] text-xl">
                Моя миссия — убрать страх и дать людям шанс начать.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
