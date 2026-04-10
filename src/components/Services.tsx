import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Финансовые консультации",
    desc: "Полный анализ вашей финансовой ситуации и персональная стратегия развития",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
  },
  {
    title: "Инвестиции и фонды",
    desc: "Грамотное вложение средств с учётом ваших целей и допустимого уровня риска",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
  },
  {
    title: "Пенсионное обеспечение",
    desc: "Государственные и частные пенсионные программы для достойной жизни на пенсии",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
  },
  {
    title: "Страхование",
    desc: "Защита вас и вашей семьи — здоровье, имущество, ответственность",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
  },
  {
    title: "Ипотека",
    desc: "Подбор оптимальных условий финансирования вашей недвижимости в Германии",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
  },
  {
    title: "Bausparen",
    desc: "Накопительные программы с государственной поддержкой для покупки жилья",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
  },
  {
    title: "Консультации для фирм",
    desc: "Финансовые решения для бизнеса — от стартапов до established компаний",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/5e9da606e_generated_157ca161.png",
  },
  {
    title: "Бесплатные семинары и курсы",
    desc: "Образовательные мероприятия о финансовой грамотности на русском языке",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/d50888bf3_generated_35c01f2e.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Предложение
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Услуги
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Комплексное финансовое сопровождение для русскоязычных клиентов в
              Германии
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} animation="fade-up" delay={i * 100} className="h-full">
              <div className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-lg hover:border-gold/30 transition-all duration-300 h-full">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Записаться на бесплатную консультацию
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
