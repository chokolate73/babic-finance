"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";

function getRuPath(pathname: string): string {
  if (pathname === "/de") return "/";
  if (pathname.startsWith("/de/")) return pathname.slice(3);
  return "/";
}

const navLinks = [
  { href: "#about", label: "Über mich" },
  { href: "#services", label: "Leistungen" },
  { href: "#seminar", label: "Seminar" },
  { href: "#process", label: "Arbeitsweise" },
  { href: "#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/de";
  const ruPath = getRuPath(pathname);

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
          <a href="/de" className="flex items-center gap-2">
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
            {navLinks.map((link) => (
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
            ))}
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

          <div className="lg:hidden flex items-center gap-2">
            <a
              href={ruPath}
              hrefLang="ru"
              aria-label="Auf Russisch / Switch to Russian"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                scrolled || forceDark
                  ? "border-border text-muted-foreground hover:text-navy hover:border-gold"
                  : "border-white/30 text-white/90 hover:text-white hover:border-white/60"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              RU
            </a>
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled || forceDark ? "text-navy" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Menü umschalten"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
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
