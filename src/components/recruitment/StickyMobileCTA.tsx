"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA({
  label,
}: {
  label: string;
  /**
   * @deprecated kept for prop-compatibility, ignored — button now opens
   * the contact popover via openContactPopover event.
   */
  href?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`sm:hidden fixed left-1/2 -translate-x-1/2 bottom-5 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(new CustomEvent("openContactPopover"))
        }
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold/70 backdrop-blur-md text-navy text-sm font-semibold tracking-wide uppercase whitespace-nowrap shadow-xl shadow-black/30 border border-gold/40 hover:bg-gold/85 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          />
        </svg>
        {label}
      </button>
    </div>
  );
}
