import CountUpNumber from "@/components/ui/CountUpNumber";
import { heroStats } from "@/lib/constants";

export default function Stats() {
  return (
    <div className="relative z-10 border-t border-white/15 bg-white/10 backdrop-blur-md">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/20 sm:grid-cols-4 sm:divide-y-0">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
            <p className="text-2xl font-extrabold text-white sm:text-3xl">
              <CountUpNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
            </p>
            <p className="text-xs text-white/70 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
