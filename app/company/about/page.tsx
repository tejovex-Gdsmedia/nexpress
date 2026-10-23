import type { Metadata } from "next";
import { Compass, Heart, ShieldCheck, Target } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Nexpres (I) Logistics Pvt Ltd",
  description: "The story, mission, and values behind Nexpres (I) Logistics Pvt Ltd.",
};

const values = [
  {
    icon: Target,
    title: "Reliability First",
    body: "Every promise we make to a customer is a promise our network is built to keep.",
  },
  {
    icon: Compass,
    title: "Built for Scale",
    body: "From a single parcel to enterprise freight, our systems are designed to grow with you.",
  },
  {
    icon: Heart,
    title: "People Powered",
    body: "30,000+ team members, delivery partners, and fleet owners make every delivery count.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    body: "Real-time visibility and honest communication, from pickup to proof of delivery.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="India's next-generation integrated logistics provider"
        description="Nexpres (I) Logistics Pvt Ltd was built to make shipping in India faster, simpler, and more reliable — for brands, businesses, and individuals alike."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Our Story</h2>
          <p className="mt-4 font-serif text-base leading-relaxed text-text-body">
            Nexpres was founded with a simple belief: logistics in India should be as reliable
            as the businesses that depend on it. What started as an express parcel network has
            grown into an integrated platform spanning Express Parcel, Cross Border, Warehousing,
            Freight, and Technology services — connecting over 18,800 pin codes and 220+
            countries and territories.
          </p>
          <p className="mt-4 font-serif text-base leading-relaxed text-text-body">
            Today, Nexpres powers delivery for D2C brands, enterprise supply chains, and everyday
            personal shipments across the country, backed by a network of fulfilment centers,
            service centers, and delivery partners built for the scale of modern commerce.
          </p>

          <h2 className="mt-14 text-2xl font-bold text-navy sm:text-3xl">What We Stand For</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-2xl border border-border-blue bg-off-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10">
                    <Icon className="h-5 w-5 text-sky" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">{value.title}</h3>
                  <p className="mt-2 font-serif text-sm text-text-muted">{value.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
