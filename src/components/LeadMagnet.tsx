import AnimateOnScroll from "./AnimateOnScroll";

const TELEGRAM_URL = "https://t.me/babicfinance"; // TODO: replace with actual channel link

const checklist = [
  "Налоги и Steuererklärung",
  "Пенсия и накопления",
  "Страхование и Bausparen",
];

export default function LeadMagnet() {
  return (
    <section className="py-12 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="scale-in">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gold/20 bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left panel — Navy with PDF mockup */}
              <div className="lg:w-[35%] bg-navy flex flex-col items-center justify-center p-8 lg:p-10">
                <div className="relative">
                  {/* Ghost page behind */}
                  <div
                    className="absolute inset-0 w-[150px] h-[210px] md:w-[150px] md:h-[210px] bg-white/10 rounded-[4px]"
                    style={{ transform: "rotate(2deg)" }}
                  />
                  {/* Main PDF page */}
                  <div
                    className="relative w-[130px] h-[180px] md:w-[150px] md:h-[210px] bg-white rounded-[4px] flex flex-col overflow-hidden"
                    style={{ transform: "rotate(-2deg)" }}
                  >
                    <div className="px-4 pt-5 pb-3 flex-1 flex flex-col">
                      <div className="w-8 h-[3px] bg-gold mb-3" />
                      <p className="text-[9px] md:text-[10px] font-bold text-navy leading-tight mb-0.5">
                        7 финансовых ошибок
                      </p>
                      <p className="text-[7px] md:text-[8px] text-muted-foreground leading-tight mb-3">
                        которые совершают русскоязычные в Германии
                      </p>
                      <div className="space-y-[5px] flex-1">
                        <div className="h-[2px] bg-gray-200 w-full rounded" />
                        <div className="h-[2px] bg-gray-200 w-[80%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[92%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[75%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[88%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[70%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[95%] rounded" />
                        <div className="h-[2px] bg-gray-200 w-[60%] rounded" />
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-gold" />
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-4 text-center">
                  PDF, 12 страниц
                </p>
              </div>

              {/* Right panel — copy + Telegram CTA */}
              <div className="lg:w-[65%] p-6 sm:p-8 lg:p-9 flex flex-col justify-center">
                <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                  Бесплатный гайд
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mt-2 leading-snug">
                  7 финансовых ошибок, которые совершают русскоязычные в Германии
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Узнайте, какие типичные ошибки стоят вам сотни евро в год — и как их исправить.
                </p>

                <ul className="mt-4 space-y-1.5">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-navy text-sm">
                      <span className="text-gold font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-muted-foreground text-sm mt-5">
                  Гайд доступен бесплатно в Telegram-канале — подпишитесь и скачайте сразу.
                </p>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full mt-3 h-12 bg-[#229ED9] hover:opacity-90 text-white font-semibold rounded-xl transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Получить в Telegram
                </a>

                <p className="text-muted-foreground text-xs mt-2.5 text-center">
                  Без спама — только полезный контент о финансах в Германии.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
