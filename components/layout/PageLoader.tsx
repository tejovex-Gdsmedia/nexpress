"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { useMarkIntroDone } from "@/components/providers/IntroProvider";

type Phase = "network" | "text" | "reveal" | "done";

const nodes = [
  { x: 60, y: 210 },
  { x: 150, y: 90 },
  { x: 230, y: 160 },
  { x: 320, y: 70 },
  { x: 370, y: 190 },
];

const routes: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
];

export default function PageLoader() {
  const markIntroDone = useMarkIntroDone();
  const markIntroDoneRef = useRef(markIntroDone);
  markIntroDoneRef.current = markIntroDone;

  const shouldPlayRef = useRef<boolean | null>(null);
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<Phase>("network");
  const reduced = !!useReducedMotion();

  const introRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<{ x: number; y: number; scale: number } | null>(null);

  useEffect(() => {
    if (shouldPlayRef.current === null) {
      try {
        shouldPlayRef.current = !sessionStorage.getItem("nexpres-intro-shown");
        if (shouldPlayRef.current) {
          sessionStorage.setItem("nexpres-intro-shown", "1");
        }
      } catch {
        shouldPlayRef.current = false;
      }
    }

    if (!shouldPlayRef.current || reduced) {
      markIntroDoneRef.current?.();
      return;
    }

    setShow(true);

    const t1 = setTimeout(() => setPhase("text"), 900);
    const t2 = setTimeout(() => {
      const navLogo = document.querySelector("[data-navbar-logo]");
      const introLogo = introRef.current;
      if (navLogo && introLogo) {
        const navRect = navLogo.getBoundingClientRect();
        const introRect = introLogo.getBoundingClientRect();
        const scale = navRect.height / introRect.height;
        setTarget({
          x: navRect.left + navRect.width / 2 - (introRect.left + introRect.width / 2),
          y: navRect.top + navRect.height / 2 - (introRect.top + introRect.height / 2),
          scale,
        });
      } else {
        setTarget({ x: -(window.innerWidth / 2 - 90), y: -(window.innerHeight / 2 - 34), scale: 0.68 });
      }
      setPhase("reveal");
    }, 1600);
    const t3 = setTimeout(() => {
      setPhase("done");
      markIntroDoneRef.current?.();
    }, 2300);
    const t4 = setTimeout(() => setShow(false), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  if (!show) return null;

  const revealing = phase === "reveal" || phase === "done";
  const textPhase = phase === "text" || revealing;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-dark-navy" aria-hidden="true">
      {/* drifting grid */}
      <div
        className="absolute inset-0 animate-grid-drift opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* network — route lines + nodes */}
      {/* FIX: vh sizing can shift as mobile browser chrome shows/hides during this brief intro — use dvh */}
      <motion.svg
        viewBox="0 0 400 300"
        className="absolute left-1/2 top-1/2 h-[70dvh] w-[90vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-80"
        animate={{ opacity: revealing ? 0 : 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {routes.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#5BB8F5"
              strokeWidth={1.2}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={4}
            fill="#5BB8F5"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.09, ease: "backOut" }}
          />
        ))}
      </motion.svg>

      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{
            opacity: phase === "done" ? 0 : 1,
            filter: "blur(0px)",
            scale: revealing && target ? target.scale : 1,
            x: revealing && target ? target.x : 0,
            y: revealing && target ? target.y : 0,
          }}
          transition={{
            opacity: { duration: phase === "done" ? 0.25 : 0.6 },
            filter: { duration: 0.7, ease: "easeOut" },
            scale: { duration: revealing ? 0.7 : 0.6, ease: [0.76, 0, 0.24, 1] },
            x: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
            y: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="flex flex-col items-center gap-4"
        >
          {/* FIX: Logo no longer eager-loads by default — this is the very first thing shown, so opt back in */}
          <Logo variant="light" size="lg" priority />
          {textPhase && phase !== "done" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="eyebrow !text-light-blue"
            >
              Connecting Your Network
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* navy door panels — slide apart on reveal */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: revealing ? "-100%" : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-0 top-0 h-full w-1/2 bg-dark-navy"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: revealing ? "100%" : 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute right-0 top-0 h-full w-1/2 bg-dark-navy"
      />
    </div>
  );
}
