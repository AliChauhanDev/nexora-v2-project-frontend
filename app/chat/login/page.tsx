"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NeuralAnimation from "@/components/neural-animation"
import { Brain } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const username = formData.get("username")
    const password = formData.get("password")

    if (username === "admin" && password === "admin") {
      router.push("/chat/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <NeuralAnimation />
      <Card className="w-full max-w-md mx-4 p-6 backdrop-blur-sm bg-background/80">
        <div className="flex flex-col items-center mb-8">
          <Brain className="h-12 w-12 text-primary mb-4" />
          <h1 className="text-2xl font-bold">Welcome to NexoraGPT</h1>
          <p className="text-sm text-muted-foreground mt-2">Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  )
}