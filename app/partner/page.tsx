import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bike, GraduationCap, MapPin, Truck } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { partnerCards } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Partner With Us | Nexpres (I) Logistics Pvt Ltd",
  description: "Franchise, delivery partner, fleet owner, and training opportunities with Nexpres Logistics.",
};

const icons = { MapPin, Bike, Truck, GraduationCap };

export default function PartnerPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Partnerships"
        title="Grow with Nexpres"
        description="Join India's fastest-growing logistics network as a franchise owner, delivery partner, fleet owner, or trainee."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border-blue bg-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:bg-white hover:shadow-[0_15px_35px_rgba(26,58,143,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
                  <Icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mt-4 text-base font-bold text-navy">{card.title}</h3>
                <p className="mt-2 font-serif text-sm text-text-muted">{card.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                  Apply Now
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
