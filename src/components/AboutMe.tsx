import Image from "next/image";
import { CircleCheckBig, Shield, TrendingUp, Clock, HeartHandshake, Globe, GraduationCap } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const credentials = [
  {
    title: "В финансовом бизнесе с 2005 года",
    desc: "Более 20 лет практического опыта в финансовом консалтинге в Германии",
  },
  {
    title: "Региональный директор DVAG",
    desc: "Одна из крупнейших финансовых компаний Германии",
  },
  {
    title: "Более 391 клиента",
    desc: "Доверие сотен семей иностранцев в Германии",
  },
  {
    title: "Финансовый коуч",
    desc: "Помогаю разобраться в немецкой финансовой системе простыми словами",
  },
  {
    title: "Работаю с иностранцами",
    desc: "Без языковых барьеров и сложных формулировок",
  },
];

const stats = [
  { value: "21+", label: "лет опыта" },
  { value: "391+", label: "клиентов" },
  { value: "DVAG", label: "партнёр" },
];

const advantages = [
  {
    icon: Shield,
    title: "Надёжность и прозрачность",
    desc: "Все продукты лицензированы и проверены через DVAG.",
  },
  {
    icon: TrendingUp,
    title: "Индивидуальный подход",
    desc: "Решения под вашу ситуацию, цели и возможности.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    desc: "Разбираюсь в немецких законах и продуктах за вас.",
  },
  {
    icon: HeartHandshake,
    title: "Поддержка на каждом этапе",
    desc: "От первой консультации до долгосрочного сопровождения.",
  },
  {
    icon: Globe,
    title: "Без языкового барьера",
    desc: "Объясняю сложные вещи просто и понятно.",
  },
  {
    icon: GraduationCap,
    title: "21+ год опыта",
    desc: "Знаю немецкую финансовую систему изнутри.",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top: Photo + Credentials ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <AnimateOnScroll animation="fade-left">
            <div className="relative p-4">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/vladislav-portrait.jpeg"
                  alt="Владислав Бабич - финансовый консультант"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Credentials */}
          <AnimateOnScroll animation="fade-right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Обо мне
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mb-8">
                Владислав Бабич
              </h2>
              <div className="space-y-5">
                {credentials.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <CircleCheckBig className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {stats.map((s, i) => (
                  <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 150}>
                    <div className="text-center p-6 bg-gray-50 rounded-xl border border-border">
                      <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-gold">
                        {s.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {s.label}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* ── Story ── */}
        <AnimateOnScroll animation="fade-up">
          <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Я приехал в Германию в 2003 году из Эстонии. Без языка, без
              связей, без поддержки. В конце 2004 года впервые познакомился с
              финансовым бизнесом и выбрал путь действий - учился, ошибался,
              рос прямо в процессе.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Сегодня я помогаю людям не только выстраивать финансовое будущее,
              но и показываю, что в Германии возможно реализовать себя с нуля.
            </p>
            <blockquote className="pt-2">
              <p className="text-gold font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-semibold italic leading-snug">
                Моя миссия - убрать страх и дать людям шанс начать.
              </p>
            </blockquote>
          </div>
        </AnimateOnScroll>

        {/* ── Advantages ── */}
        <div className="mt-16">
          <AnimateOnScroll animation="fade-up">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
              Что вы получаете, работая со мной
            </h3>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((b, i) => {
              const Icon = b.icon;
              return (
                <AnimateOnScroll key={b.title} animation="fade-up" delay={i * 100} className="h-full">
                  <div className="bg-gray-50 p-6 rounded-2xl border border-border hover:shadow-lg hover:border-l-4 hover:border-l-gold hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-semibold text-navy mb-1">
                      {b.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
