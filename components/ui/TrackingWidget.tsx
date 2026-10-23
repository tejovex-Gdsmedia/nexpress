"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  PackageCheck,
  PackageSearch,
  Radar,
  Truck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Step = {
  label: string;
  time: string;
  location: string;
  icon: typeof PackageSearch;
};

const steps: Step[] = [
  { label: "Picked Up", time: "Today, 9:14 AM", location: "Nexpres Hub, Mumbai", icon: PackageSearch },
  { label: "In Transit", time: "Today, 1:40 PM", location: "Sorting Center, Pune", icon: Truck },
  { label: "Out for Delivery", time: "Today, 5:05 PM", location: "Local Facility, Pune", icon: PackageCheck },
  { label: "Delivered", time: "Today, 6:52 PM", location: "Pune, Maharashtra", icon: CheckCircle2 },
];

export default function TrackingWidget({
  compact = false,
  theme = "dark",
}: {
  compact?: boolean;
  theme?: "dark" | "light";
}) {
  const [awb, setAwb] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);

  const light = theme === "light";

  const handleTrack = () => {
    if (!awb.trim()) return;
    setResult(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 1200);
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-5",
        light
          ? "border border-border-blue bg-white shadow-[0_30px_60px_-15px_rgba(13,31,92,0.25)]"
          : "border border-white/15 bg-white/[0.08] backdrop-blur-md",
        compact ? "max-w-md" : "max-w-xl"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full",
            light ? "bg-sky/10 text-sky" : "bg-white/10 text-light-blue"
          )}
        >
          <Radar className="h-4 w-4" />
        </span>
        <p className={cn("text-sm font-semibold", light ? "text-navy" : "text-white/80")}>
          Track your shipment
        </p>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="relative w-full">
          <input
            value={awb}
            onChange={(e) => setAwb(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleTrack()}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Enter AWB / Order ID"
            aria-label="AWB or Order ID"
            className={cn(
              "w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-shadow duration-200",
              light
                ? "border border-border-blue bg-off-white text-text-body placeholder:text-text-muted"
                : "bg-white text-text-body placeholder:text-text-muted",
              focused && light && "border-sky shadow-[0_0_0_4px_rgba(30,127,216,0.15)]"
            )}
          />
        </div>
        <Button
          variant={light ? "primary" : "sky"}
          size="md"
          onClick={handleTrack}
          aria-label="Track shipment"
          disabled={loading}
          className="group shrink-0"
        >
          {loading ? (
            <span className="inline-flex items-center gap-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-current"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="hidden sm:inline">Searching</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              Track
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 flex items-center gap-3">
              <p
                className={cn(
                  "shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em]",
                  light ? "text-text-muted" : "text-white/50"
                )}
              >
                Searching shipment
              </p>
              <div className={cn("relative h-px flex-1", light ? "bg-border-blue" : "bg-white/15")}>
                <motion.span
                  className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky shadow-[0_0_8px_rgba(30,127,216,0.8)]"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {result && !loading && (
          <motion.div
            key="result"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="relative mt-5 flex justify-between">
              <div
                className={cn(
                  "absolute left-0 right-0 top-[11px] h-0.5",
                  light ? "bg-border-blue" : "bg-white/20"
                )}
              />
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-0 top-[11px] h-0.5 bg-sky"
              />
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.label} className="relative z-10 flex flex-1 flex-col items-center text-center">
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full",
                        isLast ? "bg-success" : "bg-sky"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    {!compact && (
                      <div className="mt-2 hidden sm:block">
                        <p className={cn("text-[11px] font-semibold", light ? "text-navy" : "text-white")}>
                          {step.label}
                        </p>
                        <p className={cn("text-[10px]", light ? "text-text-muted" : "text-white/50")}>
                          {step.time}
                        </p>
                        <p className={cn("text-[10px]", light ? "text-text-muted" : "text-white/50")}>
                          {step.location}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && !result && (
        <p className={cn("mt-3 text-xs", light ? "text-text-muted" : "text-white/50")}>
          Real-time shipment status, instantly.
        </p>
      )}
    </div>
  );
}
