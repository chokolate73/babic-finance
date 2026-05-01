import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating phone button */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50">
        <a
          href="tel:+4922418989424"
          className="relative w-16 h-16 rounded-full bg-gold text-navy flex items-center justify-center shadow-lg shadow-gold/30 hover:scale-110 transition-transform"
          title="Позвонить"
        >
          <span className="absolute inset-0 rounded-full bg-gold animate-[pulse-ring_2s_ease-out_infinite]" />
          <svg className="w-7 h-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border/50 px-4 py-3 flex gap-3">
        <a
          href="https://wa.me/4922418989424"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 flex-1 py-3 bg-whatsapp text-white font-semibold rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-all"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center flex-1 py-3 bg-gold text-navy font-semibold rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-all"
        >
          Консультация
        </a>
      </div>
    </>
  );
}
