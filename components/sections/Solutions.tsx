"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, LineChart, MapPin, Radar, ShoppingBag, Send } from "lucide-react";
import { solutionCards } from "@/lib/constants";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";
import SectionWatermark from "@/components/ui/SectionWatermark";

const icons = { ShoppingBag, Send, Building2, LineChart };

const riskLevels = [
  { label: "Low Risk", tone: "bg-success" },
  { label: "Moderate Risk", tone: "bg-sky" },
  { label: "Higher Risk", tone: "bg-[#F59E0B]" },
];

export default function Solutions() {
  const rto = solutionCards.find((c) => c.title === "RTO Predictor");

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <SectionWatermark word="SHIPPER" tone="light" />
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">The Intelligence Layer</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Built for every kind of shipper
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpContainer}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {solutionCards.slice(0, 3).map((card) => {
            const Icon = icons[card.icon];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-border-blue bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-sky hover:shadow-[0_20px_40px_rgba(30,127,216,0.12)]"
              >
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-sky transition-all duration-300 group-hover:w-full" />
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Icon className="h-6 w-6 text-sky" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{card.title}</h3>
                <p className="mt-3 font-serif text-sm text-text-body">{card.body}</p>
                <a
                  href={card.href}
                  className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RTO Predictor — distinct premium treatment */}
        {rto && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative mt-6 overflow-hidden rounded-3xl bg-dark-navy"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
              }}
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:p-12">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Radar className="h-6 w-6 text-light-blue" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">RTO Predictor</h3>
                <p className="mt-3 max-w-md font-serif text-base text-white/75">
                  Identify potential return-to-origin risks before they become costly.
                </p>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {rto.features?.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-light-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={rto.href}
                  className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-light-blue"
                >
                  Explore RTO Predictor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <MapPin className="h-3.5 w-3.5" />
                  Order risk assessment — illustrative
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  {riskLevels.map((level, i) => (
                    <div key={level.label} className="flex items-center gap-3">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${level.tone}`} />
                      <span className="text-sm text-white/70">{level.label}</span>
                      <div className="ml-auto h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: i === 0 ? "70%" : i === 1 ? "45%" : "22%" }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                          className={`h-full ${level.tone}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[11px] leading-relaxed text-white/40">
                  Conceptual illustration of delivery-address quality and order-behaviour
                  signals — not live prediction output.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
