import AnimateOnScroll from "../AnimateOnScroll";
import { supportTable } from "@/data/recruitment";

export default function SupportComparison() {
  return (
    <section id="support" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Поддержка государства
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Einstiegsgeld vs Gründungszuschuss
            </h2>
            <p className="text-muted-foreground mt-3">
              Две программы государственной поддержки перехода в самозанятость —
              одна для получателей Bürgergeld, другая для ALG I
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-navy text-white">
              <div className="p-5 text-sm font-semibold uppercase tracking-wider text-white/60">
                Параметр
              </div>
              <div className="p-5 text-base font-semibold border-l border-white/10">
                Einstiegsgeld
                <span className="block text-xs text-white/60 font-normal mt-0.5">
                  §16b SGB II
                </span>
              </div>
              <div className="p-5 text-base font-semibold border-l border-white/10">
                Gründungszuschuss
                <span className="block text-xs text-white/60 font-normal mt-0.5">
                  §93 SGB III
                </span>
              </div>
            </div>
            {supportTable.rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${i !== supportTable.rows.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="p-4 sm:p-5 text-sm font-medium text-navy bg-gray-50">
                  {row.label}
                </div>
                <div className="p-4 sm:p-5 text-sm text-foreground/85 border-l border-border">
                  {row.einstiegsgeld}
                </div>
                <div className="p-4 sm:p-5 text-sm text-foreground/85 border-l border-border">
                  {row.gruendungszuschuss}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-6">
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-navy text-white px-5 py-4">
                <p className="font-semibold">Einstiegsgeld</p>
                <p className="text-xs text-white/60">§16b SGB II</p>
              </div>
              <dl className="divide-y divide-border">
                {supportTable.rows.map((row) => (
                  <div key={row.label} className="px-5 py-3">
                    <dt className="text-xs uppercase text-muted-foreground tracking-wider">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-navy mt-1">
                      {row.einstiegsgeld}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="bg-navy text-white px-5 py-4">
                <p className="font-semibold">Gründungszuschuss</p>
                <p className="text-xs text-white/60">§93 SGB III</p>
              </div>
              <dl className="divide-y divide-border">
                {supportTable.rows.map((row) => (
                  <div key={row.label} className="px-5 py-3">
                    <dt className="text-xs uppercase text-muted-foreground tracking-wider">
                      {row.label}
                    </dt>
                    <dd className="text-sm text-navy mt-1">
                      {row.gruendungszuschuss}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <p className="text-muted-foreground/80 text-xs italic mt-6 max-w-3xl mx-auto text-center">
            {supportTable.disclaimer}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
