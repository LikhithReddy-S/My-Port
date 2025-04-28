"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function NavMenu() {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 640px)")

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 py-4 md:py-6 overflow-x-auto px-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "relative px-2 md:px-3 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap",
            pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-primary",
          )}
        >
          {item.name}
          {pathname === item.href && (
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </motion.nav>
  )
}
