"use client";

import { useEffect, useState, FormEvent } from "react";
import Image from "next/image";
import { Calendar, Monitor, Send, X, Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import WhatsAppIcon from "./WhatsAppIcon";

const SEMINAR_DATE = new Date("2026-04-15T18:30:00+02:00");
const SEMINAR_TITLE = "Консультант по финансам в Германии";

const COURSE_TOPICS = [
  "Как работает система страхования в Германии",
  "Пенсионные программы и накопления",
  "Инвестиции и финансовые инструменты",
  "Банковские продукты и кредиты",
  "Основы финансового консультирования",
];

const COURSE_BENEFITS = [
  "Онлайн-занятия раз в неделю в вечернее время",
  "Доступ ко всем записям уроков",
  "Обучение на русском языке с разбором немецкой терминологии",
  "При необходимости — справка для Jobcenter",
];

const AFTER_COURSE = [
  "Продолжить обучение на немецком языке",
  "Подготовиться к получению лицензий IHK (GewO)",
  "Использовать знания для работы или личного развития",
];

function getWhatsAppQuestionLink() {
  const text = `Здравствуйте, Владислав! Хочу узнать подробнее о курсе "${SEMINAR_TITLE}"`;
  return `https://wa.me/491784743490?text=${encodeURIComponent(text)}`;
}

function getTimeLeft() {
  const now = new Date();
  const diff = SEMINAR_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
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
  const [time, setTime] = useState(getTimeLeft);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const isPast = time === null;

  const countdown = isPast
    ? []
    : [
        { value: time.days, label: "дней" },
        { value: time.hours, label: "часов" },
        { value: time.minutes, label: "минут" },
        { value: time.seconds, label: "секунд" },
      ];

  return (
    <section id="seminar" className="pt-20 pb-10 lg:pt-28 lg:pb-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              {isPast ? "Мероприятие" : "Открыта регистрация"}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              {isPast ? "Обучение состоялось" : "Новый поток курса"}
            </h2>
            {isPast && (
              <p className="text-muted-foreground mt-3">Следующий поток будет анонсирован скоро</p>
            )}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border-t-2 border-gold" style={{ boxShadow: "0 20px 60px -15px rgba(26, 31, 61, 0.15)" }}>
            <div className="relative h-56 sm:h-72">
              <Image
                src="https://media.base44.com/images/public/69d7965f4b77d1c59126e18e/18a10eace_generated_e3868091.png"
                alt="Онлайн курс - Консультант по финансам в Германии"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-4 py-1.5 bg-gold text-navy text-sm font-semibold rounded-full">
                  {isPast ? "Завершён" : "Онлайн обучение"}
                </span>
                <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-semibold rounded-full">
                  Бесплатно
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Countdown */}
              {!isPast && mounted && (
                <div className="flex justify-center gap-3 sm:gap-4 mb-8">
                  {countdown.map((c) => (
                    <div key={c.label} className="text-center">
                      <div
                        className="text-white w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center border border-gold/30"
                        style={{ background: "linear-gradient(to bottom, #242a4e, #1a1f3d)" }}
                      >
                        <span className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold">
                          {c.value}
                        </span>
                      </div>
                      <span className="text-[10px] sm:text-xs text-gold font-semibold uppercase tracking-wider mt-2 block">
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-navy mb-2 text-center">
                {SEMINAR_TITLE}
              </h3>
              <p className="text-center text-muted-foreground text-sm mb-6">
                Уникальный курс на русском языке для тех, кто хочет разобраться в финансовой системе Германии
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Topics */}
                <div>
                  <p className="font-semibold text-navy text-sm mb-3">Во время обучения вы узнаете:</p>
                  <ul className="space-y-2">
                    {COURSE_TOPICS.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                        <span className="text-gold font-bold mt-0.5">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits + After */}
                <div className="space-y-5">
                  <div>
                    <p className="font-semibold text-navy text-sm mb-3">Преимущества курса:</p>
                    <ul className="space-y-2">
                      {COURSE_BENEFITS.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm mb-3">После курса вы сможете:</p>
                    <ul className="space-y-2">
                      {AFTER_COURSE.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-foreground/80 text-sm">
                          <span className="text-gold font-bold mt-0.5">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Старт: 15.04.2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-gold" />
                  <span>Онлайн</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Количество мест ограничено</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-8">
                Даже если у вас нет опыта в финансах — начать можно с нуля.
              </p>

              {!isPast && (
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
                  >
                    Зарегистрироваться
                  </button>
                  <a
                    href={getWhatsAppQuestionLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 border border-navy/20 text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:bg-navy/5 transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    Задать вопрос
                  </a>
                </div>
              )}

              {isPast && (
                <div className="text-center">
                  <a
                    href="https://wa.me/491784743490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base whitespace-nowrap hover:opacity-90 transition-all"
                  >
                    Следующий поток
                  </a>
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
