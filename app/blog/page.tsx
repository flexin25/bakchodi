"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MapPin, Crown, Calendar, Search, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animations"
import { blogPosts } from "@/lib/blog-data"

const categories = ["All", "Travel", "Chess"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  // Filter posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

      const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchQuery, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog Stories
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Adventures from around the world and strategic insights from the chessboard
          </p>
        </ScrollAnimation>

        {/* Search and Filters */}
        <ScrollAnimation animation="fadeInUp" delay={100} className="mb-12">
          <div className="glass-card p-6 rounded-2xl">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Filter className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Categories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="transition-all duration-300"
                  >
                    {category === "Travel" && <MapPin className="h-3 w-3 mr-1" />}
                    {category === "Chess" && <Crown className="h-3 w-3 mr-1" />}
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm font-medium">Tags</span>
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedTags([])}
                    className="text-xs text-muted-foreground hover:text-primary"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Results count */}
        <ScrollAnimation animation="fadeInUp" delay={200} className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredPosts.length} of {blogPosts.length} posts
          </p>
        </ScrollAnimation>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => {
            const Icon = post.category === "Travel" ? MapPin : Crown
            return (
              <ScrollAnimation key={post.id} animation="fadeInUp" delay={index * 100}>
                <Card className="group glass-card hover:bg-primary/5 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 h-full interactive-hover">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={post.category === "Travel" ? "default" : "secondary"}
                        className="flex items-center space-x-1 glow-effect"
                      >
                        <Icon className="h-3 w-3" />
                        <span>{post.category}</span>
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300 text-balance line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-pretty line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 flex-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button asChild variant="ghost" className="w-full group/btn mt-auto">
                      <Link href={`/blog/${post.slug}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )
          })}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <ScrollAnimation animation="scaleIn" className="text-center py-12">
            <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedTags([])
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </div>
  )
}
