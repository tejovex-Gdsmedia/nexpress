"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Map,
  MapPin,
  Package,
  Route,
  Truck,
  Warehouse,
} from "lucide-react";
import TabSwitcher from "@/components/ui/TabSwitcher";
import { services, serviceVisuals } from "@/lib/constants";
import { fadeUp, viewportOnce } from "@/lib/animations";

const icons = {
  Package,
  Warehouse,
  Truck,
  TruckIcon: Truck,
  Globe,
  MapPin,
  Route,
  BarChart3,
  Map,
};

const tabServices = services.filter((s) => s.key !== "maps");

export default function Services() {
  const [active, setActive] = useState(tabServices[0].key);
  const activeService = tabServices.find((s) => s.key === active)!;
  const Icon = icons[activeService.icon];
  const visual = serviceVisuals[activeService.key];

  return (
    <section className="relative overflow-hidden bg-cta-gradient py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />
      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow !text-light-blue">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Everything you need to ship, store &amp; deliver
          </h2>
        </motion.div>

        <div className="mt-10">
          <TabSwitcher
            theme="dark"
            tabs={tabServices.map((s) => ({ key: s.key, label: s.tabLabel }))}
            active={active}
            onChange={(key) => setActive(key as typeof active)}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Icon className="h-6 w-6 text-light-blue" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{activeService.title}</h3>
              <p className="mt-3 font-serif text-base text-white/75">
                {activeService.description}
              </p>

              <ul className="mt-6 flex flex-col">
                {activeService.features.map((feature, i) => (
                  <li
                    key={feature}
                    className="relative flex items-center gap-4 border-l border-white/20 py-2.5 pl-6 text-sm text-white/85 last:border-transparent"
                  >
                    <span className="absolute -left-[5px] top-1/2 flex h-2.5 w-2.5 -translate-y-1/2 items-center justify-center rounded-full bg-light-blue ring-4 ring-sky" />
                    <span className="font-mono text-xs text-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`/services/${activeService.key}`}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-light-blue"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              {visual.kind === "photo" ? (
                <>
                  <Image
                    src={visual.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: visual.focal }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/10 to-transparent" />
                </>
              ) : (
                <div className="relative h-full w-full bg-card-gradient">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <Icon className="absolute left-10 top-10 h-28 w-28 text-white/25" />
                </div>
              )}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-success" />
                <p className="text-sm font-semibold text-navy">{activeService.stat}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
