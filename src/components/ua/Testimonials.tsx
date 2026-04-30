"use client";

import { useState, useEffect, useRef } from "react";
import AnimateOnScroll from "../AnimateOnScroll";

const reviews = [
  {
    name: "Олександр Кашников",
    quote:
      "Дуже дякую за багаторічну співпрацю! Владислав - дуже відповідальна та сердечна людина! Профі своєї справи! Завжди на зв'язку й готовий допомогти в будь-якій ситуації. Рекомендуємо як надійного партнера!",
  },
  {
    name: "Юрій Мартиненко",
    quote:
      "Щиро дякую Владиславу за менторство, коучинг і чудову організацію навчальних груп!!!",
  },
  {
    name: "Наталя Шефер",
    quote:
      "Владислав Бабич - досвідчений фінансовий консультант і справжній профі! Він не лише глибоко знає предмет, а й уміє пояснити це зрозуміло. У Владислава йдеться не просто про фінансову грамотність, а про надійність, стабільність і безпеку! У моїй складній ситуації він показав мені шлях до фінансової незалежності. Щиро вдячна та від душі рекомендую!",
  },
  {
    name: "Олексій Заборський",
    quote:
      "Дуже вдячний, що познайомився з Владиславом Бабичем - тепер він мій ментор! Я пройшов навчання й опанував усі продукти DVAG та фінансові знання. Поглиблюю знання щодо всіх продуктів компанії та продовжую розвивати фінансову грамотність. Це неймовірно важливо для життя в Німеччині!",
  },
  {
    name: "Олена Гащенко",
    quote:
      "Я дуже рідко пишу відгуки, але тут не змогла інакше! Ця компанія заслуговує на повних п'ять зірок! Консультація пройшла професійно та з увагою до деталей. Ми отримали дуже інформативну консультацію й змогли обрати саме той варіант страхування, який нам підходить! Дуже рекомендую!",
  },
  {
    name: "Анна Леонова",
    quote:
      "Рекомендую кожному звертатися за фінансовою консультацією до Владислава. Людина з величезним досвідом - справжній профі своєї справи. Швидко й компетентно відповідає на всі запитання, і що особливо важливо - навіть поза робочими годинами! Владислав структуровано та зрозуміло надав мені всю інформацію й допоміг ухвалити правильне рішення.",
  },
];

const extended = [...reviews, ...reviews.slice(0, 3)];

const GAP = 24;
const DESKTOP_VISIBLE = 3;

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#FBBC04]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="bg-white p-7 rounded-2xl border border-border shadow-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <StarRating />
        <GoogleLogo className="w-5 h-5 opacity-40" />
      </div>
      <p className="text-foreground/80 leading-relaxed text-sm flex-grow mb-6">
        &laquo;{review.quote}&raquo;
      </p>
      <div className="border-t border-border pt-4 mt-auto">
        <p className="font-semibold text-navy text-sm">{review.name}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [position, setPosition] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [desktopStep, setDesktopStep] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (desktopRef.current) {
        const w = desktopRef.current.offsetWidth;
        const cardWidth = (w - GAP * (DESKTOP_VISIBLE - 1)) / DESKTOP_VISIBLE;
        setDesktopStep(cardWidth + GAP);
      }
      if (mobileRef.current) {
        setMobileStep(mobileRef.current.offsetWidth + GAP);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (position === reviews.length) {
      const timeout = setTimeout(() => {
        setShouldAnimate(false);
        setPosition(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [position]);

  useEffect(() => {
    if (!shouldAnimate) {
      const timeout = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);

  const activeDot = position % reviews.length;

  const goTo = (index: number) => {
    setShouldAnimate(true);
    setPosition(index);
  };

  const transitionClass = shouldAnimate
    ? "transition-transform duration-700 ease-in-out"
    : "";

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Відгуки клієнтів
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Що кажуть мої клієнти
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
              <GoogleLogo className="w-5 h-5" />
              <span>Відгуки з Google</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div ref={desktopRef} className="hidden lg:block overflow-hidden">
          <div
            className={`flex gap-6 ${transitionClass}`}
            style={{
              transform: `translateX(-${position * desktopStep}px)`,
            }}
          >
            {extended.map((r, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  width: `calc((100% - ${GAP * (DESKTOP_VISIBLE - 1)}px) / ${DESKTOP_VISIBLE})`,
                }}
              >
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        <div ref={mobileRef} className="lg:hidden overflow-hidden">
          <div
            className={`flex gap-6 ${transitionClass}`}
            style={{
              transform: `translateX(-${position * mobileStep}px)`,
            }}
          >
            {extended.map((r, i) => (
              <div key={i} className="flex-shrink-0 w-full">
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeDot
                  ? "bg-gold w-6"
                  : "bg-border hover:bg-muted-foreground w-2"
              }`}
              aria-label={`Відгук ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
