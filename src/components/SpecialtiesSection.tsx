import { Activity } from "lucide-react";
import Image from "next/image";

export default function SpecialtiesSection() {
  const specialties = [
    "Infectious Diseases (HIV, TB, Malaria)",
    "Maternal & Child Health",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "Family Medicine",
    "General Medicine",
    "Non-Communicable Diseases (Diabetes, Hypertension)",
    "Emergency Medicine",
    "Surgery",
    "Mental Health",
    "Community Health",
    "Immunization",
    "Nutrition",
    "Eye & Dental Care",
    "and 30+ more relevant to Uganda",
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Linkctivity className="w-4 h-4 text-teal-600" />
              <p className="text-teal-600 font-bold uppercase tracking-wide text-sm">
                Comprehensive Medical Coverage
              </p>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">
                40+ specialties
              </span>{" "}
              for Uganda's health needs
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From infectious diseases to maternal care, mental health to
              emergency medicine - Mediloop's AI is trained to support Uganda's
              most critical healthcare priorities.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/med_tools.jpg"
              height={600}
              width={800}
              alt="Healthcare professional/"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
