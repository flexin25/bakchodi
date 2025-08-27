"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fadeInUp", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    observer.observe(element)

    return () => observer.unobserve(element)
  }, [delay])

  const animationClasses = {
    fadeInUp: "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    fadeInLeft: "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
    fadeInRight: "opacity-0 translate-x-8 transition-all duration-700 ease-out",
    scaleIn: "opacity-0 scale-95 transition-all duration-700 ease-out",
    slideInUp: "opacity-0 translate-y-12 transition-all duration-700 ease-out",
  }

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={
        {
          "--animate-in": "opacity-100 translate-y-0 translate-x-0 scale-100",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
