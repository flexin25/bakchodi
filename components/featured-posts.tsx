"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

export default function FeaturedPosts() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Featured Stories</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover my latest blogs and stay tuned for more updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, index) => (
          <article
            key={post.id}
            className="glass backdrop-blur-md rounded-xl overflow-hidden hover:glow transition-all duration-500 hover:scale-105 group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-sm text-primary font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-balance group-hover:text-glow transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-secondary/50 rounded text-xs text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button asChild variant="ghost" size="sm" className="group/btn">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline" className="glass hover:glow bg-transparent">
          <Link href="/blog">
            View All Posts
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
