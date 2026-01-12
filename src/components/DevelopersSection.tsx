import { Code, Zap, Shield, Book } from 'lucide-react'

export default function DevelopersSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            FOR DEVELOPERS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Build Healthcare Apps Without the Infrastructure Headache
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all the complex infrastructure - authentication, patient records, FHIR compliance, 
            security, and data management. You focus on building great medical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Complete APIs
            </h3>
            <p className="text-gray-600 text-sm">
              Patient records, appointments, prescriptions, lab results, and more. Everything you need in one place.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Build Fast
            </h3>
            <p className="text-gray-600 text-sm">
              EMR vendors, clinic apps, telemedicine platforms - go from idea to production in weeks, not months.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Secure & Compliant
            </h3>
            <p className="text-gray-600 text-sm">
              We handle security, compliance, and data protection. Your apps are secure by default.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Full Documentation
            </h3>
            <p className="text-gray-600 text-sm">
              Comprehensive API docs, code examples, SDKs, and support to get you started quickly.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Build on Mediloop?
          </h3>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Join the platform powering Uganda's healthcare transformation. Build EMR systems, 
            clinic management apps, telemedicine platforms, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://developers.mediloop.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-teal-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
            >
              Developer Portal
            </a>
            <a
              href="https://docs.mediloop.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-teal-900 px-8 py-3 rounded-lg font-medium"
            >
              API Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
