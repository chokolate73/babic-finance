import AnimateOnScroll from "./AnimateOnScroll";

// TODO: replace with real testimonials from Vladislav
const testimonials = [
  {
    quote:
      "Владислав помог нам разобраться с ипотекой, когда мы уже почти сдались. Всё объяснил по-русски, подобрал условия лучше, чем предлагал наш банк. Сэкономили около 200\u20AC в месяц.",
    name: "Анна К.",
    city: "Кёльн",
    tag: "Ипотека",
  },
  {
    quote:
      "Живу в Германии 8 лет, но в пенсионной системе так и не разобрался. За одну встречу получил больше ясности, чем за годы самостоятельных попыток. Рекомендую всем, кто хочет понять, куда идут его деньги.",
    name: "Дмитрий П.",
    city: "Франкфурт",
    tag: "Пенсия и инвестиции",
  },
  {
    quote:
      "Мы обратились перед рождением второго ребёнка. Владислав построил для нас план на 10 лет вперёд — страхование, накопления, Bausparen. Спокойно спим по ночам.",
    name: "Елена и Михаил С.",
    city: "Дюссельдорф",
    tag: "Семейное финансовое планирование",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Отзывы
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Что говорят мои клиенты
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} animation="fade-up" delay={i * 150}>
              <div className="bg-white p-7 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                {/* Gold quote mark */}
                <svg
                  className="w-8 h-8 text-gold/40 mb-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.3 2.6C6.1 5.1 3.2 8.9 3.2 13.4c0 3.5 2.2 5.8 4.8 5.8 2.3 0 4.2-1.7 4.2-4.1 0-2.2-1.5-3.9-3.5-4.1.3-2.3 2.1-4.8 5-6.6L11.3 2.6zm10 0c-5.2 2.5-8.1 6.3-8.1 10.8 0 3.5 2.2 5.8 4.8 5.8 2.3 0 4.2-1.7 4.2-4.1 0-2.2-1.5-3.9-3.5-4.1.3-2.3 2.1-4.8 5-6.6L21.3 2.6z" />
                </svg>

                <p className="text-foreground/80 leading-relaxed text-sm flex-grow mb-6">
                  {t.quote}
                </p>

                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {t.city}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium text-gold bg-gold/10 rounded-full">
                    {t.tag}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
