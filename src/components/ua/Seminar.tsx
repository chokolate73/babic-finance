"use client";

import { useState, useEffect, FormEvent } from "react";
import { Send, X, Video, FolderOpen, Languages, FileText } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import WhatsAppIcon from "../WhatsAppIcon";
import { FORMSPREE_ENDPOINT, isFormspreeConfigured } from "@/lib/formspree";

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

function BulletItem({ children, icon: Icon }: { children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex gap-3 items-start mb-3.5">
      <div className="w-[22px] h-[22px] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 bg-gold/10 border border-gold/20">
        <Icon className="w-3 h-3 text-gold" />
      </div>
      <span className="text-base leading-relaxed text-foreground/80">{children}</span>
    </div>
  );
}

function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    if (!isFormspreeConfigured()) {
      setErrorMsg("Не вдалося надіслати. Напишіть, будь ласка, у WhatsApp.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    const body = new URLSearchParams();
    body.append("name", form.name.trim());
    body.append("phone", form.phone.trim());
    body.append("_subject", `🎓 Запис на курс - ${form.name.trim()}`);
    body.append("formType", "seminar");
    body.append("locale", "ua");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(String(response.status));
      setSubmitted(true);
    } catch {
      setErrorMsg("Не вдалося надіслати. Спробуйте ще раз або напишіть у WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <button aria-label="Закрити" onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <div>
            <p className="text-xs text-gold font-semibold uppercase tracking-wider">Онлайн-курс</p>
            <h3 className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy mt-0.5">Запис</h3>
          </div>
          <button onClick={onClose} aria-label="Закрити" className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-navy flex items-center justify-center transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-navy mb-1.5 block">Ім'я та прізвище *</label>
                <input
                  className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                  placeholder="Ваше ім'я"
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
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:opacity-90 text-navy font-semibold rounded-full text-base shadow transition-all disabled:opacity-60 disabled:pointer-events-none"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Надсилання…" : "Записатися"}
              </button>
              {errorMsg && (
                <p className="text-sm text-red-600 text-center" role="alert">
                  {errorMsg}
                </p>
              )}
            </form>
          ) : (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-navy text-lg">Заявку надіслано!</p>
              <p className="text-muted-foreground text-sm mt-1">Владислав зв'яжеться з вами найближчим часом.</p>
              <button onClick={onClose} className="mt-5 text-gold text-sm hover:underline">Закрити</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const waLink = `https://wa.me/4922418989424?text=${encodeURIComponent('Вітаю, Владиславе! Хочу дізнатися більше про курс «Фінансовий консультант у Німеччині».')}`;

export default function Seminar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="seminar" className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Live · Заняття з експертом
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Консультант із фінансів у Німеччині
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Унікальний курс для тих, хто хоче розібратися у фінансовій системі Німеччини
            </p>
            <p className="text-navy/70 text-sm mt-2 max-w-lg mx-auto">
              Раз на тиждень зустрічаємося наживо - розбираємо теми та відповідаю на запитання. Запис кожного заняття залишається у вас.
            </p>
            <p className="text-navy/60 text-xs italic mt-3 max-w-lg mx-auto">
              Курс - у живому форматі з детальним розбором німецької фінансової термінології.
            </p>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold text-navy text-sm font-bold shadow-md shadow-gold/20">
                100% безкоштовно
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Live раз на тиждень", "3 місяці", "Доступ до записів", "Підключитися можна будь-коли"].map((b) => (
                <span key={b} className="px-4 py-1.5 text-sm font-semibold rounded-full border border-gold/30 bg-gold/10 text-gold">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          <AnimateOnScroll animation="fade-left">
            <div className="bg-card p-7 rounded-2xl border border-border h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-navy/50 mb-5">
                Під час навчання ви дізнаєтеся
              </p>
              <CheckItem>Як працює система страхування в Німеччині</CheckItem>
              <CheckItem>Пенсійні програми та накопичення</CheckItem>
              <CheckItem>Інвестиції та фінансові інструменти</CheckItem>
              <CheckItem>Банківські продукти й кредити</CheckItem>
              <CheckItem>Основи фінансового консультування</CheckItem>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
            <div className="bg-card p-7 rounded-2xl border border-border h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-navy/50 mb-5">
                Переваги курсу
              </p>
              <BulletItem icon={Video}>Онлайн-заняття раз на тиждень увечері</BulletItem>
              <BulletItem icon={FolderOpen}>Доступ до всіх записів уроків</BulletItem>
              <BulletItem icon={Languages}>Розбір німецької фінансової термінології</BulletItem>
              <BulletItem icon={FileText}>За потреби - довідка для Jobcenter</BulletItem>
            </div>
          </AnimateOnScroll>
        </div>
        </div>

        <AnimateOnScroll animation="fade-up">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gold/20 bg-gold/5 p-7 mb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold mb-5">
              Після курсу ви зможете
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8">
              <CheckItem gold>Продовжити навчання німецькою мовою</CheckItem>
              <CheckItem gold>Готуватися до отримання ліцензій IHK (GewO)</CheckItem>
              <CheckItem gold>Використовувати знання для роботи або особистого розвитку</CheckItem>
              <CheckItem gold>Навіть якщо у вас немає досвіду у фінансах - почати можна з нуля</CheckItem>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up">
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
              Поставити запитання
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
