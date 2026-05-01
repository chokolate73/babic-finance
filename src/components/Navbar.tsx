"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NavLink = {
  href?: string;
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
  { href: "#recognize", label: "Ситуация" },
  { href: "#faq", label: "FAQ" },
  {
    label: "Карьера",
    children: [
      { href: "/karriere/nebenberuf", label: "Параллельно с работой" },
      { href: "/karriere/quereinstieg", label: "Смена профессии" },
    ],
  },
  { href: "/klienty", label: "Для клиентов" },
  { href: "/blog", label: "Блог" },
  { href: "#apply", label: "Оставить заявку" },
];

const karriereLinks: NavLink[] = [
  { href: "/", label: "Главная" },
  { href: "/karriere/nebenberuf", label: "Параллельно с работой" },
  { href: "/karriere/quereinstieg", label: "Смена профессии" },
  { href: "/klienty", label: "Для клиентов" },
  { href: "/blog", label: "Блог" },
  { href: "#apply", label: "Оставить заявку" },
];

const deRecruitmentLinks: NavLink[] = [
  { href: "#recognize", label: "Situation" },
  { href: "#faq", label: "FAQ" },
  {
    href: "/de/karriere",
    label: "Karriere",
    children: [
      { href: "/de/karriere/quereinstieg", label: "Quereinsteiger" },
      { href: "/de/karriere/buergergeld", label: "Aus Bürgergeld" },
    ],
  },
  { href: "/de/klienty", label: "Für Kunden" },
  { href: "/de/blog", label: "Blog" },
  { href: "#apply", label: "Jetzt bewerben" },
];

const deKarriereLinks: NavLink[] = [
  { href: "/de", label: "Startseite" },
  { href: "/de/karriere/quereinstieg", label: "Quereinsteiger" },
  { href: "/de/karriere/buergergeld", label: "Aus Bürgergeld" },
  { href: "/de/klienty", label: "Für Kunden" },
  { href: "/de/blog", label: "Blog" },
  { href: "#apply", label: "Jetzt bewerben" },
];

const uaRecruitmentLinks: NavLink[] = [
  { href: "#recognize", label: "Ситуація" },
  { href: "#faq", label: "FAQ" },
  {
    href: "/ua/karriere",
    label: "Кар'єра",
    children: [
      { href: "/ua/karriere/quereinstieg", label: "Зміна професії" },
      { href: "/ua/karriere/buergergeld", label: "Із Bürgergeld" },
    ],
  },
  { href: "#apply", label: "Залишити заявку" },
];

const uaKarriereLinks: NavLink[] = [
  { href: "/ua", label: "Головна" },
  { href: "/ua/karriere/quereinstieg", label: "Зміна професії" },
  { href: "/ua/karriere/buergergeld", label: "Із Bürgergeld" },
  { href: "#apply", label: "Залишити заявку" },
];

const uaKlientyLinks: NavLink[] = [
  { href: "#about", label: "Про мене" },
  { href: "#services", label: "Послуги" },
  { href: "#seminar", label: "Семінар" },
  { href: "#process", label: "Як працюю" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакт" },
];

type Locale = "ru" | "de" | "ua";

const LOCALES: { code: Locale; label: string; hrefLang: string; aria: string }[] = [
  { code: "ru", label: "RU", hrefLang: "ru", aria: "На русский язык / Switch to Russian" },
  { code: "de", label: "DE", hrefLang: "de", aria: "Auf Deutsch / Switch to German" },
  { code: "ua", label: "UA", hrefLang: "uk", aria: "Українською / Switch to Ukrainian" },
];

function getCurrentLocale(pathname: string): Locale {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/ua" || pathname.startsWith("/ua/")) return "ua";
  return "ru";
}

function pathForLocale(pathname: string, target: Locale): string {
  const current = getCurrentLocale(pathname);
  if (current === target) return pathname;

  // Strip current prefix to get the "tail"
  let tail = pathname;
  if (current === "de") tail = pathname.slice(3) || "/"; // strip "/de"
  else if (current === "ua") tail = pathname.slice(3) || "/"; // strip "/ua"

  if (target === "ru") return tail === "/" ? "/" : tail;
  const prefix = target === "de" ? "/de" : "/ua";
  return tail === "/" ? prefix : `${prefix}${tail}`;
}

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [mobileLocaleOpen, setMobileLocaleOpen] = useState(false);
  const localeRef = useRef<HTMLDivElement | null>(null);
  const mobileLocaleRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname() ?? "/";
  const currentLocale = getCurrentLocale(pathname);
  const isDe = currentLocale === "de";
  const isUa = currentLocale === "ua";
  const isKlienty = pathname === "/klienty" || pathname.startsWith("/klienty/");
  const isKarriere = pathname.startsWith("/karriere");
  const isDeKarriere = pathname.startsWith("/de/karriere");
  const isUaKarriere = pathname.startsWith("/ua/karriere");
  const isUaKlienty = pathname === "/ua/klienty" || pathname.startsWith("/ua/klienty/");
  const isLegal =
    pathname === "/impressum" ||
    pathname === "/datenschutz" ||
    pathname === "/de/impressum" ||
    pathname === "/de/datenschutz" ||
    pathname === "/ua/impressum" ||
    pathname === "/ua/datenschutz";

  const homeHref = isDe ? "/de" : isUa ? "/ua" : "/";

  const rawNavLinks = isDe
    ? isDeKarriere
      ? deKarriereLinks
      : deRecruitmentLinks
    : isUa
      ? isUaKlienty
        ? uaKlientyLinks
        : isUaKarriere
          ? uaKarriereLinks
          : uaRecruitmentLinks
      : isKlienty
        ? klientyLinks
        : isKarriere
          ? karriereLinks
          : recruitmentLinks;

  const prefixHash = (href: string | undefined) => {
    if (!href || !href.startsWith("#")) return href;
    return `${homeHref}${href}`;
  };

  const navLinks: NavLink[] = isLegal
    ? rawNavLinks.map((link) => ({
        ...link,
        href: prefixHash(link.href),
        children: link.children?.map((c) => ({
          ...c,
          href: prefixHash(c.href) ?? c.href,
        })),
      }))
    : rawNavLinks;

  const logoHref = homeHref;

  const currentLocaleLabel = LOCALES.find((l) => l.code === currentLocale)!.label;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (
        localeRef.current &&
        !localeRef.current.contains(e.target as Node)
      ) {
        setLocaleOpen(false);
      }
      if (
        mobileLocaleRef.current &&
        !mobileLocaleRef.current.contains(e.target as Node)
      ) {
        setMobileLocaleOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const toggleMenuAria = isDe
    ? "Menü umschalten"
    : isUa
      ? "Перемкнути меню"
      : "Toggle menu";

  const closeLabel = isDe ? "SCHLIESSEN" : isUa ? "ЗАКРИТИ" : "ЗАКРЫТЬ";

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
            <div ref={localeRef} className="relative">
              <button
                type="button"
                onClick={() => setLocaleOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={localeOpen}
                aria-label="Сменить язык / Change language"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-colors border ${
                  scrolled || forceDark
                    ? "border-border text-muted-foreground hover:text-navy hover:border-gold"
                    : "border-white/30 text-white/90 hover:text-white hover:border-white/60"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {currentLocaleLabel}
                <ChevronDown className="w-3 h-3" />
              </button>
              {localeOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full pt-2 min-w-[120px]"
                >
                  <div className="bg-white rounded-xl border border-border shadow-lg py-1.5">
                    {LOCALES.map((l) => (
                      <a
                        key={l.code}
                        href={pathForLocale(pathname, l.code)}
                        hrefLang={l.hrefLang}
                        aria-label={l.aria}
                        aria-current={
                          l.code === currentLocale ? "true" : undefined
                        }
                        role="menuitem"
                        onClick={() => setLocaleOpen(false)}
                        className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                          l.code === currentLocale
                            ? "text-gold bg-cream"
                            : "text-muted-foreground hover:text-navy hover:bg-cream"
                        }`}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openContactPopover"))
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              {isDe ? "Kontakt" : isUa ? "Зв'язатися" : "Контакт"}
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <div ref={mobileLocaleRef} className="relative">
              <button
                type="button"
                onClick={() => setMobileLocaleOpen((o) => !o)}
                aria-haspopup="true"
                aria-expanded={mobileLocaleOpen}
                aria-label="Сменить язык / Change language"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                  scrolled || forceDark
                    ? "border-border text-muted-foreground hover:text-navy hover:border-gold"
                    : "border-white/30 text-white/90 hover:text-white hover:border-white/60"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {currentLocaleLabel}
                <ChevronDown className="w-3 h-3" />
              </button>
              {mobileLocaleOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full pt-2 min-w-[120px] z-50"
                >
                  <div className="bg-white rounded-xl border border-border shadow-lg py-1.5">
                    {LOCALES.map((l) => (
                      <a
                        key={l.code}
                        href={pathForLocale(pathname, l.code)}
                        hrefLang={l.hrefLang}
                        aria-label={l.aria}
                        aria-current={
                          l.code === currentLocale ? "true" : undefined
                        }
                        role="menuitem"
                        onClick={() => setMobileLocaleOpen(false)}
                        className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                          l.code === currentLocale
                            ? "text-gold bg-cream"
                            : "text-muted-foreground hover:text-navy hover:bg-cream"
                        }`}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              className={`p-2 transition-colors duration-300 ${
                scrolled || forceDark ? "text-navy" : "text-white"
              }`}
              onClick={() => setOpen(!open)}
              aria-label={toggleMenuAria}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="lg:hidden fixed inset-0 z-[60] bg-navy/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={toggleMenuAria}
              className="absolute top-5 right-5 text-white text-sm font-semibold tracking-widest hover:text-gold transition-colors"
            >
              {closeLabel}
            </button>
            <div className="h-full w-full flex flex-col justify-center items-end pr-6 pl-12 pb-16">
              <nav className="flex flex-col items-end gap-1">
                {navLinks.map((link, i) => {
                  const href = link.href ?? link.children?.[0]?.href ?? "#";
                  return (
                    <motion.a
                      key={link.label}
                      href={href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08 + i * 0.05,
                        ease: "easeOut",
                      }}
                      className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-semibold text-white hover:text-gold transition-colors leading-[1.2] text-right"
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
