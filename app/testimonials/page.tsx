import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"

const testimonials = [
  {
    content: "Nexora Gen AI has transformed our business operations. The accuracy and speed of their models are unmatched in the industry.",
    author: "Emma Thompson",
    role: "CTO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "The level of innovation and technical expertise at Nexora is impressive. Their AI solutions have helped us achieve unprecedented results.",
    author: "James Wilson",
    role: "Director of AI, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "Working with Nexora Gen AI has been a game-changer. Their models are not only powerful but also incredibly easy to integrate.",
    author: "Dr. Lisa Chen",
    role: "Head of Research, DataSphere",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "The accuracy and reliability of Nexora's AI models have exceeded our expectations. They're setting new standards in the industry.",
    author: "Michael Brown",
    role: "CEO, AI Solutions Inc",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "Nexora Gen AI's support team is exceptional. They've been instrumental in helping us implement complex AI solutions.",
    author: "Sarah Martinez",
    role: "ML Engineer, FutureTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face"
  },
  {
    content: "The performance improvements we've seen with Nexora's models are remarkable. They're truly pushing the boundaries of what's possible.",
    author: "David Park",
    role: "VP of Engineering, NextGen Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Hear from our clients about their experiences with Nexora Gen AI
              and how our solutions have transformed their businesses.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="p-6 backdrop-blur-sm bg-background/80">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg">
                  "{testimonial.content}"
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}