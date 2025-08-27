"use client"

import { useEffect, useState } from "react"

export default function EasterEggs() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    if (typeof window === "undefined") return

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      if (scrollPercent > 0.5 && scrollPercent < 0.6) {
        // Flying plane animation
        const plane = document.createElement("div")
        plane.innerHTML = "✈️"
        plane.style.cssText = `
          position: fixed;
          top: 20%;
          left: -50px;
          font-size: 24px;
          z-index: 1000;
          animation: fly 3s linear forwards;
          pointer-events: none;
        `

        const style = document.createElement("style")
        style.textContent = `
          @keyframes fly {
            to { left: calc(100vw + 50px); }
          }
        `
        document.head.appendChild(style)
        document.body.appendChild(plane)

        setTimeout(() => {
          document.body.removeChild(plane)
          document.head.removeChild(style)
        }, 3000)
      }
    }

    let ticking = false
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  if (!isMounted) return null

  return null
}
