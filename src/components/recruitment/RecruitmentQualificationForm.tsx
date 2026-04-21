"use client";

import { FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
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

const TOTAL_STEPS = 5;

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
  const prefersReduced = useReducedMotion();

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

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

  function validateStep(s: number): Errors {
    const e: Errors = {};
    switch (s) {
      case 0:
        if (name.trim().length < 2) e.name = "Имя, пожалуйста";
        break;
      case 1:
        if (motivations.length === 0)
          e.motivations = "Выбери хотя бы один пункт";
        break;
      case 2:
        if (!format) e.format = "Выбери формат";
        break;
      case 3:
        if (!timeline) e.timeline = "Выбери срок";
        break;
      case 4: {
        if (countDigits(phone) < 8) e.phone = "Нужен номер для связи";
        const trimmedEmail = email.trim();
        if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
          e.email = "Проверь формат email";
        break;
      }
    }
    return e;
  }

  function toggleMotivation(value: string) {
    setMotivations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
    if (errors.motivations) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.motivations;
        return next;
      });
    }
  }

  function goNext() {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setDirection(1);
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrors({});
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step < TOTAL_STEPS - 1) {
      goNext();
      return;
    }

    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
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

    const honeypotEl = e.currentTarget.elements.namedItem(
      "_gotcha",
    ) as HTMLInputElement | null;
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
    "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-base text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors";
  const errorClass = "border-red-400 focus:ring-red-400 focus:border-red-400";

  function fieldErrorId(key: FieldKey) {
    return `${uid}-${key}-error`;
  }

  const stepVariants = prefersReduced
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: -dir * 40 }),
      };

  const progressPct = ((step + 1) / TOTAL_STEPS) * 100;
  const isLastStep = step === TOTAL_STEPS - 1;

  return (
    <section id="apply" className="py-20 lg:py-28 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-10 bg-gold" />
            </div>
            <span className="text-gold font-semibold text-xs sm:text-sm uppercase tracking-wider">
              5 вопросов · 2 минуты
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3">
              Подходит ли мне эта работа?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Ответы приходят лично Владиславу — он свяжется в течение дня.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="max-w-[640px] mx-auto bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border/60">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs sm:text-sm mb-2.5">
                <span className="text-muted-foreground font-medium">
                  Шаг {step + 1} из {TOTAL_STEPS}
                </span>
                <span className="text-gold font-semibold">
                  {Math.round(progressPct)}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold rounded-full"
                  initial={false}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
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

              <div className="min-h-[320px] sm:min-h-[340px]">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {step === 0 && (
                      <div>
                        <label
                          htmlFor={`${uid}-name`}
                          className="block font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug"
                        >
                          Как тебя зовут?
                        </label>
                        <p className="text-sm text-muted-foreground mb-5">
                          Владислав обращается к кандидатам на «ты» — так теплее.
                        </p>
                        <input
                          id={`${uid}-name`}
                          name="name"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) {
                              setErrors((prev) => {
                                const n = { ...prev };
                                delete n.name;
                                return n;
                              });
                            }
                          }}
                          placeholder="Твоё имя"
                          autoComplete="given-name"
                          autoFocus
                          aria-invalid={!!errors.name}
                          aria-describedby={
                            errors.name ? fieldErrorId("name") : undefined
                          }
                          className={`${inputBase} ${errors.name ? errorClass : ""}`}
                        />
                        {errors.name && (
                          <p
                            id={fieldErrorId("name")}
                            className="mt-2 text-sm text-red-600"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                    )}

                    {step === 1 && (
                      <fieldset
                        aria-describedby={
                          errors.motivations
                            ? fieldErrorId("motivations")
                            : undefined
                        }
                      >
                        <legend className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug">
                          Что подтолкнуло задуматься о смене профессии?
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          Можно выбрать несколько.
                        </p>
                        <div className="space-y-2">
                          {MOTIVATIONS.map((m) => {
                            const checked = motivations.includes(m.value);
                            return (
                              <label
                                key={m.value}
                                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                                  checked
                                    ? "border-gold bg-gold/5"
                                    : "border-border hover:border-gold/50 hover:bg-cream"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  name="motivations[]"
                                  value={m.value}
                                  checked={checked}
                                  onChange={() => toggleMotivation(m.value)}
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
                            <input
                              name="motivationOther"
                              type="text"
                              value={motivationOther}
                              onChange={(e) =>
                                setMotivationOther(e.target.value)
                              }
                              placeholder="Опиши своими словами"
                              maxLength={200}
                              className={inputBase}
                            />
                          </div>
                        )}
                        {errors.motivations && (
                          <p
                            id={fieldErrorId("motivations")}
                            className="mt-3 text-sm text-red-600"
                          >
                            {errors.motivations}
                          </p>
                        )}
                      </fieldset>
                    )}

                    {step === 2 && (
                      <fieldset
                        aria-describedby={
                          errors.format ? fieldErrorId("format") : undefined
                        }
                      >
                        <legend className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug">
                          Какой формат тебе ближе?
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          Выбери одно.
                        </p>
                        <div className="space-y-2">
                          {FORMATS.map((opt) => {
                            const checked = format === opt.value;
                            return (
                              <label
                                key={opt.value}
                                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                                  checked
                                    ? "border-gold bg-gold/5"
                                    : "border-border hover:border-gold/50 hover:bg-cream"
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
                                        const n = { ...prev };
                                        delete n.format;
                                        return n;
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
                            className="mt-3 text-sm text-red-600"
                          >
                            {errors.format}
                          </p>
                        )}
                      </fieldset>
                    )}

                    {step === 3 && (
                      <fieldset
                        aria-describedby={
                          errors.timeline ? fieldErrorId("timeline") : undefined
                        }
                      >
                        <legend className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug">
                          Когда хотел бы начать?
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          Выбери одно.
                        </p>
                        <div className="space-y-2">
                          {TIMELINES.map((opt) => {
                            const checked = timeline === opt.value;
                            return (
                              <label
                                key={opt.value}
                                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                                  checked
                                    ? "border-gold bg-gold/5"
                                    : "border-border hover:border-gold/50 hover:bg-cream"
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
                                        const n = { ...prev };
                                        delete n.timeline;
                                        return n;
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
                            className="mt-3 text-sm text-red-600"
                          >
                            {errors.timeline}
                          </p>
                        )}
                      </fieldset>
                    )}

                    {step === 4 && (
                      <div className="space-y-5">
                        <div>
                          <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-2 leading-snug">
                            Почти готово, {name.trim() || "друг"}!
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Оставь контакт — Владислав свяжется в течение дня.
                          </p>
                        </div>

                        <div>
                          <label
                            htmlFor={`${uid}-openAnswer`}
                            className="block text-sm font-semibold text-navy mb-2"
                          >
                            Что для тебя важнее всего получить в разговоре с
                            Владиславом?{" "}
                            <span className="text-muted-foreground font-normal">
                              (необязательно)
                            </span>
                          </label>
                          <textarea
                            id={`${uid}-openAnswer`}
                            name="openAnswer"
                            value={openAnswer}
                            onChange={(e) =>
                              setOpenAnswer(e.target.value.slice(0, 500))
                            }
                            placeholder="Например: понять, реально ли совместить с работой / узнать про Bürgergeld..."
                            rows={3}
                            maxLength={500}
                            className={`${inputBase} resize-none min-h-[84px]`}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`${uid}-phone`}
                            className="block text-sm font-semibold text-navy mb-2"
                          >
                            WhatsApp или телефон{" "}
                            <span className="text-gold">*</span>
                          </label>
                          <input
                            id={`${uid}-phone`}
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              if (errors.phone) {
                                setErrors((prev) => {
                                  const n = { ...prev };
                                  delete n.phone;
                                  return n;
                                });
                              }
                            }}
                            placeholder="+49 ..."
                            autoComplete="tel"
                            inputMode="tel"
                            aria-invalid={!!errors.phone}
                            aria-describedby={
                              errors.phone
                                ? fieldErrorId("phone")
                                : undefined
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

                        <div>
                          <label
                            htmlFor={`${uid}-email`}
                            className="block text-sm font-semibold text-navy mb-2"
                          >
                            Email{" "}
                            <span className="text-muted-foreground font-normal">
                              (если удобнее по email)
                            </span>
                          </label>
                          <input
                            id={`${uid}-email`}
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) {
                                setErrors((prev) => {
                                  const n = { ...prev };
                                  delete n.email;
                                  return n;
                                });
                              }
                            }}
                            placeholder="you@example.com"
                            autoComplete="email"
                            inputMode="email"
                            aria-invalid={!!errors.email}
                            aria-describedby={
                              errors.email
                                ? fieldErrorId("email")
                                : undefined
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
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {networkError && (
                <div
                  role="alert"
                  className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
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

              {/* Navigation */}
              <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-border">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={submitting}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full disabled:opacity-50"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Назад
                  </button>
                ) : (
                  <span />
                )}

                {isLastStep ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base shadow-lg shadow-gold/25 hover:brightness-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <span className="typing-dot">·</span>
                        <span
                          className="typing-dot"
                          style={{ animationDelay: "0.2s" }}
                        >
                          ·
                        </span>
                        <span
                          className="typing-dot"
                          style={{ animationDelay: "0.4s" }}
                        >
                          ·
                        </span>
                        <span className="ml-1">Отправка…</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Отправить Владиславу
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base shadow-lg shadow-gold/25 hover:brightness-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    Дальше
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              <p className="mt-5 text-xs text-muted-foreground text-center italic leading-relaxed">
                Твои данные уходят только Владиславу. Никаких рассылок, никакого
                спама. Соблюдаем DSGVO.
              </p>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
