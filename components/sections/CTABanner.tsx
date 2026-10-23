"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-cta-gradient py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[length:200%_100%] opacity-20 animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 48 48"
        className="animate-spin-slow pointer-events-none absolute -right-10 -top-10 h-64 w-64 opacity-[0.05]"
        aria-hidden="true"
      >
        <path d="M44 4 L6 22 L22 27 L27 43 Z" fill="white" />
        <path d="M44 4 L22 27 L27 43 Z" fill="white" />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="container-px relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row"
      >
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to ship smarter?
          </h2>
          <p className="mt-4 font-serif text-lg text-white/80">
            Join thousands of businesses that trust Nexpres for faster, smarter, and more
            reliable logistics.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="secondary" size="lg">
            Create Account
          </Button>
          <Button variant="outline" size="lg">
            Talk to Sales
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
