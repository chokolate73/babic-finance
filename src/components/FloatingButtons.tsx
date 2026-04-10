import WhatsAppIcon from "./WhatsAppIcon";
import TelegramIcon from "./TelegramIcon";

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop floating buttons */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        <a
          href="https://t.me/+491784743490"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-lg shadow-[#229ED9]/30 hover:scale-110 transition-transform"
          title="Telegram"
        >
          <TelegramIcon className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/491784743490"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform"
          title="WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border/50 px-4 py-3">
        <a
          href="#contact"
          className="flex items-center justify-center w-full py-3 bg-gold text-navy font-semibold rounded-full text-sm whitespace-nowrap hover:opacity-90 transition-all"
        >
          Бесплатная консультация
        </a>
      </div>
    </>
  );
}
