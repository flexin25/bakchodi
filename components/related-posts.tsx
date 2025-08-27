import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animations"
import { blogPosts, type BlogPost } from "@/lib/blog-data"

interface RelatedPostsProps {
  currentPost: BlogPost
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  // Find related posts based on category and tags
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      let score = 0

      // Same category gets higher score
      if (post.category === currentPost.category) {
        score += 3
      }

      // Shared tags get points
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag))
      score += sharedTags.length

      return { post, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <ScrollAnimation animation="fadeInUp" delay={300}>
      <div className="border-t border-border/50 pt-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Related Stories
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post, index) => {
            const Icon = post.category === "Travel" ? MapPin : Crown
            return (
              <ScrollAnimation key={post.id} animation="fadeInUp" delay={index * 100}>
                <Card className="group glass-card hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant={post.category === "Travel" ? "default" : "secondary"}
                        className="flex items-center space-x-1 text-xs"
                      >
                        <Icon className="h-2 w-2" />
                        <span>{post.category}</span>
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-xs line-clamp-2">{post.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button asChild variant="ghost" size="sm" className="w-full group/btn text-xs">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>
      </div>
    </ScrollAnimation>
  )
}
