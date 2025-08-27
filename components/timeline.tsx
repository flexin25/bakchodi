"use client"

import { ScrollAnimation } from "@/components/scroll-animations"
import { GraduationCap, BookOpen, Trophy } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Achievement {
  year: string
  title: string
  description: string
  icon: LucideIcon
}

const achievements: Achievement[] = [
  {
    year: "2012-2022",
    title: "Higher Secondary Schooling",
    description:
      "I completed my Higher Secondary Schooling from Don Bosco School, Siliguri. Gained Core knowledge all round in every stream.",
    icon: BookOpen,
  },
  {
    year: "2022-24",
    title: "10+2 Schooling",
    description:
      "I completed My 10+2 Schooling from Techno India Group Public School, Siliguri. Pursued PCM and gained core knowledge in Mathematics specially which led me to Choose Data Analytics or say Data Science.",
    icon: Trophy,
  },
  {
    year: "TIU'28",
    title: "B.Tech Data Science",
    description:
      "2024-2028 Currently Pursuing B.Tech Data Science in Techno India University aiming for achieving some great milestone soon chasing my dream.",
    icon: GraduationCap,
  },
]

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

      <div className="space-y-8">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          return (
            <ScrollAnimation
              key={achievement.year}
              animation="fadeInLeft"
              delay={index * 150}
              className="relative flex items-start space-x-6"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow-effect">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-8">
                <div className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl font-bold text-primary">{achievement.year}</span>
                    <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </div>
  )
}
