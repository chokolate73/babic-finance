"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import FacebookIcon from "./FacebookIcon";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, send to an API endpoint
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Контакт
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Оставить заявку
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Заполните форму, и я свяжусь с вами в ближайшее время
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <AnimateOnScroll animation="fade-left">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                Имя и фамилия *
              </label>
              <input
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                E-Mail
              </label>
              <input
                type="email"
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                placeholder="email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                WhatsApp / Телефон *
              </label>
              <input
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                placeholder="+49 ..."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                Сообщение
              </label>
              <textarea
                className="flex min-h-[60px] w-full border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm rounded-xl resize-none"
                placeholder="Расскажите коротко, чем могу помочь..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full text-base shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              type="submit"
            >
              <Send className="w-4 h-4 mr-2" />
              {submitted ? "Отправлено!" : "Отправить мою заявку"}
            </button>
          </form>
          </AnimateOnScroll>

          {/* Contact info */}
          <AnimateOnScroll animation="fade-right">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-border space-y-5">
              <h3 className="font-semibold text-navy text-lg">
                Контактные данные
              </h3>
              <a
                href="tel:+4922418989424"
                className="flex items-center gap-4 text-foreground/80 hover:text-navy transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Офис</p>
                  <p className="font-medium">+49 2241 89 89 424</p>
                </div>
              </a>
              <a
                href="tel:+491784743490"
                className="flex items-center gap-4 text-foreground/80 hover:text-navy transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Мобильный</p>
                  <p className="font-medium">+49 178 474 3490</p>
                </div>
              </a>
              <a
                href="mailto:Vladislav.Babic@dvag.de"
                className="flex items-center gap-4 text-foreground/80 hover:text-navy transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">Vladislav.Babic@dvag.de</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-medium">
                    Mottmannstr. 8, 53842 Troisdorf
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://wa.me/491784743490"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-whatsapp text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
              {/* TODO: заменить на m.me/<username>, когда клиент подтвердит Messenger-ID */}
              <a
                href="https://www.facebook.com/share/1ARmg3GGs7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-[#0084FF] text-white font-semibold rounded-xl hover:opacity-90 transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
                Messenger
              </a>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
