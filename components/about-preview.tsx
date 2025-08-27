import { Button } from "@/components/ui/button"
import { Github, Twitter, Instagram, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  const socialLinks = [
    { icon: Github, label: "GitHub", username: "flexin25", url: "https://github.com/flexin25" },
    { icon: Twitter, label: "Twitter", username: "1mflexin_", url: "https://twitter.com/1mflexin_" },
    { icon: Instagram, label: "Instagram", username: "1mflexin_", url: "https://instagram.com/1mflexin_" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Myself
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Hi, I am Abhishek Bardhan a 19yo student of Techno India University pursuing B.Tech CSE Data Science. I am
              originally from the Hearts of Hills Siliguri, West Bengal.
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I love to listen music and artists like Radiohead, Linkin Park, Seedhe Maut, KRSNA, Raftaar etc. I have
              been a chess passionate kid since the age of 8 though I left competitive games for studies but it still
              has a special place in my DNA. I hope you'll find something useful outta here. Peace!
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group hover:bg-primary/5 transition-all duration-300 p-4 text-center rounded-lg"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-sm font-medium text-primary mb-1">{social.label}</div>
                    <div className="text-xs text-muted-foreground">@{social.username}</div>
                  </Link>
                )
              })}
            </div>

            <Button asChild size="lg" className="group">
              <Link href="/about">
                Learn More About Me
                <Crown className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/abhishek-banana-photo.png"
                alt="Abhishek Bardhan"
                width={500}
                height={600}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl pulse-neon" />
            <div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl pulse-neon"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
