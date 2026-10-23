import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
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
import PageHero from "@/components/layout/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { services, serviceVisuals } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | Nexpres (I) Logistics Pvt Ltd",
  description: "Explore Nexpres's full range of logistics services, from express parcel to freight and data intelligence.",
};

const icons = { Package, Warehouse, Truck, TruckIcon: Truck, Globe, MapPin, Route, BarChart3, Map };

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to ship, store & deliver"
        description="From express parcel to freight, warehousing and data intelligence — one platform for every stage of your supply chain."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            const visual = serviceVisuals[service.key];
            return (
              <Link
                key={service.key}
                href={`/services/${service.key}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                {visual.kind === "photo" ? (
                  // FIX: the first row (i < 3) renders above the fold with no scrolling —
                  // it was relying on native lazy-loading like every other tile, so it could
                  // still show a blank/placeholder moment on first paint. priority preloads
                  // it immediately; sizes now accounts for the max-w-7xl container cap instead
                  // of a raw vw value, so the responsive-image picker isn't over-conservative.
                  <Image
                    src={visual.src}
                    alt=""
                    fill
                    priority={i < 3}
                    sizes="(min-width: 1280px) 416px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    style={{ objectFit: "cover", objectPosition: visual.focal }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-card-gradient" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/50 to-dark-navy/10 transition-opacity duration-300 group-hover:from-dark-navy/95" />

                <div className="relative flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {service.badge && (
                      <span className="rounded-full bg-sky px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 backdrop-blur">
                      <Icon className="h-5 w-5 text-light-blue" />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{service.tabLabel}</h3>
                    <p className="mt-1 font-serif text-sm text-white/65">{service.title}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-light-blue opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
