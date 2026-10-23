"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TabSwitcher({
  tabs,
  active,
  onChange,
  theme = "light",
}: {
  tabs: { key: string; label: string }[];
  active: string;
  onChange: (key: string) => void;
  theme?: "light" | "dark";
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            "relative shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
            theme === "dark"
              ? active === tab.key
                ? "text-white"
                : "text-white/55 hover:text-white/85"
              : active === tab.key
                ? "text-white"
                : "border border-border-blue bg-white text-text-body hover:bg-[#EFF6FF]"
          )}
        >
          {active === tab.key && (
            <motion.span
              layoutId={`tab-pill-${theme}`}
              className={cn(
                "absolute inset-0 rounded-full",
                theme === "dark" ? "bg-sky" : "bg-navy"
              )}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
