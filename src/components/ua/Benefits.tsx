import {
  Shield,
  TrendingUp,
  Landmark,
  HeartHandshake,
  Globe,
  GraduationCap,
} from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const benefits = [
  {
    icon: Shield,
    title: "Надійність і прозорість",
    desc: "Я працюю через DVAG — одну з найбільших фінансових компаній Німеччини. Усі продукти ліцензовані та перевірені.",
    link: { href: "https://unternehmensbericht.dvag/", label: "Звіт компанії" },
  },
  {
    icon: TrendingUp,
    title: "Індивідуальний підхід",
    desc: "Кожне рішення адаптуємо під вашу ситуацію, цілі та можливості. Жодних шаблонів.",
  },
  {
    icon: Landmark,
    title: "131+ млн € під управлінням",
    desc: "Мої клієнти довірили мені сумарно понад 131 мільйон євро капіталу — найкращий доказ якості моєї роботи.",
  },
  {
    icon: HeartHandshake,
    title: "Супровід на кожному етапі",
    desc: "Від першої консультації до довгострокового супроводу. Ви можете звернутися до мене з питаннями будь-коли.",
  },
  {
    icon: Globe,
    title: "Без мовного бар'єру",
    desc: "Консультую українською, російською та німецькою. Складні теми пояснюю просто й зрозуміло.",
  },
  {
    icon: GraduationCap,
    title: "21+ рік досвіду",
    desc: "Знаю німецьку фінансову систему зсередини. Допомагаю уникнути помилок, яких припускаються багато інших.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Переваги
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Що ви отримуєте, працюючи зі мною
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 100} className="h-full">
                <div className="bg-card p-7 rounded-2xl border border-border hover:shadow-xl hover:border-l-4 hover:border-l-gold hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.desc}
                  </p>
                  {b.link && (
                    <a
                      href={b.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 border border-[#F5CD55] rounded-full text-sm font-semibold text-[#F5CD55] hover:bg-[#F5CD55] hover:text-white transition-colors"
                    >
                      {b.link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
