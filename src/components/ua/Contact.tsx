"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import WhatsAppIcon from "../WhatsAppIcon";
import FacebookIcon from "../FacebookIcon";
import AnimateOnScroll from "../AnimateOnScroll";
import { FORMSPREE_ENDPOINT, isFormspreeConfigured } from "@/lib/formspree";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    if (form.email.trim()) body.append("email", form.email.trim());
    body.append("phone", form.phone.trim());
    if (form.message.trim()) body.append("message", form.message.trim());
    body.append("_subject", `📩 Запит із сайту — ${form.name.trim()}`);
    body.append("formType", "contact");
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
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setErrorMsg("Не вдалося надіслати. Спробуйте ще раз або напишіть у WhatsApp.");
    } finally {
      setSubmitting(false);
    }
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
              Залишити запит
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Заповніть форму, і я зв'яжуся з вами якнайшвидше
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimateOnScroll animation="fade-left">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                Ім'я та прізвище *
              </label>
              <input
                className="flex w-full border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm h-12 rounded-xl"
                placeholder="Ваше ім'я"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">
                Email
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
                Повідомлення
              </label>
              <textarea
                className="flex min-h-[60px] w-full border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm rounded-xl resize-none"
                placeholder="Коротко опишіть, з чим я можу вам допомогти..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 w-full h-12 bg-gold hover:bg-gold/90 text-navy font-semibold rounded-full text-base shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              disabled={submitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {submitting
                ? "Надсилання…"
                : submitted
                  ? "Надіслано!"
                  : "Надіслати запит"}
            </button>
            {errorMsg && (
              <p className="text-sm text-red-600 text-center" role="alert">
                {errorMsg}
              </p>
            )}
          </form>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-border space-y-5">
              <h3 className="font-semibold text-navy text-lg">
                Контактні дані
              </h3>
              <a
                href="tel:+4922418989424"
                className="flex items-center gap-4 text-foreground/80 hover:text-navy transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Офіс</p>
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
                  <p className="text-sm text-muted-foreground">Мобільний</p>
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
                  <p className="text-sm text-muted-foreground">Адреса</p>
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
