import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import TrackingWidget from "@/components/ui/TrackingWidget";

export const metadata: Metadata = {
  title: "Track Your Shipment | Nexpres (I) Logistics Pvt Ltd",
  description: "Track your Nexpres shipment in real time using your AWB or Order ID.",
};

export default function TrackPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Track"
        title="Track your shipment"
        description="Enter your AWB or Order ID below to see real-time delivery status."
      />

      <section className="bg-network-gradient py-20">
        <div className="container-px mx-auto flex max-w-2xl justify-center">
          <TrackingWidget />
        </div>

        <p className="mt-8 text-center font-serif text-sm text-white/60">
          Having trouble tracking your shipment?{" "}
          <Link href="/support" className="font-medium text-light-blue">
            Contact support
          </Link>
          .
        </p>
      </section>
    </PageShell>
  );
}
