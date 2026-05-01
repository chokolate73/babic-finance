"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, Phone, Mail, MapPin, Send, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export type ContactPopoverLocale = "ru" | "de" | "ua";

const BOOKING_URL =
  "https://outlook.office.com/book/VladislavBabic1@dvag02.onmicrosoft.com/";
const PHONE_TEL = "tel:+4922418989424";
const PHONE_DISPLAY = "+49 2241 89 89 424";
const WHATSAPP_URL = "https://wa.me/4922418989424";
const EMAIL_HREF = "mailto:Vladislav.Babic@dvag.de";
const EMAIL_DISPLAY = "Vladislav.Babic@dvag.de";
const ROUTE_URL =
  "https://maps.google.de/?daddr=Mottmannstr.%208%2C53842%2CTroisdorf";

const STRINGS: Record<
  ContactPopoverLocale,
  {
    triggerLabel: string;
    title: string;
    book: string;
    call: string;
    whatsapp: string;
    email: string;
    route: string;
    apply: string;
    close: string;
  }
> = {
  ru: {
    triggerLabel: "Связаться",
    title: "Связаться с Владиславом",
    book: "Забронировать встречу",
    call: "Позвонить",
    whatsapp: "WhatsApp",
    email: "Написать на email",
    route: "Проложить маршрут",
    apply: "Оставить заявку",
    close: "Закрыть",
  },
  de: {
    triggerLabel: "Kontakt",
    title: "Kontakt mit Vladislav",
    book: "Termin buchen",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    email: "E-Mail schreiben",
    route: "Route planen",
    apply: "Anfrage stellen",
    close: "Schließen",
  },
  ua: {
    triggerLabel: "Зв'язатися",
    title: "Зв'язатися з Владиславом",
    book: "Забронювати зустріч",
    call: "Зателефонувати",
    whatsapp: "WhatsApp",
    email: "Написати на email",
    route: "Прокласти маршрут",
    apply: "Залишити заявку",
    close: "Закрити",
  },
};

function scrollToApplyForm() {
  if (typeof document === "undefined") return;
  const target =
    document.getElementById("apply") ?? document.getElementById("contact");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.hash = "#contact";
  }
}

export default function FloatingContactButtons({
  locale,
  showMobileBar = true,
}: {
  locale: ContactPopoverLocale;
  showMobileBar?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const t = STRINGS[locale];

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => {
    function handle() {
      setOpen(true);
    }
    window.addEventListener("openContactPopover", handle);
    return () => window.removeEventListener("openContactPopover", handle);
  }, []);

  const items: {
    icon: React.ReactNode;
    label: string;
    detail?: string;
    href?: string;
    onClick?: () => void;
    target?: string;
  }[] = [
    {
      icon: <Calendar className="w-5 h-5 text-gold" />,
      label: t.book,
      href: BOOKING_URL,
      target: "_blank",
    },
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      label: t.call,
      detail: PHONE_DISPLAY,
      href: PHONE_TEL,
    },
    {
      icon: <WhatsAppIcon className="w-5 h-5" />,
      label: t.whatsapp,
      detail: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      target: "_blank",
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      label: t.email,
      detail: EMAIL_DISPLAY,
      href: EMAIL_HREF,
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold" />,
      label: t.route,
      href: ROUTE_URL,
      target: "_blank",
    },
    {
      icon: <Send className="w-5 h-5 text-gold" />,
      label: t.apply,
      onClick: () => {
        setOpen(false);
        scrollToApplyForm();
      },
    },
  ];

  return (
    <>
      {/* Desktop popover anchored under the Navbar Контакт button */}
      {open && (
        <div className="hidden sm:block fixed inset-x-0 top-20 z-50 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <div
              ref={popoverRef}
              className="pointer-events-auto w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
            >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h3 className="font-[family-name:var(--font-serif)] font-bold text-navy text-base">
                {t.title}
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="text-muted-foreground hover:text-navy transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="py-2">
              {items.map((it, i) => {
                const inner = (
                  <span className="flex items-center gap-3 px-5 py-3 hover:bg-cream transition-colors">
                    <span className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      {it.icon}
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-navy">
                        {it.label}
                      </span>
                      {it.detail && (
                        <span className="text-xs text-muted-foreground">
                          {it.detail}
                        </span>
                      )}
                    </span>
                  </span>
                );
                return (
                  <li key={i}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.target}
                        rel={
                          it.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => setOpen(false)}
                        className="block"
                      >
                        {inner}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={it.onClick}
                        className="block w-full"
                      >
                        {inner}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sticky bar */}
      {showMobileBar && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border/50 px-4 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full py-3 bg-gold text-navy font-semibold rounded-full text-sm hover:opacity-90 transition-all"
          >
            {t.triggerLabel}
          </button>
        </div>
      )}

      {/* Mobile centered modal */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label={t.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl max-h-[85dvh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
              <h3 className="font-[family-name:var(--font-serif)] font-bold text-navy text-base">
                {t.title}
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.close}
                className="text-muted-foreground hover:text-navy"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="overflow-y-auto py-1 flex-1">
              {items.map((it, i) => {
                const inner = (
                  <span className="flex items-center gap-3 px-5 py-3 hover:bg-cream transition-colors">
                    <span className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      {it.icon}
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-navy">
                        {it.label}
                      </span>
                      {it.detail && (
                        <span className="text-xs text-muted-foreground">
                          {it.detail}
                        </span>
                      )}
                    </span>
                  </span>
                );
                return (
                  <li key={i}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.target}
                        rel={
                          it.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => setOpen(false)}
                        className="block"
                      >
                        {inner}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={it.onClick}
                        className="block w-full"
                      >
                        {inner}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
