"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type ProductsPopup = {
  label: string;
  title: string;
  description: string;
  categories: string[];
  closeLabel: string;
  link: { href: string; label: string };
};

export default function ProductsPopover({ popup }: { popup: ProductsPopup }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const modal = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={popup.title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 overflow-y-auto"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-left my-auto max-h-[calc(100vh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={popup.closeLabel}
          className="absolute top-3 right-3 w-8 h-8 rounded-full text-navy/60 hover:text-navy hover:bg-cream flex items-center justify-center text-xl leading-none"
        >
          ×
        </button>

        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy pr-8">
          {popup.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mt-3">
          {popup.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-5">
          {popup.categories.map((c) => (
            <li
              key={c}
              className="px-3 py-1.5 rounded-full border border-[#D4AF55]/60 text-[#B8902E] text-xs font-semibold"
            >
              {c}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <a
            href={popup.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF55] text-white text-sm font-semibold hover:bg-[#B8902E] transition-colors"
          >
            {popup.link.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 mt-6 px-4 py-2 border border-[#D4AF55] rounded-full text-sm font-semibold text-[#D4AF55] hover:bg-[#D4AF55] hover:text-white transition-colors"
      >
        {popup.label}
        <span aria-hidden="true">→</span>
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
