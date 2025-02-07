import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Cpu, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NeuralAnimation from "@/components/neural-animation"

const features = [
  {
    name: "Advanced AI Models",
    description: "State-of-the-art language models trained on diverse datasets",
    icon: Brain,
  },
  {
    name: "Lightning Fast",
    description: "Optimized for speed with minimal latency",
    icon: Zap,
  },
  {
    name: "Secure by Design",
    description: "Enterprise-grade security and data protection",
    icon: Shield,
  },
  {
    name: "Custom Solutions",
    description: "Tailored AI solutions for your specific needs",
    icon: Cpu,
  },
]

export default function Home() {
  return (
    <div className="relative">
      <NeuralAnimation />
      
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Next Generation AI for the Modern World
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Harness the power of advanced artificial intelligence with Nexora Gen AI.
              Our cutting-edge models deliver unprecedented accuracy and performance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/models">
                  Explore Models <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Advanced Technology
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to power your AI applications
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              From natural language processing to computer vision, our suite of AI models
              provides the tools you need to build the next generation of applications.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                    <feature.icon
                      className="h-5 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}