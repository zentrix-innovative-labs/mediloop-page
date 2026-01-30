import { Brain, Database, Zap, TrendingUp, Shield, Cpu } from 'lucide-react'

export default function AICapabilitiesSection() {
  const capabilities = [
    {
      icon: Brain,
      title: "II-Medical-8B Model",
      metric: "87.82% MedQA Accuracy",
      description: "State-of-the-art medical AI model trained on comprehensive medical knowledge, outperforming MedGemma with 40% HealthBench score at GPT-4.5 level.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Database,
      title: "RAG with Qdrant",
      metric: "1024-dimension Vectors",
      description: "Retrieval-Augmented Generation using Qwen3-Embedding-0.6B for medical document embeddings and patient timeline context retrieval.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "vLLM Inference",
      metric: "2-5 tokens/second",
      description: "Optimized batch processing with vLLM server on GPU (g4dn.2xlarge) for fast, reliable medical inference with 20K input/8K output token context.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Clinical Decision Support",
      metric: "10+ Differential Diagnoses",
      description: "AI-powered diagnosis engine analyzes symptoms with patient context to provide ranked differential diagnoses with confidence scores and red flag detection.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Patient Timeline Context",
      metric: "6-month History Priority",
      description: "Real-time sync with FHIR encounters, smart retrieval with recency scoring, and intelligent caching for longitudinal patient memory.",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Cpu,
      title: "Blue-Green Deployment",
      metric: "Zero Downtime",
      description: "Production-grade deployment with automated health checks, endpoint testing, and instant rollback capability at ai.mediloop.co",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-medium uppercase tracking-wide text-sm mb-4">
            MEDICAL AI PLATFORM
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Production-Grade AI Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced medical AI models, RAG-powered insights, and clinical decision support 
            running on enterprise infrastructure with 99.9% uptime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`${capability.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow`}
            >
              <div className={`w-12 h-12 ${capability.color} mb-6`}>
                <capability.icon className="w-full h-full" />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {capability.title}
                </h3>
                <div className={`inline-block ${capability.color} bg-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {capability.metric}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-teal-400 font-semibold mb-2">Model Architecture</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• II-Medical-8B (Qwen3-8B base)</li>
                <li>• 4-bit NF4 quantization</li>
                <li>• SFT + DAPO reinforcement learning</li>
                <li>• Apache 2.0 license</li>
              </ul>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold mb-2">Infrastructure</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS g4dn.2xlarge GPU instance</li>
                <li>• NVIDIA T4 (16GB VRAM)</li>
                <li>• Blue-green deployment</li>
                <li>• PostgreSQL + Redis + Qdrant</li>
              </ul>
            </div>
            <div>
              <h4 className="text-teal-400 font-semibold mb-2">Performance</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 87.82% MedQA accuracy</li>
                <li>• 40% HealthBench score</li>
                <li>• 2-5 tokens/second inference</li>
                <li>• 20K input / 8K output tokens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
