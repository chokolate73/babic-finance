"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const klientyLinks: NavLink[] = [
  { href: "#about", label: "Обо мне" },
  { href: "#services", label: "Услуги" },
  { href: "#seminar", label: "Семинар" },
  { href: "#process", label: "Как работаю" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Блог" },
  { href: "#contact", label: "Контакт" },
];

const recruitmentLinks: NavLink[] = [
  { href: "#recognize", label: "Для кого" },
  { href: "#qualifications", label: "Что получу" },
  { href: "#path", label: "Как это работает" },
  { href: "#faq", label: "FAQ" },
  {
    href: "/karriere",
    label: "Карьера",
    children: [
      { href: "/karriere/quereinstieg", label: "Квереинштайгер" },
      { href: "/karriere/buergergeld", label: "Из Bürgergeld" },
    ],
  },
  { href: "/klienty", label: "Для клиентов" },
  { href: "/blog", label: "Блог" },
  { href: "#apply", label: "Оставить заявку" },
];

const karriereLinks: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/karriere/quereinstieg", label: "Квереинштайгер" },
  { href: "/karriere/buergergeld", label: "Из Bürgergeld" },
  { href: "/klienty", label: "Для клиентов" },
  { href: "/blog", label: "Блог" },
  { href: "#apply", label: "Оставить заявку" },
];

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isKlienty = pathname?.startsWith("/klienty") ?? false;
  const isKarriere = pathname?.startsWith("/karriere") ?? false;
  const navLinks = isKlienty
    ? klientyLinks
    : isKarriere
      ? karriereLinks
      : recruitmentLinks;
  const logoHref = isKlienty || isKarriere ? "/" : "#";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || forceDark
          ? "bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      } ${scrolled && !forceDark ? "max-lg:-translate-y-full" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href={logoHref} className="flex items-center gap-2">
            <span
              className={`font-[family-name:var(--font-serif)] text-xl font-bold transition-colors duration-300 ${
                scrolled || forceDark ? "text-navy" : "text-white"
              }`}
            >
              Babic
            </span>
            <span className="font-[family-name:var(--font-serif)] text-xl font-bold text-gold">
              Finance
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                      scrolled || forceDark
                        ? "text-muted-foreground hover:text-navy"
                        : "text-white/80 hover:text-white"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === link.label}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {dropdownOpen === link.label && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full pt-3 min-w-[220px]"
                    >
                      <div className="bg-white rounded-xl border border-border shadow-lg py-2">
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-navy hover:bg-cream transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled || forceDark
                      ? "text-muted-foreground hover:text-navy"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/491784743490"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled || forceDark ? "text-navy" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="space-y-2">
                  <div className="text-sm font-semibold text-navy">
                    {link.label}
                  </div>
                  <div className="pl-4 space-y-2 border-l border-border">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        className="block text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ),
            )}
            <a
              href="https://wa.me/491784743490"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
