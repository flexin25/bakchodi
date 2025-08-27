"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, MessageCircle, Send, CheckCircle, Crown, Plane, Globe } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "For collaborations and inquiries",
    value: "bardhanabhishek50@gmail.com",
    action: "mailto:bardhanabhishek50@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Social Media",
    description: "Follow my daily adventures",
    value: "@1mflexin_",
    action: "#",
  },
  {
    icon: MapPin,
    title: "Current Location",
    description: "Where I am right now",
    value: "Siliguri, West Bengal",
    action: "#",
  },
]

const topics = [
  { label: "Chess Discussion", icon: Crown, color: "primary" },
  { label: "Music & Hip Hop", icon: Globe, color: "secondary" },
  { label: "Collaboration", icon: Plane, color: "primary" },
  { label: "Data Science", icon: MessageCircle, color: "secondary" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    topic: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleTopicSelect = (topic: string) => {
    setFormData({
      ...formData,
      topic: formData.topic === topic ? "" : topic,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        topic: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Feel free to connect with me if you have any query or for any collaboration. Reach me out via other ways to
            reach me.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimation animation="fadeInLeft">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Topic Selection */}
                    <div>
                      <label className="text-sm font-medium mb-3 block">What would you like to discuss?</label>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((topic) => {
                          const Icon = topic.icon
                          const isSelected = formData.topic === topic.label
                          return (
                            <Badge
                              key={topic.label}
                              variant={isSelected ? "default" : "outline"}
                              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                                isSelected ? "glow-effect" : ""
                              }`}
                              onClick={() => handleTopicSelect(topic.label)}
                            >
                              <Icon className="h-3 w-3 mr-1" />
                              {topic.label}
                            </Badge>
                          )
                        })}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                        placeholder="Tell me more about what you'd like to discuss..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full group transition-all duration-500 ${
                        isSubmitted ? "bg-green-600 hover:bg-green-600" : isSubmitting ? "bg-primary/50" : "glow-effect"
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Message Sent!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <ScrollAnimation animation="fadeInRight">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Other Ways to Reach Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                      <div
                        key={method.title}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300 cursor-pointer group"
                      >
                        <Icon className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <h4 className="font-medium text-sm">{method.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{method.description}</p>
                          <p className="text-sm text-primary">{method.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Response Time */}
            <ScrollAnimation animation="fadeInRight" delay={100}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to messages within 24 hours, often much sooner!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* FAQ */}
            <ScrollAnimation animation="fadeInRight" delay={200}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h5 className="font-medium text-sm mb-1">Chess & Strategy</h5>
                    <p className="text-xs text-muted-foreground">
                      Let's discuss chess openings, tactics, and strategic thinking.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Music & Hip Hop</h5>
                    <p className="text-xs text-muted-foreground">
                      Share your favorite tracks and discover new desi hip hop artists.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Data Science</h5>
                    <p className="text-xs text-muted-foreground">
                      Collaborate on projects and discuss the latest in data science.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
