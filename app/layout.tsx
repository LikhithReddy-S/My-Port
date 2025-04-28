import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SocialLinks from "@/components/social-links"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Student Portfolio",
  description: "A portfolio website showcasing student projects and resume",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SocialLinks />
          <div className="ml-10 md:ml-16">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
