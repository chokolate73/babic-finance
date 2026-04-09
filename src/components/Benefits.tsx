import {
  Shield,
  TrendingUp,
  Clock,
  HeartHandshake,
  Globe,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Надёжность и прозрачность",
    desc: "Работаю через DVAG — одну из крупнейших финансовых компаний Германии. Все продукты лицензированы и проверены.",
  },
  {
    icon: TrendingUp,
    title: "Индивидуальный подход",
    desc: "Каждое решение подбирается под вашу ситуацию, цели и возможности. Никаких шаблонов.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    desc: "Вы не тратите время на изучение немецких законов и финансовых продуктов. Я делаю это за вас.",
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
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Преимущества
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy mt-3">
            Что вы получаете, работая со мной
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-card p-7 rounded-xl border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
