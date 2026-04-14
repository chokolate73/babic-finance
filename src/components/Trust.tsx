import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
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
    title: "Более 4\u00a0387 клиентов",
    desc: "Доверие тысяч семей в Германии",
  },
  {
    title: "131+ млн € под управлением",
    desc: "Капитал, который мои клиенты доверили мне в совокупности",
  },
  {
    title: "Финансовый коуч",
    desc: "Помогаю разобраться в немецкой финансовой системе простыми словами",
  },
  {
    title: "Работаю с русскоязычными клиентами",
    desc: "Без языковых барьеров и сложных формулировок",
  },
];

const stats = [
  { value: "21+", label: "лет опыта" },
  { value: "4\u00a0387", label: "клиентов" },
  { value: "131+ млн €", label: "под управлением" },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo with decorative gold border */}
          <AnimateOnScroll animation="fade-left">
            <div className="relative p-4">
              {/* Gold L-shaped corner borders */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold rounded-br-2xl" />

              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/vladislav-portrait.png"
                  alt="Владислав Бабич - финансовый консультант"
                  className="w-full h-auto object-cover"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Credentials + Stats */}
          <AnimateOnScroll animation="fade-right">
            <div>
              {/* Section label with left line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Почему мне доверяют?
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
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
                {stats.map((s, i) => (
                  <AnimateOnScroll key={s.label} animation="fade-up" delay={i * 150}>
                    <div className="text-center p-3 sm:p-6 bg-gray-50 rounded-xl border border-border h-full">
                      <p className="font-[family-name:var(--font-serif)] text-lg sm:text-2xl font-bold text-gold whitespace-nowrap">
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
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
