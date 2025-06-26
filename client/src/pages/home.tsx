import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FactoidsSection from "@/components/factoids-section";
import ServicesSection from "@/components/services-section";
import BlogPreviewSection from "@/components/blog-preview-section";
// import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import OrganicDivider from "@/components/organic-divider";
import { setupScrollAnimations } from "@/lib/scroll-utils";

export default function Home() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="bg-warm-cream text-ebony-800 font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <div className="section-divider" />
      <FactoidsSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <BlogPreviewSection />
      <div className="section-divider" />
      {/* <PricingSection />
      <div className="section-divider" /> */}
      <TestimonialsSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
}
