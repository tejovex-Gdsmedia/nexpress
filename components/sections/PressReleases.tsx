"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pressReleases } from "@/lib/constants";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";

export default function PressReleases() {
  return (
    <section className="bg-off-white py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">Latest News</p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Press Releases
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpContainer}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {pressReleases.slice(0, 3).map((item) => (
            <motion.article
              key={item.headline}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-border-blue bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(30,127,216,0.12)]"
            >
              <div className="h-1 bg-card-gradient" />
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-text-muted">
                    {item.date}
                  </span>
                  <span className="rounded-full bg-sky/10 px-3 py-1 text-xs font-medium text-sky">
                    {item.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy transition-colors group-hover:text-sky">
                  {item.headline}
                </h3>
                <p className="mt-2 line-clamp-2 font-serif text-sm text-text-muted">{item.excerpt}</p>
                <a
                  href="/company/press"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
