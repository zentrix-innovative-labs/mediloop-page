import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Universal Health ID (UHID) — Mediloop",
  description: "Register for your Universal Health ID (UHID) and access healthcare across Uganda. One secure health identity linked to your national ID.",
  alternates: { canonical: 'https://mediloop.co/uhid' },
  openGraph: {
    title: "Universal Health ID (UHID) — Mediloop",
    description: "Register for your Universal Health ID (UHID) and access healthcare across Uganda.",
    url: 'https://mediloop.co/uhid',
    images: [
      { url: 'https://mediloop.co/assets/og-uhid.svg', width: 1200, height: 630, alt: 'UHID — Mediloop' }
    ]
  },
  twitter: {
    title: "Universal Health ID (UHID) — Mediloop",
    description: "Register for your Universal Health ID (UHID) and access healthcare across Uganda.",
    images: ['https://mediloop.co/assets/og-uhid.svg'],
    card: 'summary_large_image'
  }
}

/**
 * Universal Health ID (UHID) Page
 * Detailed explanation of the UHID system, benefits, and implementation in Uganda.
 */

export default function UHIDPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Universal Health ID (UHID)",
    "serviceType": "Digital Identity for Healthcare",
    "description": "Universal Health ID: a secure digital health identity linked to national ID for Ugandans. Access medical records, consultations, and provider services across the Mediloop network.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Mediloop Health",
      "url": "https://mediloop.co",
      "@id": "https://mediloop.co/#medicalorganization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Uganda"
    },
    "url": "https://mediloop.co/uhid"
  };

  const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Universal Health ID (UHID)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A UHID is a secure digital health identity linked to your national ID that stores your medical records and makes care portable across Uganda."
        }
      },
      {
        "@type": "Question",
        "name": "How do I register for a UHID?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit app.mediloop.co and register with your National ID. The UHID is issued instantly upon verification."
        }
      },
      {
        "@type": "Question",
        "name": "Is my health data secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Mediloop uses industry-standard encryption and access controls; you control who can view your records."
        }
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Script
        id="uhid-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="uhid-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructured) }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Universal Health ID</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Your lifetime health identity. One ID for all your medical records, accessible anywhere in Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How Your UHID Works</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Your Universal Health ID is linked to your National ID and gives you instant access to healthcare services across Uganda.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 space-y-2">
              <li>• Register once, use everywhere</li>
              <li>• Secure verification with your National ID</li>
              <li>• Works at all connected facilities</li>
              <li>• Available even in areas with limited internet</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Benefits for You</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Take control of your health records and get better care wherever you go.
            </p>
            <ul className="text-sm sm:text-base text-gray-600 space-y-2">
              <li>• Never lose your medical records again</li>
              <li>• Faster treatment in emergencies</li>
              <li>• Access doctors via WhatsApp</li>
              <li>• Share records securely with any doctor</li>
              <li>• Track your health history over time</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 rounded-2xl p-8 sm:p-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Getting Started is Easy</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-sm sm:text-base text-gray-700">Visit app.mediloop.co and register with your National ID</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Get Your UHID</h3>
              <p className="text-sm sm:text-base text-gray-700">Your Universal Health ID is created instantly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Start Using</h3>
              <p className="text-sm sm:text-base text-gray-700">Book appointments, consult doctors, manage your health</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get Your Universal Health ID Today</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join thousands of Ugandans taking control of their health records.</p>
          <a href="https://app.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Create Your UHID
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
