"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do I track my shipment?",
    a: "Use the tracking widget on our homepage or visit the Track page with your AWB or Order ID to see real-time status.",
  },
  {
    q: "What areas does Nexpres deliver to?",
    a: "We currently serve 18,800+ pin codes across India and ship internationally to 220+ countries and territories.",
  },
  {
    q: "How do I become a delivery or franchise partner?",
    a: "Visit the Partner page to explore franchise, delivery partner, fleet owner, and training opportunities, and apply directly.",
  },
  {
    q: "How can I get a shipping rate estimate?",
    a: "Use the rate calculator on our homepage — enter the origin, destination, and weight to get an instant estimate.",
  },
  {
    q: "Who do I contact for business or enterprise shipping?",
    a: "Reach out to our sales team at sales@nexpres.in and we'll connect you with the right account manager.",
  },
];

export default function SupportFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col divide-y divide-border-blue rounded-2xl border border-border-blue bg-white">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen((prev) => (prev === i ? null : i))}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-medium text-navy">{faq.q}</span>
            <ChevronDown
              className={cn("h-4 w-4 shrink-0 text-sky transition-transform", open === i && "rotate-180")}
            />
          </button>
          {open === i && <p className="px-5 pb-5 font-serif text-sm text-text-muted">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
