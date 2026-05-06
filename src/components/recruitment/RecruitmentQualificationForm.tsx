"use client";

import { FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import AnimateOnScroll from "../AnimateOnScroll";
import WhatsAppIcon from "../WhatsAppIcon";
import { FORMSPREE_ENDPOINT, isFormspreeConfigured } from "@/lib/formspree";

export type SourcePage =
  | "homepage"
  | "quereinstieg"
  | "buergergeld"
  | "nebenberuf";
export type Locale = "ru" | "de" | "ua";

type Option = { value: string; label: string };

const MOTIVATIONS: Record<Locale, Option[]> = {
  ru: [
    { value: "working_not_in_field", label: "Работаю не по специальности" },
    { value: "diploma_not_recognized", label: "Диплом с родины не признаётся" },
    { value: "buergergeld", label: "Я сейчас на Bürgergeld или ALG I" },
    { value: "own_business", label: "Хочу своё дело, а не работать на кого-то" },
    { value: "russian_language", label: "Ищу профессию, где пригодятся мои языки" },
    { value: "just_curious", label: "Пока просто интересно узнать больше" },
    { value: "other", label: "Другое" },
  ],
  de: [
    { value: "working_not_in_field", label: "Arbeite nicht in meinem Beruf" },
    { value: "diploma_not_recognized", label: "Mein Diplom wird nicht anerkannt" },
    { value: "buergergeld", label: "Ich beziehe Bürgergeld oder ALG I" },
    { value: "own_business", label: "Ich will selbstständig sein" },
    { value: "russian_language", label: "Ich suche einen Beruf, in dem meine Sprachen gefragt sind" },
    { value: "just_curious", label: "Bin erstmal neugierig" },
    { value: "other", label: "Anderes" },
  ],
  ua: [
    { value: "working_not_in_field", label: "Працюю не за фахом" },
    { value: "diploma_not_recognized", label: "Диплом із батьківщини не визнають" },
    { value: "buergergeld", label: "Я зараз на Bürgergeld або ALG I" },
    { value: "own_business", label: "Хочу свою справу, а не працювати на когось" },
    { value: "russian_language", label: "Шукаю професію, де знадобляться мої мови" },
    { value: "just_curious", label: "Поки просто цікаво дізнатися більше" },
    { value: "other", label: "Інше" },
  ],
};

const FORMATS: Record<Locale, Option[]> = {
  ru: [
    { value: "full_change", label: "Готов полностью сменить работу" },
    { value: "parallel", label: "Хочу начать параллельно с текущей работой" },
    { value: "unemployed_ready", label: "Сейчас без работы - готов начать сразу" },
    { value: "exploring", label: "Ещё не решил, смотрю варианты" },
  ],
  de: [
    { value: "full_change", label: "Bereit, den Beruf komplett zu wechseln" },
    { value: "parallel", label: "Will parallel zum aktuellen Job starten" },
    { value: "unemployed_ready", label: "Bin aktuell ohne Job - starte sofort" },
    { value: "exploring", label: "Noch nicht entschieden, schaue mich um" },
  ],
  ua: [
    { value: "full_change", label: "Готовий повністю змінити роботу" },
    { value: "parallel", label: "Хочу почати паралельно з поточною роботою" },
    { value: "unemployed_ready", label: "Зараз без роботи - готовий почати одразу" },
    { value: "exploring", label: "Ще не вирішив, дивлюся варіанти" },
  ],
};

const TIMELINES: Record<Locale, Option[]> = {
  ru: [
    { value: "asap", label: "Как можно скорее" },
    { value: "1_3_months", label: "В ближайшие 1–3 месяца" },
    { value: "6_plus_months", label: "Через полгода или позже" },
    { value: "just_info", label: "Пока только собираю информацию" },
  ],
  de: [
    { value: "asap", label: "So früh wie möglich" },
    { value: "1_3_months", label: "In den nächsten 1–3 Monaten" },
    { value: "6_plus_months", label: "In einem halben Jahr oder später" },
    { value: "just_info", label: "Sammle nur Informationen" },
  ],
  ua: [
    { value: "asap", label: "Якомога швидше" },
    { value: "1_3_months", label: "У найближчі 1–3 місяці" },
    { value: "6_plus_months", label: "Через пів року або пізніше" },
    { value: "just_info", label: "Поки лише збираю інформацію" },
  ],
};

const PAGE_LABELS: Record<Locale, Record<SourcePage, string>> = {
  ru: {
    homepage: "Главная",
    quereinstieg: "Квереинштайгер",
    buergergeld: "Из Bürgergeld",
    nebenberuf: "Параллельный старт",
  },
  de: {
    homepage: "Startseite",
    quereinstieg: "Quereinsteiger",
    buergergeld: "Aus Bürgergeld",
    nebenberuf: "Nebenberuflicher Einstieg",
  },
  ua: {
    homepage: "Головна",
    quereinstieg: "Зміна професії",
    buergergeld: "Із Bürgergeld",
    nebenberuf: "Паралельний старт",
  },
};

const FALLBACK_MESSAGES: Record<Locale, string> = {
  ru: "Здравствуйте, Владислав! Не смог отправить форму с сайта - хочу узнать про работу финансового консультанта.",
  de: "Hallo Vladislav! Das Formular auf der Website ließ sich nicht absenden - ich möchte mehr über den Beruf des Finanzberaters erfahren.",
  ua: "Вітаю, Владиславе! Не вдалося надіслати форму з сайту - хочу дізнатися про роботу фінансового консультанта.",
};

function whatsappFallback(locale: Locale) {
  return (
    "https://wa.me/4922418989424?text=" +
    encodeURIComponent(FALLBACK_MESSAGES[locale])
  );
}

const SUBJECT_PREFIX: Record<Locale, string> = {
  ru: "🎯 Новый кандидат в консультанты",
  de: "🎯 Neuer Kandidat als Berater",
  ua: "🎯 Новий кандидат у консультанти",
};

const TOTAL_STEPS = 5;

function buildSubject(
  name: string,
  sourcePage: SourcePage,
  locale: Locale,
): string {
  return `${SUBJECT_PREFIX[locale]} - ${name} (${PAGE_LABELS[locale][sourcePage]})`;
}

type UiStrings = {
  eyebrow: string;
  heading: string;
  intro: string;
  stepOf: (n: number, total: number) => string;
  back: string;
  next: string;
  submit: string;
  submitting: string;
  dsgvo: string;
  networkError: string;
  errors: {
    name: string;
    motivations: string;
    format: string;
    timeline: string;
    phone: string;
    email: string;
  };
  step0: { heading: string; hint: string; placeholder: string };
  step1: { heading: string; hint: string; otherPlaceholder: string };
  step2: { heading: string; hint: string };
  step3: { heading: string; hint: string };
  step4: {
    heading: (name: string) => string;
    intro: string;
    openLabel: string;
    openOptional: string;
    openPlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    emailOptional: string;
    emailPlaceholder: string;
  };
};

const STRINGS: Record<Locale, UiStrings> = {
  ru: {
    eyebrow: "5 вопросов · 2 минуты",
    heading: "Подходит ли мне эта работа?",
    intro: "Ответы приходят лично Владиславу - он свяжется в течение дня.",
    stepOf: (n, total) => `Шаг ${n} из ${total}`,
    back: "Назад",
    next: "Дальше",
    submit: "Отправить Владиславу",
    submitting: "Отправка…",
    dsgvo:
      "Твои данные уходят только Владиславу. Никаких рассылок, никакого спама. Соблюдаем DSGVO.",
    networkError:
      "Не удалось отправить. Попробуй ещё раз или напиши в WhatsApp напрямую:",
    errors: {
      name: "Имя, пожалуйста",
      motivations: "Выбери хотя бы один пункт",
      format: "Выбери формат",
      timeline: "Выбери срок",
      phone: "Нужен номер для связи",
      email: "Проверь формат email",
    },
    step0: {
      heading: "Как тебя зовут?",
      hint: "Владислав обращается к кандидатам на «ты» - так теплее.",
      placeholder: "Твоё имя",
    },
    step1: {
      heading: "Что подтолкнуло задуматься о смене профессии?",
      hint: "Можно выбрать несколько.",
      otherPlaceholder: "Опиши своими словами",
    },
    step2: {
      heading: "Какой формат тебе ближе?",
      hint: "Выбери одно.",
    },
    step3: {
      heading: "Когда хотел бы начать?",
      hint: "Выбери одно.",
    },
    step4: {
      heading: (name) => `Почти готово, ${name || "друг"}!`,
      intro: "Оставь контакт - Владислав свяжется в течение дня.",
      openLabel:
        "Что для тебя важнее всего получить в разговоре с Владиславом?",
      openOptional: "(необязательно)",
      openPlaceholder:
        "Например: понять, реально ли совместить с работой / узнать про Bürgergeld...",
      phoneLabel: "WhatsApp или телефон",
      emailLabel: "Email",
      emailOptional: "(если удобнее по email)",
      emailPlaceholder: "you@example.com",
    },
  },
  de: {
    eyebrow: "5 Fragen · 2 Minuten",
    heading: "Passt der Beruf zu mir?",
    intro:
      "Deine Antworten gehen direkt an Vladislav - er meldet sich noch am selben Tag bei dir.",
    stepOf: (n, total) => `Schritt ${n} von ${total}`,
    back: "Zurück",
    next: "Weiter",
    submit: "An Vladislav senden",
    submitting: "Wird gesendet…",
    dsgvo:
      "Deine Daten landen nur bei Vladislav. Kein Newsletter, kein Spam. DSGVO-konform.",
    networkError:
      "Senden ist fehlgeschlagen. Versuch es erneut oder schreib direkt auf WhatsApp:",
    errors: {
      name: "Bitte gib deinen Namen ein",
      motivations: "Wähle mindestens eine Option",
      format: "Bitte wähle ein Format",
      timeline: "Bitte wähle einen Zeitraum",
      phone: "Wir brauchen eine Nummer zum Kontakt",
      email: "Prüf bitte das Email-Format",
    },
    step0: {
      heading: "Wie heißt du?",
      hint: `Vladislav duzt dich von Anfang an - das ist persönlicher und so läuft's bei uns im Team.`,
      placeholder: "Dein Name",
    },
    step1: {
      heading: "Was bringt dich dazu, über einen Berufswechsel nachzudenken?",
      hint: "Mehrfachauswahl möglich.",
      otherPlaceholder: "Beschreib es in eigenen Worten",
    },
    step2: {
      heading: "Welches Format passt dir besser?",
      hint: "Wähle eines.",
    },
    step3: {
      heading: "Wann möchtest du starten?",
      hint: "Wähle eines.",
    },
    step4: {
      heading: (name) => `Fast geschafft, ${name || "Freund"}!`,
      intro:
        "Hinterlass einen Kontakt - Vladislav meldet sich noch am selben Tag.",
      openLabel:
        "Was ist dir im Gespräch mit Vladislav am wichtigsten?",
      openOptional: "(optional)",
      openPlaceholder:
        "Zum Beispiel: verstehen, ob es sich mit der Arbeit vereinbaren lässt / mehr über Bürgergeld wissen…",
      phoneLabel: "WhatsApp oder Telefon",
      emailLabel: "E-Mail",
      emailOptional: "(wenn E-Mail bequemer ist)",
      emailPlaceholder: "du@beispiel.de",
    },
  },
  ua: {
    eyebrow: "5 запитань · 2 хвилини",
    heading: "Чи підходить мені ця робота?",
    intro: "Відповіді приходять особисто Владиславу - він зв'яжеться протягом дня.",
    stepOf: (n, total) => `Крок ${n} з ${total}`,
    back: "Назад",
    next: "Далі",
    submit: "Надіслати Владиславу",
    submitting: "Надсилання…",
    dsgvo:
      "Твої дані надходять лише Владиславу. Жодних розсилок, жодного спаму. Дотримуємося DSGVO.",
    networkError:
      "Не вдалося надіслати. Спробуй ще раз або напиши у WhatsApp напряму:",
    errors: {
      name: "Ім'я, будь ласка",
      motivations: "Обери хоча б один пункт",
      format: "Обери формат",
      timeline: "Обери термін",
      phone: "Потрібен номер для зв'язку",
      email: "Перевір формат email",
    },
    step0: {
      heading: "Як тебе звати?",
      hint: "Владислав звертається до кандидатів на «ти» - так тепліше.",
      placeholder: "Твоє ім'я",
    },
    step1: {
      heading: "Що змусило задуматися про зміну професії?",
      hint: "Можна обрати кілька.",
      otherPlaceholder: "Опиши своїми словами",
    },
    step2: {
      heading: "Який формат тобі ближчий?",
      hint: "Обери одне.",
    },
    step3: {
      heading: "Коли хотів би почати?",
      hint: "Обери одне.",
    },
    step4: {
      heading: (name) => `Майже готово, ${name || "друже"}!`,
      intro: "Залиш контакт - Владислав зв'яжеться протягом дня.",
      openLabel:
        "Що для тебе найважливіше отримати в розмові з Владиславом?",
      openOptional: "(необов'язково)",
      openPlaceholder:
        "Наприклад: зрозуміти, чи реально поєднати з роботою / дізнатися про Bürgergeld...",
      phoneLabel: "WhatsApp або телефон",
      emailLabel: "Email",
      emailOptional: "(якщо зручніше через email)",
      emailPlaceholder: "you@example.com",
    },
  },
};

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
  locale = "ru",
}: {
  sourcePage: SourcePage;
  locale?: Locale;
}) {
  const router = useRouter();
  const uid = useId();
  const prefersReduced = useReducedMotion();
  const t = STRINGS[locale];
  const motivationOptions = MOTIVATIONS[locale];
  const formatOptions = FORMATS[locale];
  const timelineOptions = TIMELINES[locale];
  const thankYouHref =
    locale === "de"
      ? "/de/karriere/thank-you"
      : locale === "ua"
        ? "/ua/karriere/thank-you"
        : "/karriere/thank-you";
  const whatsappFallbackHref = whatsappFallback(locale);

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
        if (name.trim().length < 2) e.name = t.errors.name;
        break;
      case 1:
        if (motivations.length === 0) e.motivations = t.errors.motivations;
        break;
      case 2:
        if (!format) e.format = t.errors.format;
        break;
      case 3:
        if (!timeline) e.timeline = t.errors.timeline;
        break;
      case 4: {
        if (countDigits(phone) < 8) e.phone = t.errors.phone;
        const trimmedEmail = email.trim();
        if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
          e.email = t.errors.email;
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
    body.append("_subject", buildSubject(trimmedName, sourcePage, locale));
    body.append("formType", "recruitment");
    body.append("sourcePage", sourcePage);
    body.append("locale", locale);

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
      router.push(thankYouHref);
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
              {t.eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3">
              {t.heading}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              {t.intro}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150}>
          <div className="max-w-[640px] mx-auto bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border/60">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs sm:text-sm mb-2.5">
                <span className="text-muted-foreground font-medium">
                  {t.stepOf(step + 1, TOTAL_STEPS)}
                </span>
                <span className="text-gold font-semibold">
                  {Math.round(progressPct)}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full w-full bg-gold rounded-full origin-left"
                  initial={false}
                  animate={{ scaleX: progressPct / 100 }}
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
                          {t.step0.heading}
                        </label>
                        <p className="text-sm text-muted-foreground mb-5">
                          {t.step0.hint}
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
                          placeholder={t.step0.placeholder}
                          autoComplete="given-name"
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
                          {t.step1.heading}
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          {t.step1.hint}
                        </p>
                        <div className="space-y-2">
                          {motivationOptions.map((m) => {
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
                              placeholder={t.step1.otherPlaceholder}
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
                          {t.step2.heading}
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          {t.step2.hint}
                        </p>
                        <div className="space-y-2">
                          {formatOptions.map((opt) => {
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
                          {t.step3.heading}
                        </legend>
                        <p className="text-sm text-muted-foreground mb-5">
                          {t.step3.hint}
                        </p>
                        <div className="space-y-2">
                          {timelineOptions.map((opt) => {
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
                            {t.step4.heading(name.trim())}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {t.step4.intro}
                          </p>
                        </div>

                        <div>
                          <label
                            htmlFor={`${uid}-openAnswer`}
                            className="block text-sm font-semibold text-navy mb-2"
                          >
                            {t.step4.openLabel}{" "}
                            <span className="text-muted-foreground font-normal">
                              {t.step4.openOptional}
                            </span>
                          </label>
                          <textarea
                            id={`${uid}-openAnswer`}
                            name="openAnswer"
                            value={openAnswer}
                            onChange={(e) =>
                              setOpenAnswer(e.target.value.slice(0, 500))
                            }
                            placeholder={t.step4.openPlaceholder}
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
                            {t.step4.phoneLabel}{" "}
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
                            {t.step4.emailLabel}{" "}
                            <span className="text-muted-foreground font-normal">
                              {t.step4.emailOptional}
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
                            placeholder={t.step4.emailPlaceholder}
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
                  {t.networkError}{" "}
                  <a
                    href={whatsappFallbackHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
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
                    {t.back}
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
                        <span className="ml-1">{t.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.submit}
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 h-12 bg-gold text-navy font-semibold rounded-full text-sm sm:text-base shadow-lg shadow-gold/25 hover:brightness-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    {t.next}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              <p className="mt-5 text-xs text-muted-foreground text-center italic leading-relaxed">
                {t.dsgvo}
              </p>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
