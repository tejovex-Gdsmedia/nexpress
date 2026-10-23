"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import AnimatedText from "@/components/ui/AnimatedText";
import TrackingWidget from "@/components/ui/TrackingWidget";
import Stats from "@/components/sections/Stats";
import { useIntroDone } from "@/components/providers/IntroProvider";
import { heroRotatingWords } from "@/lib/constants";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = !!useReducedMotion();
  const introDone = useIntroDone();

  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.6 });
  const videoShiftX = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoScrollY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // FIX: 100vh doesn't account for mobile browser chrome (address bar) showing/hiding,
  // which made the hero jump in height while scrolling on iOS/Android — use dvh instead
  return (
    <motion.section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-dvh flex-col overflow-hidden bg-dark-navy pt-[88px]"
    >
      {/* full-bleed video background */}
      <motion.div
        className="absolute inset-0"
        style={{ x: reduced ? 0 : videoShiftX, y: videoScrollY, scale: videoScale }}
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/heroscene-homepage.mp4"
          poster="/videos/heroscene-homepage-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* legibility overlays — directional gradient (text side) + top/bottom vignette for the bright golden-hour sky */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark-navy/90 via-dark-navy/55 to-dark-navy/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-dark-navy/65 via-dark-navy/15 to-dark-navy/55"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl flex-1 grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* LEFT — information / typography */}
        <div className="w-full max-w-2xl">
          <motion.p
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            variants={reveal}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            India&apos;s Next-Gen Express Logistics
          </motion.p>

          <motion.h1
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            variants={reveal}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[1.05] text-white"
          >
            Express delivery for{" "}
            <AnimatedText words={heroRotatingWords} className="text-light-blue" />
          </motion.h1>

          <motion.p
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            variants={reveal}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl font-serif text-lg text-white/80"
          >
            Nexpres (I) Logistics Pvt Ltd delivers integrated logistics solutions across
            Express Parcel, Cross Border, Warehousing, Freight and Technology services —
            making every delivery count.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            variants={reveal}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <span className="relative inline-flex">
              {!reduced && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-sky"
                  animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  aria-hidden="true"
                />
              )}
              <Button variant="secondary" size="lg" className="relative">
                Ship Now
              </Button>
            </span>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — floating Track Your Shipment card */}
        <motion.div
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          variants={reveal}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="w-full lg:justify-self-end"
        >
          <TrackingWidget theme="light" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>

      <div className="relative z-10 mt-12">
        <Stats />
      </div>
    </motion.section>
  );
}
