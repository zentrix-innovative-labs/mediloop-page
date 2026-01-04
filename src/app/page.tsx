import Header from "@/components/Header";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import ClinicalDocSection from "@/components/ClinicalDocSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TemplatesSection from "@/components/TemplatesSection";
import RoadmapSection from "@/components/RoadmapSection";
import SettingsSection from "@/components/SettingsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import LeadersSection from "@/components/LeadersSection";
import SecuritySection from "@/components/SecuritySection";
import PressSection from "@/components/PressSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnnouncementBanner />
      <HeroSection />
      <PartnersSection />
      <KeyFeaturesSection />
      <ClinicalDocSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <SpecialtiesSection />
      <TemplatesSection />
      <RoadmapSection />
      <SettingsSection />
      <ExpertiseSection />
      <LeadersSection />
      <SecuritySection />
      <PressSection />
      <Footer />
    </main>
  );
}
