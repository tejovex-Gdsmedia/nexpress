import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { IntroProvider } from "@/components/providers/IntroProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexpres (I) Logistics Pvt Ltd | India's Next-Gen Express Logistics",
  description:
    "Nexpres (I) Logistics Pvt Ltd delivers integrated logistics solutions across Express Parcel, Cross Border, Warehousing, Freight and Technology services — making every delivery count.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <IntroProvider>
          <PageLoader />
          <ScrollProgressBar />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}
