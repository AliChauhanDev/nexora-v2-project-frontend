import { Card } from "@/components/ui/card"
import { ArrowRight, Database, Network, Server, Workflow } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"

const architectureSteps = [
  {
    name: "Data Processing",
    description: "High-performance data ingestion and preprocessing pipeline",
    icon: Database,
    details: [
      "Distributed data processing",
      "Real-time stream processing",
      "Advanced data cleaning",
      "Efficient storage optimization"
    ]
  },
  {
    name: "Neural Networks",
    description: "Multi-layered neural architecture with specialized components",
    icon: Network,
    details: [
      "Transformer architecture",
      "Attention mechanisms",
      "Custom activation functions",
      "Optimized weight distribution"
    ]
  },
  {
    name: "Inference Engine",
    description: "High-throughput model serving infrastructure",
    icon: Server,
    details: [
      "Load balancing",
      "Auto-scaling",
      "Low-latency inference",
      "Resource optimization"
    ]
  },
  {
    name: "Workflow Integration",
    description: "Seamless integration with existing systems and workflows",
    icon: Workflow,
    details: [
      "API endpoints",
      "Event streaming",
      "Monitoring & logging",
      "Error handling"
    ]
  }
]

export default function ArchitecturePage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              System Architecture
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Explore the advanced architecture behind our AI systems, designed for
              scalability, performance, and reliability.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {architectureSteps.map((step, index) => (
                <div key={step.name} className="relative">
                  <Card className="p-6 backdrop-blur-sm bg-background/80">
                    <div className="flex items-center gap-x-3">
                      <step.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold">{step.name}</h3>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Card>
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}