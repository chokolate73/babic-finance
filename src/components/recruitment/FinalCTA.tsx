import AnimateOnScroll from "../AnimateOnScroll";
import WhatsAppIcon from "../WhatsAppIcon";

type CTA = { text: string; href: string };

type Props = {
  id?: string;
  title: string;
  description: string;
  primary: CTA;
  secondary?: CTA;
};

function isWhatsApp(href: string) {
  return href.startsWith("https://wa.me/");
}

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function FinalCTA({
  id = "contact",
  title,
  description,
  primary,
  secondary,
}: Props) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-navy via-[#242a4e] to-navy"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.5),transparent_45%)]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.4),transparent_45%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-up">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {title}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mt-5 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href={primary.href}
              target={isExternal(primary.href) ? "_blank" : undefined}
              rel={isExternal(primary.href) ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-4 font-semibold rounded-full text-base hover:brightness-105 transition-all shadow-lg min-h-[52px] ${
                isWhatsApp(primary.href)
                  ? "bg-whatsapp text-white shadow-whatsapp/25"
                  : "bg-gold text-navy shadow-gold/25"
              }`}
            >
              {isWhatsApp(primary.href) && (
                <WhatsAppIcon className="w-5 h-5" />
              )}
              {primary.text}
            </a>
            {secondary && (
              <a
                href={secondary.href}
                target={isExternal(secondary.href) ? "_blank" : undefined}
                rel={
                  isExternal(secondary.href) ? "noopener noreferrer" : undefined
                }
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium rounded-full text-base hover:bg-white/10 transition-all min-h-[52px]"
              >
                {secondary.text}
              </a>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
