import { CircleCheckBig } from "lucide-react";

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
    desc: "Доверие сотен русскоязычных семей в Германии",
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
  { value: "391+", label: "клиентов" },
  { value: "DVAG", label: "партнёр" },
];

export default function Trust() {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Почему мне доверяют?
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/c8c10b707_generated_318bd947.png"
                alt="Владислав Бабич — финансовый консультант"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
                <p className="text-gold font-[family-name:var(--font-playfair)] text-lg font-semibold">
                  Владислав Бабич
                </p>
                <p className="text-white/80 text-sm">
                  Региональный директор, DVAG
                </p>
              </div>
            </div>
          </div>

          {/* Credentials + Stats */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-navy mb-8">
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
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-6 bg-white rounded-xl border border-border"
                >
                  <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-gold">
                    {s.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
