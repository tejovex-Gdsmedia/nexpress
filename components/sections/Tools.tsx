"use client";

import { motion } from "framer-motion";
import PincodeChecker from "@/components/ui/PincodeChecker";
import RateCalculator from "@/components/ui/RateCalculator";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";

export default function Tools() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Plan Your Shipment</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Check serviceability &amp; estimate your cost
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpContainer}
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <PincodeChecker />
          </motion.div>
          <motion.div variants={fadeUp}>
            <RateCalculator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
