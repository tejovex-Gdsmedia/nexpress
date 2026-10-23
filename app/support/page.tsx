import type { Metadata } from "next";
import Link from "next/link";
import { Headset, Mail, MessageCircle } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import SupportFaq from "./SupportFaq";

export const metadata: Metadata = {
  title: "Support | Nexpres (I) Logistics Pvt Ltd",
  description: "Get help with shipments, tracking, and partnerships from the Nexpres support team.",
};

const channels = [
  { icon: Headset, title: "Call Us", body: "1800-200-5555 (Toll Free)", sub: "Mon–Sat, 9am–8pm IST" },
  { icon: Mail, title: "Email Us", body: "support@nexpres.in", sub: "Response within 24 hours" },
  { icon: MessageCircle, title: "Live Chat", body: "Available on the Nexpres app", sub: "Mon–Sat, 9am–9pm IST" },
];

export default function SupportPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Support"
        title="We're here to help"
        description="Find answers to common questions, or reach our support team directly."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className="rounded-2xl border border-border-blue bg-off-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10">
                    <Icon className="h-5 w-5 text-sky" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">{channel.title}</h3>
                  <p className="mt-1 text-sm font-medium text-text-body">{channel.body}</p>
                  <p className="mt-1 text-xs text-text-muted">{channel.sub}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mt-14 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6">
            <SupportFaq />
          </div>

          <p className="mt-8 font-serif text-sm text-text-muted">
            Looking for your shipment status?{" "}
            <Link href="/track" className="font-medium text-sky">
              Track your shipment
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
