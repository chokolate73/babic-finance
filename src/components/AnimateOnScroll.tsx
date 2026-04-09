"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-in";
  delay?: number;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseHidden: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-8",
    "fade-left": "opacity-0 -translate-x-8",
    "fade-right": "opacity-0 translate-x-8",
    "fade-in": "opacity-0",
    "scale-in": "opacity-0 scale-95",
  };

  const baseVisible = "opacity-100 translate-x-0 translate-y-0 scale-100";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? baseVisible : baseHidden[animation]
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
