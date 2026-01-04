import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

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
            Uganda's National Digital Health Infrastructure
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            Mediloop is launching first in Uganda: giving every Ugandan a
            Universal Health ID (UHID), connecting all providers, and delivering
            instant, AI-powered diagnostics and care - accessible to everyone,
            everywhere in Uganda.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">
                UHID for every citizen
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">
                <strong>WhatsApp AI diagnostics</strong> - instant medical
                consultations in your language
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">
                Universal accessibility - works on any phone, anywhere in Uganda
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-teal-600" />
              <span className="text-gray-700 font-medium">
                Connected to 1000+ providers
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="https://mediloop.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium text-center mb-2 sm:mb-0"
            >
              Visit mediloop.co
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link
              href="mailto:info@mediloop.co"
              className="inline-block border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-md font-medium text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
