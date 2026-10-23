import type { Metadata } from "next";
import { Globe2, HeartHandshake, Rocket, Users2 } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers | Nexpres (I) Logistics Pvt Ltd",
  description: "Open roles and life at Nexpres (I) Logistics Pvt Ltd.",
};

const perks = [
  { icon: Rocket, title: "Build at Scale", body: "Work on systems that move millions of parcels a month." },
  { icon: Users2, title: "Collaborative Teams", body: "Cross-functional pods across tech, ops, and strategy." },
  { icon: HeartHandshake, title: "Benefits That Matter", body: "Health cover, wellness support, and learning budgets." },
  { icon: Globe2, title: "Pan-India Presence", body: "Opportunities across 2,500+ service centers nationwide." },
];

const openRoles = [
  { title: "Senior Backend Engineer", location: "Gurugram, India", type: "Full-time" },
  { title: "Fleet Operations Manager", location: "Mumbai, India", type: "Full-time" },
  { title: "Data Scientist — RTO Risk", location: "Bengaluru, India", type: "Full-time" },
  { title: "Warehouse Supervisor", location: "Pune, India", type: "Full-time" },
  { title: "Key Account Manager, D2C", location: "Delhi NCR, India", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        title="Help us move India forward"
        description="Join a team of 30,000+ building the logistics infrastructure behind India's fastest-growing businesses."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="rounded-2xl border border-border-blue bg-off-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10">
                    <Icon className="h-5 w-5 text-sky" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">{perk.title}</h3>
                  <p className="mt-2 font-serif text-sm text-text-muted">{perk.body}</p>
                </div>
              );
            })}
          </div>

          <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Open Roles</h2>
          <div className="mt-6 flex flex-col divide-y divide-border-blue rounded-2xl border border-border-blue bg-white">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-navy">{role.title}</p>
                  <p className="text-sm text-text-muted">
                    {role.location} &middot; {role.type}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  View Role
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-6 font-serif text-sm text-text-muted">
            Don&apos;t see a role that fits? Write to us at{" "}
            <a href="mailto:careers@nexpres.in" className="font-medium text-sky">
              careers@nexpres.in
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
