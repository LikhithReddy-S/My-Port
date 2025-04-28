"use client"

import { motion } from "framer-motion"
import NavMenu from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2023 - Present",
      description:
        "Focusing on software engineering, artificial intelligence, and Quantum Computing. Current GPA: 3.0/4.0",
    },
    {
      degree: "High School",
      institution: "Narayana",
      period: "2016 - 2023",
      description: "Graduated with honors. Participated in national programming competitions. Jee Main - 97.49%",
    },
  ]

  const experience = [
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      period: "2025 - Present",
      description:
        "Building custom websites and web applications for small businesses and startups. Managing client relationships and project timelines.",
    },
    {
      position: "Anokha 2024 Co-Lead",
      company: "College-Event",
      period: "2024 Aug-Sep",
      description:
        "Managed WhatsApp groups to coordinate with volunteers, ensuring effective communication,scheduling meetings, and monitoring attendance Led the event Quest Nexus,managing volunteers to locate and photograph 95 campus locations for clue placement. Designed QR codes for each location, guiding players to the next clue and awarding PC parts as prizes to assemble a complete PC at the end of the event.",
    },
  ]

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2025",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2025",
    },
    {
      name: "Google Cybersecurity Certified",
      issuer: "Coursera - Google",
      date: "2024",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 md:mb-12 gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center sm:text-left">Resume</h1>
            <p className="text-muted-foreground mt-2 text-sm md:text-base text-center sm:text-left">
              My academic and professional journey
            </p>
          </div>
          <Button asChild size="sm" className="sm:h-10 text-xs sm:text-sm">
            <Link href="/likhith_resume.pdf" download>
              <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Download CV
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          <motion.section variants={item}>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Education</h2>
            </div>
            <div className="grid gap-4 md:gap-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card>
                    <CardHeader className="p-3 sm:p-4 md:p-6 pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                        <CardTitle className="text-base sm:text-lg md:text-xl">{item.degree}</CardTitle>
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="font-medium text-primary text-sm md:text-base">{item.institution}</p>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-6 pt-0 text-xs sm:text-sm md:text-base">
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item}>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
            </div>
            <div className="grid gap-4 md:gap-6">
              {experience.map((item, index) => (
                <motion.div
                  key={item.position}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card>
                    <CardHeader className="p-3 sm:p-4 md:p-6 pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
                        <CardTitle className="text-base sm:text-lg md:text-xl">{item.position}</CardTitle>
                        <span className="text-xs sm:text-sm text-muted-foreground">{item.period}</span>
                      </div>
                      <p className="font-medium text-primary text-sm md:text-base">{item.company}</p>
                    </CardHeader>
                    <CardContent className="p-3 sm:p-4 md:p-6 pt-0 text-xs sm:text-sm md:text-base">
                      <p>{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item}>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Certifications</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card>
                    <CardHeader className="p-3 sm:p-4 md:p-6">
                      <CardTitle className="text-sm sm:text-base md:text-lg">{item.name}</CardTitle>
                      <div className="flex justify-between items-center">
                        <p className="text-primary text-xs sm:text-sm">{item.issuer}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  )
}
