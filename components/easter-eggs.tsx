"use client"

import { useEffect, useState } from "react"
import { Crown, Plane } from "lucide-react"

export function EasterEggs() {
  const [showKnight, setShowKnight] = useState(false)
  const [showPlane, setShowPlane] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    setWindowWidth(window.innerWidth)

    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (window.scrollY > 100) {
        setShowPlane(true)
        setTimeout(() => setShowPlane(false), 2000)
      }
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "K") {
        setShowKnight(true)
        setTimeout(() => setShowKnight(false), 3000)
      }
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyPress)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyPress)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      {showKnight && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="animate-bounce">
            <Crown className="h-16 w-16 text-primary glow-effect" />
          </div>
          <div className="text-center mt-2 text-primary font-bold text-sm">Knight's Move!</div>
        </div>
      )}

      {showPlane && (
        <div
          className="fixed top-20 z-40 pointer-events-none transition-all duration-2000 ease-out"
          style={{
            left: `${Math.min(scrollY / 10, windowWidth)}px`,
            transform: `translateY(${Math.sin(scrollY / 100) * 20}px)`,
          }}
        >
          <Plane className="h-8 w-8 text-secondary rotate-45 glow-effect" />
        </div>
      )}

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              transform: `translateY(${Math.sin(scrollY / 200 + i) * 30}px) rotate(${scrollY / 10 + i * 45}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <Crown className="h-12 w-12 text-primary/20" />
          </div>
        ))}
      </div>
    </>
  )
}
