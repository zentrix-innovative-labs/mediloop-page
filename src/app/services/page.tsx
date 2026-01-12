import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Telemedicine & eHealth Services — Mediloop",
  description: "Access telemedicine consultations, eHealth services, and medicine delivery across Uganda through Mediloop.",
  alternates: { canonical: 'https://mediloop.co/services' },
  openGraph: {
    title: "Telemedicine & eHealth Services — Mediloop",
    description: "Access telemedicine consultations, eHealth services, and medicine delivery across Uganda.",
    url: 'https://mediloop.co/services',
    images: [
      { url: 'https://mediloop.co/assets/og-services.svg', width: 1200, height: 630, alt: 'Telemedicine — Mediloop' }
    ]
  },
  twitter: {
    title: "Telemedicine & eHealth Services — Mediloop",
    description: "Access telemedicine consultations, eHealth services, and medicine delivery across Uganda.",
    images: ['https://mediloop.co/assets/og-services.svg'],
    card: 'summary_large_image'
  }
}

/**
 * Digital Health Services Page
 * Overview of Mediloop's digital health services: eHealth, insurance, logistics, and more.
 */

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Telemedicine Consultations",
    "serviceType": "Telemedicine",
    "description": "Telemedicine consultations via chat, WhatsApp, and video — connect with licensed Ugandan healthcare providers through Mediloop for remote diagnosis and follow-ups.",
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
    "url": "https://mediloop.co/services"
  };

  const faqStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do telemedicine consultations work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Connect via WhatsApp, chat, or video calls to get medical advice, prescriptions, and follow-ups from licensed providers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get prescriptions delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Mediloop partners with pharmacies for nationwide medicine delivery when prescribed by a provider."
        }
      },
      {
        "@type": "Question",
        "name": "Are telemedicine consultations secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All consultations and records are stored securely and accessed only with your consent."
        }
      }
    ]
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Script
        id="telemedicine-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="telemedicine-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructured) }}
      />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Digital Health Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mediloop offers a growing suite of digital health services for Uganda - making care more accessible, affordable, and effective for all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">eHealth & Telemedicine</h3>
            <p className="text-gray-700 mb-4">
              Connect with healthcare providers remotely through video calls, chat, and secure messaging.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 24/7 access to care</li>
              <li>• Reduced travel costs</li>
              <li>• Follow-up consultations</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Integration</h3>
            <p className="text-gray-700 mb-4">
              Seamless integration with Ugandan health insurance providers for claims processing and coverage verification.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Automatic claims submission</li>
              <li>• Real-time coverage checks</li>
              <li>• Multiple insurer support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Medicine Delivery</h3>
            <p className="text-gray-700 mb-4">
              Get prescribed medications delivered to your door through our logistics network.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Nationwide delivery</li>
              <li>• Temperature-controlled</li>
              <li>• Pharmacy integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Diagnostics</h3>
            <p className="text-gray-700 mb-4">
              AI-powered diagnostic assistance for faster, more accurate healthcare decisions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Symptom analysis</li>
              <li>• Treatment recommendations</li>
              <li>• Clinical decision support</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Analytics</h3>
            <p className="text-gray-700 mb-4">
              Personalized health insights and preventive care recommendations based on your data.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Health trend analysis</li>
              <li>• Preventive care alerts</li>
              <li>• Wellness tracking</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment Booking</h3>
            <p className="text-gray-700 mb-4">
              Schedule appointments with healthcare providers through our integrated booking system.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time availability</li>
              <li>• Automated reminders</li>
              <li>• Waitlist management</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Digital Health Today</h2>
          <p className="text-xl mb-8">Access all our services through the Mediloop platform.</p>
          <a href="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Access
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
