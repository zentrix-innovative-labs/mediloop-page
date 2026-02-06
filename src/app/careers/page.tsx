import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

/**
 * Careers Page
 * Join the Mediloop team and help build Uganda's digital health infrastructure.
 */

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Kampala, Uganda",
      type: "Full-time",
    },
    {
      title: "Healthcare Product Manager",
      department: "Product",
      location: "Kampala, Uganda",
      type: "Full-time",
    },
    {
      title: "Data Privacy Officer",
      department: "Legal & Compliance",
      location: "Kampala, Uganda",
      type: "Full-time",
    },
    {
      title: "Clinical Integration Specialist",
      department: "Healthcare",
      location: "Kampala, Uganda",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Kampala, Uganda",
      type: "Full-time",
    },
  ];

  const whyJoinMediloop = [
    {
      icon: "🚀",
      title: "Impactful Work",
      description:
        "Build technology that transforms healthcare for millions of Ugandans.",
      bgColor: "bg-teal-100",
    },
    {
      icon: "🌍",
      title: "Global Scale, Local Focus",
      description:
        "Work on cutting-edge tech while making a difference in Uganda.",
      bgColor: "bg-teal-200",
    },
    {
      icon: "👥",
      title: "Great Team",
      description: "Join a passionate team of healthcare and tech experts.",
      bgColor: "bg-teal-300",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Careers at Mediloop
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us in our mission to digitalise healthcare and empower every
            Ugandan with control over their health data.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Join Mediloop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyJoinMediloop.map((item, idx) => (
              <div
                key={idx}
                className="text-center shadow-sm shadow-[0_6px_15px_rgba(0,0,0,0.2)] hover:shadow-lg hover:shadow-[0_6px_15px_rgba(0,0,0,0.5)] rounded-xl p-6 transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm shadow-[0_6px_15px_rgba(0,0,0,0.2)] hover:shadow-lg hover:shadow-[0_6px_15px_rgba(0,0,0,0.5)] rounded-xl p-6 transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="text-gray-600 mb-4">
                  <p>
                    {job.department} • {job.location}
                  </p>
                  <p className="text-teal-600 font-medium">{job.type}</p>
                </div>
                <button className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-xl mb-8">
            We're always looking for talented people to join our mission.
          </p>
          <Link
            href="/contact"
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Send Us Your Resume
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
