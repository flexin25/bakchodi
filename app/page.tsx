import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { AboutPreview } from "@/components/about-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPosts />
      <AboutPreview />
    </div>
  )
}
