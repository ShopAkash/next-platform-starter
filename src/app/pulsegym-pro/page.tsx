"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/PulsegymPro/HeroSection";
import PremiumSection from "@/components/PulsegymPro/PremiumSection";
import IntegratedSystemSection from "@/components/PulsegymPro/IntegratedSystemSection";
import ShoppingExperience from "@/components/PulsegymPro/ShoppingExperience";
import ReachSection from "@/components/PulsegymPro/ReachSection";
import ShippingSection from "@/components/PulsegymPro/ShippingSection";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/PulsegymPro/ContactForm";
import PricingSection from "@/components/PulsegymPro/PricingSection";


export default function PulseGymPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PremiumSection />
      <IntegratedSystemSection />
      <ShoppingExperience />
      <ShippingSection />
      <ReachSection />
      <PricingSection />
      <ContactForm />
      <FinalCTA />
    </div>
  );
}
