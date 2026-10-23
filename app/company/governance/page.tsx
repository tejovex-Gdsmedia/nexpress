import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Governance | Nexpres (I) Logistics Pvt Ltd",
  description: "Board oversight, policies, and the compliance framework at Nexpres (I) Logistics Pvt Ltd.",
};

const sections = [
  {
    title: "Board Oversight",
    body: "Nexpres (I) Logistics Pvt Ltd is governed by a Board of Directors responsible for setting strategic direction, overseeing risk management, and ensuring the company operates in line with applicable laws and regulations in India.",
  },
  {
    title: "Policy Framework",
    body: "Our internal policies cover data privacy, information security, anti-bribery and anti-corruption, vendor due diligence, and workplace conduct, reviewed periodically to reflect regulatory and operational changes.",
  },
  {
    title: "Compliance & Risk",
    body: "A dedicated compliance function monitors adherence to statutory requirements, including company law, labour regulations, GST, and sector-specific logistics regulations, with regular internal audits.",
  },
  {
    title: "Ethics & Whistleblower Protection",
    body: "Nexpres maintains a confidential whistleblower channel so employees, partners, and vendors can report concerns about unethical or unlawful conduct without fear of retaliation.",
  },
];

export default function GovernancePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Governance"
        title="Governance at Nexpres"
        description="Our commitment to responsible, transparent, and compliant operations."
      />

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-navy">{section.title}</h2>
                <p className="mt-3 font-serif text-base leading-relaxed text-text-body">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border-blue bg-off-white p-6 text-sm text-text-muted">
            CIN: U63090DL2026PTC000000 &nbsp;|&nbsp; GST: 07AAAAA0000A1Z5
            <br />
            For governance or compliance queries, write to{" "}
            <a href="mailto:governance@nexpres.in" className="font-medium text-sky">
              governance@nexpres.in
            </a>
            .
          </div>
        </div>
      </section>
    </PageShell>
  );
}
