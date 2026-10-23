import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "light" | "icon";
type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  // FIX: every Logo instance hard-coded priority (eager-load + preload), including the
  // below-the-fold footer logo — that competed with real above-the-fold assets (hero
  // video/images) for bandwidth. Now it defaults to lazy and only above-the-fold call
  // sites (navbar, preloader) opt in.
  priority?: boolean;
}

// natural aspect ratio of the provided lockup: 522 x 320
const sizeMap: Record<LogoSize, { full: number; icon: number; word: string; sub: string }> = {
  sm: { full: 44, icon: 24, word: "text-base", sub: "text-[7px]" },
  md: { full: 56, icon: 30, word: "text-xl", sub: "text-[8px]" },
  lg: { full: 84, icon: 44, word: "text-3xl", sub: "text-[10px]" },
};

export default function Logo({ variant = "default", size = "md", className, priority = false }: LogoProps) {
  const { full, icon, word, sub } = sizeMap[size];

  if (variant === "icon") {
    return (
      <span className={cn("inline-flex shrink-0", className)}>
        <Image
          src="/images/nexpres-plane-icon.png"
          alt="Nexpres"
          width={icon * 1.63}
          height={icon}
          style={{ height: icon, width: "auto" }}
          priority={priority}
        />
      </span>
    );
  }

  if (variant === "light") {
    // dark-background lockup: real plane icon (reads fine on navy) + white typeset wordmark
    return (
      <span className={cn("inline-flex flex-col items-center gap-1", className)}>
        <Image
          src="/images/nexpres-plane-icon.png"
          alt="Nexpres (I) Logistics Pvt Ltd"
          width={icon * 1.63}
          height={icon}
          style={{ height: icon, width: "auto" }}
          priority={priority}
        />
        <span className="flex flex-col items-center leading-tight">
          <span className={cn("font-black uppercase tracking-wide text-white", word)}>
            NEXPRES <span className="font-extrabold">(I)</span>
          </span>
          <span className={cn("font-normal uppercase tracking-[0.25em] text-white/80", sub)}>
            Logistics Pvt Ltd
          </span>
        </span>
      </span>
    );
  }

  // default: the actual provided logo asset, untouched proportions
  return (
    <span className={cn("inline-flex shrink-0", className)}>
      <Image
        src="/images/nexpres-logo.png"
        alt="Nexpres (I) Logistics Pvt Ltd"
        width={full * 1.631}
        height={full}
        style={{ height: full, width: "auto" }}
        priority={priority}
      />
    </span>
  );
}
