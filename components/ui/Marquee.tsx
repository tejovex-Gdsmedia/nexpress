import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center gap-6 [animation-play-state:running] group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex min-w-full shrink-0 items-center gap-6 [animation-play-state:running] group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        )}
      >
        {children}
      </div>
    </div>
  );
}
