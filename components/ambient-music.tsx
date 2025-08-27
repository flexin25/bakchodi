"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

export function AmbientMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Create audio element for ambient background music
    const audio = new Audio()
    audio.loop = true
    audio.volume = volume
    // Using a placeholder for ambient music - in real implementation, you'd use actual audio files
    audio.src = "/ambient-music.mp3" // This would be your actual ambient music file
    audioRef.current = audio

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [volume])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented by browser")
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleMusic}
        size="sm"
        variant="outline"
        className="glass-card hover:bg-primary/10 transition-all duration-300 group bg-transparent"
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <VolumeX className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        )}
        <span className="sr-only">Toggle ambient music</span>
      </Button>
    </div>
  )
}
