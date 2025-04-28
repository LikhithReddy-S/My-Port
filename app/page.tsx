"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import NavMenu from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
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

      <motion.div className="container px-2 sm:px-4 py-6 md:py-12 lg:py-24" variants={container} initial="hidden" animate="show">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <motion.div variants={item}>
            <Image
              src="/profile-pic.jpg?height=400&width=400"
              alt="Student Profile"
              width={400}
              height={400}
              className="rounded-full mx-auto md:mx-0 border-4 border-primary/20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
            />
          </motion.div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Likhith reddy</span>
            </motion.h1>

            <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
              Computer Science Student
            </motion.h2>

            <motion.p variants={item} className="text-base md:text-lg text-muted-foreground">
              I'm a passionate computer science student at Amrita University , Passionate in Cyber security and
              artificial intelligence. I love building innovative solutions that solve real-world problems.
            </motion.p>

            <motion.div variants={item} className="flex gap-4 pt-4 justify-center md:justify-start">
              <Button asChild size="sm" className="sm:h-10 text-xs sm:text-sm">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="sm:h-10 text-xs sm:text-sm">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div variants={item} className="mt-12 md:mt-24 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm sm:text-base">
                I'm currently pursuing my Bachelor's degree in Computer Science, with a focus on Cyber Security and
                artificial intelligence. My journey in technology began when I was 19, building simple websites and
                games.
              </p>
              <p className="text-sm sm:text-base">
                Outside of academics, I enjoy participating in hackathons, contributing to open-source projects, and
                mentoring junior developers. I believe in the power of technology to create positive change in the
                world.
              </p>
              <p className="text-sm sm:text-base">
              I have a decent knack for computers and games. 
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold">My Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">JavaScript/TypeScript</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">React & Next.js</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">Node.js</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">Python</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">UI/UX Design</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">Machine Learning</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">Django</div>
                <div className="bg-muted p-2 md:p-3 rounded-md text-xs sm:text-sm">C / C++ / Java</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
