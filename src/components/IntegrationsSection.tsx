import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img
            src="/uganda-health-insurance-logo.png"
            alt="Uganda Health Insurance"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <img
            src="/mtn-mobile-money-logo.png"
            alt="MTN Mobile Money"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <img
            src="/airtel-money-logo.png"
            alt="Airtel Money"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <img
            src="/safeboda-logo.png"
            alt="SafeBoda Logistics"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <img
            src="/joint-medical-store-logo.png"
            alt="Joint Medical Store"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
          <img
            src="/uganda-national-id-logo.png"
            alt="Uganda National ID"
            className="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://mediloop.co/integrations"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all Uganda integrations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
