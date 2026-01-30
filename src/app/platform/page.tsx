import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

/**
 * Platform Page
 * Comprehensive overview of Mediloop's digital health infrastructure for Uganda.
 */

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mediloop Platform
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mediloop is Uganda's national digital health infrastructure,
            providing a secure, unified platform for citizens, providers, and
            the health system. Our platform powers universal health access,
            secure data, and digital health services for all Ugandans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Universal Health ID
            </h3>
            <p className="text-gray-700 mb-4">
              Every Ugandan gets a secure, lifelong UHID for seamless healthcare
              access across all providers and services.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Portable health identity</li>
              <li>• Secure data sharing</li>
              <li>• Government-integrated</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Provider Network
            </h3>
            <p className="text-gray-700 mb-4">
              Connect with 1000+ clinics, hospitals, pharmacies, and labs
              nationwide for coordinated care.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time data exchange</li>
              <li>• Nationwide coverage</li>
              <li>• Public & private integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Digital Services
            </h3>
            <p className="text-gray-700 mb-4">
              Access telemedicine, insurance, logistics, and AI-powered
              diagnostics - all on one secure platform.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• eHealth & telemedicine</li>
              <li>• Insurance integration</li>
              <li>• Medicine delivery</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl mb-8">
            Join Mediloop in building Uganda's digital health future.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
