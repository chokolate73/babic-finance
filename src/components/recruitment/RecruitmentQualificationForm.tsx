"use client";

import { FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import WhatsAppIcon from "../WhatsAppIcon";
import { FORMSPREE_ENDPOINT, isFormspreeConfigured } from "@/lib/formspree";

export type SourcePage = "homepage" | "quereinstieg" | "buergergeld";

const MOTIVATIONS: { value: string; label: string }[] = [
  { value: "working_not_in_field", label: "Работаю не по специальности" },
  { value: "diploma_not_recognized", label: "Диплом с родины не признаётся" },
  { value: "buergergeld", label: "Я сейчас на Bürgergeld или ALG I" },
  { value: "own_business", label: "Хочу своё дело, а не работать на кого-то" },
  { value: "russian_language", label: "Ищу профессию, где пригодится русский язык" },
  { value: "just_curious", label: "Пока просто интересно узнать больше" },
  { value: "other", label: "Другое" },
];

const FORMATS: { value: string; label: string }[] = [
  { value: "full_change", label: "Готов полностью сменить работу" },
  { value: "parallel", label: "Хочу начать параллельно с текущей работой" },
  { value: "unemployed_ready", label: "Сейчас без работы — готов начать сразу" },
  { value: "exploring", label: "Ещё не решил, смотрю варианты" },
];

const TIMELINES: { value: string; label: string }[] = [
  { value: "asap", label: "Как можно скорее" },
  { value: "1_3_months", label: "В ближайшие 1–3 месяца" },
  { value: "6_plus_months", label: "Через полгода или позже" },
  { value: "just_info", label: "Пока только собираю информацию" },
];

const PAGE_LABELS: Record<SourcePage, string> = {
  homepage: "Главная",
  quereinstieg: "Квереинштайгер",
  buergergeld: "Из Bürgergeld",
};

const WHATSAPP_FALLBACK =
  "https://wa.me/491784743490?text=" +
  encodeURIComponent(
    "Здравствуйте, Владислав! Не смог отправить форму с сайта — хочу узнать про работу финансового консультанта.",
  );

function buildSubject(name: string, sourcePage: SourcePage): string {
  return `🎯 Новый кандидат в консультанты — ${name} (${PAGE_LABELS[sourcePage]})`;
}

function countDigits(s: string): number {
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    if (ch >= 48 && ch <= 57) c++;
  }
  return c;
}

type FieldKey =
  | "name"
  | "motivations"
  | "format"
  | "timeline"
  | "phone"
  | "email";
type Errors = Partial<Record<FieldKey, string>>;

export default function RecruitmentQualificationForm({
  sourcePage,
}: {
  sourcePage: SourcePage;
}) {
  const router = useRouter();
  const uid = useId();

  const [name, setName] = useState("");
  const [motivations, setMotivations] = useState<string[]>([]);
  const [motivationOther, setMotivationOther] = useState("");
  const [format, setFormat] = useState("");
  const [timeline, setTimeline] = useState("");
  const [openAnswer, setOpenAnswer] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  function validateField(key: FieldKey): string | undefined {
    switch (key) {
      case "name":
        return name.trim().length < 2 ? "Имя, пожалуйста" : undefined;
      case "motivations":
        return motivations.length === 0
          ? "Выбери хотя бы один пункт"
          : undefined;
      case "format":
        return format ? undefined : "Выбери формат";
      case "timeline":
        return timeline ? undefined : "Выбери срок";
      case "phone":
        if (countDigits(phone) < 8) return "Нужен номер для связи";
        return undefined;
      case "email": {
        const trimmed = email.trim();
        if (!trimmed) return undefined;
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
          ? undefined
          : "Проверь формат email";
      }
    }
  }

  function validateAll(): Errors {
    const e: Errors = {};
    (
      ["name", "motivations", "format", "timeline", "phone", "email"] as FieldKey[]
    ).forEach((k) => {
      const msg = validateField(k);
      if (msg) e[k] = msg;
    });
    return e;
  }

  function handleBlur(key: FieldKey) {
    const msg = validateField(key);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[key] = msg;
      else delete next[key];
      return next;
    });
  }

  function toggleMotivation(value: string) {
    setMotivations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validateAll();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0];
      const firstEl = document.getElementById(`${uid}-${firstKey}`);
      firstEl?.focus();
      return;
    }

    if (!isFormspreeConfigured()) {
      setNetworkError(true);
      return;
    }

    setSubmitting(true);
    setNetworkError(false);

    const trimmedName = name.trim();
    const body = new URLSearchParams();
    body.append("name", trimmedName);
    motivations.forEach((m) => body.append("motivations[]", m));
    if (motivations.includes("other") && motivationOther.trim()) {
      body.append("motivationOther", motivationOther.trim());
    }
    body.append("format", format);
    body.append("timeline", timeline);
    if (openAnswer.trim()) body.append("openAnswer", openAnswer.trim());
    body.append("phone", phone.trim());
    if (email.trim()) body.append("email", email.trim());
    body.append("_subject", buildSubject(trimmedName, sourcePage));
    body.append("formType", "recruitment");
    body.append("sourcePage", sourcePage);

    const honeypotEl = (e.currentTarget.elements.namedItem(
      "_gotcha",
    ) as HTMLInputElement | null);
    if (honeypotEl?.value) body.append("_gotcha", honeypotEl.value);

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
      router.push("/karriere/thank-you");
    } catch {
      setNetworkError(true);
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-navy placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors";
  const errorClass = "border-red-400 focus:ring-red-400 focus:border-red-400";

  function fieldErrorId(key: FieldKey) {
    return `${uid}-${key}-error`;
  }

  return (
    <section id="apply" className="py-20 lg:py-28 bg-navy scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Подходит ли мне эта работа?
            </h2>
            <p className="text-white/75 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              5 коротких вопросов, 2 минуты. Ответы приходят лично Владиславу — он
              свяжется в течение дня.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="max-w-[720px] mx-auto bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/30">
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Honeypot */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  opacity: 0,
                }}
              />

              {/* 1. Name */}
              <div>
                <label
                  htmlFor={`${uid}-name`}
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Имя <span className="text-gold">*</span>
                </label>
                <input
                  id={`${uid}-name`}
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => handleBlur("name")}
                  placeholder="Твоё имя"
                  required
                  autoComplete="given-name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? fieldErrorId("name") : undefined}
                  className={`${inputBase} ${errors.name ? errorClass : ""}`}
                />
                {errors.name && (
                  <p
                    id={fieldErrorId("name")}
                    className="mt-1.5 text-sm text-red-600"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* 2. Motivations */}
              <fieldset
                aria-describedby={
                  errors.motivations ? fieldErrorId("motivations") : undefined
                }
              >
                <legend className="text-sm font-semibold text-navy mb-3">
                  Что тебя подтолкнуло задуматься о смене профессии?{" "}
                  <span className="text-gold">*</span>
                </legend>
                <div className="space-y-2">
                  {MOTIVATIONS.map((m) => {
                    const checked = motivations.includes(m.value);
                    return (
                      <label
                        key={m.value}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                          checked
                            ? "border-gold bg-gold/5"
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="motivations[]"
                          value={m.value}
                          checked={checked}
                          onChange={() => {
                            toggleMotivation(m.value);
                            if (errors.motivations) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.motivations;
                                return next;
                              });
                            }
                          }}
                          className="mt-0.5 w-4 h-4 accent-gold cursor-pointer"
                        />
                        <span className="text-sm text-navy leading-snug">
                          {m.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {motivations.includes("other") && (
                  <div className="mt-3">
                    <label
                      htmlFor={`${uid}-motivationOther`}
                      className="block text-xs text-muted-foreground mb-1.5"
                    >
                      Опиши своими словами
                    </label>
                    <input
                      id={`${uid}-motivationOther`}
                      name="motivationOther"
                      type="text"
                      value={motivationOther}
                      onChange={(e) => setMotivationOther(e.target.value)}
                      placeholder="Что именно?"
                      maxLength={200}
                      className={inputBase}
                    />
                  </div>
                )}
                {errors.motivations && (
                  <p
                    id={fieldErrorId("motivations")}
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.motivations}
                  </p>
                )}
              </fieldset>

              {/* 3. Format */}
              <fieldset
                aria-describedby={
                  errors.format ? fieldErrorId("format") : undefined
                }
              >
                <legend className="text-sm font-semibold text-navy mb-3">
                  Какой формат тебе ближе? <span className="text-gold">*</span>
                </legend>
                <div className="space-y-2">
                  {FORMATS.map((opt) => {
                    const checked = format === opt.value;
                    return (
                      <label
                        key={opt.value}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                          checked
                            ? "border-gold bg-gold/5"
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="format"
                          value={opt.value}
                          checked={checked}
                          onChange={() => {
                            setFormat(opt.value);
                            if (errors.format) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.format;
                                return next;
                              });
                            }
                          }}
                          className="mt-0.5 w-4 h-4 accent-gold cursor-pointer"
                        />
                        <span className="text-sm text-navy leading-snug">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.format && (
                  <p
                    id={fieldErrorId("format")}
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.format}
                  </p>
                )}
              </fieldset>

              {/* 4. Timeline */}
              <fieldset
                aria-describedby={
                  errors.timeline ? fieldErrorId("timeline") : undefined
                }
              >
                <legend className="text-sm font-semibold text-navy mb-3">
                  Когда хотел бы начать? <span className="text-gold">*</span>
                </legend>
                <div className="space-y-2">
                  {TIMELINES.map((opt) => {
                    const checked = timeline === opt.value;
                    return (
                      <label
                        key={opt.value}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                          checked
                            ? "border-gold bg-gold/5"
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={opt.value}
                          checked={checked}
                          onChange={() => {
                            setTimeline(opt.value);
                            if (errors.timeline) {
                              setErrors((prev) => {
                                const next = { ...prev };
                                delete next.timeline;
                                return next;
                              });
                            }
                          }}
                          className="mt-0.5 w-4 h-4 accent-gold cursor-pointer"
                        />
                        <span className="text-sm text-navy leading-snug">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.timeline && (
                  <p
                    id={fieldErrorId("timeline")}
                    className="mt-2 text-sm text-red-600"
                  >
                    {errors.timeline}
                  </p>
                )}
              </fieldset>

              {/* 5. Open answer */}
              <div>
                <label
                  htmlFor={`${uid}-openAnswer`}
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Напиши одним предложением — что для тебя важнее всего получить в
                  разговоре с Владиславом?
                </label>
                <textarea
                  id={`${uid}-openAnswer`}
                  name="openAnswer"
                  value={openAnswer}
                  onChange={(e) => setOpenAnswer(e.target.value.slice(0, 500))}
                  placeholder="Например: понять, реально ли это совместить с работой / узнать про Bürgergeld / просто пообщаться..."
                  rows={3}
                  maxLength={500}
                  className={`${inputBase} resize-none min-h-[96px]`}
                />
                <p className="mt-1 text-xs text-muted-foreground text-right">
                  {openAnswer.length}/500
                </p>
              </div>

              {/* 6. Phone */}
              <div>
                <label
                  htmlFor={`${uid}-phone`}
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  WhatsApp или телефон для связи{" "}
                  <span className="text-gold">*</span>
                </label>
                <input
                  id={`${uid}-phone`}
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  placeholder="+49 ..."
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={
                    errors.phone ? fieldErrorId("phone") : undefined
                  }
                  className={`${inputBase} ${errors.phone ? errorClass : ""}`}
                />
                {errors.phone && (
                  <p
                    id={fieldErrorId("phone")}
                    className="mt-1.5 text-sm text-red-600"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* 7. Email */}
              <div>
                <label
                  htmlFor={`${uid}-email`}
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Email
                </label>
                <input
                  id={`${uid}-email`}
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="только если удобнее связаться по email"
                  autoComplete="email"
                  inputMode="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={
                    errors.email ? fieldErrorId("email") : undefined
                  }
                  className={`${inputBase} ${errors.email ? errorClass : ""}`}
                />
                {errors.email && (
                  <p
                    id={fieldErrorId("email")}
                    className="mt-1.5 text-sm text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {networkError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  Не удалось отправить. Попробуй ещё раз или напиши в WhatsApp
                  напрямую:{" "}
                  <a
                    href={WHATSAPP_FALLBACK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    +49 178 474 3490
                  </a>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="inline-flex items-center justify-center gap-2 w-full h-14 bg-gold text-navy font-semibold rounded-full text-base shadow-lg shadow-gold/25 hover:brightness-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="typing-dot">·</span>
                      <span className="typing-dot" style={{ animationDelay: "0.2s" }}>
                        ·
                      </span>
                      <span className="typing-dot" style={{ animationDelay: "0.4s" }}>
                        ·
                      </span>
                      <span className="ml-1">Отправка…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить заявку Владиславу
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-muted-foreground text-center italic leading-relaxed">
                  Твои данные уходят только Владиславу. Никаких рассылок, никакого
                  спама. Соблюдаем DSGVO.
                </p>
              </div>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
