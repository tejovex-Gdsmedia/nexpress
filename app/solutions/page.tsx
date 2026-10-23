import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, LineChart, Send, ShoppingBag } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { solutionCards } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions | Nexpres (I) Logistics Pvt Ltd",
  description: "Logistics solutions built for D2C brands, personal shipping, B2B enterprises, and RTO reduction.",
};

const icons = { ShoppingBag, Send, Building2, LineChart };

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solutions"
        title="Built for every kind of shipper"
        description="Whether you're a growing D2C brand, an enterprise supply chain, or shipping a single parcel, Nexpres has a solution for you."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border-blue bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-[0_20px_40px_rgba(30,127,216,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF6FF]">
                  <Icon className="h-5 w-5 text-sky" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 font-serif text-sm text-text-body">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
