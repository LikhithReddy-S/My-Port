"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Gamifying Habit Tracker",
      description: "The Gamifying Habit Tracker is a web application designed to make habit tracking more engaging and fun. By incorporating gamification elements like streaks, rewards, and progress tracking, it motivates users to build positive habits consistently.",
      image: "/gamifying-habit-tracker.png?height=300&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/LikhithReddy-S/Gamifiying_habit_tracker",
      demo: "https://gamifiyinghabittracker.vercel.app/",
    },
    {
      title: "Game Hub",
      description: "An application that api to RAG gaming that fetches all data about games. This include search , sort system according to user preferenses",
      image: "/game-hub.png?height=300&width=600",
      tags: ["React", "Typescript", "Css", "Vite"],
      github: "https://github.com/LikhithReddy-S/game-hub",
      demo: "https://game-hub-gray-zeta.vercel.app/",
    },
    {
      title: "Personal Finance Tracker",
      description: "A tool to help users track expenses, set budgets, and visualize spending patterns.",
      image: "/expenses-tracker.png?height=300&width=600",
      tags: ["TypeScript", "Local storage"],
      github: "https://github.com/LikhithReddy-S/Expenses-Tracker",
      demo: "https://expenses-tracker-nine-rust.vercel.app/",
    },
    {
      title: "Social Media Dashboard",
      description: "A unified dashboard to manage and analyze multiple social Friends. There is an error while uploading in backend.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Django"],
      github: "https://github.com/LikhithReddy-S/React-and-python-Friends-Web-app",
      demo: "",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen">
      <NavMenu />

      <motion.div className="container px-2 sm:px-4 py-6 md:py-12" variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">My Projects</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience in my journey as a developer.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-[150px] sm:h-[200px] object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-3 sm:p-4 md:p-6 pt-0">
                  <CardDescription className="text-xs sm:text-sm md:text-base">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between p-3 sm:p-4 md:p-6">
                  <Button variant="outline" size="sm" asChild className="text-xs h-8">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="text-xs h-8">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
