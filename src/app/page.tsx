import Header from '@/components/Header'
import AnnouncementBanner from '@/components/AnnouncementBanner'
import HeroSection from '@/components/HeroSection'
import PartnersSection from '@/components/PartnersSection'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import ClinicalDocSection from '@/components/ClinicalDocSection'
import DevelopersSection from '@/components/DevelopersSection'
import SecuritySection from '@/components/SecuritySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnnouncementBanner />

      {/* Hero Section - Primary Value Proposition */}
      <HeroSection />

      {/* Social Proof & Trust Signals */}
      <PartnersSection />

      {/* Core Features & Benefits */}
      <KeyFeaturesSection />

      {/* Clinical Documentation & Medical Records */}
      <ClinicalDocSection />

      {/* Developer & Integration Section */}
      <DevelopersSection />

      {/* Security & Privacy Assurance */}
      <SecuritySection />

      {/* User Testimonials & Reviews */}
      <TestimonialsSection />

      {/* Footer with Links & Contact */}
      <Footer />
    </main>
  )
}