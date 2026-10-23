"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function formatNumber(value: number, isDecimal?: boolean): string {
  if (isDecimal) {
    return value.toFixed(1);
  }
  return Math.round(value).toLocaleString("en-IN");
}

export default function CountUpNumber({
  value,
  suffix = "",
  isDecimal = false,
  duration = 2000,
  className,
}: {
  value: number;
  suffix?: string;
  isDecimal?: boolean;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutExpo(progress);
      setDisplay(formatNumber(eased * value, isDecimal));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(formatNumber(value, isDecimal));
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, isDecimal]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
