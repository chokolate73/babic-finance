import {
  Shield,
  TrendingUp,
  Landmark,
  HeartHandshake,
  Globe,
  GraduationCap,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
  {
    icon: Shield,
    title: "Надёжность и прозрачность",
    desc: "Работаю через DVAG - одну из крупнейших финансовых компаний Германии. Все продукты лицензированы и проверены.",
    link: { href: "https://unternehmensbericht.dvag/", label: "Отчёт компании" },
  },
  {
    icon: TrendingUp,
    title: "Индивидуальный подход",
    desc: "Каждое решение подбирается под вашу ситуацию, цели и возможности. Никаких шаблонов.",
  },
  {
    icon: Landmark,
    title: "131+ млн € под управлением",
    desc: "Мои клиенты доверили мне в совокупности более 131 миллиона евро капитала - лучшее подтверждение качества моей работы.",
  },
  {
    icon: HeartHandshake,
    title: "Поддержка на каждом этапе",
    desc: "От первой консультации до долгосрочного сопровождения. Вы всегда можете обратиться с вопросами.",
  },
  {
    icon: Globe,
    title: "Без языкового барьера",
    desc: "Консультирую на русском языке. Объясняю сложные вещи просто и понятно.",
  },
  {
    icon: GraduationCap,
    title: "21+ год опыта",
    desc: "Знаю немецкую финансовую систему изнутри. Помогу избежать ошибок, которые совершают многие.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Преимущества
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Что вы получаете, работая со мной
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
                      className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 border border-[#D4AF55] rounded-full text-sm font-semibold text-[#D4AF55] hover:bg-[#D4AF55] hover:text-white transition-colors"
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
