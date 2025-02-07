import { Card } from "@/components/ui/card"
import NeuralAnimation from "@/components/neural-animation"
import { Brain, MessageSquare, Sparkles } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              NexoraGPT Dashboard
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Our advanced chat models are currently in development. Stay tuned for the next generation of AI conversation.
            </p>
          </div>

          <div className="mt-16">
            <Card className="p-8 backdrop-blur-sm bg-background/80">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Brain className="h-12 w-12 text-primary" />
                <MessageSquare className="h-12 w-12 text-primary" />
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Coming Soon</h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                We're working hard to bring you the most advanced AI chat experience. Our models are being fine-tuned for optimal performance and natural conversation flow.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}