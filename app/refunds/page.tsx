import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import LegalContent from "@/components/layout/LegalContent";

export const metadata: Metadata = {
  title: "Refund Policy | Nexpres (I) Logistics Pvt Ltd",
  description: "Nexpres (I) Logistics Pvt Ltd's refund and cancellation policy.",
};

const sections = [
  {
    heading: "1. Shipment Cancellations",
    body: [
      "Shipments can be cancelled free of charge before pickup is scheduled. Once a shipment has been picked up, cancellation requests will be reviewed on a case-by-case basis.",
    ],
  },
  {
    heading: "2. Eligibility for Refunds",
    body: [
      "Refunds may be issued for shipments that are cancelled before dispatch, duplicate charges, or verified service failures such as lost shipments confirmed by our investigation team.",
      "Refunds are not applicable for delays caused by incorrect address information provided by the shipper, or by force majeure events such as natural disasters or regulatory restrictions.",
    ],
  },
  {
    heading: "3. Refund Process",
    body: [
      "Approved refunds are processed to the original payment method within 7–10 business days of approval. For COD shipments, refunds are issued via bank transfer to the registered account.",
    ],
  },
  {
    heading: "4. How to Request a Refund",
    body: [
      "To request a refund, contact our support team at support@nexpres.in with your AWB or Order ID and a description of the issue.",
    ],
  },
];

export default function RefundsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Refund Policy" />
      <LegalContent lastUpdated="October 21, 2026" sections={sections} />
    </PageShell>
  );
}
