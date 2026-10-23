import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Building2, Check, LineChart, Send, ShoppingBag } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { solutionCards } from "@/lib/constants";

const icons = { ShoppingBag, Send, Building2, LineChart };

function slugOf(href: string) {
  return href.split("/").pop()!;
}

export function generateStaticParams() {
  return solutionCards.map((card) => ({ slug: slugOf(card.href) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const card = solutionCards.find((c) => slugOf(c.href) === params.slug);
  if (!card) return {};
  return {
    title: `${card.title} | Nexpres (I) Logistics Pvt Ltd`,
    description: card.body,
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const card = solutionCards.find((c) => slugOf(c.href) === params.slug);
  if (!card) notFound();

  const Icon = icons[card.icon];

  return (
    <PageShell>
      <PageHero eyebrow={`Solutions / ${card.title}`} title={card.body} />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
              <Icon className="h-6 w-6 text-sky" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-navy">What you get</h2>

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
              href="/solutions"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-sky"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Solutions
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-card-gradient p-10">
            <Icon className="h-32 w-32 text-white/25" />
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
