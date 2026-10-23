import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Solutions from "@/components/sections/Solutions";
import NetworkMap from "@/components/sections/NetworkMap";
import HowItWorks from "@/components/sections/HowItWorks";
import Tools from "@/components/sections/Tools";
import Partners from "@/components/sections/Partners";
import BrandLogos from "@/components/sections/BrandLogos";
import Testimonials from "@/components/sections/Testimonials";
import PressReleases from "@/components/sections/PressReleases";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <NetworkMap />
        <HowItWorks />
        <Tools />
        <Partners />
        <BrandLogos />
        <Testimonials />
        <PressReleases />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
