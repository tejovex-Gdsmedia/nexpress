"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionWatermark({
  word,
  tone = "light",
}: {
  word: string;
  tone?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.span
        style={{ x }}
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-sans text-[18vw] font-extrabold uppercase leading-none tracking-tight sm:text-[14vw]",
          tone === "light" ? "text-navy/[0.035]" : "text-white/[0.05]"
        )}
      >
        {word}
      </motion.span>
    </div>
  );
}
