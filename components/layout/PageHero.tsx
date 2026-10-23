interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  badge?: string;
}

export default function PageHero({ eyebrow, title, description, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-[140px] sm:pb-20 sm:pt-[160px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 60px)",
        }}
        aria-hidden="true"
      />
      <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <p className="eyebrow">{eyebrow}</p>
          {badge && (
            <span className="rounded-full bg-sky px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              {badge}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
