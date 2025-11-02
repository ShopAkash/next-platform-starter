"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/PocketRetail/HeroSection";
import IntegratedSystemSection from "@/components/PocketRetail/IntegratedSystemSection";
import BrandShowcase from "@/components/BrandShowcase";
import ShoppingExperience from "@/components/ShoppingExperience";
import ShippingSection from "@/components/ShippingSection";
import ReachSection from "@/components/ReachSection";
import StatsTestimonial from "@/components/StatsTestimonial";
import PricingSection from "@/components/PricingSection";
import ResourcesSection from "@/components/ResourcesSection";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";

export default function PocketRetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IntegratedSystemSection />
      <BrandShowcase />
      <ShoppingExperience />
      <ShippingSection />
      <ReachSection />
      <StatsTestimonial />
      <PricingSection />
      {/* <ResourcesSection /> */}
      <ContactForm />
      <FinalCTA />
    </div>
  );
}