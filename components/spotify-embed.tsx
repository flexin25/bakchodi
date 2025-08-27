"use client"

import { useState } from "react"
import { ExternalLink, Music, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SpotifyEmbed() {
  const [isHovered, setIsHovered] = useState(false)

  const sampleTracks = [
    { title: "Creep", artist: "Radiohead" },
    { title: "In The End", artist: "Linkin Park" },
    { title: "Namastute", artist: "Seedhe Maut" },
    { title: "No Cap", artist: "KR$NA" },
    { title: "Swag Mera Desi", artist: "Raftaar" },
  ]

  return (
    <div
      className="glass backdrop-blur-md rounded-xl p-6 hover:glow transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        window.open("https://open.spotify.com/playlist/1kiZilbd4M1M36m2Wgy7Ou?si=fd0360ff8fec4873", "_blank")
      }
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <Music className="text-white" size={24} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg text-glow">My Playlist</h3>
            <ExternalLink size={16} className="text-muted-foreground" />
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            A mix of alternative rock, hip hop, and desi rap that defines my taste
          </p>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Featured Tracks:</h4>
            {sampleTracks.map((track, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Play size={12} className="text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium truncate">{track.title}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground truncate">{track.artist}</span>
              </div>
            ))}
          </div>

          <Button variant="outline" size="sm" className={`mt-4 transition-all duration-300 ${isHovered ? "glow" : ""}`}>
            <Music size={14} className="mr-2" />
            Listen on Spotify
          </Button>
        </div>
      </div>
    </div>
  )
}
