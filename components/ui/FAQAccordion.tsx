"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = !!useReducedMotion();

  return (
    <div className="flex flex-col divide-y divide-border-blue rounded-2xl border border-border-blue bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky/10 font-mono text-xs font-semibold text-sky">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-semibold text-navy">{item.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-off-white text-navy"
              >
                <Plus className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 pl-[3.25rem] pr-6 font-serif text-sm leading-relaxed text-text-body sm:px-6 sm:pl-[3.75rem]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
