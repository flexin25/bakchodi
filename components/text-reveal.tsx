"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? "transform translate-y-0 opacity-100" : "transform translate-y-8 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
}
