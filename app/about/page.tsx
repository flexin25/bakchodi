import { Button } from "@/components/ui/button"
import { Github, Twitter, Instagram, ExternalLink, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Timeline } from "@/components/timeline"
import { SpotifyEmbed } from "@/components/spotify-embed"

const socialLinks = [
  {
    name: "GitHub",
    username: "flexin25",
    url: "https://github.com/flexin25",
    icon: Github,
    description: "Code & Projects",
  },
  {
    name: "Twitter",
    username: "1mflexin_",
    url: "https://twitter.com/1mflexin_",
    icon: Twitter,
    description: "Thoughts & Updates",
  },
  {
    name: "Instagram",
    username: "1mflexin_",
    url: "https://instagram.com/1mflexin_",
    icon: Instagram,
    description: "Travel & Life",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Myself
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hi, I am Abhishek Bardhan a 19yo student of Techno India University pursuing B.Tech CSE Data Science. I am
            originally from the Hearts of Hills Siliguri, West Bengal. I hope you'll find something useful outta here.
            Peace!
          </p>
        </ScrollAnimation>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Story Section */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="fadeInLeft">
              <div className="glass-card p-8 rounded-2xl mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">My Story</h2>

                <div className="space-y-6 text-foreground leading-relaxed">
                  <p>
                    What's good! I'm Abhishek, a 19-year-old B.Tech CSE Data Science student at Techno India University,
                    Kolkata. Born and raised in Siliguri, West Bengal - right in the heart of the hills where the
                    mountains meet the plains.
                  </p>

                  <p>
                    I love to listen music and artists like Radiohead, Linkin Park, Seedhe Maut, KRSNA, Raftaar etc.
                    Their diverse styles from alternative rock to desi hip hop have shaped my understanding of rhythm,
                    emotion, and storytelling through music.
                  </p>

                  <p>
                    I have been a chess passionate kid since the age of 8 though I left competitive games for studies
                    but it still has a special place in my DNA. Every position tells a story, every move carries the
                    weight of strategic thinking that extends far beyond the 64 squares.
                  </p>

                  <p>
                    Being from Siliguri means I'm blessed with the Himalayas as my backyard. My recent winter trip to
                    Darjeeling was a game-changer - it made me realize that sometimes the most profound journeys begin
                    closest to home. The misty mornings, tea gardens, and mountain railways created memories I'll
                    treasure forever.
                  </p>

                  <p>
                    As a Data Science student, I'm fascinated by patterns everywhere - in chess positions, in the flow
                    of my favorite artists, in travel routes, and in data sets. This blog is where all these passions
                    converge, creating a space where strategy meets creativity, and every story has layers to uncover.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Spotify Embed */}
            <ScrollAnimation animation="fadeInLeft" delay={200}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary">My Music Taste</h3>
                <SpotifyEmbed
                  playlistUrl="https://open.spotify.com/playlist/1kiZilbd4M1M36m2Wgy7Ou?si=fd0360ff8fec4873"
                  title="Abhishek's Vibes"
                  description="From Radiohead to Seedhe Maut - this playlist defines my musical DNA. Hip hop, alternative rock, and everything that hits different."
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Image */}
            <ScrollAnimation animation="fadeInRight">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/abhishek-banana-photo.png"
                    alt="Abhishek Bardhan"
                    width={400}
                    height={500}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl pulse-neon" />
                <div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl pulse-neon"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </ScrollAnimation>

            {/* Social Links */}
            <ScrollAnimation animation="fadeInRight" delay={100}>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4 text-primary">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                      >
                        <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs text-muted-foreground">@{social.username}</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </ScrollAnimation>

            {/* Email Subscribe */}
            <ScrollAnimation animation="fadeInRight" delay={150}>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4 text-primary">Subscribe via Email</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified when I drop new blogs about chess, travel, and hip hop!
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  <Button size="sm" className="w-full group">
                    <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Current Status */}
            <ScrollAnimation animation="fadeInRight" delay={200}>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4 text-primary">Currently</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm">Studying at TIU Kolkata</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm">Learning Data Science</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-sm">Cooking up in Chess also Music</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                    <span className="text-sm">Writing Poetry Shorts Stories and Novel in progress</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Timeline Section */}
        <ScrollAnimation animation="fadeInUp" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Education
            </span>
          </h2>
          <Timeline />
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="scaleIn" className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Feel free to connect with me!</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              If you have any query or for any collaboration reach me out via other ways to reach me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group glow-effect">
                <Link href="mailto:bardhanabhishek50@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <Link href="/blog">
                  Read My Stories
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">📍 Siliguri, West Bengal</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}
