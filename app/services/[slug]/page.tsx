import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Globe,
  Map,
  MapPin,
  Package,
  Route,
  Truck,
  Warehouse,
} from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import CinematicHero from "@/components/layout/CinematicHero";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ServiceGallery from "@/components/ui/ServiceGallery";
import ServiceProcess from "@/components/ui/ServiceProcess";
import { services, serviceVisuals, serviceDetails, serviceGallery } from "@/lib/constants";

const icons = { Package, Warehouse, Truck, TruckIcon: Truck, Globe, MapPin, Route, BarChart3, Map };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.key }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.key === params.slug);
  if (!service) return {};
  const detail = serviceDetails[service.key];
  return {
    title: `${service.tabLabel} | Nexpres (I) Logistics Pvt Ltd`,
    description: detail.intro[0],
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceIndex = services.findIndex((s) => s.key === params.slug);
  const service = services[serviceIndex];
  if (!service) notFound();

  const Icon = icons[service.icon];
  const visual = serviceVisuals[service.key];
  const detail = serviceDetails[service.key];
  const gallery = serviceGallery[service.key];
  const indexLabel = String(serviceIndex + 1).padStart(2, "0");

  return (
    <PageShell>
      <CinematicHero
        index={indexLabel}
        eyebrow={`Services / ${service.tabLabel}`}
        title={detail.tagline}
        badge={service.badge}
        image={visual.kind === "photo" ? { src: visual.src, focal: visual.focal } : null}
      />

      {/* Introduction */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
            <Icon className="h-6 w-6 text-sky" />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-navy sm:text-3xl">{detail.introHeading}</h2>
          <div className="mt-4 flex flex-col gap-4">
            {detail.intro.map((p, i) => (
              <p key={i} className="font-serif text-lg leading-relaxed text-text-body">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <p className="eyebrow">In Practice</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            {service.tabLabel} in motion
          </h2>
          <div className="mt-8">
            <ServiceGallery items={gallery} />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <p className="eyebrow">{detail.offeringsHeading}</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            Capabilities built around your shipment
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.offerings.map((offer, i) => (
              <div
                key={offer}
                className="group flex items-start gap-3 rounded-xl border border-border-blue bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky hover:shadow-[0_12px_30px_rgba(30,127,216,0.1)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky/10 font-mono text-[10px] font-semibold text-sky">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-text-body">{offer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <ServiceProcess heading={detail.processHeading} steps={detail.process} />

      {/* Industries */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-5xl">
          <p className="eyebrow">{detail.industriesHeading}</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Built for your industry</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {detail.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-border-blue bg-white px-4 py-2 text-sm text-text-body"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-3xl">
          <p className="eyebrow">FAQs</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FAQAccordion items={detail.faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="container-px mx-auto max-w-6xl">
          <p className="eyebrow">Related Services</p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
            You might also need
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {detail.related.map((key) => {
              const related = services.find((s) => s.key === key);
              if (!related) return null;
              const RelatedIcon = icons[related.icon];
              return (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-border-blue bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-[0_16px_36px_rgba(30,127,216,0.1)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky/10">
                    <RelatedIcon className="h-5 w-5 text-sky" />
                  </div>
                  <span className="text-base font-semibold text-navy">{related.tabLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why NEXPRES + CTA */}
      <section className="relative overflow-hidden bg-cta-gradient py-20">
        <div className="container-px relative z-10 mx-auto max-w-4xl text-center">
          <p className="eyebrow !text-light-blue">{detail.whyHeading}</p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-lg text-white/85">{detail.whyBody}</p>
          <p className="mt-6 text-2xl font-bold text-white sm:text-3xl">{detail.closingLine}</p>
          <h3 className="mt-8 text-xl font-bold text-white sm:text-2xl">
            Ready to Move Your Business Forward?
          </h3>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-navy transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Talk to NEXPRES
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
