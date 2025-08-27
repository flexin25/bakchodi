"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [shouldShowCursor, setShouldShowCursor] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const hasHover = window.matchMedia("(hover: hover)").matches
    setShouldShowCursor(hasHover)

    if (!hasHover) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!shouldShowCursor) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      />

      {/* Cursor trail */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9998] transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  )
}
