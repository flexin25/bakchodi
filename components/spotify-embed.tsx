"use client"

import { ExternalLink, Music, Play } from "lucide-react"
import Link from "next/link"

interface SpotifyEmbedProps {
  playlistUrl: string
  title?: string
  description?: string
}

export function SpotifyEmbed({
  playlistUrl,
  title = "My Playlist",
  description = "Check out my music taste",
}: SpotifyEmbedProps) {
  return (
    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-green-500">
      <div className="flex items-start space-x-4">
        {/* Spotify Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <Music className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm font-medium text-green-500">Spotify</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span className="text-sm text-muted-foreground">Playlist</span>
          </div>

          <h3 className="font-bold text-lg mb-1 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Action Button */}
          <Link
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 group text-sm font-medium"
          >
            <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Listen on Spotify</span>
            <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500/20 rounded-full blur-sm pulse-neon" />
      <div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500/10 rounded-full blur-md pulse-neon"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
