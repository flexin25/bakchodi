import Link from "next/link"
import { Github, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass backdrop-blur-md border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-glow">Abhishek Bardhan</h3>
            <p className="text-muted-foreground">
              B.Tech Data Science Student sharing thoughts on chess, music, and life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/flexin25"
                target="_blank"
                className="text-muted-foreground hover:text-primary hover:text-glow transition-all"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://twitter.com/1mflexin_"
                target="_blank"
                className="text-muted-foreground hover:text-primary hover:text-glow transition-all"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com/flexin25_"
                target="_blank"
                className="text-muted-foreground hover:text-primary hover:text-glow transition-all"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="mailto:bardhanabhishek50@gmail.com"
                className="text-muted-foreground hover:text-primary hover:text-glow transition-all"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Abhishek Bardhan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
