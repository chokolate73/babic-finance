import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const credentials = [
  {
    title: "Із 2005 року у фінансовому бізнесі",
    desc: "Понад 20 років практичного досвіду в фінансовому консультуванні в Німеччині",
  },
  {
    title: "Регіональний директор DVAG",
    desc: "Одна з найбільших фінансових компаній Німеччини",
  },
  {
    title: "Понад 4 387 клієнтів",
    desc: "Довіра тисяч родин у Німеччині",
  },
  {
    title: "131+ млн € під управлінням",
    desc: "Капітал, який мої клієнти довірили мені загалом",
  },
  {
    title: "Фінансовий коуч",
    desc: "Пояснюю німецьку фінансову систему зрозуміло й простими словами",
  },
  {
    title: "Консультації для іноземців",
    desc: "Без мовних бар'єрів і складних формулювань",
  },
];

const stats = [
  { value: "21+", label: "років досвіду" },
  { value: "4 387", label: "клієнтів" },
  { value: "131+ млн €", label: "під управлінням" },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll animation="fade-left">
            <div className="relative p-4">
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-2xl" />

              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/vladislav-portrait.jpeg"
                  alt="Владислав Бабич - фінансовий консультант"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Чому мені довіряють
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

              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
                {stats.map((s, i) => (
                  <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 150}>
                    <div className="text-center p-2 sm:p-6 bg-gray-50 rounded-xl border border-border h-full">
                      <p className="font-[family-name:var(--font-serif)] text-lg sm:text-2xl font-bold text-gold whitespace-nowrap">
                        {s.value}
                      </p>
                      <p className="text-[11px] sm:text-sm leading-tight text-muted-foreground mt-1 whitespace-nowrap">
                        {s.label}
                      </p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
