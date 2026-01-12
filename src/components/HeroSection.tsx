import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-green-50 overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img
          src="/assets/africa-humanitarian-aid-doctor-taking-care-patient.jpg"
          alt="Healthcare professionals"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl">

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Complete Health Record. Always With You.
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Every Ugandan gets one health ID for life. Get instant medical advice on WhatsApp, keep all your records in one place, and access healthcare from anywhere.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Instant medical advice via WhatsApp - no app needed</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">One health ID - all your medical records in one place</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Access healthcare anywhere - clinics, hospitals, pharmacies</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">Secure & private - you control who sees your data</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://app.mediloop.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium text-center mb-2 sm:mb-0"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <a
              href="https://wa.me/256775035244?text=Hello%20Mediloop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-md font-medium text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
