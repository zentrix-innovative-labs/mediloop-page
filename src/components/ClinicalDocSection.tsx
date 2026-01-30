const data = [
  {
    title: "Complete Patient History",
    details: [
      "✓ All previous visits & diagnoses",
      "✓ Current and past medications",
      "✓ Lab results & test history",
      "✓ Allergies & contraindications",
      "✓ Vaccination records",
      "✓ Family medical history",
    ],
  },
  {
    title: "AI Clinical Assistant",
    details: [
      "✓ Diagnostic suggestions",
      "✓ Drug interaction warnings",
      "✓ Treatment recommendations",
      "✓ Auto-generated notes",
      "✓ Coding assistance",
      "✓ Clinical guidelines",
    ],
  },
  {
    title: "Streamlined Workflows",
    details: [
      "✓ Digital prescriptions",
      "✓ Lab order integration",
      "✓ Referral management",
      "✓ Billing automation",
      "✓ Insurance claims",
      "✓ Mobile access",
    ],
  },
];

export default function ClinicalDocSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            For Healthcare Providers
            <br />
            <span className="text-gray-600">
              See the complete patient story, instantly
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access complete patient histories in seconds. Less paperwork, more
            time for care. Mediloop connects you to every patient's health
            records across Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {data.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-teal-600 font-bold text-lg mb-4">
                {item.title}
              </div>

              <ul className="space-y-2 text-sm text-gray-600">
                {item.details.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-teal-600 to-green-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-green-700"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">Doctor's View</h3>
                  <p className="text-teal-100">
                    All patient information in one place
                  </p>
                </div>
              </div>
              <div className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="text-xs font-bold text-gray-700 mb-2">
                  Patient: Sarah Namukasa
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  Last visit: 2 weeks ago
                </div>
                <div className="h-2 bg-teal-200 rounded mb-2"></div>
                <div className="h-2 bg-teal-200 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-teal-200 rounded w-1/2"></div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="text-xs font-bold text-gray-700 mb-2">
                  ⚠️ Alert
                </div>
                <div className="text-xs text-gray-600">
                  Allergic to Penicillin
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
