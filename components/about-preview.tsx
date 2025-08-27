"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotifyEmbed from "@/components/spotify-embed"

export default function AboutPreview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">About Myself</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Hi, I am Abhishek Bardhan a 19yo student of Techno India University pursuing B.Tech CSE Data Science. I
                am originally from the Hearts of Hills Siliguri, West Bengal.
              </p>
              <p>I hope you'll find something useful outta here. Peace!</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-glow">Connect With Me</h3>
            <p className="text-muted-foreground">
              Feel free to connect with me if you have any query or for any collaboration. Reach me out!
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Mail size={16} />
                  Email
                </div>
                <Link
                  href="mailto:bardhanabhishek50@gmail.com"
                  className="text-primary hover:text-glow transition-colors"
                >
                  bardhanabhishek50@gmail.com
                </Link>
              </div>

              <div className="glass backdrop-blur-md p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <MapPin size={16} />
                  Location
                </div>
                <span className="text-foreground">Siliguri, West Bengal</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Other ways to reach me</h4>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/flexin25"
                  target="_blank"
                  className="flex items-center gap-2 glass backdrop-blur-md px-4 py-2 rounded-lg hover:glow transition-all"
                >
                  <Github size={20} />
                  <span>flexin25</span>
                </Link>
                <Link
                  href="https://twitter.com/1mflexin_"
                  target="_blank"
                  className="flex items-center gap-2 glass backdrop-blur-md px-4 py-2 rounded-lg hover:glow transition-all"
                >
                  <Twitter size={20} />
                  <span>1mflexin_</span>
                </Link>
                <Link
                  href="https://instagram.com/flexin25_"
                  target="_blank"
                  className="flex items-center gap-2 glass backdrop-blur-md px-4 py-2 rounded-lg hover:glow transition-all"
                >
                  <Instagram size={20} />
                  <span>flexin25_</span>
                </Link>
              </div>
            </div>

            <Button asChild size="lg" className="glow hover:pulse-glow">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <Image
              src="/abhishek-banana-photo.png"
              alt="Abhishek Bardhan"
              width={400}
              height={400}
              className="rounded-2xl glass backdrop-blur-md p-4 hover:glow transition-all duration-500"
            />
          </div>

          <SpotifyEmbed />
        </div>
      </div>
    </section>
  )
}
