import Hero from "@/components/hero"
import FeaturedPosts from "@/components/featured-posts"
import AboutPreview from "@/components/about-preview"
import ThreeBackground from "@/components/three-background"

export default function HomePage() {
  return (
    <div className="relative">
      <ThreeBackground />
      <Hero />
      <FeaturedPosts />
      <AboutPreview />
    </div>
  )
}
