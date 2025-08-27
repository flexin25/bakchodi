"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(rate)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
        }}
        className="transition-transform duration-75 ease-out"
      >
        {children}
      </div>
    </div>
  )
}
