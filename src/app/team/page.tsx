import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Team Page
 * Meet the Mediloop team driving Uganda's digital health revolution.
 */

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Sarah Nakato",
      role: "CEO & Co-Founder",
      bio: "Former Ministry of Health advisor with 15+ years in healthcare policy and digital transformation.",
      image: "👩‍⚕️",
    },
    {
      name: "James Okello",
      role: "CTO & Co-Founder",
      bio: "Tech entrepreneur with experience in healthcare software and secure data systems.",
      image: "👨‍💻",
    },
    {
      name: "Dr. Maria Ssali",
      role: "Chief Medical Officer",
      bio: "Board-certified physician specializing in digital health implementation and patient care.",
      image: "👩‍⚕️",
    },
    {
      name: "David Mugisha",
      role: "Head of Product",
      bio: "Product leader focused on user-centered design and healthcare accessibility.",
      image: "👨‍💼",
    },
    {
      name: "Grace Auma",
      role: "VP of Operations",
      bio: "Operations expert with experience in scaling healthcare services across East Africa.",
      image: "👩‍💼",
    },
    {
      name: "Dr. Robert Ssekitoleko",
      role: "Head of Clinical Integration",
      bio: "Medical informatics specialist ensuring seamless integration with healthcare providers.",
      image: "👨‍⚕️",
    },
  ];

  const advisors = [
    {
      name: "Prof. Anne Akol",
      role: "Healthcare Policy Advisor",
      affiliation: "Makerere University",
    },
    {
      name: "Michael Brown",
      role: "Technology Advisor",
      affiliation: "Silicon Valley Health Tech",
    },
    {
      name: "Dr. Jennifer Nambozo",
      role: "Clinical Advisor",
      affiliation: "Uganda Medical Association",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Meet the passionate team behind Mediloop, committed to transforming
            healthcare in Uganda through innovation and collaboration.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Advisory Board
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{advisor.name}</h3>
                <p className="text-teal-600 font-semibold text-sm mb-2">
                  {advisor.role}
                </p>
                <p className="text-gray-700 text-sm">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8">
            Help us build Uganda's digital health infrastructure and empower
            millions.
          </p>
          <Link
            href="/careers"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Open Positions
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
