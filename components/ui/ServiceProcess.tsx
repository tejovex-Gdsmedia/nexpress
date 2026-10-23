"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ProcessStep {
  title: string;
  body: string;
}

export default function ServiceProcess({
  heading,
  steps,
}: {
  heading: string;
  steps: ProcessStep[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const markerLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const gridCols =
    steps.length >= 5
      ? "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
      : steps.length === 4
        ? "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">Process</p>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{heading}</h2>

        <div ref={sectionRef} className="relative mt-10">
          <div className="absolute left-5 top-5 hidden h-0.5 w-[calc(100%-2.5rem)] border-t-2 border-dashed border-sky/30 lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-5 top-5 hidden h-0.5 w-[calc(100%-2.5rem)] origin-left border-t-2 border-dashed border-sky lg:block"
          />
          {!reduced && (
            <motion.div
              style={{ left: markerLeft }}
              className="absolute top-5 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky shadow-[0_0_12px_rgba(30,127,216,0.8)] lg:block"
            />
          )}

          <div className={`grid ${gridCols}`}>
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-navy">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
