"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface CinematicHeroProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  badge?: string;
  image?: { src: string; focal: string } | null;
}

export default function CinematicHero({
  index,
  eyebrow,
  title,
  description,
  badge,
  image,
}: CinematicHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 30]);

  // FIX: raw vh units shift height as mobile browser chrome shows/hides on scroll — use dvh
  return (
    <section
      ref={ref}
      className="relative flex min-h-[72dvh] items-end overflow-hidden bg-dark-navy pt-[88px] sm:min-h-[78dvh]"
    >
      {image ? (
        <motion.div className="absolute inset-0" style={{ y: imageY }} aria-hidden="true">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={reduced ? { scale: 1.1 } : { scale: 1.18 }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          >
            <Image
              src={image.src}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: image.focal }}
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 origin-right bg-sky"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      )}

      {/* atmosphere + legibility overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/70 to-dark-navy/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark-navy/60 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: contentY }}
        className="container-px relative z-10 mx-auto w-full max-w-7xl pb-14 sm:pb-20"
      >
        <div className="flex items-center gap-3 text-light-blue">
          <span className="font-mono text-xs tracking-[0.2em]">{index}</span>
          <span className="h-px w-8 bg-light-blue/50" />
          <p className="eyebrow !text-light-blue">{eyebrow}</p>
          {badge && (
            <span className="rounded-full bg-sky px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-xl font-serif text-lg text-white/75"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
