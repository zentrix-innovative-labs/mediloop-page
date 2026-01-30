import { Award } from "lucide-react";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    {
      name: "Uganda Ministry of Health",
      alt: "Uganda Ministry of Health",
      image: "/ministry_of_health.png",
    },
    {
      name: "Mulago National Referral Hospital",
      alt: "Mulago National Referral Hospital",
      image: "/mulago.png",
    },
    {
      name: "NSSF Uganda",
      alt: "NSSF Uganda",
      image: "/nssf.png",
    },
    {
      name: "Joint Medical Store",
      alt: "Joint Medical Store",
      image: "/JMS_logo.png",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">
              Trusted Healthcare Partnerships
            </p>
          </div>
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium uppercase tracking-wide text-sm mb-6">
              PARTNERED WITH UGANDA'S LEADING HEALTH INSTITUTIONS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-teal-50 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-40">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity"
                />
              </div>

              <div className="px-6 py-4 bg-gradient-to-br from-teal-50 to-cyan-50 border-t border-teal-100">
                <p className="text-center text-lg font-semibold text-gray-800">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
