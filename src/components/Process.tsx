import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: 1,
    title: "Вы оставляете заявку",
    desc: "Через сайт, WhatsApp или по телефону",
  },
  {
    num: 2,
    title: "Бесплатная встреча",
    desc: "Обсуждаем вашу ситуацию, цели и пожелания",
  },
  {
    num: 3,
    title: "Анализ и подбор",
    desc: "Готовлю персональные решения под ваши задачи",
  },
  {
    num: 4,
    title: "Оформление",
    desc: "Берём на себя все документы и процессы",
  },
  {
    num: 5,
    title: "Сопровождение",
    desc: "Постоянная поддержка и регулярные обзоры",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Этапы сотрудничества
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Как строится работа
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} animation="fade-up" delay={i * 150}>
                <div className="flex flex-col items-center text-center relative">
                  <div className="w-20 h-20 rounded-full bg-gold text-navy flex items-center justify-center text-2xl font-bold font-[family-name:var(--font-playfair)] relative z-10 shadow-lg shadow-gold/20">
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-navy mt-5 mb-2 text-base">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {s.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
