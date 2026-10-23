"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CheckCircle, Plug, ShoppingCart, Warehouse } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";

const icons = { Plug, Warehouse, ShoppingCart, CheckCircle };

function StepIcon({
  step,
  index,
  total,
  scrollYProgress,
  reduced,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const Icon = icons[step.icon];
  const threshold = index / (total - 1);
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, threshold - 0.08), threshold],
    [0.85, 1]
  );
  const ring = useTransform(
    scrollYProgress,
    [Math.max(0, threshold - 0.08), threshold],
    [0, 1]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
    >
      <motion.div
        style={reduced ? undefined : { scale }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full ${step.bg}`}
      >
        {!reduced && (
          <motion.span
            style={{ opacity: ring, scale: useTransform(ring, [0, 1], [1, 1.6]) }}
            className="absolute inset-0 rounded-full border-2 border-sky"
          />
        )}
        <Icon className="h-6 w-6 text-white" />
      </motion.div>
      <h3 className="mt-4 text-lg font-semibold text-navy">
        {index + 1}. {step.title}
      </h3>
      <p className="mt-2 font-serif text-sm text-text-body">{step.body}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const markerLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-off-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Process</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            From order to doorstep — seamlessly
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] border-t-2 border-dashed border-sky/30 lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] origin-left border-t-2 border-dashed border-sky lg:block"
          />
          {!reduced && (
            <motion.div
              style={{ left: markerLeft }}
              className="absolute top-6 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky shadow-[0_0_12px_rgba(30,127,216,0.8)] lg:block"
            />
          )}

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <StepIcon
                key={step.title}
                step={step}
                index={i}
                total={processSteps.length}
                scrollYProgress={scrollYProgress}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
