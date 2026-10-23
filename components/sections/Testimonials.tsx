"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = !!useReducedMotion();

  // FIX: this auto-rotating carousel ran forever with no way to stop it and
  // ignored prefers-reduced-motion — skip the auto-advance timer entirely
  // when reduced motion is requested; manual prev/next controls still work.
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [reduced]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="bg-hero-gradient py-20 lg:py-28">
      <div className="container-px mx-auto max-w-4xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <p className="eyebrow text-light-blue">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What our clients say
          </h2>
        </motion.div>

        <div className="relative mt-12 min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * direction }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/15 bg-white/[0.08] p-10 backdrop-blur-md"
            >
              <span className="font-serif text-6xl leading-none text-light-blue">&ldquo;</span>
              <p className="mt-2 font-serif text-lg italic text-white">{t.quote}</p>
              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-light-blue text-light-blue" />
                ))}
              </div>
              <p className="mt-4 text-base font-bold text-white">{t.name}</p>
              <p className="text-sm text-light-blue">
                {t.role}, {t.company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-sky hover:border-sky"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  i === index ? "bg-light-blue w-6" : "bg-white/30"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-sky hover:border-sky"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
