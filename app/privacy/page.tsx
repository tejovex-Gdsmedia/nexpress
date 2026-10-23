import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import LegalContent from "@/components/layout/LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexpres (I) Logistics Pvt Ltd",
  description: "How Nexpres (I) Logistics Pvt Ltd collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, address, phone number, and email when you create a shipment, place an order, or contact support.",
      "We also collect information automatically, including shipment tracking data, device and usage information, and location data when you use our tracking and delivery services.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use your information to process and deliver shipments, provide customer support, improve our services, and communicate updates about your orders.",
      "We may also use aggregated, de-identified data for analytics and to improve route planning and service reliability.",
    ],
  },
  {
    heading: "3. Sharing of Information",
    body: [
      "We share shipment-related information with delivery partners, fleet owners, and franchise partners as necessary to fulfil your order.",
      "We do not sell your personal information to third parties. We may share information with service providers who help us operate our platform, subject to confidentiality obligations.",
    ],
  },
  {
    heading: "4. Data Security",
    body: [
      "We implement reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse.",
    ],
  },
  {
    heading: "5. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information by contacting us at privacy@nexpres.in.",
    ],
  },
  {
    heading: "6. Contact Us",
    body: [
      "If you have questions about this Privacy Policy, please contact us at privacy@nexpres.in or write to Nexpres (I) Logistics Pvt Ltd, registered office, India.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <LegalContent lastUpdated="October 21, 2026" sections={sections} />
    </PageShell>
  );
}
