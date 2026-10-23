"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building, MapPinned, Users, Warehouse } from "lucide-react";
import CountUpNumber from "@/components/ui/CountUpNumber";
import { networkHubs, networkStats } from "@/lib/constants";
import { fadeUp, fadeUpContainer, viewportOnce } from "@/lib/animations";

const icons = { MapPinned, Building, Warehouse, Users };

const INDIA_OUTLINE =
  "M210 10 C260 10 300 40 310 80 C330 90 360 100 365 130 C380 150 370 180 390 200 C400 230 380 250 390 280 C395 320 360 340 350 370 C345 410 320 430 290 450 C270 480 230 490 200 480 C170 500 130 490 115 460 C90 450 70 430 75 400 C50 390 40 360 55 335 C40 310 50 280 70 265 C55 235 70 205 95 195 C90 160 110 135 140 125 C140 90 165 60 195 45 C190 25 195 10 210 10 Z";

export default function NetworkMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [400, 0]);

  return (
    <section ref={sectionRef} className="bg-network-gradient py-20 lg:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow text-light-blue">Our Network</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            India&apos;s most expansive logistics network
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <svg viewBox="0 0 440 500" className="h-full w-full">
              <path
                d={INDIA_OUTLINE}
                fill="none"
                stroke="white"
                strokeOpacity="0.3"
                strokeWidth="1.5"
              />

              <motion.path
                d={INDIA_OUTLINE}
                fill="none"
                stroke="#5BB8F5"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeDasharray="400"
                style={{ strokeDashoffset: dashOffset }}
              />

              {networkHubs.map((hub, i) => (
                <g key={hub.name} transform={`translate(${hub.x}, ${hub.y})`}>
                  <motion.circle
                    r="6"
                    fill="#5BB8F5"
                    initial={{ scale: 1, opacity: 0.9 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.35, ease: "easeOut" }}
                  />
                  <circle r="5" fill="#5BB8F5" />
                  <text
                    x="10"
                    y="4"
                    fontSize="10"
                    fill="white"
                    className="select-none"
                  >
                    {hub.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUpContainer}
            className="grid grid-cols-2 gap-4"
          >
            {networkStats.map((stat) => {
              const Icon = icons[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="relative rounded-xl border border-white/10 bg-white/[0.07] p-6"
                >
                  <Icon className="absolute right-4 top-4 h-5 w-5 text-light-blue" />
                  <p className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-light-blue">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
