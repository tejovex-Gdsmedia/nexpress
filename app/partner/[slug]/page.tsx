import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bike, Check, GraduationCap, MapPin, Truck } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import { partnerCards } from "@/lib/constants";

const icons = { MapPin, Bike, Truck, GraduationCap };

function slugOf(href: string) {
  return href.split("/").pop()!;
}

export function generateStaticParams() {
  return partnerCards.map((card) => ({ slug: slugOf(card.href) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const card = partnerCards.find((c) => slugOf(c.href) === params.slug);
  if (!card) return {};
  return {
    title: `${card.title} | Nexpres (I) Logistics Pvt Ltd`,
    description: card.body,
  };
}

export default function PartnerDetailPage({ params }: { params: { slug: string } }) {
  const card = partnerCards.find((c) => slugOf(c.href) === params.slug);
  if (!card) notFound();

  const Icon = icons[card.icon];

  return (
    <PageShell>
      <PageHero eyebrow={`Partner / ${card.title}`} title={card.body} />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
              <Icon className="h-6 w-6 text-navy" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-navy">Why partner with us</h2>

            <ul className="mt-6 flex flex-col gap-3">
              {(card.features ?? []).map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-text-body">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/partner"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-sky"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Partnerships
            </Link>
          </div>

          <div className="rounded-3xl border border-border-blue bg-off-white p-8">
            <h3 className="text-lg font-semibold text-navy">Interested in becoming a partner?</h3>
            <p className="mt-2 font-serif text-sm text-text-muted">
              Reach out to our partnerships team and we&apos;ll walk you through eligibility,
              onboarding, and next steps for {card.title.toLowerCase()}.
            </p>
            <Button variant="primary" size="lg" className="mt-6 w-full">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
