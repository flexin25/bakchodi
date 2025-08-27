import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, MapPin, Crown, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"
import { ScrollAnimation } from "@/components/scroll-animations"
import { RelatedPosts } from "@/components/related-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const Icon = post.category === "Travel" ? MapPin : Crown

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <ScrollAnimation animation="fadeInLeft" className="mb-8">
          <Button asChild variant="ghost" className="group">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </Button>
        </ScrollAnimation>

        {/* Hero Image */}
        <ScrollAnimation animation="scaleIn" className="mb-8">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge
                variant={post.category === "Travel" ? "default" : "secondary"}
                className="flex items-center space-x-1 glow-effect"
              >
                <Icon className="h-3 w-3" />
                <span>{post.category}</span>
              </Badge>
            </div>
          </div>
        </ScrollAnimation>

        {/* Article Header */}
        <ScrollAnimation animation="fadeInUp" delay={100} className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {post.title}
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-6 text-pretty">{post.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="group">
              <Share2 className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
              Share
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-primary/10 transition-colors duration-300">
                {tag}
              </Badge>
            ))}
          </div>
        </ScrollAnimation>

        {/* Article Content */}
        <ScrollAnimation animation="fadeInUp" delay={200} className="mb-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="glass-card p-8 rounded-2xl">
              <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </ScrollAnimation>

        {/* Related Posts */}
        <RelatedPosts currentPost={post} />
      </div>
    </div>
  )
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each post
export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Solo Wanderer`,
    description: post.description,
  }
}
