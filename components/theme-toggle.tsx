"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 h-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 hover:bg-primary/20 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-primary hover:text-glow transition-all" />
      ) : (
        <Moon className="h-4 w-4 text-primary hover:text-glow transition-all" />
      )}
    </Button>
  )
}
