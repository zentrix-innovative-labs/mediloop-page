export default function RoadmapSection() {
  const phases = [
    {
      title: "Current: Production Services",
      description:
        "Auth Service (Keycloak), AI Service (II-Medical-8B), WhatsApp Service, FHIR Server (HAPI FHIR), API Gateway (Kong), UHID & Provider Services operational.",
      icon: "✅",
      status: "Live",
    },
    {
      title: "Phase 1C: FHIR Enhancement",
      description:
        "Complete FHIR-first reads (60% utilization), Encounter Service, full UHID-FHIR integration, Terminology Service expansion, Care Coordination complete.",
      icon: "🔄",
      status: "In Progress",
    },
    {
      title: "Phase 2: Healthcare Services",
      description:
        "Pharmacy Service, Lab Service (LIS), Imaging Service, Billing & Claims, Mobile Money integration (MTN, Airtel), Patient & Provider portals launch.",
      icon: "🏥",
      status: "Month 2",
    },
    {
      title: "Phase 3: National Scale",
      description:
        "MOH eMIS integration, Event-driven architecture (Kafka), Disaster recovery, Analytics platform, Developer ecosystem, 90%+ FHIR utilization.",
      icon: "🚀",
      status: "Month 3+",
    },
  ];

  const serviceRoadmap = [
    {
      title: "Core Services",
      timeline: "Live",
      items: [
        "✅ Auth Service (Keycloak)",
        "✅ AI Service (II-Medical-8B)",
        "✅ WhatsApp Service",
        "✅ FHIR Server (HAPI FHIR)",
        "✅ API Gateway (Kong)",
        "⚠️ UHID Service (35%)",
        "⚠️ Provider Service (35%)",
      ],
    },
    {
      title: "Clinical Services",
      timeline: "Q1 2026",
      items: [
        "🔄 Encounter Service",
        "🔄 Care Coordination",
        "🔄 Appointment Service",
        "📅 Lab Service (LIS)",
        "📅 Pharmacy Service",
        "📅 Imaging Service",
        "📅 Prescription Service",
      ],
    },
    {
      title: "Platform Services",
      timeline: "Q2 2026",
      items: [
        "📅 Billing & Claims",
        "📅 Consent Management",
        "📅 Notification Service",
        "📅 Analytics Platform",
        "📅 Audit Trail",
        "📅 Document Service",
        "📅 Terminology Service",
      ],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            SERVICE ARCHITECTURE & ROADMAP
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            23 Microservices. One Unified Platform.
          </h2>
          <p className="text-xl text-gray-600">
            FHIR-first architecture with production services live and complete
            healthcare ecosystem launching in phases
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{phase.icon}</div>
                <span className="text-sm font-semibold text-teal-700 bg-white px-3 py-1 rounded-full">
                  {phase.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {serviceRoadmap.map((section, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">
                {section.title}{" "}
                <span className="text-gray-500 font-normal">
                  ({section.timeline})
                </span>
              </h4>

              <ul className="space-y-2 text-sm text-gray-600">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
