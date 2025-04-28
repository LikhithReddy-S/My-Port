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
      title: "E-Learning Platform",
      description: "A comprehensive platform for online education with video courses, quizzes, and progress tracking.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/username/project1",
      demo: "https://project1.example.com",
    },
    {
      title: "AI Image Generator",
      description: "An application that uses machine learning to generate unique images based on text prompts.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Python", "TensorFlow", "Flask"],
      github: "https://github.com/username/project2",
      demo: "https://project2.example.com",
    },
    {
      title: "Personal Finance Tracker",
      description: "A tool to help users track expenses, set budgets, and visualize spending patterns.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/username/project3",
      demo: "https://project3.example.com",
    },
    {
      title: "Social Media Dashboard",
      description: "A unified dashboard to manage and analyze multiple social media accounts.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Firebase", "Chart.js"],
      github: "https://github.com/username/project4",
      demo: "https://project4.example.com",
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
