"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function SocialLinks() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4 md:h-5 md:w-5" />,
      href: "https://github.com/LikhithReddy-S",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />,
      href: "https://www.linkedin.com/in/likhithreddys/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4 md:h-5 md:w-5" />,
      href: "https://x.com/likhithreddy22",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4 md:h-5 md:w-5" />,
      href: "https://www.instagram.com/likhith__22/",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4 md:h-5 md:w-5" />,
      href: "mailto:slikhithreddy22@gmail.com",
    },
  ];

  return (
    <motion.div
      className="fixed left-0 top-0 bottom-0 w-10 md:w-16 bg-background border-r z-50 flex flex-col items-center justify-center gap-4 md:gap-6"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TooltipProvider>
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size={isMobile ? "sm" : "icon"}
                  asChild
                  className="rounded-full h-8 w-8 md:h-10 md:w-10"
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </TooltipProvider>
    </motion.div>
  );
}
