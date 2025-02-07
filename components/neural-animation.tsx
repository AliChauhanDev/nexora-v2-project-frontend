"use client"

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function NeuralAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isDark = theme === 'dark'

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 20000))
    const connectionDistance = Math.min(150, canvas.width * 0.15)
    
    const colors = isDark ? [
      'rgb(96, 165, 250)', // Blue
      'rgb(52, 211, 153)', // Green
      'rgb(251, 146, 60)', // Orange
      'rgb(167, 139, 250)', // Purple
      'rgb(249, 168, 212)', // Pink
    ] : [
      'rgb(37, 99, 235)', // Blue
      'rgb(5, 150, 105)', // Green
      'rgb(234, 88, 12)', // Orange
      'rgb(109, 40, 217)', // Purple
      'rgb(219, 39, 119)', // Pink
    ]

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      baseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSpeed = 0.5
        this.vx = (Math.random() - 0.5) * this.baseSpeed
        this.vy = (Math.random() - 0.5) * this.baseSpeed
        this.size = Math.random() * 2 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Add slight random movement
        this.vx += (Math.random() - 0.5) * 0.1
        this.vy += (Math.random() - 0.5) * 0.1

        // Limit speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
        if (speed > this.baseSpeed) {
          this.vx = (this.vx / speed) * this.baseSpeed
          this.vy = (this.vy / speed) * this.baseSpeed
        }

        this.x += this.vx
        this.y += this.vy

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()

        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance && distance > 0) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y
            )
            gradient.addColorStop(0, particle.color)
            gradient.addColorStop(1, otherParticle.color)
            ctx.strokeStyle = gradient
            ctx.globalAlpha = (1 - distance/connectionDistance) * 0.5
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full opacity-30"
    />
  )
}