"use client";

import { motion } from "framer-motion";

const FLIGHT_PATH = "path('M 10 180 C 90 40, 220 40, 300 110 S 430 230, 460 90')";

export default function PaperPlane({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      style={{
        offsetPath: FLIGHT_PATH,
        offsetRotate: "auto",
      }}
      animate={{ offsetDistance: ["0%", "100%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M44 4 L6 22 L22 27 L27 43 Z" fill="#5BB8F5" />
        <path d="M44 4 L22 27 L27 43 Z" fill="#1E7FD8" />
        <path d="M44 4 L22 27 L6 22 Z" fill="#1A3A8F" opacity="0.85" />
      </svg>
    </motion.div>
  );
}
