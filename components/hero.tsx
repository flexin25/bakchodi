"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, Crown } from "lucide-react"
import Link from "next/link"
import { ThreeBackground } from "@/components/three-background"
import { ParallaxSection } from "@/components/parallax-section"
import { TextReveal } from "@/components/text-reveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-background/70" />

      {/* Content with Parallax */}
      <ParallaxSection speed={0.3} className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating icons */}
        <TextReveal className="flex justify-center items-center space-x-8 mb-8">
          <div className="relative">
            <Compass className="h-12 w-12 text-primary float-animation" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg pulse-neon" />
          </div>
          <div className="text-4xl font-bold text-muted-foreground">×</div>
          <div className="relative">
            <Crown className="h-12 w-12 text-secondary float-animation" style={{ animationDelay: "1s" }} />
            <div
              className="absolute inset-0 bg-secondary/20 rounded-full blur-lg pulse-neon"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </TextReveal>

        {/* Main heading */}
        <TextReveal delay={200}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Abhishek Bardhan
            </span>
          </h1>
        </TextReveal>

        {/* Subtitle */}
        <TextReveal delay={400}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance">
            Exploring the world, one move at a time
          </p>
        </TextReveal>

        {/* Description */}
        <TextReveal delay={600}>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Join me on a journey through solo travel adventures and strategic chess insights. Discover hidden
            destinations, master chess tactics, and embrace the art of independent exploration.
          </p>
        </TextReveal>

        {/* CTA buttons */}
        <TextReveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group glow-effect">
              <Link href="/blog">
                Start Reading
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group bg-transparent">
              <Link href="/about">
                About Me
                <Compass className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </TextReveal>
      </ParallaxSection>
    </section>
  )
}
