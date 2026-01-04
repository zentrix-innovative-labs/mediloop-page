export default function RoadmapSection() {
  const features = [
    {
      title: "Phase 1: National Foundation (2025)",
      description:
        "UHID rollout for every Ugandan citizen, AI diagnostics via WhatsApp, and launch with 100+ clinics, hospitals, and pharmacies.",
      icon: "🇺🇬",
    },
    {
      title: "Phase 2: Expansion & Analytics (2026)",
      description:
        "Advanced AI for more conditions and languages, government analytics, and expansion to all major regions in Uganda.",
      icon: "📈",
    },
    {
      title: "Phase 3: Scale & Innovation (2027+)",
      description:
        "Full national coverage, mobile apps for patients and providers, and secure, anonymized health data platform for research.",
      icon: "🚀",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            UGANDA LAUNCH ROADMAP
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Building Uganda's Digital Health Future
          </h2>
          <p className="text-xl text-gray-600">
            See how Mediloop is rolling out secure, AI-powered healthcare for
            all Ugandans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>

              {/* Mock interface preview */}
              <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                <div className="h-20 bg-gradient-to-br from-purple-100 to-teal-100 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-teal-600 hover:text-teal-700 font-medium">
            Contact us →
          </button>
        </div>
      </div>
    </section>
  );
}
