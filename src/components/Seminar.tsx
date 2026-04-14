"use client";

import { useState, useEffect, FormEvent } from "react";
import { Send, X } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import WhatsAppIcon from "./WhatsAppIcon";

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
    <div className="text-center">
      <div className="w-[72px] h-[78px] bg-navy rounded-xl flex items-center justify-center border border-gold/30 shadow-sm">
        <span className="font-[family-name:var(--font-serif)] text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="block text-xs uppercase tracking-widest text-gold font-semibold mt-2">
        {label}
      </span>
    </div>
  );
}

function CheckItem({ children, gold }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div className="flex gap-3 items-start mb-3.5">
      <div className={`w-[22px] h-[22px] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border ${gold ? "bg-gold/10 border-gold/20" : "bg-navy/5 border-navy/10"}`}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke={gold ? "var(--color-gold)" : "var(--color-navy)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <span className="text-base leading-relaxed text-foreground/80">{children}</span>
    </div>
  );
}

function BulletItem({ children, icon }: { children: React.ReactNode; icon: string }) {
  return (
    <div className="flex gap-2.5 items-start mb-3">
      <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
      <span className="text-base leading-relaxed text-muted-foreground">{children}</span>
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
              <button type="submit" className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:opacity-90 text-navy font-semibold rounded-full text-base shadow transition-all">
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

const waLink = `https://wa.me/491784743490?text=${encodeURIComponent('Здравствуйте, Владислав! Хочу узнать подробнее о курсе "Консультант по финансам в Германии"')}`;

export default function Seminar() {
  const t = useCountdown();
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="seminar" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-8">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Открыта регистрация
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Консультант по финансам в Германии
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Уникальный курс на русском языке для тех, кто хочет разобраться в финансовой системе Германии
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-5">
              {["Онлайн-курс", "3 месяца", "Доступ к записям", "Бесплатно"].map((b) => (
                <span key={b} className="px-4 py-1.5 text-sm font-semibold rounded-full border border-gold/30 bg-gold/10 text-gold">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Countdown */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex justify-center gap-3 sm:gap-4 mb-3">
            <TimeUnit value={t.d} label="дней" />
            <TimeUnit value={t.h} label="часов" />
            <TimeUnit value={t.m} label="минут" />
            <TimeUnit value={t.s} label="секунд" />
          </div>
          <p className="text-center text-sm text-muted-foreground mb-10">до окончания набора на курс</p>
        </AnimateOnScroll>

        {/* Two-column cards */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg font-semibold text-gold mb-6">Подключиться можно в любой момент</p>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <AnimateOnScroll animation="fade-left">
            <div className="bg-card p-7 rounded-2xl border border-border h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-navy/50 mb-5">
                Во время обучения вы узнаете
              </p>
              <CheckItem>Как работает система страхования в Германии</CheckItem>
              <CheckItem>Пенсионные программы и накопления</CheckItem>
              <CheckItem>Инвестиции и финансовые инструменты</CheckItem>
              <CheckItem>Банковские продукты и кредиты</CheckItem>
              <CheckItem>Основы финансового консультирования</CheckItem>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
            <div className="bg-card p-7 rounded-2xl border border-border h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-navy/50 mb-5">
                Преимущества курса
              </p>
              <BulletItem icon="🎥">Онлайн-занятия раз в неделю в вечернее время</BulletItem>
              <BulletItem icon="📂">Доступ ко всем записям уроков</BulletItem>
              <BulletItem icon="🇷🇺">Обучение на русском с разбором немецкой терминологии</BulletItem>
              <BulletItem icon="📄">При необходимости — справка для Jobcenter</BulletItem>
            </div>
          </AnimateOnScroll>
        </div>
        </div>

        {/* After course — gold panel */}
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gold/20 bg-gold/5 p-7 mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              После курса вы сможете
            </p>
            <div className="grid sm:grid-cols-3 gap-x-8">
              <CheckItem gold>Продолжить обучение на немецком языке</CheckItem>
              <CheckItem gold>Подготовиться к получению лицензий IHK (GewO)</CheckItem>
              <CheckItem gold>Использовать знания для работы или личного развития</CheckItem>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Italic note */}
        <AnimateOnScroll animation="fade-up">
          <p className="font-[family-name:var(--font-serif)] italic text-muted-foreground text-center mb-10">
            Даже если у вас нет опыта в финансах — начать можно с нуля
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-semibold rounded-full text-base hover:opacity-90 transition-all shadow-lg shadow-gold/20"
            >
              Хочу на курс
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy/20 text-navy font-semibold rounded-full text-base hover:bg-navy/5 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              Задать вопрос
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
