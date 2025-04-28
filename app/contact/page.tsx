"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import NavMenu from "@/components/nav-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

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
        <motion.div variants={item} className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">Get In Touch</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my
            contact information.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          <motion.div variants={item}>
            <Card>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Contact Information</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Here are the ways you can reach me directly
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0 space-y-4 md:space-y-6">
                <motion.div
                  className="flex items-center gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <MapPin className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">Location</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Phone className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">Phone</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 md:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Mail className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-6 p-3 md:p-4 bg-muted rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-xs sm:text-sm">
                    Currently available for freelance work and internship opportunities. Let's create something amazing
                    together!
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg md:text-xl">Send Me a Message</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="text-xs sm:text-sm h-8 sm:h-10"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="text-xs sm:text-sm h-8 sm:h-10"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="subject" className="text-xs sm:text-sm">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                      className="text-xs sm:text-sm h-8 sm:h-10"
                    />
                  </div>

                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      required
                      className="text-xs sm:text-sm"
                    />
                  </div>

                  <Button type="submit" className="w-full h-8 sm:h-10 text-xs sm:text-sm" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
