import Link from "next/link"
import { Github, Twitter, Instagram, Crown } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/flexin25",
    icon: Github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/1mflexin_",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/flexin25_",
    icon: Instagram,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Crown className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-secondary/20 transition-colors duration-300" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Abhishek Bardhan
            </span>
          </Link>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">© 2025 Abhishek. All Rights Reserved.</div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
