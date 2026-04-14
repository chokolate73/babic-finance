"use client";

import { useState, useEffect, FormEvent } from "react";

const FONT_SERIF = "var(--font-serif)";   // Montserrat
const FONT_SANS  = "var(--font-sans)";    // Inter
import { Send, X } from "lucide-react";

const COURSE_END = new Date("2026-07-15T19:00:00+02:00");

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, COURSE_END.getTime() - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: FONT_SERIF,
          fontVariantNumeric: "tabular-nums",
          fontSize: "2.6rem",
          fontWeight: 500,
          lineHeight: 1,
          color: "#1A3C5E",
          letterSpacing: "-0.03em",
          background: "#fff",
          borderRadius: 14,
          width: 72,
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 12px rgba(26,60,94,0.08), 0 0 0 1px rgba(26,60,94,0.06)",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        style={{
          fontFamily: FONT_SANS,
          fontSize: "0.6rem",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "#A0895C",
          marginTop: 8,
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CheckItem({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          background: gold ? "rgba(180,148,60,0.1)" : "rgba(26,60,94,0.06)",
          border: gold ? "1px solid rgba(180,148,60,0.2)" : "1px solid rgba(26,60,94,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 1,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke={gold ? "#A0895C" : "#1A3C5E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span style={{ fontFamily: FONT_SANS, fontSize: "0.92rem", lineHeight: 1.55, color: "#3A3A3A" }}>
        {children}
      </span>
    </div>
  );
}

function BulletItem({ children, icon }: { children: React.ReactNode; icon: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
      <span style={{ fontSize: "0.95rem", flexShrink: 0, marginTop: 1 }}>{icon}</span>
      <span style={{ fontFamily: FONT_SANS, fontSize: "0.88rem", lineHeight: 1.55, color: "#555" }}>
        {children}
      </span>
    </div>
  );
}

function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to API / CRM
    console.log("Course registration:", form);
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <button aria-label="Закрыть" onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <div>
            <p className="text-xs text-gold font-semibold uppercase tracking-wider">Онлайн обучение</p>
            <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy mt-0.5">Регистрация</h3>
          </div>
          <button onClick={onClose} aria-label="Закрыть" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-navy flex items-center justify-center transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Имя и фамилия *</label>
                <input
                  className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">WhatsApp / Телефон *</label>
                <input
                  className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                  placeholder="+49 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full text-base shadow transition-colors">
                <Send className="w-4 h-4" />
                Зарегистрироваться
              </button>
            </form>
          ) : (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-navy text-lg">Заявка отправлена!</p>
              <p className="text-muted-foreground text-sm mt-1">Владислав свяжется с вами в ближайшее время.</p>
              <button onClick={onClose} className="mt-5 text-gold text-sm hover:underline">Закрыть</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Seminar() {
  const t = useCountdown();
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const waLink = `https://wa.me/491784743490?text=${encodeURIComponent('Здравствуйте, Владислав! Хочу узнать подробнее о курсе "Консультант по финансам в Германии"')}`;

  return (
    <section id="seminar">
      <div
        style={{
          background: "#F5F0E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle warm radial */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "40%",
            height: "50%",
            background: "radial-gradient(circle, rgba(180,148,60,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "56px 24px 72px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top badge */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <span
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#A0895C",
                background: "rgba(180,148,60,0.1)",
                border: "1px solid rgba(180,148,60,0.18)",
                padding: "6px 20px",
                borderRadius: 100,
                display: "inline-block",
                fontWeight: 500,
              }}
            >
              Онлайн-курс · 3 месяца · Доступ к записям
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: FONT_SERIF,
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              fontWeight: 700,
              color: "#1A3C5E",
              textAlign: "center",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            Консультант по финансам
            <br />
            <span style={{ color: "#A0895C" }}>в Германии</span>
          </h2>

          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: "1rem",
              color: "#7A7A7A",
              textAlign: "center",
              maxWidth: 500,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Уникальный курс на русском языке для тех, кто хочет разобраться в финансовой системе Германии
          </p>

          {/* Countdown */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              marginBottom: 8,
              maxWidth: 400,
              margin: "0 auto 8px",
            }}
          >
            <TimeUnit value={t.d} label="дней" />
            <TimeUnit value={t.h} label="часов" />
            <TimeUnit value={t.m} label="минут" />
            <TimeUnit value={t.s} label="секунд" />
          </div>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: "0.72rem",
              color: "#aaa",
              textAlign: "center",
              margin: "0 0 12px",
            }}
          >
            до окончания набора на курс
          </p>
          <p
            style={{
              fontFamily: FONT_SANS,
              fontSize: "0.85rem",
              color: "#A0895C",
              textAlign: "center",
              margin: "0 0 44px",
              fontWeight: 500,
            }}
          >
            Подключиться можно в любой момент
          </p>

          {/* Two-column content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 24,
            }}
          >
            {/* Left — what you'll learn */}
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(26,60,94,0.07)",
                padding: "28px 26px",
                boxShadow: "0 1px 8px rgba(26,60,94,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#1A3C5E",
                  marginBottom: 22,
                  fontWeight: 600,
                  opacity: 0.5,
                }}
              >
                Во время обучения вы узнаете
              </h3>
              <CheckItem>Как работает система страхования в Германии</CheckItem>
              <CheckItem>Пенсионные программы и накопления</CheckItem>
              <CheckItem>Инвестиции и финансовые инструменты</CheckItem>
              <CheckItem>Банковские продукты и кредиты</CheckItem>
              <CheckItem>Основы финансового консультирования</CheckItem>
            </div>

            {/* Right — advantages */}
            <div
              style={{
                background: "#fff",
                borderRadius: 16,
                border: "1px solid rgba(26,60,94,0.07)",
                padding: "28px 26px",
                boxShadow: "0 1px 8px rgba(26,60,94,0.04)",
              }}
            >
              <h3
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#1A3C5E",
                  marginBottom: 22,
                  fontWeight: 600,
                  opacity: 0.5,
                }}
              >
                Преимущества курса
              </h3>
              <BulletItem icon="🎥">Онлайн-занятия раз в неделю в вечернее время</BulletItem>
              <BulletItem icon="📂">Доступ ко всем записям уроков</BulletItem>
              <BulletItem icon="🇷🇺">Обучение на русском с разбором немецкой терминологии</BulletItem>
              <BulletItem icon="📄">При необходимости — справка для Jobcenter</BulletItem>
            </div>
          </div>

          {/* After the course */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(180,148,60,0.07), rgba(180,148,60,0.02))",
              borderRadius: 16,
              border: "1px solid rgba(180,148,60,0.15)",
              padding: "26px 28px",
              marginBottom: 44,
            }}
          >
            <h3
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#A0895C",
                marginBottom: 18,
                fontWeight: 600,
              }}
            >
              После курса вы сможете
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              {[
                "Продолжить обучение на немецком языке",
                "Подготовиться к получению лицензий IHK (GewO)",
                "Использовать знания для работы или личного развития",
              ].map((text, i) => (
                <CheckItem key={i} gold>{text}</CheckItem>
              ))}
            </div>
          </div>

          {/* Italic note */}
          <p
            style={{
              fontFamily: FONT_SERIF,
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "#999",
              textAlign: "center",
              marginBottom: 28,
              lineHeight: 1.6,
            }}
          >
            Даже если у вас нет опыта в финансах — начать можно с нуля
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button
              onClick={() => setShowModal(true)}
              onMouseEnter={() => setHoveredBtn("reg")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#fff",
                background: hoveredBtn === "reg" ? "#1F4A72" : "#1A3C5E",
                border: "none",
                padding: "16px 40px",
                borderRadius: 12,
                cursor: "pointer",
                transition: "all 0.25s ease",
                transform: hoveredBtn === "reg" ? "translateY(-2px)" : "none",
                boxShadow: hoveredBtn === "reg"
                  ? "0 8px 28px rgba(26,60,94,0.25)"
                  : "0 4px 14px rgba(26,60,94,0.12)",
              }}
            >
              Хочу на курс
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredBtn("wa")}
              onMouseLeave={() => setHoveredBtn(null)}
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "#1A3C5E",
                background: hoveredBtn === "wa" ? "rgba(26,60,94,0.06)" : "transparent",
                border: "1px solid rgba(26,60,94,0.18)",
                padding: "16px 32px",
                borderRadius: 12,
                cursor: "pointer",
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A3C5E" opacity={0.5}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.146.565 4.158 1.55 5.897L.053 23.511a.5.5 0 00.607.607l5.614-1.497A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.757-.556-5.293-1.517l-.38-.228-3.327.887.887-3.327-.228-.38A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Задать вопрос
            </a>
          </div>
        </div>
      </div>

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
