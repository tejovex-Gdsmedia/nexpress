import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-blue bg-white p-8 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
