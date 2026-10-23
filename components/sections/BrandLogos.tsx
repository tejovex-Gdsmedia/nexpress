import Marquee from "@/components/ui/Marquee";
import { brandLogos } from "@/lib/constants";

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-[60px] w-[160px] shrink-0 items-center justify-center rounded-lg border border-border-blue bg-[#EFF6FF] text-sm font-medium text-sky grayscale transition-all duration-300 hover:grayscale-0">
      {name}
    </div>
  );
}

export default function BrandLogos() {
  const row1 = brandLogos.slice(0, 6);
  const row2 = brandLogos.slice(6, 12);

  return (
    <section className="border-y border-border-blue bg-white py-14">
      <div className="container-px mx-auto max-w-7xl">
        <p className="eyebrow text-center">Trusted by India&apos;s Leading Brands</p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Marquee>
          {row1.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row2.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
