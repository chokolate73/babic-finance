import WhatsAppIcon from "./WhatsAppIcon";
import TelegramIcon from "./TelegramIcon";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
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
  );
}
