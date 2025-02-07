import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Code, Database, Palette, Brain } from "lucide-react"
import NeuralAnimation from "@/components/neural-animation"
import Link from "next/link"

const team = [
  {
    name: "SK Sayril Ahmed",
    role: "AI Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Expert in artificial intelligence and machine learning systems",
    icon: Brain,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Ali Chauhan",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Specialist in database architecture and backend systems",
    icon: Database,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Vaibhav Rajput",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Expert in creating responsive and intuitive user interfaces",
    icon: Code,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Khushi Shah",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&crop=face",
    bio: "Creative designer focused on user experience and interface design",
    icon: Palette,
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
]

export default function TeamPage() {
  return (
    <div className="relative min-h-screen">
      <NeuralAnimation />
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Meet the brilliant minds behind Nexora Gen AI, bringing together expertise
              in AI, engineering, design, and development.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <Card key={member.name} className="p-6 backdrop-blur-sm bg-background/80 hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-x-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <member.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-6 flex gap-4">
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={member.social.github} className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}