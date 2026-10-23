"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bike, GraduationCap, MapPin, Truck } from "lucide-react";
import { partnerCards } from "@/lib/constants";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";
import SectionWatermark from "@/components/ui/SectionWatermark";

const icons = { MapPin, Bike, Truck, GraduationCap };

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <SectionWatermark word="PARTNER" tone="light" />
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Partnerships</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Grow with Nexpres
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpContainer}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {partnerCards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group rounded-2xl border border-border-blue bg-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:bg-white hover:shadow-[0_15px_35px_rgba(26,58,143,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
                  <Icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{card.title}</h3>
                <p className="mt-2 font-serif text-sm text-text-muted">{card.body}</p>
                <a
                  href={card.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
