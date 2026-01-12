export default function SecuritySection() {
  const securityFeatures = [
    "Bank-level encryption keeps your data safe",
    "You control who sees your medical information",
    "Approved by Ugandan health authorities",
    "Your data never leaves Uganda",
    "Regular security checks and updates",
    "24/7 monitoring and support"
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Your Health Data is Safe With Us
              </h2>

              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-teal-900 font-bold text-sm">
                      ✓
                    </div>
                    <span className="text-teal-100">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-teal-400">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-teal-200 text-sm mb-1">Trusted by</div>
                    <div className="text-white font-bold">1000+ Providers</div>
                  </div>
                  <div>
                    <div className="text-teal-200 text-sm mb-1">Patients served</div>
                    <div className="text-white font-bold">50,000+</div>
                  </div>
                  <div>
                    <div className="text-teal-200 text-sm mb-1">Available</div>
                    <div className="text-white font-bold">24/7</div>
                  </div>
                  <div>
                    <div className="text-teal-200 text-sm mb-1">Support</div>
                    <div className="text-white font-bold">Free</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="/about" className="text-teal-200 hover:text-white">
                  About Mediloop →
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-teal-700 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-teal-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
