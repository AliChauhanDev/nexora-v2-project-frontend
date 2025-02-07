"use client"

import { Brain, Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Models", href: "/models" },
  { name: "Architecture", href: "/architecture" },
  { name: "Team", href: "/team" },
  { name: "Testimonials", href: "/testimonials" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-sm bg-background/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Brain className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Nexora Gen AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:block">
              <Button>Get Started</Button>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                        <Brain className="h-8 w-8" />
                        <span className="ml-2 text-xl font-bold">Nexora Gen AI</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                            pathname === item.href
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Button className="mt-4">Get Started</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}