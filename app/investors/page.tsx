import type { Metadata } from "next";
import { Building, MapPinned, Users, Warehouse } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import CountUpNumber from "@/components/ui/CountUpNumber";
import { networkStats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investors | Nexpres (I) Logistics Pvt Ltd",
  description: "Investor relations, company overview, and key metrics for Nexpres (I) Logistics Pvt Ltd.",
};

const icons = { MapPinned, Building, Warehouse, Users };

export default function InvestorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Investors"
        title="Investor Relations"
        description="A snapshot of Nexpres (I) Logistics Pvt Ltd's network and scale."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Company Overview</h2>
          <p className="mt-4 max-w-3xl font-serif text-base leading-relaxed text-text-body">
            Nexpres (I) Logistics Pvt Ltd is a technology-led, integrated logistics company
            operating across Express Parcel, Cross Border, Warehousing, Freight, and Technology
            services. The company serves D2C brands, enterprises, and individual customers
            across India and 220+ countries and territories.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-navy sm:text-3xl">Key Metrics</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {networkStats.map((stat) => {
              const Icon = icons[stat.icon];
              return (
                <div key={stat.label} className="relative rounded-xl border border-border-blue bg-off-white p-6">
                  <Icon className="absolute right-4 top-4 h-5 w-5 text-sky" />
                  <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl border border-border-blue bg-off-white p-6">
            <h3 className="text-lg font-semibold text-navy">Investor Contact</h3>
            <p className="mt-2 font-serif text-sm text-text-muted">
              For investor relations queries, financial reports, or shareholder information,
              please reach out to our IR desk at{" "}
              <a href="mailto:investors@nexpres.in" className="font-medium text-sky">
                investors@nexpres.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
