"use client"

import { motion } from "framer-motion"

const techStack = [
  "React",
  "Vue.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "AWS",
  "CI/CD",
  "Git",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vercel",
]

export function TechStackBanner() {
  // Duplicate the array to create seamless loop
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <div className="relative overflow-hidden bg-primary/5 border-y border-border py-5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-xl md:text-2xl font-bold text-muted-foreground/60"
          >
            <span>{tech}</span>
            <span className="text-primary">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

