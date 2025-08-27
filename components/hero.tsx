"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        const x = (clientX / innerWidth - 0.5) * 20
        const y = (clientY / innerHeight - 0.5) * 20

        heroRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={heroRef} className="text-center z-10 max-w-4xl mx-auto px-4 transition-transform duration-100">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow floating">Abhishek Bardhan</h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          B.Tech Data Science Student • Chess Enthusiast • Music Lover
        </p>
        <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto">
          Welcome to my digital space where I share my thoughts on chess strategies, music discoveries, and life
          experiences from the heart of the hills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="glow hover:pulse-glow transition-all duration-300">
            <Link href="/blog">Explore My Blog</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass hover:glow transition-all duration-300 bg-transparent"
          >
            <Link href="/about">About Me</Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com/flexin25"
            target="_blank"
            className="text-muted-foreground hover:text-primary hover:text-glow transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://twitter.com/1mflexin_"
            target="_blank"
            className="text-muted-foreground hover:text-primary hover:text-glow transition-all duration-300 hover:scale-110"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="https://instagram.com/flexin25_"
            target="_blank"
            className="text-muted-foreground hover:text-primary hover:text-glow transition-all duration-300 hover:scale-110"
          >
            <Instagram size={24} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary text-glow" size={32} />
      </div>
    </section>
  )
}
