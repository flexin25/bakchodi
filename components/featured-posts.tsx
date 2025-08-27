import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animations"
import { TiltCard } from "@/components/tilt-card"
import { ParallaxSection } from "@/components/parallax-section"
import { blogPosts } from "@/lib/blog-data"

export function FeaturedPosts() {
  const featuredPosts = blogPosts.slice(0, 3) // Show only first 3 posts

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ParallaxSection speed={0.2}>
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Featured Stories
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Discover my latest blogs and stay tuned for more updates
            </p>
          </ScrollAnimation>
        </ParallaxSection>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => {
            return (
              <ScrollAnimation key={post.id} animation="fadeInUp" delay={index * 100}>
                <TiltCard className="h-full">
                  <Card className="group glass-card hover:bg-primary/5 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant={post.category === "Travel" ? "default" : "secondary"}
                          className="flex items-center space-x-1"
                        >
                          <span>{post.category}</span>
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300 text-balance">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-pretty">{post.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild variant="ghost" className="w-full group/btn">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </TiltCard>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* View all button */}
        <ScrollAnimation animation="scaleIn" className="text-center">
          <Button asChild size="lg" variant="outline" className="group glow-effect bg-transparent">
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  )
}
