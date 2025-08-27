import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { EnhancedCursor } from "@/components/enhanced-cursor"
import { EasterEggs } from "@/components/easter-eggs"
import { AmbientMusic } from "@/components/ambient-music"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Abhishek Bardhan | Exploring the world, one move at a time",
  description: "A next-gen blog about solo traveling and chess adventures by Abhishek Bardhan",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <EnhancedCursor />
          <EasterEggs />
          <Navigation />
          <main className="min-h-screen page-transition">{children}</main>
          <AmbientMusic />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
