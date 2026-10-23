import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, FileText, Newspaper, Scale, Users } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Company | Nexpres (I) Logistics Pvt Ltd",
  description: "Learn about Nexpres (I) Logistics Pvt Ltd — our story, governance, press, careers, and blog.",
};

const companyLinks = [
  {
    icon: Users,
    title: "About Us",
    body: "Our story, mission, and the team building India's next-gen logistics network.",
    href: "/company/about",
  },
  {
    icon: Scale,
    title: "Governance",
    body: "Board oversight, policies, and the compliance framework behind Nexpres.",
    href: "/company/governance",
  },
  {
    icon: Newspaper,
    title: "Press Release",
    body: "Company announcements, milestones, and media coverage.",
    href: "/company/press",
  },
  {
    icon: Briefcase,
    title: "Careers",
    body: "Open roles and what it's like to build logistics infrastructure at scale.",
    href: "/company/careers",
  },
  {
    icon: FileText,
    title: "Blog",
    body: "Insights on logistics, supply chain, and e-commerce in India.",
    href: "/company/blog",
  },
];

export default function CompanyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Company"
        title="Building India's next-gen logistics network"
        description="From our governance to our growing team, here's a closer look at Nexpres (I) Logistics Pvt Ltd."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companyLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-border-blue bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-[0_20px_40px_rgba(30,127,216,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10">
                  <Icon className="h-5 w-5 text-sky" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 font-serif text-sm text-text-body">{item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
