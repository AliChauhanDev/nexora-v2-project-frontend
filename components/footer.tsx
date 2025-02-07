import { Brain } from "lucide-react"
import Link from "next/link"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center">
            <Brain className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Nexora Gen AI</span>
          </Link>
        </div>
        <nav className="mt-8 flex justify-center space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Nexora Gen AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}