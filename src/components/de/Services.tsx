"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";

const services = [
  {
    title: "Finanzberatung",
    desc: "Vollständige Analyse Ihrer finanziellen Situation und eine persönliche Strategie. Wir betrachten Einnahmen, Ausgaben und Steuern und erarbeiten einen klaren Handlungsplan.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/1628b021a_generated_082efb02.png",
    details: [
      "Analyse von Einnahmen, Ausgaben und Steuern",
      "Persönliche Finanzstrategie",
      "Optimierung bestehender Verträge",
      "Langfristige Betreuung",
    ],
  },
  {
    title: "Investitionen & Fonds",
    desc: "Durchdachte Geldanlage unter Berücksichtigung Ihrer Ziele und Ihrer persönlichen Risikobereitschaft. Wir wählen die Instrumente, die für Sie arbeiten.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/b14967efb_generated_513e3db2.png",
    details: [
      "Aktien und Anleihen",
      "ETFs und Investmentfonds",
      "Gold und Silber",
      "Sparpläne",
    ],
  },
  {
    title: "Altersvorsorge",
    desc: "Staatliche und private Vorsorgeprogramme für ein angenehmes Leben im Ruhestand. Riester, Rürup, betriebliche Altersvorsorge - wir finden gemeinsam heraus, was zu Ihnen passt.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/90b1fb9ed_generated_2d20261b.png",
    details: [
      "Riester-Rente",
      "Rürup-Rente (Basisrente)",
      "bAV - betriebliche Altersvorsorge",
      "Private Rentenversicherung",
    ],
  },
  {
    title: "Versicherung",
    desc: "Schutz für Sie und Ihre Familie - Gesundheit, Eigentum, Haftung. Wir prüfen Ihre bestehenden Policen und optimieren den Versicherungsschutz.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/e8b703938_generated_42b248f1.png",
    details: [
      "Krankenversicherung",
      "Lebensversicherung",
      "Unfallversicherung",
      "Haftpflichtversicherung",
      "Rechtsschutzversicherung",
    ],
  },
  {
    title: "Immobilienfinanzierung",
    desc: "Konditionen für Ihre Immobilienfinanzierung in Deutschland aus dem Angebot der DVAG-Partnerbanken. Ich begleite Sie vom Tilgungsplan bis zur Antragstellung.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/79242769b_generated_51f11134.png",
    details: [
      "Baufinanzierung",
      "Bausparen mit staatlicher Förderung",
      "Staatliche Zuschüsse (KfW, Wohn-Riester)",
      "Anschlussfinanzierung bestehender Darlehen",
    ],
  },
  {
    title: "Bausparen",
    desc: "Sparpläne mit staatlicher Förderung für den Erwerb von Wohneigentum. Ich zeige Ihnen, wie Sie Zuschüsse nutzen und günstige Zinsen sichern.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/3fbdd843e_generated_5a2adb79.png",
    details: [
      "Niedrige Zinsen langfristig sichern",
      "Staatliche Zuschüsse (Wohnungsbauprämie)",
      "Arbeitnehmer-Sparzulage",
      "Flexible Spartarife",
    ],
  },
  {
    title: "Beratung für Unternehmen",
    desc: "Finanzlösungen für Unternehmen - vom Start-up bis zum etablierten Betrieb. Gewerbliche Versicherungen und betriebliche Altersvorsorge für Mitarbeiter.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/5e9da606e_generated_157ca161.png",
    details: [
      "Gewerbliche Versicherungen",
      "bAV - betriebliche Altersvorsorge",
      "Haftpflichtversicherung für GmbHs",
      "Finanzplanung für Unternehmen",
    ],
  },
  {
    title: "Kostenlose Seminare",
    desc: "Bildungsveranstaltungen zur Finanzbildung. Wir besprechen reale Fragen in einem lebendigen Format.",
    img: "https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/d50888bf3_generated_35c01f2e.png",
    details: [
      "Finanzbildung für Einsteiger",
      "Investitionen und langfristiger Vermögensaufbau",
      "Steuern und Steuererklärung",
      "Altersvorsorge und Versicherung in Deutschland",
    ],
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const current = services[active];

  useEffect(() => {
    if (modalIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalIndex]);

  const modalService = modalIndex !== null ? services[modalIndex] : null;

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left - active service image + details */}
          <AnimateOnScroll animation="fade-left">
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  key={current.img}
                  src={current.img}
                  alt={current.title}
                  className="object-cover transition-opacity duration-500"
                  fill
                />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mb-3">
                {current.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {current.desc}
              </p>
              <button
                onClick={() => setModalIndex(active)}
                className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
              >
                Mehr erfahren &rarr;
              </button>
            </div>
          </AnimateOnScroll>

          {/* Right - heading + numbered list */}
          <div>
            <AnimateOnScroll animation="fade-right">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Leistungen
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl xl:text-4xl font-bold text-navy mt-3 mb-10">
                Umfassende Finanzbetreuung
              </h2>
            </AnimateOnScroll>

            <div className="space-y-0">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-5 py-4 border-b border-border transition-all duration-300 group ${
                    i === active
                      ? "border-gold"
                      : "hover:border-gold/40"
                  }`}
                >
                  <span
                    className={`font-[family-name:var(--font-serif)] text-2xl font-bold transition-colors duration-300 ${
                      i === active ? "text-gold" : "text-border group-hover:text-gold/50"
                    }`}
                  >
                    {pad(i + 1)}.
                  </span>
                  <span
                    className={`text-base font-medium transition-colors duration-300 ${
                      i === active ? "text-navy" : "text-muted-foreground group-hover:text-navy"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
              >
                Kostenlose Beratung
              </a>
            </div>
          </div>
        </div>

        {/* Mobile layout - accordion */}
        <div className="lg:hidden">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-10">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                Leistungen
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
                Umfassende Finanzbetreuung
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-0">
            {services.map((s, i) => {
              const isOpen = mobileOpen === i;
              return (
                <div key={s.title} className="border-b border-border">
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-[family-name:var(--font-serif)] text-xl font-bold transition-colors ${
                        isOpen ? "text-gold" : "text-navy"
                      }`}
                    >
                      {pad(i + 1)}.
                    </span>
                    <span
                      className={`font-medium transition-colors ${
                        isOpen ? "text-navy" : "text-muted-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                    <svg
                      className={`w-4 h-4 ml-auto text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "600px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pb-6">
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={s.img}
                          alt={s.title}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      <button
                        onClick={() => setModalIndex(i)}
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:underline text-sm"
                      >
                        Mehr erfahren &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
            >
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          {/* Backdrop */}
          <button
            aria-label="Schließen"
            onClick={() => setModalIndex(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          {/* Content */}
          <div className="relative w-full sm:max-w-lg bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={modalService.img}
                alt={modalService.title}
                className="object-cover"
                fill
              />
              <button
                onClick={() => setModalIndex(null)}
                aria-label="Schließen"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy flex items-center justify-center shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-7 overflow-y-auto">
              <h3
                id="service-modal-title"
                className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mb-2"
              >
                {modalService.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {modalService.desc}
              </p>
              <ul className="space-y-2.5 mb-6">
                {modalService.details.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setModalIndex(null)}
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base hover:opacity-90 transition-all"
              >
                Beratungstermin vereinbaren
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
