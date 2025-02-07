import { Card } from "@/components/ui/card"
import { Brain, Code, Image, MessageSquare } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const models = [
  {
    name: "NexoraGPT",
    description: "Advanced language model for natural conversations and complex text generation",
    icon: MessageSquare,
    features: ["Context understanding", "Multiple languages", "Code generation", "Creative writing"],
    useCase: "Perfect for chatbots, content creation, and language translation",
    link: "/chat/login"
  },
  {
    name: "NexoraVision",
    description: "State-of-the-art computer vision model for image analysis and generation",
    icon: Image,
    features: ["Object detection", "Image generation", "Scene understanding", "Visual QA"],
    useCase: "Ideal for image processing, medical imaging, and autonomous systems",
    comingSoon: true
  },
  {
    name: "NexoraCode",
    description: "Specialized coding assistant with deep programming knowledge",
    icon: Code,
    features: ["Code completion", "Bug detection", "Refactoring", "Documentation"],
    useCase: "Enhanced developer productivity and code quality",
    comingSoon: true
  },
  {
    name: "NexoraBrain",
    description: "Multi-modal AI system combining language, vision, and reasoning",
    icon: Brain,
    features: ["Cross-modal learning", "Reasoning", "Problem solving", "Knowledge synthesis"],
    useCase: "Complex problem solving and research assistance",
    comingSoon: true
  }
]

export default function ModelsPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI Models
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Discover our suite of advanced AI models, each designed to tackle specific challenges
              and deliver exceptional results across various domains.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((model) => (
              <Card key={model.name} className="p-6 backdrop-blur-sm bg-background/80 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-x-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <model.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{model.name}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {model.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  {model.useCase}
                </p>
                <div className="mt-6">
                  {model.link ? (
                    <Button asChild className="w-full">
                      <Link href={model.link}>Try Now</Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full">Coming Soon</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}