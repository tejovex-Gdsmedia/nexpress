import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import LegalContent from "@/components/layout/LegalContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Nexpres (I) Logistics Pvt Ltd",
  description: "How Nexpres (I) Logistics Pvt Ltd uses cookies and similar technologies.",
};

const sections = [
  {
    heading: "1. What Are Cookies",
    body: [
      "Cookies are small text files stored on your device that help websites remember your preferences and recognise repeat visits.",
    ],
  },
  {
    heading: "2. How We Use Cookies",
    body: [
      "We use essential cookies to operate core features such as shipment tracking and the rate calculator, and analytics cookies to understand how our site is used and improve performance.",
      "We may also use cookies to remember your preferences, such as previously searched cities or tracking numbers, within a single session.",
    ],
  },
  {
    heading: "3. Managing Cookies",
    body: [
      "Most browsers let you control cookies through their settings, including blocking or deleting them. Disabling essential cookies may affect the functionality of tracking and rate tools on our site.",
    ],
  },
  {
    heading: "4. Third-Party Cookies",
    body: [
      "We may use third-party analytics providers that set their own cookies to help us understand site usage in aggregate. These providers are bound by their own privacy policies.",
    ],
  },
  {
    heading: "5. Contact Us",
    body: ["Questions about our use of cookies can be directed to privacy@nexpres.in."],
  },
];

export default function CookiesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <LegalContent lastUpdated="October 21, 2026" sections={sections} />
    </PageShell>
  );
}
