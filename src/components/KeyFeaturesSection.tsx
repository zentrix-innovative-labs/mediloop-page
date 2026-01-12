import { MessageCircle, Smartphone, Users, Shield, Zap, Globe } from 'lucide-react'

export default function KeyFeaturesSection() {
  const features = [
    {
      icon: MessageCircle,
      title: "Free Medical Advice on WhatsApp",
      description: "Get instant answers to your health questions through WhatsApp. No app download, no waiting rooms. Just message us your symptoms and get reliable medical guidance immediately.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Smartphone,
      title: "One Health ID for Life",
      description: "Never lose your medical records again. Your Universal Health ID keeps everything in one place - test results, prescriptions, doctor visits - accessible from any hospital or clinic.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Book Doctors & Get Medicine",
      description: "Book appointments with verified doctors, get prescriptions delivered to your door, and order lab tests - all from your phone. Healthcare made simple.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      title: "Your Data, Your Control",
      description: "You decide who sees your medical information. Bank-level security keeps your health data safe. No one can access it without your permission.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Zap,
      title: "Save Time & Money",
      description: "No more repeat tests when you change hospitals. No more lost prescriptions. Your complete medical history travels with you, saving you time and money.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      title: "Works Anywhere in Uganda",
      description: "From Kampala to the villages. Whether you're at Mulago Hospital or a rural health center, your health records are always available.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            OUR KILLER FEATURES
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Healthcare That Works For You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and secure. Get the care you need, when you need it, from anywhere in Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}
            >
              <div className={`w-12 h-12 ${feature.color} mb-6`}>
                <feature.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp Demo */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Try It Now on WhatsApp
              </h3>
              <p className="text-gray-700 mb-6">
                Send us a message on WhatsApp with your health question. Get instant, 
                reliable medical advice - completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/256775035244?text=Hello%20Mediloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start WhatsApp Chat
                </a>
                <button className="inline-flex items-center border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium">
                  Watch Demo Video
                </button>
              </div>
            </div>

            {/* Mock WhatsApp Interface */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  <span className="font-medium">Mediloop AI Assistant</span>
                </div>
              </div>
              <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Hello! I'm Mediloop's AI assistant. How can I help you today?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-green-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">I have a persistent cough and fever</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Based on your symptoms, this could be respiratory infection. Please consult a healthcare provider for proper diagnosis. Would you like me to connect you to a nearby clinic?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your symptoms..."
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}