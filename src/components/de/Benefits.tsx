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
    title: "Zuverlässigkeit und Transparenz",
    desc: "Ich arbeite über die DVAG - eines der größten Finanzunternehmen Deutschlands. Alle Produkte sind lizenziert und geprüft.",
    link: { href: "https://unternehmensbericht.dvag/", label: "Unternehmensbericht" },
  },
  {
    icon: TrendingUp,
    title: "Individuelle Betreuung",
    desc: "Jede Lösung wird auf Ihre Situation, Ihre Ziele und Möglichkeiten zugeschnitten. Keine Schablonen.",
  },
  {
    icon: Landmark,
    title: "131+ Mio. € unter Verwaltung",
    desc: "Meine Kunden haben mir insgesamt mehr als 131 Millionen Euro an Kapital anvertraut - der beste Beleg für die Qualität meiner Arbeit.",
  },
  {
    icon: HeartHandshake,
    title: "Begleitung in jeder Phase",
    desc: "Von der Erstberatung bis zur langfristigen Betreuung. Sie können sich jederzeit mit Fragen an mich wenden.",
  },
  {
    icon: Globe,
    title: "Verständlich erklärt",
    desc: "Komplexe Themen erkläre ich einfach und nachvollziehbar.",
  },
  {
    icon: GraduationCap,
    title: "21+ Jahre Erfahrung",
    desc: "Ich kenne das deutsche Finanzsystem von innen. Ich helfe Ihnen, die Fehler zu vermeiden, die viele andere machen.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Vorteile
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Was Sie erhalten, wenn Sie mit mir arbeiten
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
