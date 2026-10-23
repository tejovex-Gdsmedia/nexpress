import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import LegalContent from "@/components/layout/LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service | Nexpres (I) Logistics Pvt Ltd",
  description: "The terms governing your use of Nexpres (I) Logistics Pvt Ltd's services.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By accessing or using Nexpres's website, mobile app, or logistics services, you agree to be bound by these Terms of Service and our Privacy Policy.",
    ],
  },
  {
    heading: "2. Use of Service",
    body: [
      "You agree to provide accurate shipment and contact information and to use our services only for lawful purposes.",
      "Nexpres reserves the right to refuse, suspend, or cancel service for shipments that violate applicable law or our shipping policies, including prohibited and restricted items.",
    ],
  },
  {
    heading: "3. Shipping & Delivery",
    body: [
      "Delivery timelines shown on our platform are estimates and may vary due to factors including weather, regulatory checks, and address accuracy.",
      "Risk of loss or damage passes in accordance with the applicable shipping agreement for your shipment type (Express Parcel, PTL, FTL, or International).",
    ],
  },
  {
    heading: "4. Fees & Payment",
    body: [
      "Shipping rates are calculated based on origin, destination, weight, and service type, and are subject to change without prior notice.",
    ],
  },
  {
    heading: "5. Limitation of Liability",
    body: [
      "To the extent permitted by law, Nexpres's liability for any claim arising from a shipment is limited to the declared value of the shipment or the applicable insurance coverage, whichever is lower.",
    ],
  },
  {
    heading: "6. Governing Law",
    body: [
      "These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <LegalContent lastUpdated="October 21, 2026" sections={sections} />
    </PageShell>
  );
}
