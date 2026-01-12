import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * Provider Network Page
 * Details Mediloop's network of clinics, hospitals, pharmacies, and labs across Uganda.
 */

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Healthcare Provider Network</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Join 1000+ clinics, hospitals, pharmacies, and labs using Mediloop to deliver better care across Uganda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">200+</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Hospitals</h3>
            <p className="text-xs sm:text-sm text-gray-700">Connected nationwide</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">500+</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Clinics</h3>
            <p className="text-xs sm:text-sm text-gray-700">Primary care facilities</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">250+</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Pharmacies</h3>
            <p className="text-xs sm:text-sm text-gray-700">Retail & hospital</p>
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">50+</div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Laboratories</h3>
            <p className="text-xs sm:text-sm text-gray-700">Diagnostic centers</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Benefits for Healthcare Providers</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Complete Patient Records</h3>
              <p className="text-sm sm:text-base text-gray-700">Access full patient history from all connected facilities. See medications, allergies, test results, and past diagnoses instantly.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Better Care Coordination</h3>
              <p className="text-sm sm:text-base text-gray-700">Seamlessly share records with specialists, labs, and pharmacies. Reduce duplicate tests and medication errors.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Streamlined Operations</h3>
              <p className="text-sm sm:text-base text-gray-700">Automated record-keeping, government reporting, and billing. Less paperwork, more time for patient care.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Increased Patient Trust</h3>
              <p className="text-sm sm:text-base text-gray-700">Patients control their data and choose to share with you. Build trust through transparency and security.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">New Patient Access</h3>
              <p className="text-sm sm:text-base text-gray-700">Reach patients through our platform. List your services, accept online bookings, and grow your practice.</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Compliance Made Easy</h3>
              <p className="text-sm sm:text-base text-gray-700">Automatic compliance with national health standards and government reporting requirements.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">1</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Register Your Facility</h3>
              <p className="text-sm sm:text-base text-gray-700">Complete a simple onboarding process. We'll verify your credentials and set up your account.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">2</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Connect Your Systems</h3>
              <p className="text-sm sm:text-base text-gray-700">Integrate Mediloop with your existing EMR or use our provider portal. We support FHIR and custom integrations.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">3</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Start Serving Patients</h3>
              <p className="text-sm sm:text-base text-gray-700">Access patient records with their consent, update care information, and coordinate with other providers.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Uganda's Largest Health Network</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">Connect your facility to Mediloop and deliver better care to millions of Ugandans.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://providers.mediloop.co" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Provider Portal
            </a>
            <a href="/contact" className="inline-block bg-teal-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition border-2 border-white">
              Contact Sales
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
