"use client"

import { useEffect, useState } from "react"

export function EnhancedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
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
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.matches("button, a, [role='button'], .cursor-pointer")) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = () => setIsHovering(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [])

  if (!shouldShowCursor) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isClicking ? "scale-75" : "scale-100"} ${isHovering ? "scale-150" : ""}`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
        }}
      >
        <div
          className={`w-4 h-4 rounded-full transition-all duration-150 ${isHovering ? "bg-secondary" : "bg-primary"}`}
        />
      </div>

      {/* Cursor trail */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "scale-125" : "scale-100"}`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      >
        <div
          className={`w-8 h-8 border-2 rounded-full transition-all duration-300 ${
            isHovering ? "border-secondary/50" : "border-primary/50"
          }`}
        />
      </div>

      {/* Outer glow */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-500 ${
          isVisible ? "opacity-30" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full blur-md transition-all duration-500 ${
            isHovering ? "bg-secondary/30" : "bg-primary/30"
          }`}
        />
      </div>
    </>
  )
}
