import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import { pressReleases } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Press Release | Nexpres (I) Logistics Pvt Ltd",
  description: "Company announcements, milestones, and media coverage from Nexpres (I) Logistics Pvt Ltd.",
};

export default function PressPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Latest News" title="Press Releases" />

      <section className="bg-off-white py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex flex-col gap-6">
            {pressReleases.map((item) => (
              <article
                key={item.headline}
                className="overflow-hidden rounded-2xl border border-border-blue bg-white"
              >
                <div className="h-1 bg-card-gradient" />
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-text-muted">
                      {item.date}
                    </span>
                    <span className="rounded-full bg-sky/10 px-3 py-1 text-xs font-medium text-sky">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{item.headline}</h3>
                  <p className="mt-2 font-serif text-sm text-text-muted">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
